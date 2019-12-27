<template>
    <div class="top-navigation">
        <b-navbar toggleable="lg" type="light" fixed="top">
            <!-- 公司名、项目名 -->
            <b-navbar-brand href="#">
                <img src="../../assets/images/img/logo.jpg" alt="logo" width="150px">
            </b-navbar-brand>

            <!-- 与<b-collapse is-nav>组件一起使用 -->
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <!-- 响应式 -->
            <b-collapse id="nav-collapse" is-nav>
                <!-- 全高和轻量级导航（包括对下拉菜单的支持） -->
                <b-navbar-nav>
                    <!-- 用于连接 跳转路由操作 -->
                    <b-nav-item href="#">
                        <span class="text-muted">Brands and Agencies</span>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <span class="text-muted">Publishers and App Developers</span>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <span class="text-muted">About</span>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <span class="text-muted">Blog</span>
                    </b-nav-item>

                    <!-- 导航下拉框 -->
                   <!-- <b-nav-dropdown></b-nav-dropdown>-->

                    <!-- 用于添加垂直居中的文本字符串 把标题放在中间 -->
                    <b-nav-text></b-nav-text>

                    <!-- 用于任何形式的控件和动作 -->
                    <b-nav-form></b-nav-form>
                </b-navbar-nav>


                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto text-muted">
                    <b-nav-item-dropdown text="Lang" text-muted>
                        <b-dropdown-item href="#">English</b-dropdown-item>
                        <b-dropdown-item href="#"><span class="text-muted"></span>简体中文</b-dropdown-item>
                        <b-dropdown-item href="#"><span class="text-muted"></span>繁體中文</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-form right>
                        <b-button size="sm" class="my-2 my-sm-0 head-button rounded-pill" type="submit">Contact Us</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Head",
        methods: {
            getMeal() {

            }
        },
        mounted() {
            this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
                console.log('collapseId:', collapseId)
                console.log('isJustShown:', isJustShown)
            })
        }
    }
</script>

<style scoped lang="sass">
    .fixed-top
        background: #fff
        border-bottom: 1px solid #ebebeb
        box-shadow: 0 7px 14px 0 rgba(0,0,0,0.07)

        .head-button
            width: 150px
            background: #740B99
            border-color: #740B99
            box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.07)

</style>
