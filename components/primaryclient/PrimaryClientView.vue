<template>
  <v-layout row>
    <v-container>
      <v-layout>
        <v-flex
          xs4
          sm2
          md1>
          <v-avatar
            slot="activator"
            size="60px"
          >
            <v-icon
              color="red"
              icon="people"
              size="50px"
            >person</v-icon>
          </v-avatar>
        </v-flex>
        <v-flex
          xs4
          sm2
          md1
          my-4
        >
          <strong>{{ $vuetify.t('Clients') }} 1  </strong> {{ $vuetify.t('of') }} 3
        </v-flex>

        <v-spacer/>
        <v-btn color="info">{{ $vuetify.t('Edit') }}</v-btn>
        <v-btn color="info">{{ $vuetify.t('Save') }}</v-btn>
      </v-layout>

      <v-layout
        row
        wrap>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Tipology') }}</strong>
          <v-layout mx-2>
            <span >client</span>
          </v-layout>
        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Name') }}</strong>
          <v-layout mx-2>
            <span >Courage</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Surname') }}</strong>
          <v-layout mx-2>
            <span >Asemota</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Sex') }}</strong>
          <v-layout mx-2>
            <span >Male</span>
          </v-layout>

        </v-flex>
      </v-layout>
      <v-layout
        row
        my-3
      >

        <v-flex
          xs12
          sm3>
          <v-layout mx-2/>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Date of birth') }}</strong>
          <v-layout mx-2>
            <span >21-03-1991</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Place of Birth') }}</strong>
          <v-layout mx-2>
            <span >Los Angelos</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Country of Birth') }}</strong>
          <v-layout mx-2>
            <span >USA</span>
          </v-layout>

        </v-flex>
      </v-layout>
      <v-layout
        row
        my-3
      >

        <v-flex
          xs12
          sm3>
          <v-layout mx-2/>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Residence') }}</strong>
          <v-layout mx-2>
            <span >American</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Resident Country') }}</strong>
          <v-layout mx-2>
            <span >USA</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('City Of Resident') }}</strong>
          <v-layout mx-2>
            <span >Los Angelos</span>
          </v-layout>

        </v-flex>
      </v-layout>
      <v-layout
        row
        my-3
      >

        <v-flex
          xs12
          sm3>
          <v-layout mx-2/>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Type of Document') }}</strong>
          <v-layout mx-2>
            <span >ID Card</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Document Number') }}</strong>
          <v-layout mx-2>
            <span >AD23526G2</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Place Of Release') }}</strong>
          <v-layout mx-2>
            <span >Accra</span>
          </v-layout>

        </v-flex>
      </v-layout>

  </v-container></v-layout>
</template>

<script>
    export default {
        name: "PrimaryClientForm"
    }
</script>

<style scoped>

</style>
