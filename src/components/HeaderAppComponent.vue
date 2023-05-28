<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <router-link :to="{ name: 'home' }" class="navbar-brand">
                    <img src="/images/logo.png" alt="Logo Massimiliano Sabatino">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'projects' }" class="nav-link">
                                Progetti
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contatti</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>