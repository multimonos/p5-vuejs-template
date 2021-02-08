import p5 from 'p5'

export default p => {

    let ctr

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        ctr = new p5.Vector(p.width, p.height).mult(0.5)
        console.log('green loaded')
    }

    p.draw = () => {
        p.background(p.color(0, 255, 0, 32))
        p.fill(0, 255, 0)
        p.circle(ctr.x, ctr.y, 100)
        p.noLoop()
    }

}