import p5 from "p5"
// import sketches from "../config/sketches";

const SketchService = data => {
    return {
        get: id => data[id],
        all: data,
        has: id => Object.keys(data).includes(id),// console.log(id),//this.ids().includes(id),
        ids: () => Object.keys(data),

    }
}

export default SketchService




