<template>
  <v-layout color="blue">
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
        >hotel</v-icon>
      </v-avatar>

    </v-flex>

    <v-flex
      xs4
      sm3
      md2
      my-4
    >
      <strong class="title">{{ $vuetify.t('Camera') }} 1  </strong> <em><small>{{ $vuetify.t('of') }} 2</small></em>
    </v-flex>
    <v-divider color="blue"/>
  </v-layout>

</template>

<script>
    export default {
        name: "CameraToolBar"
    }
</script>

<style scoped>

</style>
