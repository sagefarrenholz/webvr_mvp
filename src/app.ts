import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";

import { Engine, Scene, ArcRotateCamera, Vector3, 
    HemisphericLight, Mesh, MeshBuilder } from "@babylonjs/core";

class App {
    constructor () {
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        var engine: Engine = new Engine(canvas, true);
        var scene: Scene = new Scene(engine);
        var camera: ArcRotateCamera = new ArcRotateCamera("arcCamera", Math.PI / 2, Math.PI / 2, 3, new Vector3(0, 0, 0), scene);
        camera.attachControl(canvas);
        var light: HemisphericLight = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), scene);
        const sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

        window.addEventListener("keydown", function(ev){
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });

        engine.runRenderLoop(() => {
            scene.render();
        })
    }

}
new App();
