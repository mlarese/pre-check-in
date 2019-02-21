<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">{{ $vuetify.t('Gentile') }} Nome_Utente </v-card-title>
        <v-card-text>
          <p> {{ $vuetify.t('To facilitate you on arrival at our facility') }} {Name Hotel}, {{ $vuetify.t('we invite you to') }} </p>
          <p> {{ $vuetify.t('do the') }} {Pre Chech-In}  {{ $vuetify.t('for the prenotation number') }} {123412414}, {{ $vuetify.t('from') }}  {30-2-2019} {{ $vuetify.t('to') }}  </p>
          <p> {2-3-2019}, {{ $vuetify.t('for') }}  {3} {{ $vuetify.t('people and') }}  {1} {{ $vuetify.t('room') }} .
            {{ $vuetify.t(' It takes only 2 minutes') }} </p>
          <v-layout justify-center>
            <v-btn
              color="blue"
              dark
              large>{{ $vuetify.t('Do the pre check in') }}</v-btn>

          </v-layout><v-layout
            justify-center
            color="blue">
            <a

              href="/"
            >{{ $vuetify.t ('If you do not see the button correctly, click here' )
            }}</a>

          </v-layout>
          <p>{{ $vuetify.t ('If you do not effect the Pre Check-in your booking is still valid, you can still') }} </p>
          <p>{{ $vuetify.t ('do it when you arrive at the facility.') }}</p>
          <p>{{ $vuetify.t('If you received this message by mistake, please ignore this email ..') }}</p>
          <hr class="my-3">
          <div class="text-xs-right">
            <em><small>{{ $vuetify.t('Farewell') }}</small></em>
          </div>
          <div class="text-xs-right">
            <em><small>{{ $vuetify.t('Name Hotel') }}</small></em>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>

  export default
  {

    /*methods: {
      ...mapMutations('auth', ['setSigningIn']),
      loaded () {
        if (this.signingIn) {
          this.loadProfile()
            .then(() => this.$router.replace('/'))
        }
      },
      ...mapActions('auth', ['loadProfile']),
      async doLogin () {
        if (mockApp) {
          console.log('----- test')
          this.loadProfile()
          return
        }
        if (!this.canLogin) {
          return
        }
        this.error = null
        this.setSigningIn(true)
      }
    }*/
  }
</script>
