import { createApp } from 'vue/dist/vue.esm-browser'
import DrUI from './entry'

const app = createApp({
  template: `
    <div>
      <DrButton>普通按钮</DrButton>
      <DrButton color="blue" round plain icon='search'></DrButton>
      <DrButton color="green">绿色按钮</DrButton>
      <DrButton color="gray">灰色按钮</DrButton>
      <DrButton color="yellow">黄色按钮</DrButton>
      <DrButton color="red">红色按钮</DrButton>
    </div>
  `
})

app.use(DrUI)
app.mount('#app')
