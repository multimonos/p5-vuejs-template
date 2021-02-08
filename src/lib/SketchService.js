import p5 from "p5"
import sketches from "../config/sketches";

const SketchService = data => {
    return {
        get: id => data[id],
        has: id => Object.keys(data).includes(id),// console.log(id),//this.ids().includes(id),
        ids: () => Object.keys(data),
        create: domElement => id => {
            return new p5(sketches[id], domElement)
        }
    }
}

export default SketchService(sketches)




