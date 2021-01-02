import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";

import { Engine, Scene, ArcRotateCamera, Vector3, 
    HemisphericLight, Mesh, MeshBuilder } from "@babylonjs/core";

class App {
    private a_canvas: HTMLCanvasElement;
    private a_engine: Engine;
    private a_scene: Scene;
    private a_id;

    constructor () {
        this.a_canvas = document.createElement("canvas");
        this.a_canvas.style.width = "100%";
        this.a_canvas.style.height = "100%";
        this.a_canvas.id = "gameCanvas";
        document.body.appendChild(this.a_canvas);

        this.a_engine = new Engine(this.a_canvas, true);
        this.a_scene = new Scene(this.a_engine);
        var camera: ArcRotateCamera = new ArcRotateCamera("arcCamera", Math.PI / 2, Math.PI / 2, 3, new Vector3(0, 0, 0), this.a_scene);
        camera.attachControl(this.a_canvas);
        var light: HemisphericLight = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), this.a_scene);
        const sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, this.a_scene);

        window.addEventListener("keydown", (ev) => {
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (this.a_scene.debugLayer.isVisible()) {
                    this.a_scene.debugLayer.hide();
                } else {
                    this.a_scene.debugLayer.show();
                }
            }
        });

        this.a_engine.runRenderLoop(() => {
            this.a_scene.render();
        })
    }

}
new App();
