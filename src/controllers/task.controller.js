import Task from '../models/Task';

export async function createTask(req, res) {
    const { name, done, projectid } = req.body;
    try {
        let newTask = await Task.create({
            name,
            done,
            projectid
        }, {
            fields: ['name', 'done', 'projectid']
        });

        if (newTask) {
            return res.json({
                message: 'New task created successfully!',
                data: newTask
            })
        }
    } catch (error) {
        res.status(500).json({  
            message: 'Something went wrong',
            data: {}
        });
        console.log(error);
        
    }
};

export async function getTasks(req, res) {
    const tasks = await Task.findAll({
        attributes: ['id', 'name', 'done', 'projectid'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({
        data: tasks,
    });
}

export async function getOneTask(req, res) {
    const { id } = req.params;

    const task = await Task.findOne({
        where: {
            id
        },
        attributes: ['id', 'projectid', 'name', 'done']
    });
    res.json(task)
}

export async function deleteTask(req, res) {
    const { id } = req.params;

    const deleteRowCount = await Task.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Sucessfully deleted!',
        count: deleteRowCount

    })
}

export async function updateTask(req, res) {
    const { id } = req.params;
    const { name, done, projectid } = req.body;

    const tasks = await Task.findAll({
        attributes: ['name', 'done', projectid],
        where: {
            id
        }
    });

    if (tasks.length > 0) {
        tasks.forEach(async task => {
            await task.update({
                name,
                done,
                projectid
            });
        })
    }

    return res.json({
        message: 'Task updated successfully',
        data: task
    });
}

export async function getTasksByProject(req, res) {
    const { projectid } = req.params;
    const tasksOnProject = await Task.findAll({
        where: {
            projectid
        },
        attributes: ['id', 'projectid', 'done', 'name']
    });
    res.json(tasksOnProject);
}

