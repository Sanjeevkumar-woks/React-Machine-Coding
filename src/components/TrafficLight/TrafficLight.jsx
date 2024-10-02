import { useEffect, useState } from "react";
import "./styles.css";
const data = [
  {
    id: 1,
    color: "red",
    time: 10,
  },
  {
    id: 2,
    color: "yellow",
    time: 5,
  },
  {
    id: 3,
    color: "green",
    time: 20,
  },
];

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(1);

  useEffect(() => {
    const currentLight = data.find((l) => l.id == activeLight);
    console.log(currentLight);

    const timeOut = setTimeout(() => {
      setActiveLight((pre) => (pre === data.length ? 1 : pre + 1));
    }, currentLight.time * 1000);

    return () => clearInterval(timeOut);
  }, [activeLight]);

  return (
    <div className="container">
      {data.map((light) => (
        <Light key={light.id} activeLight={activeLight} index={light.id} />
      ))}
    </div>
  );
};

export default TrafficLight;

const Light = ({ color, activeLight, index }) => {
  const opacity = activeLight === index ? 1 : 0.2;

  return (
    <div
      className="light"
      style={{ background: `${color}`, opacity: `${opacity}` }}
    ></div>
  );
};
