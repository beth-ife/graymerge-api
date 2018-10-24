'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('products', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            price: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            currencyId: {
                allowNull: false,
                type: Sequelize.UUID,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "currencies",
                    key: "id",
                    deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
                }
            },
            categoryId: {
                allowNull: false,
                type: Sequelize.UUID,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "categories",
                    key: "id",
                    deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('products');
    }
};