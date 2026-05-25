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
    
    // Optional: You can also send commands directly
    // await this.sendCommand('row4_btn1');
    const speed = this.homey.flow.getActionCard('speed');
    speed.registerRunListener(async (args, state) => {
      await this.sendCommand('speed');
    });
    const timer = this.homey.flow.getActionCard('timer');
    timer.registerRunListener(async (args, state) => {
      await this.sendCommand('timer');
    });
  }
}

module.exports = AKSF40BKDevice;