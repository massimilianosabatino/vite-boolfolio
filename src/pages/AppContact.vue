<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "Contact",
    data() {
        return {
            store,
            formData: {
                name: '',
                email: '',
                message: ''
            },
            lead: null,
        }
    },
    methods: {
        sendMessage() {
            const data = {
                name: this.formData.name,
                email: this.formData.email,
                message: this.formData.message
            };

            axios.post(`${this.store.apiBaseUrl}/lead`, data)
                .then((response) => {
                    console.log(response)
                    if (response.status === 201) { //created
                        this.lead = response.data;
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }
}
</script>
<template>
    <div id="contact" class="container">
        <div class="row justify-content-center my-5">
            <div class="col col-lg-8">
                <h3>Contattami</h3>
                <form @submit.prevent="sendMessage">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name" v-model="formData.name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="formData.email">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Testo</label>
                        <textarea class="form-control" id="message" rows="4" v-model="formData.message"></textarea>
                    </div>
                    <button class="btn btn-primary">Invia messaggio</button>
                </form>
            </div>
        </div>
    </div>
</template>
<style></style>