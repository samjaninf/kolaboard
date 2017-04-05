import React from 'react';
var {Link, IndexLink} = require("react-router");
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import LoginDialog from 'app/components/loginmodal.jsx';
import SignupDialog from 'app/components/signupmodal.jsx';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Scrollbars } from 'react-custom-scrollbars';
var Infinite = require('react-infinite');


/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
const styleimg = {
    width:"30%" ,
    height:"350px",
}
const scrollx = {

overflowX: 'hidden',

}
const style = {
textAlign: 'center',
    letterSpacing: '2px',

}

const aligncenter = 
{
    textAlign: 'center',
    fontSize: '18px',
    wordSpacing: '0.5px',

}
const aligncentercollaborate = 
{
    textAlign: 'center',
    wordSpacing: '0.5px',

}

export default class Homepage extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
 }

  componentDidMount () {
          this.myFunc();

  }
   myFunc()   {
        document.addEventListener("DOMContentLoaded", function() {
            Typed.new(".element", {
                strings: ["<em> for teams.</em>", " <em>for students.</em>", "<em> for developers. </em>"],
                typeSpeed: 30, // typing speed
                loop: !0, // here
                backSpeed: 20,
                startDelay: 60,
                backDelay: 1200,
                showCursor: true

            });
        });
    }
    openLogin(){
       return(
           <LoginDialog/>
       ); 
    }
       openSignUp(){
       return(
           <SignupDialog title="Sign Up! it's free"/>
       ); 
    }
render()
{
 

return (
     <MuiThemeProvider>
    <div style={scrollx}>
     {/*<Scrollbars style={{  }}>*/}

<div>
       
<div className="firstPage">
    <h2 style={style}> A Collaboration app <strong className="element typewriteColor" ></strong></h2>
<br/>
<br/>
<p style={aligncenter}>Kolaboard lets you organize and prioritize your tasks <br/> making collaboration easier and more fun.</p>
<br/>

  <SignupDialog title="Sign Up now! It's free" labelColor="white" backgroundColor="#00E676"  />

<br/>
<br/>
</div>
<p style={aligncenter}>Already using kolaboard? <a>Login</a>
 </p>
</div>
<br/>
<br/>
<br/>

<div className="thirdPage">
{/*<h2 style={style}>Another heading probably?</h2>*/}
<h4 style={aligncentercollaborate}>Easier to communicate and collaborate<br/>with noteboards</h4>
<br/>
<br/>
<img src="noticeboard2.png" alt="Mountain View" style={styleimg}/>
{/*<img src="noticeboard.jpg" alt="Mountain View" style={styleimg}/>*/}
<br/>
<br/>
<br/>
<br/>
</div>
<div className="fourthPage">
    <br/>
<h1>How it works?</h1>
<br/>
<p style={aligncenter}>Watch the simple one minute explainer for<br/> kolaboard </p>
<br/>
{/*<video width="450" controls>
  <source src="test.mp4" type="video/mp4"/>
</video>*/}
{/*
  <object data="https://youtu.be/M1kz70Vgm94"
   width="450" height="315"></object>*/}

<iframe width="600" height="315" src="https://www.youtube.com/embed/M1kz70Vgm94" frameborder="0" allowfullscreen></iframe>
<br/>
<br/>
</div>

<div className="secondPage">
<h2 style={style}>What are you waiting for?</h2>
<br/>
<br/>
<br/>
<br/>
<p style={aligncenter }>Sign Up for free and enjoy all the exclusive features<br/>of kolaboard</p>
<br/>
<br/>
  <SignupDialog title="Sign Up now! It's free"/>
<br/>
<br/>
<br/>
<p style={aligncenter}>Already using kolaboard? <a>Login</a>
 </p>
 <br/>
 <br/>
            <div>
            <a>&nbsp; Tour &nbsp;</a>
             <a>&nbsp; Blog &nbsp;</a>  
            <a>&nbsp; About &nbsp;</a>
            <a>&nbsp; Help &nbsp;</a>
            </div>
            <br/>
            <br/>
            <p>&copy; copyright 2017 Kolaboard</p>
</div>
<br/>
<br/>
<br/>
  {/*</Scrollbars>*/}
</div>
</MuiThemeProvider>
 )
  
};
}