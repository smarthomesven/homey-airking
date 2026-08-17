const ProntohexDevice = require('../../lib/ProntohexDevice');

class AKSF40BKDevice extends ProntohexDevice {
  static SIGNAL_ID = 'aksf40bk';  
  static CAPABILITIES = {
    onoff: {
      'true': 'power',
      'false': 'power',
    },
    speed: 'speed',
    timer: 'timer',
  }

  async onInit() {
    await super.onInit();
    
    // Add any additional initialization here
    this.log('AKSF40BK device initialized');
  }
}

module.exports = AKSF40BKDevice;