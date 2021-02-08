<template>
    <div>
        <h1>sketches</h1>
        <ul>
            <li>
                <router-link to="/sketches/red">red</router-link>
            </li>
            <li>
                <router-link to="/sketches/green">green</router-link>
            </li>
            <li>
                <router-link to="/sketches/blue">blue</router-link>
            </li>
        </ul>

        <div>
            <pre>selected id= {{ id }}</pre>
        </div>

        <div>
            <sketch
                v-if="id"
                :sketch-id="id"
                :key="key"
            ></sketch>
        </div>
    </div>
</template>

<script>
// import Vue from "vue"
import sketches from "../config/sketches";
import Sketch from "../components/Sketch.vue";

// console.log(sketches)

//
// keep in mind a sketch could ( in future ) be a complex vue component, so, should
// be able to load those in easily as well
//
export default {
    name: "SketchLoader",

    components: {
        Sketch,
    },

    data() {
        return {
            sketchId: null,
        }
    },

    created() {
        const vm = this
        this.$watch(() => this.$route.params, (toParams, previousParams) => {
                // console.log(toParams, previousParams)
                this.id = toParams.id
                // vm.$set('sketchId', toParams.id)
                // console.log(vm, Vue)
            }
        )
    },

    computed: {
        id: {
            get() {
                return this.sketchId
            },
            set(v) {
                this.sketchId = v
            }
        },
        key() {
            return "sketch-" + this.id
        }
    }


}
</script>

<style scoped>

</style>