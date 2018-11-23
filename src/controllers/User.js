import UserModel from '../models/User';

const User = {
    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} user object 
     */
    create(req, res) {
        if (!req.body.name && !req.body.name && !req.body.email && !req.body.password ) {
            return res.status(400).json({
                status: '404',
                message: 'All fields required'
            });
        }
        const user = UserModel.create(req.body);
        return res.status(201).send(user);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {object} users array
     */
    getAll(req, res) {
        const users = UserModel.findAll();
        return res.status(200).send(users);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} user object
     */
    getOne(req, res) {
        const user = UserModel.findOne(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: '404',
                message: 'user not found'
            });
        }
        return res.status(200).send(user);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {object} updated user
     */
    update(req, res) {
        const user = UserModel.findOne(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: '404',
                message: 'user  not found'
            });
        }
        const updatedUser = UserModel.update(req.params.id, req.body);
        return res.status(200).send(updatedUser);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {void} return statuc code 204 
     */
    delete(req, res) {
        const user = UserModel.findOne(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: '404',
                message: 'user  not found'
            });
        }
        const ref = UserModel.delete(req.params.id);
        return res.status(204).send(ref);
    }
};

export default User;