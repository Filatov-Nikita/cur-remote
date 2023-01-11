import express from 'express';
import routes from '#app/routes/index.js';
import cors from 'cors';
import { engine } from 'express-handlebars';

const app = express();

app.use(cors());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './app/views');
app.use(express.static('public'));

routes(app);

app.listen(3000);
