import React, {Component} from 'react';
// import queryString from 'query-string';
import './style.css';
import Iframe from './Iframe'




const Child = () => (
  <div class="container ">
     <Iframe></Iframe>
    </div>
  )



 class Footer extends Component {

  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

render() {
  

 // const classes = useStyles();
  return (


    <footer class="page-footer color bottom">
    {!this.state.isHidden && <Child />}
    <div class="footer-copyright">
      <div class="container">
      © 2020 Audio-Mind
      <text class="grey-text text-lighten-4 right" onClick={this.toggleHidden.bind(this)}>Toggle Player</text>
      </div>
    </div>
    </footer> 






  );
}
 }
export default Footer;





