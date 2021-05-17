"use strict";
var QuizApp;
(function (QuizApp) {
    var MultipleChoiceOption = /** @class */ (function () {
        function MultipleChoiceOption(_option, _correct) {
            this.option = _option;
            this.correct = _correct;
        }
        return MultipleChoiceOption;
    }());
    QuizApp.MultipleChoiceOption = MultipleChoiceOption;
})(QuizApp || (QuizApp = {}));
