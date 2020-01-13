<template>
    <div>
        <div :class="['btn-pulse','btn-pulse-'+type]">
            <div class="btn-pulse-circle-1" :style="{'width': width +'px', 'height': width +'px' }">&nbsp;</div>
            <div class="btn-pulse-circle-2" :style="{'width': width-40 +'px', 'height': width-40 +'px', 'margin': '-15px 0 0 -15px' }">&nbsp;</div>
            <div class="btn-pulse-circle-3" :style="{'width': width-60 +'px', 'height': width-60 +'px', 'margin': '-5px 0 0 -5px' }">&nbsp;</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BallAnimation",
        props: {
            /*可选 2=纯黄 3=纯白 5=深紫 6=橙黄 7=浅蓝 8=紫绿*/
            type: {
                type: String,
                default: "2",
            },
            width: {
                type: String,
                default: "80",
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn-pulse, .fake-btn-pulse {
        width: 70px;
        height: 70px;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }

    /*纯黄*/
    .btn-pulse-2 [class*="btn-pulse-circle"] {
        background: #fbb640;
    }
    /*纯白*/
    .btn-pulse-3 [class*="btn-pulse-circle"] {
        background: #fff;
    }

    /*深紫*/
    .btn-pulse-5 [class*="btn-pulse-circle"] {
        background: -webkit-linear-gradient(315deg,#7d15a1 2.83%,#b675a8 100%);
        background: -o-linear-gradient(315deg,#7d15a1 2.83%,#b675a8 100%);
        background: linear-gradient(135deg,#7d15a1 2.83%,#b675a8 100%);
    }
    /*橙黄*/
    .btn-pulse-6 [class*="btn-pulse-circle"] {
        background: -webkit-linear-gradient(315.35deg,#fbb63f -1%,#b069a1 97%);
        background: -o-linear-gradient(315.35deg,#fbb63f -1%,#b069a1 97%);
        background: linear-gradient(134.65deg,#fbb63f -1%,#b069a1 97%);
    }
    /*浅蓝*/
    .btn-pulse-7 [class*="btn-pulse-circle"] {
        background: -webkit-linear-gradient(358.24deg,#2593e8 -54.15%,#55b5ff 88.67%);
        background: -o-linear-gradient(358.24deg,#2593e8 -54.15%,#55b5ff 88.67%);
        background: linear-gradient(91.76deg,#2593e8 -54.15%,#55b5ff 88.67%);
    }
    /*紫绿*/
    .btn-pulse-8 [class*="btn-pulse-circle"] {
        background: -webkit-linear-gradient(284.04deg,#17e9b5 0,#a024ea 100%);
        background: -o-linear-gradient(284.04deg,#17e9b5 0,#a024ea 100%);
        background: linear-gradient(165.96deg,#17e9b5 0,#a024ea 100%);
    }

    .btn-pulse .btn-pulse-circle-1, .fake-btn-pulse .btn-pulse-circle-1 {
        width: 70px;
        height: 70px;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        opacity: .2;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        -ms-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation: btn-pulse-circle-1 2.1s infinite linear;
        animation: btn-pulse-circle-1 2.1s infinite linear;
    }

    .btn-pulse .btn-pulse-circle-2, .fake-btn-pulse .btn-pulse-circle-2 {
        width: 50px;
        height: 50px;
        margin: -25px 0 0 -25px;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        opacity: .4;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        -ms-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation: btn-pulse-circle-2 2.1s infinite linear;
        animation: btn-pulse-circle-2 2.1s infinite linear;
    }

    .btn-pulse .btn-pulse-circle-3, .fake-btn-pulse .btn-pulse-circle-3 {
        width: 30px;
        height: 30px;
        margin: -15px 0 0 -15px;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        opacity: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        -ms-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation: btn-pulse-circle-3 2.1s infinite linear;
        animation: btn-pulse-circle-3 2.1s infinite linear;
    }

    /*动画*/
    @keyframes btn-pulse-circle-1 {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
        }
        30.33% {
            -webkit-transform: scale(0.428);
            transform: scale(0.428);
            opacity: 1;
        }
        56.66% {
            -webkit-transform: scale(0.714);
            transform: scale(0.714);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 0;
        }
    }

    @keyframes btn-pulse-circle-2 {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
        }
        30.33% {
            -webkit-transform: scale(0.6);
            transform: scale(0.6);
            opacity: 1;
        }
        60.66% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 0;
        }
    }

    @keyframes btn-pulse-circle-3 {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
        }
        33.33% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 0;
        }
    }



</style>
