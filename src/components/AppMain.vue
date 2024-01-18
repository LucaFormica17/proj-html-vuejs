<script>
import { store } from '../store.js'
import Jumbotron from './Jumbotron.vue';
import SectionMostViewed from './SectionMostViewed.vue';
import AppCarousell from './AppCarousell.vue';
import FeaturedOnlineCourses from './FeaturedOnlineCourses.vue';
import Video from './Video.vue';
import AppSubscribe from './AppSubscribe.vue';
import Counter from './Counter.vue';


export default {
    name: 'AppMain',
    components: {
        Jumbotron,
        SectionMostViewed,
        AppCarousell,
        FeaturedOnlineCourses,
        Video,
        AppSubscribe,
        Counter,

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
        <Video />
        <AppCarousell />
        <SectionMostViewed />
        <AppSubscribe />
        <Counter/>

    </main>
</template>
<style lang="">
    
</style>