import alt from '../../../alt';
import axios from 'axios';
import RepairActions from '../actions/RepairActions';

class RepairStore {
  constructor() {
    this.productLines = [];

    this.bindListeners({
      handleFetchProductLines: RepairActions.FETCH_PRODUCT_LINES
    });
  }

  handleFetchProductLines() {
    axios.get('https://localhost:8443/v2/api/devices/')
      .then( (response) => {
        console.log(response);
        //this.productLines = response.data.devices;
        this.setState({productLines: response.data.devices});
      })
      .catch( (response) => {
        console.log(response);
      });
  }
}

module.exports = alt.createStore(RepairStore, 'RepairStore');
