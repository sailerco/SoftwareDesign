"use strict";
var QuizApp;
(function (QuizApp) {
    var Stats = /** @class */ (function () {
        function Stats(_userId, _playedQuizzes, _answeredQuizzes, _correctQuizzes) {
            this.userId = _userId;
            this.playedQuizzes = _playedQuizzes;
            this.answeredQuizzes = _answeredQuizzes;
            this.correctQuizzes = _correctQuizzes;
        }
        Stats.prototype.getPercentage = function (correctAnswers, answeredQuestions) {
            return 1; //platzhalter
        };
        return Stats;
    }());
    QuizApp.Stats = Stats;
})(QuizApp || (QuizApp = {}));
