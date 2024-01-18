<script>
export default {
    data() {
        return {
            counter: [
                {
                    string: "Successfully trained",
                    number: "1790",
                    area: "enrolled learners"
                },
                {
                    string: "Proudly Received",
                    number: "19",
                    area: "contrywide awards"
                },
                {
                    string: "Firmly Established",
                    number: "24",
                    area: "local branches"
                },
                {
                    string: "Getting Feutured on",
                    number: "1090",
                    area: "blog posts"
                }
            ]
        }
    },
}
</script>
<template lang="">
    
    <div class="container moving-background">
        <div class="row">
            <div class="bordi col-3 d-flex flex-column align-items-center " v-for="count, index in counter">
                <h4 class="my-3 text-center " >{{count.string}}</h4>
                <h5 class="mt-3">{{count.number}}</h5>
                <h6 class="my-3">{{count.area.toUpperCase()}}</h6>
            </div>       
        </div>
    </div>
    
</template>
<style lang="scss" scoped>
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables" as *;

.container {
    font-family: 'Gilroy-bold', sans-serif
}

.bordi {
    border-left: 1px solid $bg_cardSection;
    border-right: 1px solid $bg_cardSection;
    padding: 80px 0px;
}

h4 {
    width: 50%;
    color: $main_violet;

}

h5 {
    color: $main_green;
    font-size: 45px;
    font-weight: 900;
    font-family: 'Gilroy-bold', sans-serif;
}

h6 {
    color: rgba(177, 177, 177, 255);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
}
</style>
