import * as FrameworkStrategy from 'cf-framework-strategy';
import addRoutes from './routes.js';

const framework = new FrameworkStrategy.express({
  http: {
    port: 80 
  }
});

function onFrameworkStart(framework) {
  addRoutes(framework);
}

function start() {
  framework
    .start()
    .then(onFrameworkStart);
}

function stop() {
  framework.stop();
}

module.exports = {
  start,
  stop
};
