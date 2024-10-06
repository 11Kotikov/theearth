import * as BABYLON from 'babylonjs';
import { createScene } from './scene';
import { createEarth } from './earth';
import { createStarField } from './starField';
import { createFallingStars } from './fallingStars';
import { createFlyingPlane } from './plane';

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);

// Создаём сцену
const scene = createScene(engine, canvas);

// Добавляем объекты на сцену
createEarth(scene);
createStarField(scene);
createFallingStars(scene);
createFlyingPlane(scene);

// Запуск рендеринга
engine.runRenderLoop(() => {
    scene.render();
});

// Адаптация сцены при изменении размера окна
window.addEventListener('resize', () => {
    engine.resize();
});