"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = __importDefault(require("firebase"));
var firebaseConfig = {
    apiKey: "AIzaSyDQ3z8IDdzAYY2ig397u6f92UmeaZ7Ct5w",
    authDomain: "survey-5830d.firebaseapp.com",
    databaseURL: "https://survey-5830d.firebaseio.com",
    projectId: "survey-5830d",
    storageBucket: "survey-5830d.appspot.com",
    messagingSenderId: "93085809953",
    appId: "1:93085809953:web:2d0f7590368426023bd260"
};
// Initialize Firebase
firebase_1.default.initializeApp(firebaseConfig);
exports.default = firebase_1.default;
