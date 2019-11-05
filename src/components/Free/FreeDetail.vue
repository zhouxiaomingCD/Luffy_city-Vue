<template>
  <div class="free-detail">
    <div class="free-top" :style="`background:${courseDetail.template_color}`">
      <div class="back">
        <span><img src="/static/img/back.png" alt=""></span>
        <span>返回课程主页</span>
      </div>
      <div class="title">
        <h1>{{courseDetail.name}}</h1>
        <div class="brief-intro">
          <div>
            <p>课程小节：{{courseDetail.numbers}}小节</p>
            <p>时长：{{courseDetail.hours}}小时</p>
            <p>{{courseDetail.learn_number}}人在学</p>
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
            <ul class="get-list" >
              <li v-for="(outline,index) in courseDetail.course_outlines">
                <span><img src="/static/img/get.png" alt=""></span>
                <p>{{outline.title}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="course-outline">
          <div class="title-op">
            <p class="title">课程大纲</p>
            <p class="op-total">
              <span class="operation">全部收起</span>
              <span class="total-list">{{courseInfo.section_count}}小节</span>
              <span class="total-time">{{courseInfo.video_time}}</span>
            </p>
          </div>
          <div class="data" v-for="(section,index) in courseInfo.details" :key="section.id">
            <div class="listtitle">
              <p>
                <img src="/static/img/jianhao.png" alt="">
                {{section.name}}
              </p>
              <span class="alltime">{{section.video_time}}</span>
            </div>
            <ul class="datalist">
              <li v-for="(course,index) in section.coursesections" :key="course.id">
                <p>
                  <img src="/static/img/bofang-s.png" alt="">
                  1.{{index+1}}{{course.name}}
                </p>
                <span>
                  10:57
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="introduce">
        <div class="side-video">
          <div class="video-start">
            <img :src="`//hcdn1.luffycity.com/${courseDetail.course_img}`" alt=""
                 class="img">
            <span class="bofang"><img src="/static/img/triangle.svg" alt=""></span>
          </div>
          <div class="power">
            <p class="title">学霸团专属权益</p>
            <ul>
              <li>
                <img src="/static/img/kejian-logo.png" alt="">
                课件下载
              </li>
              <li>
                <img src="/static/img/dianshi-logo.png" alt="">
                定期公开课
              </li>
              <li>
                <img src="/static/img/chat-logo.png" alt="">
                学员交流
                QQ群：{{courseDetail.chat_group.group_id}}
              </li>
              <li>
                <img src="/static/img/answer-logo.png" alt="">
                导师答疑
              </li>
            </ul>
          </div>
          <div class="start">
            <div class="to-study">开始学习</div>
            <a class="to-group" :href=courseDetail.chat_group.add_link>加入学霸团</a>
          </div>
        </div>
        <div class="teacher-study">
          <div class="teacher">
            <p class="lable">讲师介绍</p>
            <div class="short-intro">
              <img :src=courseDetail.teacher.image alt="">
              <div class="info">
                <p class="name">{{courseDetail.teacher.name}}</p>
                <p class="short">{{courseDetail.teacher.title}}</p>
              </div>

            </div>
            <article>
              {{courseDetail.teacher.brief}}
            </article>
          </div>
          <div class="study">
            <p class="title">学习路径</p>
          </div>
        </div>
      </div>
    </div>
    <div class="video-play">

    </div>
  </div>
</template>

<script>
  export default {
    name: "FreeDetail",
    data() {
      return {
        reverse: true,
        courseInfo: {},
        courseDetail: {}
      };
    },
    methods: {
      GetCourseInfo() {
        this.$http.get(`https://www.luffycity.com/api/v1/course/${this.$route.params.course_id}/sections/`).then((res) => {
          this.courseInfo = res.data.data;
        })
      },
      GetCoursedetail() {
          this.$http.get(`https://www.luffycity.com/api/v1/free/${this.$route.params.course_id}/detail/`).then((res) => {
          this.courseDetail = res.data.data;
          console.log(this.courseDetail)
        })
      }
    },
    created() {
      this.GetCourseInfo();
      this.GetCoursedetail()
    },
  }
</script>

<style scoped>
  .free-top {
    width: 100%;
    height: 300px;
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
    position: relative;
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
    border: 1px solid red;
  }

  .course-outline .title-op {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 50px;
    margin-bottom: 13px;
    padding-left: 17px;
    padding-right: 20px;
  }

  .course-outline .title {
    font-size: 22px;
    color: #000;
  }

  .course-outline .op-total {
    font-size: 14px;
    color: #2a2a2a;
  }

  .course-outline .op-total span {
    margin-left: 39px;
  }

  .course-outline .data .listtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .data .listtitle {
    padding-left: 26px;
    padding-right: 20px;
    cursor: pointer;
    height: 48px;
    background-color: #f9f9f9;
  }

  .data .listtitle p {
    font-size: 15px;
    color: #5e5e5e;
    display: flex;
    align-items: center;
  }

  .data .listtitle img {
    margin-right: 10px;
    width: 10px;
    height: auto;
  }

  .data .listtitle .alltime {
    color: #4a4a4a;
    font-size: 14px;
  }

  .data .datalist li {
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 20px;
    color: #6ca4c5;
    font-size: 14px;
    border:1px solid #dadada;
    border-bottom: 0;
    border-radius: 2px;
    background-color: #fff;
    cursor: pointer;
  }
  .data .datalist li:nth-last-child(1){
        border: 1px solid #dadada;
  }
  .data .datalist li:hover {
    color: #3a8ee6;
  }

  .data .datalist li p {
    display: flex;
    align-items: center;

  }

  .data .datalist li img {
    width: 16px;
    height: 16px;
    margin-right: 9px;
  }

  .free-content .introduce {
    width: 374px;
    height: auto;
    margin-left: 40px;
    margin-top: -260px;
    border: 1px;
  }

  .side-video {
    border-radius: 6px;
    border: 1px solid #e8e8e8;;
  }

  .side-video .video-start {
    padding: 5px 4px 27px;
    position: relative;
    box-shadow: 0 -2px 4px 0 #f3f3f3;
    cursor: pointer;
    background-color: #fff;
  }

  .side-video .video-start .img {
    width: 364px;
    height: 206px;
  }

  .side-video .video-start span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 51px;
    left: 130px;
    width: 104px;
    height: 104px;
    border-radius: 100%;
    background-color: #948b8b33;
  }

  .side-video .video-start .bofang img {
    width: 46px;
    margin-left: 12px;
  }

  .side-video .power {
    padding: 0 31px 32px;
  }

  .side-video .power p {
    font-size: 15px;
    color: #000;
    margin-bottom: 20px;
  }

  .side-video .power ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 12px;
    color: #4a4a4a;;
  }

  .side-video .power ul li {
    width: 150px;
    display: flex;
    align-items: center;
  }

  .side-video .power ul li:nth-child(-n+2) {
    margin-bottom: 18px;
  }

  .side-video .power ul img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }

  .side-video .start {
    padding: 0 31px 30px;
    font-size: 18px;
    line-height: 52px;
    text-align: center;
  }

  .side-video .start .to-study {
    height: 52px;
    background-color: #ffc210;
    color: #fff;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .side-video .start .to-group {
    display: block;
    width: 100%;
    height: 50px;
    color: #f5a623;
    border: 1px solid #f5a623;
  }

  .teacher-study {
    margin-top: 18px;
    padding: 30px 31px;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
  }

  .teacher {
    padding-bottom: 24px;
    border-bottom: 1px dashed #d0d0d0;
  }

  .teacher .lable {
    color: #000;
    font-size: 15px;
    margin-bottom: 12px;
  }

  .teacher-study .short-intro {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .teacher-study .short-intro img {
    width: 58px;
    height: 58px;
    border-radius: 100%;
    margin-right: 12px;
  }

  .short-intro .info .name {
    font-size: 16px;
    color: #4a4a4a;
    margin-bottom: 4px;
  }

  .short-intro .info .short {
    font-size: 13px;
    color: #9d9d9d;
  }

  .teacher article {
    margin-top: 5px;
    font-size: 14px;
    color: #5e5e5e;
    line-height: 26px;
  }

  .study {
    margin-top: 30px;
  }

  .study .title {
    font-size: 15px;
    color: #4a4a4a;
    margin-bottom: 23px;
  }


</style>
