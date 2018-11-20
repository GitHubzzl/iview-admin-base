import Mock from 'mockjs'
Mock.setup({
  timeout:1000
})
Mock.mock(/\/login/,login)
Mock.mock(/\/get_info/,getUserInfo)
export default Mock
