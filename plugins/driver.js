// plugins/driver.js
import Driver from 'driver.js'

export default ({ app }, inject) => {
  // Créez une instance de Driver
  const driver = new Driver()

  // Exposez l'instance en tant que plugin Vue
  inject('driver', driver)
}