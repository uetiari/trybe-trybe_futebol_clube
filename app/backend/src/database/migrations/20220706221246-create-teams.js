module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('teams', 
    {
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      }, 
      team_name:{
        type: Sequelize.STRING
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('teams');
  
  }
};