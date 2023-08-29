export const getWeatherData = async (location: string) => {
  const apiUrl = `https://wwye2qstr0.execute-api.eu-west-1.amazonaws.com/dev/get-weather?cityName=${location}`;

  try {
    const response = await fetch(apiUrl, { cache: "no-cache" });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
