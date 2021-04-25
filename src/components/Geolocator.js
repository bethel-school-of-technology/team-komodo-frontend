// // import React, { Component } from 'react'
// import PropTypes from 'prop-types';

// //starting here is what I added
// import './Geolocator.css';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

// mapboxgl.workerClass = MapboxWorker;
// mapboxgl.accessToken = 'pk.eyJ1IjoiY2FwdGFpbmZsdWZmIiwiYSI6ImNrbm05bW9obDBva3Qyb20wZHV2NGUwbHQifQ.jkQHN977Ux0xoNwTLaNHvw';



// class Geolocator extends React.PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//           lng: 3,
//           lat: 1,
//           zoom: 1
//         };
//         this.mapContainer = React.createRef();
//       }
//       componentDidMount() {
//         const { lng, lat, zoom } = this.state;
//         const map = new mapboxgl.Map({
//           container: this.mapContainer.current,
//           style: 'mapbox://styles/mapbox/streets-v11',
//           center: [lng, lat],
//           zoom: zoom
//         });
//         var stores = {
//           'type': 'FeatureCollection',
//           'features': [
//             {
//               'type': 'Feature',
//               'geometry': {
//                 'type': 'Point',
//                 'coordinates': [-70, -75]
//               },
//               'properties': {
//                 'phoneFormatted': '(111) 111-1111',
//                 'phone': '2022347336',
//                 'address': 'For cold aliens',
//                 'city': 'Antarctica',
//                 'country': 'United States',
//                 'crossStreet': 'at 15th St NW',
//                 'postalCode': '20005',
//                 'state': 'D.C.'
//               }
//             },
//             {
//               'type': 'Feature',
//               'geometry': {
//                 'type': 'Point',
//                 'coordinates': [-100, 35]
//               },
//               'properties': {
//                 'phoneFormatted': '(222) 222-2222',
//                 'phone': '2025078357',
//                 'address': 'For land aliens',
//                 'city': 'North America',
//                 'country': 'United States',
//                 'crossStreet': 'at 22nd St NW',
//                 'postalCode': '20037',
//                 'state': 'D.C.'
//               }
//             },
//             {
//               'type': 'Feature',
//               'geometry': {
//                 'type': 'Point',
//                 'coordinates': [155, 5]
//               },
//               'properties': {
//                 'phoneFormatted': '(333) 333-3333',
//                 'phone': '2023879338',
//                 'address': 'For water aliens',
//                 'city': 'Pacific Ocean',
//                 'country': 'United States',
//                 'crossStreet': 'at Dupont Circle',
//                 'postalCode': '20036',
//                 'state': 'D.C.'
//               }
//             },
           
//           ]
//         };
  
//         /**
//          * Assign a unique id to each store. You'll use this `id`
//          * later to associate each point on the map with a listing
//          * in the sidebar.
//          */
//         stores.features.forEach(function (store, i) {
//           store.properties.id = i;
//         });
//         map.on('load', function (e) {
//           /* Add the data to your map as a layer */
//           map.addLayer({
//             "id": "locations",
//             "type": "circle",
//             /* Add a GeoJSON source containing place coordinates and information. */
//             "source": {
//               "type": "geojson",
//               "data": stores
//             }
//           });
//         });
//         map.on('move', () => {
//           this.setState({
//             lng: map.getCenter().lng.toFixed(4),
//             lat: map.getCenter().lat.toFixed(4),
//             zoom: map.getZoom().toFixed(2)
//           });
//         });
//     }
//     render() {
//       const { lng, lat, zoom } = this.state;
//       return (
//         <div>
//           <div className="locationbar">
//               <h3>Locations:</h3>
//               <h4>For Land Aliens: North America</h4>
//               <h4>For Water Aliens: South Pacific Ocean</h4>
//               <h4>For Cold Aliens: Antarctica</h4>
//             </div>
//             <div className="sidebar">
//               Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//             </div>
//             <div ref={this.mapContainer} className="map-container" />
//           </div>
//         );
//       }

// }
// export default Geolocator

import ReactMapGL, { Marker } from 'react-map-gl';
import React, { useState } from 'react';
import img from "./rocket-png-40798.png";
import Modal from 'react-modal';
import './Geolocator.css';

{/* MODAL/ALERT STUFF */}
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        background: 'rgba(35, 55, 75, 0.9)',
        fontSize: '20px',
        fontFamily: 'Arial'
    }
};

const accessToken = "pk.eyJ1Ijoic3VqaXRoaXNhdGhvbWUiLCJhIjoiY2tudWhycG9qMGQyeDJ3cm0wbmg0d3NqaiJ9.99FJxJ1VvuI43YfNRC6hYw";

//this sets the size of the rocket
const pinStyle = {
    width: "50px"
}


function Geolocator(props) {
    const [viewport, setViewport] = React.useState({
        longitude: 3,
        latitude: 1,
        zoom: 1,
    });

    {/* MODAL/ALERT STUFF */}
    const [modalIsOpen, setIsOpen] = React.useState(false);

    {/* MODAL/ALERT STUFF */}
    function closeModal() {
        setIsOpen(false);
    }

    {/* MODAL/ALERT STUFF */}
    function clickMarker(city) {
        setPopupInfo(city)
        setIsOpen(true);
        console.log("clicked")
    }

    {/* MODAL/ALERT STUFF */}
    const [popupInfo, setPopupInfo] = useState({});

    // Only rerender markers if props.data has changed
    const markers = React.useMemo(() => props.mappedCities.map(
        city => (
            <Marker key={city.city} longitude={parseFloat(city.lng)} latitude={parseFloat(city.lat)} >
                <img style={pinStyle} src={img}
                    onClick={() => clickMarker(city)}
                />
            </Marker>
        )
    ), [props.mappedCities]);

    

    return (
        <ReactMapGL {...viewport} width="100vw" height="90vh" onViewportChange={setViewport} mapboxApiAccessToken={accessToken} mapStyle= 'mapbox://styles/mapbox/streets-v11'>
            {markers}
            
            <div className="locationbar">
            <h1>Locations:</h1>
            <h3>North America</h3>
            <h3>Sahara</h3>
            <h3>Indian Ocean</h3>
            <h3>Antarctica</h3>
            </div>


            {/* MODAL/ALERT STUFF */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Modal"
                ariaHideApp={false}
            >
                <button onClick={closeModal} style={{ color: "black", float: "right" }}>X</button>
                <br />
                <div><b>{popupInfo.location}</b>
                <br />
                {popupInfo.address}
                <br /><br />
                <br>
                </br>Visit this facility if your pet is a {popupInfo.climate} species, including:
                <br /><br />{popupInfo.species}</div>
            </Modal>
        </ReactMapGL>
    );
}



export default Geolocator;