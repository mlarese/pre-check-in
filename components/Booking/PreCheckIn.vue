<template class="pre-check-in">
  <v-layout>
    <v-flex
      xs5
      sm5
      md5>
      <v-avatar
        slot="activator"
        size="100px"
        class="my-4"
      >
        <img

          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          alt="Avatar"
        >
      </v-avatar>
      <v-layout
        class="title"
      > {{ $vuetify.t(' Welcome to Pre-Check-In' ) }}
      </v-layout>
      <br>
      <span>{{ $vuetify.t ('You can fill in the data related to the Guests from the comfort of your home,') }}</span>
      <br>
      <span>{{ $vuetify.t ('facilitating and simplifying your arrival at our facility.') }}</span>
      <br>
      <strong>{{ $vuetify.t ('fill in all the fields below.') }}</strong>
    </v-flex>
    <v-spacer/>
    <v-flex
      xs3
      sm3
      md3>
      <v-flex
        xs12
        class="my-">
        <v-card
          color="grey lighten-3"
          class="black--text elevation-0">
          <v-card-title primary-title>
            <div class="my-4 mx-4">
              <div class="headline my-4">{{ $vuetify.t('Your Reservation') }}</div>
              <span> {{ $vuetify.t('Client') }}: <strong>{{ user }}</strong></span>
              <br>
              <span > {{ $vuetify.t('Nr. Prenotation') }}: <strong>{{ no_prenotation }}</strong></span>
              <br class="mx-2">
              <span> {{ $vuetify.t('Arrival Date') }}: <strong>{{ reservation_ps_arrive_date }}</strong></span>
              <br>
              <span> {{ $vuetify.t('Departure Date') }}: <strong>{{ reservation_ps_leave_date }}</strong></span>
              <br>
              <span> {{ $vuetify.t('Nr. Visitor') }}: <strong>{{ no_client }}</strong></span>
              <br>
              <span> {{ $vuetify.t('Nr. Room') }}: <strong>{{ reservation_ps_room_n }}</strong></span>
              <br>
              <span> {{ $vuetify.t('Total Amount') }}: <strong>{{ total_amount }}</strong></span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-flex>

  </v-layout>
</template>

<script>
    export default {
        name: "PreChechIn",
        components: {},
        props: {
            item: {type: Object, default: () => {}},
            index: {type: Number, default: 0}
        }
    }
</script>

<style scoped>

</style>
