<template>
    <!-- 主页 -->
    <div>
        <b-container fluid>
            <b-row>
                <div class="col-12 home-head">
                    <b-container>
                        <b-row style="height: 300px;margin-top: 100px">
                            <!--主体内容-->
                            <div class="col-lg-8 col-md-8">
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
                                           <b-button size="xl" class="rounded-pill color-fff button-head-top" variant="warning">Advertise</b-button>
                                           <b-button size="xl" class="rounded-pill color-fff button-head-top" style="margin-left: 30px;" variant="warning">Monetize</b-button>
                                       </div>
                                   </div>
                               </div>
                            </div>

                            <!--轮播-->
                            <div class="col-lg-4 col-md-4 abc head-adver">
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
                    </b-container>
                </div>
            </b-row>
        </b-container>

        <span class="glyphicon glyphicon-search"></span>

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
.home-head {
    height: 40vw;
    background-image: url(../assets/images/img/main-screen-slider/new/1-m.png);
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
}

 @media (min-width: 768px){
     .home-head {
         display: block;
         background-image: url(../assets/images/img/main-screen-slider/new/1.svg);
     }
 }


    .color-fff{
        color: #fff;
    }
    .head-adver-box {
        margin-top: 40px;
    }

    .button-head-top {
        width: 200px;
        background-image: linear-gradient(-73deg, #B56E9C, #F0AA4E);
        background-color: transparent;
        border-color: transparent;
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

</style>

