import Api from '@/services/Api'

export default {
  register(value){
    return Api().post('register', value)
  }
}
