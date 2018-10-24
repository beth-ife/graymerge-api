'use strict';
module.exports = (sequelize, DataTypes) => {
    var images = sequelize.define('images', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
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
    images.associate = function (models) {
        images.belongsTo(models.products);
        models.products.hasMany(images)
    };
    return images;
};