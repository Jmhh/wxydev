<template>
    <div class="wai-sel" v-bind:class="{abclass:adborder}">
        <div class="sel" @click="drop">
            <span>{{this.seltext===1 ? 'get' : this.seltext===2 ? 'post' : this.seltext===3 ? 'pull' : this.seltext===4 ? 'del' : '请选择'}}</span><i class="icon iconfont icon-zhedie-jian"></i></div>
        <div class="menu" v-show="isShow">
            <div class="item" v-for="(item,index) in list" :key="index" @click="pitch(item.name, index+1)" ><span>{{item.name}}</span></div>
        </div>
        <!-- <div>{{this.seltext || '请选择'}}llll</div> -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      adborder:false,
      isShow:false,
      seltexts:this.seltext
    }
  },
  props: ['seltext', 'list'],
   methods: {
        //获取下拉列表
        drop(){
            this.isShow =! this.isShow;
            this.adborder =! this.adborder
        },
        pitch(item, index){
            this.seltexts=item
            this.isShow=false;
            this.adborder =! this.adborder
            this.$emit('handleSelect', index)
        }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
 .wai-sel{
    font-family: Adobe Heiti Std R; 
    color: #757575;
    margin: 0;
    position: relative;
    .sel{
        display: flex;
        justify-content: space-between;
        i{
            margin: 3px 10px 0px 0px;
            font-size: 12px;
        }
    }
    .sel,.menu{
        font-size: 14px;
        width: 100%;
        border:1px solid #E9EBF2;
        span{
            margin-left: 10px;
        }
    }
     .menu{
        position: absolute;
        top: 21px;
        left: 0;
        color: #757575;
        background: #fff;
        .item{
            font-size: 14px;
            color: #757575;
        }
        .item:hover{
            color: #fff;
            background:#62D862;
        }
    }
 }
 .abclass{
     .sel,.menu{
         border:1px solid #62D862;
         i{
             color: #62D862;
         }
     }
 }
</style>
