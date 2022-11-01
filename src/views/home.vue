<template>
    <div>
        <transition name='name1'>
            <router-link to="/home1">首页1</router-link>
        </transition>
        <transition name='name2'>
            <router-link to="/home2">首页2</router-link>
        </transition>
        <transition name='name3'>
            <router-link to="/home3">首页3</router-link>
        </transition>
        <transition name='name4'>
            <router-link to="/home4">首页4</router-link>
        </transition>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                flag:false
            }
        }
    }
</script>

<style scoped>
 .name1.enter,.name1-leave-to{
    opacity: 0;
 }
 .name1-enter-active,.name1-leave-active{
    transition: opacity 1s;
 }
</style>