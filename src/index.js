const logger = require('./logger');

class MyApp {
    run() {
        logger('Running!');
    }
}

let app = new MyApp();
app.run();
