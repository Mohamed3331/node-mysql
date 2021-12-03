import {Optional, Model, DataTypes} from 'sequelize'
import sequelize from '../utils/db'


interface BranchAttributes {
    id: number;
    brachName: string;
}

interface BranchCreationAttributes extends Optional<BranchAttributes, "id"> {}

class Branch extends Model<BranchAttributes, BranchCreationAttributes> implements BranchAttributes {
    id!: number;
    brachName!: string;

    readonly createdAt!: Date;
    readonly updatedAt!: Date;

}

Branch.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    brachName: DataTypes.STRING,
  }, {
    sequelize,
  });

export default Branch






