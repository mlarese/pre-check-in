<template>
  <div>
    <pre-check-in
      v-for="(lists, i) in list"
      :item="lists"
      :key="`A-${i}`"
      :index="i"
    />
    <client-form
      v-for="(guest, i) in list"
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
            ...mapState('clients', ['list'])

        },
        computed: {
            ...mapState('booking', ['list'])

        },
            fetch({store}) {
            store.dispatch('clients/load', {}, root)
            store.dispatch('booking/load', {}, root)
        }
    }
</script>

<style>

</style>
