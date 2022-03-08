<template>
  <div>
    Hier kommen alle Trips hin
    <TripsCard />
  </div>
</template>

<script>
import TripsCard from '@/components/TripsCard.vue';
export default {
  name: 'Trips',
  components: {
    TripsCard,
  },
};
</script>
