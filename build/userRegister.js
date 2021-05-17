"use strict";
var QuizApp;
(function (QuizApp) {
    var UserRegister = /** @class */ (function () {
        function UserRegister(_userId, _quiz, _password, _userName) {
            this.password = _password;
            this.userName = _userName;
            this.userId = _userId;
            this.quiz = _quiz;
        }
        UserRegister.prototype.createQuiz = function () {
            return null;
        };
        UserRegister.prototype.playQuiz = function () {
        };
        UserRegister.prototype.logIn = function () {
            return false;
        };
        UserRegister.prototype.signUp = function () {
        };
        UserRegister.prototype.isNull = function () {
            return false;
        };
        UserRegister.prototype.showStats = function (_userId) {
            return null;
        };
        return UserRegister;
    }());
    QuizApp.UserRegister = UserRegister;
})(QuizApp || (QuizApp = {}));
