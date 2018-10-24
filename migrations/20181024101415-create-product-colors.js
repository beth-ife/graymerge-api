'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('product_colors', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            colorId: {
                allowNull: false,
                type: Sequelize.UUID,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "colors",
                    key: "id",
                    deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
                }
            },
            productId: {
                allowNull: false,
                type: Sequelize.UUID,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "products",
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
        return queryInterface.dropTable('product_colors');
    }
};