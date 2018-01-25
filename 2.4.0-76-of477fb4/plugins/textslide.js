"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();!function(){MessageLayer.textCustomizers.slideTextCustomizer=function(e){function t(e,i,n){_classCallCheck(this,t);var s=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,n)),r="textSlideOffsetX"in e?e.textSlideOffsetX:0,o="textSlideOffsetY"in e?e.textSlideOffsetY:20,a="textSlideDuration"in e?e.textSlideDuration:700,l="textSlideFadeDuration"in e?e.textSlideFadeDuration:350,u=e.delaySpeed;s._ended=!1,void 0===r&&(r=100),void 0===o&&(o=100),void 0===a&&(a=1e3),void 0===u&&(u=100),void 0===l&&(l=1e3);var d=new KeySpline(0,0,.58,1);return s.perform=function(){var e=this.timePassed/a,t=this;n.forEach(function(i,s){var a=(t.timePassed-s*u)/l;if(a<0)return void(i.styles.visible=!1);a>1&&(a=1),i.styles.visible=!0,i.styles.opacity=a,i.needRedraw=!0,a=d.get(a),a>1&&(a=1);var f=(1-a)*o,c=(1-a)*r;i.rect.y+=f,i.rect.x+=c,s===n.length-1&&a>=1&&e>=1&&(this._ended=!0)})},s}return _inherits(t,e),_createClass(t,[{key:"isAnimation",value:function(){return!0}},{key:"isEnded",get:function(){return this._ended}}]),t}(TextCustomizer);var e=Tag.actions.position.action;$.extend(Tag.actions.position.rules,{slide:{type:"BOOLEAN"},slideoffsetx:{type:"INT"},slideoffsety:{type:"INT"},slideduration:{type:"INT"},slidefadeduration:{type:"INT"}}),Tag.actions.position.action=function(t){var i;if(i="layer"in t&&"page"in t?t.layer[t.page]:o2.currentMessageLayer,t.slide)i.textCustomizers.indexOf("slideTextCustomizer")==-1&&i.textCustomizers.push("slideTextCustomizer");else if(t.slide===!1){var n=i.textCustomizers.indexOf("slideTextCustomizer");n>=0&&i.textCustomizers.splice(n,1)}return"slideoffsetx"in t&&(i.textSlideOffsetX=t.slideoffsetx),"slideoffsety"in t&&(i.textSlideOffsetY=t.slideoffsety),"slideduration"in t&&(i.textSlideDuration=t.slideduration),"slidefadeduration"in t&&(i.textSlideFadeDuration=t.slidefadeduration),e.apply(this,arguments)}}();