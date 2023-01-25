import Item from '#app/models/item.js';
import Eventbus from '#app/globals/events.js';
import { ValidationError } from 'sequelize';

function itemsToClient(items) {
  if(items === null) return [];

  const obj = {};
  let idx = 0;

  for(let item of items) {
    const catName = item.category;
    if(obj[catName] === undefined) {
      obj[catName] = { id: ++idx, values: [] };
    }

    obj[catName].values.push(item);
  }

  return Object.values(obj);
}

export async function list(request, response) {
  const items = await Item.findAll();
  response.json(itemsToClient(items));
}

export async function update(request, response) {
  const id = request.query.id;

  if(!id || !/^[0-9]+$/g.test(id)) {
    return response.status(422).json({ id: 'id is required and must be integer'});
  }

  const { title, numb, numbText, date, trend } = request.body;
  const item = { title, numb, numbText, date, trend };

  try {
    const [rows] = await Item.update(item, {
      where: { id }
    });

    if(rows === 0) {
      response.status(404).end();
    } else {
      Eventbus.emit('item.updated', {...item, id});
      response.json(true);
    }
  } catch(e) {
    if(e instanceof ValidationError){
			response.status(422).json(e.errors.map(err => err.message));
		}
		else{
			response.status(500).end('server error');
		}
  }
}
