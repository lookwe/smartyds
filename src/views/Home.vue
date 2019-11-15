<template>
    <!-- 主页 -->
    <div class="home">
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
                                                <b-button size="xl" class="rounded-pill color-fff bnt button-head-top" variant="warning">Advertise</b-button>
                                                <b-button size="xl" class="rounded-pill color-fff bnt button-head-top" style="margin-left: 30px;" variant="warning">Monetize</b-button>
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

                            <!-- 广告按钮筛选 -->
                            <b-row>
                                <div class="col-12" style="height: 180px;margin-top: 60px;display: flex;justify-content:space-around;align-items:center;">
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
                        </b-container>
                    </div>
                </b-row>


            </b-container>
        </section>

        <!-- 第二个概要内容区-->
        <section>
            <b-container>
                <b-row class="container" style="margin-bottom: 90px">
                    <div class="col-12 box-shadow-card" style="padding: 60px 15px;">

                        <div class="section-header section-header_standart" style="margin: 0 auto;width: 100%">
                            <h2 style="text-align: center">SmartyAds Ad Tech Stack</h2>
                        </div>
                        <div class="text text-center" style="max-width: 1005px;margin: 0 auto 10px;letter-spacing: .025em;padding: 15px">
                            <p>Focusing on a simple question - how to make advertising simple - SmartyAds has build transformative full-stack programmatic infrastructure for advertisers and publishers.</p>

                            <p>It took us 7+ years and now it has all that it takes to fuel your campaigns’ success: DSP, SSP, DMP, Blockchain Ad Buying platform, Quantum Analytics, and White Label Solutions for scaling your business up and forward. Streamlining the process, the platforms let you prioritize how, where and whom to trade with, in order to help you quickly achieve your desired goals.</p>
                        </div>

                        <div class="text-center"  style="width: 100%;">
                            <b-button
                                    style="width: 222px;margin: 0 auto"
                                    size="xl"
                                    class="rounded-pill color-fff bnt bnt6"
                                    variant="warning">About Us</b-button>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </section>

        <!-- 筛选区 -->
        <section class="enterprise-products">
            <b-container>
                <b-row class="justify-content-between " >
                    <div class="col-sm-12 col-md-12 col-lg-4">
                        <div class="sup-header" style="text-transform: uppercase;font-weight: 600;font-size: 18px;">Enterprise Products</div>
                        <h2>Media-trading on a wider scale</h2>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-4">
                        <div class="ep-product-card box-shadow-card">
                            <div>
                                <ball-animation type="5"></ball-animation>
                            </div>
                            <div class="ep-product-card__suptitle">FOR SELLERS</div>
                            <div class="ep-product-card__title">Supply Side Platform</div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-4">
                        <div class="ep-product-card box-shadow-card">
                            <div>
                                <ball-animation type="6"></ball-animation>
                            </div>
                            <div class="ep-product-card__suptitle">FOR BUYERS</div>
                            <div class="ep-product-card__title">Demand Side Platform</div>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </section>



        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


    </div>
</template>

<script>
    import ballAnimation from '.././components/common/custom/BallAnimation'
  export default {
      name: "Home",
      components: {
          ballAnimation
      },
      data() {
          return {

          }
      },
  }
</script>

<style scoped lang="scss">
    .test{
        border: 1px solid #666;
        min-height: 200px;
    }
.home-head {
    height: 520px;
    background-image: url(../assets/images/img/main-screen-slider/new/1-m.png);
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
}
    .home .head-adver{
        display: none;
    }

@media (max-width: 1199px) and (min-width: 992px) {
    .home .head-adver {
       display: block !important;
    }
}

@media (min-width: 1200px) {
    .home-head {
        height: 650px;
    }
    .home .head-adver {
        display: block !important;
    }
}

@media (min-width: 768px) {
    .home-head {
        display: block;
        background-image: url(../assets/images/img/main-screen-slider/new/1.svg);
        background-position: center bottom;
        height: 673px;
    }
}
/*中屏幕*/
@media (min-width: 992px) {
    .enterprise-products {
        text-align: left!important;
    }
    .ep-product-card__title {
        font-size: 38px;
        line-height: 51px;
        margin-bottom: 20px;
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
            width: 60px;height: 40px;
            position: absolute;top: 8px;right: 18px;
            font-size: 1.85rem;color: #A355A6;
            text-align: center;line-height: 40px;
            font-weight: lighter;
            background:transparent;
            z-index: 100;
        }
    }


    /*head广告位 按钮筛选*/
    .toggler {
        border-radius: 20px;
        height: 90px;
        padding: 15px;
        text-align: center;
        line-height: 60px;
        width: 200px;
        background: #fff;
        display: inline-block;
        -webkit-box-shadow: 3px 15px 35px 0 rgba(0,0,0,0.24);
        box-shadow: 3px 15px 35px 0 rgba(0,0,0,0.24);
        font-size: 14px;
        font-weight: 500;
        color: #333;

    }

    /*第三部分*/
    .enterprise-products {
        text-align: center;
        margin-bottom: 90px;
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

</style>

