import pult, { emitCategory } from '#app/controllers/remote-controll/pult.js';
import stream from '#app/controllers/remote-controll/stream.js';
import screen from '#app/controllers/remote-controll/screen.js';

export default (app) => {
  app.get('/pult', pult);
  app.get('/stream', stream);
  app.get('/category/emit', emitCategory);
  app.get('/screen', screen);
}
