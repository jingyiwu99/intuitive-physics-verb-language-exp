// ######## ##     ## ########  ########
// ##        ##   ##  ##     ##    ##
// ##         ## ##   ##     ##    ##
// ######      ###    ########     ##
// ##         ## ##   ##           ##
// ##        ##   ##  ##           ##
// ######## ##     ## ##           ##

// data saving
const FORMAL = true;
const EXPERIMENT_NAME = 'VerbCategorization';
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
const COMPLETION_URL = 'https://app.prolific.com/submissions/complete?cc=CDAFVRN9';

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
        lift: ["class_1/class1_lift_1.mp4", "class_1/class1_lift_2.mp4", "class_1/class1_lift_3.mp4", "class_1/class1_lift_4.mp4"],
        lower: ["class_1/class1_lower_1.mp4", "class_1/class1_lower_2.mp4", "class_1/class1_lower_3.mp4", "class_1/class1_lower_4.mp4"],
        pull: ["class_1/class1_pull_1.mp4", "class_1/class1_pull_2.mp4", "class_1/class1_pull_3.mp4", "class_1/class1_pull_4.mp4"],
        push: ["class_1/class1_push_1.mp4", "class_1/class1_push_2.mp4", "class_1/class1_push_3.mp4", "class_1/class1_push_4.mp4"],
        tote: ["class_1/class1_tote_1.mp4", "class_1/class1_tote_2.mp4", "class_1/class1_tote_3.mp4", "class_1/class1_tote_4.mp4"]
    },
    class2: {
        flick: ["class_2/class2_flick_1.mp4", "class_2/class2_flick_2.mp4", "class_2/class2_flick_3.mp4", "class_2/class2_flick_4.mp4"],
        kick: ["class_2/class2_kick_1.mp4", "class_2/class2_kick_2.mp4", "class_2/class2_kick_3.mp4", "class_2/class2_kick_4.mp4"],
        shove: ["class_2/class2_shove_1.mp4", "class_2/class2_shove_2.mp4", "class_2/class2_shove_3.mp4", "class_2/class2_shove_4.mp4"],
        slide: ["class_2/class2_slide_1.mp4", "class_2/class2_slide_2.mp4", "class_2/class2_slide_3.mp4", "/class_2/class2_slide_4.mp4"],
        throw: ["class_2/class2_throw_1.mp4", "class_2/class2_throw_2.mp4", "class_2/class2_throw_3.mp4", "class_2/class2_throw_4.mp4"]
    },
    class3:{
        fasten: ["class_3/class3_fasten_1.mp4", "class_3/class3_fasten_2.mp4", "class_3/class3_fasten_3.mp4", "class_3/class3_fasten_4.mp4"],
        pin: ["class_3/class3_pin_1.mp4", "class_3/class3_pin_2.mp4", "class_3/class3_pin_3.mp4", "class_3/class3_pin_4.mp4"],
        stick: ["class_3/class3_stick_1.mp4", "class_3/class3_stick_2.mp4", "class_3/class3_stick_3.mp4", "class_3/class3_stick_4.mp4"],
        strap: ["class_3/class3_strap_1.mp4", "class_3/class3_strap_2.mp4", "class_3/class3_strap_3.mp4", "class_3/class3_strap_4.mp4"],
        tape: ["class_3/class3_tape_1.mp4", "class_3/class3_tape_2.mp4", "class_3/class3_tape_3.mp4", "class_3/class3_tape_4.mp4"]
    },
    class4: {
        chip: ["class_4/class4_chip_1.mp4", "class_4/class4_chip_2.mp4", "class_4/class4_chip_3.mp4", "class_4/class4_chip_4.mp4"],
        crush: ["class_4/class4_crush_1.mp4", "class_4/class4_crush_2.mp4", "class_4/class4_crush_3.mp4", "class_4/class4_crush_4.mp4"],
        rip: ["class_4/class4_rip_1.mp4", "class_4/class4_rip_2.mp4", "class_4/class4_rip_3.mp4", "class_4/class4_rip_4.mp4"],
        shatter: ["class_4/class4_shatter_1.mp4", "class_4/class4_shatter_2.mp4", "class_4/class4_shatter_3.mp4", "class_4/class4_shatter_4.mp4"],
        snap: ["class_4/class4_snap_1.mp4", "class_4/class4_snap_2.mp4", "class_4/class4_snap_3.mp4", "class_4/class4_snap_4.mp4"]
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
INSTRUCTIONS[5] = [false, false, "Your task is to first watch "+ ExpLearningTrials +" actions from the same category.<br /><br />Then, you will watch a new set of actions and decide whether each one belongs to the same category as the first "+ ExpLearningTrials +" actions."];
INSTRUCTIONS[6] = [false, false, "The whole experiment will take around 20 minutes.<br /><br />To help you get familiar with the task, you'll first complete a short practice round."];
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
INSTRUCTIONS[17] = [false, false, "In the first session, you will watch "+ ExpLearningTrials +" actions that belong to the same category."];
INSTRUCTIONS[18] = [false, false, "Click the video to play it, and click \"Next\" to continue.<br /><br />You can play each video up to three times."];
INSTRUCTIONS[19] = [false, false, "Pay attention to the commonness of these actions &mdash; this will help your categorization later."];
INSTRUCTIONS[20] = [false, false, "Now, let's begin by watching "+ ExpLearningTrials +" actions."];
INSTRUCTIONS[21] = [show_experiment_learning, false, ""];
INSTRUCTIONS[22] = [false, false, "In the second session, you\'ll watch some new actions.<br /><br />But you don’t need to make any judgments."];
INSTRUCTIONS[23] = [false, false, "This part is simply to help you get familiar with the types of actions you\'ll see in the actual categorization task.<br /><br />Each video can be played only once."];
INSTRUCTIONS[24] = [show_experiment_review, false, ""];
INSTRUCTIONS[25] = [false, false, "In the third session, you will watch " + ExpTestingNumber + " trials.<br /><br />Also, each video can be played up to three times."];
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
        const videoPath = stimPath + thisTrial.file;
        $("#expLearningVid").attr("src", videoPath);

        $("#expLearningBox").show();
        $("#expReviewBox, #expTestingBox").hide();

        // Reset play count
        const $vid = $("#expLearningVid");
        $vid.data("playCount", 0);
        $vid[0].load();  // reload new video

        // 🎯 BUFFER NEXT VIDEO IN LEARNING PHASE
        if (nextTrial) {
            const nextVideoPath = stimPath + nextTrial.file;
            const bufferElement = document.getElementById('learningBufferVid');
            buffer_video(
                bufferElement,
                nextVideoPath
            );
        }

        // Set up click + end handlers
        $vid.off("click").on("click", handleVideoClick);
        $vid.off("ended").on("ended", handleVideoEnded);

        $("#expLearningNextBtn").hide(); // hidden until video ends
        $("#expLearningNextBtn").off("click").on("click", function () {
            ExperimentTasks.end("NA");
        });

        const current = ExperimentTasks.trialNum;  // 1-based
        const total = ExperimentTasks.totalLearningTrials;
        $("#expLearningProgress").text(`${current} / ${total}`);
    }

    // For REVIEW phase (same structure as learning)
    else if (phase === "review") {
        const videoPath = stimPath + thisTrial.file;
        $("#expReviewVid").attr("src", videoPath);

        $("#expReviewBox").show();
        $("#expLearningBox, #expTestingBox").hide();

        // Reset play count
        const $vid = $("#expReviewVid");
        $vid.data("playCount", 0);
        $vid[0].load();  // reload new video

        // 🎯 BUFFER NEXT VIDEO IN REVIEW PHASE
        if (nextTrial) {
            const nextVideoPath = stimPath + nextTrial.file;
            const bufferElement = document.getElementById('reviewBufferVid');
            buffer_video(
                bufferElement,
                nextVideoPath
            );
        }

        // Set up click + end handlers
        $vid.off("click").on("click", handleReviewVideoClick);
        $vid.off("ended").on("ended", handleVideoEnded);

        $("#expReviewNextBtn").hide(); // hidden until video ends
        $("#expReviewNextBtn").off("click").on("click", function () {
            ExperimentTasks.end("NA");
        });

        // Calculate progress for review phase
        const current = ExperimentTasks.trialNum - ExperimentTasks.totalLearningTrials;
        const total = ExperimentTasks.totalReviewTrials;
        $("#expReviewProgress").text(`${current} / ${total}`);
    }

    // For TESTING phase (same structure as learning, but with response buttons)
    else if (phase === "testing") {
        const videoPath = stimPath + thisTrial.file;
        $("#expTestingVid").attr("src", videoPath);

        $("#expTestingBox").show();
        $("#expLearningBox, #expReviewBox").hide();

        // Reset play count
        const $vid = $("#expTestingVid");
        $vid.data("playCount", 0);
        $vid[0].load();  // reload new video

        // 🎯 BUFFER NEXT VIDEO IN TESTING PHASE
        if (nextTrial) {
            const nextVideoPath = stimPath + nextTrial.file;
            const bufferElement = document.getElementById('testingBufferVid');
            buffer_video(
                bufferElement,
                nextVideoPath
            );
        }

        // Make sure video doesn't autoplay
        $vid[0].pause();
        $vid.prop('autoplay', false);

        // Set up click + end handlers
        $vid.off("click").on("click", handleVideoClick);
        $vid.off("ended").on("ended", handleVideoEnded);

        // Hide response buttons until video ends
        $(".button-pair").hide();
        $("#expYesBtn, #expNoBtn").hide().prop("disabled", true).addClass("inactive");

        // ALWAYS reset guideline to initial text for each new video
        $("#expTestingGuideline").text("Click the video to play");

        // Set up response button handlers
        $("#expYesBtn, #expNoBtn").off("click").on("click", function () {
            const response = $(this).attr("data-response");
            ExperimentTasks.end(response);
        });

        // Calculate progress for testing phase
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