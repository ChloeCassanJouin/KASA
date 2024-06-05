export const fetchLibraryData = async () => {
  try {
    const response = await fetch('/library.json');
    if (!response.ok){
      throw new Error("Erreur lors de la requête_api.jsx");
    }
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Error loading the JSON file_api.jsx:', error);
    return [];
  }
};