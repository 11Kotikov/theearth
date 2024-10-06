export function createFallingStars (scene) {
            // Create a particle system for the skies or starfield
            var fallingStars = new BABYLON.ParticleSystem("particles", 2000, scene);
            // Set the texture for the particles
            fallingStars.particleTexture = new BABYLON.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", scene);
            // Set the emitter to be the sphere
            fallingStars.emitter = new BABYLON.MeshBuilder.CreateSphere("emitter");
            // Set the particle system properties
            fallingStars.minEmitBox = new BABYLON.Vector3(-15, -15, -15); // Minimum emission box
            fallingStars.maxEmitBox = new BABYLON.Vector3(15, 15, 15); // Maximum emission box
            fallingStars.minSize = 0.05; // Minimum particle size
            fallingStars.maxSize = 0.10; // Maximum particle size
            fallingStars.minLifeTime = 0.5; // Minimum particle lifetime
            fallingStars.maxLifeTime = 0.8; // Maximum particle lifetime
            fallingStars.emitRate = 50; // Emission rate
            fallingStars.gravity = new BABYLON.Vector3(10, 1, 0);
            fallingStars.direction1 = new BABYLON.Vector3(0, 0, -1);
            fallingStars.direction2 = new BABYLON.Vector3(0, 2, 0);
            fallingStars.color1 = new BABYLON.Color4(1, 1, 1, 1); // White color
            fallingStars.color2 = new BABYLON.Color4(1, 1, 1, 1); // White color
            fallingStars.colorDead = new BABYLON.Color4(0, 0, 0, 0); // No color when dead
            // Start the particle system
            fallingStars.start();
            return fallingStars;
}