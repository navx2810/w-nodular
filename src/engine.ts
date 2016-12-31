import * as pixi from "pixi.js"

export class Engine {

    renderer = pixi.autoDetectRenderer(800,600)
    stage = new pixi.Container()

    Init() {
        document.body.appendChild(this.renderer.view)
        this.renderer.autoResize = true
        this.renderer.backgroundColor = 0x20242b

        window.requestAnimationFrame(this.Render.bind(this))
        this.renderer.view.style.display = "block"
        this.renderer.view.style.position = "absolute"
        this.Resize()

        window.onload = (e) => { this.Resize() }
    }

    private Render() {
        this.renderer.render(this.stage)
    }

    private Resize() {
        let { innerWidth, innerHeight } = window
        this.renderer.resize(innerWidth, innerHeight)
        console.log(`width: ${innerWidth}, height: ${innerHeight}`)
    }

}