var alt = require('../../../alt');

class RepairActions {
  fetchProductLines() {
    this.dispatch();
  }
}

module.exports = alt.createActions(RepairActions);
