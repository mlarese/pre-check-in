<template>
  <div>
    <client-form
      v-for="(guest, i) in list"
      :item="guest"
      :index="i"
      :key="i"/>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ClientForm from '../../components/primaryclient/ClientForm'
    const root = {root: true}
    export default {
        components: {ClientForm},
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
