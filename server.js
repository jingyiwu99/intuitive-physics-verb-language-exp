const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Base directory for saved data
// Locally: defaults to "./data"
// On Render: set DATA_DIR=/var/data/exp (mounted disk)
const DATA_ROOT = path.resolve(process.env.DATA_DIR || 'data');

// --- helpers ---
function resolveSafePath(base, ...parts) {
    const p = path.resolve(base, ...parts);
    if (!p.startsWith(base + path.sep) && p !== base) {
        // prevent writing outside DATA_ROOT
        throw new Error('Invalid path (outside DATA_ROOT)');
    }
    return p;
}
function ensureDirSync(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true, mode: 0o777 });
    }
}

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());

// Serve static files (HTML, CSS, JS, media)
app.use(express.static('public'));

// Main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Save trial/visit/attrition/etc. data (append)
app.post('/save-data', (req, res) => {
    try {
        const { directory_path, file_name, data } = req.body || {};
        if (!directory_path || !file_name || typeof data !== 'string') {
            return res.status(400).type('text/plain').send('Missing fields');
        }

        const fullDirPath = resolveSafePath(DATA_ROOT, directory_path);
        ensureDirSync(fullDirPath);

        const filePath = resolveSafePath(fullDirPath, file_name);
        // Append with newline if not present
        const toWrite = data.endsWith('\n') ? data : data + '\n';
        fs.appendFileSync(filePath, toWrite, { encoding: 'utf8' });

        console.log(`✅ Saved: ${path.relative(DATA_ROOT, filePath)}`);
        res.type('text/plain').send('Data saved successfully');
    } catch (error) {
        console.error('❌ Error saving data:', error);
        res.status(500).type('text/plain').send('Error saving data');
    }
});

// Get & increment subject number
app.post('/get-subject-number', (req, res) => {
    try {
        const { directory_path, file_name } = req.body || {};
        if (!directory_path || !file_name) {
            return res.status(400).type('text/plain').send('Missing fields');
        }

        const fullDirPath = resolveSafePath(DATA_ROOT, directory_path);
        ensureDirSync(fullDirPath);

        const filePath = resolveSafePath(fullDirPath, file_name);
        let subjNum = 1;

        if (fs.existsSync(filePath)) {
            try {
                const currentNum = fs.readFileSync(filePath, 'utf8').trim();
                const parsed = parseInt(currentNum, 10);
                subjNum = Number.isFinite(parsed) ? parsed + 1 : 1;
            } catch {
                subjNum = 1;
            }
        }

        fs.writeFileSync(filePath, String(subjNum), { encoding: 'utf8' });

        console.log(`📊 Subject number → ${subjNum} (file: ${path.relative(DATA_ROOT, filePath)})`);
        res.type('text/plain').send(String(subjNum));
    } catch (error) {
        console.error('❌ Error generating subject number:', error);
        res.status(500).type('text/plain').send('1'); // safe fallback
    }
});

// Health/status
app.get('/status', (req, res) => {
    res.json({
        status: 'running',
        uptime_sec: process.uptime(),
        data_root: DATA_ROOT,
        timestamp: new Date().toISOString(),
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).type('text/plain').send('Internal server error');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Experiment server running on port ${PORT}`);
    console.log(`🌐 http://localhost:${PORT}`);
    console.log(`📁 DATA_ROOT: ${DATA_ROOT}`);
});
