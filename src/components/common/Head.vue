<template>
    <div class="top-navigation">
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#">
                <img src="../../assets/images/img/logo.svg" alt="" width="150px">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">
                        <span class="text-muted">Brands and Agencies</span>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <span class="text-muted">Publishers and App Developers</span>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <span class="text-muted">Enterprises and Ad Tech Partners </span>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <span class="text-muted">About</span>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <span class="text-muted">Events</span>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <span class="text-muted">Blog</span>
                    </b-nav-item>
                </b-navbar-nav>


                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto text-muted">
                    <b-nav-item-dropdown text="Lang" text-muted>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#"><span class="text-muted"></span>中文</b-dropdown-item>
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
        data() {
            return {
                meal: ''
            }
        },
        methods: {
            getMeal() {

            }
        }
    }
</script>

<style scoped lang="sass">
    .top-navigation
        position: fixed
        top: 0
        left: 0
        right: 0
        z-index: 999
        background: #fff
        border-bottom: 1px solid #ebebeb
        box-shadow: 0 7px 14px 0 rgba(0,0,0,0.07)

    .head-button
        width: 150px
        background: #740B99
        border-color: #740B99
        box-shadow: 0 7px 14px 0 rgba(0,0,0,0.07)
    .nav-item
        color: red

</style>
