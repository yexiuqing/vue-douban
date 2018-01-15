import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Koubei from '@/components/movie/MovieKoubei'
import Xinpian from '@/components/movie/MovieXinpian'
import Shangying from '@/components/movie/MovieShangying'
import Music from '@/components/music/Music'
// import MusicList from '@/components/music/MusicList'
import Picture from '@/components/picture/Picture'
import Book from '@/components/book/Book'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/movie',
    },
    {
      path: '/movie',
      name: 'movie',
      redirect: '/movie/koubei',
      component: Movie,
      children: [
        {
          path:'/movie/koubei',
          component:Koubei
        },
        {
          path:'/movie/xinpian',
          component:Xinpian
        },
        {
          path:'/movie/shangying',
          component:Shangying
        }
      ]
    },
    {
      path: '/music',
      // redirect:'/music/classify',
      name: 'Music',
      component: Music,
      // children: [
      //   {
      //     path: '/music/classify',
      //     name:'MusicList',
      //     component:MusicList
      //   }
      // ]
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/picture',
      name: 'Picture',
      component: Picture
    }
  ]
})
