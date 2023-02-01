import React, {useState} from 'react';


function Exhibit() {

    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails= () =>{
      fetch("https://geolocation-db.com/json/a9e48c70-8b22-11ed-8d13-bd165d1291e3")
      .then(response => response.json() )
      .then( data => setDetails( data ) );
    }

    return <p className="mt-3">
            Get my IP and Location.
            
            <div className="row justify-content-center mt-3">
              <div className="col-lg-6 text-center text-dark">
              <button className="btn btn-primary" onClick={getUserGeolocationDetails}>
              Find my details
              
            </button>
                {details && <ul className="list-group">
                  <li className="list-group-item">
                    Location : { `${details.city}, ${details.country_name}(${details.country_code})` }
                  </li>
                  <li className="list-group-item">IP {details.IPv4}</li>
                </ul>}
              </div>

            </div>
          </p>
}

export default Exhibit;