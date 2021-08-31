import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {useState} from 'react';
export class MapContainer extends React.Component {
 
  render() {
     
   
    return (
      <Map google={this.props.google} initialCenter={{
        lat: 9.952252,
        lng: 76.299304
      }} zoom={14} style={{position: 'absolute', width: '425px', height: '50%'}}>
 
        <Marker onClick={{
            lat: 9.952252,
            lng:  76.299304
          }}
        name={'Current location'} />
         
 
        <InfoWindow onClose={ {
            lat: 9.9312,
            lng: 76.2673
          }}>
            <div>
              <h1>Kochi</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAbteogVKopKvoCAjnrbqIRf3daskeMbME')
})(MapContainer)