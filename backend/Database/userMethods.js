const { User } = require("./model");
const { sequelize } = require("./dbConnection");



const createdUser = async (user) => {
    const result = await User.create({

        name: user.name,
        lastName: user.lastName,
        password: user.password,
        email: user.email
    
        });
    return result.toJSON();
    
}

const updatedUser = async (user) => {
    try {
        const result = await User.update(
            {
                name: user.name,
                lastName: user.lastName,
                password: user.password,
                email: user.email
            },
            {where: {id: user.id}}
        )

        return {
            result: result.dataValues,
            code: "200"
        }
    } catch (err) {

        console.log(err);
        return "500";
    }
}

const getUserById = async (user) => {
    const option = await User.findOne({ where: {id: user.id}});
    return option;
}

const getAllUsers = async () => {
   
   return await User.findAll({ plain: true });
}




module.exports = {
    createdUser,
    updatedUser,
    getUserById,
    getAllUsers
}