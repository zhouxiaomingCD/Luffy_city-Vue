<template>
  <div class="course">
    <div class="main">
      <div class="screening">
        <div class="rl1">
          <ul>
            <li v-for="(item,index) in CategoryList" :key="item.id" :class="{this1:currentIndex===index}"
                @click="CategoryChange(index,item.id)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="course-list" v-for="(item) in CourseList" :key="item.id">
        <dl @click="ToDetail(item.id)">
          <dt><img :src=item.course_img alt=""></dt>
          <dd>
            <div class="name">
              <p>{{item.name}}</p>
              <p class="p">{{item.learn_number}}人已加入学习</p>
            </div>
            <div class="teacher">
              <p class="p">{{item.teacher_description}}</p>
              <p class="p">共{{item.numbers}}课时/更新完成</p>
            </div>
            <ul>
              <li v-for="(course,index) in item.free_sections">0{{index+1}} | {{course.name}}
                <span v-if="course.free_trail">免费</span>
              </li>
            </ul>
            <div class="price">
              <p>
                <span class="discount">限时折扣</span>
                <span class="present-price">¥{{item.promotion_price}}元</span>
                <span class="original-price">原价{{item.price}}元</span>
              </p>
              <button>立即购买</button>
            </div>
          </dd>
        </dl>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "Course",
    data() {
      return {
        CategoryList: [],
        CourseList: [],
        currentIndex: 0,
        id: 0
      }
    },
    methods: {
      CategoryChange(index, id) {
        this.currentIndex = index;
        this.GetCourseList(id)
      },
      GetCategoryList() {
        this.$http.get('https://www.luffycity.com/api/v1/course_sub/category/list/?belong=0')
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
      GetCourseList(id = 0) {
        this.$http.get(`/courses/?sub_category=${id}`)
          .then((response) => {
            console.log(response.data.data);

            this.CourseList = response.data.data
          })
          .catch((error) => {
            // handle error
            console.log(error);
          })
      },
      ToDetail(index){
        this.$router.push(this.$route.path+"/"+index+"/details-introduce")
      }
    },
    created() {
      this.GetCategoryList();
      this.GetCourseList();
    }
  }
</script>

<style scoped>
  .course {
    width: 100%;
    background: #f6f6f6;
    display: flex;
    position: relative;
    justify-content: center;
  }

  .main {
    width: 1100px;
    padding-top: 35px;

  }

  .screening {
    background: #fff;
    margin-bottom: 35px;
    border-radius: 4px;
    padding: 10px 20px;

  }

  .rl1 {
    padding-bottom: 18px;
  }

  .rl1 ul {
    display: flex;
    align-items: center;
  }

  .rl1 ul li {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-top: 20px;
    padding: 6px 15px;
    line-height: 16px;
    cursor: pointer;
    color: #4a4a4a;
  }

  .rl1 .this1 {
    color: #ffc210;
    padding: 6px 15px;
    box-shadow: 0 0 0 1px #ffc210 !important;
    border-radius: 30px;
  }

  .course-list dl {
    background-color: #fff;
    padding: 20px 30px 20px 20px;
    border-radius: 2px;
    cursor: pointer;
    margin-bottom: 35px;
    display: flex;

  }

  .course-list dl dt {

    margin-right: 30px;
  }

  .course-list dl dt img {
    width: 423px;
    height: 210px;
  }


  div.name {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 8px;
  }

  dd {
    width: 607px;
  }

  dd .p {
    font-size: 14px;
    color: #9b9b9b;
  }

  div.name p:first-child {
    font-size: 26px;
    color: #333;
  }

  div.teacher {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid #333;
    border-bottom-color: rgba(51, 51, 51, .05);
  }

  .course-list dl dd ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .course-list dd ul li {
    width: 50%;
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .course-list dd ul li:hover {
    color: #ffbc42 !important;
  }

  .course-list dd ul li span {
    display: inline-block;
    width: 34px;
    height: 20px;
    color: #fd7b4d;
    margin-left: 10px;
    border: 1px solid #fd7b4d;
    border-radius: 2px;
    text-align: center;
    font-size: 13px;
    white-space: nowrap;
  }

  .price {
    display: flex;
    justify-content: space-between;
  }

  .price p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price .discount {
    padding: 6px 10px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin-right: 8px;
    background: #fa6240;
    border: 1px solid #fa6240;
    border-radius: 10px 0 10px 0;
  }

  .price .present-price {
    font-size: 24px;
    color: #fa6240;
  }

  .price .original-price {
    text-decoration: line-through;
    font-size: 14px;
    color: #9b9b9b;
    margin-left: 10px;
  }

  .price button {
    width: 120px;
    height: 38px;
    background: transparent;
    color: #fa6240;
    font-size: 16px;
    border: 1px solid #fd7b4d;
    border-radius: 3px;
    outline: none;
  }

  .price button:hover {

    background: #ffdb51;
    color: white;
    cursor: pointer;
  }
</style>
