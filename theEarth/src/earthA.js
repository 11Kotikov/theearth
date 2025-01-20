import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

// как развернуть нормали земли
// https://forum.babylonjs.com/t/gltf-mesh-is-being-imported-inside-out/9554

let earthArray = [];
export async function createTheEarth(scene) {
        try {
            const result = await BABYLON.SceneLoader.ImportMeshAsync(
                null,
                './models/gltf/',
                'the_earth.gltf',
                scene
            );
            const earth = result.meshes[0];
            earth.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
            earthArray.push(earth);
    
            return earth; 
        } catch (error) {
            console.error("Ошибка загрузки земли:", error);
        }
    }