<template>

  <div class="wrap">

    <div class="login">
      <h2>用户登录</h2>
      <div class="form">
        <div class="login_name">
          <input type="text" class="form_input" v-model="username"
                 placeholder="请输入用户名"/>
        </div>
        <div class="login_pwd">
          <input type="password" class="form_input" v-model="pwd"
                 placeholder="请输入密码"/>
        </div>

        <div id="wait" class="show" style="display: none">
          <div class="loading">
            验证加载中....
          </div>
        </div>
        <div class="geetest" id="geetest" style="display: none"></div>


        <div class="login_help">
          <label>
            <input name="login_remember" type="checkbox"/>
            记住帐号</label><span><a href="">用户注册 </a></span>
        </div>
        <input name="btn_Login" type="button" id="btn_Login" class="btn_Login" value="登 录" @click="loginHandler()"/>


      </div>
    </div>
  </div>


</template>

<script>

    export default {
        name: 'Login',
        data() {
            return {
                username: "",
                pwd: "",
                validateResult: {},//验证成功之后返回的结果，它用于服务端sdk的二次验
                captchaObj:{}
            }
        },
        methods: {

            loginHandler: function (obj) {
                let param = {
                    "username": this.username,
                    "pwd": this.pwd,
                    "geetest_challenge": this.validateResult.geetest_challenge,
                    "geetest_validate": this.validateResult.geetest_validate,
                    "geetest_seccode": this.validateResult.geetest_seccode
                };
                if (!this.username || !this.pwd) {
                    this.$notify.error({
                        message: '请输入用户名和密码'
                    });
                } else if (!this.validateResult.geetest_challenge) {
                    this.$notify.error({
                        title: "错误",
                        message: '请手动进行验证'
                    });
                } else {
                    console.log(this.validateResult);
                    this.$http.post("http://127.0.0.1:8001/api/login", param).then((res) => {
                        console.log(res);
                        if (res.data.code === 1000 && res.data.data.username) {
                            this.$notify({
                                message: '登录成功',
                                type: 'success'
                            });
                            let username = res.data.data.username;
                            let avatar = res.data.data.avatar;
                            localStorage.setItem("username", username);
                            localStorage.setItem("avatar", avatar);
                            this.$router.push("/home");
                        } else {
                            this.$notify.error({
                                title: "登录失败",
                                message: res.data.error
                            });
                            this.validateResult={};
                            document.getElementById('geetest').innerHTML = '';
                            this.init_gt()
                        }
                    })
                }
            },

            init_gt: function () {
                this.$http.get("http://127.0.0.1:8001/api" + "/pc-geetest/register?t=" + (new Date()).getTime())
                    .then((res) => {
                        let data = res.data;
                        console.log(data);
                        initGeetest({
                            gt: data.gt,
                            challenge: data.challenge,
                            offline: !data.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
                            width: "100%",
                            new_captcha: true,
                            product: "float", // 产品形式，包括：float，embed，popup。注意只对PC版验证码有效
                            // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
                        }, (captchaObj) => {
                            console.log(captchaObj);
                            captchaObj.appendTo("#geetest"); //将验证按钮插入到宿主页面中captchaBox元素内
                            captchaObj.onReady(() => {
                                document.getElementById('wait').style.display = 'none';
                                document.getElementById('geetest').style.display = 'block';
                            }).onSuccess(() => {
                                this.validateResult = captchaObj.getValidate();
                                console.log(this.validateResult);
                            }).onError(() => {
                                captchaObj.reset();
                            })
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
        },
        mounted() {
            this.init_gt()


        }
    }

</script>


<style scoped>
  .wrap {
    font-family: "microsoft yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #333333;
    background-color: #e0e4e8;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /*.form1{*/
  /*  height: 343vh;*/
  /*}*/
  .login {
    width: 343px;
    height: 343px;
    background: url(/static/img/login_bg.png) no-repeat
  }

  .login h2 {
    color: #242424;
    font-size: 18px;
    font-weight: normal;
    padding: 32px 0 0 35px
  }

  .form {
    margin: 20px 0 0 40px
  }


  .login_name {
    background: url(/static/img/logo_name.jpg);
    width: 270px;
    height: 32px;
    text-indent: 2.5em;
    padding-top: 6px
  }

  input, button, select, textarea {
    outline: none;
    font-family: "微软雅黑";
    border: 0
  }

  .login_name input, .login_pwd input {
    width: 230px;
    line-height: 28px
  }

  .geetest, #wait {
    width: 270px;
    height: 32px;
    margin-top: 20px;
  }

  #wait {
    text-align: center;
    border-radius: 2px;
    background-color: #F3F3F3;
    display: flex;
    align-items: center;
  }

  .loading {
    margin: auto;
    height: 20px;
    display: flex;
    align-items: center;
  }

  .veri_code input {
    width: 100px;
    line-height: 28px;
  }

  .valid_code_img img {
    display: block
  }

  .login_pwd {
    background: url(/static/img/logo_psw.jpg);
    width: 270px;
    height: 32px;
    text-indent: 2.5em;
    padding-top: 6px;
    margin-top: 20px
  }


  .login_help {
    margin-top: 20px
  }

  .login_help a {
    color: #666;
    float: right;
    padding-right: 30px;
    text-decoration: none
  }

  .btn_Login {
    background: #28c09a;
    border-radius: 3px;
    width: 273px;
    height: 36px;
    margin: 20px 0 10px 0;
    color: #fff;
    font-size: 16px;
    line-height: 36px;
    cursor: pointer
  }
</style>
