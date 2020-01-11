import UserAvatar from './user-avatar.vue'
import Qrcode from './qrcode.vue'

UserAvatar.install = Vue => { Vue.component('UserAvatar', UserAvatar) }
Qrcode.install = Vue => { Vue.component('Qrcode', Qrcode) }

export default {
  UserAvatar,
  Qrcode
}
