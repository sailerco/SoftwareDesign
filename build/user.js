"use strict";
var QuizApp;
(function (QuizApp) {
    var User = /** @class */ (function () {
        function User(_userId, _userName, _password) {
            this.userId = _userId;
            this.userName = _userName;
            this.password = _password;
        }
        User.prototype.playQuiz = function () {
        };
        User.prototype.showStats = function (userId) {
        };
        User.prototype.signUp = function () {
        };
        User.prototype.isNull = function () {
            return true; //Platzhalter
        };
        User.prototype.logIn = function () {
            //Abfrage Username + Password -> if false: try again
            console.log;
            this.signUp(); //unregistered User can only sign up
            return true; //Platzhalter
        };
        return User;
    }());
    QuizApp.User = User;
})(QuizApp || (QuizApp = {}));
