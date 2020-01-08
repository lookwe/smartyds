<template>
    <!-- 主页 -->
    <div class="index">
        <!-- 头部 -->
        <m-head></m-head>
        <!-- 内容-->
        <div id="NEXT-MAIN">
            <router-view></router-view>
        </div>

        <!-- right 全局服务框 -->
        <right-serve class="hidden-xs"></right-serve>

        <!-- 底部-->
        <m-footer></m-footer>
    </div>
</template>

<script>
    import mHead from '../components/common/Head'
    import mFooter from '../components/common/Footer'
    import rightServe from '../components/common/custom/MostRightServe'
    export default {
        name: "Index",
        components: {
            mHead,
            mFooter,
            rightServe
        }
    }
</script>

<style>
    #NEXT-MAIN {
        margin-top: 75px;
        font-style: normal;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-weight: 400;
        font-stretch: normal;
        font-size: 16px;
        line-height: 28px;
        font-family: Montserrat, sans-serif;
    }


</style>
