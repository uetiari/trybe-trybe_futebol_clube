module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('users', 
  { 
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: { 
      type: Sequelize.STRING,
    },
    role: { 
      type: Sequelize.STRING,
    },
    email: { 
      type: Sequelize.STRING,
    },
    password: { 
      type: Sequelize.STRING,
    }
  });
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
    
  }
};