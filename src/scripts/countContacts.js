import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const existingContacts = await readContacts();

    console.log('📌 Debug - readContacts verisi:', existingContacts); // Yeni eklenen satır

    if (!Array.isArray(existingContacts)) {
      console.error('❌ Hata: existingContacts bir dizi değil!');
      return 0;
    }

    const existingLength = existingContacts.length;

    console.log('✅ İletişim bilgilerinin sayısı alındı:', existingLength);
    return existingLength;
  } catch (error) {
    console.log('❌ İletişim bilgileri alınırken hata oluştu:', error.message);
    return 0;
  }
};

countContacts().then(console.log);
