# VueComponents

ZDao项目基于vue封装的组件库

## 引入项目

1. webpack打包：npm install @ccint/vue-components
2. script标签引入：直接下载dist/vue-components.min.js文件

#### 目前已有组件

1. `<user-avatar />`默认头像

#### 在Vue项目使用

```js
// 引入组件
import { UserAvatar } from '@ccint/vue-components'
// 挂载组件
Vue.use(UserAvatar)
// 使用
<user-avatar 
  :name="'以富之名Wesley'"
  :id="123456"
  :size="50"
/>
props = {
  name,
  id,
  size,
  radius
}

```