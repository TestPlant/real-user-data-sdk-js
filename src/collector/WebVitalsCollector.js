export default class WebVitalsCollector {
  /**
     * @param {Event} event
     * @returns {Promise<*>|Event}
     */
  async prepare (event) {

    event.eventDuration8 = await this.getLargestContentfulPaint();
    return event;
  }

  /**
   * @async
   * @returns {null|Number}
   */
  getLargestContentfulPaint() {

    /** Reject is injected but never used due to the fact that
     * it should never block the main thread and the method loop */
    return new Promise(((resolve) => {
      try {

        let lcp;
        const po = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];

          /**
          Update `lcp` to the latest value, using `renderTime` if it's available,
          otherwise using `loadTime`. (Note: `renderTime` may not be available if
          the element is an image and it's loaded cross-origin without the
          `Timing-Allow-Origin` header.)
           * */
          lcp = lastEntry.renderTime || lastEntry.loadTime;
          resolve(Math.round(lcp));
        });

        /**
       * Observe entries of type `largest-contentful-paint`, including buffered
       * entries, i.e. entries that occurred before calling `observe()
       * */
        po.observe({type: 'largest-contentful-paint', buffered: true});
      } catch (e) {
        resolve(null);
      }

    }));

  }

}