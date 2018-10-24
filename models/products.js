'use strict';
module.exports = (sequelize, DataTypes) => {
    var products = sequelize.define('products', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        currencyId: {
            allowNull: false,
            type: DataTypes.UUID,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            references: {
                model: "currencies",
                key: "id",
                deferrable: DataTypes.Deferrable.INITIALLY_DEFERRED
            }
        },
        categoryId: {
            allowNull: false,
            type: DataTypes.UUID,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            references: {
                model: "categories",
                key: "id",
                deferrable: DataTypes.Deferrable.INITIALLY_DEFERRED
            }
        },
    }, {});
    products.associate = function (models) {
        products.belongsTo(models.categories);
        models.categories.hasMany(products);

        products.belongsTo(models.currencies);
        models.currencies.hasMany(products);

        products.belongsToMany(models.colors, {through: models.product_colors});
        models.colors.belongsToMany(products, {through: models.product_colors});
    };
    return products;
};