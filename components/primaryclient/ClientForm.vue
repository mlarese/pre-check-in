<template class="primary-client-form">
  <v-layout row>
    <v-container>
      <v-layout>
        <v-flex
          xs4
          sm2
          md1
        >
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
          sm3
          md2
          my-4
        >
          <strong class="title">{{ $vuetify.t('Clients') }} 1  </strong> <em><small>{{ $vuetify.t('of') }} 3</small></em>
        </v-flex>

        <v-spacer/>
        <v-btn
          :disabled="!addMode"
          color="blue">{{ $vuetify.t('Edit') }}</v-btn>
        <v-btn color="blue">{{ $vuetify.t('Save') }}</v-btn>
      </v-layout>

      <v-layout
        row
        wrap>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Tipology') }}</strong>
          <v-layout mx-3>
            <span >{{ $vuetify.t('PRIMARY CLIENT') }}</span>
          </v-layout>
        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Name') }}</strong>
          <v-layout mx-1>
            <v-text-field
              v-model="item.reservation_ps_name"
              box
              hide-details
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Surname') }}</strong>
          <v-layout mx-1>
            <v-text-field
              v-model="item.reservation_ps_surname"
              box
              hide-details
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Sex') }}</strong>
          <v-layout mx-1>
            <v-combobox
              v-model="item.reservation_ps_gender"
              label="Select"
              box
              hide-details
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
            ref="menu2"
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
              :label="$vuetify.t('Date')"
              v-model="item.reservation_ps_birthdate"
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
              v-model="item.reservation_ps_birthplace"
              label="Select"
              hide-details
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
              v-model="item.reservation_ps_birthplace"
              label="Select"
              box
              hide-details
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
          <strong >{{ $vuetify.t('Resident') }}</strong>
          <v-layout mx-1>
            <v-text-field
              v-model="item.reservation_ps_cittadinanza"
              box
              hide-details
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Resident Country') }}</strong>
          <v-layout mx-1>
            <v-combobox
              v-model="item.reservation_ps_country"
              label="Select"
              box
              hide-details
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('City Of Resident') }}</strong>
          <v-layout mx-1>
            <v-combobox
              v-model="item.reservation_ps_state"
              label="Select"
              box
              hide-details
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
          <strong >{{ $vuetify.t('Type of Document') }}</strong>
          <v-layout mx-1>
            <v-combobox
              v-model="item.reservation_ps_document_type"
              label="Select"
              box
              hide-details
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Document Number') }}</strong>
          <v-layout mx-1>
            <v-text-field
              v-model="item.reservation_ps_doc_type_code"
              box
              hide-details
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Place Of Release') }}</strong>
          <v-layout mx-1>
            <v-combobox
              v-model="item.reservation_ps_birthcounty"
              label="Select"
              box
              hide-details
            />
          </v-layout>

        </v-flex>
      </v-layout>

  </v-container></v-layout>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "PrimaryClientForm",
        props: {
            item: {type: Object, default: () => {}},
            index: {type: Number, default: 0}
        },data () {

            return {
                date: null,
                datePickerFrom: true,

            }
        },
        computed: {
            ...mapGetters('clients', ['isAddMode', 'isEditMode', 'isView'])

        },



    }
</script>

<style scoped>

</style>
