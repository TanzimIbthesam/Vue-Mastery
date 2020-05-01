import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import EventList from "../views/EventList.vue";
import EventCreate from "../views/EventCreate.vue";
import EventShow from "../views/EventShow.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
   
  },
  {
    path: "/event",
    name: "event-show",
    component: EventShow
   
  },
  {
    path: "/",
    name: "event-create",
    component: EventCreate
   
  }
 
  // {
  //   path: "/about-us",
  //   name: "about",
  //   alias:"/about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
