import { getWeatherData } from "@/lib/weather-helper";

interface WeatherData {
  temperature: number;
  humidity: number;
}

interface ParamsProps {
  location: string;
}

interface PageProps {
  params: ParamsProps;
}
const Widget = ({ name, data }: { name: string; data: string }) => {
  return (
    <div
      className="
  rounded-md
  bg-red-600 
  p-2
  bg-gradient-to-r
  from-blue-500
  via-gray-500
  to-blue-500
  background-animate"
    >
      <p className="text-gray-800">{name}</p>
      <div className="text-4xl flex items-center h-32 justify-center">
        {data}
      </div>
    </div>
  );
};

const Page = async ({ params }: PageProps) => {
  const data: WeatherData = await getWeatherData(params.location);

  return (
    <div className="mt-10 px-4">
      <h1 className="text-2xl py-4">{params.location.toUpperCase()}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Widget name="Temperature" data={`${data.temperature} °C`} />
        <Widget name="Humidity" data={`${data.humidity} %`} />
      </div>
    </div>
  );
};

export default Page;
