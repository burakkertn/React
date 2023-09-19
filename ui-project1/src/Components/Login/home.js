import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Home() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Grafik oluşturma işlemleri burada gerçekleşecek

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Grafik verilerini ve seçeneklerini burada tanımlayabilirsiniz
      const data = {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
        datasets: [
          {
            label: 'Aylık Satışlar',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      new Chart(ctx, {
        type: 'bar', // Grafik türünü belirtin (örneğin, çubuk grafik)
        data: data,
        options: options,
      });
    }
  }, []);

  return (
    <div>
      <h1>Grafik Sayfası</h1>
      <div>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default Home;
