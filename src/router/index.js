import Vue from 'vue'
import Router from 'vue-router'
import AddBook from '@/components/AddBook'
import Join from '@/components/Join'
import Selection from '@/components/Selection'
import Projection from '@/components/Projection'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddBook',
      component: AddBook
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join,
      props: true
    },
    {
      path: '/Projection',
      name: 'Projection',
      component: Projection,
      props: true
    },
    {
      path: '/Selection',
      name: 'Selection',
      component: Selection,
      props: true
    },


  ]
})
