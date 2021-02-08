<template>
    <div>
        a sketch with
        <pre>
            sid    : {{ id }}
            exists : {{ exists(id) ? 'yes' : 'no' }}
        </pre>
        <div v-if="id" id="sketch">sketch</div>
    </div>
</template>

<script>
import SketchService from "../lib/SketchService";

export default {
    name: "Sketch",

    props: ["sketchId"],

    data() {
        return {
            svc: SketchService,
        }
    },

    mounted() {
        // this.id = this.sketchId
        console.log('ids', this.svc.ids())
        console.log('has(blue)', this.svc.has('blue'))
        // console.log('sketchId',this.sketchId)
        // console.log('sketch exists:',this.svc.has(this.sketchId))
        if(this.exists(this.id)) {
            console.log(`found ${this.id}`)
        }
    },

    methods: {
        exists(id) {
            return this.svc.has(id)
        },
        load(id) {
            if (exists(id)) {
                return this.svc.get(id)
            }
            return undefined
        },

    },

    computed: {
        id() {
            return this.sketchId
        }
    }
}
</script>

<style scoped>

</style>