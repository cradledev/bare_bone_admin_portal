export default (sequelize, DataTypes) => {
    return sequelize.define('students', {
        id : {
            type : DataTypes.INTEGER,
            field : "id",
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        firstName : {
            type: DataTypes.STRING,
            allowNull : false,
            field : "first_name"
        },
        lastName : {
            type : DataTypes.STRING,
            allowNull : false,
            field : "last_name"
        },
        phoneNumber : {
            type : DataTypes.STRING,
            allowNull : true,
            field : "phone_number"
        }
    },{
        tableName : 'students',
        timestamps: true
    });
}