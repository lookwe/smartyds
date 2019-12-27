<template>
    <div class="most-right-serve">

        <ul class="floating-socials">
            <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
            <li><a href="#"><i class="fa fa-weixin"></i></a></li>
            <li><a href="#"><i class="fa fa-qq"></i></a></li>
        </ul>
        <ul class="floating-socials floating-socials_sign-me">
            <li>
                <img src="../../../assets/images/img/sign-me-up.svg" alt="">
            </li>
        </ul>

        <ul class="floating-socials floating-socials_sign-me">
           <div><i class="fa fa-chevron-up fa-lg"></i></div>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MostRightServe",
    }
</script>

<style scoped lang="scss">
    .most-right-serve {
        position: fixed;
        right: 1.5625%;
        top: 150px;
        z-index: 9999;
        height: 600px;
        i {
            color: #740B99;
        }

        .floating-socials {
            width: 60px;
            text-align: center;
            margin: 0;
            padding: 20px 0;
            list-style: none;
            -webkit-box-shadow: 3px 15px 35px 0 rgba(0,0,0,0.24);
            box-shadow: 3px 15px 35px 0 rgba(0,0,0,0.24);
            -webkit-border-radius: 30px;
            border-radius: 30px;
            background: #fff;

            li {
                height: 39px;
                overflow: hidden;

                a {
                    text-decoration: none;
                    font-size: 18px;
                    line-height: 39px;
                    display: block;
                    transform: scale(1);
                    transition: transform .15s,-webkit-transform .15s;
                    transform-origin: center center;
                }
            }
        }
        .floating-socials_sign-me {
            margin-top: 30px;

            li {
                height: 154px;
            }
        }
    }
</style>
