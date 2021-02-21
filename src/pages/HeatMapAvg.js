/*
    Authors: Jack Chou, Jeffrey Liu, Darien Tsai
*/
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import firebase from "firebase/app";
import 'firebase/database'
import io from 'socket.io-client';
import {APIKEY, FBKEY} from '../key'

console.log(firebase);
let app = firebase.initializeApp({
    apiKey: FBKEY,
    projectId: 'crowdmap-305402',
    databaseURL: 'https://crowdmap-305402-default-rtdb.firebaseio.com/'
});

class HeatMapAvg extends Component {
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
            this.state.mapStatus ?
            (<GoogleMapReact
                style={{ height: '100vh', width: '100%' }}
                bootstrapURLKeys={{ key: APIKEY }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                heatmapLibrary={true}
                heatmap={this.state.heatMapData}
                >
            </GoogleMapReact>) : (<></>)
        );
    }
    componentDidMount() {
        firebase.database().ref("record/").once("value").then(snapshot => {
            //record/{18:[]}
            let allData = snapshot.val();
            let averageData = allData["0"];
            for(let i in allData) {
                if(i == "0") continue;
                for(let j = 0; j < averageData.length; j++) {
                    averageData[j]["lat"] = (averageData[j]["lat"]+allData[i][j]["lat"])/2;
                    averageData[j]["lng"] = (averageData[j]["lng"]+allData[i][j]["lng"])/2;
                }
            }
            return averageData;
        }).then( averageData => {
            this.addPoints(averageData, 0)
        })
    }
}

export default HeatMapAvg;
