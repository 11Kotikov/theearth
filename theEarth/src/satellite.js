import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

let satelliteArray = [];
const earthRadius = 2.5;
const orbitRadius = earthRadius + 0.5;

export async function createSatellite(scene) {
    try {
        const result = await BABYLON.SceneLoader.ImportMeshAsync(
            null,
            './models/space_satellite/',
            'scene.gltf',
            scene
        );
        const satellite = result.meshes[0];
        satellite.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);

        // Устанавливаем начальную позицию спутника на орбите
        satellite.position.y = 0;
        satellite.position.x = orbitRadius;
        satellite.position.z = 0;


        satellite.rotate(BABYLON.Axis.Z, Math.PI / 2, BABYLON.Space.LOCAL);
        satelliteArray.push(satellite);

        return satellite; // Возвращаем созданный объект спутника
    } catch (error) {
        console.error("Ошибка загрузки спутника:", error);
    }
}

export function createOrbitPivot(scene) {
    // Создаем невидимый pivot для орбиты
    const pivot = new BABYLON.TransformNode("pivot", scene);
    pivot.position = BABYLON.Vector3.Zero(); // Центр Земли

    // Поворачиваем pivot, чтобы задать наклон орбиты
    pivot.rotation.z = BABYLON.Tools.ToRadians(30);

    return pivot;
}

export function animateSatellite(scene, pivot) {
    let angle = 0; // Начальный угол орбиты
    scene.registerBeforeRender(() => {
        // Увеличиваем угол для плавного движения
        angle -= 0.01;

        // Вращаем pivot вокруг центра Земли
        pivot.rotation.y = angle;

        // Поворачиваем спутник по ходу орбиты
        if (pivot.getChildren().length > 0) {
            const satellite = pivot.getChildren()[0];
            satellite.rotation.y = Math.PI / 2; // Поворачиваем относительно движения
        }
    });
}


export async function initializeSattelite(scene) {
    const pivot = createOrbitPivot(scene); // Создаем pivot для орбиты
    const satellite = await createSatellite(scene);
    if (satellite) {
        satellite.parent = pivot; // Присоединяем спутник к pivot
        animateSatellite(scene, pivot);
        return satellite; // Возвращаем объект спутника для привязки камеры
    }
}