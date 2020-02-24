import {Aurelia} from 'aurelia-framework'
import * as environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';
import * as hljs from 'highlight.js';

export function configure(aurelia: Aurelia) {
  
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

    aurelia.use
      .plugin(PLATFORM.moduleName('au-ej2-plugin'))
      .plugin(PLATFORM.moduleName('aurelia-highlightjs'))
      .plugin(PLATFORM.moduleName('aurelia-dynamic-html'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
