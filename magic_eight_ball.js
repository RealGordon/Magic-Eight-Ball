/*
program that accepts a user question and responds with a random fortune
__author: gordon.amamoo@amalitech.org
*/
//user provided name
const userName="Kojo";

//print a hello message to the console
console.log( userName ? `Hello, ${userName}!` : 'Hello!');

//a question the  user wants to ask the Magic Eight Ball
const userQuestion="will it rain?";

//print the user's question to the console
console.log(`The user asked: ${userQuestion}`);

//generate a random number to select a magic ball eight response between 0 and 8
const randomNumber=Math.floor(Math.random() * 8);


let eightBall="";

//Magic eight ball responses
switch (randomNumber) {
  case 0:
    eightBall='It is certain';
    break;
  case 1:
     eightBall='It is decidedly so';
    break;
  case 2:
     eightBall='Reply hazy try again';
    break;
  case 3:
     eightBall='Cannot predict now';
    break;
  case 4:
     eightBall='Do not count on it';
    break;
  case 5:
   eightBall='My sources say no';
    break;
  case 6:
   eightBall='Outlook not so good';
    break;
  case 7:
    eightBall='Signs point to yes';
    break;
}

//print the Magic Ball's answer
console.log(`The eight ball answered: ${eightBall}`);



