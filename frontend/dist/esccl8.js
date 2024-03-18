/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/xstate/actors/dist/xstate-actors.development.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/xstate/actors/dist/xstate-actors.development.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEmptyActor: () => (/* binding */ createEmptyActor),
/* harmony export */   fromCallback: () => (/* binding */ fromCallback),
/* harmony export */   fromEventObservable: () => (/* binding */ fromEventObservable),
/* harmony export */   fromObservable: () => (/* binding */ fromObservable),
/* harmony export */   fromPromise: () => (/* binding */ fromPromise),
/* harmony export */   fromTransition: () => (/* binding */ fromTransition)
/* harmony export */ });
/* harmony import */ var _dist_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dist/raise-80cc66b2.development.esm.js */ "./node_modules/xstate/dist/raise-80cc66b2.development.esm.js");
/* harmony import */ var _dev_dist_xstate_dev_development_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dev/dist/xstate-dev.development.esm.js */ "./node_modules/xstate/dev/dist/xstate-dev.development.esm.js");
var _excluded = ["_subscription"],
  _excluded2 = ["_subscription"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/**
 * Returns actor logic given a transition function and its initial state.
 *
 * A “transition function” is a function that takes the current `state` and received `event` object as arguments, and returns the next state, similar to a reducer.
 *
 * Actors created from transition logic (“transition actors”) can:
 *
 * - Receive events
 * - Emit snapshots of its state
 *
 * The transition function’s `state` is used as its transition actor’s `context`.
 *
 * Note that the "state" for a transition function is provided by the initial state argument, and is not the same as the State object of an actor or a state within a machine configuration.
 *
 * @param transition The transition function used to describe the transition logic. It should return the next state given the current state and event. It receives the following arguments:
 * - `state` - the current state.
 * - `event` - the received event.
 * - `actorScope` - the actor scope object, with properties like `self` and `system`.
 * @param initialContext The initial state of the transition function, either an object representing the state, or a function which returns a state object. If a function, it will receive as its only argument an object with the following properties:
 * - `input` - the `input` provided to its parent transition actor.
 * - `self` - a reference to its parent transition actor.
 * @see {@link https://stately.ai/docs/input | Input docs} for more information about how input is passed
 * @returns Actor logic
 *
 * @example
 * ```ts
 * const transitionLogic = fromTransition(
 *   (state, event) => {
 *     if (event.type === 'increment') {
 *       return {
 *         ...state,
 *         count: state.count + 1,
 *       };
 *     }
 *     return state;
 *   },
 *   { count: 0 },
 * );
 *
 * const transitionActor = createActor(transitionLogic);
 * transitionActor.subscribe((snapshot) => {
 *   console.log(snapshot);
 * });
 * transitionActor.start();
 * // => {
 * //   status: 'active',
 * //   context: { count: 0 },
 * //   ...
 * // }
 *
 * transitionActor.send({ type: 'increment' });
 * // => {
 * //   status: 'active',
 * //   context: { count: 1 },
 * //   ...
 * // }
 * ```
 */
function fromTransition(_transition, initialContext) {
  return {
    config: _transition,
    transition: function transition(snapshot, event, actorScope) {
      return _objectSpread(_objectSpread({}, snapshot), {}, {
        context: _transition(snapshot.context, event, actorScope)
      });
    },
    getInitialSnapshot: function getInitialSnapshot(_, input) {
      return {
        status: 'active',
        output: undefined,
        error: undefined,
        context: typeof initialContext === 'function' ? initialContext({
          input: input
        }) : initialContext
      };
    },
    getPersistedSnapshot: function getPersistedSnapshot(snapshot) {
      return snapshot;
    },
    restoreSnapshot: function restoreSnapshot(snapshot) {
      return snapshot;
    }
  };
}
var instanceStates = /* #__PURE__ */new WeakMap();
/**
 * An actor logic creator which returns callback logic as defined by a callback function.
 *
 * @remarks
 * Useful for subscription-based or other free-form logic that can send events back to the parent actor.
 *
 * Actors created from callback logic (“callback actors”) can:
 * - Receive events via the `receive` function
 * - Send events to the parent actor via the `sendBack` function
 *
 * Callback actors are a bit different from other actors in that they:
 * - Do not work with `onDone`
 * - Do not produce a snapshot using `.getSnapshot()`
 * - Do not emit values when used with `.subscribe()`
 * - Can not be stopped with `.stop()`
 *
 * @param invokeCallback - The callback function used to describe the callback logic
 * The callback function is passed an object with the following properties:
 * - `receive` - A function that can send events back to the parent actor; the listener is then called whenever events are received by the callback actor
 * - `sendBack` - A function that can send events back to the parent actor
 * - `input` - Data that was provided to the callback actor
 * - `self` - The parent actor of the callback actor
 * - `system` - The actor system to which the callback actor belongs
 * The callback function can (optionally) return a cleanup function, which is called when the actor is stopped.
 * @see {@link InvokeCallback} for more information about the callback function and its object argument
 * @see {@link https://stately.ai/docs/input | Input docs} for more information about how input is passed

 * @returns Callback logic
 *
 * @example
 * ```typescript
 * const callbackLogic = fromCallback(({ sendBack, receive }) => {
 *   let lockStatus = 'unlocked';
 *
 *   const handler = (event) => {
 *     if (lockStatus === 'locked') {
 *       return;
 *     }
 *     sendBack(event);
 *   };
 *
 *   receive((event) => {
 *     if (event.type === 'lock') {
 *       lockStatus = 'locked';
 *     } else if (event.type === 'unlock') {
 *       lockStatus = 'unlocked';
 *     }
 *   });
 *
 *   document.body.addEventListener('click', handler);
 *
 *   return () => {
 *     document.body.removeEventListener('click', handler);
 *   };
 * });
 * ```
 */
function fromCallback(invokeCallback) {
  var logic = {
    config: invokeCallback,
    start: function start(state, actorScope) {
      var self = actorScope.self,
        system = actorScope.system;
      var callbackState = {
        receivers: undefined,
        dispose: undefined
      };
      instanceStates.set(self, callbackState);
      callbackState.dispose = invokeCallback({
        input: state.input,
        system: system,
        self: self,
        sendBack: function sendBack(event) {
          if (self.getSnapshot().status === 'stopped') {
            return;
          }
          if (self._parent) {
            system._relay(self, self._parent, event);
          }
        },
        receive: function receive(listener) {
          var _callbackState$receiv;
          (_callbackState$receiv = callbackState.receivers) !== null && _callbackState$receiv !== void 0 ? _callbackState$receiv : callbackState.receivers = new Set();
          callbackState.receivers.add(listener);
        }
      });
    },
    transition: function transition(state, event, actorScope) {
      var _callbackState$receiv2;
      var callbackState = instanceStates.get(actorScope.self);
      if (event.type === _dist_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.X) {
        var _callbackState$dispos;
        state = _objectSpread(_objectSpread({}, state), {}, {
          status: 'stopped',
          error: undefined
        });
        (_callbackState$dispos = callbackState.dispose) === null || _callbackState$dispos === void 0 || _callbackState$dispos.call(callbackState);
        return state;
      }
      (_callbackState$receiv2 = callbackState.receivers) === null || _callbackState$receiv2 === void 0 || _callbackState$receiv2.forEach(function (receiver) {
        return receiver(event);
      });
      return state;
    },
    getInitialSnapshot: function getInitialSnapshot(_, input) {
      return {
        status: 'active',
        output: undefined,
        error: undefined,
        input: input
      };
    },
    getPersistedSnapshot: function getPersistedSnapshot(snapshot) {
      return snapshot;
    },
    restoreSnapshot: function restoreSnapshot(snapshot) {
      return snapshot;
    }
  };
  return logic;
}
var XSTATE_OBSERVABLE_NEXT = 'xstate.observable.next';
var XSTATE_OBSERVABLE_ERROR = 'xstate.observable.error';
var XSTATE_OBSERVABLE_COMPLETE = 'xstate.observable.complete';
/**
 * Observable actor logic is described by an observable stream of values. Actors created from observable logic (“observable actors”) can:
 *
 * - Emit snapshots of the observable’s emitted value
 *
 * The observable’s emitted value is used as its observable actor’s `context`.
 *
 * Sending events to observable actors will have no effect.
 *
 * @param observableCreator A function that creates an observable. It receives one argument, an object with the following properties:
 * - `input` - Data that was provided to the observable actor
 * - `self` - The parent actor
 * - `system` - The actor system to which the observable actor belongs
 *
 * It should return a {@link Subscribable}, which is compatible with an RxJS Observable, although RxJS is not required to create them.
 *
 * @example
 * ```ts
 * import { fromObservable, createActor } from 'xstate'
 * import { interval } from 'rxjs';
 *
 * const logic = fromObservable((obj) => interval(1000));
 *
 * const actor = createActor(logic);
 *
 * actor.subscribe((snapshot) => {
 *   console.log(snapshot.context);
 * });
 *
 * actor.start();
 * // At every second:
 * // Logs 0
 * // Logs 1
 * // Logs 2
 * // ...
 * ```
 *
 * @see {@link https://rxjs.dev} for documentation on RxJS Observable and observable creators.
 * @see {@link Subscribable} interface in XState, which is based on and compatible with RxJS Observable.
 */
function fromObservable(observableCreator) {
  // TODO: add event types
  var logic = {
    config: observableCreator,
    transition: function transition(snapshot, event, _ref) {
      var self = _ref.self,
        id = _ref.id,
        defer = _ref.defer,
        system = _ref.system;
      if (snapshot.status !== 'active') {
        return snapshot;
      }
      switch (event.type) {
        case XSTATE_OBSERVABLE_NEXT:
          {
            var newSnapshot = _objectSpread(_objectSpread({}, snapshot), {}, {
              context: event.data
            });
            return newSnapshot;
          }
        case XSTATE_OBSERVABLE_ERROR:
          return _objectSpread(_objectSpread({}, snapshot), {}, {
            status: 'error',
            error: event.data,
            input: undefined,
            _subscription: undefined
          });
        case XSTATE_OBSERVABLE_COMPLETE:
          return _objectSpread(_objectSpread({}, snapshot), {}, {
            status: 'done',
            input: undefined,
            _subscription: undefined
          });
        case _dist_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.X:
          snapshot._subscription.unsubscribe();
          return _objectSpread(_objectSpread({}, snapshot), {}, {
            status: 'stopped',
            input: undefined,
            _subscription: undefined
          });
        default:
          return snapshot;
      }
    },
    getInitialSnapshot: function getInitialSnapshot(_, input) {
      return {
        status: 'active',
        output: undefined,
        error: undefined,
        context: undefined,
        input: input,
        _subscription: undefined
      };
    },
    start: function start(state, _ref2) {
      var self = _ref2.self,
        system = _ref2.system;
      if (state.status === 'done') {
        // Do not restart a completed observable
        return;
      }
      state._subscription = observableCreator({
        input: state.input,
        system: system,
        self: self
      }).subscribe({
        next: function next(value) {
          system._relay(self, self, {
            type: XSTATE_OBSERVABLE_NEXT,
            data: value
          });
        },
        error: function error(err) {
          system._relay(self, self, {
            type: XSTATE_OBSERVABLE_ERROR,
            data: err
          });
        },
        complete: function complete() {
          system._relay(self, self, {
            type: XSTATE_OBSERVABLE_COMPLETE
          });
        }
      });
    },
    getPersistedSnapshot: function getPersistedSnapshot(_ref3) {
      var _subscription = _ref3._subscription,
        state = _objectWithoutProperties(_ref3, _excluded);
      return state;
    },
    restoreSnapshot: function restoreSnapshot(state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        _subscription: undefined
      });
    }
  };
  return logic;
}

/**
 * Creates event observable logic that listens to an observable that delivers event objects.
 *
 * Event observable actor logic is described by an observable stream of {@link https://stately.ai/docs/transitions#event-objects | event objects}. Actors created from event observable logic (“event observable actors”) can:
 *
 * - Implicitly send events to its parent actor
 * - Emit snapshots of its emitted event objects
 *
 * Sending events to event observable actors will have no effect.
 *
 * @param lazyObservable A function that creates an observable that delivers event objects. It receives one argument, an object with the following properties:
 *
 * - `input` - Data that was provided to the event observable actor
 * - `self` - The parent actor
 * - `system` - The actor system to which the event observable actor belongs.
 *
 * It should return a {@link Subscribable}, which is compatible with an RxJS Observable, although RxJS is not required to create them.
 *
 * @example
 * ```ts
 * import {
 *   fromEventObservable,
 *   Subscribable,
 *   EventObject,
 *   createMachine,
 *   createActor
 * } from 'xstate';
 * import { fromEvent } from 'rxjs';
 *
 * const mouseClickLogic = fromEventObservable(() =>
 *   fromEvent(document.body, 'click') as Subscribable<EventObject>
 * );
 *
 * const canvasMachine = createMachine({
 *   invoke: {
 *     // Will send mouse `click` events to the canvas actor
 *     src: mouseClickLogic,
 *   }
 * });
 *
 * const canvasActor = createActor(canvasMachine);
 * canvasActor.start();
 * ```
 */
function fromEventObservable(lazyObservable) {
  // TODO: event types
  var logic = {
    config: lazyObservable,
    transition: function transition(state, event) {
      if (state.status !== 'active') {
        return state;
      }
      switch (event.type) {
        case XSTATE_OBSERVABLE_ERROR:
          return _objectSpread(_objectSpread({}, state), {}, {
            status: 'error',
            error: event.data,
            input: undefined,
            _subscription: undefined
          });
        case XSTATE_OBSERVABLE_COMPLETE:
          return _objectSpread(_objectSpread({}, state), {}, {
            status: 'done',
            input: undefined,
            _subscription: undefined
          });
        case _dist_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.X:
          state._subscription.unsubscribe();
          return _objectSpread(_objectSpread({}, state), {}, {
            status: 'stopped',
            input: undefined,
            _subscription: undefined
          });
        default:
          return state;
      }
    },
    getInitialSnapshot: function getInitialSnapshot(_, input) {
      return {
        status: 'active',
        output: undefined,
        error: undefined,
        context: undefined,
        input: input,
        _subscription: undefined
      };
    },
    start: function start(state, _ref4) {
      var self = _ref4.self,
        system = _ref4.system;
      if (state.status === 'done') {
        // Do not restart a completed observable
        return;
      }
      state._subscription = lazyObservable({
        input: state.input,
        system: system,
        self: self
      }).subscribe({
        next: function next(value) {
          if (self._parent) {
            system._relay(self, self._parent, value);
          }
        },
        error: function error(err) {
          system._relay(self, self, {
            type: XSTATE_OBSERVABLE_ERROR,
            data: err
          });
        },
        complete: function complete() {
          system._relay(self, self, {
            type: XSTATE_OBSERVABLE_COMPLETE
          });
        }
      });
    },
    getPersistedSnapshot: function getPersistedSnapshot(_ref5) {
      var _subscription = _ref5._subscription,
        snapshot = _objectWithoutProperties(_ref5, _excluded2);
      return snapshot;
    },
    restoreSnapshot: function restoreSnapshot(snapshot) {
      return _objectSpread(_objectSpread({}, snapshot), {}, {
        _subscription: undefined
      });
    }
  };
  return logic;
}
var XSTATE_PROMISE_RESOLVE = 'xstate.promise.resolve';
var XSTATE_PROMISE_REJECT = 'xstate.promise.reject';
/**
 * An actor logic creator which returns promise logic as defined by an async process that resolves or rejects after some time.
 *
 * Actors created from promise actor logic (“promise actors”) can:
 * - Emit the resolved value of the promise
 * - Output the resolved value of the promise
 *
 * Sending events to promise actors will have no effect.
 *
 * @param promiseCreator
 *   A function which returns a Promise, and accepts an object with the following properties:
 *   - `input` - Data that was provided to the promise actor
 *   - `self` - The parent actor of the promise actor
 *   - `system` - The actor system to which the promise actor belongs
 * @see {@link https://stately.ai/docs/input | Input docs} for more information about how input is passed
 *
 * @example
 * ```ts
 * const promiseLogic = fromPromise(async () => {
 *   const result = await fetch('https://example.com/...')
 *     .then((data) => data.json());
 *
 *   return result;
 * });
 *
 * const promiseActor = createActor(promiseLogic);
 * promiseActor.subscribe((snapshot) => {
 *   console.log(snapshot);
 * });
 * promiseActor.start();
 * // => {
 * //   output: undefined,
 * //   status: 'active'
 * //   ...
 * // }
 *
 * // After promise resolves
 * // => {
 * //   output: { ... },
 * //   status: 'done',
 * //   ...
 * // }
 * ```
 */
function fromPromise(promiseCreator) {
  var logic = {
    config: promiseCreator,
    transition: function transition(state, event) {
      if (state.status !== 'active') {
        return state;
      }
      switch (event.type) {
        case XSTATE_PROMISE_RESOLVE:
          {
            var resolvedValue = event.data;
            return _objectSpread(_objectSpread({}, state), {}, {
              status: 'done',
              output: resolvedValue,
              input: undefined
            });
          }
        case XSTATE_PROMISE_REJECT:
          return _objectSpread(_objectSpread({}, state), {}, {
            status: 'error',
            error: event.data,
            input: undefined
          });
        case _dist_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.X:
          return _objectSpread(_objectSpread({}, state), {}, {
            status: 'stopped',
            input: undefined
          });
        default:
          return state;
      }
    },
    start: function start(state, _ref6) {
      var self = _ref6.self,
        system = _ref6.system;
      // TODO: determine how to allow customizing this so that promises
      // can be restarted if necessary
      if (state.status !== 'active') {
        return;
      }
      var resolvedPromise = Promise.resolve(promiseCreator({
        input: state.input,
        system: system,
        self: self
      }));
      resolvedPromise.then(function (response) {
        if (self.getSnapshot().status !== 'active') {
          return;
        }
        system._relay(self, self, {
          type: XSTATE_PROMISE_RESOLVE,
          data: response
        });
      }, function (errorData) {
        if (self.getSnapshot().status !== 'active') {
          return;
        }
        system._relay(self, self, {
          type: XSTATE_PROMISE_REJECT,
          data: errorData
        });
      });
    },
    getInitialSnapshot: function getInitialSnapshot(_, input) {
      return {
        status: 'active',
        output: undefined,
        error: undefined,
        input: input
      };
    },
    getPersistedSnapshot: function getPersistedSnapshot(snapshot) {
      return snapshot;
    },
    restoreSnapshot: function restoreSnapshot(snapshot) {
      return snapshot;
    }
  };
  return logic;
}
var emptyLogic = fromTransition(function (_) {
  return undefined;
}, undefined);
function createEmptyActor() {
  return (0,_dist_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.A)(emptyLogic);
}


/***/ }),

/***/ "./node_modules/xstate/dev/dist/xstate-dev.development.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/xstate/dev/dist/xstate-dev.development.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   devToolsAdapter: () => (/* binding */ devToolsAdapter),
/* harmony export */   getGlobal: () => (/* binding */ getGlobal),
/* harmony export */   registerService: () => (/* binding */ registerService)
/* harmony export */ });
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
function getGlobal() {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof __webpack_require__.g !== 'undefined') {
    return __webpack_require__.g;
  }
  {
    console.warn('XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues');
  }
}
function getDevTools() {
  var w = getGlobal();
  if (!!w.__xstate__) {
    return w.__xstate__;
  }
  return undefined;
}
function registerService(service) {
  if (typeof window === 'undefined') {
    return;
  }
  var devTools = getDevTools();
  if (devTools) {
    devTools.register(service);
  }
}
var devToolsAdapter = function devToolsAdapter(service) {
  if (typeof window === 'undefined') {
    return;
  }
  var devTools = getDevTools();
  if (devTools) {
    devTools.register(service);
  }
};


/***/ }),

/***/ "./node_modules/xstate/dist/log-0fbf8cec.development.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/xstate/dist/log-0fbf8cec.development.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SpecialTargets),
/* harmony export */   a: () => (/* binding */ assign),
/* harmony export */   b: () => (/* binding */ enqueueActions),
/* harmony export */   c: () => (/* binding */ sendTo),
/* harmony export */   e: () => (/* binding */ emit),
/* harmony export */   f: () => (/* binding */ forwardTo),
/* harmony export */   l: () => (/* binding */ log),
/* harmony export */   s: () => (/* binding */ sendParent)
/* harmony export */ });
/* harmony import */ var _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raise-80cc66b2.development.esm.js */ "./node_modules/xstate/dist/raise-80cc66b2.development.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// it's likely-ish that `(TActor & { src: TSrc })['logic']` would be faster
// but it's only possible to do it since https://github.com/microsoft/TypeScript/pull/53098 (TS 5.1)
// and we strive to support TS 5.0 whenever possible
function createSpawner(actorScope, _ref, event, spawnedChildren) {
  var machine = _ref.machine,
    context = _ref.context;
  var spawn = function spawn(src) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var systemId = options.systemId,
      input = options.input;
    if (typeof src === 'string') {
      var logic = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.z)(machine, src);
      if (!logic) {
        throw new Error("Actor logic '".concat(src, "' not implemented in machine '").concat(machine.id, "'"));
      }
      var actorRef = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.A)(logic, {
        id: options.id,
        parent: actorScope.self,
        syncSnapshot: options.syncSnapshot,
        input: typeof input === 'function' ? input({
          context: context,
          event: event,
          self: actorScope.self
        }) : input,
        src: src,
        systemId: systemId
      });
      spawnedChildren[actorRef.id] = actorRef;
      return actorRef;
    } else {
      var _actorRef = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.A)(src, {
        id: options.id,
        parent: actorScope.self,
        syncSnapshot: options.syncSnapshot,
        input: options.input,
        src: src,
        systemId: systemId
      });
      return _actorRef;
    }
  };
  return function (src, options) {
    var actorRef = spawn(src, options); // TODO: fix types
    spawnedChildren[actorRef.id] = actorRef;
    actorScope.defer(function () {
      if (actorRef._processingStatus === _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.T.Stopped) {
        return;
      }
      actorRef.start();
    });
    return actorRef;
  };
}
function resolveAssign(actorScope, snapshot, actionArgs, actionParams, _ref2) {
  var assignment = _ref2.assignment;
  if (!snapshot.context) {
    throw new Error('Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.');
  }
  var spawnedChildren = {};
  var assignArgs = {
    context: snapshot.context,
    event: actionArgs.event,
    spawn: createSpawner(actorScope, snapshot, actionArgs.event, spawnedChildren),
    self: actorScope.self,
    system: actorScope.system
  };
  var partialUpdate = {};
  if (typeof assignment === 'function') {
    partialUpdate = assignment(assignArgs, actionParams);
  } else {
    for (var _i = 0, _Object$keys = Object.keys(assignment); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      var propAssignment = assignment[key];
      partialUpdate[key] = typeof propAssignment === 'function' ? propAssignment(assignArgs, actionParams) : propAssignment;
    }
  }
  var updatedContext = Object.assign({}, snapshot.context, partialUpdate);
  return [(0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.U)(snapshot, {
    context: updatedContext,
    children: Object.keys(spawnedChildren).length ? _objectSpread(_objectSpread({}, snapshot.children), spawnedChildren) : snapshot.children
  })];
}
/**
 * Updates the current context of the machine.
 *
 * @param assignment An object that represents the partial context to update, or a
 * function that returns an object that represents the partial context to update.
 *
 * @example
  ```ts
  import { createMachine, assign } from 'xstate';

  const countMachine = createMachine({
    context: {
      count: 0,
      message: ''
    },
    on: {
      inc: {
        actions: assign({
          count: ({ context }) => context.count + 1
        })
      },
      updateMessage: {
        actions: assign(({ context, event }) => {
          return {
            message: event.message.trim()
          }
        })
      }
    }
  });
  ```
 */
function assign(assignment) {
  function assign(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  assign.type = 'xstate.assign';
  assign.assignment = assignment;
  assign.resolve = resolveAssign;
  return assign;
}
function resolveEmit(_, snapshot, args, actionParams, _ref3) {
  var eventOrExpr = _ref3.event;
  if (typeof eventOrExpr === 'string') {
    throw new Error("Only event objects may be used with emit; use emit({ type: \"".concat(eventOrExpr, "\" }) instead"));
  }
  var resolvedEvent = typeof eventOrExpr === 'function' ? eventOrExpr(args, actionParams) : eventOrExpr;
  return [snapshot, {
    event: resolvedEvent
  }];
}
function executeEmit(actorScope, _ref4) {
  var event = _ref4.event;
  actorScope.defer(function () {
    return actorScope.emit(event);
  });
}
/**
 * Emits an event to event handlers registered on the actor via `actor.on(event, handler)`.
 *
 * @example
  ```ts
  import { emit } from 'xstate';

  const machine = createMachine({
    // ...
    on: {
      something: {
        actions: emit({
          type: 'emitted',
          some: 'data'
        })
      }
    }
    // ...
  });

  const actor = createActor(machine).start();

  actor.on('emitted', (event) => {
    console.log(event);
  });

  actor.send({ type: 'something' });
  // logs:
  // {
  //   type: 'emitted',
  //   some: 'data'
  // }
  ```
 */
function emit(
/**
 * The event to emit, or an expression that returns an event to emit.
 */
eventOrExpr) {
  function emit(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  emit.type = 'xstate.emit';
  emit.event = eventOrExpr;
  emit.resolve = resolveEmit;
  emit.execute = executeEmit;
  return emit;
}

/**
 *
 * @remarks
 *
 * `T | unknown` reduces to `unknown` and that can be problematic when it comes to contextual typing.
 * It especially is a problem when the union has a function member, like here:
 *
 * ```ts
 * declare function test(cbOrVal: ((arg: number) => unknown) | unknown): void;
 * test((arg) => {}) // oops, implicit any
 * ```
 *
 * This type can be used to avoid this problem. This union represents the same value space as `unknown`.
 */

// https://github.com/microsoft/TypeScript/issues/23182#issuecomment-379091887

/**
 * The full definition of an event, with a string `type`.
 */

/**
 * The string or object representing the state value relative to the parent state node.
 *
 * @remarks
 *
 * - For a child atomic state node, this is a string, e.g., `"pending"`.
 *
 * - For complex state nodes, this is an object, e.g., `{ success: "someChildState" }`.
 */

// TODO: remove once TS fixes this type-widening issue

/** @deprecated use `AnyMachineSnapshot` instead */

// TODO: possibly refactor this somehow, use even a simpler type, and maybe even make `machine.options` private or something
/**
 * @hidden
 */
var SpecialTargets = /*#__PURE__*/function (SpecialTargets) {
  SpecialTargets["Parent"] = "#_parent";
  SpecialTargets["Internal"] = "#_internal";
  return SpecialTargets;
}({});

/**
 * @deprecated Use `AnyActor` instead.
 */

// Based on RxJS types

/**
 * @deprecated Use `Actor<T>` instead.
 */

// only meant to be used internally for debugging purposes

/**
 * Represents logic which can be used by an actor.
 *
 * @template TSnapshot - The type of the snapshot.
 * @template TEvent - The type of the event object.
 * @template TInput - The type of the input.
 * @template TSystem - The type of the actor system.
 */

function resolveSendTo(actorScope, snapshot, args, actionParams, _ref5, extra) {
  var to = _ref5.to,
    eventOrExpr = _ref5.event,
    id = _ref5.id,
    delay = _ref5.delay;
  var delaysMap = snapshot.machine.implementations.delays;
  if (typeof eventOrExpr === 'string') {
    throw new Error("Only event objects may be used with sendTo; use sendTo({ type: \"".concat(eventOrExpr, "\" }) instead"));
  }
  var resolvedEvent = typeof eventOrExpr === 'function' ? eventOrExpr(args, actionParams) : eventOrExpr;
  var resolvedDelay;
  if (typeof delay === 'string') {
    var configDelay = delaysMap && delaysMap[delay];
    resolvedDelay = typeof configDelay === 'function' ? configDelay(args, actionParams) : configDelay;
  } else {
    resolvedDelay = typeof delay === 'function' ? delay(args, actionParams) : delay;
  }
  var resolvedTarget = typeof to === 'function' ? to(args, actionParams) : to;
  var targetActorRef;
  if (typeof resolvedTarget === 'string') {
    if (resolvedTarget === SpecialTargets.Parent) {
      targetActorRef = actorScope.self._parent;
    } else if (resolvedTarget === SpecialTargets.Internal) {
      targetActorRef = actorScope.self;
    } else if (resolvedTarget.startsWith('#_')) {
      // SCXML compatibility: https://www.w3.org/TR/scxml/#SCXMLEventProcessor
      // #_invokeid. If the target is the special term '#_invokeid', where invokeid is the invokeid of an SCXML session that the sending session has created by <invoke>, the Processor must add the event to the external queue of that session.
      targetActorRef = snapshot.children[resolvedTarget.slice(2)];
    } else {
      var _extra$deferredActorI;
      targetActorRef = (_extra$deferredActorI = extra.deferredActorIds) !== null && _extra$deferredActorI !== void 0 && _extra$deferredActorI.includes(resolvedTarget) ? resolvedTarget : snapshot.children[resolvedTarget];
    }
    if (!targetActorRef) {
      throw new Error("Unable to send event to actor '".concat(resolvedTarget, "' from machine '").concat(snapshot.machine.id, "'."));
    }
  } else {
    targetActorRef = resolvedTarget || actorScope.self;
  }
  return [snapshot, {
    to: targetActorRef,
    event: resolvedEvent,
    id: id,
    delay: resolvedDelay
  }];
}
function retryResolveSendTo(_, snapshot, params) {
  if (typeof params.to === 'string') {
    params.to = snapshot.children[params.to];
  }
}
function executeSendTo(actorScope, params) {
  // this forms an outgoing events queue
  // thanks to that the recipient actors are able to read the *updated* snapshot value of the sender
  actorScope.defer(function () {
    var to = params.to,
      event = params.event,
      delay = params.delay,
      id = params.id;
    if (typeof delay === 'number') {
      actorScope.system.scheduler.schedule(actorScope.self, to, event, delay, id);
      return;
    }
    actorScope.system._relay(actorScope.self,
    // at this point, in a deferred task, it should already be mutated by retryResolveSendTo
    // if it initially started as a string
    to, event.type === _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.V ? (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.W)(actorScope.self.id, event.data) : event);
  });
}
/**
 * Sends an event to an actor.
 *
 * @param actor The `ActorRef` to send the event to.
 * @param event The event to send, or an expression that evaluates to the event to send
 * @param options Send action options
 *  - `id` - The unique send event identifier (used with `cancel()`).
 *  - `delay` - The number of milliseconds to delay the sending of the event.
 */
function sendTo(to, eventOrExpr, options) {
  function sendTo(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  sendTo.type = 'xsnapshot.sendTo';
  sendTo.to = to;
  sendTo.event = eventOrExpr;
  sendTo.id = options === null || options === void 0 ? void 0 : options.id;
  sendTo.delay = options === null || options === void 0 ? void 0 : options.delay;
  sendTo.resolve = resolveSendTo;
  sendTo.retryResolve = retryResolveSendTo;
  sendTo.execute = executeSendTo;
  return sendTo;
}

/**
 * Sends an event to this machine's parent.
 *
 * @param event The event to send to the parent machine.
 * @param options Options to pass into the send event.
 */
function sendParent(event, options) {
  return sendTo(SpecialTargets.Parent, event, options);
}
/**
 * Forwards (sends) an event to the `target` actor.
 *
 * @param target The target actor to forward the event to.
 * @param options Options to pass into the send action creator.
 */
function forwardTo(target, options) {
  if (!target || typeof target === 'function') {
    var originalTarget = target;
    target = function target() {
      var resolvedTarget = typeof originalTarget === 'function' ? originalTarget.apply(void 0, arguments) : originalTarget;
      if (!resolvedTarget) {
        throw new Error("Attempted to forward event to undefined actor. This risks an infinite loop in the sender.");
      }
      return resolvedTarget;
    };
  }
  return sendTo(target, function (_ref6) {
    var event = _ref6.event;
    return event;
  }, options);
}
function resolveEnqueueActions(actorScope, snapshot, args, actionParams, _ref7) {
  var collect = _ref7.collect;
  var actions = [];
  var enqueue = function enqueue(action) {
    actions.push(action);
  };
  enqueue.assign = function () {
    actions.push(assign.apply(void 0, arguments));
  };
  enqueue.cancel = function () {
    actions.push(_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.M.apply(void 0, arguments));
  };
  enqueue.raise = function () {
    // for some reason it fails to infer `TDelay` from `...args` here and picks its default (`never`)
    // then it fails to typecheck that because `...args` use `string` in place of `TDelay`
    actions.push(_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.O.apply(void 0, arguments));
  };
  enqueue.sendTo = function () {
    // for some reason it fails to infer `TDelay` from `...args` here and picks its default (`never`)
    // then it fails to typecheck that because `...args` use `string` in place of `TDelay
    actions.push(sendTo.apply(void 0, arguments));
  };
  enqueue.spawnChild = function () {
    actions.push(_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.P.apply(void 0, arguments));
  };
  enqueue.stopChild = function () {
    actions.push(_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.R.apply(void 0, arguments));
  };
  enqueue.emit = function () {
    actions.push(emit.apply(void 0, arguments));
  };
  collect({
    context: args.context,
    event: args.event,
    enqueue: enqueue,
    check: function check(guard) {
      return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.e)(guard, snapshot.context, args.event, snapshot);
    },
    self: actorScope.self,
    system: actorScope.system
  }, actionParams);
  return [snapshot, undefined, actions];
}
/**
 * Creates an action object that will execute actions that are queued by the `enqueue(action)` function.
 *
 * @example
  ```ts
  import { createMachine, enqueueActions } from 'xstate';

  const machine = createMachine({
    entry: enqueueActions(({ enqueue, check }) => {
      enqueue.assign({ count: 0 });

      if (check('someGuard')) {
        enqueue.assign({ count: 1 });
      }

      enqueue('someAction');
    })
  })
  ```
 */
function enqueueActions(collect) {
  function enqueueActions(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  enqueueActions.type = 'xstate.enqueueActions';
  enqueueActions.collect = collect;
  enqueueActions.resolve = resolveEnqueueActions;
  return enqueueActions;
}
function resolveLog(_, snapshot, actionArgs, actionParams, _ref8) {
  var value = _ref8.value,
    label = _ref8.label;
  return [snapshot, {
    value: typeof value === 'function' ? value(actionArgs, actionParams) : value,
    label: label
  }];
}
function executeLog(_ref9, _ref10) {
  var logger = _ref9.logger;
  var value = _ref10.value,
    label = _ref10.label;
  if (label) {
    logger(label, value);
  } else {
    logger(value);
  }
}
/**
 *
 * @param expr The expression function to evaluate which will be logged.
 *  Takes in 2 arguments:
 *  - `ctx` - the current state context
 *  - `event` - the event that caused this action to be executed.
 * @param label The label to give to the logged expression.
 */
function log() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_ref11) {
    var context = _ref11.context,
      event = _ref11.event;
    return {
      context: context,
      event: event
    };
  };
  var label = arguments.length > 1 ? arguments[1] : undefined;
  function log(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  log.type = 'xstate.log';
  log.value = value;
  log.label = label;
  log.resolve = resolveLog;
  log.execute = executeLog;
  return log;
}


/***/ }),

/***/ "./node_modules/xstate/dist/raise-80cc66b2.development.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/xstate/dist/raise-80cc66b2.development.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $$ACTOR_TYPE),
/* harmony export */   A: () => (/* binding */ createActor),
/* harmony export */   B: () => (/* binding */ Actor),
/* harmony export */   C: () => (/* binding */ interpret),
/* harmony export */   D: () => (/* binding */ isMachineSnapshot),
/* harmony export */   E: () => (/* binding */ and),
/* harmony export */   F: () => (/* binding */ not),
/* harmony export */   G: () => (/* binding */ or),
/* harmony export */   H: () => (/* binding */ stateIn),
/* harmony export */   I: () => (/* binding */ getAllOwnEventDescriptors),
/* harmony export */   J: () => (/* binding */ matchesState),
/* harmony export */   K: () => (/* binding */ pathToStateValue),
/* harmony export */   L: () => (/* binding */ toObserver),
/* harmony export */   M: () => (/* binding */ cancel),
/* harmony export */   N: () => (/* binding */ NULL_EVENT),
/* harmony export */   O: () => (/* binding */ raise),
/* harmony export */   P: () => (/* binding */ spawnChild),
/* harmony export */   Q: () => (/* binding */ stop),
/* harmony export */   R: () => (/* binding */ stopChild),
/* harmony export */   S: () => (/* binding */ STATE_DELIMITER),
/* harmony export */   T: () => (/* binding */ ProcessingStatus),
/* harmony export */   U: () => (/* binding */ cloneMachineSnapshot),
/* harmony export */   V: () => (/* binding */ XSTATE_ERROR),
/* harmony export */   W: () => (/* binding */ createErrorActorEvent),
/* harmony export */   X: () => (/* binding */ XSTATE_STOP),
/* harmony export */   a: () => (/* binding */ toTransitionConfigArray),
/* harmony export */   b: () => (/* binding */ formatTransition),
/* harmony export */   c: () => (/* binding */ createInvokeId),
/* harmony export */   d: () => (/* binding */ formatInitialTransition),
/* harmony export */   e: () => (/* binding */ evaluateGuard),
/* harmony export */   f: () => (/* binding */ formatTransitions),
/* harmony export */   g: () => (/* binding */ getDelayedTransitions),
/* harmony export */   h: () => (/* binding */ getCandidates),
/* harmony export */   i: () => (/* binding */ getAllStateNodes),
/* harmony export */   j: () => (/* binding */ getStateNodes),
/* harmony export */   k: () => (/* binding */ createMachineSnapshot),
/* harmony export */   l: () => (/* binding */ isInFinalState),
/* harmony export */   m: () => (/* binding */ mapValues),
/* harmony export */   n: () => (/* binding */ macrostep),
/* harmony export */   o: () => (/* binding */ transitionNode),
/* harmony export */   p: () => (/* binding */ resolveActionsAndContext),
/* harmony export */   q: () => (/* binding */ createInitEvent),
/* harmony export */   r: () => (/* binding */ resolveStateValue),
/* harmony export */   s: () => (/* binding */ microstep),
/* harmony export */   t: () => (/* binding */ toArray),
/* harmony export */   u: () => (/* binding */ getInitialStateNodes),
/* harmony export */   v: () => (/* binding */ toStatePath),
/* harmony export */   w: () => (/* binding */ isStateId),
/* harmony export */   x: () => (/* binding */ getStateNodeByPath),
/* harmony export */   y: () => (/* binding */ getPersistedSnapshot),
/* harmony export */   z: () => (/* binding */ resolveReferencedActor)
/* harmony export */ });
/* harmony import */ var _dev_dist_xstate_dev_development_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dev/dist/xstate-dev.development.esm.js */ "./node_modules/xstate/dev/dist/xstate-dev.development.esm.js");
var _excluded = ["_nodes", "tags", "machine", "getMeta", "toJSON", "can", "hasTag", "matches"],
  _excluded2 = ["_nodes", "tags", "machine", "children", "context", "can", "hasTag", "matches", "getMeta", "toJSON"];
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Mailbox = /*#__PURE__*/function () {
  function Mailbox(_process) {
    _classCallCheck(this, Mailbox);
    this._process = _process;
    this._active = false;
    this._current = null;
    this._last = null;
  }
  _createClass(Mailbox, [{
    key: "start",
    value: function start() {
      this._active = true;
      this.flush();
    }
  }, {
    key: "clear",
    value: function clear() {
      // we can't set _current to null because we might be currently processing
      // and enqueue following clear shouldnt start processing the enqueued item immediately
      if (this._current) {
        this._current.next = null;
        this._last = this._current;
      }
    }
  }, {
    key: "enqueue",
    value: function enqueue(event) {
      var enqueued = {
        value: event,
        next: null
      };
      if (this._current) {
        this._last.next = enqueued;
        this._last = enqueued;
        return;
      }
      this._current = enqueued;
      this._last = enqueued;
      if (this._active) {
        this.flush();
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      while (this._current) {
        // atm the given _process is responsible for implementing proper try/catch handling
        // we assume here that this won't throw in a way that can affect this mailbox
        var consumed = this._current;
        this._process(consumed.value);
        this._current = consumed.next;
      }
      this._last = null;
    }
  }]);
  return Mailbox;
}();
var STATE_DELIMITER = '.';
var TARGETLESS_KEY = '';
var NULL_EVENT = '';
var STATE_IDENTIFIER = '#';
var WILDCARD = '*';
var XSTATE_INIT = 'xstate.init';
var XSTATE_ERROR = 'xstate.error';
var XSTATE_STOP = 'xstate.stop';

/**
 * Returns an event that represents an implicit event that
 * is sent after the specified `delay`.
 *
 * @param delayRef The delay in milliseconds
 * @param id The state node ID where this event is handled
 */
function createAfterEvent(delayRef, id) {
  return {
    type: "xstate.after.".concat(delayRef, ".").concat(id)
  };
}

/**
 * Returns an event that represents that a final state node
 * has been reached in the parent state node.
 *
 * @param id The final state node's parent state node `id`
 * @param output The data to pass into the event
 */
function createDoneStateEvent(id, output) {
  return {
    type: "xstate.done.state.".concat(id),
    output: output
  };
}

/**
 * Returns an event that represents that an invoked service has terminated.
 *
 * An invoked service is terminated when it has reached a top-level final state node,
 * but not when it is canceled.
 *
 * @param invokeId The invoked service ID
 * @param output The data to pass into the event
 */
function createDoneActorEvent(invokeId, output) {
  return {
    type: "xstate.done.actor.".concat(invokeId),
    output: output
  };
}
function createErrorActorEvent(id, error) {
  return {
    type: "xstate.error.actor.".concat(id),
    error: error
  };
}
function createInitEvent(input) {
  return {
    type: XSTATE_INIT,
    input: input
  };
}

/**
 * This function makes sure that unhandled errors are thrown in a separate macrotask.
 * It allows those errors to be detected by global error handlers and reported to bug tracking services
 * without interrupting our own stack of execution.
 *
 * @param err error to be thrown
 */
function reportUnhandledError(err) {
  setTimeout(function () {
    throw err;
  });
}
var symbolObservable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
function createScheduledEventId(actorRef, id) {
  return "".concat(actorRef.sessionId, ".").concat(id);
}
var idCounter = 0;
function createSystem(rootActor, options) {
  var _ref;
  var children = new Map();
  var keyedActors = new Map();
  var reverseKeyedActors = new WeakMap();
  var inspectionObservers = new Set();
  var timerMap = {};
  var clock = options.clock;
  var scheduler = {
    schedule: function schedule(source, target, event, delay) {
      var id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Math.random().toString(36).slice(2);
      var scheduledEvent = {
        source: source,
        target: target,
        event: event,
        delay: delay,
        id: id,
        startedAt: Date.now()
      };
      var scheduledEventId = createScheduledEventId(source, id);
      system._snapshot._scheduledEvents[scheduledEventId] = scheduledEvent;
      var timeout = clock.setTimeout(function () {
        delete timerMap[scheduledEventId];
        delete system._snapshot._scheduledEvents[scheduledEventId];
        system._relay(source, target, event);
      }, delay);
      timerMap[scheduledEventId] = timeout;
    },
    cancel: function cancel(source, id) {
      var scheduledEventId = createScheduledEventId(source, id);
      var timeout = timerMap[scheduledEventId];
      delete timerMap[scheduledEventId];
      delete system._snapshot._scheduledEvents[scheduledEventId];
      clock.clearTimeout(timeout);
    },
    cancelAll: function cancelAll(actorRef) {
      for (var scheduledEventId in system._snapshot._scheduledEvents) {
        var scheduledEvent = system._snapshot._scheduledEvents[scheduledEventId];
        if (scheduledEvent.source === actorRef) {
          scheduler.cancel(actorRef, scheduledEvent.id);
        }
      }
    }
  };
  var sendInspectionEvent = function sendInspectionEvent(event) {
    if (!inspectionObservers.size) {
      return;
    }
    var resolvedInspectionEvent = _objectSpread(_objectSpread({}, event), {}, {
      rootId: rootActor.sessionId
    });
    inspectionObservers.forEach(function (observer) {
      var _observer$next;
      return (_observer$next = observer.next) === null || _observer$next === void 0 ? void 0 : _observer$next.call(observer, resolvedInspectionEvent);
    });
  };
  var system = {
    _snapshot: {
      _scheduledEvents: (_ref = (options === null || options === void 0 ? void 0 : options.snapshot) && options.snapshot.scheduler) !== null && _ref !== void 0 ? _ref : {}
    },
    _bookId: function _bookId() {
      return "x:".concat(idCounter++);
    },
    _register: function _register(sessionId, actorRef) {
      children.set(sessionId, actorRef);
      return sessionId;
    },
    _unregister: function _unregister(actorRef) {
      children["delete"](actorRef.sessionId);
      var systemId = reverseKeyedActors.get(actorRef);
      if (systemId !== undefined) {
        keyedActors["delete"](systemId);
        reverseKeyedActors["delete"](actorRef);
      }
    },
    get: function get(systemId) {
      return keyedActors.get(systemId);
    },
    _set: function _set(systemId, actorRef) {
      var existing = keyedActors.get(systemId);
      if (existing && existing !== actorRef) {
        throw new Error("Actor with system ID '".concat(systemId, "' already exists."));
      }
      keyedActors.set(systemId, actorRef);
      reverseKeyedActors.set(actorRef, systemId);
    },
    inspect: function inspect(observer) {
      inspectionObservers.add(observer);
    },
    _sendInspectionEvent: sendInspectionEvent,
    _relay: function _relay(source, target, event) {
      system._sendInspectionEvent({
        type: '@xstate.event',
        sourceRef: source,
        actorRef: target,
        event: event
      });
      target._send(event);
    },
    scheduler: scheduler,
    getSnapshot: function getSnapshot() {
      return {
        _scheduledEvents: _objectSpread({}, system._snapshot._scheduledEvents)
      };
    },
    start: function start() {
      var scheduledEvents = system._snapshot._scheduledEvents;
      system._snapshot._scheduledEvents = {};
      for (var scheduledId in scheduledEvents) {
        var _scheduledEvents$sche = scheduledEvents[scheduledId],
          source = _scheduledEvents$sche.source,
          target = _scheduledEvents$sche.target,
          event = _scheduledEvents$sche.event,
          delay = _scheduledEvents$sche.delay,
          id = _scheduledEvents$sche.id;
        scheduler.schedule(source, target, event, delay, id);
      }
    }
  };
  return system;
}
function matchesState(parentStateId, childStateId) {
  var parentStateValue = toStateValue(parentStateId);
  var childStateValue = toStateValue(childStateId);
  if (typeof childStateValue === 'string') {
    if (typeof parentStateValue === 'string') {
      return childStateValue === parentStateValue;
    }

    // Parent more specific than child
    return false;
  }
  if (typeof parentStateValue === 'string') {
    return parentStateValue in childStateValue;
  }
  return Object.keys(parentStateValue).every(function (key) {
    if (!(key in childStateValue)) {
      return false;
    }
    return matchesState(parentStateValue[key], childStateValue[key]);
  });
}
function toStatePath(stateId) {
  if (isArray(stateId)) {
    return stateId;
  }
  var result = [];
  var segment = '';
  for (var i = 0; i < stateId.length; i++) {
    var _char = stateId.charCodeAt(i);
    switch (_char) {
      // \
      case 92:
        // consume the next character
        segment += stateId[i + 1];
        // and skip over it
        i++;
        continue;
      // .
      case 46:
        result.push(segment);
        segment = '';
        continue;
    }
    segment += stateId[i];
  }
  result.push(segment);
  return result;
}
function toStateValue(stateValue) {
  if (isMachineSnapshot(stateValue)) {
    return stateValue.value;
  }
  if (typeof stateValue !== 'string') {
    return stateValue;
  }
  var statePath = toStatePath(stateValue);
  return pathToStateValue(statePath);
}
function pathToStateValue(statePath) {
  if (statePath.length === 1) {
    return statePath[0];
  }
  var value = {};
  var marker = value;
  for (var i = 0; i < statePath.length - 1; i++) {
    if (i === statePath.length - 2) {
      marker[statePath[i]] = statePath[i + 1];
    } else {
      var previous = marker;
      marker = {};
      previous[statePath[i]] = marker;
    }
  }
  return value;
}
function mapValues(collection, iteratee) {
  var result = {};
  var collectionKeys = Object.keys(collection);
  for (var i = 0; i < collectionKeys.length; i++) {
    var key = collectionKeys[i];
    result[key] = iteratee(collection[key], key, collection, i);
  }
  return result;
}
function toArrayStrict(value) {
  if (isArray(value)) {
    return value;
  }
  return [value];
}
function toArray(value) {
  if (value === undefined) {
    return [];
  }
  return toArrayStrict(value);
}
function resolveOutput(mapper, context, event, self) {
  if (typeof mapper === 'function') {
    return mapper({
      context: context,
      event: event,
      self: self
    });
  }
  if (!!mapper && _typeof(mapper) === 'object' && Object.values(mapper).some(function (val) {
    return typeof val === 'function';
  })) {
    console.warn("Dynamically mapping values to individual properties is deprecated. Use a single function that returns the mapped object instead.\nFound object containing properties whose values are possibly mapping functions: ".concat(Object.entries(mapper).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      return typeof value === 'function';
    }).map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];
      return "\n - ".concat(key, ": ").concat(value.toString().replace(/\n\s*/g, ''));
    }).join('')));
  }
  return mapper;
}
function isArray(value) {
  return Array.isArray(value);
}
function isErrorActorEvent(event) {
  return event.type.startsWith('xstate.error.actor');
}
function toTransitionConfigArray(configLike) {
  return toArrayStrict(configLike).map(function (transitionLike) {
    if (typeof transitionLike === 'undefined' || typeof transitionLike === 'string') {
      return {
        target: transitionLike
      };
    }
    return transitionLike;
  });
}
function normalizeTarget(target) {
  if (target === undefined || target === TARGETLESS_KEY) {
    return undefined;
  }
  return toArray(target);
}
function toObserver(nextHandler, errorHandler, completionHandler) {
  var _ref6, _ref7, _ref8;
  var isObserver = _typeof(nextHandler) === 'object';
  var self = isObserver ? nextHandler : undefined;
  return {
    next: (_ref6 = isObserver ? nextHandler.next : nextHandler) === null || _ref6 === void 0 ? void 0 : _ref6.bind(self),
    error: (_ref7 = isObserver ? nextHandler.error : errorHandler) === null || _ref7 === void 0 ? void 0 : _ref7.bind(self),
    complete: (_ref8 = isObserver ? nextHandler.complete : completionHandler) === null || _ref8 === void 0 ? void 0 : _ref8.bind(self)
  };
}
function createInvokeId(stateNodeId, index) {
  return "".concat(index, ".").concat(stateNodeId);
}
function resolveReferencedActor(machine, src) {
  var match = src.match(/^xstate\.invoke\.(\d+)\.(.*)/);
  if (!match) {
    return machine.implementations.actors[src];
  }
  var _match = _slicedToArray(match, 3),
    indexStr = _match[1],
    nodeId = _match[2];
  var node = machine.getStateNodeById(nodeId);
  var invokeConfig = node.config.invoke;
  return (Array.isArray(invokeConfig) ? invokeConfig[indexStr] : invokeConfig).src;
}
function getAllOwnEventDescriptors(snapshot) {
  return _toConsumableArray(new Set(_toConsumableArray(snapshot._nodes.flatMap(function (sn) {
    return sn.ownEvents;
  }))));
}
var $$ACTOR_TYPE = 1;
// those values are currently used by @xstate/react directly so it's important to keep the assigned values in sync
var ProcessingStatus = /*#__PURE__*/function (ProcessingStatus) {
  ProcessingStatus[ProcessingStatus["NotStarted"] = 0] = "NotStarted";
  ProcessingStatus[ProcessingStatus["Running"] = 1] = "Running";
  ProcessingStatus[ProcessingStatus["Stopped"] = 2] = "Stopped";
  return ProcessingStatus;
}({});
var defaultOptions = {
  clock: {
    setTimeout: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }
      setTimeout.toString = function () {
        return _setTimeout.toString();
      };
      return setTimeout;
    }(function (fn, ms) {
      return setTimeout(fn, ms);
    }),
    clearTimeout: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }
      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };
      return clearTimeout;
    }(function (id) {
      return clearTimeout(id);
    })
  },
  logger: console.log.bind(console),
  devTools: false
};

/**
 * An Actor is a running process that can receive events, send events and change its behavior based on the events it receives, which can cause effects outside of the actor. When you run a state machine, it becomes an actor.
 */
var Actor = /*#__PURE__*/function () {
  /**
   * Creates a new actor instance for the given logic with the provided options, if any.
   *
   * @param logic The logic to create an actor from
   * @param options Actor options
   */
  function Actor(logic, options) {
    var _resolvedOptions$src,
      _this = this,
      _options$snapshot;
    _classCallCheck(this, Actor);
    this.logic = logic;
    /**
     * The current internal state of the actor.
     */
    this._snapshot = void 0;
    /**
     * The clock that is responsible for setting and clearing timeouts, such as delayed events and transitions.
     */
    this.clock = void 0;
    this.options = void 0;
    /**
     * The unique identifier for this actor relative to its parent.
     */
    this.id = void 0;
    this.mailbox = new Mailbox(this._process.bind(this));
    this.observers = new Set();
    this.eventListeners = new Map();
    this.logger = void 0;
    /** @internal */
    this._processingStatus = ProcessingStatus.NotStarted;
    // Actor Ref
    this._parent = void 0;
    /** @internal */
    this._syncSnapshot = void 0;
    this.ref = void 0;
    // TODO: add typings for system
    this._actorScope = void 0;
    this._systemId = void 0;
    /**
     * The globally unique process ID for this invocation.
     */
    this.sessionId = void 0;
    /**
     * The system to which this actor belongs.
     */
    this.system = void 0;
    this._doneEvent = void 0;
    this.src = void 0;
    // array of functions to defer
    this._deferred = [];
    var resolvedOptions = _objectSpread(_objectSpread({}, defaultOptions), options);
    var clock = resolvedOptions.clock,
      logger = resolvedOptions.logger,
      parent = resolvedOptions.parent,
      syncSnapshot = resolvedOptions.syncSnapshot,
      id = resolvedOptions.id,
      systemId = resolvedOptions.systemId,
      inspect = resolvedOptions.inspect;
    this.system = parent ? parent.system : createSystem(this, {
      clock: clock
    });
    if (inspect && !parent) {
      // Always inspect at the system-level
      this.system.inspect(toObserver(inspect));
    }
    this.sessionId = this.system._bookId();
    this.id = id !== null && id !== void 0 ? id : this.sessionId;
    this.logger = logger;
    this.clock = clock;
    this._parent = parent;
    this._syncSnapshot = syncSnapshot;
    this.options = resolvedOptions;
    this.src = (_resolvedOptions$src = resolvedOptions.src) !== null && _resolvedOptions$src !== void 0 ? _resolvedOptions$src : logic;
    this.ref = this;
    this._actorScope = {
      self: this,
      id: this.id,
      sessionId: this.sessionId,
      logger: this.logger,
      defer: function defer(fn) {
        _this._deferred.push(fn);
      },
      system: this.system,
      stopChild: function stopChild(child) {
        if (child._parent !== _this) {
          throw new Error("Cannot stop child actor ".concat(child.id, " of ").concat(_this.id, " because it is not a child"));
        }
        child._stop();
      },
      emit: function emit(emittedEvent) {
        var listeners = _this.eventListeners.get(emittedEvent.type);
        if (!listeners) {
          return;
        }
        for (var _i = 0, _Array$from = Array.from(listeners); _i < _Array$from.length; _i++) {
          var handler = _Array$from[_i];
          handler(emittedEvent);
        }
      }
    };

    // Ensure that the send method is bound to this Actor instance
    // if destructured
    this.send = this.send.bind(this);
    this.system._sendInspectionEvent({
      type: '@xstate.actor',
      actorRef: this
    });
    if (systemId) {
      this._systemId = systemId;
      this.system._set(systemId, this);
    }
    this._initState((_options$snapshot = options === null || options === void 0 ? void 0 : options.snapshot) !== null && _options$snapshot !== void 0 ? _options$snapshot : options === null || options === void 0 ? void 0 : options.state);
    if (systemId && this._snapshot.status !== 'active') {
      this.system._unregister(this);
    }
  }
  _createClass(Actor, [{
    key: "_initState",
    value: function _initState(persistedState) {
      try {
        var _this$options;
        this._snapshot = persistedState ? this.logic.restoreSnapshot ? this.logic.restoreSnapshot(persistedState, this._actorScope) : persistedState : this.logic.getInitialSnapshot(this._actorScope, (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.input);
      } catch (err) {
        // if we get here then it means that we assign a value to this._snapshot that is not of the correct type
        // we can't get the true `TSnapshot & { status: 'error'; }`, it's impossible
        // so right now this is a lie of sorts
        this._snapshot = {
          status: 'error',
          output: undefined,
          error: err
        };
      }
    }
  }, {
    key: "update",
    value: function update(snapshot, event) {
      // Update state
      this._snapshot = snapshot;

      // Execute deferred effects
      var deferredFn;
      while (deferredFn = this._deferred.shift()) {
        try {
          deferredFn();
        } catch (err) {
          // this error can only be caught when executing *initial* actions
          // it's the only time when we call actions provided by the user through those deferreds
          // when the actor is already running we always execute them synchronously while transitioning
          // no "builtin deferred" should actually throw an error since they are either safe
          // or the control flow is passed through the mailbox and errors should be caught by the `_process` used by the mailbox
          this._deferred.length = 0;
          this._snapshot = _objectSpread(_objectSpread({}, snapshot), {}, {
            status: 'error',
            error: err
          });
        }
      }
      switch (this._snapshot.status) {
        case 'active':
          var _iterator = _createForOfIteratorHelper(this.observers),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var observer = _step.value;
              try {
                var _observer$next2;
                (_observer$next2 = observer.next) === null || _observer$next2 === void 0 || _observer$next2.call(observer, snapshot);
              } catch (err) {
                reportUnhandledError(err);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          break;
        case 'done':
          // next observers are meant to be notified about done snapshots
          // this can be seen as something that is different from how observable work
          // but with observables `complete` callback is called without any arguments
          // it's more ergonomic for XState to treat a done snapshot as a "next" value
          // and the completion event as something that is separate,
          // something that merely follows emitting that done snapshot
          var _iterator2 = _createForOfIteratorHelper(this.observers),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _observer = _step2.value;
              try {
                var _observer$next3;
                (_observer$next3 = _observer.next) === null || _observer$next3 === void 0 || _observer$next3.call(_observer, snapshot);
              } catch (err) {
                reportUnhandledError(err);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          this._stopProcedure();
          this._complete();
          this._doneEvent = createDoneActorEvent(this.id, this._snapshot.output);
          if (this._parent) {
            this.system._relay(this, this._parent, this._doneEvent);
          }
          break;
        case 'error':
          this._error(this._snapshot.error);
          break;
      }
      this.system._sendInspectionEvent({
        type: '@xstate.snapshot',
        actorRef: this,
        event: event,
        snapshot: snapshot
      });
    }

    /**
     * Subscribe an observer to an actor’s snapshot values.
     *
     * @remarks
     * The observer will receive the actor’s snapshot value when it is emitted. The observer can be:
     * - A plain function that receives the latest snapshot, or
     * - An observer object whose `.next(snapshot)` method receives the latest snapshot
     *
     * @example
     * ```ts
     * // Observer as a plain function
     * const subscription = actor.subscribe((snapshot) => {
     *   console.log(snapshot);
     * });
     * ```
     *
     * @example
     * ```ts
     * // Observer as an object
     * const subscription = actor.subscribe({
     *   next(snapshot) {
     *     console.log(snapshot);
     *   },
     *   error(err) {
     *     // ...
     *   },
     *   complete() {
     *     // ...
     *   },
     * });
     * ```
     *
     * The return value of `actor.subscribe(observer)` is a subscription object that has an `.unsubscribe()` method. You can call `subscription.unsubscribe()` to unsubscribe the observer:
     *
     * @example
     * ```ts
     * const subscription = actor.subscribe((snapshot) => {
     *   // ...
     * });
     *
     * // Unsubscribe the observer
     * subscription.unsubscribe();
     * ```
     *
     * When the actor is stopped, all of its observers will automatically be unsubscribed.
     *
     * @param observer - Either a plain function that receives the latest snapshot, or an observer object whose `.next(snapshot)` method receives the latest snapshot
     */
  }, {
    key: "subscribe",
    value: function subscribe(nextListenerOrObserver, errorListener, completeListener) {
      var _this2 = this;
      var observer = toObserver(nextListenerOrObserver, errorListener, completeListener);
      if (this._processingStatus !== ProcessingStatus.Stopped) {
        this.observers.add(observer);
      } else {
        switch (this._snapshot.status) {
          case 'done':
            try {
              var _observer$complete;
              (_observer$complete = observer.complete) === null || _observer$complete === void 0 || _observer$complete.call(observer);
            } catch (err) {
              reportUnhandledError(err);
            }
            break;
          case 'error':
            {
              var err = this._snapshot.error;
              if (!observer.error) {
                reportUnhandledError(err);
              } else {
                try {
                  observer.error(err);
                } catch (err) {
                  reportUnhandledError(err);
                }
              }
              break;
            }
        }
      }
      return {
        unsubscribe: function unsubscribe() {
          _this2.observers["delete"](observer);
        }
      };
    }
  }, {
    key: "on",
    value: function on(type, handler) {
      var listeners = this.eventListeners.get(type);
      if (!listeners) {
        listeners = new Set();
        this.eventListeners.set(type, listeners);
      }
      var wrappedHandler = handler.bind(undefined);
      listeners.add(wrappedHandler);
      return {
        unsubscribe: function unsubscribe() {
          listeners["delete"](wrappedHandler);
        }
      };
    }

    /**
     * Starts the Actor from the initial state
     */
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;
      if (this._processingStatus === ProcessingStatus.Running) {
        // Do not restart the service if it is already started
        return this;
      }
      if (this._syncSnapshot) {
        this.subscribe({
          next: function next(snapshot) {
            if (snapshot.status === 'active') {
              _this3.system._relay(_this3, _this3._parent, {
                type: "xstate.snapshot.".concat(_this3.id),
                snapshot: snapshot
              });
            }
          },
          error: function error() {}
        });
      }
      this.system._register(this.sessionId, this);
      if (this._systemId) {
        this.system._set(this._systemId, this);
      }
      this._processingStatus = ProcessingStatus.Running;

      // TODO: this isn't correct when rehydrating
      var initEvent = createInitEvent(this.options.input);
      this.system._sendInspectionEvent({
        type: '@xstate.event',
        sourceRef: this._parent,
        actorRef: this,
        event: initEvent
      });
      var status = this._snapshot.status;
      switch (status) {
        case 'done':
          // a state machine can be "done" upon initialization (it could reach a final state using initial microsteps)
          // we still need to complete observers, flush deferreds etc
          this.update(this._snapshot, initEvent);
          // TODO: rethink cleanup of observers, mailbox, etc
          return this;
        case 'error':
          this._error(this._snapshot.error);
          return this;
      }
      if (!this._parent) {
        this.system.start();
      }
      if (this.logic.start) {
        try {
          this.logic.start(this._snapshot, this._actorScope);
        } catch (err) {
          this._snapshot = _objectSpread(_objectSpread({}, this._snapshot), {}, {
            status: 'error',
            error: err
          });
          this._error(err);
          return this;
        }
      }

      // TODO: this notifies all subscribers but usually this is redundant
      // there is no real change happening here
      // we need to rethink if this needs to be refactored
      this.update(this._snapshot, initEvent);
      if (this.options.devTools) {
        this.attachDevTools();
      }
      this.mailbox.start();
      return this;
    }
  }, {
    key: "_process",
    value: function _process(event) {
      var nextState;
      var caughtError;
      try {
        nextState = this.logic.transition(this._snapshot, event, this._actorScope);
      } catch (err) {
        // we wrap it in a box so we can rethrow it later even if falsy value gets caught here
        caughtError = {
          err: err
        };
      }
      if (caughtError) {
        var _caughtError = caughtError,
          err = _caughtError.err;
        this._snapshot = _objectSpread(_objectSpread({}, this._snapshot), {}, {
          status: 'error',
          error: err
        });
        this._error(err);
        return;
      }
      this.update(nextState, event);
      if (event.type === XSTATE_STOP) {
        this._stopProcedure();
        this._complete();
      }
    }
  }, {
    key: "_stop",
    value: function _stop() {
      if (this._processingStatus === ProcessingStatus.Stopped) {
        return this;
      }
      this.mailbox.clear();
      if (this._processingStatus === ProcessingStatus.NotStarted) {
        this._processingStatus = ProcessingStatus.Stopped;
        return this;
      }
      this.mailbox.enqueue({
        type: XSTATE_STOP
      });
      return this;
    }

    /**
     * Stops the Actor and unsubscribe all listeners.
     */
  }, {
    key: "stop",
    value: function stop() {
      if (this._parent) {
        throw new Error('A non-root actor cannot be stopped directly.');
      }
      return this._stop();
    }
  }, {
    key: "_complete",
    value: function _complete() {
      var _iterator3 = _createForOfIteratorHelper(this.observers),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var observer = _step3.value;
          try {
            var _observer$complete2;
            (_observer$complete2 = observer.complete) === null || _observer$complete2 === void 0 || _observer$complete2.call(observer);
          } catch (err) {
            reportUnhandledError(err);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.observers.clear();
    }
  }, {
    key: "_reportError",
    value: function _reportError(err) {
      if (!this.observers.size) {
        if (!this._parent) {
          reportUnhandledError(err);
        }
        return;
      }
      var reportError = false;
      var _iterator4 = _createForOfIteratorHelper(this.observers),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var observer = _step4.value;
          var errorListener = observer.error;
          reportError || (reportError = !errorListener);
          try {
            errorListener === null || errorListener === void 0 || errorListener(err);
          } catch (err2) {
            reportUnhandledError(err2);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      this.observers.clear();
      if (reportError) {
        reportUnhandledError(err);
      }
    }
  }, {
    key: "_error",
    value: function _error(err) {
      this._stopProcedure();
      this._reportError(err);
      if (this._parent) {
        this.system._relay(this, this._parent, createErrorActorEvent(this.id, err));
      }
    }
    // TODO: atm children don't belong entirely to the actor so
    // in a way - it's not even super aware of them
    // so we can't stop them from here but we really should!
    // right now, they are being stopped within the machine's transition
    // but that could throw and leave us with "orphaned" active actors
  }, {
    key: "_stopProcedure",
    value: function _stopProcedure() {
      if (this._processingStatus !== ProcessingStatus.Running) {
        // Actor already stopped; do nothing
        return this;
      }

      // Cancel all delayed events
      this.system.scheduler.cancelAll(this);

      // TODO: mailbox.reset
      this.mailbox.clear();
      // TODO: after `stop` we must prepare ourselves for receiving events again
      // events sent *after* stop signal must be queued
      // it seems like this should be the common behavior for all of our consumers
      // so perhaps this should be unified somehow for all of them
      this.mailbox = new Mailbox(this._process.bind(this));
      this._processingStatus = ProcessingStatus.Stopped;
      this.system._unregister(this);
      return this;
    }

    /**
     * @internal
     */
  }, {
    key: "_send",
    value: function _send(event) {
      if (this._processingStatus === ProcessingStatus.Stopped) {
        // do nothing
        {
          var eventString = JSON.stringify(event);
          console.warn("Event \"".concat(event.type, "\" was sent to stopped actor \"").concat(this.id, " (").concat(this.sessionId, ")\". This actor has already reached its final state, and will not transition.\nEvent: ").concat(eventString));
        }
        return;
      }
      this.mailbox.enqueue(event);
    }

    /**
     * Sends an event to the running Actor to trigger a transition.
     *
     * @param event The event to send
     */
  }, {
    key: "send",
    value: function send(event) {
      if (typeof event === 'string') {
        throw new Error("Only event objects may be sent to actors; use .send({ type: \"".concat(event, "\" }) instead"));
      }
      this.system._relay(undefined, this, event);
    }
  }, {
    key: "attachDevTools",
    value: function attachDevTools() {
      var devTools = this.options.devTools;
      if (devTools) {
        var resolvedDevToolsAdapter = typeof devTools === 'function' ? devTools : _dev_dist_xstate_dev_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.devToolsAdapter;
        resolvedDevToolsAdapter(this);
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        xstate$$type: $$ACTOR_TYPE,
        id: this.id
      };
    }

    /**
     * Obtain the internal state of the actor, which can be persisted.
     *
     * @remarks
     * The internal state can be persisted from any actor, not only machines.
     *
     * Note that the persisted state is not the same as the snapshot from {@link Actor.getSnapshot}. Persisted state represents the internal state of the actor, while snapshots represent the actor's last emitted value.
     *
     * Can be restored with {@link ActorOptions.state}
     *
     * @see https://stately.ai/docs/persistence
     */
  }, {
    key: "getPersistedSnapshot",
    value: function getPersistedSnapshot(options) {
      return this.logic.getPersistedSnapshot(this._snapshot, options);
    }
  }, {
    key: symbolObservable,
    value: function value() {
      return this;
    }

    /**
     * Read an actor’s snapshot synchronously.
     *
     * @remarks
     * The snapshot represent an actor's last emitted value.
     *
     * When an actor receives an event, its internal state may change.
     * An actor may emit a snapshot when a state transition occurs.
     *
     * Note that some actors, such as callback actors generated with `fromCallback`, will not emit snapshots.
     *
     * @see {@link Actor.subscribe} to subscribe to an actor’s snapshot values.
     * @see {@link Actor.getPersistedSnapshot} to persist the internal state of an actor (which is more than just a snapshot).
     */
  }, {
    key: "getSnapshot",
    value: function getSnapshot() {
      if (!this._snapshot) {
        throw new Error("Snapshot can't be read while the actor initializes itself");
      }
      return this._snapshot;
    }
  }]);
  return Actor;
}();
/**
 * Creates a new actor instance for the given actor logic with the provided options, if any.
 *
 * @remarks
 * When you create an actor from actor logic via `createActor(logic)`, you implicitly create an actor system where the created actor is the root actor.
 * Any actors spawned from this root actor and its descendants are part of that actor system.
 *
 * @example
 * ```ts
 * import { createActor } from 'xstate';
 * import { someActorLogic } from './someActorLogic.ts';
 *
 * // Creating the actor, which implicitly creates an actor system with itself as the root actor
 * const actor = createActor(someActorLogic);
 *
 * actor.subscribe((snapshot) => {
 *   console.log(snapshot);
 * });
 *
 * // Actors must be started by calling `actor.start()`, which will also start the actor system.
 * actor.start();
 *
 * // Actors can receive events
 * actor.send({ type: 'someEvent' });
 *
 * // You can stop root actors by calling `actor.stop()`, which will also stop the actor system and all actors in that system.
 * actor.stop();
 * ```
 *
 * @param logic - The actor logic to create an actor from. For a state machine actor logic creator, see {@link createMachine}. Other actor logic creators include {@link fromCallback}, {@link fromEventObservable}, {@link fromObservable}, {@link fromPromise}, and {@link fromTransition}.
 * @param options - Actor options
 */
function createActor(logic) {
  for (var _len = arguments.length, _ref9 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    _ref9[_key - 1] = arguments[_key];
  }
  var options = _ref9[0];
  return new Actor(logic, options);
}

/**
 * Creates a new Interpreter instance for the given machine with the provided options, if any.
 *
 * @deprecated Use `createActor` instead
 */
var interpret = createActor;

/**
 * @deprecated Use `Actor` instead.
 */

function resolveCancel(_, snapshot, actionArgs, actionParams, _ref10) {
  var sendId = _ref10.sendId;
  var resolvedSendId = typeof sendId === 'function' ? sendId(actionArgs, actionParams) : sendId;
  return [snapshot, resolvedSendId];
}
function executeCancel(actorScope, resolvedSendId) {
  actorScope.defer(function () {
    actorScope.system.scheduler.cancel(actorScope.self, resolvedSendId);
  });
}
/**
 * Cancels a delayed `sendTo(...)` action that is waiting to be executed. The canceled `sendTo(...)` action
 * will not send its event or execute, unless the `delay` has already elapsed before `cancel(...)` is called.
 *
 * @param sendId The `id` of the `sendTo(...)` action to cancel.
 * 
 * @example
  ```ts
  import { createMachine, sendTo, cancel } from 'xstate';

  const machine = createMachine({
    // ...
    on: {
      sendEvent: {
        actions: sendTo('some-actor', { type: 'someEvent' }, {
          id: 'some-id',
          delay: 1000
        })
      },
      cancelEvent: {
        actions: cancel('some-id')
      }
    }
  });
  ```
 */
function cancel(sendId) {
  function cancel(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  cancel.type = 'xstate.cancel';
  cancel.sendId = sendId;
  cancel.resolve = resolveCancel;
  cancel.execute = executeCancel;
  return cancel;
}
function resolveSpawn(actorScope, snapshot, actionArgs, _actionParams, _ref11) {
  var id = _ref11.id,
    systemId = _ref11.systemId,
    src = _ref11.src,
    input = _ref11.input,
    syncSnapshot = _ref11.syncSnapshot;
  var logic = typeof src === 'string' ? resolveReferencedActor(snapshot.machine, src) : src;
  var resolvedId = typeof id === 'function' ? id(actionArgs) : id;
  var actorRef;
  if (logic) {
    actorRef = createActor(logic, {
      id: resolvedId,
      src: src,
      parent: actorScope.self,
      syncSnapshot: syncSnapshot,
      systemId: systemId,
      input: typeof input === 'function' ? input({
        context: snapshot.context,
        event: actionArgs.event,
        self: actorScope.self
      }) : input
    });
  }
  if (!actorRef) {
    console.warn("Actor type '".concat(src, "' not found in machine '").concat(actorScope.id, "'."));
  }
  return [cloneMachineSnapshot(snapshot, {
    children: _objectSpread(_objectSpread({}, snapshot.children), {}, _defineProperty({}, resolvedId, actorRef))
  }), {
    id: id,
    actorRef: actorRef
  }];
}
function executeSpawn(actorScope, _ref12) {
  var id = _ref12.id,
    actorRef = _ref12.actorRef;
  if (!actorRef) {
    return;
  }
  actorScope.defer(function () {
    if (actorRef._processingStatus === ProcessingStatus.Stopped) {
      return;
    }
    actorRef.start();
  });
}
function spawnChild() {
  for (var _len2 = arguments.length, _ref13 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    _ref13[_key2] = arguments[_key2];
  }
  var src = _ref13[0],
    _ref13$ = _ref13[1],
    _ref13$2 = _ref13$ === void 0 ? {} : _ref13$,
    id = _ref13$2.id,
    systemId = _ref13$2.systemId,
    input = _ref13$2.input,
    _ref13$2$syncSnapshot = _ref13$2.syncSnapshot,
    syncSnapshot = _ref13$2$syncSnapshot === void 0 ? false : _ref13$2$syncSnapshot;
  function spawnChild(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  spawnChild.type = 'snapshot.spawnChild';
  spawnChild.id = id;
  spawnChild.systemId = systemId;
  spawnChild.src = src;
  spawnChild.input = input;
  spawnChild.syncSnapshot = syncSnapshot;
  spawnChild.resolve = resolveSpawn;
  spawnChild.execute = executeSpawn;
  return spawnChild;
}
function resolveStop(_, snapshot, args, actionParams, _ref14) {
  var actorRef = _ref14.actorRef;
  var actorRefOrString = typeof actorRef === 'function' ? actorRef(args, actionParams) : actorRef;
  var resolvedActorRef = typeof actorRefOrString === 'string' ? snapshot.children[actorRefOrString] : actorRefOrString;
  var children = snapshot.children;
  if (resolvedActorRef) {
    children = _objectSpread({}, children);
    delete children[resolvedActorRef.id];
  }
  return [cloneMachineSnapshot(snapshot, {
    children: children
  }), resolvedActorRef];
}
function executeStop(actorScope, actorRef) {
  if (!actorRef) {
    return;
  }

  // we need to eagerly unregister it here so a new actor with the same systemId can be registered immediately
  // since we defer actual stopping of the actor but we don't defer actor creations (and we can't do that)
  // this could throw on `systemId` collision, for example, when dealing with reentering transitions
  actorScope.system._unregister(actorRef);

  // this allows us to prevent an actor from being started if it gets stopped within the same macrostep
  // this can happen, for example, when the invoking state is being exited immediately by an always transition
  if (actorRef._processingStatus !== ProcessingStatus.Running) {
    actorScope.stopChild(actorRef);
    return;
  }
  // stopping a child enqueues a stop event in the child actor's mailbox
  // we need for all of the already enqueued events to be processed before we stop the child
  // the parent itself might want to send some events to a child (for example from exit actions on the invoking state)
  // and we don't want to ignore those events
  actorScope.defer(function () {
    actorScope.stopChild(actorRef);
  });
}
/**
 * Stops a child actor.
 *
 * @param actorRef The actor to stop.
 */
function stopChild(actorRef) {
  function stop(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  stop.type = 'xstate.stopChild';
  stop.actorRef = actorRef;
  stop.resolve = resolveStop;
  stop.execute = executeStop;
  return stop;
}

/**
 * Stops a child actor.
 *
 * @deprecated Use `stopChild(...)` instead
 */
var stop = stopChild;
function checkStateIn(snapshot, _, _ref15) {
  var stateValue = _ref15.stateValue;
  if (typeof stateValue === 'string' && isStateId(stateValue)) {
    var target = snapshot.machine.getStateNodeById(stateValue);
    return snapshot._nodes.some(function (sn) {
      return sn === target;
    });
  }
  return snapshot.matches(stateValue);
}
function stateIn(stateValue) {
  function stateIn(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  stateIn.check = checkStateIn;
  stateIn.stateValue = stateValue;
  return stateIn;
}
function checkNot(snapshot, _ref16, _ref17) {
  var context = _ref16.context,
    event = _ref16.event;
  var guards = _ref17.guards;
  return !evaluateGuard(guards[0], context, event, snapshot);
}

/**
 * Higher-order guard that evaluates to `true` if the `guard` passed to it evaluates to `false`.
 *
 * @category Guards
 * @example
  ```ts
  import { setup, not } from 'xstate';

  const machine = setup({
    guards: {
      someNamedGuard: () => false
    }
  }).createMachine({
    on: {
      someEvent: {
        guard: not('someNamedGuard'),
        actions: () => {
          // will be executed if guard in `not(...)`
          // evaluates to `false`
        }
      }
    }
  });
  ```
 * @returns A guard 
 */
function not(guard) {
  function not(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  not.check = checkNot;
  not.guards = [guard];
  return not;
}
function checkAnd(snapshot, _ref18, _ref19) {
  var context = _ref18.context,
    event = _ref18.event;
  var guards = _ref19.guards;
  return guards.every(function (guard) {
    return evaluateGuard(guard, context, event, snapshot);
  });
}

/**
 * Higher-order guard that evaluates to `true` if all `guards` passed to it
 * evaluate to `true`.
 *
 * @category Guards
 * @example
  ```ts
  import { setup, and } from 'xstate';

  const machine = setup({
    guards: {
      someNamedGuard: () => true
    }
  }).createMachine({
    on: {
      someEvent: {
        guard: and([
          ({ context }) => context.value > 0,
          'someNamedGuard'
        ]),
        actions: () => {
          // will be executed if all guards in `and(...)`
          // evaluate to true
        }
      }
    }
  });
  ```
 * @returns A guard action object
 */
function and(guards) {
  function and(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  and.check = checkAnd;
  and.guards = guards;
  return and;
}
function checkOr(snapshot, _ref20, _ref21) {
  var context = _ref20.context,
    event = _ref20.event;
  var guards = _ref21.guards;
  return guards.some(function (guard) {
    return evaluateGuard(guard, context, event, snapshot);
  });
}

/**
 * Higher-order guard that evaluates to `true` if any of the `guards` passed to it
 * evaluate to `true`.
 *
 * @category Guards
 * @example
  ```ts
  import { setup, or } from 'xstate';

  const machine = setup({
    guards: {
      someNamedGuard: () => true
    }
  }).createMachine({
    on: {
      someEvent: {
        guard: or([
          ({ context }) => context.value > 0,
          'someNamedGuard'
        ]),
        actions: () => {
          // will be executed if any of the guards in `or(...)`
          // evaluate to true
        }
      }
    }
  });
  ```
 * @returns A guard action object
 */
function or(guards) {
  function or(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  or.check = checkOr;
  or.guards = guards;
  return or;
}

// TODO: throw on cycles (depth check should be enough)
function evaluateGuard(guard, context, event, snapshot) {
  var machine = snapshot.machine;
  var isInline = typeof guard === 'function';
  var resolved = isInline ? guard : machine.implementations.guards[typeof guard === 'string' ? guard : guard.type];
  if (!isInline && !resolved) {
    throw new Error("Guard '".concat(typeof guard === 'string' ? guard : guard.type, "' is not implemented.'."));
  }
  if (typeof resolved !== 'function') {
    return evaluateGuard(resolved, context, event, snapshot);
  }
  var guardArgs = {
    context: context,
    event: event
  };
  var guardParams = isInline || typeof guard === 'string' ? undefined : 'params' in guard ? typeof guard.params === 'function' ? guard.params({
    context: context,
    event: event
  }) : guard.params : undefined;
  if (!('check' in resolved)) {
    // the existing type of `.guards` assumes non-nullable `TExpressionGuard`
    // inline guards expect `TExpressionGuard` to be set to `undefined`
    // it's fine to cast this here, our logic makes sure that we call those 2 "variants" correctly
    return resolved(guardArgs, guardParams);
  }
  var builtinGuard = resolved;
  return builtinGuard.check(snapshot, guardArgs, resolved // this holds all params
  );
}
var isAtomicStateNode = function isAtomicStateNode(stateNode) {
  return stateNode.type === 'atomic' || stateNode.type === 'final';
};
function getChildren(stateNode) {
  return Object.values(stateNode.states).filter(function (sn) {
    return sn.type !== 'history';
  });
}
function getProperAncestors(stateNode, toStateNode) {
  var ancestors = [];
  if (toStateNode === stateNode) {
    return ancestors;
  }

  // add all ancestors
  var m = stateNode.parent;
  while (m && m !== toStateNode) {
    ancestors.push(m);
    m = m.parent;
  }
  return ancestors;
}
function getAllStateNodes(stateNodes) {
  var nodeSet = new Set(stateNodes);
  var adjList = getAdjList(nodeSet);

  // add descendants
  var _iterator5 = _createForOfIteratorHelper(nodeSet),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var s = _step5.value;
      // if previously active, add existing child nodes
      if (s.type === 'compound' && (!adjList.get(s) || !adjList.get(s).length)) {
        getInitialStateNodesWithTheirAncestors(s).forEach(function (sn) {
          return nodeSet.add(sn);
        });
      } else {
        if (s.type === 'parallel') {
          var _iterator7 = _createForOfIteratorHelper(getChildren(s)),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var child = _step7.value;
              if (child.type === 'history') {
                continue;
              }
              if (!nodeSet.has(child)) {
                var initialStates = getInitialStateNodesWithTheirAncestors(child);
                var _iterator8 = _createForOfIteratorHelper(initialStates),
                  _step8;
                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var initialStateNode = _step8.value;
                    nodeSet.add(initialStateNode);
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      }
    }

    // add all ancestors
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  var _iterator6 = _createForOfIteratorHelper(nodeSet),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _s = _step6.value;
      var m = _s.parent;
      while (m) {
        nodeSet.add(m);
        m = m.parent;
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  return nodeSet;
}
function getValueFromAdj(baseNode, adjList) {
  var childStateNodes = adjList.get(baseNode);
  if (!childStateNodes) {
    return {}; // todo: fix?
  }
  if (baseNode.type === 'compound') {
    var childStateNode = childStateNodes[0];
    if (childStateNode) {
      if (isAtomicStateNode(childStateNode)) {
        return childStateNode.key;
      }
    } else {
      return {};
    }
  }
  var stateValue = {};
  var _iterator9 = _createForOfIteratorHelper(childStateNodes),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var _childStateNode = _step9.value;
      stateValue[_childStateNode.key] = getValueFromAdj(_childStateNode, adjList);
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  return stateValue;
}
function getAdjList(stateNodes) {
  var adjList = new Map();
  var _iterator10 = _createForOfIteratorHelper(stateNodes),
    _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var s = _step10.value;
      if (!adjList.has(s)) {
        adjList.set(s, []);
      }
      if (s.parent) {
        if (!adjList.has(s.parent)) {
          adjList.set(s.parent, []);
        }
        adjList.get(s.parent).push(s);
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
  return adjList;
}
function getStateValue(rootNode, stateNodes) {
  var config = getAllStateNodes(stateNodes);
  return getValueFromAdj(rootNode, getAdjList(config));
}
function isInFinalState(stateNodeSet, stateNode) {
  if (stateNode.type === 'compound') {
    return getChildren(stateNode).some(function (s) {
      return s.type === 'final' && stateNodeSet.has(s);
    });
  }
  if (stateNode.type === 'parallel') {
    return getChildren(stateNode).every(function (sn) {
      return isInFinalState(stateNodeSet, sn);
    });
  }
  return stateNode.type === 'final';
}
var isStateId = function isStateId(str) {
  return str[0] === STATE_IDENTIFIER;
};
function getCandidates(stateNode, receivedEventType) {
  var candidates = stateNode.transitions.get(receivedEventType) || _toConsumableArray(stateNode.transitions.keys()).filter(function (eventDescriptor) {
    // check if transition is a wildcard transition,
    // which matches any non-transient events
    if (eventDescriptor === WILDCARD) {
      return true;
    }
    if (!eventDescriptor.endsWith('.*')) {
      return false;
    }
    if (/.*\*.+/.test(eventDescriptor)) {
      console.warn("Wildcards can only be the last token of an event descriptor (e.g., \"event.*\") or the entire event descriptor (\"*\"). Check the \"".concat(eventDescriptor, "\" event."));
    }
    var partialEventTokens = eventDescriptor.split('.');
    var eventTokens = receivedEventType.split('.');
    for (var tokenIndex = 0; tokenIndex < partialEventTokens.length; tokenIndex++) {
      var partialEventToken = partialEventTokens[tokenIndex];
      var eventToken = eventTokens[tokenIndex];
      if (partialEventToken === '*') {
        var isLastToken = tokenIndex === partialEventTokens.length - 1;
        if (!isLastToken) {
          console.warn("Infix wildcards in transition events are not allowed. Check the \"".concat(eventDescriptor, "\" transition."));
        }
        return isLastToken;
      }
      if (partialEventToken !== eventToken) {
        return false;
      }
    }
    return true;
  }).sort(function (a, b) {
    return b.length - a.length;
  }).flatMap(function (key) {
    return stateNode.transitions.get(key);
  });
  return candidates;
}

/**
 * All delayed transitions from the config.
 */
function getDelayedTransitions(stateNode) {
  var afterConfig = stateNode.config.after;
  if (!afterConfig) {
    return [];
  }
  var mutateEntryExit = function mutateEntryExit(delay, i) {
    var afterEvent = createAfterEvent(delay, stateNode.id);
    var eventType = afterEvent.type;
    stateNode.entry.push(raise(afterEvent, {
      id: eventType,
      delay: delay
    }));
    stateNode.exit.push(cancel(eventType));
    return eventType;
  };
  var delayedTransitions = Object.keys(afterConfig).flatMap(function (delay, i) {
    var configTransition = afterConfig[delay];
    var resolvedTransition = typeof configTransition === 'string' ? {
      target: configTransition
    } : configTransition;
    var resolvedDelay = Number.isNaN(+delay) ? delay : +delay;
    var eventType = mutateEntryExit(resolvedDelay);
    return toArray(resolvedTransition).map(function (transition) {
      return _objectSpread(_objectSpread({}, transition), {}, {
        event: eventType,
        delay: resolvedDelay
      });
    });
  });
  return delayedTransitions.map(function (delayedTransition) {
    var delay = delayedTransition.delay;
    return _objectSpread(_objectSpread({}, formatTransition(stateNode, delayedTransition.event, delayedTransition)), {}, {
      delay: delay
    });
  });
}
function formatTransition(stateNode, descriptor, transitionConfig) {
  var _transitionConfig$ree;
  var normalizedTarget = normalizeTarget(transitionConfig.target);
  var reenter = (_transitionConfig$ree = transitionConfig.reenter) !== null && _transitionConfig$ree !== void 0 ? _transitionConfig$ree : false;
  var target = resolveTarget(stateNode, normalizedTarget);

  // TODO: should this be part of a lint rule instead?
  if (transitionConfig.cond) {
    throw new Error("State \"".concat(stateNode.id, "\" has declared `cond` for one of its transitions. This property has been renamed to `guard`. Please update your code."));
  }
  var transition = _objectSpread(_objectSpread({}, transitionConfig), {}, {
    actions: toArray(transitionConfig.actions),
    guard: transitionConfig.guard,
    target: target,
    source: stateNode,
    reenter: reenter,
    eventType: descriptor,
    toJSON: function toJSON() {
      return _objectSpread(_objectSpread({}, transition), {}, {
        source: "#".concat(stateNode.id),
        target: target ? target.map(function (t) {
          return "#".concat(t.id);
        }) : undefined
      });
    }
  });
  return transition;
}
function formatTransitions(stateNode) {
  var transitions = new Map();
  if (stateNode.config.on) {
    var _loop = function _loop() {
      var descriptor = _Object$keys[_i2];
      if (descriptor === NULL_EVENT) {
        throw new Error('Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.');
      }
      var transitionsConfig = stateNode.config.on[descriptor];
      transitions.set(descriptor, toTransitionConfigArray(transitionsConfig).map(function (t) {
        return formatTransition(stateNode, descriptor, t);
      }));
    };
    for (var _i2 = 0, _Object$keys = Object.keys(stateNode.config.on); _i2 < _Object$keys.length; _i2++) {
      _loop();
    }
  }
  if (stateNode.config.onDone) {
    var descriptor = "xstate.done.state.".concat(stateNode.id);
    transitions.set(descriptor, toTransitionConfigArray(stateNode.config.onDone).map(function (t) {
      return formatTransition(stateNode, descriptor, t);
    }));
  }
  var _iterator11 = _createForOfIteratorHelper(stateNode.invoke),
    _step11;
  try {
    var _loop2 = function _loop2() {
      var invokeDef = _step11.value;
      if (invokeDef.onDone) {
        var _descriptor = "xstate.done.actor.".concat(invokeDef.id);
        transitions.set(_descriptor, toTransitionConfigArray(invokeDef.onDone).map(function (t) {
          return formatTransition(stateNode, _descriptor, t);
        }));
      }
      if (invokeDef.onError) {
        var _descriptor2 = "xstate.error.actor.".concat(invokeDef.id);
        transitions.set(_descriptor2, toTransitionConfigArray(invokeDef.onError).map(function (t) {
          return formatTransition(stateNode, _descriptor2, t);
        }));
      }
      if (invokeDef.onSnapshot) {
        var _descriptor3 = "xstate.snapshot.".concat(invokeDef.id);
        transitions.set(_descriptor3, toTransitionConfigArray(invokeDef.onSnapshot).map(function (t) {
          return formatTransition(stateNode, _descriptor3, t);
        }));
      }
    };
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  var _iterator12 = _createForOfIteratorHelper(stateNode.after),
    _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var delayedTransition = _step12.value;
      var existing = transitions.get(delayedTransition.eventType);
      if (!existing) {
        existing = [];
        transitions.set(delayedTransition.eventType, existing);
      }
      existing.push(delayedTransition);
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
  return transitions;
}
function formatInitialTransition(stateNode, _target) {
  var resolvedTarget = typeof _target === 'string' ? stateNode.states[_target] : _target ? stateNode.states[_target.target] : undefined;
  if (!resolvedTarget && _target) {
    throw new Error("Initial state node \"".concat(_target, "\" not found on parent state node #").concat(stateNode.id));
  }
  var transition = {
    source: stateNode,
    actions: !_target || typeof _target === 'string' ? [] : toArray(_target.actions),
    eventType: null,
    reenter: false,
    target: resolvedTarget ? [resolvedTarget] : [],
    toJSON: function toJSON() {
      return _objectSpread(_objectSpread({}, transition), {}, {
        source: "#".concat(stateNode.id),
        target: resolvedTarget ? ["#".concat(resolvedTarget.id)] : []
      });
    }
  };
  return transition;
}
function resolveTarget(stateNode, targets) {
  if (targets === undefined) {
    // an undefined target signals that the state node should not transition from that state when receiving that event
    return undefined;
  }
  return targets.map(function (target) {
    if (typeof target !== 'string') {
      return target;
    }
    if (isStateId(target)) {
      return stateNode.machine.getStateNodeById(target);
    }
    var isInternalTarget = target[0] === STATE_DELIMITER;
    // If internal target is defined on machine,
    // do not include machine key on target
    if (isInternalTarget && !stateNode.parent) {
      return getStateNodeByPath(stateNode, target.slice(1));
    }
    var resolvedTarget = isInternalTarget ? stateNode.key + target : target;
    if (stateNode.parent) {
      try {
        var targetStateNode = getStateNodeByPath(stateNode.parent, resolvedTarget);
        return targetStateNode;
      } catch (err) {
        throw new Error("Invalid transition definition for state node '".concat(stateNode.id, "':\n").concat(err.message));
      }
    } else {
      throw new Error("Invalid target: \"".concat(target, "\" is not a valid target from the root node. Did you mean \".").concat(target, "\"?"));
    }
  });
}
function resolveHistoryDefaultTransition(stateNode) {
  var normalizedTarget = normalizeTarget(stateNode.config.target);
  if (!normalizedTarget) {
    return stateNode.parent.initial;
  }
  return {
    target: normalizedTarget.map(function (t) {
      return typeof t === 'string' ? getStateNodeByPath(stateNode.parent, t) : t;
    })
  };
}
function isHistoryNode(stateNode) {
  return stateNode.type === 'history';
}
function getInitialStateNodesWithTheirAncestors(stateNode) {
  var states = getInitialStateNodes(stateNode);
  var _iterator13 = _createForOfIteratorHelper(states),
    _step13;
  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var initialState = _step13.value;
      var _iterator14 = _createForOfIteratorHelper(getProperAncestors(initialState, stateNode)),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var ancestor = _step14.value;
          states.add(ancestor);
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }
  return states;
}
function getInitialStateNodes(stateNode) {
  var set = new Set();
  function iter(descStateNode) {
    if (set.has(descStateNode)) {
      return;
    }
    set.add(descStateNode);
    if (descStateNode.type === 'compound') {
      iter(descStateNode.initial.target[0]);
    } else if (descStateNode.type === 'parallel') {
      var _iterator15 = _createForOfIteratorHelper(getChildren(descStateNode)),
        _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var child = _step15.value;
          iter(child);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }
  }
  iter(stateNode);
  return set;
}
/**
 * Returns the child state node from its relative `stateKey`, or throws.
 */
function getStateNode(stateNode, stateKey) {
  if (isStateId(stateKey)) {
    return stateNode.machine.getStateNodeById(stateKey);
  }
  if (!stateNode.states) {
    throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(stateNode.id, "'; no child states exist."));
  }
  var result = stateNode.states[stateKey];
  if (!result) {
    throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(stateNode.id, "'"));
  }
  return result;
}

/**
 * Returns the relative state node from the given `statePath`, or throws.
 *
 * @param statePath The string or string array relative path to the state node.
 */
function getStateNodeByPath(stateNode, statePath) {
  if (typeof statePath === 'string' && isStateId(statePath)) {
    try {
      return stateNode.machine.getStateNodeById(statePath);
    } catch (e) {
      // try individual paths
      // throw e;
    }
  }
  var arrayStatePath = toStatePath(statePath).slice();
  var currentStateNode = stateNode;
  while (arrayStatePath.length) {
    var key = arrayStatePath.shift();
    if (!key.length) {
      break;
    }
    currentStateNode = getStateNode(currentStateNode, key);
  }
  return currentStateNode;
}

/**
 * Returns the state nodes represented by the current state value.
 *
 * @param stateValue The state value or State instance
 */
function getStateNodes(stateNode, stateValue) {
  if (typeof stateValue === 'string') {
    var childStateNode = stateNode.states[stateValue];
    if (!childStateNode) {
      throw new Error("State '".concat(stateValue, "' does not exist on '").concat(stateNode.id, "'"));
    }
    return [stateNode, childStateNode];
  }
  var childStateKeys = Object.keys(stateValue);
  var childStateNodes = childStateKeys.map(function (subStateKey) {
    return getStateNode(stateNode, subStateKey);
  }).filter(Boolean);
  return [stateNode.machine.root, stateNode].concat(childStateNodes, childStateKeys.reduce(function (allSubStateNodes, subStateKey) {
    var subStateNode = getStateNode(stateNode, subStateKey);
    if (!subStateNode) {
      return allSubStateNodes;
    }
    var subStateNodes = getStateNodes(subStateNode, stateValue[subStateKey]);
    return allSubStateNodes.concat(subStateNodes);
  }, []));
}
function transitionAtomicNode(stateNode, stateValue, snapshot, event) {
  var childStateNode = getStateNode(stateNode, stateValue);
  var next = childStateNode.next(snapshot, event);
  if (!next || !next.length) {
    return stateNode.next(snapshot, event);
  }
  return next;
}
function transitionCompoundNode(stateNode, stateValue, snapshot, event) {
  var subStateKeys = Object.keys(stateValue);
  var childStateNode = getStateNode(stateNode, subStateKeys[0]);
  var next = transitionNode(childStateNode, stateValue[subStateKeys[0]], snapshot, event);
  if (!next || !next.length) {
    return stateNode.next(snapshot, event);
  }
  return next;
}
function transitionParallelNode(stateNode, stateValue, snapshot, event) {
  var allInnerTransitions = [];
  for (var _i3 = 0, _Object$keys2 = Object.keys(stateValue); _i3 < _Object$keys2.length; _i3++) {
    var subStateKey = _Object$keys2[_i3];
    var subStateValue = stateValue[subStateKey];
    if (!subStateValue) {
      continue;
    }
    var subStateNode = getStateNode(stateNode, subStateKey);
    var innerTransitions = transitionNode(subStateNode, subStateValue, snapshot, event);
    if (innerTransitions) {
      allInnerTransitions.push.apply(allInnerTransitions, _toConsumableArray(innerTransitions));
    }
  }
  if (!allInnerTransitions.length) {
    return stateNode.next(snapshot, event);
  }
  return allInnerTransitions;
}
function transitionNode(stateNode, stateValue, snapshot, event) {
  // leaf node
  if (typeof stateValue === 'string') {
    return transitionAtomicNode(stateNode, stateValue, snapshot, event);
  }

  // compound node
  if (Object.keys(stateValue).length === 1) {
    return transitionCompoundNode(stateNode, stateValue, snapshot, event);
  }

  // parallel node
  return transitionParallelNode(stateNode, stateValue, snapshot, event);
}
function getHistoryNodes(stateNode) {
  return Object.keys(stateNode.states).map(function (key) {
    return stateNode.states[key];
  }).filter(function (sn) {
    return sn.type === 'history';
  });
}
function isDescendant(childStateNode, parentStateNode) {
  var marker = childStateNode;
  while (marker.parent && marker.parent !== parentStateNode) {
    marker = marker.parent;
  }
  return marker.parent === parentStateNode;
}
function hasIntersection(s1, s2) {
  var set1 = new Set(s1);
  var set2 = new Set(s2);
  var _iterator16 = _createForOfIteratorHelper(set1),
    _step16;
  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var item = _step16.value;
      if (set2.has(item)) {
        return true;
      }
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }
  var _iterator17 = _createForOfIteratorHelper(set2),
    _step17;
  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var _item = _step17.value;
      if (set1.has(_item)) {
        return true;
      }
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }
  return false;
}
function removeConflictingTransitions(enabledTransitions, stateNodeSet, historyValue) {
  var filteredTransitions = new Set();
  var _iterator18 = _createForOfIteratorHelper(enabledTransitions),
    _step18;
  try {
    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
      var t1 = _step18.value;
      var t1Preempted = false;
      var transitionsToRemove = new Set();
      var _iterator19 = _createForOfIteratorHelper(filteredTransitions),
        _step19;
      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var t2 = _step19.value;
          if (hasIntersection(computeExitSet([t1], stateNodeSet, historyValue), computeExitSet([t2], stateNodeSet, historyValue))) {
            if (isDescendant(t1.source, t2.source)) {
              transitionsToRemove.add(t2);
            } else {
              t1Preempted = true;
              break;
            }
          }
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
      if (!t1Preempted) {
        var _iterator20 = _createForOfIteratorHelper(transitionsToRemove),
          _step20;
        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var t3 = _step20.value;
            filteredTransitions["delete"](t3);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }
        filteredTransitions.add(t1);
      }
    }
  } catch (err) {
    _iterator18.e(err);
  } finally {
    _iterator18.f();
  }
  return Array.from(filteredTransitions);
}
function findLeastCommonAncestor(stateNodes) {
  var _stateNodes = _toArray(stateNodes),
    head = _stateNodes[0],
    tail = _stateNodes.slice(1);
  var _iterator21 = _createForOfIteratorHelper(getProperAncestors(head, undefined)),
    _step21;
  try {
    var _loop3 = function _loop3() {
        var ancestor = _step21.value;
        if (tail.every(function (sn) {
          return isDescendant(sn, ancestor);
        })) {
          return {
            v: ancestor
          };
        }
      },
      _ret;
    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
      _ret = _loop3();
      if (_ret) return _ret.v;
    }
  } catch (err) {
    _iterator21.e(err);
  } finally {
    _iterator21.f();
  }
}
function getEffectiveTargetStates(transition, historyValue) {
  if (!transition.target) {
    return [];
  }
  var targets = new Set();
  var _iterator22 = _createForOfIteratorHelper(transition.target),
    _step22;
  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
      var targetNode = _step22.value;
      if (isHistoryNode(targetNode)) {
        if (historyValue[targetNode.id]) {
          var _iterator23 = _createForOfIteratorHelper(historyValue[targetNode.id]),
            _step23;
          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var node = _step23.value;
              targets.add(node);
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }
        } else {
          var _iterator24 = _createForOfIteratorHelper(getEffectiveTargetStates(resolveHistoryDefaultTransition(targetNode), historyValue)),
            _step24;
          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var _node = _step24.value;
              targets.add(_node);
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
        }
      } else {
        targets.add(targetNode);
      }
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }
  return _toConsumableArray(targets);
}
function getTransitionDomain(transition, historyValue) {
  var targetStates = getEffectiveTargetStates(transition, historyValue);
  if (!targetStates) {
    return;
  }
  if (!transition.reenter && targetStates.every(function (target) {
    return target === transition.source || isDescendant(target, transition.source);
  })) {
    return transition.source;
  }
  var lca = findLeastCommonAncestor(targetStates.concat(transition.source));
  if (lca) {
    return lca;
  }

  // at this point we know that it's a root transition since LCA couldn't be found
  if (transition.reenter) {
    return;
  }
  return transition.source.machine.root;
}
function computeExitSet(transitions, stateNodeSet, historyValue) {
  var statesToExit = new Set();
  var _iterator25 = _createForOfIteratorHelper(transitions),
    _step25;
  try {
    for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
      var _t$target;
      var t = _step25.value;
      if ((_t$target = t.target) !== null && _t$target !== void 0 && _t$target.length) {
        var domain = getTransitionDomain(t, historyValue);
        if (t.reenter && t.source === domain) {
          statesToExit.add(domain);
        }
        var _iterator26 = _createForOfIteratorHelper(stateNodeSet),
          _step26;
        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var stateNode = _step26.value;
            if (isDescendant(stateNode, domain)) {
              statesToExit.add(stateNode);
            }
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
      }
    }
  } catch (err) {
    _iterator25.e(err);
  } finally {
    _iterator25.f();
  }
  return _toConsumableArray(statesToExit);
}
function areStateNodeCollectionsEqual(prevStateNodes, nextStateNodeSet) {
  if (prevStateNodes.length !== nextStateNodeSet.size) {
    return false;
  }
  var _iterator27 = _createForOfIteratorHelper(prevStateNodes),
    _step27;
  try {
    for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
      var node = _step27.value;
      if (!nextStateNodeSet.has(node)) {
        return false;
      }
    }
  } catch (err) {
    _iterator27.e(err);
  } finally {
    _iterator27.f();
  }
  return true;
}

/**
 * https://www.w3.org/TR/scxml/#microstepProcedure
 */
function microstep(transitions, currentSnapshot, actorScope, event, isInitial, internalQueue) {
  if (!transitions.length) {
    return currentSnapshot;
  }
  var mutStateNodeSet = new Set(currentSnapshot._nodes);
  var historyValue = currentSnapshot.historyValue;
  var filteredTransitions = removeConflictingTransitions(transitions, mutStateNodeSet, historyValue);
  var nextState = currentSnapshot;

  // Exit states
  if (!isInitial) {
    var _exitStates = exitStates(nextState, event, actorScope, filteredTransitions, mutStateNodeSet, historyValue, internalQueue);
    var _exitStates2 = _slicedToArray(_exitStates, 2);
    nextState = _exitStates2[0];
    historyValue = _exitStates2[1];
  }

  // Execute transition content
  nextState = resolveActionsAndContext(nextState, event, actorScope, filteredTransitions.flatMap(function (t) {
    return t.actions;
  }), internalQueue);

  // Enter states
  nextState = enterStates(nextState, event, actorScope, filteredTransitions, mutStateNodeSet, internalQueue, historyValue, isInitial);
  var nextStateNodes = _toConsumableArray(mutStateNodeSet);
  if (nextState.status === 'done') {
    nextState = resolveActionsAndContext(nextState, event, actorScope, nextStateNodes.sort(function (a, b) {
      return b.order - a.order;
    }).flatMap(function (state) {
      return state.exit;
    }), internalQueue);
  }
  try {
    if (historyValue === currentSnapshot.historyValue && areStateNodeCollectionsEqual(currentSnapshot._nodes, mutStateNodeSet)) {
      return nextState;
    }
    return cloneMachineSnapshot(nextState, {
      _nodes: nextStateNodes,
      historyValue: historyValue
    });
  } catch (e) {
    // TODO: Refactor this once proper error handling is implemented.
    // See https://github.com/statelyai/rfcs/pull/4
    throw e;
  }
}
function getMachineOutput(snapshot, event, actorScope, rootNode, rootCompletionNode) {
  if (rootNode.output === undefined) {
    return;
  }
  var doneStateEvent = createDoneStateEvent(rootCompletionNode.id, rootCompletionNode.output !== undefined && rootCompletionNode.parent ? resolveOutput(rootCompletionNode.output, snapshot.context, event, actorScope.self) : undefined);
  return resolveOutput(rootNode.output, snapshot.context, doneStateEvent, actorScope.self);
}
function enterStates(currentSnapshot, event, actorScope, filteredTransitions, mutStateNodeSet, internalQueue, historyValue, isInitial) {
  var nextSnapshot = currentSnapshot;
  var statesToEnter = new Set();
  // those are states that were directly targeted or indirectly targeted by the explicit target
  // in other words, those are states for which initial actions should be executed
  // when we target `#deep_child` initial actions of its ancestors shouldn't be executed
  var statesForDefaultEntry = new Set();
  computeEntrySet(filteredTransitions, historyValue, statesForDefaultEntry, statesToEnter);

  // In the initial state, the root state node is "entered".
  if (isInitial) {
    statesForDefaultEntry.add(currentSnapshot.machine.root);
  }
  var completedNodes = new Set();
  var _iterator28 = _createForOfIteratorHelper(_toConsumableArray(statesToEnter).sort(function (a, b) {
      return a.order - b.order;
    })),
    _step28;
  try {
    for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
      var stateNodeToEnter = _step28.value;
      mutStateNodeSet.add(stateNodeToEnter);
      var actions = [];

      // Add entry actions
      actions.push.apply(actions, _toConsumableArray(stateNodeToEnter.entry));
      var _iterator29 = _createForOfIteratorHelper(stateNodeToEnter.invoke),
        _step29;
      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var invokeDef = _step29.value;
          actions.push(spawnChild(invokeDef.src, _objectSpread(_objectSpread({}, invokeDef), {}, {
            syncSnapshot: !!invokeDef.onSnapshot
          })));
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }
      if (statesForDefaultEntry.has(stateNodeToEnter)) {
        var initialActions = stateNodeToEnter.initial.actions;
        actions.push.apply(actions, _toConsumableArray(initialActions));
      }
      nextSnapshot = resolveActionsAndContext(nextSnapshot, event, actorScope, actions, internalQueue, stateNodeToEnter.invoke.map(function (invokeDef) {
        return invokeDef.id;
      }));
      if (stateNodeToEnter.type === 'final') {
        var parent = stateNodeToEnter.parent;
        var ancestorMarker = (parent === null || parent === void 0 ? void 0 : parent.type) === 'parallel' ? parent : parent === null || parent === void 0 ? void 0 : parent.parent;
        var rootCompletionNode = ancestorMarker || stateNodeToEnter;
        if ((parent === null || parent === void 0 ? void 0 : parent.type) === 'compound') {
          internalQueue.push(createDoneStateEvent(parent.id, stateNodeToEnter.output !== undefined ? resolveOutput(stateNodeToEnter.output, nextSnapshot.context, event, actorScope.self) : undefined));
        }
        while (((_ancestorMarker = ancestorMarker) === null || _ancestorMarker === void 0 ? void 0 : _ancestorMarker.type) === 'parallel' && !completedNodes.has(ancestorMarker) && isInFinalState(mutStateNodeSet, ancestorMarker)) {
          var _ancestorMarker;
          completedNodes.add(ancestorMarker);
          internalQueue.push(createDoneStateEvent(ancestorMarker.id));
          rootCompletionNode = ancestorMarker;
          ancestorMarker = ancestorMarker.parent;
        }
        if (ancestorMarker) {
          continue;
        }
        nextSnapshot = cloneMachineSnapshot(nextSnapshot, {
          status: 'done',
          output: getMachineOutput(nextSnapshot, event, actorScope, nextSnapshot.machine.root, rootCompletionNode)
        });
      }
    }
  } catch (err) {
    _iterator28.e(err);
  } finally {
    _iterator28.f();
  }
  return nextSnapshot;
}
function computeEntrySet(transitions, historyValue, statesForDefaultEntry, statesToEnter) {
  var _iterator30 = _createForOfIteratorHelper(transitions),
    _step30;
  try {
    for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
      var t = _step30.value;
      var domain = getTransitionDomain(t, historyValue);
      var _iterator31 = _createForOfIteratorHelper(t.target || []),
        _step31;
      try {
        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
          var s = _step31.value;
          if (!isHistoryNode(s) && (
          // if the target is different than the source then it will *definitely* be entered
          t.source !== s ||
          // we know that the domain can't lie within the source
          // if it's different than the source then it's outside of it and it means that the target has to be entered as well
          t.source !== domain ||
          // reentering transitions always enter the target, even if it's the source itself
          t.reenter)) {
            statesToEnter.add(s);
            statesForDefaultEntry.add(s);
          }
          addDescendantStatesToEnter(s, historyValue, statesForDefaultEntry, statesToEnter);
        }
      } catch (err) {
        _iterator31.e(err);
      } finally {
        _iterator31.f();
      }
      var targetStates = getEffectiveTargetStates(t, historyValue);
      var _iterator32 = _createForOfIteratorHelper(targetStates),
        _step32;
      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var _s2 = _step32.value;
          var ancestors = getProperAncestors(_s2, domain);
          if ((domain === null || domain === void 0 ? void 0 : domain.type) === 'parallel') {
            ancestors.push(domain);
          }
          addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, ancestors, !t.source.parent && t.reenter ? undefined : domain);
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }
    }
  } catch (err) {
    _iterator30.e(err);
  } finally {
    _iterator30.f();
  }
}
function addDescendantStatesToEnter(stateNode, historyValue, statesForDefaultEntry, statesToEnter) {
  if (isHistoryNode(stateNode)) {
    if (historyValue[stateNode.id]) {
      var historyStateNodes = historyValue[stateNode.id];
      var _iterator33 = _createForOfIteratorHelper(historyStateNodes),
        _step33;
      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var s = _step33.value;
          statesToEnter.add(s);
          addDescendantStatesToEnter(s, historyValue, statesForDefaultEntry, statesToEnter);
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }
      var _iterator34 = _createForOfIteratorHelper(historyStateNodes),
        _step34;
      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var _s3 = _step34.value;
          addProperAncestorStatesToEnter(_s3, stateNode.parent, statesToEnter, historyValue, statesForDefaultEntry);
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
    } else {
      var historyDefaultTransition = resolveHistoryDefaultTransition(stateNode);
      var _iterator35 = _createForOfIteratorHelper(historyDefaultTransition.target),
        _step35;
      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var _stateNode$parent;
          var _s4 = _step35.value;
          statesToEnter.add(_s4);
          if (historyDefaultTransition === ((_stateNode$parent = stateNode.parent) === null || _stateNode$parent === void 0 ? void 0 : _stateNode$parent.initial)) {
            statesForDefaultEntry.add(stateNode.parent);
          }
          addDescendantStatesToEnter(_s4, historyValue, statesForDefaultEntry, statesToEnter);
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }
      var _iterator36 = _createForOfIteratorHelper(historyDefaultTransition.target),
        _step36;
      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var _s5 = _step36.value;
          addProperAncestorStatesToEnter(_s5, stateNode.parent, statesToEnter, historyValue, statesForDefaultEntry);
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
    }
  } else {
    if (stateNode.type === 'compound') {
      var _stateNode$initial$ta = _slicedToArray(stateNode.initial.target, 1),
        initialState = _stateNode$initial$ta[0];
      if (!isHistoryNode(initialState)) {
        statesToEnter.add(initialState);
        statesForDefaultEntry.add(initialState);
      }
      addDescendantStatesToEnter(initialState, historyValue, statesForDefaultEntry, statesToEnter);
      addProperAncestorStatesToEnter(initialState, stateNode, statesToEnter, historyValue, statesForDefaultEntry);
    } else {
      if (stateNode.type === 'parallel') {
        var _iterator37 = _createForOfIteratorHelper(getChildren(stateNode).filter(function (sn) {
            return !isHistoryNode(sn);
          })),
          _step37;
        try {
          var _loop4 = function _loop4() {
            var child = _step37.value;
            if (!_toConsumableArray(statesToEnter).some(function (s) {
              return isDescendant(s, child);
            })) {
              if (!isHistoryNode(child)) {
                statesToEnter.add(child);
                statesForDefaultEntry.add(child);
              }
              addDescendantStatesToEnter(child, historyValue, statesForDefaultEntry, statesToEnter);
            }
          };
          for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
            _loop4();
          }
        } catch (err) {
          _iterator37.e(err);
        } finally {
          _iterator37.f();
        }
      }
    }
  }
}
function addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, ancestors, reentrancyDomain) {
  var _iterator38 = _createForOfIteratorHelper(ancestors),
    _step38;
  try {
    for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
      var anc = _step38.value;
      if (!reentrancyDomain || isDescendant(anc, reentrancyDomain)) {
        statesToEnter.add(anc);
      }
      if (anc.type === 'parallel') {
        var _iterator39 = _createForOfIteratorHelper(getChildren(anc).filter(function (sn) {
            return !isHistoryNode(sn);
          })),
          _step39;
        try {
          var _loop5 = function _loop5() {
            var child = _step39.value;
            if (!_toConsumableArray(statesToEnter).some(function (s) {
              return isDescendant(s, child);
            })) {
              statesToEnter.add(child);
              addDescendantStatesToEnter(child, historyValue, statesForDefaultEntry, statesToEnter);
            }
          };
          for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
            _loop5();
          }
        } catch (err) {
          _iterator39.e(err);
        } finally {
          _iterator39.f();
        }
      }
    }
  } catch (err) {
    _iterator38.e(err);
  } finally {
    _iterator38.f();
  }
}
function addProperAncestorStatesToEnter(stateNode, toStateNode, statesToEnter, historyValue, statesForDefaultEntry) {
  addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, getProperAncestors(stateNode, toStateNode));
}
function exitStates(currentSnapshot, event, actorScope, transitions, mutStateNodeSet, historyValue, internalQueue) {
  var nextSnapshot = currentSnapshot;
  var statesToExit = computeExitSet(transitions, mutStateNodeSet, historyValue);
  statesToExit.sort(function (a, b) {
    return b.order - a.order;
  });
  var changedHistory;

  // From SCXML algorithm: https://www.w3.org/TR/scxml/#exitStates
  var _iterator40 = _createForOfIteratorHelper(statesToExit),
    _step40;
  try {
    var _loop6 = function _loop6() {
      var exitStateNode = _step40.value;
      var _iterator42 = _createForOfIteratorHelper(getHistoryNodes(exitStateNode)),
        _step42;
      try {
        for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
          var _changedHistory;
          var historyNode = _step42.value;
          var predicate = void 0;
          if (historyNode.history === 'deep') {
            predicate = function predicate(sn) {
              return isAtomicStateNode(sn) && isDescendant(sn, exitStateNode);
            };
          } else {
            predicate = function predicate(sn) {
              return sn.parent === exitStateNode;
            };
          }
          (_changedHistory = changedHistory) !== null && _changedHistory !== void 0 ? _changedHistory : changedHistory = _objectSpread({}, historyValue);
          changedHistory[historyNode.id] = Array.from(mutStateNodeSet).filter(predicate);
        }
      } catch (err) {
        _iterator42.e(err);
      } finally {
        _iterator42.f();
      }
    };
    for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
      _loop6();
    }
  } catch (err) {
    _iterator40.e(err);
  } finally {
    _iterator40.f();
  }
  var _iterator41 = _createForOfIteratorHelper(statesToExit),
    _step41;
  try {
    for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
      var s = _step41.value;
      nextSnapshot = resolveActionsAndContext(nextSnapshot, event, actorScope, [].concat(_toConsumableArray(s.exit), _toConsumableArray(s.invoke.map(function (def) {
        return stopChild(def.id);
      }))), internalQueue);
      mutStateNodeSet["delete"](s);
    }
  } catch (err) {
    _iterator41.e(err);
  } finally {
    _iterator41.f();
  }
  return [nextSnapshot, changedHistory || historyValue];
}
function resolveAndExecuteActionsWithContext(currentSnapshot, event, actorScope, actions, extra, retries) {
  var machine = currentSnapshot.machine;
  var intermediateSnapshot = currentSnapshot;
  var _iterator43 = _createForOfIteratorHelper(actions),
    _step43;
  try {
    var _loop7 = function _loop7() {
        var action = _step43.value;
        var isInline = typeof action === 'function';
        var resolvedAction = isInline ? action :
        // the existing type of `.actions` assumes non-nullable `TExpressionAction`
        // it's fine to cast this here to get a common type and lack of errors in the rest of the code
        // our logic below makes sure that we call those 2 "variants" correctly
        machine.implementations.actions[typeof action === 'string' ? action : action.type];
        if (!resolvedAction) {
          return 0; // continue
        }
        var actionArgs = {
          context: intermediateSnapshot.context,
          event: event,
          self: actorScope.self,
          system: actorScope.system
        };
        var actionParams = isInline || typeof action === 'string' ? undefined : 'params' in action ? typeof action.params === 'function' ? action.params({
          context: intermediateSnapshot.context,
          event: event
        }) : action.params : undefined;
        function executeAction() {
          actorScope.system._sendInspectionEvent({
            type: '@xstate.action',
            actorRef: actorScope.self,
            action: {
              type: typeof action === 'string' ? action : _typeof(action) === 'object' ? action.type : action.name || '(anonymous)',
              params: actionParams
            }
          });
          resolvedAction(actionArgs, actionParams);
        }
        if (!('resolve' in resolvedAction)) {
          if (actorScope.self._processingStatus === ProcessingStatus.Running) {
            executeAction();
          } else {
            actorScope.defer(function () {
              executeAction();
            });
          }
          return 0; // continue
        }
        var builtinAction = resolvedAction;
        var _builtinAction$resolv = builtinAction.resolve(actorScope, intermediateSnapshot, actionArgs, actionParams, resolvedAction,
          // this holds all params
          extra),
          _builtinAction$resolv2 = _slicedToArray(_builtinAction$resolv, 3),
          nextState = _builtinAction$resolv2[0],
          params = _builtinAction$resolv2[1],
          actions = _builtinAction$resolv2[2];
        intermediateSnapshot = nextState;
        if ('retryResolve' in builtinAction) {
          retries === null || retries === void 0 || retries.push([builtinAction, params]);
        }
        if ('execute' in builtinAction) {
          if (actorScope.self._processingStatus === ProcessingStatus.Running) {
            builtinAction.execute(actorScope, params);
          } else {
            actorScope.defer(builtinAction.execute.bind(null, actorScope, params));
          }
        }
        if (actions) {
          intermediateSnapshot = resolveAndExecuteActionsWithContext(intermediateSnapshot, event, actorScope, actions, extra, retries);
        }
      },
      _ret2;
    for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
      _ret2 = _loop7();
      if (_ret2 === 0) continue;
    }
  } catch (err) {
    _iterator43.e(err);
  } finally {
    _iterator43.f();
  }
  return intermediateSnapshot;
}
function resolveActionsAndContext(currentSnapshot, event, actorScope, actions, internalQueue, deferredActorIds) {
  var retries = deferredActorIds ? [] : undefined;
  var nextState = resolveAndExecuteActionsWithContext(currentSnapshot, event, actorScope, actions, {
    internalQueue: internalQueue,
    deferredActorIds: deferredActorIds
  }, retries);
  retries === null || retries === void 0 || retries.forEach(function (_ref22) {
    var _ref23 = _slicedToArray(_ref22, 2),
      builtinAction = _ref23[0],
      params = _ref23[1];
    builtinAction.retryResolve(actorScope, nextState, params);
  });
  return nextState;
}
function macrostep(snapshot, event, actorScope) {
  var internalQueue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  if (event.type === WILDCARD) {
    throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
  }
  var nextSnapshot = snapshot;
  var microstates = [];
  function addMicrostate(microstate, event, transitions) {
    actorScope.system._sendInspectionEvent({
      type: '@xstate.microstep',
      actorRef: actorScope.self,
      event: event,
      snapshot: microstate,
      _transitions: transitions
    });
    microstates.push(microstate);
  }

  // Handle stop event
  if (event.type === XSTATE_STOP) {
    nextSnapshot = cloneMachineSnapshot(stopChildren(nextSnapshot, event, actorScope), {
      status: 'stopped'
    });
    addMicrostate(nextSnapshot, event, []);
    return {
      snapshot: nextSnapshot,
      microstates: microstates
    };
  }
  var nextEvent = event;

  // Assume the state is at rest (no raised events)
  // Determine the next state based on the next microstep
  if (nextEvent.type !== XSTATE_INIT) {
    var currentEvent = nextEvent;
    var isErr = isErrorActorEvent(currentEvent);
    var transitions = selectTransitions(currentEvent, nextSnapshot);
    if (isErr && !transitions.length) {
      // TODO: we should likely only allow transitions selected by very explicit descriptors
      // `*` shouldn't be matched, likely `xstate.error.*` shouldnt be either
      // similarly `xstate.error.actor.*` and `xstate.error.actor.todo.*` have to be considered too
      nextSnapshot = cloneMachineSnapshot(snapshot, {
        status: 'error',
        error: currentEvent.error
      });
      addMicrostate(nextSnapshot, currentEvent, []);
      return {
        snapshot: nextSnapshot,
        microstates: microstates
      };
    }
    nextSnapshot = microstep(transitions, snapshot, actorScope, nextEvent, false,
    // isInitial
    internalQueue);
    addMicrostate(nextSnapshot, currentEvent, transitions);
  }
  var shouldSelectEventlessTransitions = true;
  while (nextSnapshot.status === 'active') {
    var enabledTransitions = shouldSelectEventlessTransitions ? selectEventlessTransitions(nextSnapshot, nextEvent) : [];

    // eventless transitions should always be selected after selecting *regular* transitions
    // by assigning `undefined` to `previousState` we ensure that `shouldSelectEventlessTransitions` gets always computed to true in such a case
    var previousState = enabledTransitions.length ? nextSnapshot : undefined;
    if (!enabledTransitions.length) {
      if (!internalQueue.length) {
        break;
      }
      nextEvent = internalQueue.shift();
      enabledTransitions = selectTransitions(nextEvent, nextSnapshot);
    }
    nextSnapshot = microstep(enabledTransitions, nextSnapshot, actorScope, nextEvent, false, internalQueue);
    shouldSelectEventlessTransitions = nextSnapshot !== previousState;
    addMicrostate(nextSnapshot, nextEvent, enabledTransitions);
  }
  if (nextSnapshot.status !== 'active') {
    stopChildren(nextSnapshot, nextEvent, actorScope);
  }
  return {
    snapshot: nextSnapshot,
    microstates: microstates
  };
}
function stopChildren(nextState, event, actorScope) {
  return resolveActionsAndContext(nextState, event, actorScope, Object.values(nextState.children).map(function (child) {
    return stopChild(child);
  }), []);
}
function selectTransitions(event, nextState) {
  return nextState.machine.getTransitionData(nextState, event);
}
function selectEventlessTransitions(nextState, event) {
  var enabledTransitionSet = new Set();
  var atomicStates = nextState._nodes.filter(isAtomicStateNode);
  var _iterator44 = _createForOfIteratorHelper(atomicStates),
    _step44;
  try {
    for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
      var stateNode = _step44.value;
      var _iterator45 = _createForOfIteratorHelper([stateNode].concat(getProperAncestors(stateNode, undefined))),
        _step45;
      try {
        loop: for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
          var s = _step45.value;
          if (!s.always) {
            continue;
          }
          var _iterator46 = _createForOfIteratorHelper(s.always),
            _step46;
          try {
            for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
              var transition = _step46.value;
              if (transition.guard === undefined || evaluateGuard(transition.guard, nextState.context, event, nextState)) {
                enabledTransitionSet.add(transition);
                break loop;
              }
            }
          } catch (err) {
            _iterator46.e(err);
          } finally {
            _iterator46.f();
          }
        }
      } catch (err) {
        _iterator45.e(err);
      } finally {
        _iterator45.f();
      }
    }
  } catch (err) {
    _iterator44.e(err);
  } finally {
    _iterator44.f();
  }
  return removeConflictingTransitions(Array.from(enabledTransitionSet), new Set(nextState._nodes), nextState.historyValue);
}

/**
 * Resolves a partial state value with its full representation in the state node's machine.
 *
 * @param stateValue The partial state value to resolve.
 */
function resolveStateValue(rootNode, stateValue) {
  var allStateNodes = getAllStateNodes(getStateNodes(rootNode, stateValue));
  return getStateValue(rootNode, _toConsumableArray(allStateNodes));
}
function isMachineSnapshot(value) {
  return !!value && _typeof(value) === 'object' && 'machine' in value && 'value' in value;
}
var machineSnapshotMatches = function matches(testValue) {
  return matchesState(testValue, this.value);
};
var machineSnapshotHasTag = function hasTag(tag) {
  return this.tags.has(tag);
};
var machineSnapshotCan = function can(event) {
  if (!this.machine) {
    console.warn("state.can(...) used outside of a machine-created State object; this will always return false.");
  }
  var transitionData = this.machine.getTransitionData(this, event);
  return !!(transitionData !== null && transitionData !== void 0 && transitionData.length) &&
  // Check that at least one transition is not forbidden
  transitionData.some(function (t) {
    return t.target !== undefined || t.actions.length;
  });
};
var machineSnapshotToJSON = function toJSON() {
  var nodes = this._nodes,
    tags = this.tags,
    machine = this.machine,
    getMeta = this.getMeta,
    toJSON = this.toJSON,
    can = this.can,
    hasTag = this.hasTag,
    matches = this.matches,
    jsonValues = _objectWithoutProperties(this, _excluded);
  return _objectSpread(_objectSpread({}, jsonValues), {}, {
    tags: Array.from(tags)
  });
};
var machineSnapshotGetMeta = function getMeta() {
  return this._nodes.reduce(function (acc, stateNode) {
    if (stateNode.meta !== undefined) {
      acc[stateNode.id] = stateNode.meta;
    }
    return acc;
  }, {});
};
function createMachineSnapshot(config, machine) {
  return {
    status: config.status,
    output: config.output,
    error: config.error,
    machine: machine,
    context: config.context,
    _nodes: config._nodes,
    value: getStateValue(machine.root, config._nodes),
    tags: new Set(config._nodes.flatMap(function (sn) {
      return sn.tags;
    })),
    children: config.children,
    historyValue: config.historyValue || {},
    matches: machineSnapshotMatches,
    hasTag: machineSnapshotHasTag,
    can: machineSnapshotCan,
    getMeta: machineSnapshotGetMeta,
    toJSON: machineSnapshotToJSON
  };
}
function cloneMachineSnapshot(snapshot) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return createMachineSnapshot(_objectSpread(_objectSpread({}, snapshot), config), snapshot.machine);
}
function getPersistedSnapshot(snapshot, options) {
  var nodes = snapshot._nodes,
    tags = snapshot.tags,
    machine = snapshot.machine,
    children = snapshot.children,
    context = snapshot.context,
    can = snapshot.can,
    hasTag = snapshot.hasTag,
    matches = snapshot.matches,
    getMeta = snapshot.getMeta,
    toJSON = snapshot.toJSON,
    jsonValues = _objectWithoutProperties(snapshot, _excluded2);
  var childrenJson = {};
  for (var id in children) {
    var child = children[id];
    if (typeof child.src !== 'string' && (!options || !('__unsafeAllowInlineActors' in options))) {
      throw new Error('An inline child actor cannot be persisted.');
    }
    childrenJson[id] = {
      snapshot: child.getPersistedSnapshot(options),
      src: child.src,
      systemId: child._systemId,
      syncSnapshot: child._syncSnapshot
    };
  }
  var persisted = _objectSpread(_objectSpread({}, jsonValues), {}, {
    context: persistContext(context),
    children: childrenJson
  });
  return persisted;
}
function persistContext(contextPart) {
  var _copy3;
  var copy;
  for (var key in contextPart) {
    var value = contextPart[key];
    if (value && _typeof(value) === 'object') {
      if ('sessionId' in value && 'send' in value && 'ref' in value) {
        var _copy;
        (_copy = copy) !== null && _copy !== void 0 ? _copy : copy = Array.isArray(contextPart) ? contextPart.slice() : _objectSpread({}, contextPart);
        copy[key] = {
          xstate$$type: $$ACTOR_TYPE,
          id: value.id
        };
      } else {
        var result = persistContext(value);
        if (result !== value) {
          var _copy2;
          (_copy2 = copy) !== null && _copy2 !== void 0 ? _copy2 : copy = Array.isArray(contextPart) ? contextPart.slice() : _objectSpread({}, contextPart);
          copy[key] = result;
        }
      }
    }
  }
  return (_copy3 = copy) !== null && _copy3 !== void 0 ? _copy3 : contextPart;
}
function resolveRaise(_, snapshot, args, actionParams, _ref24, _ref25) {
  var eventOrExpr = _ref24.event,
    id = _ref24.id,
    delay = _ref24.delay;
  var internalQueue = _ref25.internalQueue;
  var delaysMap = snapshot.machine.implementations.delays;
  if (typeof eventOrExpr === 'string') {
    throw new Error("Only event objects may be used with raise; use raise({ type: \"".concat(eventOrExpr, "\" }) instead"));
  }
  var resolvedEvent = typeof eventOrExpr === 'function' ? eventOrExpr(args, actionParams) : eventOrExpr;
  var resolvedDelay;
  if (typeof delay === 'string') {
    var configDelay = delaysMap && delaysMap[delay];
    resolvedDelay = typeof configDelay === 'function' ? configDelay(args, actionParams) : configDelay;
  } else {
    resolvedDelay = typeof delay === 'function' ? delay(args, actionParams) : delay;
  }
  if (typeof resolvedDelay !== 'number') {
    internalQueue.push(resolvedEvent);
  }
  return [snapshot, {
    event: resolvedEvent,
    id: id,
    delay: resolvedDelay
  }];
}
function executeRaise(actorScope, params) {
  var event = params.event,
    delay = params.delay,
    id = params.id;
  if (typeof delay === 'number') {
    actorScope.defer(function () {
      var self = actorScope.self;
      actorScope.system.scheduler.schedule(self, self, event, delay, id);
    });
    return;
  }
}
/**
 * Raises an event. This places the event in the internal event queue, so that
 * the event is immediately consumed by the machine in the current step.
 *
 * @param eventType The event to raise.
 */
function raise(eventOrExpr, options) {
  function raise(args, params) {
    {
      throw new Error("This isn't supposed to be called");
    }
  }
  raise.type = 'xstate.raise';
  raise.event = eventOrExpr;
  raise.id = options === null || options === void 0 ? void 0 : options.id;
  raise.delay = options === null || options === void 0 ? void 0 : options.delay;
  raise.resolve = resolveRaise;
  raise.execute = executeRaise;
  return raise;
}


/***/ }),

/***/ "./node_modules/xstate/dist/xstate.development.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/xstate/dist/xstate.development.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Actor: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.B),
/* harmony export */   SimulatedClock: () => (/* binding */ SimulatedClock),
/* harmony export */   SpecialTargets: () => (/* reexport safe */ _log_0fbf8cec_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.S),
/* harmony export */   StateMachine: () => (/* binding */ StateMachine),
/* harmony export */   StateNode: () => (/* binding */ StateNode),
/* harmony export */   __unsafe_getAllOwnEventDescriptors: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   and: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.E),
/* harmony export */   assertEvent: () => (/* binding */ assertEvent),
/* harmony export */   assign: () => (/* reexport safe */ _log_0fbf8cec_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.a),
/* harmony export */   cancel: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.M),
/* harmony export */   createActor: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   createEmptyActor: () => (/* reexport safe */ _actors_dist_xstate_actors_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.createEmptyActor),
/* harmony export */   createMachine: () => (/* binding */ _createMachine),
/* harmony export */   emit: () => (/* reexport safe */ _log_0fbf8cec_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.e),
/* harmony export */   enqueueActions: () => (/* reexport safe */ _log_0fbf8cec_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.b),
/* harmony export */   forwardTo: () => (/* reexport safe */ _log_0fbf8cec_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.f),
/* harmony export */   fromCallback: () => (/* reexport safe */ _actors_dist_xstate_actors_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.fromCallback),
/* harmony export */   fromEventObservable: () => (/* reexport safe */ _actors_dist_xstate_actors_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.fromEventObservable),
/* harmony export */   fromObservable: () => (/* reexport safe */ _actors_dist_xstate_actors_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.fromObservable),
/* harmony export */   fromPromise: () => (/* reexport safe */ _actors_dist_xstate_actors_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.fromPromise),
/* harmony export */   fromTransition: () => (/* reexport safe */ _actors_dist_xstate_actors_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.fromTransition),
/* harmony export */   getInitialSnapshot: () => (/* binding */ getInitialSnapshot),
/* harmony export */   getNextSnapshot: () => (/* binding */ getNextSnapshot),
/* harmony export */   getStateNodes: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   interpret: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   isMachineSnapshot: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.D),
/* harmony export */   log: () => (/* reexport safe */ _log_0fbf8cec_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.l),
/* harmony export */   matchesState: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.J),
/* harmony export */   not: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.F),
/* harmony export */   or: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.G),
/* harmony export */   pathToStateValue: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.K),
/* harmony export */   raise: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.O),
/* harmony export */   sendParent: () => (/* reexport safe */ _log_0fbf8cec_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.s),
/* harmony export */   sendTo: () => (/* reexport safe */ _log_0fbf8cec_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.c),
/* harmony export */   setup: () => (/* binding */ setup),
/* harmony export */   spawnChild: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.P),
/* harmony export */   stateIn: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   stop: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.Q),
/* harmony export */   stopChild: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   toObserver: () => (/* reexport safe */ _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   toPromise: () => (/* binding */ toPromise),
/* harmony export */   waitFor: () => (/* binding */ waitFor)
/* harmony export */ });
/* harmony import */ var _actors_dist_xstate_actors_development_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/dist/xstate-actors.development.esm.js */ "./node_modules/xstate/actors/dist/xstate-actors.development.esm.js");
/* harmony import */ var _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raise-80cc66b2.development.esm.js */ "./node_modules/xstate/dist/raise-80cc66b2.development.esm.js");
/* harmony import */ var _log_0fbf8cec_development_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-0fbf8cec.development.esm.js */ "./node_modules/xstate/dist/log-0fbf8cec.development.esm.js");
/* harmony import */ var _dev_dist_xstate_dev_development_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dev/dist/xstate-dev.development.esm.js */ "./node_modules/xstate/dev/dist/xstate-dev.development.esm.js");
var _excluded = ["onDone", "onError"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var SimulatedClock = /*#__PURE__*/function () {
  function SimulatedClock() {
    _classCallCheck(this, SimulatedClock);
    this.timeouts = new Map();
    this._now = 0;
    this._id = 0;
    this._flushing = false;
    this._flushingInvalidated = false;
  }
  _createClass(SimulatedClock, [{
    key: "now",
    value: function now() {
      return this._now;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this._id++;
    }
  }, {
    key: "setTimeout",
    value: function setTimeout(fn, timeout) {
      this._flushingInvalidated = this._flushing;
      var id = this.getId();
      this.timeouts.set(id, {
        start: this.now(),
        timeout: timeout,
        fn: fn
      });
      return id;
    }
  }, {
    key: "clearTimeout",
    value: function clearTimeout(id) {
      this._flushingInvalidated = this._flushing;
      this.timeouts["delete"](id);
    }
  }, {
    key: "set",
    value: function set(time) {
      if (this._now > time) {
        throw new Error('Unable to travel back in time');
      }
      this._now = time;
      this.flushTimeouts();
    }
  }, {
    key: "flushTimeouts",
    value: function flushTimeouts() {
      if (this._flushing) {
        this._flushingInvalidated = true;
        return;
      }
      this._flushing = true;
      var sorted = _toConsumableArray(this.timeouts).sort(function (_ref, _ref2) {
        var _ref3 = _slicedToArray(_ref, 2),
          _idA = _ref3[0],
          timeoutA = _ref3[1];
        var _ref4 = _slicedToArray(_ref2, 2),
          _idB = _ref4[0],
          timeoutB = _ref4[1];
        var endA = timeoutA.start + timeoutA.timeout;
        var endB = timeoutB.start + timeoutB.timeout;
        return endB > endA ? -1 : 1;
      });
      var _iterator = _createForOfIteratorHelper(sorted),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            id = _step$value[0],
            timeout = _step$value[1];
          if (this._flushingInvalidated) {
            this._flushingInvalidated = false;
            this._flushing = false;
            this.flushTimeouts();
            return;
          }
          if (this.now() - timeout.start >= timeout.timeout) {
            this.timeouts["delete"](id);
            timeout.fn.call(null);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this._flushing = false;
    }
  }, {
    key: "increment",
    value: function increment(ms) {
      this._now += ms;
      this.flushTimeouts();
    }
  }]);
  return SimulatedClock;
}();
var cache = new WeakMap();
function memo(object, key, fn) {
  var memoizedData = cache.get(object);
  if (!memoizedData) {
    memoizedData = _defineProperty({}, key, fn());
    cache.set(object, memoizedData);
  } else if (!(key in memoizedData)) {
    memoizedData[key] = fn();
  }
  return memoizedData[key];
}
var EMPTY_OBJECT = {};
var toSerializableAction = function toSerializableAction(action) {
  if (typeof action === 'string') {
    return {
      type: action
    };
  }
  if (typeof action === 'function') {
    if ('resolve' in action) {
      return {
        type: action.type
      };
    }
    return {
      type: action.name
    };
  }
  return action;
};
var StateNode = /*#__PURE__*/function () {
  function StateNode(
  /**
   * The raw config used to create the machine.
   */
  config, options) {
    var _this = this;
    _classCallCheck(this, StateNode);
    this.config = config;
    /**
     * The relative key of the state node, which represents its location in the overall state value.
     */
    this.key = void 0;
    /**
     * The unique ID of the state node.
     */
    this.id = void 0;
    /**
     * The type of this state node:
     *
     *  - `'atomic'` - no child state nodes
     *  - `'compound'` - nested child state nodes (XOR)
     *  - `'parallel'` - orthogonal nested child state nodes (AND)
     *  - `'history'` - history state node
     *  - `'final'` - final state node
     */
    this.type = void 0;
    /**
     * The string path from the root machine node to this node.
     */
    this.path = void 0;
    /**
     * The child state nodes.
     */
    this.states = void 0;
    /**
     * The type of history on this state node. Can be:
     *
     *  - `'shallow'` - recalls only top-level historical state value
     *  - `'deep'` - recalls historical state value at all levels
     */
    this.history = void 0;
    /**
     * The action(s) to be executed upon entering the state node.
     */
    this.entry = void 0;
    /**
     * The action(s) to be executed upon exiting the state node.
     */
    this.exit = void 0;
    /**
     * The parent state node.
     */
    this.parent = void 0;
    /**
     * The root machine node.
     */
    this.machine = void 0;
    /**
     * The meta data associated with this state node, which will be returned in State instances.
     */
    this.meta = void 0;
    /**
     * The output data sent with the "xstate.done.state._id_" event if this is a final state node.
     */
    this.output = void 0;
    /**
     * The order this state node appears. Corresponds to the implicit document order.
     */
    this.order = -1;
    this.description = void 0;
    this.tags = [];
    this.transitions = void 0;
    this.always = void 0;
    this.parent = options._parent;
    this.key = options._key;
    this.machine = options._machine;
    this.path = this.parent ? this.parent.path.concat(this.key) : [];
    this.id = this.config.id || [this.machine.id].concat(_toConsumableArray(this.path)).join(_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.S);
    this.type = this.config.type || (this.config.states && Object.keys(this.config.states).length ? 'compound' : this.config.history ? 'history' : 'atomic');
    this.description = this.config.description;
    this.order = this.machine.idMap.size;
    this.machine.idMap.set(this.id, this);
    this.states = this.config.states ? (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.config.states, function (stateConfig, key) {
      var stateNode = new StateNode(stateConfig, {
        _parent: _this,
        _key: key,
        _machine: _this.machine
      });
      return stateNode;
    }) : EMPTY_OBJECT;
    if (this.type === 'compound' && !this.config.initial) {
      throw new Error("No initial state specified for compound state node \"#".concat(this.id, "\". Try adding { initial: \"").concat(Object.keys(this.states)[0], "\" } to the state config."));
    }

    // History config
    this.history = this.config.history === true ? 'shallow' : this.config.history || false;
    this.entry = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.config.entry).slice();
    this.exit = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.config.exit).slice();
    this.meta = this.config.meta;
    this.output = this.type === 'final' || !this.parent ? this.config.output : undefined;
    this.tags = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.t)(config.tags).slice();
  }

  /** @internal */
  _createClass(StateNode, [{
    key: "_initialize",
    value: function _initialize() {
      var _this2 = this;
      this.transitions = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
      if (this.config.always) {
        this.always = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.a)(this.config.always).map(function (t) {
          return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.b)(_this2, _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.N, t);
        });
      }
      Object.keys(this.states).forEach(function (key) {
        _this2.states[key]._initialize();
      });
    }

    /**
     * The well-structured state node definition.
     */
  }, {
    key: "definition",
    get: function get() {
      var _this3 = this;
      return {
        id: this.id,
        key: this.key,
        version: this.machine.version,
        type: this.type,
        initial: this.initial ? {
          target: this.initial.target,
          source: this,
          actions: this.initial.actions.map(toSerializableAction),
          eventType: null,
          reenter: false,
          toJSON: function toJSON() {
            return {
              target: _this3.initial.target.map(function (t) {
                return "#".concat(t.id);
              }),
              source: "#".concat(_this3.id),
              actions: _this3.initial.actions.map(toSerializableAction),
              eventType: null
            };
          }
        } : undefined,
        history: this.history,
        states: (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.states, function (state) {
          return state.definition;
        }),
        on: this.on,
        transitions: _toConsumableArray(this.transitions.values()).flat().map(function (t) {
          return _objectSpread(_objectSpread({}, t), {}, {
            actions: t.actions.map(toSerializableAction)
          });
        }),
        entry: this.entry.map(toSerializableAction),
        exit: this.exit.map(toSerializableAction),
        meta: this.meta,
        order: this.order || -1,
        output: this.output,
        invoke: this.invoke,
        description: this.description,
        tags: this.tags
      };
    }

    /** @internal */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.definition;
    }

    /**
     * The logic invoked as actors by this state node.
     */
  }, {
    key: "invoke",
    get: function get() {
      var _this4 = this;
      return memo(this, 'invoke', function () {
        return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.t)(_this4.config.invoke).map(function (invokeConfig, i) {
          var _invokeConfig$id;
          var src = invokeConfig.src,
            systemId = invokeConfig.systemId;
          var resolvedId = (_invokeConfig$id = invokeConfig.id) !== null && _invokeConfig$id !== void 0 ? _invokeConfig$id : (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.c)(_this4.id, i);
          var resolvedSrc = typeof src === 'string' ? src : "xstate.invoke.".concat((0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.c)(_this4.id, i));
          return _objectSpread(_objectSpread({}, invokeConfig), {}, {
            src: resolvedSrc,
            id: resolvedId,
            systemId: systemId,
            toJSON: function toJSON() {
              var onDone = invokeConfig.onDone,
                onError = invokeConfig.onError,
                invokeDefValues = _objectWithoutProperties(invokeConfig, _excluded);
              return _objectSpread(_objectSpread({}, invokeDefValues), {}, {
                type: 'xstate.invoke',
                src: resolvedSrc,
                id: resolvedId
              });
            }
          });
        });
      });
    }

    /**
     * The mapping of events to transitions.
     */
  }, {
    key: "on",
    get: function get() {
      var _this5 = this;
      return memo(this, 'on', function () {
        var transitions = _this5.transitions;
        return _toConsumableArray(transitions).flatMap(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
            descriptor = _ref6[0],
            t = _ref6[1];
          return t.map(function (t) {
            return [descriptor, t];
          });
        }).reduce(function (map, _ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
            descriptor = _ref8[0],
            transition = _ref8[1];
          map[descriptor] = map[descriptor] || [];
          map[descriptor].push(transition);
          return map;
        }, {});
      });
    }
  }, {
    key: "after",
    get: function get() {
      var _this6 = this;
      return memo(this, 'delayedTransitions', function () {
        return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.g)(_this6);
      });
    }
  }, {
    key: "initial",
    get: function get() {
      var _this7 = this;
      return memo(this, 'initial', function () {
        return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.d)(_this7, _this7.config.initial);
      });
    }

    /** @internal */
  }, {
    key: "next",
    value: function next(snapshot, event) {
      var _this8 = this;
      var eventType = event.type;
      var actions = [];
      var selectedTransition;
      var candidates = memo(this, "candidates-".concat(eventType), function () {
        return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.h)(_this8, eventType);
      });
      var _iterator2 = _createForOfIteratorHelper(candidates),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var candidate = _step2.value;
          var guard = candidate.guard;
          var resolvedContext = snapshot.context;
          var guardPassed = false;
          try {
            guardPassed = !guard || (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.e)(guard, resolvedContext, event, snapshot);
          } catch (err) {
            var guardType = typeof guard === 'string' ? guard : _typeof(guard) === 'object' ? guard.type : undefined;
            throw new Error("Unable to evaluate guard ".concat(guardType ? "'".concat(guardType, "' ") : '', "in transition for event '").concat(eventType, "' in state node '").concat(this.id, "':\n").concat(err.message));
          }
          if (guardPassed) {
            actions.push.apply(actions, _toConsumableArray(candidate.actions));
            selectedTransition = candidate;
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return selectedTransition ? [selectedTransition] : undefined;
    }

    /**
     * All the event types accepted by this state node and its descendants.
     */
  }, {
    key: "events",
    get: function get() {
      var _this9 = this;
      return memo(this, 'events', function () {
        var states = _this9.states;
        var events = new Set(_this9.ownEvents);
        if (states) {
          for (var _i = 0, _Object$keys = Object.keys(states); _i < _Object$keys.length; _i++) {
            var stateId = _Object$keys[_i];
            var state = states[stateId];
            if (state.states) {
              var _iterator3 = _createForOfIteratorHelper(state.events),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var event = _step3.value;
                  events.add("".concat(event));
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        }
        return Array.from(events);
      });
    }

    /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */
  }, {
    key: "ownEvents",
    get: function get() {
      var _this10 = this;
      var events = new Set(_toConsumableArray(this.transitions.keys()).filter(function (descriptor) {
        return _this10.transitions.get(descriptor).some(function (transition) {
          return !(!transition.target && !transition.actions.length && !transition.reenter);
        });
      }));
      return Array.from(events);
    }
  }]);
  return StateNode;
}();
var STATE_IDENTIFIER = '#';
var StateMachine = /*#__PURE__*/function () {
  function StateMachine(
  /**
   * The raw config used to create the machine.
   */
  config, implementations) {
    var _implementations$acto, _implementations$acti, _implementations$dela, _implementations$guar;
    _classCallCheck(this, StateMachine);
    this.config = config;
    /**
     * The machine's own version.
     */
    this.version = void 0;
    this.schemas = void 0;
    this.implementations = void 0;
    /** @internal */
    this.__xstatenode = true;
    /** @internal */
    this.idMap = new Map();
    this.root = void 0;
    this.id = void 0;
    this.states = void 0;
    this.events = void 0;
    /**
     * @deprecated an internal property that was acting as a "phantom" type, it's not used by anything right now but it's kept around for compatibility reasons
     **/
    this.__TResolvedTypesMeta = void 0;
    this.id = config.id || '(machine)';
    this.implementations = {
      actors: (_implementations$acto = implementations === null || implementations === void 0 ? void 0 : implementations.actors) !== null && _implementations$acto !== void 0 ? _implementations$acto : {},
      actions: (_implementations$acti = implementations === null || implementations === void 0 ? void 0 : implementations.actions) !== null && _implementations$acti !== void 0 ? _implementations$acti : {},
      delays: (_implementations$dela = implementations === null || implementations === void 0 ? void 0 : implementations.delays) !== null && _implementations$dela !== void 0 ? _implementations$dela : {},
      guards: (_implementations$guar = implementations === null || implementations === void 0 ? void 0 : implementations.guards) !== null && _implementations$guar !== void 0 ? _implementations$guar : {}
    };
    this.version = this.config.version;
    this.schemas = this.config.schemas;
    this.transition = this.transition.bind(this);
    this.getInitialSnapshot = this.getInitialSnapshot.bind(this);
    this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this);
    this.restoreSnapshot = this.restoreSnapshot.bind(this);
    this.start = this.start.bind(this);
    this.root = new StateNode(config, {
      _key: this.id,
      _machine: this
    });
    this.root._initialize();
    this.states = this.root.states; // TODO: remove!
    this.events = this.root.events;
    if (!('output' in this.root) && Object.values(this.states).some(function (state) {
      return state.type === 'final' && 'output' in state;
    })) {
      console.warn('Missing `machine.output` declaration (top-level final state with output detected)');
    }
  }

  /**
   * Clones this state machine with the provided implementations
   * and merges the `context` (if provided).
   *
   * @param implementations Options (`actions`, `guards`, `actors`, `delays`, `context`)
   *  to recursively merge with the existing options.
   *
   * @returns A new `StateMachine` instance with the provided implementations.
   */
  _createClass(StateMachine, [{
    key: "provide",
    value: function provide(implementations) {
      var _this$implementations = this.implementations,
        actions = _this$implementations.actions,
        guards = _this$implementations.guards,
        actors = _this$implementations.actors,
        delays = _this$implementations.delays;
      return new StateMachine(this.config, {
        actions: _objectSpread(_objectSpread({}, actions), implementations.actions),
        guards: _objectSpread(_objectSpread({}, guards), implementations.guards),
        actors: _objectSpread(_objectSpread({}, actors), implementations.actors),
        delays: _objectSpread(_objectSpread({}, delays), implementations.delays)
      });
    }
  }, {
    key: "resolveState",
    value: function resolveState(config) {
      var resolvedStateValue = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.root, config.value);
      var nodeSet = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.i)((0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.root, resolvedStateValue));
      return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.k)({
        _nodes: _toConsumableArray(nodeSet),
        context: config.context || {},
        children: {},
        status: (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.l)(nodeSet, this.root) ? 'done' : config.status || 'active',
        output: config.output,
        error: config.error,
        historyValue: config.historyValue
      }, this);
    }

    /**
     * Determines the next snapshot given the current `snapshot` and received `event`.
     * Calculates a full macrostep from all microsteps.
     *
     * @param snapshot The current snapshot
     * @param event The received event
     */
  }, {
    key: "transition",
    value: function transition(snapshot, event, actorScope) {
      return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.n)(snapshot, event, actorScope).snapshot;
    }

    /**
     * Determines the next state given the current `state` and `event`.
     * Calculates a microstep.
     *
     * @param state The current state
     * @param event The received event
     */
  }, {
    key: "microstep",
    value: function microstep(snapshot, event, actorScope) {
      return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.n)(snapshot, event, actorScope).microstates;
    }
  }, {
    key: "getTransitionData",
    value: function getTransitionData(snapshot, event) {
      return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.o)(this.root, snapshot.value, snapshot, event) || [];
    }

    /**
     * The initial state _before_ evaluating any microsteps.
     * This "pre-initial" state is provided to initial actions executed in the initial state.
     */
  }, {
    key: "getPreInitialState",
    value: function getPreInitialState(actorScope, initEvent, internalQueue) {
      var context = this.config.context;
      var preInitial = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.k)({
        context: typeof context !== 'function' && context ? context : {},
        _nodes: [this.root],
        children: {},
        status: 'active'
      }, this);
      if (typeof context === 'function') {
        var assignment = function assignment(_ref9) {
          var spawn = _ref9.spawn,
            event = _ref9.event,
            self = _ref9.self;
          return context({
            spawn: spawn,
            input: event.input,
            self: self
          });
        };
        return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.p)(preInitial, initEvent, actorScope, [(0,_log_0fbf8cec_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)(assignment)], internalQueue);
      }
      return preInitial;
    }

    /**
     * Returns the initial `State` instance, with reference to `self` as an `ActorRef`.
     */
  }, {
    key: "getInitialSnapshot",
    value: function getInitialSnapshot(actorScope, input) {
      var initEvent = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.q)(input); // TODO: fix;
      var internalQueue = [];
      var preInitialState = this.getPreInitialState(actorScope, initEvent, internalQueue);
      var nextState = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.s)([{
        target: _toConsumableArray((0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.u)(this.root)),
        source: this.root,
        reenter: true,
        actions: [],
        eventType: null,
        toJSON: null // TODO: fix
      }], preInitialState, actorScope, initEvent, true, internalQueue);
      var _macrostep = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.n)(nextState, initEvent, actorScope, internalQueue),
        macroState = _macrostep.snapshot;
      return macroState;
    }
  }, {
    key: "start",
    value: function start(snapshot) {
      Object.values(snapshot.children).forEach(function (child) {
        if (child.getSnapshot().status === 'active') {
          child.start();
        }
      });
    }
  }, {
    key: "getStateNodeById",
    value: function getStateNodeById(stateId) {
      var fullPath = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.v)(stateId);
      var relativePath = fullPath.slice(1);
      var resolvedStateId = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.w)(fullPath[0]) ? fullPath[0].slice(STATE_IDENTIFIER.length) : fullPath[0];
      var stateNode = this.idMap.get(resolvedStateId);
      if (!stateNode) {
        throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
      }
      return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.x)(stateNode, relativePath);
    }
  }, {
    key: "definition",
    get: function get() {
      return this.root.definition;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.definition;
    }
  }, {
    key: "getPersistedSnapshot",
    value: function getPersistedSnapshot(snapshot, options) {
      return (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.y)(snapshot, options);
    }
  }, {
    key: "restoreSnapshot",
    value: function restoreSnapshot(snapshot, _actorScope) {
      var _this11 = this;
      var children = {};
      var snapshotChildren = snapshot.children;
      Object.keys(snapshotChildren).forEach(function (actorId) {
        var actorData = snapshotChildren[actorId];
        var childState = actorData.snapshot;
        var src = actorData.src;
        var logic = typeof src === 'string' ? (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.z)(_this11, src) : src;
        if (!logic) {
          return;
        }
        var actorRef = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.A)(logic, {
          id: actorId,
          parent: _actorScope.self,
          syncSnapshot: actorData.syncSnapshot,
          snapshot: childState,
          src: src,
          systemId: actorData.systemId
        });
        children[actorId] = actorRef;
      });
      var restoredSnapshot = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.k)(_objectSpread(_objectSpread({}, snapshot), {}, {
        children: children,
        _nodes: Array.from((0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.i)((0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.root, snapshot.value)))
      }), this);
      var seen = new Set();
      function reviveContext(contextPart, children) {
        if (seen.has(contextPart)) {
          return;
        }
        seen.add(contextPart);
        for (var key in contextPart) {
          var value = contextPart[key];
          if (value && _typeof(value) === 'object') {
            if ('xstate$$type' in value && value.xstate$$type === _raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.$) {
              contextPart[key] = children[value.id];
              continue;
            }
            reviveContext(value, children);
          }
        }
      }
      reviveContext(restoredSnapshot.context, children);
      return restoredSnapshot;
    }
  }]);
  return StateMachine;
}();
var defaultWaitForOptions = {
  timeout: Infinity // much more than 10 seconds
};

/**
 * Subscribes to an actor ref and waits for its emitted value to satisfy
 * a predicate, and then resolves with that value.
 * Will throw if the desired state is not reached after an optional timeout.
 * (defaults to Infinity).
 *
 * @example
 * ```js
 * const state = await waitFor(someService, state => {
 *   return state.hasTag('loaded');
 * });
 *
 * state.hasTag('loaded'); // true
 * ```
 *
 * @param actorRef The actor ref to subscribe to
 * @param predicate Determines if a value matches the condition to wait for
 * @param options
 * @returns A promise that eventually resolves to the emitted value
 * that matches the condition
 */
function waitFor(actorRef, predicate, options) {
  var resolvedOptions = _objectSpread(_objectSpread({}, defaultWaitForOptions), options);
  return new Promise(function (res, rej) {
    var done = false;
    if (resolvedOptions.timeout < 0) {
      console.error('`timeout` passed to `waitFor` is negative and it will reject its internal promise immediately.');
    }
    var handle = resolvedOptions.timeout === Infinity ? undefined : setTimeout(function () {
      sub.unsubscribe();
      rej(new Error("Timeout of ".concat(resolvedOptions.timeout, " ms exceeded")));
    }, resolvedOptions.timeout);
    var dispose = function dispose() {
      var _sub;
      clearTimeout(handle);
      done = true;
      (_sub = sub) === null || _sub === void 0 || _sub.unsubscribe();
    };
    function checkEmitted(emitted) {
      if (predicate(emitted)) {
        dispose();
        res(emitted);
      }
    }
    var sub; // avoid TDZ when disposing synchronously

    // See if the current snapshot already matches the predicate
    checkEmitted(actorRef.getSnapshot());
    if (done) {
      return;
    }
    sub = actorRef.subscribe({
      next: checkEmitted,
      error: function error(err) {
        dispose();
        rej(err);
      },
      complete: function complete() {
        dispose();
        rej(new Error("Actor terminated without satisfying predicate"));
      }
    });
    if (done) {
      sub.unsubscribe();
    }
  });
}

// this is not 100% accurate since we can't make parallel regions required in the result
// `TTestValue` doesn't encode this information anyhow for us to be able to do that
// this is fine for most practical use cases anyway though
/**
 * Creates a state machine (statechart) with the given configuration.
 *
 * The state machine represents the pure logic of a state machine actor.
 *
 * @param config The state machine configuration.
 * @param options DEPRECATED: use `setup({ ... })` or `machine.provide({ ... })` to provide machine implementations instead.
 *
 * @example
  ```ts
  import { createMachine } from 'xstate';

  const lightMachine = createMachine({
    id: 'light',
    initial: 'green',
    states: {
      green: {
        on: {
          TIMER: { target: 'yellow' }
        }
      },
      yellow: {
        on: {
          TIMER: { target: 'red' }
        }
      },
      red: {
        on: {
          TIMER: { target: 'green' }
        }
      }
    }
  });

  const lightActor = createActor(lightMachine);
  lightActor.start();

  lightActor.send({ type: 'TIMER' });
  ```
 */
function _createMachine(config, implementations) {
  return new StateMachine(config, implementations);
}

/** @internal */
function createInertActorScope(actorLogic) {
  var self = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.A)(actorLogic);
  var inertActorScope = {
    self: self,
    defer: function defer() {},
    id: '',
    logger: function logger() {},
    sessionId: '',
    stopChild: function stopChild() {},
    system: self.system,
    emit: function emit() {}
  };
  return inertActorScope;
}
function getInitialSnapshot(actorLogic) {
  for (var _len = arguments.length, _ref10 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    _ref10[_key - 1] = arguments[_key];
  }
  var input = _ref10[0];
  var actorScope = createInertActorScope(actorLogic);
  return actorLogic.getInitialSnapshot(actorScope, input);
}

/**
 * Determines the next snapshot for the given `actorLogic` based on
 * the given `snapshot` and `event`.
 *
 * If the `snapshot` is `undefined`, the initial snapshot of the
 * `actorLogic` is used.
 *
 * @example
  ```ts
  import { getNextSnapshot } from 'xstate';
  import { trafficLightMachine } from './trafficLightMachine.ts';

  const nextSnapshot = getNextSnapshot(
    trafficLightMachine, // actor logic
    undefined, // snapshot (or initial state if undefined)
    { type: 'TIMER' }); // event object

  console.log(nextSnapshot.value);
  // => 'yellow'

  const nextSnapshot2 = getNextSnapshot(
    trafficLightMachine, // actor logic
    nextSnapshot, // snapshot
    { type: 'TIMER' }); // event object

  console.log(nextSnapshot2.value);
  // =>'red'
  ```
 */
function getNextSnapshot(actorLogic, snapshot, event) {
  var inertActorScope = createInertActorScope(actorLogic);
  inertActorScope.self._snapshot = snapshot;
  return actorLogic.transition(snapshot, event, inertActorScope);
}

// at the moment we allow extra actors - ones that are not specified by `children`
// this could be reconsidered in the future
function setup(_ref11) {
  var schemas = _ref11.schemas,
    actors = _ref11.actors,
    actions = _ref11.actions,
    guards = _ref11.guards,
    delays = _ref11.delays;
  return {
    createMachine: function createMachine(config) {
      return _createMachine(_objectSpread(_objectSpread({}, config), {}, {
        schemas: schemas
      }), {
        actors: actors,
        actions: actions,
        guards: guards,
        delays: delays
      });
    }
  };
}

/**
 * Returns a promise that resolves to the `output` of the actor when it is done.
 *
 * @example
 * ```ts
 * const machine = createMachine({
 *   // ...
 *   output: {
 *     count: 42
 *   }
 * });
 *
 * const actor = createActor(machine);
 *
 * actor.start();
 *
 * const output = await toPromise(actor);
 *
 * console.log(output);
 * // logs { count: 42 }
 * ```
 */
function toPromise(actor) {
  return new Promise(function (resolve, reject) {
    actor.subscribe({
      complete: function complete() {
        resolve(actor.getSnapshot().output);
      },
      error: reject
    });
  });
}

/**
 * Asserts that the given event object is of the specified type or types.
 * Throws an error if the event object is not of the specified types.
  @example

  ```ts
  // ...
  entry: ({ event }) => {
    assertEvent(event, 'doNothing');
    // event is { type: 'doNothing' }
  },
  // ...
  exit: ({ event }) => {
    assertEvent(event, 'greet');
    // event is { type: 'greet'; message: string }

    assertEvent(event, ['greet', 'notify']);
    // event is { type: 'greet'; message: string }
    // or { type: 'notify'; message: string; level: 'info' | 'error' }
  },
  ```
 */
function assertEvent(event, type) {
  var types = (0,_raise_80cc66b2_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.t)(type);
  if (!types.includes(event.type)) {
    var typesText = types.length === 1 ? "type \"".concat(types[0], "\"") : "one of types \"".concat(types.join('", "'), "\"");
    throw new Error("Expected event ".concat(JSON.stringify(event), " to have ").concat(typesText));
  }
}


/***/ }),

/***/ "./src/components/game-state-machine.js":
/*!**********************************************!*\
  !*** ./src/components/game-state-machine.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/dist/raise-80cc66b2.development.esm.js");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/dist/xstate.development.esm.js");
/* harmony import */ var _base_game_loop_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-game-loop.json */ "./src/components/base-game-loop.json");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* global AFRAME */




// Example complete game state machine.
// const sampleMachine = createMachine({
//     /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswGUAuLtgFkUBjACwEsA7MAOllwCdsqoBiAGwHsUJIBtAAwBdRKAAOnWOWadKokAA9EARgCsAZhoCA7ABYATMv0A2bcuPrDAGhABPFQNM1tA5QA5jA-ercCN6gF8Am1QMHDxCEgpqGgYAV0pKFlYxFDjYMEERJBAJKRk5HKUEc10aYzc3bTcATl03ZXcK4xt7BH0vGlVjGtd1L1dPVTcgkPQsXHwiMipaeMTksEoILPk86XJZeWLVfVbEQwMaZWr+410dao9RkFCJiOnouYSkyigaACMGcjAAM2SILJaPQIjQ7uEplFZrEXixPt8-ixVjl1gVtogGtousYLOpLN0BLVlPsEOdlDQah1VDVVC4qsZVLobuDJpEZjF5q93l8fv83vDeSwAArsFC2FJpDLI8SSDZbIqIXQ1LECfHKGk4ip+VQkswCGjqCwCAS6U2G7Q45njCFsp4whb8nmIx0IvlQEVi1hLFbCNaytEKhBKlVqjU43yqHV2RDGIwG6q0-H6JVufRWsKsx7Qzlwp1ugXO92SyCsBhwOIYaW5f2bQqgYrBrSh7rh7UknH6jR6CoW5XKHzp+6Q9nPB3vBicThoZSsQExEH4MHWzNQjmw-kTqfKKuo2vokraGqaWq6VSOCwXXx7aOk3Tkyl+Gl0i2Mwc2rNrsexSfTuicdgAG4AkCdCskuGYPKuo5ct+W5-oBSK+iiNbyvWKiqI0FKmOoujaHhxo6C0N44uSwxUrh1TmLsb4riO9owZuv6wP+QH8mIcQAF4cewYDkgkzGASW7FcTx5ICQB-BITK+R7oGjR3s42gdAySnqOqxLETUNQ0BcujqC4WkWLs2g0ZBdE5huP5iSxcLCdxYD6DQ-EsUJnH2Y54mSdk0lynWigqMoCl4cptLeOpJJuNSzjKKqFwDISR6mcOdoWeOVnwax7x2TxmjOYJEApG5OUZV5foyah-klIF5LBY4oVqTUGltBo2kCDUbj9L0lIaMMSW2tm65pVO+iziBC60CyZkpYNsFoPoO4oX5xSNJUXTaIyHXtbhDRuCSgWWDpbh6cMh6no1IzBLcy5TQNX6MR5NlvKN85gZNyW3QxP4PQhbwLeVS2IL0xjlPUp4Ybsqb9ntp6OYFwxqYenixX1H7QXC90ZbZRW8U5lCeQV2U4-jf2+fuGjA6eamEgldRVNDtRYVeSr1IS9Qo1B9Ho19mNsdjjl5RJBN8yVPredW-1k4aOkaDFvi1LT2h7Qy+r6HofjVCY9ImZdb39Z+n3DTzWXY7leMuULIlgJoxNSeLpOBuT0tU3LWn1IrN79vo2k4oY61nnoGHKOz5kzYx6jPcCr3Xe9+tc1O6gkwGaHtKUFKqkp3hXPodMe3pjmg+oJ11NS7jB9Nd0-tbj1sHOkegrrqOc5Z8dG4nsnJ+4qYUi+RmBX7u257sxynh1Jw1EjOFlx9cdoFXP3G5bfFm-lhWLyLbcVctGGOZR2eBaYR51PT2nj0ztOsxdYwQTHaPN7PRs0IT-PL4Lq-uevtu7pv6FxrvDS6AfdQR8PbKxoKrC4tJUw9lMFPWOd856ZUfibXG+M37FRtmLL+AMSjb2cA0PeADDxAN0HtSw3tjC+0jDoU8jRYG33eLwPMcJGGumFKKcUqR0iZE-otfcyYOpNgwrUYReJDR7TPDVboh42pg0LnQpuDCwBMP5CwwUbwPTim9BvbB-DNCqiEe1dqoiiJtECp0GKwxTTtVpCceRqUaCqMLA4pRrD1HFgKmWWAFZuGYN4YGXRgj3CGI6niExKgaEUjUgjce3QTDyM4RkDx5ZKw8IlnJc45RKjVFpitZoJI6jaT1J1DqFxcTxPcV6ZY2j9xqDKBUKoJ4GhNA8BFcklgvbuH7FUQyqggiXUoJwXg8AcgNygmVe2ycAC0YSECTNUBSLSiylmLLUPIkETAWDjKTpVAwe1HBYg8O1PwqYWa2J1tHPW9Ctnt0qvoZMYD3BKT9oaVMww9qrSeR4Doyo8QnTsTNCg9BrnfwQGpYGhgqiq0jC8kw+T6jlDUj1YhjhzD-K-MoqAwKdFHgeZC55FRYU3l2JofasTGraHxIEc519LkKILPmDFGisX7hwuSCFTzoUEpmT0NwNBXnJhxF1YYl8ro0sbvYjF9LhTuOZYGWMmhYkGGVOtNQdzdQmmOOYE0PgOiUrRTBSVGKACiyxZXJ3ldiZMXs8LgzVcRGKOkcRnlqB0QKNR9Uz2UGayqVQsRdgqEInoAqSSq2Bn4HQV5DT9kZEyalQ5aX2MYtZfK3rloUPmUeDw6b6hNPbFFY0JhzCVCsUdD1d9k2ZVTYDfQ8z-WRSaJSABJJDSaH0oaIxegjxnipVfeN4rQ7pXEljReVaEA-K6PpANDbg32vJAW2MD5lYmjLUNJi1ckFrwFpAUdMVDATotPWw5M62g9G0qFL2oT+hNJXbNCtw77IVu3chNJHc1LkhOJ1YKwxujtnagaGt3RdhtUsEAm9SaH5P1HeOutgbG0zLwm0wk5xlQWC9q4MDg711PxQebHdXhSKTsPUGptN5IraQafiamVRS5xvfBzRNmH54bvfvjHdUS+X-zlp4ZWUY2iRV5RYNQT4SL9m1r2ujIcK5wSHbzS26goMUv3VOo9JG2inn1D0EiDJRM4WMBh6TWHkFbogHhvdMHp2qcQC1MBPs6hqDxO4Htoq+30YHQZpjhMEFPp8ts5aakyiuHMHiMwAaTQkg0Ly1wNJdO7A0AYfTc1R2q0cuyqF5MoF7JxOUfe6pz6qzE85iT5cDZzRFqZjT6pexHnMMmd2pirHYnOMmQkHUKEFdGZJkr31K3PomZVSwKtHlpZhTMxoGhInrQZDSQk28EvdfvaJUdLzcUcvS4S+rrhGv1FMCc8wenaO0WKzPebsmH04ZTb13zipzAreG1y6GvRjiGh0LU9UVI5sQexo+kzl2bnFBcPMyKd4aSpnPCcemvLKjVY6HefsFCPsyYXu5JbFRbv4oyx7bo5JIWhLuf0M8vSDs3Tgauk7SOeLP1Y79kFd5wVDfR+tlQoDTTql8OqZ7hPxOHennfMnzGKdlep9guklriV3LVh1JWSpjg0mzncmtVRY1c+J-Q2afPPMo95alhno3kxss8EAowbVaSEgR4ZuT53Bajtp2jzlGPTFkL5f0Nq1Q9Bj054V7nJO1efYt1Tnzf3EAi6DW7tq48mukOzl0EJ+lDDeDqPt5XN86Vhx3fwroACOolyx3VhwWXYwANyyzfLCWvM-YDyC3LwM6iu9TF2ku0NpctgMJeVrqtS9GzT+PDPFRC6NRz3tezE3APTfrWmInyeGMt0R-z3ibHTQ96z-32MueSgXFIjibbGtaeJ89yrlPldfdneM2xyki++9qBXw9-UcOXuMje34DvM-CbfZ3QS44qYom4UcCaa89XVpQ5qQw6NCGjj5J4Jpub3zP58zz5lCMi97Z5X6Y6xh8qqSgHeDhoe4dZHbwJH4C4n5C41JAKOTwFL6X7g4gJng6TA5s5HhDBP7m4sa4aEHpJHR8pAzh5+BAI5ymLIYy4Qzy4nRK576T6QEIILZWywHn6IEUGmJ642aqiNTfIm4irYE86rriGnbFQEEV7YL9hn6kEX4D4eyO4dTGjKiK7u4MEebIL+52xXYlABpaAdBHQJ5CYtImFR7wzBZx7EK75qHe6OJuhJYmD6hVD+x6RtSb7qCkKYSGDnjJj9Cx7+EXL9pfhBHMIuJqLujsJJZXqoERGdTREPZzrEqOA1p1TLoT4QHpFZFOIZFuJcLl72GB7tDUhnrIb7QALnAaAPbAw4TOyeAwyBQ3oNGKLGqmosHJw1paTYhKhdGb69G5ybZeAuDnhAz0HVGNwJLeYtE05-6AxAJaDHKNRgreDUjyLei7FYI1IXDlDEpAIUKpgUpNQHCezlBeCng9DdAdTj5BBAA */
//     id: 'gameStateMachine',
//     initial: 'starting',
//     states: {
//         starting: {
//             id: 'starting',
//             on: {
//                 "loaded": "running"
//             }
//         },
//         running: {
//             initial: "briefing",
//             on: {
//                 "pause": "paused",
//                 "end": "ended"
//             },
//             states: {
//                 hist: { 
//                     type: 'history',
//                     history: 'deep',                    
//                 },
//                 briefing: {
//                     id: 'briefing',
//                     initial: 'briefingPlay',
//                     states: {
//                         briefingPlay: {
//                             on: {
//                                 "pause": "briefingPaused",
//                                 "end": "briefingEnd"
//                             }
//                         },
//                         briefingPaused: {
//                             on: {
//                                 "resume": "briefingPlay",
//                             }
//                         },
//                         briefingEnd: {
//                             type: "final"
//                         }
//                     },
//                     onDone: {
//                         target: "room1",
//                     }
//                 }, 
//                 room1: {
//                     id: 'room1',
//                     initial: "solving",
//                     onDone: 'room2',
//                     states: {
//                         "solved": {
//                             type: "final"
//                         },
//                         "solving": {
//                             type: 'parallel',
//                             onDone: "solved",
//                             states: {
//                                 puzzle1: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle1.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle2: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle2.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle3: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle3.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }                
//                                 },
//                             },
//                         },
//                     }
//                 },
//                 room2: {
//                     id: 'room2',
//                     initial: "solving",
//                     onDone: 'room3',
//                     states: {
//                         "solved": {
//                             type: "final"
//                         },
//                         "solving": {
//                             type: 'parallel',
//                             onDone: "solved",
//                             states: {
//                                 puzzle1: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle1.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle2: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle2.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle3: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle3.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }                
//                                 },
//                             },
//                         },
//                     }
//                 },
//                 room3: {
//                     id: 'room3',
//                     initial: "solving",
//                     onDone: 'debriefing',
//                     states: {
//                         "solved": {
//                             type: "final"
//                         },
//                         "solving": {
//                             type: 'parallel',
//                             onDone: "solved",
//                             states: {
//                                 puzzle1: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle1.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle2: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle2.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }
//                                 },
//                                 puzzle3: {
//                                     initial: 'unsolved',
//                                     states: {
//                                         "unsolved": {
//                                             on: {
//                                                 "puzzle3.solved": "solved"
//                                             }
//                                         },
//                                         "solved": {
//                                             type: "final"
//                                         }
//                                     }                
//                                 },
//                             },
//                         },
//                     }
//                 },
//                 debriefing: {
//                     id: 'debriefing',
//                     type: 'final',
//                     initial: 'debriefingPlay',
//                     states: {
//                         debriefingPlay: {
//                             on: {
//                                 "pause": "debriefingPaused",
//                                 "end": "debriefingEnd"
//                             }
//                         },
//                         debriefingPaused: {
//                             on: {
//                                 "resume": "debriefingPlay",
//                             }
//                         },
//                         debriefingEnd: {
//                             type: "final"
//                         }
//                     },
//                 },     
//             }
//         },
//         paused: {
//             on: {
//                 "resume": "running.hist",
//                 "end": "ended"
//             }
//         },
//         ended: {
//             type: "final"
//         }
//     }
// });

/**
 * A system for managing the global game state machine.
 * If you add any actions that the game states rely on, you must add them using "addAction" to the system
 * before running "start()".
 */
AFRAME.registerSystem("game-state", {
  schema: {},
  init: function init() {
    this.service = null;
    this.roomElements = [];
    this.puzzleElements = [];
    this.actions = {};
    // this.context = {};
    this.gameStateMachineDefinition = {};
    this.manager = null;
  },
  pause: function pause() {
    // NO OP for now.
  },
  play: function play() {
    // NO OP for now.
  },
  addAction: function addAction(actionName, actionFn) {
    // Add an action to the game state machine.
    // this.actions.push({"name": actionName, "fn": actionFn});
    this.actions[actionName] = actionFn;
  },
  addActions: function addActions(actions) {
    // Add multiple actions to the game state machine.
    var keys = Object.keys(actions);
    for (var i = 0; i < keys.length; i++) {
      this.addAction(keys[i], actions[keys[i]]);
    }
    // // Add an action to the game state machine.
    // // this.actions.push({"name": actionName, "fn": actionFn});
    // this.gameStateMachine.actions[actionName] = actionFn;
  },
  addRoom: function addRoom(roomName, roomElement, actions) {
    // Add a room to the state machine.
    // This effectively adds a state to the game state machine which is defined in order by the index.
    this.roomElements.push({
      "name": roomName,
      "el": roomElement,
      "onDone": actions
    });
  },
  addPuzzle: function addPuzzle(roomName, puzzleName, puzzleElement, actions) {
    // Add a puzzle to a room in the state machine.
    // This effectively adds a state to the game state machine which is defined in order by the index.
    // this.gameStateMachineDefinition[roomName].states.solving.states[puzzleName] = {
    //     "id": puzzleName,
    //     "initial": "unsolved",
    //     "states": {
    //         "unsolved": {
    //             "on": {
    //                 [`${puzzleName}.solved`]: "solved"
    //             }
    //         },
    //         "solved": {
    //             "type": "final"
    //         }
    //     }
    // }
    this.puzzleElements.push({
      "room": roomName,
      "name": puzzleName,
      "el": puzzleElement,
      "actions": actions
    });
  },
  start: function start() {
    var _this = this;
    // Create the game state machine based on the baseGameLoop.
    // if (!this.manager) {
    //     throw new Error("A game state manager must be defined in the scene.");
    // }
    this.gameStateMachine = _objectSpread({}, _base_game_loop_json__WEBPACK_IMPORTED_MODULE_0__);
    // Build the game state machine definition from the room elements.
    this._buildRoomElements();
    this._buildPuzzleElements();
    this.gameStateMachine.states.running.states = _objectSpread(_objectSpread({}, this.gameStateMachine.states.running.states), this.gameStateMachineDefinition);
    // Create an actor from the state machine definition.
    this.service = (0,xstate__WEBPACK_IMPORTED_MODULE_1__.A)((0,xstate__WEBPACK_IMPORTED_MODULE_2__.createMachine)(this.gameStateMachine, {
      actions: this.actions
    }));
    // Create subscriptions that allow updates when game state machine updates.
    this.service.subscribe(function (state) {
      // console.log("Game State Machine Updated", state.value);
      _this.el.emit("game-state-updated", state);
    });
    this.el.addEventListener("game-state-event", function (event) {
      _this.service.send({
        "type": event.detail
      });
    });
    this.service.start();
  },
  _buildRoomElements: function _buildRoomElements() {
    // For each room element, add a state to the game state machine.
    this.gameStateMachine.states.running.states.briefing.onDone = {
      target: this.roomElements[0].name
      // actions: ({context, event}) => {
      //     console.log(`ctx = ${JSON.stringify(context)} and evt = ${JSON.stringify(event)}`);
      //     this.el.emit("game-notify-event", event)
      // }
    };
    for (var i = 0; i < this.roomElements.length; i++) {
      this.gameStateMachineDefinition[this.roomElements[i].name] = {
        "id": this.roomElements[i].name,
        "initial": "solving",
        "onDone": {
          "target": this.roomElements[i + 1] ? this.roomElements[i + 1].name : "debriefing",
          "actions": this.roomElements[i].onDone || ""
        },
        "states": {
          "solved": {
            "type": "final"
          },
          "solving": {
            "type": "parallel",
            "onDone": {
              "target": "solved"
              // "actions": ({context, event}) => {
              //     console.log(`ctx = ${JSON.stringify(context)} and evt = ${JSON.stringify(event)}`);                                
              //     this.el.emit("game-notify-event", event)
              // }
            },
            "states": {}
          }
        }
      };
    }
  },
  _buildPuzzleElements: function _buildPuzzleElements() {
    for (var i = 0; i < this.puzzleElements.length; i++) {
      this.gameStateMachineDefinition[this.puzzleElements[i].room].states.solving.states[this.puzzleElements[i].name] = {
        "initial": "unsolved",
        "states": {
          "unsolved": {
            "on": _defineProperty({}, "".concat(this.puzzleElements[i].name, ".solved"), "solved")
          },
          "solved": {
            "type": "final"
          }
        }
      };
    }
  }
});
AFRAME.registerComponent("remove-on-game-event", {
  schema: {
    state: {
      type: "string",
      required: true
    }
  },
  init: function init() {
    var _this2 = this;
    this.el.sceneEl.addEventListener("game-notify-event", function (event) {
      if (event.detail.type == _this2.data.state) {
        _this2.el.remove();
      }
    });
  }
});
AFRAME.registerComponent("disable-movement-in-states", {
  schema: {
    "states": {
      type: "array",
      required: true
    }
  },
  init: function init() {
    var _this3 = this;
    console.log("States to disable movement in", this.data.states);
    this.el.sceneEl.addEventListener("game-state-updated", function (event) {
      if (_this3.data.states.includes(event.detail.value)) {
        _this3.previousState = _this3.el.getAttribute("motionControls");
        _this3.el.setAttribute("motionControls", "enabled", false);
      } else {
        if (_this3.previousState) {
          _this3.el.setAttribute("motionControls", _this3.previousState);
          _this3.previousState = null;
        }
      }
    });
  }
});
AFRAME.registerComponent("show-in-state", {
  schema: {
    state: {
      type: "string",
      required: true
    },
    hideOtherwise: {
      type: "boolean",
      "default": false
    }
  },
  init: function init() {
    var _this4 = this;
    this.el.sceneEl.addEventListener("game-state-updated", function (event) {
      console.log("game-state-updated in show-in-state", event.detail.value);
      if (event.detail.matches(_this4.data.state)) {
        _this4.el.setAttribute("visible", true);
      } else if (_this4.data.hideOtherwise && _this4.el.getAttribute("visible")) {
        _this4.el.setAttribute("visible", false);
      }
    });
  }
});
/**
 * Hides the given gltf part when a game event occurs.
 */
AFRAME.registerComponent("hide-part-on-game-event", {
  multiple: true,
  schema: {
    state: {
      type: "string",
      required: true
    },
    parts: {
      "default": []
    }
  },
  init: function init() {
    var _this5 = this;
    // var self = this;
    // this.el.addEventListener('model-loaded', () => {
    // console.log(this.el.components["gltf-model"].model.getObjectByName("apartmentDoor001"));
    // var model = this.el.components["gltf-model"].model;
    // var parts = this.data.parts;
    // console.log(parts);
    // for (var i = 0; i < parts.length; i++) {
    //   var part = model.getObjectByName(parts[i]);
    //   if (part) {
    //     // part.visible = false;
    //   }
    // }
    // });

    document.querySelector("a-scene").addEventListener("game-notify-event", function (event) {
      console.log(_this5.data.parts);
      console.log(_this5.data.state);
      if (event.detail.type == _this5.data.state) {
        console.log("Game-notify-event in hide-on-game-event", event.detail);
        var model = _this5.el.components["gltf-model"].model;
        var parts = _this5.data.parts;
        for (var i = 0; i < parts.length; i++) {
          var part = model.getObjectByName(parts[i]);
          if (part) {
            part.visible = false;
          }
        }
      }
    });
  }
});
/**
 * Listens for a games state (specified by the state attribute) and then triggers
 * the animation specified by the action attribute.
 * 
 */
AFRAME.registerComponent("animate-on-game-event", {
  multiple: true,
  schema: {
    state: {
      type: "string",
      required: true
    },
    action: {
      type: "string",
      required: true
    }
    // target: {type: "selector", required: true},
  },
  init: function init() {
    var _this6 = this;
    console.log("event = ", this.data.state, " and action = ", this.data.action);
    // Listen on the scene for game state updates.
    document.querySelector("a-scene").addEventListener("game-notify-event", function (event) {
      // console.log("Listening for game state event", event.detail);
      if (event.detail.type == _this6.data.state) {
        console.log("Animation on game event triggered by event", event.detail);
        _this6.el.setAttribute("animation-mixer", {
          "clip": _this6.data.action,
          "loop": "once",
          "clampWhenFinished": "true"
        });
        // this.data.target.emit(this.data.action);
      }
      // });
      console.log("Animation on game event triggered by event ".concat(JSON.stringify(event.detail)));
      // this.el.addEventListener("game-state-updated", (event) => {
    });
  }
});
AFRAME.registerComponent("game-state", {
  schema: {
    name: {
      type: "string",
      required: true
    },
    type: {
      type: "string",
      oneOf: ["room", "puzzle"],
      required: true
    },
    room: {
      type: "string",
      "default": ""
    },
    onDone: {
      type: "array",
      "default": []
    }
  },
  init: function init() {
    if (this.data.type == "room") {
      // this.system = this.el.sceneEl.systems["game-state-machine"];
      this.system.addRoom(this.data.name, this.el, this.data.onDone);
    }
    ;
    if (this.data.type == "puzzle") {
      // this.system = this.el.sceneEl.systems["game-state-machine"];
      this.system.addPuzzle(this.data.room, this.data.name, this.el);
    }
    ;
  }
});

/***/ }),

/***/ "./src/components/gltf-hide.js":
/*!*************************************!*\
  !*** ./src/components/gltf-hide.js ***!
  \*************************************/
/***/ (() => {

AFRAME.registerComponent('gltf-hide', {
  schema: {
    parts: {
      "default": []
    }
  },
  init: function init() {
    var _this = this;
    this.el.addEventListener('model-loaded', function () {
      // console.log(this.el.components["gltf-model"].model.getObjectByName("apartmentDoor001"));
      var model = _this.el.components["gltf-model"].model;
      var parts = _this.data.parts;
      console.log(parts);
      for (var i = 0; i < parts.length; i++) {
        var part = model.getObjectByName(parts[i]);
        if (part) {
          part.visible = false;
        }
      }
    });
  }
});

/***/ }),

/***/ "./src/components/gltf-part-custom.js":
/*!********************************************!*\
  !*** ./src/components/gltf-part-custom.js ***!
  \********************************************/
/***/ (() => {

var LOADING_MODELS = {};
var MODELS = {};
var MODEL_METADATA = {};
AFRAME.registerComponent('gltf-part-custom', {
  schema: {
    buffer: {
      "default": true
    },
    part: {
      type: 'string'
    },
    src: {
      type: 'asset'
    },
    keepPosition: {
      type: 'boolean',
      "default": true
    }
  },
  update: function update() {
    var el = this.el;
    if (!this.data.part && this.data.src) {
      return;
    }
    this.getModel(function (modelPart) {
      if (!modelPart) {
        return;
      }
      el.setObject3D('mesh', modelPart);
      var originalPosition = MODEL_METADATA[el.getAttribute('gltf-part-custom').part].position;
      var originalRotation = MODEL_METADATA[el.getAttribute('gltf-part-custom').part].rotation;
      console.log("originalPosition: ".concat(originalPosition.x, " ").concat(originalPosition.y, " ").concat(originalPosition.z));
      console.log("originalRotation: ".concat(originalRotation.x, " ").concat(originalRotation.y, " ").concat(originalRotation.z, ", ").concat(originalRotation.w));
      el.setAttribute('position', "".concat(originalPosition.x, " ").concat(originalPosition.y, " ").concat(originalPosition.z));
      el.setAttribute('rotation', "".concat(THREE.MathUtils.radToDeg(originalRotation.x), " ").concat(THREE.MathUtils.radToDeg(originalRotation.y), " ").concat(THREE.MathUtils.radToDeg(originalRotation.z)));
      // el.setAttribute('rotation', `${originalRotation.x} ${originalRotation.y} ${originalRotation.z}`);
      // Use this instead of setAttribute('rotation') - see https://aframe.io/docs/1.5.0/components/rotation.html#updating-rotation
      // el.getObject3D().setRotationFromQuaternion(originalPosition);
    });
  },
  /**
   * Fetch, cache, and select from GLTF.
   *
   * @returns {object} Selected subset of model.
   */
  getModel: function getModel(cb) {
    var self = this;

    // Already parsed, grab it.
    if (MODELS[this.data.src]) {
      cb(this.selectFromModel(MODELS[this.data.src]));
      return;
    }

    // Currently loading, wait for it.
    if (LOADING_MODELS[this.data.src]) {
      return LOADING_MODELS[this.data.src].then(function (model) {
        cb(self.selectFromModel(model));
      });
    }

    // Not yet fetching, fetch it.
    LOADING_MODELS[this.data.src] = new Promise(function (resolve) {
      new THREE.GLTFLoader().load(self.data.src, function (gltfModel) {
        var model = gltfModel.scene || gltfModel.scenes[0];
        MODELS[self.data.src] = model;
        delete LOADING_MODELS[self.data.src];
        cb(self.selectFromModel(model));
        resolve(model);
      }, function () {}, console.error);
    });
  },
  /**
   * Search for the part name and look for a mesh.
   */
  selectFromModel: function selectFromModel(model) {
    var mesh;
    var part;
    part = model.getObjectByName(this.data.part);
    if (!part) {
      console.error('[gltf-part] `' + this.data.part + '` not found in model.');
      return;
    }
    mesh = part.getObjectByProperty('type', 'Mesh').clone(true);
    MODEL_METADATA[this.data.part] = MODEL_METADATA[this.data.part] || {};
    MODEL_METADATA[this.data.part].position = model.getObjectByName(this.data.part).getWorldPosition(new THREE.Vector3(0, 0, 0));
    MODEL_METADATA[this.data.part].rotation = model.getObjectByName(this.data.part).rotation;
    // MODEL_METADATA[this.data.part].rotation.x += Math.PI;
    console.log("rotation: ", MODEL_METADATA[this.data.part].rotation);
    if (this.data.buffer) {
      mesh.geometry = mesh.geometry.toNonIndexed();
      return mesh;
    }
    mesh.geometry = new THREE.Geometry().fromBufferGeometry(mesh.geometry);
    return mesh;
  }
});

/***/ }),

/***/ "./src/components/simple-navmesh-constraint.js":
/*!*****************************************************!*\
  !*** ./src/components/simple-navmesh-constraint.js ***!
  \*****************************************************/
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* global AFRAME, THREE */

AFRAME.registerComponent('simple-navmesh-constraint', {
  schema: {
    enabled: {
      "default": true
    },
    navmesh: {
      "default": ''
    },
    fall: {
      "default": 0.5
    },
    height: {
      "default": 1.6
    },
    exclude: {
      "default": ''
    },
    xzOrigin: {
      "default": ''
    }
  },
  update: function update() {
    this.lastPosition = null;
    this.excludes = this.data.exclude ? Array.from(document.querySelectorAll(this.data.exclude)) : [];
    var els = Array.from(document.querySelectorAll(this.data.navmesh));
    if (els === null) {
      console.warn('simple-navmesh-constraint: Did not match any elements');
      this.objects = [];
    } else {
      this.objects = els.map(function (el) {
        return el.object3D;
      }).concat(this.excludes.map(function (el) {
        return el.object3D;
      }));
    }
    this.xzOrigin = this.data.xzOrigin ? this.el.querySelector(this.data.xzOrigin) : this.el;
  },
  tick: function () {
    var nextPosition = new THREE.Vector3();
    var tempVec = new THREE.Vector3();
    var scanPattern = [[0, 1],
    // Default the next location
    [0, 0.5],
    // Check that the path to that location was fine
    [30, 0.4],
    // A little to the side shorter range
    [-30, 0.4],
    // A little to the side shorter range
    [60, 0.2],
    // Moderately to the side short range
    [-60, 0.2],
    // Moderately to the side short range
    [80, 0.06],
    // Perpendicular very short range
    [-80, 0.06] // Perpendicular very short range
    ];
    var down = new THREE.Vector3(0, -1, 0);
    var raycaster = new THREE.Raycaster();
    var gravity = -1;
    var maxYVelocity = 0.5;
    var results = [];
    var yVel = 0;
    var firstTry = true;
    return function tick(time, delta) {
      if (this.data.enabled === false) return;
      if (this.lastPosition === null) {
        firstTry = true;
        this.lastPosition = new THREE.Vector3();
        this.xzOrigin.object3D.getWorldPosition(this.lastPosition);
        if (this.data.xzOrigin) this.lastPosition.y -= this.xzOrigin.object3D.position.y;
      }
      var el = this.el;
      if (this.objects.length === 0) return;
      this.xzOrigin.object3D.getWorldPosition(nextPosition);
      if (this.data.xzOrigin) nextPosition.y -= this.xzOrigin.object3D.position.y;
      if (nextPosition.distanceTo(this.lastPosition) <= 0.01) return;
      var didHit = false;
      // So that it does not get stuck it takes as few samples around the user and finds the most appropriate
      scanPatternLoop: for (var _i = 0, _scanPattern = scanPattern; _i < _scanPattern.length; _i++) {
        var _scanPattern$_i = _slicedToArray(_scanPattern[_i], 2),
          angle = _scanPattern$_i[0],
          distance = _scanPattern$_i[1];
        tempVec.subVectors(nextPosition, this.lastPosition);
        tempVec.applyAxisAngle(down, angle * Math.PI / 180);
        tempVec.multiplyScalar(distance);
        tempVec.add(this.lastPosition);
        tempVec.y += maxYVelocity;
        tempVec.y -= this.data.height;
        raycaster.set(tempVec, down);
        raycaster.far = this.data.fall > 0 ? this.data.fall + maxYVelocity : Infinity;
        raycaster.intersectObjects(this.objects, true, results);
        if (results.length) {
          // If it hit something we want to avoid then ignore it and stop looking
          for (var _i2 = 0, _results = results; _i2 < _results.length; _i2++) {
            var result = _results[_i2];
            if (this.excludes.includes(result.object.el)) {
              results.splice(0);
              continue scanPatternLoop;
            }
          }
          var hitPos = results[0].point;
          results.splice(0);
          hitPos.y += this.data.height;
          if (nextPosition.y - (hitPos.y - yVel * 2) > 0.01) {
            yVel += Math.max(gravity * delta * 0.001, -maxYVelocity);
            hitPos.y = nextPosition.y + yVel;
          } else {
            yVel = 0;
          }
          tempVec.copy(hitPos);
          this.xzOrigin.object3D.parent.worldToLocal(tempVec);
          tempVec.sub(this.xzOrigin.object3D.position);
          if (this.data.xzOrigin) tempVec.y += this.xzOrigin.object3D.position.y;
          this.el.object3D.position.add(tempVec);
          this.lastPosition.copy(hitPos);
          didHit = true;
          break;
        }
      }
      if (didHit) {
        firstTry = false;
      }
      if (!firstTry && !didHit) {
        this.el.object3D.position.copy(this.lastPosition);
        this.el.object3D.parent.worldToLocal(this.el.object3D.position);
      }
    };
  }()
});

/***/ }),

/***/ "./src/components/base-game-loop.json":
/*!********************************************!*\
  !*** ./src/components/base-game-loop.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"baseGameLoop","initial":"starting","states":{"starting":{"id":"starting","on":{"loaded":"running"}},"running":{"initial":"briefing","onDone":"ended","on":{"pause":"paused","end":"ended"},"states":{"gameOver":{"type":"final"},"hist":{"type":"history","history":"deep"},"briefing":{"id":"briefing","initial":"briefingPlay","states":{"briefingPlay":{"on":{"pause":"briefingPaused","end":"briefingEnd"}},"briefingPaused":{"on":{"resume":"briefingPlay"}},"briefingEnd":{"type":"final"}}},"debriefing":{"id":"debriefing","onDone":"gameOver","initial":"debriefingPlay","states":{"debriefingPlay":{"on":{"pause":"debriefingPaused","end":"debriefingEnd"}},"debriefingPaused":{"on":{"resume":"debriefingPlay"}},"debriefingEnd":{"type":"final"}}}}},"paused":{"on":{"resume":"running.hist","end":"ended"}},"ended":{"type":"final"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__(/*! ./components/game-state-machine.js */ "./src/components/game-state-machine.js");
__webpack_require__(/*! ./components/simple-navmesh-constraint.js */ "./src/components/simple-navmesh-constraint.js");
__webpack_require__(/*! ./components/gltf-part-custom.js */ "./src/components/gltf-part-custom.js");
__webpack_require__(/*! ./components/gltf-hide.js */ "./src/components/gltf-hide.js");
})();

/******/ })()
;
//# sourceMappingURL=esccl8.js.map