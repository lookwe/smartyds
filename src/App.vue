<template>
  <div id="app">
      <aAnima type="5"></aAnima>
      <aAnima type="6"></aAnima>
      <aAnima type="7"></aAnima>
      <aAnima type="8"></aAnima>

  </div>
</template>

<script>
    import aAnima from './components/common/custom/BallAnimation'

export default {
    name: 'app',
    components: {
        aAnima
    }

}
</script>

<style lang="scss">
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
    .btn-pulse-6 [class*="btn-pulse-circle"] {
        background: -webkit-linear-gradient(315.35deg,#fbb63f -1%,#b069a1 97%);
        background: -o-linear-gradient(315.35deg,#fbb63f -1%,#b069a1 97%);
        background: linear-gradient(134.65deg,#fbb63f -1%,#b069a1 97%);
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
