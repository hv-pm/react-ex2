import 'bulma/css/bulma.css'
import ProfileCards from "./ProfileCards";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
      <div className="hero-body">
        <p className="title">Personal Digital Assistance</p>
      </div>
    </section>

      <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <ProfileCards 
                title="Alexa" 
                handle="@alexa99" 
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you buy things!"
                />
              </div>
              <div className="column is-4">
                <ProfileCards 
                title="Cortana" 
                handle="@cortana32" 
                image={CortanaImage}
                description="Cortana was created by Microsoft. Who knows what it does?"
                />
              </div>
              <div className="column is-4">
                <ProfileCards 
                title="Siri" 
                handle="@siri01" 
                image={SiriImage}
                description="Siri was created by Apple. She's funny."
                />
              </div>
            </div>
          </section>
      </div>
    </div>
  );
}

export default App;
