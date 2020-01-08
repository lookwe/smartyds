<template>
    <div class="footer">
        <section>
            <b-container>
                <b-row>
                    <div class="col-md-3">
                        <b-row>
                            <div class="col-sm-12">
                                <div class="footer-col">
                                    <div class="h3 footer-heading">
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">联络人</span>
                                        </span>
                                    </div>

                                    <div class="footer-country-title-title">
                                        中国 <i class="fa fa-angle-double-down"></i>
                                    </div>

                                    <div class="footer-country-title-title">
                                        美国 <i class="fa fa-angle-double-down"></i>
                                    </div>

                                    <div class="footer-country-title-title">
                                        乌克兰 <i class="fa fa-angle-double-down"></i>
                                    </div>

                                    <div class="footer-country-title-title">
                                        新加坡 <i class="fa fa-angle-double-down"></i>
                                    </div>
                                </div>
                            </div>
                        </b-row>
                    </div>

                    <div class="col-md-9">
                        <b-row>
                            <div class="col-sm-4">
                                <div class="footer-col">
                                    <div class="h3 footer-heading">
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">合作与服务</span>
                                        </span>
                                    </div>
                                </div>
                                <ul class="fun-list">
                                    <li><span>公司介绍</span></li>
                                    <li><span>我们的故事</span></li>
                                    <li><span>活动</span></li>
                                    <li><span>商务合作</span></li>

                                </ul>
                            </div>

                            <div class="col-sm-4">
                                <div class="footer-col">
                                    <div class="h3 footer-heading">
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">我们的产品</span>
                                        </span>
                                    </div>
                                </div>
                                <ul class="fun-list">
                                    <li><span>DSP广告主需求方平台</span></li>
                                    <li><span>SSP媒体方服务平台</span></li>
                                    <li><span>PDB私有化程序购买</span></li>
                                    <li><span>DMP大数据管理</span></li>
                                </ul>
                            </div>

                            <div class="col-sm-4">
                                <div class="footer-col">
                                    <h3 class="h3 footer-heading">
                                        广告格式
                                    </h3>
                                </div>
                                <ul class="fun-list">
                                    <li><span>数字广告格式</span></li>
                                    <li><span>原生广告</span></li>
                                    <li><span>视频广告</span></li>
                                    <li><span>横幅广告</span></li>
                                    <li><span>展示广告</span></li>
                                </ul>
                            </div>



                        </b-row>

                        <b-row class="md-maring">
                            <div class="col-sm-4">
                                <div class="footer-col">
                                    <h3 class="h3 footer-heading">
                                        资源资源
                                    </h3>
                                </div>
                                <ul class="fun-list">
                                    <li><span>GDPR常见问题</span></li>
                                    <li><span>产品文件</span></li>
                                    <li><span>博客</span></li>
                                    <li><span>评论</span></li>
                                    <li><span>实时出价</span></li>
                                </ul>
                            </div>

                            <div class="col-sm-4">
                                <div class="footer-col">
                                    <h3 class="h3 footer-heading">
                                        技术信息
                                    </h3>
                                </div>
                                <ul class="fun-list">
                                    <li><span>使用条款</span></li>
                                    <li><span>服务条款</span></li>
                                    <li><span>隐私政策</span></li>
                                    <li><span>发布者协议</span></li>
                                    <li><span>需求政策</span></li>
                                </ul>
                            </div>

                            <div class="col-sm-4">
                                <div class="footer-col">
                                    <h3 class="h3 footer-heading">
                                        招贤纳士
                                    </h3>
                                </div>
                                <ul class="fun-list">
                                    <li><span>Next Ads广告</span></li>
                                    <li><span>团队</span></li>
                                    <li><span>开放角色</span></li>
                                    <li><span>投资人</span></li>
                                </ul>
                            </div>

                        </b-row>
                    </div>
                </b-row>
            </b-container>
        </section>
        <!-- 版权 -->
        <section style="margin-top: 20px">
            <b-container fluid>
                <b-row>
                    <div class="col-12 footer-b">
                        <div class="footer-b-icon">
                            <i class="fa fa-facebook-f fa-lg"></i>
                            <i class="fa fa-twitter fa-lg"></i>
                            <i class="fa fa-youtube-play fa-lg"></i>
                            <i class="fa fa-weixin fa-lg"></i>
                            <i class="fa fa-qq fa-lg"></i>
                        </div>
                        <p>ICP证：粤ICP备19018026号 © {{thisYear}} nextbuzz.co All rights reserved. 巽丰科技 版权所有</p>
                    </div>
                </b-row>
            </b-container>
        </section>
    </div>
</template>

<script>
    export default {
        name: "vFooter",
        computed: {
            thisYear() {
                return new Date().getFullYear();
            },
        }
    }
</script>

<style scoped lang="scss">

    .footer {
        background: #fff;
        z-index: 10;
        .footer-heading {
            margin: 0 0 30px;
            line-height: 1.2;
            font-weight: bold;
        }
        .footer-country-title-title {
            margin: 20px 0;
            i {
               // -webkit-animation: jt linear infinite 1.5s;
            }
        }
        ul.fun-list {
            li>span{
                color: #000;
                font-size: 16px;
                line-height: 38px;
                text-decoration: none;
                -webkit-transition: color .2s;
                -o-transition: color .2s;
                transition: color .2s;
                letter-spacing: 0.025em;
                cursor: pointer;
            }
        }
        ul.fun-list li>span:hover {
            font-weight: bold;
        }

    }

    .footer-b {
        min-height: 80px;
        margin-top: 20px;
        background: #0C0C0C;
        text-align: center;
        color: #999;
        .footer-b-icon {
            display: inline-block;

            i {
                margin: 20px 10px 10px 10px;
            }
        }
        p {
           font-size: .85rem
        }
    }

    @keyframes jt {
        0% {
            font-size: 1rem;
        }

        50% {
            font-size: 1.45rem;
        }
        100% {
            font-size: 1rem;
        }
    }



    /* md以下 手机 */
    @media (max-width: 767px) {
        .footer {
            text-align: center;
        }
    }

    @media (min-width: 767px) {
        .md-maring {
            margin-top: 60px;
        }
    }
</style>
