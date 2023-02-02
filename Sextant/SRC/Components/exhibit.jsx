import React, {useEffect, useState} from 'react';

import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:55455');

const Latency = () => {

    const [
        letency, 
        setLatency
    ] 
    = useState("");

    useEffect(function(){
        client.onmessage = (message) => {
            setLatency(new Date().getTime() - message.data);
        };
    }, []);
    return (
        <span>
            {letency} Milliseconds
        </span>
    );
}

export default Latency;


function Exhibit() {

    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails= () =>{
      fetch("https://geolocation-db.com/json/a9e48c70-8b22-11ed-8d13-bd165d1291e3")
      .then(response => response.json() )
      .then( data => setDetails( data ) );
    }

    return <p className="mt-3">
            Get my IPv4 and Location.
            
            <div className="row justify-content-center mt-3">
              <div className="col-lg-6 text-center text-dark">
              <button className="btn btn-primary" onClick={getUserGeolocationDetails}>
              Find my details
              
            </button>
                {details && <ul className="list-group">
                  <li className="list-group-item">
                    Location : { `${details.city}, ${details.state}, ${details.country_name}(${details.country_code})` }
                  </li>
                  <li className="list-group-item">IPv4: {details.IPv4}</li>
                </ul>}
              </div>

            </div>
          </p>
}

function Exhibit1() {

    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails= () =>{
      fetch("https://ipapi.co/json")
      .then(response => response.json() )
      .then( data => setDetails( data ) );
    }

    return <p className="mt-3">
            Get my IPv6 and Location.
            
            <div className="row justify-content-center mt-3">
              <div className="col-lg-6 text-center text-dark">
              <button className="btn btn-primary" onClick={getUserGeolocationDetails}>
              Find my details
              
            </button>
                {details && <ul className="list-group">
                  <li className="list-group-item">
                    Location : { `${details.city}, ${details.region},  ${details.country_name}(${details.country_code})` }
                  </li>
                  <li className="list-group-item">IPv6: {details.ip},</li>
                </ul>}
              </div>

            </div>
          </p>
}

export {
     Exhibit, 
    Exhibit1,
    Latency
} 
