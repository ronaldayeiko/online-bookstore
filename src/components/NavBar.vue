<script setup>

</script>

<template>
 <v-app-bar color="primary">
    <v-app-bar-title>
    <router-link to="/">
        <v-img src="/logo.png" width="12%" height="12%"></v-img>
    </router-link>
    </v-app-bar-title>
    <v-btn to="/">Home</v-btn>
    <v-btn to="/books">Books</v-btn>
    <v-btn to="/cart">cart</v-btn>
    <v-btn to="/Library">Library</v-btn>
    <v-btn to="/wishlist">Wishlist</v-btn>
    <v-btn to="/admim">admin</v-btn>
    <v-btn to="/profile">profile</v-btn>
 </v-app-bar>
 
    </template>
    