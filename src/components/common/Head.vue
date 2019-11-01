<template>
    <div>
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#">
                <img src="../../assets/images/logo.svg" alt="" width="150px">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#">Disabled</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Lang">
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#"><span class="glyphicon glyphicon-menu-left"></span>中文</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-form right>
                        <b-button size="sm" class="my-2 my-sm-0 head-button" type="submit">Contact Us</b-button>
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
.head-button
    width: 150px
    background: #740B99
    border-radius: 15px
    border-color: #740B99

.nav-item
    color: red

</style>
