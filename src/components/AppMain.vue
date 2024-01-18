<script>

import { store } from '../store.js'
import Jumbotron from './Jumbotron.vue';
import SectionMostViewed from './SectionMostViewed.vue';
import AppCarousell from './AppCarousell.vue';
import Video from './Video.vue';

export default {
    name: 'AppMain',
    components: {
        Jumbotron,
        SectionMostViewed,
        AppCarousell,
        Video,
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
        <Video />
        <AppCarousell />
    </main>
</template>
<style lang="">
    
</style>