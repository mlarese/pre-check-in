<template class="primary-client-management">
  <v-flex
    container
    pa-0>
    <v-card>
      <PrimaryClientForm/>
    </v-card>
  </v-flex>
</template>

<script>
    import PrimaryClientForm from './PrimaryClientForm'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            PrimaryClientForm
        },
        computed: {
            ...mapState('clients', ['$record', 'record'])
        }

    }
</script>

<style>

</style>
