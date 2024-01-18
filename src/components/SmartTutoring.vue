<script>
    import { store } from '../store';

    export default {
        name: 'SmartTutoring',
        data() {
            return {
                store
            }
        },
    }
</script>

<template>
    <div class="container py-4">

        <h6 class="my-2">
            Maxcoach Available Courses
        </h6>
        <h2 class="my-2">
            Access <span>Smart Tutoring</span> Program for Benefits.
        </h2>

        <div class="row">
            <div v-for="option, index in store.smartTutoring" :key="index" class="position-relative custom-column">
                <img :src="`${option.img}`" class="py-3">
                <h4>{{ option.title }}</h4>
                <div class="option-description pb-4">{{ option.description }}</div>
                <span class="option-button">{{ option.button }} &#10140;</span>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use './styles/partials/variables' as *;
@use './styles/partials/mixin' as *;

.custom-column{
    width: calc(100% / 3 - 3rem);
    margin: 1rem;

    &:hover{
        cursor: pointer;
        
        .option-button{
            color: $main_green;
            border-bottom: 1px solid gray;
            transition-property: border;
            transition-delay: 0.2s;
            transition-duration: 1s;
        }
    }
}

h6{
    @include teaser-title;
}

h2{
    @include important-title;

    span{
        color: $main_green;
    }
}

h4{
    color: $main_violet;
    font-weight: bolder;
}

.option-description{
    color: $dark_text;
}

.option-button{
    color: $dark_text;
    font-weight: bolder;
    position: absolute;
    bottom: 0;
}
</style>