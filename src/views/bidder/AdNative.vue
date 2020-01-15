<template>
    <!-- 视频广告 -->
    <div class="native">
        <div class="top-img-flex">
            <img class="parallax-slider" src="../../assets/images/uploads/native-afs-landing-header.png">
        </div>

        <div class="content">
            <b-container>
                <b-row>
                    <div class="col-12 flex-title color-fff">
                        <div>
                            <small class="fw-b flex-title-sketch">Use most impactful</small>
                            <h1 class="fw-b flex-title-content">Native Ad Formats</h1>
                        </div>

                        <ul>
                            <li> Maximize ROI</li>
                            <li> Avoid ad blockers</li>
                            <li> Complement site’s design</li>
                        </ul>

                        <b-button size="xl" class="rounded-pill bnt back-fff"
                                  variant="light">联 系 我 们
                        </b-button>
                    </div>
                </b-row>
            </b-container>

            <b-container fluid style="background: #fff">
                <section>
                    <b-container>
                        <b-row>
                            <div class="col-12 text header-text-removed text-muted">
                                When we talk about excellence in form and function, we talk about native ads. Native ad unit harmoniously blends with the rest of your website’s content and allures the users in without causing irritation. Apply mobile native ads, in-feed display, in-feed video and other formats programmatically and get more user clicks, better ROI and retention.
                            </div>
                        </b-row>
                    </b-container>
                </section>

                <section style="margin-top: 50px;">
                    <b-container>
                        <b-row>
                            <div class="col-12">
                                <h1 class="fw-b text-center">Native Advertising Formats</h1>
                            </div>
                            <div class="col-12 full-screen-card ad-formats color-fff">
                                    <p>Native ad format is the best fighter against ad fatigue. Unlike banner ads, these units appear as content recommendation widgets, in-feed content blocks, sponsored and branded content.</p>

                                    <p>Native ad formats complement the user experience, the publisher’s website and advertiser’s ROI. Attracting the gazes and sharing the useful information with the user, native ad formats raise the purchase intent at least on 20%.</p>

                                    <p>On programmatic SSP and DSP platforms, native advertising format can reach even more. Instantly optimize purchasing and selling of native ad format with a power of automation, programmatic auction and real-time bidding.</p>
                            </div>
                        </b-row>
                    </b-container>
                </section>

                <section style="margin-top: 50px;">
                    <b-container>
                        <b-row>
                            <div class="col-md-6 col-sm-12 test"></div>
                            <div class="col-md-6 col-sm-12 test"></div>
                        </b-row>
                    </b-container>
                </section>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdNative"
    }
</script>

<style scoped lang="scss">

    .test {
        height: 300px;
        border: 1px solid #777;
    }
    .top-img-flex {
        visibility: visible;
        z-index: -100;
        position: fixed;
        top: 60px;
        left: 0;
        overflow: hidden;
        transform: translate3d(0px, 0px, 0px);
        height: 450px;
        width: 100%;

        img {
            transform: translate3d(0px, 0px, 0px);
            position: absolute;
            top: -48px;
            left: 0;
            height: 498px;
            width: 100%;
            max-width: none;
        }
    }

    .flex-title {
        height: 435px;
        padding-top: 50px;

        .flex-title-sketch {
            font-size: 32px;
            line-height: 1.23077;
            margin-bottom: 10px;
        }
        .flex-title-content {
            font-size: 63px;
            line-height: 1.22388;
            margin-bottom: 30px;
        }
        ul>li {
           font-size: 1.25rem;
            line-height: 45px;
            font-weight: bold;
        }
        .bnt {
            margin-top: 30px;
        }
    }

    .header-text-removed {
        margin: 50px auto 50px;
        text-align: center;
    }

    .ad-formats {
        margin-top: 40px;
        background: linear-gradient(169.66deg,#fbb63f -1%,#b069a1 97%)!important;
        padding: 40px 60px;

        p {
        }
    }


    /* 台式桌面 lg 浏览器*/
    @media (max-width: 1199.98px) {
        .flex-title {
            .flex-title-sketch {
                font-size: 30px;
            }
            .flex-title-content {
                font-size: 70px;
            }
        }
    }


    /* 小于桌面模式下 md 平板*/
    @media (max-width: 991.98px) {
        .flex-title {
            .flex-title-sketch {
                font-size: 24px;
            }
            .flex-title-content {
                font-size: 48px;
            }
        }
    }

    /* 中小以下 sm 小屏幕*/
    @media (max-width: 768px) {
        .top-img-flex {
            height: 660px;
            img {

                top: -48px;
                left: -828px;
                height: 708px;
                width: 2265px;
                max-width: none;
            }
        }

        .flex-title {
            padding: 50px 0 0 30px;
            .flex-title-sketch {
                font-size: 16px;
            }
            .flex-title-content {
                font-size: 30px;
            }
        }

        .ad-formats {
            padding: 40px 30px;
        }
    }
</style>
