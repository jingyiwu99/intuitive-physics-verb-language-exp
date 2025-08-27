const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const DATA_ROOT = process.env.DATA_DIR || 'data'; // default local 'data' for dev

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: '50mb' })); // Handle large data files
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());

// Serve static files (HTML, CSS, JS, media)
app.use(express.static('public'));

// Route to serve your main experiment page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to replace save.php - saves data to specified directory/file
app.post('/save-data', (req, res) => {
    try {
        const { directory_path, file_name, data } = req.body;

        // Create directory if it doesn't exist (same as PHP mkdir)
        const fullDirPath = path.join(__dirname, DATA_ROOT, directory_path);
        if (!fs.existsSync(fullDirPath)) {
            fs.mkdirSync(fullDirPath, { recursive: true, mode: 0o777 });
        }

        // Append data to file (same as PHP fopen with 'a' mode)
        const filePath = path.join(fullDirPath, file_name);
        fs.appendFileSync(filePath, data);

        console.log(`✅ Data saved to: ${directory_path}/${file_name}`);
        res.setHeader('Content-Type', 'text/plain');
        res.send('Data saved successfully');

    } catch (error) {
        console.error('❌ Error saving data:', error);
        res.status(500).setHeader('Content-Type', 'text/plain');
        res.send('Error saving data');
    }
});

// Route to replace subjNum.php - gets and increments subject number
app.post('/get-subject-number', (req, res) => {
    try {
        const { directory_path, file_name } = req.body;

        const fullDirPath = path.join(__dirname, DATA_ROOT, directory_path);
        const filePath = path.join(fullDirPath, file_name);

        let subjNum = 1;

        // Read current subject number if file exists
        if (fs.existsSync(filePath)) {
            try {
                const currentNum = fs.readFileSync(filePath, 'utf8');
                subjNum = parseInt(currentNum.trim()) + 1;
            } catch (readError) {
                console.log('Could not read subject number file, starting from 1');
                subjNum = 1;
            }
        }

        // Create directory if it doesn't exist
        if (!fs.existsSync(fullDirPath)) {
            fs.mkdirSync(fullDirPath, { recursive: true, mode: 0o777 });
        }

        // Write the new subject number to file
        fs.writeFileSync(filePath, subjNum.toString());

        console.log(`📊 Subject number generated: ${subjNum}`);
        res.setHeader('Content-Type', 'text/plain');
        res.send(subjNum.toString());

    } catch (error) {
        console.error('❌ Error generating subject number:', error);
        res.status(500).setHeader('Content-Type', 'text/plain');
        res.send('1'); // Fallback to 1 if error
    }
});

// Additional utility routes (optional)
app.get('/status', (req, res) => {
    res.json({
        status: 'running',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).setHeader('Content-Type', 'text/plain');
    res.send('Internal server error');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Experiment server running on port ${PORT}`);
    console.log(`🌐 Access your experiment at: http://localhost:${PORT}`);
    console.log(`📁 Files will be saved relative to server directory`);
});