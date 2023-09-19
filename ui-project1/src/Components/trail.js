import React, { useState } from 'react';

function Trail() {
  const [daysAgo, setDaysAgo] = useState(1000); // Başlangıç değeri 1000

  const handleInputChange = (event) => {
    setDaysAgo(event.target.value); // Kullanıcının girdiği değeri state'e kaydet
  };

  return (
    <div>
      <label htmlFor="daysAgoInput">Gün Sayısı: </label>
      <input
        type="number"
        id="daysAgoInput"
        value={daysAgo}
        onChange={handleInputChange}
      />
      <button onClick={() => Trail(daysAgo)}>Verileri Getir</button>
    </div>
  );
}

export default Trail;
