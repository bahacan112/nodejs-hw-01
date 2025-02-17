import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts({});
    console.log('Tüm iletişim bilgileri başarıyla silindi...');
  } catch (error) {
    console.error('veri silinirken hat aoluştu', error.message);
  }
};

removeAllContacts();
