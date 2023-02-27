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
    await delay (2);
    
    await roll((getHeading() + 35), 38, 2);
    setMainLed({ r: 225, g: 0, b: 0});
    await delay (2);
    
    await roll((getHeading() + 270), 26, 2);
    await roll((getHeading() + 270), 25, 2);
    await roll((getHeading() + 0), 23, 2);
    await delay (2);
    await roll((getHeading() + 90), 29, 2);
    await Sound.Animal.Eagle.play(true);
    await delay (2);
    
    await roll((getHeading() + 45), 32, 2);
    await roll((getHeading() + 270), 28, 2);
    await delay (2);
    setMainLed({ r: 0, g: 225, b: 0});
    
    await roll((getHeading() + 270), 34, 2);
    await Sound.Animal.Eagle.play(true);
    await delay (2); 
    
    await roll((getHeading() + 315), 24, 2);
    await roll((getHeading() + 45), 40, 2);
    setMainLed({ r: 45, g: 0, b: 225});
    await delay (2);
    await scrollMatrixText('Finish', { r: 225, g: 225, b: 225 }, 30, true)
    
    
}

async function startProgram() {
    await ledSpeak()  
    await runMaze()
}
