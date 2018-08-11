import jsonwebtoken from 'jsonwebtoken'
const secret = 'secret'

/* 通过token获取JWT的payload部分 */
function getJWTPayload (token) {
  // 验证并解析JWT
  return jsonwebtoken.verify(token.split(' ')[1], secret)
}
export default getJWTPayload
