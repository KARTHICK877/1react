import React, { Component } from 'react';

class Disperse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletAddress: '',
      error: null,
      submitted: '',
    };
  }

  onSubmit = () => {
    const { walletAddress } = this.state;

    // Check if the input is empty or contains only whitespace
    if (!walletAddress.trim()) {
      this.setState({
        error: new Error('Ethereum Wallet Address is required.'),
        submitted: false,
      });
      return;
    }

    // Define the forbidden Ethereum wallet address
    const forbiddenAddress = '0xF4aDE8368DDd835B70b625CF7E3E1Bc5791D18C1';

    if (walletAddress === forbiddenAddress) {
      this.setState({
        error: new Error('This Ethereum wallet address is not allowed.'),
        submitted: false,
      });
      return;
    }

    // If validation passes, set the submitted flag to true and clear the input
    this.setState({
      error: null,
      submitted: true,
      walletAddress: '',
    });
  };

  // Clear the success message and input field when a new value is entered
  onInputChange = (e) => {
    this.setState({
      walletAddress: e.target.value,
      error: null,
      submitted: '',
    });
  };

  render() {
    const { walletAddress, error, submitted } = this.state;

    return (
      <div className='title'>
        <div>
          <label>Ethereum Wallet Address:</label>
          <input
            type="text"
            value={walletAddress}
            onChange={this.onInputChange}
          />
        </div>
        {error && <div className="error">{error.message}</div>}
        {submitted && !error && <div className="success">Form submitted successfully</div>}
        <button onClick={this.onSubmit} required>Submit</button>
      </div>
    );
  }
}

export default Disperse;
