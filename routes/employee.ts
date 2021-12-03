import express, {Request, Response} from  "express"
import Branch from  "../models/Branch.model"
import Employee from  '../models/Employee.model'

const router = express.Router();


router.get("/create-employee", async (req: Request, res: Response) => {
    let emp
    try {
        emp = await Employee.create({ firstName: "fds", lastName: "qq", salary: 4000, branchId: '3' });
    } catch (e) {        
        console.log(e);
        
    }
    
    if (!emp) {
        console.log('error happened');
        return
    }

    console.log(emp.toJSON());
    res.send({ message: 'Created' })
});

router.patch("/update-employee", async (req: Request, res: Response) => {
    const emp = await Employee.update({ lastName: "Bernard" }, {
        where: {
            lastName: 'Doe'
        }
    });

    if (!emp) {
        console.log('error happened');
        return
    }

    console.log(emp);
    res.send({ message: 'Updated' })
});

router.delete("/delete-employee", async (req: Request, res: Response) => {
    const emp = await Employee.destroy({
        where: {
            firstName: "jakob"
        }
    });

    if (!emp) {
        console.log('error happened');
        return
    }

    console.log(emp);
    res.send({ message: 'Deleted' })
});

router.get("/create-branch", async (req: Request, res: Response) => {
    const bra = await Branch.create({ brachName: "main" });

    if (!bra) {
        console.log('error happened');
        return
    }

    console.log(bra.toJSON());
    res.send({ message: 'Created' })
});


export default router