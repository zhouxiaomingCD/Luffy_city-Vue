<template>
  <div class="free-detail">
    <div class="free-top">
      <div class="back">
        <span><img src="/static/img/back.png" alt=""></span>
        <span>返回课程主页</span>
      </div>
      <div class="title">
        <h1>Python21天入门</h1>
        <div class="brief-intro">
          <div>
            <p>课程小节：26小节</p>
            <p>时长：14小时</p>
            <p>611人在学</p>
          </div>
        </div>
      </div>
      <div class="course-nav">
        <ul>
          <li class="course-detail">课程详情</li>
          <li class="discussion">讨论提问（25）</li>
          <li class="ware-download">课件下载</li>
        </ul>
      </div>
    </div>
    <div class="free-content ">
      <div class="content-box">
        <div class="intro-get">
          <div class="intro">
            <p class="title">
              介绍
            </p>
            <article>
              这是一个Go语言入门教程，适合有一定编程基础的同学学习，由于Go语言的语法非常简洁。通过本课程的学习你将掌握Go语言的基本语法，特别是Go语言中独特的并发和接口部分的内容。学习完本课程后你将具备独立开发一些简单的后端程序的能力
            </article>
          </div>
          <div class="get">
            <p class="title">
              你将会学到的
            </p>
            <ul class="get-list">
              <li>
                <span><img src="/static/img/get.png" alt=""></span>
                <p>学会基本语法，流程控制，手刃一个300行代码的小程序</p>
              </li>
              <li>
                <img src="/static/img/get.png" alt="">
                <p>学会基本语法，流程控制，手刃一个300行代码的小程序</p>
              </li>
              <li>
                <span><img src="/static/img/get.png" alt=""></span>
                <p>学会基本语法，流程控制，手刃一个300行代码的小程序</p>
              </li>
              <li>
                <span><img src="/static/img/get.png" alt=""></span>
                <p>学会基本语法，流程控制，手刃一个300行代码的小程序</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="course-outline">
          <div>
            <p class="title">课程大纲</p>
            <p class="op-total">
              <span class="operation">全部收起</span>
              <span class="total-list">16小节</span>
              <span class="total-time">3:44:16</span>
            </p>
          </div>
          <div class="data">
            <div class="listtitle">
              第1章·计算机硬件
            </div>
            <ul class="datalist">
              <li>
                <img src="" alt="">
                1.1计算机介绍
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="introduce"></div>
    </div>
    <div class="free-video"></div>
  </div>
</template>

<script>
  export default {
    name: "FreeDetail"
  }
</script>

<style scoped>
  .free-top {
    width: 100%;
    height: 300px;
    background: rgb(88, 82, 82);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    position: relative;
  }

  .free-top .back {
    width: 1200px;
    margin-top: 30px;
    margin-bottom: 38px;
    cursor: pointer;
  }

  .free-top .back span {
    font-size: 16px;
  }

  .free-top .back span img {
    width: 6px;
    height: 11px;
    margin-right: 3px;
  }

  .free-top .title {
    width: 1200px;
    padding-left: 23px;
  }

  .title h1 {
    font-weight: 500;
  }

  .free-top .brief-intro {
    font-size: 16px;
    margin-top: 8px;
  }

  .free-top .brief-intro div {
    display: flex;
    justify-content: flex-start;
  }

  .free-top .brief-intro div p {
    margin-right: 26px;
  }

  .course-nav {
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 72px;
    display: flex;
    justify-content: center;
  }

  .course-nav ul {
    width: 1200px;
    padding-left: 23px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .course-nav ul li {
    margin-right: 26px;
    padding-bottom: 4px;
    cursor: pointer;
  }

  .bg {
    background-color: #f9f9f9;;
  }

  .free-content {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  .free-content .content-box {
    width: 780px;
  }

  .content-box .intro-get {
    background-color: #f3f3f3;
    padding: 30px 20px 15px;
  }

  .content-box .intro-get p.title {
    font-size: 22px;
  }

  .content-box .intro-get .intro article {
    font-size: 14px;
    color: #5e5e5e;
    margin-top: 10px;
    margin-bottom: 50px;
  }

  .content-box .intro-get .get ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 17px;
  }

  .content-box .intro-get .get ul li {
    width: 303px;
    font-size: 14px;
    color: #5e5e5e;
    margin-right: 42px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }

  .content-box .intro-get .get ul li img {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }


  .free-content .introduce {
    width: 374px;
  }


</style>
