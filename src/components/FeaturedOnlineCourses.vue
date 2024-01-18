<script>
    import { store } from '../store';

    export default {
        name: 'FeaturedOnlineCourses',
        data() {
            return {
                store
            }
        },
    }
</script>

<template>
<div class="background">
    <div class="container py-4">
        <h6 class="my-2">
            Stimulated to learn?
        </h6>
        <h1 class="my-2">
            Featured Online Courses
        </h1>

        <div class="row">
            <div v-for="course, index in store.featuredCourses" :key="index" class="col-6 d-flex my-4">
                <div class="image-container">
                    <img :src="`/src/images/${course.img}`" class="round-image">
                </div>
                <div class="data-container">
                    <div class="price">
                        {{ course.price }}<span v-if="course.priceCents != ''" class="price-cents">{{ course.priceCents }}</span>
                    </div>
                    <div class="title">
                        {{ course.title }} 
                    </div>
                    <span class="sub-data">
                        <i class="far fa-file-alt" /> {{ course.lessons }} Lessons 
                    </span>
                    <span class="sub-data">
                        <i class="far fa-user" /> {{ course.students }} Students 
                    </span>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center">
            <div class="btn view-button">View all courses &#10140;</div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use './styles/partials/variables' as *;

.background{
    background-color: #F5F7FA;
    .container{
        h6{
            color: $dark_text;
            text-align: center;
            text-transform: uppercase;
            font-kerning: normal;
        }

        h1{
            text-align: center;
            font-weight: bold;
        }

        .view-button{
            background-color: $main_green;
            color: white;
            padding: 1rem 3rem;
        }
    }
}

.image-container{
    height: 175px;
    width: 175px;
    aspect-ratio: 1 / 1;
    .round-image{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
}

.data-container{
    padding: 2rem;
    .price{
        font-size: 20px;
        font-weight: bold;
        color: $main_green;
        
        .price-cents{
            font-size: 15px;
        }
    }

    .title{
        font-size: 20px;
        font-weight: bold;
        color: $main_violet;
    }

    .sub-data{
        font-size: 15px;
        color: $dark_text;
    }
}
</style>