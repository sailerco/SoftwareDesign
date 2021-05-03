namespace QuizApp{
    export class Question{
        private title: string;
        private type: string;
        private answer: string[];

        constructor(_title: string, _type: string, _answer: string[]){
            this.title = _title;
            this.type = _type;
            this.answer = _answer;
        }
    }
}