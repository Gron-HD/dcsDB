import React from 'react';
import './AboutPage.scss';
import {RegisterPage} from '../../helper/Helper';

class AboutPage extends React.Component{

    componentDidMount(){
        document.title = "DCSDB - About";
        RegisterPage();
    }

    render()
    {
        return (
            <div className="AboutPage-root">
                <p>This website was created to provide a quick reference for the aircraft and weapons available in Digital Combat Simulator.</p>

                <p>The data presented on this website is only applicable to DCS and does not necessarily reflect any real-world characteristics of the various aircraft and weapons.</p>
                <p>This is a hobby project and is in no way affiliated with Eagle Dynamics.</p>

                <p>You can find the GitHub project <a href="https://github.com/Gron-HD/dcs-DB">here</a>.</p>
                <p>This will always remain free and without ads.</p>

                <p>This website was originally created by <a href="https://github.com/Dzsek">dzsek</a>. However, he took his project down, and now <a href="https://github.com/Gron-HD">I</a> am continuing it.</p>
            </div>

        );
    }
}

export default AboutPage;
