import { useEffect } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search';
import IPDetails from './components/IPDetails';
import Map from './components/Map';
import './App.css';
import useIpSearch from './components/utils/useIpSearch';

function App() {
  const { ipData, handleSearch } = useIpSearch();

  useEffect(() => {
    handleSearch('8.8.8.8'); // Default IP address
  }, []);
  
  return (
    <div className="App">
      <Header>
        <Search onSearch={handleSearch} />
      </Header>
      {ipData && (
        <div className="ip-details-map-container">
          <IPDetails ip={ipData.ip} location={ipData.location} isp={ipData.isp} />
          <div className="map-container">
            <Map lat={ipData.location.lat} lng={ipData.location.lng} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;