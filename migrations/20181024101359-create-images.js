'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('images', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            image: {
                type: Sequelize.STRING,
                allowNull: false,
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
        return queryInterface.dropTable('images');
    }
};