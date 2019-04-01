import UserAgentParser from './utility/UserAgentParser';
export default class DeviceTypeCollector extends UserAgentParser{

  constructor() {
    super();
  }

  async prepare (event) {
    const device = this.parser.getDevice();
    event.deviceType = device.type;
    return event;
  }

}