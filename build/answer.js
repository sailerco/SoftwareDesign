"use strict";
var QuizApp;
(function (QuizApp) {
    var Answer = /** @class */ (function () {
        function Answer(_titel, _isCorrect) {
            this.title = _titel;
            this.isCorrect = _isCorrect;
        }
        return Answer;
    }());
    QuizApp.Answer = Answer;
})(QuizApp || (QuizApp = {}));
