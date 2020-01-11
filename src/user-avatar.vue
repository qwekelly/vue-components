<template>
  <div class="avatar" :style="[styleObject]">{{letter}}</div>
</template>

<script>
  export default {
    name: 'UserAvatar',
    props: {
      name: {
        type: String,
        default () {
          return ''
        }
      },
      id: {
        type: String,
        default () {
          return ''
        }
      },
      customStyle: {
        type: Object,
        default () {
          return {}
        }
      },
      size: {
        type: Number,
        default () {
          return 50
        }
      },
      radius: {
        type: Number,
        default () {
          return 0
        }
      }
    },
    data () {
      return {
        colorArr: ['#FFC068', '#94D877', '#5CC2F8', '#77A4F9']
      }
    },
    computed: {
      styleObject () {
        let tail = this.id && this.id.length > 4 ? this.id.substring(this.id.length - 4) : 0
        let index = parseInt(tail, 16)
        return {
          backgroundColor: this.colorArr[index % this.colorArr.length] || '#77A4F9',
          width: this.size + 'px',
          height: this.size + 'px',
          'border-radius': this.radius + 'px',
          'line-height': this.size + 'px',
          'font-size': (this.size / 2) + 'px'
        }
      },
      letter () {
        return this.name.substring(0, 1) || '匿'
      }
    },
    created () {},
    methods: {}
  }
</script>
<style scoped>
  .avatar {
    font-size: 48px;
    color: #ffffff;
    width: 100px;
    height: 100px;
    text-align: center;
    border-radius: 5px;
  }
</style>
