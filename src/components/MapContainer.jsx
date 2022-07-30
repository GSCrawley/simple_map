import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export const MapContainer = () => {
    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
    }

    const locations = [
        {
          name: "Location 1",
          location: { 
            lat: 41.3954,
            lng: 2.162 
          },
        },
        {
          name: "Location 2",
          location: { 
            lat: 41.3917,
            lng: 2.1649
          },
        },
        {
          name: "Location 3",
          location: { 
            lat: 41.3773,
            lng: 2.1585
          },
        },
        {
          name: "Location 4",
          location: { 
            lat: 41.3797,
            lng: 2.1682
          },
        },
        {
          name: "Location 5",
          location: { 
            lat: 41.4055,
            lng: 2.1915
          },
        }
      ];
      
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript className='map-container'
       googleMapsApiKey='AIzaSyBBIVoCA7hzGn2vedDK7HDdWhfbEPoGm78'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
            {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
     </GoogleMap>
     </LoadScript>
  )
}
​
export default MapContainer;