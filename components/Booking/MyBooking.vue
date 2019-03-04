<template>
  <div>
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
              <span> {{ $vuetify.t('Client') }}: <strong>{{ item.user1 }}</strong></span>
              <br>
              <span > {{ $vuetify.t('Nr. Prenotation') }}: <strong>{{ item.no_prenotation }}</strong></span>
              <br class="mx-2">
              <span> {{ $vuetify.t('Arrival Date') }}: <strong>{{ item.reservation_ps_arrive_date }}</strong></span>
              <br>
              <span> {{ $vuetify.t('Departure Date') }}: <strong>{{ item.reservation_ps_leave_date }}</strong></span>
              <br>
              <span> {{ $vuetify.t('Nr. Visitor') }}: <strong>{{ item.no_client }}</strong></span>
              <br>
              <span> {{ $vuetify.t('Nr. Room') }}: <strong>{{ item.reservation_ps_room_n }}</strong></span>
              <br>
              <span> {{ $vuetify.t('Total Amount') }}: <strong>{{ item.total_amount }}</strong></span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
    props: {
        item: {type: Object, default: () => {}}
    }

}
</script>

<style scoped>

</style>
