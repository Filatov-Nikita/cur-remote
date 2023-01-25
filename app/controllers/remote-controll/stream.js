import Events from '#app/globals/events.js';

const clients = new Map();

Events.on('category.change', (category) => {
  clients.forEach(client => {
    sendEvent(client, 'category.change', category);
  });
});

Events.on('item.updated', (newItem) => {
  clients.forEach(client => {
    sendEvent(client, 'item.updated', JSON.stringify(newItem));
  });
});


function sendEvent(client, name, data) {
  client.response.write(`event: ${name}\ndata: ${data}\n\n`);
}

function addClient(request, response) {
  clients.set(response, { request, response });
}

export default (request, response) => {
  addClient(request, response);

  response.set({
    'Cache-Control': 'no-store',
    'Content-Type': 'text/event-stream'
  });
}
