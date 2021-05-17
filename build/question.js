"use strict";
var QuizApp;
(function (QuizApp) {
    var Question = /** @class */ (function () {
        function Question(_title, _type, _answer) {
            this.title = _title;
            this.type = _type;
            this.answer = _answer;
        }
        return Question;
    }());
    QuizApp.Question = Question;
})(QuizApp || (QuizApp = {}));
