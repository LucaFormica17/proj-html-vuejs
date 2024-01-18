<script>

import { store } from '../store.js'
import Jumbotron from './Jumbotron.vue';
import SectionMostViewed from './SectionMostViewed.vue';
import AppCarousell from './AppCarousell.vue';
import FeaturedOnlineCourses from './FeaturedOnlineCourses.vue';

export default {
    name: 'AppMain',
    components:{
        Jumbotron,
        SectionMostViewed,
        AppCarousell,
        FeaturedOnlineCourses,
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
        <FeaturedOnlineCourses />
        <SectionMostViewed />
        <AppCarousell />
    </main>
</template>
<style lang="">
    
</style>