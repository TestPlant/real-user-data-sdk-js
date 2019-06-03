import Sinon from 'sinon';
import TriggerHelper from './Trigger.helper';
import Producer from './Producer';

describe('TriggerHelper Unit Tests', () => {

  it('should trigger the action within the expected time frame', async () => {

    const ProducerMock = Sinon.mock(Producer);
    ProducerMock.collect = Sinon.spy();

    const delayedCondition = async function () {
      const x = Math.floor(Math.random() * 6) + 1;
      return x === 6;
    };

    const options = {
      producer: ProducerMock,
      action: TriggerHelper.action,
      condition: delayedCondition,
      interval: 10,
      timeout: 1000
    };

    await TriggerHelper.waitAndTrigger(options);

    Sinon.assert.calledOnce(ProducerMock.collect);
  });

  it('should trigger the action on timeout rather than condition being true', async () => {

    const ProducerMock = Sinon.mock(Producer);
    ProducerMock.collect = Sinon.spy();

    const action = Sinon.spy();

      const condition = Sinon.stub().returns(false);

    const options = {
      producer: ProducerMock,
      action,
      condition,
      interval: 10,
      timeout: 30
    };

    await TriggerHelper.waitAndTrigger(options);

    Sinon.assert.calledThrice(condition);
    Sinon.assert.calledOnce(action);

  });
});
