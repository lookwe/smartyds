<template>
    <!-- 定位 -->
    <div class="location">
        <div class="header">
            <div class="img-fixed">
                <img src="@/assets/images/uploads/rtbts-header.jpg" alt="img"/>
            </div>
            <canvas id="mycanvas">您的浏览器不支持canvas画布</canvas>
            <div class="header-text">
                <div class="btn-zjk">
                    <div class="h-t-info">RTB Targeting Solutions</div>

                    <div class="h-t-btn btn btn-shadow">Get Started</div>
                </div>
            </div>
        </div>
        <div class="container2" style="overflow: hidden">
            <div class="box">
                <h2 class="box-1-title">
                    Team Up With Smartyads And Fine-Tune Your
                    <br/>Targeting Efforts
                </h2>
                <div class="box-items">
                    <div class="box-i-1">
                        <h3>Precise Campaign Tune-up</h3>
                    </div>
                    <div class="box-i-2"
                    >Try your hand at retargeting. Explore cross-device online advertising further staying in touch with
                        users that have already been to your website but haven’t bought anything yet. Bring your ads in
                        front of core audience after their first glance at your products. Do not let your potential
                        customers wander away and use the retargeting cookie-matching solution of our RTB ecosystem to
                        follow the users all around the Internet. Turn potential customers into happy buyers recapturing
                        their attention with SmartyAds’ advertising solution.
                    </div>
                </div>

                <div class="box-items">
                    <div class="box-i-1">
                        <h3>Particular demographics</h3>
                    </div>
                    <div class="box-i-2">SmartyAds empowers you to segment the audience and select campaign parameters to address marketing
                        efforts to a particular age group, people with certain annual income, or users that have
                        children, etc. Boost your sales and save budget indirectly by exploring the advertising
                        solutions we have developed for you. Encourage only the accurate users to come onboard and
                        browse through your offers by prompting the chosen demographic groups to see your ads. If you
                        are a publisher, secure the sales stream by displaying only those ads appealing to your
                        visitors.
                    </div>
                </div>

                <div class="box-items">
                    <div class="box-i-1">
                        <h3>
                            Certain
                            geography
                        </h3>
                    </div>
                    <div
                            class="box-i-2"
                    >SmartyAds ad solutions allow determining the specific location the leads should come from. Tailor
                        your campaigns for a certain country, a particular state, or top cities, and decide where to
                        tell the story of your brand. Our team goes above and beyond to specify the reach of your
                        campaign drilling down location targeting settings to as far as zip code levels. We streamline
                        your advertising efforts offering the broadest geo selection to meet your specific marketing
                        goals.
                    </div>
                </div>
            </div>

            <div class="box">
                <h2 class="box-1-title">
                    Use Our Intelligent Ad Solutions
                    <br/>And Shape Up Your Performance By:
                </h2>
                <div class="box-ul">
                    <div class="box-2-items">
                        <div class="box-2-1 box-2-1-bg1"></div>
                        <div class="box-2-2">Retargeting</div>
                        <div
                                class="box-2-3"
                        >Try your hand at retargeting. Explore cross-device online advertising further staying in touch
                            with users that have already been to your website but haven’t bought anything yet. Bring
                            your ads in front of core audience after their first glance at your products. Do not let
                            your potential customers wander away and use the retargeting cookie-matching solution of our
                            RTB ecosystem to follow the users all around the Internet. Turn potential customers into
                            happy buyers recapturing their attention with SmartyAds’ advertising solution.
                        </div>
                    </div>

                    <div class="box-2-items">
                        <div class="box-2-1 box-2-1-bg2"></div>
                        <div class="box-2-2">Conversion tracking</div>
                        <div
                                class="box-2-3"
                        >Keep your eyes peeled and track where your potential clients make their way to after dropping
                            by at your website. SmartyAds online advertising solutions help you see what happens next:
                            whether a user orders your products, gets the app, or subscribes to news alerts, etc. Define
                            what particular ads turn your promo efforts into cash. Stay informed, compare sales streams,
                            and find the right balance to allocate marketing budgets smarter.
                        </div>
                    </div>

                    <div class="box-2-items">
                        <div class="box-2-1 box-2-1-bg3"></div>
                        <div class="box-2-2">Conversion tracking</div>
                        <div
                                class="box-2-3"
                        >Keep your eyes peeled and track where your potential clients make their way to after dropping
                            by at your website. SmartyAds online advertising solutions help you see what happens next:
                            whether a user orders your products, gets the app, or subscribes to news alerts, etc. Define
                            what particular ads turn your promo efforts into cash. Stay informed, compare sales streams,
                            and find the right balance to allocate marketing budgets smarter.
                        </div>
                    </div>
                </div>
            </div>
            <!-- <canvas id="mycanvas">您的浏览器不支持canvas画布</canvas> -->

            <div class="box-3 box">
                <h2 class="box-1-title">SmartyAds Featured News</h2>
                <div class="box-3-img">
                    <img src="@/assets/images/thumbs/programmatic-advertising-400-260.png" alt/>

                    <div class="box-3-text">What is Programmatic Advertising?</div>
                    <div class="box-3-data">February 2018</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdLocation",
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
                ctx.fillStyle = "#ddd";
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
                clearInterval(stop);
                can.style.display = "none"
            }, 5000);
        }
    };
</script>

<style scoped lang="scss">
    .ad-location {
        width: 100%;text-align: center;line-height: 100px;height:auto;overflow: hidden;
    }

    @media screen and (max-width: 2200px) {
        * {
            text-align: left;
        }

        .header {
            position: relative;
            height: 540px;
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

        .h-t-btn.btn {
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
