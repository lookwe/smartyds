<template>
    <!-- 定位 -->
    <div style="width: 100%;text-align: center;line-height: 100px;height:auto;overflow: hidden;">
        <div class="header">
            <div class="img-fixed">
                <img src="@/assets/images/uploads/scGtkzvFdg.jpg" alt="img"/>
            </div>
            <canvas id="mycanvas">您的浏览器不支持canvas画布</canvas>

            <div class="header-text" >
                <div class="btn-zjk" style="margin: 0 auto">
                    <div class="h-t-info">About Us <p>Making Advertising Simple</p></div>
                </div>
            </div>
        </div>

        <b-container>
            <b-row>
                <div class="container2 col-12" style="height: 250px;background-color: #fff;margin: 0 auto;border-radius: 15px;
        box-shadow: 2px 10px 32px 8px rgba(0,0,0,0.1);padding: 30px;line-height: 3;margin-top: -125px;
">
                    <div class="text-muted">SmartyAds provides a full-stack package of complex AdTech solutions for digital advertisers,
                        publishers, and ad agencies worldwide. Our innovative products help businesses to achieve impressive results
                        across all channels, devices and ad formats. Finding new possibilities within artificial intelligence,
                        Blockchain technology, and Big Data analytics, we are reshaping the future of programmatic advertising,
                        making it surprisingly simple for every client
                    </div>
                </div>
            </b-row>
        </b-container>

        <div class="container2" style="overflow: hidden;margin: 0 auto;margin-top: 30px">
            <section style="margin: 40px 0;">
                <b-container>
                    <b-row>
                        <div class="col-md-4">
                            <h2>Our Mission</h2>
                        </div>
                    </b-row>

                    <b-row>
                        <div class="col-md-12">
                            <b-row>
                                <div class="col-md-6 col-sm-12">
                                    <div class="text-muted" style="line-height: 3">
                                        Our mission is to design high-quality solutions that fully automate digital advertising. We help media buyers to reach their target audiences, deliver high-impact brand messages and drive revenues that exceed the most daring expectations. At the same time, we provide media owners with tools for effective web/mobile content monetization that leads to the best CPMs and higher fill rates. SmartyAds’ products allow launching highly predictive, optimized and consumer-oriented ad campaigns of any size.
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-auto">
                                    <img src="@/assets/images/img/about-us-our-mission.svg" alt="img">
                                </div>
                            </b-row>
                        </div>
                    </b-row>
                </b-container>
            </section>

            <section style="margin: 40px 0;">
                <b-container>
                    <b-row>
                        <div class="col-md-4">
                            <h2>Our Offering</h2>
                        </div>
                    </b-row>

                    <b-row>
                        <div class="col-md-12">
                            <div class="text-muted" style="line-height: 3">
                                All of our programmatic solutions easily integrate with all other point solutions used in the digital advertising industry.
                            </div>
                        </div>
                    </b-row>
                </b-container>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdLocation",
        data() {
            return {};
        },
        mounted() {
            let can = document.getElementById("mycanvas");
            let ctx = can.getContext("2d");
            var wid = window.innerWidth;
            //画布高度
            var hei = window.innerHeight;
            can.width = wid;
            can.height = hei;
            var snow = 100;
            //雪花坐标、半径
            var arr = []; //保存各圆坐标及半径
            for (var i = 0; i < snow; i++) {
                arr.push({
                    x: Math.random() * wid,
                    y: Math.random() * hei,
                    r: Math.random() * 5
                });
            }

            //画雪花
            function DrawSnow() {
                ctx.clearRect(0, 0, wid, hei);
                ctx.fillStyle = "white";
                ctx.beginPath();
                for (var i = 0; i < snow; i++) {
                    var p = arr[i];
                    ctx.moveTo(p.x, p.y);
                    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false);
                }
                ctx.fill();
                SnowFall();
                ctx.closePath();
            }

            //雪花飘落
            function SnowFall() {
                for (var i = 0; i < snow; i++) {
                    var p = arr[i];
                    p.y += Math.random() * 2 + 2;
                    if (p.y > hei) {
                        p.y = 0;
                    }
                    p.x += Math.random() * 2 + 2;
                    if (p.x > wid) {
                        p.x = 0;
                    }
                }
            }

            let stop = setInterval(DrawSnow, 50);
            setTimeout(function () {
                clearInterval(stop)
                can.style.display = "none"
            }, 3000);
        }
    };
</script>

<style scoped lang="scss">
    @media screen and (max-width: 2200px) {
        * {
            text-align: left;
        }

        .header {
            position: relative;
            height: 540px;
        }

        .img-fixed {
            position: fixed;
            width: 100%;
            height: 540px;

            img {
                width: 100%;
                height: 540px;
            }
        }


        .header-text {
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            /* align-items: end; */
            width: 100%;
            height: 100%;
            justify-content: center;
            /* align-items: normal; */
            margin-left: 5%;
        }

        .h-t-info {
            font-size: 48px;
            color: white;
            font-weight: 600;
            margin-bottom: 60px;
        }

        .h-t-btn {
            display: inline-block;
            border: 2px solid;
            text-align: center;
            width: 160px;
            height: 40px;
            -webkit-border-radius: 20px;
            border-radius: 20px;
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            letter-spacing: 0.025em;
            line-height: 1.2;
            font-size: 16px;
            -webkit-transition: all 0.2s;
            -o-transition: all 0.2s;
            transition: all 0.2s;
            text-decoration: none;
            padding-top: 8px;
            outline: none;
            cursor: pointer;
        }

        .btn {
            background: #fff;
            color: #000;
            border-color: #fff;
        }

        .btn-shadow {
            box-shadow: 3px 15px 35px 0px rgba(0, 0, 0, 0.24);

            transition: all 0.2s;
        }

        .h-t-btn.btn-shadow:hover {
            -webkit-box-shadow: 1px 5px 15px 0px rgba(0, 0, 0, 0.24);
            box-shadow: 1px 5px 15px 0px rgba(0, 0, 0, 0.24);
        }

        .container2 {
            position: relative;
            width: 100%;
            height: 100%;
            background: white;
        }

        .box {
            z-index: 10;
            padding-top: 80px;
            width: 70%;
            margin: 0 auto;
            margin-bottom: 50px;
        }

        .box-1-title {
            margin-bottom: 60px;
        }

        .box-items {
            display: flex;
            margin-top: 60px;
            padding: 20px 20px;
            border-radius: 20px;
            transition: all 0.2s;
        }

        .box-i-1 {
            flex: 1;
        }

        .box-i-1 h3 {
            max-width: 300px;
            font-weight: 600;
            line-height: 1.8em;
        }

        .box-i-2 {
            flex: 2;
        }

        .box-i-2 {
            letter-spacing: 0.025em;
            color: #333;
            font: 400 16px/28px "Montserrat", sans-serif;
        }

        .box-items:hover {
            background: #fff;
            -webkit-box-shadow: 2px 10px 32px 8px rgba(0, 0, 0, 0.1);
            box-shadow: 2px 10px 32px 8px rgba(0, 0, 0, 0.1);
            color: #740b99;
        }

        .box-2-1-bg1 {
            background: url("../../assets/images/img/wls-dsp-targeting.svg") no-repeat;
            width: 100px;
            height: 105px;
            background-size: 100%;
        }

        .box-2-1-bg2 {
            background: url("../../assets/images/img/dsp-targeting.svg") no-repeat;
            width: 100px;
            height: 105px;
            background-size: 100%;
        }

        .box-2-1-bg3 {
            background: url("../../assets/images/img/ic.svg") no-repeat;
            width: 100px;
            height: 105px;
            background-size: 100%;
        }

        .box-ul {
            display: flex;
        }

        .box-ul {
            flex: 1;
        }

        .box-2-2 {
            margin: 50px auto 30px;
            font-size: 26px;
            line-height: 42px;
            font-weight: 700;
        }

        .box-2-3 {
            letter-spacing: 0.025em;
            /* line-height: 3.3em; */
            font: 400 16px/28px "Montserrat", sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 18px;
            margin-right: 30px;
            color: #666;
        }

        .box-3 {
            margin-top: 120px;
        }

        .box-1-title {
            margin-bottom: 60px;
        }

        .box-3-img > img {
            border-radius: 20px;
            margin-bottom: 30px;
            box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.1);
        }

        .box-3-text {
            color: #000000;
            text-decoration: none;
            font-weight: bold;
            line-height: 30px;
            font-size: 18px;
        }

        .box-3-data {
            line-height: 28px;
            font-size: 16px;
            color: #606060;
        }
    }

    @media screen and (max-width: 1400px) {
        .box {
            width: 90%;
        }

        .header-text {
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            /* align-items: end; */
            width: 100%;
            height: 100%;
            justify-content: center;
            /* align-items: normal; */
            margin-left: 10%;
        }

        .box-i-1 h3 {
            max-width: 300px;
        }
    }

    @media screen and (max-width: 900px) {
        .box {
            width: 90%;
        }

        .btn-zjk {
            margin: 0 auto;
        }

        .header-text {
            position: absolute;
            left: 0;
            top: 65px;
            display: flex;
            flex-direction: column;
            /* align-items: end; */
            width: 100%;
            height: 100%;
            justify-content: center;
            /* align-items: normal; */
            margin-left: 0%;
            /* text-align: center */
        }

        .h-t-info {
            font-size: 30px;
            color: white;
            font-weight: 600;
            line-height: 45px;
            margin-bottom: 60px;
            /* margin-left: 26% */
            margin: 0 auto;
            /* text-align: center */
        }

        .h-t-btn {
            width: 167px;
            height: 50px;
            border-radius: 25px;
            line-height: 1.9;
            /* margin-left: 26% */
            margin: 0 auto;
        }

        .box-1-title {
            font-size: 28px;
        }

        .box-items {
            flex-direction: column;
            margin-left: -20px;
            padding: 20px;
        }

        .box-i-1 h3 {
            max-width: 100%;
        }

        .box-ul {
            flex-direction: column;
        }

        .box-2-items {
            margin-top: 20px;
        }

        .box-3 {
            margin-top: 80px;
        }
    }

    @media screen and (max-width: 500px) {
        .btn-zjk {
            margin: 0 50px;
        }
    }

    #mycanvas {
        /* background: black;    */
        position: absolute;
    }
</style>
