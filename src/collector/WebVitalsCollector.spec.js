import WebVitalsCollector from './WebVitalsCollector.js';

describe('WebVitalsCollector', () => {
  const originalEvent = {
    id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
    clientId: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc001',
    eventType: 'state',
    eventAction: 'load',
    eventSource: 'products/shoes/1',
    eventCategory: 'products/shoes',
    deviceType: 'mobile'
  };

  /** @type {Event} */
  const expectedEvent = {
    ...originalEvent,
    eventDuration8: null
  };
  let webVitalsCollector;

  describe('with current Web Vitals API', () => {
    beforeEach(() => {

      webVitalsCollector = new WebVitalsCollector();
    });

    test('Return event with all mandatory fields', async () => {
      /** @type {Event} */
      const actualEvent = await webVitalsCollector.prepare(originalEvent);

      expect(actualEvent).toEqual(expectedEvent);
    });

  });

  describe('with no Web Vitals API', () => {
    beforeEach(() => {
      global.window.PerformanceObserver = undefined;
      webVitalsCollector = new WebVitalsCollector();
    });

    test('Return event with all mandatory fields', async () => {
      /** @type {Event} */
      const actualEvent = await webVitalsCollector.prepare(originalEvent);
      const choppedActual = JSON.parse(JSON.stringify(actualEvent));
      delete choppedActual.eventDuration8;
      const choppedExpected = JSON.parse(JSON.stringify(expectedEvent));
      delete choppedExpected.eventDuration8;
      expect(choppedActual).toEqual(choppedExpected);
    });


    test('Return correct web vitals', async () => {
      /** @type {Event} */
      const actualEvent = await webVitalsCollector.prepare(originalEvent);

      expect(actualEvent.eventDuration8).toEqual(null);
    });
  });
});
