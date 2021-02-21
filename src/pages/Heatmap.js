/*
Authors: Jack Chou, Jeffrey Liu, Darien Tsai
*/
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import firebase from "firebase/app";
import 'firebase/database'
import io from 'socket.io-client';
import {APIKEY, FBKEY} from '../key'
import MapPin from '../components/MapPin'
import mapStyles from '../mapStyles'

console.log(firebase);
let app = firebase.initializeApp({
    apiKey: FBKEY,
    projectId: 'crowdmap-305402',
    databaseURL: 'https://crowdmap-305402-default-rtdb.firebaseio.com/'
});

class HeatMap extends Component {
    static defaultProps = {
        center: {
            lat: 33.986217,
            lng: -117.976234
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
            lat: 33.986217,
            lng: -117.976234,
            dense:""
        };
    }
    denseCalc = (data) => {
        let nearby = 0;
        let denseScale = ["spacious", "moderate", "dense"];
        for(let i = 0; i < data.length; i++) {
            let x = Math.abs(data[i][0]-this.state.lat);
            let y = Math.abs(data[i][1]-this.state.lng);
            if(Math.sqrt(x*x+y*y) < 0.0015){
                nearby += 1;
            }
        }
        let fiDense = (Math.floor(nearby/12) > 2)?2:Math.floor(nearby/12);
        console.log(nearby +": " +denseScale[fiDense]);
        this.setState({dense: denseScale[fiDense]});
    }
    showPosition = (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.setState({lat: position.coords.latitude});
        this.setState({lng: position.coords.longitude});
        let fiData = this.state.heatMapData;
        fiData["positions"].push({lat: position.coords.latitude, lng: position.coords.longitude});
        this.setState({heatMapData: fiData, mapStatus: true});
    }

    addPoints = (data) => {
        let newData = this.state.heatMapData;
        for(let i = 0; i < data.length; i++) {
            newData["positions"].push({lat: data[i][0], lng: data[i][1]});
        }
        navigator.geolocation.getCurrentPosition(this.showPosition, console.error,  {maximumAge:10000, timeout:5000, enableHighAccuracy: true});
        this.setState({heatMapData: newData});
        this.denseCalc(data);
    }
    render() {
        return (
            this.state.mapStatus ?
            (<GoogleMapReact
                style={{ height: '100vh', width: '100%' }}
                bootstrapURLKeys={{ key: APIKEY }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                defaultOptions={ {stylers: mapStyles} }
                heatmapLibrary={true}
                heatmap={this.state.heatMapData}
                >
                <MapPin
                style={{width:5}}
                lat={this.state.lat}
                lng={this.state.lng}
                ></MapPin>
                </GoogleMapReact>) : (<></>)
            );
        }
        componentDidMount() {
            const socket = io('https://crowdmap-server.herokuapp.com');

            socket.on('connect', () =>{
                socket.emit("update", {"coord": [100, 100]});
            });
            socket.on('get', (data) =>{
                this.addPoints(data[0]);
                // for(let i = 0; i < data.length; i ++)
                  // firebase.database().ref("record/" + i).set(data[i]).catch(console.error).then(console.log("pushed"));
            });

        }
    }

    export default HeatMap;
