<template>
  <div>
    kkkkkkkkkkkkk
    <factory-primary-client
      v-for="($record, i) in list"
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
            ...mapState('clients', ['$record', 'record', 'list'])
        },
        fetch ({store}) {
          alert('')
            store.dispatch('clients/load', {}, root)
        }
    }
</script>

<style>

</style>
