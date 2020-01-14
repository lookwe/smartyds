<template>
  <!-- 定位 -->
  <div class="ad-location">
    <div class="header">
      <div class="img-fixed">
        <img
          style="width:100%;height:100%;object-fit: cover"
          src="@/assets/images/uploads/video-formats-1.jpg"
          alt="img"
        />
      </div>
      <canvas id="mycanvas">您的浏览器不支持canvas画布</canvas>
      <div class="header-text">
        <div class="btn-zjk">
          <div class="ADvideo_title">
            <small>Use most impactful</small>
            <h1>Video Ad Formats</h1>
          </div>
          <div class="ADvideo_text1" v-for="(item,index) of header_tx" :key="index">
            <div class="round">
              <div class="round-1"></div>
              <div class="round-2"></div>
              <div class="round-3"></div>
            </div>
            {{item.text}}
          </div>
          <div class="h-t-btn btn btn-shadow">Contact Us</div>
        </div>
      </div>
    </div>
    <div class="container2" style="overflow: hidden">
      <div class="box">
        <h2
          class="box-1-title-X"
        >Appeal to larger audiences on a cross-screen programmatic platform specially tailored for multiple types of video ads, including interactive post-rolls, pre-rolls, rewarded videos, and native video ad formats. Empower your message on every medium!</h2>
        <div class="box-items">
          <div class="box-i-1">
            <h3>Making the most of video ad formats</h3>
          </div>
          <div class="box-i-2">
            <p>9 out of 10 advertisers say video ad format is the most effective component of their ad placement campaigns. Many people trust video ads, they are 5 times more effective than static media ads.</p>

            <p>How not to get lost in video ad types and sizes regarding different types of video advertising? The performance of video advertising format depends on how well it is suited to user experience and advertising platform capacity.</p>

            <p>
              Every online video ad format you pick can be amplified with our
              <u>
                <a href="#">
                  <span style="color:#DAA520;">DSP</span>
                </a>
              </u> so that you can reach the peak performance of multiple video ad sizes and formats.
            </p>Using our
            <a href="#">
              <span style="color:#DAA520;">SSP</span>
            </a>
            publishers can monetize their apps through video ad units and streamline in-app user experience with lightweight SDK.
            <p>&nbsp;</p>
          </div>
        </div>
      </div>

      <div class="box" style="padding-top:0px">
        <div class="box-ul">
          <div class="box-2-items" v-for="(item,index) of data2" :key="index">
            <div class="box-2-cover">
              <img :src="item.image" alt />
            </div>
            <div class="box-2-text">
              <div class="box-2-t-title">{{item.text.title}}</div>
              <div class="box-2-t-e-content">{{item.text.content}}</div>
              <div
                class="ADvideo_text1"
                style="position:relative;color:black;font-weight:500"
                v-for="(item,index) of item.text2"
                :key="index"
              >
                <div class="round">
                  <div class="round-1" style=" background: #740b99;"></div>
                  <div class="round-2" style=" background: #740b99;"></div>
                  <div class="round-3" style=" background: #740b99;"></div>
                </div>
                {{item.a}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <canvas id="mycanvas">您的浏览器不支持canvas画布</canvas> -->

      <div class="box-3 box" style="padding-top:0px">
        <div class="box3-container">
          <div class="box3-titlt1">Ready for a big start?</div>
          <div
            class="box3-content"
          >Video ad format is a brand-new point of growth for advertisers, publishers and mobile marketers. Engaging, interactive, and memorable they help your audience connect emotionally so that you could tell your brand’s story like no one else.</div>
          <strong>Discover new opportunities of highly performing video ads!</strong>
          <div class="box3-btn">Try Us</div>
          <ball-animation class="card-ball" type="3" width="200"></ball-animation>
        </div>
      </div>
      <div class="box-4 box" style="padding-top:0px">
        <div class="box4-title">
          <h2>SmartyAds Featured News</h2>
        </div>
        <div class="box4-content">
          <div class="box4-item" v-for="(item,index) of data3 " :key="index">
            <div class="box4-i-img">
              <img :src="item.image" alt />
            </div>
            <div class="box4-i-text">{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ballAnimation from "../../components/common/custom/BallAnimation";
export default {
  name: "AdLocation",
  components: { ballAnimation },
  data() {
    return {
      header_tx: [
        {
          text: " Adjust interaction "
        },
        {
          text: " Gear engagement  "
        },
        {
          text: " Reach audience worldwide "
        }
      ],
      data2: [
        {
          image: require("@/assets/images/img/formats/video/1.png"),
          text: {
            title: "Rewarded Video Ads",
            content:
              " belong to the interactive online video ad types (5-10 sec duration). The users view, tap, and interact with the ad unit for the reward: the daily game bonus, additional app functionality or access to the premium content."
          },
          text2: [
            {
              a: "Best completion rates"
            },
            {
              a: "Engagements and shares"
            },
            {
              a: "Highly interactive"
            }
          ]
        },
        {
          image: require("@/assets/images/img/formats/video/2.png"),
          text: {
            title: "In-Stream Ads",
            content:
              "In-stream ads offer endless opportunities with pre-roll video ad format, mid-roll, and post-roll videos. These video ads appear before, in the middle of after the video. The mid or post-roll linear video ad formats are easily memorized while post-roll video is less intrusive."
          },
          text2: [
            {
              a: "Effective cost per mile"
            },
            {
              a: "Higher click-through-rate"
            },
            {
              a: "Functionality, optionality"
            }
          ]
        },
        {
          image: require("@/assets/images/img/formats/video/3.png"),
          text: {
            title: "Native Video Ad",
            content:
              "Native advertising units mimicry with the rest of the website design, allowing the brands to build their video ad placement into any type of web content (an article, a website, or video). Native video type is the most sharable advertising format."
          },
          text2: [
            {
              a: "Higher click-through-rate"
            },
            {
              a: "Non-intrusive"
            },
            {
              a: "Highly sharable"
            }
          ]
        },
        {
          image: require("@/assets/images/img/formats/video/4.png"),
          text: {
            title: "Video Interstitial ad",
            content:
              "Interstitial ads pop up at the user’s screen at the game interruptions or when the content of the app is changing. Rich media video interstitials are popular in mobile advertising, they occupy the full screen and play for several seconds."
          },
          text2: [
            {
              a: "Memorable"
            },
            {
              a: "Higher click-through-rate"
            },
            {
              a: "Less intrusive"
            }
          ]
        },
        {
          image: require("@/assets/images/img/formats/video/5.png"),
          text: {
            title: "In-banner Video",
            content:
              "In-banner video ads are videos built inside the banners. In-banner video ads can be of the following IAB sizes: 300×250, 160×600 or 728×90 (the full range is defined by IAB). If your campaign involves pre-roll video ad format, in-banner video can complement it."
          },
          text2: [
            {
              a: "Affordable impressions"
            },
            {
              a: "Better viewability"
            },
            {
              a: "Simple implementation"
            }
          ]
        },
        {
          image: require("@/assets/images/img/formats/video/6.png"),
          text: {
            title: "Mobile Video Ads",
            content:
              "Mobile video ads are handy, they allow to overtake the attention the moment user’s perception is sensitive to incoming ad message. Mobile video advertising includes highly efficient formats such as native, playable or rewarded."
          },
          text2: [
            {
              a: "Better engagement"
            },
            {
              a: "Increased conversion"
            },
            {
              a: "Higher click-through-rate"
            }
          ]
        },
        {
          image: require("@/assets/images/img/formats/video/7.png"),
          text: {
            title: "Reveal video",
            content:
              "Reveal video ads belong to the in-content video ads that are geared into action as soon as the user scrolls down the page and it gets into the visibility zone. Reveal video is located in the middle of an article, at the end or after the first paragraph."
          },
          text2: [
            {
              a: "Better viewability"
            },
            {
              a: "Simple implementation"
            },
            {
              a: "Highly interactive"
            }
          ]
        },
        {
          image: require("@/assets/images/img/formats/mobile/8.png"),
          text: {
            title: "Playable ads",
            content:
              " are shown inside the apps as short interactive videos. Playable ad is a demo version of other (promoted) game which the user can try before installing. The “micro-game” lasts 5-50 seconds. Afterwards the user can install the game on device."
          },
          text2: [
            {
              a: "Best completion rates"
            },
            {
              a: "Engagements and shares"
            },
            {
              a: "Highly interactive"
            }
          ]
        }
      ],
      data3: [
        {
          image: require("@/assets/images/thumbs/Massive-DSP-Update-400-260.jpg"),
          text:
            "This Autumn’s DSP Update: New Formats, More Traffic, On-Demand Analytics, and More!"
        },
        {
          image: require("@/assets/images/thumbs/The-future-is-now-5G-OTT-VR-AR-400-260.png"),
          text:
            "MWC 2019: from 5G to OTT Advertising and Immersive Video Content"
        },
        {
          image: require("@/assets/images/thumbs/Outstream-Video-Trends-400-260.png"),
          text:
            "Outstream Video: How It Can Be The Game-changer For Publishers In 2019"
        },
        {
          image: require("@/assets/images/thumbs/trends-in-app-reward-advertising-400-260.png"),
          text: "Trend: Users Prefer Rewarded Video Ads Over App Purchases"
        },
        {
          image: require("@/assets/images/thumbs/mobile-ad-sizes-mobile-ad-formats-400-260.png"),
          text: "Mobile Ad Sizes & Formats That Grew Market to $49.9 Billions"
        },
        {
          image: require("@/assets/images/thumbs/iab-ad-formats-400-260.png"),
          text:
            "Fresh and New IAB Ad Formats: How the Industry Embraces New Consumption Rules"
        },
        {
          image: require("@/assets/images/thumbs/video-ssp-400-260.png"),
          text: "Video Advertising for Publishers: The Rise of Video SSP"
        },
        {
          image: require("@/assets/images/thumbs/in-stream-vs-in-banner-video-ads-400-260.png"),
          text:
            "What’s the Difference Between In-Stream and In-Banner Video Ads?"
        }
      ]
    };
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
    setTimeout(function() {
      clearInterval(stop);
      can.style.display = "none";
    }, 5000);
  }
};
</script>

<style scoped lang="scss">
.ad-location {
  width: 100%;
  text-align: center;
  //   line-height: 100px;
  height: auto;
  overflow: hidden;
}
.ADvideo_text1 {
  margin: 10px 0;
}
.ADvideo_text1 {
  color: #fff;
  .round {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    position: relative;
    transform: scale(1);
    box-sizing: border-box;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.66667;
    .round-1 {
      width: 24px;
      height: 24px;
      animation: none;
      border-radius: 50%;
      opacity: 0.2;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: scale(1);
      background: #fff;
      padding: 0;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.66667;
    }
    .round-2 {
      background: #fff;
      border-radius: 50%;
      opacity: 0.4;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: scale(1);
      box-sizing: border-box;
      width: 18px;
      height: 18px;
      margin: -9px 0 0 -9px;
    }
    .round-3 {
      width: 10px;
      height: 10px;
      margin: -5px 0 0 -5px;
      background: #fff;
      border-radius: 50%;
      opacity: 1;
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }
}

@media screen and (max-width: 2200px) {
  .box-4 {
    .box4-title {
      margin: 120px 0 60px;
      padding-left: 4%
    }
    .box4-content {
      display: flex;
      flex-wrap: wrap;
      .box4-item {
        margin-bottom: 60px;
        width: 22%;
        margin-left: 3%;
        .box4-i-img > img {
          box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          margin-bottom: 30px;
          width: 100%;
          height: 100%;
        };
        .box4-i-text{
              color: #000000;
    text-decoration: none;
        font-weight: bold;
    line-height: 30px;
    font-size: 18px;
        }
      }
    }
  }
  .box3-container {
    height: 438px;
    background: linear-gradient(135deg, #7d15a1 0%, #b675a8 100%);
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 2px 10px 32px 8px rgba(0, 0, 0, 0.1);
    padding: 60px;
    .box3-titlt1 {
      color: #fff;
      font-size: 48px;
      position: relative;
      z-index: 10000;
      line-height: 48px;
      margin: 0 0 45px;
      font-weight: 600;
    }
    .box3-content {
      position: relative;
      z-index: 1000;
      color: #fff;
      margin-bottom: 45px;
      letter-spacing: 0.025em;
      max-width: 750px;
    }
    strong {
      font-weight: bold;
      color: white;
      margin-bottom: 50px;
      display: block;
    }

    .box3-btn {
      cursor: pointer;
      // color: white;
      background: #fbb640;
      border-color: #fbb640;
      // color: #000;
      box-shadow: 3px 15px 35px 0px rgba(0, 0, 0, 0.24);
      display: inline-block;
      // border: 2px solid;
      text-align: center;
      width: 160px;
      height: 40px;
      -webkit-border-radius: 20px;
      border-radius: 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      letter-spacing: 0.025em;
      line-height: 1.5;
      font-size: 16px;
      -webkit-transition: all 0.2s;
      -o-transition: all 0.2s;
      transition: all 0.2s;
      text-decoration: none;
      padding-top: 8px;
      outline: none;
      transition: all 0.2s;
    }
    .box3-btn:hover {
      background: #fcc972;
      border-color: #fcc972;
    }
    .card-ball {
      position: absolute;
      right: 18%;
      top: 30%;
    }
  }
  .box-2-items {
    display: flex;
    margin: 200px 0;
    .box-2-cover {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: -100px;
      img {
        width: 500px;
      }
    }
    .box-2-text {
      padding-right: 50px;
      .box-2-t-title {
        font-size: 26px;
        line-height: 32px;
        font-weight: 600;
        margin-top: -63px;
        margin-bottom: 60px;
      }
      .box-2-t-e-content {
        margin-bottom: 20px;
        letter-spacing: 0.025em;
        font: 400 16px/28px "Montserrat", sans-serif;
      }
    }
  }
  .box-ul :nth-child(even) {
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
  .box-ul :nth-child(odd) {
    .box-2-text {
      padding-left: 50px;
    }
  }
  .box-2-items > div {
    flex: 1;
  }
  .box-1-title-X {
    max-width: 70%;
    margin: 0 auto 60px;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.025em;
    font-size: 16px;
    color: #333;
    line-height: 1.8em;
  }
  * {
    text-align: left;
  }
  .ADvideo_text1 {
    font-size: 20px;
    font-weight: 600;
  }
  .ADvideo_title {
    color: white;
    small {
      font-size: 26px;
      line-height: 1.23077;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 67px;
      line-height: 1.22388;
      margin-bottom: 30px;
      font-weight: 600;
    }
  }
  .btn-zjk {
    margin-top: 60px;
    margin-left: 20%;
  }
  .header {
    position: relative;
    height: 450px;
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
    // justify-content: center;
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
    margin-top: 20px;
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
    width: 80%;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  .box-1-title {
    margin-bottom: 60px;
  }

  .box-items {
    // display: flex;
    margin-top: 60px;
    padding: 20px 20px;
    border-radius: 20px;
    transition: all 0.2s;
  }

  .box-i-1 {
    flex: 1;
  }

  .box-i-1 h3 {
    // max-width: 300px;
    font-weight: 600;
    line-height: 1.8em;
    font-size: 42px;
    text-align: center;
    margin: 60px 0;
  }

  .box-i-2 {
    padding: 40px 60px;
    background-color: #740b99;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    letter-spacing: 0.025em;
    padding: 40px 40px;
    color: #fff;
    margin: 0 5px;
  }

  .box-1-title {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 1400px) {
  .box-i-1 h3 {
    font-size: 35px;
  }
  .box-2-items .box-2-cover img {
    width: 400px;
  }
  .box {
    width: 90%;
  }
  .btn-zjk {
    margin-top: 60px;
    margin-left: 8%;
  }
  .ADvideo_title {
    h1 {
      font-size: 48px;
      line-height: 1.22388;
      margin-bottom: 30px;
      font-weight: 600;
    }
  }
  .ADvideo_text1 {
    font-size: 18px;
    font-weight: 600;
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
    // justify-content: center;
    /* align-items: normal; */
    margin-left: 10%;
  }
}
@media screen and (max-width: 1200px) {
   .box-4 {
    .box4-title {
      margin: 120px 0 60px;
     padding-left: 10%;

    }
    .box4-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .box4-item {
        margin-bottom: 60px;
        width: 42%;
        margin-left: 3%;
        .box4-i-img > img {
          box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          margin-bottom: 30px;
          width: 100%;
          height: 100%;
        };
        .box4-i-text{
              color: #000000;
    text-decoration: none;
        font-weight: bold;
    line-height: 30px;
    font-size: 18px;
        }
      }
    }
  }
  .card-ball {
    display: none;
  }
  .box-3 {
    // padding-top: 0px;
    width: 80%;
  }
  .box3-container {
    height: 460px;
  }
}
@media screen and (max-width: 900px) {
  .box3-container {
    height: 470px;
  }
  .box-2-items {
    flex-direction: column;
    .box-2-cover {
      margin-bottom: 150px;
      justify-content: center;
      img {
        width: 500px;
      }
    }
  }
  .box-ul :nth-child(even) {
    justify-content: center;
    flex-direction: column;
  }

  .box-i-1 h3 {
    font-size: 28px;
  }
  .box-1-title-X {
    max-width: 80%;
    margin: 0 auto 60px;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.025em;
    font-size: 16px;
    color: #333;
    line-height: 1.8em;
  }
  .box {
    width: 90%;
  }
  .ADvideo_title {
    h1 {
      font-size: 26px;
      line-height: 1.22388;
      margin-bottom: 30px;
      font-weight: 600;
    }
  }
  .ADvideo_text1 {
    font-size: 16px;
    font-weight: 600;
  }
  .btn-zjk {
    // margin: 0 auto;
    margin-top: 20px;
    margin-left: 10%;
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
    // justify-content: center;
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
    margin: 20px auto;
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

  .box-3 {
    // margin-top: 80px;
  }
}

@media screen and (max-width: 800px) {
  .box-4 {
    margin-left: 0;
    .box4-title {
      margin: 80px 0 ;
     padding-left: 4%;
    //  font-size: 26px;
       h2{
      font-size: 26px;
      }
    }
    .box4-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-direction: column;
      .box4-item {
        margin-bottom: 60px;
        width: 400px;
        margin-left: 3%;
        .box4-i-img > img {
          box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          margin-bottom: 30px;
          width: 100%;
          height: 100%;
        };
        .box4-i-text{
              color: #000000;
    text-decoration: none;
        font-weight: bold;
    line-height: 30px;
    font-size: 18px;
        }
      }
    }
  }
  .box3-container .card-ball {
    display: block;
    left: 6%;
    top: 0;
  }
  .box3-container {
    height: 672px;
    padding: 236px 30px 70px;
  }
  //     .ADvideo_text1 {
  //       font-size: 14px;
  //       font-weight: 600
  //   }
  .box-2-items .box-2-text {
    padding-left: 5%;
  }
  .header,
  .img-fixed {
    height: 640px;
  }
  .ADvideo_title {
    small {
      font-size: 16px;
    }
  }
  .header-text {
    position: absolute;
    left: 0;
    top: 0px;

    width: 100%;
    height: 100%;
    /* align-items: normal; */
    margin-left: 0%;
    /* text-align: center; */
    justify-content: center;
    align-items: center;
  }
  .btn-zjk {
    margin: 0 50px;
  }
  .h-t-btn {
    width: 150px;
    height: 41px;
    border-radius: 25px;
    line-height: 1.3;
    /* margin-left: 26%; */
    margin: 20px auto;
  }
  .box-1-title-X {
    max-width: 90%;
    margin: 0 auto 60px;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.025em;
    font-size: 16px;
    color: #333;
    line-height: 1.8em;
  }
}
@media screen and (max-width: 450px) {
 .box-4 {
   margin-left: 0;
    .box4-title {
      margin: 120px 0 60px;
     padding-left: 10%;

    }
    .box4-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-direction: column;
      .box4-item {
        margin-bottom: 60px;
        width: 100%;
        // margin-left: 3%;
        .box4-i-img > img {
          box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          margin-bottom: 30px;
          width: 100%;
          height: 100%;
        };
        .box4-i-text{
              color: #000000;
    text-decoration: none;
        font-weight: bold;
    line-height: 30px;
    font-size: 18px;
        }
      }
    }
  }
}
#mycanvas {
  /* background: black;    */
  position: absolute;
}
</style>
