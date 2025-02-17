import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    return Array.isArray(parsedData) ? parsedData : Object.values(parsedData);
  } catch (error) {
    console.error('Dosya okuma hatası:', error.message);
    return [];
  }
};
