<template>
    <!-- 主页 -->
    <div>
        <!-- 头部 -->
        <m-head></m-head>
        <!-- 内容-->
        <div id="NEXT-MAIN">
            <router-view></router-view>
        </div>

        <!-- right 全局服务框 -->

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
  #NEXT-MAIN {
      margin-top: 66px;
  }
</style>
