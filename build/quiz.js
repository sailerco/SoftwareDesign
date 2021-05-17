"use strict";
var QuizApp;
(function (QuizApp) {
    var Quiz = /** @class */ (function () {
        function Quiz(_title, _author, _questions, _amountOfQuestions, _isPublic) {
            this.title = _title;
            this.author = _author;
            this.questions = _questions;
            this.amountOfQuestions = _amountOfQuestions;
            this.isPublic = _isPublic;
        }
        Quiz.prototype.finalize = function () { };
        Quiz.prototype.addQuestion = function () { };
        return Quiz;
    }());
    QuizApp.Quiz = Quiz;
})(QuizApp || (QuizApp = {}));
