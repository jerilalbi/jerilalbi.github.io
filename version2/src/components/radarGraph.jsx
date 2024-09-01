import React, { useEffect, useRef } from "react";
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

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

function RadarGraph() {
  const imageCache = useRef([]);

  const data = {
    labels: ["FLUTTER", "HTML", "PHP", ".NET", "NODE JS", "React JS", "MySQL"],
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
        top: 25,
        left: 15,
        right: 15,
        bottom: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      customLabels: {
        images: [
          "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
          "https://www.php.net/images/logos/new-php-logo.png",
          "https://cdn.icon-icons.com/icons2/2415/PNG/512/dot_net_original_logo_icon_146546.png",
          "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
          "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          "https://static-00.iconduck.com/assets.00/database-mysql-icon-923x1024-37xcgdyl.png",
        ],
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

  const customLabelPlugin = {
    id: "customLabels",
    afterDatasetsDraw: (chart) => {
      const ctx = chart.ctx;
      const images = chart.config.options.plugins.customLabels.images;
      const chartArea = chart.chartArea;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;
      const radius = chart.scales.r.drawingArea * 1.2;
      const angleStep = (2 * Math.PI) / chart.scales.r._pointLabels.length;

      chart.scales.r._pointLabels.forEach((label, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle) - 10;
        const y = centerY + radius * Math.sin(angle) - 10;

        if (!imageCache[index]) {
          const img = new Image();
          img.src = images[index];
          img.onload = () => {
            imageCache[index] = img;
            ctx.drawImage(img, x, y, 15, 15);
          };
        } else {
          ctx.drawImage(imageCache[index], x, y, 15, 15);
        }
      });
    },
  };

  useEffect(() => {
    ChartJS.register(customLabelPlugin);
  }, []);

  return (
    <div>
      <Radar data={data} options={options} height={"200px"} width={"200px"} />
    </div>
  );
}

export default RadarGraph;
