import ContactModel from '../models/Contact';

const Contact = {
    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} Contact object 
     */
    create(req, res) {
        if (!req.body.name && !req.body.phoneNo && !req.body.email && !req.body.website && !req.body.role && !req.body.githubAccount) {
            return res.status(400).send({ 'message': 'All fields are required' });
        }
        const contact = ContactModel.create(req.body);
        return res.status(201).send(contact);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {object} contacts array
     */
    getAll(req, res) {
        const contacts = ContactModel.findAll();
        return res.status(200).send(contacts);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} contact object
     */
    getOne(req, res) {
        const contact = ContactModel.findOne(req.params.id);
        if (!contact) {
            return res.status(404).send({ 'message': 'contact not found' });
        }
        return res.status(200).send(contact);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {object} updated contact
     */
    update(req, res) {
        const contact = ContactModel.findOne(req.params.id);
        if (!contact) {
            return res.status(404).send({ 'message': 'contact not found' });
        }
        const updatedContact = ContactModel.update(req.params.id, req.body);
        return res.status(200).send(updatedContact);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {void} return statuc code 204 
     */
    delete(req, res) {
        const contact = ContactModel.findOne(req.params.id);
        if (!contact) {
            return res.status(404).send({ 'message': 'contact not found' });
        }
        const ref = ContactModel.delete(req.params.id);
        return res.status(204).send(ref);
    }
};

export default Contact;