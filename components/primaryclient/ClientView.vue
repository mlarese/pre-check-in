<template class="primary-client-view">
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
          sm3
          md2
          my-4
        >
          <strong class="title">{{ $vuetify.t('Clients') }} 1  </strong> {{ $vuetify.t('of') }} 3
        </v-flex>

        <v-spacer/>
        <v-btn
          color="info"
          @click="isEditMode">{{ $vuetify.t('Edit') }}</v-btn>
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
            <span >{{ $record.client }}</span>
          </v-layout>
        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Name') }}</strong>
          <v-layout mx-2>
            <span >{{ $record.reservation_ps_name }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Surname') }}</strong>
          <v-layout mx-2>
            <span >{{ $record.reservation_ps_surname }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Sex') }}</strong>
          <v-layout mx-2>
            <span >{{ $record.reservation_ps_gender }}</span>
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
            <span >{{ $record.reservation_ps_birthdate }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Place of Birth') }}</strong>
          <v-layout mx-2>
            <span >{{ $record.reservation_ps_birthplace }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Country of Birth') }}</strong>
          <v-layout mx-2>
            <span >{{ $record.reservation_ps_birthcounty }}</span>
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
            <span >{{ $record.reservation_ps_cittadinanza }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Resident Country') }}</strong>
          <v-layout mx-2>
            <span >{{ $record.reservation_ps_country }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('City Of Resident') }}</strong>
          <v-layout mx-2>
            <span >{{ $record.reservation_ps_state }}</span>
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
            <span >{{ $record.reservation_ps_document_type }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Document Number') }}</strong>
          <v-layout mx-2>
            <span >{{ $record.reservation_ps_doc_type_code }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Place Of Release') }}</strong>
          <v-layout mx-2>
            <span >{{ $record.place_of_release_document }}</span>
          </v-layout>

        </v-flex>
      </v-layout>

  </v-container></v-layout>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapState('clients', ['$record', 'record'])
        },
        methods: {
            ...mapGetters('clients', ['isEditMode'])
        },

    }
</script>

<style scoped>

</style>
