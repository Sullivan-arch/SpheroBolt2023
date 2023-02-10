//Programmer: Sullivan Abegg
//Date: 2.6.2023
//Project: Sphero Bolt


/**Hello World Practice Program
 *LED turn to blue
 *Forward for for 2 seconds at a speed of 60
*/
 async function helloWorld() {
 await speak("Hello World", true);
 setMainLed({ r: 0, g: 0, b: 255});
 setSpeed(60);
 await delay (2);
 setSpeed(0);

}



/**fullSpeed function goes forward for 6 seconds at 100 speed
*/
async function fullSpeed() {
    await roll((getHeading() + 0), 100, 6); // Heading 0 degrees at 60 speed for 4 seconds
    await delay(1);
    await Sound.Animal.Rooster.play(true);
   await roll((getHeading() + 270), 250, 6); // Heading 0 degrees at 60 speed for 4 seconds
    await Sound.Animal.Rooster.play(true);
    await roll((getHeading() + 270), 500, 6); // Heading 0 degrees at 60 speed for 4 seconds
}

/**
 * startSquare function turns to hte color blue at high brightness. It then says Hello Square waits one second and then spin 360 degrees
 * It then runs a loop 4 times. It changes it's color randomly plays a coin sound and then rotates 90 degrees and moves forward at 60 speed
 * for 3 seconds
*/
/**async function startSquare() {

    *setMainLed({ r: 0, g: 0, b: 255 });

    *await speak("Hello Square", true);

   8 await delay(1);
    
    await spin(360, 1)

    for (var _i1 = 0; _i1 < 4; _i1++) {

        setMainLed(getRandomColor());

        await Sound.Game.Coin.play(true);

        await roll((getHeading() + 90), 60, 3);

        await delay(1);

   }

}









/**
 * startProgram function sends the program to your Sphero Bolt
*/
async function startProgram() {
    await fullSpeed()  //<--- calling hello world function
/**await ninetyDegree()   //<--calling the ninetyDegree function to run it
*/
}