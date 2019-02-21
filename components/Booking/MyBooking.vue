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
            <span> {{ $vuetify.t('Client') }}: <strong>{{ 'Name Client' }}</strong></span>
            <br>
            <span > {{ $vuetify.t('Nr. Prenotation') }}: <strong>{{ '12312141' }}</strong></span>
            <br class="mx-2">
            <span> {{ $vuetify.t('Arrival Date') }}: <strong>{{ '21-2-2019' }}</strong></span>
            <br>
            <span> {{ $vuetify.t('Departure Date') }}: <strong>{{ '11-2-2019' }}</strong></span>
            <br>
            <span> {{ $vuetify.t('Nr. Visitor') }}: <strong>{{ '3' }}</strong></span>
            <br>
            <span> {{ $vuetify.t('Nr. Room') }}: <strong>{{ '1' }}</strong></span>
            <br>
            <span> {{ $vuetify.t('Total Amount') }}: <strong>{{ '$234,654' }}</strong></span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        name: "MyBooking"
    }
</script>

<style scoped>

</style>
