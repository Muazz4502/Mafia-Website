(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Xm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Sc={exports:{}},Ks={},Ec={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function t0(){if(Ap)return ce;Ap=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function I(C){return C===null||typeof C!="object"?null:(C=y&&C[y]||C["@@iterator"],typeof C=="function"?C:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,W={};function Q(C,R,ne){this.props=C,this.context=R,this.refs=W,this.updater=ne||N}Q.prototype.isReactComponent={},Q.prototype.setState=function(C,R){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,R,"setState")},Q.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function je(){}je.prototype=Q.prototype;function Pe(C,R,ne){this.props=C,this.context=R,this.refs=W,this.updater=ne||N}var De=Pe.prototype=new je;De.constructor=Pe,M(De,Q.prototype),De.isPureReactComponent=!0;var Le=Array.isArray,ct=Object.prototype.hasOwnProperty,tt={current:null},nt={key:!0,ref:!0,__self:!0,__source:!0};function Tt(C,R,ne){var se,fe={},ae=null,_e=null;if(R!=null)for(se in R.ref!==void 0&&(_e=R.ref),R.key!==void 0&&(ae=""+R.key),R)ct.call(R,se)&&!nt.hasOwnProperty(se)&&(fe[se]=R[se]);var ye=arguments.length-2;if(ye===1)fe.children=ne;else if(1<ye){for(var xe=Array(ye),ot=0;ot<ye;ot++)xe[ot]=arguments[ot+2];fe.children=xe}if(C&&C.defaultProps)for(se in ye=C.defaultProps,ye)fe[se]===void 0&&(fe[se]=ye[se]);return{$$typeof:i,type:C,key:ae,ref:_e,props:fe,_owner:tt.current}}function rn(C,R){return{$$typeof:i,type:C.type,key:R,ref:C.ref,props:C.props,_owner:C._owner}}function Ot(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function vn(C){var R={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ne){return R[ne]})}var wt=/\/+/g;function St(C,R){return typeof C=="object"&&C!==null&&C.key!=null?vn(""+C.key):R.toString(36)}function Dt(C,R,ne,se,fe){var ae=typeof C;(ae==="undefined"||ae==="boolean")&&(C=null);var _e=!1;if(C===null)_e=!0;else switch(ae){case"string":case"number":_e=!0;break;case"object":switch(C.$$typeof){case i:case e:_e=!0}}if(_e)return _e=C,fe=fe(_e),C=se===""?"."+St(_e,0):se,Le(fe)?(ne="",C!=null&&(ne=C.replace(wt,"$&/")+"/"),Dt(fe,R,ne,"",function(ot){return ot})):fe!=null&&(Ot(fe)&&(fe=rn(fe,ne+(!fe.key||_e&&_e.key===fe.key?"":(""+fe.key).replace(wt,"$&/")+"/")+C)),R.push(fe)),1;if(_e=0,se=se===""?".":se+":",Le(C))for(var ye=0;ye<C.length;ye++){ae=C[ye];var xe=se+St(ae,ye);_e+=Dt(ae,R,ne,xe,fe)}else if(xe=I(C),typeof xe=="function")for(C=xe.call(C),ye=0;!(ae=C.next()).done;)ae=ae.value,xe=se+St(ae,ye++),_e+=Dt(ae,R,ne,xe,fe);else if(ae==="object")throw R=String(C),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return _e}function rt(C,R,ne){if(C==null)return C;var se=[],fe=0;return Dt(C,se,"","",function(ae){return R.call(ne,ae,fe++)}),se}function Ve(C){if(C._status===-1){var R=C._result;R=R(),R.then(function(ne){(C._status===0||C._status===-1)&&(C._status=1,C._result=ne)},function(ne){(C._status===0||C._status===-1)&&(C._status=2,C._result=ne)}),C._status===-1&&(C._status=0,C._result=R)}if(C._status===1)return C._result.default;throw C._result}var ve={current:null},F={transition:null},$={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:F,ReactCurrentOwner:tt};function U(){throw Error("act(...) is not supported in production builds of React.")}return ce.Children={map:rt,forEach:function(C,R,ne){rt(C,function(){R.apply(this,arguments)},ne)},count:function(C){var R=0;return rt(C,function(){R++}),R},toArray:function(C){return rt(C,function(R){return R})||[]},only:function(C){if(!Ot(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ce.Component=Q,ce.Fragment=n,ce.Profiler=l,ce.PureComponent=Pe,ce.StrictMode=s,ce.Suspense=m,ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,ce.act=U,ce.cloneElement=function(C,R,ne){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var se=M({},C.props),fe=C.key,ae=C.ref,_e=C._owner;if(R!=null){if(R.ref!==void 0&&(ae=R.ref,_e=tt.current),R.key!==void 0&&(fe=""+R.key),C.type&&C.type.defaultProps)var ye=C.type.defaultProps;for(xe in R)ct.call(R,xe)&&!nt.hasOwnProperty(xe)&&(se[xe]=R[xe]===void 0&&ye!==void 0?ye[xe]:R[xe])}var xe=arguments.length-2;if(xe===1)se.children=ne;else if(1<xe){ye=Array(xe);for(var ot=0;ot<xe;ot++)ye[ot]=arguments[ot+2];se.children=ye}return{$$typeof:i,type:C.type,key:fe,ref:ae,props:se,_owner:_e}},ce.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:u,_context:C},C.Consumer=C},ce.createElement=Tt,ce.createFactory=function(C){var R=Tt.bind(null,C);return R.type=C,R},ce.createRef=function(){return{current:null}},ce.forwardRef=function(C){return{$$typeof:f,render:C}},ce.isValidElement=Ot,ce.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:Ve}},ce.memo=function(C,R){return{$$typeof:g,type:C,compare:R===void 0?null:R}},ce.startTransition=function(C){var R=F.transition;F.transition={};try{C()}finally{F.transition=R}},ce.unstable_act=U,ce.useCallback=function(C,R){return ve.current.useCallback(C,R)},ce.useContext=function(C){return ve.current.useContext(C)},ce.useDebugValue=function(){},ce.useDeferredValue=function(C){return ve.current.useDeferredValue(C)},ce.useEffect=function(C,R){return ve.current.useEffect(C,R)},ce.useId=function(){return ve.current.useId()},ce.useImperativeHandle=function(C,R,ne){return ve.current.useImperativeHandle(C,R,ne)},ce.useInsertionEffect=function(C,R){return ve.current.useInsertionEffect(C,R)},ce.useLayoutEffect=function(C,R){return ve.current.useLayoutEffect(C,R)},ce.useMemo=function(C,R){return ve.current.useMemo(C,R)},ce.useReducer=function(C,R,ne){return ve.current.useReducer(C,R,ne)},ce.useRef=function(C){return ve.current.useRef(C)},ce.useState=function(C){return ve.current.useState(C)},ce.useSyncExternalStore=function(C,R,ne){return ve.current.useSyncExternalStore(C,R,ne)},ce.useTransition=function(){return ve.current.useTransition()},ce.version="18.3.1",ce}var bp;function ld(){return bp||(bp=1,Ec.exports=t0()),Ec.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function n0(){if(Op)return Ks;Op=1;var i=ld(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,g){var v,y={},I=null,N=null;g!==void 0&&(I=""+g),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(N=m.ref);for(v in m)s.call(m,v)&&!u.hasOwnProperty(v)&&(y[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)y[v]===void 0&&(y[v]=m[v]);return{$$typeof:e,type:f,key:I,ref:N,props:y,_owner:l.current}}return Ks.Fragment=n,Ks.jsx=d,Ks.jsxs=d,Ks}var Dp;function r0(){return Dp||(Dp=1,Sc.exports=n0()),Sc.exports}var E=r0(),te=ld();const i0=Xm(te);var jl={},Cc={exports:{}},Kt={},Ic={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function s0(){return Lp||(Lp=1,(function(i){function e(F,$){var U=F.length;F.push($);e:for(;0<U;){var C=U-1>>>1,R=F[C];if(0<l(R,$))F[C]=$,F[U]=R,U=C;else break e}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var $=F[0],U=F.pop();if(U!==$){F[0]=U;e:for(var C=0,R=F.length,ne=R>>>1;C<ne;){var se=2*(C+1)-1,fe=F[se],ae=se+1,_e=F[ae];if(0>l(fe,U))ae<R&&0>l(_e,fe)?(F[C]=_e,F[ae]=U,C=ae):(F[C]=fe,F[se]=U,C=se);else if(ae<R&&0>l(_e,U))F[C]=_e,F[ae]=U,C=ae;else break e}}return $}function l(F,$){var U=F.sortIndex-$.sortIndex;return U!==0?U:F.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var m=[],g=[],v=1,y=null,I=3,N=!1,M=!1,W=!1,Q=typeof setTimeout=="function"?setTimeout:null,je=typeof clearTimeout=="function"?clearTimeout:null,Pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function De(F){for(var $=n(g);$!==null;){if($.callback===null)s(g);else if($.startTime<=F)s(g),$.sortIndex=$.expirationTime,e(m,$);else break;$=n(g)}}function Le(F){if(W=!1,De(F),!M)if(n(m)!==null)M=!0,Ve(ct);else{var $=n(g);$!==null&&ve(Le,$.startTime-F)}}function ct(F,$){M=!1,W&&(W=!1,je(Tt),Tt=-1),N=!0;var U=I;try{for(De($),y=n(m);y!==null&&(!(y.expirationTime>$)||F&&!vn());){var C=y.callback;if(typeof C=="function"){y.callback=null,I=y.priorityLevel;var R=C(y.expirationTime<=$);$=i.unstable_now(),typeof R=="function"?y.callback=R:y===n(m)&&s(m),De($)}else s(m);y=n(m)}if(y!==null)var ne=!0;else{var se=n(g);se!==null&&ve(Le,se.startTime-$),ne=!1}return ne}finally{y=null,I=U,N=!1}}var tt=!1,nt=null,Tt=-1,rn=5,Ot=-1;function vn(){return!(i.unstable_now()-Ot<rn)}function wt(){if(nt!==null){var F=i.unstable_now();Ot=F;var $=!0;try{$=nt(!0,F)}finally{$?St():(tt=!1,nt=null)}}else tt=!1}var St;if(typeof Pe=="function")St=function(){Pe(wt)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,rt=Dt.port2;Dt.port1.onmessage=wt,St=function(){rt.postMessage(null)}}else St=function(){Q(wt,0)};function Ve(F){nt=F,tt||(tt=!0,St())}function ve(F,$){Tt=Q(function(){F(i.unstable_now())},$)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_continueExecution=function(){M||N||(M=!0,Ve(ct))},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rn=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return I},i.unstable_getFirstCallbackNode=function(){return n(m)},i.unstable_next=function(F){switch(I){case 1:case 2:case 3:var $=3;break;default:$=I}var U=I;I=$;try{return F()}finally{I=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var U=I;I=F;try{return $()}finally{I=U}},i.unstable_scheduleCallback=function(F,$,U){var C=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?C+U:C):U=C,F){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=U+R,F={id:v++,callback:$,priorityLevel:F,startTime:U,expirationTime:R,sortIndex:-1},U>C?(F.sortIndex=U,e(g,F),n(m)===null&&F===n(g)&&(W?(je(Tt),Tt=-1):W=!0,ve(Le,U-C))):(F.sortIndex=R,e(m,F),M||N||(M=!0,Ve(ct))),F},i.unstable_shouldYield=vn,i.unstable_wrapCallback=function(F){var $=I;return function(){var U=I;I=$;try{return F.apply(this,arguments)}finally{I=U}}}})(kc)),kc}var Mp;function o0(){return Mp||(Mp=1,Ic.exports=s0()),Ic.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function l0(){if(Fp)return Kt;Fp=1;var i=ld(),e=o0();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function I(t){return m.call(y,t)?!0:m.call(v,t)?!1:g.test(t)?y[t]=!0:(v[t]=!0,!1)}function N(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,r,o,a){if(r===null||typeof r>"u"||N(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function W(t,r,o,a,c,h,p){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=p}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Q[t]=new W(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];Q[r]=new W(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){Q[t]=new W(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Q[t]=new W(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Q[t]=new W(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){Q[t]=new W(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){Q[t]=new W(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){Q[t]=new W(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){Q[t]=new W(t,5,!1,t.toLowerCase(),null,!1,!1)});var je=/[\-:]([a-z])/g;function Pe(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(je,Pe);Q[r]=new W(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(je,Pe);Q[r]=new W(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(je,Pe);Q[r]=new W(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){Q[t]=new W(t,1,!1,t.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){Q[t]=new W(t,1,!1,t.toLowerCase(),null,!0,!0)});function De(t,r,o,a){var c=Q.hasOwnProperty(r)?Q[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,o,c,a)&&(o=null),a||c===null?I(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Le=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ct=Symbol.for("react.element"),tt=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),Tt=Symbol.for("react.strict_mode"),rn=Symbol.for("react.profiler"),Ot=Symbol.for("react.provider"),vn=Symbol.for("react.context"),wt=Symbol.for("react.forward_ref"),St=Symbol.for("react.suspense"),Dt=Symbol.for("react.suspense_list"),rt=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),F=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,C;function R(t){if(C===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);C=r&&r[1]||""}return`
`+C+t}var ne=!1;function se(t,r){if(!t||ne)return"";ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(x){var a=x}Reflect.construct(t,[],r)}else{try{r.call()}catch(x){a=x}t.call(r.prototype)}else{try{throw Error()}catch(x){a=x}t()}}catch(x){if(x&&a&&typeof x.stack=="string"){for(var c=x.stack.split(`
`),h=a.stack.split(`
`),p=c.length-1,_=h.length-1;1<=p&&0<=_&&c[p]!==h[_];)_--;for(;1<=p&&0<=_;p--,_--)if(c[p]!==h[_]){if(p!==1||_!==1)do if(p--,_--,0>_||c[p]!==h[_]){var w=`
`+c[p].replace(" at new "," at ");return t.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",t.displayName)),w}while(1<=p&&0<=_);break}}}finally{ne=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?R(t):""}function fe(t){switch(t.tag){case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return t=se(t.type,!1),t;case 11:return t=se(t.type.render,!1),t;case 1:return t=se(t.type,!0),t;default:return""}}function ae(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case nt:return"Fragment";case tt:return"Portal";case rn:return"Profiler";case Tt:return"StrictMode";case St:return"Suspense";case Dt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vn:return(t.displayName||"Context")+".Consumer";case Ot:return(t._context.displayName||"Context")+".Provider";case wt:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rt:return r=t.displayName||null,r!==null?r:ae(t.type)||"Memo";case Ve:r=t._payload,t=t._init;try{return ae(t(r))}catch{}}return null}function _e(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(r);case 8:return r===Tt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xe(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ot(t){var r=xe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(p){a=""+p,h.call(this,p)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function sn(t){t._valueTracker||(t._valueTracker=ot(t))}function X(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=xe(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function oe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function be(t,r){var o=r.checked;return U({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ke(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=ye(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function K(t,r){r=r.checked,r!=null&&De(t,"checked",r,!1)}function ie(t,r){K(t,r);var o=ye(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Xe(t,r.type,o):r.hasOwnProperty("defaultValue")&&Xe(t,r.type,ye(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Te(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Xe(t,r,o){(r!=="number"||oe(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var dt=Array.isArray;function He(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+ye(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function on(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return U({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function We(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(dt(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:ye(o)}}function me(t,r){var o=ye(r.value),a=ye(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function ht(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function An(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ye(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?An(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lt,Et=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Lt=Lt||document.createElement("div"),Lt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Lt.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ct(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wt=["Webkit","ms","Moz","O"];Object.keys(xt).forEach(function(t){Wt.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),xt[r]=xt[t]})});function Xt(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||xt.hasOwnProperty(t)&&xt[t]?(""+r).trim():r+"px"}function re(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=Xt(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var ge=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function P(t,r){if(r){if(ge[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function G(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pe=null;function it(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ln=null,an=null,ue=null;function Nt(t){if(t=bs(t)){if(typeof ln!="function")throw Error(n(280));var r=t.stateNode;r&&(r=Zo(r),ln(t.stateNode,t.type,r))}}function un(t){an?ue?ue.push(t):ue=[t]:an=t}function Po(){if(an){var t=an,r=ue;if(ue=an=null,Nt(t),r)for(t=0;t<r.length;t++)Nt(r[t])}}function us(t,r){return t(r)}function cs(){}var mi=!1;function ds(t,r,o){if(mi)return t(r,o);mi=!0;try{return us(t,r,o)}finally{mi=!1,(an!==null||ue!==null)&&(cs(),Po())}}function Vr(t,r){var o=t.stateNode;if(o===null)return null;var a=Zo(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var Ua=!1;if(f)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){Ua=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{Ua=!1}function lv(t,r,o,a,c,h,p,_,w){var x=Array.prototype.slice.call(arguments,3);try{r.apply(o,x)}catch(b){this.onError(b)}}var fs=!1,Ao=null,bo=!1,za=null,av={onError:function(t){fs=!0,Ao=t}};function uv(t,r,o,a,c,h,p,_,w){fs=!1,Ao=null,lv.apply(av,arguments)}function cv(t,r,o,a,c,h,p,_,w){if(uv.apply(this,arguments),fs){if(fs){var x=Ao;fs=!1,Ao=null}else throw Error(n(198));bo||(bo=!0,za=x)}}function Hr(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Zd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function eh(t){if(Hr(t)!==t)throw Error(n(188))}function dv(t){var r=t.alternate;if(!r){if(r=Hr(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return eh(c),t;if(h===a)return eh(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var p=!1,_=c.child;_;){if(_===o){p=!0,o=c,a=h;break}if(_===a){p=!0,a=c,o=h;break}_=_.sibling}if(!p){for(_=h.child;_;){if(_===o){p=!0,o=h,a=c;break}if(_===a){p=!0,a=h,o=c;break}_=_.sibling}if(!p)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function th(t){return t=dv(t),t!==null?nh(t):null}function nh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=nh(t);if(r!==null)return r;t=t.sibling}return null}var rh=e.unstable_scheduleCallback,ih=e.unstable_cancelCallback,hv=e.unstable_shouldYield,fv=e.unstable_requestPaint,Ze=e.unstable_now,pv=e.unstable_getCurrentPriorityLevel,Wa=e.unstable_ImmediatePriority,sh=e.unstable_UserBlockingPriority,Oo=e.unstable_NormalPriority,mv=e.unstable_LowPriority,oh=e.unstable_IdlePriority,Do=null,bn=null;function gv(t){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(Do,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:yv,_v=Math.log,vv=Math.LN2;function yv(t){return t>>>=0,t===0?32:31-(_v(t)/vv|0)|0}var Lo=64,Mo=4194304;function ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fo(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,p=o&268435455;if(p!==0){var _=p&~c;_!==0?a=ps(_):(h&=p,h!==0&&(a=ps(h)))}else p=o&~c,p!==0?a=ps(p):h!==0&&(a=ps(h));if(a===0)return 0;if(r!==0&&r!==a&&(r&c)===0&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if((a&4)!==0&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-yn(r),c=1<<o,a|=t[o],r&=~c;return a}function wv(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sv(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var p=31-yn(h),_=1<<p,w=c[p];w===-1?((_&o)===0||(_&a)!==0)&&(c[p]=wv(_,r)):w<=r&&(t.expiredLanes|=_),h&=~_}}function Ba(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lh(){var t=Lo;return Lo<<=1,(Lo&4194240)===0&&(Lo=64),t}function Va(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function ms(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-yn(r),t[r]=o}function Ev(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-yn(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function Ha(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-yn(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var Ne=0;function ah(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var uh,$a,ch,dh,hh,Ga=!1,jo=[],ir=null,sr=null,or=null,gs=new Map,_s=new Map,lr=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(t,r){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":gs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":_s.delete(r.pointerId)}}function vs(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=bs(r),r!==null&&$a(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function Iv(t,r,o,a,c){switch(r){case"focusin":return ir=vs(ir,t,r,o,a,c),!0;case"dragenter":return sr=vs(sr,t,r,o,a,c),!0;case"mouseover":return or=vs(or,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return gs.set(h,vs(gs.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,_s.set(h,vs(_s.get(h)||null,t,r,o,a,c)),!0}return!1}function ph(t){var r=$r(t.target);if(r!==null){var o=Hr(r);if(o!==null){if(r=o.tag,r===13){if(r=Zd(o),r!==null){t.blockedOn=r,hh(t.priority,function(){ch(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=qa(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);pe=a,o.target.dispatchEvent(a),pe=null}else return r=bs(o),r!==null&&$a(r),t.blockedOn=o,!1;r.shift()}return!0}function mh(t,r,o){Uo(t)&&o.delete(r)}function kv(){Ga=!1,ir!==null&&Uo(ir)&&(ir=null),sr!==null&&Uo(sr)&&(sr=null),or!==null&&Uo(or)&&(or=null),gs.forEach(mh),_s.forEach(mh)}function ys(t,r){t.blockedOn===r&&(t.blockedOn=null,Ga||(Ga=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kv)))}function ws(t){function r(c){return ys(c,t)}if(0<jo.length){ys(jo[0],t);for(var o=1;o<jo.length;o++){var a=jo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(ir!==null&&ys(ir,t),sr!==null&&ys(sr,t),or!==null&&ys(or,t),gs.forEach(r),_s.forEach(r),o=0;o<lr.length;o++)a=lr[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<lr.length&&(o=lr[0],o.blockedOn===null);)ph(o),o.blockedOn===null&&lr.shift()}var gi=Le.ReactCurrentBatchConfig,zo=!0;function Tv(t,r,o,a){var c=Ne,h=gi.transition;gi.transition=null;try{Ne=1,Ka(t,r,o,a)}finally{Ne=c,gi.transition=h}}function xv(t,r,o,a){var c=Ne,h=gi.transition;gi.transition=null;try{Ne=4,Ka(t,r,o,a)}finally{Ne=c,gi.transition=h}}function Ka(t,r,o,a){if(zo){var c=qa(t,r,o,a);if(c===null)du(t,r,a,Wo,o),fh(t,a);else if(Iv(c,t,r,o,a))a.stopPropagation();else if(fh(t,a),r&4&&-1<Cv.indexOf(t)){for(;c!==null;){var h=bs(c);if(h!==null&&uh(h),h=qa(t,r,o,a),h===null&&du(t,r,a,Wo,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else du(t,r,a,null,o)}}var Wo=null;function qa(t,r,o,a){if(Wo=null,t=it(a),t=$r(t),t!==null)if(r=Hr(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Zd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Wo=t,null}function gh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pv()){case Wa:return 1;case sh:return 4;case Oo:case mv:return 16;case oh:return 536870912;default:return 16}default:return 16}}var ar=null,Ya=null,Bo=null;function _h(){if(Bo)return Bo;var t,r=Ya,o=r.length,a,c="value"in ar?ar.value:ar.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var p=o-t;for(a=1;a<=p&&r[o-a]===c[h-a];a++);return Bo=c.slice(t,1<a?1-a:void 0)}function Vo(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function vh(){return!1}function Zt(t){function r(o,a,c,h,p){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=p,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ho:vh,this.isPropagationStopped=vh,this}return U(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),r}var _i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qa=Zt(_i),Ss=U({},_i,{view:0,detail:0}),Nv=Zt(Ss),Ja,Xa,Es,$o=U({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Es&&(Es&&t.type==="mousemove"?(Ja=t.screenX-Es.screenX,Xa=t.screenY-Es.screenY):Xa=Ja=0,Es=t),Ja)},movementY:function(t){return"movementY"in t?t.movementY:Xa}}),yh=Zt($o),Rv=U({},$o,{dataTransfer:0}),Pv=Zt(Rv),Av=U({},Ss,{relatedTarget:0}),Za=Zt(Av),bv=U({},_i,{animationName:0,elapsedTime:0,pseudoElement:0}),Ov=Zt(bv),Dv=U({},_i,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lv=Zt(Dv),Mv=U({},_i,{data:0}),wh=Zt(Mv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Uv[t])?!!r[t]:!1}function eu(){return zv}var Wv=U({},Ss,{key:function(t){if(t.key){var r=Fv[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bv=Zt(Wv),Vv=U({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=Zt(Vv),Hv=U({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),$v=Zt(Hv),Gv=U({},_i,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Zt(Gv),qv=U({},$o,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=Zt(qv),Qv=[9,13,27,32],tu=f&&"CompositionEvent"in window,Cs=null;f&&"documentMode"in document&&(Cs=document.documentMode);var Jv=f&&"TextEvent"in window&&!Cs,Eh=f&&(!tu||Cs&&8<Cs&&11>=Cs),Ch=" ",Ih=!1;function kh(t,r){switch(t){case"keyup":return Qv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Th(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function Xv(t,r){switch(t){case"compositionend":return Th(r);case"keypress":return r.which!==32?null:(Ih=!0,Ch);case"textInput":return t=r.data,t===Ch&&Ih?null:t;default:return null}}function Zv(t,r){if(vi)return t==="compositionend"||!tu&&kh(t,r)?(t=_h(),Bo=Ya=ar=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Eh&&r.locale!=="ko"?null:r.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!ey[t.type]:r==="textarea"}function Nh(t,r,o,a){un(a),r=Qo(r,"onChange"),0<r.length&&(o=new Qa("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var Is=null,ks=null;function ty(t){Gh(t,0)}function Go(t){var r=Ci(t);if(X(r))return t}function ny(t,r){if(t==="change")return r}var Rh=!1;if(f){var nu;if(f){var ru="oninput"in document;if(!ru){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),ru=typeof Ph.oninput=="function"}nu=ru}else nu=!1;Rh=nu&&(!document.documentMode||9<document.documentMode)}function Ah(){Is&&(Is.detachEvent("onpropertychange",bh),ks=Is=null)}function bh(t){if(t.propertyName==="value"&&Go(ks)){var r=[];Nh(r,ks,t,it(t)),ds(ty,r)}}function ry(t,r,o){t==="focusin"?(Ah(),Is=r,ks=o,Is.attachEvent("onpropertychange",bh)):t==="focusout"&&Ah()}function iy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(ks)}function sy(t,r){if(t==="click")return Go(r)}function oy(t,r){if(t==="input"||t==="change")return Go(r)}function ly(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var wn=typeof Object.is=="function"?Object.is:ly;function Ts(t,r){if(wn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!m.call(r,c)||!wn(t[c],r[c]))return!1}return!0}function Oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dh(t,r){var o=Oh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Oh(o)}}function Lh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Lh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Mh(){for(var t=window,r=oe();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=oe(t.document)}return r}function iu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function ay(t){var r=Mh(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Lh(o.ownerDocument.documentElement,o)){if(a!==null&&iu(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Dh(o,h);var p=Dh(o,a);c&&p&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==p.node||t.focusOffset!==p.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(p.node,p.offset)):(r.setEnd(p.node,p.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uy=f&&"documentMode"in document&&11>=document.documentMode,yi=null,su=null,xs=null,ou=!1;function Fh(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ou||yi==null||yi!==oe(a)||(a=yi,"selectionStart"in a&&iu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),xs&&Ts(xs,a)||(xs=a,a=Qo(su,"onSelect"),0<a.length&&(r=new Qa("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=yi)))}function Ko(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var wi={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},lu={},jh={};f&&(jh=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function qo(t){if(lu[t])return lu[t];if(!wi[t])return t;var r=wi[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in jh)return lu[t]=r[o];return t}var Uh=qo("animationend"),zh=qo("animationiteration"),Wh=qo("animationstart"),Bh=qo("transitionend"),Vh=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,r){Vh.set(t,r),u(r,[t])}for(var au=0;au<Hh.length;au++){var uu=Hh[au],cy=uu.toLowerCase(),dy=uu[0].toUpperCase()+uu.slice(1);ur(cy,"on"+dy)}ur(Uh,"onAnimationEnd"),ur(zh,"onAnimationIteration"),ur(Wh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(Bh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));function $h(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,cv(a,r,void 0,t),t.currentTarget=null}function Gh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var p=a.length-1;0<=p;p--){var _=a[p],w=_.instance,x=_.currentTarget;if(_=_.listener,w!==h&&c.isPropagationStopped())break e;$h(c,_,x),h=w}else for(p=0;p<a.length;p++){if(_=a[p],w=_.instance,x=_.currentTarget,_=_.listener,w!==h&&c.isPropagationStopped())break e;$h(c,_,x),h=w}}}if(bo)throw t=za,bo=!1,za=null,t}function Ue(t,r){var o=r[_u];o===void 0&&(o=r[_u]=new Set);var a=t+"__bubble";o.has(a)||(Kh(r,t,2,!1),o.add(a))}function cu(t,r,o){var a=0;r&&(a|=4),Kh(o,t,a,r)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function Rs(t){if(!t[Yo]){t[Yo]=!0,s.forEach(function(o){o!=="selectionchange"&&(hy.has(o)||cu(o,!1,t),cu(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Yo]||(r[Yo]=!0,cu("selectionchange",!1,r))}}function Kh(t,r,o,a){switch(gh(r)){case 1:var c=Tv;break;case 4:c=xv;break;default:c=Ka}o=c.bind(null,r,o,t),c=void 0,!Ua||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function du(t,r,o,a,c){var h=a;if((r&1)===0&&(r&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(p===4)for(p=a.return;p!==null;){var w=p.tag;if((w===3||w===4)&&(w=p.stateNode.containerInfo,w===c||w.nodeType===8&&w.parentNode===c))return;p=p.return}for(;_!==null;){if(p=$r(_),p===null)return;if(w=p.tag,w===5||w===6){a=h=p;continue e}_=_.parentNode}}a=a.return}ds(function(){var x=h,b=it(o),O=[];e:{var A=Vh.get(t);if(A!==void 0){var j=Qa,B=t;switch(t){case"keypress":if(Vo(o)===0)break e;case"keydown":case"keyup":j=Bv;break;case"focusin":B="focus",j=Za;break;case"focusout":B="blur",j=Za;break;case"beforeblur":case"afterblur":j=Za;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=$v;break;case Uh:case zh:case Wh:j=Ov;break;case Bh:j=Kv;break;case"scroll":j=Nv;break;case"wheel":j=Yv;break;case"copy":case"cut":case"paste":j=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Sh}var V=(r&4)!==0,et=!V&&t==="scroll",k=V?A!==null?A+"Capture":null:A;V=[];for(var S=x,T;S!==null;){T=S;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,k!==null&&(D=Vr(S,k),D!=null&&V.push(Ps(S,D,T)))),et)break;S=S.return}0<V.length&&(A=new j(A,B,null,o,b),O.push({event:A,listeners:V}))}}if((r&7)===0){e:{if(A=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",A&&o!==pe&&(B=o.relatedTarget||o.fromElement)&&($r(B)||B[Wn]))break e;if((j||A)&&(A=b.window===b?b:(A=b.ownerDocument)?A.defaultView||A.parentWindow:window,j?(B=o.relatedTarget||o.toElement,j=x,B=B?$r(B):null,B!==null&&(et=Hr(B),B!==et||B.tag!==5&&B.tag!==6)&&(B=null)):(j=null,B=x),j!==B)){if(V=yh,D="onMouseLeave",k="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(V=Sh,D="onPointerLeave",k="onPointerEnter",S="pointer"),et=j==null?A:Ci(j),T=B==null?A:Ci(B),A=new V(D,S+"leave",j,o,b),A.target=et,A.relatedTarget=T,D=null,$r(b)===x&&(V=new V(k,S+"enter",B,o,b),V.target=T,V.relatedTarget=et,D=V),et=D,j&&B)t:{for(V=j,k=B,S=0,T=V;T;T=Si(T))S++;for(T=0,D=k;D;D=Si(D))T++;for(;0<S-T;)V=Si(V),S--;for(;0<T-S;)k=Si(k),T--;for(;S--;){if(V===k||k!==null&&V===k.alternate)break t;V=Si(V),k=Si(k)}V=null}else V=null;j!==null&&qh(O,A,j,V,!1),B!==null&&et!==null&&qh(O,et,B,V,!0)}}e:{if(A=x?Ci(x):window,j=A.nodeName&&A.nodeName.toLowerCase(),j==="select"||j==="input"&&A.type==="file")var H=ny;else if(xh(A))if(Rh)H=oy;else{H=iy;var q=ry}else(j=A.nodeName)&&j.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(H=sy);if(H&&(H=H(t,x))){Nh(O,H,o,b);break e}q&&q(t,A,x),t==="focusout"&&(q=A._wrapperState)&&q.controlled&&A.type==="number"&&Xe(A,"number",A.value)}switch(q=x?Ci(x):window,t){case"focusin":(xh(q)||q.contentEditable==="true")&&(yi=q,su=x,xs=null);break;case"focusout":xs=su=yi=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Fh(O,o,b);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":Fh(O,o,b)}var Y;if(tu)e:{switch(t){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else vi?kh(t,o)&&(Z="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Z="onCompositionStart");Z&&(Eh&&o.locale!=="ko"&&(vi||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&vi&&(Y=_h()):(ar=b,Ya="value"in ar?ar.value:ar.textContent,vi=!0)),q=Qo(x,Z),0<q.length&&(Z=new wh(Z,t,null,o,b),O.push({event:Z,listeners:q}),Y?Z.data=Y:(Y=Th(o),Y!==null&&(Z.data=Y)))),(Y=Jv?Xv(t,o):Zv(t,o))&&(x=Qo(x,"onBeforeInput"),0<x.length&&(b=new wh("onBeforeInput","beforeinput",null,o,b),O.push({event:b,listeners:x}),b.data=Y))}Gh(O,r)})}function Ps(t,r,o){return{instance:t,listener:r,currentTarget:o}}function Qo(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Vr(t,o),h!=null&&a.unshift(Ps(t,h,c)),h=Vr(t,r),h!=null&&a.push(Ps(t,h,c))),t=t.return}return a}function Si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qh(t,r,o,a,c){for(var h=r._reactName,p=[];o!==null&&o!==a;){var _=o,w=_.alternate,x=_.stateNode;if(w!==null&&w===a)break;_.tag===5&&x!==null&&(_=x,c?(w=Vr(o,h),w!=null&&p.unshift(Ps(o,w,_))):c||(w=Vr(o,h),w!=null&&p.push(Ps(o,w,_)))),o=o.return}p.length!==0&&t.push({event:r,listeners:p})}var fy=/\r\n?/g,py=/\u0000|\uFFFD/g;function Yh(t){return(typeof t=="string"?t:""+t).replace(fy,`
`).replace(py,"")}function Jo(t,r,o){if(r=Yh(r),Yh(t)!==r&&o)throw Error(n(425))}function Xo(){}var hu=null,fu=null;function pu(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,Qh=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Qh<"u"?function(t){return Qh.resolve(null).then(t).catch(_y)}:mu;function _y(t){setTimeout(function(){throw t})}function gu(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),ws(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);ws(r)}function cr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Jh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),On="__reactFiber$"+Ei,As="__reactProps$"+Ei,Wn="__reactContainer$"+Ei,_u="__reactEvents$"+Ei,vy="__reactListeners$"+Ei,yy="__reactHandles$"+Ei;function $r(t){var r=t[On];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Wn]||o[On]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Jh(t);t!==null;){if(o=t[On])return o;t=Jh(t)}return r}t=o,o=t.parentNode}return null}function bs(t){return t=t[On]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Zo(t){return t[As]||null}var vu=[],Ii=-1;function dr(t){return{current:t}}function ze(t){0>Ii||(t.current=vu[Ii],vu[Ii]=null,Ii--)}function Me(t,r){Ii++,vu[Ii]=t.current,t.current=r}var hr={},Rt=dr(hr),Bt=dr(!1),Gr=hr;function ki(t,r){var o=t.type.contextTypes;if(!o)return hr;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function Vt(t){return t=t.childContextTypes,t!=null}function el(){ze(Bt),ze(Rt)}function Xh(t,r,o){if(Rt.current!==hr)throw Error(n(168));Me(Rt,r),Me(Bt,o)}function Zh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,_e(t)||"Unknown",c));return U({},o,a)}function tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Gr=Rt.current,Me(Rt,t),Me(Bt,Bt.current),!0}function ef(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Zh(t,r,Gr),a.__reactInternalMemoizedMergedChildContext=t,ze(Bt),ze(Rt),Me(Rt,t)):ze(Bt),Me(Bt,o)}var Bn=null,nl=!1,yu=!1;function tf(t){Bn===null?Bn=[t]:Bn.push(t)}function wy(t){nl=!0,tf(t)}function fr(){if(!yu&&Bn!==null){yu=!0;var t=0,r=Ne;try{var o=Bn;for(Ne=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}Bn=null,nl=!1}catch(c){throw Bn!==null&&(Bn=Bn.slice(t+1)),rh(Wa,fr),c}finally{Ne=r,yu=!1}}return null}var Ti=[],xi=0,rl=null,il=0,cn=[],dn=0,Kr=null,Vn=1,Hn="";function qr(t,r){Ti[xi++]=il,Ti[xi++]=rl,rl=t,il=r}function nf(t,r,o){cn[dn++]=Vn,cn[dn++]=Hn,cn[dn++]=Kr,Kr=t;var a=Vn;t=Hn;var c=32-yn(a)-1;a&=~(1<<c),o+=1;var h=32-yn(r)+c;if(30<h){var p=c-c%5;h=(a&(1<<p)-1).toString(32),a>>=p,c-=p,Vn=1<<32-yn(r)+c|o<<c|a,Hn=h+t}else Vn=1<<h|o<<c|a,Hn=t}function wu(t){t.return!==null&&(qr(t,1),nf(t,1,0))}function Su(t){for(;t===rl;)rl=Ti[--xi],Ti[xi]=null,il=Ti[--xi],Ti[xi]=null;for(;t===Kr;)Kr=cn[--dn],cn[dn]=null,Hn=cn[--dn],cn[dn]=null,Vn=cn[--dn],cn[dn]=null}var en=null,tn=null,Be=!1,Sn=null;function rf(t,r){var o=mn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function sf(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,en=t,tn=cr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,en=t,tn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Kr!==null?{id:Vn,overflow:Hn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=mn(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,en=t,tn=null,!0):!1;default:return!1}}function Eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cu(t){if(Be){var r=tn;if(r){var o=r;if(!sf(t,r)){if(Eu(t))throw Error(n(418));r=cr(o.nextSibling);var a=en;r&&sf(t,r)?rf(a,o):(t.flags=t.flags&-4097|2,Be=!1,en=t)}}else{if(Eu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Be=!1,en=t}}}function of(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;en=t}function sl(t){if(t!==en)return!1;if(!Be)return of(t),Be=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!pu(t.type,t.memoizedProps)),r&&(r=tn)){if(Eu(t))throw lf(),Error(n(418));for(;r;)rf(t,r),r=cr(r.nextSibling)}if(of(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){tn=cr(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}tn=null}}else tn=en?cr(t.stateNode.nextSibling):null;return!0}function lf(){for(var t=tn;t;)t=cr(t.nextSibling)}function Ni(){tn=en=null,Be=!1}function Iu(t){Sn===null?Sn=[t]:Sn.push(t)}var Sy=Le.ReactCurrentBatchConfig;function Os(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(p){var _=c.refs;p===null?delete _[h]:_[h]=p},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ol(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function af(t){var r=t._init;return r(t._payload)}function uf(t){function r(k,S){if(t){var T=k.deletions;T===null?(k.deletions=[S],k.flags|=16):T.push(S)}}function o(k,S){if(!t)return null;for(;S!==null;)r(k,S),S=S.sibling;return null}function a(k,S){for(k=new Map;S!==null;)S.key!==null?k.set(S.key,S):k.set(S.index,S),S=S.sibling;return k}function c(k,S){return k=Sr(k,S),k.index=0,k.sibling=null,k}function h(k,S,T){return k.index=T,t?(T=k.alternate,T!==null?(T=T.index,T<S?(k.flags|=2,S):T):(k.flags|=2,S)):(k.flags|=1048576,S)}function p(k){return t&&k.alternate===null&&(k.flags|=2),k}function _(k,S,T,D){return S===null||S.tag!==6?(S=mc(T,k.mode,D),S.return=k,S):(S=c(S,T),S.return=k,S)}function w(k,S,T,D){var H=T.type;return H===nt?b(k,S,T.props.children,D,T.key):S!==null&&(S.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ve&&af(H)===S.type)?(D=c(S,T.props),D.ref=Os(k,S,T),D.return=k,D):(D=Pl(T.type,T.key,T.props,null,k.mode,D),D.ref=Os(k,S,T),D.return=k,D)}function x(k,S,T,D){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=gc(T,k.mode,D),S.return=k,S):(S=c(S,T.children||[]),S.return=k,S)}function b(k,S,T,D,H){return S===null||S.tag!==7?(S=ni(T,k.mode,D,H),S.return=k,S):(S=c(S,T),S.return=k,S)}function O(k,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return S=mc(""+S,k.mode,T),S.return=k,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ct:return T=Pl(S.type,S.key,S.props,null,k.mode,T),T.ref=Os(k,null,S),T.return=k,T;case tt:return S=gc(S,k.mode,T),S.return=k,S;case Ve:var D=S._init;return O(k,D(S._payload),T)}if(dt(S)||$(S))return S=ni(S,k.mode,T,null),S.return=k,S;ol(k,S)}return null}function A(k,S,T,D){var H=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return H!==null?null:_(k,S,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ct:return T.key===H?w(k,S,T,D):null;case tt:return T.key===H?x(k,S,T,D):null;case Ve:return H=T._init,A(k,S,H(T._payload),D)}if(dt(T)||$(T))return H!==null?null:b(k,S,T,D,null);ol(k,T)}return null}function j(k,S,T,D,H){if(typeof D=="string"&&D!==""||typeof D=="number")return k=k.get(T)||null,_(S,k,""+D,H);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ct:return k=k.get(D.key===null?T:D.key)||null,w(S,k,D,H);case tt:return k=k.get(D.key===null?T:D.key)||null,x(S,k,D,H);case Ve:var q=D._init;return j(k,S,T,q(D._payload),H)}if(dt(D)||$(D))return k=k.get(T)||null,b(S,k,D,H,null);ol(S,D)}return null}function B(k,S,T,D){for(var H=null,q=null,Y=S,Z=S=0,mt=null;Y!==null&&Z<T.length;Z++){Y.index>Z?(mt=Y,Y=null):mt=Y.sibling;var Ce=A(k,Y,T[Z],D);if(Ce===null){Y===null&&(Y=mt);break}t&&Y&&Ce.alternate===null&&r(k,Y),S=h(Ce,S,Z),q===null?H=Ce:q.sibling=Ce,q=Ce,Y=mt}if(Z===T.length)return o(k,Y),Be&&qr(k,Z),H;if(Y===null){for(;Z<T.length;Z++)Y=O(k,T[Z],D),Y!==null&&(S=h(Y,S,Z),q===null?H=Y:q.sibling=Y,q=Y);return Be&&qr(k,Z),H}for(Y=a(k,Y);Z<T.length;Z++)mt=j(Y,k,Z,T[Z],D),mt!==null&&(t&&mt.alternate!==null&&Y.delete(mt.key===null?Z:mt.key),S=h(mt,S,Z),q===null?H=mt:q.sibling=mt,q=mt);return t&&Y.forEach(function(Er){return r(k,Er)}),Be&&qr(k,Z),H}function V(k,S,T,D){var H=$(T);if(typeof H!="function")throw Error(n(150));if(T=H.call(T),T==null)throw Error(n(151));for(var q=H=null,Y=S,Z=S=0,mt=null,Ce=T.next();Y!==null&&!Ce.done;Z++,Ce=T.next()){Y.index>Z?(mt=Y,Y=null):mt=Y.sibling;var Er=A(k,Y,Ce.value,D);if(Er===null){Y===null&&(Y=mt);break}t&&Y&&Er.alternate===null&&r(k,Y),S=h(Er,S,Z),q===null?H=Er:q.sibling=Er,q=Er,Y=mt}if(Ce.done)return o(k,Y),Be&&qr(k,Z),H;if(Y===null){for(;!Ce.done;Z++,Ce=T.next())Ce=O(k,Ce.value,D),Ce!==null&&(S=h(Ce,S,Z),q===null?H=Ce:q.sibling=Ce,q=Ce);return Be&&qr(k,Z),H}for(Y=a(k,Y);!Ce.done;Z++,Ce=T.next())Ce=j(Y,k,Z,Ce.value,D),Ce!==null&&(t&&Ce.alternate!==null&&Y.delete(Ce.key===null?Z:Ce.key),S=h(Ce,S,Z),q===null?H=Ce:q.sibling=Ce,q=Ce);return t&&Y.forEach(function(e0){return r(k,e0)}),Be&&qr(k,Z),H}function et(k,S,T,D){if(typeof T=="object"&&T!==null&&T.type===nt&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case ct:e:{for(var H=T.key,q=S;q!==null;){if(q.key===H){if(H=T.type,H===nt){if(q.tag===7){o(k,q.sibling),S=c(q,T.props.children),S.return=k,k=S;break e}}else if(q.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ve&&af(H)===q.type){o(k,q.sibling),S=c(q,T.props),S.ref=Os(k,q,T),S.return=k,k=S;break e}o(k,q);break}else r(k,q);q=q.sibling}T.type===nt?(S=ni(T.props.children,k.mode,D,T.key),S.return=k,k=S):(D=Pl(T.type,T.key,T.props,null,k.mode,D),D.ref=Os(k,S,T),D.return=k,k=D)}return p(k);case tt:e:{for(q=T.key;S!==null;){if(S.key===q)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){o(k,S.sibling),S=c(S,T.children||[]),S.return=k,k=S;break e}else{o(k,S);break}else r(k,S);S=S.sibling}S=gc(T,k.mode,D),S.return=k,k=S}return p(k);case Ve:return q=T._init,et(k,S,q(T._payload),D)}if(dt(T))return B(k,S,T,D);if($(T))return V(k,S,T,D);ol(k,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,S!==null&&S.tag===6?(o(k,S.sibling),S=c(S,T),S.return=k,k=S):(o(k,S),S=mc(T,k.mode,D),S.return=k,k=S),p(k)):o(k,S)}return et}var Ri=uf(!0),cf=uf(!1),ll=dr(null),al=null,Pi=null,ku=null;function Tu(){ku=Pi=al=null}function xu(t){var r=ll.current;ze(ll),t._currentValue=r}function Nu(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Ai(t,r){al=t,ku=Pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Ht=!0),t.firstContext=null)}function hn(t){var r=t._currentValue;if(ku!==t)if(t={context:t,memoizedValue:r,next:null},Pi===null){if(al===null)throw Error(n(308));Pi=t,al.dependencies={lanes:0,firstContext:t}}else Pi=Pi.next=t;return r}var Yr=null;function Ru(t){Yr===null?Yr=[t]:Yr.push(t)}function df(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,Ru(r)):(o.next=c.next,c.next=o),r.interleaved=o,$n(t,a)}function $n(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var pr=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function mr(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(we&2)!==0){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,$n(t,o)}return c=a.interleaved,c===null?(r.next=r,Ru(a)):(r.next=c.next,c.next=r),a.interleaved=r,$n(t,o)}function ul(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,Ha(t,o)}}function ff(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var p={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=p:h=h.next=p,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function cl(t,r,o,a){var c=t.updateQueue;pr=!1;var h=c.firstBaseUpdate,p=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var w=_,x=w.next;w.next=null,p===null?h=x:p.next=x,p=w;var b=t.alternate;b!==null&&(b=b.updateQueue,_=b.lastBaseUpdate,_!==p&&(_===null?b.firstBaseUpdate=x:_.next=x,b.lastBaseUpdate=w))}if(h!==null){var O=c.baseState;p=0,b=x=w=null,_=h;do{var A=_.lane,j=_.eventTime;if((a&A)===A){b!==null&&(b=b.next={eventTime:j,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var B=t,V=_;switch(A=r,j=o,V.tag){case 1:if(B=V.payload,typeof B=="function"){O=B.call(j,O,A);break e}O=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=V.payload,A=typeof B=="function"?B.call(j,O,A):B,A==null)break e;O=U({},O,A);break e;case 2:pr=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,A=c.effects,A===null?c.effects=[_]:A.push(_))}else j={eventTime:j,lane:A,tag:_.tag,payload:_.payload,callback:_.callback,next:null},b===null?(x=b=j,w=O):b=b.next=j,p|=A;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;A=_,_=A.next,A.next=null,c.lastBaseUpdate=A,c.shared.pending=null}}while(!0);if(b===null&&(w=O),c.baseState=w,c.firstBaseUpdate=x,c.lastBaseUpdate=b,r=c.shared.interleaved,r!==null){c=r;do p|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);Xr|=p,t.lanes=p,t.memoizedState=O}}function pf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Ds={},Dn=dr(Ds),Ls=dr(Ds),Ms=dr(Ds);function Qr(t){if(t===Ds)throw Error(n(174));return t}function Au(t,r){switch(Me(Ms,r),Me(Ls,t),Me(Dn,Ds),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ye(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Ye(r,t)}ze(Dn),Me(Dn,r)}function bi(){ze(Dn),ze(Ls),ze(Ms)}function mf(t){Qr(Ms.current);var r=Qr(Dn.current),o=Ye(r,t.type);r!==o&&(Me(Ls,t),Me(Dn,o))}function bu(t){Ls.current===t&&(ze(Dn),ze(Ls))}var $e=dr(0);function dl(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ou=[];function Du(){for(var t=0;t<Ou.length;t++)Ou[t]._workInProgressVersionPrimary=null;Ou.length=0}var hl=Le.ReactCurrentDispatcher,Lu=Le.ReactCurrentBatchConfig,Jr=0,Ge=null,lt=null,ft=null,fl=!1,Fs=!1,js=0,Ey=0;function Pt(){throw Error(n(321))}function Mu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!wn(t[o],r[o]))return!1;return!0}function Fu(t,r,o,a,c,h){if(Jr=h,Ge=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,hl.current=t===null||t.memoizedState===null?Ty:xy,t=o(a,c),Fs){h=0;do{if(Fs=!1,js=0,25<=h)throw Error(n(301));h+=1,ft=lt=null,r.updateQueue=null,hl.current=Ny,t=o(a,c)}while(Fs)}if(hl.current=gl,r=lt!==null&&lt.next!==null,Jr=0,ft=lt=Ge=null,fl=!1,r)throw Error(n(300));return t}function ju(){var t=js!==0;return js=0,t}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ge.memoizedState=ft=t:ft=ft.next=t,ft}function fn(){if(lt===null){var t=Ge.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var r=ft===null?Ge.memoizedState:ft.next;if(r!==null)ft=r,lt=t;else{if(t===null)throw Error(n(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},ft===null?Ge.memoizedState=ft=t:ft=ft.next=t}return ft}function Us(t,r){return typeof r=="function"?r(t):r}function Uu(t){var r=fn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=lt,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var p=c.next;c.next=h.next,h.next=p}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=p=null,w=null,x=h;do{var b=x.lane;if((Jr&b)===b)w!==null&&(w=w.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),a=x.hasEagerState?x.eagerState:t(a,x.action);else{var O={lane:b,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};w===null?(_=w=O,p=a):w=w.next=O,Ge.lanes|=b,Xr|=b}x=x.next}while(x!==null&&x!==h);w===null?p=a:w.next=_,wn(a,r.memoizedState)||(Ht=!0),r.memoizedState=a,r.baseState=p,r.baseQueue=w,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ge.lanes|=h,Xr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function zu(t){var r=fn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var p=c=c.next;do h=t(h,p.action),p=p.next;while(p!==c);wn(h,r.memoizedState)||(Ht=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function gf(){}function _f(t,r){var o=Ge,a=fn(),c=r(),h=!wn(a.memoizedState,c);if(h&&(a.memoizedState=c,Ht=!0),a=a.queue,Wu(wf.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||ft!==null&&ft.memoizedState.tag&1){if(o.flags|=2048,zs(9,yf.bind(null,o,a,c,r),void 0,null),pt===null)throw Error(n(349));(Jr&30)!==0||vf(o,r,c)}return c}function vf(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Ge.updateQueue,r===null?(r={lastEffect:null,stores:null},Ge.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function yf(t,r,o,a){r.value=o,r.getSnapshot=a,Sf(r)&&Ef(t)}function wf(t,r,o){return o(function(){Sf(r)&&Ef(t)})}function Sf(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!wn(t,o)}catch{return!0}}function Ef(t){var r=$n(t,1);r!==null&&kn(r,t,1,-1)}function Cf(t){var r=Ln();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:t},r.queue=t,t=t.dispatch=ky.bind(null,Ge,t),[r.memoizedState,t]}function zs(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=Ge.updateQueue,r===null?(r={lastEffect:null,stores:null},Ge.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function If(){return fn().memoizedState}function pl(t,r,o,a){var c=Ln();Ge.flags|=t,c.memoizedState=zs(1|r,o,void 0,a===void 0?null:a)}function ml(t,r,o,a){var c=fn();a=a===void 0?null:a;var h=void 0;if(lt!==null){var p=lt.memoizedState;if(h=p.destroy,a!==null&&Mu(a,p.deps)){c.memoizedState=zs(r,o,h,a);return}}Ge.flags|=t,c.memoizedState=zs(1|r,o,h,a)}function kf(t,r){return pl(8390656,8,t,r)}function Wu(t,r){return ml(2048,8,t,r)}function Tf(t,r){return ml(4,2,t,r)}function xf(t,r){return ml(4,4,t,r)}function Nf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Rf(t,r,o){return o=o!=null?o.concat([t]):null,ml(4,4,Nf.bind(null,r,t),o)}function Bu(){}function Pf(t,r){var o=fn();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Mu(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function Af(t,r){var o=fn();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Mu(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function bf(t,r,o){return(Jr&21)===0?(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=o):(wn(o,r)||(o=lh(),Ge.lanes|=o,Xr|=o,t.baseState=!0),r)}function Cy(t,r){var o=Ne;Ne=o!==0&&4>o?o:4,t(!0);var a=Lu.transition;Lu.transition={};try{t(!1),r()}finally{Ne=o,Lu.transition=a}}function Of(){return fn().memoizedState}function Iy(t,r,o){var a=yr(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Df(t))Lf(r,o);else if(o=df(t,r,o,a),o!==null){var c=Ft();kn(o,t,a,c),Mf(o,r,a)}}function ky(t,r,o){var a=yr(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Df(t))Lf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var p=r.lastRenderedState,_=h(p,o);if(c.hasEagerState=!0,c.eagerState=_,wn(_,p)){var w=r.interleaved;w===null?(c.next=c,Ru(r)):(c.next=w.next,w.next=c),r.interleaved=c;return}}catch{}finally{}o=df(t,r,c,a),o!==null&&(c=Ft(),kn(o,t,a,c),Mf(o,r,a))}}function Df(t){var r=t.alternate;return t===Ge||r!==null&&r===Ge}function Lf(t,r){Fs=fl=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Mf(t,r,o){if((o&4194240)!==0){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,Ha(t,o)}}var gl={readContext:hn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},Ty={readContext:hn,useCallback:function(t,r){return Ln().memoizedState=[t,r===void 0?null:r],t},useContext:hn,useEffect:kf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,pl(4194308,4,Nf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return pl(4194308,4,t,r)},useInsertionEffect:function(t,r){return pl(4,2,t,r)},useMemo:function(t,r){var o=Ln();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=Ln();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=Iy.bind(null,Ge,t),[a.memoizedState,t]},useRef:function(t){var r=Ln();return t={current:t},r.memoizedState=t},useState:Cf,useDebugValue:Bu,useDeferredValue:function(t){return Ln().memoizedState=t},useTransition:function(){var t=Cf(!1),r=t[0];return t=Cy.bind(null,t[1]),Ln().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=Ge,c=Ln();if(Be){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),pt===null)throw Error(n(349));(Jr&30)!==0||vf(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,kf(wf.bind(null,a,h,t),[t]),a.flags|=2048,zs(9,yf.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=Ln(),r=pt.identifierPrefix;if(Be){var o=Hn,a=Vn;o=(a&~(1<<32-yn(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=js++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Ey++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},xy={readContext:hn,useCallback:Pf,useContext:hn,useEffect:Wu,useImperativeHandle:Rf,useInsertionEffect:Tf,useLayoutEffect:xf,useMemo:Af,useReducer:Uu,useRef:If,useState:function(){return Uu(Us)},useDebugValue:Bu,useDeferredValue:function(t){var r=fn();return bf(r,lt.memoizedState,t)},useTransition:function(){var t=Uu(Us)[0],r=fn().memoizedState;return[t,r]},useMutableSource:gf,useSyncExternalStore:_f,useId:Of,unstable_isNewReconciler:!1},Ny={readContext:hn,useCallback:Pf,useContext:hn,useEffect:Wu,useImperativeHandle:Rf,useInsertionEffect:Tf,useLayoutEffect:xf,useMemo:Af,useReducer:zu,useRef:If,useState:function(){return zu(Us)},useDebugValue:Bu,useDeferredValue:function(t){var r=fn();return lt===null?r.memoizedState=t:bf(r,lt.memoizedState,t)},useTransition:function(){var t=zu(Us)[0],r=fn().memoizedState;return[t,r]},useMutableSource:gf,useSyncExternalStore:_f,useId:Of,unstable_isNewReconciler:!1};function En(t,r){if(t&&t.defaultProps){r=U({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Vu(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:U({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var _l={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=Ft(),c=yr(t),h=Gn(a,c);h.payload=r,o!=null&&(h.callback=o),r=mr(t,h,c),r!==null&&(kn(r,t,c,a),ul(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=Ft(),c=yr(t),h=Gn(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=mr(t,h,c),r!==null&&(kn(r,t,c,a),ul(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Ft(),a=yr(t),c=Gn(o,a);c.tag=2,r!=null&&(c.callback=r),r=mr(t,c,a),r!==null&&(kn(r,t,a,o),ul(r,t,a))}};function Ff(t,r,o,a,c,h,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,p):r.prototype&&r.prototype.isPureReactComponent?!Ts(o,a)||!Ts(c,h):!0}function jf(t,r,o){var a=!1,c=hr,h=r.contextType;return typeof h=="object"&&h!==null?h=hn(h):(c=Vt(r)?Gr:Rt.current,a=r.contextTypes,h=(a=a!=null)?ki(t,c):hr),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=_l,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function Uf(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&_l.enqueueReplaceState(r,r.state,null)}function Hu(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Pu(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=hn(h):(h=Vt(r)?Gr:Rt.current,c.context=ki(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(Vu(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&_l.enqueueReplaceState(c,c.state,null),cl(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Oi(t,r){try{var o="",a=r;do o+=fe(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function $u(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Gu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Ry=typeof WeakMap=="function"?WeakMap:Map;function zf(t,r,o){o=Gn(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){Il||(Il=!0,lc=a),Gu(t,r)},o}function Wf(t,r,o){o=Gn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){Gu(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Gu(t,r),typeof a!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var p=r.stack;this.componentDidCatch(r.value,{componentStack:p!==null?p:""})}),o}function Bf(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Ry;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=Vy.bind(null,t,r,o),r.then(t,t))}function Vf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Hf(t,r,o,a,c){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Gn(-1,1),r.tag=2,mr(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var Py=Le.ReactCurrentOwner,Ht=!1;function Mt(t,r,o,a){r.child=t===null?cf(r,null,o,a):Ri(r,t.child,o,a)}function $f(t,r,o,a,c){o=o.render;var h=r.ref;return Ai(r,c),a=Fu(t,r,o,a,h,c),o=ju(),t!==null&&!Ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,Kn(t,r,c)):(Be&&o&&wu(r),r.flags|=1,Mt(t,r,a,c),r.child)}function Gf(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!pc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Kf(t,r,h,a,c)):(t=Pl(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,(t.lanes&c)===0){var p=h.memoizedProps;if(o=o.compare,o=o!==null?o:Ts,o(p,a)&&t.ref===r.ref)return Kn(t,r,c)}return r.flags|=1,t=Sr(h,a),t.ref=r.ref,t.return=r,r.child=t}function Kf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(Ts(h,a)&&t.ref===r.ref)if(Ht=!1,r.pendingProps=a=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Ht=!0);else return r.lanes=t.lanes,Kn(t,r,c)}return Ku(t,r,o,a,c)}function qf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Li,nn),nn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Me(Li,nn),nn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Me(Li,nn),nn|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,Me(Li,nn),nn|=a;return Mt(t,r,c,o),r.child}function Yf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Ku(t,r,o,a,c){var h=Vt(o)?Gr:Rt.current;return h=ki(r,h),Ai(r,c),o=Fu(t,r,o,a,h,c),a=ju(),t!==null&&!Ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,Kn(t,r,c)):(Be&&a&&wu(r),r.flags|=1,Mt(t,r,o,c),r.child)}function Qf(t,r,o,a,c){if(Vt(o)){var h=!0;tl(r)}else h=!1;if(Ai(r,c),r.stateNode===null)yl(t,r),jf(r,o,a),Hu(r,o,a,c),a=!0;else if(t===null){var p=r.stateNode,_=r.memoizedProps;p.props=_;var w=p.context,x=o.contextType;typeof x=="object"&&x!==null?x=hn(x):(x=Vt(o)?Gr:Rt.current,x=ki(r,x));var b=o.getDerivedStateFromProps,O=typeof b=="function"||typeof p.getSnapshotBeforeUpdate=="function";O||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==a||w!==x)&&Uf(r,p,a,x),pr=!1;var A=r.memoizedState;p.state=A,cl(r,a,p,c),w=r.memoizedState,_!==a||A!==w||Bt.current||pr?(typeof b=="function"&&(Vu(r,o,b,a),w=r.memoizedState),(_=pr||Ff(r,o,_,a,A,w,x))?(O||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=w),p.props=a,p.state=w,p.context=x,a=_):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{p=r.stateNode,hf(t,r),_=r.memoizedProps,x=r.type===r.elementType?_:En(r.type,_),p.props=x,O=r.pendingProps,A=p.context,w=o.contextType,typeof w=="object"&&w!==null?w=hn(w):(w=Vt(o)?Gr:Rt.current,w=ki(r,w));var j=o.getDerivedStateFromProps;(b=typeof j=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==O||A!==w)&&Uf(r,p,a,w),pr=!1,A=r.memoizedState,p.state=A,cl(r,a,p,c);var B=r.memoizedState;_!==O||A!==B||Bt.current||pr?(typeof j=="function"&&(Vu(r,o,j,a),B=r.memoizedState),(x=pr||Ff(r,o,x,a,A,B,w)||!1)?(b||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,B,w),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,B,w)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=B),p.props=a,p.state=B,p.context=w,a=x):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(r.flags|=1024),a=!1)}return qu(t,r,o,a,h,c)}function qu(t,r,o,a,c,h){Yf(t,r);var p=(r.flags&128)!==0;if(!a&&!p)return c&&ef(r,o,!1),Kn(t,r,h);a=r.stateNode,Py.current=r;var _=p&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&p?(r.child=Ri(r,t.child,null,h),r.child=Ri(r,null,_,h)):Mt(t,r,_,h),r.memoizedState=a.state,c&&ef(r,o,!0),r.child}function Jf(t){var r=t.stateNode;r.pendingContext?Xh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Xh(t,r.context,!1),Au(t,r.containerInfo)}function Xf(t,r,o,a,c){return Ni(),Iu(c),r.flags|=256,Mt(t,r,o,a),r.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zf(t,r,o){var a=r.pendingProps,c=$e.current,h=!1,p=(r.flags&128)!==0,_;if((_=p)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Me($e,c&1),t===null)return Cu(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(p=a.children,t=a.fallback,h?(a=r.mode,h=r.child,p={mode:"hidden",children:p},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=p):h=Al(p,a,0,null),t=ni(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=Qu(o),r.memoizedState=Yu,t):Ju(r,p));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return Ay(t,r,p,a,_,c,o);if(h){h=a.fallback,p=r.mode,c=t.child,_=c.sibling;var w={mode:"hidden",children:a.children};return(p&1)===0&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=w,r.deletions=null):(a=Sr(c,w),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Sr(_,h):(h=ni(h,p,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,p=t.child.memoizedState,p=p===null?Qu(o):{baseLanes:p.baseLanes|o,cachePool:null,transitions:p.transitions},h.memoizedState=p,h.childLanes=t.childLanes&~o,r.memoizedState=Yu,a}return h=t.child,t=h.sibling,a=Sr(h,{mode:"visible",children:a.children}),(r.mode&1)===0&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function Ju(t,r){return r=Al({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function vl(t,r,o,a){return a!==null&&Iu(a),Ri(r,t.child,null,o),t=Ju(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Ay(t,r,o,a,c,h,p){if(o)return r.flags&256?(r.flags&=-257,a=$u(Error(n(422))),vl(t,r,p,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Al({mode:"visible",children:a.children},c,0,null),h=ni(h,c,p,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,(r.mode&1)!==0&&Ri(r,t.child,null,p),r.child.memoizedState=Qu(p),r.memoizedState=Yu,h);if((r.mode&1)===0)return vl(t,r,p,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=$u(h,a,void 0),vl(t,r,p,a)}if(_=(p&t.childLanes)!==0,Ht||_){if(a=pt,a!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|p))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,$n(t,c),kn(a,t,c,-1))}return fc(),a=$u(Error(n(421))),vl(t,r,p,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=Hy.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,tn=cr(c.nextSibling),en=r,Be=!0,Sn=null,t!==null&&(cn[dn++]=Vn,cn[dn++]=Hn,cn[dn++]=Kr,Vn=t.id,Hn=t.overflow,Kr=r),r=Ju(r,a.children),r.flags|=4096,r)}function ep(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),Nu(t.return,r,o)}function Xu(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function tp(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(Mt(t,r,a.children,o),a=$e.current,(a&2)!==0)a=a&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ep(t,o,r);else if(t.tag===19)ep(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Me($e,a),(r.mode&1)===0)r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&dl(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),Xu(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&dl(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Xu(r,!0,o,null,h);break;case"together":Xu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function yl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Kn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Xr|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Sr(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Sr(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function by(t,r,o){switch(r.tag){case 3:Jf(r),Ni();break;case 5:mf(r);break;case 1:Vt(r.type)&&tl(r);break;case 4:Au(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;Me(ll,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(Me($e,$e.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Zf(t,r,o):(Me($e,$e.current&1),t=Kn(t,r,o),t!==null?t.sibling:null);Me($e,$e.current&1);break;case 19:if(a=(o&r.childLanes)!==0,(t.flags&128)!==0){if(a)return tp(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Me($e,$e.current),a)break;return null;case 22:case 23:return r.lanes=0,qf(t,r,o)}return Kn(t,r,o)}var np,Zu,rp,ip;np=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Zu=function(){},rp=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,Qr(Dn.current);var h=null;switch(o){case"input":c=be(t,c),a=be(t,a),h=[];break;case"select":c=U({},c,{value:void 0}),a=U({},a,{value:void 0}),h=[];break;case"textarea":c=on(t,c),a=on(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=Xo)}P(o,a);var p;o=null;for(x in c)if(!a.hasOwnProperty(x)&&c.hasOwnProperty(x)&&c[x]!=null)if(x==="style"){var _=c[x];for(p in _)_.hasOwnProperty(p)&&(o||(o={}),o[p]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(l.hasOwnProperty(x)?h||(h=[]):(h=h||[]).push(x,null));for(x in a){var w=a[x];if(_=c!=null?c[x]:void 0,a.hasOwnProperty(x)&&w!==_&&(w!=null||_!=null))if(x==="style")if(_){for(p in _)!_.hasOwnProperty(p)||w&&w.hasOwnProperty(p)||(o||(o={}),o[p]="");for(p in w)w.hasOwnProperty(p)&&_[p]!==w[p]&&(o||(o={}),o[p]=w[p])}else o||(h||(h=[]),h.push(x,o)),o=w;else x==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,_=_?_.__html:void 0,w!=null&&_!==w&&(h=h||[]).push(x,w)):x==="children"?typeof w!="string"&&typeof w!="number"||(h=h||[]).push(x,""+w):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(l.hasOwnProperty(x)?(w!=null&&x==="onScroll"&&Ue("scroll",t),h||_===w||(h=[])):(h=h||[]).push(x,w))}o&&(h=h||[]).push("style",o);var x=h;(r.updateQueue=x)&&(r.flags|=4)}},ip=function(t,r,o,a){o!==a&&(r.flags|=4)};function Ws(t,r){if(!Be)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function At(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function Oy(t,r,o){var a=r.pendingProps;switch(Su(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(r),null;case 1:return Vt(r.type)&&el(),At(r),null;case 3:return a=r.stateNode,bi(),ze(Bt),ze(Rt),Du(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(sl(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Sn!==null&&(cc(Sn),Sn=null))),Zu(t,r),At(r),null;case 5:bu(r);var c=Qr(Ms.current);if(o=r.type,t!==null&&r.stateNode!=null)rp(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return At(r),null}if(t=Qr(Dn.current),sl(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[On]=r,a[As]=h,t=(r.mode&1)!==0,o){case"dialog":Ue("cancel",a),Ue("close",a);break;case"iframe":case"object":case"embed":Ue("load",a);break;case"video":case"audio":for(c=0;c<Ns.length;c++)Ue(Ns[c],a);break;case"source":Ue("error",a);break;case"img":case"image":case"link":Ue("error",a),Ue("load",a);break;case"details":Ue("toggle",a);break;case"input":ke(a,h),Ue("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Ue("invalid",a);break;case"textarea":We(a,h),Ue("invalid",a)}P(o,h),c=null;for(var p in h)if(h.hasOwnProperty(p)){var _=h[p];p==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&Jo(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&Jo(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(p)&&_!=null&&p==="onScroll"&&Ue("scroll",a)}switch(o){case"input":sn(a),Te(a,h,!0);break;case"textarea":sn(a),ht(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=Xo)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=An(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=p.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=p.createElement(o,{is:a.is}):(t=p.createElement(o),o==="select"&&(p=t,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):t=p.createElementNS(t,o),t[On]=r,t[As]=a,np(t,r,!1,!1),r.stateNode=t;e:{switch(p=G(o,a),o){case"dialog":Ue("cancel",t),Ue("close",t),c=a;break;case"iframe":case"object":case"embed":Ue("load",t),c=a;break;case"video":case"audio":for(c=0;c<Ns.length;c++)Ue(Ns[c],t);c=a;break;case"source":Ue("error",t),c=a;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),c=a;break;case"details":Ue("toggle",t),c=a;break;case"input":ke(t,a),c=be(t,a),Ue("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=U({},a,{value:void 0}),Ue("invalid",t);break;case"textarea":We(t,a),c=on(t,a),Ue("invalid",t);break;default:c=a}P(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var w=_[h];h==="style"?re(t,w):h==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Et(t,w)):h==="children"?typeof w=="string"?(o!=="textarea"||w!=="")&&Ct(t,w):typeof w=="number"&&Ct(t,""+w):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?w!=null&&h==="onScroll"&&Ue("scroll",t):w!=null&&De(t,h,w,p))}switch(o){case"input":sn(t),Te(t,a,!1);break;case"textarea":sn(t),ht(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ye(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?He(t,!!a.multiple,h,!1):a.defaultValue!=null&&He(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=Xo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return At(r),null;case 6:if(t&&r.stateNode!=null)ip(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=Qr(Ms.current),Qr(Dn.current),sl(r)){if(a=r.stateNode,o=r.memoizedProps,a[On]=r,(h=a.nodeValue!==o)&&(t=en,t!==null))switch(t.tag){case 3:Jo(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jo(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[On]=r,r.stateNode=a}return At(r),null;case 13:if(ze($e),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Be&&tn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)lf(),Ni(),r.flags|=98560,h=!1;else if(h=sl(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[On]=r}else Ni(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;At(r),h=!1}else Sn!==null&&(cc(Sn),Sn=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||($e.current&1)!==0?at===0&&(at=3):fc())),r.updateQueue!==null&&(r.flags|=4),At(r),null);case 4:return bi(),Zu(t,r),t===null&&Rs(r.stateNode.containerInfo),At(r),null;case 10:return xu(r.type._context),At(r),null;case 17:return Vt(r.type)&&el(),At(r),null;case 19:if(ze($e),h=r.memoizedState,h===null)return At(r),null;if(a=(r.flags&128)!==0,p=h.rendering,p===null)if(a)Ws(h,!1);else{if(at!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(p=dl(t),p!==null){for(r.flags|=128,Ws(h,!1),a=p.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,p=h.alternate,p===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=p.childLanes,h.lanes=p.lanes,h.child=p.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=p.memoizedProps,h.memoizedState=p.memoizedState,h.updateQueue=p.updateQueue,h.type=p.type,t=p.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Me($e,$e.current&1|2),r.child}t=t.sibling}h.tail!==null&&Ze()>Mi&&(r.flags|=128,a=!0,Ws(h,!1),r.lanes=4194304)}else{if(!a)if(t=dl(p),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Ws(h,!0),h.tail===null&&h.tailMode==="hidden"&&!p.alternate&&!Be)return At(r),null}else 2*Ze()-h.renderingStartTime>Mi&&o!==1073741824&&(r.flags|=128,a=!0,Ws(h,!1),r.lanes=4194304);h.isBackwards?(p.sibling=r.child,r.child=p):(o=h.last,o!==null?o.sibling=p:r.child=p,h.last=p)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Ze(),r.sibling=null,o=$e.current,Me($e,a?o&1|2:o&1),r):(At(r),null);case 22:case 23:return hc(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&(r.mode&1)!==0?(nn&1073741824)!==0&&(At(r),r.subtreeFlags&6&&(r.flags|=8192)):At(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function Dy(t,r){switch(Su(r),r.tag){case 1:return Vt(r.type)&&el(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return bi(),ze(Bt),ze(Rt),Du(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return bu(r),null;case 13:if(ze($e),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Ni()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ze($e),null;case 4:return bi(),null;case 10:return xu(r.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var wl=!1,bt=!1,Ly=typeof WeakSet=="function"?WeakSet:Set,z=null;function Di(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Qe(t,r,a)}else o.current=null}function ec(t,r,o){try{o()}catch(a){Qe(t,r,a)}}var sp=!1;function My(t,r){if(hu=zo,t=Mh(),iu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var p=0,_=-1,w=-1,x=0,b=0,O=t,A=null;t:for(;;){for(var j;O!==o||c!==0&&O.nodeType!==3||(_=p+c),O!==h||a!==0&&O.nodeType!==3||(w=p+a),O.nodeType===3&&(p+=O.nodeValue.length),(j=O.firstChild)!==null;)A=O,O=j;for(;;){if(O===t)break t;if(A===o&&++x===c&&(_=p),A===h&&++b===a&&(w=p),(j=O.nextSibling)!==null)break;O=A,A=O.parentNode}O=j}o=_===-1||w===-1?null:{start:_,end:w}}else o=null}o=o||{start:0,end:0}}else o=null;for(fu={focusedElem:t,selectionRange:o},zo=!1,z=r;z!==null;)if(r=z,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,z=t;else for(;z!==null;){r=z;try{var B=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var V=B.memoizedProps,et=B.memoizedState,k=r.stateNode,S=k.getSnapshotBeforeUpdate(r.elementType===r.type?V:En(r.type,V),et);k.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var T=r.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(D){Qe(r,r.return,D)}if(t=r.sibling,t!==null){t.return=r.return,z=t;break}z=r.return}return B=sp,sp=!1,B}function Bs(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&ec(r,o,h)}c=c.next}while(c!==a)}}function Sl(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function tc(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function op(t){var r=t.alternate;r!==null&&(t.alternate=null,op(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[On],delete r[As],delete r[_u],delete r[vy],delete r[yy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lp(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nc(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Xo));else if(a!==4&&(t=t.child,t!==null))for(nc(t,r,o),t=t.sibling;t!==null;)nc(t,r,o),t=t.sibling}function rc(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(rc(t,r,o),t=t.sibling;t!==null;)rc(t,r,o),t=t.sibling}var It=null,Cn=!1;function gr(t,r,o){for(o=o.child;o!==null;)up(t,r,o),o=o.sibling}function up(t,r,o){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(Do,o)}catch{}switch(o.tag){case 5:bt||Di(o,r);case 6:var a=It,c=Cn;It=null,gr(t,r,o),It=a,Cn=c,It!==null&&(Cn?(t=It,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):It.removeChild(o.stateNode));break;case 18:It!==null&&(Cn?(t=It,o=o.stateNode,t.nodeType===8?gu(t.parentNode,o):t.nodeType===1&&gu(t,o),ws(t)):gu(It,o.stateNode));break;case 4:a=It,c=Cn,It=o.stateNode.containerInfo,Cn=!0,gr(t,r,o),It=a,Cn=c;break;case 0:case 11:case 14:case 15:if(!bt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,p=h.destroy;h=h.tag,p!==void 0&&((h&2)!==0||(h&4)!==0)&&ec(o,r,p),c=c.next}while(c!==a)}gr(t,r,o);break;case 1:if(!bt&&(Di(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Qe(o,r,_)}gr(t,r,o);break;case 21:gr(t,r,o);break;case 22:o.mode&1?(bt=(a=bt)||o.memoizedState!==null,gr(t,r,o),bt=a):gr(t,r,o);break;default:gr(t,r,o)}}function cp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Ly),r.forEach(function(a){var c=$y.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function In(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,p=r,_=p;e:for(;_!==null;){switch(_.tag){case 5:It=_.stateNode,Cn=!1;break e;case 3:It=_.stateNode.containerInfo,Cn=!0;break e;case 4:It=_.stateNode.containerInfo,Cn=!0;break e}_=_.return}if(It===null)throw Error(n(160));up(h,p,c),It=null,Cn=!1;var w=c.alternate;w!==null&&(w.return=null),c.return=null}catch(x){Qe(c,r,x)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)dp(r,t),r=r.sibling}function dp(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(r,t),Mn(t),a&4){try{Bs(3,t,t.return),Sl(3,t)}catch(V){Qe(t,t.return,V)}try{Bs(5,t,t.return)}catch(V){Qe(t,t.return,V)}}break;case 1:In(r,t),Mn(t),a&512&&o!==null&&Di(o,o.return);break;case 5:if(In(r,t),Mn(t),a&512&&o!==null&&Di(o,o.return),t.flags&32){var c=t.stateNode;try{Ct(c,"")}catch(V){Qe(t,t.return,V)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,p=o!==null?o.memoizedProps:h,_=t.type,w=t.updateQueue;if(t.updateQueue=null,w!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&K(c,h),G(_,p);var x=G(_,h);for(p=0;p<w.length;p+=2){var b=w[p],O=w[p+1];b==="style"?re(c,O):b==="dangerouslySetInnerHTML"?Et(c,O):b==="children"?Ct(c,O):De(c,b,O,x)}switch(_){case"input":ie(c,h);break;case"textarea":me(c,h);break;case"select":var A=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var j=h.value;j!=null?He(c,!!h.multiple,j,!1):A!==!!h.multiple&&(h.defaultValue!=null?He(c,!!h.multiple,h.defaultValue,!0):He(c,!!h.multiple,h.multiple?[]:"",!1))}c[As]=h}catch(V){Qe(t,t.return,V)}}break;case 6:if(In(r,t),Mn(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(V){Qe(t,t.return,V)}}break;case 3:if(In(r,t),Mn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{ws(r.containerInfo)}catch(V){Qe(t,t.return,V)}break;case 4:In(r,t),Mn(t);break;case 13:In(r,t),Mn(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(oc=Ze())),a&4&&cp(t);break;case 22:if(b=o!==null&&o.memoizedState!==null,t.mode&1?(bt=(x=bt)||b,In(r,t),bt=x):In(r,t),Mn(t),a&8192){if(x=t.memoizedState!==null,(t.stateNode.isHidden=x)&&!b&&(t.mode&1)!==0)for(z=t,b=t.child;b!==null;){for(O=z=b;z!==null;){switch(A=z,j=A.child,A.tag){case 0:case 11:case 14:case 15:Bs(4,A,A.return);break;case 1:Di(A,A.return);var B=A.stateNode;if(typeof B.componentWillUnmount=="function"){a=A,o=A.return;try{r=a,B.props=r.memoizedProps,B.state=r.memoizedState,B.componentWillUnmount()}catch(V){Qe(a,o,V)}}break;case 5:Di(A,A.return);break;case 22:if(A.memoizedState!==null){pp(O);continue}}j!==null?(j.return=A,z=j):pp(O)}b=b.sibling}e:for(b=null,O=t;;){if(O.tag===5){if(b===null){b=O;try{c=O.stateNode,x?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=O.stateNode,w=O.memoizedProps.style,p=w!=null&&w.hasOwnProperty("display")?w.display:null,_.style.display=Xt("display",p))}catch(V){Qe(t,t.return,V)}}}else if(O.tag===6){if(b===null)try{O.stateNode.nodeValue=x?"":O.memoizedProps}catch(V){Qe(t,t.return,V)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;b===O&&(b=null),O=O.return}b===O&&(b=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:In(r,t),Mn(t),a&4&&cp(t);break;case 21:break;default:In(r,t),Mn(t)}}function Mn(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(lp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ct(c,""),a.flags&=-33);var h=ap(t);rc(t,h,c);break;case 3:case 4:var p=a.stateNode.containerInfo,_=ap(t);nc(t,_,p);break;default:throw Error(n(161))}}catch(w){Qe(t,t.return,w)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Fy(t,r,o){z=t,hp(t)}function hp(t,r,o){for(var a=(t.mode&1)!==0;z!==null;){var c=z,h=c.child;if(c.tag===22&&a){var p=c.memoizedState!==null||wl;if(!p){var _=c.alternate,w=_!==null&&_.memoizedState!==null||bt;_=wl;var x=bt;if(wl=p,(bt=w)&&!x)for(z=c;z!==null;)p=z,w=p.child,p.tag===22&&p.memoizedState!==null?mp(c):w!==null?(w.return=p,z=w):mp(c);for(;h!==null;)z=h,hp(h),h=h.sibling;z=c,wl=_,bt=x}fp(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,z=h):fp(t)}}function fp(t){for(;z!==null;){var r=z;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:bt||Sl(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!bt)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:En(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&pf(r,h,a);break;case 3:var p=r.updateQueue;if(p!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}pf(r,p,o)}break;case 5:var _=r.stateNode;if(o===null&&r.flags&4){o=_;var w=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&o.focus();break;case"img":w.src&&(o.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var x=r.alternate;if(x!==null){var b=x.memoizedState;if(b!==null){var O=b.dehydrated;O!==null&&ws(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}bt||r.flags&512&&tc(r)}catch(A){Qe(r,r.return,A)}}if(r===t){z=null;break}if(o=r.sibling,o!==null){o.return=r.return,z=o;break}z=r.return}}function pp(t){for(;z!==null;){var r=z;if(r===t){z=null;break}var o=r.sibling;if(o!==null){o.return=r.return,z=o;break}z=r.return}}function mp(t){for(;z!==null;){var r=z;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Sl(4,r)}catch(w){Qe(r,o,w)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(w){Qe(r,c,w)}}var h=r.return;try{tc(r)}catch(w){Qe(r,h,w)}break;case 5:var p=r.return;try{tc(r)}catch(w){Qe(r,p,w)}}}catch(w){Qe(r,r.return,w)}if(r===t){z=null;break}var _=r.sibling;if(_!==null){_.return=r.return,z=_;break}z=r.return}}var jy=Math.ceil,El=Le.ReactCurrentDispatcher,ic=Le.ReactCurrentOwner,pn=Le.ReactCurrentBatchConfig,we=0,pt=null,st=null,kt=0,nn=0,Li=dr(0),at=0,Vs=null,Xr=0,Cl=0,sc=0,Hs=null,$t=null,oc=0,Mi=1/0,qn=null,Il=!1,lc=null,_r=null,kl=!1,vr=null,Tl=0,$s=0,ac=null,xl=-1,Nl=0;function Ft(){return(we&6)!==0?Ze():xl!==-1?xl:xl=Ze()}function yr(t){return(t.mode&1)===0?1:(we&2)!==0&&kt!==0?kt&-kt:Sy.transition!==null?(Nl===0&&(Nl=lh()),Nl):(t=Ne,t!==0||(t=window.event,t=t===void 0?16:gh(t.type)),t)}function kn(t,r,o,a){if(50<$s)throw $s=0,ac=null,Error(n(185));ms(t,o,a),((we&2)===0||t!==pt)&&(t===pt&&((we&2)===0&&(Cl|=o),at===4&&wr(t,kt)),Gt(t,a),o===1&&we===0&&(r.mode&1)===0&&(Mi=Ze()+500,nl&&fr()))}function Gt(t,r){var o=t.callbackNode;Sv(t,r);var a=Fo(t,t===pt?kt:0);if(a===0)o!==null&&ih(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&ih(o),r===1)t.tag===0?wy(_p.bind(null,t)):tf(_p.bind(null,t)),gy(function(){(we&6)===0&&fr()}),o=null;else{switch(ah(a)){case 1:o=Wa;break;case 4:o=sh;break;case 16:o=Oo;break;case 536870912:o=oh;break;default:o=Oo}o=kp(o,gp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function gp(t,r){if(xl=-1,Nl=0,(we&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Fi()&&t.callbackNode!==o)return null;var a=Fo(t,t===pt?kt:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||r)r=Rl(t,a);else{r=a;var c=we;we|=2;var h=yp();(pt!==t||kt!==r)&&(qn=null,Mi=Ze()+500,ei(t,r));do try{Wy();break}catch(_){vp(t,_)}while(!0);Tu(),El.current=h,we=c,st!==null?r=0:(pt=null,kt=0,r=at)}if(r!==0){if(r===2&&(c=Ba(t),c!==0&&(a=c,r=uc(t,c))),r===1)throw o=Vs,ei(t,0),wr(t,a),Gt(t,Ze()),o;if(r===6)wr(t,a);else{if(c=t.current.alternate,(a&30)===0&&!Uy(c)&&(r=Rl(t,a),r===2&&(h=Ba(t),h!==0&&(a=h,r=uc(t,h))),r===1))throw o=Vs,ei(t,0),wr(t,a),Gt(t,Ze()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:ti(t,$t,qn);break;case 3:if(wr(t,a),(a&130023424)===a&&(r=oc+500-Ze(),10<r)){if(Fo(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){Ft(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=mu(ti.bind(null,t,$t,qn),r);break}ti(t,$t,qn);break;case 4:if(wr(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var p=31-yn(a);h=1<<p,p=r[p],p>c&&(c=p),a&=~h}if(a=c,a=Ze()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*jy(a/1960))-a,10<a){t.timeoutHandle=mu(ti.bind(null,t,$t,qn),a);break}ti(t,$t,qn);break;case 5:ti(t,$t,qn);break;default:throw Error(n(329))}}}return Gt(t,Ze()),t.callbackNode===o?gp.bind(null,t):null}function uc(t,r){var o=Hs;return t.current.memoizedState.isDehydrated&&(ei(t,r).flags|=256),t=Rl(t,r),t!==2&&(r=$t,$t=o,r!==null&&cc(r)),t}function cc(t){$t===null?$t=t:$t.push.apply($t,t)}function Uy(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!wn(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function wr(t,r){for(r&=~sc,r&=~Cl,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-yn(r),a=1<<o;t[o]=-1,r&=~a}}function _p(t){if((we&6)!==0)throw Error(n(327));Fi();var r=Fo(t,0);if((r&1)===0)return Gt(t,Ze()),null;var o=Rl(t,r);if(t.tag!==0&&o===2){var a=Ba(t);a!==0&&(r=a,o=uc(t,a))}if(o===1)throw o=Vs,ei(t,0),wr(t,r),Gt(t,Ze()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,ti(t,$t,qn),Gt(t,Ze()),null}function dc(t,r){var o=we;we|=1;try{return t(r)}finally{we=o,we===0&&(Mi=Ze()+500,nl&&fr())}}function Zr(t){vr!==null&&vr.tag===0&&(we&6)===0&&Fi();var r=we;we|=1;var o=pn.transition,a=Ne;try{if(pn.transition=null,Ne=1,t)return t()}finally{Ne=a,pn.transition=o,we=r,(we&6)===0&&fr()}}function hc(){nn=Li.current,ze(Li)}function ei(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,my(o)),st!==null)for(o=st.return;o!==null;){var a=o;switch(Su(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&el();break;case 3:bi(),ze(Bt),ze(Rt),Du();break;case 5:bu(a);break;case 4:bi();break;case 13:ze($e);break;case 19:ze($e);break;case 10:xu(a.type._context);break;case 22:case 23:hc()}o=o.return}if(pt=t,st=t=Sr(t.current,null),kt=nn=r,at=0,Vs=null,sc=Cl=Xr=0,$t=Hs=null,Yr!==null){for(r=0;r<Yr.length;r++)if(o=Yr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var p=h.next;h.next=c,a.next=p}o.pending=a}Yr=null}return t}function vp(t,r){do{var o=st;try{if(Tu(),hl.current=gl,fl){for(var a=Ge.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}fl=!1}if(Jr=0,ft=lt=Ge=null,Fs=!1,js=0,ic.current=null,o===null||o.return===null){at=1,Vs=r,st=null;break}e:{var h=t,p=o.return,_=o,w=r;if(r=kt,_.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var x=w,b=_,O=b.tag;if((b.mode&1)===0&&(O===0||O===11||O===15)){var A=b.alternate;A?(b.updateQueue=A.updateQueue,b.memoizedState=A.memoizedState,b.lanes=A.lanes):(b.updateQueue=null,b.memoizedState=null)}var j=Vf(p);if(j!==null){j.flags&=-257,Hf(j,p,_,h,r),j.mode&1&&Bf(h,x,r),r=j,w=x;var B=r.updateQueue;if(B===null){var V=new Set;V.add(w),r.updateQueue=V}else B.add(w);break e}else{if((r&1)===0){Bf(h,x,r),fc();break e}w=Error(n(426))}}else if(Be&&_.mode&1){var et=Vf(p);if(et!==null){(et.flags&65536)===0&&(et.flags|=256),Hf(et,p,_,h,r),Iu(Oi(w,_));break e}}h=w=Oi(w,_),at!==4&&(at=2),Hs===null?Hs=[h]:Hs.push(h),h=p;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var k=zf(h,w,r);ff(h,k);break e;case 1:_=w;var S=h.type,T=h.stateNode;if((h.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(_r===null||!_r.has(T)))){h.flags|=65536,r&=-r,h.lanes|=r;var D=Wf(h,_,r);ff(h,D);break e}}h=h.return}while(h!==null)}Sp(o)}catch(H){r=H,st===o&&o!==null&&(st=o=o.return);continue}break}while(!0)}function yp(){var t=El.current;return El.current=gl,t===null?gl:t}function fc(){(at===0||at===3||at===2)&&(at=4),pt===null||(Xr&268435455)===0&&(Cl&268435455)===0||wr(pt,kt)}function Rl(t,r){var o=we;we|=2;var a=yp();(pt!==t||kt!==r)&&(qn=null,ei(t,r));do try{zy();break}catch(c){vp(t,c)}while(!0);if(Tu(),we=o,El.current=a,st!==null)throw Error(n(261));return pt=null,kt=0,at}function zy(){for(;st!==null;)wp(st)}function Wy(){for(;st!==null&&!hv();)wp(st)}function wp(t){var r=Ip(t.alternate,t,nn);t.memoizedProps=t.pendingProps,r===null?Sp(t):st=r,ic.current=null}function Sp(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=Oy(o,r,nn),o!==null){st=o;return}}else{if(o=Dy(o,r),o!==null){o.flags&=32767,st=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=t}while(r!==null);at===0&&(at=5)}function ti(t,r,o){var a=Ne,c=pn.transition;try{pn.transition=null,Ne=1,By(t,r,o,a)}finally{pn.transition=c,Ne=a}return null}function By(t,r,o,a){do Fi();while(vr!==null);if((we&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Ev(t,h),t===pt&&(st=pt=null,kt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||kl||(kl=!0,kp(Oo,function(){return Fi(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=pn.transition,pn.transition=null;var p=Ne;Ne=1;var _=we;we|=4,ic.current=null,My(t,o),dp(o,t),ay(fu),zo=!!hu,fu=hu=null,t.current=o,Fy(o),fv(),we=_,Ne=p,pn.transition=h}else t.current=o;if(kl&&(kl=!1,vr=t,Tl=c),h=t.pendingLanes,h===0&&(_r=null),gv(o.stateNode),Gt(t,Ze()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Il)throw Il=!1,t=lc,lc=null,t;return(Tl&1)!==0&&t.tag!==0&&Fi(),h=t.pendingLanes,(h&1)!==0?t===ac?$s++:($s=0,ac=t):$s=0,fr(),null}function Fi(){if(vr!==null){var t=ah(Tl),r=pn.transition,o=Ne;try{if(pn.transition=null,Ne=16>t?16:t,vr===null)var a=!1;else{if(t=vr,vr=null,Tl=0,(we&6)!==0)throw Error(n(331));var c=we;for(we|=4,z=t.current;z!==null;){var h=z,p=h.child;if((z.flags&16)!==0){var _=h.deletions;if(_!==null){for(var w=0;w<_.length;w++){var x=_[w];for(z=x;z!==null;){var b=z;switch(b.tag){case 0:case 11:case 15:Bs(8,b,h)}var O=b.child;if(O!==null)O.return=b,z=O;else for(;z!==null;){b=z;var A=b.sibling,j=b.return;if(op(b),b===x){z=null;break}if(A!==null){A.return=j,z=A;break}z=j}}}var B=h.alternate;if(B!==null){var V=B.child;if(V!==null){B.child=null;do{var et=V.sibling;V.sibling=null,V=et}while(V!==null)}}z=h}}if((h.subtreeFlags&2064)!==0&&p!==null)p.return=h,z=p;else e:for(;z!==null;){if(h=z,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Bs(9,h,h.return)}var k=h.sibling;if(k!==null){k.return=h.return,z=k;break e}z=h.return}}var S=t.current;for(z=S;z!==null;){p=z;var T=p.child;if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,z=T;else e:for(p=S;z!==null;){if(_=z,(_.flags&2048)!==0)try{switch(_.tag){case 0:case 11:case 15:Sl(9,_)}}catch(H){Qe(_,_.return,H)}if(_===p){z=null;break e}var D=_.sibling;if(D!==null){D.return=_.return,z=D;break e}z=_.return}}if(we=c,fr(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(Do,t)}catch{}a=!0}return a}finally{Ne=o,pn.transition=r}}return!1}function Ep(t,r,o){r=Oi(o,r),r=zf(t,r,1),t=mr(t,r,1),r=Ft(),t!==null&&(ms(t,1,r),Gt(t,r))}function Qe(t,r,o){if(t.tag===3)Ep(t,t,o);else for(;r!==null;){if(r.tag===3){Ep(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_r===null||!_r.has(a))){t=Oi(o,t),t=Wf(r,t,1),r=mr(r,t,1),t=Ft(),r!==null&&(ms(r,1,t),Gt(r,t));break}}r=r.return}}function Vy(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=Ft(),t.pingedLanes|=t.suspendedLanes&o,pt===t&&(kt&o)===o&&(at===4||at===3&&(kt&130023424)===kt&&500>Ze()-oc?ei(t,0):sc|=o),Gt(t,r)}function Cp(t,r){r===0&&((t.mode&1)===0?r=1:(r=Mo,Mo<<=1,(Mo&130023424)===0&&(Mo=4194304)));var o=Ft();t=$n(t,r),t!==null&&(ms(t,r,o),Gt(t,o))}function Hy(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Cp(t,o)}function $y(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),Cp(t,o)}var Ip;Ip=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||Bt.current)Ht=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return Ht=!1,by(t,r,o);Ht=(t.flags&131072)!==0}else Ht=!1,Be&&(r.flags&1048576)!==0&&nf(r,il,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;yl(t,r),t=r.pendingProps;var c=ki(r,Rt.current);Ai(r,o),c=Fu(null,r,a,t,c,o);var h=ju();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Vt(a)?(h=!0,tl(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Pu(r),c.updater=_l,r.stateNode=c,c._reactInternals=r,Hu(r,a,t,o),r=qu(null,r,a,!0,h,o)):(r.tag=0,Be&&h&&wu(r),Mt(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(yl(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=Ky(a),t=En(a,t),c){case 0:r=Ku(null,r,a,t,o);break e;case 1:r=Qf(null,r,a,t,o);break e;case 11:r=$f(null,r,a,t,o);break e;case 14:r=Gf(null,r,a,En(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:En(a,c),Ku(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:En(a,c),Qf(t,r,a,c,o);case 3:e:{if(Jf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,hf(t,r),cl(r,a,null,o);var p=r.memoizedState;if(a=p.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=Oi(Error(n(423)),r),r=Xf(t,r,a,o,c);break e}else if(a!==c){c=Oi(Error(n(424)),r),r=Xf(t,r,a,o,c);break e}else for(tn=cr(r.stateNode.containerInfo.firstChild),en=r,Be=!0,Sn=null,o=cf(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ni(),a===c){r=Kn(t,r,o);break e}Mt(t,r,a,o)}r=r.child}return r;case 5:return mf(r),t===null&&Cu(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,p=c.children,pu(a,c)?p=null:h!==null&&pu(a,h)&&(r.flags|=32),Yf(t,r),Mt(t,r,p,o),r.child;case 6:return t===null&&Cu(r),null;case 13:return Zf(t,r,o);case 4:return Au(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=Ri(r,null,a,o):Mt(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:En(a,c),$f(t,r,a,c,o);case 7:return Mt(t,r,r.pendingProps,o),r.child;case 8:return Mt(t,r,r.pendingProps.children,o),r.child;case 12:return Mt(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,p=c.value,Me(ll,a._currentValue),a._currentValue=p,h!==null)if(wn(h.value,p)){if(h.children===c.children&&!Bt.current){r=Kn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var _=h.dependencies;if(_!==null){p=h.child;for(var w=_.firstContext;w!==null;){if(w.context===a){if(h.tag===1){w=Gn(-1,o&-o),w.tag=2;var x=h.updateQueue;if(x!==null){x=x.shared;var b=x.pending;b===null?w.next=w:(w.next=b.next,b.next=w),x.pending=w}}h.lanes|=o,w=h.alternate,w!==null&&(w.lanes|=o),Nu(h.return,o,r),_.lanes|=o;break}w=w.next}}else if(h.tag===10)p=h.type===r.type?null:h.child;else if(h.tag===18){if(p=h.return,p===null)throw Error(n(341));p.lanes|=o,_=p.alternate,_!==null&&(_.lanes|=o),Nu(p,o,r),p=h.sibling}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===r){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}Mt(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Ai(r,o),c=hn(c),a=a(c),r.flags|=1,Mt(t,r,a,o),r.child;case 14:return a=r.type,c=En(a,r.pendingProps),c=En(a.type,c),Gf(t,r,a,c,o);case 15:return Kf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:En(a,c),yl(t,r),r.tag=1,Vt(a)?(t=!0,tl(r)):t=!1,Ai(r,o),jf(r,a,c),Hu(r,a,c,o),qu(null,r,a,!0,t,o);case 19:return tp(t,r,o);case 22:return qf(t,r,o)}throw Error(n(156,r.tag))};function kp(t,r){return rh(t,r)}function Gy(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,r,o,a){return new Gy(t,r,o,a)}function pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ky(t){if(typeof t=="function")return pc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wt)return 11;if(t===rt)return 14}return 2}function Sr(t,r){var o=t.alternate;return o===null?(o=mn(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Pl(t,r,o,a,c,h){var p=2;if(a=t,typeof t=="function")pc(t)&&(p=1);else if(typeof t=="string")p=5;else e:switch(t){case nt:return ni(o.children,c,h,r);case Tt:p=8,c|=8;break;case rn:return t=mn(12,o,r,c|2),t.elementType=rn,t.lanes=h,t;case St:return t=mn(13,o,r,c),t.elementType=St,t.lanes=h,t;case Dt:return t=mn(19,o,r,c),t.elementType=Dt,t.lanes=h,t;case ve:return Al(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ot:p=10;break e;case vn:p=9;break e;case wt:p=11;break e;case rt:p=14;break e;case Ve:p=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=mn(p,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function ni(t,r,o,a){return t=mn(7,t,a,r),t.lanes=o,t}function Al(t,r,o,a){return t=mn(22,t,a,r),t.elementType=ve,t.lanes=o,t.stateNode={isHidden:!1},t}function mc(t,r,o){return t=mn(6,t,null,r),t.lanes=o,t}function gc(t,r,o){return r=mn(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function qy(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Va(0),this.expirationTimes=Va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Va(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function _c(t,r,o,a,c,h,p,_,w){return t=new qy(t,r,o,_,w),r===1?(r=1,h===!0&&(r|=8)):r=0,h=mn(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(h),t}function Yy(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tt,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function Tp(t){if(!t)return hr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Vt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Vt(o))return Zh(t,o,r)}return r}function xp(t,r,o,a,c,h,p,_,w){return t=_c(o,a,!0,t,c,h,p,_,w),t.context=Tp(null),o=t.current,a=Ft(),c=yr(o),h=Gn(a,c),h.callback=r??null,mr(o,h,c),t.current.lanes=c,ms(t,c,a),Gt(t,a),t}function bl(t,r,o,a){var c=r.current,h=Ft(),p=yr(c);return o=Tp(o),r.context===null?r.context=o:r.pendingContext=o,r=Gn(h,p),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=mr(c,r,p),t!==null&&(kn(t,c,p,h),ul(t,c,p)),p}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function vc(t,r){Np(t,r),(t=t.alternate)&&Np(t,r)}function Qy(){return null}var Rp=typeof reportError=="function"?reportError:function(t){console.error(t)};function yc(t){this._internalRoot=t}Dl.prototype.render=yc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));bl(t,r,null,null)},Dl.prototype.unmount=yc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Zr(function(){bl(null,t,null,null)}),r[Wn]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var r=dh();t={blockedOn:null,target:t,priority:r};for(var o=0;o<lr.length&&r!==0&&r<lr[o].priority;o++);lr.splice(o,0,t),o===0&&ph(t)}};function wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function Jy(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var x=Ol(p);h.call(x)}}var p=xp(r,a,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=p,t[Wn]=p.current,Rs(t.nodeType===8?t.parentNode:t),Zr(),p}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var x=Ol(w);_.call(x)}}var w=_c(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=w,t[Wn]=w.current,Rs(t.nodeType===8?t.parentNode:t),Zr(function(){bl(r,w,o,a)}),w}function Ml(t,r,o,a,c){var h=o._reactRootContainer;if(h){var p=h;if(typeof c=="function"){var _=c;c=function(){var w=Ol(p);_.call(w)}}bl(r,p,t,c)}else p=Jy(o,r,t,c,a);return Ol(p)}uh=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=ps(r.pendingLanes);o!==0&&(Ha(r,o|1),Gt(r,Ze()),(we&6)===0&&(Mi=Ze()+500,fr()))}break;case 13:Zr(function(){var a=$n(t,1);if(a!==null){var c=Ft();kn(a,t,1,c)}}),vc(t,1)}},$a=function(t){if(t.tag===13){var r=$n(t,134217728);if(r!==null){var o=Ft();kn(r,t,134217728,o)}vc(t,134217728)}},ch=function(t){if(t.tag===13){var r=yr(t),o=$n(t,r);if(o!==null){var a=Ft();kn(o,t,r,a)}vc(t,r)}},dh=function(){return Ne},hh=function(t,r){var o=Ne;try{return Ne=t,r()}finally{Ne=o}},ln=function(t,r,o){switch(r){case"input":if(ie(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=Zo(a);if(!c)throw Error(n(90));X(a),ie(a,c)}}}break;case"textarea":me(t,o);break;case"select":r=o.value,r!=null&&He(t,!!o.multiple,r,!1)}},us=dc,cs=Zr;var Xy={usingClientEntryPoint:!1,Events:[bs,Ci,Zo,un,Po,dc]},Gs={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zy={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Le.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=th(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||Qy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{Do=Fl.inject(Zy),bn=Fl}catch{}}return Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xy,Kt.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(r))throw Error(n(200));return Yy(t,r,null,o)},Kt.createRoot=function(t,r){if(!wc(t))throw Error(n(299));var o=!1,a="",c=Rp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=_c(t,1,!1,null,null,o,!1,a,c),t[Wn]=r.current,Rs(t.nodeType===8?t.parentNode:t),new yc(r)},Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=th(r),t=t===null?null:t.stateNode,t},Kt.flushSync=function(t){return Zr(t)},Kt.hydrate=function(t,r,o){if(!Ll(r))throw Error(n(200));return Ml(null,t,r,!0,o)},Kt.hydrateRoot=function(t,r,o){if(!wc(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",p=Rp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),r=xp(r,null,t,1,o??null,c,!1,h,p),t[Wn]=r.current,Rs(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new Dl(r)},Kt.render=function(t,r,o){if(!Ll(r))throw Error(n(200));return Ml(null,t,r,!1,o)},Kt.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(n(40));return t._reactRootContainer?(Zr(function(){Ml(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1},Kt.unstable_batchedUpdates=dc,Kt.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!Ll(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ml(t,r,o,!1,a)},Kt.version="18.3.1-next-f1338f8080-20240426",Kt}var jp;function a0(){if(jp)return Cc.exports;jp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Cc.exports=l0(),Cc.exports}var Up;function u0(){if(Up)return jl;Up=1;var i=a0();return jl.createRoot=i.createRoot,jl.hydrateRoot=i.hydrateRoot,jl}var c0=u0();const d0=Xm(c0),h0=()=>{};var zp={};/**
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
 */const L=function(i,e){if(!i)throw ts(e)},ts=function(i){return new Error("Firebase Database ("+Zm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const eg=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},f0=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],m=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,m=l+2<i.length,g=m?i[l+2]:0,v=u>>2,y=(u&3)<<4|f>>4;let I=(f&15)<<2|g>>6,N=g&63;m||(N=64,d||(I=64)),s.push(n[v],n[y],n[I],n[N])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(eg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):f0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const y=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||y==null)throw new p0;const I=u<<2|f>>4;if(s.push(I),g!==64){const N=f<<4&240|g>>2;if(s.push(N),y!==64){const M=g<<6&192|y;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class p0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tg=function(i){const e=eg(i);return ad.encodeByteArray(e,!0)},Jl=function(i){return tg(i).replace(/\./g,"")},Xl=function(i){try{return ad.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const v0=()=>_0().__FIREBASE_DEFAULTS__,y0=()=>{if(typeof process>"u"||typeof zp>"u")return;const i=zp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},w0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Xl(i[1]);return e&&JSON.parse(e)},ud=()=>{try{return h0()||v0()||y0()||w0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},rg=i=>{var e,n;return(n=(e=ud())==null?void 0:e.emulatorHosts)==null?void 0:n[i]},S0=i=>{const e=rg(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ig=()=>{var i;return(i=ud())==null?void 0:i.config},sg=i=>{var e;return(e=ud())==null?void 0:e[`_${i}`]};/**
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
 */class Fn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function E0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Jl(JSON.stringify(n)),Jl(JSON.stringify(d)),""].join(".")}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function C0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function I0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function k0(){const i=zt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function T0(){return Zm.NODE_ADMIN===!0}function x0(){try{return typeof indexedDB=="object"}catch{return!1}}function N0(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}/**
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
 */const R0="FirebaseError";class Br extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=R0,Object.setPrototypeOf(this,Br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?P0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new Br(l,f,s)}}function P0(i,e){return i.replace(A0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const A0=/\{\$([^}]+)}/g;/**
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
 */function oo(i){return JSON.parse(i)}function ut(i){return JSON.stringify(i)}/**
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
 */const lg=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=oo(Xl(u[0])||""),n=oo(Xl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},b0=function(i){const e=lg(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},O0=function(i){const e=lg(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function zn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Ki(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Zl(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ea(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function li(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(Wp(u)&&Wp(d)){if(!li(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Wp(i){return i!==null&&typeof i=="object"}/**
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
 */function ns(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class D0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)s[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const I=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(I<<1|I>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,v;for(let y=0;y<80;y++){y<40?y<20?(g=f^u&(d^f),v=1518500249):(g=u^d^f,v=1859775393):y<60?(g=u&d|f&(u|d),v=2400959708):(g=u^d^f,v=3395469782);const I=(l<<5|l>>>27)+g+m+v+s[y]&4294967295;m=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=I}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function L0(i,e){const n=new M0(i,e);return n.subscribe.bind(n)}class M0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");F0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Tc),l.error===void 0&&(l.error=Tc),l.complete===void 0&&(l.complete=Tc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F0(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Tc(){}function qi(i,e){return`${i} failed: ${e} argument `}/**
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
 */const j0=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,L(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Ea=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Jt(i){return i&&i._delegate?i._delegate:i}/**
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
 */function wo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ag(i){return(await fetch(i,{credentials:"include"})).ok}class ai{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ri="[DEFAULT]";/**
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
 */class U0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fn;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(W0(e))try{this.getOrInitializeService({instanceIdentifier:ri})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ri){return this.instances.has(e)}getOptions(e=ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const u=this.instances.get(s);return u&&e(u,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:z0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ri){return this.component?this.component.multipleInstances?e:ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function z0(i){return i===ri?void 0:i}function W0(i){return i.instantiationMode==="EAGER"}/**
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
 */class B0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new U0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ae||(Ae={}));const V0={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},H0=Ae.INFO,$0={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},G0=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=$0[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=H0,this._logHandler=G0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?V0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const K0=(i,e)=>e.some(n=>i instanceof n);let Bp,Vp;function q0(){return Bp||(Bp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y0(){return Vp||(Vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ug=new WeakMap,zc=new WeakMap,cg=new WeakMap,xc=new WeakMap,hd=new WeakMap;function Q0(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Ar(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&ug.set(n,i)}).catch(()=>{}),hd.set(e,i),e}function J0(i){if(zc.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});zc.set(i,e)}let Wc={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return zc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||cg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function X0(i){Wc=i(Wc)}function Z0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Nc(this),e,...n);return cg.set(s,e.sort?e.sort():[e]),Ar(s)}:Y0().includes(i)?function(...e){return i.apply(Nc(this),e),Ar(ug.get(this))}:function(...e){return Ar(i.apply(Nc(this),e))}}function ew(i){return typeof i=="function"?Z0(i):(i instanceof IDBTransaction&&J0(i),K0(i,q0())?new Proxy(i,Wc):i)}function Ar(i){if(i instanceof IDBRequest)return Q0(i);if(xc.has(i))return xc.get(i);const e=ew(i);return e!==i&&(xc.set(i,e),hd.set(e,i)),e}const Nc=i=>hd.get(i);function tw(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Ar(d);return s&&d.addEventListener("upgradeneeded",m=>{s(Ar(d.result),m.oldVersion,m.newVersion,Ar(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{u&&m.addEventListener("close",()=>u()),l&&m.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const nw=["get","getKey","getAll","getAllKeys","count"],rw=["put","add","delete","clear"],Rc=new Map;function Hp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=rw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||nw.includes(n)))return;const u=async function(d,...f){const m=this.transaction(d,l?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&m.done]))[0]};return Rc.set(e,u),u}X0(i=>({...i,get:(e,n,s)=>Hp(e,n)||i.get(e,n,s),has:(e,n)=>!!Hp(e,n)||i.has(e,n)}));/**
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
 */class iw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function sw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bc="@firebase/app",$p="0.14.10";/**
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
 */const Zn=new dd("@firebase/app"),ow="@firebase/app-compat",lw="@firebase/analytics-compat",aw="@firebase/analytics",uw="@firebase/app-check-compat",cw="@firebase/app-check",dw="@firebase/auth",hw="@firebase/auth-compat",fw="@firebase/database",pw="@firebase/data-connect",mw="@firebase/database-compat",gw="@firebase/functions",_w="@firebase/functions-compat",vw="@firebase/installations",yw="@firebase/installations-compat",ww="@firebase/messaging",Sw="@firebase/messaging-compat",Ew="@firebase/performance",Cw="@firebase/performance-compat",Iw="@firebase/remote-config",kw="@firebase/remote-config-compat",Tw="@firebase/storage",xw="@firebase/storage-compat",Nw="@firebase/firestore",Rw="@firebase/ai",Pw="@firebase/firestore-compat",Aw="firebase",bw="12.11.0";/**
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
 */const Vc="[DEFAULT]",Ow={[Bc]:"fire-core",[ow]:"fire-core-compat",[aw]:"fire-analytics",[lw]:"fire-analytics-compat",[cw]:"fire-app-check",[uw]:"fire-app-check-compat",[dw]:"fire-auth",[hw]:"fire-auth-compat",[fw]:"fire-rtdb",[pw]:"fire-data-connect",[mw]:"fire-rtdb-compat",[gw]:"fire-fn",[_w]:"fire-fn-compat",[vw]:"fire-iid",[yw]:"fire-iid-compat",[ww]:"fire-fcm",[Sw]:"fire-fcm-compat",[Ew]:"fire-perf",[Cw]:"fire-perf-compat",[Iw]:"fire-rc",[kw]:"fire-rc-compat",[Tw]:"fire-gcs",[xw]:"fire-gcs-compat",[Nw]:"fire-fst",[Pw]:"fire-fst-compat",[Rw]:"fire-vertex","fire-js":"fire-js",[Aw]:"fire-js-all"};/**
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
 */const ta=new Map,Dw=new Map,Hc=new Map;function Gp(i,e){try{i.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Yi(i){const e=i.name;if(Hc.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,i);for(const n of ta.values())Gp(n,i);for(const n of Dw.values())Gp(n,i);return!0}function fd(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Tn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Lw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new yo("app","Firebase",Lw);/**
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
 */class Mw{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=bw;function dg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s={name:Vc,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw br.create("bad-app-name",{appName:String(l)});if(n||(n=ig()),!n)throw br.create("no-options");const u=ta.get(l);if(u){if(li(n,u.options)&&li(s,u.config))return u;throw br.create("duplicate-app",{appName:l})}const d=new B0(l);for(const m of Hc.values())d.addComponent(m);const f=new Mw(n,s,d);return ta.set(l,f),f}function hg(i=Vc){const e=ta.get(i);if(!e&&i===Vc&&ig())return dg();if(!e)throw br.create("no-app",{appName:i});return e}function Or(i,e,n){let s=Ow[i]??i;n&&(s+=`-${n}`);const l=s.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(d.join(" "));return}Yi(new ai(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Fw="firebase-heartbeat-database",jw=1,lo="firebase-heartbeat-store";let Pc=null;function fg(){return Pc||(Pc=tw(Fw,jw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(lo)}catch(n){console.warn(n)}}}}).catch(i=>{throw br.create("idb-open",{originalErrorMessage:i.message})})),Pc}async function Uw(i){try{const n=(await fg()).transaction(lo),s=await n.objectStore(lo).get(pg(i));return await n.done,s}catch(e){if(e instanceof Br)Zn.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function Kp(i,e){try{const s=(await fg()).transaction(lo,"readwrite");await s.objectStore(lo).put(e,pg(i)),await s.done}catch(n){if(n instanceof Br)Zn.warn(n.message);else{const s=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(s.message)}}}function pg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const zw=1024,Ww=30;class Bw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=qp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>Ww){const d=$w(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Zn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qp(),{heartbeatsToSend:s,unsentEntries:l}=Vw(this._heartbeatsCache.heartbeats),u=Jl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Zn.warn(n),""}}}function qp(){return new Date().toISOString().substring(0,10)}function Vw(i,e=zw){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),Yp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Yp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x0()?N0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Uw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Kp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Kp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yp(i){return Jl(JSON.stringify({version:2,heartbeats:i})).length}function $w(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function Gw(i){Yi(new ai("platform-logger",e=>new iw(e),"PRIVATE")),Yi(new ai("heartbeat",e=>new Bw(e),"PRIVATE")),Or(Bc,$p,i),Or(Bc,$p,"esm2020"),Or("fire-js","")}Gw("");var Kw="firebase",qw="12.11.0";/**
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
 */Or(Kw,qw,"app");var Qp={};const Jp="@firebase/database",Xp="1.1.2";/**
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
 */let mg="";function Yw(i){mg=i}/**
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
 */class Qw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ut(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:oo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Jw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const gg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qw(e)}}catch{}return new Jw},si=gg("localStorage"),Xw=gg("sessionStorage");/**
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
 */const Wi=new dd("@firebase/database"),Zw=(function(){let i=1;return function(){return i++}})(),_g=function(i){const e=j0(i),n=new D0;n.update(e);const s=n.digest();return ad.encodeByteArray(s)},So=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=So.apply(null,s):typeof s=="object"?e+=ut(s):e+=s,e+=" "}return e};let eo=null,Zp=!0;const eS=function(i,e){L(!0,"Can't turn on custom loggers persistently."),Wi.logLevel=Ae.VERBOSE,eo=Wi.log.bind(Wi)},vt=function(...i){if(Zp===!0&&(Zp=!1,eo===null&&Xw.get("logging_enabled")===!0&&eS()),eo){const e=So.apply(null,i);eo(e)}},Eo=function(i){return function(...e){vt(i,...e)}},$c=function(...i){const e="FIREBASE INTERNAL ERROR: "+So(...i);Wi.error(e)},er=function(...i){const e=`FIREBASE FATAL ERROR: ${So(...i)}`;throw Wi.error(e),new Error(e)},Ut=function(...i){const e="FIREBASE WARNING: "+So(...i);Wi.warn(e)},tS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ca=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},nS=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Qi="[MIN_NAME]",ui="[MAX_NAME]",fi=function(i,e){if(i===e)return 0;if(i===Qi||e===ui)return-1;if(e===Qi||i===ui)return 1;{const n=em(i),s=em(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},rS=function(i,e){return i===e?0:i<e?-1:1},qs=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+ut(e))},pd=function(i){if(typeof i!="object"||i===null)return ut(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ut(e[s]),n+=":",n+=pd(i[e[s]]);return n+="}",n},vg=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function yt(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const yg=function(i){L(!Ca(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,m;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(m=n;m;m-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const v=g.join("");let y="";for(m=0;m<64;m+=8){let I=parseInt(v.substr(m,8),2).toString(16);I.length===1&&(I="0"+I),y=y+I}return y.toLowerCase()},iS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function oS(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const lS=new RegExp("^-?(0*)\\d{1,10}$"),aS=-2147483648,uS=2147483647,em=function(i){if(lS.test(i)){const e=Number(i);if(e>=aS&&e<=uS)return e}return null},is=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},cS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},to=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class dS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Tn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class hS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(vt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}}class Gl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gl.OWNER="owner";/**
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
 */const md="5",wg="v",Sg="s",Eg="r",Cg="f",Ig=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kg="ls",Tg="p",Gc="ac",xg="websocket",Ng="long_polling";/**
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
 */class Rg{constructor(e,n,s,l,u=!1,d="",f=!1,m=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=si.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&si.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fS(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Pg(i,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let s;if(e===xg)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Ng)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fS(i)&&(n.ns=i.namespace);const l=[];return yt(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
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
 */class pS{constructor(){this.counters_={}}incrementCounter(e,n=1){zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return m0(this.counters_)}}/**
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
 */const Ac={},bc={};function gd(i){const e=i.toString();return Ac[e]||(Ac[e]=new pS),Ac[e]}function mS(i,e){const n=i.toString();return bc[n]||(bc[n]=e()),bc[n]}/**
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
 */class gS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&is(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const tm="start",_S="close",vS="pLPCommand",yS="pRTLPCB",Ag="id",bg="pw",Og="ser",wS="cb",SS="seg",ES="ts",CS="d",IS="dframe",Dg=1870,Lg=30,kS=Dg-Lg,TS=25e3,xS=3e4;class Ui{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Eo(e),this.stats_=gd(n),this.urlFn=m=>(this.appCheckToken&&(m[Gc]=this.appCheckToken),Pg(n,Ng,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xS)),nS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _d((...u)=>{const[d,f,m,g,v]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===tm)this.id=f,this.password=m;else if(d===_S)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[tm]="t",s[Og]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[wS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[wg]=md,this.transportSessionId&&(s[Sg]=this.transportSessionId),this.lastSessionId&&(s[kg]=this.lastSessionId),this.applicationId&&(s[Tg]=this.applicationId),this.appCheckToken&&(s[Gc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ig.test(location.hostname)&&(s[Eg]=Cg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ui.forceAllow_=!0}static forceDisallow(){Ui.forceDisallow_=!0}static isAvailable(){return Ui.forceAllow_?!0:!Ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!iS()&&!sS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=tg(n),l=vg(s,kS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[IS]="t",s[Ag]=e,s[bg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ut(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _d{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zw(),window[vS+this.uniqueCallbackIdentifier]=e,window[yS+this.uniqueCallbackIdentifier]=n,this.myIFrame=_d.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){vt("frame writing exception"),f.stack&&vt(f.stack),vt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ag]=this.myID,e[bg]=this.myPW,e[Og]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lg+s.length<=Dg;){const d=this.pendingSegs.shift();s=s+"&"+SS+l+"="+d.seg+"&"+ES+l+"="+d.ts+"&"+CS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(TS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{vt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const NS=16384,RS=45e3;let na=null;typeof MozWebSocket<"u"?na=MozWebSocket:typeof WebSocket<"u"&&(na=WebSocket);class xn{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Eo(this.connId),this.stats_=gd(n),this.connURL=xn.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[wg]=md,typeof location<"u"&&location.hostname&&Ig.test(location.hostname)&&(d[Eg]=Cg),n&&(d[Sg]=n),s&&(d[kg]=s),l&&(d[Gc]=l),u&&(d[Tg]=u),Pg(e,xg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,si.set("previous_websocket_failure",!0);try{let s;T0(),this.mySock=new na(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&na!==null&&!xn.forceDisallow_}static previouslyFailed(){return si.isInMemoryStorage||si.get("previous_websocket_failure")===!0}markConnectionHealthy(){si.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=oo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vg(n,NS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xn.responsesRequiredToBeHealthy=2;xn.healthyTimeout=3e4;/**
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
 */class ao{static get ALL_TRANSPORTS(){return[Ui,xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=xn&&xn.isAvailable();let s=n&&!xn.previouslyFailed();if(e.webSocketOnly&&(n||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[xn];else{const l=this.transports_=[];for(const u of ao.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);ao.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ao.globalTransportInitialized_=!1;/**
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
 */const PS=6e4,AS=5e3,bS=10*1024,OS=100*1024,Oc="t",nm="d",DS="s",rm="r",LS="e",im="o",sm="a",om="n",lm="p",MS="h";class FS{constructor(e,n,s,l,u,d,f,m,g,v){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Eo("c:"+this.id+":"),this.transportManager_=new ao(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=to(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Oc in e){const n=e[Oc];n===sm?this.upgradeIfSecondaryHealthy_():n===rm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===im&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qs("t",e),s=qs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:om,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qs("t",e),s=qs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qs(Oc,e);if(nm in e){const s=e[nm];if(n===MS){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===om){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DS?this.onConnectionShutdown_(s):n===rm?this.onReset_(s):n===LS?$c("Server Error: "+s):n===im?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$c("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),md!==s&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),to(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):to(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(AS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(si.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ra extends Fg{static getInstance(){return new ra}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!cd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const am=32,um=768;class Re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ie(){return new Re("")}function le(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Fr(i){return i.pieces_.length-i.pieceNum_}function Oe(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Re(i.pieces_,e)}function vd(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function jS(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function uo(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function jg(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new Re(e,0)}function Ke(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof Re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Re(n,0)}function de(i){return i.pieceNum_>=i.pieces_.length}function jt(i,e){const n=le(i),s=le(e);if(n===null)return e;if(n===s)return jt(Oe(i),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function US(i,e){const n=uo(i,0),s=uo(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=fi(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function yd(i,e){if(Fr(i)!==Fr(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function gn(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Fr(i)>Fr(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class zS{constructor(e,n){this.errorPrefix_=n,this.parts_=uo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ea(this.parts_[s]);Ug(this)}}function WS(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Ea(e),Ug(i)}function BS(i){const e=i.parts_.pop();i.byteLength_-=Ea(e),i.parts_.length>0&&(i.byteLength_-=1)}function Ug(i){if(i.byteLength_>um)throw new Error(i.errorPrefix_+"has a key path longer than "+um+" bytes ("+i.byteLength_+").");if(i.parts_.length>am)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+am+") or object contains a cycle "+ii(i))}function ii(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */class wd extends Fg{static getInstance(){return new wd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ys=1e3,VS=300*1e3,cm=30*1e3,HS=1.3,$S=3e4,GS="server_kill",dm=3;class Xn extends Mg{constructor(e,n,s,l,u,d,f,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=Xn.nextPersistentConnectionId_++,this.log_=Eo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ys,this.maxReconnectDelay_=VS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ra.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(ut(u)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Fn,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const m=f.d,g=f.s;Xn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zn(e,"w")){const s=Ki(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||O0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=b0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ut(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$c("Unrecognized action received from server: "+ut(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$S&&(this.reconnectDelay_=Ys),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*HS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Xn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const m=function(){f?f.close():(d=!0,s())},g=function(y){L(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:m,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,I]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);d?vt("getToken() completed but was canceled"):(vt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=I&&I.token,f=new FS(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,N=>{Ut(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(GS)},u))}catch(y){this.log_("Failed to get token: "+y),d||(this.repoInfo_.nodeAdmin&&Ut(y),m())}}}interrupt(e){vt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zl(this.interruptReasons_)&&(this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>pd(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Re(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){vt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=dm&&(this.reconnectDelay_=cm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){vt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=dm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mg.replace(/\./g,"-")]=1,cd()?e["framework.cordova"]=1:og()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ra.getInstance().currentlyOnline();return Zl(this.interruptReasons_)&&e}}Xn.nextPersistentConnectionId_=0;Xn.nextConnectionId_=0;/**
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
 */class he{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new he(e,n)}}/**
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
 */class Ia{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new he(Qi,e),l=new he(Qi,n);return this.compare(s,l)!==0}minPost(){return he.MIN}}/**
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
 */let Ul;class zg extends Ia{static get __EMPTY_NODE(){return Ul}static set __EMPTY_NODE(e){Ul=e}compare(e,n){return fi(e.name,n.name)}isDefinedOn(e){throw ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(ui,Ul)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,Ul)}toString(){return".key"}}const Bi=new zg;/**
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
 */class zl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _t{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??_t.RED,this.left=l??Qt.EMPTY_NODE,this.right=u??Qt.EMPTY_NODE}copy(e,n,s,l,u){return new _t(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Qt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_t.RED=!0;_t.BLACK=!1;class KS{copy(e,n,s,l,u){return this}insert(e,n,s){return new _t(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qt{constructor(e,n=Qt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Qt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_t.BLACK,null,null))}remove(e){return new Qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_t.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new zl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new zl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new zl(this.root_,null,this.comparator_,!0,e)}}Qt.EMPTY_NODE=new KS;/**
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
 */function qS(i,e){return fi(i.name,e.name)}function Sd(i,e){return fi(i,e)}/**
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
 */let Kc;function YS(i){Kc=i}const Wg=function(i){return typeof i=="number"?"number:"+yg(i):"string:"+i},Bg=function(i){if(i.isLeafNode()){const e=i.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zn(e,".sv"),"Priority must be a string or number.")}else L(i===Kc||i.isEmpty(),"priority of unexpected type.");L(i===Kc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let hm;class gt{static set __childrenNodeConstructor(e){hm=e}static get __childrenNodeConstructor(){return hm}constructor(e,n=gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return de(e)?this:le(e)===".priority"?this.priorityNode_:gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=le(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yg(this.value_):e+=this.value_,this.lazyHash_=_g(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof gt.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=gt.VALUE_TYPE_ORDER.indexOf(n),u=gt.VALUE_TYPE_ORDER.indexOf(s);return L(l>=0,"Unknown leaf type: "+n),L(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Vg,Hg;function QS(i){Vg=i}function JS(i){Hg=i}class XS extends Ia{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?fi(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(ui,new gt("[PRIORITY-POST]",Hg))}makePost(e,n){const s=Vg(e);return new he(n,new gt("[PRIORITY-POST]",s))}toString(){return".priority"}}const qe=new XS;/**
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
 */const ZS=Math.log(2);class eE{constructor(e){const n=u=>parseInt(Math.log(u)/ZS,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ia=function(i,e,n,s){i.sort(e);const l=function(m,g){const v=g-m;let y,I;if(v===0)return null;if(v===1)return y=i[m],I=n?n(y):y,new _t(I,y.node,_t.BLACK,null,null);{const N=parseInt(v/2,10)+m,M=l(m,N),W=l(N+1,g);return y=i[N],I=n?n(y):y,new _t(I,y.node,_t.BLACK,M,W)}},u=function(m){let g=null,v=null,y=i.length;const I=function(M,W){const Q=y-M,je=y;y-=M;const Pe=l(Q+1,je),De=i[Q],Le=n?n(De):De;N(new _t(Le,De.node,W,null,Pe))},N=function(M){g?(g.left=M,g=M):(v=M,g=M)};for(let M=0;M<m.count;++M){const W=m.nextBitIsOne(),Q=Math.pow(2,m.count-(M+1));W?I(Q,_t.BLACK):(I(Q,_t.BLACK),I(Q,_t.RED))}return v},d=new eE(i.length),f=u(d);return new Qt(s||e,f)};/**
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
 */let Dc;const ji={};class Yn{static get Default(){return L(ji&&qe,"ChildrenNode.ts has not been loaded"),Dc=Dc||new Yn({".priority":ji},{".priority":qe}),Dc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ki(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qt?n:null}hasIndex(e){return zn(this.indexSet_,e.toString())}addIndex(e,n){L(e!==Bi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(he.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=ia(s,e.getCompare()):f=ji;const m=e.toString(),g={...this.indexSet_};g[m]=e;const v={...this.indexes_};return v[m]=f,new Yn(v,g)}addToIndexes(e,n){const s=ea(this.indexes_,(l,u)=>{const d=Ki(this.indexSet_,u);if(L(d,"Missing index implementation for "+u),l===ji)if(d.isDefinedOn(e.node)){const f=[],m=n.getIterator(he.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&f.push(g),g=m.getNext();return f.push(e),ia(f,d.getCompare())}else return ji;else{const f=n.get(e.name);let m=l;return f&&(m=m.remove(new he(e.name,f))),m.insert(e,e.node)}});return new Yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ea(this.indexes_,l=>{if(l===ji)return l;{const u=n.get(e.name);return u?l.remove(new he(e.name,u)):l}});return new Yn(s,this.indexSet_)}}/**
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
 */let Qs;class J{static get EMPTY_NODE(){return Qs||(Qs=new J(new Qt(Sd),null,Yn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Bg(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qs}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Qs:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new he(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?Qs:this.priorityNode_;return new J(l,d,u)}}updateChild(e,n){const s=le(e);if(s===null)return n;{L(le(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Oe(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(qe,(d,f)=>{n[d]=f.val(e),s++,u&&J.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wg(this.getPriority().val())+":"),this.forEachChild(qe,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":_g(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new he(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,he.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Co?-1:0}withIndex(e){if(e===Bi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Bi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(qe),l=n.getIterator(qe);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===Bi?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tE extends J{constructor(){super(new Qt(Sd),J.EMPTY_NODE,Yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Co=new tE;Object.defineProperties(he,{MIN:{value:new he(Qi,J.EMPTY_NODE)},MAX:{value:new he(ui,Co)}});zg.__EMPTY_NODE=J.EMPTY_NODE;gt.__childrenNodeConstructor=J;YS(Co);JS(Co);/**
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
 */const nE=!0;function Je(i,e=null){if(i===null)return J.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new gt(n,Je(e))}if(!(i instanceof Array)&&nE){const n=[];let s=!1;if(yt(i,(d,f)=>{if(d.substring(0,1)!=="."){const m=Je(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new he(d,m)))}}),n.length===0)return J.EMPTY_NODE;const u=ia(n,qS,d=>d.name,Sd);if(s){const d=ia(n,qe.getCompare());return new J(u,Je(e),new Yn({".priority":d},{".priority":qe}))}else return new J(u,Je(e),Yn.Default)}else{let n=J.EMPTY_NODE;return yt(i,(s,l)=>{if(zn(i,s)&&s.substring(0,1)!=="."){const u=Je(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(Je(e))}}QS(Je);/**
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
 */class rE extends Ia{constructor(e){super(),this.indexPath_=e,L(!de(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?fi(e.name,n.name):u}makePost(e,n){const s=Je(e),l=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new he(n,l)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Co);return new he(ui,e)}toString(){return uo(this.indexPath_,0).join("/")}}/**
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
 */class iE extends Ia{compare(e,n){const s=e.node.compareTo(n.node);return s===0?fi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const s=Je(e);return new he(n,s)}toString(){return".value"}}const sE=new iE;/**
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
 */function $g(i){return{type:"value",snapshotNode:i}}function Ji(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function co(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function ho(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function oE(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class Ed{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(co(n,f)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(Ji(n,s)):d.trackChildChange(ho(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(qe,(l,u)=>{n.hasChild(l)||s.trackChildChange(co(l,u))}),n.isLeafNode()||n.forEachChild(qe,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(ho(l,u,d))}else s.trackChildChange(Ji(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class fo{constructor(e){this.indexedFilter_=new Ed(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fo.getStartPost_(e),this.endPost_=fo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new he(n,s))||(s=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=J.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(J.EMPTY_NODE);const u=this;return n.forEachChild(qe,(d,f)=>{u.matches(new he(d,f))||(l=l.updateImmediateChild(d,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class lE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new fo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new he(n,s))||(s=J.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=J.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(J.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const y=this.index_.getCompare();d=(I,N)=>y(N,I)}else d=this.index_.getCompare();const f=e;L(f.numChildren()===this.limit_,"");const m=new he(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(m);if(f.hasChild(n)){const y=f.getImmediateChild(n);let I=l.getChildAfterChild(this.index_,g,this.reverse_);for(;I!=null&&(I.name===n||f.hasChild(I.name));)I=l.getChildAfterChild(this.index_,I,this.reverse_);const N=I==null?1:d(I,m);if(v&&!s.isEmpty()&&N>=0)return u!=null&&u.trackChildChange(ho(n,s,y)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(co(n,y));const W=f.updateImmediateChild(n,J.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(u!=null&&u.trackChildChange(Ji(I.name,I.node)),W.updateImmediateChild(I.name,I.node)):W}}else return s.isEmpty()?e:v&&d(g,m)>=0?(u!=null&&(u.trackChildChange(co(g.name,g.node)),u.trackChildChange(Ji(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,J.EMPTY_NODE)):e}}/**
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
 */class Cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qi}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ui}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qe}copy(){const e=new Cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function aE(i){return i.loadsAllData()?new Ed(i.getIndex()):i.hasLimit()?new lE(i):new fo(i)}function fm(i){const e={};if(i.isDefault())return e;let n;if(i.index_===qe?n="$priority":i.index_===sE?n="$value":i.index_===Bi?n="$key":(L(i.index_ instanceof rE,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=ut(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=ut(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+ut(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=ut(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+ut(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function pm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==qe&&(e.i=i.index_.toString()),e}/**
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
 */class sa extends Mg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Eo("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=sa.getListenId_(e,s),f={};this.listens_[d]=f;const m=fm(e._queryParams);this.restRequest_(u+".json",m,(g,v)=>{let y=v;if(g===404&&(y=null,g=null),g===null&&this.onDataUpdate_(u,y,!1,s),Ki(this.listens_,d)===f){let I;g?g===401?I="permission_denied":I="rest_error:"+g:I="ok",l(I,null)}})}unlisten(e,n){const s=sa.getListenId_(e,n);delete this.listens_[s]}get(e){const n=fm(e._queryParams),s=e._path.toString(),l=new Fn;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ns(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=oo(f.responseText)}catch{Ut("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&Ut("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
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
 */function oa(){return{value:null,children:new Map}}function ss(i,e,n){if(de(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=le(e);i.children.has(s)||i.children.set(s,oa());const l=i.children.get(s);e=Oe(e),ss(l,e,n)}}function qc(i,e){if(de(e))return i.value=null,i.children.clear(),!0;if(i.value!==null){if(i.value.isLeafNode())return!1;{const n=i.value;return i.value=null,n.forEachChild(qe,(s,l)=>{ss(i,new Re(s),l)}),qc(i,e)}}else if(i.children.size>0){const n=le(e);return e=Oe(e),i.children.has(n)&&qc(i.children.get(n),e)&&i.children.delete(n),i.children.size===0}else return!0}function Yc(i,e,n){i.value!==null?n(e,i.value):cE(i,(s,l)=>{const u=new Re(e.toString()+"/"+s);Yc(l,u,n)})}function cE(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class dE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&yt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const mm=10*1e3,hE=30*1e3,fE=300*1e3;class pE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dE(e);const s=mm+(hE-mm)*Math.random();to(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;yt(e,(l,u)=>{u>0&&zn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),to(this.reportStats_.bind(this),Math.floor(Math.random()*2*fE))}}/**
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
 */var Nn;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nn||(Nn={}));function Id(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Td(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class la{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Nn.ACK_USER_WRITE,this.source=Id()}operationForChild(e){if(de(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Re(e));return new la(Ie(),n,this.revert)}}else return L(le(this.path)===e,"operationForChild called for unrelated child."),new la(Oe(this.path),this.affectedTree,this.revert)}}/**
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
 */class po{constructor(e,n){this.source=e,this.path=n,this.type=Nn.LISTEN_COMPLETE}operationForChild(e){return de(this.path)?new po(this.source,Ie()):new po(this.source,Oe(this.path))}}/**
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
 */class ci{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Nn.OVERWRITE}operationForChild(e){return de(this.path)?new ci(this.source,Ie(),this.snap.getImmediateChild(e)):new ci(this.source,Oe(this.path),this.snap)}}/**
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
 */class Xi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Nn.MERGE}operationForChild(e){if(de(this.path)){const n=this.children.subtree(new Re(e));return n.isEmpty()?null:n.value?new ci(this.source,Ie(),n.value):new Xi(this.source,Ie(),n)}else return L(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xi(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class jr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(de(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class mE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gE(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(oE(d.childName,d.snapshotNode))}),Js(i,l,"child_removed",e,s,n),Js(i,l,"child_added",e,s,n),Js(i,l,"child_moved",u,s,n),Js(i,l,"child_changed",e,s,n),Js(i,l,"value",e,s,n),l}function Js(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,m)=>vE(i,f,m)),d.forEach(f=>{const m=_E(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,i.query_))})})}function _E(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function vE(i,e,n){if(e.childName==null||n.childName==null)throw ts("Should only compare child_ events.");const s=new he(e.childName,e.snapshotNode),l=new he(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
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
 */function ka(i,e){return{eventCache:i,serverCache:e}}function no(i,e,n,s){return ka(new jr(e,n,s),i.serverCache)}function Gg(i,e,n,s){return ka(i.eventCache,new jr(e,n,s))}function aa(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function di(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */let Lc;const yE=()=>(Lc||(Lc=new Qt(rS)),Lc);class Fe{static fromObject(e){let n=new Fe(null);return yt(e,(s,l)=>{n=n.set(new Re(s),l)}),n}constructor(e,n=yE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ie(),value:this.value};if(de(e))return null;{const s=le(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Oe(e),n);return u!=null?{path:Ke(new Re(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(de(e))return this;{const n=le(e),s=this.children.get(n);return s!==null?s.subtree(Oe(e)):new Fe(null)}}set(e,n){if(de(e))return new Fe(n,this.children);{const s=le(e),u=(this.children.get(s)||new Fe(null)).set(Oe(e),n),d=this.children.insert(s,u);return new Fe(this.value,d)}}remove(e){if(de(e))return this.children.isEmpty()?new Fe(null):new Fe(null,this.children);{const n=le(e),s=this.children.get(n);if(s){const l=s.remove(Oe(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Fe(null):new Fe(this.value,u)}else return this}}get(e){if(de(e))return this.value;{const n=le(e),s=this.children.get(n);return s?s.get(Oe(e)):null}}setTree(e,n){if(de(e))return n;{const s=le(e),u=(this.children.get(s)||new Fe(null)).setTree(Oe(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new Fe(this.value,d)}}fold(e){return this.fold_(Ie(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Ke(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ie(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(de(e))return null;{const u=le(e),d=this.children.get(u);return d?d.findOnPath_(Oe(e),Ke(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ie(),n)}foreachOnPath_(e,n,s){if(de(e))return this;{this.value&&s(n,this.value);const l=le(e),u=this.children.get(l);return u?u.foreachOnPath_(Oe(e),Ke(n,l),s):new Fe(null)}}foreach(e){this.foreach_(Ie(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Ke(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new Fe(null))}}function ro(i,e,n){if(de(e))return new Pn(new Fe(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=jt(l,e);return u=u.updateChild(d,n),new Pn(i.writeTree_.set(l,u))}else{const l=new Fe(n),u=i.writeTree_.setTree(e,l);return new Pn(u)}}}function Qc(i,e,n){let s=i;return yt(n,(l,u)=>{s=ro(s,Ke(e,l),u)}),s}function gm(i,e){if(de(e))return Pn.empty();{const n=i.writeTree_.setTree(e,new Fe(null));return new Pn(n)}}function Jc(i,e){return pi(i,e)!=null}function pi(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(jt(n.path,e)):null}function _m(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(qe,(s,l)=>{e.push(new he(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new he(s,l.value))}),e}function Dr(i,e){if(de(e))return i;{const n=pi(i,e);return n!=null?new Pn(new Fe(n)):new Pn(i.writeTree_.subtree(e))}}function Xc(i){return i.writeTree_.isEmpty()}function Zi(i,e){return Kg(Ie(),i.writeTree_,e)}function Kg(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(L(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=Kg(Ke(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Ke(i,".priority"),s)),n}}/**
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
 */function Ta(i,e){return Jg(e,i)}function wE(i,e,n,s,l){L(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=ro(i.visibleWrites,e,n)),i.lastWriteId=s}function SE(i,e,n,s){L(s>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:n,writeId:s,visible:!0}),i.visibleWrites=Qc(i.visibleWrites,e,n),i.lastWriteId=s}function EE(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function CE(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&IE(f,s.path)?l=!1:gn(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return kE(i),!0;if(s.snap)i.visibleWrites=gm(i.visibleWrites,s.path);else{const f=s.children;yt(f,m=>{i.visibleWrites=gm(i.visibleWrites,Ke(s.path,m))})}return!0}else return!1}function IE(i,e){if(i.snap)return gn(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&gn(Ke(i.path,n),e))return!0;return!1}function kE(i){i.visibleWrites=qg(i.allWrites,TE,Ie()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function TE(i){return i.visible}function qg(i,e,n){let s=Pn.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)gn(n,d)?(f=jt(n,d),s=ro(s,f,u.snap)):gn(d,n)&&(f=jt(d,n),s=ro(s,Ie(),u.snap.getChild(f)));else if(u.children){if(gn(n,d))f=jt(n,d),s=Qc(s,f,u.children);else if(gn(d,n))if(f=jt(d,n),de(f))s=Qc(s,Ie(),u.children);else{const m=Ki(u.children,le(f));if(m){const g=m.getChild(Oe(f));s=ro(s,Ie(),g)}}}else throw ts("WriteRecord should have .snap or .children")}}return s}function Yg(i,e,n,s,l){if(!s&&!l){const u=pi(i.visibleWrites,e);if(u!=null)return u;{const d=Dr(i.visibleWrites,e);if(Xc(d))return n;if(n==null&&!Jc(d,Ie()))return null;{const f=n||J.EMPTY_NODE;return Zi(d,f)}}}else{const u=Dr(i.visibleWrites,e);if(!l&&Xc(u))return n;if(!l&&n==null&&!Jc(u,Ie()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(gn(g.path,e)||gn(e,g.path))},f=qg(i.allWrites,d,e),m=n||J.EMPTY_NODE;return Zi(f,m)}}}function xE(i,e,n){let s=J.EMPTY_NODE;const l=pi(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(qe,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Dr(i.visibleWrites,e);return n.forEachChild(qe,(d,f)=>{const m=Zi(Dr(u,new Re(d)),f);s=s.updateImmediateChild(d,m)}),_m(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Dr(i.visibleWrites,e);return _m(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function NE(i,e,n,s,l){L(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Ke(e,n);if(Jc(i.visibleWrites,u))return null;{const d=Dr(i.visibleWrites,u);return Xc(d)?l.getChild(n):Zi(d,l.getChild(n))}}function RE(i,e,n,s){const l=Ke(e,n),u=pi(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Dr(i.visibleWrites,l);return Zi(d,s.getNode().getImmediateChild(n))}else return null}function PE(i,e){return pi(i.visibleWrites,e)}function AE(i,e,n,s,l,u,d){let f;const m=Dr(i.visibleWrites,e),g=pi(m,Ie());if(g!=null)f=g;else if(n!=null)f=Zi(m,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const v=[],y=d.getCompare(),I=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let N=I.getNext();for(;N&&v.length<l;)y(N,s)!==0&&v.push(N),N=I.getNext();return v}else return[]}function bE(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function ua(i,e,n,s){return Yg(i.writeTree,i.treePath,e,n,s)}function xd(i,e){return xE(i.writeTree,i.treePath,e)}function vm(i,e,n,s){return NE(i.writeTree,i.treePath,e,n,s)}function ca(i,e){return PE(i.writeTree,Ke(i.treePath,e))}function OE(i,e,n,s,l,u){return AE(i.writeTree,i.treePath,e,n,s,l,u)}function Nd(i,e,n){return RE(i.writeTree,i.treePath,e,n)}function Qg(i,e){return Jg(Ke(i.treePath,e),i.writeTree)}function Jg(i,e){return{treePath:i,writeTree:e}}/**
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
 */class DE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,ho(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,co(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,Ji(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,ho(s,e.snapshotNode,l.oldSnap));else throw ts("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class LE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Xg=new LE;class Rd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new jr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:di(this.viewCache_),u=OE(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
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
 */function ME(i){return{filter:i}}function FE(i,e){L(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function jE(i,e,n,s,l){const u=new DE;let d,f;if(n.type===Nn.OVERWRITE){const g=n;g.source.fromUser?d=Zc(i,e,g.path,g.snap,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!de(g.path),d=da(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===Nn.MERGE){const g=n;g.source.fromUser?d=zE(i,e,g.path,g.children,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=ed(i,e,g.path,g.children,s,l,f,u))}else if(n.type===Nn.ACK_USER_WRITE){const g=n;g.revert?d=VE(i,e,g.path,s,l,u):d=WE(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Nn.LISTEN_COMPLETE)d=BE(i,e,n.path,s,u);else throw ts("Unknown operation type: "+n.type);const m=u.getChanges();return UE(e,d,m),{viewCache:d,changes:m}}function UE(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=aa(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push($g(aa(e)))}}function Zg(i,e,n,s,l,u){const d=e.eventCache;if(ca(s,n)!=null)return e;{let f,m;if(de(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=di(e),v=g instanceof J?g:J.EMPTY_NODE,y=xd(s,v);f=i.filter.updateFullNode(e.eventCache.getNode(),y,u)}else{const g=ua(s,di(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=le(n);if(g===".priority"){L(Fr(n)===1,"Can't have a priority with additional path components");const v=d.getNode();m=e.serverCache.getNode();const y=vm(s,n,v,m);y!=null?f=i.filter.updatePriority(v,y):f=d.getNode()}else{const v=Oe(n);let y;if(d.isCompleteForChild(g)){m=e.serverCache.getNode();const I=vm(s,n,d.getNode(),m);I!=null?y=d.getNode().getImmediateChild(g).updateChild(v,I):y=d.getNode().getImmediateChild(g)}else y=Nd(s,g,e.serverCache);y!=null?f=i.filter.updateChild(d.getNode(),g,y,v,l,u):f=d.getNode()}}return no(e,f,d.isFullyInitialized()||de(n),i.filter.filtersNodes())}}function da(i,e,n,s,l,u,d,f){const m=e.serverCache;let g;const v=d?i.filter:i.filter.getIndexedFilter();if(de(n))g=v.updateFullNode(m.getNode(),s,null);else if(v.filtersNodes()&&!m.isFiltered()){const N=m.getNode().updateChild(n,s);g=v.updateFullNode(m.getNode(),N,null)}else{const N=le(n);if(!m.isCompleteForPath(n)&&Fr(n)>1)return e;const M=Oe(n),Q=m.getNode().getImmediateChild(N).updateChild(M,s);N===".priority"?g=v.updatePriority(m.getNode(),Q):g=v.updateChild(m.getNode(),N,Q,M,Xg,null)}const y=Gg(e,g,m.isFullyInitialized()||de(n),v.filtersNodes()),I=new Rd(l,y,u);return Zg(i,y,n,l,I,f)}function Zc(i,e,n,s,l,u,d){const f=e.eventCache;let m,g;const v=new Rd(l,e,u);if(de(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),m=no(e,g,!0,i.filter.filtersNodes());else{const y=le(n);if(y===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),m=no(e,g,f.isFullyInitialized(),f.isFiltered());else{const I=Oe(n),N=f.getNode().getImmediateChild(y);let M;if(de(I))M=s;else{const W=v.getCompleteChild(y);W!=null?vd(I)===".priority"&&W.getChild(jg(I)).isEmpty()?M=W:M=W.updateChild(I,s):M=J.EMPTY_NODE}if(N.equals(M))m=e;else{const W=i.filter.updateChild(f.getNode(),y,M,I,v,d);m=no(e,W,f.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function ym(i,e){return i.eventCache.isCompleteForChild(e)}function zE(i,e,n,s,l,u,d){let f=e;return s.foreach((m,g)=>{const v=Ke(n,m);ym(e,le(v))&&(f=Zc(i,f,v,g,l,u,d))}),s.foreach((m,g)=>{const v=Ke(n,m);ym(e,le(v))||(f=Zc(i,f,v,g,l,u,d))}),f}function wm(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function ed(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;de(n)?g=s:g=new Fe(null).setTree(n,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((y,I)=>{if(v.hasChild(y)){const N=e.serverCache.getNode().getImmediateChild(y),M=wm(i,N,I);m=da(i,m,new Re(y),M,l,u,d,f)}}),g.children.inorderTraversal((y,I)=>{const N=!e.serverCache.isCompleteForChild(y)&&I.value===null;if(!v.hasChild(y)&&!N){const M=e.serverCache.getNode().getImmediateChild(y),W=wm(i,M,I);m=da(i,m,new Re(y),W,l,u,d,f)}}),m}function WE(i,e,n,s,l,u,d){if(ca(l,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(de(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return da(i,e,n,m.getNode().getChild(n),l,u,f,d);if(de(n)){let g=new Fe(null);return m.getNode().forEachChild(Bi,(v,y)=>{g=g.set(new Re(v),y)}),ed(i,e,n,g,l,u,f,d)}else return e}else{let g=new Fe(null);return s.foreach((v,y)=>{const I=Ke(n,v);m.isCompleteForPath(I)&&(g=g.set(v,m.getNode().getChild(I)))}),ed(i,e,n,g,l,u,f,d)}}function BE(i,e,n,s,l){const u=e.serverCache,d=Gg(e,u.getNode(),u.isFullyInitialized()||de(n),u.isFiltered());return Zg(i,d,n,s,Xg,l)}function VE(i,e,n,s,l,u){let d;if(ca(s,n)!=null)return e;{const f=new Rd(s,e,l),m=e.eventCache.getNode();let g;if(de(n)||le(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=ua(s,di(e));else{const y=e.serverCache.getNode();L(y instanceof J,"serverChildren would be complete if leaf node"),v=xd(s,y)}v=v,g=i.filter.updateFullNode(m,v,u)}else{const v=le(n);let y=Nd(s,v,e.serverCache);y==null&&e.serverCache.isCompleteForChild(v)&&(y=m.getImmediateChild(v)),y!=null?g=i.filter.updateChild(m,v,y,Oe(n),f,u):e.eventCache.getNode().hasChild(v)?g=i.filter.updateChild(m,v,J.EMPTY_NODE,Oe(n),f,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=ua(s,di(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||ca(s,Ie())!=null,no(e,g,d,i.filter.filtersNodes())}}/**
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
 */class HE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Ed(s.getIndex()),u=aE(s);this.processor_=ME(u);const d=n.serverCache,f=n.eventCache,m=l.updateFullNode(J.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(J.EMPTY_NODE,f.getNode(),null),v=new jr(m,d.isFullyInitialized(),l.filtersNodes()),y=new jr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=ka(y,v),this.eventGenerator_=new mE(this.query_)}get query(){return this.query_}}function $E(i){return i.viewCache_.serverCache.getNode()}function GE(i){return aa(i.viewCache_)}function KE(i,e){const n=di(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!de(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function Sm(i){return i.eventRegistrations_.length===0}function qE(i,e){i.eventRegistrations_.push(e)}function Em(i,e,n){const s=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Cm(i,e,n,s){e.type===Nn.MERGE&&e.source.queryId!==null&&(L(di(i.viewCache_),"We should always have a full cache before handling merges"),L(aa(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=jE(i.processor_,l,e,n,s);return FE(i.processor_,u.viewCache),L(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,e_(i,u.changes,u.viewCache.eventCache.getNode(),null)}function YE(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(qe,(u,d)=>{s.push(Ji(u,d))}),n.isFullyInitialized()&&s.push($g(n.getNode())),e_(i,s,n.getNode(),e)}function e_(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return gE(i.eventGenerator_,e,n,l)}/**
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
 */let ha;class t_{constructor(){this.views=new Map}}function QE(i){L(!ha,"__referenceConstructor has already been defined"),ha=i}function JE(){return L(ha,"Reference.ts has not been loaded"),ha}function XE(i){return i.views.size===0}function Pd(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return L(u!=null,"SyncTree gave us an op for an invalid query."),Cm(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Cm(d,e,n,s));return u}}function n_(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=ua(n,l?s:null),m=!1;f?m=!0:s instanceof J?(f=xd(n,s),m=!1):(f=J.EMPTY_NODE,m=!1);const g=ka(new jr(f,m,!1),new jr(s,l,!1));return new HE(e,g)}return d}function ZE(i,e,n,s,l,u){const d=n_(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),qE(d,n),YE(d,n)}function eC(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=Ur(i);if(l==="default")for(const[m,g]of i.views.entries())d=d.concat(Em(g,n,s)),Sm(g)&&(i.views.delete(m),g.query._queryParams.loadsAllData()||u.push(g.query));else{const m=i.views.get(l);m&&(d=d.concat(Em(m,n,s)),Sm(m)&&(i.views.delete(l),m.query._queryParams.loadsAllData()||u.push(m.query)))}return f&&!Ur(i)&&u.push(new(JE())(e._repo,e._path)),{removed:u,events:d}}function r_(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Lr(i,e){let n=null;for(const s of i.views.values())n=n||KE(s,e);return n}function i_(i,e){if(e._queryParams.loadsAllData())return xa(i);{const s=e._queryIdentifier;return i.views.get(s)}}function s_(i,e){return i_(i,e)!=null}function Ur(i){return xa(i)!=null}function xa(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let fa;function tC(i){L(!fa,"__referenceConstructor has already been defined"),fa=i}function nC(){return L(fa,"Reference.ts has not been loaded"),fa}let rC=1;class Im{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Fe(null),this.pendingWriteTree_=bE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function o_(i,e,n,s,l){return wE(i.pendingWriteTree_,e,n,s,l),l?os(i,new ci(Id(),e,n)):[]}function iC(i,e,n,s){SE(i.pendingWriteTree_,e,n,s);const l=Fe.fromObject(n);return os(i,new Xi(Id(),e,l))}function Pr(i,e,n=!1){const s=EE(i.pendingWriteTree_,e);if(CE(i.pendingWriteTree_,e)){let u=new Fe(null);return s.snap!=null?u=u.set(Ie(),!0):yt(s.children,d=>{u=u.set(new Re(d),!0)}),os(i,new la(s.path,u,n))}else return[]}function Io(i,e,n){return os(i,new ci(kd(),e,n))}function sC(i,e,n){const s=Fe.fromObject(n);return os(i,new Xi(kd(),e,s))}function oC(i,e){return os(i,new po(kd(),e))}function lC(i,e,n){const s=bd(i,n);if(s){const l=Od(s),u=l.path,d=l.queryId,f=jt(u,e),m=new po(Td(d),f);return Dd(i,u,m)}else return[]}function pa(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||s_(d,e))){const m=eC(d,e,n,s);XE(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=m.removed;if(f=m.events,!l){const v=g.findIndex(I=>I._queryParams.loadsAllData())!==-1,y=i.syncPointTree_.findOnPath(u,(I,N)=>Ur(N));if(v&&!y){const I=i.syncPointTree_.subtree(u);if(!I.isEmpty()){const N=cC(I);for(let M=0;M<N.length;++M){const W=N[M],Q=W.query,je=c_(i,W);i.listenProvider_.startListening(io(Q),mo(i,Q),je.hashFn,je.onComplete)}}}!y&&g.length>0&&!s&&(v?i.listenProvider_.stopListening(io(e),null):g.forEach(I=>{const N=i.queryToTagMap.get(Na(I));i.listenProvider_.stopListening(io(I),N)}))}dC(i,g)}return f}function l_(i,e,n,s){const l=bd(i,s);if(l!=null){const u=Od(l),d=u.path,f=u.queryId,m=jt(d,e),g=new ci(Td(f),m,n);return Dd(i,d,g)}else return[]}function aC(i,e,n,s){const l=bd(i,s);if(l){const u=Od(l),d=u.path,f=u.queryId,m=jt(d,e),g=Fe.fromObject(n),v=new Xi(Td(f),m,g);return Dd(i,d,v)}else return[]}function td(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(I,N)=>{const M=jt(I,l);u=u||Lr(N,M),d=d||Ur(N)});let f=i.syncPointTree_.get(l);f?(d=d||Ur(f),u=u||Lr(f,Ie())):(f=new t_,i.syncPointTree_=i.syncPointTree_.set(l,f));let m;u!=null?m=!0:(m=!1,u=J.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((N,M)=>{const W=Lr(M,Ie());W&&(u=u.updateImmediateChild(N,W))}));const g=s_(f,e);if(!g&&!e._queryParams.loadsAllData()){const I=Na(e);L(!i.queryToTagMap.has(I),"View does not exist, but we have a tag");const N=hC();i.queryToTagMap.set(I,N),i.tagToQueryMap.set(N,I)}const v=Ta(i.pendingWriteTree_,l);let y=ZE(f,e,n,v,u,m);if(!g&&!d&&!s){const I=i_(f,e);y=y.concat(fC(i,e,I))}return y}function Ad(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const m=jt(d,e),g=Lr(f,m);if(g)return g});return Yg(l,e,u,n,!0)}function uC(i,e){const n=e._path;let s=null;i.syncPointTree_.foreachOnPath(n,(g,v)=>{const y=jt(g,n);s=s||Lr(v,y)});let l=i.syncPointTree_.get(n);l?s=s||Lr(l,Ie()):(l=new t_,i.syncPointTree_=i.syncPointTree_.set(n,l));const u=s!=null,d=u?new jr(s,!0,!1):null,f=Ta(i.pendingWriteTree_,e._path),m=n_(l,e,f,u?d.getNode():J.EMPTY_NODE,u);return GE(m)}function os(i,e){return a_(e,i.syncPointTree_,null,Ta(i.pendingWriteTree_,Ie()))}function a_(i,e,n,s){if(de(i.path))return u_(i,e,n,s);{const l=e.get(Ie());n==null&&l!=null&&(n=Lr(l,Ie()));let u=[];const d=le(i.path),f=i.operationForChild(d),m=e.children.get(d);if(m&&f){const g=n?n.getImmediateChild(d):null,v=Qg(s,d);u=u.concat(a_(f,m,g,v))}return l&&(u=u.concat(Pd(l,i,s,n))),u}}function u_(i,e,n,s){const l=e.get(Ie());n==null&&l!=null&&(n=Lr(l,Ie()));let u=[];return e.children.inorderTraversal((d,f)=>{const m=n?n.getImmediateChild(d):null,g=Qg(s,d),v=i.operationForChild(d);v&&(u=u.concat(u_(v,f,m,g)))}),l&&(u=u.concat(Pd(l,i,s,n))),u}function c_(i,e){const n=e.query,s=mo(i,n);return{hashFn:()=>($E(e)||J.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?lC(i,n._path,s):oC(i,n._path);{const u=oS(l,n);return pa(i,n,null,u)}}}}function mo(i,e){const n=Na(e);return i.queryToTagMap.get(n)}function Na(i){return i._path.toString()+"$"+i._queryIdentifier}function bd(i,e){return i.tagToQueryMap.get(e)}function Od(i){const e=i.indexOf("$");return L(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Re(i.substr(0,e))}}function Dd(i,e,n){const s=i.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const l=Ta(i.pendingWriteTree_,e);return Pd(s,n,l,null)}function cC(i){return i.fold((e,n,s)=>{if(n&&Ur(n))return[xa(n)];{let l=[];return n&&(l=r_(n)),yt(s,(u,d)=>{l=l.concat(d)}),l}})}function io(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(nC())(i._repo,i._path):i}function dC(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Na(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function hC(){return rC++}function fC(i,e,n){const s=e._path,l=mo(i,e),u=c_(i,n),d=i.listenProvider_.startListening(io(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)L(!Ur(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((g,v,y)=>{if(!de(g)&&v&&Ur(v))return[xa(v).query];{let I=[];return v&&(I=I.concat(r_(v).map(N=>N.query))),yt(y,(N,M)=>{I=I.concat(M)}),I}});for(let g=0;g<m.length;++g){const v=m[g];i.listenProvider_.stopListening(io(v),mo(i,v))}}return d}/**
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
 */class Ld{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ld(n)}node(){return this.node_}}class Md{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new Md(this.syncTree_,n)}node(){return Ad(this.syncTree_,this.path_)}}const pC=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},km=function(i,e,n){if(!i||typeof i!="object")return i;if(L(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return mC(i[".sv"],e,n);if(typeof i[".sv"]=="object")return gC(i[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},mC=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+i)}},gC=function(i,e,n){i.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const l=e.node();if(L(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},d_=function(i,e,n,s){return Fd(e,new Md(n,i),s)},h_=function(i,e,n){return Fd(i,new Ld(e),n)};function Fd(i,e,n){const s=i.getPriority().val(),l=km(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=km(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new gt(f,Je(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new gt(l))),d.forEachChild(qe,(f,m)=>{const g=Fd(m,e.getImmediateChild(f),n);g!==m&&(u=u.updateImmediateChild(f,g))}),u}}/**
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
 */class jd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ud(i,e){let n=e instanceof Re?e:new Re(e),s=i,l=le(n);for(;l!==null;){const u=Ki(s.node.children,l)||{children:{},childCount:0};s=new jd(l,s,u),n=Oe(n),l=le(n)}return s}function ls(i){return i.node.value}function f_(i,e){i.node.value=e,nd(i)}function p_(i){return i.node.childCount>0}function _C(i){return ls(i)===void 0&&!p_(i)}function Ra(i,e){yt(i.node.children,(n,s)=>{e(new jd(n,i,s))})}function m_(i,e,n,s){n&&e(i),Ra(i,l=>{m_(l,e,!0)})}function vC(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ko(i){return new Re(i.parent===null?i.name:ko(i.parent)+"/"+i.name)}function nd(i){i.parent!==null&&yC(i.parent,i.name,i)}function yC(i,e,n){const s=_C(n),l=zn(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,nd(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,nd(i))}/**
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
 */const wC=/[\[\].#$\/\u0000-\u001F\u007F]/,SC=/[\[\].#$\u0000-\u001F\u007F]/,Mc=10*1024*1024,zd=function(i){return typeof i=="string"&&i.length!==0&&!wC.test(i)},g_=function(i){return typeof i=="string"&&i.length!==0&&!SC.test(i)},EC=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),g_(i)},__=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!Ca(i)||i&&typeof i=="object"&&zn(i,".sv")},ma=function(i,e,n,s){s&&e===void 0||Pa(qi(i,"value"),e,n)},Pa=function(i,e,n){const s=n instanceof Re?new zS(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+ii(s));if(typeof e=="function")throw new Error(i+"contains a function "+ii(s)+" with contents = "+e.toString());if(Ca(e))throw new Error(i+"contains "+e.toString()+" "+ii(s));if(typeof e=="string"&&e.length>Mc/3&&Ea(e)>Mc)throw new Error(i+"contains a string greater than "+Mc+" utf8 bytes "+ii(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(yt(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!zd(d)))throw new Error(i+" contains an invalid key ("+d+") "+ii(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WS(s,d),Pa(i,f,s),BS(s)}),l&&u)throw new Error(i+' contains ".value" child '+ii(s)+" in addition to actual children.")}},CC=function(i,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=uo(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!zd(u[d]))throw new Error(i+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(US);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&gn(l,s))throw new Error(i+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},v_=function(i,e,n,s){const l=qi(i,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];yt(e,(d,f)=>{const m=new Re(d);if(Pa(l,f,Ke(n,m)),vd(m)===".priority"&&!__(f))throw new Error(l+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(m)}),CC(l,u)},IC=function(i,e,n){if(Ca(e))throw new Error(qi(i,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!__(e))throw new Error(qi(i,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},y_=function(i,e,n,s){if(!g_(n))throw new Error(qi(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kC=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),y_(i,e,n)},oi=function(i,e){if(le(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},TC=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!EC(n))throw new Error(qi(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class xC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Aa(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!yd(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function w_(i,e,n){Aa(i,n),S_(i,s=>yd(s,e))}function _n(i,e,n){Aa(i,n),S_(i,s=>gn(s,e)||gn(e,s))}function S_(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(NC(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function NC(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();eo&&vt("event: "+n.toString()),is(s)}}}/**
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
 */const RC="repo_interrupt",PC=25;class AC{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=oa(),this.transactionQueueTree_=new jd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bC(i,e,n){if(i.stats_=gd(i.repoInfo_),i.forceRestClient_||cS())i.server_=new sa(i.repoInfo_,(s,l,u,d)=>{Tm(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>xm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ut(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Xn(i.repoInfo_,e,(s,l,u,d)=>{Tm(i,s,l,u,d)},s=>{xm(i,s)},s=>{OC(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=mS(i.repoInfo_,()=>new pE(i.stats_,i.server_)),i.infoData_=new uE,i.infoSyncTree_=new Im({startListening:(s,l,u,d)=>{let f=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(f=Io(i.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Wd(i,"connected",!1),i.serverSyncTree_=new Im({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,m)=>{const g=d(f,m);_n(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function E_(i){const n=i.infoData_.getNode(new Re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ba(i){return pC({timestamp:E_(i)})}function Tm(i,e,n,s,l){i.dataUpdateCount++;const u=new Re(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const m=ea(n,g=>Je(g));d=aC(i.serverSyncTree_,u,m,l)}else{const m=Je(n);d=l_(i.serverSyncTree_,u,m,l)}else if(s){const m=ea(n,g=>Je(g));d=sC(i.serverSyncTree_,u,m)}else{const m=Je(n);d=Io(i.serverSyncTree_,u,m)}let f=u;d.length>0&&(f=es(i,u)),_n(i.eventQueue_,f,d)}function xm(i,e){Wd(i,"connected",e),e===!1&&FC(i)}function OC(i,e){yt(e,(n,s)=>{Wd(i,n,s)})}function Wd(i,e,n){const s=new Re("/.info/"+e),l=Je(n);i.infoData_.updateSnapshot(s,l);const u=Io(i.infoSyncTree_,s,l);_n(i.eventQueue_,s,u)}function Bd(i){return i.nextWriteId_++}function DC(i,e,n){const s=uC(i.serverSyncTree_,e);return s!=null?Promise.resolve(s):i.server_.get(e).then(l=>{const u=Je(l).withIndex(e._queryParams.getIndex());td(i.serverSyncTree_,e,n,!0);let d;if(e._queryParams.loadsAllData())d=Io(i.serverSyncTree_,e._path,u);else{const f=mo(i.serverSyncTree_,e);d=l_(i.serverSyncTree_,e._path,u,f)}return _n(i.eventQueue_,e._path,d),pa(i.serverSyncTree_,e,n,null,!0),u},l=>(To(i,"get for query "+ut(e)+" failed: "+l),Promise.reject(new Error(l))))}function LC(i,e,n,s,l){To(i,"set",{path:e.toString(),value:n,priority:s});const u=ba(i),d=Je(n,s),f=Ad(i.serverSyncTree_,e),m=h_(d,f,u),g=Bd(i),v=o_(i.serverSyncTree_,e,m,g,!0);Aa(i.eventQueue_,v),i.server_.put(e.toString(),d.val(!0),(I,N)=>{const M=I==="ok";M||Ut("set at "+e+" failed: "+I);const W=Pr(i.serverSyncTree_,g,!M);_n(i.eventQueue_,e,W),zr(i,l,I,N)});const y=Hd(i,e);es(i,y),_n(i.eventQueue_,y,[])}function MC(i,e,n,s){To(i,"update",{path:e.toString(),value:n});let l=!0;const u=ba(i),d={};if(yt(n,(f,m)=>{l=!1,d[f]=d_(Ke(e,f),Je(m),i.serverSyncTree_,u)}),l)vt("update() called with empty data.  Don't do anything."),zr(i,s,"ok",void 0);else{const f=Bd(i),m=iC(i.serverSyncTree_,e,d,f);Aa(i.eventQueue_,m),i.server_.merge(e.toString(),n,(g,v)=>{const y=g==="ok";y||Ut("update at "+e+" failed: "+g);const I=Pr(i.serverSyncTree_,f,!y),N=I.length>0?es(i,e):e;_n(i.eventQueue_,N,I),zr(i,s,g,v)}),yt(n,g=>{const v=Hd(i,Ke(e,g));es(i,v)}),_n(i.eventQueue_,e,[])}}function FC(i){To(i,"onDisconnectEvents");const e=ba(i),n=oa();Yc(i.onDisconnect_,Ie(),(l,u)=>{const d=d_(l,u,i.serverSyncTree_,e);ss(n,l,d)});let s=[];Yc(n,Ie(),(l,u)=>{s=s.concat(Io(i.serverSyncTree_,l,u));const d=Hd(i,l);es(i,d)}),i.onDisconnect_=oa(),_n(i.eventQueue_,Ie(),s)}function jC(i,e,n){i.server_.onDisconnectCancel(e.toString(),(s,l)=>{s==="ok"&&qc(i.onDisconnect_,e),zr(i,n,s,l)})}function Nm(i,e,n,s){const l=Je(n);i.server_.onDisconnectPut(e.toString(),l.val(!0),(u,d)=>{u==="ok"&&ss(i.onDisconnect_,e,l),zr(i,s,u,d)})}function UC(i,e,n,s,l){const u=Je(n,s);i.server_.onDisconnectPut(e.toString(),u.val(!0),(d,f)=>{d==="ok"&&ss(i.onDisconnect_,e,u),zr(i,l,d,f)})}function zC(i,e,n,s){if(Zl(n)){vt("onDisconnect().update() called with empty data.  Don't do anything."),zr(i,s,"ok",void 0);return}i.server_.onDisconnectMerge(e.toString(),n,(l,u)=>{l==="ok"&&yt(n,(d,f)=>{const m=Je(f);ss(i.onDisconnect_,Ke(e,d),m)}),zr(i,s,l,u)})}function WC(i,e,n){let s;le(e._path)===".info"?s=td(i.infoSyncTree_,e,n):s=td(i.serverSyncTree_,e,n),w_(i.eventQueue_,e._path,s)}function BC(i,e,n){let s;le(e._path)===".info"?s=pa(i.infoSyncTree_,e,n):s=pa(i.serverSyncTree_,e,n),w_(i.eventQueue_,e._path,s)}function VC(i){i.persistentConnection_&&i.persistentConnection_.interrupt(RC)}function To(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),vt(n,...e)}function zr(i,e,n,s){e&&is(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function C_(i,e,n){return Ad(i.serverSyncTree_,e,n)||J.EMPTY_NODE}function Vd(i,e=i.transactionQueueTree_){if(e||Oa(i,e),ls(e)){const n=k_(i,e);L(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&HC(i,ko(e),n)}else p_(e)&&Ra(e,n=>{Vd(i,n)})}function HC(i,e,n){const s=n.map(g=>g.currentWriteId),l=C_(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const v=n[g];L(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const y=jt(e,v.path);u=u.updateChild(y,v.currentOutputSnapshotRaw)}const f=u.val(!0),m=e;i.server_.put(m.toString(),f,g=>{To(i,"transaction put response",{path:m.toString(),status:g});let v=[];if(g==="ok"){const y=[];for(let I=0;I<n.length;I++)n[I].status=2,v=v.concat(Pr(i.serverSyncTree_,n[I].currentWriteId)),n[I].onComplete&&y.push(()=>n[I].onComplete(null,!0,n[I].currentOutputSnapshotResolved)),n[I].unwatcher();Oa(i,Ud(i.transactionQueueTree_,e)),Vd(i,i.transactionQueueTree_),_n(i.eventQueue_,e,v);for(let I=0;I<y.length;I++)is(y[I])}else{if(g==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{Ut("transaction at "+m.toString()+" failed: "+g);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=g}es(i,e)}},d)}function es(i,e){const n=I_(i,e),s=ko(n),l=k_(i,n);return $C(i,l,s),s}function $C(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=jt(n,m.path);let v=!1,y;if(L(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)v=!0,y=m.abortReason,l=l.concat(Pr(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=PC)v=!0,y="maxretry",l=l.concat(Pr(i.serverSyncTree_,m.currentWriteId,!0));else{const I=C_(i,m.path,d);m.currentInputSnapshot=I;const N=e[f].update(I.val());if(N!==void 0){Pa("transaction failed: Data returned ",N,m.path);let M=Je(N);typeof N=="object"&&N!=null&&zn(N,".priority")||(M=M.updatePriority(I.getPriority()));const Q=m.currentWriteId,je=ba(i),Pe=h_(M,I,je);m.currentOutputSnapshotRaw=M,m.currentOutputSnapshotResolved=Pe,m.currentWriteId=Bd(i),d.splice(d.indexOf(Q),1),l=l.concat(o_(i.serverSyncTree_,m.path,Pe,m.currentWriteId,m.applyLocally)),l=l.concat(Pr(i.serverSyncTree_,Q,!0))}else v=!0,y="nodata",l=l.concat(Pr(i.serverSyncTree_,m.currentWriteId,!0))}_n(i.eventQueue_,n,l),l=[],v&&(e[f].status=2,(function(I){setTimeout(I,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(y==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(y),!1,null))))}Oa(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)is(s[f]);Vd(i,i.transactionQueueTree_)}function I_(i,e){let n,s=i.transactionQueueTree_;for(n=le(e);n!==null&&ls(s)===void 0;)s=Ud(s,n),e=Oe(e),n=le(e);return s}function k_(i,e){const n=[];return T_(i,e,n),n.sort((s,l)=>s.order-l.order),n}function T_(i,e,n){const s=ls(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Ra(e,l=>{T_(i,l,n)})}function Oa(i,e){const n=ls(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,f_(e,n.length>0?n:void 0)}Ra(e,s=>{Oa(i,s)})}function Hd(i,e){const n=ko(I_(i,e)),s=Ud(i.transactionQueueTree_,e);return vC(s,l=>{Fc(i,l)}),Fc(i,s),m_(s,l=>{Fc(i,l)}),n}function Fc(i,e){const n=ls(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(L(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(L(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Pr(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?f_(e,void 0):n.length=u+1,_n(i.eventQueue_,ko(e),l);for(let d=0;d<s.length;d++)is(s[d])}}/**
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
 */function GC(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function KC(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ut(`Invalid query segment '${n}' in query '${i}'`)}return e}const Rm=function(i,e){const n=qC(i),s=n.namespace;n.domain==="firebase.com"&&er(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&er("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Rg(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Re(n.pathString)}},qC=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let v=i.indexOf("/");v===-1&&(v=i.length);let y=i.indexOf("?");y===-1&&(y=i.length),e=i.substring(0,Math.min(v,y)),v<y&&(l=GC(i.substring(v,y)));const I=KC(i.substring(Math.min(i.length,y)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")n="localhost";else if(N.split(".").length<=2)n=N;else{const M=e.indexOf(".");s=e.substring(0,M).toLowerCase(),n=e.substring(M+1),u=s}"ns"in I&&(u=I.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
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
 */const Pm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",YC=(function(){let i=0;const e=[];return function(n){const s=n===i;i=n;let l;const u=new Array(8);for(l=7;l>=0;l--)u[l]=Pm.charAt(n%64),n=Math.floor(n/64);L(n===0,"Cannot push at time == 0");let d=u.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)d+=Pm.charAt(e[l]);return L(d.length===20,"nextPushId: Length should be 20."),d}})();/**
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
 */class QC{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ut(this.snapshot.exportVal())}}class JC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class XC{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Fn;return jC(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){oi("OnDisconnect.remove",this._path);const e=new Fn;return Nm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){oi("OnDisconnect.set",this._path),ma("OnDisconnect.set",e,this._path,!1);const n=new Fn;return Nm(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){oi("OnDisconnect.setWithPriority",this._path),ma("OnDisconnect.setWithPriority",e,this._path,!1),IC("OnDisconnect.setWithPriority",n);const s=new Fn;return UC(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){oi("OnDisconnect.update",this._path),v_("OnDisconnect.update",e,this._path);const n=new Fn;return zC(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class $d{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return de(this._path)?null:vd(this._path)}get ref(){return new rr(this._repo,this._path)}get _queryIdentifier(){const e=pm(this._queryParams),n=pd(e);return n==="{}"?"default":n}get _queryObject(){return pm(this._queryParams)}isEqual(e){if(e=Jt(e),!(e instanceof $d))return!1;const n=this._repo===e._repo,s=yd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+jS(this._path)}}class rr extends $d{constructor(e,n){super(e,n,new Cd,!1)}get parent(){const e=jg(this._path);return e===null?null:new rr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class go{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Re(e),s=_o(this.ref,e);return new go(this._node.getChild(n),s,qe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new go(l,_o(this.ref,s),qe)))}hasChild(e){const n=new Re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Se(i,e){return i=Jt(i),i._checkNotDeleted("ref"),e!==void 0?_o(i._root,e):i._root}function _o(i,e){return i=Jt(i),le(i._path)===null?kC("child","path",e):y_("child","path",e),new rr(i._repo,Ke(i._path,e))}function Am(i){return i=Jt(i),new XC(i._repo,i._path)}function ZC(i,e){i=Jt(i),oi("push",i._path),ma("push",e,i._path,!0);const n=E_(i._repo),s=YC(n),l=_o(i,s),u=_o(i,s);let d;return e!=null?d=kr(u,e).then(()=>u):d=Promise.resolve(u),l.then=d.then.bind(d),l.catch=d.then.bind(d,void 0),l}function Wl(i){return oi("remove",i._path),kr(i,null)}function kr(i,e){i=Jt(i),oi("set",i._path),ma("set",e,i._path,!1);const n=new Fn;return LC(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}function Xs(i,e){v_("update",e,i._path);const n=new Fn;return MC(i._repo,i._path,e,n.wrapCallback(()=>{})),n.promise}function qt(i){i=Jt(i);const e=new x_(()=>{}),n=new Da(e);return DC(i._repo,i,n).then(s=>new go(s,new rr(i._repo,i._path),i._queryParams.getIndex()))}class Da{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new QC("value",this,new go(e.snapshotNode,new rr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new JC(this,e,n):null}matches(e){return e instanceof Da?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function eI(i,e,n,s,l){const u=new x_(n,void 0),d=new Da(u);return WC(i._repo,i,d),()=>BC(i._repo,i,d)}function tI(i,e,n,s){return eI(i,"value",e)}QE(rr);tC(rr);/**
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
 */const nI="FIREBASE_DATABASE_EMULATOR_HOST",rd={};let rI=!1;function iI(i,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=wo(u);i.repoInfo_=new Rg(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function sI(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||er("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vt("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Rm(u,l),f=d.repoInfo,m;typeof process<"u"&&Qp&&(m=Qp[nI]),m?(u=`http://${m}?ns=${f.namespace}`,d=Rm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new hS(i.name,i.options,e);TC("Invalid Firebase Database URL",d),de(d.path)||er("Database URL must point to the root of a Firebase Database (not including a child path).");const v=lI(f,i,g,new dS(i,n));return new aI(v,i)}function oI(i,e){const n=rd[e];(!n||n[i.key]!==i)&&er(`Database ${e}(${i.repoInfo_}) has already been deleted.`),VC(i),delete n[i.key]}function lI(i,e,n,s){let l=rd[e.name];l||(l={},rd[e.name]=l);let u=l[i.toURLString()];return u&&er("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new AC(i,rI,n,s),l[i.toURLString()]=u,u}class aI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rr(this._repo,Ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(oI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&er("Cannot call "+e+" on a deleted database.")}}function uI(i=hg(),e){const n=fd(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=S0("database");s&&cI(n,...s)}return n}function cI(i,e,n,s={}){i=Jt(i),i._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(l===i._repoInternal.repoInfo_.host&&li(s,u.repoInfo_.emulatorOptions))return;er("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&er('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new Gl(Gl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:E0(s.mockUserToken,i.app.options.projectId);d=new Gl(f)}wo(e)&&ag(e),iI(u,l,s,d)}/**
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
 */function dI(i){Yw(rs),Yi(new ai("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return sI(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Or(Jp,Xp,i),Or(Jp,Xp,"esm2020")}Xn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Xn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};dI();function N_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hI=N_,R_=new yo("auth","Firebase",N_());/**
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
 */const ga=new dd("@firebase/auth");function fI(i,...e){ga.logLevel<=Ae.WARN&&ga.warn(`Auth (${rs}): ${i}`,...e)}function Kl(i,...e){ga.logLevel<=Ae.ERROR&&ga.error(`Auth (${rs}): ${i}`,...e)}/**
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
 */function tr(i,...e){throw Gd(i,...e)}function jn(i,...e){return Gd(i,...e)}function P_(i,e,n){const s={...hI(),[e]:n};return new yo("auth","Firebase",s).create(e,{appName:i.name})}function Mr(i){return P_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gd(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return R_.create(i,...e)}function ee(i,e,...n){if(!i)throw Gd(e,...n)}function Qn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Kl(e),new Error(e)}function nr(i,e){i||Qn(e)}/**
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
 */function id(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function pI(){return bm()==="http:"||bm()==="https:"}function bm(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function mI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pI()||I0()||"connection"in navigator)?navigator.onLine:!0}function gI(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=cd()||og()}get(){return mI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kd(i,e){nr(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class A_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yI=new xo(3e4,6e4);function La(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function as(i,e,n,s,l={}){return b_(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=ns({key:i.config.apiKey,...d}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g={method:e,headers:m,...u};return C0()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&wo(i.emulatorConfig.host)&&(g.credentials="include"),A_.fetch()(await D_(i,i.config.apiHost,n,f),g)})}async function b_(i,e,n){i._canInitEmulator=!1;const s={..._I,...e};try{const l=new wI(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw Bl(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bl(i,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw Bl(i,"email-already-in-use",d);if(m==="USER_DISABLED")throw Bl(i,"user-disabled",d);const v=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw P_(i,v,g);tr(i,v)}}catch(l){if(l instanceof Br)throw l;tr(i,"network-request-failed",{message:String(l)})}}async function O_(i,e,n,s,l={}){const u=await as(i,e,n,s,l);return"mfaPendingCredential"in u&&tr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function D_(i,e,n,s){const l=`${e}${n}?${s}`,u=i,d=u.config.emulator?Kd(i.config,l):`${i.config.apiScheme}://${l}`;return vI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class wI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(jn(this.auth,"network-request-failed")),yI.get())})}}function Bl(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=jn(i,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function SI(i,e){return as(i,"POST","/v1/accounts:delete",e)}async function _a(i,e){return as(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function so(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EI(i,e=!1){const n=Jt(i),s=await n.getIdToken(e),l=qd(s);ee(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:so(jc(l.auth_time)),issuedAtTime:so(jc(l.iat)),expirationTime:so(jc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function jc(i){return Number(i)*1e3}function qd(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Kl("JWT malformed, contained fewer than 3 sections"),null;try{const l=Xl(n);return l?JSON.parse(l):(Kl("Failed to decode base64 JWT payload"),null)}catch(l){return Kl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Om(i){const e=qd(i);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vo(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Br&&CI(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function CI({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class II{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function va(i){var y;const e=i.auth,n=await i.getIdToken(),s=await vo(i,_a(e,{idToken:n}));ee(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];i._notifyReloadListener(l);const u=(y=l.providerUserInfo)!=null&&y.length?L_(l.providerUserInfo):[],d=TI(i.providerData,u),f=i.isAnonymous,m=!(i.email&&l.passwordHash)&&!(d!=null&&d.length),g=f?m:!1,v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new sd(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(i,v)}async function kI(i){const e=Jt(i);await va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TI(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function L_(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function xI(i,e){const n=await b_(i,{},async()=>{const s=ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=await D_(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:s};return i.emulatorConfig&&wo(i.emulatorConfig.host)&&(m.credentials="include"),A_.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NI(i,e){return as(i,"POST","/v2/accounts:revokeToken",La(i,e))}/**
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
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Om(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Om(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await xI(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new Vi;return s&&(ee(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(ee(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(ee(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
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
 */function Cr(i,e){ee(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Rn{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new II(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new sd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await vo(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EI(this,e)}reload(){return kI(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await va(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await vo(this,SI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,u=n.phoneNumber??void 0,d=n.photoURL??void 0,f=n.tenantId??void 0,m=n._redirectEventId??void 0,g=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:y,emailVerified:I,isAnonymous:N,providerData:M,stsTokenManager:W}=n;ee(y&&W,e,"internal-error");const Q=Vi.fromJSON(this.name,W);ee(typeof y=="string",e,"internal-error"),Cr(s,e.name),Cr(l,e.name),ee(typeof I=="boolean",e,"internal-error"),ee(typeof N=="boolean",e,"internal-error"),Cr(u,e.name),Cr(d,e.name),Cr(f,e.name),Cr(m,e.name),Cr(g,e.name),Cr(v,e.name);const je=new Rn({uid:y,auth:e,email:l,emailVerified:I,displayName:s,isAnonymous:N,photoURL:d,phoneNumber:u,tenantId:f,stsTokenManager:Q,createdAt:g,lastLoginAt:v});return M&&Array.isArray(M)&&(je.providerData=M.map(Pe=>({...Pe}))),m&&(je._redirectEventId=m),je}static async _fromIdTokenResponse(e,n,s=!1){const l=new Vi;l.updateFromServerResponse(n);const u=new Rn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await va(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];ee(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?L_(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new Vi;f.updateFromIdToken(s);const m=new Rn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new sd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
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
 */const Dm=new Map;function Jn(i){nr(i instanceof Function,"Expected a class definition");let e=Dm.get(i);return e?(nr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Dm.set(i,e),e)}/**
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
 */function ql(i,e,n){return`firebase:${i}:${e}:${n}`}class Hi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=ql(this.userKey,l.apiKey,u),this.fullPersistenceKey=ql("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _a(this.auth,{idToken:e}).catch(()=>{});return n?Rn._fromGetAccountInfoResponse(this.auth,n,e):null}return Rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Hi(Jn(Lm),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||Jn(Lm);const d=ql(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const v=await g._get(d);if(v){let y;if(typeof v=="string"){const I=await _a(e,{idToken:v}).catch(()=>{});if(!I)break;y=await Rn._fromGetAccountInfoResponse(e,I,v)}else y=Rn._fromJSON(e,v);g!==u&&(f=y),u=g;break}}catch{}const m=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new Hi(u,e,s):(u=m[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new Hi(u,e,s))}}/**
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
 */function Mm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(F_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B_(e))return"Blackberry";if(V_(e))return"Webos";if(j_(e))return"Safari";if((e.includes("chrome/")||U_(e))&&!e.includes("edge/"))return"Chrome";if(W_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function F_(i=zt()){return/firefox\//i.test(i)}function j_(i=zt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function U_(i=zt()){return/crios\//i.test(i)}function z_(i=zt()){return/iemobile/i.test(i)}function W_(i=zt()){return/android/i.test(i)}function B_(i=zt()){return/blackberry/i.test(i)}function V_(i=zt()){return/webos/i.test(i)}function Yd(i=zt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function RI(i=zt()){var e;return Yd(i)&&!!((e=window.navigator)!=null&&e.standalone)}function PI(){return k0()&&document.documentMode===10}function H_(i=zt()){return Yd(i)||W_(i)||V_(i)||B_(i)||/windows phone/i.test(i)||z_(i)}/**
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
 */function $_(i,e=[]){let n;switch(i){case"Browser":n=Mm(zt());break;case"Worker":n=`${Mm(zt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${s}`}/**
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
 */class AI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const m=e(u);d(m)}catch(m){f(m)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function bI(i,e={}){return as(i,"GET","/v2/passwordPolicy",La(i,e))}/**
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
 */const OI=6;class DI{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??OI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class LI{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fm(this),this.idTokenSubscription=new Fm(this),this.beforeStateQueue=new AI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=R_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _a(this,{idToken:e}),s=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Tn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(u=this.redirectUser)==null?void 0:u._redirectEventId,f=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===f)&&(m!=null&&m.user)&&(s=m.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await va(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Mr(this));const n=e?Jt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bI(this),n=new DI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await NI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,l);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&fI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ma(i){return Jt(i)}class Fm{constructor(e){this.auth=e,this.observer=null,this.addObserver=L0(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MI(i){Qd=i}function FI(i){return Qd.loadJS(i)}function jI(){return Qd.gapiScript}function UI(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function zI(i,e){const n=fd(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(li(u,e??{}))return l;tr(l,"already-initialized")}return n.initialize({options:e})}function WI(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function BI(i,e,n){const s=Ma(i);ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=G_(e),{host:d,port:f}=VI(e),m=f===null?"":`:${f}`,g={url:`${u}//${d}${m}/`},v=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ee(li(g,s.config.emulator)&&li(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,wo(d)?ag(`${u}//${d}${m}`):HI()}function G_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function VI(i){const e=G_(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:jm(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:jm(d)}}}function jm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function HI(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class K_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}/**
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
 */async function $i(i,e){return O_(i,"POST","/v1/accounts:signInWithIdp",La(i,e))}/**
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
 */const $I="http://localhost";class hi extends K_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...u}=n;if(!s||!l)return null;const d=new hi(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return $i(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,$i(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$i(e,n)}buildRequest(){const e={requestUri:$I,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ns(n)}return e}}/**
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
 */class No extends q_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tr extends No{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
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
 */class xr extends No{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return xr.credential(n,s)}catch{return null}}}xr.GOOGLE_SIGN_IN_METHOD="google.com";xr.PROVIDER_ID="google.com";/**
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
 */class Nr extends No{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
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
 */class Rr extends No{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rr.credential(n,s)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
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
 */async function GI(i,e){return O_(i,"POST","/v1/accounts:signUp",La(i,e))}/**
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
 */class Wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await Rn._fromIdTokenResponse(e,s,l),d=Um(s);return new Wr({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Um(s);return new Wr({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Um(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function KI(i){var l;if(Tn(i.app))return Promise.reject(Mr(i));const e=Ma(i);if(await e._initializationPromise,(l=e.currentUser)!=null&&l.isAnonymous)return new Wr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await GI(e,{returnSecureToken:!0}),s=await Wr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class ya extends Br{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,ya.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new ya(e,n,s,l)}}function Y_(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ya._fromErrorAndOperation(i,u,e,s):u})}async function qI(i,e,n=!1){const s=await vo(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Wr._forOperation(i,"link",s)}/**
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
 */async function YI(i,e,n=!1){const{auth:s}=i;if(Tn(s.app))return Promise.reject(Mr(s));const l="reauthenticate";try{const u=await vo(i,Y_(s,l,e,i),n);ee(u.idToken,s,"internal-error");const d=qd(u.idToken);ee(d,s,"internal-error");const{sub:f}=d;return ee(i.uid===f,s,"user-mismatch"),Wr._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&tr(s,"user-mismatch"),u}}/**
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
 */async function QI(i,e,n=!1){if(Tn(i.app))return Promise.reject(Mr(i));const s="signIn",l=await Y_(i,s,e),u=await Wr._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function JI(i,e,n,s){return Jt(i).onIdTokenChanged(e,n,s)}function XI(i,e,n){return Jt(i).beforeAuthStateChanged(e,n)}const wa="__sak";/**
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
 */class Q_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wa,"1"),this.storage.removeItem(wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZI=1e3,e1=10;class J_ extends Q_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=H_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);PI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,e1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ZI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}J_.type="LOCAL";const t1=J_;/**
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
 */class X_ extends Q_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X_.type="SESSION";const Z_=X_;/**
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
 */function n1(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Fa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),m=await n1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
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
 */function Jd(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class r1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,m)=>{const g=Jd("",20);l.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(y){const I=y;if(I.data.eventId===g)switch(I.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(I.data.response);break;default:clearTimeout(v),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function Un(){return window}function i1(i){Un().location.href=i}/**
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
 */function ev(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function s1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function l1(){return ev()?self:null}/**
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
 */const tv="firebaseLocalStorageDb",a1=1,Sa="firebaseLocalStorage",nv="fbase_key";class Ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ja(i,e){return i.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function u1(){const i=indexedDB.deleteDatabase(tv);return new Ro(i).toPromise()}function od(){const i=indexedDB.open(tv,a1);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Sa,{keyPath:nv})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Sa)?e(s):(s.close(),await u1(),e(await od()))})})}async function zm(i,e,n){const s=ja(i,!0).put({[nv]:e,value:n});return new Ro(s).toPromise()}async function c1(i,e){const n=ja(i,!1).get(e),s=await new Ro(n).toPromise();return s===void 0?null:s.value}function Wm(i,e){const n=ja(i,!0).delete(e);return new Ro(n).toPromise()}const d1=800,h1=3;class rv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await od(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>h1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ev()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(l1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await s1(),!this.activeServiceWorker)return;this.sender=new r1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await od();return await zm(e,wa,"1"),await Wm(e,wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>zm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>c1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=ja(l,!1).getAll();return new Ro(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rv.type="LOCAL";const f1=rv;new xo(3e4,6e4);/**
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
 */function p1(i,e){return e?Jn(e):(ee(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Xd extends K_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function m1(i){return QI(i.auth,new Xd(i),i.bypassAuthState)}function g1(i){const{auth:e,user:n}=i;return ee(n,e,"internal-error"),YI(n,new Xd(i),i.bypassAuthState)}async function _1(i){const{auth:e,user:n}=i;return ee(n,e,"internal-error"),qI(n,new Xd(i),i.bypassAuthState)}/**
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
 */class iv{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m1;case"linkViaPopup":case"linkViaRedirect":return _1;case"reauthViaPopup":case"reauthViaRedirect":return g1;default:tr(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const v1=new xo(2e3,1e4);class zi extends iv{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,v1.get())};e()}}zi.currentPopupAction=null;/**
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
 */const y1="pendingRedirect",Yl=new Map;class w1 extends iv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Yl.get(this.auth._key());if(!e){try{const s=await S1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Yl.set(this.auth._key(),e)}return this.bypassAuthState||Yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S1(i,e){const n=I1(e),s=C1(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function E1(i,e){Yl.set(i._key(),e)}function C1(i){return Jn(i._redirectPersistence)}function I1(i){return ql(y1,i.config.apiKey,i.name)}async function k1(i,e,n=!1){if(Tn(i.app))return Promise.reject(Mr(i));const s=Ma(i),l=p1(s,e),d=await new w1(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const T1=600*1e3;class x1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!N1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!sv(e)){const l=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=T1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bm(e))}saveEventToCache(e){this.cachedEventUids.add(Bm(e)),this.lastProcessedEventTime=Date.now()}}function Bm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function sv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function N1(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sv(i);default:return!1}}/**
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
 */async function R1(i,e={}){return as(i,"GET","/v1/projects",e)}/**
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
 */const P1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A1=/^https?/;async function b1(i){if(i.config.emulator)return;const{authorizedDomains:e}=await R1(i);for(const n of e)try{if(O1(n))return}catch{}tr(i,"unauthorized-domain")}function O1(i){const e=id(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!A1.test(n))return!1;if(P1.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const D1=new xo(3e4,6e4);function Vm(){const i=Un().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function L1(i){return new Promise((e,n)=>{var l,u,d;function s(){Vm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vm(),n(jn(i,"network-request-failed"))},timeout:D1.get()})}if((u=(l=Un().gapi)==null?void 0:l.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((d=Un().gapi)!=null&&d.load)s();else{const f=UI("iframefcb");return Un()[f]=()=>{gapi.load?s():n(jn(i,"network-request-failed"))},FI(`${jI()}?onload=${f}`).catch(m=>n(m))}}).catch(e=>{throw Ql=null,e})}let Ql=null;function M1(i){return Ql=Ql||L1(i),Ql}/**
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
 */const F1=new xo(5e3,15e3),j1="__/auth/iframe",U1="emulator/auth/iframe",z1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B1(i){const e=i.config;ee(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Kd(e,U1):`https://${i.config.authDomain}/${j1}`,s={apiKey:e.apiKey,appName:i.name,v:rs},l=W1.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${ns(s).slice(1)}`}async function V1(i){const e=await M1(i),n=Un().gapi;return ee(n,i,"internal-error"),e.open({where:document.body,url:B1(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:z1,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=jn(i,"network-request-failed"),f=Un().setTimeout(()=>{u(d)},F1.get());function m(){Un().clearTimeout(f),l(s)}s.ping(m).then(m,()=>{u(d)})}))}/**
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
 */const H1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$1=500,G1=600,K1="_blank",q1="http://localhost";class Hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Y1(i,e,n,s=$1,l=G1){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m={...H1,width:s.toString(),height:l.toString(),top:u,left:d},g=zt().toLowerCase();n&&(f=U_(g)?K1:n),F_(g)&&(e=e||q1,m.scrollbars="yes");const v=Object.entries(m).reduce((I,[N,M])=>`${I}${N}=${M},`,"");if(RI(g)&&f!=="_self")return Q1(e||"",f),new Hm(null);const y=window.open(e||"",f,v);ee(y,i,"popup-blocked");try{y.focus()}catch{}return new Hm(y)}function Q1(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const J1="__/auth/handler",X1="emulator/auth/handler",Z1=encodeURIComponent("fac");async function $m(i,e,n,s,l,u){ee(i.config.authDomain,i,"auth-domain-config-required"),ee(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:rs,eventId:l};if(e instanceof q_){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",Zl(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,y]of Object.entries({}))d[v]=y}if(e instanceof No){const v=e.getScopes().filter(y=>y!=="");v.length>0&&(d.scopes=v.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const m=await i._getAppCheckToken(),g=m?`#${Z1}=${encodeURIComponent(m)}`:"";return`${ek(i)}?${ns(f).slice(1)}${g}`}function ek({config:i}){return i.emulator?Kd(i,X1):`https://${i.authDomain}/${J1}`}/**
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
 */const Uc="webStorageSupport";class tk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z_,this._completeRedirectFn=k1,this._overrideRedirectResult=E1}async _openPopup(e,n,s,l){var d;nr((d=this.eventManagers[e._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const u=await $m(e,n,s,id(),l);return Y1(e,u,Jd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await $m(e,n,s,id(),l);return i1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(nr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await V1(e),s=new x1(e);return n.register("authEvent",l=>(ee(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uc,{type:Uc},l=>{var d;const u=(d=l==null?void 0:l[0])==null?void 0:d[Uc];u!==void 0&&n(!!u),tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return H_()||j_()||Yd()}}const nk=tk;var Gm="@firebase/auth",Km="1.12.2";/**
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
 */class rk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ik(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sk(i){Yi(new ai("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;ee(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$_(i)},g=new LI(s,l,u,m);return WI(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Yi(new ai("auth-internal",e=>{const n=Ma(e.getProvider("auth").getImmediate());return(s=>new rk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(Gm,Km,ik(i)),Or(Gm,Km,"esm2020")}/**
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
 */const ok=300,lk=sg("authIdTokenMaxAge")||ok;let qm=null;const ak=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>lk)return;const l=n==null?void 0:n.token;qm!==l&&(qm=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function uk(i=hg()){const e=fd(i,"auth");if(e.isInitialized())return e.getImmediate();const n=zI(i,{popupRedirectResolver:nk,persistence:[f1,t1,Z_]}),s=sg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=ak(u.toString());XI(n,d,()=>d(n.currentUser)),JI(n,f=>d(f))}}const l=rg("auth");return l&&BI(n,`http://${l}`),n}function ck(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}MI({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=jn("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",ck().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sk("Browser");const dk={apiKey:"AIzaSyBOvq0uk8BAFLAMdxkxS9c4HT_auQskIgo",authDomain:"mafia-game-76a11.firebaseapp.com",databaseURL:"https://mafia-game-76a11-default-rtdb.firebaseio.com",projectId:"mafia-game-76a11",storageBucket:"mafia-game-76a11.firebasestorage.app",messagingSenderId:"54653436715",appId:"1:54653436715:web:96c73590c206420b927b6e",measurementId:"G-BG79FEC1V5"},ov=dg(dk),Ee=uI(ov),hk=uk(ov),Zs={villager:{team:"village"},healer:{team:"village"},detective:{team:"village"},vigilante:{team:"village"},bodyguard:{team:"village"},seer:{team:"village"},mayor:{team:"village"},godfather:{team:"mafia"},mafioso:{team:"mafia"},consigliere:{team:"mafia"},bomber:{team:"mafia"},silencer:{team:"neutral"},serialKiller:{team:"neutral"},survivor:{team:"neutral"},suicideBomber:{team:"neutral"}},Ym=["DARK","COLD","GRIM","SLY","BOLD","WILD","RED","MAD","DEEP","PALE","LOUD"],Qm=["FOX","OWL","WOLF","FANG","MOON","CROW","DUSK","CLAW","BONE","RAGE","TOMB","FATE"];function fk(){const i=Ym[Math.floor(Math.random()*Ym.length)],e=Qm[Math.floor(Math.random()*Qm.length)],n=Math.floor(Math.random()*90+10);return`${i}${e}${n}`}function pk(){var ot,sn;const[i,e]=te.useState(null),[n,s]=te.useState(null),[l,u]=te.useState(!1),[d,f]=te.useState([]),[m,g]=te.useState({roles:{villager:3,healer:1,detective:1,godfather:1,mafioso:1},maxPlayers:7}),[v,y]=te.useState(null),[I,N]=te.useState([]),[M,W]=te.useState(null),[Q,je]=te.useState(!0),Pe=te.useRef([]),De=te.useRef(null);te.useEffect(()=>{KI(hk).then(X=>{e(X.user.uid),je(!1)}).catch(()=>{W("Failed to connect. Please refresh."),je(!1)})},[]),te.useEffect(()=>{De.current=n},[n]),te.useEffect(()=>()=>{Pe.current.forEach(X=>X())},[]);const Le=te.useCallback((X,oe)=>{const be=Se(Ee,X),ke=tI(be,oe);return Pe.current.push(()=>ke()),ke},[]),ct=te.useCallback(X=>{Pe.current.forEach(oe=>oe()),Pe.current=[],Le(`rooms/${X}/players`,oe=>{const be=oe.val()||{},ke=Object.entries(be).map(([K,ie])=>({...ie,id:K}));f(ke)}),Le(`rooms/${X}/config`,oe=>{const be=oe.val();be&&g(be)}),Le(`rooms/${X}/game`,oe=>{y(oe.val())}),Le(`rooms/${X}/chat`,oe=>{const be=oe.val()||{},ke=Object.values(be).sort((K,ie)=>(K.timestamp||0)-(ie.timestamp||0));N(ke)})},[Le]),tt=te.useCallback(async X=>{if(!i)return null;W(null);const oe=fk();return(await qt(Se(Ee,`rooms/${oe}/meta`))).exists()?tt(X):(await kr(Se(Ee,`rooms/${oe}`),{meta:{hostId:i,roomCode:oe,status:"lobby",createdAt:Date.now()},config:{roles:{villager:3,healer:1,detective:1,godfather:1,mafioso:1},maxPlayers:7},players:{[i]:{name:X,isHost:!0,isReady:!1,joinedAt:Date.now()}}}),Am(Se(Ee,`rooms/${oe}/players/${i}`)).remove(),s(oe),u(!0),g({roles:{villager:3,healer:1,detective:1,godfather:1,mafioso:1},maxPlayers:7}),ct(oe),oe)},[i,ct]),nt=te.useCallback(async(X,oe)=>{if(!i)return{error:"Not connected yet"};W(null);const be=await qt(Se(Ee,`rooms/${X}/meta`));if(!be.exists())return W("Room not found"),{error:"Room not found"};const ke=be.val();if(ke.status!=="lobby")return W("Game already started"),{error:"Game already started"};const K=await qt(Se(Ee,`rooms/${X}/players`)),ie=await qt(Se(Ee,`rooms/${X}/config`)),Te=K.exists()?Object.keys(K.val()).length:0,Xe=ie.exists()?ie.val().maxPlayers:20;return Te>=Xe?(W("Room is full"),{error:"Room is full"}):(await kr(Se(Ee,`rooms/${X}/players/${i}`),{name:oe,isHost:!1,isReady:!1,joinedAt:Date.now()}),Am(Se(Ee,`rooms/${X}/players/${i}`)).remove(),s(X),u(ke.hostId===i),ct(X),{success:!0})},[i,ct]),Tt=te.useCallback(async()=>{n&&i&&(await Wl(Se(Ee,`rooms/${n}/players/${i}`)),l&&await Wl(Se(Ee,`rooms/${n}`))),Pe.current.forEach(X=>X()),Pe.current=[],s(null),u(!1),f([]),y(null),N([])},[n,i,l]),rn=te.useCallback(async X=>{!l||!n||await Xs(Se(Ee,`rooms/${n}/config`),X)},[l,n]),Ot=te.useCallback(async()=>{if(!l||!n)return;const X=await qt(Se(Ee,`rooms/${n}/config`)),oe=await qt(Se(Ee,`rooms/${n}/players`)),be=X.val(),ke=Object.keys(oe.val()),K=[];for(Object.entries(be.roles).forEach(([Te,Xe])=>{for(let dt=0;dt<Xe;dt++)K.push(Te)});K.length<ke.length;)K.push("villager");for(let Te=K.length-1;Te>0;Te--){const Xe=Math.floor(Math.random()*(Te+1));[K[Te],K[Xe]]=[K[Xe],K[Te]]}const ie={};ke.forEach((Te,Xe)=>{ie[Te]={role:K[Xe],alive:!0}}),await Xs(Se(Ee,`rooms/${n}`),{"meta/status":"playing","game/phase":"night","game/day":1,"game/winner":null,"game/showRoleReveal":!0,"game/assignments":ie,"game/nightActions":null,"game/votes":null,"game/eliminatedPlayers":null}),await kr(Se(Ee,`rooms/${n}/game/gameLog`),{0:{text:"Night falls on the village...",type:"system",timestamp:Date.now()}}),await Wl(Se(Ee,`rooms/${n}/chat`)),setTimeout(()=>{De.current&&kr(Se(Ee,`rooms/${De.current}/game/showRoleReveal`),!1)},4500)},[l,n]),vn=te.useCallback(async X=>{!n||!i||await kr(Se(Ee,`rooms/${n}/game/nightActions/${i}`),{target:X,timestamp:Date.now()})},[n,i]);function wt(X,oe,be){const ke={};Object.entries(X).forEach(([ie,Te])=>{var dt;const Xe=(dt=oe[ie])==null?void 0:dt.role;be(Xe)&&Te.target&&(ke[Te.target]=(ke[Te.target]||0)+1)});const K=Object.entries(ke).sort((ie,Te)=>Te[1]-ie[1]);return K.length>0?K[0][0]:null}const St=te.useCallback(async()=>{var xt,Wt,Xt;if(!l||!n)return;const X=await qt(Se(Ee,`rooms/${n}/game/nightActions`)),oe=await qt(Se(Ee,`rooms/${n}/game/assignments`)),be=await qt(Se(Ee,`rooms/${n}/game`)),ke=X.val()||{},K=oe.val()||{},ie=be.val()||{},Te=ie.day||1,dt=(await qt(Se(Ee,`rooms/${n}/players`))).val()||{},He=wt(ke,K,re=>re==="mafioso"||re==="godfather"),on=wt(ke,K,re=>re==="healer"),We=wt(ke,K,re=>re==="detective"),me={};let ht=ie.gameLog?Object.keys(ie.gameLog).length:0,An=ie.eliminatedPlayers?Object.keys(ie.eliminatedPlayers).length:0;const Ye=[];if(He&&He!==on&&((xt=K[He])!=null&&xt.alive)&&Ye.push(He),Object.entries(ke).forEach(([re,ge])=>{var P,G;if(((P=K[re])==null?void 0:P.role)==="bodyguard"&&ge.target===He&&He&&((G=K[re])!=null&&G.alive)){if(!Ye.includes(He))return;const pe=Ye.indexOf(He);pe!==-1&&Ye.splice(pe,1),Ye.includes(re)||Ye.push(re)}}),Object.entries(ke).forEach(([re,ge])=>{var P,G;((P=K[re])==null?void 0:P.role)==="vigilante"&&ge.target&&((G=K[ge.target])!=null&&G.alive)&&ge.target!==on&&!Ye.includes(ge.target)&&Ye.push(ge.target)}),Object.entries(ke).forEach(([re,ge])=>{var P,G;((P=K[re])==null?void 0:P.role)==="serialKiller"&&ge.target&&((G=K[ge.target])!=null&&G.alive)&&ge.target!==on&&!Ye.includes(ge.target)&&Ye.push(ge.target)}),We&&K[We]){const re=(Wt=Zs[K[We].role])==null?void 0:Wt.team,ge=K[We].role==="godfather"&&!K[We].investigated?"village":re;K[We].role==="godfather"&&(me[`game/assignments/${We}/investigated`]=!0);const P=((Xt=dt[We])==null?void 0:Xt.name)||"?";me["game/detectiveResult"]={target:We,name:P,result:ge}}Ye.length>0?Ye.forEach(re=>{var G,pe;me[`game/assignments/${re}/alive`]=!1;const ge=((G=dt[re])==null?void 0:G.name)||"Unknown",P=(pe=K[re])==null?void 0:pe.role;me[`game/eliminatedPlayers/${An}`]={name:ge,role:P,phase:`Night ${Te}`,playerId:re},me[`game/gameLog/${ht}`]={text:`Dawn breaks. ${ge} was found dead.`,type:"death",timestamp:Date.now()},ht++,An++}):(me[`game/gameLog/${ht}`]={text:"Dawn breaks. Nobody died last night.",type:"system",timestamp:Date.now()},ht++),me["game/phase"]="day",me["game/nightActions"]=null;const Lt={...K};Ye.forEach(re=>{Lt[re]={...Lt[re],alive:!1}});const Et=Object.values(Lt).filter(re=>{var ge;return re.alive&&((ge=Zs[re.role])==null?void 0:ge.team)==="mafia"}).length,Ct=Object.values(Lt).filter(re=>{var ge;return re.alive&&((ge=Zs[re.role])==null?void 0:ge.team)!=="mafia"}).length;Et===0?(me["game/winner"]="village",me[`game/gameLog/${ht}`]={text:"The Village wins!",type:"win",timestamp:Date.now()}):Et>=Ct&&(me["game/winner"]="mafia",me[`game/gameLog/${ht}`]={text:"The Mafia wins!",type:"win",timestamp:Date.now()}),await Xs(Se(Ee,`rooms/${n}`),me)},[l,n]),Dt=te.useCallback(async X=>{!n||!i||await kr(Se(Ee,`rooms/${n}/game/votes/${i}`),X)},[n,i]),rt=te.useCallback(async()=>{var Ye,Lt;if(!l||!n)return;const X=await qt(Se(Ee,`rooms/${n}/game/votes`)),oe=await qt(Se(Ee,`rooms/${n}/game/assignments`)),be=await qt(Se(Ee,`rooms/${n}/game`)),ke=X.val()||{},K=oe.val()||{},ie=be.val()||{},Te=ie.day||1,dt=(await qt(Se(Ee,`rooms/${n}/players`))).val()||{},He={};Object.entries(ke).forEach(([Et,Ct])=>{var Xt;const Wt=((Xt=K[Et])==null?void 0:Xt.role)==="mayor"?2:1;He[Ct]=(He[Ct]||0)+Wt});const on=Object.entries(He).sort((Et,Ct)=>Ct[1]-Et[1]),We=on.length>0?on[0][0]:null,me={};let ht=ie.gameLog?Object.keys(ie.gameLog).length:0,An=ie.eliminatedPlayers?Object.keys(ie.eliminatedPlayers).length:0;if(me["game/detectiveResult"]=null,We){me[`game/assignments/${We}/alive`]=!1;const Et=((Ye=dt[We])==null?void 0:Ye.name)||"Unknown",Ct=(Lt=K[We])==null?void 0:Lt.role;if(me[`game/eliminatedPlayers/${An}`]={name:Et,role:Ct,phase:`Day ${Te}`,playerId:We},me[`game/gameLog/${ht}`]={text:`${Et} was eliminated by the village.`,type:"death",timestamp:Date.now()},ht++,An++,Ct==="suicideBomber")me["game/winner"]="suicideBomber",me["game/winnerPlayerId"]=We,me[`game/gameLog/${ht}`]={text:`💥 ${Et} was the Suicide Bomber! They win!`,type:"win",timestamp:Date.now()};else{const xt={...K};xt[We]={...xt[We],alive:!1};const Wt=Object.values(xt).filter(re=>{var ge;return re.alive&&((ge=Zs[re.role])==null?void 0:ge.team)==="mafia"}).length,Xt=Object.values(xt).filter(re=>{var ge;return re.alive&&((ge=Zs[re.role])==null?void 0:ge.team)!=="mafia"}).length;Wt===0?(me["game/winner"]="village",me[`game/gameLog/${ht}`]={text:"The Village wins!",type:"win",timestamp:Date.now()}):Wt>=Xt?(me["game/winner"]="mafia",me[`game/gameLog/${ht}`]={text:"The Mafia wins!",type:"win",timestamp:Date.now()}):(me["game/phase"]="night",me["game/day"]=Te+1,me[`game/gameLog/${ht}`]={text:`Night ${Te+1} falls...`,type:"system",timestamp:Date.now()})}}me["game/votes"]=null,await Xs(Se(Ee,`rooms/${n}`),me)},[l,n]),Ve=te.useCallback(async(X,oe)=>{!n||!X.trim()||await ZC(Se(Ee,`rooms/${n}/chat`),{sender:oe,senderId:i,text:X.trim(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),timestamp:Date.now()})},[n,i]),ve=te.useCallback(async()=>{n&&(await Xs(Se(Ee,`rooms/${n}`),{"meta/status":"lobby",game:null}),await Wl(Se(Ee,`rooms/${n}/chat`)))},[n]),F=((sn=(ot=v==null?void 0:v.assignments)==null?void 0:ot[i])==null?void 0:sn.role)||null,$=(v==null?void 0:v.phase)||null,U=(v==null?void 0:v.day)||1,C=(v==null?void 0:v.winner)||null,R=(v==null?void 0:v.showRoleReveal)||!1,ne=(v==null?void 0:v.assignments)||{},se=(v==null?void 0:v.nightActions)||{},fe=(v==null?void 0:v.votes)||{},ae=v!=null&&v.eliminatedPlayers?Object.values(v.eliminatedPlayers):[],_e=v!=null&&v.gameLog?Object.values(v.gameLog).sort((X,oe)=>(X.timestamp||0)-(oe.timestamp||0)):[],ye=$!==null&&!C,xe=(v==null?void 0:v.detectiveResult)||null;return{userId:i,roomCode:n,isHost:l,players:d,roomConfig:m,error:M,loading:Q,myRole:F,phase:$,day:U,winner:C,showRoleReveal:R,assignments:ne,nightActions:se,votes:fe,eliminatedPlayers:ae,gameLog:_e,chatMessages:I,gameActive:ye,detectiveResult:xe,createRoom:tt,joinRoom:nt,leaveRoom:Tt,updateConfig:rn,startGame:Ot,submitNightAction:vn,resolveNight:St,submitVote:Dt,resolveDay:rt,sendChat:Ve,playAgain:ve}}const Ir={villager:{name:"Villager",team:"village",icon:"🧑‍🌾",description:"A regular villager. Votes during the day to eliminate suspects.",balance:0},healer:{name:"Healer",team:"village",icon:"🌿",description:"Each night, choose one player to protect from elimination.",balance:1.5},detective:{name:"Detective",team:"village",icon:"🔍",description:"Each night, investigate one player to learn their alignment.",balance:1.5},vigilante:{name:"Vigilante",team:"village",icon:"⚔️",description:"Can shoot one player at night. Use wisely — friendly fire is real.",balance:1},bodyguard:{name:"Bodyguard",team:"village",icon:"🛡️",description:"Protect a player at night. If they're attacked, you die instead.",balance:1},seer:{name:"Seer",team:"village",icon:"👁️",description:"Each night, see who a player visited (if anyone).",balance:1},mayor:{name:"Mayor",team:"village",icon:"🎩",description:"Your vote counts as 2 during day eliminations.",balance:.8},godfather:{name:"Godfather",team:"mafia",icon:"🎭",description:"Leads the mafia. Appears innocent to the Detective once — after that, shows as guilty.",balance:2},mafioso:{name:"Mafioso",team:"mafia",icon:"🔪",description:"Carries out the mafia's kill each night.",balance:1.5},consigliere:{name:"Consigliere",team:"mafia",icon:"📋",description:"Investigates a player each night to learn their exact role.",balance:1.5},bomber:{name:"Bomber",team:"mafia",icon:"💣",description:"Once per game, can plant a bomb that kills a player the next day.",balance:1.2},silencer:{name:"Silencer",team:"neutral",icon:"🤫",description:"Silences a player — they cannot speak or vote the next day. Wins if alive at the end.",balance:0},serialKiller:{name:"Serial Killer",team:"neutral",icon:"🩸",description:"Kills independently each night. Must be last one standing.",balance:0},survivor:{name:"Survivor",team:"neutral",icon:"🏃",description:"Just wants to survive. Wins with whichever team is left.",balance:0},suicideBomber:{name:"Suicide Bomber",team:"neutral",icon:"💀",description:"If voted out during the day, you win the game solo. Stay under the radar.",balance:0}},mk={classic:{name:"Classic",players:7,roles:{villager:3,healer:1,detective:1,godfather:1,mafioso:1}},chaos:{name:"Chaos",players:10,roles:{villager:2,healer:1,detective:1,vigilante:1,bodyguard:1,godfather:1,mafioso:1,bomber:1,serialKiller:1}},deception:{name:"Deception",players:9,roles:{villager:2,detective:1,seer:1,mayor:1,godfather:1,consigliere:1,silencer:1,bomber:1}},bigGame:{name:"Big Game",players:14,roles:{villager:4,healer:1,detective:1,vigilante:1,bodyguard:1,seer:1,godfather:1,mafioso:2,consigliere:1,bomber:1}}},Gi={village:{p:"#6ee7b7",s:"#34d399",bg:"rgba(52,211,153,0.06)",bdr:"rgba(52,211,153,0.18)"},mafia:{p:"#fda4af",s:"#fb7185",bg:"rgba(251,113,133,0.06)",bdr:"rgba(251,113,133,0.18)"},neutral:{p:"#c4b5fd",s:"#a78bfa",bg:"rgba(167,139,250,0.06)",bdr:"rgba(167,139,250,0.18)"}},Vl=`
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
`;function Hl(){return E.jsx("div",{style:{position:"fixed",inset:0,zIndex:999,pointerEvents:"none",opacity:.02,mixBlendMode:"overlay",background:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,animation:"grain 0.5s steps(1) infinite"}})}function $l({variant:i}){const e={home:[{c:"rgba(180,40,80,0.12)",sz:500,x:"15%",y:"20%",a:"orbFloat1 20s ease infinite"},{c:"rgba(40,40,160,0.09)",sz:400,x:"75%",y:"70%",a:"orbFloat2 25s ease infinite"}],lobby:[{c:"rgba(160,60,60,0.08)",sz:450,x:"80%",y:"20%",a:"orbFloat2 22s ease infinite"},{c:"rgba(50,100,50,0.07)",sz:350,x:"20%",y:"75%",a:"orbFloat1 28s ease infinite"}],night:[{c:"rgba(30,30,140,0.15)",sz:600,x:"30%",y:"25%",a:"orbFloat1 18s ease infinite"},{c:"rgba(80,20,120,0.1)",sz:400,x:"70%",y:"70%",a:"orbFloat2 22s ease infinite"}],day:[{c:"rgba(140,120,20,0.1)",sz:500,x:"60%",y:"20%",a:"orbFloat2 20s ease infinite"},{c:"rgba(120,80,10,0.07)",sz:350,x:"25%",y:"65%",a:"orbFloat1 26s ease infinite"}]};return E.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden",width:"100vw",height:"100vh"},children:(e[i]||e.home).map((n,s)=>E.jsx("div",{style:{position:"absolute",width:`min(${n.sz}px, 80vw)`,height:`min(${n.sz}px, 80vw)`,borderRadius:"50%",background:`radial-gradient(circle,${n.c},transparent 70%)`,left:n.x,top:n.y,animation:n.a,filter:"blur(60px)"}},s))})}function Yt({children:i,style:e,glow:n,onClick:s,className:l}){return E.jsx("div",{className:l,onClick:s,style:{background:"rgba(255,255,255,0.02)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid var(--b)",borderRadius:18,boxShadow:n?`0 0 40px ${n}0d,inset 0 1px 0 rgba(255,255,255,0.05)`:"inset 0 1px 0 rgba(255,255,255,0.04),0 4px 24px rgba(0,0,0,0.15)",transition:"all 0.3s ease",...e},children:i})}function Jm({name:i,size:e=40,glow:n}){const s=(i||"").split("").reduce((l,u)=>l+u.charCodeAt(0),0)%360;return E.jsx("div",{style:{width:e,height:e,borderRadius:"50%",flexShrink:0,background:`conic-gradient(from ${s}deg,hsl(${s},35%,26%),hsl(${s+40},30%,20%),hsl(${s},35%,26%))`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--fm)",fontSize:e*.36,color:"rgba(255,255,255,0.85)",fontWeight:600,boxShadow:n?`0 0 24px ${n}30`:"0 2px 8px rgba(0,0,0,0.3)",border:n?`2px solid ${n}50`:"2px solid rgba(255,255,255,0.05)",transition:"all 0.3s"},children:(i||"?")[0].toUpperCase()})}function gk(){return E.jsx("div",{style:{height:1,background:"linear-gradient(90deg,transparent,var(--bh),transparent)",margin:"14px 0"}})}function _k({roles:i}){let e=0,n=0,s=0,l=0;Object.entries(i).forEach(([I,N])=>{if(N<=0)return;const M=Ir[I];M&&(M.team==="village"?(e+=M.balance*N,s+=N):M.team==="mafia"&&(n+=M.balance*N,l+=N))});const u=Object.values(i).reduce((I,N)=>I+N,0),d=u>0?l/u:0,f=1-Math.abs(d-.28)/.28,m=1-Math.min(Math.abs((e>0?n/e:0)-.55)/.55,1),g=Math.max(0,Math.min(100,(f*.5+m*.5)*100)),v=g>70?"#34d399":g>45?"#fbbf24":"#fb7185",y=g>70?"Balanced":g>45?"Tilted":"Unbalanced";return E.jsxs(Yt,{style:{padding:"14px 18px",marginBottom:14},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[E.jsx("span",{style:{fontFamily:"var(--fd)",fontSize:14,color:"var(--t)"},children:"Balance"}),E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:9,color:v,fontWeight:600,padding:"3px 10px",background:`${v}12`,borderRadius:20,border:`1px solid ${v}25`},children:y})]}),E.jsx("div",{style:{height:4,background:"rgba(255,255,255,0.04)",borderRadius:10,overflow:"hidden",marginBottom:10},children:E.jsx("div",{style:{height:"100%",width:`${g}%`,background:`linear-gradient(90deg,${v},${v}88)`,borderRadius:10,transition:"width 0.6s cubic-bezier(0.22,1,0.36,1)"}})}),E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"var(--fm)",fontSize:8,color:"var(--td)",flexWrap:"wrap",gap:4},children:[E.jsxs("span",{style:{color:Gi.village.s},children:["Village ",s]}),E.jsxs("span",{children:[(d*100).toFixed(0),"% mafia"]}),E.jsxs("span",{style:{color:Gi.mafia.s},children:["Mafia ",l]})]})]})}function vk({role:i,count:e,onChange:n,disabled:s}){const l=Gi[i.team];return E.jsxs(Yt,{className:"role-card",style:{padding:"12px 14px",opacity:e>0?1:.4,borderColor:e>0?l.bdr:"var(--b)"},glow:e>0?l.s:null,children:[E.jsxs("div",{className:"role-card-row",children:[E.jsx("div",{style:{width:34,height:34,borderRadius:10,background:e>0?l.bg:"var(--sf)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,flexShrink:0},children:i.icon}),E.jsxs("div",{style:{flex:1,minWidth:0},children:[E.jsx("span",{style:{fontFamily:"var(--fd)",fontSize:13,color:"var(--t)"},children:i.name}),E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:7,color:l.s,letterSpacing:1,textTransform:"uppercase",marginLeft:6},children:i.team})]}),!s&&E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3,flexShrink:0},children:[E.jsx("button",{onClick:()=>n(Math.max(0,e-1)),style:{width:28,height:28,borderRadius:8,border:"1px solid var(--b)",background:"var(--sf)",color:"var(--ts)",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"},children:"−"}),E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:15,color:"var(--t)",width:22,textAlign:"center",fontWeight:600},children:e}),E.jsx("button",{onClick:()=>n(e+1),style:{width:28,height:28,borderRadius:8,border:`1px solid ${l.bdr}`,background:l.bg,color:l.s,fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"},children:"+"})]}),s&&E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:15,color:"var(--t)",fontWeight:600},children:e})]}),E.jsx("div",{className:"role-card-desc",children:i.description})]})}function yk(){var ge;const i=pk(),{userId:e,roomCode:n,isHost:s,players:l,roomConfig:u,error:d,loading:f,myRole:m,phase:g,day:v,winner:y,showRoleReveal:I,assignments:N,nightActions:M,votes:W,eliminatedPlayers:Q,gameLog:je,chatMessages:Pe,detectiveResult:De,createRoom:Le,joinRoom:ct,leaveRoom:tt,updateConfig:nt,startGame:Tt,submitNightAction:rn,resolveNight:Ot,submitVote:vn,resolveDay:wt,sendChat:St,playAgain:Dt}=i,[rt,Ve]=te.useState("home"),[ve,F]=te.useState(""),[$,U]=te.useState(""),[C,R]=te.useState(null),[ne,se]=te.useState(""),[fe,ae]=te.useState(!1),[_e,ye]=te.useState("village"),[xe,ot]=te.useState(null),[sn,X]=te.useState(!1),[oe,be]=te.useState(!1),ke=te.useRef(null),K=(u==null?void 0:u.roles)||{},ie=(u==null?void 0:u.maxPlayers)||7,Te=Object.values(K).reduce((P,G)=>P+G,0),Xe=Math.max(0,ie-Te);te.useEffect(()=>{g&&rt==="lobby"&&Ve("game")},[g,rt]),te.useEffect(()=>{!g&&!y&&rt==="game"&&n&&Ve("lobby")},[g,y,rt,n]),te.useEffect(()=>{if(I){ae(!0);const P=setTimeout(()=>ae(!1),4500);return()=>clearTimeout(P)}else ae(!1)},[I]),te.useEffect(()=>{X(!1),be(!1),R(null)},[g,v]),te.useEffect(()=>{var P;(P=ke.current)==null||P.scrollIntoView({behavior:"smooth"})},[Pe]);const dt=["villager","mayor","survivor","suicideBomber"];te.useEffect(()=>{if(!s||g!=="night"||!N)return;const P=Object.entries(N).filter(([,pe])=>pe.alive&&!dt.includes(pe.role));if(P.length===0){const pe=setTimeout(()=>Ot(),2e3);return()=>clearTimeout(pe)}const G=Object.keys(M).length;if(G>0&&G>=P.length){const pe=setTimeout(()=>Ot(),1500);return()=>clearTimeout(pe)}},[s,g,N,M,Ot]),te.useEffect(()=>{if(!s||g!=="day"||!N)return;const P=Object.values(N).filter(it=>it.alive).length,G=Object.keys(W).length,pe=Math.floor(P/2)+1;if(G>0&&G>=pe){const it=setTimeout(()=>wt(),2e3);return()=>clearTimeout(it)}},[s,g,N,W,wt]);const He=N?Object.entries(N).filter(([,P])=>P.alive).map(([P,G])=>{var pe;return{id:P,...G,name:((pe=l.find(it=>it.id===P))==null?void 0:pe.name)||"?"}}):[],on=async()=>{if(!ve.trim())return;await Le(ve.trim())&&Ve("lobby")},We=async()=>{if(!ve.trim()||!$.trim())return;ot(null);const P=await ct($.trim(),ve.trim());P.error?ot(P.error):Ve("lobby")},me=async()=>{await tt(),Ve("home")},ht=()=>Tt(),An=async()=>{var P;!C||sn||((P=N[e])==null?void 0:P.alive)!==!1&&(await rn(C),X(!0))},Ye=async P=>{var G;oe||((G=N[e])==null?void 0:G.alive)!==!1&&(await vn(P),be(!0))},Lt=()=>{ne.trim()&&(St(ne,ve),se(""))},Et=P=>{const G=Math.max(4,Math.min(20,P)),pe={...K},it=Object.values(pe).reduce((ln,an)=>ln+an,0);it>G&&(pe.villager=Math.max(0,(pe.villager||0)-(it-G))),nt({maxPlayers:G,roles:pe})},Ct=(P,G)=>{const pe=Object.entries(K).filter(([ln])=>ln!==P).reduce((ln,[,an])=>ln+an,0),it=Math.max(0,Math.min(ie-pe,G));nt({roles:{...K,[P]:it}})},xt=async()=>{await Dt(),Ve("lobby")},Wt={minHeight:"100vh",background:"var(--bg)",color:"var(--t)",fontFamily:"var(--fm)",position:"relative",overflowX:"hidden",width:"100%"},Xt={width:"100%",padding:"15px 20px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--b)",borderRadius:14,color:"var(--t)",fontFamily:"var(--fm)",fontSize:13,transition:"border 0.3s"},re={padding:"18px",background:"linear-gradient(135deg,#be123c,#9f1239)",borderRadius:14,color:"#fff",fontFamily:"var(--fd)",fontSize:20,boxShadow:"0 12px 40px rgba(190,18,60,0.25),inset 0 1px 0 rgba(255,255,255,0.1)",width:"100%"};if(f)return E.jsxs("div",{style:{...Wt,display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"},children:[E.jsx("style",{children:Vl}),E.jsx(Hl,{}),E.jsx($l,{variant:"home"}),E.jsx("div",{style:{fontFamily:"var(--fd)",fontSize:24,color:"var(--td)",animation:"fadeIn 0.5s ease",position:"relative",zIndex:1},children:"Connecting..."})]});if(rt==="home")return E.jsxs("div",{style:Wt,children:[E.jsx("style",{children:Vl}),E.jsx(Hl,{}),E.jsx($l,{variant:"home"}),E.jsxs("div",{className:"wrap",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh"},children:[E.jsxs("div",{style:{textAlign:"center",marginBottom:60,animation:"fadeUp 1s ease"},children:[E.jsx("div",{className:"home-icon",style:{animation:"float 5s ease infinite",filter:"drop-shadow(0 0 50px rgba(251,113,133,0.2))"},children:"🎭"}),E.jsx("h1",{className:"home-title",children:"Mafia"}),E.jsx("p",{className:"home-sub",children:"Deception · Strategy · Survival"})]}),E.jsxs("div",{style:{width:"100%",maxWidth:380,animation:"fadeUp 1s ease 0.15s both"},children:[E.jsx("input",{type:"text",placeholder:"Enter your name",value:ve,onChange:P=>F(P.target.value),style:{...Xt,marginBottom:4,textAlign:"center",fontSize:15},autoComplete:"off",autoCorrect:"off",spellCheck:"false"}),!ve.trim()&&E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)",textAlign:"center",marginBottom:12},children:"Name required to create or join"}),ve.trim()&&E.jsx("div",{style:{height:18,marginBottom:4}}),E.jsx("button",{onClick:on,style:re,children:"Create Room"}),E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,margin:"22px 0"},children:[E.jsx("div",{style:{flex:1,height:1,background:"linear-gradient(90deg,transparent,var(--b),transparent)"}}),E.jsx("span",{style:{fontSize:9,color:"var(--tm)",letterSpacing:4},children:"OR JOIN"}),E.jsx("div",{style:{flex:1,height:1,background:"linear-gradient(90deg,transparent,var(--b),transparent)"}})]}),E.jsxs("div",{style:{display:"flex",gap:8},children:[E.jsx("input",{type:"text",placeholder:"DARKWOLF42",value:$,onChange:P=>U(P.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"")),maxLength:12,style:{...Xt,textAlign:"center",letterSpacing:2,fontSize:14,fontWeight:600},autoComplete:"off",autoCorrect:"off",autoCapitalize:"characters",spellCheck:"false",onKeyDown:P=>P.key==="Enter"&&We()}),E.jsx("button",{onClick:We,style:{padding:"15px 28px",background:"var(--s)",border:"1px solid var(--bh)",borderRadius:14,color:"var(--t)",fontSize:12,fontWeight:500},children:"Join"})]}),(xe||d)&&E.jsx("div",{className:"error-msg",children:xe||d})]})]})]});if(rt==="lobby")return E.jsxs("div",{style:Wt,children:[E.jsx("style",{children:Vl}),E.jsx(Hl,{}),E.jsx($l,{variant:"lobby"}),E.jsxs("div",{className:"wrap",children:[E.jsxs("div",{className:"lobby-header",style:{animation:"fadeUp 0.5s ease"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:5,marginBottom:6},children:"ROOM CODE"}),E.jsx("div",{className:"room-code",children:n})]}),E.jsx("button",{onClick:me,style:{padding:"10px 22px",background:"var(--s)",border:"1px solid var(--b)",borderRadius:10,color:"var(--td)",fontSize:11,flexShrink:0},children:"← Leave"})]}),E.jsxs("div",{className:"lobby-grid",children:[E.jsxs("div",{children:[E.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,marginBottom:18},children:[E.jsx("span",{style:{fontFamily:"var(--fd)",fontSize:22,color:"var(--t)"},children:"Players"}),E.jsxs("span",{style:{fontFamily:"var(--fm)",fontSize:12,color:"var(--td)"},children:[l.length,E.jsxs("span",{style:{color:"var(--tm)"},children:["/",ie]})]})]}),E.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:16},children:[l.map((P,G)=>E.jsxs(Yt,{style:{padding:"12px 16px",display:"flex",alignItems:"center",gap:12,animation:`fadeUp 0.3s ease ${G*.05}s both`},children:[E.jsx(Jm,{name:P.name,size:34}),E.jsx("span",{style:{flex:1,fontFamily:"var(--fd)",fontSize:14,color:"var(--t)"},children:P.name}),P.isHost&&E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:7,color:"#fbbf24",background:"rgba(251,191,36,0.1)",padding:"3px 10px",borderRadius:20,letterSpacing:2},children:"HOST"}),P.id===e&&E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:7,color:"#93c5fd",background:"rgba(147,197,253,0.1)",padding:"3px 8px",borderRadius:20},children:"YOU"})]},P.id)),Array.from({length:Math.max(0,ie-l.length)}).map((P,G)=>E.jsx("div",{style:{padding:"14px 16px",borderRadius:18,border:"1px dashed rgba(255,255,255,0.04)",textAlign:"center",fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)"},children:"waiting for player..."},`e${G}`))]}),s&&l.length>=4&&E.jsx("button",{onClick:ht,style:re,children:"Start Game"}),s&&l.length<4&&E.jsx(Yt,{style:{padding:14,textAlign:"center"},children:E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:10,color:"#fbbf24"},children:"Need at least 4 players"})}),!s&&E.jsx(Yt,{style:{padding:14,textAlign:"center"},children:E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:10,color:"var(--td)"},children:"Waiting for host to start..."})})]}),E.jsxs("div",{children:[E.jsxs(Yt,{className:"glass-pad",style:{marginBottom:18},children:[E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:16},children:"PLAYER COUNT"}),E.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:24,marginBottom:16},children:[s&&E.jsx("button",{onClick:()=>Et(ie-1),style:{width:44,height:44,borderRadius:13,border:"1px solid var(--b)",background:"var(--sf)",color:"var(--ts)",fontSize:22,display:"flex",alignItems:"center",justifyContent:"center"},children:"−"}),E.jsx("div",{style:{textAlign:"center",minWidth:70},children:E.jsx("div",{className:"player-count-num",children:ie})}),s&&E.jsx("button",{onClick:()=>Et(ie+1),style:{width:44,height:44,borderRadius:13,border:"1px solid rgba(251,113,133,0.2)",background:"var(--redbg)",color:"var(--red)",fontSize:22,display:"flex",alignItems:"center",justifyContent:"center"},children:"+"})]}),s&&E.jsx("div",{style:{display:"flex",gap:5,justifyContent:"center",marginBottom:16,flexWrap:"wrap"},children:[5,6,7,8,10,12,15].map(P=>E.jsx("button",{onClick:()=>Et(P),style:{padding:"6px 10px",borderRadius:8,fontSize:10,fontWeight:ie===P?600:400,background:ie===P?"var(--redbg)":"var(--sf)",border:`1px solid ${ie===P?"rgba(251,113,133,0.2)":"var(--b)"}`,color:ie===P?"var(--red)":"var(--tm)"},children:P},P))}),E.jsx(gk,{}),E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"var(--fm)",fontSize:9,flexWrap:"wrap",gap:4},children:[E.jsxs("span",{style:{color:"var(--td)"},children:["Roles: ",E.jsx("span",{style:{color:Te>ie?"#fb7185":"#34d399",fontWeight:600},children:Te}),"/",ie]}),Xe>0&&E.jsxs("span",{style:{color:"#fbbf24"},children:["+",Xe," villager",Xe!==1?"s":""]})]})]}),s&&E.jsx("div",{className:"preset-row",children:Object.entries(mk).map(([P,G])=>{const pe=Object.values(G.roles).reduce((it,ln)=>it+ln,0);return E.jsx("button",{onClick:()=>nt({roles:{...Object.fromEntries(Object.keys(Ir).map(it=>[it,0])),...G.roles},maxPlayers:pe}),style:{flex:1,padding:"11px 8px",background:"var(--s)",border:"1px solid var(--b)",borderRadius:12,color:"var(--ts)",fontSize:10,fontWeight:500},children:G.name},P)})}),E.jsx(_k,{roles:{...K,villager:(K.villager||0)+Xe}}),E.jsx("div",{style:{display:"flex",gap:3,marginBottom:12},children:["village","mafia","neutral"].map(P=>{const G=Gi[P];return E.jsx("button",{onClick:()=>ye(P),style:{flex:1,padding:"10px",background:_e===P?G.bg:"transparent",border:`1px solid ${_e===P?G.bdr:"var(--b)"}`,borderRadius:11,color:_e===P?G.p:"var(--tm)",fontSize:9,letterSpacing:2,textTransform:"uppercase",fontWeight:_e===P?600:400},children:P},P)})}),E.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,maxHeight:450,overflowY:"auto",paddingRight:4},children:Object.entries(Ir).filter(([,P])=>P.team===_e).map(([P,G])=>E.jsx(vk,{role:G,count:K[P]||0,onChange:pe=>Ct(P,pe),disabled:!s},P))})]})]})]})]});if(rt==="game"){const P=Ir[m],G=Gi[(P==null?void 0:P.team)||"village"],pe=N[e],it=(pe==null?void 0:pe.alive)!==!1,an=m&&!["villager","mayor","survivor","suicideBomber"].includes(m);return E.jsxs("div",{style:Wt,children:[E.jsx("style",{children:Vl}),E.jsx(Hl,{}),E.jsx($l,{variant:g||"night"}),fe&&P&&E.jsx("div",{style:{position:"fixed",inset:0,zIndex:100,background:"rgba(4,4,8,0.97)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",animation:"fadeIn 0.5s ease"},children:E.jsxs("div",{className:"role-reveal-wrap",style:{animation:"roleFlip 1.2s cubic-bezier(0.22,1,0.36,1)",textAlign:"center"},children:[E.jsx("div",{className:"role-reveal-icon",style:{filter:`drop-shadow(0 0 70px ${G.s}40)`},children:P.icon}),E.jsx("div",{className:"role-reveal-name",style:{color:G.p},children:P.name}),E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:11,color:"var(--td)",maxWidth:360,lineHeight:1.8,margin:"0 auto",padding:"0 16px"},children:P.description}),E.jsxs("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:G.s,letterSpacing:5,marginTop:28,textTransform:"uppercase"},children:["Team ",P.team]})]})}),E.jsxs("div",{className:"wrap",children:[E.jsxs(Yt,{className:"phase-bar",glow:g==="night"?"#6366f1":"#eab308",children:[E.jsxs("div",{children:[E.jsxs("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:5},children:[g==="night"?"🌙 NIGHT":"☀️ DAY"," ",v]}),E.jsx("div",{className:"phase-title",style:{color:g==="night"?"#a5b4fc":"#fde68a"},children:g==="night"?"The village sleeps...":"The village awakens"})]}),E.jsxs("div",{style:{textAlign:"right"},children:[E.jsxs("div",{style:{fontFamily:"var(--fm)",fontSize:11,color:"var(--td)",display:"flex",alignItems:"center",gap:8,justifyContent:"flex-end"},children:[E.jsx("span",{style:{fontSize:22},children:P==null?void 0:P.icon}),P==null?void 0:P.name]}),E.jsxs("div",{style:{fontFamily:"var(--fm)",fontSize:9,color:G.s,marginTop:4},children:[He.length," alive"]})]})]}),y?E.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",animation:"fadeUp 0.8s ease"},children:[E.jsx("div",{className:"winner-icon",style:{filter:`drop-shadow(0 0 80px ${y==="village"?"rgba(52,211,153,0.35)":y==="suicideBomber"?"rgba(167,139,250,0.35)":"rgba(251,113,133,0.35)"})`},children:y==="village"?"🧑‍🌾":y==="suicideBomber"?"💀":"🎭"}),E.jsx("h2",{className:"winner-title",style:{color:y==="village"?"#6ee7b7":y==="suicideBomber"?"#c4b5fd":"#fda4af"},children:y==="village"?"Village Wins":y==="suicideBomber"?"Suicide Bomber Wins!":"Mafia Wins"}),E.jsx("p",{style:{fontFamily:"var(--fm)",fontSize:11,color:"var(--td)",maxWidth:400,margin:"0 auto 48px",lineHeight:1.7},children:y==="village"?"Justice prevails. Every last mafioso has been found.":y==="suicideBomber"?"The village voted out the Suicide Bomber — and they took everyone down with them!":"The mafia has seized control. The village falls silent."}),E.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginBottom:52},children:Object.entries(N).map(([ue,Nt])=>{var us,cs,mi,ds;const un=Gi[((us=Ir[Nt.role])==null?void 0:us.team)||"village"],Po=((cs=l.find(Vr=>Vr.id===ue))==null?void 0:cs.name)||"?";return E.jsxs(Yt,{style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:10,opacity:Nt.alive?1:.25},glow:Nt.alive?un.s:null,children:[E.jsx("span",{style:{fontSize:18},children:(mi=Ir[Nt.role])==null?void 0:mi.icon}),E.jsx("span",{style:{fontFamily:"var(--fd)",fontSize:12,color:"var(--t)"},children:Po}),E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:8,color:un.p},children:(ds=Ir[Nt.role])==null?void 0:ds.name})]},ue)})}),s&&E.jsx("button",{onClick:xt,style:{...re,width:"auto",padding:"18px 56px",display:"inline-block"},children:"Play Again"}),!s&&E.jsx(Yt,{style:{padding:14,textAlign:"center"},children:E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:10,color:"var(--td)"},children:"Waiting for host..."})})]}):E.jsxs("div",{className:"game-grid",children:[E.jsxs("div",{children:[g==="day"&&m==="detective"&&De&&E.jsxs(Yt,{style:{padding:"14px 18px",marginBottom:12,borderColor:De.result==="village"?"rgba(52,211,153,0.3)":"rgba(251,113,133,0.3)"},glow:De.result==="village"?"#34d399":"#fb7185",children:[E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:8},children:"🔍 INVESTIGATION RESULT"}),E.jsxs("div",{style:{fontFamily:"var(--fd)",fontSize:14,color:"var(--t)"},children:[De.name," appears ",E.jsx("span",{style:{color:De.result==="village"?"#6ee7b7":"#fda4af",fontWeight:600},children:De.result==="village"?"INNOCENT":"GUILTY"})]})]}),E.jsx(Yt,{className:"action-panel",style:{marginBottom:18},children:it?g==="night"&&!an?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"action-title",children:"Night falls..."}),E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)",marginBottom:24},children:"You have no night ability. Wait for dawn."})]}):E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"action-title",children:g==="night"?"Choose your target":"Vote to eliminate"}),E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)",marginBottom:24},children:sn?"Action submitted. Waiting for others...":oe?"Vote submitted. Waiting for others...":g==="night"?"Select a player to use your ability on":"The village must decide who to send away"}),!sn&&!oe&&E.jsx("div",{className:"target-grid",children:He.filter(ue=>ue.id!==e).map((ue,Nt)=>{const un=C===ue.id;return E.jsxs("button",{onClick:()=>g==="night"?R(ue.id):Ye(ue.id),style:{padding:"18px 8px",background:un?"var(--redbg)":"var(--sf)",border:`1px solid ${un?"rgba(251,113,133,0.25)":"var(--b)"}`,borderRadius:16,color:"var(--t)",textAlign:"center",animation:`scaleUp 0.3s ease ${Nt*.04}s both`},children:[E.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:10},children:E.jsx(Jm,{name:ue.name,size:46,glow:un?"var(--red)":null})}),E.jsx("div",{style:{fontFamily:"var(--fd)",fontSize:12},children:ue.name})]},ue.id)})}),g==="night"&&C&&!sn&&E.jsxs("button",{onClick:An,style:{marginTop:20,width:"100%",padding:"15px",background:"linear-gradient(135deg,#1e40af,#2563eb)",borderRadius:13,color:"#fff",fontFamily:"var(--fm)",fontSize:11,fontWeight:600,letterSpacing:.5,boxShadow:"0 10px 32px rgba(37,99,235,0.25),inset 0 1px 0 rgba(255,255,255,0.1)"},children:["Confirm · ",(ge=He.find(ue=>ue.id===C))==null?void 0:ge.name]})]}):E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"action-title",children:"You have been eliminated"}),E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)",marginBottom:24},children:"You are now spectating. Watch the game unfold."})]})}),E.jsxs(Yt,{style:{padding:20,maxHeight:210,overflowY:"auto"},children:[E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:12},children:"GAME LOG"}),je.map((ue,Nt)=>E.jsx("div",{style:{padding:"7px 0",fontFamily:"var(--fm)",fontSize:10,borderBottom:"1px solid rgba(255,255,255,0.02)",lineHeight:1.6,color:ue.type==="death"?"#fb7185":ue.type==="win"?"#fde68a":ue.type==="action"?"#93c5fd":"var(--td)"},children:ue.text},Nt))]})]}),E.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[Q.length>0&&E.jsxs(Yt,{style:{padding:18},children:[E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:12},children:"ELIMINATED"}),Q.map((ue,Nt)=>{var un;return E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,0.02)"},children:[E.jsxs("span",{style:{fontFamily:"var(--fm)",fontSize:10,color:"var(--td)"},children:[(un=Ir[ue.role])==null?void 0:un.icon," ",ue.name]}),E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)"},children:ue.phase})]},Nt)})]}),E.jsxs(Yt,{style:{flex:1,padding:18,display:"flex",flexDirection:"column",minHeight:250},children:[E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:8,color:"var(--tm)",letterSpacing:4,marginBottom:12},children:g==="night"&&(P==null?void 0:P.team)==="mafia"?"🔪 MAFIA CHAT":"💬 VILLAGE CHAT"}),E.jsxs("div",{style:{flex:1,overflowY:"auto",marginBottom:10},children:[Pe.length===0&&E.jsx("div",{style:{fontFamily:"var(--fm)",fontSize:9,color:"var(--tm)",textAlign:"center",marginTop:44,opacity:.35},children:"No messages yet"}),Pe.map((ue,Nt)=>E.jsxs("div",{style:{marginBottom:12},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:9,fontWeight:600,color:ue.senderId===e?"#93c5fd":"var(--td)"},children:ue.sender}),E.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:7,color:"var(--tm)"},children:ue.time})]}),E.jsx("div",{style:{fontFamily:"var(--fd)",fontSize:13,color:"var(--t)",marginTop:3,lineHeight:1.5},children:ue.text})]},Nt)),E.jsx("div",{ref:ke})]}),E.jsxs("div",{style:{display:"flex",gap:6},children:[E.jsx("input",{value:ne,onChange:ue=>se(ue.target.value),onKeyDown:ue=>ue.key==="Enter"&&Lt(),placeholder:"Type...",style:{flex:1,padding:"11px 14px",background:"rgba(255,255,255,0.025)",border:"1px solid var(--b)",borderRadius:11,color:"var(--t)",fontFamily:"var(--fm)",fontSize:10}}),E.jsx("button",{onClick:Lt,style:{padding:"11px 16px",background:"var(--s)",border:"1px solid var(--b)",borderRadius:11,color:"var(--t)",fontSize:13},children:"↵"})]})]})]})]})]})]})}return null}d0.createRoot(document.getElementById("root")).render(E.jsx(i0.StrictMode,{children:E.jsx(yk,{})}));
