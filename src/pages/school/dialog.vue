<!-- 弹窗组件 -->
<template>
    <div>
        <div class="dialog-wrap">
            <div class="dialog-mask" v-if="show" @click="cloaseDialog"></div>
            <transition name="drop">
                <div class="dialog-content" v-if="show">
                    <div class="dialog-title">
                        <span>{{title}}</span>
                        <span class="dialog-close" @click="cloaseDialog">
                            <i class="iconfont icon-guanbi"></i>
                        </span>
                    </div>
                    <div class="dialog-body">
                        <slot>empty</slot>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        }
    },
    data() {
        return {};
    },
    methods: {
        cloaseDialog() {
            this.$emit("on-close");
        }
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.drop-enter-active {
    transition: all 0.35s ease;
}
.drop-leave-active {
    transition: all 0.2s ease;
}
.drop-enter {
    transform: translateY(-50px);
    opacity: 0;
}
.drop-leave-active {
    transform: translateY(-20px);
    opacity: 0;
}

.dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
}
.dialog-mask {
    background: #000;
    opacity: 0.55;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.dialog-content {
    width: 50%;
    position: fixed;
    overflow: auto;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    line-height: 1.6;
    .dialog-title {
        position: relative;
        background: #4b83f0;
        padding: 30px;
        border-radius: 8px 8px 0 0;
        text-align: left;
        span {
            font-size: 22px;
            font-family: PingFang-SC-Heavy;
            color: rgba(254, 254, 254, 1);
            line-height: 21px;
        }
        i {
            position: absolute;
            top: 30px;
            right: 20px;
            font-size: 40px;
            cursor: pointer;
        }
    }

    .dialog-body {
        min-height: 200px;
        padding: 20px;
        background: #fff;
        border-radius: 0 0 8px 8px;
    }
}
</style>