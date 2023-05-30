<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <!-- Logo -->
                <router-link :to="{ name: 'home' }" class="navbar-brand">
                    <img src="/images/logo.png" alt="Logo Massimiliano Sabatino">
                </router-link>
                <!-- /Logo -->
                <!-- Menu button -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- /Menu button -->
                <!-- Menu item -->
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
                            <router-link :to="{ name: 'technologies' }" class="nav-link">
                                Tecnologie
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'types' }" class="nav-link">
                                Tipologie
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contatti</a>
                        </li>
                    </ul>
                </div>
                <!-- /Menu item -->
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>