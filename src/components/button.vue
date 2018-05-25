<!-- 按钮组件 -->
<template>
        <button :class="[btnClass,cname]">
            <slot/>
        </button >
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
            btnClass: "button",
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