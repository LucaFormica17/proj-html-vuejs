<script>
import { store } from '../store'
export default {
    name:'Jumbotron',
    data() {
        return {
            store
        }
    },
    
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="content p-5">
                    <h1>Distant learning for futher expansion</h1>
                    <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.</p>
                    <button class="btn btn-success my-3 py-3 px-5"><i class="fa-solid fa-download" style="color: #ffffff;"></i> Download free guide</button>
                    <span class="py-2">Have question? <a href="#">Get Fre Sample <i class="fa-solid fa-arrow-right" style="color: #20ad96;"></i></a></span>
                </div>
            </div>
            <div class="col-6">
                <div class="image">
                    <img class="profile" src="../images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="">
                </div>
            </div>
            <div class="col-12">
                <div class="content-logo d-flex justify-content-around ; mt-5">
                    <img class="logo" src="../images/client-logo-01.png" alt="">
                    <img class="logo" src="../images/client-logo-02.png" alt="">
                    <img class="logo" src="../images/client-logo-03.png" alt="">
                    <img class="logo" src="../images/client-logo-04.png" alt="">
                    <img class="logo" src="../images/client-logo-05.png" alt="">
                    <img class="logo" src="../images/client-logo-06.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use './styles/partials/variables' as *;
   
.content{
    margin-top: 150px;

    h1{
        font-weight: bold;
        font-size: 50px;
    }
    p{
        font-size: 22px;
        color: $violet_text;
        padding-top: 10px;
    }
    button{
        font-weight: bold;
    }
    span{
        display: block;
        font-size: 18px;
        color: $violet_text;
        a{
            color: $main_green;
            text-decoration: none;
            font-weight: bold ;
        }
    }
}
.profile{
    border-radius: 50%;
    margin-top: 50px;
    margin-left: 100px;
}
.logo{
    margin-top: 50px;
    opacity: 0.5;
    height: 100%;    
}


   
</style>