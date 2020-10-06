<template>
  <div class="content">
    <div class="wrapper">
      <div class="event-create-box mb-2">
        <h3 class="text-center">Создание марафона</h3>
        <form>
          <div class="row mb-2">
            <label for="name" class="col-4">Название марафона</label>
            <input
              id="name"
              name="name"
              type="text"
              class="col-8 form-control"
              placeholder="Введите название марафона"
            />
          </div>

          <div class="row mb-2">
            <div class="col-4">
              <button class="btn btn-sm btn-success" type="button">Выбрать фонд</button>
            </div>
            <div class="fond-name col-8">Имя фонда</div>
          </div>

          <div class="row mb-2">
            <label for="price" class="col-4">Название марафона</label>
            <input
              id="price"
              name="price"
              type="number"
              value="1000"
              class="col-8 form-control"
              placeholder="Введите сумму для завершения марафона"
            />
          </div>
          <div class="row justify-content-center">
            <button type="button" class="btn btn-lg btn-success justify-content-center">
              Создать марафон
            </button>
          </div>
        </form>
      </div>
      <div class="event-fonds-box">
        <h3 class="text-center">Выбор фонда</h3>
        <ul class="nav">
          <li class="nav-item">
            <p class="nav-link active">Категории</p>
          </li>
          <li class="nav-item" v-for="category in categories" :key="category.id">
            <a href="#" class="nav-link active">{{ category.name }}</a>
          </li>
        </ul>
        <FondsList />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FondsList from './FondsList.vue';

export default {
  name: 'Fonds',
  components: { FondsList },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      const response = await axios.get('/api/categories');
      this.categories = response.data;
      // console.log(response.data);
    },
  },

  mounted() {
    this.getCategories();
  },
};
</script>

<style lang="sass" scoped>
.wrapper
    background-color: lightgrey
    border-radius: .5rem
    height: 100%
    margin: .5rem
    padding: 3rem 2rem

.event-create-box,
.event-fonds-box
    background-color: #E5E5E5
    padding: 1rem
    border-radius: .5rem

.event-create-box form
    padding: 0.5rem
</style>
