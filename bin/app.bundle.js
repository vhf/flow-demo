/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//      
                      
                                       

const defaultEqFn       = (a, b) => a === b

class Node {
            
            
                

  constructor (data          ) {
    this.data = data
  }
}

class List {
            
            
              

  constructor () {
    this.size = 0
  }

  addNode (node      )       {
    if (!this.head) {
      this.head = this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }

    this.size++
  }

  add (obj          )       {
    const node = new Node(obj)
    this.addNode(node)
    return node
  }

  findNode (obj          , eqFn       = defaultEqFn)        {
    for (const node of this.nodes()) {
      if (eqFn(node.data, obj)) {
        return node
      }
    }
  }

  has (obj          , eqFn       = defaultEqFn)          {
    return !!this.findNode(obj, eqFn)
  }

  remove (obj          , eqFn       = defaultEqFn)       {
    this.removeNode(this.findNode(obj, eqFn))
  }

  removeNode (node       )       {
    if (!node) {
      return
    }

    if (!node.prev) {
      this.head = node.next
    } else {
      node.prev.next = node.next
    }

    if (!node.next) {
      this.tail = node.prev
    } else {
      node.next.prev = node.prev
    }

    this.size--
  }

  isEmpty ()          {
    return this.size === 0
  }

  forEach (callback                   , reversed          = false)       {
    for (const node of this.nodes(reversed)) {
      if (callback(node.data) === false) {
        break
      }
    }
  }

  *nodes (reversed          = false)                 {
    let node = reversed ? this.tail : this.head
    while (node) {
      yield node
      node = reversed ? node.prev : node.next
    }
  }
}

module.exports = List


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

//      
const List = __webpack_require__(0)

const myList = new List()

myList.add({
  name: 'first',
  payload: [1, 2, 3]
})

myList.forEach((node) => console.log(JSON.stringify(node)))


/***/ })
/******/ ]);