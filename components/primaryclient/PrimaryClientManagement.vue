<template class="primary-client-management">
  <v-flex
    container
    pa-0>
    <v-card>
      <client-form/>
    </v-card>
  </v-flex>
</template>

<script>
    import ClientForm from './ClientForm'
    import {mapState} from 'vuex'

    export default {
        components: {
            ClientForm
        },
        computed: {
            ...mapState('clients', ['$record', 'record'])
        }

    }
</script>

<style>

</style>
