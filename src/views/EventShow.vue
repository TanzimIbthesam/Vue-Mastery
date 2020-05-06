<template>
<div>
<h1>Showing event #{{ event.title }}</h1>
<h3>{{ event.organizer }}</h3>
</div>



  

</template>
<script>
import EventService from '@/services/EventService.js';
export default {
  props: ["id"],
  data() {
    return {
        event: {}
      
    }
  },
    created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
};

</script>
