<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            items: ['Home','Pages','Courses','Features','Blog','Shop']
        }
    },
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="navbar-container">
                        <img src="../images/dark-logo.png" alt="logo">
                        <div class="dinamic-container">
                            <ul class="d-flex">
                                <li v-for="(item, index) in items" :key="index">
                                    <div class="dropdown">
                                        <button class="btn border border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {{item}}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#"></a></li>
                                            <li><a class="dropdown-item" href="#"></a></li>
                                            <li><a class="dropdown-item" href="#"></a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="mt-2"><i class="fa-regular fa-circle-user"></i></li>
                            </ul>
                            <div class="input-group ms-4">
                                <input type="text" class="form-control border border-end-0 bg-light" placeholder="Search...">
                                <button class="btn border border-start-0 bg-light" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass green-glass"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use './styles/generals.scss';
@use './styles/partials/variables' as*;

    .navbar-container{
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            width: 15%;
        }

        .dinamic-container{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .green-glass{
                color: $main_green;
            }
        }
    }

</style>