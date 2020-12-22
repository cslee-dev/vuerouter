const MySpinner = {}

MySpinner.install = function(Vue, options){
  const methods = {
    setSpinner(command) {
      const SPINNER_START = 'start';
      const SPINNER_STOP = 'stop';
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
