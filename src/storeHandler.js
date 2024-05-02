export default class{
  static getData(key, type = 'local') {
    if (type == 'local') {
      const data = localStorage.getItem(key)
      if (data) return data
      return null 
    } else {
      const data = sessionStorage.getItem(key)
      if (data) return data
      return null 
    }
  }

  static saveData(key, value, type = 'local') {
    if (type == 'local') localStorage.setItem(key, value)
    else sessionStorage.setItem(key, value)
  }
  
  static deleteData(key, type = 'local') {
    if (type === 'local') {
      localStorage.removeItem(key);
    } else {
      sessionStorage.removeItem(key);
    }
  }
}