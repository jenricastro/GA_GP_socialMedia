import * as React from 'react';
import Map, { NavigationControl, GeolocateControl, Marker, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'maplibre-gl/dist/maplibre-gl.css';
import Room from '@mui/icons-material/LocationOn';
import '/Users/jenri/Documents/dev/projects/social_media/GA_GP_socialMedia/client/src/App.css'
// import {format} from 'timeago.js'

function App() {
    const currentUser = 'usertest'
    const [posts, setPosts] = useState([]);
    const [currentPin, setCurrentPin] = useState(null);
    const [newLocation, setNewLocation] = useState(null);
    const [viewpoint, setViewpoint] = useState({
        latitude: '',
        longitude: '',
        zoom: 6,
    });




    useEffect(() => {
        const getPosts = async () => {
            try {
                const allPosts = await axios.get('http://localhost:3000/posts');
                setPosts(allPosts.data);
            } catch (err) {
                console.log(err);
            }
        };
        getPosts();
    }, []);

    const markerClick = (id) => {
        setCurrentPin(id)

    }

    //This function will pin a new Lat and Long
    const handleAddNewLocation = (e) => {
        console.log(e)
        console.log(e.lngLat)
        const [long, lat] = e.lngLat;
        setNewLocation({
            lat,
            long,
        });
    };

    return (
        <div className="App">


            <Map mapLib={maplibregl}
                initialViewState={{
                    longitude: -74,
                    latitude: 41,
                    zoom: 6
                }}
                onDblClick={handleAddNewLocation}
                style={{ width: "100%", height: " calc(80vh)", position: "absolute" }}
                mapStyle="https://api.maptiler.com/maps/bright-v2/style.json?key=MRoU2XD906he5O5xSCyJ"

            >
                <GeolocateControl
                    
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    onGeolocate={(position) => {
                        // get latitude and longitude of user current location
                        setNewLocation([position.posts.lat, position.post.long]);
                    }}
                />
                <NavigationControl position="top-left" />
                {posts.map((p) => {


                    return (
                        <Marker
                        
                            longitude={p.long}
                            latitude={p.lat}
                        >
                            <Room
                                style={{
                                    color: p.username === currentUser ? "red" : "blue",
                                    cursor: "pointer"
                                }}
                                onClick={() => markerClick(p._id)}
                            />
                            {p._id === currentPin && (
                                <Popup
                                    longitude={p.long}
                                    latitude={p.lat}
                                    anchor="top"
                                    closeButton={true}
                                    closeOnClick={false}
                                    onCLose={() => setCurrentPin(null)}
                                >
                                    <div className='card'>
                                        <label>Place</label>
                                        <h4>{p.postName}</h4>
                                        <label>Comment</label>
                                        <p>{p.comment}</p>
                                        <label>Info</label>
                                        <span className='username'>{p.username}</span>
                                        <span>{p.long}</span>
                                        <span>{p.lat}</span>
                                        {/* <span className='date'>{format(p.createdAt)}</span> */}
                                    </div>
                                </Popup>
                            )}
                        </Marker>
                    )
                })}
                {/* new logic */}
                {newLocation && (
                    <Popup
                        longitude={newLocation.long}
                        latitude={newLocation.lat}
                        anchor="top"
                        closeButton={true}
                        closeOnClick={false}
                        onCLose={() => setCurrentPin(null)}
                    >
                        <h1>test</h1>
                    </Popup>
                )}

            </Map>
        </div>
    );
}

export default App;
