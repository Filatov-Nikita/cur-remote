const user = {
  id: 1,
  login: 'cur-screen',
  password: '296270'
}

let token = null;

function checkCredentials(login, password) {
  return user.login === login && user.password === password;
}

function loginUser(response) {
  token = Date.now() + '.' + Math.random();
  response.cookie('Authorization', token);
}

export function isAuth(cookieToken) {
  return cookieToken === token;
}

export function enter(request, response) {
  const { login, password } = request.body;

  if(checkCredentials(login, password)) {
    loginUser(response);
    response.redirect('/screen');
  } else {
    response.render('remote-controll/login', {
      invalidCredentials: true
    });
  }
}

export default function (request, response) {
  response.render('remote-controll/login');
}
