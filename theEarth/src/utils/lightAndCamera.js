import * as BABYLON from 'babylonjs';    
import {} from 'scene';

function updateLightPosition() {
    light.position = camera.position;
}

// Register the update function to the render loop
        scene.registerBeforeRender(updateLightPosition);