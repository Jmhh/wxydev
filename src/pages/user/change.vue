<template>
   <div>
        <div class="change">
            <form action="">
                <div class="form-head">
                    <div class="head-prev">修改密码</div>
                    <div class="head-next" @click="close">X</div>
                </div>
                <div>
                    <em>*账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</em>
                    <input type="text" v-model.trim="account" @blur="valiacco">
                    <span v-show="validate.accohidd">账号不能为空</span>
                </div>
                <div>
                    <em>*原&nbsp;&nbsp;密&nbsp;码：</em>
                    <input type="password" v-model.trim="originalpad" @blur="valiorig">
                    <span v-show="validate.originalhidd">原密码不能为空</span>
                </div>
                <div >
                    <em>*新&nbsp;&nbsp;密&nbsp;码：</em>
                    <input type="password" v-model.trim="newpaad" @blur="valinew">
                    <span v-show="validate.newhidd">新密码不能为空</span>
                    <span v-show="validate.musthidd">密码必须6-20位，包含字母与数字</span>
                </div>
                <div >
                    <em>*确认密码：</em>
                    <input type="password" v-model.trim="confirmpaad" @blur="valiconf">
                    <span v-show="validate.confirmhidd">确认密码不能为空</span>
                    <span v-show="validate.diversehidd">密码不一致</span>
                </div>
                <div  class="form-buttom">
                    <input type="button" value="保存" class="buttom-button" @click="preserve" :class="{setting:backdrop}">
                    <input type="button" value="重置" class="buttom-conmm" @click="reset" @mouseover="buttom_reset">
                </div>

            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
           account:"",
           originalpad:"",
           newpaad:"",
           confirmpaad:"",
           backdrop:false,
           validate:{
              accohidd:false,
              originalhidd:false,
              newhidd:false,
              musthidd:false,
              confirmhidd:false,
              diversehidd:false,
           }
        }
    },
    methods:{
        inshow(){
            
            this. menu=true
        },
        // 点击隐藏表单
        close:function(){
            this.$emit("amend");
        },
        reset:function(){
            this.account="",this.originalpad="",this.newpaad="",this.confirmpaad=""
        },
        buttom_reset:function(){
            this.backdrop=false;
            console.log(6456)
        },
        valiacco(){
            if(this.account==""){
                this.validate.accohidd=true;
            }else{
                this.validate.accohidd=false;
                return true
            }
        },
        valiorig(){
            if(this.originalpad==""){
                this.validate.originalhidd=true;
            }else{
                this.validate.originalhidd=false;
                return true
            }
        },
        valinew(){
            if(this.newpaad==""){
                this.validate.newhidd=true;
                this.validate.musthidd=false;
            }else if(this.newpaad.search(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/) != 0){
                this.validate.musthidd=true;
                this.validate.newhidd=false;
            }else{
                this.validate.newhidd=false;
                this.validate.musthidd=false;
                return true
            }
        },
        valiconf(){
            if(this.confirmpaad==""){
                this.validate.confirmhidd=true;
                this.validate.diversehidd=false;
            }else if(this.confirmpaad!=this.newpaad){
                this.validate.confirmhidd=false;
                this.validate.diversehidd=true;
            }else{
                this.validate.confirmhidd=false;
                this.validate.diversehidd=false; 
                this.backdrop=true;
                return true;
            }
        },
        
        preserve:function(){
            if(this.valiacco() && this.valiorig() && this.valinew() && this.valiconf()){
                this.$emit("amend");
            }
        }
    },
    props: ["amend"]
   
}
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.change{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    position: fixed; 
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 101;
    form{
        width: 461px;
        // height: 374px;
        border-radius: 8px; 
        margin-top: 34px;
        background-color: #fff;
        position: fixed;
        top: 25%;
        left: 50%;
        margin-left: -230px;
        display: flex;
        flex-direction: column;
        .form-head{
            height: 90px;
            background: #4B83F0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0px 40px;
            border-radius: 8px 8px 0px 0px;
            div{
                font-size: 22px;
                color: #eeeeee;
                font-family: PingFang-SC-Heavy;
                margin-bottom:0; 
            }
            .head-next{
                width: 30px;
                height: 30px;
                font-size: 18px;
                font-weight: 600;
                line-height: 30px;
                border: 2px dashed #fff;
                cursor: pointer;
            }
        }
        div{
            margin-bottom: 25px;
            position: relative;
            display: flex;
            justify-content: center;
            em{
                width: auto;
                height: 16px;
                font-size: 16px;
                color: #4B83F0;
                font-family: PingFang SC;
                display: inline-block;
            }
            input{
                width: 178px;
                height: 22px;
                outline: none;
                border:1px solid #E9EBF2;
            }
            span{
                display: grid;
                font-size: 12px;
                margin-top: 3px;
                color: #ed3f14;
                position: absolute;
                top: 25px;
                left: 40%;
            }
        }
        .form-buttom{
            input{
                width: 80px;
                height: 26px;
                font-size: 14px;
                color: #ffffff;
                font-family: PingFang-SC-Bold;
                border: none;
                border-radius: 13px;
                background: #C5C9D4;
                cursor:pointer;
            }
            .buttom-button{
                margin-right: 31px;
            }
            .setting{
                 background: #62D862;
            }
            .buttom-button:hover{
                 background: #62D862;
            }
            .buttom-conmm:hover{
                background: #62D862;
            }
        }
    }
}
</style>

