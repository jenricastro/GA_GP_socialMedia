import * as React from 'react';
import Map, { NavigationControl, GeolocateControl, Marker, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Login from '../user/login/login';
import Register from '../user/register/register'
import 'maplibre-gl/dist/maplibre-gl.css';
import Room from '@mui/icons-material/LocationOn';
import '/Users/jenri/Documents/dev/projects/social_media/GA_GP_socialMedia/client/src/App.css'
// import {format} from 'timeago.js'

function App() {
    const myStorage = window.localStorage;
    const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
    const [posts, setPosts] = useState([]);
    const [currentPin, setCurrentPin] = useState(null);
    const [newLocation, setNewLocation] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    // const [viewpoint, setViewpoint] = useState({
    //     latitude: '',
    //     longitude: '',
    //     zoom: 6,
    // });




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

    const handleLogout = () => {
        setCurrentUsername(null);
        myStorage.removeItem("user");
    };


    const markerClick = (id) => {
        setCurrentPin(id)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPin = {
            username: currentUsername,
            title,
            desc,
            lat: newLocation.lat,
            long: newLocation.long,
        };

        try {
            const res = await axios.post("http://localhost:3000/posts", newPin);
            setPosts([...posts, res.data]);
            setNewLocation(null);
        } catch (err) {
            console.log(err);
        }
    };

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
                                    color: p.username === currentUsername ? "red" : "blue",
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
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label>Title</label>
                                <input
                                    placeholder="Enter a title"
                                    autoFocus
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <label>Description</label>
                                <textarea
                                    placeholder="Say us something about this place."
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                                <button type="submit" className="submitButton">
                                    Add Pin
                                </button>
                            </form>
                        </div>
                    </Popup>
                )}
                {currentUsername ? (
                    <button className="button logout" onClick={handleLogout}>
                        Log out
                    </button>
                ) : (
                    <div className="buttons">
                        <button className="button login" onClick={() => setShowLogin(true)}>
                            Log in
                        </button>
                        <button
                            className="button register"
                            onClick={() => setShowRegister(true)}
                        >
                            Register
                        </button>
                    </div>
                )}
                {showRegister && <Register setShowRegister={setShowRegister} />}
                {showLogin && (
                    <Login
                        setShowLogin={setShowLogin}
                        setCurrentUsername={setCurrentUsername}
                        myStorage={myStorage}
                    />
                )}
            </Map>
        </div>
    );
}

export default App;
