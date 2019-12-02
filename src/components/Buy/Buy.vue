<template>
  <div class="wrap">
    <div class="title">
      <p>课程</p>
      <p>有效期</p>
      <p>价格</p>
    </div>
    <div class="content">
      <div class="item">
        <p>
          <img src="//hcdn1.luffycity.com/static/frontend/course/161/vue4@2x_1573035178.211162.png" alt="">
          vue核心技术实战精讲
        </p>
        <p> 永久有效</p>
        <p>¥99.90</p>
      </div>

    </div>
    <div class="close-count">
      <div class="discount">
        <p class="use">使用优惠券:</p>
        <img src="/static/img/select-icon.png" alt="" :class="{trans:isTrans}" @click="ChangeTrans()">
        <p class="count">有0张可用</p>
      </div>
      <div class="allPrice">
        商品总金额：<span>99.90元</span>
      </div>
    </div>
    <div class="myDiscount">
      暂无可用优惠券
    </div>
    <div class="payment">
      <p class="beiLi">
        <el-checkbox v-model="checked" size="medium " ></el-checkbox>
        可用75个已抵扣 ￥7.5
      </p>
      <p class="discount">
        优惠券抵扣：<span>0元</span>
      </p>
      <div class="pay">
        <div class="way">
        支付方式:
        <ul>
          <li class="zfb " @click="ChoosePayWay('zfb')" :class="{confirmWay:payWay==='zfb'}">
            <img src="/static/img/zfb.svg" alt="">
            <span>支付宝</span>
            <img v-if="payWay==='zfb'" src="/static/img/wx-zfb-selected.svg" :class="{pendant:payWay==='zfb'}" alt="">
          </li>
          <li class="vx" @click="ChoosePayWay('vx')" :class="{confirmWay:payWay==='vx'}">
            <img src="/static/img/wx.svg" alt="">
            <span>微信</span>
            <img  v-if="payWay==='vx'" src="/static/img/wx-zfb-selected.svg" :class="{pendant:payWay==='vx'}" alt="">
          </li>
        </ul>
        </div>
      <div class="confirm">
        <span class="actual">实付款：</span>
        <span class="price">¥92.4</span>
        <form action="http://127.0.0.1:8001/pay" method="post"><button>立即支付</button></form>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
  import qs  from "qs"
    export default {
        name: "Buy",
        data(){
            return {
                confirmInfo:{},
                isTrans: true,
                checked:false,
                payWay:"zfb",

            }
        },
        methods: {
            GetConfirmInfo() {
                let params = this.$route.params;
                this.$http.post("/order/confirm/", params).then((res) => {
                      this.confirmInfo=res.data;
                console.log(this.confirmInfo)
                })
            },
            ChangeTrans(){
                this.isTrans = !this.isTrans;
            },
            ChoosePayWay(way){
                this.payWay=way
            },
        },
        created() {
            this.GetConfirmInfo()
        }
    }
</script>

<style scoped>
  .wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrap .title {
    width: 1200px;
    height: 70px;
    margin-top: 40px;
    font-size: 16px;
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
  }

  .title p:nth-child(1) {
    width: 65%;
    padding-left: 30px;
  }

  .title p:nth-child(2) {
    width: 20%;
  }

  .title p:nth-child(3) {
    width: 15%;
  }

  .content p:nth-child(1) {
    width: 65%;
  }

  .content p:nth-child(2) {
    font-size: 14px;
    width: 20%;
  }

  .content p:nth-child(3) {
    width: 15%;
  }

  .item p:nth-child(1) {
    padding-left: 20px;
    display: flex;
    align-items: center;
  }

  .content.content {
    width: 1200px;
    border-bottom: 1px solid #e8e8e8;
  }

  .content .item {
    height: 134px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item img {
    width: 170px;
    height: 85px;
    margin-right: 20px;
  }

  .close-count {
    width: 1200px;
    border-bottom: 1px solid #e8e8e8;
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-count .discount {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .discount .use {
    color: #666;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    margin-right: 15px;
    margin-left: 20px;
  }

  .discount img {
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
.discount img.trans{
  transform: rotate(-90deg);
}
  .discount .count {
    height: 22px;
    line-height: 22px;
    padding: 0 5px;
    background: #fa6240;
    border-radius: 2px;
    margin-left: 5px;
    font-size: 12px;
    color: #fff;
  }

  .close-count .allPrice {
    display: flex;
    align-items: center;
    color: #666;
    font-size: 16px;
    font-family: PingFangSC-Regular;
  }

  .close-count .allPrice span {
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #fa6240;
    margin-right: 120px;
  }
.wrap .myDiscount{
  width: 1200px;
  height: 123px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
    color: #9b9b9b;
    border-bottom: 1px solid #e8e8e8;
}
.payment{
  width: 1200px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 30px 45px 0 30px;
  margin-bottom: 180px;
}

  .payment .beiLi{
    font-size: 16px;
    color: #4a4a4a;
    font-family: PingFangSC-Regular;
    margin-bottom:40px ;
  }

.payment .discount{
  margin-bottom: 43px;
  font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #4a4a4a;
}
.payment .discount span{
font-size: 18px;
    color: #fa6240;
  margin-left: 5px;
}
.payment .pay{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pay .way {
  display: flex;
  align-items: center;
}
.pay .way ul{
  font-size:18px ;
  display: flex;
  margin-left: 10px;

}
.pay .way ul li{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 118px;
  height: 46px;
  border: 1px solid #e9e9e9;
  margin-right: 36px;
  position: relative;
  cursor: pointer;
}
.pay .way ul li.confirmWay{
border:1px solid #f5a623 ;
}
.pay .way li .pendant{
  width: 18px;
  position: absolute;
  right: -9px;
  bottom: -7px;
}
.pay .way ul li img{
  width: 26px;
  height: 26px;
  margin-right:8px;
  border-radius: 100%;
}

.pay .confirm{
  display: flex;
  align-items: center;
}
.pay .confirm span.price{
  font-size: 36px;
    color: #333;
  margin: 0 15px;
}

.pay .confirm button{
width: 110px;
  height: 38px;
  font-size: 16px;
      font-family: PingFangSC-Medium;
  background: #ffc210;
  line-height: 38px;
  color: #fff;
border: 0;
  border-radius: 5px;
  cursor: pointer;
}




















</style>
