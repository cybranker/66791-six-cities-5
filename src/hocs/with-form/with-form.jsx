import React, {PureComponent} from "react";

const withForm = (Component) => {
  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {};

      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          stateForm={this.state}
          onFieldChange={this.handleFieldChange}
        />
      );
    }
  }

  return WithForm;
};

export default withForm;
