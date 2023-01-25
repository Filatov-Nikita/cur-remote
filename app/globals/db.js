import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('sliders', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb'
});
