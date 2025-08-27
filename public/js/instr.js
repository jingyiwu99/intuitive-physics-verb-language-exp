// Jing-Yi Wu
class Instructions {
    constructor(options = {}) {
        this.options = options;
        Object.assign(this, {
            arr: [],
            funcDict: {},
        }, options);
        this.index = 0;
        // this.instrKeys = Object.keys(this.funcDict).map(Number);
        this.quizAttemptN = 1;
        this.readingTimes = {};
    }

    start(textBox = $("#instr-box"), textElement = $("#instr-text")) {
        const current = this.arr[this.index];
        if (current && Array.isArray(current)) {
            // ✅ Function to run before showing the instruction
            if (current[0] && typeof current[0] === "function") {
                current[0]();
            }

            // ✅ Show the instruction text
            textElement.html(current[2] || "⚠️ No text found for instruction.");

            // ✅ Function to run after showing the instruction
            if (current[1] && typeof current[1] === "function") {
                current[1]();
            }
        }
        // if (this.instrKeys.includes(this.index)) {
        //     this.funcDict[this.index]();
        // }
        textBox.show();
        this.startTimer();
    }


    next(textElement = $("#instr-text")) {
        this.endTimer();
        this.saveReadingTime();

        // ✅ Special: Retry logic — check before moving forward
        if (this.index === 13 && window.retryPractice) {
            window.retryPractice = false;
            this.index = 6;    // So when ++, it becomes 7
            return this.next(textElement);
        }

        this.index += 1;

        if (this.index < this.arr.length) {
            const current = this.arr[this.index];
            if (current && Array.isArray(current)) {
                // ✅ Run function BEFORE showing instruction
                if (current[0] && typeof current[0] === "function") {
                    current[0]();
                }

                // ✅ Show instruction text
                textElement.html(current[2] || "⚠️ No text found for instruction.");

                // ✅ Run function AFTER showing instruction
                if (current[1] && typeof current[1] === "function") {
                    current[1]();
                }
            }

        } else {
            $("#instr-box").hide();
            // Optional: trigger next phase here
        }
    }


    startTimer() {
        this.startTime = Date.now();
    }

    endTimer() {
        this.endTime = Date.now();
        this.readingDuration = (this.endTime - this.startTime) / 1000;
    }

    saveReadingTime() {
        if (typeof this.readingTimes[this.index] === 'undefined') {
            this.readingTimes[this.index] = this.readingDuration;
        } else {
            if (this.readingTimes[this.index] < this.readingDuration) {
                this.readingTimes[this.index] = this.readingDuration;
            }
        }
    }
}