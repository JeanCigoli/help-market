export class LocalStorage {
  static create(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static getItem(key: string) {
    const data = localStorage.getItem(key);

    try {
      const json = JSON.parse(data || '');
      return json;
    } catch (error) {
      return data || '';
    }
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }
}
