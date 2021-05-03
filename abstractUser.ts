namespace QuizApp{
    export abstract class AbstractUser{

        private userId: number;
        private userName?: string;
        private password?: string;
    
        constructor(_userId: number, _userName: string, _password: string){
            this.userId = _userId;
            this.userName = _userName;
            this.password = _password;
        }
    
    
        public playQuiz(): void{
    
        }
        public showStats(userId: number): Stats[] | null {
            return null;
        }
        public signUp(): void {
    
        }
        public logIn(): boolean {
            return true;    //Platzhalter
        }
        public isNull(): boolean {
            return true;    //Platzhalter
        }
    }
}