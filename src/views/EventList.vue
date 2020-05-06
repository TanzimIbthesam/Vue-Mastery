<template>
  <div>
    <h1>Event List</h1>
    <EventCard  v-for="event in events" :key="event.id" :event="event"/>
    <router-link :to="{ name: 'event-show', params: { id: '1' } }"
      >Show Event#1</router-link
    >
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";
// import axios from 'axios'
import EventService from '@/services/EventService.js'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events:[]
      
    }
  },
  // created(){
  //   // axios 
  //   EventService.getEvents()
  //   // .get('http://localhost:3000/events')
  //   .then(res=>this.events=res.data)
  //  .catch(error=>console.log(`There is an error ${error}`));

    
  // }
   created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
};
</script>
