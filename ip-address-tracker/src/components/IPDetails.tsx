import React from 'react';
import './IPDetails.css';
import { IPDetailsProps } from './utils/utils';

const IPDetails: React.FC<IPDetailsProps> = ({ ip, location, isp }) => {
    return (
      <div className="ip-details-card">
        <div className="detail-column">
          <strong>IP Address:</strong>
          <span>{ip}</span>
        </div>
        <div className="detail-column">
          <strong>Location:</strong>
          <span>{`${location.city}, ${location.region} ${location.postalCode}`}</span>
        </div>
        <div className="detail-column">
          <strong>Timezone:</strong>
          <span>UTC {location.timezone}</span>
        </div>
        <div className="detail-column">
          <strong>ISP:</strong>
          <span>{isp}</span>
        </div>
      </div>
    );
  };
  
  export default IPDetails;
