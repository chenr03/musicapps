import React, {useState} from 'react';
import './app.css';
import VolumeSlider from "./component/Volume";
import Header from "./component/Header";
import Signin from "./component/Signin";
import Online from "./component/Online";
import CardController from "./component/CardController"
import SoundQuality from "./component/SoundQuality"




function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOnline, setIsOnline] = React.useState(false);
    const [volume, setVolume] = useState(1);

  return (
    <div className="app">
      <Header />
        {isLoggedIn === true ? (
        <div className="Cards">
            <p>Welcome User!</p>
            <Online isOnline={isOnline} setIsOnline={setIsOnline} />
            <CardController
                title="Master Volume"
                description="Overrides all other sound settings in this application"
                component={VolumeSlider}
                // state={isOnline}
                // setState={setIsOnline}
                state={volume}
                setState={setVolume}

            />

            <CardController
                title="Sound Quality"
                description="Manually control the music quality in event of poor connection"
                component={SoundQuality}
                // state={isOnline}
                // setState={setIsOnline}
                // state={soundQuality}

            />

            <h4>System Notifications:</h4>
            {isOnline && (
                <p>
                    Your application is offline. You won't be able to share or save music to other devices.
                </p>

            )}
            {volume && (
                <p>
                    Listening to music at a high volume could cause long-term hearing loss.
                </p>
            )}

            {/*{soundQuality && (*/}
            {/*    <p>*/}
            {/*     Music quality is degraded. Increase quality if your connection allows it.*/}
            {/*    </p>*/}
            {/*)}*/}


        </div>
        ) : (
            <Signin setIsLoggedIn={setIsLoggedIn} />

        )}
    </div>
  );
}

export default App;
