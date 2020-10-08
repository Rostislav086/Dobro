<template>
    <div class="row row-cols-1 row-cols-md-3">
        <div class="col-6 mb-2" v-for="fond in fonds" :key="fond.id">
            <div class="card" style="width: 14rem;">
                <img class="card-img-top" :src="fond.image" alt="photo">
                <div class="card-body row flex-column justify-content-between">
                    <h5 class="card-title">{{ fond.type_prefix }}</h5>
                    <!--                    <p class="card-text"></p>-->
                    <div class="row justify-content-between">
                        <div class="col-6">
                            <a href="#" class="btn btn-sm btn-success">Выбрать</a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="btn btn-sm btn-success disabled">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FondsList',
  props: ['category'],
  data() {
    return {
      URL: 'https://marathon-dobro.h1n.ru/api/fonds',
      fonds: null,
    };
  },
  methods: {
    async getFonds() {
      if (this.category) {
        const response = await axios.get(this.URL +`/${this.category.id}`);
        this.fonds = response.data;
      } else {
        const response = await axios.get(this.URL);
        this.fonds = response.data;
        // console.log(this.fonds);
      }
    },
  },
  mounted() {
    this.getFonds();
  },
};

</script>

<style lang="sass" scoped>
.card
    height: 100%
</style>
