<template>
  <div id="app">
    <Header></Header>
        <main class="main">
            <button class="btn btn-sm btn-outline-light" v-on:click="show=!show">X</button>
            <div class="container main-container">
                <div class="user" v-show="show">
                    <div class="user-avatar">
                        <img :src="img" alt="photo">
                    </div>
                    <!-- <p class="user-name">{{ user.first_name }} {{ user.last_name }} </p> -->
                    <!--        <p class="user-desription">Щедрый меценат</p>-->
                    <!--        <div class="user-info">тут должна быть инфа</div>-->
                    <p class="user-support">Написать в поддержку</p>
                </div>
                <router-view/>
            </div>
        </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
// import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    // Footer,
  },
  data() {
    return {
      user: null,
      img: null,
      show: true,
    };
  },
};
</script>

<style lang="scss">
</style>
