<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary static-top">
    <div class="container-fluid">
        <router-link active-class="active" class="nav-link navbar-brand" to="/" exact>
            <img width="164" src="../assets/logo.png" alt="">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link active-class="active" class="nav-link" to="/" exact>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link active-class="active" class="nav-link" to="/board">Boards</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {

}
</script>
