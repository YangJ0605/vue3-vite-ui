const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [{ text: 'Button 按钮', link: '/components/button/' }]
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' }
  ]
}
const config = {
  title: 'DR-UI',
  description: 'a simple ui',
  themeConfig: {
    sidebar: {
      '/': [{ text: '快速开始', link: '/', items: [] }],
      '/2': [{ text: '快速开始2', link: '/', items: [] }]
    }
  }
}
export default config
