
import { useState } from 'react';
import axios from 'axios';
import { GeoIPResponse, IPData } from './utils';

const useIpSearch = () => {
  const [ipData, setIpData] = useState<IPData | null>(null);

  const handleSearch = async (ip: string) => {
    const apiKey = import.meta.env.VITE_API_KEY_GEO_IPIFY;
    const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`;

    try {
      const response = await axios.get<GeoIPResponse>(url);
      setIpData({
        ip: response.data.ip,
        location: response.data.location,  
        isp: response.data.isp,
      });
    } catch (error) {
      console.error('Error fetching IP data:', error);
    }
  };

  return { ipData, handleSearch };
};

export default useIpSearch;
