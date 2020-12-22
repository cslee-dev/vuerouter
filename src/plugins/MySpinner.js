const MySpinner = {}
import SpinnerTemplate from '../layouts/spinner/CornerSpinner.vue'

MySpinner.install = function (Vue, options) {
  Vue.component('my-spinner', SpinnerTemplate)

  const methods = {
    setSpinner(command) {
      const SPINNER_START = 'start';
      const appLoading = document.getElementById('loading-bg');
      console.log(appLoading);
      if (command === SPINNER_START) {
        appLoading.style.display = 'flex';
      } else {
        appLoading.style.display = 'none';
      }
    }
  }

  Vue.prototype.$mySpinner = methods

}

export default MySpinner
