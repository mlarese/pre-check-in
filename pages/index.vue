<template>
  <div>
    <check-in
      v-for="(guest, i) in list"
      :item="guest"
      :key="i"/>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import CheckIn from '../modules/checkin/CheckIn'
    const root = {root: true}
    export default {
        components: {CheckIn},
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
