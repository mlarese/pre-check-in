<template>
  <div>
    <v-layout
      v-for="(guest, i) in list"
      :item="guest"
      :key="i"
      column
      justify-center
      align-center
    >
      <v-card class="elevation-0">
        <v-card-title class="headline">{{ $vuetify.t('Gentile') }} {{ item.user }} </v-card-title>
        <v-card-text>
          <span class="my-4"> {{ $vuetify.t('To facilitate you on arrival at our facility') }} <strong>{{ 'Name Hotel' }}</strong>, {{ $vuetify.t('we invite you to') }} </span>
          <br>
          <span> {{ $vuetify.t('do the') }} <strong>{{ 'Pre Check-In' }}</strong>  {{ $vuetify.t('for the prenotation number') }} {{ item.no_prenotation }}, {{ $vuetify.t('from') }}  {{ item.reservation_ps_arrive_date }} {{ $vuetify.t('to') }}  </span>
          <br>
          <span > {{ item.reservation_ps_leave_date }}, {{ $vuetify.t('for') }}  {{ item.no_client }} {{ $vuetify.t('people and') }}  {{ item.reservation_ps_room_n }} {{ $vuetify.t('room') }} .
            {{ $vuetify.t(' It takes only 2 minutes') }}
            <span class="group pa-1">
              <v-icon>schedule</v-icon>.
            </span>
          </span>
          <br>
          <v-layout
            justify-center
            class="my-2">
            <v-btn
              href="/precheckin"
              color="blue"
              dark
              large>{{ $vuetify.t('Do the pre check in') }}</v-btn>

          </v-layout><v-layout
            justify-center
            color="blue"
            class="my-2">
            <a

              href="/"
            >{{ $vuetify.t ('If you do not see the button correctly, click here' )
            }}</a>

          </v-layout>
          <span class="my-2">{{ $vuetify.t ('If you do not effect the Pre Check-in your booking is still valid, you can still') }} </span>
          <br>
          <span>{{ $vuetify.t ('do it when you arrive at the facility.') }}</span>
          <br>
          <span>{{ $vuetify.t('If you received this message by mistake, please ignore this email ..') }}</span>
          <hr class="my-4">
          <div class="text-xs-right">
            <em><small>{{ $vuetify.t('Farewell') }}</small></em>
          </div>
          <div class="text-xs-right">
            <em><small>{{ $vuetify.t('Name Hotel') }}</small></em>
          </div>
        </v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  const root = {root: true}
  export default {
      props: {
          item: {type: Object, default: () => {}},
          index: {type: Number, default: 0}
      },
      computed: {
          ...mapState('booking', ['list']),
      },
      fetch({store}) {
          store.dispatch('booking/load', {}, root)
      }

  }
</script>
