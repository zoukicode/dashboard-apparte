import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import {motion} from 'framer-motion'
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(ArcElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

// Données de base pour le Pie chart
const labels = ['Digital Leads', 'Manual', 'Campaign', 'Lost Leads'];
const backgroundColors = ['#007bff', '#28a745', '#fd7e14', '#6c757d'];
const values = [14, 30, 20, 34];
const total = values.reduce((a, b) => a + b, 0);

// Données pour le camembert
const pieData = {
  labels,
  datasets: [
    {
      data: values,
      backgroundColor: backgroundColors,
    }
  ]
};

// Données pour le graphique en ligne (exemple)
const lineData = {
  labels: labels,
  datasets: [
    {
      label: 'Leads',
      data: values,
      borderColor: '#007bff',
      backgroundColor: '#007bff',
      fill: false,
      tension: 0.3,
    }
  ]
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

export default function Graphe() {
  return (
    <motion.div 
    layout
    className="flex flex-wrap justify-between gap-10 items-center w-[95%]  mx-auto">
      {/* Section camembert + légende */}
      <motion.div 
      initial={{scale:0,opacity:0}}
      whileInView={{scale:1,opacity:1}}
      viewport={{amount:0.5}}
      transition={{type:'spring',duration:1.2}}
      className="flex justify-around items-center box_graphe ">
        {/* Graphique camembert */}
      <h2 className='text-gray-400 absolute left-[20px] top-[10px] font-bold'>Diagramme</h2>
        <div className="w-[150px] h-[150px]">
          <Pie data={pieData} options={pieOptions} />
        </div>

        {/* Légende personnalisée */}
        <div className="flex flex-col gap-3 items-center justify-center">
          {labels.map((label, i) => {
            const value = values[i];
            const percentage = ((value / total) * 100).toFixed(1);
            return (
              <div key={i} className="flex justify-between text-[14px] text-[#333] items-center w-[160px]">
                <span className="flex items-center gap-2">
                  <span
                    className="w-[12px] h-[12px] inline-block rounded-md"
                    style={{ backgroundColor: backgroundColors[i] }}
                  ></span>
                  {label}
                </span>
                <span>{percentage}%</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Section graphique en ligne */}
      <motion.div 
       initial={{scale:0,opcity:0}}
      viewport={{amount:0.5}}
       whileInView={{scale:1,opcity:1}}
       transition={{type:'spring',delay:1.5,duration:1.2}}
      className="box_graphe">
      <h2 className='text-gray-400 absolute top-[10px] font-bold'>Courbe</h2>
        <div className="w-[100%] h-[100%] flex items-center justify-center">
        <Line data={lineData} options={lineOptions} />
        </div>
      </motion.div>
    </motion.div>
  );
}
