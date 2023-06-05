<script>


export default {
    name: "AppHome",
    components: {  },
}
</script>
<template>
<div class="home">
    <div class="container h-100">
        <div id="name" class="row text-center align-items-center h-100">
            <div class="col-12">
                <h1>MASSIMILIANO SABATINO</h1>
                <h2>Tecnologo della comunicazione audiovisiva e multimediale</h2>
                <div class="link-projects">
                    <router-link :to="{ name: 'projects' }"
                        class="align-self-center my-4">
                        Portfolio
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
</style>