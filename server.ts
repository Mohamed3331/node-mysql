import express, {Application} from 'express'
import sequelize from "./utils/db"
import Routes from './routes/employee'

const app: Application = express();

import Branch from './models/Branch.model'
import Employee from './models/Employee.model'

const PORT = process.env.PORT || 5000
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

Branch.hasMany(Employee);
Employee.belongsTo(Branch, { targetKey: 'id', foreignKey: 'branchId' });

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ logging: false })
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit()
    }
})()

app.use(Routes)

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
});