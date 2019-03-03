<template class="factory-primary-client">
  <v-layout
    pa-0
    class="primary-client-factory">
    <component :is="currentComponent"/>
  </v-layout>
</template>

<script>
    import PrimaryClientManagement from './PrimaryClientManagement'
    import PrimaryClientView from './PrimaryClientView'
    import {mapState} from 'vuex'
    export default {
        components: {PrimaryClientManagement, PrimaryClientView},
        computed: {
            ...mapState('clients', ['mode']),
            currentComponent () {
                if (this.mode === 'edit') {
                    return PrimaryClientManagement
                } else {
                    return PrimaryClientView
                }
            }
        }
    }
</script>

<style>

</style>
