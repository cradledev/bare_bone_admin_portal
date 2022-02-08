export default (sequelize, DataTypes) => {
    return sequelize.define('students', {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        first_name : {
            type: DataTypes.STRING,
            allowNull : false
        },
        last_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        phone_number : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        created_at : {
            type : DataTypes.DATE,
            allowNull : false
        },
        update_at : {
            type : DataTypes.DATE,
            allowNull : false
        }
    },{
        tableName : 'students'
    });
}