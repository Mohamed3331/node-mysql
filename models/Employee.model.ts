import {Optional, Model, DataTypes} from 'sequelize'
import sequelize from '../utils/db'


interface EmployeeAttributes {
    id: number;
    firstName: string;
    lastName: string;
    salary: string | number;
    branchId?: string;
}

interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, "id"> {}

class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
    id!: number;
    firstName!: string;
    lastName!: string;
    salary!: string | number;
  
    readonly createdAt!: Date;
    readonly updatedAt!: Date;

}

Employee.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.INTEGER
    },
  }, {
    sequelize,
  });

export default Employee