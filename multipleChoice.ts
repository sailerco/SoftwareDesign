namespace QuizApp{
    export class MultipleChoice{
        private options: MultipleChoiceOption[];
    
        constructor(_options: MultipleChoiceOption[]) {
            this.options = _options;
        }
    }
}