/* global google */

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import io from 'socket.io-client';
// let heatMapData = {
//     positions:[],
//     options: {
//         radius: 20,
//         opacity: 0.6
//     }
// }
// //[[lat,lng],[]]
// function addPoints(data) {
//     for(let i = 0; i < data.length; i++) {
//         heatMapData["posistions"].push({lat: data[i][0], lng: data[i][1]});
//     }
//     return heatMapData;
// }


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 33.998470127751006,
            lng: -117.94746979872437
        },
        zoom: 15.5
    };

    constructor(){
        super();

        this.state = {
            mapStatus: false,
            heatMapData: {
                positions:[{lat: 33.998470127751006, lng: -117.94746979872437}],
                options: {
                    radius: 20,
                    opacity: 0.6
                }
            },
        };
    }

    addPoints = (data) => {
        let newData = this.state.heatMapData;
        //console.log(this.state);
        for(let i = 0; i < data.length; i++) {
            newData["positions"].push({lat: data[i][0], lng: data[i][1]});
        }
        this.setState({heatMapData: newData, mapStatus: true});

        // this.setState({map: <GoogleMapReact
        //     style={{ height: '100vh', width: '100%' }}
        //     bootstrapURLKeys={{ key: "AIzaSyDPON_EGHAeo4wDPdXLGSV2c_GIwWOwcCY" }}
        //     defaultCenter={this.props.center}
        //     defaultZoom={this.props.zoom}
        //     heatmapLibrary={true}
        //     heatmap={this.state.heatMapData}>
        // </GoogleMapReact>})
    }
    render() {
        console.log("render");
        console.log(this.state.heatMapData);
        return (
            this.state.mapStatus ?
            (<GoogleMapReact
                style={{ height: '100vh', width: '100%' }}
                bootstrapURLKeys={{ key: "AIzaSyDPON_EGHAeo4wDPdXLGSV2c_GIwWOwcCY" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                heatmapLibrary={true}
                heatmap={this.state.heatMapData}
                >
            </GoogleMapReact>) : (<></>)
        );
    }
    componentDidMount() {
        const socket = io('https://crowdmap-server.herokuapp.com');
        // const socket = io('http://localhost:5000/%27);

        socket.on('connect', () =>{
          socket.emit("update", {"coord": [100, 100]});
        });
        socket.on('get', (data) =>{
          //console.log(data);
          this.addPoints(data);
        });
    }
}

export default SimpleMap;
