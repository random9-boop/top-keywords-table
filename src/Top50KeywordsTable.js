import React, { useState, useEffect } from 'react';

const Top50KeywordsTable = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // This is where we're putting our actual top 50 keywords data
      const realData = [
        { keyword: "edibles", volume: 80000 },
        { keyword: "thc gummies", volume: 78000 },
        { keyword: "delta 9 gummies", volume: 36000 },
        { keyword: "delta 8 gummies", volume: 19000 },
        { keyword: "weed gummies", volume: 17000 },
        { keyword: "edibles weed", volume: 11000 },
        { keyword: "thc edibles", volume: 11000 },
        { keyword: "thc drinks", volume: 9700 },
        { keyword: "thc seltzer", volume: 10000 },
        { keyword: "delta 8 drinks", volume: 1500 },
        { keyword: "cbd drinks", volume: 10000 },
        { keyword: "hemp gummies", volume: 6300 },
        { keyword: "edible gummies", volume: 6000 },
        { keyword: "weed edibles", volume: 5800 },
        { keyword: "cannabis gummies", volume: 5300 },
        { keyword: "cbd gummies benefits", volume: 4100 },
        { keyword: "cannabis edibles", volume: 2600 },
        { keyword: "marijuana edibles", volume: 2600 },
        { keyword: "edible weed", volume: 2200 },
        { keyword: "thc gummy", volume: 1900 },
        { keyword: "delta gummies", volume: 1900 },
        { keyword: "gummy edibles", volume: 1600 },
        { keyword: "weed edibles gummies", volume: 1600 },
        { keyword: "weed candy", volume: 1500 },
        { keyword: "edible drug", volume: 1500 },
        { keyword: "buy edibles online legal", volume: 1500 },
        { keyword: "edibles gummies", volume: 1400 },
        { keyword: "gummies thc", volume: 1300 },
        { keyword: "weed gummy", volume: 1200 },
        { keyword: "pot gummies", volume: 1200 },
        { keyword: "delta 9 drinks", volume: 1900 },
        { keyword: "thc infused drinks", volume: 2000 },
        { keyword: "weed drinks", volume: 2000 },
        { keyword: "cbd drinks near me", volume: 1300 },
        { keyword: "thc store", volume: 1200 },
        { keyword: "cannabis drink", volume: 1100 },
        { keyword: "best thc seltzer", volume: 1100 },
        { keyword: "weed infused drinks", volume: 1100 },
        { keyword: "thc water", volume: 1000 },
        { keyword: "brez drink near me", volume: 1000 },
        { keyword: "best thc drinks", volume: 900 },
        { keyword: "weed seltzer", volume: 800 },
        { keyword: "delta thc drinks", volume: 800 },
        { keyword: "cannabis infused beverages", volume: 800 },
        { keyword: "thc seltzer drinks", volume: 700 },
        { keyword: "marijuana drink", volume: 700 },
        { keyword: "thc beverages", volume: 700 },
        { keyword: "best thc drinks 2024", volume: 600 },
        { keyword: "cbd drinks nearby", volume: 600 },
        { keyword: "weed soda", volume: 600 }
      ];

      // Sort the data by volume in descending order
      const sortedData = realData.sort((a, b) => b.volume - a.volume);
      
      // Take only the top 50 (though we already have 50, this ensures we always get 50)
      setKeywords(sortedData.slice(0, 50));
    };

    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Top 50 Keywords by Search Traffic</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Rank</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Keyword</th>
            <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #ddd' }}>Search Volume</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map((item, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{index + 1}</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{item.keyword}</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>{item.volume.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top50KeywordsTable;