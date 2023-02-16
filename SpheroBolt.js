//Team: Sullivan Abegg & Dylan Bellinger
//Date: 2.13.2023
//Project: SpheroBolt Labyrinth

/**Hello World Practice Program
 *LED turn to blue
 *Forward for for 2 seconds at a speed of 60
*/
 async function ledSpeak() {
 await scrollMatrixText('Start', { r: 225, g: 225, b: 225 }, 30, true)
 setSpeed(60);
 await delay (2);
 setSpeed(0);

}
async function runMaze() {
    await roll((getHeading() + 0), 20, 2);
    setMainLed({ r: 0, g: 0, b: 255});
    await delay (2);
    
    await roll((getHeading() + 90), 50, 2);  
    await delay (2);
    await roll((getHeading() + 90), 37, 2);
    await Sound.Animal.Eagle.play(true);
    
    await roll((getHeading() + 35), 40, 2);
    setMainLed({ r: 225, g: 0, b: 0});
    
    await roll((getHeading() + 270), 21, 2);
    await roll((getHeading() + 270), 20, 2);
    await roll((getHeading() + 0), 25, 2);
    await roll((getHeading() + 90), 20, 2);
    await Sound.Animal.Eagle.play(true);
    
    await roll((getHeading() + 45), 25, 2);
    await roll((getHeading() + 270), 30, 2);
    setMainLed({ r: 0, g: 225, b: 0});
    
    await roll((getHeading() + 270), 30, 2);
    await roll((getHeading() + 315), 20, 1);
}

async function startProgram() {
    await ledSpeak()  
    await runMaze()
}
