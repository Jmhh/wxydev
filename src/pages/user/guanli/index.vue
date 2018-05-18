<!-- 管理端管理页 -->
<template>
      <div class="layout">
        <section class="layout-content">
           <aside>
                <Sider/>
            </aside>
            <main>
                <Header/>
                <tabs/>
            </main>
        </section>
    </div>
</template>

<script>
import Sider from "components/a-siderbar";
import Header from "components/header";
import Tabs from "../tabs/tabs";
export default {
  data () {
    return {
    };
  },
  components: {
        Sider,
        Header,
        Tabs
    }

}

</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.cs{

}
</style>