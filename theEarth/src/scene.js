import * as BABYLON from 'babylonjs';

export function createScene(engine, canvas) {
    // Создаём новую сцену
    const scene = new BABYLON.Scene(engine);

    //Цвет сцены
    scene.clearColor = new BABYLON.Color3(0.0, 0.0, 0.0);

    // Камера
    // const camera = new BABYLON.ArcRotateCamera('camera1', 16.8, Math.PI / 3, 12, BABYLON.Vector3.Zero(), scene);
    // camera.attachControl(canvas, true);

    // Свет
    // const hemiLight = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    // hemiLight.intensity = 0.7;

    function isLightOn(turnOn) {

        while (true) {
            const sunLight = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(25, 0, -10), scene);
            sunLight.intensity = 0.8; // Интенсивность света
            sunLight.diffuse = new BABYLON.Color3(1, 0.95, 0.85); // Легкий теплый оттенок
            sunLight.specular = new BABYLON.Color3(1, 1, 1); // Белый цвет для бликов
            // Включаем тени
            sunLight.shadowMinZ = 0;
            sunLight.shadowMaxZ = 500;
            sunLight.shadowEnabled = true;

            // Дополнительный Hemispheric Light для рассеянного освещения
            const hemiLight = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(0, 2, 0), scene);
            hemiLight.intensity = 0.3; // Более мягкий свет, чтобы добавить рассеянный эффект
            hemiLight.diffuse = new BABYLON.Color3(0.8, 0.8, 1); // Легкий оттенок холодного света для дневного эффекта
            hemiLight.specular = new BABYLON.Color3(0, 0, 0); // Убираем блики

            // Настройка позиций света, чтобы создать эффект солнечного освещения
            sunLight.position = new BABYLON.Vector3(50, 100, 50);


            return sunLight;
        }
    }

    let sunLight = isLightOn(false);

    //тени
    const shadowGenerator = new BABYLON.ShadowGenerator(2048, sunLight);
    shadowGenerator.useBlurExponentialShadowMap = true; // Мягкие тени
    shadowGenerator.blurKernel = 8; // Увеличьте для большей мягкости теней
    shadowGenerator.usePoissonSampling = true; // Улучшение качества теней


    // const pointLight = new BABYLON.PointLight('light', new BABYLON.Vector3(10, 10, 0), scene);
    // pointLight.intensity = 0.8;
    // function updateLightPosition(pointLight, camera) {
    //     pointLight.position = camera.position;
    // }
    // scene.registerBeforeRender(updateLightPosition(pointLight, camera));


    // Возвращаем сцену
    return scene;
}