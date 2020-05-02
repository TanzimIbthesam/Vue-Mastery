import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import User from "../views/User.vue";
import EventList from "../views/EventList.vue";
import EventCreate from "../views/EventCreate.vue";
import EventShow from "../views/EventShow.vue";





Vue.use(VueRouter);



const router = new VueRouter({
  //If you give the history mode it no longer shows hash in route
  mode:"history",
  routes:[
    {
      path: "/",
      name: "event-list",
      component: EventList

    },
    {
      path: "/event-create",
      name: "event-create",
      component: EventCreate

    },
    {
      path: "/event/:id",
      name: "event-show",
      component: EventShow,
      props:true

    },
    {
      path: "/event/create",
      name: "event-create",
      component: EventCreate

    },
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home

    // },
    // {
    //   path: "/about-us",
    //   name: "about",
    //   component: About

    // },
    // {
    //   path: "/user/:username",
    //   name: "user",
    //   component: User,
    //   props: true,
    // }
  ]
});

export default router;
