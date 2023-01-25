import { DataTypes } from 'sequelize';
import { sequelize } from '#app/globals/db.js';

const catEnum = ['economic', 'demo', 'call-center', 'op-sl'];
const trendEnum = ['down', 'up'];

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  numb: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  numbText: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  trend: {
    type: DataTypes.ENUM(trendEnum),
    allowNull: true,
    validate: {
      isIn: {
        args: [trendEnum],
        msg: 'trend must be up | down'
      },
    }
  },
  category: {
    type: DataTypes.ENUM(catEnum),
    allowNull: false,
    validate: {
      isIn: {
        args: [catEnum],
        msg: 'category must be economic | demo | call-center | op-sl'
      },
    }
  },
});

export default Item;
