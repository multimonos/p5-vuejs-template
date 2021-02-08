import p5 from 'p5'

export default p => {

    let ctr

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        ctr = new p5.Vector(p.width, p.height).mult(0.5)
        console.log('red loaded')
    }

    p.draw = () => {
        p.background(0)
        p.fill(255,0,0)
        p.circle(ctr.x, ctr.y, 100)
    }

}