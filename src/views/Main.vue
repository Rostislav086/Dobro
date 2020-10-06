<template>
    <div class="content">
        <div class="tabs">
            <input class="tabs-marathon__my" type="radio" name="tabs-marathon" id="tab-btn-1"
            checked/>
            <label class="tabs-btn__title" for="tab-btn-1">Мои марафоны</label>
            <input
                class="tabs-marathon__search"
                type="radio"
                name="tabs-marathon"
                id="tab-btn-2"
                value
            />
            <label class="tabs-btn__title" for="tab-btn-2">Найти марафоны</label>
            <MyMarathon class="my tabs-content" id="tabs-content__1"></MyMarathon>
            <SearchMarathon class="search tabs-content" id="tabs-content__2"></SearchMarathon>
        </div>
        <!-- /.tabs -->
    </div>
    <!-- /.content -->
</template>

<script>
import MyMarathon from '../components/MyMarathon.vue';
import SearchMarathon from '../components/SearchMarathon.vue';

export default {
  components: {
    MyMarathon,
    SearchMarathon,
  },
};
</script>
<style lang='scss'>
  @import '../scss/style.scss';
  @import '../scss/_main.scss';
</style>
