<template class="primary-client-form">
  <div>
    <v-card class="elevation-0">
      <v-card-title >
        <v-icon
          dark
          color="grey"
          size="42"
          class="mr-3 "

        >
          person
        </v-icon>
        <h2>{{ $vuetify.t('Clients') }} 1  <em><small>{{ $vuetify.t('of') }} 3</small></em></h2>
        <v-spacer/>
        <v-btn
          :disabled="isAddMode"
          color="blue">{{ $vuetify.t('Edit') }}</v-btn>
        <v-btn color="blue">{{ $vuetify.t('Save') }}</v-btn>
      </v-card-title>


      <v-layout
        row
        wrap>

        <v-flex
          xs12
          sm3>
          <h3 >{{ $vuetify.t('Tipology') }}</h3>


          <v-combobox
            v-model="item.reservation_ps_guest_type"
            :items="select"
            item-value="value"
            item-text="name"
            box
            hide-details
          />
        </v-flex>
        <v-spacer/>
        <v-flex
          v-if="isPrimaryGuest"
          xs12
          sm3
        >
          <h3 >{{ $vuetify.t('Name') }}</h3>
          <v-layout mx-1>
            <v-text-field
              v-model="item.reservation_ps_name"
              box
              hide-details
            />
          </v-layout>

        </v-flex>

        <v-flex
          v-if="isPrimaryGuest"
          xs12
          sm3>
          <h3 >{{ $vuetify.t('Surname') }}</h3>
          <v-layout mx-1>
            <v-text-field
              v-model="item.reservation_ps_surname"
              box
              hide-details
            />
          </v-layout>

        </v-flex>

        <v-flex
          v-if="isPrimaryGuest"
          xs12
          sm3>
          <h3 >{{ $vuetify.t('Sex') }}</h3>
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
        v-if="isPrimaryGuest"
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
          <h3 >{{ $vuetify.t('Date of birth') }}</h3>
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
          <h3 >{{ $vuetify.t('Place of Birth') }}</h3>
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
          <h3 >{{ $vuetify.t('Country of Birth') }}</h3>
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
          v-if="isPrimaryGuest"
          xs12
          sm3>
          <h3 >{{ $vuetify.t('Resident') }}</h3 >
          <v-layout>
            <v-text-field
              v-model="item.reservation_ps_cittadinanza"
              box
              hide-details
            />
          </v-layout>

        </v-flex>

        <v-flex
          v-if="isPrimaryGuest"
          xs12
          sm3>
          <h3 >{{ $vuetify.t('Resident Country') }}</h3>
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
          v-else
          xs12
          sm3>
          <h3 >{{ $vuetify.t('City Of Resident') }}</h3>
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
        v-if="!isPrimaryGuest"
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
          <h3 >{{ $vuetify.t('Type of Document') }}</h3>
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
          <h3 >{{ $vuetify.t('Document Number') }}</h3>
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
          <h3 >{{ $vuetify.t('Place Of Release') }}</h3>
          <v-layout mx-1>
            <v-autocomplete
              v-model="item.reservation_ps_birthcounty"
              box
              dense
              hide-details
            />
          </v-layout>

        </v-flex>
      </v-layout>
      <v-divider
        color="black"/>
    </v-card>
  </div>
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
                return this.reservation_ps_guest_type === 16 || this.reservation_ps_guest_type === 17 || this.reservation_ps_guest_type === 18},
            ...mapState('clients', ['list', 'select','filterActive']),
            ...mapGetters('clients', ['isAddMode', 'isEditMode', 'isView'])

        }



    }
</script>

<style scoped>

</style>
