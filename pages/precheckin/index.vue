<template>
  <div>
    <pre-check-in
      :item="bookingList[0]"
    />
    <client-form
      v-for="(guest, i) in clientsList"
      :item="guest"
      :index="i"
      :key="i"
    />
    <v-card-actions>
      <v-spacer/>
      <v-btn
        href="/completecheckin"
        color="warning"
        dark
        large>

        {{ $vuetify.t('Send Your Data') }}</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import PreCheckIn from '../../components/Booking/PreCheckIn'
    import CameraToolBar from '../../components/Booking/CameraToolBar'
    import ClientForm from '../../components/primaryclient/ClientForm'
    const root = {root: true}
    export default {
        components: {ClientForm, CameraToolBar, PreCheckIn},
        computed: {
            ...mapState('clients', {
              'clientsList': 'list'
            }),
            ...mapState('booking', {
              'bookingList': 'list'
            })
        },
        async fetch({store}) {
          const all = [
            store.dispatch('clients/load', {}, root),
            store.dispatch('booking/load', {}, root)
          ]
          return await Promise.all(all)
        }
    }
</script>

<style>

</style>
