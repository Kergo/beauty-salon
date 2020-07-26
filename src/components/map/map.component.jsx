import React, { Component } from 'react';

import './map.styles.scss';

class MapContainer extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAZTHhIeAu9mcolaojmQz1Scu_DxDv2Xu4&callback=initMap'
    );
    window.initMap = this.initMap;
  };
  initMap = () => {
    const myLatLng = { lat: 40.363, lng: -40.044 };
    let map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng,
    });
    new window.google.maps.Marker({
      position: myLatLng,
      map,
      title: 'The Ugly Duckling!',
    });
  };
  render() {
    return <div id="map" className="map"></div>;
  }
}

function loadScript(url) {
  let index = window.document.getElementsByTagName('script')[0];
  let script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default MapContainer;
