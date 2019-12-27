<template>
    <!-- 主页 -->
    <div class="home" style="background: #FFFFFF">
        <!--顶部广告区-->
        <section>
            <b-container fluid>
                <!--广告位-->
                <b-row>
                    <div class="col-12 home-head">
                        <b-container>
                            <!--广告信息内容-->
                            <b-row style="height: 300px;margin-top: 100px">
                                <!--主体内容-->
                                <div class="col-lg-8 col-md-12 col-sm-12">
                                    <div class="head-adver-box">
                                        <div class="head-top-mavigation">
                                            <h1 class="color-fff" style="font-weight: bolder;font-size: 3rem">
                                                Full Stack Programmatic <br>
                                                Advertising At Scale
                                            </h1>
                                            <p></p>
                                        </div>
                                        <div class="moved">
                                            <div class="hero-slide-subheader color-fff">
                                                World’s most powerful solutions for advertising and monetization
                                            </div>
                                            <div class="hero-slide-button" style="margin-top: 30px">
                                                <b-container fluid>
                                                    <!--广告位-->
                                                    <b-row>
                                                        <b-button size="xl" class="col-5 rounded-pill color-fff bnt button-head-top"
                                                                  variant="warning">Advertise
                                                        </b-button>
                                                        <b-button size="xl" class="col-5 rounded-pill color-fff bnt button-head-top"
                                                                  style="margin-left: 30px;" variant="warning">Monetize
                                                        </b-button>
                                                    </b-row>
                                                </b-container>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--轮播-->
                                <div class="col-lg-4 col-md-4 head-adver">
                                    <div class="head-rg-adver">
                                        <div class="lt-rg-switch">
                                            <span>&lt;</span> <span>&gt;</span>
                                        </div>
                                        <div class="adver-head">
                                            <ball-animation
                                                    type="5"
                                                    width="45"
                                                    style="width: 15px;height: 15px;">
                                            </ball-animation>
                                        </div>

                                        <!-- 走马灯组件 -->
                                        <!--<b-carousel
                                                id="carousel-fade"
                                                style="text-shadow: 0px 0px 2px #000"
                                                :interval="2000"
                                        >
                                            <b-carousel-slide>
                                                <div>
                                                    11111
                                                </div>
                                            </b-carousel-slide>
                                            <b-carousel-slide>22</b-carousel-slide>

                                        </b-carousel>-->

                                    </div>
                                </div>
                            </b-row>
                        </b-container>

                        <!-- 广告按钮筛选 -->
                        <b-row>
                            <div class="col-12 toggler-box">
                                <div class="toggler">
                                    Full-Stack Ad Platform
                                </div>
                                <div class="toggler">
                                    Demand Side Platform
                                </div>
                                <div class="toggler">
                                    Supply Side Platform
                                </div>
                                <div class="toggler">
                                    White Label Solutions
                                </div>
                            </div>
                        </b-row>
                    </div>
                </b-row>
            </b-container>
        </section>

        <!-- 第二个概要内容区-->
        <section>
            <b-container>
                <b-row class="container section-outline">
                    <div class="col-12 box-shadow-card">

                        <div class="section-header section-header_standart" style="margin: 0 auto;width: 100%">
                            <h2 style="text-align: center">NextAds Ad Tech Stack</h2>
                        </div>
                        <div class="text text-center text-muted"
                             style="max-width: 1005px;margin: 0 auto 10px;letter-spacing: .025em;padding: 15px">
                            <p>推广品牌活动 推广游戏应用 推广本地生活服务 推广在线商城……
                                有效提升品牌知名度，增加用户注册、提升销量，获得潜在优质粉丝关注.</p>

                            <p>推动您的活动的成功：数字信号处理器，SSP，DSP，DMP，广告购买平台，和白色标签解决方案，以扩大您的业务和前进。通过简化流程，这些平台可以让您确定交易方式、地点和交易对象的优先级，以帮助您快速实现所需目标。.</p>
                        </div>

                        <div class="text-center" style="width: 100%;">
                            <b-button
                                    style="width: 222px;margin: 0 auto"
                                    size="xl"
                                    class="rounded-pill color-fff bnt bnt6"
                                    variant="warning">关于我们
                            </b-button>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </section>

        <!-- 筛选区 -->
        <section class="enterprise-products">
            <b-container>
                <b-row class="justify-content-between">
                    <div class="col-sm-12 col-md-12 col-lg-4">
                        <div class="sup-header" style="text-transform: uppercase;font-weight: 600;font-size: 18px;">
                            企业产品
                        </div>
                        <h2>更大范围的媒体交易</h2>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-4">
                        <div class="ep-product-card box-shadow-card">
                            <div>
                                <ball-animation type="5"></ball-animation>
                            </div>
                            <div class="ep-product-card__suptitle">对于卖家</div>
                            <div class="ep-product-card__title">供给侧平台</div>
                            <div class="margin-b-30 text-muted">获得令人难以置信的收入机会，申请
                                报头竞价技术、轻量级sdk和满足广告商的完美选择
                                观众.
                            </div>
                            <div style="height: 20px"></div>
                            <b-button
                                    size="xl"
                                    class="rounded-pill color-fff bnt bnt6 ep-bnt"
                                    variant="warning">Monetize
                            </b-button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-4">
                        <div class="ep-product-card box-shadow-card">
                            <div>
                                <ball-animation type="6"></ball-animation>
                            </div>
                            <div class="ep-product-card__suptitle">对于买家</div>
                            <div class="ep-product-card__title">需求侧平台</div>
                            <div class="margin-b-30 text-muted">最大化购买力
                                跨渠道流量、令人难忘的广告格式，以及最终透明的广告
                                生态系统.<br class="visible-lg">&nbsp;
                            </div>
                            <div style="height: 20px"></div>
                            <b-button
                                    size="xl"
                                    class="rounded-pill color-fff bnt button-head-top ep-bnt"
                                    variant="warning">Advertise
                            </b-button>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </section>

        <!-- 数字跳动区-->
        <section class="enterprise-products">
            <b-container fluid>
                <b-row>
                    <div class="col-md-3 col-sm-12 number-move text-center m-b-60">
                        <span class="h1">9 000+</span>
                        <div class="text-muted">advertisers</div>
                    </div>
                    <div class="col-md-3 col-sm-12 number-move text-center m-b-60">
                        <span class="h1">60B</span>
                        <div class="text-muted">impressions per month</div>
                    </div>
                    <div class="col-md-3 col-sm-12 number-move text-center m-b-60">
                        <span class="h1">25 000+</span>
                        <div class="text-muted">publishers</div>
                    </div>
                    <div class="col-md-3 col-sm-12 number-move text-center m-b-60">
                        <span class="h1">500 000</span>
                        <div class="text-muted">daily QPS</div>
                    </div>
                </b-row>
            </b-container>
        </section>


        <!-- 背景图片超出区 -->
        <section class="wls-main" style="position: relative;overflow: hidden">
            <div style="width: 100%;margin-top: -50px">
                <b-container fluid>
                    <b-row class="back-fff text-center">
                        <div class="col-md-5 hidden-xs">
                            <div class="wls-img hidden-xs">
                                <img alt="项目截图" src="../assets/images/img/laptop.png"
                                     srcset="../assets/images/img/laptop.png 1x, ../assets/images/img/laptop@2.png 2x">
                            </div>
                        </div>

                        <div class="col-md-7 col-sm-12 margin-center-xs" style="">
                            <div class="wls-text">
                                <div class="section-header section-header_standart">
                                    <div class="supheader">For Enterprises</div>

                                    <h2>White Label<br class="visible-xs">
                                        Solution</h2>
                                </div>

                                <div class="visible-xs xs-img">
                                    <img alt="img" class="img-responsive" src="../assets/images/img/laptop.png">
                                </div>

                                <div class="text-muted">Highly customizable, white label software platforms for<br
                                        class="visible-lg visible-md">
                                    media buying, media selling, and data activation.
                                </div>

                                <b-button size="xl" class="rounded-pill color-fff bnt bnt6 button-head-top"
                                          variant="warning">学 到 更 多
                                </b-button>
                            </div>
                        </div>
                    </b-row>
                </b-container>

            </div>
        </section>

        <!-- 广告类型 -->
        <section>
            <b-container fluid>
                <b-row>
                    <div class="col-lg-6 col-sm-12 hidden-sm">
                            <div class="box-shadow-card box-shadow-cards_fd">
                                <div class="fd-card_title">所有格式</div>
                                <div class="fd-card__icons">
                                    <img alt="video" class="fd-card__icon" src="../assets/images/img/home-page-icons/f-video.svg">
                                    <img alt="native" class="fd-card__icon" src="../assets/images/img/home-page-icons/f-native.svg">
                                    <img alt="dsiplay" class="fd-card__icon" src="../assets/images/img/home-page-icons/f-display.svg">
                                    <img alt="rich" class="fd-card__icon" src="../assets/images/img/home-page-icons/f-rich.svg">
                                </div>
                            </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="box-shadow-card box-shadow-cards_fd">
                            <div class="fd-card_title">所有设备</div>
                            <div class="fd-card__icons">
                                <img alt="mobile" class="fd-card__icon" src="../assets/images/img/home-page-icons/d-mobile.svg">
                                <img alt="tablet" class="fd-card__icon" src="../assets/images/img/home-page-icons/d-tablet.svg">
                                <img alt="desktop" class="fd-card__icon" src="../assets/images/img/home-page-icons/d-desktop.svg">
                                <img alt="tv" class="fd-card__icon" src="../assets/images/img/home-page-icons/d-tv.svg"></div>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </section>

        <!-- 广告收费 -->
        <section class="margin-b-60">
            <b-container fluid>
                <b-row>
                    <div class="col-9 price-list">
                        <b-row style="margin-bottom: 30px">
                            <div class="col-12 sm-text-center">
                                <h2>
                                    广告收费
                                </h2>
                                <p class="lead">无最低消费 独立操作后台 自主预算控制</p>
                            </div>
                        </b-row>

                        <b-row>
                            <div class="sm-b-30 col-md-6  col-lg-3">
                                <div class="box-shadow-card list-col" >
                                    <div class="back-img two"></div>
                                    <h3 style="margin: 30px 0">
                                        展示计费
                                    </h3>
                                    <div>
                                        系统根据广告展示成本，广告点击率/产品注册率，计算生成cpc点击或注册成本，客户可据此按点击或注册成本出价投放，则不符合条件的广告位将自动过滤
                                    </div>
                                </div>
                            </div>

                            <div class="sm-b-30 col-md-6  col-lg-3">
                                <div class="box-shadow-card list-col" >
                                    <div class="back-img optimization"></div>
                                    <h3 style="margin: 30px 0">
                                        优化出价
                                    </h3>
                                    <p>
                                        系统根据广告展示成本，广告点击率/产品注册率，计算生成cpc点击或注册成本，客户可据此按点击或注册成本出价投放，则不符合条件的广告位将自动过滤
                                    </p>
                                </div>
                            </div>

                            <div class="sm-b-30 col-md-6  col-lg-3">
                                <div class="box-shadow-card list-col" >
                                    <div class="back-img speed"></div>
                                    <h3 style="margin: 30px 0">
                                        速度控制
                                    </h3>
                                    <p>
                                        同等预算下，可选匀速或快速投放。在匀速情况下，系统根据预算自动控制广告展示频率，均匀覆盖整个投放时段。快速投放则尽可能多的获得广告展示
                                    </p>
                                </div>
                            </div>

                            <div class="sm-b-30 col-md-6  col-lg-3">
                                <div class="box-shadow-card list-col" >
                                    <div class="back-img set-up"></div>
                                    <h3 style="margin: 30px 0">
                                        自主控制
                                    </h3>
                                    <p>
                                        无最低消费限制，独立操作后台可自主控制日预算、单个广告计划预算。广告预算可在各个广告渠道之间无缝转移，一次开户，可投放平台旗下所有广告资源
                                    </p>
                                </div>
                            </div>
                        </b-row>
                    </div>
                </b-row>
            </b-container>
        </section>

        <!-- 定位 -->
        <section class="margin-b-30">
            <b-container fluid>
                <b-row>
                    <div class="col-9 price-list">
                        <b-row class="">
                            <div class="col-12 sm-text-center">
                                <h2>精准定位</h2>
                                <p class="lead">卓杭DSP为您提供了众多广告定向条件，您可以从中选择适合达成您商业目标的锁定人群</p>
                            </div>
                        </b-row>

                        <b-row style="margin: 20px 0">
                            <div class="col-sm-12 col-md-9 col-lg-6" style="margin: 0 auto;">
                                <img class="img-fluid" src="../assets/images/back/people-title.png" alt="定位">
                            </div>
                        </b-row>

                        <b-row class="sm-w">
                            <div class="col-lg-3 col-md-4 location">
                                <div class="list-col color-fff location-map box-shadow-card">
                                    <div class="location-back"></div>
                                    <div class="ep-product-card__suptitle">广告位置</div>
                                    <p>支持媒体选择，广告位指定</p>
                                    <p>视频频道选择</p>
                                    <p>前贴、中贴、后贴</p>
                                    <p>视频广告位选择</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 location">
                                <div class="list-col color-fff location-pc box-shadow-card">
                                    <div class="location-b-pc"></div>
                                    <div class="ep-product-card__suptitle">客户端</div>

                                    <p>设备及操作系统筛选</p>
                                    <p>浏览器筛选，手机品牌筛选</p>
                                    <p>网络环境筛选，LBS定位筛选</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 location">
                                <div class="list-col color-fff location-users box-shadow-card">
                                    <div class="location-b-user"></div>
                                    <div class="ep-product-card__suptitle">人群属性</div>

                                    <p>兴趣爱好，所属行业</p>
                                    <p>年龄阶段，性别筛选</p>
                                    <p>用户浏览关键词定位</p>
                                    <p>页面关键词分析筛选</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 location">
                                <div class="list-col color-fff location-date box-shadow-card">
                                    <div class="location-b-date"></div>
                                    <div class="ep-product-card__suptitle">投放时段</div>

                                    <p>以小时为单位</p>
                                    <p>精确控制广告展现时段</p>
                                    <p>以周为单位</p>
                                    <p>控制工作日、周末投放策略</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 location ">
                                <div class="list-col color-fff location-function box-shadow-card">
                                    <div class="location-b-fun"></div>
                                    <div class="ep-product-card__suptitle">特色功能</div>

                                    <p>定ip区间投放</p>
                                    <p>定cookies投放（访客找回）</p>
                                    <p>跟踪到访过特定页面的访客</p>
                                    <p>集中投放目标人群</p>
                                </div>
                            </div>

                        </b-row>
                    </div>
                </b-row>
            </b-container>
        </section>

        <section style="position: relative" v-if="false">
            <div style="position: absolute;bottom: 0;left: 0">
                <div style="position: relative;">
                    <parallax :fixed="true">
                        <img src="https://c1exchange.com/images/stories/joomla/sample-6.jpg">
                        <div style="width: 250px;height: 250px;background: brown">111111111111</div>
                    </parallax>
                </div>
                <div>
                    <div style="background-color: #fff; height: 500px;margin-top: -300px"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ballAnimation from '.././components/common/custom/BallAnimation'
    import parallax from 'vue-parallaxy'

    export default {
        name: "Home",
        components: {
            ballAnimation,
            parallax
        },
    }
</script>

<style scoped lang="scss">
    .test {
        border: 1px solid #bbb;
        min-height: 200px;
    }

    .visible-xs {
        display: none !important;
    }

    .home-head {
        height: 580px;
        background-image: url(../assets/images/img/main-screen-slider/new/1-m.png);
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center center;
        position: relative;
    }

    .home .head-adver {
        display: none;
    }

    @media (max-width: 1199px) and (min-width: 992px) {
        .home .head-adver {
            display: block !important;
        }
    }

    @media (min-width: 1200px) {
        .home-head {
            height: 620px;
        }
        .home .head-adver {
            display: block !important;
        }
    }

    /* 桌面及以上 */
    @media (min-width: 992px) {
        .enterprise-products {
            text-align: left !important;
        }
        .ep-product-card__title {
            font-size: 38px;
            line-height: 51px;
            margin-bottom: 20px;
        }
        .wls-text {
            margin-left: -50px;
        }
        .box-shadow-cards_fd {
            max-width: 680px!important;
        }
        .col-12.toggler-box {
            max-width: 900px !important;
            margin-left: -450px!important;
        }

        .location {
            &.col-lg-3 {
                flex: 2 0 18%!important;
            }
        }
    }

    /* 中小 */
    @media (min-width: 768px) {
        .home-head {
            display: block;
            background-image: url(../assets/images/img/main-screen-slider/new/1.svg);
            background-position: center bottom;
            height: 653px;
        }
        .wls-img {
            height: 515px;
            -webkit-box-flex: 0;
            -webkit-flex: 0 0 33.3%;
            -moz-box-flex: 0;
            -ms-flex: 0 0 33.3%;
            flex: 0 0 33.3%;
            margin-right: 40px;
            overflow: visible;
            position: relative;

            img {
                position: absolute;
                right: 0;
                top: 0;
                text-shadow: 0 0 black;
            }
        }

        .wls-main {
            text-align: left;
        }
        .wls-text {
            margin-left: -100px;
            margin-top: 130px;
        }
        .col-12.toggler-box {
            max-width: 820px;
            margin-left: -410px;
            .toggler {
                width: 190px!important;
            }
        }
        .section-outline {
            margin-top: 60px;
        }

    }

    /* 小于桌面模式下 */
    @media (max-width: 991.98px) {
        .ep-bnt {
            margin-left: -111px!important;
            left: 50%!important;
        }
        .box-shadow-cards_fd {
            max-width: 550px!important;
            margin-bottom: 50px;
        }
        .sm-b-30 {
            margin-bottom: 30px;
        }
        .sm-text-center {
            text-align: center;
        }
    }

    /* 中小以下 */
    @media (max-width: 767px) {
        .box-shadow-cards_fd {
            margin-bottom: 50px;
        }
        .section-outline {
            margin-top: 80px;
        }
        .col-12.toggler-box {
            max-width: 800px !important;
            margin-left: -355px!important;
            bottom: -45px;
            .toggler {
                line-height: 25px;
                margin: 0 5px;
            }
        }
        .list-col {
            min-height: 300px!important;
            width: 70%;
            margin: 0 auto;
        }
    }

    @media (max-width: 967px) {
        .margin-center-xs {
            .wls-text {
                margin-left: 0;
                margin-top: 50px;
                .visible-xs {
                    display: block !important;
                }
            }
        }

    }


    .head-adver-box {
        margin-top: 40px;
    }

    /*左边白色轮播图*/
    .head-rg-adver {
        width: 300px;
        height: 260px;
        background: #fff;
        border-radius: 35px;
        padding: 10px 20px;
        margin-left: 10px;
        position: relative;

        .lt-rg-switch {
            width: 60px;
            height: 40px;
            position: absolute;
            top: 8px;
            right: 18px;
            font-size: 1.85rem;
            color: #A355A6;
            text-align: center;
            line-height: 40px;
            font-weight: lighter;
            background: transparent;
            z-index: 100;
        }
    }

    /*head广告位 按钮筛选*/
    .toggler-box {
        display: flex;
        justify-content:space-around;
        align-items:center;
        position: absolute;
        bottom: 30px;
        left: 50%;
        .toggler {
            border-radius: 20px;
            height: 90px;
            padding: 15px;
            text-align: center;
            line-height: 60px;
            background: #fff;
            display: inline-block;
            -webkit-box-shadow: 3px 15px 35px 0 rgba(0, 0, 0, 0.24);
            box-shadow: 3px 15px 35px 0 rgba(0, 0, 0, 0.24);
            font-size: 14px;
            font-weight: 500;
            color: #333;
        }
    }
    /* 概要 */
    .section-outline {
        margin-bottom: 90px;
        .box-shadow-card {
            padding: 60px 15px;
        }
    }
    .ep-bnt {
        width: 222px;position: absolute;bottom: 25px;
        left: 20px;

    }

    /*第三部分*/
    .enterprise-products {
        text-align: center;
        margin-bottom: 60px;
    }

    .ep-product-card__suptitle {
        font-weight: 600;
        font-size: 18px;
        line-height: 29px;
        margin: 10px 0;

    }

    .ep-product-card__title {
        font-weight: bold;
        font-size: 34px;
        line-height: 37px;
        margin-bottom: 10px;
    }

    .margin-b-30 {
        margin-bottom: 30px;
    }

    .margin-b-60 {
        margin-bottom: 60px;
    }


    /*数字增值动画*/
    .number-move {

    }

    .number-move span {
        color: #740b99;;
        font-weight: bolder;
    }

    /* 项目截图 */
    .wls-main {
        margin-bottom: 80px;
        .supheader {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 10px;
        }
        .wls-text {
            .text-muted {
                margin-bottom: 20px;
            }
        }

    }

    /* 主要广告格式类型 */
    .box-shadow-cards_fd {
        background: -webkit-linear-gradient(288.31deg, #7d15a1 2.83%, #b675a8 100%);
        background: -o-linear-gradient(288.31deg, #7d15a1 2.83%, #b675a8 100%);
        background: linear-gradient(161.69deg, #7d15a1 2.83%, #b675a8 100%);
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 48px 15px 30px;
        position: relative;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
    }

    .box-shadow-card {
        -webkit-box-shadow: 0px 7px 20px rgba(0,0,0,0.1);
        box-shadow: 0px 7px 20px rgba(0,0,0,0.1);
        -webkit-border-radius: 30px;
        border-radius: 30px;
    }
    .fd-card_title {
        position: absolute;
        background: #ffffff;
        -webkit-box-shadow: 0px 6.05426px 17.2979px rgba(0,0,0,0.1);
        box-shadow: 0px 6.05426px 17.2979px rgba(0,0,0,0.1);
        -webkit-border-radius: 25.9468px;
        border-radius: 25.9468px;
        width: 186px;
        height: 36px;
        top: -18px;
        left: 50%;
        margin-left: -93px;
        font-weight: bold;
        font-size: 18px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #740b99;
    }
    .fd-card__icons {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: space-around;
        justify-content: space-around;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .price-list{
       margin: 0 auto;
        .list-col {
            padding: 20px 15px 60px 15px;
            min-height: 460px;
            text-align: center;
            .back-img {
                display: block;
                background: url(../assets/images/back/ico-all.png) no-repeat;
                margin: 0 auto;

                &.two {
                    background-position: 0px -126px;;
                    width: 108px;
                    height: 108px;
                    margin-top: 5px;
                    margin-bottom: 5px;
                }
                &.optimization {
                    background-position: -221px -126px;
                    width: 107px;
                    height: 118px;
                }
                &.speed {
                    background-position: -109px -126px;
                    width: 111px;
                    height: 108px;
                    margin-top: 11px;
                    margin-bottom: 5px;
                }
                &.set-up {
                    background-position: -328px -126px;
                    width: 107px;
                    height: 101px;
                    margin-top: 14px;
                    margin-bottom: 3px;
                }
            }
        }
    }

    .location {
        padding: 10px 5px;
        .list-col {
            text-align: center;
            min-height: 440px;

            &.location-map {
                background: #EAA555;
             }
            &.location-pc {
                background: #3AA2F2;
            }
            &.location-users {
                background: seagreen;
            }
            &.location-date {
                background: blueviolet;
                /* background: linear-gradient(169.66deg,#fbb63f -1%,#b069a1 97%); */
            }
            &.location-function {
                background: #2EC9BE;
            }
            .location-b {
                display: block;
            }
            .location-back {
                display: block;
                width: 46px;
                height: 55px;
                margin: 0 auto;
                background: url(../assets/images/back/ico-all.png) no-repeat 0px -244px;
            }
            .location-b-fun {
                display: block;
                margin: 2px auto 1px;
                width: 46px;
                height: 52px;
                overflow: hidden;
                background: url(../assets/images/back/ico-all.png) no-repeat -178px -244px;
            }
            .location-b-date {
                display: block;
                margin: 1px auto 0;
                width: 45px;
                height: 54px;
                background: url(../assets/images/back/ico-all.png) no-repeat -133px -244px;
            }
            .location-b-user {
                display: block;
                margin: 10px auto 5px;
                width: 53px;
                height: 44px;
                background: url(../assets/images/back/ico-all.png) no-repeat -79px -244px;
            }
            .location-b-pc {
                display: block;
                margin: 3px auto;
                width: 33px;
                height: 49px;
                background: url(../assets/images/back/ico-all.png) no-repeat -46px -244px;
            }

            .ep-product-card__suptitle {
               margin: 20px 0 30px 0;
            }
            p {
                margin: 0;
            }
        }
    }


</style>

