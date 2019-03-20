<template>
  <div>
    <completed-check-in
      v-for="(booking, index) in list"
      :item="booking"
      :index="index"
      :key="index"
    />
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import CompletedCheckIn from '../../components/Booking/CompletedCheckIn'
    const root = {root: true}
    export default {
        components: {CompletedCheckIn},
        computed: {
            ...mapState('booking', ['list']),

        },
        fetch({store}) {
            store.dispatch('booking/load', {}, root)
        }
    }
</script>

<style scoped>

</style>
