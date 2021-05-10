namespace QuizApp{
    export class User {
        private userId: number;
        private userName?: string;
        private password?: string;
       
        constructor(_userId: number, _userName: string, _password: string) {
            this.userId = _userId;
            this.userName = _userName;
            this.password = _password;
        }
    
    
        public playQuiz(): void {
    
        }
        public showStats(userId: number): void{
    
        }
        public signUp(): void {
            
        }
        public isNull(): boolean {
            return true;    //Platzhalter
        }
        public logIn(): boolean {
            return true;    //Platzhalter
        }
    }
}