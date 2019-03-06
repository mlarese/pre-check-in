<template>
  <div>
    <v-layout>
      <v-flex
        xs3
        sm1
        md1
      >
        <v-avatar
          slot="activator"
          size="60px"
          class="align-baseline"
        >
          <v-icon
            color="blue"
            size="50px"
          >hotel</v-icon>
        </v-avatar>

      </v-flex>

      <v-flex
        xs4
        sm3
        md2
        class="my-4 mx-2"

      >
        <v-layout color="blue"><strong class="title">{{ $vuetify.t('Camera') }} 1  </strong> <em><small>{{ $vuetify.t('of') }} 2</small></em></v-layout>
      </v-flex>

    </v-layout>
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
