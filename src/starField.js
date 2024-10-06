import * as BABYLON from 'babylonjs';

export function createStarField(scene) {
    // Emitter object
    const stars = BABYLON.Mesh.CreateBox("emitter", 0.01, scene);

    // Create a particle system
    const starsParticles = new BABYLON.ParticleSystem("starsParticles", 500, scene);

    // Texture of each particle
    starsParticles.particleTexture = new BABYLON.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png", scene);

    // Where the stars particles come from
    const starsEmitter = new BABYLON.SphereParticleEmitter();
    starsEmitter.radius = 20;
    starsEmitter.radiusRange = 0; // emit only from shape surface

    // Assign particles to emitters
    starsParticles.emitter = stars; // the starting object, the emitter
    starsParticles.particleEmitterType = starsEmitter;

    // Random starting color
    starsParticles.color1 = new BABYLON.Color4(0.898, 0.737, 0.718, 1.0);
    starsParticles.color2 = new BABYLON.Color4(0.584, 0.831, 0.894, 1.0);

    // Size of each particle (random between...
    starsParticles.minSize = 0.15;
    starsParticles.maxSize = 0.3;

    // Life time of each particle (random between...
    starsParticles.minLifeTime = 999999;
    starsParticles.maxLifeTime = 999999;

    // Burst rate
    starsParticles.manualEmitCount = 500;
    starsParticles.maxEmitPower = 0.0;

    // Blend mode
    starsParticles.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

    // Set the gravity of all particles
    starsParticles.gravity = new BABYLON.Vector3(0, 0, 0);

    // Angular speed, in radians
    starsParticles.minAngularSpeed = 0.0;
    starsParticles.maxAngularSpeed = 0.0;

    // Speed
    starsParticles.minEmitPower = 0.0;
    starsParticles.maxAngularSpeed = 0.0;

    // Billboard settings
    starsParticles.isBillboardBased = true;

    // Render Order
    starsParticles.renderingGroupId = 0;

    // Start the particle system
    starsParticles.start();

    return starsParticles;
}