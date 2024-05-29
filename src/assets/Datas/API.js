export const fetchLibraryData = async () => {
    try {
      const response = await fetch('src/assets/Datas/library.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading the JSON file:', error);
      return [];
    }
  };