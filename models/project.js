module.exports = function(sequelize, DataTypes) {

    var Project = sequelize.define("Project", {
      name: {
        type: DataTypes.STRING,
      },
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
      perimeter:{
        type: DataTypes.INTEGER
      },
      unit: {
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
 