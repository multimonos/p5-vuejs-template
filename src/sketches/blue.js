import p5 from 'p5'
import WindowResized from "./mixin/WindowResized";

export default p => {

    let ctr

    Object.assign(p, WindowResized(p))

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        ctr = new p5.Vector(p.width, p.height).mult(0.5)
        console.log('blue loaded')
    }

    p.draw = () => {
        p.fill(p.color(0, 0, 255, 8))
        p.rect(0, 0, p.width, p.height)
        p.fill(0, 0, 255)
        p.circle(p.frameCount, ctr.y, 100)
    }

}