import * as pixi from "pixi.js"
import { Engine } from "./engine"
const { Container, Graphics } = pixi

const engine = new Engine()

engine.Init()

let game = new Container()
engine.stage.addChild(game)
let box = new Graphics()
box.beginFill(0xFF0000, 0.4)
box.drawRoundedRect(200, 150, 400, 300, 20)
box.endFill()

game.addChild(box)