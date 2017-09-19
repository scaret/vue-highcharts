import ctors from './constructors.js';
import create from './create.js';

function install(Vue, options) {
  var Highcharts = options.Highcharts;
  Vue.prototype.Highcharts = Highcharts;
  for (var tagName in ctors) {
    var component = create(tagName, Highcharts, Vue);
    component && Vue.component(tagName, component);
  }
}

export default install;
