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
                deferrable: DataTypes.Deferrable.INITIALLY_DEFERRED
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
                deferrable: DataTypes.Deferrable.INITIALLY_DEFERRED
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