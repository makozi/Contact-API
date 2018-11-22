import moment from 'moment';
import uuid from 'uuid';

class Contact {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
        this.contacts = [];
    }
    /**
     * 
     * @returns {object} contact object
     */
    create(data) {
        const newContact = {
            id: uuid.v4(),
            name: data.name || '',
            phoneNo: data.phoneNo || '',
            email: data.email || '',
            website: data.website || '',
            role: data.role || '',
            githubAccount: data.githubAccount || '',
            createdDate: moment.now(),
            modifiedDate: moment.now()
        };
        this.contacts.push(newContact);
        return newContact;
    }
    /**
     * 
     * @param {uuid} id
     * @returns {object} contact object
     */
    findOne(id) {
        return this.contacts.find(contact => contact.id === id);
    }
    /**
     * @returns {object} returns all contacts
     */
    findAll() {
        return this.contacts;
    }
    /**
     * 
     * @param {uuid} id
     * @param {object} data 
     */
    update(id, data) {
        const contact = this.findOne(id);
        const index = this.contacts.indexOf(contact);
        this.contacts[index].name = data['name'] || contact.name;
        this.contacts[index].phoneNo = data['phoneNo'] || contact.phoneNo;
        this.contacts[index].email = data['email'] || contact.email;
        this.contacts[index].website = data['website'] || contact.website;
        this.contacts[index].role = data['role'] || contact.role;
        this.contacts[index].githubAccount = data['githubAccount'] || contact.githubAccount;
        this.contacts[index].modifiedDate = moment.now();
        return this.contacts[index];
    }
    /**
     * 
     * @param {uuid} id 
     */
    delete(id) {
        const contact = this.findOne(id);
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
        return {};
    }
}
export default new Contact();