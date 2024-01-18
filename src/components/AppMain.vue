<script>
import { store } from '../store.js'
import Jumbotron from './Jumbotron.vue';
import SectionMostViewed from './SectionMostViewed.vue';
import AppCarousell from './AppCarousell.vue';
import FeaturedOnlineCourses from './FeaturedOnlineCourses.vue';
import SmartTutoring from './SmartTutoring.vue';
import Video from './Video.vue';

export default {
    name: 'AppMain',
    components: {
        Jumbotron,
        SectionMostViewed,
        AppCarousell,
        FeaturedOnlineCourses,
        SmartTutoring,
        Video,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <main>
        <Jumbotron />
        <FeaturedOnlineCourses />
        <SmartTutoring />
        <Video />
        <AppCarousell />
        <SectionMostViewed />
    </main>
</template>

<style lang="">
</style>