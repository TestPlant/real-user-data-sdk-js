import {Collector} from './core/Collector.js';
import {Transport} from './core/Transport.js';
import {EVENT_TYPE} from './core/constants.js';
import {clientIdFromLocalStorageCollector} from "./collectors/clientIdFromLocalStorageCollector";
import {errorCollector} from "./collectors/errorCollector";
import {eventActionCollector} from "./collectors/eventActionCollector";
import {eventTypeCollector} from "./collectors/eventTypeCollector";
import {default as UriWithCustomCategoryCollector} from "./collectors/UriWithCustomCategoryCollector"
import {default as UriWithPathCategoryCollector} from "./collectors/UriWithPathCategoryCollector"

const collectors = {
  clientIdFromLocalStorageCollector: clientIdFromLocalStorageCollector,
  errorCollector: errorCollector,
  eventActionCollector: eventActionCollector,
  eventTypeCollector: eventTypeCollector,
  UriWithCustomCategoryCollector: UriWithCustomCategoryCollector,
  UriWithPathCategoryCollector: UriWithPathCategoryCollector
};

export {
  Collector,
  EVENT_TYPE,
  collectors,
  Transport
};