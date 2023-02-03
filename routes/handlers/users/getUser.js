const { User } = require('../../../models');

module.exports = async (req, res) => {
    const user = await User.findByPk(req.params.id, {
        attributes: ['id', 'avatar', 'name', 'email', 'role', 'profession']
    });

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        });
    }

    return res.json({
        status: 'success',
        data: user
    });
}
