<script>
import { store } from '../store'
import SectionMostViewed from './SectionMostViewed.vue';
export default {
    name: 'AppMain',
    components:{
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
        <SectionMostViewed />
    </main>
</template>
<style lang="">
    
</style>