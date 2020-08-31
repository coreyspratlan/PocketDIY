module.exports = function(sequelize, DataTypes) {

    var Project = sequelize.define("Project", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      shape:{
        type: DataTypes.STRING,
        allowNull: false
      },
      width:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      height:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      depth:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      radius:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      area:{
        type: DataTypes.INTEGER
      },
      perimeter:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      volume:{
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      unit: {
        type: DataTypes.STRING
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
 