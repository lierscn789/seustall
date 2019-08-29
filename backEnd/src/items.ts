import sequelize from 'sequelize';
export default {
	itemid: {
		type: sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	uuid:
	{
		type: sequelize.INTEGER,
		allowNull: false,
	},
	title: {
		type: sequelize.STRING,
		allowNull: false,
	},
	type: {
		type: sequelize.INTEGER,
		allowNull: false,
	},
	price: {
		type: sequelize.DOUBLE,
		allowNull: false,
	},
	imgurl: {
		type: sequelize.STRING,
		allowNull: false,
	},
	depreciatione: {
		type: sequelize.INTEGER,
		allowNull: false,
	},
	note: {
		type: sequelize.STRING,
		allowNull: false
	},
	sold: {
		type: sequelize.INTEGER,
		allowNull: false,
	}
}