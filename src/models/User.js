import JwtDecode from 'jwt-decode'

export default class User {
  static from (token) {
    try {
      let obj = JwtDecode(token)
      return new User(obj)
    } catch (_) {
      return null
    }
  }

  constructor (obj) {
    this.id = obj.User.id // eslint-disable-line camelcase
    this.name = obj.User.name
    this.email = obj.User.email
  }
}
