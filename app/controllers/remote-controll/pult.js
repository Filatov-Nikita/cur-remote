import Events from '#app/globals/events.js';

export function emitCategory(request, response) {
  const category = request.query.category;
  if(!category) {
    response.end('error');
  } else {
    Events.emit('category.change', category);
    response.end('ok');
  }
}

export default (request, response) => {
  response.render('remote-controll/pult');
}
