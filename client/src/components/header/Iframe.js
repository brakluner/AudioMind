import React, {Component} from 'react';

import queryString from 'query-string';

//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
//import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from "@material-ui/core/Grid";








 class Iframe extends Component {

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
    <div className="App">
      <header className="App-header">


      <Grid container spacing={3}>
      <Grid item xs={2}>
      <FormControl>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Genres">
            <option onClick = {this.Country_Evolution}>Country</option>
            <option onClick = {this.World_Music}>World Music</option>
           <option onClick = {this.Retrowave} >Retrowave</option>
            <option onClick = {this.Classic_Rock}>Rock</option>
            <option onClick = {this.EDM_Hits}>EDM Hits</option>
          </optgroup>
        </Select>
      </FormControl> 
      </Grid>
      <Grid item xs={10}>
      <iframe src={[this.state.musicURL]} width="300" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

      </Grid>

      </Grid>


      
        {/* <button onClick = {()=>window.location='http://localhost:8888/login'} style = {{ padding: '20px',margin: '10px','font-size':'30px'}}>Login</button> */}
  {/* <h1>{this.state.serverData.user && this.state.serverData.user.name}'s Playlist</h1>
  <Aggregate playlists={    this.state.serverData.user && this.state.serverData.user.playlists}/> */}
  <button onClick = {this.Country_Evolution} style = {{ padding: '20px', margin: '10px', 'font-size':'12px'}}>Country_Evolution</button>
  <button onClick = {this.World_Music} style = {{ padding: '20px', margin: '10px', 'font-size':'12px'}}>World Music Lounge</button>
  <button onClick = {this.Retrowave} style = {{ padding: '20px', margin: '10px', 'font-size':'12px'}}>Retrowave</button>
  <button onClick = {this.Classic_Rock} style = {{ padding: '20px', margin: '10px', 'font-size':'12px'}}>Classic Rock</button>

  <button onClick = {this.EDM_Hits} style = {{ padding: '20px', margin: '10px', 'font-size':'12px'}}>EDM Hits 2020</button>

  
  {/* <button onClick = {()=>window.location='http://localhost:8888/login'} style = {{ padding: '20px','font-size':'50px'}}>Artist</button> */}
        
        {/* //https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/1539950/favorites
        https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp
        album/1DFixLWuPkv3KT3TnV35m3
        artist/2BTZIqw0ntH9MvilQ3ewNY */}
        


        
        
       
        
      </header>
    </div>
  );
}
 }
export default Iframe;
