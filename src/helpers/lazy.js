import { defineAsyncComponent as lazy } from 'vue'

export default component => lazy({
  loader: component,
  delay: 500,
  // loadingComponent: Loading,
})
