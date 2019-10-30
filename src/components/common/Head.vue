<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="success">
            <b-container>
                <b-navbar-brand href="#">Mealzers</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input
                                    size="sm"
                                    class="mr-sm-2"
                                    placeholder="Search for a meal"
                                    v-model="meal"
                            ></b-form-input>
                            <b-button
                                    size="sm"
                                    class="my-2 my-sm-0"
                                    type="submit"
                                    @click.prevent="getMeal"
                            >Search</b-button>
                        </b-nav-form>
                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template slot="button-content"><em>User</em></template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
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

<style scoped>

</style>
