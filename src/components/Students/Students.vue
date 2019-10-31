<template>

  <div class="students-ach">
    <div class="banner">
      <img src="@/assets/teamPictrue.png" alt="">
    </div>
    <div class="wall">
      <div>
        <ul>
          <li>
            <a href="">同学说</a>
            <span>548</span>
          </li>
          <li>
            <a href="">Offer墙</a>
            <span></span>
          </li>
          <li>
            <a href="">同学感言</a>
            <span></span>
          </li>
          <li>
            <a href="">上课笔记</a>
            <span></span>
          </li>
          <li>
            <a href="">作业批改</a>
            <span></span>
          </li>
        </ul>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: "Students",
    data() {
      return {
        CategoryList: [],
        CourseList: [],
        CourseListOrg: [],
        currentIndex: 0,
        id: 0
      }
    },
    methods: {
      //点击每个标题分类id，动态改变样式及改变CourseList的值进行渲染
      CategoryChange(index, id) {
        this.currentIndex = index;
        // let id1=id;
        let CourseList = this.CourseListOrg;
        for (let item_id in CourseList) {
          if (id === 0) {
            this.CourseList = this.CourseListOrg;
          }
          if (CourseList[item_id].id === id) {
            this.CourseList = [CourseList[item_id]]
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
    },
    created() {
      this.GetCategoryList();
      this.FreeCourseList();

    }
  }
</script>

<style scoped>
  .banner img {
    width: 1920px;
    height: 240px;
  }

  .wall {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .wall div {
    width: 1200px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    /*position: relative;*/
    margin-top: -37px;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
  }

  .wall div ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
  }

  .wall ul li {
    font-size: 16px;
    margin-right: 65px;

  }

  .wall ul li a {
    color: #5e5e5e;;
  }
  .wall ul li span{
    position: relative;
    color: #d34a00;
    font-size: 14px;
    top: -10px;
  }
  .wall ul li a:hover {
    color: #f5a623;
  }


</style>
