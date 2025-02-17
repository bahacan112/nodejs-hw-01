import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const existingContacts = await readContacts();
    if (existingContacts.length > 0) {
      existingContacts.pop();
      await writeContacts(existingContacts);
      console.log('Son İletişim Bilgisi silindi');
    } else {
      console.log('Silenecek iletişim bilgisi bulunamadı');
    }
  } catch (error) {
    console.error('Kişi Silinirken hata oluştu', error.message);
  }
};

removeLastContact();
