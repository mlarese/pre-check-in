<template class="other-client-form">
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
              color="grey"
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
          <strong>{{ $vuetify.t('Clients') }} 1  </strong> <em><small>{{ $vuetify.t('of') }} 3</small></em>
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
          <v-layout
            mx-3>
            <span >{{ $vuetify.t('CLIENT') }}</span>
          </v-layout>
        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Name') }}</strong>
          <v-layout mx-1 >
            <v-text-field
              box
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Surname') }}</strong>
          <v-layout mx-1>
            <v-text-field
              box
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Sex') }}</strong>
          <v-layout mx-1>
            <v-combobox
              label="Select"
              box
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
          <v-menu
            :close-on-content-click="true"
            v-model="datePickerFrom"
            :nudge-right="40"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            full-width
            min-width="250px"
          >
            <v-text-field
              slot="activator"
              :disabled="filterActive"
              v-model="fltDateFrom"
              :label="$vuetify.t('Date')"
              box
              readonly
              append-icon="date_range"
            />
            <v-date-picker
              v-model="fltDateFrom"
              locale="ita" />
          </v-menu>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Place of Birth') }}</strong>
          <v-layout mx-1>
            <v-combobox
              label="Select"
              box
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Country of Birth') }}</strong>
          <v-layout mx-1>
            <v-combobox
              label="Select"
              box
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
          <v-layout mx-1>
            <v-text-field
              box
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Resident Country') }}</strong>
          <v-layout mx-1>
            <v-combobox
              label="Select"
              box
            />
          </v-layout>

        </v-flex>


      </v-layout>


  </v-container></v-layout>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "OtherClientForm",
        data () {

            return {
                date: null,
                datePickerFrom: true,

            }
        },
        computed: {
            ...mapState('clients', ['$record', 'record'])
        },
        methods: {
            ...mapActions('clients', ['cancel', 'save', 'update'])
        }
    }
</script>

<style scoped>

</style>
