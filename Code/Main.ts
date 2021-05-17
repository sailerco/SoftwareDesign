const prompts = require('prompts');



/* (async () => {
  const response = await prompts({
    type: 'number',
    style: 'emoji',
    name: 'value',
    message: 'How old are you?',
    validate: (value: number) => value < 18 ? `Nightclub is 18+ only` : true
  });

  console.log(response); // => { value: 24 }
  if(response.value == 22){
    console.log("Looking quite young for your age!");
  } 
})
(); */



(async () => {
  const startScreen = await prompts([
    {
      type: 'select',
      name: 'value',
      message: 'Do you want to log in or sign up?',
      choices: [
        { title: 'Log In', value: '0'},
        { title: 'Sign Up', value: '1'},
        { title: 'Continue w/out account', value: '2'}
      ],
      initial: 0
    }
    
  ]);

  console.log(startScreen);
  if()/switchcase  //Abfrage, was ausgewählt wurde
})();

