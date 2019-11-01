<template>
    <!-- 主页 -->
    <div>
        <b-container fluid class="home-head">
            <b-row>
                <b-col class="abc">1 of 3</b-col>
                <b-col class="abc">2 of 3</b-col>
                <b-col class="abc">3 of 3</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

    export default {
        name: "Home",
        data() {
            return {

            }
        },
        components: {

        }
    }
</script>

<style scoped>
 .abc {
     border: 1px solid #777;
 }
    .home-head {
        height: 300px;
        background-color: salmon;
    }
</style>
