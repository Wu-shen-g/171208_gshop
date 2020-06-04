// 与后台交互模块
import ajax from './ajax';
// 获 取 地 址 信 息 ( 根 据 经 纬 度 串 )
export const reqAddress = geohash => ajax('/api/position/' + geohash);
//获 取 msite页 面 食 品 分 类 列 表
export const reqCategorys = () => ajax('/api/index_category');
//获 取 msite商 铺 列 表 ( 根 据 经 纬 度 )
export const reqShops = ({
  latitude,
  longitude
}) => ajax('/api/shops', {
  latitude,
  longitude
})
//账号密码登录
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')
//获取短信验证码
export const reqSendCode = phone => ajax('/api/sendcode', {
  phone
})
//手机验证码登录
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {
  phone,
  code
}, 'POST')
//获取用户信息（根据会话）
export const reqUser = () => ajax('/api/userinfo')
//请求登出
export const reqLogout = () => ajax('/api/logout')
