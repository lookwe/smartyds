<template>
    <!-- 主页 -->
    <div class="index">
        <!-- 头部 -->
        <m-head></m-head>
        <!-- 内容-->
        <div id="NEXT-MAIN">
            <router-view></router-view>
        </div>

        <right-serve class="hidden-xs"></right-serve>
        <!-- right 全局服务框 -->

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

    /* -- max 宽 ---  */
    @media (max-width: 967px) {
        .visible-xs {
            display: block !important;
        }
        .hidden-xs {
            display: none;
        }
        .margin-center-xs {
            width: 100%!important;
            margin: 0 auto!important;
        }
    }



    /*公共样式*/
    .img-responsive {
        display: block;
        max-width: 100%;
        height: auto;
    }
    .color-fff{
      color: #fff;

    }
    .back-fff {
        background: #fff;
    }

    h2 {
        color: #000;
        letter-spacing: 0.025em;
        font: 700 42px/52px "Montserrat",sans-serif;
    }
    /*公共css常用样式*/
    .container {
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
    }
    .m-b-60 {
        margin-bottom: 60px;
    }


/*---- 公共渐变按钮 ----*/
  .bnt {
      max-width: 222px;
      min-width: 180px;
      background-color: transparent;
      border: 0;
      -webkit-box-shadow: 3px 15px 35px 0 rgba(0,0,0,0.24);
      box-shadow: 3px 15px 35px 0 rgba(0,0,0,0.24);
      height: 40px;
  }
  .bnt:hover {
      box-shadow: none;
  }

  .bnt.button-head-top {
      background: linear-gradient(169.66deg,#fbb63f -1%,#b069a1 97%);
  }

  .bnt.bnt6 {
      background: -webkit-linear-gradient(280.21deg,#7d15a1 2.83%,#b675a8 100%);
      background: -o-linear-gradient(280.21deg,#7d15a1 2.83%,#b675a8 100%);
      background: linear-gradient(169.79deg,#7d15a1 2.83%,#b675a8 100%);
  }

    /*div圆角*/
    .box-shadow-card {
        background: #fff;
        -webkit-box-shadow: 0 7px 20px rgba(0,0,0,0.1);
        box-shadow: 0 7px 20px rgba(0,0,0,0.1);
        -webkit-border-radius: 30px;
        border-radius: 30px;
    }


    .ep-product-card {
        min-height: 390px;
        position: relative;
    }
    @media (min-width: 992px){
        .ep-product-card {
            max-width: 391px;
            margin-bottom: 0;
            padding: 40px 30px;
        }
    }

        .ep-product-card {
            max-width: 391px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 30px;
            padding: 30px 20px;
        }


</style>
