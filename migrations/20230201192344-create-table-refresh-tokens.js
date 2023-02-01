'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('refresh_token', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            token: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }, {
            schema: process.env.NODE_ENV
        });
        await queryInterface.addConstraint(`"${process.env.NODE_ENV}".refresh_token`, {
            fields: ['user_id'],
            type: 'foreign key',
            name: 'FK_REFRESH_TOKEN_USER_ID',
            references: {
                table: {
                    tableName: 'users',
                    schema: process.env.NODE_ENV,
                },
                field: 'id'
            }
        })
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable({
            tableName: 'refresh_token',
            schema: process.env.NODE_ENV
        });
    }
};
