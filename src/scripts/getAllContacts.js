import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const existingContacts = await readContacts();

    console.log('Tüm iletişim bilgileri alındı', existingContacts);
    return existingContacts;
  } catch (error) {
    console.error('veriler cekilirken hata oluştu', error.message);
    return [];
  }
};
getAllContacts().then(console.log);
