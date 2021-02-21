/*
    Authors: Jack Chou, Jeffrey Liu, Darien Tsai
*/

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import io from 'socket.io-client';
import { APIKEY } from '../key'

class HeatMap extends Component {
    static defaultProps = {
        center: {
            lat: 33.998470127751006,
            lng: -117.94746979872437
        },
        zoom: 15
    };

    constructor(){
        super();

        this.state = {
            mapStatus: false,
            heatMapData: {
                positions:[],
                options: {
                    radius: 13,
                    opacity: 0.3
                }
            },
        };
    }

    addPoints = (data) => {
        let newData = this.state.heatMapData;
        for(let i = 0; i < data.length; i++) {
            newData["positions"].push({lat: data[i][0], lng: data[i][1]});
        }
        this.setState({heatMapData: newData, mapStatus: true});
    }
    render() {
        return (
            <div>
              {
                this.state.mapStatus ?
                (<GoogleMapReact
                  style={{}}
                  bootstrapURLKeys={{ key: APIKEY }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                  heatmapLibrary={true}
                  heatmap={this.state.heatMapData}
                >
                </GoogleMapReact>) : (<></>)
              }
            </div>
        );
    }
    componentDidMount() {
        const socket = io('https://crowdmap-server.herokuapp.com');

        socket.on('connect', () =>{
          socket.emit("update", {"coord": [100, 100]});
        });
        socket.on('get', (data) =>{
          this.addPoints(data);
        });
    }
}

export default HeatMap;
