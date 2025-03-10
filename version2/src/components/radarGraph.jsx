import React, { useRef } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";

function RadarGraph(props) {
  const imageCache = useRef([]);

  ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
  );

  const data = {
    labels: ["FLUTTER", "HTML", "PHP", ".NET", "NODE JS", "React JS", "SQL"],
    datasets: [
      {
        label: "Skill",
        data: [88, 90, 75, 71, 82, 85, 82],
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "#01aeff",
        pointBorderColor: "#fff",
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        // top: 25,
        top: 35,
        left: 15,
        right: 15,
        bottom: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
        },
        pointLabels: {
          display: false,
        },
        min: 0,
        max: 100,
      },
    },
  };

  const images = [
    "/images/skills/flutter.png",
    "/images/skills/html.png",
    "/images/skills/php.png",
    "/images/skills/dotnet.png",
    "/images/skills/nodejs.png",
    "/images/skills/reactjs.png",
    "/images/skills/sql.png",
  ]

  if (!imageCache.current.length) {
    images.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      imageCache.current[index] = img;
    });
  }

  return (
    <div>
      <Radar 
        id={props.id}
        data={data}
        options={options}
        height={props.height}
        width={props.width}
        plugins={[
          {
            id: "radar-graph",
            beforeDatasetsDraw: (chart) => {
              const ctx = chart.ctx;
              const chartArea = chart.chartArea;
              const radius = (chartArea.bottom - chartArea.top) / 2;

              chart.data.labels.forEach((label, i) => {
                const angle = (Math.PI / 2) - (Math.PI * 2 * i) / chart.data.labels.length;
                const x = chart.width / 2 + Math.cos(angle) * radius * 1.1;
                const y = chart.height / 2 - Math.sin(angle) * radius * 1.1;

                const img = imageCache.current[i];

                if (img.complete) {
                  props.id === "skills" ?
                  ctx.drawImage(img, x - 20, y - 10, props.logoSize, props.logoSize) :
                  ctx.drawImage(img, x - 7, y - 5, props.logoSize, props.logoSize)
                }
              });
            },
          },
        ]}
        />
    </div>
  );
}

export default RadarGraph;
