import React from 'react';

export class Input extends React.Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    type: 'text'
  };

  handleChange = (e) => {

    let value = e.target.value;

    this.props.onChange({
      value,
      name: this.props.name
    });
  };

  render() { 

    let input = this.props.type === 'textarea' ? (
      <textarea
        autoComplete="off"
        id={this.props.id}
        type={this.props.type}
        name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange.bind(this)}/>
    ):(
      <input
        autoComplete="off"
        id={this.props.id}
        type={this.props.type} 
        name={this.props.name} 
        value={this.props.value}
        onChange={this.handleChange.bind(this)}/>
    );

    return (
      <div className="inputComponent">
        <label htmlFor={this.props.id}>{this.props.placeholder}</label>
        {input}
      </div>
    );
  }
}
