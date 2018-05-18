<!-- 按钮组件 -->
<template>
        <div :class="[btnClass,cname]">
            <slot/>
        </div>
</template>

<script>
export default {
    props: {
        cname: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            btnClass: "btn",
            cid: this.cname
        };
    },
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
@import "styles/_mixins.scss";

.btn {
    @include btn();
}
</style>