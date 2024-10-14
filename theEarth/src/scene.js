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
    const camera = new BABYLON.ArcRotateCamera('camera1', -50, Math.PI / 2, 25, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Свет
    const hemiLight = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    hemiLight.intensity = 0.7;

    let pointLight = new BABYLON.PointLight('light', new BABYLON.Vector3(10, 10, 0), scene);
    pointLight.intensity = 0.8;

    function updateLightPosition() {
        pointLight.position = camera.position;
    }

    // Возвращаем сцену
    return scene;
}