<template>
  <div class="home">
      <div class="block">
    <el-carousel trigger="click" height="400px" :interval="3000">
      <el-carousel-item v-for="item in slideimg" :key="item.id">
                <img :src='item.imgurl' alt=""  height="400px">
      </el-carousel-item>
    </el-carousel>
  </div>
      <div class="home-courses">
        <div class="title">
          <h1>自学编程必备免费+实战教程</h1>
          <p>这些课程是决定你能否成为编程奇才的关键教程— 免费+实战，我们送给你了</p>
        </div>
        <div class="content">
          <div class="more">
            <a href="">

                        更多实战
                            <img src="static/img/home-right.png" alt="">
            </a>

          </div>
          <div class="courses">courses</div>
        </div>
      </div>
  </div>

</template>

<script>

  export default {
    name: 'home',
    data(){
      return{
        slideimg:[
          {id:1,imgurl:"static/img/banner1.png"},
          {id:2,imgurl:"static/img/banner2.png"},
          {id:3,imgurl:"static/img/banner3.png"},

        ]
      }
    }
  }
</script>

<style scoped>
.home-courses{
  margin-top: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.home-courses .title{
      text-align: center;
  width: 100%;
}
.home-courses .title h1{
      color: #333;
    font-size: 28px;
    font-weight: 400;
}
.home-courses .title p{
    margin-top: 14px;
    font-size: 14px;
    font-weight: 300;
    color: #5e5e5e;
}
.content{
  width: 1200px;
}
.content .more{
  margin-top: 12px;
  margin-bottom: 23px;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
}
.content .more a{
  display: flex;
  align-items: center;
   font-size: 14px;
    color: #9d9d9d;

}
  .more img{
      margin-left: 5px;
    width: 14px;
    height: 14px;
  }






















</style>
