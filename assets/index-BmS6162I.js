(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Xm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var _c={exports:{}},Bs={},yc={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function t0(){if(Ap)return le;Ap=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function C(E){return E===null||typeof E!="object"?null:(E=w&&E[w]||E["@@iterator"],typeof E=="function"?E:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,W={};function Y(E,R,te){this.props=E,this.context=R,this.refs=W,this.updater=te||N}Y.prototype.isReactComponent={},Y.prototype.setState=function(E,R){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,R,"setState")},Y.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function Le(){}Le.prototype=Y.prototype;function xe(E,R,te){this.props=E,this.context=R,this.refs=W,this.updater=te||N}var Ye=xe.prototype=new Le;Ye.constructor=xe,M(Ye,Y.prototype),Ye.isPureReactComponent=!0;var Ae=Array.isArray,st=Object.prototype.hasOwnProperty,Ge={current:null},ot={key:!0,ref:!0,__self:!0,__source:!0};function St(E,R,te){var ne,oe={},re=null,Ce=null;if(R!=null)for(ne in R.ref!==void 0&&(Ce=R.ref),R.key!==void 0&&(re=""+R.key),R)st.call(R,ne)&&!ot.hasOwnProperty(ne)&&(oe[ne]=R[ne]);var de=arguments.length-2;if(de===1)oe.children=te;else if(1<de){for(var Se=Array(de),$=0;$<de;$++)Se[$]=arguments[$+2];oe.children=Se}if(E&&E.defaultProps)for(ne in de=E.defaultProps,de)oe[ne]===void 0&&(oe[ne]=de[ne]);return{$$typeof:i,type:E,key:re,ref:Ce,props:oe,_owner:Ge.current}}function Gt(E,R){return{$$typeof:i,type:E.type,key:R,ref:E.ref,props:E.props,_owner:E._owner}}function Kt(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function tn(E){var R={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(te){return R[te]})}var Lt=/\/+/g;function _t(E,R){return typeof E=="object"&&E!==null&&E.key!=null?tn(""+E.key):R.toString(36)}function tt(E,R,te,ne,oe){var re=typeof E;(re==="undefined"||re==="boolean")&&(E=null);var Ce=!1;if(E===null)Ce=!0;else switch(re){case"string":case"number":Ce=!0;break;case"object":switch(E.$$typeof){case i:case e:Ce=!0}}if(Ce)return Ce=E,oe=oe(Ce),E=ne===""?"."+_t(Ce,0):ne,Ae(oe)?(te="",E!=null&&(te=E.replace(Lt,"$&/")+"/"),tt(oe,R,te,"",function($){return $})):oe!=null&&(Kt(oe)&&(oe=Gt(oe,te+(!oe.key||Ce&&Ce.key===oe.key?"":(""+oe.key).replace(Lt,"$&/")+"/")+E)),R.push(oe)),1;if(Ce=0,ne=ne===""?".":ne+":",Ae(E))for(var de=0;de<E.length;de++){re=E[de];var Se=ne+_t(re,de);Ce+=tt(re,R,te,Se,oe)}else if(Se=C(E),typeof Se=="function")for(E=Se.call(E),de=0;!(re=E.next()).done;)re=re.value,Se=ne+_t(re,de++),Ce+=tt(re,R,te,Se,oe);else if(re==="object")throw R=String(E),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return Ce}function lt(E,R,te){if(E==null)return E;var ne=[],oe=0;return tt(E,ne,"","",function(re){return R.call(te,re,oe++)}),ne}function Me(E){if(E._status===-1){var R=E._result;R=R(),R.then(function(te){(E._status===0||E._status===-1)&&(E._status=1,E._result=te)},function(te){(E._status===0||E._status===-1)&&(E._status=2,E._result=te)}),E._status===-1&&(E._status=0,E._result=R)}if(E._status===1)return E._result.default;throw E._result}var be={current:null},F={transition:null},K={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:F,ReactCurrentOwner:Ge};function U(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:lt,forEach:function(E,R,te){lt(E,function(){R.apply(this,arguments)},te)},count:function(E){var R=0;return lt(E,function(){R++}),R},toArray:function(E){return lt(E,function(R){return R})||[]},only:function(E){if(!Kt(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},le.Component=Y,le.Fragment=n,le.Profiler=l,le.PureComponent=xe,le.StrictMode=s,le.Suspense=m,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,le.act=U,le.cloneElement=function(E,R,te){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var ne=M({},E.props),oe=E.key,re=E.ref,Ce=E._owner;if(R!=null){if(R.ref!==void 0&&(re=R.ref,Ce=Ge.current),R.key!==void 0&&(oe=""+R.key),E.type&&E.type.defaultProps)var de=E.type.defaultProps;for(Se in R)st.call(R,Se)&&!ot.hasOwnProperty(Se)&&(ne[Se]=R[Se]===void 0&&de!==void 0?de[Se]:R[Se])}var Se=arguments.length-2;if(Se===1)ne.children=te;else if(1<Se){de=Array(Se);for(var $=0;$<Se;$++)de[$]=arguments[$+2];ne.children=de}return{$$typeof:i,type:E.type,key:oe,ref:re,props:ne,_owner:Ce}},le.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:u,_context:E},E.Consumer=E},le.createElement=St,le.createFactory=function(E){var R=St.bind(null,E);return R.type=E,R},le.createRef=function(){return{current:null}},le.forwardRef=function(E){return{$$typeof:f,render:E}},le.isValidElement=Kt,le.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:Me}},le.memo=function(E,R){return{$$typeof:g,type:E,compare:R===void 0?null:R}},le.startTransition=function(E){var R=F.transition;F.transition={};try{E()}finally{F.transition=R}},le.unstable_act=U,le.useCallback=function(E,R){return be.current.useCallback(E,R)},le.useContext=function(E){return be.current.useContext(E)},le.useDebugValue=function(){},le.useDeferredValue=function(E){return be.current.useDeferredValue(E)},le.useEffect=function(E,R){return be.current.useEffect(E,R)},le.useId=function(){return be.current.useId()},le.useImperativeHandle=function(E,R,te){return be.current.useImperativeHandle(E,R,te)},le.useInsertionEffect=function(E,R){return be.current.useInsertionEffect(E,R)},le.useLayoutEffect=function(E,R){return be.current.useLayoutEffect(E,R)},le.useMemo=function(E,R){return be.current.useMemo(E,R)},le.useReducer=function(E,R,te){return be.current.useReducer(E,R,te)},le.useRef=function(E){return be.current.useRef(E)},le.useState=function(E){return be.current.useState(E)},le.useSyncExternalStore=function(E,R,te){return be.current.useSyncExternalStore(E,R,te)},le.useTransition=function(){return be.current.useTransition()},le.version="18.3.1",le}var bp;function rd(){return bp||(bp=1,yc.exports=t0()),yc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function n0(){if(Op)return Bs;Op=1;var i=rd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,g){var y,w={},C=null,N=null;g!==void 0&&(C=""+g),m.key!==void 0&&(C=""+m.key),m.ref!==void 0&&(N=m.ref);for(y in m)s.call(m,y)&&!u.hasOwnProperty(y)&&(w[y]=m[y]);if(f&&f.defaultProps)for(y in m=f.defaultProps,m)w[y]===void 0&&(w[y]=m[y]);return{$$typeof:e,type:f,key:C,ref:N,props:w,_owner:l.current}}return Bs.Fragment=n,Bs.jsx=d,Bs.jsxs=d,Bs}var Dp;function r0(){return Dp||(Dp=1,_c.exports=n0()),_c.exports}var I=r0(),ee=rd();const i0=Xm(ee);var bl={},vc={exports:{}},Bt={},wc={exports:{}},Sc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function s0(){return Lp||(Lp=1,(function(i){function e(F,K){var U=F.length;F.push(K);e:for(;0<U;){var E=U-1>>>1,R=F[E];if(0<l(R,K))F[E]=K,F[U]=R,U=E;else break e}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var K=F[0],U=F.pop();if(U!==K){F[0]=U;e:for(var E=0,R=F.length,te=R>>>1;E<te;){var ne=2*(E+1)-1,oe=F[ne],re=ne+1,Ce=F[re];if(0>l(oe,U))re<R&&0>l(Ce,oe)?(F[E]=Ce,F[re]=U,E=re):(F[E]=oe,F[ne]=U,E=ne);else if(re<R&&0>l(Ce,U))F[E]=Ce,F[re]=U,E=re;else break e}}return K}function l(F,K){var U=F.sortIndex-K.sortIndex;return U!==0?U:F.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var m=[],g=[],y=1,w=null,C=3,N=!1,M=!1,W=!1,Y=typeof setTimeout=="function"?setTimeout:null,Le=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ye(F){for(var K=n(g);K!==null;){if(K.callback===null)s(g);else if(K.startTime<=F)s(g),K.sortIndex=K.expirationTime,e(m,K);else break;K=n(g)}}function Ae(F){if(W=!1,Ye(F),!M)if(n(m)!==null)M=!0,Me(st);else{var K=n(g);K!==null&&be(Ae,K.startTime-F)}}function st(F,K){M=!1,W&&(W=!1,Le(St),St=-1),N=!0;var U=C;try{for(Ye(K),w=n(m);w!==null&&(!(w.expirationTime>K)||F&&!tn());){var E=w.callback;if(typeof E=="function"){w.callback=null,C=w.priorityLevel;var R=E(w.expirationTime<=K);K=i.unstable_now(),typeof R=="function"?w.callback=R:w===n(m)&&s(m),Ye(K)}else s(m);w=n(m)}if(w!==null)var te=!0;else{var ne=n(g);ne!==null&&be(Ae,ne.startTime-K),te=!1}return te}finally{w=null,C=U,N=!1}}var Ge=!1,ot=null,St=-1,Gt=5,Kt=-1;function tn(){return!(i.unstable_now()-Kt<Gt)}function Lt(){if(ot!==null){var F=i.unstable_now();Kt=F;var K=!0;try{K=ot(!0,F)}finally{K?_t():(Ge=!1,ot=null)}}else Ge=!1}var _t;if(typeof xe=="function")_t=function(){xe(Lt)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,lt=tt.port2;tt.port1.onmessage=Lt,_t=function(){lt.postMessage(null)}}else _t=function(){Y(Lt,0)};function Me(F){ot=F,Ge||(Ge=!0,_t())}function be(F,K){St=Y(function(){F(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_continueExecution=function(){M||N||(M=!0,Me(st))},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Gt=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return n(m)},i.unstable_next=function(F){switch(C){case 1:case 2:case 3:var K=3;break;default:K=C}var U=C;C=K;try{return F()}finally{C=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(F,K){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var U=C;C=F;try{return K()}finally{C=U}},i.unstable_scheduleCallback=function(F,K,U){var E=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?E+U:E):U=E,F){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=U+R,F={id:y++,callback:K,priorityLevel:F,startTime:U,expirationTime:R,sortIndex:-1},U>E?(F.sortIndex=U,e(g,F),n(m)===null&&F===n(g)&&(W?(Le(St),St=-1):W=!0,be(Ae,U-E))):(F.sortIndex=R,e(m,F),M||N||(M=!0,Me(st))),F},i.unstable_shouldYield=tn,i.unstable_wrapCallback=function(F){var K=C;return function(){var U=C;C=K;try{return F.apply(this,arguments)}finally{C=U}}}})(Sc)),Sc}var Mp;function o0(){return Mp||(Mp=1,wc.exports=s0()),wc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function l0(){if(Fp)return Bt;Fp=1;var i=rd(),e=o0();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function C(t){return m.call(w,t)?!0:m.call(y,t)?!1:g.test(t)?w[t]=!0:(y[t]=!0,!1)}function N(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,r,o,a){if(r===null||typeof r>"u"||N(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function W(t,r,o,a,c,h,p){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=p}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Y[t]=new W(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];Y[r]=new W(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){Y[t]=new W(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Y[t]=new W(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Y[t]=new W(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){Y[t]=new W(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){Y[t]=new W(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){Y[t]=new W(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){Y[t]=new W(t,5,!1,t.toLowerCase(),null,!1,!1)});var Le=/[\-:]([a-z])/g;function xe(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(Le,xe);Y[r]=new W(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(Le,xe);Y[r]=new W(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(Le,xe);Y[r]=new W(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){Y[t]=new W(t,1,!1,t.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){Y[t]=new W(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ye(t,r,o,a){var c=Y.hasOwnProperty(r)?Y[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,o,c,a)&&(o=null),a||c===null?C(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Ae=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,st=Symbol.for("react.element"),Ge=Symbol.for("react.portal"),ot=Symbol.for("react.fragment"),St=Symbol.for("react.strict_mode"),Gt=Symbol.for("react.profiler"),Kt=Symbol.for("react.provider"),tn=Symbol.for("react.context"),Lt=Symbol.for("react.forward_ref"),_t=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),F=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,E;function R(t){if(E===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);E=r&&r[1]||""}return`
`+E+t}var te=!1;function ne(t,r){if(!t||te)return"";te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(x){var a=x}Reflect.construct(t,[],r)}else{try{r.call()}catch(x){a=x}t.call(r.prototype)}else{try{throw Error()}catch(x){a=x}t()}}catch(x){if(x&&a&&typeof x.stack=="string"){for(var c=x.stack.split(`
`),h=a.stack.split(`
`),p=c.length-1,_=h.length-1;1<=p&&0<=_&&c[p]!==h[_];)_--;for(;1<=p&&0<=_;p--,_--)if(c[p]!==h[_]){if(p!==1||_!==1)do if(p--,_--,0>_||c[p]!==h[_]){var v=`
`+c[p].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=p&&0<=_);break}}}finally{te=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?R(t):""}function oe(t){switch(t.tag){case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return t=ne(t.type,!1),t;case 11:return t=ne(t.type.render,!1),t;case 1:return t=ne(t.type,!0),t;default:return""}}function re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ot:return"Fragment";case Ge:return"Portal";case Gt:return"Profiler";case St:return"StrictMode";case _t:return"Suspense";case tt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tn:return(t.displayName||"Context")+".Consumer";case Kt:return(t._context.displayName||"Context")+".Provider";case Lt:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lt:return r=t.displayName||null,r!==null?r:re(t.type)||"Memo";case Me:r=t._payload,t=t._init;try{return re(t(r))}catch{}}return null}function Ce(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(r);case 8:return r===St?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function de(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function $(t){var r=Se(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(p){a=""+p,h.call(this,p)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function ie(t){t._valueTracker||(t._valueTracker=$(t))}function Fe(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=Se(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function ze(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ge(t,r){var o=r.checked;return U({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function _e(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=de(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function he(t,r){r=r.checked,r!=null&&Ye(t,"checked",r,!1)}function at(t,r){he(t,r);var o=de(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?yt(t,r.type,o):r.hasOwnProperty("defaultValue")&&yt(t,r.type,de(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Mt(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function yt(t,r,o){(r!=="number"||ze(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var qt=Array.isArray;function Ie(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+de(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Ee(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return U({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Et(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(qt(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:de(o)}}function er(t,r){var o=de(r.value),a=de(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function nn(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function hn(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ct(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?hn(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var It,Qt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(It=It||document.createElement("div"),It.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=It.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function ut(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ke=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(t){Ke.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Re[r]=Re[t]})});function Nt(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Re.hasOwnProperty(t)&&Re[t]?(""+r).trim():r+"px"}function O(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=Nt(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var ce=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function G(t,r){if(r){if(ce[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function ye(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Je=null;function Dn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var di=null,Ln=null,Mn=null;function ss(t){if(t=xs(t)){if(typeof di!="function")throw Error(n(280));var r=t.stateNode;r&&(r=Ko(r),di(t.stateNode,t.type,r))}}function Io(t){Ln?Mn?Mn.push(t):Mn=[t]:Ln=t}function Qd(){if(Ln){var t=Ln,r=Mn;if(Mn=Ln=null,ss(t),r)for(t=0;t<r.length;t++)ss(r[t])}}function Yd(t,r){return t(r)}function Jd(){}var Da=!1;function Xd(t,r,o){if(Da)return t(r,o);Da=!0;try{return Yd(t,r,o)}finally{Da=!1,(Ln!==null||Mn!==null)&&(Jd(),Qd())}}function os(t,r){var o=t.stateNode;if(o===null)return null;var a=Ko(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var La=!1;if(f)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){La=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{La=!1}function ly(t,r,o,a,c,h,p,_,v){var x=Array.prototype.slice.call(arguments,3);try{r.apply(o,x)}catch(A){this.onError(A)}}var as=!1,ko=null,To=!1,Ma=null,ay={onError:function(t){as=!0,ko=t}};function uy(t,r,o,a,c,h,p,_,v){as=!1,ko=null,ly.apply(ay,arguments)}function cy(t,r,o,a,c,h,p,_,v){if(uy.apply(this,arguments),as){if(as){var x=ko;as=!1,ko=null}else throw Error(n(198));To||(To=!0,Ma=x)}}function zr(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Zd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function eh(t){if(zr(t)!==t)throw Error(n(188))}function dy(t){var r=t.alternate;if(!r){if(r=zr(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return eh(c),t;if(h===a)return eh(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var p=!1,_=c.child;_;){if(_===o){p=!0,o=c,a=h;break}if(_===a){p=!0,a=c,o=h;break}_=_.sibling}if(!p){for(_=h.child;_;){if(_===o){p=!0,o=h,a=c;break}if(_===a){p=!0,a=h,o=c;break}_=_.sibling}if(!p)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function th(t){return t=dy(t),t!==null?nh(t):null}function nh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=nh(t);if(r!==null)return r;t=t.sibling}return null}var rh=e.unstable_scheduleCallback,ih=e.unstable_cancelCallback,hy=e.unstable_shouldYield,fy=e.unstable_requestPaint,Xe=e.unstable_now,py=e.unstable_getCurrentPriorityLevel,Fa=e.unstable_ImmediatePriority,sh=e.unstable_UserBlockingPriority,xo=e.unstable_NormalPriority,my=e.unstable_LowPriority,oh=e.unstable_IdlePriority,Ro=null,kn=null;function gy(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Ro,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:vy,_y=Math.log,yy=Math.LN2;function vy(t){return t>>>=0,t===0?32:31-(_y(t)/yy|0)|0}var No=64,Po=4194304;function us(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ao(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,p=o&268435455;if(p!==0){var _=p&~c;_!==0?a=us(_):(h&=p,h!==0&&(a=us(h)))}else p=o&~c,p!==0?a=us(p):h!==0&&(a=us(h));if(a===0)return 0;if(r!==0&&r!==a&&(r&c)===0&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if((a&4)!==0&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-fn(r),c=1<<o,a|=t[o],r&=~c;return a}function wy(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var p=31-fn(h),_=1<<p,v=c[p];v===-1?((_&o)===0||(_&a)!==0)&&(c[p]=wy(_,r)):v<=r&&(t.expiredLanes|=_),h&=~_}}function Ua(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lh(){var t=No;return No<<=1,(No&4194240)===0&&(No=64),t}function ja(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function cs(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-fn(r),t[r]=o}function Ey(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-fn(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function za(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-fn(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var ke=0;function ah(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var uh,Wa,ch,dh,hh,Ba=!1,bo=[],tr=null,nr=null,rr=null,ds=new Map,hs=new Map,ir=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(t,r){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ds.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hs.delete(r.pointerId)}}function fs(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=xs(r),r!==null&&Wa(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function Iy(t,r,o,a,c){switch(r){case"focusin":return tr=fs(tr,t,r,o,a,c),!0;case"dragenter":return nr=fs(nr,t,r,o,a,c),!0;case"mouseover":return rr=fs(rr,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return ds.set(h,fs(ds.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,hs.set(h,fs(hs.get(h)||null,t,r,o,a,c)),!0}return!1}function ph(t){var r=Wr(t.target);if(r!==null){var o=zr(r);if(o!==null){if(r=o.tag,r===13){if(r=Zd(o),r!==null){t.blockedOn=r,hh(t.priority,function(){ch(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oo(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=Ha(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);Je=a,o.target.dispatchEvent(a),Je=null}else return r=xs(o),r!==null&&Wa(r),t.blockedOn=o,!1;r.shift()}return!0}function mh(t,r,o){Oo(t)&&o.delete(r)}function ky(){Ba=!1,tr!==null&&Oo(tr)&&(tr=null),nr!==null&&Oo(nr)&&(nr=null),rr!==null&&Oo(rr)&&(rr=null),ds.forEach(mh),hs.forEach(mh)}function ps(t,r){t.blockedOn===r&&(t.blockedOn=null,Ba||(Ba=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ky)))}function ms(t){function r(c){return ps(c,t)}if(0<bo.length){ps(bo[0],t);for(var o=1;o<bo.length;o++){var a=bo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(tr!==null&&ps(tr,t),nr!==null&&ps(nr,t),rr!==null&&ps(rr,t),ds.forEach(r),hs.forEach(r),o=0;o<ir.length;o++)a=ir[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<ir.length&&(o=ir[0],o.blockedOn===null);)ph(o),o.blockedOn===null&&ir.shift()}var hi=Ae.ReactCurrentBatchConfig,Do=!0;function Ty(t,r,o,a){var c=ke,h=hi.transition;hi.transition=null;try{ke=1,Va(t,r,o,a)}finally{ke=c,hi.transition=h}}function xy(t,r,o,a){var c=ke,h=hi.transition;hi.transition=null;try{ke=4,Va(t,r,o,a)}finally{ke=c,hi.transition=h}}function Va(t,r,o,a){if(Do){var c=Ha(t,r,o,a);if(c===null)lu(t,r,a,Lo,o),fh(t,a);else if(Iy(c,t,r,o,a))a.stopPropagation();else if(fh(t,a),r&4&&-1<Cy.indexOf(t)){for(;c!==null;){var h=xs(c);if(h!==null&&uh(h),h=Ha(t,r,o,a),h===null&&lu(t,r,a,Lo,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else lu(t,r,a,null,o)}}var Lo=null;function Ha(t,r,o,a){if(Lo=null,t=Dn(a),t=Wr(t),t!==null)if(r=zr(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Zd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Lo=t,null}function gh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(py()){case Fa:return 1;case sh:return 4;case xo:case my:return 16;case oh:return 536870912;default:return 16}default:return 16}}var sr=null,$a=null,Mo=null;function _h(){if(Mo)return Mo;var t,r=$a,o=r.length,a,c="value"in sr?sr.value:sr.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var p=o-t;for(a=1;a<=p&&r[o-a]===c[h-a];a++);return Mo=c.slice(t,1<a?1-a:void 0)}function Fo(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function yh(){return!1}function Yt(t){function r(o,a,c,h,p){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=p,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Uo:yh,this.isPropagationStopped=yh,this}return U(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),r}var fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=Yt(fi),gs=U({},fi,{view:0,detail:0}),Ry=Yt(gs),Ka,qa,_s,jo=U({},gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ya,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_s&&(_s&&t.type==="mousemove"?(Ka=t.screenX-_s.screenX,qa=t.screenY-_s.screenY):qa=Ka=0,_s=t),Ka)},movementY:function(t){return"movementY"in t?t.movementY:qa}}),vh=Yt(jo),Ny=U({},jo,{dataTransfer:0}),Py=Yt(Ny),Ay=U({},gs,{relatedTarget:0}),Qa=Yt(Ay),by=U({},fi,{animationName:0,elapsedTime:0,pseudoElement:0}),Oy=Yt(by),Dy=U({},fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ly=Yt(Dy),My=U({},fi,{data:0}),wh=Yt(My),Fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=jy[t])?!!r[t]:!1}function Ya(){return zy}var Wy=U({},gs,{key:function(t){if(t.key){var r=Fy[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ya,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),By=Yt(Wy),Vy=U({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=Yt(Vy),Hy=U({},gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ya}),$y=Yt(Hy),Gy=U({},fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ky=Yt(Gy),qy=U({},jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qy=Yt(qy),Yy=[9,13,27,32],Ja=f&&"CompositionEvent"in window,ys=null;f&&"documentMode"in document&&(ys=document.documentMode);var Jy=f&&"TextEvent"in window&&!ys,Eh=f&&(!Ja||ys&&8<ys&&11>=ys),Ch=" ",Ih=!1;function kh(t,r){switch(t){case"keyup":return Yy.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Th(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pi=!1;function Xy(t,r){switch(t){case"compositionend":return Th(r);case"keypress":return r.which!==32?null:(Ih=!0,Ch);case"textInput":return t=r.data,t===Ch&&Ih?null:t;default:return null}}function Zy(t,r){if(pi)return t==="compositionend"||!Ja&&kh(t,r)?(t=_h(),Mo=$a=sr=null,pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Eh&&r.locale!=="ko"?null:r.data;default:return null}}var ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!ev[t.type]:r==="textarea"}function Rh(t,r,o,a){Io(a),r=Ho(r,"onChange"),0<r.length&&(o=new Ga("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var vs=null,ws=null;function tv(t){Gh(t,0)}function zo(t){var r=vi(t);if(Fe(r))return t}function nv(t,r){if(t==="change")return r}var Nh=!1;if(f){var Xa;if(f){var Za="oninput"in document;if(!Za){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),Za=typeof Ph.oninput=="function"}Xa=Za}else Xa=!1;Nh=Xa&&(!document.documentMode||9<document.documentMode)}function Ah(){vs&&(vs.detachEvent("onpropertychange",bh),ws=vs=null)}function bh(t){if(t.propertyName==="value"&&zo(ws)){var r=[];Rh(r,ws,t,Dn(t)),Xd(tv,r)}}function rv(t,r,o){t==="focusin"?(Ah(),vs=r,ws=o,vs.attachEvent("onpropertychange",bh)):t==="focusout"&&Ah()}function iv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zo(ws)}function sv(t,r){if(t==="click")return zo(r)}function ov(t,r){if(t==="input"||t==="change")return zo(r)}function lv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var pn=typeof Object.is=="function"?Object.is:lv;function Ss(t,r){if(pn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!m.call(r,c)||!pn(t[c],r[c]))return!1}return!0}function Oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dh(t,r){var o=Oh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Oh(o)}}function Lh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Lh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Mh(){for(var t=window,r=ze();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=ze(t.document)}return r}function eu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function av(t){var r=Mh(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Lh(o.ownerDocument.documentElement,o)){if(a!==null&&eu(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Dh(o,h);var p=Dh(o,a);c&&p&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==p.node||t.focusOffset!==p.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(p.node,p.offset)):(r.setEnd(p.node,p.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uv=f&&"documentMode"in document&&11>=document.documentMode,mi=null,tu=null,Es=null,nu=!1;function Fh(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nu||mi==null||mi!==ze(a)||(a=mi,"selectionStart"in a&&eu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Es&&Ss(Es,a)||(Es=a,a=Ho(tu,"onSelect"),0<a.length&&(r=new Ga("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=mi)))}function Wo(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var gi={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},ru={},Uh={};f&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function Bo(t){if(ru[t])return ru[t];if(!gi[t])return t;var r=gi[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Uh)return ru[t]=r[o];return t}var jh=Bo("animationend"),zh=Bo("animationiteration"),Wh=Bo("animationstart"),Bh=Bo("transitionend"),Vh=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,r){Vh.set(t,r),u(r,[t])}for(var iu=0;iu<Hh.length;iu++){var su=Hh[iu],cv=su.toLowerCase(),dv=su[0].toUpperCase()+su.slice(1);or(cv,"on"+dv)}or(jh,"onAnimationEnd"),or(zh,"onAnimationIteration"),or(Wh,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(Bh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));function $h(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,cy(a,r,void 0,t),t.currentTarget=null}function Gh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var p=a.length-1;0<=p;p--){var _=a[p],v=_.instance,x=_.currentTarget;if(_=_.listener,v!==h&&c.isPropagationStopped())break e;$h(c,_,x),h=v}else for(p=0;p<a.length;p++){if(_=a[p],v=_.instance,x=_.currentTarget,_=_.listener,v!==h&&c.isPropagationStopped())break e;$h(c,_,x),h=v}}}if(To)throw t=Ma,To=!1,Ma=null,t}function Ue(t,r){var o=r[fu];o===void 0&&(o=r[fu]=new Set);var a=t+"__bubble";o.has(a)||(Kh(r,t,2,!1),o.add(a))}function ou(t,r,o){var a=0;r&&(a|=4),Kh(o,t,a,r)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Is(t){if(!t[Vo]){t[Vo]=!0,s.forEach(function(o){o!=="selectionchange"&&(hv.has(o)||ou(o,!1,t),ou(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Vo]||(r[Vo]=!0,ou("selectionchange",!1,r))}}function Kh(t,r,o,a){switch(gh(r)){case 1:var c=Ty;break;case 4:c=xy;break;default:c=Va}o=c.bind(null,r,o,t),c=void 0,!La||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function lu(t,r,o,a,c){var h=a;if((r&1)===0&&(r&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(p===4)for(p=a.return;p!==null;){var v=p.tag;if((v===3||v===4)&&(v=p.stateNode.containerInfo,v===c||v.nodeType===8&&v.parentNode===c))return;p=p.return}for(;_!==null;){if(p=Wr(_),p===null)return;if(v=p.tag,v===5||v===6){a=h=p;continue e}_=_.parentNode}}a=a.return}Xd(function(){var x=h,A=Dn(o),b=[];e:{var P=Vh.get(t);if(P!==void 0){var j=Ga,B=t;switch(t){case"keypress":if(Fo(o)===0)break e;case"keydown":case"keyup":j=By;break;case"focusin":B="focus",j=Qa;break;case"focusout":B="blur",j=Qa;break;case"beforeblur":case"afterblur":j=Qa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=$y;break;case jh:case zh:case Wh:j=Oy;break;case Bh:j=Ky;break;case"scroll":j=Ry;break;case"wheel":j=Qy;break;case"copy":case"cut":case"paste":j=Ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Sh}var V=(r&4)!==0,Ze=!V&&t==="scroll",k=V?P!==null?P+"Capture":null:P;V=[];for(var S=x,T;S!==null;){T=S;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,k!==null&&(D=os(S,k),D!=null&&V.push(ks(S,D,T)))),Ze)break;S=S.return}0<V.length&&(P=new j(P,B,null,o,A),b.push({event:P,listeners:V}))}}if((r&7)===0){e:{if(P=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",P&&o!==Je&&(B=o.relatedTarget||o.fromElement)&&(Wr(B)||B[Fn]))break e;if((j||P)&&(P=A.window===A?A:(P=A.ownerDocument)?P.defaultView||P.parentWindow:window,j?(B=o.relatedTarget||o.toElement,j=x,B=B?Wr(B):null,B!==null&&(Ze=zr(B),B!==Ze||B.tag!==5&&B.tag!==6)&&(B=null)):(j=null,B=x),j!==B)){if(V=vh,D="onMouseLeave",k="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(V=Sh,D="onPointerLeave",k="onPointerEnter",S="pointer"),Ze=j==null?P:vi(j),T=B==null?P:vi(B),P=new V(D,S+"leave",j,o,A),P.target=Ze,P.relatedTarget=T,D=null,Wr(A)===x&&(V=new V(k,S+"enter",B,o,A),V.target=T,V.relatedTarget=Ze,D=V),Ze=D,j&&B)t:{for(V=j,k=B,S=0,T=V;T;T=_i(T))S++;for(T=0,D=k;D;D=_i(D))T++;for(;0<S-T;)V=_i(V),S--;for(;0<T-S;)k=_i(k),T--;for(;S--;){if(V===k||k!==null&&V===k.alternate)break t;V=_i(V),k=_i(k)}V=null}else V=null;j!==null&&qh(b,P,j,V,!1),B!==null&&Ze!==null&&qh(b,Ze,B,V,!0)}}e:{if(P=x?vi(x):window,j=P.nodeName&&P.nodeName.toLowerCase(),j==="select"||j==="input"&&P.type==="file")var H=nv;else if(xh(P))if(Nh)H=ov;else{H=iv;var q=rv}else(j=P.nodeName)&&j.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&(H=sv);if(H&&(H=H(t,x))){Rh(b,H,o,A);break e}q&&q(t,P,x),t==="focusout"&&(q=P._wrapperState)&&q.controlled&&P.type==="number"&&yt(P,"number",P.value)}switch(q=x?vi(x):window,t){case"focusin":(xh(q)||q.contentEditable==="true")&&(mi=q,tu=x,Es=null);break;case"focusout":Es=tu=mi=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Fh(b,o,A);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":Fh(b,o,A)}var Q;if(Ja)e:{switch(t){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else pi?kh(t,o)&&(X="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(X="onCompositionStart");X&&(Eh&&o.locale!=="ko"&&(pi||X!=="onCompositionStart"?X==="onCompositionEnd"&&pi&&(Q=_h()):(sr=A,$a="value"in sr?sr.value:sr.textContent,pi=!0)),q=Ho(x,X),0<q.length&&(X=new wh(X,t,null,o,A),b.push({event:X,listeners:q}),Q?X.data=Q:(Q=Th(o),Q!==null&&(X.data=Q)))),(Q=Jy?Xy(t,o):Zy(t,o))&&(x=Ho(x,"onBeforeInput"),0<x.length&&(A=new wh("onBeforeInput","beforeinput",null,o,A),b.push({event:A,listeners:x}),A.data=Q))}Gh(b,r)})}function ks(t,r,o){return{instance:t,listener:r,currentTarget:o}}function Ho(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=os(t,o),h!=null&&a.unshift(ks(t,h,c)),h=os(t,r),h!=null&&a.push(ks(t,h,c))),t=t.return}return a}function _i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qh(t,r,o,a,c){for(var h=r._reactName,p=[];o!==null&&o!==a;){var _=o,v=_.alternate,x=_.stateNode;if(v!==null&&v===a)break;_.tag===5&&x!==null&&(_=x,c?(v=os(o,h),v!=null&&p.unshift(ks(o,v,_))):c||(v=os(o,h),v!=null&&p.push(ks(o,v,_)))),o=o.return}p.length!==0&&t.push({event:r,listeners:p})}var fv=/\r\n?/g,pv=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(fv,`
`).replace(pv,"")}function $o(t,r,o){if(r=Qh(r),Qh(t)!==r&&o)throw Error(n(425))}function Go(){}var au=null,uu=null;function cu(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,mv=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(t){return Yh.resolve(null).then(t).catch(_v)}:du;function _v(t){setTimeout(function(){throw t})}function hu(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),ms(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);ms(r)}function lr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Jh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var yi=Math.random().toString(36).slice(2),Tn="__reactFiber$"+yi,Ts="__reactProps$"+yi,Fn="__reactContainer$"+yi,fu="__reactEvents$"+yi,yv="__reactListeners$"+yi,vv="__reactHandles$"+yi;function Wr(t){var r=t[Tn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Fn]||o[Tn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Jh(t);t!==null;){if(o=t[Tn])return o;t=Jh(t)}return r}t=o,o=t.parentNode}return null}function xs(t){return t=t[Tn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ko(t){return t[Ts]||null}var pu=[],wi=-1;function ar(t){return{current:t}}function je(t){0>wi||(t.current=pu[wi],pu[wi]=null,wi--)}function Oe(t,r){wi++,pu[wi]=t.current,t.current=r}var ur={},kt=ar(ur),Ft=ar(!1),Br=ur;function Si(t,r){var o=t.type.contextTypes;if(!o)return ur;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function Ut(t){return t=t.childContextTypes,t!=null}function qo(){je(Ft),je(kt)}function Xh(t,r,o){if(kt.current!==ur)throw Error(n(168));Oe(kt,r),Oe(Ft,o)}function Zh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,Ce(t)||"Unknown",c));return U({},o,a)}function Qo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Br=kt.current,Oe(kt,t),Oe(Ft,Ft.current),!0}function ef(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Zh(t,r,Br),a.__reactInternalMemoizedMergedChildContext=t,je(Ft),je(kt),Oe(kt,t)):je(Ft),Oe(Ft,o)}var Un=null,Yo=!1,mu=!1;function tf(t){Un===null?Un=[t]:Un.push(t)}function wv(t){Yo=!0,tf(t)}function cr(){if(!mu&&Un!==null){mu=!0;var t=0,r=ke;try{var o=Un;for(ke=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}Un=null,Yo=!1}catch(c){throw Un!==null&&(Un=Un.slice(t+1)),rh(Fa,cr),c}finally{ke=r,mu=!1}}return null}var Ei=[],Ci=0,Jo=null,Xo=0,rn=[],sn=0,Vr=null,jn=1,zn="";function Hr(t,r){Ei[Ci++]=Xo,Ei[Ci++]=Jo,Jo=t,Xo=r}function nf(t,r,o){rn[sn++]=jn,rn[sn++]=zn,rn[sn++]=Vr,Vr=t;var a=jn;t=zn;var c=32-fn(a)-1;a&=~(1<<c),o+=1;var h=32-fn(r)+c;if(30<h){var p=c-c%5;h=(a&(1<<p)-1).toString(32),a>>=p,c-=p,jn=1<<32-fn(r)+c|o<<c|a,zn=h+t}else jn=1<<h|o<<c|a,zn=t}function gu(t){t.return!==null&&(Hr(t,1),nf(t,1,0))}function _u(t){for(;t===Jo;)Jo=Ei[--Ci],Ei[Ci]=null,Xo=Ei[--Ci],Ei[Ci]=null;for(;t===Vr;)Vr=rn[--sn],rn[sn]=null,zn=rn[--sn],rn[sn]=null,jn=rn[--sn],rn[sn]=null}var Jt=null,Xt=null,We=!1,mn=null;function rf(t,r){var o=un(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function sf(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Jt=t,Xt=lr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Jt=t,Xt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Vr!==null?{id:jn,overflow:zn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=un(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,Jt=t,Xt=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vu(t){if(We){var r=Xt;if(r){var o=r;if(!sf(t,r)){if(yu(t))throw Error(n(418));r=lr(o.nextSibling);var a=Jt;r&&sf(t,r)?rf(a,o):(t.flags=t.flags&-4097|2,We=!1,Jt=t)}}else{if(yu(t))throw Error(n(418));t.flags=t.flags&-4097|2,We=!1,Jt=t}}}function of(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jt=t}function Zo(t){if(t!==Jt)return!1;if(!We)return of(t),We=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!cu(t.type,t.memoizedProps)),r&&(r=Xt)){if(yu(t))throw lf(),Error(n(418));for(;r;)rf(t,r),r=lr(r.nextSibling)}if(of(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Xt=lr(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Xt=null}}else Xt=Jt?lr(t.stateNode.nextSibling):null;return!0}function lf(){for(var t=Xt;t;)t=lr(t.nextSibling)}function Ii(){Xt=Jt=null,We=!1}function wu(t){mn===null?mn=[t]:mn.push(t)}var Sv=Ae.ReactCurrentBatchConfig;function Rs(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(p){var _=c.refs;p===null?delete _[h]:_[h]=p},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function el(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function af(t){var r=t._init;return r(t._payload)}function uf(t){function r(k,S){if(t){var T=k.deletions;T===null?(k.deletions=[S],k.flags|=16):T.push(S)}}function o(k,S){if(!t)return null;for(;S!==null;)r(k,S),S=S.sibling;return null}function a(k,S){for(k=new Map;S!==null;)S.key!==null?k.set(S.key,S):k.set(S.index,S),S=S.sibling;return k}function c(k,S){return k=yr(k,S),k.index=0,k.sibling=null,k}function h(k,S,T){return k.index=T,t?(T=k.alternate,T!==null?(T=T.index,T<S?(k.flags|=2,S):T):(k.flags|=2,S)):(k.flags|=1048576,S)}function p(k){return t&&k.alternate===null&&(k.flags|=2),k}function _(k,S,T,D){return S===null||S.tag!==6?(S=dc(T,k.mode,D),S.return=k,S):(S=c(S,T),S.return=k,S)}function v(k,S,T,D){var H=T.type;return H===ot?A(k,S,T.props.children,D,T.key):S!==null&&(S.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Me&&af(H)===S.type)?(D=c(S,T.props),D.ref=Rs(k,S,T),D.return=k,D):(D=Il(T.type,T.key,T.props,null,k.mode,D),D.ref=Rs(k,S,T),D.return=k,D)}function x(k,S,T,D){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=hc(T,k.mode,D),S.return=k,S):(S=c(S,T.children||[]),S.return=k,S)}function A(k,S,T,D,H){return S===null||S.tag!==7?(S=Xr(T,k.mode,D,H),S.return=k,S):(S=c(S,T),S.return=k,S)}function b(k,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return S=dc(""+S,k.mode,T),S.return=k,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case st:return T=Il(S.type,S.key,S.props,null,k.mode,T),T.ref=Rs(k,null,S),T.return=k,T;case Ge:return S=hc(S,k.mode,T),S.return=k,S;case Me:var D=S._init;return b(k,D(S._payload),T)}if(qt(S)||K(S))return S=Xr(S,k.mode,T,null),S.return=k,S;el(k,S)}return null}function P(k,S,T,D){var H=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return H!==null?null:_(k,S,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case st:return T.key===H?v(k,S,T,D):null;case Ge:return T.key===H?x(k,S,T,D):null;case Me:return H=T._init,P(k,S,H(T._payload),D)}if(qt(T)||K(T))return H!==null?null:A(k,S,T,D,null);el(k,T)}return null}function j(k,S,T,D,H){if(typeof D=="string"&&D!==""||typeof D=="number")return k=k.get(T)||null,_(S,k,""+D,H);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case st:return k=k.get(D.key===null?T:D.key)||null,v(S,k,D,H);case Ge:return k=k.get(D.key===null?T:D.key)||null,x(S,k,D,H);case Me:var q=D._init;return j(k,S,T,q(D._payload),H)}if(qt(D)||K(D))return k=k.get(T)||null,A(S,k,D,H,null);el(S,D)}return null}function B(k,S,T,D){for(var H=null,q=null,Q=S,X=S=0,ht=null;Q!==null&&X<T.length;X++){Q.index>X?(ht=Q,Q=null):ht=Q.sibling;var ve=P(k,Q,T[X],D);if(ve===null){Q===null&&(Q=ht);break}t&&Q&&ve.alternate===null&&r(k,Q),S=h(ve,S,X),q===null?H=ve:q.sibling=ve,q=ve,Q=ht}if(X===T.length)return o(k,Q),We&&Hr(k,X),H;if(Q===null){for(;X<T.length;X++)Q=b(k,T[X],D),Q!==null&&(S=h(Q,S,X),q===null?H=Q:q.sibling=Q,q=Q);return We&&Hr(k,X),H}for(Q=a(k,Q);X<T.length;X++)ht=j(Q,k,X,T[X],D),ht!==null&&(t&&ht.alternate!==null&&Q.delete(ht.key===null?X:ht.key),S=h(ht,S,X),q===null?H=ht:q.sibling=ht,q=ht);return t&&Q.forEach(function(vr){return r(k,vr)}),We&&Hr(k,X),H}function V(k,S,T,D){var H=K(T);if(typeof H!="function")throw Error(n(150));if(T=H.call(T),T==null)throw Error(n(151));for(var q=H=null,Q=S,X=S=0,ht=null,ve=T.next();Q!==null&&!ve.done;X++,ve=T.next()){Q.index>X?(ht=Q,Q=null):ht=Q.sibling;var vr=P(k,Q,ve.value,D);if(vr===null){Q===null&&(Q=ht);break}t&&Q&&vr.alternate===null&&r(k,Q),S=h(vr,S,X),q===null?H=vr:q.sibling=vr,q=vr,Q=ht}if(ve.done)return o(k,Q),We&&Hr(k,X),H;if(Q===null){for(;!ve.done;X++,ve=T.next())ve=b(k,ve.value,D),ve!==null&&(S=h(ve,S,X),q===null?H=ve:q.sibling=ve,q=ve);return We&&Hr(k,X),H}for(Q=a(k,Q);!ve.done;X++,ve=T.next())ve=j(Q,k,X,ve.value,D),ve!==null&&(t&&ve.alternate!==null&&Q.delete(ve.key===null?X:ve.key),S=h(ve,S,X),q===null?H=ve:q.sibling=ve,q=ve);return t&&Q.forEach(function(e0){return r(k,e0)}),We&&Hr(k,X),H}function Ze(k,S,T,D){if(typeof T=="object"&&T!==null&&T.type===ot&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case st:e:{for(var H=T.key,q=S;q!==null;){if(q.key===H){if(H=T.type,H===ot){if(q.tag===7){o(k,q.sibling),S=c(q,T.props.children),S.return=k,k=S;break e}}else if(q.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Me&&af(H)===q.type){o(k,q.sibling),S=c(q,T.props),S.ref=Rs(k,q,T),S.return=k,k=S;break e}o(k,q);break}else r(k,q);q=q.sibling}T.type===ot?(S=Xr(T.props.children,k.mode,D,T.key),S.return=k,k=S):(D=Il(T.type,T.key,T.props,null,k.mode,D),D.ref=Rs(k,S,T),D.return=k,k=D)}return p(k);case Ge:e:{for(q=T.key;S!==null;){if(S.key===q)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){o(k,S.sibling),S=c(S,T.children||[]),S.return=k,k=S;break e}else{o(k,S);break}else r(k,S);S=S.sibling}S=hc(T,k.mode,D),S.return=k,k=S}return p(k);case Me:return q=T._init,Ze(k,S,q(T._payload),D)}if(qt(T))return B(k,S,T,D);if(K(T))return V(k,S,T,D);el(k,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,S!==null&&S.tag===6?(o(k,S.sibling),S=c(S,T),S.return=k,k=S):(o(k,S),S=dc(T,k.mode,D),S.return=k,k=S),p(k)):o(k,S)}return Ze}var ki=uf(!0),cf=uf(!1),tl=ar(null),nl=null,Ti=null,Su=null;function Eu(){Su=Ti=nl=null}function Cu(t){var r=tl.current;je(tl),t._currentValue=r}function Iu(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function xi(t,r){nl=t,Su=Ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(jt=!0),t.firstContext=null)}function on(t){var r=t._currentValue;if(Su!==t)if(t={context:t,memoizedValue:r,next:null},Ti===null){if(nl===null)throw Error(n(308));Ti=t,nl.dependencies={lanes:0,firstContext:t}}else Ti=Ti.next=t;return r}var $r=null;function ku(t){$r===null?$r=[t]:$r.push(t)}function df(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,ku(r)):(o.next=c.next,c.next=o),r.interleaved=o,Wn(t,a)}function Wn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var dr=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function hr(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(fe&2)!==0){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,Wn(t,o)}return c=a.interleaved,c===null?(r.next=r,ku(a)):(r.next=c.next,c.next=r),a.interleaved=r,Wn(t,o)}function rl(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,za(t,o)}}function ff(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var p={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=p:h=h.next=p,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function il(t,r,o,a){var c=t.updateQueue;dr=!1;var h=c.firstBaseUpdate,p=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var v=_,x=v.next;v.next=null,p===null?h=x:p.next=x,p=v;var A=t.alternate;A!==null&&(A=A.updateQueue,_=A.lastBaseUpdate,_!==p&&(_===null?A.firstBaseUpdate=x:_.next=x,A.lastBaseUpdate=v))}if(h!==null){var b=c.baseState;p=0,A=x=v=null,_=h;do{var P=_.lane,j=_.eventTime;if((a&P)===P){A!==null&&(A=A.next={eventTime:j,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var B=t,V=_;switch(P=r,j=o,V.tag){case 1:if(B=V.payload,typeof B=="function"){b=B.call(j,b,P);break e}b=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=V.payload,P=typeof B=="function"?B.call(j,b,P):B,P==null)break e;b=U({},b,P);break e;case 2:dr=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,P=c.effects,P===null?c.effects=[_]:P.push(_))}else j={eventTime:j,lane:P,tag:_.tag,payload:_.payload,callback:_.callback,next:null},A===null?(x=A=j,v=b):A=A.next=j,p|=P;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;P=_,_=P.next,P.next=null,c.lastBaseUpdate=P,c.shared.pending=null}}while(!0);if(A===null&&(v=b),c.baseState=v,c.firstBaseUpdate=x,c.lastBaseUpdate=A,r=c.shared.interleaved,r!==null){c=r;do p|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);qr|=p,t.lanes=p,t.memoizedState=b}}function pf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Ns={},xn=ar(Ns),Ps=ar(Ns),As=ar(Ns);function Gr(t){if(t===Ns)throw Error(n(174));return t}function xu(t,r){switch(Oe(As,r),Oe(Ps,t),Oe(xn,Ns),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ct(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Ct(r,t)}je(xn),Oe(xn,r)}function Ri(){je(xn),je(Ps),je(As)}function mf(t){Gr(As.current);var r=Gr(xn.current),o=Ct(r,t.type);r!==o&&(Oe(Ps,t),Oe(xn,o))}function Ru(t){Ps.current===t&&(je(xn),je(Ps))}var Be=ar(0);function sl(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Nu=[];function Pu(){for(var t=0;t<Nu.length;t++)Nu[t]._workInProgressVersionPrimary=null;Nu.length=0}var ol=Ae.ReactCurrentDispatcher,Au=Ae.ReactCurrentBatchConfig,Kr=0,Ve=null,nt=null,ct=null,ll=!1,bs=!1,Os=0,Ev=0;function Tt(){throw Error(n(321))}function bu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!pn(t[o],r[o]))return!1;return!0}function Ou(t,r,o,a,c,h){if(Kr=h,Ve=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ol.current=t===null||t.memoizedState===null?Tv:xv,t=o(a,c),bs){h=0;do{if(bs=!1,Os=0,25<=h)throw Error(n(301));h+=1,ct=nt=null,r.updateQueue=null,ol.current=Rv,t=o(a,c)}while(bs)}if(ol.current=cl,r=nt!==null&&nt.next!==null,Kr=0,ct=nt=Ve=null,ll=!1,r)throw Error(n(300));return t}function Du(){var t=Os!==0;return Os=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Ve.memoizedState=ct=t:ct=ct.next=t,ct}function ln(){if(nt===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var r=ct===null?Ve.memoizedState:ct.next;if(r!==null)ct=r,nt=t;else{if(t===null)throw Error(n(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},ct===null?Ve.memoizedState=ct=t:ct=ct.next=t}return ct}function Ds(t,r){return typeof r=="function"?r(t):r}function Lu(t){var r=ln(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=nt,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var p=c.next;c.next=h.next,h.next=p}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=p=null,v=null,x=h;do{var A=x.lane;if((Kr&A)===A)v!==null&&(v=v.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),a=x.hasEagerState?x.eagerState:t(a,x.action);else{var b={lane:A,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};v===null?(_=v=b,p=a):v=v.next=b,Ve.lanes|=A,qr|=A}x=x.next}while(x!==null&&x!==h);v===null?p=a:v.next=_,pn(a,r.memoizedState)||(jt=!0),r.memoizedState=a,r.baseState=p,r.baseQueue=v,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ve.lanes|=h,qr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Mu(t){var r=ln(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var p=c=c.next;do h=t(h,p.action),p=p.next;while(p!==c);pn(h,r.memoizedState)||(jt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function gf(){}function _f(t,r){var o=Ve,a=ln(),c=r(),h=!pn(a.memoizedState,c);if(h&&(a.memoizedState=c,jt=!0),a=a.queue,Fu(wf.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||ct!==null&&ct.memoizedState.tag&1){if(o.flags|=2048,Ls(9,vf.bind(null,o,a,c,r),void 0,null),dt===null)throw Error(n(349));(Kr&30)!==0||yf(o,r,c)}return c}function yf(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Ve.updateQueue,r===null?(r={lastEffect:null,stores:null},Ve.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function vf(t,r,o,a){r.value=o,r.getSnapshot=a,Sf(r)&&Ef(t)}function wf(t,r,o){return o(function(){Sf(r)&&Ef(t)})}function Sf(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!pn(t,o)}catch{return!0}}function Ef(t){var r=Wn(t,1);r!==null&&vn(r,t,1,-1)}function Cf(t){var r=Rn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:t},r.queue=t,t=t.dispatch=kv.bind(null,Ve,t),[r.memoizedState,t]}function Ls(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=Ve.updateQueue,r===null?(r={lastEffect:null,stores:null},Ve.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function If(){return ln().memoizedState}function al(t,r,o,a){var c=Rn();Ve.flags|=t,c.memoizedState=Ls(1|r,o,void 0,a===void 0?null:a)}function ul(t,r,o,a){var c=ln();a=a===void 0?null:a;var h=void 0;if(nt!==null){var p=nt.memoizedState;if(h=p.destroy,a!==null&&bu(a,p.deps)){c.memoizedState=Ls(r,o,h,a);return}}Ve.flags|=t,c.memoizedState=Ls(1|r,o,h,a)}function kf(t,r){return al(8390656,8,t,r)}function Fu(t,r){return ul(2048,8,t,r)}function Tf(t,r){return ul(4,2,t,r)}function xf(t,r){return ul(4,4,t,r)}function Rf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Nf(t,r,o){return o=o!=null?o.concat([t]):null,ul(4,4,Rf.bind(null,r,t),o)}function Uu(){}function Pf(t,r){var o=ln();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&bu(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function Af(t,r){var o=ln();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&bu(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function bf(t,r,o){return(Kr&21)===0?(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=o):(pn(o,r)||(o=lh(),Ve.lanes|=o,qr|=o,t.baseState=!0),r)}function Cv(t,r){var o=ke;ke=o!==0&&4>o?o:4,t(!0);var a=Au.transition;Au.transition={};try{t(!1),r()}finally{ke=o,Au.transition=a}}function Of(){return ln().memoizedState}function Iv(t,r,o){var a=gr(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Df(t))Lf(r,o);else if(o=df(t,r,o,a),o!==null){var c=At();vn(o,t,a,c),Mf(o,r,a)}}function kv(t,r,o){var a=gr(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Df(t))Lf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var p=r.lastRenderedState,_=h(p,o);if(c.hasEagerState=!0,c.eagerState=_,pn(_,p)){var v=r.interleaved;v===null?(c.next=c,ku(r)):(c.next=v.next,v.next=c),r.interleaved=c;return}}catch{}finally{}o=df(t,r,c,a),o!==null&&(c=At(),vn(o,t,a,c),Mf(o,r,a))}}function Df(t){var r=t.alternate;return t===Ve||r!==null&&r===Ve}function Lf(t,r){bs=ll=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Mf(t,r,o){if((o&4194240)!==0){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,za(t,o)}}var cl={readContext:on,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},Tv={readContext:on,useCallback:function(t,r){return Rn().memoizedState=[t,r===void 0?null:r],t},useContext:on,useEffect:kf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,al(4194308,4,Rf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return al(4194308,4,t,r)},useInsertionEffect:function(t,r){return al(4,2,t,r)},useMemo:function(t,r){var o=Rn();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=Rn();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=Iv.bind(null,Ve,t),[a.memoizedState,t]},useRef:function(t){var r=Rn();return t={current:t},r.memoizedState=t},useState:Cf,useDebugValue:Uu,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=Cf(!1),r=t[0];return t=Cv.bind(null,t[1]),Rn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=Ve,c=Rn();if(We){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),dt===null)throw Error(n(349));(Kr&30)!==0||yf(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,kf(wf.bind(null,a,h,t),[t]),a.flags|=2048,Ls(9,vf.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=Rn(),r=dt.identifierPrefix;if(We){var o=zn,a=jn;o=(a&~(1<<32-fn(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=Os++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Ev++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},xv={readContext:on,useCallback:Pf,useContext:on,useEffect:Fu,useImperativeHandle:Nf,useInsertionEffect:Tf,useLayoutEffect:xf,useMemo:Af,useReducer:Lu,useRef:If,useState:function(){return Lu(Ds)},useDebugValue:Uu,useDeferredValue:function(t){var r=ln();return bf(r,nt.memoizedState,t)},useTransition:function(){var t=Lu(Ds)[0],r=ln().memoizedState;return[t,r]},useMutableSource:gf,useSyncExternalStore:_f,useId:Of,unstable_isNewReconciler:!1},Rv={readContext:on,useCallback:Pf,useContext:on,useEffect:Fu,useImperativeHandle:Nf,useInsertionEffect:Tf,useLayoutEffect:xf,useMemo:Af,useReducer:Mu,useRef:If,useState:function(){return Mu(Ds)},useDebugValue:Uu,useDeferredValue:function(t){var r=ln();return nt===null?r.memoizedState=t:bf(r,nt.memoizedState,t)},useTransition:function(){var t=Mu(Ds)[0],r=ln().memoizedState;return[t,r]},useMutableSource:gf,useSyncExternalStore:_f,useId:Of,unstable_isNewReconciler:!1};function gn(t,r){if(t&&t.defaultProps){r=U({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function ju(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:U({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var dl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=At(),c=gr(t),h=Bn(a,c);h.payload=r,o!=null&&(h.callback=o),r=hr(t,h,c),r!==null&&(vn(r,t,c,a),rl(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=At(),c=gr(t),h=Bn(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=hr(t,h,c),r!==null&&(vn(r,t,c,a),rl(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=At(),a=gr(t),c=Bn(o,a);c.tag=2,r!=null&&(c.callback=r),r=hr(t,c,a),r!==null&&(vn(r,t,a,o),rl(r,t,a))}};function Ff(t,r,o,a,c,h,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,p):r.prototype&&r.prototype.isPureReactComponent?!Ss(o,a)||!Ss(c,h):!0}function Uf(t,r,o){var a=!1,c=ur,h=r.contextType;return typeof h=="object"&&h!==null?h=on(h):(c=Ut(r)?Br:kt.current,a=r.contextTypes,h=(a=a!=null)?Si(t,c):ur),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=dl,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function jf(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&dl.enqueueReplaceState(r,r.state,null)}function zu(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Tu(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=on(h):(h=Ut(r)?Br:kt.current,c.context=Si(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(ju(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&dl.enqueueReplaceState(c,c.state,null),il(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Ni(t,r){try{var o="",a=r;do o+=oe(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function Wu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Bu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Nv=typeof WeakMap=="function"?WeakMap:Map;function zf(t,r,o){o=Bn(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){yl||(yl=!0,rc=a),Bu(t,r)},o}function Wf(t,r,o){o=Bn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){Bu(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Bu(t,r),typeof a!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var p=r.stack;this.componentDidCatch(r.value,{componentStack:p!==null?p:""})}),o}function Bf(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Nv;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=Vv.bind(null,t,r,o),r.then(t,t))}function Vf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Hf(t,r,o,a,c){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Bn(-1,1),r.tag=2,hr(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var Pv=Ae.ReactCurrentOwner,jt=!1;function Pt(t,r,o,a){r.child=t===null?cf(r,null,o,a):ki(r,t.child,o,a)}function $f(t,r,o,a,c){o=o.render;var h=r.ref;return xi(r,c),a=Ou(t,r,o,a,h,c),o=Du(),t!==null&&!jt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,Vn(t,r,c)):(We&&o&&gu(r),r.flags|=1,Pt(t,r,a,c),r.child)}function Gf(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!cc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Kf(t,r,h,a,c)):(t=Il(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,(t.lanes&c)===0){var p=h.memoizedProps;if(o=o.compare,o=o!==null?o:Ss,o(p,a)&&t.ref===r.ref)return Vn(t,r,c)}return r.flags|=1,t=yr(h,a),t.ref=r.ref,t.return=r,r.child=t}function Kf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(Ss(h,a)&&t.ref===r.ref)if(jt=!1,r.pendingProps=a=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(jt=!0);else return r.lanes=t.lanes,Vn(t,r,c)}return Vu(t,r,o,a,c)}function qf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(Ai,Zt),Zt|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Oe(Ai,Zt),Zt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Oe(Ai,Zt),Zt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,Oe(Ai,Zt),Zt|=a;return Pt(t,r,c,o),r.child}function Qf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Vu(t,r,o,a,c){var h=Ut(o)?Br:kt.current;return h=Si(r,h),xi(r,c),o=Ou(t,r,o,a,h,c),a=Du(),t!==null&&!jt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,Vn(t,r,c)):(We&&a&&gu(r),r.flags|=1,Pt(t,r,o,c),r.child)}function Yf(t,r,o,a,c){if(Ut(o)){var h=!0;Qo(r)}else h=!1;if(xi(r,c),r.stateNode===null)fl(t,r),Uf(r,o,a),zu(r,o,a,c),a=!0;else if(t===null){var p=r.stateNode,_=r.memoizedProps;p.props=_;var v=p.context,x=o.contextType;typeof x=="object"&&x!==null?x=on(x):(x=Ut(o)?Br:kt.current,x=Si(r,x));var A=o.getDerivedStateFromProps,b=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function";b||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==a||v!==x)&&jf(r,p,a,x),dr=!1;var P=r.memoizedState;p.state=P,il(r,a,p,c),v=r.memoizedState,_!==a||P!==v||Ft.current||dr?(typeof A=="function"&&(ju(r,o,A,a),v=r.memoizedState),(_=dr||Ff(r,o,_,a,P,v,x))?(b||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=v),p.props=a,p.state=v,p.context=x,a=_):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{p=r.stateNode,hf(t,r),_=r.memoizedProps,x=r.type===r.elementType?_:gn(r.type,_),p.props=x,b=r.pendingProps,P=p.context,v=o.contextType,typeof v=="object"&&v!==null?v=on(v):(v=Ut(o)?Br:kt.current,v=Si(r,v));var j=o.getDerivedStateFromProps;(A=typeof j=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==b||P!==v)&&jf(r,p,a,v),dr=!1,P=r.memoizedState,p.state=P,il(r,a,p,c);var B=r.memoizedState;_!==b||P!==B||Ft.current||dr?(typeof j=="function"&&(ju(r,o,j,a),B=r.memoizedState),(x=dr||Ff(r,o,x,a,P,B,v)||!1)?(A||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,B,v),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,B,v)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&P===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&P===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=B),p.props=a,p.state=B,p.context=v,a=x):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&P===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&P===t.memoizedState||(r.flags|=1024),a=!1)}return Hu(t,r,o,a,h,c)}function Hu(t,r,o,a,c,h){Qf(t,r);var p=(r.flags&128)!==0;if(!a&&!p)return c&&ef(r,o,!1),Vn(t,r,h);a=r.stateNode,Pv.current=r;var _=p&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&p?(r.child=ki(r,t.child,null,h),r.child=ki(r,null,_,h)):Pt(t,r,_,h),r.memoizedState=a.state,c&&ef(r,o,!0),r.child}function Jf(t){var r=t.stateNode;r.pendingContext?Xh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Xh(t,r.context,!1),xu(t,r.containerInfo)}function Xf(t,r,o,a,c){return Ii(),wu(c),r.flags|=256,Pt(t,r,o,a),r.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zf(t,r,o){var a=r.pendingProps,c=Be.current,h=!1,p=(r.flags&128)!==0,_;if((_=p)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Oe(Be,c&1),t===null)return vu(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(p=a.children,t=a.fallback,h?(a=r.mode,h=r.child,p={mode:"hidden",children:p},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=p):h=kl(p,a,0,null),t=Xr(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=Gu(o),r.memoizedState=$u,t):Ku(r,p));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return Av(t,r,p,a,_,c,o);if(h){h=a.fallback,p=r.mode,c=t.child,_=c.sibling;var v={mode:"hidden",children:a.children};return(p&1)===0&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=v,r.deletions=null):(a=yr(c,v),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=yr(_,h):(h=Xr(h,p,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,p=t.child.memoizedState,p=p===null?Gu(o):{baseLanes:p.baseLanes|o,cachePool:null,transitions:p.transitions},h.memoizedState=p,h.childLanes=t.childLanes&~o,r.memoizedState=$u,a}return h=t.child,t=h.sibling,a=yr(h,{mode:"visible",children:a.children}),(r.mode&1)===0&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function Ku(t,r){return r=kl({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function hl(t,r,o,a){return a!==null&&wu(a),ki(r,t.child,null,o),t=Ku(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Av(t,r,o,a,c,h,p){if(o)return r.flags&256?(r.flags&=-257,a=Wu(Error(n(422))),hl(t,r,p,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=kl({mode:"visible",children:a.children},c,0,null),h=Xr(h,c,p,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,(r.mode&1)!==0&&ki(r,t.child,null,p),r.child.memoizedState=Gu(p),r.memoizedState=$u,h);if((r.mode&1)===0)return hl(t,r,p,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=Wu(h,a,void 0),hl(t,r,p,a)}if(_=(p&t.childLanes)!==0,jt||_){if(a=dt,a!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|p))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Wn(t,c),vn(a,t,c,-1))}return uc(),a=Wu(Error(n(421))),hl(t,r,p,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=Hv.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,Xt=lr(c.nextSibling),Jt=r,We=!0,mn=null,t!==null&&(rn[sn++]=jn,rn[sn++]=zn,rn[sn++]=Vr,jn=t.id,zn=t.overflow,Vr=r),r=Ku(r,a.children),r.flags|=4096,r)}function ep(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),Iu(t.return,r,o)}function qu(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function tp(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(Pt(t,r,a.children,o),a=Be.current,(a&2)!==0)a=a&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ep(t,o,r);else if(t.tag===19)ep(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Oe(Be,a),(r.mode&1)===0)r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&sl(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),qu(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&sl(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}qu(r,!0,o,null,h);break;case"together":qu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function fl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Vn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),qr|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=yr(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=yr(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function bv(t,r,o){switch(r.tag){case 3:Jf(r),Ii();break;case 5:mf(r);break;case 1:Ut(r.type)&&Qo(r);break;case 4:xu(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;Oe(tl,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(Oe(Be,Be.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Zf(t,r,o):(Oe(Be,Be.current&1),t=Vn(t,r,o),t!==null?t.sibling:null);Oe(Be,Be.current&1);break;case 19:if(a=(o&r.childLanes)!==0,(t.flags&128)!==0){if(a)return tp(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Oe(Be,Be.current),a)break;return null;case 22:case 23:return r.lanes=0,qf(t,r,o)}return Vn(t,r,o)}var np,Qu,rp,ip;np=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Qu=function(){},rp=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,Gr(xn.current);var h=null;switch(o){case"input":c=ge(t,c),a=ge(t,a),h=[];break;case"select":c=U({},c,{value:void 0}),a=U({},a,{value:void 0}),h=[];break;case"textarea":c=Ee(t,c),a=Ee(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=Go)}G(o,a);var p;o=null;for(x in c)if(!a.hasOwnProperty(x)&&c.hasOwnProperty(x)&&c[x]!=null)if(x==="style"){var _=c[x];for(p in _)_.hasOwnProperty(p)&&(o||(o={}),o[p]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(l.hasOwnProperty(x)?h||(h=[]):(h=h||[]).push(x,null));for(x in a){var v=a[x];if(_=c!=null?c[x]:void 0,a.hasOwnProperty(x)&&v!==_&&(v!=null||_!=null))if(x==="style")if(_){for(p in _)!_.hasOwnProperty(p)||v&&v.hasOwnProperty(p)||(o||(o={}),o[p]="");for(p in v)v.hasOwnProperty(p)&&_[p]!==v[p]&&(o||(o={}),o[p]=v[p])}else o||(h||(h=[]),h.push(x,o)),o=v;else x==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,_=_?_.__html:void 0,v!=null&&_!==v&&(h=h||[]).push(x,v)):x==="children"?typeof v!="string"&&typeof v!="number"||(h=h||[]).push(x,""+v):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(l.hasOwnProperty(x)?(v!=null&&x==="onScroll"&&Ue("scroll",t),h||_===v||(h=[])):(h=h||[]).push(x,v))}o&&(h=h||[]).push("style",o);var x=h;(r.updateQueue=x)&&(r.flags|=4)}},ip=function(t,r,o,a){o!==a&&(r.flags|=4)};function Ms(t,r){if(!We)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function xt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function Ov(t,r,o){var a=r.pendingProps;switch(_u(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(r),null;case 1:return Ut(r.type)&&qo(),xt(r),null;case 3:return a=r.stateNode,Ri(),je(Ft),je(kt),Pu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,mn!==null&&(oc(mn),mn=null))),Qu(t,r),xt(r),null;case 5:Ru(r);var c=Gr(As.current);if(o=r.type,t!==null&&r.stateNode!=null)rp(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return xt(r),null}if(t=Gr(xn.current),Zo(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[Tn]=r,a[Ts]=h,t=(r.mode&1)!==0,o){case"dialog":Ue("cancel",a),Ue("close",a);break;case"iframe":case"object":case"embed":Ue("load",a);break;case"video":case"audio":for(c=0;c<Cs.length;c++)Ue(Cs[c],a);break;case"source":Ue("error",a);break;case"img":case"image":case"link":Ue("error",a),Ue("load",a);break;case"details":Ue("toggle",a);break;case"input":_e(a,h),Ue("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Ue("invalid",a);break;case"textarea":Et(a,h),Ue("invalid",a)}G(o,h),c=null;for(var p in h)if(h.hasOwnProperty(p)){var _=h[p];p==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&$o(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&$o(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(p)&&_!=null&&p==="onScroll"&&Ue("scroll",a)}switch(o){case"input":ie(a),Mt(a,h,!0);break;case"textarea":ie(a),nn(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=Go)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hn(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=p.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=p.createElement(o,{is:a.is}):(t=p.createElement(o),o==="select"&&(p=t,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):t=p.createElementNS(t,o),t[Tn]=r,t[Ts]=a,np(t,r,!1,!1),r.stateNode=t;e:{switch(p=ye(o,a),o){case"dialog":Ue("cancel",t),Ue("close",t),c=a;break;case"iframe":case"object":case"embed":Ue("load",t),c=a;break;case"video":case"audio":for(c=0;c<Cs.length;c++)Ue(Cs[c],t);c=a;break;case"source":Ue("error",t),c=a;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),c=a;break;case"details":Ue("toggle",t),c=a;break;case"input":_e(t,a),c=ge(t,a),Ue("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=U({},a,{value:void 0}),Ue("invalid",t);break;case"textarea":Et(t,a),c=Ee(t,a),Ue("invalid",t);break;default:c=a}G(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var v=_[h];h==="style"?O(t,v):h==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Qt(t,v)):h==="children"?typeof v=="string"?(o!=="textarea"||v!=="")&&ut(t,v):typeof v=="number"&&ut(t,""+v):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?v!=null&&h==="onScroll"&&Ue("scroll",t):v!=null&&Ye(t,h,v,p))}switch(o){case"input":ie(t),Mt(t,a,!1);break;case"textarea":ie(t),nn(t);break;case"option":a.value!=null&&t.setAttribute("value",""+de(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Ie(t,!!a.multiple,h,!1):a.defaultValue!=null&&Ie(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=Go)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return xt(r),null;case 6:if(t&&r.stateNode!=null)ip(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=Gr(As.current),Gr(xn.current),Zo(r)){if(a=r.stateNode,o=r.memoizedProps,a[Tn]=r,(h=a.nodeValue!==o)&&(t=Jt,t!==null))switch(t.tag){case 3:$o(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$o(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Tn]=r,r.stateNode=a}return xt(r),null;case 13:if(je(Be),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&Xt!==null&&(r.mode&1)!==0&&(r.flags&128)===0)lf(),Ii(),r.flags|=98560,h=!1;else if(h=Zo(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Tn]=r}else Ii(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;xt(r),h=!1}else mn!==null&&(oc(mn),mn=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Be.current&1)!==0?rt===0&&(rt=3):uc())),r.updateQueue!==null&&(r.flags|=4),xt(r),null);case 4:return Ri(),Qu(t,r),t===null&&Is(r.stateNode.containerInfo),xt(r),null;case 10:return Cu(r.type._context),xt(r),null;case 17:return Ut(r.type)&&qo(),xt(r),null;case 19:if(je(Be),h=r.memoizedState,h===null)return xt(r),null;if(a=(r.flags&128)!==0,p=h.rendering,p===null)if(a)Ms(h,!1);else{if(rt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(p=sl(t),p!==null){for(r.flags|=128,Ms(h,!1),a=p.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,p=h.alternate,p===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=p.childLanes,h.lanes=p.lanes,h.child=p.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=p.memoizedProps,h.memoizedState=p.memoizedState,h.updateQueue=p.updateQueue,h.type=p.type,t=p.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Oe(Be,Be.current&1|2),r.child}t=t.sibling}h.tail!==null&&Xe()>bi&&(r.flags|=128,a=!0,Ms(h,!1),r.lanes=4194304)}else{if(!a)if(t=sl(p),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Ms(h,!0),h.tail===null&&h.tailMode==="hidden"&&!p.alternate&&!We)return xt(r),null}else 2*Xe()-h.renderingStartTime>bi&&o!==1073741824&&(r.flags|=128,a=!0,Ms(h,!1),r.lanes=4194304);h.isBackwards?(p.sibling=r.child,r.child=p):(o=h.last,o!==null?o.sibling=p:r.child=p,h.last=p)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Xe(),r.sibling=null,o=Be.current,Oe(Be,a?o&1|2:o&1),r):(xt(r),null);case 22:case 23:return ac(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&(r.mode&1)!==0?(Zt&1073741824)!==0&&(xt(r),r.subtreeFlags&6&&(r.flags|=8192)):xt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function Dv(t,r){switch(_u(r),r.tag){case 1:return Ut(r.type)&&qo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ri(),je(Ft),je(kt),Pu(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Ru(r),null;case 13:if(je(Be),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Ii()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return je(Be),null;case 4:return Ri(),null;case 10:return Cu(r.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var pl=!1,Rt=!1,Lv=typeof WeakSet=="function"?WeakSet:Set,z=null;function Pi(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){qe(t,r,a)}else o.current=null}function Yu(t,r,o){try{o()}catch(a){qe(t,r,a)}}var sp=!1;function Mv(t,r){if(au=Do,t=Mh(),eu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var p=0,_=-1,v=-1,x=0,A=0,b=t,P=null;t:for(;;){for(var j;b!==o||c!==0&&b.nodeType!==3||(_=p+c),b!==h||a!==0&&b.nodeType!==3||(v=p+a),b.nodeType===3&&(p+=b.nodeValue.length),(j=b.firstChild)!==null;)P=b,b=j;for(;;){if(b===t)break t;if(P===o&&++x===c&&(_=p),P===h&&++A===a&&(v=p),(j=b.nextSibling)!==null)break;b=P,P=b.parentNode}b=j}o=_===-1||v===-1?null:{start:_,end:v}}else o=null}o=o||{start:0,end:0}}else o=null;for(uu={focusedElem:t,selectionRange:o},Do=!1,z=r;z!==null;)if(r=z,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,z=t;else for(;z!==null;){r=z;try{var B=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var V=B.memoizedProps,Ze=B.memoizedState,k=r.stateNode,S=k.getSnapshotBeforeUpdate(r.elementType===r.type?V:gn(r.type,V),Ze);k.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var T=r.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(D){qe(r,r.return,D)}if(t=r.sibling,t!==null){t.return=r.return,z=t;break}z=r.return}return B=sp,sp=!1,B}function Fs(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Yu(r,o,h)}c=c.next}while(c!==a)}}function ml(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function Ju(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function op(t){var r=t.alternate;r!==null&&(t.alternate=null,op(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Tn],delete r[Ts],delete r[fu],delete r[yv],delete r[vv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lp(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Go));else if(a!==4&&(t=t.child,t!==null))for(Xu(t,r,o),t=t.sibling;t!==null;)Xu(t,r,o),t=t.sibling}function Zu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Zu(t,r,o),t=t.sibling;t!==null;)Zu(t,r,o),t=t.sibling}var vt=null,_n=!1;function fr(t,r,o){for(o=o.child;o!==null;)up(t,r,o),o=o.sibling}function up(t,r,o){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Ro,o)}catch{}switch(o.tag){case 5:Rt||Pi(o,r);case 6:var a=vt,c=_n;vt=null,fr(t,r,o),vt=a,_n=c,vt!==null&&(_n?(t=vt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):vt.removeChild(o.stateNode));break;case 18:vt!==null&&(_n?(t=vt,o=o.stateNode,t.nodeType===8?hu(t.parentNode,o):t.nodeType===1&&hu(t,o),ms(t)):hu(vt,o.stateNode));break;case 4:a=vt,c=_n,vt=o.stateNode.containerInfo,_n=!0,fr(t,r,o),vt=a,_n=c;break;case 0:case 11:case 14:case 15:if(!Rt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,p=h.destroy;h=h.tag,p!==void 0&&((h&2)!==0||(h&4)!==0)&&Yu(o,r,p),c=c.next}while(c!==a)}fr(t,r,o);break;case 1:if(!Rt&&(Pi(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){qe(o,r,_)}fr(t,r,o);break;case 21:fr(t,r,o);break;case 22:o.mode&1?(Rt=(a=Rt)||o.memoizedState!==null,fr(t,r,o),Rt=a):fr(t,r,o);break;default:fr(t,r,o)}}function cp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Lv),r.forEach(function(a){var c=$v.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function yn(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,p=r,_=p;e:for(;_!==null;){switch(_.tag){case 5:vt=_.stateNode,_n=!1;break e;case 3:vt=_.stateNode.containerInfo,_n=!0;break e;case 4:vt=_.stateNode.containerInfo,_n=!0;break e}_=_.return}if(vt===null)throw Error(n(160));up(h,p,c),vt=null,_n=!1;var v=c.alternate;v!==null&&(v.return=null),c.return=null}catch(x){qe(c,r,x)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)dp(r,t),r=r.sibling}function dp(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yn(r,t),Nn(t),a&4){try{Fs(3,t,t.return),ml(3,t)}catch(V){qe(t,t.return,V)}try{Fs(5,t,t.return)}catch(V){qe(t,t.return,V)}}break;case 1:yn(r,t),Nn(t),a&512&&o!==null&&Pi(o,o.return);break;case 5:if(yn(r,t),Nn(t),a&512&&o!==null&&Pi(o,o.return),t.flags&32){var c=t.stateNode;try{ut(c,"")}catch(V){qe(t,t.return,V)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,p=o!==null?o.memoizedProps:h,_=t.type,v=t.updateQueue;if(t.updateQueue=null,v!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&he(c,h),ye(_,p);var x=ye(_,h);for(p=0;p<v.length;p+=2){var A=v[p],b=v[p+1];A==="style"?O(c,b):A==="dangerouslySetInnerHTML"?Qt(c,b):A==="children"?ut(c,b):Ye(c,A,b,x)}switch(_){case"input":at(c,h);break;case"textarea":er(c,h);break;case"select":var P=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var j=h.value;j!=null?Ie(c,!!h.multiple,j,!1):P!==!!h.multiple&&(h.defaultValue!=null?Ie(c,!!h.multiple,h.defaultValue,!0):Ie(c,!!h.multiple,h.multiple?[]:"",!1))}c[Ts]=h}catch(V){qe(t,t.return,V)}}break;case 6:if(yn(r,t),Nn(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(V){qe(t,t.return,V)}}break;case 3:if(yn(r,t),Nn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{ms(r.containerInfo)}catch(V){qe(t,t.return,V)}break;case 4:yn(r,t),Nn(t);break;case 13:yn(r,t),Nn(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(nc=Xe())),a&4&&cp(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(Rt=(x=Rt)||A,yn(r,t),Rt=x):yn(r,t),Nn(t),a&8192){if(x=t.memoizedState!==null,(t.stateNode.isHidden=x)&&!A&&(t.mode&1)!==0)for(z=t,A=t.child;A!==null;){for(b=z=A;z!==null;){switch(P=z,j=P.child,P.tag){case 0:case 11:case 14:case 15:Fs(4,P,P.return);break;case 1:Pi(P,P.return);var B=P.stateNode;if(typeof B.componentWillUnmount=="function"){a=P,o=P.return;try{r=a,B.props=r.memoizedProps,B.state=r.memoizedState,B.componentWillUnmount()}catch(V){qe(a,o,V)}}break;case 5:Pi(P,P.return);break;case 22:if(P.memoizedState!==null){pp(b);continue}}j!==null?(j.return=P,z=j):pp(b)}A=A.sibling}e:for(A=null,b=t;;){if(b.tag===5){if(A===null){A=b;try{c=b.stateNode,x?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=b.stateNode,v=b.memoizedProps.style,p=v!=null&&v.hasOwnProperty("display")?v.display:null,_.style.display=Nt("display",p))}catch(V){qe(t,t.return,V)}}}else if(b.tag===6){if(A===null)try{b.stateNode.nodeValue=x?"":b.memoizedProps}catch(V){qe(t,t.return,V)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===t)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===t)break e;for(;b.sibling===null;){if(b.return===null||b.return===t)break e;A===b&&(A=null),b=b.return}A===b&&(A=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:yn(r,t),Nn(t),a&4&&cp(t);break;case 21:break;default:yn(r,t),Nn(t)}}function Nn(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(lp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(ut(c,""),a.flags&=-33);var h=ap(t);Zu(t,h,c);break;case 3:case 4:var p=a.stateNode.containerInfo,_=ap(t);Xu(t,_,p);break;default:throw Error(n(161))}}catch(v){qe(t,t.return,v)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Fv(t,r,o){z=t,hp(t)}function hp(t,r,o){for(var a=(t.mode&1)!==0;z!==null;){var c=z,h=c.child;if(c.tag===22&&a){var p=c.memoizedState!==null||pl;if(!p){var _=c.alternate,v=_!==null&&_.memoizedState!==null||Rt;_=pl;var x=Rt;if(pl=p,(Rt=v)&&!x)for(z=c;z!==null;)p=z,v=p.child,p.tag===22&&p.memoizedState!==null?mp(c):v!==null?(v.return=p,z=v):mp(c);for(;h!==null;)z=h,hp(h),h=h.sibling;z=c,pl=_,Rt=x}fp(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,z=h):fp(t)}}function fp(t){for(;z!==null;){var r=z;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Rt||ml(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Rt)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:gn(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&pf(r,h,a);break;case 3:var p=r.updateQueue;if(p!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}pf(r,p,o)}break;case 5:var _=r.stateNode;if(o===null&&r.flags&4){o=_;var v=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&o.focus();break;case"img":v.src&&(o.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var x=r.alternate;if(x!==null){var A=x.memoizedState;if(A!==null){var b=A.dehydrated;b!==null&&ms(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Rt||r.flags&512&&Ju(r)}catch(P){qe(r,r.return,P)}}if(r===t){z=null;break}if(o=r.sibling,o!==null){o.return=r.return,z=o;break}z=r.return}}function pp(t){for(;z!==null;){var r=z;if(r===t){z=null;break}var o=r.sibling;if(o!==null){o.return=r.return,z=o;break}z=r.return}}function mp(t){for(;z!==null;){var r=z;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ml(4,r)}catch(v){qe(r,o,v)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(v){qe(r,c,v)}}var h=r.return;try{Ju(r)}catch(v){qe(r,h,v)}break;case 5:var p=r.return;try{Ju(r)}catch(v){qe(r,p,v)}}}catch(v){qe(r,r.return,v)}if(r===t){z=null;break}var _=r.sibling;if(_!==null){_.return=r.return,z=_;break}z=r.return}}var Uv=Math.ceil,gl=Ae.ReactCurrentDispatcher,ec=Ae.ReactCurrentOwner,an=Ae.ReactCurrentBatchConfig,fe=0,dt=null,et=null,wt=0,Zt=0,Ai=ar(0),rt=0,Us=null,qr=0,_l=0,tc=0,js=null,zt=null,nc=0,bi=1/0,Hn=null,yl=!1,rc=null,pr=null,vl=!1,mr=null,wl=0,zs=0,ic=null,Sl=-1,El=0;function At(){return(fe&6)!==0?Xe():Sl!==-1?Sl:Sl=Xe()}function gr(t){return(t.mode&1)===0?1:(fe&2)!==0&&wt!==0?wt&-wt:Sv.transition!==null?(El===0&&(El=lh()),El):(t=ke,t!==0||(t=window.event,t=t===void 0?16:gh(t.type)),t)}function vn(t,r,o,a){if(50<zs)throw zs=0,ic=null,Error(n(185));cs(t,o,a),((fe&2)===0||t!==dt)&&(t===dt&&((fe&2)===0&&(_l|=o),rt===4&&_r(t,wt)),Wt(t,a),o===1&&fe===0&&(r.mode&1)===0&&(bi=Xe()+500,Yo&&cr()))}function Wt(t,r){var o=t.callbackNode;Sy(t,r);var a=Ao(t,t===dt?wt:0);if(a===0)o!==null&&ih(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&ih(o),r===1)t.tag===0?wv(_p.bind(null,t)):tf(_p.bind(null,t)),gv(function(){(fe&6)===0&&cr()}),o=null;else{switch(ah(a)){case 1:o=Fa;break;case 4:o=sh;break;case 16:o=xo;break;case 536870912:o=oh;break;default:o=xo}o=kp(o,gp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function gp(t,r){if(Sl=-1,El=0,(fe&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Oi()&&t.callbackNode!==o)return null;var a=Ao(t,t===dt?wt:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||r)r=Cl(t,a);else{r=a;var c=fe;fe|=2;var h=vp();(dt!==t||wt!==r)&&(Hn=null,bi=Xe()+500,Yr(t,r));do try{Wv();break}catch(_){yp(t,_)}while(!0);Eu(),gl.current=h,fe=c,et!==null?r=0:(dt=null,wt=0,r=rt)}if(r!==0){if(r===2&&(c=Ua(t),c!==0&&(a=c,r=sc(t,c))),r===1)throw o=Us,Yr(t,0),_r(t,a),Wt(t,Xe()),o;if(r===6)_r(t,a);else{if(c=t.current.alternate,(a&30)===0&&!jv(c)&&(r=Cl(t,a),r===2&&(h=Ua(t),h!==0&&(a=h,r=sc(t,h))),r===1))throw o=Us,Yr(t,0),_r(t,a),Wt(t,Xe()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:Jr(t,zt,Hn);break;case 3:if(_r(t,a),(a&130023424)===a&&(r=nc+500-Xe(),10<r)){if(Ao(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){At(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=du(Jr.bind(null,t,zt,Hn),r);break}Jr(t,zt,Hn);break;case 4:if(_r(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var p=31-fn(a);h=1<<p,p=r[p],p>c&&(c=p),a&=~h}if(a=c,a=Xe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Uv(a/1960))-a,10<a){t.timeoutHandle=du(Jr.bind(null,t,zt,Hn),a);break}Jr(t,zt,Hn);break;case 5:Jr(t,zt,Hn);break;default:throw Error(n(329))}}}return Wt(t,Xe()),t.callbackNode===o?gp.bind(null,t):null}function sc(t,r){var o=js;return t.current.memoizedState.isDehydrated&&(Yr(t,r).flags|=256),t=Cl(t,r),t!==2&&(r=zt,zt=o,r!==null&&oc(r)),t}function oc(t){zt===null?zt=t:zt.push.apply(zt,t)}function jv(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!pn(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _r(t,r){for(r&=~tc,r&=~_l,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-fn(r),a=1<<o;t[o]=-1,r&=~a}}function _p(t){if((fe&6)!==0)throw Error(n(327));Oi();var r=Ao(t,0);if((r&1)===0)return Wt(t,Xe()),null;var o=Cl(t,r);if(t.tag!==0&&o===2){var a=Ua(t);a!==0&&(r=a,o=sc(t,a))}if(o===1)throw o=Us,Yr(t,0),_r(t,r),Wt(t,Xe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Jr(t,zt,Hn),Wt(t,Xe()),null}function lc(t,r){var o=fe;fe|=1;try{return t(r)}finally{fe=o,fe===0&&(bi=Xe()+500,Yo&&cr())}}function Qr(t){mr!==null&&mr.tag===0&&(fe&6)===0&&Oi();var r=fe;fe|=1;var o=an.transition,a=ke;try{if(an.transition=null,ke=1,t)return t()}finally{ke=a,an.transition=o,fe=r,(fe&6)===0&&cr()}}function ac(){Zt=Ai.current,je(Ai)}function Yr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,mv(o)),et!==null)for(o=et.return;o!==null;){var a=o;switch(_u(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&qo();break;case 3:Ri(),je(Ft),je(kt),Pu();break;case 5:Ru(a);break;case 4:Ri();break;case 13:je(Be);break;case 19:je(Be);break;case 10:Cu(a.type._context);break;case 22:case 23:ac()}o=o.return}if(dt=t,et=t=yr(t.current,null),wt=Zt=r,rt=0,Us=null,tc=_l=qr=0,zt=js=null,$r!==null){for(r=0;r<$r.length;r++)if(o=$r[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var p=h.next;h.next=c,a.next=p}o.pending=a}$r=null}return t}function yp(t,r){do{var o=et;try{if(Eu(),ol.current=cl,ll){for(var a=Ve.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}ll=!1}if(Kr=0,ct=nt=Ve=null,bs=!1,Os=0,ec.current=null,o===null||o.return===null){rt=1,Us=r,et=null;break}e:{var h=t,p=o.return,_=o,v=r;if(r=wt,_.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var x=v,A=_,b=A.tag;if((A.mode&1)===0&&(b===0||b===11||b===15)){var P=A.alternate;P?(A.updateQueue=P.updateQueue,A.memoizedState=P.memoizedState,A.lanes=P.lanes):(A.updateQueue=null,A.memoizedState=null)}var j=Vf(p);if(j!==null){j.flags&=-257,Hf(j,p,_,h,r),j.mode&1&&Bf(h,x,r),r=j,v=x;var B=r.updateQueue;if(B===null){var V=new Set;V.add(v),r.updateQueue=V}else B.add(v);break e}else{if((r&1)===0){Bf(h,x,r),uc();break e}v=Error(n(426))}}else if(We&&_.mode&1){var Ze=Vf(p);if(Ze!==null){(Ze.flags&65536)===0&&(Ze.flags|=256),Hf(Ze,p,_,h,r),wu(Ni(v,_));break e}}h=v=Ni(v,_),rt!==4&&(rt=2),js===null?js=[h]:js.push(h),h=p;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var k=zf(h,v,r);ff(h,k);break e;case 1:_=v;var S=h.type,T=h.stateNode;if((h.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(pr===null||!pr.has(T)))){h.flags|=65536,r&=-r,h.lanes|=r;var D=Wf(h,_,r);ff(h,D);break e}}h=h.return}while(h!==null)}Sp(o)}catch(H){r=H,et===o&&o!==null&&(et=o=o.return);continue}break}while(!0)}function vp(){var t=gl.current;return gl.current=cl,t===null?cl:t}function uc(){(rt===0||rt===3||rt===2)&&(rt=4),dt===null||(qr&268435455)===0&&(_l&268435455)===0||_r(dt,wt)}function Cl(t,r){var o=fe;fe|=2;var a=vp();(dt!==t||wt!==r)&&(Hn=null,Yr(t,r));do try{zv();break}catch(c){yp(t,c)}while(!0);if(Eu(),fe=o,gl.current=a,et!==null)throw Error(n(261));return dt=null,wt=0,rt}function zv(){for(;et!==null;)wp(et)}function Wv(){for(;et!==null&&!hy();)wp(et)}function wp(t){var r=Ip(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,r===null?Sp(t):et=r,ec.current=null}function Sp(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=Ov(o,r,Zt),o!==null){et=o;return}}else{if(o=Dv(o,r),o!==null){o.flags&=32767,et=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,et=null;return}}if(r=r.sibling,r!==null){et=r;return}et=r=t}while(r!==null);rt===0&&(rt=5)}function Jr(t,r,o){var a=ke,c=an.transition;try{an.transition=null,ke=1,Bv(t,r,o,a)}finally{an.transition=c,ke=a}return null}function Bv(t,r,o,a){do Oi();while(mr!==null);if((fe&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Ey(t,h),t===dt&&(et=dt=null,wt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||vl||(vl=!0,kp(xo,function(){return Oi(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=an.transition,an.transition=null;var p=ke;ke=1;var _=fe;fe|=4,ec.current=null,Mv(t,o),dp(o,t),av(uu),Do=!!au,uu=au=null,t.current=o,Fv(o),fy(),fe=_,ke=p,an.transition=h}else t.current=o;if(vl&&(vl=!1,mr=t,wl=c),h=t.pendingLanes,h===0&&(pr=null),gy(o.stateNode),Wt(t,Xe()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(yl)throw yl=!1,t=rc,rc=null,t;return(wl&1)!==0&&t.tag!==0&&Oi(),h=t.pendingLanes,(h&1)!==0?t===ic?zs++:(zs=0,ic=t):zs=0,cr(),null}function Oi(){if(mr!==null){var t=ah(wl),r=an.transition,o=ke;try{if(an.transition=null,ke=16>t?16:t,mr===null)var a=!1;else{if(t=mr,mr=null,wl=0,(fe&6)!==0)throw Error(n(331));var c=fe;for(fe|=4,z=t.current;z!==null;){var h=z,p=h.child;if((z.flags&16)!==0){var _=h.deletions;if(_!==null){for(var v=0;v<_.length;v++){var x=_[v];for(z=x;z!==null;){var A=z;switch(A.tag){case 0:case 11:case 15:Fs(8,A,h)}var b=A.child;if(b!==null)b.return=A,z=b;else for(;z!==null;){A=z;var P=A.sibling,j=A.return;if(op(A),A===x){z=null;break}if(P!==null){P.return=j,z=P;break}z=j}}}var B=h.alternate;if(B!==null){var V=B.child;if(V!==null){B.child=null;do{var Ze=V.sibling;V.sibling=null,V=Ze}while(V!==null)}}z=h}}if((h.subtreeFlags&2064)!==0&&p!==null)p.return=h,z=p;else e:for(;z!==null;){if(h=z,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Fs(9,h,h.return)}var k=h.sibling;if(k!==null){k.return=h.return,z=k;break e}z=h.return}}var S=t.current;for(z=S;z!==null;){p=z;var T=p.child;if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,z=T;else e:for(p=S;z!==null;){if(_=z,(_.flags&2048)!==0)try{switch(_.tag){case 0:case 11:case 15:ml(9,_)}}catch(H){qe(_,_.return,H)}if(_===p){z=null;break e}var D=_.sibling;if(D!==null){D.return=_.return,z=D;break e}z=_.return}}if(fe=c,cr(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Ro,t)}catch{}a=!0}return a}finally{ke=o,an.transition=r}}return!1}function Ep(t,r,o){r=Ni(o,r),r=zf(t,r,1),t=hr(t,r,1),r=At(),t!==null&&(cs(t,1,r),Wt(t,r))}function qe(t,r,o){if(t.tag===3)Ep(t,t,o);else for(;r!==null;){if(r.tag===3){Ep(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pr===null||!pr.has(a))){t=Ni(o,t),t=Wf(r,t,1),r=hr(r,t,1),t=At(),r!==null&&(cs(r,1,t),Wt(r,t));break}}r=r.return}}function Vv(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=At(),t.pingedLanes|=t.suspendedLanes&o,dt===t&&(wt&o)===o&&(rt===4||rt===3&&(wt&130023424)===wt&&500>Xe()-nc?Yr(t,0):tc|=o),Wt(t,r)}function Cp(t,r){r===0&&((t.mode&1)===0?r=1:(r=Po,Po<<=1,(Po&130023424)===0&&(Po=4194304)));var o=At();t=Wn(t,r),t!==null&&(cs(t,r,o),Wt(t,o))}function Hv(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Cp(t,o)}function $v(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),Cp(t,o)}var Ip;Ip=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||Ft.current)jt=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return jt=!1,bv(t,r,o);jt=(t.flags&131072)!==0}else jt=!1,We&&(r.flags&1048576)!==0&&nf(r,Xo,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;fl(t,r),t=r.pendingProps;var c=Si(r,kt.current);xi(r,o),c=Ou(null,r,a,t,c,o);var h=Du();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ut(a)?(h=!0,Qo(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Tu(r),c.updater=dl,r.stateNode=c,c._reactInternals=r,zu(r,a,t,o),r=Hu(null,r,a,!0,h,o)):(r.tag=0,We&&h&&gu(r),Pt(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(fl(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=Kv(a),t=gn(a,t),c){case 0:r=Vu(null,r,a,t,o);break e;case 1:r=Yf(null,r,a,t,o);break e;case 11:r=$f(null,r,a,t,o);break e;case 14:r=Gf(null,r,a,gn(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:gn(a,c),Vu(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:gn(a,c),Yf(t,r,a,c,o);case 3:e:{if(Jf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,hf(t,r),il(r,a,null,o);var p=r.memoizedState;if(a=p.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=Ni(Error(n(423)),r),r=Xf(t,r,a,o,c);break e}else if(a!==c){c=Ni(Error(n(424)),r),r=Xf(t,r,a,o,c);break e}else for(Xt=lr(r.stateNode.containerInfo.firstChild),Jt=r,We=!0,mn=null,o=cf(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ii(),a===c){r=Vn(t,r,o);break e}Pt(t,r,a,o)}r=r.child}return r;case 5:return mf(r),t===null&&vu(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,p=c.children,cu(a,c)?p=null:h!==null&&cu(a,h)&&(r.flags|=32),Qf(t,r),Pt(t,r,p,o),r.child;case 6:return t===null&&vu(r),null;case 13:return Zf(t,r,o);case 4:return xu(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=ki(r,null,a,o):Pt(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:gn(a,c),$f(t,r,a,c,o);case 7:return Pt(t,r,r.pendingProps,o),r.child;case 8:return Pt(t,r,r.pendingProps.children,o),r.child;case 12:return Pt(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,p=c.value,Oe(tl,a._currentValue),a._currentValue=p,h!==null)if(pn(h.value,p)){if(h.children===c.children&&!Ft.current){r=Vn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var _=h.dependencies;if(_!==null){p=h.child;for(var v=_.firstContext;v!==null;){if(v.context===a){if(h.tag===1){v=Bn(-1,o&-o),v.tag=2;var x=h.updateQueue;if(x!==null){x=x.shared;var A=x.pending;A===null?v.next=v:(v.next=A.next,A.next=v),x.pending=v}}h.lanes|=o,v=h.alternate,v!==null&&(v.lanes|=o),Iu(h.return,o,r),_.lanes|=o;break}v=v.next}}else if(h.tag===10)p=h.type===r.type?null:h.child;else if(h.tag===18){if(p=h.return,p===null)throw Error(n(341));p.lanes|=o,_=p.alternate,_!==null&&(_.lanes|=o),Iu(p,o,r),p=h.sibling}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===r){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}Pt(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,xi(r,o),c=on(c),a=a(c),r.flags|=1,Pt(t,r,a,o),r.child;case 14:return a=r.type,c=gn(a,r.pendingProps),c=gn(a.type,c),Gf(t,r,a,c,o);case 15:return Kf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:gn(a,c),fl(t,r),r.tag=1,Ut(a)?(t=!0,Qo(r)):t=!1,xi(r,o),Uf(r,a,c),zu(r,a,c,o),Hu(null,r,a,!0,t,o);case 19:return tp(t,r,o);case 22:return qf(t,r,o)}throw Error(n(156,r.tag))};function kp(t,r){return rh(t,r)}function Gv(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,r,o,a){return new Gv(t,r,o,a)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Kv(t){if(typeof t=="function")return cc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lt)return 11;if(t===lt)return 14}return 2}function yr(t,r){var o=t.alternate;return o===null?(o=un(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Il(t,r,o,a,c,h){var p=2;if(a=t,typeof t=="function")cc(t)&&(p=1);else if(typeof t=="string")p=5;else e:switch(t){case ot:return Xr(o.children,c,h,r);case St:p=8,c|=8;break;case Gt:return t=un(12,o,r,c|2),t.elementType=Gt,t.lanes=h,t;case _t:return t=un(13,o,r,c),t.elementType=_t,t.lanes=h,t;case tt:return t=un(19,o,r,c),t.elementType=tt,t.lanes=h,t;case be:return kl(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kt:p=10;break e;case tn:p=9;break e;case Lt:p=11;break e;case lt:p=14;break e;case Me:p=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=un(p,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function Xr(t,r,o,a){return t=un(7,t,a,r),t.lanes=o,t}function kl(t,r,o,a){return t=un(22,t,a,r),t.elementType=be,t.lanes=o,t.stateNode={isHidden:!1},t}function dc(t,r,o){return t=un(6,t,null,r),t.lanes=o,t}function hc(t,r,o){return r=un(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function qv(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ja(0),this.expirationTimes=ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ja(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function fc(t,r,o,a,c,h,p,_,v){return t=new qv(t,r,o,_,v),r===1?(r=1,h===!0&&(r|=8)):r=0,h=un(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(h),t}function Qv(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ge,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function Tp(t){if(!t)return ur;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ut(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Ut(o))return Zh(t,o,r)}return r}function xp(t,r,o,a,c,h,p,_,v){return t=fc(o,a,!0,t,c,h,p,_,v),t.context=Tp(null),o=t.current,a=At(),c=gr(o),h=Bn(a,c),h.callback=r??null,hr(o,h,c),t.current.lanes=c,cs(t,c,a),Wt(t,a),t}function Tl(t,r,o,a){var c=r.current,h=At(),p=gr(c);return o=Tp(o),r.context===null?r.context=o:r.pendingContext=o,r=Bn(h,p),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=hr(c,r,p),t!==null&&(vn(t,c,p,h),rl(t,c,p)),p}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function pc(t,r){Rp(t,r),(t=t.alternate)&&Rp(t,r)}function Yv(){return null}var Np=typeof reportError=="function"?reportError:function(t){console.error(t)};function mc(t){this._internalRoot=t}Rl.prototype.render=mc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Tl(t,r,null,null)},Rl.prototype.unmount=mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Qr(function(){Tl(null,t,null,null)}),r[Fn]=null}};function Rl(t){this._internalRoot=t}Rl.prototype.unstable_scheduleHydration=function(t){if(t){var r=dh();t={blockedOn:null,target:t,priority:r};for(var o=0;o<ir.length&&r!==0&&r<ir[o].priority;o++);ir.splice(o,0,t),o===0&&ph(t)}};function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function Jv(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var x=xl(p);h.call(x)}}var p=xp(r,a,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=p,t[Fn]=p.current,Is(t.nodeType===8?t.parentNode:t),Qr(),p}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var x=xl(v);_.call(x)}}var v=fc(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=v,t[Fn]=v.current,Is(t.nodeType===8?t.parentNode:t),Qr(function(){Tl(r,v,o,a)}),v}function Pl(t,r,o,a,c){var h=o._reactRootContainer;if(h){var p=h;if(typeof c=="function"){var _=c;c=function(){var v=xl(p);_.call(v)}}Tl(r,p,t,c)}else p=Jv(o,r,t,c,a);return xl(p)}uh=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=us(r.pendingLanes);o!==0&&(za(r,o|1),Wt(r,Xe()),(fe&6)===0&&(bi=Xe()+500,cr()))}break;case 13:Qr(function(){var a=Wn(t,1);if(a!==null){var c=At();vn(a,t,1,c)}}),pc(t,1)}},Wa=function(t){if(t.tag===13){var r=Wn(t,134217728);if(r!==null){var o=At();vn(r,t,134217728,o)}pc(t,134217728)}},ch=function(t){if(t.tag===13){var r=gr(t),o=Wn(t,r);if(o!==null){var a=At();vn(o,t,r,a)}pc(t,r)}},dh=function(){return ke},hh=function(t,r){var o=ke;try{return ke=t,r()}finally{ke=o}},di=function(t,r,o){switch(r){case"input":if(at(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=Ko(a);if(!c)throw Error(n(90));Fe(a),at(a,c)}}}break;case"textarea":er(t,o);break;case"select":r=o.value,r!=null&&Ie(t,!!o.multiple,r,!1)}},Yd=lc,Jd=Qr;var Xv={usingClientEntryPoint:!1,Events:[xs,vi,Ko,Io,Qd,lc]},Ws={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zv={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=th(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||Yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Ro=Al.inject(Zv),kn=Al}catch{}}return Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xv,Bt.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(r))throw Error(n(200));return Qv(t,r,null,o)},Bt.createRoot=function(t,r){if(!gc(t))throw Error(n(299));var o=!1,a="",c=Np;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=fc(t,1,!1,null,null,o,!1,a,c),t[Fn]=r.current,Is(t.nodeType===8?t.parentNode:t),new mc(r)},Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=th(r),t=t===null?null:t.stateNode,t},Bt.flushSync=function(t){return Qr(t)},Bt.hydrate=function(t,r,o){if(!Nl(r))throw Error(n(200));return Pl(null,t,r,!0,o)},Bt.hydrateRoot=function(t,r,o){if(!gc(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",p=Np;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),r=xp(r,null,t,1,o??null,c,!1,h,p),t[Fn]=r.current,Is(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new Rl(r)},Bt.render=function(t,r,o){if(!Nl(r))throw Error(n(200));return Pl(null,t,r,!1,o)},Bt.unmountComponentAtNode=function(t){if(!Nl(t))throw Error(n(40));return t._reactRootContainer?(Qr(function(){Pl(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1},Bt.unstable_batchedUpdates=lc,Bt.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!Nl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Pl(t,r,o,!1,a)},Bt.version="18.3.1-next-f1338f8080-20240426",Bt}var Up;function a0(){if(Up)return vc.exports;Up=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),vc.exports=l0(),vc.exports}var jp;function u0(){if(jp)return bl;jp=1;var i=a0();return bl.createRoot=i.createRoot,bl.hydrateRoot=i.hydrateRoot,bl}var c0=u0();const d0=Xm(c0),h0=()=>{};var zp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(i,e){if(!i)throw Ji(e)},Ji=function(i){return new Error("Firebase Database ("+Zm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},f0=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],m=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,m=l+2<i.length,g=m?i[l+2]:0,y=u>>2,w=(u&3)<<4|f>>4;let C=(f&15)<<2|g>>6,N=g&63;m||(N=64,d||(C=64)),s.push(n[y],n[w],n[C],n[N])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(eg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):f0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const w=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||w==null)throw new p0;const C=u<<2|f>>4;if(s.push(C),g!==64){const N=f<<4&240|g>>2;if(s.push(N),w!==64){const M=g<<6&192|w;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class p0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tg=function(i){const e=eg(i);return id.encodeByteArray(e,!0)},Gl=function(i){return tg(i).replace(/\./g,"")},Kl=function(i){try{return id.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(i){return ng(void 0,i)}function ng(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!g0(n)||(i[n]=ng(i[n],e[n]));return i}function g0(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=()=>_0().__FIREBASE_DEFAULTS__,v0=()=>{if(typeof process>"u"||typeof zp>"u")return;const i=zp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},w0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Kl(i[1]);return e&&JSON.parse(e)},sd=()=>{try{return h0()||y0()||v0()||w0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},rg=i=>{var e,n;return(n=(e=sd())==null?void 0:e.emulatorHosts)==null?void 0:n[i]},S0=i=>{const e=rg(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ig=()=>{var i;return(i=sd())==null?void 0:i.config},sg=i=>{var e;return(e=sd())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Gl(JSON.stringify(n)),Gl(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function C0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function I0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function k0(){const i=Dt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function T0(){return Zm.NODE_ADMIN===!0}function x0(){try{return typeof indexedDB=="object"}catch{return!1}}function R0(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="FirebaseError";class jr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=N0,Object.setPrototypeOf(this,jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fo.prototype.create)}}class fo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?P0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new jr(l,f,s)}}function P0(i,e){return i.replace(A0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const A0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(i){return JSON.parse(i)}function it(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=eo(Kl(u[0])||""),n=eo(Kl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},b0=function(i){const e=lg(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},O0=function(i){const e=lg(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Vi(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function ql(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ql(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function ri(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(Wp(u)&&Wp(d)){if(!ri(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Wp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)s[w]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let w=0;w<16;w++)s[w]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let w=16;w<80;w++){const C=s[w-3]^s[w-8]^s[w-14]^s[w-16];s[w]=(C<<1|C>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,y;for(let w=0;w<80;w++){w<40?w<20?(g=f^u&(d^f),y=1518500249):(g=u^d^f,y=1859775393):w<60?(g=u&d|f&(u|d),y=2400959708):(g=u^d^f,y=3395469782);const C=(l<<5|l>>>27)+g+m+y+s[w]&4294967295;m=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=C}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function L0(i,e){const n=new M0(i,e);return n.subscribe.bind(n)}class M0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");F0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Ec),l.error===void 0&&(l.error=Ec),l.complete===void 0&&(l.complete=Ec);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F0(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Ec(){}function Hi(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,L(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},_a=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ag(i){return(await fetch(i,{credentials:"include"})).ok}class ii{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Pn;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(W0(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const u=this.instances.get(s);return u&&e(u,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:z0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function z0(i){return i===Zr?void 0:i}function W0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new j0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ne||(Ne={}));const V0={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},H0=Ne.INFO,$0={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},G0=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=$0[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ld{constructor(e){this.name=e,this._logLevel=H0,this._logHandler=G0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?V0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const K0=(i,e)=>e.some(n=>i instanceof n);let Bp,Vp;function q0(){return Bp||(Bp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Q0(){return Vp||(Vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ug=new WeakMap,Mc=new WeakMap,cg=new WeakMap,Cc=new WeakMap,ad=new WeakMap;function Y0(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Rr(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&ug.set(n,i)}).catch(()=>{}),ad.set(e,i),e}function J0(i){if(Mc.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});Mc.set(i,e)}let Fc={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Mc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||cg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function X0(i){Fc=i(Fc)}function Z0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Ic(this),e,...n);return cg.set(s,e.sort?e.sort():[e]),Rr(s)}:Q0().includes(i)?function(...e){return i.apply(Ic(this),e),Rr(ug.get(this))}:function(...e){return Rr(i.apply(Ic(this),e))}}function ew(i){return typeof i=="function"?Z0(i):(i instanceof IDBTransaction&&J0(i),K0(i,q0())?new Proxy(i,Fc):i)}function Rr(i){if(i instanceof IDBRequest)return Y0(i);if(Cc.has(i))return Cc.get(i);const e=ew(i);return e!==i&&(Cc.set(i,e),ad.set(e,i)),e}const Ic=i=>ad.get(i);function tw(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Rr(d);return s&&d.addEventListener("upgradeneeded",m=>{s(Rr(d.result),m.oldVersion,m.newVersion,Rr(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{u&&m.addEventListener("close",()=>u()),l&&m.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const nw=["get","getKey","getAll","getAllKeys","count"],rw=["put","add","delete","clear"],kc=new Map;function Hp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(kc.get(e))return kc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=rw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||nw.includes(n)))return;const u=async function(d,...f){const m=this.transaction(d,l?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&m.done]))[0]};return kc.set(e,u),u}X0(i=>({...i,get:(e,n,s)=>Hp(e,n)||i.get(e,n,s),has:(e,n)=>!!Hp(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function sw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",$p="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new ld("@firebase/app"),ow="@firebase/app-compat",lw="@firebase/analytics-compat",aw="@firebase/analytics",uw="@firebase/app-check-compat",cw="@firebase/app-check",dw="@firebase/auth",hw="@firebase/auth-compat",fw="@firebase/database",pw="@firebase/data-connect",mw="@firebase/database-compat",gw="@firebase/functions",_w="@firebase/functions-compat",yw="@firebase/installations",vw="@firebase/installations-compat",ww="@firebase/messaging",Sw="@firebase/messaging-compat",Ew="@firebase/performance",Cw="@firebase/performance-compat",Iw="@firebase/remote-config",kw="@firebase/remote-config-compat",Tw="@firebase/storage",xw="@firebase/storage-compat",Rw="@firebase/firestore",Nw="@firebase/ai",Pw="@firebase/firestore-compat",Aw="firebase",bw="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="[DEFAULT]",Ow={[Uc]:"fire-core",[ow]:"fire-core-compat",[aw]:"fire-analytics",[lw]:"fire-analytics-compat",[cw]:"fire-app-check",[uw]:"fire-app-check-compat",[dw]:"fire-auth",[hw]:"fire-auth-compat",[fw]:"fire-rtdb",[pw]:"fire-data-connect",[mw]:"fire-rtdb-compat",[gw]:"fire-fn",[_w]:"fire-fn-compat",[yw]:"fire-iid",[vw]:"fire-iid-compat",[ww]:"fire-fcm",[Sw]:"fire-fcm-compat",[Ew]:"fire-perf",[Cw]:"fire-perf-compat",[Iw]:"fire-rc",[kw]:"fire-rc-compat",[Tw]:"fire-gcs",[xw]:"fire-gcs-compat",[Rw]:"fire-fst",[Pw]:"fire-fst-compat",[Nw]:"fire-vertex","fire-js":"fire-js",[Aw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new Map,Dw=new Map,zc=new Map;function Gp(i,e){try{i.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function $i(i){const e=i.name;if(zc.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;zc.set(e,i);for(const n of Yl.values())Gp(n,i);for(const n of Dw.values())Gp(n,i);return!0}function ud(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function wn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new fo("app","Firebase",Lw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=bw;function dg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s={name:jc,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw Nr.create("bad-app-name",{appName:String(l)});if(n||(n=ig()),!n)throw Nr.create("no-options");const u=Yl.get(l);if(u){if(ri(n,u.options)&&ri(s,u.config))return u;throw Nr.create("duplicate-app",{appName:l})}const d=new B0(l);for(const m of zc.values())d.addComponent(m);const f=new Mw(n,s,d);return Yl.set(l,f),f}function hg(i=jc){const e=Yl.get(i);if(!e&&i===jc&&ig())return dg();if(!e)throw Nr.create("no-app",{appName:i});return e}function Pr(i,e,n){let s=Ow[i]??i;n&&(s+=`-${n}`);const l=s.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(d.join(" "));return}$i(new ii(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="firebase-heartbeat-database",Uw=1,to="firebase-heartbeat-store";let Tc=null;function fg(){return Tc||(Tc=tw(Fw,Uw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(to)}catch(n){console.warn(n)}}}}).catch(i=>{throw Nr.create("idb-open",{originalErrorMessage:i.message})})),Tc}async function jw(i){try{const n=(await fg()).transaction(to),s=await n.objectStore(to).get(pg(i));return await n.done,s}catch(e){if(e instanceof jr)Qn.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Kp(i,e){try{const s=(await fg()).transaction(to,"readwrite");await s.objectStore(to).put(e,pg(i)),await s.done}catch(n){if(n instanceof jr)Qn.warn(n.message);else{const s=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(s.message)}}}function pg(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=1024,Ww=30;class Bw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=qp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>Ww){const d=$w(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Qn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qp(),{heartbeatsToSend:s,unsentEntries:l}=Vw(this._heartbeatsCache.heartbeats),u=Gl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Qn.warn(n),""}}}function qp(){return new Date().toISOString().substring(0,10)}function Vw(i,e=zw){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),Qp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Qp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x0()?R0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Kp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Kp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qp(i){return Gl(JSON.stringify({version:2,heartbeats:i})).length}function $w(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(i){$i(new ii("platform-logger",e=>new iw(e),"PRIVATE")),$i(new ii("heartbeat",e=>new Bw(e),"PRIVATE")),Pr(Uc,$p,i),Pr(Uc,$p,"esm2020"),Pr("fire-js","")}Gw("");var Kw="firebase",qw="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr(Kw,qw,"app");var Yp={};const Jp="@firebase/database",Xp="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mg="";function Qw(i){mg=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:eo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return On(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Yw(e)}}catch{}return new Jw},ti=gg("localStorage"),Xw=gg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new ld("@firebase/database"),Zw=(function(){let i=1;return function(){return i++}})(),_g=function(i){const e=U0(i),n=new D0;n.update(e);const s=n.digest();return id.encodeByteArray(s)},mo=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=mo.apply(null,s):typeof s=="object"?e+=it(s):e+=s,e+=" "}return e};let qs=null,Zp=!0;const eS=function(i,e){L(!0,"Can't turn on custom loggers persistently."),Fi.logLevel=Ne.VERBOSE,qs=Fi.log.bind(Fi)},mt=function(...i){if(Zp===!0&&(Zp=!1,qs===null&&Xw.get("logging_enabled")===!0&&eS()),qs){const e=mo.apply(null,i);qs(e)}},go=function(i){return function(...e){mt(i,...e)}},Wc=function(...i){const e="FIREBASE INTERNAL ERROR: "+mo(...i);Fi.error(e)},Yn=function(...i){const e=`FIREBASE FATAL ERROR: ${mo(...i)}`;throw Fi.error(e),new Error(e)},Ot=function(...i){const e="FIREBASE WARNING: "+mo(...i);Fi.warn(e)},tS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ya=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},nS=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gi="[MIN_NAME]",si="[MAX_NAME]",ui=function(i,e){if(i===e)return 0;if(i===Gi||e===si)return-1;if(e===Gi||i===si)return 1;{const n=em(i),s=em(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},rS=function(i,e){return i===e?0:i<e?-1:1},Vs=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+it(e))},cd=function(i){if(typeof i!="object"||i===null)return it(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=it(e[s]),n+=":",n+=cd(i[e[s]]);return n+="}",n},yg=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function gt(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const vg=function(i){L(!ya(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,m;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(m=n;m;m-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const y=g.join("");let w="";for(m=0;m<64;m+=8){let C=parseInt(y.substr(m,8),2).toString(16);C.length===1&&(C="0"+C),w=w+C}return w.toLowerCase()},iS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function oS(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const lS=new RegExp("^-?(0*)\\d{1,10}$"),aS=-2147483648,uS=2147483647,em=function(i){if(lS.test(i)){const e=Number(i);if(e>=aS&&e<=uS)return e}return null},es=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},cS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qs=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,wn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ot(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ot(e)}}class Wl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="5",wg="v",Sg="s",Eg="r",Cg="f",Ig=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kg="ls",Tg="p",Bc="ac",xg="websocket",Rg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n,s,l,u=!1,d="",f=!1,m=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fS(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Pg(i,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let s;if(e===xg)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Rg)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fS(i)&&(n.ns=i.namespace);const l=[];return gt(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.counters_={}}incrementCounter(e,n=1){On(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return m0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc={},Rc={};function hd(i){const e=i.toString();return xc[e]||(xc[e]=new pS),xc[e]}function mS(i,e){const n=i.toString();return Rc[n]||(Rc[n]=e()),Rc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&es(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="start",_S="close",yS="pLPCommand",vS="pRTLPCB",Ag="id",bg="pw",Og="ser",wS="cb",SS="seg",ES="ts",CS="d",IS="dframe",Dg=1870,Lg=30,kS=Dg-Lg,TS=25e3,xS=3e4;class Li{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=go(e),this.stats_=hd(n),this.urlFn=m=>(this.appCheckToken&&(m[Bc]=this.appCheckToken),Pg(n,Rg,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xS)),nS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fd((...u)=>{const[d,f,m,g,y]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===tm)this.id=f,this.password=m;else if(d===_S)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[tm]="t",s[Og]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[wS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[wg]=dd,this.transportSessionId&&(s[Sg]=this.transportSessionId),this.lastSessionId&&(s[kg]=this.lastSessionId),this.applicationId&&(s[Tg]=this.applicationId),this.appCheckToken&&(s[Bc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ig.test(location.hostname)&&(s[Eg]=Cg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Li.forceAllow_=!0}static forceDisallow(){Li.forceDisallow_=!0}static isAvailable(){return Li.forceAllow_?!0:!Li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!iS()&&!sS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=tg(n),l=yg(s,kS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[IS]="t",s[Ag]=e,s[bg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zw(),window[yS+this.uniqueCallbackIdentifier]=e,window[vS+this.uniqueCallbackIdentifier]=n,this.myIFrame=fd.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){mt("frame writing exception"),f.stack&&mt(f.stack),mt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ag]=this.myID,e[bg]=this.myPW,e[Og]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lg+s.length<=Dg;){const d=this.pendingSegs.shift();s=s+"&"+SS+l+"="+d.seg+"&"+ES+l+"="+d.ts+"&"+CS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(TS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=16384,NS=45e3;let Jl=null;typeof MozWebSocket<"u"?Jl=MozWebSocket:typeof WebSocket<"u"&&(Jl=WebSocket);class Sn{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=go(this.connId),this.stats_=hd(n),this.connURL=Sn.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[wg]=dd,typeof location<"u"&&location.hostname&&Ig.test(location.hostname)&&(d[Eg]=Cg),n&&(d[Sg]=n),s&&(d[kg]=s),l&&(d[Bc]=l),u&&(d[Tg]=u),Pg(e,xg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ti.set("previous_websocket_failure",!0);try{let s;T0(),this.mySock=new Jl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Jl!==null&&!Sn.forceDisallow_}static previouslyFailed(){return ti.isInMemoryStorage||ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=eo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=yg(n,RS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(NS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Sn.responsesRequiredToBeHealthy=2;Sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static get ALL_TRANSPORTS(){return[Li,Sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Sn&&Sn.isAvailable();let s=n&&!Sn.previouslyFailed();if(e.webSocketOnly&&(n||Ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Sn];else{const l=this.transports_=[];for(const u of no.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);no.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}no.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=6e4,AS=5e3,bS=10*1024,OS=100*1024,Nc="t",nm="d",DS="s",rm="r",LS="e",im="o",sm="a",om="n",lm="p",MS="h";class FS{constructor(e,n,s,l,u,d,f,m,g,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=go("c:"+this.id+":"),this.transportManager_=new no(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Qs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nc in e){const n=e[Nc];n===sm?this.upgradeIfSecondaryHealthy_():n===rm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===im&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Vs("t",e),s=Vs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:om,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Vs("t",e),s=Vs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Vs(Nc,e);if(nm in e){const s=e[nm];if(n===MS){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===om){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DS?this.onConnectionShutdown_(s):n===rm?this.onReset_(s):n===LS?Wc("Server Error: "+s):n===im?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dd!==s&&Ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(AS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Fg{static getInstance(){return new Xl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!od()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=32,um=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function we(){return new Te("")}function se(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Dr(i){return i.pieces_.length-i.pieceNum_}function Pe(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Te(i.pieces_,e)}function pd(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function US(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function ro(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function Ug(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new Te(e,0)}function He(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof Te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Te(n,0)}function ae(i){return i.pieceNum_>=i.pieces_.length}function bt(i,e){const n=se(i),s=se(e);if(n===null)return e;if(n===s)return bt(Pe(i),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function jS(i,e){const n=ro(i,0),s=ro(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=ui(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function md(i,e){if(Dr(i)!==Dr(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function cn(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Dr(i)>Dr(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class zS{constructor(e,n){this.errorPrefix_=n,this.parts_=ro(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_a(this.parts_[s]);jg(this)}}function WS(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=_a(e),jg(i)}function BS(i){const e=i.parts_.pop();i.byteLength_-=_a(e),i.parts_.length>0&&(i.byteLength_-=1)}function jg(i){if(i.byteLength_>um)throw new Error(i.errorPrefix_+"has a key path longer than "+um+" bytes ("+i.byteLength_+").");if(i.parts_.length>am)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+am+") or object contains a cycle "+ei(i))}function ei(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd extends Fg{static getInstance(){return new gd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=1e3,VS=300*1e3,cm=30*1e3,HS=1.3,$S=3e4,GS="server_kill",dm=3;class qn extends Mg{constructor(e,n,s,l,u,d,f,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=qn.nextPersistentConnectionId_++,this.log_=go("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hs,this.maxReconnectDelay_=VS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(it(u)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Pn,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const m=f.d,g=f.s;qn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&On(e,"w")){const s=Vi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();Ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||O0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=b0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wc("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$S&&(this.reconnectDelay_=Hs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*HS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+qn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const m=function(){f?f.close():(d=!0,s())},g=function(w){L(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(w)};this.realtime_={close:m,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,C]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);d?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=C&&C.token,f=new FS(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,N=>{Ot(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(GS)},u))}catch(w){this.log_("Failed to get token: "+w),d||(this.repoInfo_.nodeAdmin&&Ot(w),m())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ql(this.interruptReasons_)&&(this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>cd(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Te(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=dm&&(this.reconnectDelay_=cm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=dm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mg.replace(/\./g,"-")]=1,od()?e["framework.cordova"]=1:og()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xl.getInstance().currentlyOnline();return ql(this.interruptReasons_)&&e}}qn.nextPersistentConnectionId_=0;qn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ue(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ue(Gi,e),l=new ue(Gi,n);return this.compare(s,l)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;class zg extends va{static get __EMPTY_NODE(){return Ol}static set __EMPTY_NODE(e){Ol=e}compare(e,n){return ui(e.name,n.name)}isDefinedOn(e){throw Ji("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(si,Ol)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,Ol)}toString(){return".key"}}const Ui=new zg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pt{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??pt.RED,this.left=l??Ht.EMPTY_NODE,this.right=u??Ht.EMPTY_NODE}copy(e,n,s,l,u){return new pt(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ht.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pt.RED=!0;pt.BLACK=!1;class KS{copy(e,n,s,l,u){return this}insert(e,n,s){return new pt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ht{constructor(e,n=Ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Dl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Dl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Dl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Dl(this.root_,null,this.comparator_,!0,e)}}Ht.EMPTY_NODE=new KS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(i,e){return ui(i.name,e.name)}function _d(i,e){return ui(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc;function QS(i){Vc=i}const Wg=function(i){return typeof i=="number"?"number:"+vg(i):"string:"+i},Bg=function(i){if(i.isLeafNode()){const e=i.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&On(e,".sv"),"Priority must be a string or number.")}else L(i===Vc||i.isEmpty(),"priority of unexpected type.");L(i===Vc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm;class ft{static set __childrenNodeConstructor(e){hm=e}static get __childrenNodeConstructor(){return hm}constructor(e,n=ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:se(e)===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||Dr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=vg(this.value_):e+=this.value_,this.lazyHash_=_g(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ft.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=ft.VALUE_TYPE_ORDER.indexOf(n),u=ft.VALUE_TYPE_ORDER.indexOf(s);return L(l>=0,"Unknown leaf type: "+n),L(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vg,Hg;function YS(i){Vg=i}function JS(i){Hg=i}class XS extends va{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?ui(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(si,new ft("[PRIORITY-POST]",Hg))}makePost(e,n){const s=Vg(e);return new ue(n,new ft("[PRIORITY-POST]",s))}toString(){return".priority"}}const $e=new XS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=Math.log(2);class eE{constructor(e){const n=u=>parseInt(Math.log(u)/ZS,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zl=function(i,e,n,s){i.sort(e);const l=function(m,g){const y=g-m;let w,C;if(y===0)return null;if(y===1)return w=i[m],C=n?n(w):w,new pt(C,w.node,pt.BLACK,null,null);{const N=parseInt(y/2,10)+m,M=l(m,N),W=l(N+1,g);return w=i[N],C=n?n(w):w,new pt(C,w.node,pt.BLACK,M,W)}},u=function(m){let g=null,y=null,w=i.length;const C=function(M,W){const Y=w-M,Le=w;w-=M;const xe=l(Y+1,Le),Ye=i[Y],Ae=n?n(Ye):Ye;N(new pt(Ae,Ye.node,W,null,xe))},N=function(M){g?(g.left=M,g=M):(y=M,g=M)};for(let M=0;M<m.count;++M){const W=m.nextBitIsOne(),Y=Math.pow(2,m.count-(M+1));W?C(Y,pt.BLACK):(C(Y,pt.BLACK),C(Y,pt.RED))}return y},d=new eE(i.length),f=u(d);return new Ht(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc;const Di={};class $n{static get Default(){return L(Di&&$e,"ChildrenNode.ts has not been loaded"),Pc=Pc||new $n({".priority":Di},{".priority":$e}),Pc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Vi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ht?n:null}hasIndex(e){return On(this.indexSet_,e.toString())}addIndex(e,n){L(e!==Ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(ue.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=Zl(s,e.getCompare()):f=Di;const m=e.toString(),g={...this.indexSet_};g[m]=e;const y={...this.indexes_};return y[m]=f,new $n(y,g)}addToIndexes(e,n){const s=Ql(this.indexes_,(l,u)=>{const d=Vi(this.indexSet_,u);if(L(d,"Missing index implementation for "+u),l===Di)if(d.isDefinedOn(e.node)){const f=[],m=n.getIterator(ue.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&f.push(g),g=m.getNext();return f.push(e),Zl(f,d.getCompare())}else return Di;else{const f=n.get(e.name);let m=l;return f&&(m=m.remove(new ue(e.name,f))),m.insert(e,e.node)}});return new $n(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ql(this.indexes_,l=>{if(l===Di)return l;{const u=n.get(e.name);return u?l.remove(new ue(e.name,u)):l}});return new $n(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s;class J{static get EMPTY_NODE(){return $s||($s=new J(new Ht(_d),null,$n.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Bg(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$s}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$s:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ue(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?$s:this.priorityNode_;return new J(l,d,u)}}updateChild(e,n){const s=se(e);if(s===null)return n;{L(se(e)!==".priority"||Dr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Pe(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild($e,(d,f)=>{n[d]=f.val(e),s++,u&&J.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wg(this.getPriority().val())+":"),this.forEachChild($e,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":_g(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new ue(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ue.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_o?-1:0}withIndex(e){if(e===Ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator($e),l=n.getIterator($e);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===Ui?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tE extends J{constructor(){super(new Ht(_d),J.EMPTY_NODE,$n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const _o=new tE;Object.defineProperties(ue,{MIN:{value:new ue(Gi,J.EMPTY_NODE)},MAX:{value:new ue(si,_o)}});zg.__EMPTY_NODE=J.EMPTY_NODE;ft.__childrenNodeConstructor=J;QS(_o);JS(_o);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=!0;function Qe(i,e=null){if(i===null)return J.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new ft(n,Qe(e))}if(!(i instanceof Array)&&nE){const n=[];let s=!1;if(gt(i,(d,f)=>{if(d.substring(0,1)!=="."){const m=Qe(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new ue(d,m)))}}),n.length===0)return J.EMPTY_NODE;const u=Zl(n,qS,d=>d.name,_d);if(s){const d=Zl(n,$e.getCompare());return new J(u,Qe(e),new $n({".priority":d},{".priority":$e}))}else return new J(u,Qe(e),$n.Default)}else{let n=J.EMPTY_NODE;return gt(i,(s,l)=>{if(On(i,s)&&s.substring(0,1)!=="."){const u=Qe(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(Qe(e))}}YS(Qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE extends va{constructor(e){super(),this.indexPath_=e,L(!ae(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?ui(e.name,n.name):u}makePost(e,n){const s=Qe(e),l=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new ue(n,l)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,_o);return new ue(si,e)}toString(){return ro(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE extends va{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ui(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const s=Qe(e);return new ue(n,s)}toString(){return".value"}}const sE=new iE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(i){return{type:"value",snapshotNode:i}}function Ki(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function io(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function so(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function oE(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(io(n,f)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(Ki(n,s)):d.trackChildChange(so(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild($e,(l,u)=>{n.hasChild(l)||s.trackChildChange(io(l,u))}),n.isLeafNode()||n.forEachChild($e,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(so(l,u,d))}else s.trackChildChange(Ki(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.indexedFilter_=new yd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=oo.getStartPost_(e),this.endPost_=oo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new ue(n,s))||(s=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=J.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(J.EMPTY_NODE);const u=this;return n.forEachChild($e,(d,f)=>{u.matches(new ue(d,f))||(l=l.updateImmediateChild(d,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new oo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new ue(n,s))||(s=J.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=J.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(J.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const w=this.index_.getCompare();d=(C,N)=>w(N,C)}else d=this.index_.getCompare();const f=e;L(f.numChildren()===this.limit_,"");const m=new ue(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(m);if(f.hasChild(n)){const w=f.getImmediateChild(n);let C=l.getChildAfterChild(this.index_,g,this.reverse_);for(;C!=null&&(C.name===n||f.hasChild(C.name));)C=l.getChildAfterChild(this.index_,C,this.reverse_);const N=C==null?1:d(C,m);if(y&&!s.isEmpty()&&N>=0)return u!=null&&u.trackChildChange(so(n,s,w)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(io(n,w));const W=f.updateImmediateChild(n,J.EMPTY_NODE);return C!=null&&this.rangedFilter_.matches(C)?(u!=null&&u.trackChildChange(Ki(C.name,C.node)),W.updateImmediateChild(C.name,C.node)):W}}else return s.isEmpty()?e:y&&d(g,m)>=0?(u!=null&&(u.trackChildChange(io(g.name,g.node)),u.trackChildChange(Ki(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gi}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:si}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new vd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function aE(i){return i.loadsAllData()?new yd(i.getIndex()):i.hasLimit()?new lE(i):new oo(i)}function fm(i){const e={};if(i.isDefault())return e;let n;if(i.index_===$e?n="$priority":i.index_===sE?n="$value":i.index_===Ui?n="$key":(L(i.index_ instanceof rE,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=it(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=it(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+it(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=it(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+it(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function pm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==$e&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Mg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=go("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=ea.getListenId_(e,s),f={};this.listens_[d]=f;const m=fm(e._queryParams);this.restRequest_(u+".json",m,(g,y)=>{let w=y;if(g===404&&(w=null,g=null),g===null&&this.onDataUpdate_(u,w,!1,s),Vi(this.listens_,d)===f){let C;g?g===401?C="permission_denied":C="rest_error:"+g:C="ok",l(C,null)}})}unlisten(e,n){const s=ea.getListenId_(e,n);delete this.listens_[s]}get(e){const n=fm(e._queryParams),s=e._path.toString(),l=new Pn;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xi(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=eo(f.responseText)}catch{Ot("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&Ot("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){return{value:null,children:new Map}}function ts(i,e,n){if(ae(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=se(e);i.children.has(s)||i.children.set(s,ta());const l=i.children.get(s);e=Pe(e),ts(l,e,n)}}function Hc(i,e){if(ae(e))return i.value=null,i.children.clear(),!0;if(i.value!==null){if(i.value.isLeafNode())return!1;{const n=i.value;return i.value=null,n.forEachChild($e,(s,l)=>{ts(i,new Te(s),l)}),Hc(i,e)}}else if(i.children.size>0){const n=se(e);return e=Pe(e),i.children.has(n)&&Hc(i.children.get(n),e)&&i.children.delete(n),i.children.size===0}else return!0}function $c(i,e,n){i.value!==null?n(e,i.value):cE(i,(s,l)=>{const u=new Te(e.toString()+"/"+s);$c(l,u,n)})}function cE(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&gt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=10*1e3,hE=30*1e3,fE=300*1e3;class pE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dE(e);const s=mm+(hE-mm)*Math.random();Qs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;gt(e,(l,u)=>{u>0&&On(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Qs(this.reportStats_.bind(this),Math.floor(Math.random()*2*fE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(En||(En={}));function wd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ed(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=En.ACK_USER_WRITE,this.source=wd()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new na(we(),n,this.revert)}}else return L(se(this.path)===e,"operationForChild called for unrelated child."),new na(Pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.source=e,this.path=n,this.type=En.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new lo(this.source,we()):new lo(this.source,Pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=En.OVERWRITE}operationForChild(e){return ae(this.path)?new oi(this.source,we(),this.snap.getImmediateChild(e)):new oi(this.source,Pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=En.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new oi(this.source,we(),n.value):new qi(this.source,we(),n)}else return L(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qi(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gE(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(oE(d.childName,d.snapshotNode))}),Gs(i,l,"child_removed",e,s,n),Gs(i,l,"child_added",e,s,n),Gs(i,l,"child_moved",u,s,n),Gs(i,l,"child_changed",e,s,n),Gs(i,l,"value",e,s,n),l}function Gs(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,m)=>yE(i,f,m)),d.forEach(f=>{const m=_E(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,i.query_))})})}function _E(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function yE(i,e,n){if(e.childName==null||n.childName==null)throw Ji("Should only compare child_ events.");const s=new ue(e.childName,e.snapshotNode),l=new ue(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(i,e){return{eventCache:i,serverCache:e}}function Ys(i,e,n,s){return wa(new Lr(e,n,s),i.serverCache)}function Gg(i,e,n,s){return wa(i.eventCache,new Lr(e,n,s))}function ra(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function li(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac;const vE=()=>(Ac||(Ac=new Ht(rS)),Ac);class De{static fromObject(e){let n=new De(null);return gt(e,(s,l)=>{n=n.set(new Te(s),l)}),n}constructor(e,n=vE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:we(),value:this.value};if(ae(e))return null;{const s=se(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Pe(e),n);return u!=null?{path:He(new Te(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(Pe(e)):new De(null)}}set(e,n){if(ae(e))return new De(n,this.children);{const s=se(e),u=(this.children.get(s)||new De(null)).set(Pe(e),n),d=this.children.insert(s,u);return new De(this.value,d)}}remove(e){if(ae(e))return this.children.isEmpty()?new De(null):new De(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const l=s.remove(Pe(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new De(null):new De(this.value,u)}else return this}}get(e){if(ae(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(Pe(e)):null}}setTree(e,n){if(ae(e))return n;{const s=se(e),u=(this.children.get(s)||new De(null)).setTree(Pe(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new De(this.value,d)}}fold(e){return this.fold_(we(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(He(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,we(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ae(e))return null;{const u=se(e),d=this.children.get(u);return d?d.findOnPath_(Pe(e),He(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,we(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const l=se(e),u=this.children.get(l);return u?u.foreachOnPath_(Pe(e),He(n,l),s):new De(null)}}foreach(e){this.foreach_(we(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(He(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.writeTree_=e}static empty(){return new In(new De(null))}}function Js(i,e,n){if(ae(e))return new In(new De(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=bt(l,e);return u=u.updateChild(d,n),new In(i.writeTree_.set(l,u))}else{const l=new De(n),u=i.writeTree_.setTree(e,l);return new In(u)}}}function Gc(i,e,n){let s=i;return gt(n,(l,u)=>{s=Js(s,He(e,l),u)}),s}function gm(i,e){if(ae(e))return In.empty();{const n=i.writeTree_.setTree(e,new De(null));return new In(n)}}function Kc(i,e){return ci(i,e)!=null}function ci(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function _m(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(s,l)=>{e.push(new ue(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ue(s,l.value))}),e}function Ar(i,e){if(ae(e))return i;{const n=ci(i,e);return n!=null?new In(new De(n)):new In(i.writeTree_.subtree(e))}}function qc(i){return i.writeTree_.isEmpty()}function Qi(i,e){return Kg(we(),i.writeTree_,e)}function Kg(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(L(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=Kg(He(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(He(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(i,e){return Jg(e,i)}function wE(i,e,n,s,l){L(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=Js(i.visibleWrites,e,n)),i.lastWriteId=s}function SE(i,e,n,s){L(s>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:n,writeId:s,visible:!0}),i.visibleWrites=Gc(i.visibleWrites,e,n),i.lastWriteId=s}function EE(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function CE(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&IE(f,s.path)?l=!1:cn(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return kE(i),!0;if(s.snap)i.visibleWrites=gm(i.visibleWrites,s.path);else{const f=s.children;gt(f,m=>{i.visibleWrites=gm(i.visibleWrites,He(s.path,m))})}return!0}else return!1}function IE(i,e){if(i.snap)return cn(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&cn(He(i.path,n),e))return!0;return!1}function kE(i){i.visibleWrites=qg(i.allWrites,TE,we()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function TE(i){return i.visible}function qg(i,e,n){let s=In.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)cn(n,d)?(f=bt(n,d),s=Js(s,f,u.snap)):cn(d,n)&&(f=bt(d,n),s=Js(s,we(),u.snap.getChild(f)));else if(u.children){if(cn(n,d))f=bt(n,d),s=Gc(s,f,u.children);else if(cn(d,n))if(f=bt(d,n),ae(f))s=Gc(s,we(),u.children);else{const m=Vi(u.children,se(f));if(m){const g=m.getChild(Pe(f));s=Js(s,we(),g)}}}else throw Ji("WriteRecord should have .snap or .children")}}return s}function Qg(i,e,n,s,l){if(!s&&!l){const u=ci(i.visibleWrites,e);if(u!=null)return u;{const d=Ar(i.visibleWrites,e);if(qc(d))return n;if(n==null&&!Kc(d,we()))return null;{const f=n||J.EMPTY_NODE;return Qi(d,f)}}}else{const u=Ar(i.visibleWrites,e);if(!l&&qc(u))return n;if(!l&&n==null&&!Kc(u,we()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(cn(g.path,e)||cn(e,g.path))},f=qg(i.allWrites,d,e),m=n||J.EMPTY_NODE;return Qi(f,m)}}}function xE(i,e,n){let s=J.EMPTY_NODE;const l=ci(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild($e,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Ar(i.visibleWrites,e);return n.forEachChild($e,(d,f)=>{const m=Qi(Ar(u,new Te(d)),f);s=s.updateImmediateChild(d,m)}),_m(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Ar(i.visibleWrites,e);return _m(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function RE(i,e,n,s,l){L(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=He(e,n);if(Kc(i.visibleWrites,u))return null;{const d=Ar(i.visibleWrites,u);return qc(d)?l.getChild(n):Qi(d,l.getChild(n))}}function NE(i,e,n,s){const l=He(e,n),u=ci(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Ar(i.visibleWrites,l);return Qi(d,s.getNode().getImmediateChild(n))}else return null}function PE(i,e){return ci(i.visibleWrites,e)}function AE(i,e,n,s,l,u,d){let f;const m=Ar(i.visibleWrites,e),g=ci(m,we());if(g!=null)f=g;else if(n!=null)f=Qi(m,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const y=[],w=d.getCompare(),C=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let N=C.getNext();for(;N&&y.length<l;)w(N,s)!==0&&y.push(N),N=C.getNext();return y}else return[]}function bE(){return{visibleWrites:In.empty(),allWrites:[],lastWriteId:-1}}function ia(i,e,n,s){return Qg(i.writeTree,i.treePath,e,n,s)}function Cd(i,e){return xE(i.writeTree,i.treePath,e)}function ym(i,e,n,s){return RE(i.writeTree,i.treePath,e,n,s)}function sa(i,e){return PE(i.writeTree,He(i.treePath,e))}function OE(i,e,n,s,l,u){return AE(i.writeTree,i.treePath,e,n,s,l,u)}function Id(i,e,n){return NE(i.writeTree,i.treePath,e,n)}function Yg(i,e){return Jg(He(i.treePath,e),i.writeTree)}function Jg(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,so(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,io(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,Ki(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,so(s,e.snapshotNode,l.oldSnap));else throw Ji("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Xg=new LE;class kd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Lr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Id(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:li(this.viewCache_),u=OE(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(i){return{filter:i}}function FE(i,e){L(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function UE(i,e,n,s,l){const u=new DE;let d,f;if(n.type===En.OVERWRITE){const g=n;g.source.fromUser?d=Qc(i,e,g.path,g.snap,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ae(g.path),d=oa(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===En.MERGE){const g=n;g.source.fromUser?d=zE(i,e,g.path,g.children,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Yc(i,e,g.path,g.children,s,l,f,u))}else if(n.type===En.ACK_USER_WRITE){const g=n;g.revert?d=VE(i,e,g.path,s,l,u):d=WE(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===En.LISTEN_COMPLETE)d=BE(i,e,n.path,s,u);else throw Ji("Unknown operation type: "+n.type);const m=u.getChanges();return jE(e,d,m),{viewCache:d,changes:m}}function jE(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=ra(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push($g(ra(e)))}}function Zg(i,e,n,s,l,u){const d=e.eventCache;if(sa(s,n)!=null)return e;{let f,m;if(ae(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=li(e),y=g instanceof J?g:J.EMPTY_NODE,w=Cd(s,y);f=i.filter.updateFullNode(e.eventCache.getNode(),w,u)}else{const g=ia(s,li(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=se(n);if(g===".priority"){L(Dr(n)===1,"Can't have a priority with additional path components");const y=d.getNode();m=e.serverCache.getNode();const w=ym(s,n,y,m);w!=null?f=i.filter.updatePriority(y,w):f=d.getNode()}else{const y=Pe(n);let w;if(d.isCompleteForChild(g)){m=e.serverCache.getNode();const C=ym(s,n,d.getNode(),m);C!=null?w=d.getNode().getImmediateChild(g).updateChild(y,C):w=d.getNode().getImmediateChild(g)}else w=Id(s,g,e.serverCache);w!=null?f=i.filter.updateChild(d.getNode(),g,w,y,l,u):f=d.getNode()}}return Ys(e,f,d.isFullyInitialized()||ae(n),i.filter.filtersNodes())}}function oa(i,e,n,s,l,u,d,f){const m=e.serverCache;let g;const y=d?i.filter:i.filter.getIndexedFilter();if(ae(n))g=y.updateFullNode(m.getNode(),s,null);else if(y.filtersNodes()&&!m.isFiltered()){const N=m.getNode().updateChild(n,s);g=y.updateFullNode(m.getNode(),N,null)}else{const N=se(n);if(!m.isCompleteForPath(n)&&Dr(n)>1)return e;const M=Pe(n),Y=m.getNode().getImmediateChild(N).updateChild(M,s);N===".priority"?g=y.updatePriority(m.getNode(),Y):g=y.updateChild(m.getNode(),N,Y,M,Xg,null)}const w=Gg(e,g,m.isFullyInitialized()||ae(n),y.filtersNodes()),C=new kd(l,w,u);return Zg(i,w,n,l,C,f)}function Qc(i,e,n,s,l,u,d){const f=e.eventCache;let m,g;const y=new kd(l,e,u);if(ae(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),m=Ys(e,g,!0,i.filter.filtersNodes());else{const w=se(n);if(w===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),m=Ys(e,g,f.isFullyInitialized(),f.isFiltered());else{const C=Pe(n),N=f.getNode().getImmediateChild(w);let M;if(ae(C))M=s;else{const W=y.getCompleteChild(w);W!=null?pd(C)===".priority"&&W.getChild(Ug(C)).isEmpty()?M=W:M=W.updateChild(C,s):M=J.EMPTY_NODE}if(N.equals(M))m=e;else{const W=i.filter.updateChild(f.getNode(),w,M,C,y,d);m=Ys(e,W,f.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function vm(i,e){return i.eventCache.isCompleteForChild(e)}function zE(i,e,n,s,l,u,d){let f=e;return s.foreach((m,g)=>{const y=He(n,m);vm(e,se(y))&&(f=Qc(i,f,y,g,l,u,d))}),s.foreach((m,g)=>{const y=He(n,m);vm(e,se(y))||(f=Qc(i,f,y,g,l,u,d))}),f}function wm(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Yc(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;ae(n)?g=s:g=new De(null).setTree(n,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((w,C)=>{if(y.hasChild(w)){const N=e.serverCache.getNode().getImmediateChild(w),M=wm(i,N,C);m=oa(i,m,new Te(w),M,l,u,d,f)}}),g.children.inorderTraversal((w,C)=>{const N=!e.serverCache.isCompleteForChild(w)&&C.value===null;if(!y.hasChild(w)&&!N){const M=e.serverCache.getNode().getImmediateChild(w),W=wm(i,M,C);m=oa(i,m,new Te(w),W,l,u,d,f)}}),m}function WE(i,e,n,s,l,u,d){if(sa(l,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(ae(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return oa(i,e,n,m.getNode().getChild(n),l,u,f,d);if(ae(n)){let g=new De(null);return m.getNode().forEachChild(Ui,(y,w)=>{g=g.set(new Te(y),w)}),Yc(i,e,n,g,l,u,f,d)}else return e}else{let g=new De(null);return s.foreach((y,w)=>{const C=He(n,y);m.isCompleteForPath(C)&&(g=g.set(y,m.getNode().getChild(C)))}),Yc(i,e,n,g,l,u,f,d)}}function BE(i,e,n,s,l){const u=e.serverCache,d=Gg(e,u.getNode(),u.isFullyInitialized()||ae(n),u.isFiltered());return Zg(i,d,n,s,Xg,l)}function VE(i,e,n,s,l,u){let d;if(sa(s,n)!=null)return e;{const f=new kd(s,e,l),m=e.eventCache.getNode();let g;if(ae(n)||se(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=ia(s,li(e));else{const w=e.serverCache.getNode();L(w instanceof J,"serverChildren would be complete if leaf node"),y=Cd(s,w)}y=y,g=i.filter.updateFullNode(m,y,u)}else{const y=se(n);let w=Id(s,y,e.serverCache);w==null&&e.serverCache.isCompleteForChild(y)&&(w=m.getImmediateChild(y)),w!=null?g=i.filter.updateChild(m,y,w,Pe(n),f,u):e.eventCache.getNode().hasChild(y)?g=i.filter.updateChild(m,y,J.EMPTY_NODE,Pe(n),f,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=ia(s,li(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||sa(s,we())!=null,Ys(e,g,d,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new yd(s.getIndex()),u=aE(s);this.processor_=ME(u);const d=n.serverCache,f=n.eventCache,m=l.updateFullNode(J.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(J.EMPTY_NODE,f.getNode(),null),y=new Lr(m,d.isFullyInitialized(),l.filtersNodes()),w=new Lr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=wa(w,y),this.eventGenerator_=new mE(this.query_)}get query(){return this.query_}}function $E(i){return i.viewCache_.serverCache.getNode()}function GE(i){return ra(i.viewCache_)}function KE(i,e){const n=li(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Sm(i){return i.eventRegistrations_.length===0}function qE(i,e){i.eventRegistrations_.push(e)}function Em(i,e,n){const s=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Cm(i,e,n,s){e.type===En.MERGE&&e.source.queryId!==null&&(L(li(i.viewCache_),"We should always have a full cache before handling merges"),L(ra(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=UE(i.processor_,l,e,n,s);return FE(i.processor_,u.viewCache),L(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,e_(i,u.changes,u.viewCache.eventCache.getNode(),null)}function QE(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(u,d)=>{s.push(Ki(u,d))}),n.isFullyInitialized()&&s.push($g(n.getNode())),e_(i,s,n.getNode(),e)}function e_(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return gE(i.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la;class t_{constructor(){this.views=new Map}}function YE(i){L(!la,"__referenceConstructor has already been defined"),la=i}function JE(){return L(la,"Reference.ts has not been loaded"),la}function XE(i){return i.views.size===0}function Td(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return L(u!=null,"SyncTree gave us an op for an invalid query."),Cm(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Cm(d,e,n,s));return u}}function n_(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=ia(n,l?s:null),m=!1;f?m=!0:s instanceof J?(f=Cd(n,s),m=!1):(f=J.EMPTY_NODE,m=!1);const g=wa(new Lr(f,m,!1),new Lr(s,l,!1));return new HE(e,g)}return d}function ZE(i,e,n,s,l,u){const d=n_(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),qE(d,n),QE(d,n)}function eC(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=Mr(i);if(l==="default")for(const[m,g]of i.views.entries())d=d.concat(Em(g,n,s)),Sm(g)&&(i.views.delete(m),g.query._queryParams.loadsAllData()||u.push(g.query));else{const m=i.views.get(l);m&&(d=d.concat(Em(m,n,s)),Sm(m)&&(i.views.delete(l),m.query._queryParams.loadsAllData()||u.push(m.query)))}return f&&!Mr(i)&&u.push(new(JE())(e._repo,e._path)),{removed:u,events:d}}function r_(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function br(i,e){let n=null;for(const s of i.views.values())n=n||KE(s,e);return n}function i_(i,e){if(e._queryParams.loadsAllData())return Ea(i);{const s=e._queryIdentifier;return i.views.get(s)}}function s_(i,e){return i_(i,e)!=null}function Mr(i){return Ea(i)!=null}function Ea(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa;function tC(i){L(!aa,"__referenceConstructor has already been defined"),aa=i}function nC(){return L(aa,"Reference.ts has not been loaded"),aa}let rC=1;class Im{constructor(e){this.listenProvider_=e,this.syncPointTree_=new De(null),this.pendingWriteTree_=bE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function o_(i,e,n,s,l){return wE(i.pendingWriteTree_,e,n,s,l),l?ns(i,new oi(wd(),e,n)):[]}function iC(i,e,n,s){SE(i.pendingWriteTree_,e,n,s);const l=De.fromObject(n);return ns(i,new qi(wd(),e,l))}function xr(i,e,n=!1){const s=EE(i.pendingWriteTree_,e);if(CE(i.pendingWriteTree_,e)){let u=new De(null);return s.snap!=null?u=u.set(we(),!0):gt(s.children,d=>{u=u.set(new Te(d),!0)}),ns(i,new na(s.path,u,n))}else return[]}function yo(i,e,n){return ns(i,new oi(Sd(),e,n))}function sC(i,e,n){const s=De.fromObject(n);return ns(i,new qi(Sd(),e,s))}function oC(i,e){return ns(i,new lo(Sd(),e))}function lC(i,e,n){const s=Rd(i,n);if(s){const l=Nd(s),u=l.path,d=l.queryId,f=bt(u,e),m=new lo(Ed(d),f);return Pd(i,u,m)}else return[]}function ua(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||s_(d,e))){const m=eC(d,e,n,s);XE(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=m.removed;if(f=m.events,!l){const y=g.findIndex(C=>C._queryParams.loadsAllData())!==-1,w=i.syncPointTree_.findOnPath(u,(C,N)=>Mr(N));if(y&&!w){const C=i.syncPointTree_.subtree(u);if(!C.isEmpty()){const N=cC(C);for(let M=0;M<N.length;++M){const W=N[M],Y=W.query,Le=c_(i,W);i.listenProvider_.startListening(Xs(Y),ao(i,Y),Le.hashFn,Le.onComplete)}}}!w&&g.length>0&&!s&&(y?i.listenProvider_.stopListening(Xs(e),null):g.forEach(C=>{const N=i.queryToTagMap.get(Ca(C));i.listenProvider_.stopListening(Xs(C),N)}))}dC(i,g)}return f}function l_(i,e,n,s){const l=Rd(i,s);if(l!=null){const u=Nd(l),d=u.path,f=u.queryId,m=bt(d,e),g=new oi(Ed(f),m,n);return Pd(i,d,g)}else return[]}function aC(i,e,n,s){const l=Rd(i,s);if(l){const u=Nd(l),d=u.path,f=u.queryId,m=bt(d,e),g=De.fromObject(n),y=new qi(Ed(f),m,g);return Pd(i,d,y)}else return[]}function Jc(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(C,N)=>{const M=bt(C,l);u=u||br(N,M),d=d||Mr(N)});let f=i.syncPointTree_.get(l);f?(d=d||Mr(f),u=u||br(f,we())):(f=new t_,i.syncPointTree_=i.syncPointTree_.set(l,f));let m;u!=null?m=!0:(m=!1,u=J.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((N,M)=>{const W=br(M,we());W&&(u=u.updateImmediateChild(N,W))}));const g=s_(f,e);if(!g&&!e._queryParams.loadsAllData()){const C=Ca(e);L(!i.queryToTagMap.has(C),"View does not exist, but we have a tag");const N=hC();i.queryToTagMap.set(C,N),i.tagToQueryMap.set(N,C)}const y=Sa(i.pendingWriteTree_,l);let w=ZE(f,e,n,y,u,m);if(!g&&!d&&!s){const C=i_(f,e);w=w.concat(fC(i,e,C))}return w}function xd(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const m=bt(d,e),g=br(f,m);if(g)return g});return Qg(l,e,u,n,!0)}function uC(i,e){const n=e._path;let s=null;i.syncPointTree_.foreachOnPath(n,(g,y)=>{const w=bt(g,n);s=s||br(y,w)});let l=i.syncPointTree_.get(n);l?s=s||br(l,we()):(l=new t_,i.syncPointTree_=i.syncPointTree_.set(n,l));const u=s!=null,d=u?new Lr(s,!0,!1):null,f=Sa(i.pendingWriteTree_,e._path),m=n_(l,e,f,u?d.getNode():J.EMPTY_NODE,u);return GE(m)}function ns(i,e){return a_(e,i.syncPointTree_,null,Sa(i.pendingWriteTree_,we()))}function a_(i,e,n,s){if(ae(i.path))return u_(i,e,n,s);{const l=e.get(we());n==null&&l!=null&&(n=br(l,we()));let u=[];const d=se(i.path),f=i.operationForChild(d),m=e.children.get(d);if(m&&f){const g=n?n.getImmediateChild(d):null,y=Yg(s,d);u=u.concat(a_(f,m,g,y))}return l&&(u=u.concat(Td(l,i,s,n))),u}}function u_(i,e,n,s){const l=e.get(we());n==null&&l!=null&&(n=br(l,we()));let u=[];return e.children.inorderTraversal((d,f)=>{const m=n?n.getImmediateChild(d):null,g=Yg(s,d),y=i.operationForChild(d);y&&(u=u.concat(u_(y,f,m,g)))}),l&&(u=u.concat(Td(l,i,s,n))),u}function c_(i,e){const n=e.query,s=ao(i,n);return{hashFn:()=>($E(e)||J.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?lC(i,n._path,s):oC(i,n._path);{const u=oS(l,n);return ua(i,n,null,u)}}}}function ao(i,e){const n=Ca(e);return i.queryToTagMap.get(n)}function Ca(i){return i._path.toString()+"$"+i._queryIdentifier}function Rd(i,e){return i.tagToQueryMap.get(e)}function Nd(i){const e=i.indexOf("$");return L(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Te(i.substr(0,e))}}function Pd(i,e,n){const s=i.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const l=Sa(i.pendingWriteTree_,e);return Td(s,n,l,null)}function cC(i){return i.fold((e,n,s)=>{if(n&&Mr(n))return[Ea(n)];{let l=[];return n&&(l=r_(n)),gt(s,(u,d)=>{l=l.concat(d)}),l}})}function Xs(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(nC())(i._repo,i._path):i}function dC(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Ca(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function hC(){return rC++}function fC(i,e,n){const s=e._path,l=ao(i,e),u=c_(i,n),d=i.listenProvider_.startListening(Xs(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)L(!Mr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((g,y,w)=>{if(!ae(g)&&y&&Mr(y))return[Ea(y).query];{let C=[];return y&&(C=C.concat(r_(y).map(N=>N.query))),gt(w,(N,M)=>{C=C.concat(M)}),C}});for(let g=0;g<m.length;++g){const y=m[g];i.listenProvider_.stopListening(Xs(y),ao(i,y))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ad(n)}node(){return this.node_}}class bd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new bd(this.syncTree_,n)}node(){return xd(this.syncTree_,this.path_)}}const pC=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},km=function(i,e,n){if(!i||typeof i!="object")return i;if(L(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return mC(i[".sv"],e,n);if(typeof i[".sv"]=="object")return gC(i[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},mC=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+i)}},gC=function(i,e,n){i.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const l=e.node();if(L(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},d_=function(i,e,n,s){return Od(e,new bd(n,i),s)},h_=function(i,e,n){return Od(i,new Ad(e),n)};function Od(i,e,n){const s=i.getPriority().val(),l=km(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=km(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new ft(f,Qe(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new ft(l))),d.forEachChild($e,(f,m)=>{const g=Od(m,e.getImmediateChild(f),n);g!==m&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ld(i,e){let n=e instanceof Te?e:new Te(e),s=i,l=se(n);for(;l!==null;){const u=Vi(s.node.children,l)||{children:{},childCount:0};s=new Dd(l,s,u),n=Pe(n),l=se(n)}return s}function rs(i){return i.node.value}function f_(i,e){i.node.value=e,Xc(i)}function p_(i){return i.node.childCount>0}function _C(i){return rs(i)===void 0&&!p_(i)}function Ia(i,e){gt(i.node.children,(n,s)=>{e(new Dd(n,i,s))})}function m_(i,e,n,s){n&&e(i),Ia(i,l=>{m_(l,e,!0)})}function yC(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vo(i){return new Te(i.parent===null?i.name:vo(i.parent)+"/"+i.name)}function Xc(i){i.parent!==null&&vC(i.parent,i.name,i)}function vC(i,e,n){const s=_C(n),l=On(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,Xc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,Xc(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=/[\[\].#$\/\u0000-\u001F\u007F]/,SC=/[\[\].#$\u0000-\u001F\u007F]/,bc=10*1024*1024,Md=function(i){return typeof i=="string"&&i.length!==0&&!wC.test(i)},g_=function(i){return typeof i=="string"&&i.length!==0&&!SC.test(i)},EC=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),g_(i)},__=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!ya(i)||i&&typeof i=="object"&&On(i,".sv")},ca=function(i,e,n,s){s&&e===void 0||ka(Hi(i,"value"),e,n)},ka=function(i,e,n){const s=n instanceof Te?new zS(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+ei(s));if(typeof e=="function")throw new Error(i+"contains a function "+ei(s)+" with contents = "+e.toString());if(ya(e))throw new Error(i+"contains "+e.toString()+" "+ei(s));if(typeof e=="string"&&e.length>bc/3&&_a(e)>bc)throw new Error(i+"contains a string greater than "+bc+" utf8 bytes "+ei(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(gt(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Md(d)))throw new Error(i+" contains an invalid key ("+d+") "+ei(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WS(s,d),ka(i,f,s),BS(s)}),l&&u)throw new Error(i+' contains ".value" child '+ei(s)+" in addition to actual children.")}},CC=function(i,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=ro(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Md(u[d]))throw new Error(i+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(jS);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&cn(l,s))throw new Error(i+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},y_=function(i,e,n,s){const l=Hi(i,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];gt(e,(d,f)=>{const m=new Te(d);if(ka(l,f,He(n,m)),pd(m)===".priority"&&!__(f))throw new Error(l+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(m)}),CC(l,u)},IC=function(i,e,n){if(ya(e))throw new Error(Hi(i,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!__(e))throw new Error(Hi(i,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},v_=function(i,e,n,s){if(!g_(n))throw new Error(Hi(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kC=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),v_(i,e,n)},ni=function(i,e){if(se(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},TC=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Md(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!EC(n))throw new Error(Hi(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ta(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!md(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function w_(i,e,n){Ta(i,n),S_(i,s=>md(s,e))}function dn(i,e,n){Ta(i,n),S_(i,s=>cn(s,e)||cn(e,s))}function S_(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(RC(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function RC(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();qs&&mt("event: "+n.toString()),es(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="repo_interrupt",PC=25;class AC{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ta(),this.transactionQueueTree_=new Dd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bC(i,e,n){if(i.stats_=hd(i.repoInfo_),i.forceRestClient_||cS())i.server_=new ea(i.repoInfo_,(s,l,u,d)=>{Tm(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>xm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new qn(i.repoInfo_,e,(s,l,u,d)=>{Tm(i,s,l,u,d)},s=>{xm(i,s)},s=>{OC(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=mS(i.repoInfo_,()=>new pE(i.stats_,i.server_)),i.infoData_=new uE,i.infoSyncTree_=new Im({startListening:(s,l,u,d)=>{let f=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(f=yo(i.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Fd(i,"connected",!1),i.serverSyncTree_=new Im({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,m)=>{const g=d(f,m);dn(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function E_(i){const n=i.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xa(i){return pC({timestamp:E_(i)})}function Tm(i,e,n,s,l){i.dataUpdateCount++;const u=new Te(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const m=Ql(n,g=>Qe(g));d=aC(i.serverSyncTree_,u,m,l)}else{const m=Qe(n);d=l_(i.serverSyncTree_,u,m,l)}else if(s){const m=Ql(n,g=>Qe(g));d=sC(i.serverSyncTree_,u,m)}else{const m=Qe(n);d=yo(i.serverSyncTree_,u,m)}let f=u;d.length>0&&(f=Yi(i,u)),dn(i.eventQueue_,f,d)}function xm(i,e){Fd(i,"connected",e),e===!1&&FC(i)}function OC(i,e){gt(e,(n,s)=>{Fd(i,n,s)})}function Fd(i,e,n){const s=new Te("/.info/"+e),l=Qe(n);i.infoData_.updateSnapshot(s,l);const u=yo(i.infoSyncTree_,s,l);dn(i.eventQueue_,s,u)}function Ud(i){return i.nextWriteId_++}function DC(i,e,n){const s=uC(i.serverSyncTree_,e);return s!=null?Promise.resolve(s):i.server_.get(e).then(l=>{const u=Qe(l).withIndex(e._queryParams.getIndex());Jc(i.serverSyncTree_,e,n,!0);let d;if(e._queryParams.loadsAllData())d=yo(i.serverSyncTree_,e._path,u);else{const f=ao(i.serverSyncTree_,e);d=l_(i.serverSyncTree_,e._path,u,f)}return dn(i.eventQueue_,e._path,d),ua(i.serverSyncTree_,e,n,null,!0),u},l=>(wo(i,"get for query "+it(e)+" failed: "+l),Promise.reject(new Error(l))))}function LC(i,e,n,s,l){wo(i,"set",{path:e.toString(),value:n,priority:s});const u=xa(i),d=Qe(n,s),f=xd(i.serverSyncTree_,e),m=h_(d,f,u),g=Ud(i),y=o_(i.serverSyncTree_,e,m,g,!0);Ta(i.eventQueue_,y),i.server_.put(e.toString(),d.val(!0),(C,N)=>{const M=C==="ok";M||Ot("set at "+e+" failed: "+C);const W=xr(i.serverSyncTree_,g,!M);dn(i.eventQueue_,e,W),Fr(i,l,C,N)});const w=zd(i,e);Yi(i,w),dn(i.eventQueue_,w,[])}function MC(i,e,n,s){wo(i,"update",{path:e.toString(),value:n});let l=!0;const u=xa(i),d={};if(gt(n,(f,m)=>{l=!1,d[f]=d_(He(e,f),Qe(m),i.serverSyncTree_,u)}),l)mt("update() called with empty data.  Don't do anything."),Fr(i,s,"ok",void 0);else{const f=Ud(i),m=iC(i.serverSyncTree_,e,d,f);Ta(i.eventQueue_,m),i.server_.merge(e.toString(),n,(g,y)=>{const w=g==="ok";w||Ot("update at "+e+" failed: "+g);const C=xr(i.serverSyncTree_,f,!w),N=C.length>0?Yi(i,e):e;dn(i.eventQueue_,N,C),Fr(i,s,g,y)}),gt(n,g=>{const y=zd(i,He(e,g));Yi(i,y)}),dn(i.eventQueue_,e,[])}}function FC(i){wo(i,"onDisconnectEvents");const e=xa(i),n=ta();$c(i.onDisconnect_,we(),(l,u)=>{const d=d_(l,u,i.serverSyncTree_,e);ts(n,l,d)});let s=[];$c(n,we(),(l,u)=>{s=s.concat(yo(i.serverSyncTree_,l,u));const d=zd(i,l);Yi(i,d)}),i.onDisconnect_=ta(),dn(i.eventQueue_,we(),s)}function UC(i,e,n){i.server_.onDisconnectCancel(e.toString(),(s,l)=>{s==="ok"&&Hc(i.onDisconnect_,e),Fr(i,n,s,l)})}function Rm(i,e,n,s){const l=Qe(n);i.server_.onDisconnectPut(e.toString(),l.val(!0),(u,d)=>{u==="ok"&&ts(i.onDisconnect_,e,l),Fr(i,s,u,d)})}function jC(i,e,n,s,l){const u=Qe(n,s);i.server_.onDisconnectPut(e.toString(),u.val(!0),(d,f)=>{d==="ok"&&ts(i.onDisconnect_,e,u),Fr(i,l,d,f)})}function zC(i,e,n,s){if(ql(n)){mt("onDisconnect().update() called with empty data.  Don't do anything."),Fr(i,s,"ok",void 0);return}i.server_.onDisconnectMerge(e.toString(),n,(l,u)=>{l==="ok"&&gt(n,(d,f)=>{const m=Qe(f);ts(i.onDisconnect_,He(e,d),m)}),Fr(i,s,l,u)})}function WC(i,e,n){let s;se(e._path)===".info"?s=Jc(i.infoSyncTree_,e,n):s=Jc(i.serverSyncTree_,e,n),w_(i.eventQueue_,e._path,s)}function BC(i,e,n){let s;se(e._path)===".info"?s=ua(i.infoSyncTree_,e,n):s=ua(i.serverSyncTree_,e,n),w_(i.eventQueue_,e._path,s)}function VC(i){i.persistentConnection_&&i.persistentConnection_.interrupt(NC)}function wo(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),mt(n,...e)}function Fr(i,e,n,s){e&&es(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function C_(i,e,n){return xd(i.serverSyncTree_,e,n)||J.EMPTY_NODE}function jd(i,e=i.transactionQueueTree_){if(e||Ra(i,e),rs(e)){const n=k_(i,e);L(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&HC(i,vo(e),n)}else p_(e)&&Ia(e,n=>{jd(i,n)})}function HC(i,e,n){const s=n.map(g=>g.currentWriteId),l=C_(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const y=n[g];L(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const w=bt(e,y.path);u=u.updateChild(w,y.currentOutputSnapshotRaw)}const f=u.val(!0),m=e;i.server_.put(m.toString(),f,g=>{wo(i,"transaction put response",{path:m.toString(),status:g});let y=[];if(g==="ok"){const w=[];for(let C=0;C<n.length;C++)n[C].status=2,y=y.concat(xr(i.serverSyncTree_,n[C].currentWriteId)),n[C].onComplete&&w.push(()=>n[C].onComplete(null,!0,n[C].currentOutputSnapshotResolved)),n[C].unwatcher();Ra(i,Ld(i.transactionQueueTree_,e)),jd(i,i.transactionQueueTree_),dn(i.eventQueue_,e,y);for(let C=0;C<w.length;C++)es(w[C])}else{if(g==="datastale")for(let w=0;w<n.length;w++)n[w].status===3?n[w].status=4:n[w].status=0;else{Ot("transaction at "+m.toString()+" failed: "+g);for(let w=0;w<n.length;w++)n[w].status=4,n[w].abortReason=g}Yi(i,e)}},d)}function Yi(i,e){const n=I_(i,e),s=vo(n),l=k_(i,n);return $C(i,l,s),s}function $C(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=bt(n,m.path);let y=!1,w;if(L(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)y=!0,w=m.abortReason,l=l.concat(xr(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=PC)y=!0,w="maxretry",l=l.concat(xr(i.serverSyncTree_,m.currentWriteId,!0));else{const C=C_(i,m.path,d);m.currentInputSnapshot=C;const N=e[f].update(C.val());if(N!==void 0){ka("transaction failed: Data returned ",N,m.path);let M=Qe(N);typeof N=="object"&&N!=null&&On(N,".priority")||(M=M.updatePriority(C.getPriority()));const Y=m.currentWriteId,Le=xa(i),xe=h_(M,C,Le);m.currentOutputSnapshotRaw=M,m.currentOutputSnapshotResolved=xe,m.currentWriteId=Ud(i),d.splice(d.indexOf(Y),1),l=l.concat(o_(i.serverSyncTree_,m.path,xe,m.currentWriteId,m.applyLocally)),l=l.concat(xr(i.serverSyncTree_,Y,!0))}else y=!0,w="nodata",l=l.concat(xr(i.serverSyncTree_,m.currentWriteId,!0))}dn(i.eventQueue_,n,l),l=[],y&&(e[f].status=2,(function(C){setTimeout(C,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(w==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(w),!1,null))))}Ra(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)es(s[f]);jd(i,i.transactionQueueTree_)}function I_(i,e){let n,s=i.transactionQueueTree_;for(n=se(e);n!==null&&rs(s)===void 0;)s=Ld(s,n),e=Pe(e),n=se(e);return s}function k_(i,e){const n=[];return T_(i,e,n),n.sort((s,l)=>s.order-l.order),n}function T_(i,e,n){const s=rs(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Ia(e,l=>{T_(i,l,n)})}function Ra(i,e){const n=rs(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,f_(e,n.length>0?n:void 0)}Ia(e,s=>{Ra(i,s)})}function zd(i,e){const n=vo(I_(i,e)),s=Ld(i.transactionQueueTree_,e);return yC(s,l=>{Oc(i,l)}),Oc(i,s),m_(s,l=>{Oc(i,l)}),n}function Oc(i,e){const n=rs(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(L(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(L(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(xr(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?f_(e,void 0):n.length=u+1,dn(i.eventQueue_,vo(e),l);for(let d=0;d<s.length;d++)es(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function KC(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ot(`Invalid query segment '${n}' in query '${i}'`)}return e}const Nm=function(i,e){const n=qC(i),s=n.namespace;n.domain==="firebase.com"&&Yn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Yn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ng(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Te(n.pathString)}},qC=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let y=i.indexOf("/");y===-1&&(y=i.length);let w=i.indexOf("?");w===-1&&(w=i.length),e=i.substring(0,Math.min(y,w)),y<w&&(l=GC(i.substring(y,w)));const C=KC(i.substring(Math.min(i.length,w)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")n="localhost";else if(N.split(".").length<=2)n=N;else{const M=e.indexOf(".");s=e.substring(0,M).toLowerCase(),n=e.substring(M+1),u=s}"ns"in C&&(u=C.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",QC=(function(){let i=0;const e=[];return function(n){const s=n===i;i=n;let l;const u=new Array(8);for(l=7;l>=0;l--)u[l]=Pm.charAt(n%64),n=Math.floor(n/64);L(n===0,"Cannot push at time == 0");let d=u.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)d+=Pm.charAt(e[l]);return L(d.length===20,"nextPushId: Length should be 20."),d}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+it(this.snapshot.exportVal())}}class JC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Pn;return UC(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ni("OnDisconnect.remove",this._path);const e=new Pn;return Rm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ni("OnDisconnect.set",this._path),ca("OnDisconnect.set",e,this._path,!1);const n=new Pn;return Rm(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){ni("OnDisconnect.setWithPriority",this._path),ca("OnDisconnect.setWithPriority",e,this._path,!1),IC("OnDisconnect.setWithPriority",n);const s=new Pn;return jC(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){ni("OnDisconnect.update",this._path),y_("OnDisconnect.update",e,this._path);const n=new Pn;return zC(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ae(this._path)?null:pd(this._path)}get ref(){return new Zn(this._repo,this._path)}get _queryIdentifier(){const e=pm(this._queryParams),n=cd(e);return n==="{}"?"default":n}get _queryObject(){return pm(this._queryParams)}isEqual(e){if(e=$t(e),!(e instanceof Wd))return!1;const n=this._repo===e._repo,s=md(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+US(this._path)}}class Zn extends Wd{constructor(e,n){super(e,n,new vd,!1)}get parent(){const e=Ug(this._path);return e===null?null:new Zn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class uo{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),s=co(this.ref,e);return new uo(this._node.getChild(n),s,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new uo(l,co(this.ref,s),$e)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function pe(i,e){return i=$t(i),i._checkNotDeleted("ref"),e!==void 0?co(i._root,e):i._root}function co(i,e){return i=$t(i),se(i._path)===null?kC("child","path",e):v_("child","path",e),new Zn(i._repo,He(i._path,e))}function Am(i){return i=$t(i),new XC(i._repo,i._path)}function ZC(i,e){i=$t(i),ni("push",i._path),ca("push",e,i._path,!0);const n=E_(i._repo),s=QC(n),l=co(i,s),u=co(i,s);let d;return e!=null?d=Er(u,e).then(()=>u):d=Promise.resolve(u),l.then=d.then.bind(d),l.catch=d.then.bind(d,void 0),l}function Ll(i){return ni("remove",i._path),Er(i,null)}function Er(i,e){i=$t(i),ni("set",i._path),ca("set",e,i._path,!1);const n=new Pn;return LC(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ks(i,e){y_("update",e,i._path);const n=new Pn;return MC(i._repo,i._path,e,n.wrapCallback(()=>{})),n.promise}function Vt(i){i=$t(i);const e=new x_(()=>{}),n=new Na(e);return DC(i._repo,i,n).then(s=>new uo(s,new Zn(i._repo,i._path),i._queryParams.getIndex()))}class Na{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new YC("value",this,new uo(e.snapshotNode,new Zn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new JC(this,e,n):null}matches(e){return e instanceof Na?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function e1(i,e,n,s,l){const u=new x_(n,void 0),d=new Na(u);return WC(i._repo,i,d),()=>BC(i._repo,i,d)}function t1(i,e,n,s){return e1(i,"value",e)}YE(Zn);tC(Zn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="FIREBASE_DATABASE_EMULATOR_HOST",Zc={};let r1=!1;function i1(i,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=po(u);i.repoInfo_=new Ng(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function s1(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||Yn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Nm(u,l),f=d.repoInfo,m;typeof process<"u"&&Yp&&(m=Yp[n1]),m?(u=`http://${m}?ns=${f.namespace}`,d=Nm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new hS(i.name,i.options,e);TC("Invalid Firebase Database URL",d),ae(d.path)||Yn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=l1(f,i,g,new dS(i,n));return new a1(y,i)}function o1(i,e){const n=Zc[e];(!n||n[i.key]!==i)&&Yn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),VC(i),delete n[i.key]}function l1(i,e,n,s){let l=Zc[e.name];l||(l={},Zc[e.name]=l);let u=l[i.toURLString()];return u&&Yn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new AC(i,r1,n,s),l[i.toURLString()]=u,u}class a1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zn(this._repo,we())),this._rootInternal}_delete(){return this._rootInternal!==null&&(o1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yn("Cannot call "+e+" on a deleted database.")}}function u1(i=hg(),e){const n=ud(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=S0("database");s&&c1(n,...s)}return n}function c1(i,e,n,s={}){i=$t(i),i._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(l===i._repoInternal.repoInfo_.host&&ri(s,u.repoInfo_.emulatorOptions))return;Yn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&Yn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new Wl(Wl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:E0(s.mockUserToken,i.app.options.projectId);d=new Wl(f)}po(e)&&ag(e),i1(u,l,s,d)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(i){Qw(Zi),$i(new ii("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return s1(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Pr(Jp,Xp,i),Pr(Jp,Xp,"esm2020")}qn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};qn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};d1();function R_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h1=R_,N_=new fo("auth","Firebase",R_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new ld("@firebase/auth");function f1(i,...e){da.logLevel<=Ne.WARN&&da.warn(`Auth (${Zi}): ${i}`,...e)}function Bl(i,...e){da.logLevel<=Ne.ERROR&&da.error(`Auth (${Zi}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(i,...e){throw Bd(i,...e)}function An(i,...e){return Bd(i,...e)}function P_(i,e,n){const s={...h1(),[e]:n};return new fo("auth","Firebase",s).create(e,{appName:i.name})}function Or(i){return P_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bd(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return N_.create(i,...e)}function Z(i,e,...n){if(!i)throw Bd(e,...n)}function Gn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Bl(e),new Error(e)}function Xn(i,e){i||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function p1(){return bm()==="http:"||bm()==="https:"}function bm(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p1()||I0()||"connection"in navigator)?navigator.onLine:!0}function g1(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=od()||og()}get(){return m1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(i,e){Xn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],v1=new So(3e4,6e4);function Pa(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function is(i,e,n,s,l={}){return b_(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Xi({key:i.config.apiKey,...d}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g={method:e,headers:m,...u};return C0()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&po(i.emulatorConfig.host)&&(g.credentials="include"),A_.fetch()(await D_(i,i.config.apiHost,n,f),g)})}async function b_(i,e,n){i._canInitEmulator=!1;const s={..._1,...e};try{const l=new w1(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw Ml(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ml(i,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw Ml(i,"email-already-in-use",d);if(m==="USER_DISABLED")throw Ml(i,"user-disabled",d);const y=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw P_(i,y,g);Jn(i,y)}}catch(l){if(l instanceof jr)throw l;Jn(i,"network-request-failed",{message:String(l)})}}async function O_(i,e,n,s,l={}){const u=await is(i,e,n,s,l);return"mfaPendingCredential"in u&&Jn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function D_(i,e,n,s){const l=`${e}${n}?${s}`,u=i,d=u.config.emulator?Vd(i.config,l):`${i.config.apiScheme}://${l}`;return y1.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class w1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(An(this.auth,"network-request-failed")),v1.get())})}}function Ml(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=An(i,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(i,e){return is(i,"POST","/v1/accounts:delete",e)}async function ha(i,e){return is(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function E1(i,e=!1){const n=$t(i),s=await n.getIdToken(e),l=Hd(s);Z(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Zs(Dc(l.auth_time)),issuedAtTime:Zs(Dc(l.iat)),expirationTime:Zs(Dc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Dc(i){return Number(i)*1e3}function Hd(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const l=Kl(n);return l?JSON.parse(l):(Bl("Failed to decode base64 JWT payload"),null)}catch(l){return Bl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Om(i){const e=Hd(i);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof jr&&C1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function C1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(i){var w;const e=i.auth,n=await i.getIdToken(),s=await ho(i,ha(e,{idToken:n}));Z(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];i._notifyReloadListener(l);const u=(w=l.providerUserInfo)!=null&&w.length?L_(l.providerUserInfo):[],d=T1(i.providerData,u),f=i.isAnonymous,m=!(i.email&&l.passwordHash)&&!(d!=null&&d.length),g=f?m:!1,y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new td(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(i,y)}async function k1(i){const e=$t(i);await fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function T1(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function L_(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(i,e){const n=await b_(i,{},async()=>{const s=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=await D_(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:s};return i.emulatorConfig&&po(i.emulatorConfig.host)&&(m.credentials="include"),A_.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function R1(i,e){return is(i,"POST","/v2/accounts:revokeToken",Pa(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Om(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Om(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await x1(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new ji;return s&&(Z(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Z(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Z(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(i,e){Z(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Cn{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new I1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new td(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await ho(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return E1(this,e)}reload(){return k1(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await fa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(Or(this.auth));const e=await this.getIdToken();return await ho(this,S1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,u=n.phoneNumber??void 0,d=n.photoURL??void 0,f=n.tenantId??void 0,m=n._redirectEventId??void 0,g=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:w,emailVerified:C,isAnonymous:N,providerData:M,stsTokenManager:W}=n;Z(w&&W,e,"internal-error");const Y=ji.fromJSON(this.name,W);Z(typeof w=="string",e,"internal-error"),wr(s,e.name),wr(l,e.name),Z(typeof C=="boolean",e,"internal-error"),Z(typeof N=="boolean",e,"internal-error"),wr(u,e.name),wr(d,e.name),wr(f,e.name),wr(m,e.name),wr(g,e.name),wr(y,e.name);const Le=new Cn({uid:w,auth:e,email:l,emailVerified:C,displayName:s,isAnonymous:N,photoURL:d,phoneNumber:u,tenantId:f,stsTokenManager:Y,createdAt:g,lastLoginAt:y});return M&&Array.isArray(M)&&(Le.providerData=M.map(xe=>({...xe}))),m&&(Le._redirectEventId=m),Le}static async _fromIdTokenResponse(e,n,s=!1){const l=new ji;l.updateFromServerResponse(n);const u=new Cn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await fa(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Z(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?L_(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new ji;f.updateFromIdToken(s);const m=new Cn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new td(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new Map;function Kn(i){Xn(i instanceof Function,"Expected a class definition");let e=Dm.get(i);return e?(Xn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Dm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}M_.type="NONE";const Lm=M_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(i,e,n){return`firebase:${i}:${e}:${n}`}class zi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Vl(this.userKey,l.apiKey,u),this.fullPersistenceKey=Vl("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ha(this.auth,{idToken:e}).catch(()=>{});return n?Cn._fromGetAccountInfoResponse(this.auth,n,e):null}return Cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new zi(Kn(Lm),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||Kn(Lm);const d=Vl(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const y=await g._get(d);if(y){let w;if(typeof y=="string"){const C=await ha(e,{idToken:y}).catch(()=>{});if(!C)break;w=await Cn._fromGetAccountInfoResponse(e,C,y)}else w=Cn._fromJSON(e,y);g!==u&&(f=w),u=g;break}}catch{}const m=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new zi(u,e,s):(u=m[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new zi(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(F_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B_(e))return"Blackberry";if(V_(e))return"Webos";if(U_(e))return"Safari";if((e.includes("chrome/")||j_(e))&&!e.includes("edge/"))return"Chrome";if(W_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function F_(i=Dt()){return/firefox\//i.test(i)}function U_(i=Dt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j_(i=Dt()){return/crios\//i.test(i)}function z_(i=Dt()){return/iemobile/i.test(i)}function W_(i=Dt()){return/android/i.test(i)}function B_(i=Dt()){return/blackberry/i.test(i)}function V_(i=Dt()){return/webos/i.test(i)}function $d(i=Dt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function N1(i=Dt()){var e;return $d(i)&&!!((e=window.navigator)!=null&&e.standalone)}function P1(){return k0()&&document.documentMode===10}function H_(i=Dt()){return $d(i)||W_(i)||V_(i)||B_(i)||/windows phone/i.test(i)||z_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(i,e=[]){let n;switch(i){case"Browser":n=Mm(Dt());break;case"Worker":n=`${Mm(Dt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const m=e(u);d(m)}catch(m){f(m)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(i,e={}){return is(i,"GET","/v2/passwordPolicy",Pa(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=6;class D1{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??O1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fm(this),this.idTokenSubscription=new Fm(this),this.beforeStateQueue=new A1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ha(this,{idToken:e}),s=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(wn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(u=this.redirectUser)==null?void 0:u._redirectEventId,f=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===f)&&(m!=null&&m.user)&&(s=m.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(Or(this));const n=e?$t(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(Or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(Or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await b1(this),n=new D1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await R1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,l);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&f1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Aa(i){return $t(i)}class Fm{constructor(e){this.auth=e,this.observer=null,this.addObserver=L0(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function M1(i){Gd=i}function F1(i){return Gd.loadJS(i)}function U1(){return Gd.gapiScript}function j1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(i,e){const n=ud(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(ri(u,e??{}))return l;Jn(l,"already-initialized")}return n.initialize({options:e})}function W1(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function B1(i,e,n){const s=Aa(i);Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=G_(e),{host:d,port:f}=V1(e),m=f===null?"":`:${f}`,g={url:`${u}//${d}${m}/`},y=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){Z(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Z(ri(g,s.config.emulator)&&ri(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,po(d)?ag(`${u}//${d}${m}`):H1()}function G_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function V1(i){const e=G_(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Um(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:Um(d)}}}function Um(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function H1(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(i,e){return O_(i,"POST","/v1/accounts:signInWithIdp",Pa(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="http://localhost";class ai extends K_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...u}=n;if(!s||!l)return null;const d=new ai(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Wi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:$1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends q_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Eo{constructor(){super("facebook.com")}static credential(e){return ai._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ai._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ir.credential(n,s)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Eo{constructor(){super("github.com")}static credential(e){return ai._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Eo{constructor(){super("twitter.com")}static credential(e,n){return ai._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Tr.credential(n,s)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(i,e){return O_(i,"POST","/v1/accounts:signUp",Pa(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await Cn._fromIdTokenResponse(e,s,l),d=jm(s);return new Ur({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=jm(s);return new Ur({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function jm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(i){var l;if(wn(i.app))return Promise.reject(Or(i));const e=Aa(i);if(await e._initializationPromise,(l=e.currentUser)!=null&&l.isAnonymous)return new Ur({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await G1(e,{returnSecureToken:!0}),s=await Ur._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends jr{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,pa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new pa(e,n,s,l)}}function Q_(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?pa._fromErrorAndOperation(i,u,e,s):u})}async function q1(i,e,n=!1){const s=await ho(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Ur._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q1(i,e,n=!1){const{auth:s}=i;if(wn(s.app))return Promise.reject(Or(s));const l="reauthenticate";try{const u=await ho(i,Q_(s,l,e,i),n);Z(u.idToken,s,"internal-error");const d=Hd(u.idToken);Z(d,s,"internal-error");const{sub:f}=d;return Z(i.uid===f,s,"user-mismatch"),Ur._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Jn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y1(i,e,n=!1){if(wn(i.app))return Promise.reject(Or(i));const s="signIn",l=await Q_(i,s,e),u=await Ur._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function J1(i,e,n,s){return $t(i).onIdTokenChanged(e,n,s)}function X1(i,e,n){return $t(i).beforeAuthStateChanged(e,n)}const ma="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ma,"1"),this.storage.removeItem(ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=1e3,eI=10;class J_ extends Y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=H_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);P1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,eI):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}J_.type="LOCAL";const tI=J_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_ extends Y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X_.type="SESSION";const Z_=X_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new ba(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),m=await nI(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ba.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,m)=>{const g=Kd("",20);l.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(w){const C=w;if(C.data.eventId===g)switch(C.data.status){case"ack":clearTimeout(y),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(C.data.response);break;default:clearTimeout(y),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}function iI(i){bn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function sI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function lI(){return ey()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="firebaseLocalStorageDb",aI=1,ga="firebaseLocalStorage",ny="fbase_key";class Co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(i,e){return i.transaction([ga],e?"readwrite":"readonly").objectStore(ga)}function uI(){const i=indexedDB.deleteDatabase(ty);return new Co(i).toPromise()}function nd(){const i=indexedDB.open(ty,aI);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ga,{keyPath:ny})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ga)?e(s):(s.close(),await uI(),e(await nd()))})})}async function zm(i,e,n){const s=Oa(i,!0).put({[ny]:e,value:n});return new Co(s).toPromise()}async function cI(i,e){const n=Oa(i,!1).get(e),s=await new Co(n).toPromise();return s===void 0?null:s.value}function Wm(i,e){const n=Oa(i,!0).delete(e);return new Co(n).toPromise()}const dI=800,hI=3;class ry{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>hI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ba._getInstance(lI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await sI(),!this.activeServiceWorker)return;this.sender=new rI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nd();return await zm(e,ma,"1"),await Wm(e,ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>zm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>cI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Oa(l,!1).getAll();return new Co(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ry.type="LOCAL";const fI=ry;new So(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(i,e){return e?Kn(e):(Z(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends K_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mI(i){return Y1(i.auth,new qd(i),i.bypassAuthState)}function gI(i){const{auth:e,user:n}=i;return Z(n,e,"internal-error"),Q1(n,new qd(i),i.bypassAuthState)}async function _I(i){const{auth:e,user:n}=i;return Z(n,e,"internal-error"),q1(n,new qd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mI;case"linkViaPopup":case"linkViaRedirect":return _I;case"reauthViaPopup":case"reauthViaRedirect":return gI;default:Jn(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new So(2e3,1e4);class Mi extends iy{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,Mi.currentPopupAction&&Mi.currentPopupAction.cancel(),Mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yI.get())};e()}}Mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="pendingRedirect",Hl=new Map;class wI extends iy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Hl.get(this.auth._key());if(!e){try{const s=await SI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Hl.set(this.auth._key(),e)}return this.bypassAuthState||Hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SI(i,e){const n=II(e),s=CI(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function EI(i,e){Hl.set(i._key(),e)}function CI(i){return Kn(i._redirectPersistence)}function II(i){return Vl(vI,i.config.apiKey,i.name)}async function kI(i,e,n=!1){if(wn(i.app))return Promise.reject(Or(i));const s=Aa(i),l=pI(s,e),d=await new wI(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=600*1e3;class xI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!sy(e)){const l=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(An(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bm(e))}saveEventToCache(e){this.cachedEventUids.add(Bm(e)),this.lastProcessedEventTime=Date.now()}}function Bm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function sy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sy(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(i,e={}){return is(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AI=/^https?/;async function bI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await NI(i);for(const n of e)try{if(OI(n))return}catch{}Jn(i,"unauthorized-domain")}function OI(i){const e=ed(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!AI.test(n))return!1;if(PI.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new So(3e4,6e4);function Vm(){const i=bn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function LI(i){return new Promise((e,n)=>{var l,u,d;function s(){Vm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vm(),n(An(i,"network-request-failed"))},timeout:DI.get()})}if((u=(l=bn().gapi)==null?void 0:l.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((d=bn().gapi)!=null&&d.load)s();else{const f=j1("iframefcb");return bn()[f]=()=>{gapi.load?s():n(An(i,"network-request-failed"))},F1(`${U1()}?onload=${f}`).catch(m=>n(m))}}).catch(e=>{throw $l=null,e})}let $l=null;function MI(i){return $l=$l||LI(i),$l}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=new So(5e3,15e3),UI="__/auth/iframe",jI="emulator/auth/iframe",zI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BI(i){const e=i.config;Z(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Vd(e,jI):`https://${i.config.authDomain}/${UI}`,s={apiKey:e.apiKey,appName:i.name,v:Zi},l=WI.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Xi(s).slice(1)}`}async function VI(i){const e=await MI(i),n=bn().gapi;return Z(n,i,"internal-error"),e.open({where:document.body,url:BI(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zI,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=An(i,"network-request-failed"),f=bn().setTimeout(()=>{u(d)},FI.get());function m(){bn().clearTimeout(f),l(s)}s.ping(m).then(m,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$I=500,GI=600,KI="_blank",qI="http://localhost";class Hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QI(i,e,n,s=$I,l=GI){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m={...HI,width:s.toString(),height:l.toString(),top:u,left:d},g=Dt().toLowerCase();n&&(f=j_(g)?KI:n),F_(g)&&(e=e||qI,m.scrollbars="yes");const y=Object.entries(m).reduce((C,[N,M])=>`${C}${N}=${M},`,"");if(N1(g)&&f!=="_self")return YI(e||"",f),new Hm(null);const w=window.open(e||"",f,y);Z(w,i,"popup-blocked");try{w.focus()}catch{}return new Hm(w)}function YI(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="__/auth/handler",XI="emulator/auth/handler",ZI=encodeURIComponent("fac");async function $m(i,e,n,s,l,u){Z(i.config.authDomain,i,"auth-domain-config-required"),Z(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:Zi,eventId:l};if(e instanceof q_){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",ql(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))d[y]=w}if(e instanceof Eo){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(d.scopes=y.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const m=await i._getAppCheckToken(),g=m?`#${ZI}=${encodeURIComponent(m)}`:"";return`${ek(i)}?${Xi(f).slice(1)}${g}`}function ek({config:i}){return i.emulator?Vd(i,XI):`https://${i.authDomain}/${JI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="webStorageSupport";class tk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z_,this._completeRedirectFn=kI,this._overrideRedirectResult=EI}async _openPopup(e,n,s,l){var d;Xn((d=this.eventManagers[e._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const u=await $m(e,n,s,ed(),l);return QI(e,u,Kd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await $m(e,n,s,ed(),l);return iI(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(Xn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await VI(e),s=new xI(e);return n.register("authEvent",l=>(Z(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lc,{type:Lc},l=>{var d;const u=(d=l==null?void 0:l[0])==null?void 0:d[Lc];u!==void 0&&n(!!u),Jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return H_()||U_()||$d()}}const nk=tk;var Gm="@firebase/auth",Km="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sk(i){$i(new ii("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Z(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$_(i)},g=new L1(s,l,u,m);return W1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),$i(new ii("auth-internal",e=>{const n=Aa(e.getProvider("auth").getImmediate());return(s=>new rk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(Gm,Km,ik(i)),Pr(Gm,Km,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=300,lk=sg("authIdTokenMaxAge")||ok;let qm=null;const ak=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>lk)return;const l=n==null?void 0:n.token;qm!==l&&(qm=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function uk(i=hg()){const e=ud(i,"auth");if(e.isInitialized())return e.getImmediate();const n=z1(i,{popupRedirectResolver:nk,persistence:[fI,tI,Z_]}),s=sg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=ak(u.toString());X1(n,d,()=>d(n.currentUser)),J1(n,f=>d(f))}}const l=rg("auth");return l&&B1(n,`http://${l}`),n}function ck(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}M1({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=An("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",ck().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sk("Browser");const dk={apiKey:"AIzaSyBOvq0uk8BAFLAMdxkxS9c4HT_auQskIgo",authDomain:"mafia-game-76a11.firebaseapp.com",databaseURL:"https://mafia-game-76a11-default-rtdb.firebaseio.com",projectId:"mafia-game-76a11",storageBucket:"mafia-game-76a11.firebasestorage.app",messagingSenderId:"54653436715",appId:"1:54653436715:web:96c73590c206420b927b6e",measurementId:"G-BG79FEC1V5"},oy=dg(dk),me=u1(oy),hk=uk(oy),Fl={villager:{team:"village"},healer:{team:"village"},detective:{team:"village"},vigilante:{team:"village"},bodyguard:{team:"village"},seer:{team:"village"},mayor:{team:"village"},godfather:{team:"mafia"},mafioso:{team:"mafia"},consigliere:{team:"mafia"},bomber:{team:"mafia"},silencer:{team:"neutral"},serialKiller:{team:"neutral"},survivor:{team:"neutral"}},Qm=["DARK","COLD","GRIM","SLY","BOLD","WILD","RED","MAD","DEEP","PALE","LOUD"],Ym=["FOX","OWL","WOLF","FANG","MOON","CROW","DUSK","CLAW","BONE","RAGE","TOMB","FATE"];function fk(){const i=Qm[Math.floor(Math.random()*Qm.length)],e=Ym[Math.floor(Math.random()*Ym.length)],n=Math.floor(Math.random()*90+10);return`${i}${e}${n}`}function pk(){var de,Se;const[i,e]=ee.useState(null),[n,s]=ee.useState(null),[l,u]=ee.useState(!1),[d,f]=ee.useState([]),[m,g]=ee.useState({roles:{villager:3,healer:1,detective:1,godfather:1,mafioso:1},maxPlayers:7}),[y,w]=ee.useState(null),[C,N]=ee.useState([]),[M,W]=ee.useState(null),[Y,Le]=ee.useState(!0),xe=ee.useRef([]),Ye=ee.useRef(null);ee.useEffect(()=>{K1(hk).then($=>{e($.user.uid),Le(!1)}).catch(()=>{W("Failed to connect. Please refresh."),Le(!1)})},[]),ee.useEffect(()=>{Ye.current=n},[n]),ee.useEffect(()=>()=>{xe.current.forEach($=>$())},[]);const Ae=ee.useCallback(($,ie)=>{const Fe=pe(me,$),ze=t1(Fe,ie);return xe.current.push(()=>ze()),ze},[]),st=ee.useCallback($=>{xe.current.forEach(ie=>ie()),xe.current=[],Ae(`rooms/${$}/players`,ie=>{const Fe=ie.val()||{},ze=Object.entries(Fe).map(([ge,_e])=>({..._e,id:ge}));f(ze)}),Ae(`rooms/${$}/config`,ie=>{const Fe=ie.val();Fe&&g(Fe)}),Ae(`rooms/${$}/game`,ie=>{w(ie.val())}),Ae(`rooms/${$}/chat`,ie=>{const Fe=ie.val()||{},ze=Object.values(Fe).sort((ge,_e)=>(ge.timestamp||0)-(_e.timestamp||0));N(ze)})},[Ae]),Ge=ee.useCallback(async $=>{if(!i)return null;W(null);const ie=fk();return(await Vt(pe(me,`rooms/${ie}/meta`))).exists()?Ge($):(await Er(pe(me,`rooms/${ie}`),{meta:{hostId:i,roomCode:ie,status:"lobby",createdAt:Date.now()},config:{roles:{villager:3,healer:1,detective:1,godfather:1,mafioso:1},maxPlayers:7},players:{[i]:{name:$,isHost:!0,isReady:!1,joinedAt:Date.now()}}}),Am(pe(me,`rooms/${ie}/players/${i}`)).remove(),s(ie),u(!0),g({roles:{villager:3,healer:1,detective:1,godfather:1,mafioso:1},maxPlayers:7}),st(ie),ie)},[i,st]),ot=ee.useCallback(async($,ie)=>{if(!i)return{error:"Not connected yet"};W(null);const Fe=await Vt(pe(me,`rooms/${$}/meta`));if(!Fe.exists())return W("Room not found"),{error:"Room not found"};const ze=Fe.val();if(ze.status!=="lobby")return W("Game already started"),{error:"Game already started"};const ge=await Vt(pe(me,`rooms/${$}/players`)),_e=await Vt(pe(me,`rooms/${$}/config`)),he=ge.exists()?Object.keys(ge.val()).length:0,at=_e.exists()?_e.val().maxPlayers:20;return he>=at?(W("Room is full"),{error:"Room is full"}):(await Er(pe(me,`rooms/${$}/players/${i}`),{name:ie,isHost:!1,isReady:!1,joinedAt:Date.now()}),Am(pe(me,`rooms/${$}/players/${i}`)).remove(),s($),u(ze.hostId===i),st($),{success:!0})},[i,st]),St=ee.useCallback(async()=>{n&&i&&(await Ll(pe(me,`rooms/${n}/players/${i}`)),l&&await Ll(pe(me,`rooms/${n}`))),xe.current.forEach($=>$()),xe.current=[],s(null),u(!1),f([]),w(null),N([])},[n,i,l]),Gt=ee.useCallback(async $=>{!l||!n||await Ks(pe(me,`rooms/${n}/config`),$)},[l,n]),Kt=ee.useCallback(async()=>{if(!l||!n)return;const $=await Vt(pe(me,`rooms/${n}/config`)),ie=await Vt(pe(me,`rooms/${n}/players`)),Fe=$.val(),ze=Object.keys(ie.val()),ge=[];for(Object.entries(Fe.roles).forEach(([he,at])=>{for(let Mt=0;Mt<at;Mt++)ge.push(he)});ge.length<ze.length;)ge.push("villager");for(let he=ge.length-1;he>0;he--){const at=Math.floor(Math.random()*(he+1));[ge[he],ge[at]]=[ge[at],ge[he]]}const _e={};ze.forEach((he,at)=>{_e[he]={role:ge[at],alive:!0}}),await Ks(pe(me,`rooms/${n}`),{"meta/status":"playing","game/phase":"night","game/day":1,"game/winner":null,"game/showRoleReveal":!0,"game/assignments":_e,"game/nightActions":null,"game/votes":null,"game/eliminatedPlayers":null}),await Er(pe(me,`rooms/${n}/game/gameLog`),{0:{text:"Night falls on the village...",type:"system",timestamp:Date.now()}}),await Ll(pe(me,`rooms/${n}/chat`)),setTimeout(()=>{Ye.current&&Er(pe(me,`rooms/${Ye.current}/game/showRoleReveal`),!1)},4500)},[l,n]),tn=ee.useCallback(async $=>{!n||!i||await Er(pe(me,`rooms/${n}/game/nightActions/${i}`),{target:$,timestamp:Date.now()})},[n,i]),Lt=ee.useCallback(async()=>{var It,Qt,ut;if(!l||!n)return;const $=await Vt(pe(me,`rooms/${n}/game/nightActions`)),ie=await Vt(pe(me,`rooms/${n}/game/assignments`)),Fe=await Vt(pe(me,`rooms/${n}/game`)),ze=$.val()||{},ge=ie.val()||{},_e=Fe.val()||{},he=_e.day||1,Mt=(await Vt(pe(me,`rooms/${n}/players`))).val()||{};let yt=null,qt=null;Object.entries(ze).forEach(([Re,Ke])=>{var O;const Nt=(O=ge[Re])==null?void 0:O.role;(Nt==="mafioso"||Nt==="godfather")&&(yt=Ke.target),Nt==="healer"&&(qt=Ke.target)});let Ie=null;yt&&yt!==qt&&((It=ge[yt])!=null&&It.alive)&&(Ie=yt);const Ee={},Et=_e.gameLog?Object.keys(_e.gameLog).length:0,er=_e.eliminatedPlayers?Object.keys(_e.eliminatedPlayers).length:0;if(Ie){Ee[`game/assignments/${Ie}/alive`]=!1;const Re=((Qt=Mt[Ie])==null?void 0:Qt.name)||"Unknown",Ke=(ut=ge[Ie])==null?void 0:ut.role;Ee[`game/eliminatedPlayers/${er}`]={name:Re,role:Ke,phase:`Night ${he}`,playerId:Ie},Ee[`game/gameLog/${Et}`]={text:`Dawn breaks. ${Re} was found dead.`,type:"death",timestamp:Date.now()}}else Ee[`game/gameLog/${Et}`]={text:"Dawn breaks. Nobody died last night.",type:"system",timestamp:Date.now()};Ee["game/phase"]="day",Ee["game/nightActions"]=null;const nn={...ge};Ie&&(nn[Ie]={...nn[Ie],alive:!1});const hn=Object.values(nn).filter(Re=>{var Ke;return Re.alive&&((Ke=Fl[Re.role])==null?void 0:Ke.team)==="mafia"}).length,Ct=Object.values(nn).filter(Re=>{var Ke;return Re.alive&&((Ke=Fl[Re.role])==null?void 0:Ke.team)!=="mafia"}).length;if(hn===0){const Re=Et+1;Ee["game/winner"]="village",Ee[`game/gameLog/${Re}`]={text:"The Village wins!",type:"win",timestamp:Date.now()}}else if(hn>=Ct){const Re=Et+1;Ee["game/winner"]="mafia",Ee[`game/gameLog/${Re}`]={text:"The Mafia wins!",type:"win",timestamp:Date.now()}}await Ks(pe(me,`rooms/${n}`),Ee)},[l,n]),_t=ee.useCallback(async $=>{!n||!i||await Er(pe(me,`rooms/${n}/game/votes/${i}`),$)},[n,i]),tt=ee.useCallback(async()=>{var nn,hn;if(!l||!n)return;const $=await Vt(pe(me,`rooms/${n}/game/votes`)),ie=await Vt(pe(me,`rooms/${n}/game/assignments`)),Fe=await Vt(pe(me,`rooms/${n}/game`)),ze=$.val()||{},ge=ie.val()||{},_e=Fe.val()||{},he=_e.day||1,Mt=(await Vt(pe(me,`rooms/${n}/players`))).val()||{},yt={};Object.entries(ze).forEach(([Ct,It])=>{var Re;const ut=((Re=ge[Ct])==null?void 0:Re.role)==="mayor"?2:1;yt[It]=(yt[It]||0)+ut});const qt=Object.entries(yt).sort((Ct,It)=>It[1]-Ct[1]),Ie=qt.length>0?qt[0][0]:null,Ee={},Et=_e.gameLog?Object.keys(_e.gameLog).length:0,er=_e.eliminatedPlayers?Object.keys(_e.eliminatedPlayers).length:0;if(Ie){Ee[`game/assignments/${Ie}/alive`]=!1;const Ct=((nn=Mt[Ie])==null?void 0:nn.name)||"Unknown",It=(hn=ge[Ie])==null?void 0:hn.role;Ee[`game/eliminatedPlayers/${er}`]={name:Ct,role:It,phase:`Day ${he}`,playerId:Ie},Ee[`game/gameLog/${Et}`]={text:`${Ct} was eliminated by the village.`,type:"death",timestamp:Date.now()};const Qt={...ge};Qt[Ie]={...Qt[Ie],alive:!1};const ut=Object.values(Qt).filter(Ke=>{var Nt;return Ke.alive&&((Nt=Fl[Ke.role])==null?void 0:Nt.team)==="mafia"}).length,Re=Object.values(Qt).filter(Ke=>{var Nt;return Ke.alive&&((Nt=Fl[Ke.role])==null?void 0:Nt.team)!=="mafia"}).length;ut===0?(Ee["game/winner"]="village",Ee[`game/gameLog/${Et+1}`]={text:"The Village wins!",type:"win",timestamp:Date.now()}):ut>=Re?(Ee["game/winner"]="mafia",Ee[`game/gameLog/${Et+1}`]={text:"The Mafia wins!",type:"win",timestamp:Date.now()}):(Ee["game/phase"]="night",Ee["game/day"]=he+1,Ee[`game/gameLog/${Et+1}`]={text:`Night ${he+1} falls...`,type:"system",timestamp:Date.now()})}Ee["game/votes"]=null,await Ks(pe(me,`rooms/${n}`),Ee)},[l,n]),lt=ee.useCallback(async($,ie)=>{!n||!$.trim()||await ZC(pe(me,`rooms/${n}/chat`),{sender:ie,senderId:i,text:$.trim(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),timestamp:Date.now()})},[n,i]),Me=ee.useCallback(async()=>{n&&(await Ks(pe(me,`rooms/${n}`),{"meta/status":"lobby",game:null}),await Ll(pe(me,`rooms/${n}/chat`)))},[n]),be=((Se=(de=y==null?void 0:y.assignments)==null?void 0:de[i])==null?void 0:Se.role)||null,F=(y==null?void 0:y.phase)||null,K=(y==null?void 0:y.day)||1,U=(y==null?void 0:y.winner)||null,E=(y==null?void 0:y.showRoleReveal)||!1,R=(y==null?void 0:y.assignments)||{},te=(y==null?void 0:y.nightActions)||{},ne=(y==null?void 0:y.votes)||{},oe=y!=null&&y.eliminatedPlayers?Object.values(y.eliminatedPlayers):[],re=y!=null&&y.gameLog?Object.values(y.gameLog).sort(($,ie)=>($.timestamp||0)-(ie.timestamp||0)):[];return{userId:i,roomCode:n,isHost:l,players:d,roomConfig:m,error:M,loading:Y,myRole:be,phase:F,day:K,winner:U,showRoleReveal:E,assignments:R,nightActions:te,votes:ne,eliminatedPlayers:oe,gameLog:re,chatMessages:C,gameActive:F!==null&&!U,createRoom:Ge,joinRoom:ot,leaveRoom:St,updateConfig:Gt,startGame:Kt,submitNightAction:tn,resolveNight:Lt,submitVote:_t,resolveDay:tt,sendChat:lt,playAgain:Me}}const Sr={villager:{name:"Villager",team:"village",icon:"🧑‍🌾",description:"A regular villager. Votes during the day to eliminate suspects.",balance:0},healer:{name:"Healer",team:"village",icon:"🌿",description:"Each night, choose one player to protect from elimination.",balance:1.5},detective:{name:"Detective",team:"village",icon:"🔍",description:"Each night, investigate one player to learn their alignment.",balance:1.5},vigilante:{name:"Vigilante",team:"village",icon:"⚔️",description:"Can shoot one player at night. Use wisely — friendly fire is real.",balance:1},bodyguard:{name:"Bodyguard",team:"village",icon:"🛡️",description:"Protect a player at night. If they're attacked, you die instead.",balance:1},seer:{name:"Seer",team:"village",icon:"👁️",description:"Each night, see who a player visited (if anyone).",balance:1},mayor:{name:"Mayor",team:"village",icon:"🎩",description:"Your vote counts as 2 during day eliminations.",balance:.8},godfather:{name:"Godfather",team:"mafia",icon:"🎭",description:"Leads the mafia. Appears innocent to the Detective once — after that, shows as guilty.",balance:2},mafioso:{name:"Mafioso",team:"mafia",icon:"🔪",description:"Carries out the mafia's kill each night.",balance:1.5},consigliere:{name:"Consigliere",team:"mafia",icon:"📋",description:"Investigates a player each night to learn their exact role.",balance:1.5},bomber:{name:"Bomber",team:"mafia",icon:"💣",description:"Once per game, can plant a bomb that kills a player the next day.",balance:1.2},silencer:{name:"Silencer",team:"neutral",icon:"🤫",description:"Silences a player — they cannot speak or vote the next day. Wins if alive at the end.",balance:0},serialKiller:{name:"Serial Killer",team:"neutral",icon:"🩸",description:"Kills independently each night. Must be last one standing.",balance:0},survivor:{name:"Survivor",team:"neutral",icon:"🏃",description:"Just wants to survive. Wins with whichever team is left.",balance:0}},mk={classic:{name:"Classic",players:7,roles:{villager:3,healer:1,detective:1,godfather:1,mafioso:1}},chaos:{name:"Chaos",players:10,roles:{villager:2,healer:1,detective:1,vigilante:1,bodyguard:1,godfather:1,mafioso:1,bomber:1,serialKiller:1}},deception:{name:"Deception",players:9,roles:{villager:2,detective:1,seer:1,mayor:1,godfather:1,consigliere:1,silencer:1,bomber:1}},bigGame:{name:"Big Game",players:14,roles:{villager:4,healer:1,detective:1,vigilante:1,bodyguard:1,seer:1,godfather:1,mafioso:2,consigliere:1,bomber:1}}},Bi={village:{p:"#6ee7b7",s:"#34d399",bg:"rgba(52,211,153,0.06)",bdr:"rgba(52,211,153,0.18)"},mafia:{p:"#fda4af",s:"#fb7185",bg:"rgba(251,113,133,0.06)",bdr:"rgba(251,113,133,0.18)"},neutral:{p:"#c4b5fd",s:"#a78bfa",bg:"rgba(167,139,250,0.06)",bdr:"rgba(167,139,250,0.18)"}},Ul=`
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#06060b;--sf:rgba(255,255,255,0.018);--s:rgba(255,255,255,0.03);
  --sh:rgba(255,255,255,0.05);--b:rgba(255,255,255,0.055);--bh:rgba(255,255,255,0.12);
  --t:#ede9df;--ts:#c5c0b2;--td:#847e70;--tm:#4a463d;
  --red:#fb7185;--redbg:rgba(251,113,133,0.08);
  --fd:'DM Serif Display',Georgia,serif;--fm:'IBM Plex Mono','Courier New',monospace;
}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes scaleUp{from{opacity:0;transform:scale(0.88)}to{opacity:1;transform:scale(1)}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes roleFlip{0%{transform:perspective(800px) rotateY(100deg) scale(0.7);opacity:0}50%{transform:perspective(800px) rotateY(-5deg) scale(1.06);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1)}}
@keyframes grain{0%,100%{transform:translate(0,0)}25%{transform:translate(-2%,-3%)}50%{transform:translate(3%,1%)}75%{transform:translate(-1%,2%)}}
@keyframes orbFloat1{0%{transform:translate(0,0) scale(1)}33%{transform:translate(30%,20%) scale(1.2)}66%{transform:translate(-20%,10%) scale(0.9)}100%{transform:translate(0,0) scale(1)}}
@keyframes orbFloat2{0%{transform:translate(0,0) scale(1)}33%{transform:translate(-25%,15%) scale(0.8)}66%{transform:translate(15%,-20%) scale(1.15)}100%{transform:translate(0,0) scale(1)}}
input:focus,textarea:focus{outline:none;border-color:var(--bh) !important}
button{cursor:pointer;border:none;background:none;font-family:var(--fm);transition:all 0.25s cubic-bezier(0.22,1,0.36,1)}
button:hover{transform:translateY(-1px)}button:active{transform:translateY(0) scale(0.97)}
html,body,#root{overflow-x:hidden;width:100%;max-width:100vw;position:relative}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.07);border-radius:3px}
.wrap{position:relative;z-index:1;max-width:940px;margin:0 auto;padding:28px 28px 80px;width:100%;box-sizing:border-box}
.lobby-grid{display:grid;grid-template-columns:320px 1fr;gap:32px}
.game-grid{display:grid;grid-template-columns:1fr 280px;gap:22px}
.home-title{font-family:var(--fd);font-size:72px;font-weight:400;color:var(--t);letter-spacing:2px;line-height:1}
.home-icon{font-size:80px;margin-bottom:16px}
.home-sub{font-family:var(--fm);font-size:10px;color:var(--td);letter-spacing:6px;text-transform:uppercase;margin-top:14px}
.room-code{font-family:var(--fd);font-size:40px;color:var(--red);letter-spacing:3px;word-break:break-all}
.lobby-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:36px;gap:12px;flex-wrap:wrap}
.role-reveal-icon{font-size:110px;margin-bottom:24px}
.role-reveal-name{font-family:var(--fd);font-size:56px;margin-bottom:12px}
.role-reveal-wrap{padding:20px}
.phase-bar{padding:18px 26px;margin-bottom:26px;display:flex;justify-content:space-between;align-items:center;gap:12px}
.phase-title{font-family:var(--fd);font-size:26px;margin-top:4px}
.winner-icon{font-size:120px;margin-bottom:28px}
.winner-title{font-family:var(--fd);font-size:60px;margin-bottom:16px;line-height:1}
.target-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(108px,1fr));gap:8px}
.action-panel{padding:26px}
.action-title{font-family:var(--fd);font-size:22px;color:var(--t);margin-bottom:4px}
.player-count-num{font-family:var(--fd);font-size:56px;color:var(--t);line-height:1}
.preset-row{display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap}
.glass-pad{padding:22px 28px}
.role-card{overflow:visible}
.role-card-row{display:flex;align-items:center;gap:10px}
.role-card-desc{font-family:var(--fm);font-size:9px;color:var(--td);line-height:1.6;margin-top:6px;padding-left:44px}
.error-msg{font-family:var(--fm);font-size:10px;color:#fb7185;text-align:center;padding:8px;animation:fadeIn 0.3s ease}
@media(max-width:768px){
  .wrap{padding:16px 12px 40px}
  .lobby-grid{grid-template-columns:1fr !important;gap:20px}
  .game-grid{grid-template-columns:1fr !important;gap:16px}
  .home-title{font-size:42px;letter-spacing:1px}
  .home-icon{font-size:52px;margin-bottom:10px}
  .home-sub{font-size:8px;letter-spacing:4px}
  .room-code{font-size:20px;letter-spacing:2px}
  .lobby-header{margin-bottom:20px}
  .role-reveal-icon{font-size:64px;margin-bottom:14px}
  .role-reveal-name{font-size:32px;margin-bottom:8px}
  .role-reveal-wrap{padding:16px}
  .phase-bar{padding:14px 16px;margin-bottom:16px;flex-direction:column;align-items:flex-start;gap:8px}
  .phase-title{font-size:16px}
  .winner-icon{font-size:64px;margin-bottom:16px}
  .winner-title{font-size:34px}
  .target-grid{grid-template-columns:repeat(auto-fill,minmax(80px,1fr)) !important;gap:6px}
  .action-panel{padding:16px}
  .action-title{font-size:18px}
  .player-count-num{font-size:40px}
  .preset-row{gap:4px}
  .preset-row button{font-size:9px !important;padding:8px 6px !important}
  .glass-pad{padding:16px 14px}
  .role-card-row{gap:8px}
  .role-card-desc{font-size:8px;padding-left:0;margin-top:8px;line-height:1.6}
}
`;function jl(){return I.jsx("div",{style:{position:"fixed",inset:0,zIndex:999,pointerEvents:"none",opacity:.02,mixBlendMode:"overlay",background:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,animation:"grain 0.5s steps(1) infinite"}})}function zl({variant:i}){const e={home:[{c:"rgba(180,40,80,0.12)",sz:500,x:"15%",y:"20%",a:"orbFloat1 20s ease infinite"},{c:"rgba(40,40,160,0.09)",sz:400,x:"75%",y:"70%",a:"orbFloat2 25s ease infinite"}],lobby:[{c:"rgba(160,60,60,0.08)",sz:450,x:"80%",y:"20%",a:"orbFloat2 22s ease infinite"},{c:"rgba(50,100,50,0.07)",sz:350,x:"20%",y:"75%",a:"orbFloat1 28s ease infinite"}],night:[{c:"rgba(30,30,140,0.15)",sz:600,x:"30%",y:"25%",a:"orbFloat1 18s ease infinite"},{c:"rgba(80,20,120,0.1)",sz:400,x:"70%",y:"70%",a:"orbFloat2 22s ease infinite"}],day:[{c:"rgba(140,120,20,0.1)",sz:500,x:"60%",y:"20%",a:"orbFloat2 20s ease infinite"},{c:"rgba(120,80,10,0.07)",sz:350,x:"25%",y:"65%",a:"orbFloat1 26s ease infinite"}]};return I.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden",width:"100vw",height:"100vh"},children:(e[i]||e.home).map((n,s)=>I.jsx("div",{style:{position:"absolute",width:`min(${n.sz}px, 80vw)`,height:`min(${n.sz}px, 80vw)`,borderRadius:"50%",background:`radial-gradient(circle,${n.c},transparent 70%)`,left:n.x,top:n.y,animation:n.a,filter:"blur(60px)"}},s))})}function en({children:i,style:e,glow:n,onClick:s,className:l}){return I.jsx("div",{className:l,onClick:s,style:{background:"rgba(255,255,255,0.02)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid var(--b)",borderRadius:18,boxShadow:n?`0 0 40px ${n}0d,inset 0 1px 0 rgba(255,255,255,0.05)`:"inset 0 1px 0 rgba(255,255,255,0.04),0 4px 24px rgba(0,0,0,0.15)",transition:"all 0.3s ease",...e},children:i})}function Jm({name:i,size:e=40,glow:n}){const s=(i||"").split("").reduce((l,u)=>l+u.charCodeAt(0),0)%360;return I.jsx("div",{style:{width:e,height:e,borderRadius:"50%",flexShrink:0,background:`conic-gradient(from ${s}deg,hsl(${s},35%,26%),hsl(${s+40},30%,20%),hsl(${s},35%,26%))`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--fm)",fontSize:e*.36,color:"rgba(255,255,255,0.85)",fontWeight:600,boxShadow:n?`0 0 24px ${n}30`:"0 2px 8px rgba(0,0,0,0.3)",border:n?`2px solid ${n}50`:"2px solid rgba(255,255,255,0.05)",transition:"all 0.3s"},children:(i||"?")[0].toUpperCase()})}function gk(){return I.jsx("div",{style:{height:1,background:"linear-gradient(90deg,transparent,var(--bh),transparent)",margin:"14px 0"}})}function _k({roles:i}){let e=0,n=0,s=0,l=0;Object.entries(i).forEach(([C,N])=>{if(N<=0)return;const M=Sr[C];M&&(M.team==="village"?(e+=M.balance*N,s+=N):M.team==="mafia"&&(n+=M.balance*N,l+=N))});const u=Object.values(i).reduce((C,N)=>C+N,0),d=u>0?l/u:0,f=1-Math.abs(d-.28)/.28,m=1-Math.min(Math.abs((e>0?n/e:0)-.55)/.55,1),g=Math.max(0,Math.min(100,(f*.5+m*.5)*100)),y=g>70?"#34d399":g>45?"#fbbf24":"#fb7185",w=g>70?"Balanced":g>45?"Tilted":"Unbalanced";return I.jsxs(en,{style:{padding:"14px 18px",marginBottom:14},children:[I.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[I.jsx("span",{style:{fontFamily:"var(--fd)",fontSize:14,color:"var(--t)"},children:"Balance"}),I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:9,color:y,fontWeight:600,padding:"3px 10px",background:`${y}12`,borderRadius:20,border:`1px solid ${y}25`},children:w})]}),I.jsx("div",{style:{height:4,background:"rgba(255,255,255,0.04)",borderRadius:10,overflow:"hidden",marginBottom:10},children:I.jsx("div",{style:{height:"100%",width:`${g}%`,background:`linear-gradient(90deg,${y},${y}88)`,borderRadius:10,transition:"width 0.6s cubic-bezier(0.22,1,0.36,1)"}})}),I.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"var(--fm)",fontSize:8,color:"var(--td)",flexWrap:"wrap",gap:4},children:[I.jsxs("span",{style:{color:Bi.village.s},children:["Village ",s]}),I.jsxs("span",{children:[(d*100).toFixed(0),"% mafia"]}),I.jsxs("span",{style:{color:Bi.mafia.s},children:["Mafia ",l]})]})]})}function yk({role:i,count:e,onChange:n,disabled:s}){const l=Bi[i.team];return I.jsxs(en,{className:"role-card",style:{padding:"12px 14px",opacity:e>0?1:.4,borderColor:e>0?l.bdr:"var(--b)"},glow:e>0?l.s:null,children:[I.jsxs("div",{className:"role-card-row",children:[I.jsx("div",{style:{width:34,height:34,borderRadius:10,background:e>0?l.bg:"var(--sf)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,flexShrink:0},children:i.icon}),I.jsxs("div",{style:{flex:1,minWidth:0},children:[I.jsx("span",{style:{fontFamily:"var(--fd)",fontSize:13,color:"var(--t)"},children:i.name}),I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:7,color:l.s,letterSpacing:1,textTransform:"uppercase",marginLeft:6},children:i.team})]}),!s&&I.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3,flexShrink:0},children:[I.jsx("button",{onClick:()=>n(Math.max(0,e-1)),style:{width:28,height:28,borderRadius:8,border:"1px solid var(--b)",background:"var(--sf)",color:"var(--ts)",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"},children:"−"}),I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:15,color:"var(--t)",width:22,textAlign:"center",fontWeight:600},children:e}),I.jsx("button",{onClick:()=>n(e+1),style:{width:28,height:28,borderRadius:8,border:`1px solid ${l.bdr}`,background:l.bg,color:l.s,fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"},children:"+"})]}),s&&I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:15,color:"var(--t)",fontWeight:600},children:e})]}),I.jsx("div",{className:"role-card-desc",children:i.description})]})}function vk(){var Nt;const i=pk(),{userId:e,roomCode:n,isHost:s,players:l,roomConfig:u,error:d,loading:f,myRole:m,phase:g,day:y,winner:w,showRoleReveal:C,assignments:N,nightActions:M,votes:W,eliminatedPlayers:Y,gameLog:Le,chatMessages:xe,createRoom:Ye,joinRoom:Ae,leaveRoom:st,updateConfig:Ge,startGame:ot,submitNightAction:St,resolveNight:Gt,submitVote:Kt,resolveDay:tn,sendChat:Lt,playAgain:_t}=i,[tt,lt]=ee.useState("home"),[Me,be]=ee.useState(""),[F,K]=ee.useState(""),[U,E]=ee.useState(null),[R,te]=ee.useState(""),[ne,oe]=ee.useState(!1),[re,Ce]=ee.useState("village"),[de,Se]=ee.useState(null),[$,ie]=ee.useState(!1),[Fe,ze]=ee.useState(!1),ge=ee.useRef(null),_e=(u==null?void 0:u.roles)||{},he=(u==null?void 0:u.maxPlayers)||7,at=Object.values(_e).reduce((O,ce)=>O+ce,0),Mt=Math.max(0,he-at);ee.useEffect(()=>{g&&tt==="lobby"&&lt("game")},[g,tt]),ee.useEffect(()=>{if(C){oe(!0);const O=setTimeout(()=>oe(!1),4500);return()=>clearTimeout(O)}else oe(!1)},[C]),ee.useEffect(()=>{ie(!1),ze(!1),E(null)},[g,y]),ee.useEffect(()=>{var O;(O=ge.current)==null||O.scrollIntoView({behavior:"smooth"})},[xe]),ee.useEffect(()=>{if(!s||g!=="night"||!N)return;const O=Object.entries(N).filter(([,G])=>{if(!G.alive)return!1;const ye=G.role;return ye!=="villager"&&ye!=="mayor"&&ye!=="survivor"});if(O.length===0)return;const ce=Object.keys(M).length;if(ce>0&&ce>=O.length){const G=setTimeout(()=>Gt(),1500);return()=>clearTimeout(G)}},[s,g,N,M,Gt]),ee.useEffect(()=>{if(!s||g!=="day"||!N)return;const O=Object.values(N).filter(G=>G.alive).length,ce=Object.keys(W).length;if(ce>0&&ce>=O){const G=setTimeout(()=>tn(),1500);return()=>clearTimeout(G)}},[s,g,N,W,tn]);const yt=N?Object.entries(N).filter(([,O])=>O.alive).map(([O,ce])=>{var G;return{id:O,...ce,name:((G=l.find(ye=>ye.id===O))==null?void 0:G.name)||"?"}}):[],qt=async()=>{if(!Me.trim())return;await Ye(Me.trim())&&lt("lobby")},Ie=async()=>{if(!Me.trim()||!F.trim())return;Se(null);const O=await Ae(F.trim(),Me.trim());O.error?Se(O.error):lt("lobby")},Ee=async()=>{await st(),lt("home")},Et=()=>ot(),er=async()=>{!U||$||(await St(U),ie(!0))},nn=async O=>{Fe||(await Kt(O),ze(!0))},hn=()=>{R.trim()&&(Lt(R,Me),te(""))},Ct=O=>{const ce=Math.max(4,Math.min(20,O)),G={..._e},ye=Object.values(G).reduce((Je,Dn)=>Je+Dn,0);ye>ce&&(G.villager=Math.max(0,(G.villager||0)-(ye-ce))),Ge({maxPlayers:ce,roles:G})},It=(O,ce)=>{const G=Object.entries(_e).filter(([Je])=>Je!==O).reduce((Je,[,Dn])=>Je+Dn,0),ye=Math.max(0,Math.min(he-G,ce));Ge({roles:{..._e,[O]:ye}})},Qt=async()=>{await _t(),lt("lobby")},ut={minHeight:"100vh",background:"var(--bg)",color:"var(--t)",fontFamily:"var(--fm)",position:"relative",overflowX:"hidden",width:"100%"},Re={width:"100%",padding:"15px 20px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--b)",borderRadius:14,color:"var(--t)",fontFamily:"var(--fm)",fontSize:13,transition:"border 0.3s"},Ke={padding:"18px",background:"linear-gradient(135deg,#be123c,#9f1239)",borderRadius:14,color:"#fff",fontFamily:"var(--fd)",fontSize:20,boxShadow:"0 12px 40px rgba(190,18,60,0.25),inset 0 1px 0 rgba(255,255,255,0.1)",width:"100%"};if(f)return I.jsxs("div",{style:{...ut,display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"},children:[I.jsx("style",{children:Ul}),I.jsx(jl,{}),I.jsx(zl,{variant:"home"}),I.jsx("div",{style:{fontFamily:"var(--fd)",fontSize:24,color:"var(--td)",animation:"fadeIn 0.5s ease",position:"relative",zIndex:1},children:"Connecting..."})]});if(tt==="home")return I.jsxs("div",{style:ut,children:[I.jsx("style",{children:Ul}),I.jsx(jl,{}),I.jsx(zl,{variant:"home"}),I.jsxs("div",{className:"wrap",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh"},children:[I.jsxs("div",{style:{textAlign:"center",marginBottom:60,animation:"fadeUp 1s ease"},children:[I.jsx("div",{className:"home-icon",style:{animation:"float 5s ease infinite",filter:"drop-shadow(0 0 50px rgba(251,113,133,0.2))"},children:"🎭"}),I.jsx("h1",{className:"home-title",children:"Mafia"}),I.jsx("p",{className:"home-sub",children:"Deception · Strategy · Survival"})]}),I.jsxs("div",{style:{width:"100%",maxWidth:380,animation:"fadeUp 1s ease 0.15s both"},children:[I.jsx("input",{type:"text",placeholder:"Enter your name",value:Me,onChange:O=>be(O.target.value),style:{...Re,marginBottom:4,textAlign:"center",fontSize:15},autoComplete:"off",autoCorrect:"off",spellCheck:"false"}),!Me.trim()&&I.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)",textAlign:"center",marginBottom:12},children:"Name required to create or join"}),Me.trim()&&I.jsx("div",{style:{height:18,marginBottom:4}}),I.jsx("button",{onClick:qt,style:Ke,children:"Create Room"}),I.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,margin:"22px 0"},children:[I.jsx("div",{style:{flex:1,height:1,background:"linear-gradient(90deg,transparent,var(--b),transparent)"}}),I.jsx("span",{style:{fontSize:9,color:"var(--tm)",letterSpacing:4},children:"OR JOIN"}),I.jsx("div",{style:{flex:1,height:1,background:"linear-gradient(90deg,transparent,var(--b),transparent)"}})]}),I.jsxs("div",{style:{display:"flex",gap:8},children:[I.jsx("input",{type:"text",placeholder:"DARKWOLF42",value:F,onChange:O=>K(O.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"")),maxLength:12,style:{...Re,textAlign:"center",letterSpacing:2,fontSize:14,fontWeight:600},autoComplete:"off",autoCorrect:"off",autoCapitalize:"characters",spellCheck:"false",onKeyDown:O=>O.key==="Enter"&&Ie()}),I.jsx("button",{onClick:Ie,style:{padding:"15px 28px",background:"var(--s)",border:"1px solid var(--bh)",borderRadius:14,color:"var(--t)",fontSize:12,fontWeight:500},children:"Join"})]}),(de||d)&&I.jsx("div",{className:"error-msg",children:de||d})]})]})]});if(tt==="lobby")return I.jsxs("div",{style:ut,children:[I.jsx("style",{children:Ul}),I.jsx(jl,{}),I.jsx(zl,{variant:"lobby"}),I.jsxs("div",{className:"wrap",children:[I.jsxs("div",{className:"lobby-header",style:{animation:"fadeUp 0.5s ease"},children:[I.jsxs("div",{children:[I.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:5,marginBottom:6},children:"ROOM CODE"}),I.jsx("div",{className:"room-code",children:n})]}),I.jsx("button",{onClick:Ee,style:{padding:"10px 22px",background:"var(--s)",border:"1px solid var(--b)",borderRadius:10,color:"var(--td)",fontSize:11,flexShrink:0},children:"← Leave"})]}),I.jsxs("div",{className:"lobby-grid",children:[I.jsxs("div",{children:[I.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,marginBottom:18},children:[I.jsx("span",{style:{fontFamily:"var(--fd)",fontSize:22,color:"var(--t)"},children:"Players"}),I.jsxs("span",{style:{fontFamily:"var(--fm)",fontSize:12,color:"var(--td)"},children:[l.length,I.jsxs("span",{style:{color:"var(--tm)"},children:["/",he]})]})]}),I.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:16},children:[l.map((O,ce)=>I.jsxs(en,{style:{padding:"12px 16px",display:"flex",alignItems:"center",gap:12,animation:`fadeUp 0.3s ease ${ce*.05}s both`},children:[I.jsx(Jm,{name:O.name,size:34}),I.jsx("span",{style:{flex:1,fontFamily:"var(--fd)",fontSize:14,color:"var(--t)"},children:O.name}),O.isHost&&I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:7,color:"#fbbf24",background:"rgba(251,191,36,0.1)",padding:"3px 10px",borderRadius:20,letterSpacing:2},children:"HOST"}),O.id===e&&I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:7,color:"#93c5fd",background:"rgba(147,197,253,0.1)",padding:"3px 8px",borderRadius:20},children:"YOU"})]},O.id)),Array.from({length:Math.max(0,he-l.length)}).map((O,ce)=>I.jsx("div",{style:{padding:"14px 16px",borderRadius:18,border:"1px dashed rgba(255,255,255,0.04)",textAlign:"center",fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)"},children:"waiting for player..."},`e${ce}`))]}),s&&l.length>=4&&I.jsx("button",{onClick:Et,style:Ke,children:"Start Game"}),s&&l.length<4&&I.jsx(en,{style:{padding:14,textAlign:"center"},children:I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:10,color:"#fbbf24"},children:"Need at least 4 players"})}),!s&&I.jsx(en,{style:{padding:14,textAlign:"center"},children:I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:10,color:"var(--td)"},children:"Waiting for host to start..."})})]}),I.jsxs("div",{children:[I.jsxs(en,{className:"glass-pad",style:{marginBottom:18},children:[I.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:16},children:"PLAYER COUNT"}),I.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:24,marginBottom:16},children:[s&&I.jsx("button",{onClick:()=>Ct(he-1),style:{width:44,height:44,borderRadius:13,border:"1px solid var(--b)",background:"var(--sf)",color:"var(--ts)",fontSize:22,display:"flex",alignItems:"center",justifyContent:"center"},children:"−"}),I.jsx("div",{style:{textAlign:"center",minWidth:70},children:I.jsx("div",{className:"player-count-num",children:he})}),s&&I.jsx("button",{onClick:()=>Ct(he+1),style:{width:44,height:44,borderRadius:13,border:"1px solid rgba(251,113,133,0.2)",background:"var(--redbg)",color:"var(--red)",fontSize:22,display:"flex",alignItems:"center",justifyContent:"center"},children:"+"})]}),s&&I.jsx("div",{style:{display:"flex",gap:5,justifyContent:"center",marginBottom:16,flexWrap:"wrap"},children:[5,6,7,8,10,12,15].map(O=>I.jsx("button",{onClick:()=>Ct(O),style:{padding:"6px 10px",borderRadius:8,fontSize:10,fontWeight:he===O?600:400,background:he===O?"var(--redbg)":"var(--sf)",border:`1px solid ${he===O?"rgba(251,113,133,0.2)":"var(--b)"}`,color:he===O?"var(--red)":"var(--tm)"},children:O},O))}),I.jsx(gk,{}),I.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"var(--fm)",fontSize:9,flexWrap:"wrap",gap:4},children:[I.jsxs("span",{style:{color:"var(--td)"},children:["Roles: ",I.jsx("span",{style:{color:at>he?"#fb7185":"#34d399",fontWeight:600},children:at}),"/",he]}),Mt>0&&I.jsxs("span",{style:{color:"#fbbf24"},children:["+",Mt," villager",Mt!==1?"s":""]})]})]}),s&&I.jsx("div",{className:"preset-row",children:Object.entries(mk).map(([O,ce])=>{const G=Object.values(ce.roles).reduce((ye,Je)=>ye+Je,0);return I.jsx("button",{onClick:()=>Ge({roles:{...Object.fromEntries(Object.keys(Sr).map(ye=>[ye,0])),...ce.roles},maxPlayers:G}),style:{flex:1,padding:"11px 8px",background:"var(--s)",border:"1px solid var(--b)",borderRadius:12,color:"var(--ts)",fontSize:10,fontWeight:500},children:ce.name},O)})}),I.jsx(_k,{roles:{..._e,villager:(_e.villager||0)+Mt}}),I.jsx("div",{style:{display:"flex",gap:3,marginBottom:12},children:["village","mafia","neutral"].map(O=>{const ce=Bi[O];return I.jsx("button",{onClick:()=>Ce(O),style:{flex:1,padding:"10px",background:re===O?ce.bg:"transparent",border:`1px solid ${re===O?ce.bdr:"var(--b)"}`,borderRadius:11,color:re===O?ce.p:"var(--tm)",fontSize:9,letterSpacing:2,textTransform:"uppercase",fontWeight:re===O?600:400},children:O},O)})}),I.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,maxHeight:450,overflowY:"auto",paddingRight:4},children:Object.entries(Sr).filter(([,O])=>O.team===re).map(([O,ce])=>I.jsx(yk,{role:ce,count:_e[O]||0,onChange:G=>It(O,G),disabled:!s},O))})]})]})]})]});if(tt==="game"){const O=Sr[m],ce=Bi[(O==null?void 0:O.team)||"village"];return I.jsxs("div",{style:ut,children:[I.jsx("style",{children:Ul}),I.jsx(jl,{}),I.jsx(zl,{variant:g||"night"}),ne&&O&&I.jsx("div",{style:{position:"fixed",inset:0,zIndex:100,background:"rgba(4,4,8,0.97)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",animation:"fadeIn 0.5s ease"},children:I.jsxs("div",{className:"role-reveal-wrap",style:{animation:"roleFlip 1.2s cubic-bezier(0.22,1,0.36,1)",textAlign:"center"},children:[I.jsx("div",{className:"role-reveal-icon",style:{filter:`drop-shadow(0 0 70px ${ce.s}40)`},children:O.icon}),I.jsx("div",{className:"role-reveal-name",style:{color:ce.p},children:O.name}),I.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:11,color:"var(--td)",maxWidth:360,lineHeight:1.8,margin:"0 auto",padding:"0 16px"},children:O.description}),I.jsxs("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:ce.s,letterSpacing:5,marginTop:28,textTransform:"uppercase"},children:["Team ",O.team]})]})}),I.jsxs("div",{className:"wrap",children:[I.jsxs(en,{className:"phase-bar",glow:g==="night"?"#6366f1":"#eab308",children:[I.jsxs("div",{children:[I.jsxs("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:5},children:[g==="night"?"🌙 NIGHT":"☀️ DAY"," ",y]}),I.jsx("div",{className:"phase-title",style:{color:g==="night"?"#a5b4fc":"#fde68a"},children:g==="night"?"The village sleeps...":"The village awakens"})]}),I.jsxs("div",{style:{textAlign:"right"},children:[I.jsxs("div",{style:{fontFamily:"var(--fm)",fontSize:11,color:"var(--td)",display:"flex",alignItems:"center",gap:8,justifyContent:"flex-end"},children:[I.jsx("span",{style:{fontSize:22},children:O==null?void 0:O.icon}),O==null?void 0:O.name]}),I.jsxs("div",{style:{fontFamily:"var(--fm)",fontSize:9,color:ce.s,marginTop:4},children:[yt.length," alive"]})]})]}),w?I.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",animation:"fadeUp 0.8s ease"},children:[I.jsx("div",{className:"winner-icon",style:{filter:`drop-shadow(0 0 80px ${w==="village"?"rgba(52,211,153,0.35)":"rgba(251,113,133,0.35)"})`},children:w==="village"?"🧑‍🌾":"🎭"}),I.jsx("h2",{className:"winner-title",style:{color:w==="village"?"#6ee7b7":"#fda4af"},children:w==="village"?"Village Wins":"Mafia Wins"}),I.jsx("p",{style:{fontFamily:"var(--fm)",fontSize:11,color:"var(--td)",maxWidth:400,margin:"0 auto 48px",lineHeight:1.7},children:w==="village"?"Justice prevails. Every last mafioso has been found.":"The mafia has seized control. The village falls silent."}),I.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginBottom:52},children:Object.entries(N).map(([G,ye])=>{var di,Ln,Mn,ss;const Je=Bi[((di=Sr[ye.role])==null?void 0:di.team)||"village"],Dn=((Ln=l.find(Io=>Io.id===G))==null?void 0:Ln.name)||"?";return I.jsxs(en,{style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:10,opacity:ye.alive?1:.25},glow:ye.alive?Je.s:null,children:[I.jsx("span",{style:{fontSize:18},children:(Mn=Sr[ye.role])==null?void 0:Mn.icon}),I.jsx("span",{style:{fontFamily:"var(--fd)",fontSize:12,color:"var(--t)"},children:Dn}),I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:8,color:Je.p},children:(ss=Sr[ye.role])==null?void 0:ss.name})]},G)})}),s&&I.jsx("button",{onClick:Qt,style:{...Ke,width:"auto",padding:"18px 56px",display:"inline-block"},children:"Play Again"}),!s&&I.jsx(en,{style:{padding:14,textAlign:"center"},children:I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:10,color:"var(--td)"},children:"Waiting for host..."})})]}):I.jsxs("div",{className:"game-grid",children:[I.jsxs("div",{children:[I.jsxs(en,{className:"action-panel",style:{marginBottom:18},children:[I.jsx("div",{className:"action-title",children:g==="night"?"Choose your target":"Vote to eliminate"}),I.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)",marginBottom:24},children:$?"Action submitted. Waiting for others...":Fe?"Vote submitted. Waiting for others...":g==="night"?"Select a player to use your ability on":"The village must decide who to send away"}),!$&&!Fe&&I.jsx("div",{className:"target-grid",children:yt.filter(G=>G.id!==e).map((G,ye)=>{const Je=U===G.id;return I.jsxs("button",{onClick:()=>g==="night"?E(G.id):nn(G.id),style:{padding:"18px 8px",background:Je?"var(--redbg)":"var(--sf)",border:`1px solid ${Je?"rgba(251,113,133,0.25)":"var(--b)"}`,borderRadius:16,color:"var(--t)",textAlign:"center",animation:`scaleUp 0.3s ease ${ye*.04}s both`},children:[I.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10},children:I.jsx(Jm,{name:G.name,size:46,glow:Je?"var(--red)":null})}),I.jsx("div",{style:{fontFamily:"var(--fd)",fontSize:12},children:G.name})]},G.id)})}),g==="night"&&U&&!$&&I.jsxs("button",{onClick:er,style:{marginTop:20,width:"100%",padding:"15px",background:"linear-gradient(135deg,#1e40af,#2563eb)",borderRadius:13,color:"#fff",fontFamily:"var(--fm)",fontSize:11,fontWeight:600,letterSpacing:.5,boxShadow:"0 10px 32px rgba(37,99,235,0.25),inset 0 1px 0 rgba(255,255,255,0.1)"},children:["Confirm · ",(Nt=yt.find(G=>G.id===U))==null?void 0:Nt.name]})]}),I.jsxs(en,{style:{padding:20,maxHeight:210,overflowY:"auto"},children:[I.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:12},children:"GAME LOG"}),Le.map((G,ye)=>I.jsx("div",{style:{padding:"7px 0",fontFamily:"var(--fm)",fontSize:10,borderBottom:"1px solid rgba(255,255,255,0.02)",lineHeight:1.6,color:G.type==="death"?"#fb7185":G.type==="win"?"#fde68a":G.type==="action"?"#93c5fd":"var(--td)"},children:G.text},ye))]})]}),I.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[Y.length>0&&I.jsxs(en,{style:{padding:18},children:[I.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:12},children:"ELIMINATED"}),Y.map((G,ye)=>{var Je;return I.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,0.02)"},children:[I.jsxs("span",{style:{fontFamily:"var(--fm)",fontSize:10,color:"var(--td)"},children:[(Je=Sr[G.role])==null?void 0:Je.icon," ",G.name]}),I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)"},children:G.phase})]},ye)})]}),I.jsxs(en,{style:{flex:1,padding:18,display:"flex",flexDirection:"column",minHeight:250},children:[I.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:12},children:g==="night"&&(O==null?void 0:O.team)==="mafia"?"🔪 MAFIA CHAT":"💬 VILLAGE CHAT"}),I.jsxs("div",{style:{flex:1,overflowY:"auto",marginBottom:10},children:[xe.length===0&&I.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)",textAlign:"center",marginTop:44,opacity:.35},children:"No messages yet"}),xe.map((G,ye)=>I.jsxs("div",{style:{marginBottom:12},children:[I.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:9,fontWeight:600,color:G.senderId===e?"#93c5fd":"var(--td)"},children:G.sender}),I.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:7,color:"var(--tm)"},children:G.time})]}),I.jsx("div",{style:{fontFamily:"var(--fd)",fontSize:13,color:"var(--t)",marginTop:3,lineHeight:1.5},children:G.text})]},ye)),I.jsx("div",{ref:ge})]}),I.jsxs("div",{style:{display:"flex",gap:6},children:[I.jsx("input",{value:R,onChange:G=>te(G.target.value),onKeyDown:G=>G.key==="Enter"&&hn(),placeholder:"Type...",style:{flex:1,padding:"11px 14px",background:"rgba(255,255,255,0.025)",border:"1px solid var(--b)",borderRadius:11,color:"var(--t)",fontFamily:"var(--fm)",fontSize:10}}),I.jsx("button",{onClick:hn,style:{padding:"11px 16px",background:"var(--s)",border:"1px solid var(--b)",borderRadius:11,color:"var(--t)",fontSize:13},children:"↵"})]})]})]})]})]})]})}return null}d0.createRoot(document.getElementById("root")).render(I.jsx(i0.StrictMode,{children:I.jsx(vk,{})}));
