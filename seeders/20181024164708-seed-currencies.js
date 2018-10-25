'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            {
                "id": "ebd4b584-da3a-4e60-ab97-b435fca08931",
                "name": 'Naira',
                "symbol": 'NGN',
                "createdAt": new Date(),
                "updatedAt": new Date()
            }, {
                "id": "a0cac29d-92c4-44d8-9ef6-7169f04ab464",
                "name": 'Dollars',
                "symbol": '$',
                "createdAt": new Date(),
                "updatedAt": new Date()
            }
        ]
        return queryInterface.bulkInsert('currencies', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('currencies', null, {});
    }
};
