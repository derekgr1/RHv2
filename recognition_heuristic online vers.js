/****************************************** 
 * Recognition_Heuristic Online Vers *
 ******************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'recognition_heuristic online vers';  // from the Builder filename that created this script
let expInfo = {
    'Student ID #': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(do_your_bestRoutineBegin());
flowScheduler.add(do_your_bestRoutineEachFrame());
flowScheduler.add(do_your_bestRoutineEnd());
flowScheduler.add(emailRoutineBegin());
flowScheduler.add(emailRoutineEachFrame());
flowScheduler.add(emailRoutineEnd());
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(city_size_instructionRoutineBegin());
flowScheduler.add(city_size_instructionRoutineEachFrame());
flowScheduler.add(city_size_instructionRoutineEnd());
const trials_sizeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_sizeLoopBegin(trials_sizeLoopScheduler));
flowScheduler.add(trials_sizeLoopScheduler);
flowScheduler.add(trials_sizeLoopEnd);


flowScheduler.add(post_quest2RoutineBegin());
flowScheduler.add(post_quest2RoutineEachFrame());
flowScheduler.add(post_quest2RoutineEnd());
flowScheduler.add(post_questRoutineBegin());
flowScheduler.add(post_questRoutineEachFrame());
flowScheduler.add(post_questRoutineEnd());
flowScheduler.add(cheaterRoutineBegin());
flowScheduler.add(cheaterRoutineEachFrame());
flowScheduler.add(cheaterRoutineEnd());
flowScheduler.add(thank_youRoutineBegin());
flowScheduler.add(thank_youRoutineEachFrame());
flowScheduler.add(thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your participation, you may now leave the window', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your participation, you may now leave the window', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'recog_conditions.xlsx', 'path': 'recog_conditions.xlsx'},
    {'name': 'all_city_pairs_merged.xlsx', 'path': 'all_city_pairs_merged.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DATA);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["Student ID #"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var do_your_bestClock;
var do_your_best_text;
var key_resp;
var emailClock;
var email_text;
var email_input;
var key_resp_4;
var WelcomeClock;
var welcome_text;
var wel_key_resp;
var recognitionClock;
var city_text;
var rec_square;
var no_rec_square;
var rec_mouse;
var rec_text;
var no_rec_text;
var city_size_instructionClock;
var city_instr_text;
var city_instr_key_resp;
var city_size_taskClock;
var text;
var choice_a_square;
var choice_b_square;
var choice_mouse;
var choice_a_text;
var choice_b_text;
var post_quest2Clock;
var textbox_2;
var key_resp_3;
var post2_text_2;
var post_questClock;
var key_resp_2;
var post_text_2;
var slider;
var cheaterClock;
var cheater_text;
var cheat_button1;
var cheat_button2;
var thank_youClock;
var saving_data;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "do_your_best"
  do_your_bestClock = new util.Clock();
  do_your_best_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'do_your_best_text',
    text: 'Please give your full effort on this task! Also, it is EXTREMELY important that you do not close the browser or press the back button. If you do, you will lose your progress and be unable to complete the study. Do not look up answers to questions on google or use any other outside assistance to help you. Your answer selection should solely be based on what YOU believe to be the correct answer. This study should take approximately 1 hour.\n\nOnce you acknowledge that you have read and understand the previous message, please press the spacebar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "email"
  emailClock = new util.Clock();
  email_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'email_text',
    text: 'Please provide your Net ID below. After data collection this information will be removed from the data before any findings are released. Please hit enter once you have finished.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  email_input = new visual.TextBox({
    win: psychoJS.window,
    name: 'email_input',
    text: '',
    placeholder: 'Type Net ID here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'Thank you for participation in our study!\n\nTo begin, we will present you with a list of cities. You will be tasked with clicking either a "recognize" or "do not recognize" button based on whether or not you personally recognize the city. When you are ready to begin please hit the space bar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  wel_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Declare globals so all later routines can see them
  var cond;
  var rowRange;
  var intro_short;
  var intro_long;
  
  // Initialize components for Routine "recognition"
  recognitionClock = new util.Clock();
  city_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'city_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  rec_square = new visual.Rect ({
    win: psychoJS.window, name: 'rec_square', 
    width: [0.5, 0.2][0], height: [0.5, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), (- 0.2)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  no_rec_square = new visual.Rect ({
    win: psychoJS.window, name: 'no_rec_square', 
    width: [0.5, 0.2][0], height: [0.5, 0.2][1],
    ori: 0.0, 
    pos: [0.3, (- 0.2)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  rec_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  rec_mouse.mouseClock = new util.Clock();
  rec_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_text',
    text: 'Recognize',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  no_rec_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'no_rec_text',
    text: "Don't Recognize",
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "city_size_instruction"
  city_size_instructionClock = new util.Clock();
  city_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'city_instr_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  city_instr_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "city_size_task"
  city_size_taskClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  choice_a_square = new visual.Rect ({
    win: psychoJS.window, name: 'choice_a_square', 
    width: [0.5, 0.2][0], height: [0.5, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), (- 0.2)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  choice_b_square = new visual.Rect ({
    win: psychoJS.window, name: 'choice_b_square', 
    width: [0.5, 0.2][0], height: [0.5, 0.2][1],
    ori: 0.0, 
    pos: [0.3, (- 0.2)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  choice_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  choice_mouse.mouseClock = new util.Clock();
  choice_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_a_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  choice_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_b_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "post_quest2"
  post_quest2Clock = new util.Clock();
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: '',
    placeholder: 'Type Here',
    font: 'Arial',
    pos: [0, (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  post2_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'post2_text_2',
    text: 'Please list any strategies you used consistently throughout the second half of the study (for example; "I relied on recognition", "I knew one city and made every judgement based on that one city", or "I just guessed". When you are ready to move on please hit enter or return.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "post_quest"
  post_questClock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  post_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'post_text_2',
    text: "What percentage of trials do you think the city you recognized was the correct response? Please indicate a number between 0 (was always wrong) and 100 (always correct). For reference, 50 percent would indicate the cue was not better than chance. Please click the slider to place your answer, you can move it if you aren't happy with the intial placement. After you have input your answer please hit enter or return.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.25)], ori: 0.0, units: psychoJS.window.units,
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], fontSize: 0.05, ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "cheater"
  cheaterClock = new util.Clock();
  cheater_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cheater_text',
    text: 'Did you cheat or do anything that was made explicitly clear was not acceptable at the beginning of the task? You will not lose credit for saying yes, however we need to know for data quality.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  cheat_button1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cheat_button1',
    text: 'I cheated',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.3), (- 0.2)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    ori: 0.0
    ,
    depth: -1
  });
  cheat_button1.clock = new util.Clock();
  
  cheat_button2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cheat_button2',
    text: 'I did not cheat',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.3, (- 0.2)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    ori: 0.0
    ,
    depth: -2
  });
  cheat_button2.clock = new util.Clock();
  
  // Initialize components for Routine "thank_you"
  thank_youClock = new util.Clock();
  saving_data = new visual.TextStim({
    win: psychoJS.window,
    name: 'saving_data',
    text: 'Please wait while we save your data...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var do_your_bestMaxDurationReached;
var _key_resp_allKeys;
var do_your_bestMaxDuration;
var do_your_bestComponents;
function do_your_bestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'do_your_best' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    do_your_bestClock.reset();
    routineTimer.reset();
    do_your_bestMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('do_your_best.started', globalClock.getTime());
    do_your_bestMaxDuration = null
    // keep track of which components have finished
    do_your_bestComponents = [];
    do_your_bestComponents.push(do_your_best_text);
    do_your_bestComponents.push(key_resp);
    
    for (const thisComponent of do_your_bestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function do_your_bestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'do_your_best' ---
    // get current time
    t = do_your_bestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *do_your_best_text* updates
    if (t >= 0.0 && do_your_best_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      do_your_best_text.tStart = t;  // (not accounting for frame time here)
      do_your_best_text.frameNStart = frameN;  // exact frame index
      
      do_your_best_text.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of do_your_bestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function do_your_bestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'do_your_best' ---
    for (const thisComponent of do_your_bestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('do_your_best.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "do_your_best" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var emailMaxDurationReached;
var _key_resp_4_allKeys;
var emailMaxDuration;
var emailComponents;
function emailRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'email' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    emailClock.reset();
    routineTimer.reset();
    emailMaxDurationReached = false;
    // update component parameters for each repeat
    email_input.setText('');
    email_input.refresh();
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('email.started', globalClock.getTime());
    emailMaxDuration = null
    // keep track of which components have finished
    emailComponents = [];
    emailComponents.push(email_text);
    emailComponents.push(email_input);
    emailComponents.push(key_resp_4);
    
    for (const thisComponent of emailComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function emailRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'email' ---
    // get current time
    t = emailClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *email_text* updates
    if (t >= 0.0 && email_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      email_text.tStart = t;  // (not accounting for frame time here)
      email_text.frameNStart = frameN;  // exact frame index
      
      email_text.setAutoDraw(true);
    }
    
    
    // *email_input* updates
    if (t >= 0.0 && email_input.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      email_input.tStart = t;  // (not accounting for frame time here)
      email_input.frameNStart = frameN;  // exact frame index
      
      email_input.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['enter', 'return'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of emailComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function emailRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'email' ---
    for (const thisComponent of emailComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('email.stopped', globalClock.getTime());
    psychoJS.experiment.addData('email_input.text',email_input.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "email" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WelcomeMaxDurationReached;
var _wel_key_resp_allKeys;
var cond;
var rowRange;
var intro_short;
var intro_long;
var WelcomeMaxDuration;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    WelcomeClock.reset();
    routineTimer.reset();
    WelcomeMaxDurationReached = false;
    // update component parameters for each repeat
    wel_key_resp.keys = undefined;
    wel_key_resp.rt = undefined;
    _wel_key_resp_allKeys = [];
    // Run 'Begin Routine' code from code_2
    // OPTION B: random condition per participant
    let condOptions = ['globalHigh', 'globalLow', 'italyHigh', 'italyLow'];
    cond = condOptions[Math.floor(Math.random() * condOptions.length)];
    
    // map each condition to row range (0-based indices)
    let cond_to_range = {
      'globalHigh': '0:300',
      'globalLow':  '300:600',
      'italyHigh':  '600:900',
      'italyLow':   '900:1200',
    };
    rowRange = cond_to_range[cond];
    
    // intro text mapping
    let intro_short_map = {
      'globalHigh': 'Which city has the larger population?',
      'globalLow':  'Which city has the larger population?',
      'italyHigh':  'Which city has the larger population?',
      'italyLow':   'Which city is at a higher elevation above sea level?',
    };
    
    let intro_long_map = {
      'globalHigh': 'Now we will be moving onto the second half of this study. For this half of the study you will be tasked with identifying which of two presented cities has a higher population. These will be cities from the list you were just presented with. You will indicate which of the cities you believe has a higher population with a mouse click. When you are ready to begin this portion of the study please press the spacebar.',
      'globalLow':  'Now we will be moving onto the second half of this study. For this half of the study you will be tasked with identifying which of two presented cities has a higher population. These will be cities from the list you were just presented with. You will indicate which of the cities you believe has a higher population with a mouse click. When you are ready to begin this portion of the study please press the spacebar.',
      'italyHigh':  'Now we will be moving onto the second half of this study. For this half of the study you will be tasked with identifying which of two presented cities has a higher population. These will be cities from the list you were just presented with. You will indicate which of the cities you believe has a higher population with a mouse click. When you are ready to begin this portion of the study please press the spacebar.',
      'italyLow':   'Now we will be moving onto the second half of this study. For this half of the study you will be tasked with identifying which of two presented cities is higher above sea level. These will be cities from the list you were just presented with. You will indicate which of the cities you believe is higher above sea level (in feet) with a mouse click. When you are ready to begin this portion of the study please press the spacebar.',
    };
    
    intro_short = intro_short_map[cond];
    intro_long = intro_long_map[cond];
    
    
    
    psychoJS.experiment.addData('Welcome.started', globalClock.getTime());
    WelcomeMaxDuration = null
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(welcome_text);
    WelcomeComponents.push(wel_key_resp);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome' ---
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }
    
    
    // *wel_key_resp* updates
    if (t >= 0.0 && wel_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wel_key_resp.tStart = t;  // (not accounting for frame time here)
      wel_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { wel_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { wel_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { wel_key_resp.clearEvents(); });
    }
    
    if (wel_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = wel_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _wel_key_resp_allKeys = _wel_key_resp_allKeys.concat(theseKeys);
      if (_wel_key_resp_allKeys.length > 0) {
        wel_key_resp.keys = _wel_key_resp_allKeys[_wel_key_resp_allKeys.length - 1].name;  // just the last key pressed
        wel_key_resp.rt = _wel_key_resp_allKeys[_wel_key_resp_allKeys.length - 1].rt;
        wel_key_resp.duration = _wel_key_resp_allKeys[_wel_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome' ---
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(wel_key_resp.corr, level);
    }
    psychoJS.experiment.addData('wel_key_resp.keys', wel_key_resp.keys);
    if (typeof wel_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('wel_key_resp.rt', wel_key_resp.rt);
        psychoJS.experiment.addData('wel_key_resp.duration', wel_key_resp.duration);
        routineTimer.reset();
        }
    
    wel_key_resp.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'recog_conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(recognitionRoutineBegin(snapshot));
      trialsLoopScheduler.add(recognitionRoutineEachFrame());
      trialsLoopScheduler.add(recognitionRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_size;
function trials_sizeLoopBegin(trials_sizeLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_size = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'all_city_pairs_merged.xlsx', rowRange),
      seed: undefined, name: 'trials_size'
    });
    psychoJS.experiment.addLoop(trials_size); // add the loop to the experiment
    currentLoop = trials_size;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_size of trials_size) {
      snapshot = trials_size.getSnapshot();
      trials_sizeLoopScheduler.add(importConditions(snapshot));
      trials_sizeLoopScheduler.add(city_size_taskRoutineBegin(snapshot));
      trials_sizeLoopScheduler.add(city_size_taskRoutineEachFrame());
      trials_sizeLoopScheduler.add(city_size_taskRoutineEnd(snapshot));
      trials_sizeLoopScheduler.add(trials_sizeLoopEndIteration(trials_sizeLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_sizeLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_size);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_sizeLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var recognitionMaxDurationReached;
var gotValidClick;
var recognitionMaxDuration;
var recognitionComponents;
function recognitionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recognition' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    recognitionClock.reset();
    routineTimer.reset();
    recognitionMaxDurationReached = false;
    // update component parameters for each repeat
    city_text.setText(city);
    // setup some python lists for storing info about the rec_mouse
    // current position of the mouse:
    rec_mouse.x = [];
    rec_mouse.y = [];
    rec_mouse.leftButton = [];
    rec_mouse.midButton = [];
    rec_mouse.rightButton = [];
    rec_mouse.time = [];
    rec_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('recognition.started', globalClock.getTime());
    recognitionMaxDuration = null
    // keep track of which components have finished
    recognitionComponents = [];
    recognitionComponents.push(city_text);
    recognitionComponents.push(rec_square);
    recognitionComponents.push(no_rec_square);
    recognitionComponents.push(rec_mouse);
    recognitionComponents.push(rec_text);
    recognitionComponents.push(no_rec_text);
    
    for (const thisComponent of recognitionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function recognitionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recognition' ---
    // get current time
    t = recognitionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *city_text* updates
    if (t >= 0.0 && city_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      city_text.tStart = t;  // (not accounting for frame time here)
      city_text.frameNStart = frameN;  // exact frame index
      
      city_text.setAutoDraw(true);
    }
    
    
    // *rec_square* updates
    if (t >= 0.0 && rec_square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_square.tStart = t;  // (not accounting for frame time here)
      rec_square.frameNStart = frameN;  // exact frame index
      
      rec_square.setAutoDraw(true);
    }
    
    
    // *no_rec_square* updates
    if (t >= 0.0 && no_rec_square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_rec_square.tStart = t;  // (not accounting for frame time here)
      no_rec_square.frameNStart = frameN;  // exact frame index
      
      no_rec_square.setAutoDraw(true);
    }
    
    // *rec_mouse* updates
    if (t >= 0.6 && rec_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_mouse.tStart = t;  // (not accounting for frame time here)
      rec_mouse.frameNStart = frameN;  // exact frame index
      
      rec_mouse.status = PsychoJS.Status.STARTED;
      rec_mouse.mouseClock.reset();
      prevButtonState = rec_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (rec_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = rec_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          rec_mouse.clickableObjects = eval([rec_square, no_rec_square])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(rec_mouse.clickableObjects)) {
              rec_mouse.clickableObjects = [rec_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of rec_mouse.clickableObjects) {
              if (obj.contains(rec_mouse)) {
                  gotValidClick = true;
                  rec_mouse.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          rec_mouse.clickableObjects = eval([rec_square, no_rec_square])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(rec_mouse.clickableObjects)) {
              rec_mouse.clickableObjects = [rec_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of rec_mouse.clickableObjects) {
              if (obj.contains(rec_mouse)) {
                  gotValidClick = true;
                  rec_mouse.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = rec_mouse.getPos();
            rec_mouse.x.push(_mouseXYs[0]);
            rec_mouse.y.push(_mouseXYs[1]);
            rec_mouse.leftButton.push(_mouseButtons[0]);
            rec_mouse.midButton.push(_mouseButtons[1]);
            rec_mouse.rightButton.push(_mouseButtons[2]);
            rec_mouse.time.push(rec_mouse.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *rec_text* updates
    if (t >= 0.0 && rec_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_text.tStart = t;  // (not accounting for frame time here)
      rec_text.frameNStart = frameN;  // exact frame index
      
      rec_text.setAutoDraw(true);
    }
    
    
    // *no_rec_text* updates
    if (t >= 0.0 && no_rec_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_rec_text.tStart = t;  // (not accounting for frame time here)
      no_rec_text.frameNStart = frameN;  // exact frame index
      
      no_rec_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of recognitionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var recog_resp;
function recognitionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recognition' ---
    for (const thisComponent of recognitionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recognition.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('rec_mouse.x', rec_mouse.x);
    psychoJS.experiment.addData('rec_mouse.y', rec_mouse.y);
    psychoJS.experiment.addData('rec_mouse.leftButton', rec_mouse.leftButton);
    psychoJS.experiment.addData('rec_mouse.midButton', rec_mouse.midButton);
    psychoJS.experiment.addData('rec_mouse.rightButton', rec_mouse.rightButton);
    psychoJS.experiment.addData('rec_mouse.time', rec_mouse.time);
    psychoJS.experiment.addData('rec_mouse.clicked_name', rec_mouse.clicked_name);
    
    // Run 'End Routine' code from code_3
    // default
    recog_resp = -1;
    
    // only act if clicked_name exists and is non-empty
    if (typeof rec_mouse.clicked_name !== 'undefined' &&
        rec_mouse.clicked_name !== null &&
        rec_mouse.clicked_name.length > 0) {
    
      if (rec_mouse.clicked_name.includes('rec_square')) {
        recog_resp = 1;
      } else if (rec_mouse.clicked_name.includes('no_rec_square')) {
        recog_resp = 0;
      }
    }
    
    // clean RT safely
    let rt_clean = (typeof rec_mouse.rt !== 'undefined' &&
                    rec_mouse.rt !== null &&
                    rec_mouse.rt.length > 0)
                   ? rec_mouse.rt[0]
                   : null;
    
    // save just the response + RT
    psychoJS.experiment.addData('recog_resp', recog_resp);
    psychoJS.experiment.addData('rt_clean', rt_clean);
    
    
    // the Routine "recognition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var city_size_instructionMaxDurationReached;
var _city_instr_key_resp_allKeys;
var city_size_instructionMaxDuration;
var city_size_instructionComponents;
function city_size_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'city_size_instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    city_size_instructionClock.reset();
    routineTimer.reset();
    city_size_instructionMaxDurationReached = false;
    // update component parameters for each repeat
    city_instr_text.setText(intro_long);
    city_instr_key_resp.keys = undefined;
    city_instr_key_resp.rt = undefined;
    _city_instr_key_resp_allKeys = [];
    psychoJS.experiment.addData('city_size_instruction.started', globalClock.getTime());
    city_size_instructionMaxDuration = null
    // keep track of which components have finished
    city_size_instructionComponents = [];
    city_size_instructionComponents.push(city_instr_text);
    city_size_instructionComponents.push(city_instr_key_resp);
    
    for (const thisComponent of city_size_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function city_size_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'city_size_instruction' ---
    // get current time
    t = city_size_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *city_instr_text* updates
    if (t >= 0.0 && city_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      city_instr_text.tStart = t;  // (not accounting for frame time here)
      city_instr_text.frameNStart = frameN;  // exact frame index
      
      city_instr_text.setAutoDraw(true);
    }
    
    
    // *city_instr_key_resp* updates
    if (t >= 0.0 && city_instr_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      city_instr_key_resp.tStart = t;  // (not accounting for frame time here)
      city_instr_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { city_instr_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { city_instr_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { city_instr_key_resp.clearEvents(); });
    }
    
    if (city_instr_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = city_instr_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _city_instr_key_resp_allKeys = _city_instr_key_resp_allKeys.concat(theseKeys);
      if (_city_instr_key_resp_allKeys.length > 0) {
        city_instr_key_resp.keys = _city_instr_key_resp_allKeys[_city_instr_key_resp_allKeys.length - 1].name;  // just the last key pressed
        city_instr_key_resp.rt = _city_instr_key_resp_allKeys[_city_instr_key_resp_allKeys.length - 1].rt;
        city_instr_key_resp.duration = _city_instr_key_resp_allKeys[_city_instr_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of city_size_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function city_size_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'city_size_instruction' ---
    for (const thisComponent of city_size_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('city_size_instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(city_instr_key_resp.corr, level);
    }
    psychoJS.experiment.addData('city_instr_key_resp.keys', city_instr_key_resp.keys);
    if (typeof city_instr_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('city_instr_key_resp.rt', city_instr_key_resp.rt);
        psychoJS.experiment.addData('city_instr_key_resp.duration', city_instr_key_resp.duration);
        routineTimer.reset();
        }
    
    city_instr_key_resp.stop();
    // the Routine "city_size_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var city_size_taskMaxDurationReached;
var city_size_taskMaxDuration;
var city_size_taskComponents;
function city_size_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'city_size_task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    city_size_taskClock.reset();
    routineTimer.reset();
    city_size_taskMaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(intro_short);
    // setup some python lists for storing info about the choice_mouse
    // current position of the mouse:
    choice_mouse.x = [];
    choice_mouse.y = [];
    choice_mouse.leftButton = [];
    choice_mouse.midButton = [];
    choice_mouse.rightButton = [];
    choice_mouse.time = [];
    choice_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    choice_a_text.setText(cityA);
    choice_b_text.setText(cityB);
    psychoJS.experiment.addData('city_size_task.started', globalClock.getTime());
    city_size_taskMaxDuration = null
    // keep track of which components have finished
    city_size_taskComponents = [];
    city_size_taskComponents.push(text);
    city_size_taskComponents.push(choice_a_square);
    city_size_taskComponents.push(choice_b_square);
    city_size_taskComponents.push(choice_mouse);
    city_size_taskComponents.push(choice_a_text);
    city_size_taskComponents.push(choice_b_text);
    
    for (const thisComponent of city_size_taskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function city_size_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'city_size_task' ---
    // get current time
    t = city_size_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *choice_a_square* updates
    if (t >= 0.0 && choice_a_square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_a_square.tStart = t;  // (not accounting for frame time here)
      choice_a_square.frameNStart = frameN;  // exact frame index
      
      choice_a_square.setAutoDraw(true);
    }
    
    
    // *choice_b_square* updates
    if (t >= 0.0 && choice_b_square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_b_square.tStart = t;  // (not accounting for frame time here)
      choice_b_square.frameNStart = frameN;  // exact frame index
      
      choice_b_square.setAutoDraw(true);
    }
    
    // *choice_mouse* updates
    if (t >= 0.6 && choice_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_mouse.tStart = t;  // (not accounting for frame time here)
      choice_mouse.frameNStart = frameN;  // exact frame index
      
      choice_mouse.status = PsychoJS.Status.STARTED;
      choice_mouse.mouseClock.reset();
      prevButtonState = choice_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (choice_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = choice_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          choice_mouse.clickableObjects = eval([choice_a_square, choice_b_square])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(choice_mouse.clickableObjects)) {
              choice_mouse.clickableObjects = [choice_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of choice_mouse.clickableObjects) {
              if (obj.contains(choice_mouse)) {
                  gotValidClick = true;
                  choice_mouse.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          choice_mouse.clickableObjects = eval([choice_a_square, choice_b_square])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(choice_mouse.clickableObjects)) {
              choice_mouse.clickableObjects = [choice_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of choice_mouse.clickableObjects) {
              if (obj.contains(choice_mouse)) {
                  gotValidClick = true;
                  choice_mouse.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = choice_mouse.getPos();
            choice_mouse.x.push(_mouseXYs[0]);
            choice_mouse.y.push(_mouseXYs[1]);
            choice_mouse.leftButton.push(_mouseButtons[0]);
            choice_mouse.midButton.push(_mouseButtons[1]);
            choice_mouse.rightButton.push(_mouseButtons[2]);
            choice_mouse.time.push(choice_mouse.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *choice_a_text* updates
    if (t >= 0.0 && choice_a_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_a_text.tStart = t;  // (not accounting for frame time here)
      choice_a_text.frameNStart = frameN;  // exact frame index
      
      choice_a_text.setAutoDraw(true);
    }
    
    
    // *choice_b_text* updates
    if (t >= 0.0 && choice_b_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_b_text.tStart = t;  // (not accounting for frame time here)
      choice_b_text.frameNStart = frameN;  // exact frame index
      
      choice_b_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of city_size_taskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var a_resp;
var b_resp;
function city_size_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'city_size_task' ---
    for (const thisComponent of city_size_taskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('city_size_task.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('choice_mouse.x', choice_mouse.x);
    psychoJS.experiment.addData('choice_mouse.y', choice_mouse.y);
    psychoJS.experiment.addData('choice_mouse.leftButton', choice_mouse.leftButton);
    psychoJS.experiment.addData('choice_mouse.midButton', choice_mouse.midButton);
    psychoJS.experiment.addData('choice_mouse.rightButton', choice_mouse.rightButton);
    psychoJS.experiment.addData('choice_mouse.time', choice_mouse.time);
    psychoJS.experiment.addData('choice_mouse.clicked_name', choice_mouse.clicked_name);
    
    // Run 'End Routine' code from code_4
    // defaults
    a_resp = -1;
    b_resp = -1;
    
    // proceed only if clicked_name exists and is non-empty
    if (typeof choice_mouse.clicked_name !== 'undefined' &&
        choice_mouse.clicked_name !== null &&
        choice_mouse.clicked_name.length > 0) {
    
      if (choice_mouse.clicked_name.includes('choice_a_square')) {
        a_resp = 1;
        b_resp = 0;
      } else if (choice_mouse.clicked_name.includes('choice_b_square')) {
        a_resp = 0;
        b_resp = 1;
      }
    }
    
    // clean RT safely
    let rt_clean_size = (typeof choice_mouse.rt !== 'undefined' &&
                         choice_mouse.rt !== null &&
                         choice_mouse.rt.length > 0)
                        ? choice_mouse.rt[0]
                        : null;
    
    // save just responses + RT
    psychoJS.experiment.addData('a_resp', a_resp);
    psychoJS.experiment.addData('b_resp', b_resp);
    psychoJS.experiment.addData('rt_clean_size', rt_clean_size);
    
    // the Routine "city_size_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var post_quest2MaxDurationReached;
var _key_resp_3_allKeys;
var post_quest2MaxDuration;
var post_quest2Components;
function post_quest2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'post_quest2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    post_quest2Clock.reset();
    routineTimer.reset();
    post_quest2MaxDurationReached = false;
    // update component parameters for each repeat
    textbox_2.setText('');
    textbox_2.refresh();
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('post_quest2.started', globalClock.getTime());
    post_quest2MaxDuration = null
    // keep track of which components have finished
    post_quest2Components = [];
    post_quest2Components.push(textbox_2);
    post_quest2Components.push(key_resp_3);
    post_quest2Components.push(post2_text_2);
    
    for (const thisComponent of post_quest2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function post_quest2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'post_quest2' ---
    // get current time
    t = post_quest2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_2* updates
    if (t >= 0.0 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 2.5 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['enter', 'return'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *post2_text_2* updates
    if (t >= 0.0 && post2_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      post2_text_2.tStart = t;  // (not accounting for frame time here)
      post2_text_2.frameNStart = frameN;  // exact frame index
      
      post2_text_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of post_quest2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function post_quest2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'post_quest2' ---
    for (const thisComponent of post_quest2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('post_quest2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_2.text',textbox_2.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "post_quest2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var post_questMaxDurationReached;
var _key_resp_2_allKeys;
var post_questMaxDuration;
var post_questComponents;
function post_questRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'post_quest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    post_questClock.reset();
    routineTimer.reset();
    post_questMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    slider.reset()
    psychoJS.experiment.addData('post_quest.started', globalClock.getTime());
    post_questMaxDuration = null
    // keep track of which components have finished
    post_questComponents = [];
    post_questComponents.push(key_resp_2);
    post_questComponents.push(post_text_2);
    post_questComponents.push(slider);
    
    for (const thisComponent of post_questComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function post_questRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'post_quest' ---
    // get current time
    t = post_questClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_2* updates
    if (t >= 1.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space', 'return'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *post_text_2* updates
    if (t >= 0.0 && post_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      post_text_2.tStart = t;  // (not accounting for frame time here)
      post_text_2.frameNStart = frameN;  // exact frame index
      
      post_text_2.setAutoDraw(true);
    }
    
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of post_questComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function post_questRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'post_quest' ---
    for (const thisComponent of post_questComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('post_quest.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "post_quest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cheaterMaxDurationReached;
var cheaterMaxDuration;
var cheaterComponents;
function cheaterRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cheater' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    cheaterClock.reset();
    routineTimer.reset();
    cheaterMaxDurationReached = false;
    // update component parameters for each repeat
    // reset cheat_button1 to account for continued clicks & clear times on/off
    cheat_button1.reset()
    // reset cheat_button2 to account for continued clicks & clear times on/off
    cheat_button2.reset()
    psychoJS.experiment.addData('cheater.started', globalClock.getTime());
    cheaterMaxDuration = null
    // keep track of which components have finished
    cheaterComponents = [];
    cheaterComponents.push(cheater_text);
    cheaterComponents.push(cheat_button1);
    cheaterComponents.push(cheat_button2);
    
    for (const thisComponent of cheaterComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function cheaterRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cheater' ---
    // get current time
    t = cheaterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cheater_text* updates
    if (t >= 0.0 && cheater_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cheater_text.tStart = t;  // (not accounting for frame time here)
      cheater_text.frameNStart = frameN;  // exact frame index
      
      cheater_text.setAutoDraw(true);
    }
    
    
    // *cheat_button1* updates
    if (t >= 0 && cheat_button1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cheat_button1.tStart = t;  // (not accounting for frame time here)
      cheat_button1.frameNStart = frameN;  // exact frame index
      
      cheat_button1.setAutoDraw(true);
    }
    
    if (cheat_button1.status === PsychoJS.Status.STARTED) {
      // check whether cheat_button1 has been pressed
      if (cheat_button1.isClicked) {
        if (!cheat_button1.wasClicked) {
          // store time of first click
          cheat_button1.timesOn.push(cheat_button1.clock.getTime());
          // store time clicked until
          cheat_button1.timesOff.push(cheat_button1.clock.getTime());
        } else {
          // update time clicked until;
          cheat_button1.timesOff[cheat_button1.timesOff.length - 1] = cheat_button1.clock.getTime();
        }
        if (!cheat_button1.wasClicked) {
          // end routine when cheat_button1 is clicked
          continueRoutine = false;
          
        }
        // if cheat_button1 is still clicked next frame, it is not a new click
        cheat_button1.wasClicked = true;
      } else {
        // if cheat_button1 is clicked next frame, it is a new click
        cheat_button1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cheat_button1 hasn't started / has finished
      cheat_button1.clock.reset();
      // if cheat_button1 is clicked next frame, it is a new click
      cheat_button1.wasClicked = false;
    }
    
    // *cheat_button2* updates
    if (t >= 0 && cheat_button2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cheat_button2.tStart = t;  // (not accounting for frame time here)
      cheat_button2.frameNStart = frameN;  // exact frame index
      
      cheat_button2.setAutoDraw(true);
    }
    
    if (cheat_button2.status === PsychoJS.Status.STARTED) {
      // check whether cheat_button2 has been pressed
      if (cheat_button2.isClicked) {
        if (!cheat_button2.wasClicked) {
          // store time of first click
          cheat_button2.timesOn.push(cheat_button2.clock.getTime());
          // store time clicked until
          cheat_button2.timesOff.push(cheat_button2.clock.getTime());
        } else {
          // update time clicked until;
          cheat_button2.timesOff[cheat_button2.timesOff.length - 1] = cheat_button2.clock.getTime();
        }
        if (!cheat_button2.wasClicked) {
          // end routine when cheat_button2 is clicked
          continueRoutine = false;
          
        }
        // if cheat_button2 is still clicked next frame, it is not a new click
        cheat_button2.wasClicked = true;
      } else {
        // if cheat_button2 is clicked next frame, it is a new click
        cheat_button2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cheat_button2 hasn't started / has finished
      cheat_button2.clock.reset();
      // if cheat_button2 is clicked next frame, it is a new click
      cheat_button2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cheaterComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cheaterRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cheater' ---
    for (const thisComponent of cheaterComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('cheater.stopped', globalClock.getTime());
    psychoJS.experiment.addData('cheat_button1.numClicks', cheat_button1.numClicks);
    psychoJS.experiment.addData('cheat_button1.timesOn', cheat_button1.timesOn);
    psychoJS.experiment.addData('cheat_button1.timesOff', cheat_button1.timesOff);
    psychoJS.experiment.addData('cheat_button2.numClicks', cheat_button2.numClicks);
    psychoJS.experiment.addData('cheat_button2.timesOn', cheat_button2.timesOn);
    psychoJS.experiment.addData('cheat_button2.timesOff', cheat_button2.timesOff);
    // the Routine "cheater" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thank_youMaxDurationReached;
var thank_youMaxDuration;
var thank_youComponents;
function thank_youRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thank_you' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    thank_youClock.reset();
    routineTimer.reset();
    thank_youMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    //Generate filename for results
    let filename = psychoJS.experiment._experimentName + '' + psychoJS._experiment._datetime + '.csv';
    
    //Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    //Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '/',
        },
        body: JSON.stringify({
            experimentID: 'S1P1L1z5oQnx',
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('thank_you.started', globalClock.getTime());
    thank_youMaxDuration = null
    // keep track of which components have finished
    thank_youComponents = [];
    thank_youComponents.push(saving_data);
    
    for (const thisComponent of thank_youComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thank_youRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thank_you' ---
    // get current time
    t = thank_youClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *saving_data* updates
    if (t >= 0.0 && saving_data.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      saving_data.tStart = t;  // (not accounting for frame time here)
      saving_data.frameNStart = frameN;  // exact frame index
      
      saving_data.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thank_youComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thank_youRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thank_you' ---
    for (const thisComponent of thank_youComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thank_you.stopped', globalClock.getTime());
    // the Routine "thank_you" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
