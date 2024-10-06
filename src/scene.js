import * as BABYLON from 'babylonjs';

export function createScene(engine, canvas) {
    // Создаём новую сцену
    const scene = new BABYLON.Scene(engine);

    //Цвет сцены
    scene.clearColor = new BABYLON.Color3(0.0, 0.0, 0.0);
    scene.createDefaultEnvironment({
        createSkybox: false,
        createGround: false,
        cameraContrast: 2,
        cameraExposure: 1
    });

    // Камера
    const camera = new BABYLON.ArcRotateCamera('camera1', -5, Math.PI / 2, 25, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Свет
    const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    // Возвращаем сцену
    return scene;
}