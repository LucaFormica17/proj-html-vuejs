<script>
import { store } from '../store'
export default {
    name: 'SectionMostViewed',
    data() {
        return {
            store
        }
    },    
}
</script>
<template lang="">
    <div class="bg py-5">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="list">
                        <p>ENJOYABLE INSIGHTS</p>
                        <span class="text">Most Viewed <span class="text-end">Best Blogs </span></span>
                        <ul>
                            <li><i class="fa-solid fa-arrow-right fa-2xs mt-5"></i>Become a Better Blogger: Content Planning</li>
                            <li><i class="fa-solid fa-arrow-right fa-2xs"></i>Promoting Your Online Business on Pinterest</li>
                            <li><i class="fa-solid fa-arrow-right fa-2xs"></i>Gamification and Game-Based Learning</li>
                            <li><i class="fa-solid fa-arrow-right fa-2xs"></i>Designing an Online Course from Expert's Perspective</li>
                            <li><i class="fa-solid fa-arrow-right fa-2xs"></i>Why Online Courses Are the Future of Education</li>
                        </ul>
                    </div>
                </div>
                <div class="col-8">
                    <div class="my-card d-flex justify-content-around my-5" >
                        <div class="card" v-for="date, index in store.MostViewed" :key="index">
                            <div class="image">
                                <img :src="date.img" alt="">
                            </div>
                            <div class="info">
                                <h5>{{ date.work }}</h5>
                                <h3>{{ date.articol }}</h3>
                                <div class="info-end d-flex justify-content-between mt-4">
                                    <span><i class="fa-regular fa-calendar fa-2xs" style="color: #707070;"></i> {{ date.data }}</span>
                                    <span><i class="fa-solid fa-eye fa-2xs" style="color: #737373;"></i> {{ date.views }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../components/styles/partials/variables' as *;
.bg{
    background-color: $bg_mostviewed;
    .list{
       margin-top: 120px; 
    }
    p{
        color: $violet_text;
    }
    .text{
        font-size: 35px;
        font-weight: 600;
    }
    .text-end{
        font-weight: 400;
        color: $main_green;
    }
    ul{
        list-style: none;
        padding-left: 0px;

        li{
            font-weight: bold;
            margin-bottom: 20px;
            .fa-solid{
                margin-right: 20px;
            }
        }
    }
    .my-card{
        width: 100%;
        flex-wrap: nowrap;
        margin-left: 50px;
        .card{
            width: calc(100% / 2 - 10px);
            border: none;
            border-radius: 10px;
            margin: 20px;
            
            img{
                width: 100%;
            }
            .info{
                padding: 30px;
                h5{
                    color: $violet_text;
                    font-weight: 600;
                }
                h3{
                    font-weight: 600;
                }
                span{
                    font-size: 18px;
                    color: $violet_text;
                }
            }
        }
    }
}
    
</style>