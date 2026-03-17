<script setup>
import {useRouter} from "vue-router";
import {useAuth} from '../Services/auth'

const router = useRouter();
const { logout } = useAuth()


const isLoggedIn = localStorage.getItem( "authToken")
const isAdmin = true


</script>

<template>
    <v-app-bar color="#A6AD1E">
        <v-app-bar-title>
            <router-link to="/">MacFit Gym</router-link>
        </v-app-bar-title>
        <v-btn to = "/homepage" v-if="isLoggedIn">Home</v-btn>
        <v-btn to = "/bundles">Bundles</v-btn>
        <v-btn to = "/gym_locations">Gym Locations</v-btn>
        <v-btn to = "/admin" v-if="isAdmin">Admin</v-btn>
          <v-btn icon="mdi-account" v-if="isLoggedIn">P
            <v-menu activator="parent">
                <v-list>
                    <v-list-item>
                        <v-btn color="primary" to="/profile">Profile</v-btn>                        
                    </v-list-item>
                    <v-list-item>
                        <v-btn color="primary" @click="()=> { logout(); router.push('/')}" </v-btn>                        
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
        <v-btn to = "/login" v-else>Login</v-btn>
        
    </v-app-bar>
</template>