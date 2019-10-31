import Vue from 'vue'
import Router from 'vue-router'
import Free from '@/components/Free/Free.vue'
import Home from '@/components/Home/Home.vue'
import Courses from '@/components/Courses/Courses.vue'
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
    },
        {
      path: '/courses',
      name: 'courses',
      component: Courses
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
