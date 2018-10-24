'use strict';
module.exports = (sequelize, DataTypes) => {
    var product_colors = sequelize.define('product_colors', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        colorId: {
            allowNull: false,
            type: DataTypes.UUID,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            references: {
                model: "colors",
                key: "id",

            }
        },
        productId: {
            allowNull: false,
            type: DataTypes.UUID,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            references: {
                model: "products",
                key: "id",

            }
        },
    }, {});
    product_colors.associate = function (models) {
        product_colors.belongsTo(models.products);
        models.products.hasMany(product_colors)

        product_colors.belongsTo(models.colors);
        models.colors.hasMany(product_colors)
    };
    return product_colors;
};