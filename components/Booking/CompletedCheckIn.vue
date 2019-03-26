<template class="completed check in">
  <div>
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
        > {{ $vuetify.t('Pre-Check-In Completed Successfully' ) }}
        </v-layout>
        <br>
        <span>{{ $vuetify.t (' Upon your arrival at our hotel it will be enough to present to the receptionist ') }}</span>
        <br>
        <span>{{ $vuetify.t ('only the booking confirmation.') }}<strong>{{ $vuetify.t (' See you soon!') }}</strong></span>
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
                <span> {{ $vuetify.t('Client') }}: <strong>{{ item.user }}</strong></span>
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
      </v-flex>

    </v-layout>
    <span>
      <v-btn
        color="info"
        href="/"
        large>{{ $vuetify.t('Visit Our WebSite') }}</v-btn>

    </span>
  </div>
</template>

<script>
    export default {
        components: {},
        props: {
            item: {type: Object, default: () => {}},
            index: {type: Number, default: 0}
        }
    }
</script>

<style scoped>

</style>
