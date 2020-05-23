import React, {Component} from 'react';
import queryString from 'query-string';
import './style.css';








 class Footer extends Component {

constructor() {
  

  super();
  this.state={
    musicURL : 'https://open.spotify.com/embed/playlist/5BygwTQ3OrbiwVsQhXFHMz?si'
  }
}
New_Song=()=> {
  this.setState({
    musicURL: 'https://open.spotify.com/embed/track/65ES1qwOB577ZnTkizMXJJ?si'
  })
}

Country_Evolution=()=> {
  this.setState({
    musicURL: 'https://open.spotify.com/embed/album/5qyHpJ8GtjKj3acZvWiJX5?si'
    
    
  })
}
World_Music=()=> {
  this.setState({
    
    musicURL: 'https://open.spotify.com/embed/album/01j2IRpQrCf7T8I40ZCjnj?si'
  })
}
Retrowave=()=> {
  this.setState({
    musicURL: 'https://open.spotify.com/embed/album/37EOCsypjdUNgibSwlb6LC?si'
  })
}
Classic_Rock=()=> {
  this.setState({
    musicURL: 'https://open.spotify.com/embed/playlist/5BygwTQ3OrbiwVsQhXFHMz?si'
  })
}
EDM_Hits=()=> {
  this.setState({
    musicURL: 'https://open.spotify.com/embed/playlist/3Di88mvYplBtkDBIzGLiiM?si'
  })
}


Test=()=> {
  this.setState({
    musicURL: 'https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3'
  })
}






  state = {
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getImageName = () => this.state.open ? 'plus' : 'minus'
  
  //  constructor() {
  //    super();
  //    this.state = {
  //      serverData: {},
  //      filterString: ''
  //    }
  // }

  // albumFunction = () => {
  //   this.setState({musicData: 'album/1DFixLWuPkv3KT3TnV35m3'})
    
  // }

 componentDidMount() {
  // this.setState({serverData: fakeServerData});
   let parsed = queryString.parse(window.location.search);
   console.log(parsed);
   let accessToken = parsed.access_token

   fetch('https://api.spotify.com/v1/me', {headers: {
     'Authorization':'Bearer ' + accessToken
   }}).then((response) =>
     response.json()
   )
   .then(data => this.setState({serverData: {user: {name: data.display_name}}}, console.log(data)))
 
   fetch('https://api.spotify.com/v1/me/playlists', {headers: {
    'Authorization':'Bearer ' + accessToken
  }}).then((response) =>
    response.json()
  )
  .then(data => this.setState({serverData: {user: {playlists: data.items}}}, console.log(data)))
 
 
 
  }
  

// render() {
  
// }



// }


render() {
  

 // const classes = useStyles();
  return (


    <footer class="page-footer color bottom">
    <div class="container ">
      <div class="row">
        <div class="col l6 s12">
        <iframe src={[this.state.musicURL]} width="300" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div class="col l4 offset-l2 s12">
          
          <ul>
            
            <li><text onClick = {this.Country_Evolution} style = {{ padding: '20px', margin: '10px', 'font-size':'12px'}}>Country Evolution</text></li>
            <li><text onClick = {this.World_Music} style = {{ padding: '20px', margin: '10px', 'font-size':'12px'}}>World Music Lounge</text></li>
            <li>  <text onClick = {this.Retrowave} style = {{ padding: '20px', margin: '10px', 'font-size':'12px'}}>Retrowave</text>
</li>
            <li> <text onClick = {this.Classic_Rock} style = {{ padding: '20px', margin: '10px', 'font-size':'12px'}}>Classic Rock</text></li>
            <li>  <text onClick = {this.EDM_Hits} style = {{ padding: '20px', margin: '10px', 'font-size':'12px'}}>EDM Hits 2020</text></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © 2020 Audio-Mind
      <a class="grey-text text-lighten-4 right" href="#!">Toggle Player</a>
      </div>
    </div>
    </footer> 






  );
}
 }
export default Footer;





