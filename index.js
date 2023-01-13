import express from 'express';
import routes from '#app/routes/index.js';
import cors from 'cors';
import { engine } from 'express-handlebars';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './app/views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

routes(app);

app.listen(3000);
