import React, {Component} from "react";


class Name extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
  
  return (
<div class="row">
      <form class="col s12" onSubmit={this.handleSubmit}>
          <div class = "row">
              <h3>Change Name</h3>
          </div>
        <div class="row">
          <div class="input-field col s6">
            <input type="text" value={this.state.value} onChange={this.handleChange} id="input_text" type="text" data-length="10"/>
            <label for="input_text">Input text</label>
          </div>
        </div>
        <div class = "row">
        <button class="btn waves-effect waves-light" type="submit" value = "Submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
        </div>
        
      </form>
    </div>

    
   
  );
  }
}

export default Name;