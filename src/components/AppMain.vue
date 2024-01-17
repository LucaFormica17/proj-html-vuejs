<script>

import { store } from '../store.js'
import Jumbotron from './Jumbotron.vue';
import SectionMostViewed from './SectionMostViewed.vue';

export default {
    name: 'AppMain',
    components:{
        Jumbotron,
        SectionMostViewed,

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
        <SectionMostViewed />

    </main>
</template>
<style lang="">
    
</style>