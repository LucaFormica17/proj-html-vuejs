<script>

import { store } from '../store.js'
import Jumbotron from './Jumbotron.vue';
import SectionMostViewed from './SectionMostViewed.vue';
import AppCarousell from './AppCarousell.vue';

export default {
    name: 'AppMain',
    components:{
        Jumbotron,
        SectionMostViewed,
        AppCarousell,
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
        <AppCarousell />
    </main>
</template>
<style lang="">
    
</style>