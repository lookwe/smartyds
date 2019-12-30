<template>
    <div class="about" >
        <div style="height: 300px;background: #fff">

        </div>

        <div style="height: 300px;margin: 200px;background: blueviolet">

        </div>

        <div style="height: 300px;background: seagreen">

        </div>

        <section>
            <div style="position: relative;">
                <parallax :fixed="true" style="height: 10vh">
                    <img src="https://c1exchange.com/images/stories/joomla/sample-6.jpg">
                </parallax>
            </div>
        </section>
    </div>
</template>

<script>
    import parallax from 'vue-parallaxy'
    export default {
        name: "index",
        components: {
            parallax
        },
    }
</script>

<style scoped lang="scss">

</style>
