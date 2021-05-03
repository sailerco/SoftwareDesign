namespace QuizApp{
    export class MultipleChoiceOption{
        private option: string;
        private correct: boolean;
    
        constructor(_option: string, _correct: boolean) {
            this.option = _option;
            this.correct = _correct;
        }
    }
}