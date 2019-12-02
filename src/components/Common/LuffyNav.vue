<template>
        <header>
      <div class="header-top"><p>老男孩IT教育 | 帮助有志向的年轻人通过努力学习获得体面的工作和生活</p></div>
      <div class="header-nav">
        <div class="nav">
          <img src="//hcdn1.luffycity.com/static/frontend/activity/head-logo_1564141048.3435316.svg" alt=""
               class="oldboy-logo" @click="To_home()">
          <ul>
              <router-link v-for='(item) in modelList' :key="item.id" :to="{name:item.name}"><li>{{item.title}}</li></router-link>
          </ul>
        <div class="nav-right-box">
          <div class="search" >
              <el-input  placeholder="Python Linux" size="mini" ></el-input>

          </div>
          <div>
            <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
          </div>

          <div class="login-reg" v-if="!is_show_info">
            <p class="login" @click="Login()">登录</p>
            <p>|</p>
            <p class="reg" >注册</p>
          </div>

          <div class="info" v-else>
          <div class="shop-car">购物车</div>
          <div class="my-class">我的教室</div>
          <div class="avatar" @mouseenter="ToShow()">
            <p>
              <img :src="avatar" style="border: 1px solid rgb(243, 243, 243);" alt="">
          </p>
          </div>
              <ul class="detail" v-show="is_show_ul" @mouseenter="ToShow()" @mouseleave="ToHide()">
                <li v-for="(item) in detailList" :key="item.id">
                  {{item.title}}
                  <img src="/static/img/to.svg" alt="">
                </li>
              </ul>
          </div>
        </div>
        </div>

      </div>

    </header>
</template>

<script>
    export default {
        name: "LuffyNav",
          data() {
      return {
        modelList: [
          {"id": 1, "title": "免费课", 'name':"free"},
          {"id": 2, "title": "实战课", 'name':"courses"},
          {"id": 3, "title": "轻课", 'name':"light-course"},
          {"id": 4, "title": "就业班", 'name':"micro"},
          {"id": 5, "title": "题库",'name':"personal-test"},
          {"id": 6, "title": "学员成果", 'name':"students"}
        ],
          detailList:[
          {"id": 1, "title": "我的账户", 'name':"my_count"},
          {"id": 2, "title": "我的订单", 'name':"my_order"},
          {"id": 3, "title": "贝里小卖铺", 'name':"bali"},
          {"id": 4, "title": "我的优惠券", 'name':"my_coupon"},
          {"id": 5, "title": "我的消息",'name':"my_msg"},
          {"id": 6, "title": "退出", 'name':"logout"}
          ],
          is_show_ul:false,
          is_show_info:false,
          avatar:"//hcdn1.luffycity.com/static/frontend/head_portrait/logo@2x.png",
      }
    },
      methods:{
          To_home:function () {
                        console.log(this);
            this.$router.push({ path: 'home' })
          },
          ToShow:function () {
              this.is_show_ul=true
          },
          ToHide:function () {
              this.is_show_ul=false
          },
          Login:function () {
              this.$router.push("/login")
          }

      },
        mounted() {
            if(localStorage.getItem("username")){
                this.avatar="http://127.0.0.1:8001"+localStorage.getItem("avatar");
                this.is_show_info=true
            }
        }
    }
</script>

<style scoped>
.header-top {
    cursor: pointer;
    color: #9d9d9d;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
  }
  .header-top p {
    width: 1200px;
    height: 40px;
    line-height: 40px;
    font-size: 12px;

  }
  .header-nav {
    width: 100%;
    height: 60px;
    background: #fff;
    margin: 0 auto;
    display: flex;
    border-bottom: 1px solid hsla(0, 0%, 59%, .1);
    justify-content: center ;
  }
  .oldboy-logo {
    width: 118px;
    height: auto;
    cursor: pointer;

  }
  .nav {
    position: relative;
    width: 1200px;
    display: flex;
    align-items: center;
  }
  .nav ul {
    font-size: 15px;
    height: 36px;
    display: inline-block;
    margin-left: 40px;
  }
  .nav ul a {
    color: #4a4a4a;
    width: auto;
    display: inline-block;
    margin-right: 30px;
    line-height: 36px;
  }
  .nav ul a:hover{
    border-bottom: #f5a623 solid 2px;

  }
  .nav ul a.router-link-active{
    border-bottom: #f5a623 solid 2px;
    color: #f5a623;
  }
  .nav-right-box{
    font-size: 15px;
    color: #4a4a4a;
    font-weight: 300;
    position: absolute;
    right: 0;
    top: 12px;
  }
  .info{
    position: relative;
  }
  .nav-right-box div{
      float: left;
      margin-right:25px ;
      line-height: 36px;
    }
  .nav-right-box .search{
    width: 225px;
    margin-right:3px ;
  }
    .nav-right-box .login-reg{
      display: flex;
      align-items: center;
      color: #5e5e5e;
      font-size: 14px;
    }
    .nav-right-box .login-reg p{
      margin-left: 10px;
    }
        .nav-right-box .login-reg p.login,p.reg{
      cursor: pointer;
    }
  .avatar img{
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 5px;
    cursor: pointer;
  }
  .info ul.detail{
    position: absolute;
    background: #fff;
    right: 0;
    top:50px;
    z-index: 5;
    width: 190px;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 #d0d0d0;
  }
  ul.detail li{
    height: 40px;
    font-size: 14px;
    color: #5e5e5e;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
    ul.detail li img{
      width: 5px;
      height: 10px;
    }
    ul.detail li:hover{
      background: #ebeff5;
    }
</style>
