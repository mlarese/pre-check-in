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
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            ClientForm
        },

        computed: {
            ...mapState('clients', ['$record', 'record'])
        },
        methods: {
            ...mapActions('clients', ['save']),
        }
    }
</script>

<style>

</style>
