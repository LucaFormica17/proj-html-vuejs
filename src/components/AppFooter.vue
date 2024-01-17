<script>
export default {
    name: 'AppFooter',
    data() {
        return {

        }
    },
}
</script>
<template lang="">
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h6 class="mb-3">Address</h6>
                    <ul>
                        <li>382 NE 191st St &#35; 87394 Miami, FL 33179-3899</li>
                        <li>&plus;1 &#40;305&#41; 547-9909 &#40;9am - 5pm EST, Monday - Friday&#41;</li>
                        <li>support&commat;maxcoach.com</li>
                        <li>
                            <span class="me-4"><i class="fa-brands fa-square-facebook"></i></span>
                            <span class="me-4"><i class="fa-brands fa-twitter"></i></span>
                            <span class="me-4"><i class="fa-brands fa-instagram"></i></span>
                            <span class=""><i class="fa-brands fa-linkedin"></i></span>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <div class="row">
                        <h6 class="mb-3">Explore</h6>
                        <div class="col-6">
                            <ul>
                                <li>Start here</li>
                                <li>Blog</li>
                                <li>About us</li>
                            </ul>
                        </div>
                      <div class="col-6">
                            <ul>
                                <li>Success story</li>
                                <li>Courses</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <h6 class="mb-3">Information</h6>
                    <ul>
                        <li>Membership</li>
                        <li>Purchase guide</li>
                        <li>Privacy policy</li>
                        <li>Terms of services</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="text-center mt-4">
            <span class="scritta-piccola">&copy;2020 Maxcoach. All Rights Reserved</span>
        </div>
        <button type="button" class="btn">&uarr;</button>
    </footer>
</template>
<style lang="scss" scoped>
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables" as *;

footer {
    background-color: $bg_carou-footer;
    padding: 40px 0px;
    position: relative;
}

li {
    color: rgba(177, 177, 177, 255);
    list-style: none;
    font-size: 12px;
    padding-bottom: 10px;
    cursor: pointer;
}

span {
    font-size: 24px;
    color: rgba(177, 177, 177, 255);
}

.scritta-piccola {
    font-size: 10px;
}

button {
    background-color: $main_green;
    color: white;
    border-radius: 50px;
    position: absolute;
    bottom: 40px;
    right: 40px;
    box-shadow: 2px 2px 2px #dedede;

    &:hover {
        color: $main_green;
        background-color: white;
    }
}
</style>