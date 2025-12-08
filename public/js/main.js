// ######## ##     ## ########  ########
// ##        ##   ##  ##     ##    ##
// ##         ## ##   ##     ##    ##
// ######      ###    ########     ##
// ##         ## ##   ##           ##
// ##        ##   ##  ##           ##
// ######## ##     ## ##           ##

// data saving
const FORMAL = true;
const EXPERIMENT_NAME = 'VerbCategorization_pureLanguage';
const SUBJ_NUM_SCRIPT = '/get-subject-number';
const SAVING_SCRIPT = '/save-data';
const VISIT_FILE = 'visit_' + EXPERIMENT_NAME + '.txt';
const SUBJ_NUM_FILE = 'subjNum_' + EXPERIMENT_NAME + '.txt';
const ATTRITION_FILE = 'attrition_' + EXPERIMENT_NAME + '.txt';
const TASK_FILE = 'task_' + EXPERIMENT_NAME + '.txt';
// const RATING_FILE = 'rating_' + EXPERIMENT_NAME + '.txt';
const SUBJ_FILE = 'subj_' + EXPERIMENT_NAME + '.txt';
const SAVING_DIR = FORMAL ? 'jingyi/'+EXPERIMENT_NAME+'/formal' : 'jingyi/'+EXPERIMENT_NAME+'/testing';
const ID_GET_VARIABLE_NAME = 'PROLIFIC_PID';
const COMPLETION_URL = 'https://app.prolific.com/submissions/complete?cc=XXXXXXXX';

// stimuli
const STIM_PATH = 'media/';
const PRACTICE_LEARNING_LIST = [
    'practice_learning_cat.jpg', 'practice_learning_cat2.jpg', 'practice_learning_panda.jpg',
    'practice_learning_panda2.jpg', 'practice_learning_horse.jpg', 'practice_learning_horse2.jpg',];
const PRACTICE_TESTING_LIST = [
    { file: "practice_testing_tiger.jpg", correct: "yes" },
    { file: "practice_testing_butterfly.jpg", correct: "no" },
    { file: "practice_testing_chicken.jpg", correct: "no" },
    { file: "practice_testing_fish.jpg", correct: "no" }
];

const EXPERIMENT_VIDEOS = {
    class1: {
        lift: ["Alex lifts a stack of towels to the shelf.", "Anna lifts a dumbbell to her shoulder.",
            "Brian lifts a box with both hands.", "Emily lifts a plastic bag from the table."],
        lower: ["David lowers a cup onto the table.", "Grace lowers a bowl by the rim.",
            "Eric lowers a bag from the counter.", "Jessica lowers a stuffed animal a few inches."],
        pull: ["Jason pulls the door open.", "Laura pulls a loose thread from her sweater.",
            "Kevin pulls the laptop closer.", "Megan pulls luggage across the hallway."],
        push: ["Mark pushes a wheeled chair across the room.", "Rachel pushes a pile of clothes to the other side.",
            "Nathan pushes a stack of hardcover books farther.", "Sarah pushes the door with her elbow."],
        tote: ["Ryan totes a heavy backpack across the street.", "Tina totes a bulky shopping bag to the car.",
            "Thomas totes a bucket filled with water a few steps.", "Vanessa totes a stuffed bag by its handles."]
    },
    class2: {
        flick: ["Anna flicks a bread crumb with her fingers.", "Alex flicks a marble across the floor.",
            "Brian flicks a piece of dirt off his shirt.", "Emily flicks a small crumpled paper ball toward the trash bin."],
        kick: ["David kicks the soccer ball across the field.", "Grace kicks an inflatable ball into the air.",
            "Eric kicks an empty bottle under the bench.", "Jessica kicks the door ajar."],
        shove: ["Jason shoves a shopping cart toward the entrance.", "Laura shoves the heavy gate open.",
            "Kevin shoves the punching bag against the wall.", "Megan shoves a freestanding sign over."],
        slide: ["Mark slides a notebook across a table.", "Rachel slides an ice cube to the edge of the table.",
            "Nathan slides a pen into the box.", "Sarah slides a bar of soap next to the sink."],
        throw: ["Ryan throws a notebook into his backpack.", "Tina throws a tea bag away.",
            "Thomas throws the paper airplane across the room.", "Vanessa throws glitter with both hands."]
    },
    class3:{
        fasten: ["Anna fastens the straps of the helmet under her chin.", "Alex fastens the seat belt securely.",
            "Brian fastens the top of the trash bag shut.", "Emily fastens an apron around her waist."],
        pin: ["David pins the extra fabric tightly.", "Grace pins a sheet of paper with a thumbtack.",
            "Eric pins a name tag to his shirt.", "Jessica pins the photos on the bulletin board."],
        stick: ["Jason sticks the sticker on the cover of the notebook.", "Laura sticks a playing card to her forehead.",
            "Kevin sticks an adhesive hook to the wall.", "Megan sticks a Post-it note on the screen."],
        strap: ["Mark straps a suitcase with a luggage strap.", "Rachel straps a stuffed animal to a chair.",
            "Nathan straps a pile of books together.", "Sarah straps a box on."],
        tape: ["Ryan tapes a piece of paper to the wall.", "Tina tapes a small box closed.",
            "Thomas tapes a torn page back into the damaged notebook.", "Vanessa tapes a leaf with clear tape."]
    },
    class4: {
        chip: ["Alex chips a piece off the chocolate bar.", "Anna chips the wood with a chisel.",
            "Brian chips plaster onto the table.", "Emily chips the stone block to pieces."],
        crush: ["David crushes an empty can completely.", "Grace crushes a cracker on the plate.",
            "Eric crushes a paper cup with his foot.", "Jessica crushes origami into a crumpled ball."],
        rip: ["Jason rips a sheet of paper in half.", "Laura rips a piece of cloth with both hands.",
            "Kevin rips an envelope along the perforated line.", "Megan rips petals off of a flower."],
        shatter: ["Mark shatters a vase by accident.", "Rachel shatters a mirror against the wall.",
            "Nathan shatters a glass bottle with great force.", "Sarah shatters a porcelain spoon into pieces."],
        snap: ["Ryan snaps a chopstick in anger.", "Tina snaps a stick with both hands.",
            "Thomas snaps a cookie in half.", "Vanessa snaps a piece of bread in two."]
    }
};

const FLATTENED_EXPERIMENT_VIDEOS = {};
for (let cls in EXPERIMENT_VIDEOS) {
    for (let verb in EXPERIMENT_VIDEOS[cls]) {
        FLATTENED_EXPERIMENT_VIDEOS[verb] = EXPERIMENT_VIDEOS[cls][verb];
    }
}


// const ExperimentTasks = new Task({
//     //subj: subj,
//     titles: ["subj", "trialNum", "verb", "phase", "file", "rt", "response"],
//     // dataFile: `subj${subj.num}_data.txt`,
//     savingScript: "php/save.php",
//     savingDir: "data/exp_results",
//     videoDict: EXPERIMENT_VIDEOS, // 👈 pass it in
//     updateFunc: renderTrialScreen,
//     trialFunc: trialFunc,
//     endExptFunc: endFunc,
// });


// const RATING_PRACTICE_TRIAL_N = PRACTICE_LEARNING_LIST.length;
// const RATING_LIST = [
//     'eating_alone.jpg', 'eating_group.jpg',
//     'working_alone.jpg', 'working_group.jpg',
//     'interviewing_alone.jpg', 'interviewing_group.jpg'
// ];
// const RATING_IMG_LIST = shuffle_array(RATING_LIST);
// const RATING_TRIAL_N = RATING_IMG_LIST.length;
// const RATING_INSTR_TRIAL_N = RATING_PRACTICE_TRIAL_N + RATING_TRIAL_N;
const INTERTRIAL_INTERVAL = 0.5;
const INSTR_IMG_LIST = ['maximize_window.png'];
const ALL_IMG_LIST = PRACTICE_LEARNING_LIST.concat(PRACTICE_TESTING_LIST).concat(INSTR_IMG_LIST);

PracticeLearningTrials = 6
PracticeTestingTrials = 4
ExpLearningTrials = 6
ExpTestingNumber = 17


// object variables
var subj, instr;
let practiceCounts = 0;

// criteria
const VIEWPORT_MIN_W = 800;
const VIEWPORT_MIN_H = 600;
const INSTR_READING_TIME_MIN = 0.3;


// ____  _____    _    ______   __
// |  _ \| ____|  / \  |  _ \ \ / /
// | |_) |  _|   / _ \ | | | \ V /
// |  _ <| |___ / ___ \| |_| || |
// |_| \_\_____/_/   \_\____/ |_|

$(document).ready(function() {
    subj = new Subject(subj_options);
    subj.id = subj.getID(ID_GET_VARIABLE_NAME);
    console.log(subj.id);
    // if (!subj.id) {
    //     subj.id = 'testuser';
    //     subj.validID = true;
    // }// if part is for testing on local server, needed to be removed later

    subj.saveVisit();
    if (subj.phone) {
        halt_experiment('It seems that you are using a touchscreen device or a phone. Please use a laptop or desktop instead.<br /><br />If you believe you have received this message in error, please contact the experimenter at yichiachen@ucla.edu<br /><br />Otherwise, please switch to a laptop or a desktop computer for this experiment.');
    } else if (subj.validID){
        load_img(0, STIM_PATH, ALL_IMG_LIST);
        instr = new Instructions(instr_options);
        instr.start();
    }
    $('#instr-box').show()
});

function halt_experiment(explanation) {
    $('.page-box').hide();
    $('#instr-text').html(explanation);
    $('#next-button').hide();
    $('#instr-box').show();
}

function ajax_failed() {
    halt_experiment('SERVER ERROR: Please email jingyiwu99@g.ucla.edu with the message "AJAX-ERR" to receive credit.');
}

// ____  _   _ ____      _ _____ ____ _____
// / ___|| | | | __ )    | | ____/ ___|_   _|
//  \___ \| | | |  _ \ _  | |  _|| |     | |
// ___) | |_| | |_) | |_| | |__| |___  | |
// |____/ \___/|____/ \___/|_____\____| |_|


const SUBJ_TITLES = [
    // system data
    'num',
    'date',
    'startTime',
    'id',
    'userAgent',
    'endTime',
    'duration',
    // behavioral data
    'quizAttemptN',
    'instrReadingTimes',
    'quickReadingPageN',
    'hiddenCount',
    'hiddenDurations',
    'practiceCounts',
    // debriefing questions
    'technical_issues',
    'experiment_purpose',
    'strategy',
    'first_language',
    'primary_language',
    'gender',
    'age',
    'inView',
    'viewportW',
    'viewportH'
];

function update_task_object_subj_num() {
    if (typeof ExperimentTasks !== 'undefined'){
        ExperimentTasks.num = subj.num;
    }
} //need to check again

function submit_debriefing_questions() {
    const OPEN_ENDED_ATTRIBUTE_NAMES = ['technical_issues', 'experiment_purpose', 'strategy', 'first_language', 'primary_language', 'age'];
    const CHOICE_ATTRIBUTE_NAMES = ['gender'];
    const ALL_RESPONDED = show_hide_warnings(OPEN_ENDED_ATTRIBUTE_NAMES, CHOICE_ATTRIBUTE_NAMES);
    if (ALL_RESPONDED) {
        for (let a of OPEN_ENDED_ATTRIBUTE_NAMES) {
            subj[a] = subj[a].replace(/(?:\r\n|\r|\n)/g, '<br />');
        }
        subj.quizAttemptN = instr.quizAttemptN['onlyQ'];
        subj.instrReadingTimes = JSON.stringify(instr.readingTimes);
        subj.quickReadingPageN = Object.values(instr.readingTimes).filter(d => d < INSTR_READING_TIME_MIN).length;
        subj.submitQ();
        $('#questions-box').hide();
        exit_fullscreen();
        allow_selection();
        $('#debriefing-box').show();
        $('body').scrollTop(0);
    }
}

function show_hide_warnings(open_ended_names, choice_names, number_names = []) {
    let all_responded = true;

    // Handle open-ended textareas
    for (let q of open_ended_names) {
        const value = $('#' + q).val().trim();
        subj[q] = value;
        const warningId = '#' + q + '-warning';

        if (!value) {
            $(warningId).show();
            all_responded = false;
        } else {
            $(warningId).hide();
        }
    }

    // Handle radio or multiple choice
    for (let q of choice_names) {
        const selected = $(`input[name='${q}']:checked`).val();
        subj[q] = selected;
        const warningId = '#' + q + '-warning';

        if (!selected) {
            $(warningId).show();
            all_responded = false;
        } else {
            $(warningId).hide();
        }
    }

    // Handle numeric inputs (e.g., age)
    for (let q of number_names) {
        const val = parseInt($('#' + q).val());
        subj[q] = val;
        const warningId = '#' + q + '-warning';

        if (isNaN(val) || val < 0 || val > 150) {
            $(warningId).show();
            all_responded = false;
        } else {
            $(warningId).hide();
        }
    }

    if (!all_responded) {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }

    return all_responded;
}


function allow_selection() {
    $('body').css({
        '-webkit-user-select':'text',
        '-moz-user-select':'text',
        '-ms-user-select':'text',
        'user-select':'text'
    });
}

function go_to_completion_page() {
    window.location.href = COMPLETION_URL+'?id='+subj.id;
}

var subj_options = {
    titles: SUBJ_TITLES,
    viewportMinW: VIEWPORT_MIN_W,
    viewportMinH: VIEWPORT_MIN_H,
    subjNumCallback: update_task_object_subj_num,
    practiceCounts: practiceCounts,
    subjNumScript: SUBJ_NUM_SCRIPT,
    savingScript: SAVING_SCRIPT,
    subjNumFile: SUBJ_NUM_FILE,
    visitFile: VISIT_FILE,
    attritionFile: ATTRITION_FILE,
    subjFile: SUBJ_FILE,
    taskFile: TASK_FILE,
    savingDir: SAVING_DIR
};


// ___ _   _ ____ _____ ____  _   _  ____ _____ ___ ___  _   _ ____
// |_ _| \ | / ___|_   _|  _ \| | | |/ ___|_   _|_ _/ _ \| \ | / ___|
// | ||  \| \___ \ | | | |_) | | | | |     | |  | | | | |  \| \___ \
// | || |\  |___) || | |  _ <| |_| | |___  | |  | | |_| | |\  |___) |
// |___|_| \_|____/ |_| |_| \_\\___/ \____| |_| |___\___/|_| \_|____/

const INSTRUCTIONS = new Array();
INSTRUCTIONS[0] = [false, false, "<strong>Welcome!</strong><br /><br />We are a group of cognitive scientists studying how people perceive actions, and we are interested in your natural sensitivity to the differences between them."];
INSTRUCTIONS[1] =  [show_maximize_image, enter_fullscreen, "For this experiment to work, the webpage will automatically switch to the fullscreen view on the next page. Please stay in the fullscreen mode until the experiment automatically switches out from it."];
INSTRUCTIONS[2] = [hide_instr_img, show_no_music_image, "Please also turn off any music you are playing. Music is known to affect this kind of studies, and it will make your data unusable."];
INSTRUCTIONS[3] = [hide_instr_img, show_consent, "You can press SPACE to start. Please focus after you start. (Don\'t switch to other windows or tabs!)"];
INSTRUCTIONS[4] = [false, false, "We'll show you some instructions in the next few pages.<br /><br />Please read carefully, and avoid using the refresh or back buttons."];
INSTRUCTIONS[5] = [false, false, "Your task is to first read "+ ExpLearningTrials +" descriptions of actions from the same category.<br /><br />Then, you will read a new set of descriptions and decide whether each one belongs to the same category as the first "+ ExpLearningTrials +" descriptions."];
INSTRUCTIONS[6] = [false, false, "The whole experiment will take around 15 minutes.<br /><br />To help you get familiar with the task, you'll first complete a short practice round."];
//practice phase
INSTRUCTIONS[7] = [false, false, "During the practice, you will see " + PracticeLearningTrials +" images, shown one at a time."];
INSTRUCTIONS[8] = [false, false, "Try to figure out what they have in common.<br /><br />This will help you finish the categorization task later."]
INSTRUCTIONS[9] = [show_practice_learning, false, ""];
INSTRUCTIONS[10] = [false, false, "Then, you will see some new images, also one at a time."];
INSTRUCTIONS[11] = [false, false, "Click \"Yes\" if you think the picture belongs to the same category.<br /><br />Click \"No\" if you think it does not."]
INSTRUCTIONS[12] = [show_practice_testing, false, ""];
INSTRUCTIONS[13] = [false, false, "Oops! You didn't categorize the practice images correctly.<br /><br />Let's review them again to make sure you've got the idea."];
INSTRUCTIONS[14] = [false, false, "Well done! You understand the categorization task."];
INSTRUCTIONS[15] = [false, false, "Remember: The category from the practice is just for learning.<br /><br />It has no relevance to the actual experiment."];
// Main Experiment
INSTRUCTIONS[16] = [false, false, "The real experiment  consists of three sessions."];
INSTRUCTIONS[17] = [false, false, "In the first session, you will read "+ ExpLearningTrials +" descriptions of actions that belong to the same category."];
INSTRUCTIONS[18] = [false, false, "Please read the descriptions carefully, and click \"Next\" to continue."];
INSTRUCTIONS[19] = [false, false, "Pay attention to the commonness of these actions described in the sentences &mdash; this will help your categorization later."];
INSTRUCTIONS[20] = [false, false, "Now, let's begin by reading "+ ExpLearningTrials +" descriptions of actions."];
INSTRUCTIONS[21] = [show_experiment_learning, false, ""];
INSTRUCTIONS[22] = [false, false, "In the second session, you\'ll read some new descriptions of actions.<br /><br />But you don’t need to make any judgments."];
INSTRUCTIONS[23] = [false, false, "This part is simply to help you get familiar with the types of actions you\'ll read in the actual categorization task."];
INSTRUCTIONS[24] = [show_experiment_review, false, ""];
INSTRUCTIONS[25] = [false, false, "In the third session, you will read " + ExpTestingNumber + " descriptions of actions."];
INSTRUCTIONS[26] = [show_experiment_testing, false, ""];



function show_instr_img(file_name) {
    $('#instr-img').attr('src', STIM_PATH + file_name);
    $('#instr-img').css('display', 'block');
}

function hide_instr_img() {
    $('#instr-img').css('display', 'none');
}

function show_maximize_image() {
    show_instr_img('maximize_window.png');
}

function enter_fullscreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function show_no_music_image() {
    show_instr_img('no_music.png');
}

function show_instr_question() {
    $('#instr-box').hide();
    $('#quiz-box').show();
}

function submit_instruction_quiz() {
    const CHOICE = $('input[name="quiz"]:checked').val();
    if (typeof CHOICE === 'undefined') {
        $('#quiz-warning').text('Please answer the question. Thank you!');
    } else if (CHOICE != 'option1') {
        instr.quizAttemptN['onlyQ'] += 1;
        instr.saveReadingTime();
        $('#instr-text').text('You have given an incorrect answer. Please read the instructions again carefully.');
        $('#instr-box').show();
        instr.startTime = Date.now();
        instr.index = -1;
        $('#quiz-box').hide();
        $('input[name="quiz"]:checked').prop('checked', false);
    } else {
        instr.next();
        $('#quiz-box').hide();
        $('#instr-box').show();
    }
}

function show_consent() {
    $('#next-button').hide();
    $('#consent-box').show();
    $(document).keyup(function(e) {
        if (e.key == ' ') {
            $(document).off('keyup');
            instr.saveReadingTime();
            $('#instr-box').hide();
            subj.saveAttrition();
            // show_task();
            $('#consent-box').hide();
            $('#instr-box').show();
            $('#next-button').show();// Show instruction box again (optional)
            instr.next();

        }
    });
}

var instr_options = {
    textBox: $('#instr-box'),
    textElement: $('#instr-text'),
    arr: INSTRUCTIONS,
    quizConditions: ['onlyQ']
};

// ____  ____      _    ____ _____ ___ ____ _____
// |  _ \|  _ \    / \  / ___|_   _|_ _/ ___| ____|
// | |_) | |_) |  / _ \| |     | |  | | |   |  _|
// |  __/|  _ <  / ___ \ |___  | |  | | |___| |___
// |_|   |_| \_\/_/   \_\____| |_| |___\____|_____|
function show_practice_learning() {
    $('#instr-box').hide();
    $("#practiceLearningBox").show();
    $("#practiceLearningImg").show();
    $("#practiceLearningNextBtn").show();

    const practiceLearningImages = shuffle_array([...PRACTICE_LEARNING_LIST]); // make a copy & shuffle

    let imgIndex = 0;

    function showImage() {
        $("#practiceLearningImg").attr("src", "media/" + practiceLearningImages[imgIndex]);
        $("#practiceLearningProgress").text(` ${imgIndex + 1} / ${practiceLearningImages.length}`);
    }
    showImage();

    $("#practiceLearningNextBtn").off("click").on("click", () => {
        imgIndex++;
        if (imgIndex < practiceLearningImages.length) {
            showImage();
        } else {
            $("#practiceTrainingImg").hide();
            $("#practiceLearningNextBtn").hide();
            $("#practiceLearningBox").hide();

            $("#instrBox").show();
            instr.index++;
            instr.start();
        }
    });
}


function show_practice_testing() {
    practiceCounts++; // Increment each time practice starts
    $("#instr-box").hide();
    $("#practiceTestingBox").show();
    $("#practiceTestingImg").show();


    const practiceTestingImages = shuffle_array([...PRACTICE_TESTING_LIST]);

    let imgIndex = 0;
    let allCorrect = true;

    function loadPracticeImage() {
        const current = practiceTestingImages[imgIndex];
        $("#practiceTestingImg").attr("src", "media/" + current.file);
        $("#practiceTestingProgress").text(` ${imgIndex + 1} / ${practiceTestingImages.length}`);
    }

    loadPracticeImage();

    function handlePracticeResponse(label) {
        const current = practiceTestingImages[imgIndex];

        if (label !== current.correct) {
            allCorrect = false;
        }

        imgIndex++;
        if (imgIndex < practiceTestingImages.length) {
            loadPracticeImage();
        } else {
            $("#practiceTestingBox").hide();
            $("#practiceTestingImg").hide();
            $("#instr-box").show();

            if (allCorrect) {
                instr.index = 14;  // Well done, proceed
            } else {
                instr.index = 13;  // Show feedback, and then next → goes to 7
                // We handle the jump to 7 below via a flag

                window.retryPractice = true;
            }
            instr.start();
        }
    }

    // Button binding
    $("#practiceYesBtn").off("click").on("click", () => handlePracticeResponse("yes"));
    $("#practiceNoBtn").off("click").on("click", () => handlePracticeResponse("no"));
}

// _______  ______  _____ ____  ___ __  __ _____ _   _ _____
// | ____\ \/ /  _ \| ____|  _ \|_ _|  \/  | ____| \ | |_   _|
// |  _|  \  /| |_) |  _| | |_) || || |\/| |  _| |  \| | | |
// | |___ /  \|  __/| |___|  _ < | || |  | | |___| |\  | | |
// |_____/_/\_\_|   |_____|_| \_\___|_|  |_|_____|_| \_| |_|

const EXPERIMENT_TITLES = ["num", "trialNum", "phase", "verb", "file", "rt", "response", "playCounts"];

let ExperimentTasks = new Task({
    titles: EXPERIMENT_TITLES,
    savingScript: "/save-data",
    savingDir: SAVING_DIR,
    dataFile: TASK_FILE,
    //videoDict: EXPERIMENT_VIDEOS,
    updateFunc: renderTrialScreen,
    trialFunc: trialFunc,
    endExptFunc: endFunc,
});


function show_experiment_learning() {
    ExperimentTasks.num = subj.num; // check
    subj.practiceCounts = practiceCounts; // save the practice counts
    ExperimentTasks.buildTrials();

    // 🎯 BUFFER FIRST FEW LEARNING VIDEOS
    if (ExperimentTasks.learningList && ExperimentTasks.learningList.length > 1) {
        // Buffer the second video (first will be loaded normally)
        const secondVideo = ExperimentTasks.learningList[1];
        if (secondVideo) {
            const bufferElement = document.getElementById('learningBufferVid');
            buffer_video(
                bufferElement,
                STIM_PATH + secondVideo.file
            );
        }
    }

    ExperimentTasks.run();
    $("#instr-box").hide();
    $("#expLearningBox").show();       // show learning phase container
    $("#expReviewBox").hide();
    $("#expTestingBox").hide();
}

function show_experiment_review() {
    // Hide instruction box and other experiment boxes
    $("#instr-box").hide();
    $("#expLearningBox").hide();
    $("#expTestingBox").hide();

    // Show review box
    $("#expReviewBox").show();

    // The Task class should already be in 'review' phase at this point
    // Just call run() to start the first review trial
    ExperimentTasks.run();
}

function show_experiment_testing() {
    $("#instr-box").hide();
    $("#expLearningBox, #expReviewBox").hide();
    ExperimentTasks.run();
}


function renderTrialScreen(phase, last, thisTrial, nextTrial, stimPath) {
    // For LEARNING phase
    if (phase === "learning") {
        const sentence = thisTrial.file;
        $("#expLearningSentence").text(sentence);

        $("#expLearningBox").show();
        $("#expReviewBox, #expTestingBox").hide();

        // Show Next button immediately (or after a delay if you want)
        $("#expLearningNextBtn").show().prop("disabled", false).removeClass("inactive");
        $("#expLearningNextBtn").off("click").on("click", function () {
            ExperimentTasks.end("NA");
        });

        const current = ExperimentTasks.trialNum;  // 1-based
        const total = ExperimentTasks.totalLearningTrials;
        $("#expLearningProgress").text(`${current} / ${total}`);
    }

    // For REVIEW phase (same structure as learning)
    else if (phase === "review") {
        const sentence = thisTrial.file;
        $("#expReviewSentence").text(sentence);

        $("#expReviewBox").show();
        $("#expLearningBox, #expTestingBox").hide();

        // Show Next button immediately
        $("#expReviewNextBtn").show().prop("disabled", false).removeClass("inactive");

        $("#expReviewNextBtn").off("click").on("click", function () {
            ExperimentTasks.end("NA");
        });

        const current = ExperimentTasks.trialNum - ExperimentTasks.totalLearningTrials;
        const total = ExperimentTasks.totalReviewTrials;
        $("#expReviewProgress").text(`${current} / ${total}`);
    }

    // For TESTING phase (same structure as learning, but with response buttons)
    else if (phase === "testing") {
        const sentence = thisTrial.file;
        $("#expTestingSentence").text(sentence);

        $("#expTestingBox").show();
        $("#expLearningBox, #expReviewBox").hide();

        // Show response buttons immediately
        $(".button-pair").show();
        $("#expYesBtn, #expNoBtn").show().prop("disabled", false).removeClass("inactive");

        // Update guideline
        // $("#expTestingGuideline").text("Does this action belong to the same group as the first session?");

        // Set up response button handlers
        $("#expYesBtn, #expNoBtn").off("click").on("click", function () {
            const response = $(this).attr("data-response");
            ExperimentTasks.end(response);
        });

        // Start timing
        if (ExperimentTasks.thisTrial) {
            ExperimentTasks.thisTrial.startTime = Date.now();
        }

        const current = ExperimentTasks.trialNum - ExperimentTasks.totalLearningTrials - ExperimentTasks.totalReviewTrials;
        const total = ExperimentTasks.totalTestingTrials;
        $("#expTestingProgress").text(`${current} / ${total}`);
    }
}

function handleVideoClick() {
    const $video = $(this);
    let count = $video.data("playCount") || 0;

    // Only play if under 3 times and currently paused
    if (count < 3 && $video[0].paused) {
        $video[0].play();
        $video.data("playCount", count + 1);

        // Disable all buttons during playback
        $("#expLearningNextBtn, #expReviewNextBtn, #expYesBtn, #expNoBtn").prop("disabled", true).addClass("inactive");
    } else {
        // play more than three times
    }
}

function handleReviewVideoClick() {
    const $video = $(this);
    let count = $video.data("playCount") || 0;

    // Only play if under 1 time and currently paused
    if (count < 1 && $video[0].paused) {
        $video[0].play();
        $video.data("playCount", count + 1);

        // Disable all buttons during playback
        $("#expLearningNextBtn, #expReviewNextBtn, #expYesBtn, #expNoBtn").prop("disabled", true).addClass("inactive");
    } else {
        // play more than one times
    }
}

function handleVideoEnded() {
    const $video = $(this);
    let count = $video.data("playCount") || 0;

    // Learning phase logic
    if ($video.attr("id") === "expLearningVid") {
        if (count >= 1) {
            $("#expLearningNextBtn").fadeIn().prop("disabled", false).removeClass("inactive");
        }
    }

    // Review phase logic
    else if ($video.attr("id") === "expReviewVid") {
        if (count >= 1) {
            $("#expReviewNextBtn").fadeIn().prop("disabled", false).removeClass("inactive");
        }
    }

    // Testing phase logic
    else if ($video.attr("id") === "expTestingVid") {
        if (count >= 1) {
            $(".button-pair").show();
            $("#expYesBtn, #expNoBtn").fadeIn().prop("disabled", false).removeClass("inactive");
            $("#expTestingGuideline").text("Does this action belong to the same group as the first session?");

            // Fix: Use ExperimentTasks instead of undefined 'test'
            if (ExperimentTasks.thisTrial) {
                ExperimentTasks.thisTrial.startTime = Date.now();
            }
        }
    }
}

function trialFunc(thisTrial, phase) {
    if (!thisTrial) {
        return;
    }

    thisTrial.startTime = Date.now();
}

function show_debrief() {
    $("#expLearningBox, #expReviewBox, #expTestingBox, #instr-box").hide();
    $("#questions-box").show();

    // // Optional: Save data
    // if (ExperimentTasks && typeof ExperimentTasks.save === 'function') {
    //     ExperimentTasks.save();
    // }
}

function endFunc(originalPhase) {
    // If no parameter passed, use current phase (for backward compatibility)
    const phaseToCheck = originalPhase || ExperimentTasks.phase;


    if (phaseToCheck === "learning") {
        $("#expLearningBox, #expReviewBox, #expTestingBox").hide();
        $("#instr-box").show();
        instr.index++;
        instr.start();
        // Set up button to start review phase
    }
    else if (phaseToCheck === "review") {
        // 🎯 BUFFER FIRST FEW TESTING VIDEOS
        if (ExperimentTasks.testingList && ExperimentTasks.testingList.length > 0) {
            const firstTestingVideo = ExperimentTasks.testingList[0];
            if (firstTestingVideo) {
                const bufferElement = document.getElementById('testingBufferVid');
                buffer_video(
                    bufferElement,
                    STIM_PATH + firstTestingVideo.file
                );
            }
        }

        $("#expLearningBox, #expReviewBox, #expTestingBox").hide();
        $("#instr-box").show();
        instr.index++;
        instr.start();
        // Set up button to start testing phase
    }
    else if (phaseToCheck === "testing") {
        $("#expLearningBox, #expReviewBox, #expTestingBox").hide();
        $("#questions-box").show();
        show_debrief();
    }
}














// function rating() {
//     $('#test-img').show();
//     $('.rating-button').mouseup(
//         function(event) {
//             $('.rating-button').unbind('mouseup');
//             task.inView = check_fully_in_view($('#test-img'));
//             $('#test-img').hide();
//             var target = $(event.target).closest('.rating-button');
//             task.end(target.attr('id'));
//         }
//     );
// }
//
// function end_task() {
//     subj.detectVisibilityEnd();
//     $('#task-box').hide();
//     $('#questions-box').show();
//     task.save();
// }

// var task_options = {
//     titles: TASK_TITLES,
//     // pracTrialN: RATING_PRACTICE_TRIAL_N,
//     // trialN: RATING_TRIAL_N,
//     savingScript: SAVING_SCRIPT,
//     dataFile: RATING_FILE,
//     stimPath: STIM_PATH,
//     savingDir: SAVING_DIR,
//     // trialList: RATING_IMG_LIST,
//     // pracList: RATING_PRACTICE_LIST,
//     intertrialInterval: INTERTRIAL_INTERVAL,
//     updateFunc: task_update,
//     trialFunc: rating,
//     endExptFunc: end_task,
//     progressInfo: true
// }
