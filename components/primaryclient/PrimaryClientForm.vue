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
              v-model="item.name"
              props:="item.index"
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
              v-model="item.surname"
              props:="item.index"
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
              v-model="item.sex"
              label="Select"
              props:="item.index"
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
              v-model="fltDateFrom"
              props:="item.index"
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
              v-model="item.place_of_birth"
              label="Select"
              props:="item.index"
              hide-details
            />
          </v-layout>

        </v-flex>

        <v-flex
          xs12
          sm3>
          <strong >{{ $vuetify.t('Country of Birth') }}</strong>
          <v-layout mx-1>
            <v-combobox
              v-model="item.country_of_birth"
              label="Select"
              props:="item.index"
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
          <strong >{{ $vuetify.t('Residence') }}</strong>
          <v-layout mx-1>
            <v-text-field
              v-model="item.residence"
              props:="item.index"
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
              v-model="item.resident_country"
              label="Select"
              props:="item.index"
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
              v-model="item.city_of_resident"
              label="Select"
              props:="item.index"
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
              v-model="item.type_of_document"
              label="Select"
              props:="item.index"
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
              v-model="item.document_number"
              props:="item.index"
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
              v-model="item.place_of_release"
              label="Select"
              props:="item.index"
              box
              hide-details
            />
          </v-layout>

        </v-flex>
      </v-layout>

  </v-container></v-layout>
</template>

<script>
    export default {
        name: "PrimaryClientForm",
        data () {

            return {
                date: null,
                datePickerFrom: true,

            }
        },

    }
</script>

<style scoped>

</style>
