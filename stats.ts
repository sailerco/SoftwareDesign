namespace QuizApp{
    export class Stats{
        private userId: number;
        private playedQuizzes: number;
        private answeredQuizzes: number;
        private correctQuizzes: number;
        
        constructor(_userId:number, _playedQuizzes:number, _answeredQuizzes:number, _correctQuizzes:number){
            this.userId = _userId;
            this.playedQuizzes = _playedQuizzes;
            this.answeredQuizzes = _answeredQuizzes;
            this.correctQuizzes = _correctQuizzes;
        }

        public getPercentage(correctAnswers:number, answeredQuestions:number): number{
            return 1; //platzhalter
        }
    }
}