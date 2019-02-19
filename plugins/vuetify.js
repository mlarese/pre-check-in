/* import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#121212', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
*/
import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'
import Notifications from 'vue-notification'
import {dmy, time, ymd, dec2} from '../assets/filters'

import {
    Vuetify,
    VDivider,
    VDialog,
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VCombobox,
    VToolbar,
    VMenu,
    VDatePicker,
    VForm,
    VTextField,
    VAlert,
    VDataTable,
    VSelect,
    VSubheader,
    VSpeedDial,
    VTabs,
    VAvatar,
    VSwitch,
    VAutocomplete,
    VRadioGroup,
    VCheckbox,
    VTextarea
} from 'vuetify'

Vue.use(Vuetify, {
    theme: {
        primary: colors.indigo.darken3,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3
    },
    components: {
        VApp,
        VDivider,
        VCard,
        VNavigationDrawer,
        VFooter,
        VList,
        VDialog,
        VCombobox,
        VAutocomplete,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        VRadioGroup,
        VForm,
        VTextField,
        VSubheader,
        VSpeedDial,
        VAlert,
        VDataTable,
        VTabs,
        VSelect,
        VAvatar,
        VSwitch,
        VCheckbox,
        VMenu,
        VDatePicker,
        VTextarea
    }
})

Vue.use(Notifications)
Vue.filter('dmy', dmy)
Vue.filter('ymd', ymd)
Vue.filter('time', time)
Vue.filter('dec2', dec2)

VTextField.$_wrapperFor.props.box = {default: false}

// console.dir(VTextField)
