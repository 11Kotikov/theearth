import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export async function createFlyingPlane(scene) {
    try {
        const result = await BABYLON.SceneLoader.ImportMeshAsync(
            null,
            './models/',  // Убедитесь, что путь к папке с моделью правильный
            'Airbus_A310.glb',
            scene
        );

        const plane = result.meshes[0];  // Модель самолета
        // Установка свойств самолета
        
        plane.scaling = new BABYLON.Vector3(0.09, 0.09, 0.09);  // Уменьшение масштаба самолета
        plane.rotation =  new BABYLON.Vector3(0, 0, 5.2);
        
        // Анимация полета
        // Параметры орбиты
        const earthRadius = 2.5;  // Радиус Земли (диаметр 5.0, орбита чуть выше)
        const orbitRadius = earthRadius + 0.5;  // Радиус орбиты самолета
        let angle = 0;  // Начальный угол

        // Анимация полета по орбите
        scene.registerBeforeRender(() => {
            // Скорость вращения (угловая скорость)
            angle += 0.01;

            // Обновляем позицию самолета
            plane.position.x = orbitRadius * Math.cos(angle);
            plane.position.z = orbitRadius * Math.sin(angle);
            plane.position.y = 0;  // Высота над поверхностью Земли

            // Направление самолета по движению
            plane.rotation.y = -angle;  // Поворачиваем по оси Y, чтобы самолёт смотрел по направлению полёта
        });

    } catch (error) {
        console.error("Ошибка загрузки модели самолета: ", error);
    }
}