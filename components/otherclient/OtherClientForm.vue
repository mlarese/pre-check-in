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
          <span size>{{ $vuetify.t('Clients') }} 1  </span> {{ $vuetify.t('of') }} 3
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
          <v-layout>
            <span >client</span>
          </v-layout>
        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Name') }}</strong>
          <v-layout mx-2>
            <v-text-field
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Surname') }}</strong>
          <v-layout mx-2>
            <v-text-field

            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Sex') }}</strong>
          <v-layout mx-2>
            <v-combobox
              label="Select"
            />
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
          <v-layout />

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Date of birth') }}</strong>
          <v-layout mx-2>
            <v-text-field

            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Place of Birth') }}</strong>
          <v-layout mx-2>
            <v-combobox
              label="Select"
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Country of Birth') }}</strong>
          <v-layout mx-2>
            <v-combobox
              label="Select"
            />
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
          <v-layout />

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Residence') }}</strong>
          <v-layout mx-2>
            <v-text-field

            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Resident Country') }}</strong>
          <v-layout mx-2 >
            <v-combobox
              label="Select"
            />
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
