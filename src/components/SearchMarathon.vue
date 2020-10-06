<template>
    <div>
        <div class="my tabs-content">
            <div class="marathon-search">
                <input
                    class="marathon-search__check"
                    type="radio"
                    id="allMarathon"
                />
                <label class="marathon-check__label" for="allMarathon"
                >Поиск марафона</label
                >

                <div>
                    <label class="marathon-search__label" for="searchMarathon"
                    >Поиск марафона</label
                    >
                    <input
                        class="marathon-search__input"
                        type="text"
                        id="searchMarathon"
                        placeholder="Введите имя пользователя, название марафона или его описание"
                    />
                </div>
            </div>
            <div class="my-marathon">
                <div
                    class="my-marathon__block"
                    v-for="marathon in marathons"
                    :key="marathon.id"
                >
                    <div class="item">
                        <div class="item-top">
                            <p class="item-top__title">{{ marathon.name }}</p>
                            <!--                            <p class="item-top__description">-->
                            <!--                                {{ fond.type_prefix }}-->
                            <!--                            </p>-->
                        </div>
                        <div class="item-bottom">
                            <p class="item-bottom__money">
                                Сумма
                                <br/>
                                {{ marathon.price }} руб.
                            </p>
                            <p class="item-bottom__percent"></p>
                        </div>
                    </div>
                    <p class="item-description">Вы пожертвовали 4 000 руб.</p>
                    <a href="#" class="item-button">Помочь</a>
                    <a href="#" class="item-img__share">
                        <img src="#" alt="share"/>
                    </a>
                </div>
                <!-- /.my-marathon__block -->
            </div>
            <!-- /.my-marathon -->
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
// import 'swiper/css/swiper.css';

export default {
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  // directives: {
  //   directive,
  // },
  data() {
    return {
      URL: '/api/events',
      marathons: [],
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
  // methods: {
  //   getMarathons() {
  //     axios.get(this.URL).then(response => {
  //       this.marathons = response.data;
  //     });
  //   },
  // },
  mounted() {
    this.getMarathons();
  },
};
</script>
