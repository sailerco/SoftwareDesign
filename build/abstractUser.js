"use strict";
var QuizApp;
(function (QuizApp) {
    var AbstractUser = /** @class */ (function () {
        function AbstractUser(_userId, _userName, _password) {
            this.userId = _userId;
            this.userName = _userName;
            this.password = _password;
        }
        AbstractUser.prototype.playQuiz = function () {
        };
        AbstractUser.prototype.showStats = function (userId) {
            return null;
        };
        AbstractUser.prototype.signUp = function () {
        };
        AbstractUser.prototype.logIn = function () {
            return true; //Platzhalter
        };
        AbstractUser.prototype.isNull = function () {
            return true; //Platzhalter
        };
        return AbstractUser;
    }());
    QuizApp.AbstractUser = AbstractUser;
})(QuizApp || (QuizApp = {}));
