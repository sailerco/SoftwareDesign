namespace QuizApp{
    export class Quiz{
        private title: string;
        private author: User;
        private questions: Question[];
        private amountOfQuestions: number;
        private isPublic: boolean;
        
        constructor(_title: string, _author: User, _questions: Question[], _amountOfQuestions: number, _isPublic: boolean){
            this.title = _title;
            this.author = _author;
            this.questions = _questions;
            this.amountOfQuestions = _amountOfQuestions;
            this.isPublic = _isPublic;
        }
        public finalize() : void{}
        public addQuestion() : void{}
    }
}