<!-- 学校列表子组件 -->
<template>
    <div style="display: flex;flex-wrap: wrap;">
        <div v-for="(item, index) in data" :key="item.id" class="schools-wrapper-item">
            <slot :row="item" :$index="index"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    data() {
        return {};
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
</style>