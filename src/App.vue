<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/login">login</router-link>
    <router-view/>
  </div>
</template>

<style>
a{
  text-decoration: none;
  color: black;
  margin-left: 10px;
}
</style>
