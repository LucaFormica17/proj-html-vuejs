<script>
export default {

}
</script>
<template lang="">
    <div class="bg-radial">
        <div class="container py-5 ">
            <div class="row ">
                <div class="col-7 d-flex justify-content-end col-img">
                    <img class="video" src="../images/home-2-popup-video-poster.jpg" alt="">
                    <img class="youtube" src="../images/icon-youtube-play.png" alt="">
                    <!-- <img class="moving-img" src="../images/maxcoach-shape-07-100x100.png" alt=""> -->
                </div>
                <div class="col-4 gradient">   
                    <h6 class="my-3">get started <b>effortlessly</b></h6>
                    <h1 class="mb-3"><span class="enjoy"><b>Enjoy Our</b></span> <span class="companionship">Companionship</span></h1>
                    <span class="sneek">Sneek peek into what has in store fot you on our online teaching and mentoring portal. Seek for some hidden hints of early-bird rewards as well.</span>
                    <div class="mt-4">
                        <a href="#">Download free guidebook &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style lang="scss" scoped>
@use "./styles/generals.scss";
@use "./styles/partials/variables" as *;

.bg-radial {
    background-image: radial-gradient(ellipse farthest-corner at -7% -16%, white 82%, #F5F7FA 44%);
}

.video {
    width: 500px;
    z-index: 1;
}




.youtube {
    width: 80px;
    height: 60px;
    position: relative;
    top: 38%;
    right: 38%;
    z-index: 1;

    &:hover {
        cursor: pointer;
    }
}

h6 {
    color: $main_violet;
    text-transform: uppercase;
}

.enjoy {
    color: $main_violet;
}

.companionship {
    color: $main_green;
}

.sneek {
    color: $dark_text;
}

a {
    color: $main_green;
}
</style>