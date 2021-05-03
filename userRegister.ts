namespace QuizApp{
    export class UserRegister{
        private password?: string;
        private userName?: string;
        private userId: number;
        private quiz: Quiz[];
    
        constructor(_userId: number, _quiz: Quiz[], _password?: string, _userName?: string) {
           this.password = _password;
           this.userName = _userName;
           this.userId = _userId;
           this.quiz = _quiz;
        }
    
        public createQuiz(): Quiz[] {
            return Quiz;
        }
    
        public playQuiz(): void {
    
        }
    
        public logIn(): boolean {
            return false;
        }
    
        public signUp(): void {
    
        }
    
        public isNull(): boolean {
            return false;
        }
    
        public showStats(_userId: number): Stats {
            return Stats;
        }
    }
}