export interface Location {
  city: string;
  country: string;
  geonameId: number;
  lat: number;
  lng: number;
  postalCode: string;
  region: string;
  timezone: string;
}

export interface IPDetailsProps {
  ip: string;
  location: Location;
  isp: string;
}
export interface GeoIPResponse {
  ip: string;
  location: {
    city: string;
    country: string;
    geonameId: number;
    lat: number;
    lng: number;
    postalCode: string;
    region: string;
    timezone: string;
  };
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
  proxy: {
    proxy: boolean;
    vpn: boolean;
    tor: boolean;
  };
}

export type IPData = {
  ip: string;
  location: Location;
  isp: string;
};
export interface MapProps {
    lat: number;
    lng: number;
  }
  