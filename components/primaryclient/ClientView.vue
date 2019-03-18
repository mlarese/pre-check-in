<template class="primary-client-view">
  <v-layout row>
    <v-container>

      <v-layout
        row
        wrap>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Tipology') }}</strong>
          <v-layout mx-2>
            <span >{{ item.client }}</span>
          </v-layout>
        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Name') }}</strong>
          <v-layout mx-2>
            <span >{{ item.reservation_ps_name }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Surname') }}</strong>
          <v-layout mx-2>
            <span >{{ item.reservation_ps_surname }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Sex') }}</strong>
          <v-layout mx-2>
            <span >{{ item.reservation_ps_gender }}</span>
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
            <span >{{ item.reservation_ps_birthdate }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Place of Birth') }}</strong>
          <v-layout mx-2>
            <span >{{ item.reservation_ps_birthplace }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Country of Birth') }}</strong>
          <v-layout mx-2>
            <span >{{ item.reservation_ps_birthcounty }}</span>
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
            <span >{{ item.reservation_ps_cittadinanza }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Resident Country') }}</strong>
          <v-layout mx-2>
            <span >{{ item.reservation_ps_country }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('City Of Resident') }}</strong>
          <v-layout mx-2>
            <span >{{ item.reservation_ps_state }}</span>
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
            <span >{{ item.reservation_ps_document_type }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Document Number') }}</strong>
          <v-layout mx-2>
            <span >{{ item.reservation_ps_doc_type_code }}</span>
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Place Of Release') }}</strong>
          <v-layout mx-2>
            <span >{{ item.place_of_release_document }}</span>
          </v-layout>

        </v-flex>
      </v-layout>

  </v-container></v-layout>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        props: {
            item: {type: Object, default: () => {}},
            index: {type: Number, default: 0}
        },

        computed: {
            ...mapState('clients', ['$record', 'record'])
        },
        methods: {
            ...mapMutations('clients', ['setEditMode'])
        },



    }
</script>

<style scoped>

</style>
