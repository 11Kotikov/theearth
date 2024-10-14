import * as BABYLON from 'babylonjs';

export async function createAPlanet(scene) {
    try {
        const result = await BABYLON.SceneLoader.ImportMeshAsync(
            null,
            './models/', 
            'a_planet.glb',
            scene
        );
        const aPlanet = result.meshes[0];  
    } catch (error) {
        console.error("Ошибка загрузки модели самолета: ", error);
    }
}