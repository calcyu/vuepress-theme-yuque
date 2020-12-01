import pages from './mixins/pages'
export default ({
  Vue
}) => {
  // Vue.prototype.isMobile = function() {
  //   let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  //   return flag;
  // }
  Vue.mixin(pages);
}
