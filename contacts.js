const fs = require('fs').promises;
const path = require('path');

// const contactsPath = path.join(__dirname, './db/contacts.json');
// console.log()

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  // const data = await fs.readFile(__dirname, './db/contacts.json');
  return JSON.parse(data);
};
listContacts()

const getContactById = async id => {
  const contacts = await listContacts();
  const result = contacts.find(el => el.id === id);
  return result;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();

};

const removeContact = async id => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
