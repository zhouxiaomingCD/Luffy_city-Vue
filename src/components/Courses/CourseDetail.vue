<template>
  <div class="wrap">
    <div class="courseItem">
      <div class="item">
        <div class="img">
          <img
            :src=paymentInfo.course_img
            alt="">
        </div>
        <div class="info">
          <p class="name">{{topInfo.name}}</p>
          <div class="statistics">
            <p>{{topInfo.learn_number}}人在学</p>
            <p>课程小节：{{topInfo.numbers}}小节</p>
            <p>时长：{{topInfo.hours}}小时</p>
          </div>
          <div class="dis-limit" v-if="paymentInfo.is_promotion">
            <p class="discount">{{paymentInfo.promotion_name}}</p>
            <p class="limit-time" v-if="paymentInfo.is_promotion">距离结束：仅剩 25天 09小时 41分 <span>30</span> 秒</p>
          </div>
          <div class="noPromotion" v-else>
                  <span class="label">价格</span>
                    <span class="price">¥{{paymentInfo.price}}</span>
          </div>
          <div class="price" v-if="paymentInfo.is_promotion">
            <span class="title" >活动价</span>
            <span class="now" >¥{{paymentInfo.promotion_price}}</span>
            <span class="org">¥{{paymentInfo.price}}</span>
          </div>
          <div class="confirm">
            <div>
              <p class="toBuy" @click="Tobuy()">立即购买</p>
              <p class="free-to-try">免费试学</p>
            </div>
            <p class="shop-cart">
              <img src="/static/img/course-shop-cart.svg" alt="">
              加入购物车
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="tab">
      <ul>
        <li>课程详情</li>
        <li>课程大纲 <span style="color: #fb7c55">(试学)</span></li>
        <li>讨论提问<span style="color: #fb7c55">(2)</span></li>
      </ul>
    </div>
    <div class="show">
      <div class="detail">
        <div class="left" v-html="courseImagesHtml">
        </div>
        <div class="right">
          <div class="study">
            <div class="power">
              <p class="title">学霸团专属权益</p>
              <ul>
                <li>
                  <i class="el-icon-document"></i>
                  课件下载
                </li>
                <li>
                  <i class="el-icon-monitor"></i>
                  定期公开课
                </li>
                <li v-if="teacherInfo.chat_group" >
                  <i class="el-icon-chat-dot-round"></i>
                  学员交流 <br>
                  QQ群：{{teacherInfo.chat_group.group_id}}
                </li>
                <li>
                  <i class="el-icon-user"></i>
                  导师答疑
                </li>
              </ul>
            </div>
            <div class="start" v-if="teacherInfo.chat_group">
              <a class="to-group" :href="teacherInfo.chat_group.add_link">加入学霸团</a>
            </div>
          </div>
          <div class="teacher" v-if="teacherInfo.teacher">
            <p class="lable">讲师介绍</p>
            <div class="short-intro" >
              <img   :src=teacherInfo.teacher.image alt="">
              <div class="info">
                <p class="name">{{teacherInfo.teacher.name}}</p>
                <p class="short">{{teacherInfo.teacher.title}}</p>
              </div>

            </div>
            <article>
              {{teacherInfo.teacher.brief}}
            </article>
          </div>
        </div>
      </div>
      <!--      <div class="course-outline">-->
      <!--        课程大纲-->
      <!--      </div>-->
      <!--      <div class="discuss">-->
      <!--        讨论提问-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
  export default {

    name: 'CourseDetail',
    data() {
      return {
        prices: [], //价格套餐
        currentIndex: null,
        paymentInfo: {},
        teacherInfo: {},
        courseImagesHtml: {},
        topInfo: {}
      }
    },
    methods: {
      GetPaymentInfo() {
        this.$http.get(`/course/${this.$route.params.course_id}/payment_info/`).then((res) => {
          this.paymentInfo = res.data.data;
          console.log(this.paymentInfo)
        })
      },  //获取课程价格等信息
      GetTeacherInfo() {
        this.$http.get(`/course/${this.$route.params.course_id}/right/`).then((res) => {
          this.teacherInfo = res.data.data;
          console.log(this.teacherInfo)
        })

      },  //获取右侧信息
      GetTopInfo() {
        this.$http.get(`/course/${this.$route.params.course_id}/top/`).then((res) => {
          this.topInfo = res.data.data;
          console.log(this.topInfo)
        })
      },    //获取顶部课程信息
      GetImagesHtml() {
        this.$http.get(`/course/${this.$route.params.course_id}/detail/`).then((res) => {
          this.courseImagesHtml = res.data.data;
          // console.log(this.courseImagesHtml.content);
          let temp = this.courseImagesHtml.content.split("src=\"");
          this.courseImagesHtml = temp.join("src=\"" + "//www.luffycity.com");
          // console.log(this.courseImagesHtml);
        })
      }, // 返回的是html，因为调用了路飞的接口，所以需要在src加一个路飞的域名
      Tobuy() {
        this.$router.push({ name: 'buy', params: { products: [{course_id: this.paymentInfo.id, valid_period: this.paymentInfo.valid_period}], is_degree: 0}})
      } //跳转至登录页面
    },
    created() {
      this.GetPaymentInfo();
      this.GetTeacherInfo();
      this.GetImagesHtml();
      this.GetTopInfo();
    }
  };
</script>

<style lang="css" scoped>
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
  }

  .wrap .courseItem {
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }

  .wrap .courseItem .item {
    width: 1200px;
    display: flex;
    flex-direction: row;

  }

  .courseItem .item .img img {
    width: 690px;
    height: 388px;
  }

  .courseItem .info {
    width: 100%;
    position: relative;
  }

  .courseItem .info p.name {
    font-size: 20px;
    color: #333;
    padding: 10px 23px;
  }

  .courseItem .info .statistics {
    display: flex;
    flex-direction: row;
    padding-left: 23px;
    padding-right: 23px;
    padding-bottom: 16px;
    font-size: 14px;
    color: #9b9b9b;
  }

  .info .statistics p {
    margin-right: 20px;
  }

  .info .dis-limit {
    padding: 10px 23px;
    height: 32px;
    background-color: #fa6240;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.info .noPromotion{
  width: 100%;
    height: auto;
    background: #f9f1e7;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #4a4a4a;
    display: flex;
    align-items: flex-end;
    padding: 10px 23px;
}
.noPromotion span.price{
font-size: 26px;
    color: #fa6240;
    margin-left: 10px;
  margin-bottom: -5px;
}

  .info .dis-limit .discount {
    font-size: 16px;

  }

  .info .dis-limit .limit-time {
    font-size: 14px;

  }

  .info .dis-limit .limit-time span {
    padding: 6px 0;
    background-color: #fafafa;
    color: #5e5e5e;;
  }

  .info div.price {
    padding: 5px 23px;
    display: flex;
    align-items: baseline;
  }

  .info div.price span {
    margin-right: 12px;

  }

  .info div.price .title {
    font-size: 14px;
    color: #4a4a4a;

  }

  .info div.price .now {
    font-size: 26px;
    color: #fa6240;
    font-family: PingFangSC-Regular;
  }

  .info div.price .org {
    font-size: 14px;
    text-decoration: line-through;
    color: #9b9b9b;
  }

  .info .confirm {
    width: 100%;
    position: absolute;
    padding-left: 23px;
    left: 0;
    bottom: 20px;
    display: flex;
    justify-content: space-between;
  }

  .info .confirm div {
    display: flex;
    justify-content: center;
  }

  .info .confirm div p {

    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .info .confirm .toBuy {
    width: 125px;
    height: 40px;
    background-color: #ffc210;
    color: #fff;
    cursor: pointer;
  }

  .info .confirm .free-to-try {
    width: 123px;
    height: 38px;
    border: 1px solid #ffc210;
    background-color: #fff;
    color: #ffc210;
    cursor: pointer;
  }

  .info .confirm .shop-cart {
    margin-right: 35px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #ffc210;
    cursor: pointer;
    font-family: PingFangSC-Regular;
  }

  .confirm .shop-cart img {
    width: 20px;
    height: auto;
    margin-right: 7px;
  }

  .wrap .tab {
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    box-shadow: 0 2px 4px 0 #f0f0f0;
  }

  .tab ul {
    width: 1200px;
    display: flex;
    flex-direction: row;
    color: #4a4a4a;
    align-items: center;
  }

  .tab ul li {
    margin-right: 15px;
    padding: 26px 20px 16px;
    font-size: 17px;
    cursor: pointer;
  }

  .show {
    width: 100%;

    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  .show .detail {
    width: 1200px;
    display: flex;
    justify-content: space-between;

  }

  .detail .left {
    width: 755px;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
  }

  .left >>> img {
    width: 755px;
    height: auto;
  }

  .detail .right {
    width: 374px;
  }

  .detail .right .study {
    background-color: #fff;
    border-radius: 4px;

  }

  .detail .right .power {
    padding: 20px 30px 31px;
  }

  .detail .right .power p {
    font-size: 15px;
    color: #000;
    margin-bottom: 20px;
  }

  .detail .right .power ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    color: #4a4a4a;;
  }

  .detail .right .power ul li {
    width: 150px;
    display: flex;
    align-items: center;
    font-size: 12px;
  }

  .detail .right .power ul li:nth-child(-n+2) {
    margin-bottom: 18px;
  }

  .detail .right .power ul i {
    display: inline-block;
    font-size: 22px;
    margin-right: 9px;
  }

  .detail .right .start {
    padding: 0 30px 30px;
    font-size: 18px;
    line-height: 52px;
    text-align: center;
  }

  .detail .right .start .to-group {
    display: block;
    width: 100%;
    height: 50px;
    color: #f5a623;
    border: 1px solid #f5a623;
    cursor: pointer;
  }


  .detail .right .teacher {
    margin-top: 18px;
    background-color: #fff;
    padding: 30px 31px;
  }

  .detail .right .teacher .lable {
    color: #000;
    font-size: 15px;
    margin-bottom: 12px;
  }

  .right .teacher .short-intro {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 4px;
  }

  .right .teacher .short-intro img {
    width: 58px;
    height: 58px;
    border-radius: 100%;
    margin-right: 12px;
  }

  .right .short-intro .info .name {
    font-size: 16px;
    color: #4a4a4a;
    margin-bottom: 4px;
  }

  .right .short-intro .info .short {
    font-size: 13px;
    color: #9d9d9d;
  }

  .right .teacher article {
    margin-top: 5px;
    font-size: 14px;
    color: #5e5e5e;
    line-height: 26px;
  }


</style>
