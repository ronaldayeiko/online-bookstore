import { createRouter, createWebHistory } from 'vue-router'
import Landingpage from '@/components/LandingPage.vue'
import Library from'@/components/Library.vue'
import profile from'@/components/Profile.vue'
import ViewBook from'@/components/ViewBook.vue'
import Wishlist  from'@/components/Wishlist.vue'
import cart from '@/components/Cart.vue'
import Books from '@/components/Books.vue'
import Admin from'@/components/Admin.vue'
import SignUp from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Landingpage
    },
    {
      path:'/admin',
      component:Admin
    },
    {
     path:'/books',
     component:Books
    },
    {
      path:'/view_book',
      component:ViewBook
    },
    {
      path:'/wishlist',
      component:Wishlist
    },
    {
      path:'/sign_up',
      component:SignUp
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/profile',
      component:profile
    },
    {
      path:'/library',
      component:Library
    },{
      path:'/login',
      component:Login
    }
  ],
})

export default router
