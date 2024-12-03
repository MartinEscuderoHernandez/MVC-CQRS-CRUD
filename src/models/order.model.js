const { DataTypes, Model } = require("sequelize")

const ORDER_TABLE = "orders"
const MODEL_NAME = "order"

const orderSchema = {
    id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    },
    orderNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    totalAmount: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.TIME,
        defaultValue: DataTypes.NOW()
    }
}

class Order extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_TABLE,
            modelName: MODEL_NAME,
            timestamps: false,
        }
    }
}

module.exports = { ORDER_TABLE, orderSchema, Order };