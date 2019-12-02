<template>
  <div id="app">
    <router-view v-if="$route.meta.isLogin"></router-view>
    <div v-else>
      <LuffyNav></LuffyNav>
      <router-view/>
    </div>

  </div>
</template>
<script>
    export default {
        name: 'App',
        data() {
            return {}
        }
    }
</script>
<style scoped>

</style>
