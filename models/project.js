
module.exports = function(sequelize, DataTypes) {

  var Project = sequelize.define("Project", {
    shape:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    width:{
      type: DataTypes.INTEGER
    },
    height:{
      type: DataTypes.INTEGER
    },
    depth:{
      type: DataTypes.INTEGER
    },
    radius:{
      type: DataTypes.INTEGER
    },
    area:{
      type: DataTypes.INTEGER
    },
    parimeter:{
      type: DataTypes.INTEGER
    }
  });
  Project.associate = function(models) {
    Project.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Project;
};
