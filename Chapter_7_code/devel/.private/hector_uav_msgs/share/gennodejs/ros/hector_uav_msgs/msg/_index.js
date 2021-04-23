
"use strict";

let MotorPWM = require('./MotorPWM.js');
let RC = require('./RC.js');
let MotorStatus = require('./MotorStatus.js');
let AttitudeCommand = require('./AttitudeCommand.js');
let RawRC = require('./RawRC.js');
let Supply = require('./Supply.js');
let YawrateCommand = require('./YawrateCommand.js');
let HeadingCommand = require('./HeadingCommand.js');
let PositionXYCommand = require('./PositionXYCommand.js');
let RawImu = require('./RawImu.js');
let ControllerState = require('./ControllerState.js');
let ServoCommand = require('./ServoCommand.js');
let RawMagnetic = require('./RawMagnetic.js');
let HeightCommand = require('./HeightCommand.js');
let VelocityZCommand = require('./VelocityZCommand.js');
let RuddersCommand = require('./RuddersCommand.js');
let Compass = require('./Compass.js');
let MotorCommand = require('./MotorCommand.js');
let ThrustCommand = require('./ThrustCommand.js');
let VelocityXYCommand = require('./VelocityXYCommand.js');
let Altimeter = require('./Altimeter.js');
let TakeoffActionFeedback = require('./TakeoffActionFeedback.js');
let LandingActionFeedback = require('./LandingActionFeedback.js');
let LandingResult = require('./LandingResult.js');
let PoseActionFeedback = require('./PoseActionFeedback.js');
let PoseResult = require('./PoseResult.js');
let TakeoffGoal = require('./TakeoffGoal.js');
let LandingFeedback = require('./LandingFeedback.js');
let PoseAction = require('./PoseAction.js');
let TakeoffActionResult = require('./TakeoffActionResult.js');
let LandingGoal = require('./LandingGoal.js');
let TakeoffResult = require('./TakeoffResult.js');
let TakeoffFeedback = require('./TakeoffFeedback.js');
let LandingActionResult = require('./LandingActionResult.js');
let TakeoffActionGoal = require('./TakeoffActionGoal.js');
let LandingAction = require('./LandingAction.js');
let PoseActionGoal = require('./PoseActionGoal.js');
let TakeoffAction = require('./TakeoffAction.js');
let PoseActionResult = require('./PoseActionResult.js');
let PoseGoal = require('./PoseGoal.js');
let LandingActionGoal = require('./LandingActionGoal.js');
let PoseFeedback = require('./PoseFeedback.js');

module.exports = {
  MotorPWM: MotorPWM,
  RC: RC,
  MotorStatus: MotorStatus,
  AttitudeCommand: AttitudeCommand,
  RawRC: RawRC,
  Supply: Supply,
  YawrateCommand: YawrateCommand,
  HeadingCommand: HeadingCommand,
  PositionXYCommand: PositionXYCommand,
  RawImu: RawImu,
  ControllerState: ControllerState,
  ServoCommand: ServoCommand,
  RawMagnetic: RawMagnetic,
  HeightCommand: HeightCommand,
  VelocityZCommand: VelocityZCommand,
  RuddersCommand: RuddersCommand,
  Compass: Compass,
  MotorCommand: MotorCommand,
  ThrustCommand: ThrustCommand,
  VelocityXYCommand: VelocityXYCommand,
  Altimeter: Altimeter,
  TakeoffActionFeedback: TakeoffActionFeedback,
  LandingActionFeedback: LandingActionFeedback,
  LandingResult: LandingResult,
  PoseActionFeedback: PoseActionFeedback,
  PoseResult: PoseResult,
  TakeoffGoal: TakeoffGoal,
  LandingFeedback: LandingFeedback,
  PoseAction: PoseAction,
  TakeoffActionResult: TakeoffActionResult,
  LandingGoal: LandingGoal,
  TakeoffResult: TakeoffResult,
  TakeoffFeedback: TakeoffFeedback,
  LandingActionResult: LandingActionResult,
  TakeoffActionGoal: TakeoffActionGoal,
  LandingAction: LandingAction,
  PoseActionGoal: PoseActionGoal,
  TakeoffAction: TakeoffAction,
  PoseActionResult: PoseActionResult,
  PoseGoal: PoseGoal,
  LandingActionGoal: LandingActionGoal,
  PoseFeedback: PoseFeedback,
};
