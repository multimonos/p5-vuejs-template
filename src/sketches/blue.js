import p5 from 'p5'

export default p => {

    let ctr

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        ctr = new p5.Vector(p.width, p.height).mult(0.5)
        console.log('blue loaded')
    }

    p.draw = () => {
        p.fill(0, 0, 255)
        p.circle(ctr.x, ctr.y, 100)
    }

}