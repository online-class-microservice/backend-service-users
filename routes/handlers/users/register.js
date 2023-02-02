const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const fastestValidator = require('fastest-validator');
const validator = new fastestValidator();

module.exports = async (req, res) => {
    const schemaValidation = {
        name: 'string|empty:false',
        email: 'email|empty:false',
        password: 'string|min:6',
        profession: 'string|optional'
    }

    const validate = validator.validate(req.body, schemaValidation);

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const user = await User.findOne({
        where: { email: req.body.email }
    });

    if (user) {
        return res.status(409).json({
            status: 'error',
            message: 'email already exist'
        });
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const createdUser = await User.create({
        password,
        name: req.body.name,
        email: req.body.email,
        profession: req.body.profession,
        role: 'student'
    });

    return res.json({
        status: 'success',
        data: {
            id: createdUser.id
        }
    });
}
