import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = { ...existingContacts, newContact };
    await writeContacts(updatedContacts);
    console.log('başarılı bir şekilde kayıt eklendi', newContact);
  } catch (error) {
    console.error('İletişim bilgisi eklenirken hata oluştu:', error.message);
  }
};

addOneContact();
