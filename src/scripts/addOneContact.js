import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const addOneContact = async () => {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    await writeContacts(contacts);
    console.log("1 контакт додано.");
};

addOneContact();
