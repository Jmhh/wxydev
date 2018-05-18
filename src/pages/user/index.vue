<template>
  <div id="home">
    <div class="weui-cells">
      <a v-for="item in items" class="weui-cell weui-cell_access" :href="route + item.goods_id">
        <div class="weui-cell__hd"><img :src="imgUrl + 'statics/images/img2.jpg'" style="width:20px;margin-right:5px;display:block"></div>
        <div class="weui-cell__bd">
          <p>{{ item.name }}</p>
        </div>
        <div class="weui-cell__ft">{{ item.selling_price }}</div>
      </a>
    </div>
    <login/>
  </div>
</template>

<script>
  import * as Types from 'store/mutation-types'
  import {mapState, mapMutations} from 'vuex'
  import {imgUrl} from 'config/index'
  import {getUserInfo} from 'api/user'
  import Login from './login/login'

  export default {
    name: 'home',
    data() {
      return {
        imgUrl: imgUrl,
        size: '_50x50_100',
        route: '#/detail/',
        items: []
      }
    },
    components:{
      Login 
    },
    computed: {
      ...mapState([
        'user',
      ]),
    },
    methods: {
      ...mapMutations([
        Types.GET_USER_INFO
      ]),
      getData: function () {
        let that = this;
        console.log(this.user.login);
        this.$store.commit('increment');
        this.$store.dispatch('doneTodos',{amount: 10});
        getUserInfo(that);
        console.log(this.$store.state.user.login);
      }
    },
    created() {
      this.getData();
      this.GET_USER_INFO({id: 1});
    }
  }
</script>
