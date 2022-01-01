import { defineAsyncComponent as lazy } from 'vue'

const $_lazy = component => lazy({
  loader: component,
  delay: 500,
  // loadingComponent: Loading,
})

export default $_lazy
