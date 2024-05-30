export const fetchLibraryData = async () => {
  try {
    const response = await fetch('src/assets/Datas/library.json');
    if (!response.ok){
      throw new Error("Erreur lors de la requête");
    }
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Error loading the JSON file:', error);
    return [];
  }
};