<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-card class="elevation-0">
      <v-card-title class="headline">{{ $vuetify.t('Gentile') }} Nome_Utente </v-card-title>
      <v-card-text>
        <layout class="my-4"> {{ $vuetify.t('To facilitate you on arrival at our facility') }} <strong>{{ 'Name Hotel' }}</strong>, {{ $vuetify.t('we invite you to') }} </layout>
        <br>
        <layout> {{ $vuetify.t('do the') }} <strong>{{ 'Pre Check-In' }}</strong>  {{ $vuetify.t('for the prenotation number') }} {123412414}, {{ $vuetify.t('from') }}  {30-2-2019} {{ $vuetify.t('to') }}  </layout>
        <br>
        <layout > {2-3-2019}, {{ $vuetify.t('for') }}  {3} {{ $vuetify.t('people and') }}  {1} {{ $vuetify.t('room') }} .
          {{ $vuetify.t(' It takes only 2 minutes') }}
          <span class="group pa-1">
            <v-icon>schedule</v-icon>.
          </span>
        </layout>
        <br>
        <v-layout
          justify-center
          class="my-2">
          <v-btn
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
        <layout class="my-2">{{ $vuetify.t ('If you do not effect the Pre Check-in your booking is still valid, you can still') }} </layout>
        <br>
        <layout>{{ $vuetify.t ('do it when you arrive at the facility.') }}</layout>
        <br>
        <layout>{{ $vuetify.t('If you received this message by mistake, please ignore this email ..') }}</layout>
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
</template>
<script>

  export default {

  }
</script>
