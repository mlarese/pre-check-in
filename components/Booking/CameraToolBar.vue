<template>
  <div>
    <v-card class="elevation-0">
      <v-card-title>
        <v-icon
          color="blue"
          size="50px"
          class="mr-3"
        >hotel</v-icon>

        <h2 color="blue">{{ $vuetify.t('Camera') }} 1  <em><small>{{ $vuetify.t('of') }} 2</small></em></h2>
      </v-card-title>
    </v-card>
    <v-divider color="blue"/>
  </div>
</template>

<script>
    export default {
        name: "CameraToolBar"
    }
</script>

<style scoped>

</style>
