namespace QuizApp{
    export class Answer{
        private title: string;
        private isCorrect: boolean;
        constructor(_titel:string, _isCorrect:boolean){
            this.title = _titel;
            this.isCorrect = _isCorrect;
        }
    }
}