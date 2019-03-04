<template>
  <div>
    <factory-primary-client
      v-for="(guest, i) in list"
      :item="guest"
      :index="i"
      :key="i"/>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import FactoryPrimaryClient from '../../components/primaryclient/FactoryPrimaryClient'
    const root = {root: true}
    export default {
        components: {FactoryPrimaryClient},
        computed: {
            ...mapState('clients', ['list']),
        },
        fetch({store}) {
            store.dispatch('clients/load', {}, root)
        }
    }
</script>

<style>

</style>
