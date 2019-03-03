<template>
  <v-layout>
    <v-flex
      xs12
      class="my-">
      <v-card
        color="grey lighten-3"
        class="black--text elevation-0">
        <v-card-title primary-title>
          <div class="my-4 mx-4">
            <div class="headline my-4">{{ $vuetify.t('Your Reservation') }}</div>
            <span> {{ $vuetify.t('Client') }}: <strong>{{ $record.user }}</strong></span>
            <br>
            <span > {{ $vuetify.t('Nr. Prenotation') }}: <strong>{{ $record.no_prenotation }}</strong></span>
            <br class="mx-2">
            <span> {{ $vuetify.t('Arrival Date') }}: <strong>{{ $record.arrival_date }}</strong></span>
            <br>
            <span> {{ $vuetify.t('Departure Date') }}: <strong>{{ $record.departure_date }}</strong></span>
            <br>
            <span> {{ $vuetify.t('Nr. Visitor') }}: <strong>{{ $record.no_client }}</strong></span>
            <br>
            <span> {{ $vuetify.t('Nr. Room') }}: <strong>{{ $record.no_room }}</strong></span>
            <br>
            <span> {{ $vuetify.t('Total Amount') }}: <strong>{{ $record.total_amount }}</strong></span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState('booking', ['$record', 'record'])
    }

}
</script>

<style scoped>

</style>
