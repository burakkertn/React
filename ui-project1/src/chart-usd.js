import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Navbar from './Components/index/index'
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Dolar Chart Gösterimi',
    },
  },
};

const Horizontalchart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'usd',
        data: [], // 'usd' verilerini burada kullanacağız
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });

  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Başka Bir Veri Seti',
        data: [], // 'usd' verilerini burada kullanacağız
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://localhost:44317/api/Doviz/usd';

      try {
        const response = await fetch(url);
        const apiData = await response.json();

        const labels = apiData.map(item => item.date);
        const usdData = apiData.map(item => item.usd);

        setData({
          labels: labels,
          datasets: [
            {
              label: 'usd',
              data: usdData,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        });

        // Başka bir veri seti için verileri alın
        // Örnek olarak:
        const lineUrl = 'https://localhost:44317/api/Doviz/usd';
        const lineResponse = await fetch(lineUrl);
        const lineApiData = await lineResponse.json();

        const lineLabels = lineApiData.map(item => item.date);
        const lineDataPoints = lineApiData.map(item => item.usd);

        setLineData({
          labels: lineLabels,
          datasets: [
            {
              label: 'usd',
              data: lineDataPoints,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        });
      } catch (error) {
        console.error('API isteği sırasında bir hata oluştu: ', error);
      }
    };

    fetchData();
  }, []);

  return (
<div style={{ width: '100%', display: 'flex', flexDirection: 'row', padding: '50px' }}>
<Navbar />
  <div style={{ width: '40%' }}>
    <Bar data={data} options={options} />
  </div>
  <div style={{ width: '40%' }}>
    <Line data={lineData} options={options} />
  </div>
</div>

  );
};

export default Horizontalchart;
