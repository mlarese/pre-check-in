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
          :disabled="isAddMode"
          color="blue">{{ $vuetify.t('Edit') }}</v-btn>
        <v-btn color="blue">{{ $vuetify.t('Save') }}</v-btn>
      </v-layout>
      <span v-if="isPrimaryGuest"></span>
      <v-layout>
        <v-flex
          xs12
          sm3>
          <strong>{{ $vuetify.t('Tipology') }}</strong>

          <v-combobox
            v-model="item.reservation_ps_guest_type"
            :items="select"
            item-value="value"
            item-text="name"
            box
            hide-details/>
        </v-flex>
          <span v-if="isPrimaryGuest">
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
        my-5
      ><v-flex
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
            :disabled="filterActive"
            transition="scale-transition"
            offset-y
            full-width
            min-width="250px"
          >
            <v-text-field
              slot="activator"
              :disabled="filterActive"
              :label="$vuetify.t('Date')"
              v-model="item.reservation_ps_birthdate"
              box
              readonly
              append-icon="date_range"
            />
            <v-date-picker
              v-model="item.reservation_ps_birthdate"
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
        my-0>
        <v-flex
          xs12
          sm3>
          <v-layout />

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Resident') }}</strong>
          <v-layout>
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
          </span>
          <span v-else>
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
        my-5>
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
              dense
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
              dense
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
            <v-autocomplete
              v-model="item.reservation_ps_birthcounty"
              box
              dense
              hide-details
            />
          </v-layout>

        </v-flex>
          </span>
      </v-layout>
      <v-divider
        color="black"/>

  </v-container></v-layout>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
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
            isPrimaryGuest () {
                return this.reservation_guest_type === 16 || this.reservation_guest_type === 17 || this.reservation_guest_type === 18},
            ...mapState('clients', ['list', 'select','filterActive']),
            ...mapGetters('clients', ['isAddMode', 'isEditMode', 'isView'])

        }



    }
</script>

<style scoped>

</style>
