<template>

  <div class="free-course">
    <div class="course-img">
      <a href="">
        <img src="//hcdn1.luffycity.com/static/frontend/public_class/ketang@2x_1567059626.6092663.png" alt="">
      </a>
    </div>
    <div class="course-screening">
      <ul>
            <li v-model="CategoryList" v-for="(item,index) in CategoryList" :key="item.id" :class="{this1:currentIndex===index}"
                @click="CategoryChange(index,item.id)">{{item.name}}
            </li>
      </ul>
    </div>
    <div class="course-main" v-for="(item,index) in CourseList" >
      <section :class="{bc:index%2 !==0}">
        <div>
             <div class="name">{{item.name}}</div>
        <ul>
          <li v-for="(course) in item.courses">
            <div  @click="toDetail(course.id)">
              <div class="img-box">
                <img :src=course.course_img alt="">
              </div>
              <div class="course-item">
                <p class="title">
                   {{course.course_slogan}}
                </p>
                <div class="num-time">
                  <p class="num">
                    <img src="@/assets/bofang_s.png" alt="">
                    <span>{{course.learn_number}}人在学</span>
                  </p>
                  <p class="time">
                    <span>入门</span>
                    <span>{{course.hours}}小时</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        </div>

      </section>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Free",
    data() {
      return {
        CategoryList: [],
        CourseList: [],
        CourseListOrg:[],
        currentIndex: 0,
        id: 0
      }
    },
    methods: {
      //点击每个标题分类id，动态改变样式及改变CourseList的值进行渲染
      CategoryChange(index, id) {
        this.currentIndex = index;
        // let id1=id;
        let CourseList=this.CourseListOrg;
        for(let item_id in CourseList){
          if(id===0){
            this.CourseList=this.CourseListOrg;
          }
          if(CourseList[item_id].id===id){
            this.CourseList=[CourseList[item_id]]
          }
        }
      },
      //获取所有的免费课程
      GetCategoryList() {
        this.$http.get('course_sub/category/list/?belong=1')
          .then((response) => {
            // console.log(response.data.data);
            let obj = {
              id: 0,
              name: "全部",
              category: 0
            };
            this.CategoryList = response.data.data;
            this.CategoryList.unshift(obj)
          })
          .catch((error) => {
            // handle error
            console.log(error);
          })
      },
      FreeCourseList() {
        this.$http.get(`/free/category/`)
          .then((response) => {
            console.log(response.data.data);

            this.CourseListOrg = response.data.data;
            this.CourseList = this.CourseListOrg
          })
          .catch((error) => {
            // handle error
            console.log(error);
          })
      },
        toDetail(course_id){
          this.$router.push(this.$route.path+'/'+course_id)
        }
    },
    created() {
      this.GetCategoryList();
      this.FreeCourseList();

    }
  }
</script>

<style scoped>
  .free-course {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
.course-img{
  width:100%;
      display: flex;
  justify-content: center;
    background: #fff;
    border-bottom: 1px solid hsla(0,0%,59%,.1);
  padding-top: 20px;
    padding-bottom: 20px;
}
  .free-course img {
    width: 1200px;
    height: 100px;
  }
  .course-screening{
    width: 100%;
    padding-top: 20px;

            display: flex;
        justify-content: center;
  }
  .course-screening ul {
    width: 1200px;
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    color: #4a4a4a;
  }
  .course-screening ul li {
  margin-right: 50px;
    margin-bottom: 20px;
    cursor: pointer;

  }
    .course-screening ul li:hover{
      color: #f5a623;
    }

  .course-main{
    background-color: #f6f6f6;
    width: 100%;
  }
  section{
    display: flex;
    justify-content: center;
  }
  section.bc{
    background-color:#fff ;
  }
  div.name{
    width: 1200px;
    height: auto;
    margin-top: 60px;
    padding-left: 15px;
    padding-bottom: 15px;
    font-size: 24px;
    color: #4a4a4a;
  }
  section ul{
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 38px;
  }
  section ul li{
    margin-right: 23px;
    margin-bottom: 42px;
    cursor: pointer;
  }
  section ul li:nth-of-type(3n){
    margin-right: 0;
  }
  .img-box{
    height: 217px;
  }
  .img-box img{
    height: 217px;
    width: 384px;
  }
  .course-item{
    width: 340px;
    height: 138px;
    background: #fff;
    padding-left: 22px;
    padding-right: 22px;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 5px 20px 0 #e8e8e8;
  }
  .course-item>p{
    width: 340px;
    color: #5e5e5e;
    font-size: 16px;
    padding-top: 39px;
    margin-bottom: 10px;
  }
  .course-item .title:hover{
    color: #f5a623;;
  }
  .course-item .num-time{
    font-size: 14px;
    color: #9d9d9d;
    display: flex;
    justify-content: space-between;

  }
  .num-time p{
    display: flex;
    align-items: center;
  }
  .num-time p.num img{
    width: 17px;
    height: 17px;
    margin-right: 7px;
  }
  .course-item .time{
    width: 90px;
    display: flex;
    justify-content: space-between;
  }





















</style>
