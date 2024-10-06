import * as BABYLON from 'babylonjs';

export function createEarth(scene) {
    var earth = BABYLON.MeshBuilder.CreateSphere("earthSphere", { diameter: 5.0, segments: 64 }, scene);
    earth.metadata = {
        radius: 5
    };
    //earth's phYsics
    // earth.physicsImpostor = new BABYLON.PhysicsImpostor(earth, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9 }, scene);
    // earth.physicsImpostor.mass = 0;
    // Create core material
    var earthMat = new BABYLON.StandardMaterial("earthMat", scene)
    // Load textures
    var earthTexture = new BABYLON.Texture("assets/textures/earth.jpg", scene)
    earthMat.diffuseTexture = earthTexture;
    var earthNormalTexture = new BABYLON.Texture("assets/textures/earthNormal.jpg", scene);
    earthMat.bumpTexture = earthNormalTexture;
    // Adjust specular color and power to increase shininess
    earthMat.specularColor = new BABYLON.Color3(1, 1, 1); // White specular color
    earthMat.specularPower = 64; // Higher value for more shininess
    earthMat.emissiveColor = new BABYLON.Color3(0.05, 0.2, 0.31);
    // Assign core material to sphere
    earth.material = earthMat;
    // Flip the texture vertically
    earthTexture.vScale = -1;
    earthNormalTexture.vScale = -1;
    earthNormalTexture.vScale = -1; // Flip vertically
    earthNormalTexture.uScale = -1; // Flip horizontally
    return earth;
}