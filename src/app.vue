<template>
  <div id="app">
    <Siderbar v-if="this.$route.name !== '登录'"></Siderbar>
    <div style="flex:1">
        <Header v-if="this.$route.name !== '登录'"></Header>
        <transition>
            <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>

import Siderbar from '../src/components/siderbar'
import Header from '../src/components/header'
export default {
  name: 'app',
  components: {
      Siderbar,
      Header
  }
}
</script>

<style>
@import 'styles/_reset.scss';
@import 'http://at.alicdn.com/t/font_675759_ngew0un9725ipb9.css';
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  height: 100vh;
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ebf2f9;
 
}
</style>
