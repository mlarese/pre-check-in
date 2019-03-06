<template class="pre-check-in">
  <v-layout>
    <v-layout>
      <v-flex
        xs4
        sm2
        md1>
        <v-avatar
          slot="activator"
          size="50px"
        >
          <img

            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            alt="Avatar"
          >
        </v-avatar>
        <v-layout
          class="title"
          color="blue"> {{ $vuetify.t(' Welcome to Pre-Check-In' ) }}
        </v-layout>
        <br>
        <span>{{ $vuetify.t ('You can fill in the data related to the Guests from the comfort of your home') }}</span>
        <br>
        <span>{{ $vuetify.t ('facilitating and simplifying your arrival at our facility') }}</span>
        <br>
        <strong>{{ $vuetify.t ('fill in all the fields below') }}</strong>
      </v-flex>

      <v-flex 
        xs4 
        sm4 
        md4>
        <my-booking/>
      </v-flex>
    </v-layout>

  </v-layout>
</template>

<script>
    import MyBooking from './MyBooking'
    export default {
        name: "PreChechIn",
        components: {MyBooking}
    }
</script>

<style scoped>

</style>
