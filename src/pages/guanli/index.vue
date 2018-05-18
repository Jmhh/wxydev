<!-- 管理端管理页 -->
<template>
      <div class="layout">
        <section class="layout-content">
           <aside>
                <Sider/>
            </aside>
            <main>
                <Header/>
            </main>
        </section>
    </div>
</template>

<script>
import Sider from "components/a-siderbar";
import Header from "components/header";
export default {
  data () {
    return {
    };
  },
  components: {
        Sider,
        Header,
  }

}

</script>
<style rel='stylesheet/scss' lang='scss' scoped>

</style>