<template>
  <div>
    <pre-check-in/>
    <camera-tool-bar/>
    <client-form
      v-for="(guest, i) in list"
      :item="guest"
      :index="i"
      :key="i"
    />
    <v-card-actions>
      <v-spacer/>
      <v-btn
        color="warning"
        dark>
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
            ...mapState('clients', ['list']),

        },
        fetch({store}) {
            store.dispatch('clients/load', {}, root)
        }
    }
</script>

<style>

</style>
