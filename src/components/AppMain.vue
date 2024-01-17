<script>
import { store } from '../store.js'
import Jumbotron from './Jumbotron.vue';
export default {
    name: 'AppMain',
    components:{
        Jumbotron,
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <main>
        <Jumbotron />
    </main>
</template>
<style lang="">
    
</style>