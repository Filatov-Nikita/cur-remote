import { isAuth } from './login.js';

export default function (request, response) {
  if(isAuth(request.cookies['Authorization'])) {
    response.render('remote-controll/screen', { layout: false });
  } else {
    response.redirect('/login');
  }
}
