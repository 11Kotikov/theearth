import * as BABYLON from 'babylonjs';
import { createScene } from './scene';
import { createEarth } from './earth';
import { initializeSattelite } from './satellite.js';
import { createTheEarth } from './earthA.js';

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true, {stencil:true});

// Создаём сцену
const scene = createScene(engine, canvas);

// Камеры
const mainCamera = new BABYLON.ArcRotateCamera('mainCamera', Math.PI / 2, Math.PI / 3, 500, BABYLON.Vector3.Zero(), scene);
mainCamera.attachControl(canvas, true);
scene.activeCamera = mainCamera;

let satelliteCamera;

// Функция для инициализации спутника и создания камеры на нём
async function setupSatellite() {
    const satellite = await initializeSattelite(scene);
    if (satellite) {
        // Создаём камеру на спутнике
        satelliteCamera = new BABYLON.FreeCamera("satelliteCamera", new BABYLON.Vector3(0, 0, 0), scene);
        satelliteCamera.parent = satellite;
        satelliteCamera.rotation.x = Math.PI / 4;
        satelliteCamera.position.z = -1.5; // Устанавливаем положение камеры относительно спутника
    }
}

// Функция переключения камеры
let isSatelliteCameraActive = false;
const switchCameraBtn = document.getElementById('switchCameraBtn');
switchCameraBtn.addEventListener('click', () => {
    if (satelliteCamera && scene.activeCamera !== satelliteCamera) {
        scene.activeCamera = satelliteCamera;
        switchCameraBtn.innerText = "Switch to Main Camera";
        isSatelliteCameraActive = true;
    } else {
        scene.activeCamera = mainCamera;
        switchCameraBtn.innerText = "Switch to Satellite Camera";
        isSatelliteCameraActive = false;
    }
});

// Добавляем объекты на сцену

createEarth(scene);
initializeSattelite(scene, canvas);
setupSatellite();
//createTheEarth(scene);

// Запуск рендеринга
engine.runRenderLoop(() => {
    scene.render();
});

// Адаптация сцены при изменении размера окна
window.addEventListener('resize', () => {
    engine.resize();
});