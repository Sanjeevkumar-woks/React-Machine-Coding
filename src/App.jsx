import TrafficLight from "./components/TrafficLight/TrafficLight";

function App() {
  return (
    <>
      <div
        className="app-container"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TrafficLight />
      </div>
    </>
  );
}

export default App;
