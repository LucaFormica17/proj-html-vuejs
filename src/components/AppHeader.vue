<script>
import { store } from '../store'
export default {
    name: 'AppHeader',
    data() {
        return {
            store
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
                                <li v-for="(item, index) in store.items" :key="index">
                                    <div class="dropdown">
                                        <button class="btn border border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {{item}}
                                        </button>
                                        <ul class="dropdown-menu w">
                                            <li class="py-2 ps-4" v-for="(submenu, subIndex) in store.MenuList[index]" :key="subIndex">
                                                {{submenu}}
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="mt-2"><i class="fa-regular fa-circle-user"></i></li>
                            </ul>
                            <div class="input-group ms-4">
                                <input type="text" class="form-control border border-end-0 bg-l" placeholder="Search...">
                                <button class="btn border border-start-0 bg-l" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass green-glass"></i></button>
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

.w {
    width: 250px;
    max-height: 500px;
    overflow: scroll;
    border: none;
    border-bottom: 4px solid $main_green;
    border-radius: 0%;
}


.navbar-container {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 15%;
        cursor: pointer;
    }

    .dinamic-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        li:hover {
            border-bottom: 1px solid $main_green;

            button:hover {
                color: $main_green;
            }

            i:hover {
                color: $main_green;
            }
        }


        .bg-l {
            background-color: rgb(235, 234, 234);

            &::placeholder {
                color: rgb(185, 185, 185);
            }

            .green-glass {
                color: $main_green;


            }
        }

        button.bg-l:hover {
            background-color: $main_green;

            .green-glass {
                color: white;
            }
        }
    }
}
</style>