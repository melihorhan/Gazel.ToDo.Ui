<style lang="scss">
@import 'variables';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import "../node_modules/font-awesome-sass/assets/stylesheets/font-awesome";
@import './assets/styles/custom.scss';
</style>

<template>
<div id="app">
    <app-header></app-header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <router-view />
            </div>
        </div>
    </div>
    <!--Footer-->
</div>
</template>

<script>
import Header from './components/header.vue';

export default {
    components: {
        'app-header': Header
    },
}
</script>