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
                <v-card-title class="headline">{{Gentile}} Nome_Utente </v-card-title>
                <v-card-text>
                    <p>Per agevolarti all'arrivo presso la nostra struttura {{NOME_Hotel}}, ti invitiamo a</p>
                    <p>eseguire il {{PreChechIn}} per la prenotazione numero {{123412414}}, dal {{30-2-2019}} al </p>
                    <p> {{2-3-2019}}, per {{3}} person e {{1}} camera. Bastano solo 2 minuti. </p>
                    <v-layout justify-center>
                        <p>
                            <v-btn color="info" fab medium dark>
                                <v-icon>{{EFFETUA IL PRE CHECK-IN}}</v-icon>
                            </v-btn>
                        </p>
                        <p>For more information on Vuetify, check out the <a
                                href="/"
                                target="_blank">Se non vedi correttamente il pulsante, clicca qui</a>.</p>
                    </v-layout>
                    <p>Se non effetti il Pre Check-in la tua prenotazione e comunque valida, potrai comunque </p>
                    <p> farlo al tuo arrivo in struttura.</p>
                    <p> Se hai ricevuto questo messaggio per errore, ignora questa e-mail..</p>
                    <hr class="my-3">
                    <div class="text-xs-right">
                        <em><small>&mdash; {{A presto}}</small></em>
                    </div>
                    <div class="text-xs-right">
                        <em><small>&mdash; {{Nome_Hotel}}</small></em>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                            color="primary"
                            flat
                            nuxt
                            to="/inspire">Continue</v-btn>
                </v-card-actions>
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
