import { Header, WeatherForecast } from "./components";
import { useWeather } from "./hooks";

function App() {
  const { weather, fetchWeather, error } = useWeather();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white p-4 gap-y-4">
      <Header fetchWeather={fetchWeather} />
      {error && <span className="text-red-500">{error}</span>}

      {weather ? (
        <WeatherForecast weather={weather} />
      ) : (
        <h2 className="text-center text-md">Nenhuma cidade selecionada</h2>
      )}
    </div>
  );
}

export default App;
