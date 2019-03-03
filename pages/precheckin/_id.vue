<template>
  <factory-primary-client/>
</template>

<script>
    import {mapState} from 'vuex'
    import FactoryPrimaryClient from '../../components/primaryclient/FactoryPrimaryClient'
    const root = {root: true}
    export default {
        components: {FactoryPrimaryClient},
        computed: {
            ...mapState('clients', ['$record', 'record'])
        },
        fetch({store, params, query}) {
            const id = params.id
            const mode = query.mode

            if (mode) {
                store.commit('clients/setEditMode', null, root)
            }else {
                store.commit('clients/setMode', mode, root)
            }
            return store.dispatch('clients/load', {id}, root)
        }
    }
</script>

<style scoped>

</style>
