import { createLogicalNot } from "typescript";

namespace QuizApp{

  const prompts = require('prompts');
  

  (async () => {
    const startScreen = await prompts([
      {
        type: 'select',
        name: 'value',
        message: 'Do you want to log in or sign up?',
        choices: [
          { title: 'Log In', value: '0' },
          { title: 'Sign Up', value: '1' },
          { title: 'Continue without account', value: '2' }
        ],
        initial: 0
      }
    ]);
    console.log(startScreen);
    //if()/switchcase  //Abfrage, was ausgewählt wurde

    const userSignUpPrompt = (signUp: Boolean) => [
      {
        type: 'text',
        name: 'username',
        message: signUp
        ?'Type your username'
        :'Select new Username. Min. lewngth is 4'
      },
      {
        type: 'password',
        name: 'password', 
        message: signUp
        ?'Enter Password'
        :'Select new Password.'
      }
    ]
    
    if (startScreen.value == 0) {
      console.log("LogIn succeeded");
    }
    else if(startScreen.value == 1) {   //Sign Up

      const { userName, password } = await prompts(userSignUpPrompt(true));
    }
    else if(startScreen.value == 2) { 

    }
  })();
}
