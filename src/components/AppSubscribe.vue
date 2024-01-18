<script>
export default {
    
}
</script>
<template lang="">
    <div class="container my-pos">
        <div class="row">
            <div class="col-4 offset-4">
                <div class="text-container">
                    <strong>Subscribe <span>Newsletters</span></strong>
                    <p>Enter your email address to register to our newsletter subscription delivered on a regular basis!</p>
                    <div class="input-group mt-4">
                        <input type="email" class="form-control border border-0 bg-light" placeholder="Enter your email">
                        <button class="btn border border-start-0 my-bg" type="button" id="button-addon2">Subscribe</button>
                    </div>
                    <img src="../images/maxcoach-shape-02.png" alt="pattern">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use './styles/generals.scss';
@use './styles/partials/variables' as*;


    .my-pos{
        position: relative;
    }
    .text-container{
        text-align: center;
        margin: 50px 0;
        

        strong{
            font-size: 25px;
            color: $main_violet;
            span{
                color: $main_green;
                font-weight: lighter;
            }
        }
        
        p{
            color: $violet_text;
            font-size: 12px;
            margin: 10px 0;
        }
        
        input::placeholder{
            color: rgb(162, 162, 162);
            font-size: 12px;
        }
        .my-bg{
            background-color: $main_green;
            color: white;
            font-size: 8px;
            font-weight: 600;

            &:hover{
                background-color: $main_violet;
            }
        }

        img{
            width: 7%;
            position: absolute;
            bottom: 20%;
            right: 14%;
        }
    }
    
</style>