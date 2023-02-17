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
    
    await roll((getHeading() + 90), 52, 2);  
    await delay (2);
    await roll((getHeading() + 90), 39, 2);
    await Sound.Animal.Eagle.play(true);
    
    await roll((getHeading() + 35), 38, 2);
    setMainLed({ r: 225, g: 0, b: 0});
    await delay (2);
    
    await roll((getHeading() + 270), 26, 2);
    await roll((getHeading() + 270), 21, 2);
    await roll((getHeading() + 0), 25, 2);
    await roll((getHeading() + 90), 25, 2);
    await Sound.Animal.Eagle.play(true);
    
    await roll((getHeading() + 45), 32, 2);
    await roll((getHeading() + 270), 32, 2);
    await delay (2);
    setMainLed({ r: 0, g: 225, b: 0});
    
    await roll((getHeading() + 270), 30, 2);
    await roll((getHeading() + 315), 25, 1);
    await roll((getHeading() + 90), 90, 1);
    setMainLed({ r: 40, g: 0, b: 225});
}

async function startProgram() {
    await ledSpeak()  
    await runMaze()
}
