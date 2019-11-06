import Vue from 'vue'
import Router from 'vue-router'
import Free from '@/components/Free/Free.vue'
import FreeDetail from '@/components/Free/FreeDetail.vue'
import Home from '@/components/Home/Home.vue'
import Courses from '@/components/Courses/Courses.vue'
import CourseDetail from '@/components/Courses/CourseDetail.vue'
import Buy from '@/components/Buy/Buy.vue'
import LightCourse from '@/components/LightCourse/LightCourse.vue'
import Micro from '@/components/Micro/Micro.vue'
import PersonalTest from '@/components/PersonalTest/PersonalTest.vue'
import Students from '@/components/Students/Students.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/Free',
      name: 'free',
      component: Free
    },    {
      path: '/Free/:course_id',
      name: 'FreeDetail',
      component: FreeDetail
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    }, {
      path: '/courses/:course_id/details-introduce',
      name: 'CourseDetail',
      component: CourseDetail
    }, {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/light-course',
      name: 'light-course',
      component: LightCourse
    },
    {
      path: '/micro',
      name: 'micro',
      component: Micro
    },
    {
      path: '/personal-test',
      name: 'personal-test',
      component: PersonalTest
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
  ]
})
