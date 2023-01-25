import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('sliders', 'root', '123456', {
  host: 'localhost',
  dialect: 'mariadb'
});
