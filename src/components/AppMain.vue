<script>

import { store } from '../store.js'
import Jumbotron from './Jumbotron.vue';
import SectionMostViewed from './SectionMostViewed.vue';
import AppCarousell from './AppCarousell.vue';
import FeaturedOnlineCourses from './FeaturedOnlineCourses.vue';
import AppSubscribe from './AppSubscribe.vue';

export default {
    name: 'AppMain',
    components:{
        Jumbotron,
        SectionMostViewed,
        AppCarousell,
        FeaturedOnlineCourses,
        AppSubscribe
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
        <AppCarousell />
        <SectionMostViewed />
        <AppSubscribe />
    </main>
</template>
<style lang="">
    
</style>