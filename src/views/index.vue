<template>
    <!-- 主页 -->
    <div>
        <!-- 头部 -->
        <m-head></m-head>
        <!-- 内容-->
        <router-view></router-view>

        <!-- 底部-->
    </div>
</template>

<script>
    import mHead from '../components/common/Head'
    export default {
        name: "Index",
        data() {
            return {

            }
        },
        components: {
            mHead
        }
    }
</script>

<style scoped>

</style>
