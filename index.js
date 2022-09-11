const contacts = require('./contacts');
contacts.listContacts();

// const argv = require('yargs').argv;

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      break;

    case 'get':
      const contactById = await contacts.getContactById(id);
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction({action: 'list'});

// invokeAction(argv);
