const Homey = require('homey');

class AKSF40BKDriver extends Homey.Driver {

    async onInit() {
        this.log("Driver init");
        const speed = this.homey.flow.getActionCard('speed');
        speed.registerRunListener(async (args, state) => {
            const device = args.device;
            await device.sendCommand('speed');
        });
        const timer = this.homey.flow.getActionCard('timer');
        timer.registerRunListener(async (args, state) => {
            const device = args.device;
            await device.sendCommand('timer');
        });
    }
  
}

module.exports = AKSF40BKDriver;