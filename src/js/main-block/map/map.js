/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import convertCrdsToMinute from './convertMap';
import { mapBe, mapRu, mapEn } from '../date-arrays/data-lang';


mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = (props) => {
  const getLangMap = (num) => {
    if (props.lang === 'en') {
      return mapEn[num];
    }

    if (props.lang === 'ru') {
      return mapRu[num];
    }
    return mapBe[num];
  };


  const mapContainer = useRef(null);
  useEffect(() => {
    if (props.loc) {
      const splitLocation = props.loc.split(',');
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [splitLocation[1], splitLocation[0]],
        zoom: 10,
      });
      const marker = new mapboxgl.Marker()
        .setLngLat([splitLocation[1], splitLocation[0]])
        .addTo(map);
    }
  }, [props.loc]);

  return (
    <div className={props.dayTheme ? 'flex-colonum map-container white' : 'flex-colonum map-container black'}>
      <div className="map" ref={mapContainer} />
      <div className={props.dayTheme ? 'map-coord textWhite' : 'map-coord textBlack'}>
        <div>
          {getLangMap(0)}
          {' '}
          :
          {' '}
          {props.loc ? convertCrdsToMinute(props.loc.split(',')[0]) : ''}
        </div>
        <div>
          {getLangMap(1)}
          {' '}
          :
          {' '}
          {props.loc ? convertCrdsToMinute(props.loc.split(',')[1]) : ''}
        </div>
      </div>
    </div>
  );
};

export default Map;
