(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Am(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var pu={exports:{}},wo={},mu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function U0(){if(_p)return ft;_p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function y(D,K,we){this.props=D,this.context=K,this.refs=T,this.updater=we||S}y.prototype.isReactComponent={},y.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function g(){}g.prototype=y.prototype;function U(D,K,we){this.props=D,this.context=K,this.refs=T,this.updater=we||S}var I=U.prototype=new g;I.constructor=U,w(I,y.prototype),I.isPureReactComponent=!0;var R=Array.isArray,j=Object.prototype.hasOwnProperty,F={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function q(D,K,we){var $,ue={},ye=null,_e=null;if(K!=null)for($ in K.ref!==void 0&&(_e=K.ref),K.key!==void 0&&(ye=""+K.key),K)j.call(K,$)&&!k.hasOwnProperty($)&&(ue[$]=K[$]);var Ae=arguments.length-2;if(Ae===1)ue.children=we;else if(1<Ae){for(var Xe=Array(Ae),Ge=0;Ge<Ae;Ge++)Xe[Ge]=arguments[Ge+2];ue.children=Xe}if(D&&D.defaultProps)for($ in Ae=D.defaultProps,Ae)ue[$]===void 0&&(ue[$]=Ae[$]);return{$$typeof:s,type:D,key:ye,ref:_e,props:ue,_owner:F.current}}function b(D,K){return{$$typeof:s,type:D.type,key:K,ref:D.ref,props:D.props,_owner:D._owner}}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function H(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(we){return K[we]})}var oe=/\/+/g;function te(D,K){return typeof D=="object"&&D!==null&&D.key!=null?H(""+D.key):K.toString(36)}function fe(D,K,we,$,ue){var ye=typeof D;(ye==="undefined"||ye==="boolean")&&(D=null);var _e=!1;if(D===null)_e=!0;else switch(ye){case"string":case"number":_e=!0;break;case"object":switch(D.$$typeof){case s:case e:_e=!0}}if(_e)return _e=D,ue=ue(_e),D=$===""?"."+te(_e,0):$,R(ue)?(we="",D!=null&&(we=D.replace(oe,"$&/")+"/"),fe(ue,K,we,"",function(Ge){return Ge})):ue!=null&&(C(ue)&&(ue=b(ue,we+(!ue.key||_e&&_e.key===ue.key?"":(""+ue.key).replace(oe,"$&/")+"/")+D)),K.push(ue)),1;if(_e=0,$=$===""?".":$+":",R(D))for(var Ae=0;Ae<D.length;Ae++){ye=D[Ae];var Xe=$+te(ye,Ae);_e+=fe(ye,K,we,Xe,ue)}else if(Xe=x(D),typeof Xe=="function")for(D=Xe.call(D),Ae=0;!(ye=D.next()).done;)ye=ye.value,Xe=$+te(ye,Ae++),_e+=fe(ye,K,we,Xe,ue);else if(ye==="object")throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return _e}function he(D,K,we){if(D==null)return D;var $=[],ue=0;return fe(D,$,"","",function(ye){return K.call(we,ye,ue++)}),$}function ae(D){if(D._status===-1){var K=D._result;K=K(),K.then(function(we){(D._status===0||D._status===-1)&&(D._status=1,D._result=we)},function(we){(D._status===0||D._status===-1)&&(D._status=2,D._result=we)}),D._status===-1&&(D._status=0,D._result=K)}if(D._status===1)return D._result.default;throw D._result}var ce={current:null},O={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:O,ReactCurrentOwner:F};function G(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:he,forEach:function(D,K,we){he(D,function(){K.apply(this,arguments)},we)},count:function(D){var K=0;return he(D,function(){K++}),K},toArray:function(D){return he(D,function(K){return K})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=U,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=G,ft.cloneElement=function(D,K,we){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var $=w({},D.props),ue=D.key,ye=D.ref,_e=D._owner;if(K!=null){if(K.ref!==void 0&&(ye=K.ref,_e=F.current),K.key!==void 0&&(ue=""+K.key),D.type&&D.type.defaultProps)var Ae=D.type.defaultProps;for(Xe in K)j.call(K,Xe)&&!k.hasOwnProperty(Xe)&&($[Xe]=K[Xe]===void 0&&Ae!==void 0?Ae[Xe]:K[Xe])}var Xe=arguments.length-2;if(Xe===1)$.children=we;else if(1<Xe){Ae=Array(Xe);for(var Ge=0;Ge<Xe;Ge++)Ae[Ge]=arguments[Ge+2];$.children=Ae}return{$$typeof:s,type:D.type,key:ue,ref:ye,props:$,_owner:_e}},ft.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:c,_context:D},D.Consumer=D},ft.createElement=q,ft.createFactory=function(D){var K=q.bind(null,D);return K.type=D,K},ft.createRef=function(){return{current:null}},ft.forwardRef=function(D){return{$$typeof:f,render:D}},ft.isValidElement=C,ft.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:ae}},ft.memo=function(D,K){return{$$typeof:m,type:D,compare:K===void 0?null:K}},ft.startTransition=function(D){var K=O.transition;O.transition={};try{D()}finally{O.transition=K}},ft.unstable_act=G,ft.useCallback=function(D,K){return ce.current.useCallback(D,K)},ft.useContext=function(D){return ce.current.useContext(D)},ft.useDebugValue=function(){},ft.useDeferredValue=function(D){return ce.current.useDeferredValue(D)},ft.useEffect=function(D,K){return ce.current.useEffect(D,K)},ft.useId=function(){return ce.current.useId()},ft.useImperativeHandle=function(D,K,we){return ce.current.useImperativeHandle(D,K,we)},ft.useInsertionEffect=function(D,K){return ce.current.useInsertionEffect(D,K)},ft.useLayoutEffect=function(D,K){return ce.current.useLayoutEffect(D,K)},ft.useMemo=function(D,K){return ce.current.useMemo(D,K)},ft.useReducer=function(D,K,we){return ce.current.useReducer(D,K,we)},ft.useRef=function(D){return ce.current.useRef(D)},ft.useState=function(D){return ce.current.useState(D)},ft.useSyncExternalStore=function(D,K,we){return ce.current.useSyncExternalStore(D,K,we)},ft.useTransition=function(){return ce.current.useTransition()},ft.version="18.3.1",ft}var xp;function kd(){return xp||(xp=1,mu.exports=U0()),mu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function F0(){if(yp)return wo;yp=1;var s=kd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(v[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:a.current}}return wo.Fragment=n,wo.jsx=u,wo.jsxs=u,wo}var Sp;function O0(){return Sp||(Sp=1,pu.exports=F0()),pu.exports}var N=O0(),Yt=kd();const k0=Am(Yt);var $a={},gu={exports:{}},Pn={},vu={exports:{}},_u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function B0(){return Mp||(Mp=1,function(s){function e(O,le){var G=O.length;O.push(le);e:for(;0<G;){var D=G-1>>>1,K=O[D];if(0<a(K,le))O[D]=le,O[G]=K,G=D;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var le=O[0],G=O.pop();if(G!==le){O[0]=G;e:for(var D=0,K=O.length,we=K>>>1;D<we;){var $=2*(D+1)-1,ue=O[$],ye=$+1,_e=O[ye];if(0>a(ue,G))ye<K&&0>a(_e,ue)?(O[D]=_e,O[ye]=G,D=ye):(O[D]=ue,O[$]=G,D=$);else if(ye<K&&0>a(_e,G))O[D]=_e,O[ye]=G,D=ye;else break e}}return le}function a(O,le){var G=O.sortIndex-le.sortIndex;return G!==0?G:O.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],m=[],_=1,v=null,x=3,S=!1,w=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(O){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=O)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(m)}}function R(O){if(T=!1,I(O),!w)if(n(p)!==null)w=!0,ae(j);else{var le=n(m);le!==null&&ce(R,le.startTime-O)}}function j(O,le){w=!1,T&&(T=!1,g(q),q=-1),S=!0;var G=x;try{for(I(le),v=n(p);v!==null&&(!(v.expirationTime>le)||O&&!H());){var D=v.callback;if(typeof D=="function"){v.callback=null,x=v.priorityLevel;var K=D(v.expirationTime<=le);le=s.unstable_now(),typeof K=="function"?v.callback=K:v===n(p)&&r(p),I(le)}else r(p);v=n(p)}if(v!==null)var we=!0;else{var $=n(m);$!==null&&ce(R,$.startTime-le),we=!1}return we}finally{v=null,x=G,S=!1}}var F=!1,k=null,q=-1,b=5,C=-1;function H(){return!(s.unstable_now()-C<b)}function oe(){if(k!==null){var O=s.unstable_now();C=O;var le=!0;try{le=k(!0,O)}finally{le?te():(F=!1,k=null)}}else F=!1}var te;if(typeof U=="function")te=function(){U(oe)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=oe,te=function(){he.postMessage(null)}}else te=function(){y(oe,0)};function ae(O){k=O,F||(F=!0,te())}function ce(O,le){q=y(function(){O(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ae(j))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(O){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var G=x;x=le;try{return O()}finally{x=G}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,le){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var G=x;x=O;try{return le()}finally{x=G}},s.unstable_scheduleCallback=function(O,le,G){var D=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?D+G:D):G=D,O){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=G+K,O={id:_++,callback:le,priorityLevel:O,startTime:G,expirationTime:K,sortIndex:-1},G>D?(O.sortIndex=G,e(m,O),n(p)===null&&O===n(m)&&(T?(g(q),q=-1):T=!0,ce(R,G-D))):(O.sortIndex=K,e(p,O),w||S||(w=!0,ae(j))),O},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(O){var le=x;return function(){var G=x;x=le;try{return O.apply(this,arguments)}finally{x=G}}}}(_u)),_u}var Ep;function z0(){return Ep||(Ep=1,vu.exports=B0()),vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function H0(){if(wp)return Pn;wp=1;var s=kd(),e=z0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,d,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,U);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,U);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,U);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function I(t,i,o,l){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,d,l)&&(o=null),l||d===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,l=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),H=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),O=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,D;function K(t){if(D===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+t}var we=!1;function $(t,i){if(!t||we)return"";we=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var l=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){l=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){l=ie}t()}}catch(ie){if(ie&&l&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),h=l.stack.split(`
`),M=d.length-1,L=h.length-1;1<=M&&0<=L&&d[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(d[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||d[M]!==h[L]){var B=`
`+d[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=L);break}}}finally{we=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?K(t):""}function ue(t){switch(t.tag){case 5:return K(t.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return t=$(t.type,!1),t;case 11:return t=$(t.type.render,!1),t;case 1:return t=$(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case F:return"Portal";case b:return"Profiler";case q:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(t){var i=Xe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function bt(t){t._valueTracker||(t._valueTracker=Ge(t))}function Pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Xe(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function ct(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function z(t,i){var o=i.checked;return G({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function vn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&I(t,"checked",i,!1)}function ut(t,i){ht(t,i);var o=Ae(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Tt(t,i,o){(i!=="number"||ct(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var We=Array.isArray;function P(t,i,o,l){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return G({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ee(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(We(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function pe(t,i){var o=Ae(i.value),l=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function xe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,Ke=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function $e(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Fe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function et(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function tt(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,d=et(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,d):t[o]=d}}var Oe=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,se=null,me=null;function De(t){if(t=lo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ua(i),Re(t.stateNode,t.type,i))}}function Ne(t){se?me?me.push(t):me=[t]:se=t}function st(){if(se){var t=se,i=me;if(me=se=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function Dt(t,i){return t(i)}function qt(){}var _t=!1;function wn(t,i,o){if(_t)return t(i,o);_t=!0;try{return Dt(t,i,o)}finally{_t=!1,(se!==null||me!==null)&&(qt(),st())}}function _n(t,i){var o=t.stateNode;if(o===null)return null;var l=ua(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Kr=!1;if(f)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{Kr=!1}function yi(t,i,o,l,d,h,M,L,B){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(ve){this.onError(ve)}}var Si=!1,Sr=null,Mr=!1,Gi=null,Vo={onError:function(t){Si=!0,Sr=t}};function Zr(t,i,o,l,d,h,M,L,B){Si=!1,Sr=null,yi.apply(Vo,arguments)}function Go(t,i,o,l,d,h,M,L,B){if(Zr.apply(this,arguments),Si){if(Si){var ie=Sr;Si=!1,Sr=null}else throw Error(n(198));Mr||(Mr=!0,Gi=ie)}}function di(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Wo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function jo(t){if(di(t)!==t)throw Error(n(188))}function Ol(t){var i=t.alternate;if(!i){if(i=di(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return jo(d),t;if(h===l)return jo(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=d,l=h;else{for(var M=!1,L=d.child;L;){if(L===o){M=!0,o=d,l=h;break}if(L===l){M=!0,l=d,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,l=d;break}if(L===l){M=!0,l=h,o=d;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Xo(t){return t=Ol(t),t!==null?Yo(t):null}function Yo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Yo(t);if(i!==null)return i;t=t.sibling}return null}var qo=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,X=e.unstable_shouldYield,re=e.unstable_requestPaint,Q=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,ke=e.unstable_LowPriority,nt=e.unstable_IdlePriority,Je=null,ze=null;function mt(t){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:vt,Bt=Math.log,Ut=Math.LN2;function vt(t){return t>>>=0,t===0?32:31-(Bt(t)/Ut|0)|0}var qe=64,zt=4194304;function pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cn(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,d=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~d;L!==0?l=pt(L):(h&=M,h!==0&&(l=pt(h)))}else M=o&~d,M!==0?l=pt(M):h!==0&&(l=pt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ot(i),d=1<<o,l|=t[o],i&=~d;return l}function Wi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-ot(h),L=1<<M,B=d[M];B===-1?((L&o)===0||(L&l)!==0)&&(d[M]=Wi(L,i)):B<=i&&(t.expiredLanes|=L),h&=~L}}function Mi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rt(){var t=qe;return qe<<=1,(qe&4194240)===0&&(qe=64),t}function un(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Jt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ot(i),t[i]=o}function on(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-ot(o),h=1<<d;i[d]=0,l[d]=-1,t[d]=-1,o&=~h}}function en(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ot(o),d=1<<l;d&i|t[l]&i&&(t[l]|=i),o&=~d}}var xt=0;function fi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Kd,kl,Zd,Qd,Jd,Bl=!1,$o=[],ji=null,Xi=null,Yi=null,Xs=new Map,Ys=new Map,qi=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ef(t,i){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Xs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(i.pointerId)}}function qs(t,i,o,l,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[d]},i!==null&&(i=lo(i),i!==null&&kl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function rg(t,i,o,l,d){switch(i){case"focusin":return ji=qs(ji,t,i,o,l,d),!0;case"dragenter":return Xi=qs(Xi,t,i,o,l,d),!0;case"mouseover":return Yi=qs(Yi,t,i,o,l,d),!0;case"pointerover":var h=d.pointerId;return Xs.set(h,qs(Xs.get(h)||null,t,i,o,l,d)),!0;case"gotpointercapture":return h=d.pointerId,Ys.set(h,qs(Ys.get(h)||null,t,i,o,l,d)),!0}return!1}function tf(t){var i=Er(t.target);if(i!==null){var o=di(i);if(o!==null){if(i=o.tag,i===13){if(i=Wo(o),i!==null){t.blockedOn=i,Jd(t.priority,function(){Zd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Hl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Et=l,o.target.dispatchEvent(l),Et=null}else return i=lo(o),i!==null&&kl(i),t.blockedOn=o,!1;i.shift()}return!0}function nf(t,i,o){Ko(t)&&o.delete(i)}function sg(){Bl=!1,ji!==null&&Ko(ji)&&(ji=null),Xi!==null&&Ko(Xi)&&(Xi=null),Yi!==null&&Ko(Yi)&&(Yi=null),Xs.forEach(nf),Ys.forEach(nf)}function $s(t,i){t.blockedOn===i&&(t.blockedOn=null,Bl||(Bl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sg)))}function Ks(t){function i(d){return $s(d,t)}if(0<$o.length){$s($o[0],t);for(var o=1;o<$o.length;o++){var l=$o[o];l.blockedOn===t&&(l.blockedOn=null)}}for(ji!==null&&$s(ji,t),Xi!==null&&$s(Xi,t),Yi!==null&&$s(Yi,t),Xs.forEach(i),Ys.forEach(i),o=0;o<qi.length;o++)l=qi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(o=qi[0],o.blockedOn===null);)tf(o),o.blockedOn===null&&qi.shift()}var Qr=R.ReactCurrentBatchConfig,Zo=!0;function og(t,i,o,l){var d=xt,h=Qr.transition;Qr.transition=null;try{xt=1,zl(t,i,o,l)}finally{xt=d,Qr.transition=h}}function ag(t,i,o,l){var d=xt,h=Qr.transition;Qr.transition=null;try{xt=4,zl(t,i,o,l)}finally{xt=d,Qr.transition=h}}function zl(t,i,o,l){if(Zo){var d=Hl(t,i,o,l);if(d===null)rc(t,i,l,Qo,o),ef(t,l);else if(rg(d,t,i,o,l))l.stopPropagation();else if(ef(t,l),i&4&&-1<ig.indexOf(t)){for(;d!==null;){var h=lo(d);if(h!==null&&Kd(h),h=Hl(t,i,o,l),h===null&&rc(t,i,l,Qo,o),h===d)break;d=h}d!==null&&l.stopPropagation()}else rc(t,i,l,null,o)}}var Qo=null;function Hl(t,i,o,l){if(Qo=null,t=W(l),t=Er(t),t!==null)if(i=di(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Wo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Qo=t,null}function rf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Ee:return 1;case be:return 4;case Le:case ke:return 16;case nt:return 536870912;default:return 16}default:return 16}}var $i=null,Vl=null,Jo=null;function sf(){if(Jo)return Jo;var t,i=Vl,o=i.length,l,d="value"in $i?$i.value:$i.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===d[h-l];l++);return Jo=d.slice(t,1<l?1-l:void 0)}function ea(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function of(){return!1}function Fn(t){function i(o,l,d,h,M){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ta:of,this.isPropagationStopped=of,this}return G(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),i}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=Fn(Jr),Zs=G({},Jr,{view:0,detail:0}),lg=Fn(Zs),Wl,jl,Qs,na=G({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Wl=t.screenX-Qs.screenX,jl=t.screenY-Qs.screenY):jl=Wl=0,Qs=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),af=Fn(na),cg=G({},na,{dataTransfer:0}),ug=Fn(cg),dg=G({},Zs,{relatedTarget:0}),Xl=Fn(dg),fg=G({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=Fn(fg),pg=G({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mg=Fn(pg),gg=G({},Jr,{data:0}),lf=Fn(gg),vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=xg[t])?!!i[t]:!1}function Yl(){return yg}var Sg=G({},Zs,{key:function(t){if(t.key){var i=vg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_g[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(t){return t.type==="keypress"?ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mg=Fn(Sg),Eg=G({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=Fn(Eg),wg=G({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),Tg=Fn(wg),Ag=G({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cg=Fn(Ag),Rg=G({},na,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bg=Fn(Rg),Pg=[9,13,27,32],ql=f&&"CompositionEvent"in window,Js=null;f&&"documentMode"in document&&(Js=document.documentMode);var Ng=f&&"TextEvent"in window&&!Js,uf=f&&(!ql||Js&&8<Js&&11>=Js),df=" ",ff=!1;function hf(t,i){switch(t){case"keyup":return Pg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Dg(t,i){switch(t){case"compositionend":return pf(i);case"keypress":return i.which!==32?null:(ff=!0,df);case"textInput":return t=i.data,t===df&&ff?null:t;default:return null}}function Lg(t,i){if(es)return t==="compositionend"||!ql&&hf(t,i)?(t=sf(),Jo=Vl=$i=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return uf&&i.locale!=="ko"?null:i.data;default:return null}}var Ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ig[t.type]:i==="textarea"}function gf(t,i,o,l){Ne(l),i=aa(i,"onChange"),0<i.length&&(o=new Gl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var eo=null,to=null;function Ug(t){If(t,0)}function ia(t){var i=ss(t);if(Pt(i))return t}function Fg(t,i){if(t==="change")return i}var vf=!1;if(f){var $l;if(f){var Kl="oninput"in document;if(!Kl){var _f=document.createElement("div");_f.setAttribute("oninput","return;"),Kl=typeof _f.oninput=="function"}$l=Kl}else $l=!1;vf=$l&&(!document.documentMode||9<document.documentMode)}function xf(){eo&&(eo.detachEvent("onpropertychange",yf),to=eo=null)}function yf(t){if(t.propertyName==="value"&&ia(to)){var i=[];gf(i,to,t,W(t)),wn(Ug,i)}}function Og(t,i,o){t==="focusin"?(xf(),eo=i,to=o,eo.attachEvent("onpropertychange",yf)):t==="focusout"&&xf()}function kg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ia(to)}function Bg(t,i){if(t==="click")return ia(i)}function zg(t,i){if(t==="input"||t==="change")return ia(i)}function Hg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:Hg;function no(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!p.call(i,d)||!Qn(t[d],i[d]))return!1}return!0}function Sf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mf(t,i){var o=Sf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Sf(o)}}function Ef(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ef(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function wf(){for(var t=window,i=ct();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ct(t.document)}return i}function Zl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Vg(t){var i=wf(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ef(o.ownerDocument.documentElement,o)){if(l!==null&&Zl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(l.start,d);l=l.end===void 0?h:Math.min(l.end,d),!t.extend&&h>l&&(d=l,l=h,h=d),d=Mf(o,h);var M=Mf(o,l);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Gg=f&&"documentMode"in document&&11>=document.documentMode,ts=null,Ql=null,io=null,Jl=!1;function Tf(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Jl||ts==null||ts!==ct(l)||(l=ts,"selectionStart"in l&&Zl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),io&&no(io,l)||(io=l,l=aa(Ql,"onSelect"),0<l.length&&(i=new Gl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ts)))}function ra(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ns={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},ec={},Af={};f&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function sa(t){if(ec[t])return ec[t];if(!ns[t])return t;var i=ns[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Af)return ec[t]=i[o];return t}var Cf=sa("animationend"),Rf=sa("animationiteration"),bf=sa("animationstart"),Pf=sa("transitionend"),Nf=new Map,Df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Nf.set(t,i),c(i,[t])}for(var tc=0;tc<Df.length;tc++){var nc=Df[tc],Wg=nc.toLowerCase(),jg=nc[0].toUpperCase()+nc.slice(1);Ki(Wg,"on"+jg)}Ki(Cf,"onAnimationEnd"),Ki(Rf,"onAnimationIteration"),Ki(bf,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(Pf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function Lf(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Go(l,i,void 0,t),t.currentTarget=null}function If(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],d=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],B=L.instance,ie=L.currentTarget;if(L=L.listener,B!==h&&d.isPropagationStopped())break e;Lf(d,L,ie),h=B}else for(M=0;M<l.length;M++){if(L=l[M],B=L.instance,ie=L.currentTarget,L=L.listener,B!==h&&d.isPropagationStopped())break e;Lf(d,L,ie),h=B}}}if(Mr)throw t=Gi,Mr=!1,Gi=null,t}function Lt(t,i){var o=i[uc];o===void 0&&(o=i[uc]=new Set);var l=t+"__bubble";o.has(l)||(Uf(i,t,2,!1),o.add(l))}function ic(t,i,o){var l=0;i&&(l|=4),Uf(o,t,l,i)}var oa="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[oa]){t[oa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Xg.has(o)||ic(o,!1,t),ic(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[oa]||(i[oa]=!0,ic("selectionchange",!1,i))}}function Uf(t,i,o,l){switch(rf(i)){case 1:var d=og;break;case 4:d=ag;break;default:d=zl}o=d.bind(null,i,o,t),d=void 0,!Kr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function rc(t,i,o,l,d){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===d||L.nodeType===8&&L.parentNode===d)break;if(M===4)for(M=l.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;M=M.return}for(;L!==null;){if(M=Er(L),M===null)return;if(B=M.tag,B===5||B===6){l=h=M;continue e}L=L.parentNode}}l=l.return}wn(function(){var ie=h,ve=W(o),Me=[];e:{var ge=Nf.get(t);if(ge!==void 0){var Ie=Gl,Be=t;switch(t){case"keypress":if(ea(o)===0)break e;case"keydown":case"keyup":Ie=Mg;break;case"focusin":Be="focus",Ie=Xl;break;case"focusout":Be="blur",Ie=Xl;break;case"beforeblur":case"afterblur":Ie=Xl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Tg;break;case Cf:case Rf:case bf:Ie=hg;break;case Pf:Ie=Cg;break;case"scroll":Ie=lg;break;case"wheel":Ie=bg;break;case"copy":case"cut":case"paste":Ie=mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=cf}var He=(i&4)!==0,Gt=!He&&t==="scroll",Z=He?ge!==null?ge+"Capture":null:ge;He=[];for(var V=ie,J;V!==null;){J=V;var Te=J.stateNode;if(J.tag===5&&Te!==null&&(J=Te,Z!==null&&(Te=_n(V,Z),Te!=null&&He.push(oo(V,Te,J)))),Gt)break;V=V.return}0<He.length&&(ge=new Ie(ge,Be,null,o,ve),Me.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&o!==Et&&(Be=o.relatedTarget||o.fromElement)&&(Er(Be)||Be[Ei]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(Be=o.relatedTarget||o.toElement,Ie=ie,Be=Be?Er(Be):null,Be!==null&&(Gt=di(Be),Be!==Gt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ie=null,Be=ie),Ie!==Be)){if(He=af,Te="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(He=cf,Te="onPointerLeave",Z="onPointerEnter",V="pointer"),Gt=Ie==null?ge:ss(Ie),J=Be==null?ge:ss(Be),ge=new He(Te,V+"leave",Ie,o,ve),ge.target=Gt,ge.relatedTarget=J,Te=null,Er(ve)===ie&&(He=new He(Z,V+"enter",Be,o,ve),He.target=J,He.relatedTarget=Gt,Te=He),Gt=Te,Ie&&Be)t:{for(He=Ie,Z=Be,V=0,J=He;J;J=is(J))V++;for(J=0,Te=Z;Te;Te=is(Te))J++;for(;0<V-J;)He=is(He),V--;for(;0<J-V;)Z=is(Z),J--;for(;V--;){if(He===Z||Z!==null&&He===Z.alternate)break t;He=is(He),Z=is(Z)}He=null}else He=null;Ie!==null&&Ff(Me,ge,Ie,He,!1),Be!==null&&Gt!==null&&Ff(Me,Gt,Be,He,!0)}}e:{if(ge=ie?ss(ie):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var je=Fg;else if(mf(ge))if(vf)je=zg;else{je=kg;var Ze=Og}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=Bg);if(je&&(je=je(t,ie))){gf(Me,je,o,ve);break e}Ze&&Ze(t,ge,ie),t==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Tt(ge,"number",ge.value)}switch(Ze=ie?ss(ie):window,t){case"focusin":(mf(Ze)||Ze.contentEditable==="true")&&(ts=Ze,Ql=ie,io=null);break;case"focusout":io=Ql=ts=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,Tf(Me,o,ve);break;case"selectionchange":if(Gg)break;case"keydown":case"keyup":Tf(Me,o,ve)}var Qe;if(ql)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else es?hf(t,o)&&(it="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(uf&&o.locale!=="ko"&&(es||it!=="onCompositionStart"?it==="onCompositionEnd"&&es&&(Qe=sf()):($i=ve,Vl="value"in $i?$i.value:$i.textContent,es=!0)),Ze=aa(ie,it),0<Ze.length&&(it=new lf(it,t,null,o,ve),Me.push({event:it,listeners:Ze}),Qe?it.data=Qe:(Qe=pf(o),Qe!==null&&(it.data=Qe)))),(Qe=Ng?Dg(t,o):Lg(t,o))&&(ie=aa(ie,"onBeforeInput"),0<ie.length&&(ve=new lf("onBeforeInput","beforeinput",null,o,ve),Me.push({event:ve,listeners:ie}),ve.data=Qe))}If(Me,i)})}function oo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function aa(t,i){for(var o=i+"Capture",l=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=_n(t,o),h!=null&&l.unshift(oo(t,h,d)),h=_n(t,i),h!=null&&l.push(oo(t,h,d))),t=t.return}return l}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ff(t,i,o,l,d){for(var h=i._reactName,M=[];o!==null&&o!==l;){var L=o,B=L.alternate,ie=L.stateNode;if(B!==null&&B===l)break;L.tag===5&&ie!==null&&(L=ie,d?(B=_n(o,h),B!=null&&M.unshift(oo(o,B,L))):d||(B=_n(o,h),B!=null&&M.push(oo(o,B,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var Yg=/\r\n?/g,qg=/\u0000|\uFFFD/g;function Of(t){return(typeof t=="string"?t:""+t).replace(Yg,`
`).replace(qg,"")}function la(t,i,o){if(i=Of(i),Of(t)!==i&&o)throw Error(n(425))}function ca(){}var sc=null,oc=null;function ac(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lc=typeof setTimeout=="function"?setTimeout:void 0,$g=typeof clearTimeout=="function"?clearTimeout:void 0,kf=typeof Promise=="function"?Promise:void 0,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof kf<"u"?function(t){return kf.resolve(null).then(t).catch(Zg)}:lc;function Zg(t){setTimeout(function(){throw t})}function cc(t,i){var o=i,l=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(l===0){t.removeChild(d),Ks(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=d}while(o);Ks(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Bf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),hi="__reactFiber$"+rs,ao="__reactProps$"+rs,Ei="__reactContainer$"+rs,uc="__reactEvents$"+rs,Qg="__reactListeners$"+rs,Jg="__reactHandles$"+rs;function Er(t){var i=t[hi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ei]||o[hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Bf(t);t!==null;){if(o=t[hi])return o;t=Bf(t)}return i}t=o,o=t.parentNode}return null}function lo(t){return t=t[hi]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ua(t){return t[ao]||null}var dc=[],os=-1;function Qi(t){return{current:t}}function It(t){0>os||(t.current=dc[os],dc[os]=null,os--)}function Nt(t,i){os++,dc[os]=t.current,t.current=i}var Ji={},dn=Qi(Ji),Tn=Qi(!1),wr=Ji;function as(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function An(t){return t=t.childContextTypes,t!=null}function da(){It(Tn),It(dn)}function zf(t,i,o){if(dn.current!==Ji)throw Error(n(168));Nt(dn,i),Nt(Tn,o)}function Hf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,_e(t)||"Unknown",d));return G({},o,l)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,wr=dn.current,Nt(dn,t),Nt(Tn,Tn.current),!0}function Vf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Hf(t,i,wr),l.__reactInternalMemoizedMergedChildContext=t,It(Tn),It(dn),Nt(dn,t)):It(Tn),Nt(Tn,o)}var wi=null,ha=!1,fc=!1;function Gf(t){wi===null?wi=[t]:wi.push(t)}function e0(t){ha=!0,Gf(t)}function er(){if(!fc&&wi!==null){fc=!0;var t=0,i=xt;try{var o=wi;for(xt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}wi=null,ha=!1}catch(d){throw wi!==null&&(wi=wi.slice(t+1)),qo(Ee,er),d}finally{xt=i,fc=!1}}return null}var ls=[],cs=0,pa=null,ma=0,Gn=[],Wn=0,Tr=null,Ti=1,Ai="";function Ar(t,i){ls[cs++]=ma,ls[cs++]=pa,pa=t,ma=i}function Wf(t,i,o){Gn[Wn++]=Ti,Gn[Wn++]=Ai,Gn[Wn++]=Tr,Tr=t;var l=Ti;t=Ai;var d=32-ot(l)-1;l&=~(1<<d),o+=1;var h=32-ot(i)+d;if(30<h){var M=d-d%5;h=(l&(1<<M)-1).toString(32),l>>=M,d-=M,Ti=1<<32-ot(i)+d|o<<d|l,Ai=h+t}else Ti=1<<h|o<<d|l,Ai=t}function hc(t){t.return!==null&&(Ar(t,1),Wf(t,1,0))}function pc(t){for(;t===pa;)pa=ls[--cs],ls[cs]=null,ma=ls[--cs],ls[cs]=null;for(;t===Tr;)Tr=Gn[--Wn],Gn[Wn]=null,Ai=Gn[--Wn],Gn[Wn]=null,Ti=Gn[--Wn],Gn[Wn]=null}var On=null,kn=null,Ft=!1,Jn=null;function jf(t,i){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Xf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,On=t,kn=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,On=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Tr!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,On=t,kn=null,!0):!1;default:return!1}}function mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gc(t){if(Ft){var i=kn;if(i){var o=i;if(!Xf(t,i)){if(mc(t))throw Error(n(418));i=Zi(o.nextSibling);var l=On;i&&Xf(t,i)?jf(l,o):(t.flags=t.flags&-4097|2,Ft=!1,On=t)}}else{if(mc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,On=t}}}function Yf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function ga(t){if(t!==On)return!1;if(!Ft)return Yf(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ac(t.type,t.memoizedProps)),i&&(i=kn)){if(mc(t))throw qf(),Error(n(418));for(;i;)jf(t,i),i=Zi(i.nextSibling)}if(Yf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kn=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=On?Zi(t.stateNode.nextSibling):null;return!0}function qf(){for(var t=kn;t;)t=Zi(t.nextSibling)}function us(){kn=On=null,Ft=!1}function vc(t){Jn===null?Jn=[t]:Jn.push(t)}var t0=R.ReactCurrentBatchConfig;function co(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var d=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=d.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function va(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function $f(t){var i=t._init;return i(t._payload)}function Kf(t){function i(Z,V){if(t){var J=Z.deletions;J===null?(Z.deletions=[V],Z.flags|=16):J.push(V)}}function o(Z,V){if(!t)return null;for(;V!==null;)i(Z,V),V=V.sibling;return null}function l(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function d(Z,V){return Z=lr(Z,V),Z.index=0,Z.sibling=null,Z}function h(Z,V,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<V?(Z.flags|=2,V):J):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function M(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function L(Z,V,J,Te){return V===null||V.tag!==6?(V=lu(J,Z.mode,Te),V.return=Z,V):(V=d(V,J),V.return=Z,V)}function B(Z,V,J,Te){var je=J.type;return je===k?ve(Z,V,J.props.children,Te,J.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&$f(je)===V.type)?(Te=d(V,J.props),Te.ref=co(Z,V,J),Te.return=Z,Te):(Te=Ha(J.type,J.key,J.props,null,Z.mode,Te),Te.ref=co(Z,V,J),Te.return=Z,Te)}function ie(Z,V,J,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=cu(J,Z.mode,Te),V.return=Z,V):(V=d(V,J.children||[]),V.return=Z,V)}function ve(Z,V,J,Te,je){return V===null||V.tag!==7?(V=Ir(J,Z.mode,Te,je),V.return=Z,V):(V=d(V,J),V.return=Z,V)}function Me(Z,V,J){if(typeof V=="string"&&V!==""||typeof V=="number")return V=lu(""+V,Z.mode,J),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case j:return J=Ha(V.type,V.key,V.props,null,Z.mode,J),J.ref=co(Z,null,V),J.return=Z,J;case F:return V=cu(V,Z.mode,J),V.return=Z,V;case ae:var Te=V._init;return Me(Z,Te(V._payload),J)}if(We(V)||le(V))return V=Ir(V,Z.mode,J,null),V.return=Z,V;va(Z,V)}return null}function ge(Z,V,J,Te){var je=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return je!==null?null:L(Z,V,""+J,Te);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case j:return J.key===je?B(Z,V,J,Te):null;case F:return J.key===je?ie(Z,V,J,Te):null;case ae:return je=J._init,ge(Z,V,je(J._payload),Te)}if(We(J)||le(J))return je!==null?null:ve(Z,V,J,Te,null);va(Z,J)}return null}function Ie(Z,V,J,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(J)||null,L(V,Z,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case j:return Z=Z.get(Te.key===null?J:Te.key)||null,B(V,Z,Te,je);case F:return Z=Z.get(Te.key===null?J:Te.key)||null,ie(V,Z,Te,je);case ae:var Ze=Te._init;return Ie(Z,V,J,Ze(Te._payload),je)}if(We(Te)||le(Te))return Z=Z.get(J)||null,ve(V,Z,Te,je,null);va(V,Te)}return null}function Be(Z,V,J,Te){for(var je=null,Ze=null,Qe=V,it=V=0,rn=null;Qe!==null&&it<J.length;it++){Qe.index>it?(rn=Qe,Qe=null):rn=Qe.sibling;var St=ge(Z,Qe,J[it],Te);if(St===null){Qe===null&&(Qe=rn);break}t&&Qe&&St.alternate===null&&i(Z,Qe),V=h(St,V,it),Ze===null?je=St:Ze.sibling=St,Ze=St,Qe=rn}if(it===J.length)return o(Z,Qe),Ft&&Ar(Z,it),je;if(Qe===null){for(;it<J.length;it++)Qe=Me(Z,J[it],Te),Qe!==null&&(V=h(Qe,V,it),Ze===null?je=Qe:Ze.sibling=Qe,Ze=Qe);return Ft&&Ar(Z,it),je}for(Qe=l(Z,Qe);it<J.length;it++)rn=Ie(Qe,Z,it,J[it],Te),rn!==null&&(t&&rn.alternate!==null&&Qe.delete(rn.key===null?it:rn.key),V=h(rn,V,it),Ze===null?je=rn:Ze.sibling=rn,Ze=rn);return t&&Qe.forEach(function(cr){return i(Z,cr)}),Ft&&Ar(Z,it),je}function He(Z,V,J,Te){var je=le(J);if(typeof je!="function")throw Error(n(150));if(J=je.call(J),J==null)throw Error(n(151));for(var Ze=je=null,Qe=V,it=V=0,rn=null,St=J.next();Qe!==null&&!St.done;it++,St=J.next()){Qe.index>it?(rn=Qe,Qe=null):rn=Qe.sibling;var cr=ge(Z,Qe,St.value,Te);if(cr===null){Qe===null&&(Qe=rn);break}t&&Qe&&cr.alternate===null&&i(Z,Qe),V=h(cr,V,it),Ze===null?je=cr:Ze.sibling=cr,Ze=cr,Qe=rn}if(St.done)return o(Z,Qe),Ft&&Ar(Z,it),je;if(Qe===null){for(;!St.done;it++,St=J.next())St=Me(Z,St.value,Te),St!==null&&(V=h(St,V,it),Ze===null?je=St:Ze.sibling=St,Ze=St);return Ft&&Ar(Z,it),je}for(Qe=l(Z,Qe);!St.done;it++,St=J.next())St=Ie(Qe,Z,it,St.value,Te),St!==null&&(t&&St.alternate!==null&&Qe.delete(St.key===null?it:St.key),V=h(St,V,it),Ze===null?je=St:Ze.sibling=St,Ze=St);return t&&Qe.forEach(function(I0){return i(Z,I0)}),Ft&&Ar(Z,it),je}function Gt(Z,V,J,Te){if(typeof J=="object"&&J!==null&&J.type===k&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case j:e:{for(var je=J.key,Ze=V;Ze!==null;){if(Ze.key===je){if(je=J.type,je===k){if(Ze.tag===7){o(Z,Ze.sibling),V=d(Ze,J.props.children),V.return=Z,Z=V;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&$f(je)===Ze.type){o(Z,Ze.sibling),V=d(Ze,J.props),V.ref=co(Z,Ze,J),V.return=Z,Z=V;break e}o(Z,Ze);break}else i(Z,Ze);Ze=Ze.sibling}J.type===k?(V=Ir(J.props.children,Z.mode,Te,J.key),V.return=Z,Z=V):(Te=Ha(J.type,J.key,J.props,null,Z.mode,Te),Te.ref=co(Z,V,J),Te.return=Z,Z=Te)}return M(Z);case F:e:{for(Ze=J.key;V!==null;){if(V.key===Ze)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){o(Z,V.sibling),V=d(V,J.children||[]),V.return=Z,Z=V;break e}else{o(Z,V);break}else i(Z,V);V=V.sibling}V=cu(J,Z.mode,Te),V.return=Z,Z=V}return M(Z);case ae:return Ze=J._init,Gt(Z,V,Ze(J._payload),Te)}if(We(J))return Be(Z,V,J,Te);if(le(J))return He(Z,V,J,Te);va(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,V!==null&&V.tag===6?(o(Z,V.sibling),V=d(V,J),V.return=Z,Z=V):(o(Z,V),V=lu(J,Z.mode,Te),V.return=Z,Z=V),M(Z)):o(Z,V)}return Gt}var ds=Kf(!0),Zf=Kf(!1),_a=Qi(null),xa=null,fs=null,_c=null;function xc(){_c=fs=xa=null}function yc(t){var i=_a.current;It(_a),t._currentValue=i}function Sc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function hs(t,i){xa=t,_c=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Cn=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(_c!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(xa===null)throw Error(n(308));fs=t,xa.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var Cr=null;function Mc(t){Cr===null?Cr=[t]:Cr.push(t)}function Qf(t,i,o,l){var d=i.interleaved;return d===null?(o.next=o,Mc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ci(t,l)}function Ci(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function Ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Ci(t,o)}return d=l.interleaved,d===null?(i.next=i,Mc(l)):(i.next=d.next,d.next=i),l.interleaved=i,Ci(t,o)}function ya(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,en(t,o)}}function eh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Sa(t,i,o,l){var d=t.updateQueue;tr=!1;var h=d.firstBaseUpdate,M=d.lastBaseUpdate,L=d.shared.pending;if(L!==null){d.shared.pending=null;var B=L,ie=B.next;B.next=null,M===null?h=ie:M.next=ie,M=B;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,L=ve.lastBaseUpdate,L!==M&&(L===null?ve.firstBaseUpdate=ie:L.next=ie,ve.lastBaseUpdate=B))}if(h!==null){var Me=d.baseState;M=0,ve=ie=B=null,L=h;do{var ge=L.lane,Ie=L.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,He=L;switch(ge=i,Ie=o,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){Me=Be.call(Ie,Me,ge);break e}Me=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ge=typeof Be=="function"?Be.call(Ie,Me,ge):Be,ge==null)break e;Me=G({},Me,ge);break e;case 2:tr=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[L]:ge.push(L))}else Ie={eventTime:Ie,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ve===null?(ie=ve=Ie,B=Me):ve=ve.next=Ie,M|=ge;if(L=L.next,L===null){if(L=d.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(B=Me),d.baseState=B,d.firstBaseUpdate=ie,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Pr|=M,t.lanes=M,t.memoizedState=Me}}function th(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=o,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var uo={},pi=Qi(uo),fo=Qi(uo),ho=Qi(uo);function Rr(t){if(t===uo)throw Error(n(174));return t}function wc(t,i){switch(Nt(ho,i),Nt(fo,t),Nt(pi,uo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}It(pi),Nt(pi,i)}function ps(){It(pi),It(fo),It(ho)}function nh(t){Rr(ho.current);var i=Rr(pi.current),o=Ve(i,t.type);i!==o&&(Nt(fo,t),Nt(pi,o))}function Tc(t){fo.current===t&&(It(pi),It(fo))}var Ot=Qi(0);function Ma(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ac=[];function Cc(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var Ea=R.ReactCurrentDispatcher,Rc=R.ReactCurrentBatchConfig,br=0,kt=null,$t=null,tn=null,wa=!1,po=!1,mo=0,n0=0;function fn(){throw Error(n(321))}function bc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Qn(t[o],i[o]))return!1;return!0}function Pc(t,i,o,l,d,h){if(br=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ea.current=t===null||t.memoizedState===null?o0:a0,t=o(l,d),po){h=0;do{if(po=!1,mo=0,25<=h)throw Error(n(301));h+=1,tn=$t=null,i.updateQueue=null,Ea.current=l0,t=o(l,d)}while(po)}if(Ea.current=Ca,i=$t!==null&&$t.next!==null,br=0,tn=$t=kt=null,wa=!1,i)throw Error(n(300));return t}function Nc(){var t=mo!==0;return mo=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?kt.memoizedState=tn=t:tn=tn.next=t,tn}function Xn(){if($t===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=tn===null?kt.memoizedState:tn.next;if(i!==null)tn=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},tn===null?kt.memoizedState=tn=t:tn=tn.next=t}return tn}function go(t,i){return typeof i=="function"?i(t):i}function Dc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=$t,d=l.baseQueue,h=o.pending;if(h!==null){if(d!==null){var M=d.next;d.next=h.next,h.next=M}l.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,l=l.baseState;var L=M=null,B=null,ie=h;do{var ve=ie.lane;if((br&ve)===ve)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),l=ie.hasEagerState?ie.eagerState:t(l,ie.action);else{var Me={lane:ve,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(L=B=Me,M=l):B=B.next=Me,kt.lanes|=ve,Pr|=ve}ie=ie.next}while(ie!==null&&ie!==h);B===null?M=l:B.next=L,Qn(l,i.memoizedState)||(Cn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=B,o.lastRenderedState=l}if(t=o.interleaved,t!==null){d=t;do h=d.lane,kt.lanes|=h,Pr|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Lc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do h=t(h,M.action),M=M.next;while(M!==d);Qn(h,i.memoizedState)||(Cn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function ih(){}function rh(t,i){var o=kt,l=Xn(),d=i(),h=!Qn(l.memoizedState,d);if(h&&(l.memoizedState=d,Cn=!0),l=l.queue,Ic(ah.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,vo(9,oh.bind(null,o,l,d,i),void 0,null),nn===null)throw Error(n(349));(br&30)!==0||sh(o,i,d)}return d}function sh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function oh(t,i,o,l){i.value=o,i.getSnapshot=l,lh(i)&&ch(t)}function ah(t,i,o){return o(function(){lh(i)&&ch(t)})}function lh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Qn(t,o)}catch{return!0}}function ch(t){var i=Ci(t,1);i!==null&&ii(i,t,1,-1)}function uh(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:t},i.queue=t,t=t.dispatch=s0.bind(null,kt,t),[i.memoizedState,t]}function vo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function dh(){return Xn().memoizedState}function Ta(t,i,o,l){var d=mi();kt.flags|=t,d.memoizedState=vo(1|i,o,void 0,l===void 0?null:l)}function Aa(t,i,o,l){var d=Xn();l=l===void 0?null:l;var h=void 0;if($t!==null){var M=$t.memoizedState;if(h=M.destroy,l!==null&&bc(l,M.deps)){d.memoizedState=vo(i,o,h,l);return}}kt.flags|=t,d.memoizedState=vo(1|i,o,h,l)}function fh(t,i){return Ta(8390656,8,t,i)}function Ic(t,i){return Aa(2048,8,t,i)}function hh(t,i){return Aa(4,2,t,i)}function ph(t,i){return Aa(4,4,t,i)}function mh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function gh(t,i,o){return o=o!=null?o.concat([t]):null,Aa(4,4,mh.bind(null,i,t),o)}function Uc(){}function vh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&bc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function _h(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&bc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function xh(t,i,o){return(br&21)===0?(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=o):(Qn(o,i)||(o=Rt(),kt.lanes|=o,Pr|=o,t.baseState=!0),i)}function i0(t,i){var o=xt;xt=o!==0&&4>o?o:4,t(!0);var l=Rc.transition;Rc.transition={};try{t(!1),i()}finally{xt=o,Rc.transition=l}}function yh(){return Xn().memoizedState}function r0(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Sh(t))Mh(i,o);else if(o=Qf(t,i,o,l),o!==null){var d=Sn();ii(o,t,l,d),Eh(o,i,l)}}function s0(t,i,o){var l=or(t),d={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Sh(t))Mh(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(d.hasEagerState=!0,d.eagerState=L,Qn(L,M)){var B=i.interleaved;B===null?(d.next=d,Mc(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}o=Qf(t,i,d,l),o!==null&&(d=Sn(),ii(o,t,l,d),Eh(o,i,l))}}function Sh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function Mh(t,i){po=wa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Eh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,en(t,o)}}var Ca={readContext:jn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},o0={readContext:jn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:fh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ta(4194308,4,mh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ta(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ta(4,2,t,i)},useMemo:function(t,i){var o=mi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=mi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=r0.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:uh,useDebugValue:Uc,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=uh(!1),i=t[0];return t=i0.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,d=mi();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),nn===null)throw Error(n(349));(br&30)!==0||sh(l,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,fh(ah.bind(null,l,h,t),[t]),l.flags|=2048,vo(9,oh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=mi(),i=nn.identifierPrefix;if(Ft){var o=Ai,l=Ti;o=(l&~(1<<32-ot(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=mo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=n0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},a0={readContext:jn,useCallback:vh,useContext:jn,useEffect:Ic,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:_h,useReducer:Dc,useRef:dh,useState:function(){return Dc(go)},useDebugValue:Uc,useDeferredValue:function(t){var i=Xn();return xh(i,$t.memoizedState,t)},useTransition:function(){var t=Dc(go)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:yh,unstable_isNewReconciler:!1},l0={readContext:jn,useCallback:vh,useContext:jn,useEffect:Ic,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:_h,useReducer:Lc,useRef:dh,useState:function(){return Lc(go)},useDebugValue:Uc,useDeferredValue:function(t){var i=Xn();return $t===null?i.memoizedState=t:xh(i,$t.memoizedState,t)},useTransition:function(){var t=Lc(go)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:yh,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=G({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Fc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:G({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ra={isMounted:function(t){return(t=t._reactInternals)?di(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Sn(),d=or(t),h=Ri(l,d);h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,d),i!==null&&(ii(i,t,d,l),ya(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Sn(),d=or(t),h=Ri(l,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,d),i!==null&&(ii(i,t,d,l),ya(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Sn(),l=or(t),d=Ri(o,l);d.tag=2,i!=null&&(d.callback=i),i=nr(t,d,l),i!==null&&(ii(i,t,l,o),ya(i,t,l))}};function wh(t,i,o,l,d,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!no(o,l)||!no(d,h):!0}function Th(t,i,o){var l=!1,d=Ji,h=i.contextType;return typeof h=="object"&&h!==null?h=jn(h):(d=An(i)?wr:dn.current,l=i.contextTypes,h=(l=l!=null)?as(t,d):Ji),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ra,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ah(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ra.enqueueReplaceState(i,i.state,null)}function Oc(t,i,o,l){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Ec(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=jn(h):(h=An(i)?wr:dn.current,d.context=as(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Fc(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ra.enqueueReplaceState(d,d.state,null),Sa(t,o,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function kc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Bc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var c0=typeof WeakMap=="function"?WeakMap:Map;function Ch(t,i,o){o=Ri(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ua||(Ua=!0,eu=l),Bc(t,i)},o}function Rh(t,i,o){o=Ri(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;o.payload=function(){return l(d)},o.callback=function(){Bc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Bc(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function bh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new c0;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(o)||(d.add(o),t=E0.bind(null,t,i,o),i.then(t,t))}function Ph(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Nh(t,i,o,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ri(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var u0=R.ReactCurrentOwner,Cn=!1;function yn(t,i,o,l){i.child=t===null?Zf(i,null,o,l):ds(i,t.child,o,l)}function Dh(t,i,o,l,d){o=o.render;var h=i.ref;return hs(i,d),l=Pc(t,i,o,l,h,d),o=Nc(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,bi(t,i,d)):(Ft&&o&&hc(i),i.flags|=1,yn(t,i,l,d),i.child)}function Lh(t,i,o,l,d){if(t===null){var h=o.type;return typeof h=="function"&&!au(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Ih(t,i,h,l,d)):(t=Ha(o.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:no,o(M,l)&&t.ref===i.ref)return bi(t,i,d)}return i.flags|=1,t=lr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Ih(t,i,o,l,d){if(t!==null){var h=t.memoizedProps;if(no(h,l)&&t.ref===i.ref)if(Cn=!1,i.pendingProps=l=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Cn=!0);else return i.lanes=t.lanes,bi(t,i,d)}return zc(t,i,o,l,d)}function Uh(t,i,o){var l=i.pendingProps,d=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(vs,Bn),Bn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Nt(vs,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Nt(vs,Bn),Bn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Nt(vs,Bn),Bn|=l;return yn(t,i,d,o),i.child}function Fh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function zc(t,i,o,l,d){var h=An(o)?wr:dn.current;return h=as(i,h),hs(i,d),o=Pc(t,i,o,l,h,d),l=Nc(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,bi(t,i,d)):(Ft&&l&&hc(i),i.flags|=1,yn(t,i,o,d),i.child)}function Oh(t,i,o,l,d){if(An(o)){var h=!0;fa(i)}else h=!1;if(hs(i,d),i.stateNode===null)Pa(t,i),Th(i,o,l),Oc(i,o,l,d),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var B=M.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=jn(ie):(ie=An(o)?wr:dn.current,ie=as(i,ie));var ve=o.getDerivedStateFromProps,Me=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";Me||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||B!==ie)&&Ah(i,M,l,ie),tr=!1;var ge=i.memoizedState;M.state=ge,Sa(i,l,M,d),B=i.memoizedState,L!==l||ge!==B||Tn.current||tr?(typeof ve=="function"&&(Fc(i,o,ve,l),B=i.memoizedState),(L=tr||wh(i,o,L,l,ge,B,ie))?(Me||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),M.props=l,M.state=B,M.context=ie,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Jf(t,i),L=i.memoizedProps,ie=i.type===i.elementType?L:ei(i.type,L),M.props=ie,Me=i.pendingProps,ge=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=jn(B):(B=An(o)?wr:dn.current,B=as(i,B));var Ie=o.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==Me||ge!==B)&&Ah(i,M,l,B),tr=!1,ge=i.memoizedState,M.state=ge,Sa(i,l,M,d);var Be=i.memoizedState;L!==Me||ge!==Be||Tn.current||tr?(typeof Ie=="function"&&(Fc(i,o,Ie,l),Be=i.memoizedState),(ie=tr||wh(i,o,ie,l,ge,Be,B)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=B,l=ie):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Hc(t,i,o,l,h,d)}function Hc(t,i,o,l,d,h){Fh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return d&&Vf(i,o,!1),bi(t,i,h);l=i.stateNode,u0.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ds(i,t.child,null,h),i.child=ds(i,null,L,h)):yn(t,i,L,h),i.memoizedState=l.state,d&&Vf(i,o,!0),i.child}function kh(t){var i=t.stateNode;i.pendingContext?zf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&zf(t,i.context,!1),wc(t,i.containerInfo)}function Bh(t,i,o,l,d){return us(),vc(d),i.flags|=256,yn(t,i,o,l),i.child}var Vc={dehydrated:null,treeContext:null,retryLane:0};function Gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function zh(t,i,o){var l=i.pendingProps,d=Ot.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(d&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Nt(Ot,d&1),t===null)return gc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Va(M,l,0,null),t=Ir(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Gc(o),i.memoizedState=Vc,t):Wc(i,M));if(d=t.memoizedState,d!==null&&(L=d.dehydrated,L!==null))return d0(t,i,M,l,L,d,o);if(h){h=l.fallback,M=i.mode,d=t.child,L=d.sibling;var B={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=lr(d,B),l.subtreeFlags=d.subtreeFlags&14680064),L!==null?h=lr(L,h):(h=Ir(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Gc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Vc,l}return h=t.child,t=h.sibling,l=lr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Wc(t,i){return i=Va({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ba(t,i,o,l){return l!==null&&vc(l),ds(i,t.child,null,o),t=Wc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function d0(t,i,o,l,d,h,M){if(o)return i.flags&256?(i.flags&=-257,l=kc(Error(n(422))),ba(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,d=i.mode,l=Va({mode:"visible",children:l.children},d,0,null),h=Ir(h,d,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ds(i,t.child,null,M),i.child.memoizedState=Gc(M),i.memoizedState=Vc,h);if((i.mode&1)===0)return ba(t,i,M,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=kc(h,l,void 0),ba(t,i,M,l)}if(L=(M&t.childLanes)!==0,Cn||L){if(l=nn,l!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|M))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Ci(t,d),ii(l,t,d,-1))}return ou(),l=kc(Error(n(421))),ba(t,i,M,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=w0.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,kn=Zi(d.nextSibling),On=i,Ft=!0,Jn=null,t!==null&&(Gn[Wn++]=Ti,Gn[Wn++]=Ai,Gn[Wn++]=Tr,Ti=t.id,Ai=t.overflow,Tr=i),i=Wc(i,l.children),i.flags|=4096,i)}function Hh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Sc(t.return,i,o)}function jc(t,i,o,l,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=d)}function Vh(t,i,o){var l=i.pendingProps,d=l.revealOrder,h=l.tail;if(yn(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hh(t,o,i);else if(t.tag===19)Hh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Nt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Ma(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),jc(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ma(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}jc(i,!0,o,null,h);break;case"together":jc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Pa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function bi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function f0(t,i,o){switch(i.tag){case 3:kh(i),us();break;case 5:nh(i);break;case 1:An(i.type)&&fa(i);break;case 4:wc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Nt(_a,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Nt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?zh(t,i,o):(Nt(Ot,Ot.current&1),t=bi(t,i,o),t!==null?t.sibling:null);Nt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Vh(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Uh(t,i,o)}return bi(t,i,o)}var Gh,Xc,Wh,jh;Gh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Xc=function(){},Wh=function(t,i,o,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Rr(pi.current);var h=null;switch(o){case"input":d=z(t,d),l=z(t,l),h=[];break;case"select":d=G({},d,{value:void 0}),l=G({},l,{value:void 0}),h=[];break;case"textarea":d=E(t,d),l=E(t,l),h=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ca)}dt(o,l);var M;o=null;for(ie in d)if(!l.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var L=d[ie];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?h||(h=[]):(h=h||[]).push(ie,null));for(ie in l){var B=l[ie];if(L=d!=null?d[ie]:void 0,l.hasOwnProperty(ie)&&B!==L&&(B!=null||L!=null))if(ie==="style")if(L){for(M in L)!L.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&L[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(h||(h=[]),h.push(ie,o)),o=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,L=L?L.__html:void 0,B!=null&&L!==B&&(h=h||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&Lt("scroll",t),h||L===B||(h=[])):(h=h||[]).push(ie,B))}o&&(h=h||[]).push("style",o);var ie=h;(i.updateQueue=ie)&&(i.flags|=4)}},jh=function(t,i,o,l){o!==l&&(i.flags|=4)};function _o(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function h0(t,i,o){var l=i.pendingProps;switch(pc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return An(i.type)&&da(),hn(i),null;case 3:return l=i.stateNode,ps(),It(Tn),It(dn),Cc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ga(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(iu(Jn),Jn=null))),Xc(t,i),hn(i),null;case 5:Tc(i);var d=Rr(ho.current);if(o=i.type,t!==null&&i.stateNode!=null)Wh(t,i,o,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return hn(i),null}if(t=Rr(pi.current),ga(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[hi]=i,l[ao]=h,t=(i.mode&1)!==0,o){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(d=0;d<ro.length;d++)Lt(ro[d],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":vn(l,h),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Lt("invalid",l);break;case"textarea":ee(l,h),Lt("invalid",l)}dt(o,h),d=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&la(l.textContent,L,t),d=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&la(l.textContent,L,t),d=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Lt("scroll",l)}switch(o){case"input":bt(l),Ye(l,h,!0);break;case"textarea":bt(l),xe(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ca)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[hi]=i,t[ao]=l,Gh(t,i,!1,!1),i.stateNode=t;e:{switch(M=rt(o,l),o){case"dialog":Lt("cancel",t),Lt("close",t),d=l;break;case"iframe":case"object":case"embed":Lt("load",t),d=l;break;case"video":case"audio":for(d=0;d<ro.length;d++)Lt(ro[d],t);d=l;break;case"source":Lt("error",t),d=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),d=l;break;case"details":Lt("toggle",t),d=l;break;case"input":vn(t,l),d=z(t,l),Lt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=G({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":ee(t,l),d=E(t,l),Lt("invalid",t);break;default:d=l}dt(o,d),L=d;for(h in L)if(L.hasOwnProperty(h)){var B=L[h];h==="style"?tt(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ke(t,B)):h==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&$e(t,B):typeof B=="number"&&$e(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Lt("scroll",t):B!=null&&I(t,h,B,M))}switch(o){case"input":bt(t),Ye(t,l,!1);break;case"textarea":bt(t),xe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?P(t,!!l.multiple,h,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ca)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(t&&i.stateNode!=null)jh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Rr(ho.current),Rr(pi.current),ga(i)){if(l=i.stateNode,o=i.memoizedProps,l[hi]=i,(h=l.nodeValue!==o)&&(t=On,t!==null))switch(t.tag){case 3:la(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[hi]=i,i.stateNode=l}return hn(i),null;case 13:if(It(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)qf(),us(),i.flags|=98560,h=!1;else if(h=ga(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[hi]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),h=!1}else Jn!==null&&(iu(Jn),Jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?Kt===0&&(Kt=3):ou())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return ps(),Xc(t,i),t===null&&so(i.stateNode.containerInfo),hn(i),null;case 10:return yc(i.type._context),hn(i),null;case 17:return An(i.type)&&da(),hn(i),null;case 19:if(It(Ot),h=i.memoizedState,h===null)return hn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)_o(h,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ma(t),M!==null){for(i.flags|=128,_o(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Nt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&Q()>_s&&(i.flags|=128,l=!0,_o(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ma(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),_o(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return hn(i),null}else 2*Q()-h.renderingStartTime>_s&&o!==1073741824&&(i.flags|=128,l=!0,_o(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Q(),i.sibling=null,o=Ot.current,Nt(Ot,l?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return su(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function p0(t,i){switch(pc(i),i.tag){case 1:return An(i.type)&&da(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ps(),It(Tn),It(dn),Cc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Tc(i),null;case 13:if(It(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ot),null;case 4:return ps(),null;case 10:return yc(i.type._context),null;case 22:case 23:return su(),null;case 24:return null;default:return null}}var Na=!1,pn=!1,m0=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function gs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ht(t,i,l)}else o.current=null}function Yc(t,i,o){try{o()}catch(l){Ht(t,i,l)}}var Xh=!1;function g0(t,i){if(sc=Zo,t=wf(),Zl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,B=-1,ie=0,ve=0,Me=t,ge=null;t:for(;;){for(var Ie;Me!==o||d!==0&&Me.nodeType!==3||(L=M+d),Me!==h||l!==0&&Me.nodeType!==3||(B=M+l),Me.nodeType===3&&(M+=Me.nodeValue.length),(Ie=Me.firstChild)!==null;)ge=Me,Me=Ie;for(;;){if(Me===t)break t;if(ge===o&&++ie===d&&(L=M),ge===h&&++ve===l&&(B=M),(Ie=Me.nextSibling)!==null)break;Me=ge,ge=Me.parentNode}Me=Ie}o=L===-1||B===-1?null:{start:L,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(oc={focusedElem:t,selectionRange:o},Zo=!1,Ue=i;Ue!==null;)if(i=Ue,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ue=t;else for(;Ue!==null;){i=Ue;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Gt=Be.memoizedState,Z=i.stateNode,V=Z.getSnapshotBeforeUpdate(i.elementType===i.type?He:ei(i.type,He),Gt);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Ht(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Ue=t;break}Ue=i.return}return Be=Xh,Xh=!1,Be}function xo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&Yc(i,o,h)}d=d.next}while(d!==l)}}function Da(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function qc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Yh(t){var i=t.alternate;i!==null&&(t.alternate=null,Yh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[ao],delete i[uc],delete i[Qg],delete i[Jg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qh(t){return t.tag===5||t.tag===3||t.tag===4}function $h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $c(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(t=t.child,t!==null))for($c(t,i,o),t=t.sibling;t!==null;)$c(t,i,o),t=t.sibling}function Kc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Kc(t,i,o),t=t.sibling;t!==null;)Kc(t,i,o),t=t.sibling}var an=null,ti=!1;function ir(t,i,o){for(o=o.child;o!==null;)Kh(t,i,o),o=o.sibling}function Kh(t,i,o){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:pn||gs(o,i);case 6:var l=an,d=ti;an=null,ir(t,i,o),an=l,ti=d,an!==null&&(ti?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ti?(t=an,o=o.stateNode,t.nodeType===8?cc(t.parentNode,o):t.nodeType===1&&cc(t,o),Ks(t)):cc(an,o.stateNode));break;case 4:l=an,d=ti,an=o.stateNode.containerInfo,ti=!0,ir(t,i,o),an=l,ti=d;break;case 0:case 11:case 14:case 15:if(!pn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var h=d,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Yc(o,i,M),d=d.next}while(d!==l)}ir(t,i,o);break;case 1:if(!pn&&(gs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){Ht(o,i,L)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(pn=(l=pn)||o.memoizedState!==null,ir(t,i,o),pn=l):ir(t,i,o);break;default:ir(t,i,o)}}function Zh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new m0),i.forEach(function(l){var d=T0.bind(null,t,l);o.has(l)||(o.add(l),l.then(d,d))})}}function ni(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:an=L.stateNode,ti=!1;break e;case 3:an=L.stateNode.containerInfo,ti=!0;break e;case 4:an=L.stateNode.containerInfo,ti=!0;break e}L=L.return}if(an===null)throw Error(n(160));Kh(h,M,d),an=null,ti=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ie){Ht(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Qh(i,t),i=i.sibling}function Qh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),gi(t),l&4){try{xo(3,t,t.return),Da(3,t)}catch(He){Ht(t,t.return,He)}try{xo(5,t,t.return)}catch(He){Ht(t,t.return,He)}}break;case 1:ni(i,t),gi(t),l&512&&o!==null&&gs(o,o.return);break;case 5:if(ni(i,t),gi(t),l&512&&o!==null&&gs(o,o.return),t.flags&32){var d=t.stateNode;try{$e(d,"")}catch(He){Ht(t,t.return,He)}}if(l&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&ht(d,h),rt(L,M);var ie=rt(L,h);for(M=0;M<B.length;M+=2){var ve=B[M],Me=B[M+1];ve==="style"?tt(d,Me):ve==="dangerouslySetInnerHTML"?Ke(d,Me):ve==="children"?$e(d,Me):I(d,ve,Me,ie)}switch(L){case"input":ut(d,h);break;case"textarea":pe(d,h);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?P(d,!!h.multiple,Ie,!1):ge!==!!h.multiple&&(h.defaultValue!=null?P(d,!!h.multiple,h.defaultValue,!0):P(d,!!h.multiple,h.multiple?[]:"",!1))}d[ao]=h}catch(He){Ht(t,t.return,He)}}break;case 6:if(ni(i,t),gi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(He){Ht(t,t.return,He)}}break;case 3:if(ni(i,t),gi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Ks(i.containerInfo)}catch(He){Ht(t,t.return,He)}break;case 4:ni(i,t),gi(t);break;case 13:ni(i,t),gi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Jc=Q())),l&4&&Zh(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(pn=(ie=pn)||ve,ni(i,t),pn=ie):ni(i,t),gi(t),l&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!ve&&(t.mode&1)!==0)for(Ue=t,ve=t.child;ve!==null;){for(Me=Ue=ve;Ue!==null;){switch(ge=Ue,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:xo(4,ge,ge.return);break;case 1:gs(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){Ht(l,o,He)}}break;case 5:gs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){tp(Me);continue}}Ie!==null?(Ie.return=ge,Ue=Ie):tp(Me)}ve=ve.sibling}e:for(ve=null,Me=t;;){if(Me.tag===5){if(ve===null){ve=Me;try{d=Me.stateNode,ie?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=Me.stateNode,B=Me.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,L.style.display=et("display",M))}catch(He){Ht(t,t.return,He)}}}else if(Me.tag===6){if(ve===null)try{Me.stateNode.nodeValue=ie?"":Me.memoizedProps}catch(He){Ht(t,t.return,He)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;ve===Me&&(ve=null),Me=Me.return}ve===Me&&(ve=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:ni(i,t),gi(t),l&4&&Zh(t);break;case 21:break;default:ni(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(qh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&($e(d,""),l.flags&=-33);var h=$h(t);Kc(t,h,d);break;case 3:case 4:var M=l.stateNode.containerInfo,L=$h(t);$c(t,L,M);break;default:throw Error(n(161))}}catch(B){Ht(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function v0(t,i,o){Ue=t,Jh(t)}function Jh(t,i,o){for(var l=(t.mode&1)!==0;Ue!==null;){var d=Ue,h=d.child;if(d.tag===22&&l){var M=d.memoizedState!==null||Na;if(!M){var L=d.alternate,B=L!==null&&L.memoizedState!==null||pn;L=Na;var ie=pn;if(Na=M,(pn=B)&&!ie)for(Ue=d;Ue!==null;)M=Ue,B=M.child,M.tag===22&&M.memoizedState!==null?np(d):B!==null?(B.return=M,Ue=B):np(d);for(;h!==null;)Ue=h,Jh(h),h=h.sibling;Ue=d,Na=L,pn=ie}ep(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Ue=h):ep(t)}}function ep(t){for(;Ue!==null;){var i=Ue;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||Da(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!pn)if(o===null)l.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);l.componentDidUpdate(d,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&th(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}th(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ve=ie.memoizedState;if(ve!==null){var Me=ve.dehydrated;Me!==null&&Ks(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||i.flags&512&&qc(i)}catch(ge){Ht(i,i.return,ge)}}if(i===t){Ue=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ue=o;break}Ue=i.return}}function tp(t){for(;Ue!==null;){var i=Ue;if(i===t){Ue=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ue=o;break}Ue=i.return}}function np(t){for(;Ue!==null;){var i=Ue;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Da(4,i)}catch(B){Ht(i,o,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(B){Ht(i,d,B)}}var h=i.return;try{qc(i)}catch(B){Ht(i,h,B)}break;case 5:var M=i.return;try{qc(i)}catch(B){Ht(i,M,B)}}}catch(B){Ht(i,i.return,B)}if(i===t){Ue=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Ue=L;break}Ue=i.return}}var _0=Math.ceil,La=R.ReactCurrentDispatcher,Zc=R.ReactCurrentOwner,Yn=R.ReactCurrentBatchConfig,yt=0,nn=null,jt=null,ln=0,Bn=0,vs=Qi(0),Kt=0,yo=null,Pr=0,Ia=0,Qc=0,So=null,Rn=null,Jc=0,_s=1/0,Pi=null,Ua=!1,eu=null,rr=null,Fa=!1,sr=null,Oa=0,Mo=0,tu=null,ka=-1,Ba=0;function Sn(){return(yt&6)!==0?Q():ka!==-1?ka:ka=Q()}function or(t){return(t.mode&1)===0?1:(yt&2)!==0&&ln!==0?ln&-ln:t0.transition!==null?(Ba===0&&(Ba=Rt()),Ba):(t=xt,t!==0||(t=window.event,t=t===void 0?16:rf(t.type)),t)}function ii(t,i,o,l){if(50<Mo)throw Mo=0,tu=null,Error(n(185));Jt(t,o,l),((yt&2)===0||t!==nn)&&(t===nn&&((yt&2)===0&&(Ia|=o),Kt===4&&ar(t,ln)),bn(t,l),o===1&&yt===0&&(i.mode&1)===0&&(_s=Q()+500,ha&&er()))}function bn(t,i){var o=t.callbackNode;xn(t,i);var l=cn(t,t===nn?ln:0);if(l===0)o!==null&&A(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&A(o),i===1)t.tag===0?e0(rp.bind(null,t)):Gf(rp.bind(null,t)),Kg(function(){(yt&6)===0&&er()}),o=null;else{switch(fi(l)){case 1:o=Ee;break;case 4:o=be;break;case 16:o=Le;break;case 536870912:o=nt;break;default:o=Le}o=fp(o,ip.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ip(t,i){if(ka=-1,Ba=0,(yt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(xs()&&t.callbackNode!==o)return null;var l=cn(t,t===nn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=za(t,l);else{i=l;var d=yt;yt|=2;var h=op();(nn!==t||ln!==i)&&(Pi=null,_s=Q()+500,Dr(t,i));do try{S0();break}catch(L){sp(t,L)}while(!0);xc(),La.current=h,yt=d,jt!==null?i=0:(nn=null,ln=0,i=Kt)}if(i!==0){if(i===2&&(d=Mi(t),d!==0&&(l=d,i=nu(t,d))),i===1)throw o=yo,Dr(t,0),ar(t,l),bn(t,Q()),o;if(i===6)ar(t,l);else{if(d=t.current.alternate,(l&30)===0&&!x0(d)&&(i=za(t,l),i===2&&(h=Mi(t),h!==0&&(l=h,i=nu(t,h))),i===1))throw o=yo,Dr(t,0),ar(t,l),bn(t,Q()),o;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Lr(t,Rn,Pi);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=Jc+500-Q(),10<i)){if(cn(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){Sn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=lc(Lr.bind(null,t,Rn,Pi),i);break}Lr(t,Rn,Pi);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var M=31-ot(l);h=1<<M,M=i[M],M>d&&(d=M),l&=~h}if(l=d,l=Q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*_0(l/1960))-l,10<l){t.timeoutHandle=lc(Lr.bind(null,t,Rn,Pi),l);break}Lr(t,Rn,Pi);break;case 5:Lr(t,Rn,Pi);break;default:throw Error(n(329))}}}return bn(t,Q()),t.callbackNode===o?ip.bind(null,t):null}function nu(t,i){var o=So;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=za(t,i),t!==2&&(i=Rn,Rn=o,i!==null&&iu(i)),t}function iu(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function x0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var d=o[l],h=d.getSnapshot;d=d.value;try{if(!Qn(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~Qc,i&=~Ia,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ot(i),l=1<<o;t[o]=-1,i&=~l}}function rp(t){if((yt&6)!==0)throw Error(n(327));xs();var i=cn(t,0);if((i&1)===0)return bn(t,Q()),null;var o=za(t,i);if(t.tag!==0&&o===2){var l=Mi(t);l!==0&&(i=l,o=nu(t,l))}if(o===1)throw o=yo,Dr(t,0),ar(t,i),bn(t,Q()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Lr(t,Rn,Pi),bn(t,Q()),null}function ru(t,i){var o=yt;yt|=1;try{return t(i)}finally{yt=o,yt===0&&(_s=Q()+500,ha&&er())}}function Nr(t){sr!==null&&sr.tag===0&&(yt&6)===0&&xs();var i=yt;yt|=1;var o=Yn.transition,l=xt;try{if(Yn.transition=null,xt=1,t)return t()}finally{xt=l,Yn.transition=o,yt=i,(yt&6)===0&&er()}}function su(){Bn=vs.current,It(vs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,$g(o)),jt!==null)for(o=jt.return;o!==null;){var l=o;switch(pc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&da();break;case 3:ps(),It(Tn),It(dn),Cc();break;case 5:Tc(l);break;case 4:ps();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:yc(l.type._context);break;case 22:case 23:su()}o=o.return}if(nn=t,jt=t=lr(t.current,null),ln=Bn=i,Kt=0,yo=null,Qc=Ia=Pr=0,Rn=So=null,Cr!==null){for(i=0;i<Cr.length;i++)if(o=Cr[i],l=o.interleaved,l!==null){o.interleaved=null;var d=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=d,l.next=M}o.pending=l}Cr=null}return t}function sp(t,i){do{var o=jt;try{if(xc(),Ea.current=Ca,wa){for(var l=kt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}wa=!1}if(br=0,tn=$t=kt=null,po=!1,mo=0,Zc.current=null,o===null||o.return===null){Kt=1,yo=i,jt=null;break}e:{var h=t,M=o.return,L=o,B=i;if(i=ln,L.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,ve=L,Me=ve.tag;if((ve.mode&1)===0&&(Me===0||Me===11||Me===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Ph(M);if(Ie!==null){Ie.flags&=-257,Nh(Ie,M,L,h,i),Ie.mode&1&&bh(h,ie,i),i=Ie,B=ie;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(B),i.updateQueue=He}else Be.add(B);break e}else{if((i&1)===0){bh(h,ie,i),ou();break e}B=Error(n(426))}}else if(Ft&&L.mode&1){var Gt=Ph(M);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Nh(Gt,M,L,h,i),vc(ms(B,L));break e}}h=B=ms(B,L),Kt!==4&&(Kt=2),So===null?So=[h]:So.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Z=Ch(h,B,i);eh(h,Z);break e;case 1:L=B;var V=h.type,J=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(rr===null||!rr.has(J)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Rh(h,L,i);eh(h,Te);break e}}h=h.return}while(h!==null)}lp(o)}catch(je){i=je,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function op(){var t=La.current;return La.current=Ca,t===null?Ca:t}function ou(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||(Pr&268435455)===0&&(Ia&268435455)===0||ar(nn,ln)}function za(t,i){var o=yt;yt|=2;var l=op();(nn!==t||ln!==i)&&(Pi=null,Dr(t,i));do try{y0();break}catch(d){sp(t,d)}while(!0);if(xc(),yt=o,La.current=l,jt!==null)throw Error(n(261));return nn=null,ln=0,Kt}function y0(){for(;jt!==null;)ap(jt)}function S0(){for(;jt!==null&&!X();)ap(jt)}function ap(t){var i=dp(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?lp(t):jt=i,Zc.current=null}function lp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=h0(o,i,Bn),o!==null){jt=o;return}}else{if(o=p0(o,i),o!==null){o.flags&=32767,jt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Lr(t,i,o){var l=xt,d=Yn.transition;try{Yn.transition=null,xt=1,M0(t,i,o,l)}finally{Yn.transition=d,xt=l}return null}function M0(t,i,o,l){do xs();while(sr!==null);if((yt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(on(t,h),t===nn&&(jt=nn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Fa||(Fa=!0,fp(Le,function(){return xs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Yn.transition,Yn.transition=null;var M=xt;xt=1;var L=yt;yt|=4,Zc.current=null,g0(t,o),Qh(o,t),Vg(oc),Zo=!!sc,oc=sc=null,t.current=o,v0(o),re(),yt=L,xt=M,Yn.transition=h}else t.current=o;if(Fa&&(Fa=!1,sr=t,Oa=d),h=t.pendingLanes,h===0&&(rr=null),mt(o.stateNode),bn(t,Q()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],l(d.value,{componentStack:d.stack,digest:d.digest});if(Ua)throw Ua=!1,t=eu,eu=null,t;return(Oa&1)!==0&&t.tag!==0&&xs(),h=t.pendingLanes,(h&1)!==0?t===tu?Mo++:(Mo=0,tu=t):Mo=0,er(),null}function xs(){if(sr!==null){var t=fi(Oa),i=Yn.transition,o=xt;try{if(Yn.transition=null,xt=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Oa=0,(yt&6)!==0)throw Error(n(331));var d=yt;for(yt|=4,Ue=t.current;Ue!==null;){var h=Ue,M=h.child;if((Ue.flags&16)!==0){var L=h.deletions;if(L!==null){for(var B=0;B<L.length;B++){var ie=L[B];for(Ue=ie;Ue!==null;){var ve=Ue;switch(ve.tag){case 0:case 11:case 15:xo(8,ve,h)}var Me=ve.child;if(Me!==null)Me.return=ve,Ue=Me;else for(;Ue!==null;){ve=Ue;var ge=ve.sibling,Ie=ve.return;if(Yh(ve),ve===ie){Ue=null;break}if(ge!==null){ge.return=Ie,Ue=ge;break}Ue=Ie}}}var Be=h.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Gt=He.sibling;He.sibling=null,He=Gt}while(He!==null)}}Ue=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Ue=M;else e:for(;Ue!==null;){if(h=Ue,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:xo(9,h,h.return)}var Z=h.sibling;if(Z!==null){Z.return=h.return,Ue=Z;break e}Ue=h.return}}var V=t.current;for(Ue=V;Ue!==null;){M=Ue;var J=M.child;if((M.subtreeFlags&2064)!==0&&J!==null)J.return=M,Ue=J;else e:for(M=V;Ue!==null;){if(L=Ue,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Da(9,L)}}catch(je){Ht(L,L.return,je)}if(L===M){Ue=null;break e}var Te=L.sibling;if(Te!==null){Te.return=L.return,Ue=Te;break e}Ue=L.return}}if(yt=d,er(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Je,t)}catch{}l=!0}return l}finally{xt=o,Yn.transition=i}}return!1}function cp(t,i,o){i=ms(o,i),i=Ch(t,i,1),t=nr(t,i,1),i=Sn(),t!==null&&(Jt(t,1,i),bn(t,i))}function Ht(t,i,o){if(t.tag===3)cp(t,t,o);else for(;i!==null;){if(i.tag===3){cp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=ms(o,t),t=Rh(i,t,1),i=nr(i,t,1),t=Sn(),i!==null&&(Jt(i,1,t),bn(i,t));break}}i=i.return}}function E0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Sn(),t.pingedLanes|=t.suspendedLanes&o,nn===t&&(ln&o)===o&&(Kt===4||Kt===3&&(ln&130023424)===ln&&500>Q()-Jc?Dr(t,0):Qc|=o),bn(t,i)}function up(t,i){i===0&&((t.mode&1)===0?i=1:(i=zt,zt<<=1,(zt&130023424)===0&&(zt=4194304)));var o=Sn();t=Ci(t,i),t!==null&&(Jt(t,i,o),bn(t,o))}function w0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),up(t,o)}function T0(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),up(t,o)}var dp;dp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)Cn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Cn=!1,f0(t,i,o);Cn=(t.flags&131072)!==0}else Cn=!1,Ft&&(i.flags&1048576)!==0&&Wf(i,ma,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Pa(t,i),t=i.pendingProps;var d=as(i,dn.current);hs(i,o),d=Pc(null,i,l,t,d,o);var h=Nc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(l)?(h=!0,fa(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ec(i),d.updater=Ra,i.stateNode=d,d._reactInternals=i,Oc(i,l,t,o),i=Hc(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&hc(i),yn(null,i,d,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Pa(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=C0(l),t=ei(l,t),d){case 0:i=zc(null,i,l,t,o);break e;case 1:i=Oh(null,i,l,t,o);break e;case 11:i=Dh(null,i,l,t,o);break e;case 14:i=Lh(null,i,l,ei(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),zc(t,i,l,d,o);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),Oh(t,i,l,d,o);case 3:e:{if(kh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,d=h.element,Jf(t,i),Sa(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=ms(Error(n(423)),i),i=Bh(t,i,l,o,d);break e}else if(l!==d){d=ms(Error(n(424)),i),i=Bh(t,i,l,o,d);break e}else for(kn=Zi(i.stateNode.containerInfo.firstChild),On=i,Ft=!0,Jn=null,o=Zf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(us(),l===d){i=bi(t,i,o);break e}yn(t,i,l,o)}i=i.child}return i;case 5:return nh(i),t===null&&gc(i),l=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,M=d.children,ac(l,d)?M=null:h!==null&&ac(l,h)&&(i.flags|=32),Fh(t,i),yn(t,i,M,o),i.child;case 6:return t===null&&gc(i),null;case 13:return zh(t,i,o);case 4:return wc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ds(i,null,l,o):yn(t,i,l,o),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),Dh(t,i,l,d,o);case 7:return yn(t,i,i.pendingProps,o),i.child;case 8:return yn(t,i,i.pendingProps.children,o),i.child;case 12:return yn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,h=i.memoizedProps,M=d.value,Nt(_a,l._currentValue),l._currentValue=M,h!==null)if(Qn(h.value,M)){if(h.children===d.children&&!Tn.current){i=bi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var B=L.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=Ri(-1,o&-o),B.tag=2;var ie=h.updateQueue;if(ie!==null){ie=ie.shared;var ve=ie.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),ie.pending=B}}h.lanes|=o,B=h.alternate,B!==null&&(B.lanes|=o),Sc(h.return,o,i),L.lanes|=o;break}B=B.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),Sc(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}yn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,hs(i,o),d=jn(d),l=l(d),i.flags|=1,yn(t,i,l,o),i.child;case 14:return l=i.type,d=ei(l,i.pendingProps),d=ei(l.type,d),Lh(t,i,l,d,o);case 15:return Ih(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),Pa(t,i),i.tag=1,An(l)?(t=!0,fa(i)):t=!1,hs(i,o),Th(i,l,d),Oc(i,l,d,o),Hc(null,i,l,!0,t,o);case 19:return Vh(t,i,o);case 22:return Uh(t,i,o)}throw Error(n(156,i.tag))};function fp(t,i){return qo(t,i)}function A0(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,o,l){return new A0(t,i,o,l)}function au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function C0(t){if(typeof t=="function")return au(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===he)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=qn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ha(t,i,o,l,d,h){var M=2;if(l=t,typeof t=="function")au(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case k:return Ir(o.children,d,h,i);case q:M=8,d|=8;break;case b:return t=qn(12,o,i,d|2),t.elementType=b,t.lanes=h,t;case te:return t=qn(13,o,i,d),t.elementType=te,t.lanes=h,t;case fe:return t=qn(19,o,i,d),t.elementType=fe,t.lanes=h,t;case ce:return Va(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case H:M=9;break e;case oe:M=11;break e;case he:M=14;break e;case ae:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(M,o,i,d),i.elementType=t,i.type=l,i.lanes=h,i}function Ir(t,i,o,l){return t=qn(7,t,l,i),t.lanes=o,t}function Va(t,i,o,l){return t=qn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function lu(t,i,o){return t=qn(6,t,null,i),t.lanes=o,t}function cu(t,i,o){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function R0(t,i,o,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function uu(t,i,o,l,d,h,M,L,B){return t=new R0(t,i,o,L,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=qn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(h),t}function b0(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function hp(t){if(!t)return Ji;t=t._reactInternals;e:{if(di(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(An(o))return Hf(t,o,i)}return i}function pp(t,i,o,l,d,h,M,L,B){return t=uu(o,l,!0,t,d,h,M,L,B),t.context=hp(null),o=t.current,l=Sn(),d=or(o),h=Ri(l,d),h.callback=i??null,nr(o,h,d),t.current.lanes=d,Jt(t,d,l),bn(t,l),t}function Ga(t,i,o,l){var d=i.current,h=Sn(),M=or(d);return o=hp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ri(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(d,i,M),t!==null&&(ii(t,d,M,h),ya(t,d,M)),M}function Wa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function du(t,i){mp(t,i),(t=t.alternate)&&mp(t,i)}function P0(){return null}var gp=typeof reportError=="function"?reportError:function(t){console.error(t)};function fu(t){this._internalRoot=t}ja.prototype.render=fu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ga(t,i,null,null)},ja.prototype.unmount=fu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Nr(function(){Ga(null,t,null,null)}),i[Ei]=null}};function ja(t){this._internalRoot=t}ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=Qd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<qi.length&&i!==0&&i<qi[o].priority;o++);qi.splice(o,0,t),o===0&&tf(t)}};function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function N0(t,i,o,l,d){if(d){if(typeof l=="function"){var h=l;l=function(){var ie=Wa(M);h.call(ie)}}var M=pp(i,l,t,0,null,!1,!1,"",vp);return t._reactRootContainer=M,t[Ei]=M.current,so(t.nodeType===8?t.parentNode:t),Nr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var L=l;l=function(){var ie=Wa(B);L.call(ie)}}var B=uu(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=B,t[Ei]=B.current,so(t.nodeType===8?t.parentNode:t),Nr(function(){Ga(i,B,o,l)}),B}function Ya(t,i,o,l,d){var h=o._reactRootContainer;if(h){var M=h;if(typeof d=="function"){var L=d;d=function(){var B=Wa(M);L.call(B)}}Ga(i,M,t,d)}else M=N0(o,i,t,d,l);return Wa(M)}Kd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=pt(i.pendingLanes);o!==0&&(en(i,o|1),bn(i,Q()),(yt&6)===0&&(_s=Q()+500,er()))}break;case 13:Nr(function(){var l=Ci(t,1);if(l!==null){var d=Sn();ii(l,t,1,d)}}),du(t,1)}},kl=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var o=Sn();ii(i,t,134217728,o)}du(t,134217728)}},Zd=function(t){if(t.tag===13){var i=or(t),o=Ci(t,i);if(o!==null){var l=Sn();ii(o,t,i,l)}du(t,i)}},Qd=function(){return xt},Jd=function(t,i){var o=xt;try{return xt=t,i()}finally{xt=o}},Re=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var d=ua(l);if(!d)throw Error(n(90));Pt(l),ut(l,d)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&P(t,!!o.multiple,i,!1)}},Dt=ru,qt=Nr;var D0={usingClientEntryPoint:!1,Events:[lo,ss,ua,Ne,st,ru]},Eo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L0={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xo(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||P0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Je=qa.inject(L0),ze=qa}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0,Pn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hu(i))throw Error(n(200));return b0(t,i,null,o)},Pn.createRoot=function(t,i){if(!hu(t))throw Error(n(299));var o=!1,l="",d=gp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=uu(t,1,!1,null,null,o,!1,l,d),t[Ei]=i.current,so(t.nodeType===8?t.parentNode:t),new fu(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Xo(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return Nr(t)},Pn.hydrate=function(t,i,o){if(!Xa(i))throw Error(n(200));return Ya(null,t,i,!0,o)},Pn.hydrateRoot=function(t,i,o){if(!hu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,d=!1,h="",M=gp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=pp(i,null,t,1,o??null,d,!1,h,M),t[Ei]=i.current,so(t),l)for(t=0;t<l.length;t++)o=l[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ja(i)},Pn.render=function(t,i,o){if(!Xa(i))throw Error(n(200));return Ya(null,t,i,!1,o)},Pn.unmountComponentAtNode=function(t){if(!Xa(t))throw Error(n(40));return t._reactRootContainer?(Nr(function(){Ya(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},Pn.unstable_batchedUpdates=ru,Pn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Xa(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ya(t,i,o,!1,l)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var Tp;function V0(){if(Tp)return gu.exports;Tp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),gu.exports=H0(),gu.exports}var Ap;function G0(){if(Ap)return $a;Ap=1;var s=V0();return $a.createRoot=s.createRoot,$a.hydrateRoot=s.hydrateRoot,$a}var W0=G0();const j0=Am(W0),X0=()=>{const[s,e]=Yt.useState(!1),[n,r]=Yt.useState(!1);Yt.useEffect(()=>{const c=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const a=c=>{const u=document.getElementById(c);u&&(u.scrollIntoView({behavior:"smooth"}),r(!1))};return N.jsxs("nav",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${s?"bg-black/90 py-2":"bg-black/50 py-4"}`,children:[N.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex justify-between items-center",children:[N.jsxs("div",{className:"flex items-center",children:[N.jsx("div",{className:"w-10 h-10 border-2 border-white flex items-center justify-center mr-3",children:N.jsx("div",{className:"w-5 h-5 border border-white"})}),N.jsx("span",{className:"text-white text-xl font-bold font-space",children:"AI Agent Framework"})]}),N.jsx("div",{className:"hidden md:flex space-x-6",children:[{name:"Home",id:"hero"},{name:"Framework",id:"framework"},{name:"Industries",id:"industries"},{name:"Monetization",id:"monetization"},{name:"Go-to-Market",id:"go-to-market"},{name:"Implementation",id:"implementation"}].map(c=>N.jsx("a",{onClick:()=>a(c.id),className:"text-white hover:text-white/80 cursor-pointer transition-colors",children:c.name},c.name))}),N.jsx("button",{className:"md:hidden text-white",onClick:()=>r(!n),children:n?N.jsx("span",{className:"text-2xl",children:"×"}):N.jsxs("div",{className:"space-y-1",children:[N.jsx("div",{className:"w-6 h-px bg-white"}),N.jsx("div",{className:"w-6 h-px bg-white"}),N.jsx("div",{className:"w-6 h-px bg-white"})]})})]}),n&&N.jsx("div",{className:"md:hidden bg-black/95 border-t border-white/10 py-4",children:N.jsx("div",{className:"max-w-7xl mx-auto px-4 flex flex-col space-y-4",children:[{name:"Home",id:"hero"},{name:"Framework",id:"framework"},{name:"Industries",id:"industries"},{name:"Monetization",id:"monetization"},{name:"Go-to-Market",id:"go-to-market"},{name:"Implementation",id:"implementation"}].map(c=>N.jsx("a",{onClick:()=>a(c.id),className:"text-white hover:text-white/80 cursor-pointer transition-colors",children:c.name},c.name))})})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="176",Y0=0,Cp=1,q0=2,Cm=1,$0=2,Fi=3,xr=0,Ln=1,_i=2,vr=0,Us=1,Rp=2,bp=3,Pp=4,K0=5,Gr=100,Z0=101,Q0=102,J0=103,ev=104,tv=200,nv=201,iv=202,rv=203,Ku=204,Zu=205,sv=206,ov=207,av=208,lv=209,cv=210,uv=211,dv=212,fv=213,hv=214,Qu=0,Ju=1,ed=2,Os=3,td=4,nd=5,id=6,rd=7,Rm=0,pv=1,mv=2,_r=0,gv=1,vv=2,_v=3,xv=4,yv=5,Sv=6,Mv=7,bm=300,ks=301,Bs=302,sd=303,od=304,Il=306,ad=1e3,Xr=1001,ld=1002,ci=1003,Ev=1004,Ka=1005,xi=1006,xu=1007,Yr=1008,zi=1009,Pm=1010,Nm=1011,Lo=1012,zd=1013,qr=1014,Oi=1015,Oo=1016,Hd=1017,Vd=1018,Io=1020,Dm=35902,Lm=1021,Im=1022,li=1023,Uo=1026,Fo=1027,Um=1028,Gd=1029,Fm=1030,Wd=1031,jd=1033,Ml=33776,El=33777,wl=33778,Tl=33779,cd=35840,ud=35841,dd=35842,fd=35843,hd=36196,pd=37492,md=37496,gd=37808,vd=37809,_d=37810,xd=37811,yd=37812,Sd=37813,Md=37814,Ed=37815,wd=37816,Td=37817,Ad=37818,Cd=37819,Rd=37820,bd=37821,Al=36492,Pd=36494,Nd=36495,Om=36283,Dd=36284,Ld=36285,Id=36286,wv=3200,Tv=3201,Av=0,Cv=1,gr="",Kn="srgb",zs="srgb-linear",bl="linear",At="srgb",ys=7680,Np=519,Rv=512,bv=513,Pv=514,km=515,Nv=516,Dv=517,Lv=518,Iv=519,Dp=35044,Lp="300 es",ki=2e3,Pl=2001;class Vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=Math.PI/180,Ud=180/Math.PI;function ko(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function gt(s,e,n){return Math.max(e,Math.min(n,s))}function Uv(s,e){return(s%e+e)%e}function Su(s,e,n){return(1-n)*s+n*e}function To(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*a+e.x,this.y=c*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,a,c,u,f,p,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,f,p,m)}set(e,n,r,a,c,u,f,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],f=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],w=r[8],T=a[0],y=a[3],g=a[6],U=a[1],I=a[4],R=a[7],j=a[2],F=a[5],k=a[8];return c[0]=u*T+f*U+p*j,c[3]=u*y+f*I+p*F,c[6]=u*g+f*R+p*k,c[1]=m*T+_*U+v*j,c[4]=m*y+_*I+v*F,c[7]=m*g+_*R+v*k,c[2]=x*T+S*U+w*j,c[5]=x*y+S*I+w*F,c[8]=x*g+S*R+w*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8];return n*u*_-n*f*m-r*c*_+r*f*p+a*c*m-a*u*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8],v=_*u-f*m,x=f*p-_*c,S=m*c-u*p,w=n*v+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=v*T,e[1]=(a*m-_*r)*T,e[2]=(f*r-a*u)*T,e[3]=x*T,e[4]=(_*n-a*p)*T,e[5]=(a*c-f*n)*T,e[6]=S*T,e[7]=(r*p-m*n)*T,e[8]=(u*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,u,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*f)+u+e,-a*m,a*p,-a*(-m*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Mu.makeScale(e,n)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mu=new at;function Bm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Nl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fv(){const s=Nl("canvas");return s.style.display="block",s}const Ip={};function Cl(s){s in Ip||(Ip[s]=!0,console.warn(s))}function Ov(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function kv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Up=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fp=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zv(){const s={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(a,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===At&&(a.r=Bi(a.r),a.g=Bi(a.g),a.b=Bi(a.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[c].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===At&&(a.r=Fs(a.r),a.g=Fs(a.g),a.b=Fs(a.b))),a},fromWorkingColorSpace:function(a,c){return this.convert(a,this.workingColorSpace,c)},toWorkingColorSpace:function(a,c){return this.convert(a,c,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===gr?bl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,c=this.workingColorSpace){return a.fromArray(this.spaces[c].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,c,u){return a.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[zs]:{primaries:e,whitePoint:r,transfer:bl,toXYZ:Up,fromXYZ:Fp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:At,toXYZ:Up,fromXYZ:Fp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const Mt=zv();function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ss;class Hv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ss===void 0&&(Ss=Nl("canvas")),Ss.width=e.width,Ss.height=e.height;const a=Ss.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ss}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=Bi(c[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Bi(n[r]/255)*255):n[r]=Bi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vv=0;class Xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?c.push(Eu(a[u].image)):c.push(Eu(a[u]))}else c=Eu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Eu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gv=0;class In extends Vs{constructor(e=In.DEFAULT_IMAGE,n=In.DEFAULT_MAPPING,r=Xr,a=Xr,c=xi,u=Yr,f=li,p=zi,m=In.DEFAULT_ANISOTROPY,_=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=ko(),this.name="",this.source=new Xd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ad:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ad:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=bm;In.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],S=p[5],w=p[9],T=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-T)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+T)<.1&&Math.abs(w+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(m+1)/2,R=(S+1)/2,j=(g+1)/2,F=(_+x)/4,k=(v+T)/4,q=(w+y)/4;return I>R&&I>j?I<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(I),a=F/r,c=k/r):R>j?R<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(R),r=F/a,c=q/a):j<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(j),r=k/c,a=q/c),this.set(r,a,c,n),this}let U=Math.sqrt((y-w)*(y-w)+(v-T)*(v-T)+(x-_)*(x-_));return Math.abs(U)<.001&&(U=1),this.x=(y-w)/U,this.y=(v-T)/U,this.z=(x-_)/U,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wv extends Vs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth?r.depth:1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new In(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Xd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends Wv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class zm extends In{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jv extends In{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,u,f){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=c[u+0],S=c[u+1],w=c[u+2],T=c[u+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=T;return}if(v!==T||p!==x||m!==S||_!==w){let y=1-f;const g=p*x+m*S+_*w+v*T,U=g>=0?1:-1,I=1-g*g;if(I>Number.EPSILON){const j=Math.sqrt(I),F=Math.atan2(j,g*U);y=Math.sin(y*F)/j,f=Math.sin(f*F)/j}const R=f*U;if(p=p*y+x*R,m=m*y+S*R,_=_*y+w*R,v=v*y+T*R,y===1-f){const j=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=j,m*=j,_*=j,v*=j}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,c,u){const f=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=c[u],x=c[u+1],S=c[u+2],w=c[u+3];return e[n]=f*w+_*v+p*S-m*x,e[n+1]=p*w+_*x+m*v-f*S,e[n+2]=m*w+_*S+f*x-p*v,e[n+3]=_*w-f*v-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,u=e._order,f=Math.cos,p=Math.sin,m=f(r/2),_=f(a/2),v=f(c/2),x=p(r/2),S=p(a/2),w=p(c/2);switch(u){case"XYZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"YXZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"ZXY":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"ZYX":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"YZX":this._x=x*_*v+m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v-x*S*w;break;case"XZY":this._x=x*_*v-m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],u=n[1],f=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(u-a)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(_-p)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(c+m)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(c-m)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(u-a)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,u=e._w,f=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+u*f+a*m-c*p,this._y=a*_+u*p+c*f-r*m,this._z=c*_+u*m+r*p-a*f,this._w=u*_-r*f-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=a,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,f),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=u*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,u=e.y,f=e.z,p=e.w,m=2*(u*a-f*r),_=2*(f*n-c*a),v=2*(c*r-u*n);return this.x=n+p*m+u*v-f*_,this.y=r+p*_+f*m-c*v,this.z=a+p*v+c*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,u=n.x,f=n.y,p=n.z;return this.x=a*p-c*f,this.y=c*u-r*p,this.z=r*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new ne,Op=new Bo;class zo{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ri):ri.fromBufferAttribute(c,u),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Za.copy(r.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Qa.subVectors(this.max,Ao),Ms.subVectors(e.a,Ao),Es.subVectors(e.b,Ao),ws.subVectors(e.c,Ao),ur.subVectors(Es,Ms),dr.subVectors(ws,Es),Ur.subVectors(Ms,ws);let n=[0,-ur.z,ur.y,0,-dr.z,dr.y,0,-Ur.z,Ur.y,ur.z,0,-ur.x,dr.z,0,-dr.x,Ur.z,0,-Ur.x,-ur.y,ur.x,0,-dr.y,dr.x,0,-Ur.y,Ur.x,0];return!Tu(n,Ms,Es,ws,Qa)||(n=[1,0,0,0,1,0,0,0,1],!Tu(n,Ms,Es,ws,Qa))?!1:(Ja.crossVectors(ur,dr),n=[Ja.x,Ja.y,Ja.z],Tu(n,Ms,Es,ws,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ri=new ne,Za=new zo,Ms=new ne,Es=new ne,ws=new ne,ur=new ne,dr=new ne,Ur=new ne,Ao=new ne,Qa=new ne,Ja=new ne,Fr=new ne;function Tu(s,e,n,r,a){for(let c=0,u=s.length-3;c<=u;c+=3){Fr.fromArray(s,c);const f=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),p=e.dot(Fr),m=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>f)return!1}return!0}const Xv=new zo,Co=new ne,Au=new ne;class Ho{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Xv.setFromPoints(e).getCenter(r);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const n=Co.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Co,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Au)),this.expandByPoint(Co.copy(e.center).sub(Au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new ne,Cu=new ne,el=new ne,fr=new ne,Ru=new ne,tl=new ne,bu=new ne;class Yd{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Cu.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Cu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(el),f=fr.dot(this.direction),p=-fr.dot(el),m=fr.lengthSq(),_=Math.abs(1-u*u);let v,x,S,w;if(_>0)if(v=u*p-f,x=u*f-p,w=c*_,v>=0)if(x>=-w)if(x<=w){const T=1/_;v*=T,x*=T,S=v*(v+u*x+2*f)+x*(u*v+x+2*p)+m}else x=c,v=Math.max(0,-(u*x+f)),S=-v*v+x*(x+2*p)+m;else x=-c,v=Math.max(0,-(u*x+f)),S=-v*v+x*(x+2*p)+m;else x<=-w?(v=Math.max(0,-(-u*c+f)),x=v>0?-c:Math.min(Math.max(-c,-p),c),S=-v*v+x*(x+2*p)+m):x<=w?(v=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(v=Math.max(0,-(u*c+f)),x=v>0?c:Math.min(Math.max(-c,-p),c),S=-v*v+x*(x+2*p)+m);else x=u>0?-c:c,v=Math.max(0,-(u*x+f)),S=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Cu).addScaledVector(el,x),S}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,u,f,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(c=(e.min.y-x.y)*_,u=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,u=(e.min.y-x.y)*_),r>u||c>a||((c>r||isNaN(r))&&(r=c),(u<a||isNaN(a))&&(a=u),v>=0?(f=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,r,a,c){Ru.subVectors(n,e),tl.subVectors(r,e),bu.crossVectors(Ru,tl);let u=this.direction.dot(bu),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;fr.subVectors(this.origin,e);const p=f*this.direction.dot(tl.crossVectors(fr,tl));if(p<0)return null;const m=f*this.direction.dot(Ru.cross(fr));if(m<0||p+m>u)return null;const _=-f*fr.dot(bu);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,r,a,c,u,f,p,m,_,v,x,S,w,T,y){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,f,p,m,_,v,x,S,w,T,y)}set(e,n,r,a,c,u,f,p,m,_,v,x,S,w,T,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=c,g[5]=u,g[9]=f,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=w,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),u=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=u*_,S=u*v,w=f*_,T=f*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=S+w*m,n[5]=x-T*m,n[9]=-f*p,n[2]=T-x*m,n[6]=w+S*m,n[10]=u*p}else if(e.order==="YXZ"){const x=p*_,S=p*v,w=m*_,T=m*v;n[0]=x+T*f,n[4]=w*f-S,n[8]=u*m,n[1]=u*v,n[5]=u*_,n[9]=-f,n[2]=S*f-w,n[6]=T+x*f,n[10]=u*p}else if(e.order==="ZXY"){const x=p*_,S=p*v,w=m*_,T=m*v;n[0]=x-T*f,n[4]=-u*v,n[8]=w+S*f,n[1]=S+w*f,n[5]=u*_,n[9]=T-x*f,n[2]=-u*m,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const x=u*_,S=u*v,w=f*_,T=f*v;n[0]=p*_,n[4]=w*m-S,n[8]=x*m+T,n[1]=p*v,n[5]=T*m+x,n[9]=S*m-w,n[2]=-m,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const x=u*p,S=u*m,w=f*p,T=f*m;n[0]=p*_,n[4]=T-x*v,n[8]=w*v+S,n[1]=v,n[5]=u*_,n[9]=-f*_,n[2]=-m*_,n[6]=S*v+w,n[10]=x-T*v}else if(e.order==="XZY"){const x=u*p,S=u*m,w=f*p,T=f*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+T,n[5]=u*_,n[9]=S*v-w,n[2]=w*v-S,n[6]=f*_,n[10]=T*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yv,e,qv)}lookAt(e,n,r){const a=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),hr.crossVectors(r,zn),hr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),hr.crossVectors(r,zn)),hr.normalize(),nl.crossVectors(zn,hr),a[0]=hr.x,a[4]=nl.x,a[8]=zn.x,a[1]=hr.y,a[5]=nl.y,a[9]=zn.y,a[2]=hr.z,a[6]=nl.z,a[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],f=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],w=r[2],T=r[6],y=r[10],g=r[14],U=r[3],I=r[7],R=r[11],j=r[15],F=a[0],k=a[4],q=a[8],b=a[12],C=a[1],H=a[5],oe=a[9],te=a[13],fe=a[2],he=a[6],ae=a[10],ce=a[14],O=a[3],le=a[7],G=a[11],D=a[15];return c[0]=u*F+f*C+p*fe+m*O,c[4]=u*k+f*H+p*he+m*le,c[8]=u*q+f*oe+p*ae+m*G,c[12]=u*b+f*te+p*ce+m*D,c[1]=_*F+v*C+x*fe+S*O,c[5]=_*k+v*H+x*he+S*le,c[9]=_*q+v*oe+x*ae+S*G,c[13]=_*b+v*te+x*ce+S*D,c[2]=w*F+T*C+y*fe+g*O,c[6]=w*k+T*H+y*he+g*le,c[10]=w*q+T*oe+y*ae+g*G,c[14]=w*b+T*te+y*ce+g*D,c[3]=U*F+I*C+R*fe+j*O,c[7]=U*k+I*H+R*he+j*le,c[11]=U*q+I*oe+R*ae+j*G,c[15]=U*b+I*te+R*ce+j*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],u=e[1],f=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],w=e[3],T=e[7],y=e[11],g=e[15];return w*(+c*p*v-a*m*v-c*f*x+r*m*x+a*f*S-r*p*S)+T*(+n*p*S-n*m*x+c*u*x-a*u*S+a*m*_-c*p*_)+y*(+n*m*v-n*f*S-c*u*v+r*u*S+c*f*_-r*m*_)+g*(-a*f*_-n*p*v+n*f*x+a*u*v-r*u*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],w=e[12],T=e[13],y=e[14],g=e[15],U=v*y*m-T*x*m+T*p*S-f*y*S-v*p*g+f*x*g,I=w*x*m-_*y*m-w*p*S+u*y*S+_*p*g-u*x*g,R=_*T*m-w*v*m+w*f*S-u*T*S-_*f*g+u*v*g,j=w*v*p-_*T*p-w*f*x+u*T*x+_*f*y-u*v*y,F=n*U+r*I+a*R+c*j;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=U*k,e[1]=(T*x*c-v*y*c-T*a*S+r*y*S+v*a*g-r*x*g)*k,e[2]=(f*y*c-T*p*c+T*a*m-r*y*m-f*a*g+r*p*g)*k,e[3]=(v*p*c-f*x*c-v*a*m+r*x*m+f*a*S-r*p*S)*k,e[4]=I*k,e[5]=(_*y*c-w*x*c+w*a*S-n*y*S-_*a*g+n*x*g)*k,e[6]=(w*p*c-u*y*c-w*a*m+n*y*m+u*a*g-n*p*g)*k,e[7]=(u*x*c-_*p*c+_*a*m-n*x*m-u*a*S+n*p*S)*k,e[8]=R*k,e[9]=(w*v*c-_*T*c-w*r*S+n*T*S+_*r*g-n*v*g)*k,e[10]=(u*T*c-w*f*c+w*r*m-n*T*m-u*r*g+n*f*g)*k,e[11]=(_*f*c-u*v*c-_*r*m+n*v*m+u*r*S-n*f*S)*k,e[12]=j*k,e[13]=(_*T*a-w*v*a+w*r*x-n*T*x-_*r*y+n*v*y)*k,e[14]=(w*f*a-u*T*a-w*r*p+n*T*p+u*r*y-n*f*y)*k,e[15]=(u*v*a-_*f*a+_*r*p-n*v*p-u*r*x+n*f*x)*k,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,u=e.x,f=e.y,p=e.z,m=c*u,_=c*f;return this.set(m*u+r,m*f-a*p,m*p+a*f,0,m*f+a*p,_*f+r,_*p-a*u,0,m*p-a*f,_*p+a*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,u){return this.set(1,r,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,m=c+c,_=u+u,v=f+f,x=c*m,S=c*_,w=c*v,T=u*_,y=u*v,g=f*v,U=p*m,I=p*_,R=p*v,j=r.x,F=r.y,k=r.z;return a[0]=(1-(T+g))*j,a[1]=(S+R)*j,a[2]=(w-I)*j,a[3]=0,a[4]=(S-R)*F,a[5]=(1-(x+g))*F,a[6]=(y+U)*F,a[7]=0,a[8]=(w+I)*k,a[9]=(y-U)*k,a[10]=(1-(x+T))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Ts.set(a[0],a[1],a[2]).length();const u=Ts.set(a[4],a[5],a[6]).length(),f=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const m=1/c,_=1/u,v=1/f;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=_,si.elements[5]*=_,si.elements[6]*=_,si.elements[8]*=v,si.elements[9]*=v,si.elements[10]*=v,n.setFromRotationMatrix(si),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,a,c,u,f=ki){const p=this.elements,m=2*c/(n-e),_=2*c/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(f===ki)S=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(f===Pl)S=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,u,f=ki){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(u-c),x=(n+e)*m,S=(r+a)*_;let w,T;if(f===ki)w=(u+c)*v,T=-2*v;else if(f===Pl)w=c*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new ne,si=new Vt,Yv=new ne(0,0,0),qv=new ne(1,1,1),hr=new ne,nl=new ne,zn=new ne,kp=new Vt,Bp=new Bo;class Hi{constructor(e=0,n=0,r=0,a=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],u=a[4],f=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $v=0;const zp=new ne,As=new Bo,Li=new Vt,il=new ne,Ro=new ne,Kv=new ne,Zv=new Bo,Hp=new ne(1,0,0),Vp=new ne(0,1,0),Gp=new ne(0,0,1),Wp={type:"added"},Qv={type:"removed"},Cs={type:"childadded",child:null},Pu={type:"childremoved",child:null};class En extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new ne,n=new Hi,r=new Bo,a=new ne(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new at}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,n){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?il.copy(e):il.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ro,il,this.up):Li.lookAt(il,Ro,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),As.setFromRotationMatrix(Li),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Qv),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,Kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?{min:f.boundingBox.min.toArray(),max:f.boundingBox.max.toArray()}:void 0,boundingSphere:f.boundingSphere?{radius:f.boundingSphere.radius,center:f.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(c(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),m=u(e.textures),_=u(e.images),v=u(e.shapes),x=u(e.skeletons),S=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function u(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}En.DEFAULT_UP=new ne(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new ne,Ii=new ne,Nu=new ne,Ui=new ne,Rs=new ne,bs=new ne,jp=new ne,Du=new ne,Lu=new ne,Iu=new ne,Uu=new Wt,Fu=new Wt,Ou=new Wt;class ai{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),oi.subVectors(e,n),a.cross(oi);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){oi.subVectors(a,n),Ii.subVectors(r,n),Nu.subVectors(e,n);const u=oi.dot(oi),f=oi.dot(Ii),p=oi.dot(Nu),m=Ii.dot(Ii),_=Ii.dot(Nu),v=u*m-f*f;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(m*p-f*_)*x,w=(u*_-f*p)*x;return c.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,r,a,c,u,f,p){return this.getBarycoord(e,n,r,a,Ui)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ui.x),p.addScaledVector(u,Ui.y),p.addScaledVector(f,Ui.z),p)}static getInterpolatedAttribute(e,n,r,a,c,u){return Uu.setScalar(0),Fu.setScalar(0),Ou.setScalar(0),Uu.fromBufferAttribute(e,n),Fu.fromBufferAttribute(e,r),Ou.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Uu,c.x),u.addScaledVector(Fu,c.y),u.addScaledVector(Ou,c.z),u}static isFrontFacing(e,n,r,a){return oi.subVectors(r,n),Ii.subVectors(e,n),oi.cross(Ii).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),oi.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return ai.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let u,f;Rs.subVectors(a,r),bs.subVectors(c,r),Du.subVectors(e,r);const p=Rs.dot(Du),m=bs.dot(Du);if(p<=0&&m<=0)return n.copy(r);Lu.subVectors(e,a);const _=Rs.dot(Lu),v=bs.dot(Lu);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(r).addScaledVector(Rs,u);Iu.subVectors(e,c);const S=Rs.dot(Iu),w=bs.dot(Iu);if(w>=0&&S<=w)return n.copy(c);const T=S*m-p*w;if(T<=0&&m>=0&&w<=0)return f=m/(m-w),n.copy(r).addScaledVector(bs,f);const y=_*w-S*v;if(y<=0&&v-_>=0&&S-w>=0)return jp.subVectors(c,a),f=(v-_)/(v-_+(S-w)),n.copy(a).addScaledVector(jp,f);const g=1/(y+T+x);return u=T*g,f=x*g,n.copy(r).addScaledVector(Rs,u).addScaledVector(bs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},rl={h:0,s:0,l:0};function ku(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class wt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Uv(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=ku(u,c,e+1/3),this.g=ku(u,c,e),this.b=ku(u,c,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=Vm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Mt.fromWorkingColorSpace(gn.copy(this),e),Math.round(gt(gn.r*255,0,255))*65536+Math.round(gt(gn.g*255,0,255))*256+Math.round(gt(gn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(gn.copy(this),n);const r=gn.r,a=gn.g,c=gn.b,u=Math.max(r,a,c),f=Math.min(r,a,c);let p,m;const _=(f+u)/2;if(f===u)p=0,m=0;else{const v=u-f;switch(m=_<=.5?v/(u+f):v/(2-u-f),u){case r:p=(a-c)/v+(a<c?6:0);break;case a:p=(c-r)/v+2;break;case c:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Kn){Mt.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,a=gn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(rl);const r=Su(pr.h,rl.h,n),a=Su(pr.s,rl.s,n),c=Su(pr.l,rl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new wt;wt.NAMES=Vm;let Jv=0;class Gs extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Us,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Zu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ku&&(r.blendSrc=this.blendSrc),this.blendDst!==Zu&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Np&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wr extends Gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new ne,sl=new Ct;let e_=0;class ui{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Dp,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)sl.fromBufferAttribute(this,n),sl.applyMatrix3(e),this.setXY(n,sl.x,sl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=To(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array),c=Nn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}}class Gm extends ui{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Wm extends ui{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Un extends ui{constructor(e,n,r){super(new Float32Array(e),n,r)}}let t_=0;const $n=new Vt,Bu=new En,Ps=new ne,Hn=new zo,bo=new zo,sn=new ne;class Vn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bm(e)?Wm:Gm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new at().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Un(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const c=e[a];n.setXYZ(a,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];Hn.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];bo.setFromBufferAttribute(f),this.morphTargetsRelative?(sn.addVectors(Hn.min,bo.min),Hn.expandByPoint(sn),sn.addVectors(Hn.max,bo.max),Hn.expandByPoint(sn)):(Hn.expandByPoint(bo.min),Hn.expandByPoint(bo.max))}Hn.getCenter(r);let a=0;for(let c=0,u=e.count;c<u;c++)sn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)sn.fromBufferAttribute(f,m),p&&(Ps.fromBufferAttribute(e,m),sn.add(Ps)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let q=0;q<r.count;q++)f[q]=new ne,p[q]=new ne;const m=new ne,_=new ne,v=new ne,x=new Ct,S=new Ct,w=new Ct,T=new ne,y=new ne;function g(q,b,C){m.fromBufferAttribute(r,q),_.fromBufferAttribute(r,b),v.fromBufferAttribute(r,C),x.fromBufferAttribute(c,q),S.fromBufferAttribute(c,b),w.fromBufferAttribute(c,C),_.sub(m),v.sub(m),S.sub(x),w.sub(x);const H=1/(S.x*w.y-w.x*S.y);isFinite(H)&&(T.copy(_).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(H),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(H),f[q].add(T),f[b].add(T),f[C].add(T),p[q].add(y),p[b].add(y),p[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let q=0,b=U.length;q<b;++q){const C=U[q],H=C.start,oe=C.count;for(let te=H,fe=H+oe;te<fe;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const I=new ne,R=new ne,j=new ne,F=new ne;function k(q){j.fromBufferAttribute(a,q),F.copy(j);const b=f[q];I.copy(b),I.sub(j.multiplyScalar(j.dot(b))).normalize(),R.crossVectors(F,b);const H=R.dot(p[q])<0?-1:1;u.setXYZW(q,I.x,I.y,I.z,H)}for(let q=0,b=U.length;q<b;++q){const C=U[q],H=C.start,oe=C.count;for(let te=H,fe=H+oe;te<fe;te+=3)k(e.getX(te+0)),k(e.getX(te+1)),k(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new ne,c=new ne,u=new ne,f=new ne,p=new ne,m=new ne,_=new ne,v=new ne;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),_.subVectors(u,c),v.subVectors(a,c),_.cross(v),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),f.add(_),p.add(_),m.add(_),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),_.subVectors(u,c),v.subVectors(a,c),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(f,p){const m=f.array,_=f.itemSize,v=f.normalized,x=new m.constructor(p.length*_);let S=0,w=0;for(let T=0,y=p.length;T<y;T++){f.isInterleavedBufferAttribute?S=p[T]*f.data.stride+f.offset:S=p[T]*_;for(let g=0;g<_;g++)x[w++]=m[S++]}return new ui(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],v=c[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new Vt,Or=new Yd,ol=new Ho,Yp=new ne,al=new ne,ll=new ne,cl=new ne,zu=new ne,ul=new ne,qp=new ne,dl=new ne;class Dn extends En{constructor(e=new Vn,n=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){ul.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=f[p],v=c[p];_!==0&&(zu.fromBufferAttribute(v,e),u?ul.addScaledVector(zu,_):ul.addScaledVector(zu.sub(n),_))}n.add(ul)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ol.copy(r.boundingSphere),ol.applyMatrix4(c),Or.copy(e.ray).recast(e.near),!(ol.containsPoint(Or.origin)===!1&&(Or.intersectSphere(ol,Yp)===null||Or.origin.distanceToSquared(Yp)>(e.far-e.near)**2))&&(Xp.copy(c).invert(),Or.copy(e.ray).applyMatrix4(Xp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,T=x.length;w<T;w++){const y=x[w],g=u[y.materialIndex],U=Math.max(y.start,S.start),I=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let R=U,j=I;R<j;R+=3){const F=f.getX(R),k=f.getX(R+1),q=f.getX(R+2);a=fl(this,g,e,r,m,_,v,F,k,q),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=w,g=T;y<g;y+=3){const U=f.getX(y),I=f.getX(y+1),R=f.getX(y+2);a=fl(this,u,e,r,m,_,v,U,I,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let w=0,T=x.length;w<T;w++){const y=x[w],g=u[y.materialIndex],U=Math.max(y.start,S.start),I=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let R=U,j=I;R<j;R+=3){const F=R,k=R+1,q=R+2;a=fl(this,g,e,r,m,_,v,F,k,q),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let y=w,g=T;y<g;y+=3){const U=y,I=y+1,R=y+2;a=fl(this,u,e,r,m,_,v,U,I,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function n_(s,e,n,r,a,c,u,f){let p;if(e.side===Ln?p=r.intersectTriangle(u,c,a,!0,f):p=r.intersectTriangle(a,c,u,e.side===xr,f),p===null)return null;dl.copy(f),dl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(dl);return m<n.near||m>n.far?null:{distance:m,point:dl.clone(),object:s}}function fl(s,e,n,r,a,c,u,f,p,m){s.getVertexPosition(f,al),s.getVertexPosition(p,ll),s.getVertexPosition(m,cl);const _=n_(s,e,n,r,al,ll,cl,qp);if(_){const v=new ne;ai.getBarycoord(qp,al,ll,cl,v),a&&(_.uv=ai.getInterpolatedAttribute(a,f,p,m,v,new Ct)),c&&(_.uv1=ai.getInterpolatedAttribute(c,f,p,m,v,new Ct)),u&&(_.normal=ai.getInterpolatedAttribute(u,f,p,m,v,new ne),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new ne,materialIndex:0};ai.getNormal(al,ll,cl,x.normal),_.face=x,_.barycoord=v}return _}class Ws extends Vn{constructor(e=1,n=1,r=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:u};const f=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],_=[],v=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,u,c,0),w("z","y","x",1,-1,r,n,-e,u,c,1),w("x","z","y",1,1,e,r,n,a,u,2),w("x","z","y",1,-1,e,r,-n,a,u,3),w("x","y","z",1,-1,e,n,r,a,c,4),w("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new Un(m,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(v,2));function w(T,y,g,U,I,R,j,F,k,q,b){const C=R/k,H=j/q,oe=R/2,te=j/2,fe=F/2,he=k+1,ae=q+1;let ce=0,O=0;const le=new ne;for(let G=0;G<ae;G++){const D=G*H-te;for(let K=0;K<he;K++){const we=K*C-oe;le[T]=we*U,le[y]=D*I,le[g]=fe,m.push(le.x,le.y,le.z),le[T]=0,le[y]=0,le[g]=F>0?1:-1,_.push(le.x,le.y,le.z),v.push(K/k),v.push(1-G/q),ce+=1}}for(let G=0;G<q;G++)for(let D=0;D<k;D++){const K=x+D+he*G,we=x+D+he*(G+1),$=x+(D+1)+he*(G+1),ue=x+(D+1)+he*G;p.push(K,we,ue),p.push(we,$,ue),O+=6}f.addGroup(S,O,b),S+=O,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(s){const e={};for(let n=0;n<s.length;n++){const r=Hs(s[n]);for(const a in r)e[a]=r[a]}return e}function i_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function jm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const r_={clone:Hs,merge:Mn};var s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=o_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=i_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Xm extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new ne,$p=new Ct,Kp=new Ct;class Zn extends Xm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,$p,Kp),n.subVectors(Kp,$p)}setViewOffset(e,n,r,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/p,n-=u.offsetY*r/m,a*=u.width/p,r*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Ds=1;class a_ extends En{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Ns,Ds,e,n);a.layers=this.layers,this.add(a);const c=new Zn(Ns,Ds,e,n);c.layers=this.layers,this.add(c);const u=new Zn(Ns,Ds,e,n);u.layers=this.layers,this.add(u);const f=new Zn(Ns,Ds,e,n);f.layers=this.layers,this.add(f);const p=new Zn(Ns,Ds,e,n);p.layers=this.layers,this.add(p);const m=new Zn(Ns,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,u,f,p]=n;for(const m of n)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Ym extends In{constructor(e=[],n=ks,r,a,c,u,f,p,m,_){super(e,n,r,a,c,u,f,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l_ extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ym(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ws(5,5,5),c=new yr({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:vr});c.uniforms.tEquirect.value=n;const u=new Dn(a,c),f=n.minFilter;return n.minFilter===Yr&&(n.minFilter=xi),new a_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(c)}}class hl extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c_={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class u_ extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vu=new ne,d_=new ne,f_=new at;class Hr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Vu.subVectors(r,n).cross(d_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Vu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||f_.getNormalMatrix(e),a=this.coplanarPoint(Vu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Ho,pl=new ne;class qm{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,c=new Hr,u=new Hr){this.planes=[e,n,r,a,c,u]}set(e,n,r,a,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],w=a[9],T=a[10],y=a[11],g=a[12],U=a[13],I=a[14],R=a[15];if(r[0].setComponents(p-c,x-m,y-S,R-g).normalize(),r[1].setComponents(p+c,x+m,y+S,R+g).normalize(),r[2].setComponents(p+u,x+_,y+w,R+U).normalize(),r[3].setComponents(p-u,x-_,y-w,R-U).normalize(),r[4].setComponents(p-f,x-v,y-T,R-I).normalize(),n===ki)r[5].setComponents(p+f,x+v,y+T,R+I).normalize();else if(n===Pl)r[5].setComponents(f,v,T,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(pl.x=a.normal.x>0?e.max.x:e.min.x,pl.y=a.normal.y>0?e.max.y:e.min.y,pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $m extends Gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dl=new ne,Ll=new ne,Zp=new Vt,Po=new Yd,ml=new Ho,Gu=new ne,Qp=new ne;class h_ extends En{constructor(e=new Vn,n=new $m){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,c=n.count;a<c;a++)Dl.fromBufferAttribute(n,a-1),Ll.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Dl.distanceTo(Ll);e.setAttribute("lineDistance",new Un(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(a),ml.radius+=c,e.ray.intersectsSphere(ml)===!1)return;Zp.copy(a).invert(),Po.copy(e.ray).applyMatrix4(Zp);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),w=Math.min(_.count,u.start+u.count);for(let T=S,y=w-1;T<y;T+=m){const g=_.getX(T),U=_.getX(T+1),I=gl(this,e,Po,p,g,U,T);I&&n.push(I)}if(this.isLineLoop){const T=_.getX(w-1),y=_.getX(S),g=gl(this,e,Po,p,T,y,w-1);g&&n.push(g)}}else{const S=Math.max(0,u.start),w=Math.min(x.count,u.start+u.count);for(let T=S,y=w-1;T<y;T+=m){const g=gl(this,e,Po,p,T,T+1,T);g&&n.push(g)}if(this.isLineLoop){const T=gl(this,e,Po,p,w-1,S,w-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function gl(s,e,n,r,a,c,u){const f=s.geometry.attributes.position;if(Dl.fromBufferAttribute(f,a),Ll.fromBufferAttribute(f,c),n.distanceSqToSegment(Dl,Ll,Gu,Qp)>r)return;Gu.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Gu);if(!(m<e.near||m>e.far))return{distance:m,point:Qp.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}class Km extends Gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jp=new Vt,Fd=new Yd,vl=new Ho,_l=new ne;class p_ extends En{constructor(e=new Vn,n=new Km){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(a),vl.radius+=c,e.ray.intersectsSphere(vl)===!1)return;Jp.copy(a).invert(),Fd.copy(e.ray).applyMatrix4(Jp);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let w=x,T=S;w<T;w++){const y=m.getX(w);_l.fromBufferAttribute(v,y),em(_l,y,p,a,e,n,this)}}else{const x=Math.max(0,u.start),S=Math.min(v.count,u.start+u.count);for(let w=x,T=S;w<T;w++)_l.fromBufferAttribute(v,w),em(_l,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function em(s,e,n,r,a,c,u){const f=Fd.distanceSqToPoint(s);if(f<n){const p=new ne;Fd.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;c.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Zm extends In{constructor(e,n,r=qr,a,c,u,f=ci,p=ci,m,_=Uo){if(_!==Uo&&_!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,c,u,f,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ul extends Vn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,u=n/2,f=Math.floor(r),p=Math.floor(a),m=f+1,_=p+1,v=e/f,x=n/p,S=[],w=[],T=[],y=[];for(let g=0;g<_;g++){const U=g*x-u;for(let I=0;I<m;I++){const R=I*v-c;w.push(R,-U,0),T.push(0,0,1),y.push(I/f),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let U=0;U<f;U++){const I=U+m*g,R=U+m*(g+1),j=U+1+m*(g+1),F=U+1+m*g;S.push(I,R,F),S.push(R,j,F)}this.setIndex(S),this.setAttribute("position",new Un(w,3)),this.setAttribute("normal",new Un(T,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.widthSegments,e.heightSegments)}}class qd extends Vn{constructor(e=.5,n=1,r=32,a=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:a,thetaStart:c,thetaLength:u},r=Math.max(3,r),a=Math.max(1,a);const f=[],p=[],m=[],_=[];let v=e;const x=(n-e)/a,S=new ne,w=new Ct;for(let T=0;T<=a;T++){for(let y=0;y<=r;y++){const g=c+y/r*u;S.x=v*Math.cos(g),S.y=v*Math.sin(g),p.push(S.x,S.y,S.z),m.push(0,0,1),w.x=(S.x/n+1)/2,w.y=(S.y/n+1)/2,_.push(w.x,w.y)}v+=x}for(let T=0;T<a;T++){const y=T*(r+1);for(let g=0;g<r;g++){const U=g+y,I=U,R=U+r+1,j=U+r+2,F=U+1;f.push(I,R,F),f.push(R,j,F)}}this.setIndex(f),this.setAttribute("position",new Un(p,3)),this.setAttribute("normal",new Un(m,3)),this.setAttribute("uv",new Un(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Do extends Vn{constructor(e=1,n=32,r=16,a=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+f,Math.PI);let m=0;const _=[],v=new ne,x=new ne,S=[],w=[],T=[],y=[];for(let g=0;g<=r;g++){const U=[],I=g/r;let R=0;g===0&&u===0?R=.5/n:g===r&&p===Math.PI&&(R=-.5/n);for(let j=0;j<=n;j++){const F=j/n;v.x=-e*Math.cos(a+F*c)*Math.sin(u+I*f),v.y=e*Math.cos(u+I*f),v.z=e*Math.sin(a+F*c)*Math.sin(u+I*f),w.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(F+R,1-I),U.push(m++)}_.push(U)}for(let g=0;g<r;g++)for(let U=0;U<n;U++){const I=_[g][U+1],R=_[g][U],j=_[g+1][U],F=_[g+1][U+1];(g!==0||u>0)&&S.push(I,R,F),(g!==r-1||p<Math.PI)&&S.push(R,j,F)}this.setIndex(S),this.setAttribute("position",new Un(w,3)),this.setAttribute("normal",new Un(T,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class m_ extends Gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g_ extends Gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class v_ extends Xm{constructor(e=-1,n=1,r=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class __ extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function tm(s,e,n,r){const a=x_(r);switch(n){case Lm:return s*e;case Um:return s*e/a.components*a.byteLength;case Gd:return s*e/a.components*a.byteLength;case Fm:return s*e*2/a.components*a.byteLength;case Wd:return s*e*2/a.components*a.byteLength;case Im:return s*e*3/a.components*a.byteLength;case li:return s*e*4/a.components*a.byteLength;case jd:return s*e*4/a.components*a.byteLength;case Ml:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wl:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ud:case fd:return Math.max(s,16)*Math.max(e,8)/4;case cd:case dd:return Math.max(s,8)*Math.max(e,8)/2;case hd:case pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _d:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case xd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Al:case Pd:case Nd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Om:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ld:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function x_(s){switch(s){case zi:case Pm:return{byteLength:1,components:1};case Lo:case Nm:case Oo:return{byteLength:2,components:1};case Hd:case Vd:return{byteLength:2,components:4};case qr:case zd:case Oi:return{byteLength:4,components:1};case Dm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qm(){let s=null,e=!1,n=null,r=null;function a(c,u){n(c,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function y_(s){const e=new WeakMap;function n(f,p){const m=f.array,_=f.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<v.length;S++){const w=v[x],T=v[S];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++x,v[x]=T)}v.length=x+1;for(let S=0,w=v.length;S<w;S++){const T=v[S];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:a,remove:c,update:u}}var S_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,I_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,U_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,W_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,X_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Px=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ay=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,py=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,my=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ry=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,by=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ly=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,By=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:S_,alphahash_pars_fragment:M_,alphamap_fragment:E_,alphamap_pars_fragment:w_,alphatest_fragment:T_,alphatest_pars_fragment:A_,aomap_fragment:C_,aomap_pars_fragment:R_,batching_pars_vertex:b_,batching_vertex:P_,begin_vertex:N_,beginnormal_vertex:D_,bsdfs:L_,iridescence_fragment:I_,bumpmap_pars_fragment:U_,clipping_planes_fragment:F_,clipping_planes_pars_fragment:O_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:B_,color_fragment:z_,color_pars_fragment:H_,color_pars_vertex:V_,color_vertex:G_,common:W_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:X_,displacementmap_pars_vertex:Y_,displacementmap_vertex:q_,emissivemap_fragment:$_,emissivemap_pars_fragment:K_,colorspace_fragment:Z_,colorspace_pars_fragment:Q_,envmap_fragment:J_,envmap_common_pars_fragment:ex,envmap_pars_fragment:tx,envmap_pars_vertex:nx,envmap_physical_pars_fragment:hx,envmap_vertex:ix,fog_vertex:rx,fog_pars_vertex:sx,fog_fragment:ox,fog_pars_fragment:ax,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:dx,lights_pars_begin:fx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:vx,lights_physical_fragment:_x,lights_physical_pars_fragment:xx,lights_fragment_begin:yx,lights_fragment_maps:Sx,lights_fragment_end:Mx,logdepthbuf_fragment:Ex,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:Cx,map_pars_fragment:Rx,map_particle_fragment:bx,map_particle_pars_fragment:Px,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Lx,morphcolor_vertex:Ix,morphnormal_vertex:Ux,morphtarget_pars_vertex:Fx,morphtarget_vertex:Ox,normal_fragment_begin:kx,normal_fragment_maps:Bx,normal_pars_fragment:zx,normal_pars_vertex:Hx,normal_vertex:Vx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Wx,clearcoat_normal_fragment_maps:jx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:Yx,opaque_fragment:qx,packing:$x,premultiplied_alpha_fragment:Kx,project_vertex:Zx,dithering_fragment:Qx,dithering_pars_fragment:Jx,roughnessmap_fragment:ey,roughnessmap_pars_fragment:ty,shadowmap_pars_fragment:ny,shadowmap_pars_vertex:iy,shadowmap_vertex:ry,shadowmask_pars_fragment:sy,skinbase_vertex:oy,skinning_pars_vertex:ay,skinning_vertex:ly,skinnormal_vertex:cy,specularmap_fragment:uy,specularmap_pars_fragment:dy,tonemapping_fragment:fy,tonemapping_pars_fragment:hy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:vy,uv_vertex:_y,worldpos_vertex:xy,background_vert:yy,background_frag:Sy,backgroundCube_vert:My,backgroundCube_frag:Ey,cube_vert:wy,cube_frag:Ty,depth_vert:Ay,depth_frag:Cy,distanceRGBA_vert:Ry,distanceRGBA_frag:by,equirect_vert:Py,equirect_frag:Ny,linedashed_vert:Dy,linedashed_frag:Ly,meshbasic_vert:Iy,meshbasic_frag:Uy,meshlambert_vert:Fy,meshlambert_frag:Oy,meshmatcap_vert:ky,meshmatcap_frag:By,meshnormal_vert:zy,meshnormal_frag:Hy,meshphong_vert:Vy,meshphong_frag:Gy,meshphysical_vert:Wy,meshphysical_frag:jy,meshtoon_vert:Xy,meshtoon_frag:Yy,points_vert:qy,points_frag:$y,shadow_vert:Ky,shadow_frag:Zy,sprite_vert:Qy,sprite_frag:Jy},Pe={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},vi={basic:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new wt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new wt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Mn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Mn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Mn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Mn([Pe.lights,Pe.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};vi.physical={uniforms:Mn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const xl={r:0,b:0,g:0},Br=new Hi,eS=new Vt;function tS(s,e,n,r,a,c,u){const f=new wt(0);let p=c===!0?0:1,m,_,v=null,x=0,S=null;function w(I){let R=I.isScene===!0?I.background:null;return R&&R.isTexture&&(R=(I.backgroundBlurriness>0?n:e).get(R)),R}function T(I){let R=!1;const j=w(I);j===null?g(f,p):j&&j.isColor&&(g(j,1),R=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,R){const j=w(R);j&&(j.isCubeTexture||j.mapping===Il)?(_===void 0&&(_=new Dn(new Ws(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Hs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,k,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Br.copy(R.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.material.uniforms.envMap.value=j,_.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(eS.makeRotationFromEuler(Br)),_.material.toneMapped=Mt.getTransfer(j.colorSpace)!==At,(v!==j||x!==j.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=j,x=j.version,S=s.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null)):j&&j.isTexture&&(m===void 0&&(m=new Dn(new Ul(2,2),new yr({name:"BackgroundMaterial",uniforms:Hs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=j,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(j.colorSpace)!==At,j.matrixAutoUpdate===!0&&j.updateMatrix(),m.material.uniforms.uvTransform.value.copy(j.matrix),(v!==j||x!==j.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=j,x=j.version,S=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function g(I,R){I.getRGB(xl,jm(s)),r.buffers.color.setClear(xl.r,xl.g,xl.b,R,u)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,R=1){f.set(I),p=R,g(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,g(f,p)},render:T,addToRenderList:y,dispose:U}}function nS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,u=!1;function f(C,H,oe,te,fe){let he=!1;const ae=v(te,oe,H);c!==ae&&(c=ae,m(c.object)),he=S(C,te,oe,fe),he&&w(C,te,oe,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(C,H,oe,te),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function v(C,H,oe){const te=oe.wireframe===!0;let fe=r[C.id];fe===void 0&&(fe={},r[C.id]=fe);let he=fe[H.id];he===void 0&&(he={},fe[H.id]=he);let ae=he[te];return ae===void 0&&(ae=x(p()),he[te]=ae),ae}function x(C){const H=[],oe=[],te=[];for(let fe=0;fe<n;fe++)H[fe]=0,oe[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:oe,attributeDivisors:te,object:C,attributes:{},index:null}}function S(C,H,oe,te){const fe=c.attributes,he=H.attributes;let ae=0;const ce=oe.getAttributes();for(const O in ce)if(ce[O].location>=0){const G=fe[O];let D=he[O];if(D===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(D=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(D=C.instanceColor)),G===void 0||G.attribute!==D||D&&G.data!==D.data)return!0;ae++}return c.attributesNum!==ae||c.index!==te}function w(C,H,oe,te){const fe={},he=H.attributes;let ae=0;const ce=oe.getAttributes();for(const O in ce)if(ce[O].location>=0){let G=he[O];G===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(G=C.instanceColor));const D={};D.attribute=G,G&&G.data&&(D.data=G.data),fe[O]=D,ae++}c.attributes=fe,c.attributesNum=ae,c.index=te}function T(){const C=c.newAttributes;for(let H=0,oe=C.length;H<oe;H++)C[H]=0}function y(C){g(C,0)}function g(C,H){const oe=c.newAttributes,te=c.enabledAttributes,fe=c.attributeDivisors;oe[C]=1,te[C]===0&&(s.enableVertexAttribArray(C),te[C]=1),fe[C]!==H&&(s.vertexAttribDivisor(C,H),fe[C]=H)}function U(){const C=c.newAttributes,H=c.enabledAttributes;for(let oe=0,te=H.length;oe<te;oe++)H[oe]!==C[oe]&&(s.disableVertexAttribArray(oe),H[oe]=0)}function I(C,H,oe,te,fe,he,ae){ae===!0?s.vertexAttribIPointer(C,H,oe,fe,he):s.vertexAttribPointer(C,H,oe,te,fe,he)}function R(C,H,oe,te){T();const fe=te.attributes,he=oe.getAttributes(),ae=H.defaultAttributeValues;for(const ce in he){const O=he[ce];if(O.location>=0){let le=fe[ce];if(le===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const G=le.normalized,D=le.itemSize,K=e.get(le);if(K===void 0)continue;const we=K.buffer,$=K.type,ue=K.bytesPerElement,ye=$===s.INT||$===s.UNSIGNED_INT||le.gpuType===zd;if(le.isInterleavedBufferAttribute){const _e=le.data,Ae=_e.stride,Xe=le.offset;if(_e.isInstancedInterleavedBuffer){for(let Ge=0;Ge<O.locationSize;Ge++)g(O.location+Ge,_e.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ge=0;Ge<O.locationSize;Ge++)y(O.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,we);for(let Ge=0;Ge<O.locationSize;Ge++)I(O.location+Ge,D/O.locationSize,$,G,Ae*ue,(Xe+D/O.locationSize*Ge)*ue,ye)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<O.locationSize;_e++)g(O.location+_e,le.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<O.locationSize;_e++)y(O.location+_e);s.bindBuffer(s.ARRAY_BUFFER,we);for(let _e=0;_e<O.locationSize;_e++)I(O.location+_e,D/O.locationSize,$,G,D*ue,D/O.locationSize*_e*ue,ye)}}else if(ae!==void 0){const G=ae[ce];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(O.location,G);break;case 3:s.vertexAttrib3fv(O.location,G);break;case 4:s.vertexAttrib4fv(O.location,G);break;default:s.vertexAttrib1fv(O.location,G)}}}}U()}function j(){q();for(const C in r){const H=r[C];for(const oe in H){const te=H[oe];for(const fe in te)_(te[fe].object),delete te[fe];delete H[oe]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const oe in H){const te=H[oe];for(const fe in te)_(te[fe].object),delete te[fe];delete H[oe]}delete r[C.id]}function k(C){for(const H in r){const oe=r[H];if(oe[C.id]===void 0)continue;const te=oe[C.id];for(const fe in te)_(te[fe].object),delete te[fe];delete oe[C.id]}}function q(){b(),u=!0,c!==a&&(c=a,m(c.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:q,resetDefaultState:b,dispose:j,releaseStatesOfGeometry:F,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:y,disableUnusedAttributes:U}}function iS(s,e,n){let r;function a(m){r=m}function c(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function u(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function f(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let w=0;w<v;w++)S+=_[w];n.update(S,r,1)}function p(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)u(m[w],_[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let w=0;for(let T=0;T<v;T++)w+=_[T]*x[T];n.update(w,r,1)}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function rS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==li&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const q=k===Oo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==zi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Oi&&!q)}function p(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),j=w>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:U,maxVaryings:I,maxFragmentUniforms:R,vertexTextures:j,maxSamples:F}}function sS(s){const e=this;let n=null,r=0,a=!1,c=!1;const u=new Hr,f=new at,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const w=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||w===null||w.length===0||c&&!y)c?_(null):m();else{const U=c?0:r,I=U*4;let R=g.clippingState||null;p.value=R,R=_(w,x,I,S);for(let j=0;j!==I;++j)R[j]=n[j];g.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,w){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=p.value,w!==!0||y===null){const g=S+T*4,U=x.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<g)&&(y=new Float32Array(g));for(let I=0,R=S;I!==T;++I,R+=4)u.copy(v[I]).applyMatrix4(U,f),u.normal.toArray(y,R),y[R+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function oS(s){let e=new WeakMap;function n(u,f){return f===sd?u.mapping=ks:f===od&&(u.mapping=Bs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===sd||f===od)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new l_(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Is=4,nm=[.125,.215,.35,.446,.526,.582],jr=20,Wu=new v_,im=new wt;let ju=null,Xu=0,Yu=0,qu=!1;const Vr=(1+Math.sqrt(5))/2,Ls=1/Vr,rm=[new ne(-Vr,Ls,0),new ne(Vr,Ls,0),new ne(-Ls,0,Vr),new ne(Ls,0,Vr),new ne(0,Vr,-Ls),new ne(0,Vr,Ls),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],aS=new ne;class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,c={}){const{size:u=256,position:f=aS}=c;ju=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Xu,Yu),this._renderer.xr.enabled=qu,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Oo,format:li,colorSpace:zs,depthBuffer:!1},a=om(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=om(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lS(c)),this._blurMaterial=cS(c,e,n)}return a}_compileMaterial(e){const n=new Dn(this._lodPlanes[0],e);this._renderer.compile(n,Wu)}_sceneToCubeUV(e,n,r,a,c){const p=new Zn(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(im),v.toneMapping=_r,v.autoClear=!1;const w=new Wr({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),T=new Dn(new Ws,w);let y=!1;const g=e.background;g?g.isColor&&(w.color.copy(g),e.background=null,y=!0):(w.color.copy(im),y=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(p.up.set(0,m[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[U],c.y,c.z)):I===1?(p.up.set(0,0,m[U]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[U],c.z)):(p.up.set(0,m[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[U]));const R=this._cubeSize;yl(a,I*R,U>2?R:0,R,R),v.setRenderTarget(a),y&&v.render(T,p),v.render(e,p)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ks||e.mapping===Bs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new Dn(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;yl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Wu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=rm[(a-c-1)%rm.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",c),this._halfBlur(u,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,u,f){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Dn(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*jr-1),T=c/w,y=isFinite(c)?1+Math.floor(_*T):jr;y>jr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${jr}`);const g=[];let U=0;for(let k=0;k<jr;++k){const q=k/T,b=Math.exp(-q*q/2);g.push(b),k===0?U+=b:k<y&&(U+=2*b)}for(let k=0;k<g.length;k++)g[k]=g[k]/U;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:I}=this;x.dTheta.value=w,x.mipInt.value=I-r;const R=this._sizeLods[a],j=3*R*(a>I-Is?a-I+Is:0),F=4*(this._cubeSize-R);yl(n,j,F,3*R,2*R),p.setRenderTarget(n),p.render(v,Wu)}}function lS(s){const e=[],n=[],r=[];let a=s;const c=s-Is+1+nm.length;for(let u=0;u<c;u++){const f=Math.pow(2,a);n.push(f);let p=1/f;u>s-Is?p=nm[u-s+Is-1]:u===0&&(p=0),r.push(p);const m=1/(f-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,w=6,T=3,y=2,g=1,U=new Float32Array(T*w*S),I=new Float32Array(y*w*S),R=new Float32Array(g*w*S);for(let F=0;F<S;F++){const k=F%3*2/3-1,q=F>2?0:-1,b=[k,q,0,k+2/3,q,0,k+2/3,q+1,0,k,q,0,k+2/3,q+1,0,k,q+1,0];U.set(b,T*w*F),I.set(x,y*w*F);const C=[F,F,F,F,F,F];R.set(C,g*w*F)}const j=new Vn;j.setAttribute("position",new ui(U,T)),j.setAttribute("uv",new ui(I,y)),j.setAttribute("faceIndex",new ui(R,g)),e.push(j),a>Is&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function om(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=Il,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function cS(s,e,n){const r=new Float32Array(jr),a=new ne(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function am(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function lm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function $d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===sd||p===od,_=p===ks||p===Bs;if(m||_){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new sm(s)),v=m?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new sm(s)),v=m?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",c),v.texture):null}}}return f}function a(f){let p=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function dS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Cl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function fS(s,e,n,r){const a={},c=new WeakMap;function u(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",u),delete a[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(v,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,w=v.attributes.position;let T=0;if(S!==null){const U=S.array;T=S.version;for(let I=0,R=U.length;I<R;I+=3){const j=U[I+0],F=U[I+1],k=U[I+2];x.push(j,F,F,k,k,j)}}else if(w!==void 0){const U=w.array;T=w.version;for(let I=0,R=U.length/3-1;I<R;I+=3){const j=I+0,F=I+1,k=I+2;x.push(j,F,F,k,k,j)}}else return;const y=new(Bm(x)?Wm:Gm)(x,1);y.version=T;const g=c.get(v);g&&e.remove(g),c.set(v,y)}function _(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:f,update:p,getWireframeAttribute:_}}function hS(s,e,n){let r;function a(x){r=x}let c,u;function f(x){c=x.type,u=x.bytesPerElement}function p(x,S){s.drawElements(r,S,c,x*u),n.update(S,r,1)}function m(x,S,w){w!==0&&(s.drawElementsInstanced(r,S,c,x*u,w),n.update(S,r,w))}function _(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,w);let y=0;for(let g=0;g<w;g++)y+=S[g];n.update(y,r,1)}function v(x,S,w,T){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/u,S[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,T,0,w);let g=0;for(let U=0;U<w;U++)g+=S[U]*T[U];n.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function pS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function mS(s,e,n){const r=new WeakMap,a=new Wt;function c(u,f,p){const m=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let C=function(){q.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const w=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let R=0;w===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let j=f.attributes.position.count*R,F=1;j>e.maxTextureSize&&(F=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const k=new Float32Array(j*F*4*v),q=new zm(k,j,F,v);q.type=Oi,q.needsUpdate=!0;const b=R*4;for(let H=0;H<v;H++){const oe=g[H],te=U[H],fe=I[H],he=j*F*4*H;for(let ae=0;ae<oe.count;ae++){const ce=ae*b;w===!0&&(a.fromBufferAttribute(oe,ae),k[he+ce+0]=a.x,k[he+ce+1]=a.y,k[he+ce+2]=a.z,k[he+ce+3]=0),T===!0&&(a.fromBufferAttribute(te,ae),k[he+ce+4]=a.x,k[he+ce+5]=a.y,k[he+ce+6]=a.z,k[he+ce+7]=0),y===!0&&(a.fromBufferAttribute(fe,ae),k[he+ce+8]=a.x,k[he+ce+9]=a.y,k[he+ce+10]=a.z,k[he+ce+11]=fe.itemSize===4?a.w:1)}}x={count:v,texture:q,size:new Ct(j,F)},r.set(f,x),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const T=f.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function gS(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function u(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}const Jm=new In,cm=new Zm(1,1),eg=new zm,tg=new jv,ng=new Ym,um=[],dm=[],fm=new Float32Array(16),hm=new Float32Array(9),pm=new Float32Array(4);function js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=um[a];if(c===void 0&&(c=new Float32Array(a),um[a]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Fl(s,e){let n=dm[e];n===void 0&&(n=new Int32Array(e),dm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function vS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function _S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function xS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function yS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function SS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;pm.set(r),s.uniformMatrix2fv(this.addr,!1,pm),Qt(n,r)}}function MS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;hm.set(r),s.uniformMatrix3fv(this.addr,!1,hm),Qt(n,r)}}function ES(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;fm.set(r),s.uniformMatrix4fv(this.addr,!1,fm),Qt(n,r)}}function wS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function TS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function AS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function RS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function bS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function PS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function NS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function DS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(cm.compareFunction=km,c=cm):c=Jm,n.setTexture2D(e||c,a)}function LS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||tg,a)}function IS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||ng,a)}function US(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||eg,a)}function FS(s){switch(s){case 5126:return vS;case 35664:return _S;case 35665:return xS;case 35666:return yS;case 35674:return SS;case 35675:return MS;case 35676:return ES;case 5124:case 35670:return wS;case 35667:case 35671:return TS;case 35668:case 35672:return AS;case 35669:case 35673:return CS;case 5125:return RS;case 36294:return bS;case 36295:return PS;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return US}}function OS(s,e){s.uniform1fv(this.addr,e)}function kS(s,e){const n=js(e,this.size,2);s.uniform2fv(this.addr,n)}function BS(s,e){const n=js(e,this.size,3);s.uniform3fv(this.addr,n)}function zS(s,e){const n=js(e,this.size,4);s.uniform4fv(this.addr,n)}function HS(s,e){const n=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function VS(s,e){const n=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function GS(s,e){const n=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function WS(s,e){s.uniform1iv(this.addr,e)}function jS(s,e){s.uniform2iv(this.addr,e)}function XS(s,e){s.uniform3iv(this.addr,e)}function YS(s,e){s.uniform4iv(this.addr,e)}function qS(s,e){s.uniform1uiv(this.addr,e)}function $S(s,e){s.uniform2uiv(this.addr,e)}function KS(s,e){s.uniform3uiv(this.addr,e)}function ZS(s,e){s.uniform4uiv(this.addr,e)}function QS(s,e,n){const r=this.cache,a=e.length,c=Fl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||Jm,c[u])}function JS(s,e,n){const r=this.cache,a=e.length,c=Fl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||tg,c[u])}function eM(s,e,n){const r=this.cache,a=e.length,c=Fl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||ng,c[u])}function tM(s,e,n){const r=this.cache,a=e.length,c=Fl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||eg,c[u])}function nM(s){switch(s){case 5126:return OS;case 35664:return kS;case 35665:return BS;case 35666:return zS;case 35674:return HS;case 35675:return VS;case 35676:return GS;case 5124:case 35670:return WS;case 35667:case 35671:return jS;case 35668:case 35672:return XS;case 35669:case 35673:return YS;case 5125:return qS;case 36294:return $S;case 36295:return KS;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return JS;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}class iM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=FS(n.type)}}class rM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nM(n.type)}}class sM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const f=a[c];f.setValue(e,n[f.id],r)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function mm(s,e){s.seq.push(e),s.map[e.id]=e}function oM(s,e,n){const r=s.name,a=r.length;for($u.lastIndex=0;;){const c=$u.exec(r),u=$u.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===a){mm(n,m===void 0?new iM(f,s,e):new rM(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new sM(f),mm(n,v)),n=v}}}class Rl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);oM(c,u,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function gm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const aM=37297;let lM=0;function cM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const vm=new at;function uM(s){Mt._getMatrix(vm,Mt.workingColorSpace,s);const e=`mat3( ${vm.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(s)){case bl:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _m(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+cM(s.getShaderSource(e),u)}else return a}function dM(s,e){const n=uM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function fM(s,e){let n;switch(e){case gv:n="Linear";break;case vv:n="Reinhard";break;case _v:n="Cineon";break;case xv:n="ACESFilmic";break;case Sv:n="AgX";break;case Mv:n="Neutral";break;case yv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new ne;function hM(){Mt.getLuminanceCoefficients(Sl);const s=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function mM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function gM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function No(s){return s!==""}function xm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(s){return s.replace(vM,xM)}const _M=new Map;function xM(s,e){let n=lt[e];if(n===void 0){const r=_M.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Od(n)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(s){return s.replace(yM,SM)}function SM(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Mm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function EM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ks:case Bs:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function TM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rm:e="ENVMAP_BLENDING_MULTIPLY";break;case pv:e="ENVMAP_BLENDING_MIX";break;case mv:e="ENVMAP_BLENDING_ADD";break}return e}function AM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function CM(s,e,n,r){const a=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=MM(n),m=EM(n),_=wM(n),v=TM(n),x=AM(n),S=pM(n),w=mM(c),T=a.createProgram();let y,g,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(No).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(No).join(`
`),g.length>0&&(g+=`
`)):(y=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?lt.tonemapping_pars_fragment:"",n.toneMapping!==_r?fM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,dM("linearToOutputTexel",n.outputColorSpace),hM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),u=Od(u),u=xm(u,n),u=ym(u,n),f=Od(f),f=xm(f,n),f=ym(f,n),u=Sm(u),f=Sm(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const I=U+y+u,R=U+g+f,j=gm(a,a.VERTEX_SHADER,I),F=gm(a,a.FRAGMENT_SHADER,R);a.attachShader(T,j),a.attachShader(T,F),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function k(H){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(T).trim(),te=a.getShaderInfoLog(j).trim(),fe=a.getShaderInfoLog(F).trim();let he=!0,ae=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,j,F);else{const ce=_m(a,j,"vertex"),O=_m(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+oe+`
`+ce+`
`+O)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(te===""||fe==="")&&(ae=!1);ae&&(H.diagnostics={runnable:he,programLog:oe,vertexShader:{log:te,prefix:y},fragmentShader:{log:fe,prefix:g}})}a.deleteShader(j),a.deleteShader(F),q=new Rl(a,T),b=gM(a,T)}let q;this.getUniforms=function(){return q===void 0&&k(this),q};let b;this.getAttributes=function(){return b===void 0&&k(this),b};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,aM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=j,this.fragmentShader=F,this}let RM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new PM(e),n.set(e,r)),r}}class PM{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}}function NM(s,e,n,r,a,c,u){const f=new Hm,p=new bM,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,C,H,oe,te){const fe=oe.fog,he=te.geometry,ae=b.isMeshStandardMaterial?oe.environment:null,ce=(b.isMeshStandardMaterial?n:e).get(b.envMap||ae),O=ce&&ce.mapping===Il?ce.image.height:null,le=w[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const G=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,D=G!==void 0?G.length:0;let K=0;he.morphAttributes.position!==void 0&&(K=1),he.morphAttributes.normal!==void 0&&(K=2),he.morphAttributes.color!==void 0&&(K=3);let we,$,ue,ye;if(le){const _t=vi[le];we=_t.vertexShader,$=_t.fragmentShader}else we=b.vertexShader,$=b.fragmentShader,p.update(b),ue=p.getVertexShaderID(b),ye=p.getFragmentShaderID(b);const _e=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Xe=te.isInstancedMesh===!0,Ge=te.isBatchedMesh===!0,bt=!!b.map,Pt=!!b.matcap,ct=!!ce,z=!!b.aoMap,vn=!!b.lightMap,ht=!!b.bumpMap,ut=!!b.normalMap,Ye=!!b.displacementMap,Tt=!!b.emissiveMap,We=!!b.metalnessMap,P=!!b.roughnessMap,E=b.anisotropy>0,ee=b.clearcoat>0,pe=b.dispersion>0,xe=b.iridescence>0,de=b.sheen>0,Ve=b.transmission>0,Ce=E&&!!b.anisotropyMap,Ke=ee&&!!b.clearcoatMap,$e=ee&&!!b.clearcoatNormalMap,Se=ee&&!!b.clearcoatRoughnessMap,Fe=xe&&!!b.iridescenceMap,et=xe&&!!b.iridescenceThicknessMap,tt=de&&!!b.sheenColorMap,Oe=de&&!!b.sheenRoughnessMap,dt=!!b.specularMap,rt=!!b.specularColorMap,Et=!!b.specularIntensityMap,W=Ve&&!!b.transmissionMap,Re=Ve&&!!b.thicknessMap,se=!!b.gradientMap,me=!!b.alphaMap,De=b.alphaTest>0,Ne=!!b.alphaHash,st=!!b.extensions;let Dt=_r;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const qt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:we,fragmentShader:$,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ge,batchingColor:Ge&&te._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&te.instanceColor!==null,instancingMorph:Xe&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:zs,alphaToCoverage:!!b.alphaToCoverage,map:bt,matcap:Pt,envMap:ct,envMapMode:ct&&ce.mapping,envMapCubeUVHeight:O,aoMap:z,lightMap:vn,bumpMap:ht,normalMap:ut,displacementMap:x&&Ye,emissiveMap:Tt,normalMapObjectSpace:ut&&b.normalMapType===Cv,normalMapTangentSpace:ut&&b.normalMapType===Av,metalnessMap:We,roughnessMap:P,anisotropy:E,anisotropyMap:Ce,clearcoat:ee,clearcoatMap:Ke,clearcoatNormalMap:$e,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:xe,iridescenceMap:Fe,iridescenceThicknessMap:et,sheen:de,sheenColorMap:tt,sheenRoughnessMap:Oe,specularMap:dt,specularColorMap:rt,specularIntensityMap:Et,transmission:Ve,transmissionMap:W,thicknessMap:Re,gradientMap:se,opaque:b.transparent===!1&&b.blending===Us&&b.alphaToCoverage===!1,alphaMap:me,alphaTest:De,alphaHash:Ne,combine:b.combine,mapUv:bt&&T(b.map.channel),aoMapUv:z&&T(b.aoMap.channel),lightMapUv:vn&&T(b.lightMap.channel),bumpMapUv:ht&&T(b.bumpMap.channel),normalMapUv:ut&&T(b.normalMap.channel),displacementMapUv:Ye&&T(b.displacementMap.channel),emissiveMapUv:Tt&&T(b.emissiveMap.channel),metalnessMapUv:We&&T(b.metalnessMap.channel),roughnessMapUv:P&&T(b.roughnessMap.channel),anisotropyMapUv:Ce&&T(b.anisotropyMap.channel),clearcoatMapUv:Ke&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:$e&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:et&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(b.sheenRoughnessMap.channel),specularMapUv:dt&&T(b.specularMap.channel),specularColorMapUv:rt&&T(b.specularColorMap.channel),specularIntensityMapUv:Et&&T(b.specularIntensityMap.channel),transmissionMapUv:W&&T(b.transmissionMap.channel),thicknessMapUv:Re&&T(b.thicknessMap.channel),alphaMapUv:me&&T(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(bt||me),fog:!!fe,useFog:b.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:K,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:bt&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===At,decodeVideoTextureEmissive:Tt&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===At,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_i,flipSided:b.side===Ln,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function g(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)C.push(H),C.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(U(C,b),I(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function U(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function I(b,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const C=w[b.type];let H;if(C){const oe=vi[C];H=r_.clone(oe.uniforms)}else H=b.uniforms;return H}function j(b,C){let H;for(let oe=0,te=_.length;oe<te;oe++){const fe=_[oe];if(fe.cacheKey===C){H=fe,++H.usedTimes;break}}return H===void 0&&(H=new CM(s,C,b,c),_.push(H)),H}function F(b){if(--b.usedTimes===0){const C=_.indexOf(b);_[C]=_[_.length-1],_.pop(),b.destroy()}}function k(b){p.remove(b)}function q(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:j,releaseProgram:F,releaseShaderCache:k,programs:_,dispose:q}}function DM(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,p){s.get(u)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function LM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Em(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function u(v,x,S,w,T,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:w,renderOrder:v.renderOrder,z:T,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=w,g.renderOrder=v.renderOrder,g.z=T,g.group=y),e++,g}function f(v,x,S,w,T,y){const g=u(v,x,S,w,T,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(v,x,S,w,T,y){const g=u(v,x,S,w,T,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||LM),r.length>1&&r.sort(x||Em),a.length>1&&a.sort(x||Em)}function _(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:f,unshift:p,finish:_,sort:m}}function IM(){let s=new WeakMap;function e(r,a){const c=s.get(r);let u;return c===void 0?(u=new wm,s.set(r,[u])):a>=c.length?(u=new wm,c.push(u)):u=c[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function UM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new wt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=n,n}}}function FM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let OM=0;function kM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function BM(s){const e=new UM,n=FM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const a=new ne,c=new Vt,u=new Vt;function f(m){let _=0,v=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,w=0,T=0,y=0,g=0,U=0,I=0,R=0,j=0,F=0,k=0;m.sort(kM);for(let b=0,C=m.length;b<C;b++){const H=m[b],oe=H.color,te=H.intensity,fe=H.distance,he=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=oe.r*te,v+=oe.g*te,x+=oe.b*te;else if(H.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(H.sh.coefficients[ae],te);k++}else if(H.isDirectionalLight){const ae=e.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ce=H.shadow,O=n.get(H);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,r.directionalShadow[S]=O,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=H.shadow.matrix,U++}r.directional[S]=ae,S++}else if(H.isSpotLight){const ae=e.get(H);ae.position.setFromMatrixPosition(H.matrixWorld),ae.color.copy(oe).multiplyScalar(te),ae.distance=fe,ae.coneCos=Math.cos(H.angle),ae.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ae.decay=H.decay,r.spot[T]=ae;const ce=H.shadow;if(H.map&&(r.spotLightMap[j]=H.map,j++,ce.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[T]=ce.matrix,H.castShadow){const O=n.get(H);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,r.spotShadow[T]=O,r.spotShadowMap[T]=he,R++}T++}else if(H.isRectAreaLight){const ae=e.get(H);ae.color.copy(oe).multiplyScalar(te),ae.halfWidth.set(H.width*.5,0,0),ae.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=ae,y++}else if(H.isPointLight){const ae=e.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity),ae.distance=H.distance,ae.decay=H.decay,H.castShadow){const ce=H.shadow,O=n.get(H);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,O.shadowCameraNear=ce.camera.near,O.shadowCameraFar=ce.camera.far,r.pointShadow[w]=O,r.pointShadowMap[w]=he,r.pointShadowMatrix[w]=H.shadow.matrix,I++}r.point[w]=ae,w++}else if(H.isHemisphereLight){const ae=e.get(H);ae.skyColor.copy(H.color).multiplyScalar(te),ae.groundColor.copy(H.groundColor).multiplyScalar(te),r.hemi[g]=ae,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const q=r.hash;(q.directionalLength!==S||q.pointLength!==w||q.spotLength!==T||q.rectAreaLength!==y||q.hemiLength!==g||q.numDirectionalShadows!==U||q.numPointShadows!==I||q.numSpotShadows!==R||q.numSpotMaps!==j||q.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=R+j-F,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=k,q.directionalLength=S,q.pointLength=w,q.spotLength=T,q.rectAreaLength=y,q.hemiLength=g,q.numDirectionalShadows=U,q.numPointShadows=I,q.numSpotShadows=R,q.numSpotMaps=j,q.numLightProbes=k,r.version=OM++)}function p(m,_){let v=0,x=0,S=0,w=0,T=0;const y=_.matrixWorldInverse;for(let g=0,U=m.length;g<U;g++){const I=m[g];if(I.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),v++}else if(I.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(I.isRectAreaLight){const R=r.rectArea[w];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(I.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),w++}else if(I.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(y),x++}else if(I.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(I.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:f,setupView:p,state:r}}function Tm(s){const e=new BM(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function u(_){r.push(_)}function f(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function zM(s){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let f;return u===void 0?(f=new Tm(s),e.set(a,[f])):c>=u.length?(f=new Tm(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GM(s,e,n){let r=new qm;const a=new Ct,c=new Ct,u=new Wt,f=new m_({depthPacking:Tv}),p=new g_,m={},_=n.maxTextureSize,v={[xr]:Ln,[Ln]:xr,[_i]:_i},x=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:HM,fragmentShader:VM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new Vn;w.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Dn(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cm;let g=this.type;this.render=function(F,k,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const b=s.getRenderTarget(),C=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(vr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=g!==Fi&&this.type===Fi,fe=g===Fi&&this.type!==Fi;for(let he=0,ae=F.length;he<ae;he++){const ce=F[he],O=ce.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const le=O.getFrameExtents();if(a.multiply(le),c.copy(O.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(c.x=Math.floor(_/le.x),a.x=c.x*le.x,O.mapSize.x=c.x),a.y>_&&(c.y=Math.floor(_/le.y),a.y=c.y*le.y,O.mapSize.y=c.y)),O.map===null||te===!0||fe===!0){const D=this.type!==Fi?{minFilter:ci,magFilter:ci}:{};O.map!==null&&O.map.dispose(),O.map=new $r(a.x,a.y,D),O.map.texture.name=ce.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const G=O.getViewportCount();for(let D=0;D<G;D++){const K=O.getViewport(D);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),oe.viewport(u),O.updateMatrices(ce,D),r=O.getFrustum(),R(k,q,O.camera,ce,this.type)}O.isPointLightShadow!==!0&&this.type===Fi&&U(O,q),O.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(b,C,H)};function U(F,k){const q=e.update(T);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(k,null,q,x,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(k,null,q,S,T,null)}function I(F,k,q,b){let C=null;const H=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)C=H;else if(C=q.isPointLight===!0?p:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const oe=C.uuid,te=k.uuid;let fe=m[oe];fe===void 0&&(fe={},m[oe]=fe);let he=fe[te];he===void 0&&(he=C.clone(),fe[te]=he,k.addEventListener("dispose",j)),C=he}if(C.visible=k.visible,C.wireframe=k.wireframe,b===Fi?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:v[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=s.properties.get(C);oe.light=q}return C}function R(F,k,q,b,C){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Fi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const te=e.update(F),fe=F.material;if(Array.isArray(fe)){const he=te.groups;for(let ae=0,ce=he.length;ae<ce;ae++){const O=he[ae],le=fe[O.materialIndex];if(le&&le.visible){const G=I(F,le,b,C);F.onBeforeShadow(s,F,k,q,te,G,O),s.renderBufferDirect(q,null,te,G,F,O),F.onAfterShadow(s,F,k,q,te,G,O)}}}else if(fe.visible){const he=I(F,fe,b,C);F.onBeforeShadow(s,F,k,q,te,he,null),s.renderBufferDirect(q,null,te,he,F,null),F.onAfterShadow(s,F,k,q,te,he,null)}}const oe=F.children;for(let te=0,fe=oe.length;te<fe;te++)R(oe[te],k,q,b,C)}function j(F){F.target.removeEventListener("dispose",j);for(const q in m){const b=m[q],C=F.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const WM={[Qu]:Ju,[ed]:id,[td]:rd,[Os]:nd,[Ju]:Qu,[id]:ed,[rd]:td,[nd]:Os};function jM(s,e){function n(){let W=!1;const Re=new Wt;let se=null;const me=new Wt(0,0,0,0);return{setMask:function(De){se!==De&&!W&&(s.colorMask(De,De,De,De),se=De)},setLocked:function(De){W=De},setClear:function(De,Ne,st,Dt,qt){qt===!0&&(De*=Dt,Ne*=Dt,st*=Dt),Re.set(De,Ne,st,Dt),me.equals(Re)===!1&&(s.clearColor(De,Ne,st,Dt),me.copy(Re))},reset:function(){W=!1,se=null,me.set(-1,0,0,0)}}}function r(){let W=!1,Re=!1,se=null,me=null,De=null;return{setReversed:function(Ne){if(Re!==Ne){const st=e.get("EXT_clip_control");Ne?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),Re=Ne;const Dt=De;De=null,this.setClear(Dt)}},getReversed:function(){return Re},setTest:function(Ne){Ne?_e(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Ne){se!==Ne&&!W&&(s.depthMask(Ne),se=Ne)},setFunc:function(Ne){if(Re&&(Ne=WM[Ne]),me!==Ne){switch(Ne){case Qu:s.depthFunc(s.NEVER);break;case Ju:s.depthFunc(s.ALWAYS);break;case ed:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case td:s.depthFunc(s.EQUAL);break;case nd:s.depthFunc(s.GEQUAL);break;case id:s.depthFunc(s.GREATER);break;case rd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Ne}},setLocked:function(Ne){W=Ne},setClear:function(Ne){De!==Ne&&(Re&&(Ne=1-Ne),s.clearDepth(Ne),De=Ne)},reset:function(){W=!1,se=null,me=null,De=null,Re=!1}}}function a(){let W=!1,Re=null,se=null,me=null,De=null,Ne=null,st=null,Dt=null,qt=null;return{setTest:function(_t){W||(_t?_e(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(_t){Re!==_t&&!W&&(s.stencilMask(_t),Re=_t)},setFunc:function(_t,wn,_n){(se!==_t||me!==wn||De!==_n)&&(s.stencilFunc(_t,wn,_n),se=_t,me=wn,De=_n)},setOp:function(_t,wn,_n){(Ne!==_t||st!==wn||Dt!==_n)&&(s.stencilOp(_t,wn,_n),Ne=_t,st=wn,Dt=_n)},setLocked:function(_t){W=_t},setClear:function(_t){qt!==_t&&(s.clearStencil(_t),qt=_t)},reset:function(){W=!1,Re=null,se=null,me=null,De=null,Ne=null,st=null,Dt=null,qt=null}}}const c=new n,u=new r,f=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],w=null,T=!1,y=null,g=null,U=null,I=null,R=null,j=null,F=null,k=new wt(0,0,0),q=0,b=!1,C=null,H=null,oe=null,te=null,fe=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(O)[1]),ae=ce>=1):O.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ae=ce>=2);let le=null,G={};const D=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),we=new Wt().fromArray(D),$=new Wt().fromArray(K);function ue(W,Re,se,me){const De=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(W,Ne),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<se;st++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Re+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Ne}const ye={};ye[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),u.setFunc(Os),ht(!1),ut(Cp),_e(s.CULL_FACE),z(vr);function _e(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function Ae(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function Xe(W,Re){return v[W]!==Re?(s.bindFramebuffer(W,Re),v[W]=Re,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Re),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ge(W,Re){let se=S,me=!1;if(W){se=x.get(Re),se===void 0&&(se=[],x.set(Re,se));const De=W.textures;if(se.length!==De.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,st=De.length;Ne<st;Ne++)se[Ne]=s.COLOR_ATTACHMENT0+Ne;se.length=De.length,me=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,me=!0);me&&s.drawBuffers(se)}function bt(W){return w!==W?(s.useProgram(W),w=W,!0):!1}const Pt={[Gr]:s.FUNC_ADD,[Z0]:s.FUNC_SUBTRACT,[Q0]:s.FUNC_REVERSE_SUBTRACT};Pt[J0]=s.MIN,Pt[ev]=s.MAX;const ct={[tv]:s.ZERO,[nv]:s.ONE,[iv]:s.SRC_COLOR,[Ku]:s.SRC_ALPHA,[cv]:s.SRC_ALPHA_SATURATE,[av]:s.DST_COLOR,[sv]:s.DST_ALPHA,[rv]:s.ONE_MINUS_SRC_COLOR,[Zu]:s.ONE_MINUS_SRC_ALPHA,[lv]:s.ONE_MINUS_DST_COLOR,[ov]:s.ONE_MINUS_DST_ALPHA,[uv]:s.CONSTANT_COLOR,[dv]:s.ONE_MINUS_CONSTANT_COLOR,[fv]:s.CONSTANT_ALPHA,[hv]:s.ONE_MINUS_CONSTANT_ALPHA};function z(W,Re,se,me,De,Ne,st,Dt,qt,_t){if(W===vr){T===!0&&(Ae(s.BLEND),T=!1);return}if(T===!1&&(_e(s.BLEND),T=!0),W!==K0){if(W!==y||_t!==b){if((g!==Gr||R!==Gr)&&(s.blendEquation(s.FUNC_ADD),g=Gr,R=Gr),_t)switch(W){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rp:s.blendFunc(s.ONE,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}U=null,I=null,j=null,F=null,k.set(0,0,0),q=0,y=W,b=_t}return}De=De||Re,Ne=Ne||se,st=st||me,(Re!==g||De!==R)&&(s.blendEquationSeparate(Pt[Re],Pt[De]),g=Re,R=De),(se!==U||me!==I||Ne!==j||st!==F)&&(s.blendFuncSeparate(ct[se],ct[me],ct[Ne],ct[st]),U=se,I=me,j=Ne,F=st),(Dt.equals(k)===!1||qt!==q)&&(s.blendColor(Dt.r,Dt.g,Dt.b,qt),k.copy(Dt),q=qt),y=W,b=!1}function vn(W,Re){W.side===_i?Ae(s.CULL_FACE):_e(s.CULL_FACE);let se=W.side===Ln;Re&&(se=!se),ht(se),W.blending===Us&&W.transparent===!1?z(vr):z(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const me=W.stencilWrite;f.setTest(me),me&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Tt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(W){C!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),C=W)}function ut(W){W!==Y0?(_e(s.CULL_FACE),W!==H&&(W===Cp?s.cullFace(s.BACK):W===q0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),H=W}function Ye(W){W!==oe&&(ae&&s.lineWidth(W),oe=W)}function Tt(W,Re,se){W?(_e(s.POLYGON_OFFSET_FILL),(te!==Re||fe!==se)&&(s.polygonOffset(Re,se),te=Re,fe=se)):Ae(s.POLYGON_OFFSET_FILL)}function We(W){W?_e(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function P(W){W===void 0&&(W=s.TEXTURE0+he-1),le!==W&&(s.activeTexture(W),le=W)}function E(W,Re,se){se===void 0&&(le===null?se=s.TEXTURE0+he-1:se=le);let me=G[se];me===void 0&&(me={type:void 0,texture:void 0},G[se]=me),(me.type!==W||me.texture!==Re)&&(le!==se&&(s.activeTexture(se),le=se),s.bindTexture(W,Re||ye[W]),me.type=W,me.texture=Re)}function ee(){const W=G[le];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(W){we.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),we.copy(W))}function Oe(W){$.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),$.copy(W))}function dt(W,Re){let se=m.get(Re);se===void 0&&(se=new WeakMap,m.set(Re,se));let me=se.get(W);me===void 0&&(me=s.getUniformBlockIndex(Re,W.name),se.set(W,me))}function rt(W,Re){const me=m.get(Re).get(W);p.get(Re)!==me&&(s.uniformBlockBinding(Re,me,W.__bindingPointIndex),p.set(Re,me))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},le=null,G={},v={},x=new WeakMap,S=[],w=null,T=!1,y=null,g=null,U=null,I=null,R=null,j=null,F=null,k=new wt(0,0,0),q=0,b=!1,C=null,H=null,oe=null,te=null,fe=null,we.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:_e,disable:Ae,bindFramebuffer:Xe,drawBuffers:Ge,useProgram:bt,setBlending:z,setMaterial:vn,setFlipSided:ht,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:Tt,setScissorTest:We,activeTexture:P,bindTexture:E,unbindTexture:ee,compressedTexImage2D:pe,compressedTexImage3D:xe,texImage2D:Fe,texImage3D:et,updateUBOMapping:dt,uniformBlockBinding:rt,texStorage2D:$e,texStorage3D:Se,texSubImage2D:de,texSubImage3D:Ve,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ke,scissor:tt,viewport:Oe,reset:Et}}function XM(s,e,n,r,a,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ct,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,E){return S?new OffscreenCanvas(P,E):Nl("canvas")}function T(P,E,ee){let pe=1;const xe=We(P);if((xe.width>ee||xe.height>ee)&&(pe=ee/Math.max(xe.width,xe.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(pe*xe.width),Ve=Math.floor(pe*xe.height);v===void 0&&(v=w(de,Ve));const Ce=E?w(de,Ve):v;return Ce.width=de,Ce.height=Ve,Ce.getContext("2d").drawImage(P,0,0,de,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Ve+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function y(P){return P.generateMipmaps}function g(P){s.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(P,E,ee,pe,xe=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=E;if(E===s.RED&&(ee===s.FLOAT&&(de=s.R32F),ee===s.HALF_FLOAT&&(de=s.R16F),ee===s.UNSIGNED_BYTE&&(de=s.R8)),E===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(de=s.R8UI),ee===s.UNSIGNED_SHORT&&(de=s.R16UI),ee===s.UNSIGNED_INT&&(de=s.R32UI),ee===s.BYTE&&(de=s.R8I),ee===s.SHORT&&(de=s.R16I),ee===s.INT&&(de=s.R32I)),E===s.RG&&(ee===s.FLOAT&&(de=s.RG32F),ee===s.HALF_FLOAT&&(de=s.RG16F),ee===s.UNSIGNED_BYTE&&(de=s.RG8)),E===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(de=s.RG8UI),ee===s.UNSIGNED_SHORT&&(de=s.RG16UI),ee===s.UNSIGNED_INT&&(de=s.RG32UI),ee===s.BYTE&&(de=s.RG8I),ee===s.SHORT&&(de=s.RG16I),ee===s.INT&&(de=s.RG32I)),E===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(de=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(de=s.RGB16UI),ee===s.UNSIGNED_INT&&(de=s.RGB32UI),ee===s.BYTE&&(de=s.RGB8I),ee===s.SHORT&&(de=s.RGB16I),ee===s.INT&&(de=s.RGB32I)),E===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),ee===s.UNSIGNED_INT&&(de=s.RGBA32UI),ee===s.BYTE&&(de=s.RGBA8I),ee===s.SHORT&&(de=s.RGBA16I),ee===s.INT&&(de=s.RGBA32I)),E===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),E===s.RGBA){const Ve=xe?bl:Mt.getTransfer(pe);ee===s.FLOAT&&(de=s.RGBA32F),ee===s.HALF_FLOAT&&(de=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(de=Ve===At?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(P,E){let ee;return P?E===null||E===qr||E===Io?ee=s.DEPTH24_STENCIL8:E===Oi?ee=s.DEPTH32F_STENCIL8:E===Lo&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qr||E===Io?ee=s.DEPTH_COMPONENT24:E===Oi?ee=s.DEPTH_COMPONENT32F:E===Lo&&(ee=s.DEPTH_COMPONENT16),ee}function j(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==ci&&P.minFilter!==xi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function F(P){const E=P.target;E.removeEventListener("dispose",F),q(E),E.isVideoTexture&&_.delete(E)}function k(P){const E=P.target;E.removeEventListener("dispose",k),C(E)}function q(P){const E=r.get(P);if(E.__webglInit===void 0)return;const ee=P.source,pe=x.get(ee);if(pe){const xe=pe[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(P),Object.keys(pe).length===0&&x.delete(ee)}r.remove(P)}function b(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const ee=P.source,pe=x.get(ee);delete pe[E.__cacheKey],u.memory.textures--}function C(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let xe=0;xe<E.__webglFramebuffer[pe].length;xe++)s.deleteFramebuffer(E.__webglFramebuffer[pe][xe]);else s.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[pe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=P.textures;for(let pe=0,xe=ee.length;pe<xe;pe++){const de=r.get(ee[pe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(ee[pe])}r.remove(P)}let H=0;function oe(){H=0}function te(){const P=H;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),H+=1,P}function fe(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function he(P,E){const ee=r.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(ee,P,E);return}}n.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+E)}function ae(P,E){const ee=r.get(P);if(P.version>0&&ee.__version!==P.version){$(ee,P,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+E)}function ce(P,E){const ee=r.get(P);if(P.version>0&&ee.__version!==P.version){$(ee,P,E);return}n.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+E)}function O(P,E){const ee=r.get(P);if(P.version>0&&ee.__version!==P.version){ue(ee,P,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+E)}const le={[ad]:s.REPEAT,[Xr]:s.CLAMP_TO_EDGE,[ld]:s.MIRRORED_REPEAT},G={[ci]:s.NEAREST,[Ev]:s.NEAREST_MIPMAP_NEAREST,[Ka]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[xu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},D={[Rv]:s.NEVER,[Iv]:s.ALWAYS,[bv]:s.LESS,[km]:s.LEQUAL,[Pv]:s.EQUAL,[Lv]:s.GEQUAL,[Nv]:s.GREATER,[Dv]:s.NOTEQUAL};function K(P,E){if(E.type===Oi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===xi||E.magFilter===xu||E.magFilter===Ka||E.magFilter===Yr||E.minFilter===xi||E.minFilter===xu||E.minFilter===Ka||E.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,le[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,le[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,le[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,G[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,G[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,D[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ci||E.minFilter!==Ka&&E.minFilter!==Yr||E.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function we(P,E){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",F));const pe=E.source;let xe=x.get(pe);xe===void 0&&(xe={},x.set(pe,xe));const de=fe(E);if(de!==P.__cacheKey){xe[de]===void 0&&(xe[de]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),xe[de].usedTimes++;const Ve=xe[P.__cacheKey];Ve!==void 0&&(xe[P.__cacheKey].usedTimes--,Ve.usedTimes===0&&b(E)),P.__cacheKey=de,P.__webglTexture=xe[de].texture}return ee}function $(P,E,ee){let pe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=s.TEXTURE_3D);const xe=we(P,E),de=E.source;n.bindTexture(pe,P.__webglTexture,s.TEXTURE0+ee);const Ve=r.get(de);if(de.version!==Ve.__version||xe===!0){n.activeTexture(s.TEXTURE0+ee);const Ce=Mt.getPrimaries(Mt.workingColorSpace),Ke=E.colorSpace===gr?null:Mt.getPrimaries(E.colorSpace),$e=E.colorSpace===gr||Ce===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Se=T(E.image,!1,a.maxTextureSize);Se=Tt(E,Se);const Fe=c.convert(E.format,E.colorSpace),et=c.convert(E.type);let tt=I(E.internalFormat,Fe,et,E.colorSpace,E.isVideoTexture);K(pe,E);let Oe;const dt=E.mipmaps,rt=E.isVideoTexture!==!0,Et=Ve.__version===void 0||xe===!0,W=de.dataReady,Re=j(E,Se);if(E.isDepthTexture)tt=R(E.format===Fo,E.type),Et&&(rt?n.texStorage2D(s.TEXTURE_2D,1,tt,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,tt,Se.width,Se.height,0,Fe,et,null));else if(E.isDataTexture)if(dt.length>0){rt&&Et&&n.texStorage2D(s.TEXTURE_2D,Re,tt,dt[0].width,dt[0].height);for(let se=0,me=dt.length;se<me;se++)Oe=dt[se],rt?W&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,et,Oe.data):n.texImage2D(s.TEXTURE_2D,se,tt,Oe.width,Oe.height,0,Fe,et,Oe.data);E.generateMipmaps=!1}else rt?(Et&&n.texStorage2D(s.TEXTURE_2D,Re,tt,Se.width,Se.height),W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Fe,et,Se.data)):n.texImage2D(s.TEXTURE_2D,0,tt,Se.width,Se.height,0,Fe,et,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,tt,dt[0].width,dt[0].height,Se.depth);for(let se=0,me=dt.length;se<me;se++)if(Oe=dt[se],E.format!==li)if(Fe!==null)if(rt){if(W)if(E.layerUpdates.size>0){const De=tm(Oe.width,Oe.height,E.format,E.type);for(const Ne of E.layerUpdates){const st=Oe.data.subarray(Ne*De/Oe.data.BYTES_PER_ELEMENT,(Ne+1)*De/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Ne,Oe.width,Oe.height,1,Fe,st)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Se.depth,Fe,Oe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,tt,Oe.width,Oe.height,Se.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?W&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Se.depth,Fe,et,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,tt,Oe.width,Oe.height,Se.depth,0,Fe,et,Oe.data)}else{rt&&Et&&n.texStorage2D(s.TEXTURE_2D,Re,tt,dt[0].width,dt[0].height);for(let se=0,me=dt.length;se<me;se++)Oe=dt[se],E.format!==li?Fe!==null?rt?W&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,se,tt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?W&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,et,Oe.data):n.texImage2D(s.TEXTURE_2D,se,tt,Oe.width,Oe.height,0,Fe,et,Oe.data)}else if(E.isDataArrayTexture)if(rt){if(Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,tt,Se.width,Se.height,Se.depth),W)if(E.layerUpdates.size>0){const se=tm(Se.width,Se.height,E.format,E.type);for(const me of E.layerUpdates){const De=Se.data.subarray(me*se/Se.data.BYTES_PER_ELEMENT,(me+1)*se/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Se.width,Se.height,1,Fe,et,De)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Fe,et,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Se.width,Se.height,Se.depth,0,Fe,et,Se.data);else if(E.isData3DTexture)rt?(Et&&n.texStorage3D(s.TEXTURE_3D,Re,tt,Se.width,Se.height,Se.depth),W&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Fe,et,Se.data)):n.texImage3D(s.TEXTURE_3D,0,tt,Se.width,Se.height,Se.depth,0,Fe,et,Se.data);else if(E.isFramebufferTexture){if(Et)if(rt)n.texStorage2D(s.TEXTURE_2D,Re,tt,Se.width,Se.height);else{let se=Se.width,me=Se.height;for(let De=0;De<Re;De++)n.texImage2D(s.TEXTURE_2D,De,tt,se,me,0,Fe,et,null),se>>=1,me>>=1}}else if(dt.length>0){if(rt&&Et){const se=We(dt[0]);n.texStorage2D(s.TEXTURE_2D,Re,tt,se.width,se.height)}for(let se=0,me=dt.length;se<me;se++)Oe=dt[se],rt?W&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Fe,et,Oe):n.texImage2D(s.TEXTURE_2D,se,tt,Fe,et,Oe);E.generateMipmaps=!1}else if(rt){if(Et){const se=We(Se);n.texStorage2D(s.TEXTURE_2D,Re,tt,se.width,se.height)}W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,et,Se)}else n.texImage2D(s.TEXTURE_2D,0,tt,Fe,et,Se);y(E)&&g(pe),Ve.__version=de.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ue(P,E,ee){if(E.image.length!==6)return;const pe=we(P,E),xe=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+ee);const de=r.get(xe);if(xe.version!==de.__version||pe===!0){n.activeTexture(s.TEXTURE0+ee);const Ve=Mt.getPrimaries(Mt.workingColorSpace),Ce=E.colorSpace===gr?null:Mt.getPrimaries(E.colorSpace),Ke=E.colorSpace===gr||Ve===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const $e=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Fe=[];for(let me=0;me<6;me++)!$e&&!Se?Fe[me]=T(E.image[me],!0,a.maxCubemapSize):Fe[me]=Se?E.image[me].image:E.image[me],Fe[me]=Tt(E,Fe[me]);const et=Fe[0],tt=c.convert(E.format,E.colorSpace),Oe=c.convert(E.type),dt=I(E.internalFormat,tt,Oe,E.colorSpace),rt=E.isVideoTexture!==!0,Et=de.__version===void 0||pe===!0,W=xe.dataReady;let Re=j(E,et);K(s.TEXTURE_CUBE_MAP,E);let se;if($e){rt&&Et&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,dt,et.width,et.height);for(let me=0;me<6;me++){se=Fe[me].mipmaps;for(let De=0;De<se.length;De++){const Ne=se[De];E.format!==li?tt!==null?rt?W&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Ne.width,Ne.height,tt,Ne.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,dt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Ne.width,Ne.height,tt,Oe,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,dt,Ne.width,Ne.height,0,tt,Oe,Ne.data)}}}else{if(se=E.mipmaps,rt&&Et){se.length>0&&Re++;const me=We(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,dt,me.width,me.height)}for(let me=0;me<6;me++)if(Se){rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Fe[me].width,Fe[me].height,tt,Oe,Fe[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,Fe[me].width,Fe[me].height,0,tt,Oe,Fe[me].data);for(let De=0;De<se.length;De++){const st=se[De].image[me].image;rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,st.width,st.height,tt,Oe,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,dt,st.width,st.height,0,tt,Oe,st.data)}}else{rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,tt,Oe,Fe[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,tt,Oe,Fe[me]);for(let De=0;De<se.length;De++){const Ne=se[De];rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,tt,Oe,Ne.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,dt,tt,Oe,Ne.image[me])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),de.__version=xe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ye(P,E,ee,pe,xe,de){const Ve=c.convert(ee.format,ee.colorSpace),Ce=c.convert(ee.type),Ke=I(ee.internalFormat,Ve,Ce,ee.colorSpace),$e=r.get(E),Se=r.get(ee);if(Se.__renderTarget=E,!$e.__hasExternalTextures){const Fe=Math.max(1,E.width>>de),et=Math.max(1,E.height>>de);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?n.texImage3D(xe,de,Ke,Fe,et,E.depth,0,Ve,Ce,null):n.texImage2D(xe,de,Ke,Fe,et,0,Ve,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,xe,Se.__webglTexture,0,ht(E)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,xe,Se.__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(P,E,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const pe=E.depthTexture,xe=pe&&pe.isDepthTexture?pe.type:null,de=R(E.stencilBuffer,xe),Ve=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=ht(E);ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,de,E.width,E.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,de,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,de,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,P)}else{const pe=E.textures;for(let xe=0;xe<pe.length;xe++){const de=pe[xe],Ve=c.convert(de.format,de.colorSpace),Ce=c.convert(de.type),Ke=I(de.internalFormat,Ve,Ce,de.colorSpace),$e=ht(E);ee&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Ke,E.width,E.height):ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,Ke,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ke,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const xe=pe.__webglTexture,de=ht(E);if(E.depthTexture.format===Uo)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(E.depthTexture.format===Fo)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Xe(P){const E=r.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const xe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",xe)};pe.addEventListener("dispose",xe),E.__depthDisposeCallback=xe}E.__boundDepthTexture=pe}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const pe=P.texture.mipmaps;pe&&pe.length>0?Ae(E.__webglFramebuffer[0],P):Ae(E.__webglFramebuffer,P)}else if(ee){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=s.createRenderbuffer(),_e(E.__webglDepthbuffer[pe],P,!1);else{const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,de)}}else{const pe=P.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),_e(E.__webglDepthbuffer,P,!1);else{const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,de)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(P,E,ee){const pe=r.get(P);E!==void 0&&ye(pe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Xe(P)}function bt(P){const E=P.texture,ee=r.get(P),pe=r.get(E);P.addEventListener("dispose",k);const xe=P.textures,de=P.isWebGLCubeRenderTarget===!0,Ve=xe.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=E.version,u.memory.textures++),de){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let Ke=0;Ke<E.mipmaps.length;Ke++)ee.__webglFramebuffer[Ce][Ke]=s.createFramebuffer()}else ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ce=0,Ke=xe.length;Ce<Ke;Ce++){const $e=r.get(xe[Ce]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&ut(P)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Ke=xe[Ce];ee.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce]);const $e=c.convert(Ke.format,Ke.colorSpace),Se=c.convert(Ke.type),Fe=I(Ke.internalFormat,$e,Se,Ke.colorSpace,P.isXRRenderTarget===!0),et=ht(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Fe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(ee.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),K(s.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)ye(ee.__webglFramebuffer[Ce][Ke],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ke);else ye(ee.__webglFramebuffer[Ce],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ce=0,Ke=xe.length;Ce<Ke;Ce++){const $e=xe[Ce],Se=r.get($e);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),K(s.TEXTURE_2D,$e),ye(ee.__webglFramebuffer,P,$e,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y($e)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,pe.__webglTexture),K(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)ye(ee.__webglFramebuffer[Ke],P,E,s.COLOR_ATTACHMENT0,Ce,Ke);else ye(ee.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,Ce,0);y(E)&&g(Ce),n.unbindTexture()}P.depthBuffer&&Xe(P)}function Pt(P){const E=P.textures;for(let ee=0,pe=E.length;ee<pe;ee++){const xe=E[ee];if(y(xe)){const de=U(P),Ve=r.get(xe).__webglTexture;n.bindTexture(de,Ve),g(de),n.unbindTexture()}}}const ct=[],z=[];function vn(P){if(P.samples>0){if(ut(P)===!1){const E=P.textures,ee=P.width,pe=P.height;let xe=s.COLOR_BUFFER_BIT;const de=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(P),Ce=E.length>1;if(Ce)for(let $e=0;$e<E.length;$e++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Ke=P.texture.mipmaps;Ke&&Ke.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let $e=0;$e<E.length;$e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[$e]);const Se=r.get(E[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,ee,pe,0,0,ee,pe,xe,s.NEAREST),p===!0&&(ct.length=0,z.length=0,ct.push(s.COLOR_ATTACHMENT0+$e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ct.push(de),z.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let $e=0;$e<E.length;$e++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[$e]);const Se=r.get(E[$e]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Se,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ht(P){return Math.min(a.maxSamples,P.samples)}function ut(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(P){const E=u.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function Tt(P,E){const ee=P.colorSpace,pe=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ee!==zs&&ee!==gr&&(Mt.getTransfer(ee)===At?(pe!==li||xe!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),E}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=O,this.rebindTextures=Ge,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ut}function YM(s,e){function n(r,a=gr){let c;const u=Mt.getTransfer(a);if(r===zi)return s.UNSIGNED_BYTE;if(r===Hd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Dm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Pm)return s.BYTE;if(r===Nm)return s.SHORT;if(r===Lo)return s.UNSIGNED_SHORT;if(r===zd)return s.INT;if(r===qr)return s.UNSIGNED_INT;if(r===Oi)return s.FLOAT;if(r===Oo)return s.HALF_FLOAT;if(r===Lm)return s.ALPHA;if(r===Im)return s.RGB;if(r===li)return s.RGBA;if(r===Uo)return s.DEPTH_COMPONENT;if(r===Fo)return s.DEPTH_STENCIL;if(r===Um)return s.RED;if(r===Gd)return s.RED_INTEGER;if(r===Fm)return s.RG;if(r===Wd)return s.RG_INTEGER;if(r===jd)return s.RGBA_INTEGER;if(r===Ml||r===El||r===wl||r===Tl)if(u===At)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ml)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ml)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cd||r===ud||r===dd||r===fd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hd||r===pd||r===md)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===hd||r===pd)return u===At?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===md)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===wd||r===Td||r===Ad||r===Cd||r===Rd||r===bd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gd)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vd)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_d)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xd)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yd)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sd)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Md)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ed)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wd)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Td)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ad)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cd)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rd)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bd)return u===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Al||r===Pd||r===Nd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Al)return u===At?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Om||r===Dd||r===Ld||r===Id)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Al)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Dd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ld)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Id)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Io?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const qM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$M=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new In,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:qM,fragmentShader:$M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Dn(new Ul(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZM extends Vs{constructor(e,n){super();const r=this;let a=null,c=1,u=null,f="local-floor",p=1,m=null,_=null,v=null,x=null,S=null,w=null;const T=new KM,y=n.getContextAttributes();let g=null,U=null;const I=[],R=[],j=new Ct;let F=null;const k=new Zn;k.viewport=new Wt;const q=new Zn;q.viewport=new Wt;const b=[k,q],C=new __;let H=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ue=I[$];return ue===void 0&&(ue=new Hu,I[$]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function($){let ue=I[$];return ue===void 0&&(ue=new Hu,I[$]=ue),ue.getGripSpace()},this.getHand=function($){let ue=I[$];return ue===void 0&&(ue=new Hu,I[$]=ue),ue.getHandSpace()};function te($){const ue=R.indexOf($.inputSource);if(ue===-1)return;const ye=I[ue];ye!==void 0&&(ye.update($.inputSource,$.frame,m||u),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function fe(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",he);for(let $=0;$<I.length;$++){const ue=R[$];ue!==null&&(R[$]=null,I[$].disconnect(ue))}H=null,oe=null,T.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,U=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,_e=null,Ae=null;y.depth&&(Ae=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=y.stencil?Fo:Uo,_e=y.stencil?Io:qr);const Xe={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:c};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Xe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new $r(x.textureWidth,x.textureHeight,{format:li,type:zi,depthTexture:new Zm(x.textureWidth,x.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,ye),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new $r(S.framebufferWidth,S.framebufferHeight,{format:li,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(f),we.setContext(a),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he($){for(let ue=0;ue<$.removed.length;ue++){const ye=$.removed[ue],_e=R.indexOf(ye);_e>=0&&(R[_e]=null,I[_e].disconnect(ye))}for(let ue=0;ue<$.added.length;ue++){const ye=$.added[ue];let _e=R.indexOf(ye);if(_e===-1){for(let Xe=0;Xe<I.length;Xe++)if(Xe>=R.length){R.push(ye),_e=Xe;break}else if(R[Xe]===null){R[Xe]=ye,_e=Xe;break}if(_e===-1)break}const Ae=I[_e];Ae&&Ae.connect(ye)}}const ae=new ne,ce=new ne;function O($,ue,ye){ae.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);const _e=ae.distanceTo(ce),Ae=ue.projectionMatrix.elements,Xe=ye.projectionMatrix.elements,Ge=Ae[14]/(Ae[10]-1),bt=Ae[14]/(Ae[10]+1),Pt=(Ae[9]+1)/Ae[5],ct=(Ae[9]-1)/Ae[5],z=(Ae[8]-1)/Ae[0],vn=(Xe[8]+1)/Xe[0],ht=Ge*z,ut=Ge*vn,Ye=_e/(-z+vn),Tt=Ye*-z;if(ue.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Tt),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=Ge+Ye,P=bt+Ye,E=ht-Tt,ee=ut+(_e-Tt),pe=Pt*bt/P*We,xe=ct*bt/P*We;$.projectionMatrix.makePerspective(E,ee,pe,xe,We,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function le($,ue){ue===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ue.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let ue=$.near,ye=$.far;T.texture!==null&&(T.depthNear>0&&(ue=T.depthNear),T.depthFar>0&&(ye=T.depthFar)),C.near=q.near=k.near=ue,C.far=q.far=k.far=ye,(H!==C.near||oe!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,oe=C.far),k.layers.mask=$.layers.mask|2,q.layers.mask=$.layers.mask|4,C.layers.mask=k.layers.mask|q.layers.mask;const _e=$.parent,Ae=C.cameras;le(C,_e);for(let Xe=0;Xe<Ae.length;Xe++)le(Ae[Xe],_e);Ae.length===2?O(C,k,q):C.projectionMatrix.copy(k.projectionMatrix),G($,C,_e)};function G($,ue,ye){ye===null?$.matrix.copy(ue.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(ue.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ud*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function($){p=$,x!==null&&(x.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let D=null;function K($,ue){if(_=ue.getViewerPose(m||u),w=ue,_!==null){const ye=_.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let _e=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let Ge=0;Ge<ye.length;Ge++){const bt=ye[Ge];let Pt=null;if(S!==null)Pt=S.getViewport(bt);else{const z=v.getViewSubImage(x,bt);Pt=z.viewport,Ge===0&&(e.setRenderTargetTextures(U,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(U))}let ct=b[Ge];ct===void 0&&(ct=new Zn,ct.layers.enable(Ge),ct.viewport=new Wt,b[Ge]=ct),ct.matrix.fromArray(bt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(bt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Ge===0&&(C.matrix.copy(ct.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(ct)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Ge=v.getDepthInformation(ye[0]);Ge&&Ge.isValid&&Ge.texture&&T.init(e,Ge,a.renderState)}}for(let ye=0;ye<I.length;ye++){const _e=R[ye],Ae=I[ye];_e!==null&&Ae!==void 0&&Ae.update(_e,ue,m||u)}D&&D($,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),w=null}const we=new Qm;we.setAnimationLoop(K),this.setAnimationLoop=function($){D=$},this.dispose=function(){}}}const zr=new Hi,QM=new Vt;function JM(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,jm(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,U,I,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),v(y,g)):g.isMeshPhongMaterial?(c(y,g),_(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,R)):g.isMeshMatcapMaterial?(c(y,g),w(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),T(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(u(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?p(y,g,U,I):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Ln&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Ln&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const U=e.get(g),I=U.envMap,R=U.envMapRotation;I&&(y.envMap.value=I,zr.copy(R),zr.x*=-1,zr.y*=-1,zr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),y.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(zr)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,U,I){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*U,y.scale.value=I*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,U){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const U=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function eE(s,e,n,r){let a={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,I){const R=I.program;r.uniformBlockBinding(U,R)}function m(U,I){let R=a[U.id];R===void 0&&(w(U),R=_(U),a[U.id]=R,U.addEventListener("dispose",y));const j=I.program;r.updateUBOMapping(U,j);const F=e.render.frame;c[U.id]!==F&&(x(U),c[U.id]=F)}function _(U){const I=v();U.__bindingPointIndex=I;const R=s.createBuffer(),j=U.__size,F=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,j,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,R),R}function v(){for(let U=0;U<f;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const I=a[U.id],R=U.uniforms,j=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let F=0,k=R.length;F<k;F++){const q=Array.isArray(R[F])?R[F]:[R[F]];for(let b=0,C=q.length;b<C;b++){const H=q[b];if(S(H,F,b,j)===!0){const oe=H.__offset,te=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let he=0;he<te.length;he++){const ae=te[he],ce=T(ae);typeof ae=="number"||typeof ae=="boolean"?(H.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,oe+fe,H.__data)):ae.isMatrix3?(H.__data[0]=ae.elements[0],H.__data[1]=ae.elements[1],H.__data[2]=ae.elements[2],H.__data[3]=0,H.__data[4]=ae.elements[3],H.__data[5]=ae.elements[4],H.__data[6]=ae.elements[5],H.__data[7]=0,H.__data[8]=ae.elements[6],H.__data[9]=ae.elements[7],H.__data[10]=ae.elements[8],H.__data[11]=0):(ae.toArray(H.__data,fe),fe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,I,R,j){const F=U.value,k=I+"_"+R;if(j[k]===void 0)return typeof F=="number"||typeof F=="boolean"?j[k]=F:j[k]=F.clone(),!0;{const q=j[k];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return j[k]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function w(U){const I=U.uniforms;let R=0;const j=16;for(let k=0,q=I.length;k<q;k++){const b=Array.isArray(I[k])?I[k]:[I[k]];for(let C=0,H=b.length;C<H;C++){const oe=b[C],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let fe=0,he=te.length;fe<he;fe++){const ae=te[fe],ce=T(ae),O=R%j,le=O%ce.boundary,G=O+le;R+=le,G!==0&&j-G<ce.storage&&(R+=j-G),oe.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=R,R+=ce.storage}}}const F=R%j;return F>0&&(R+=j-F),U.__size=R,U.__cache={},this}function T(U){const I={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(I.boundary=4,I.storage=4):U.isVector2?(I.boundary=8,I.storage=8):U.isVector3||U.isColor?(I.boundary=16,I.storage=12):U.isVector4?(I.boundary=16,I.storage=16):U.isMatrix3?(I.boundary=48,I.storage=48):U.isMatrix4?(I.boundary=64,I.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),I}function y(U){const I=U.target;I.removeEventListener("dispose",y);const R=u.indexOf(I.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete c[I.id]}function g(){for(const U in a)s.deleteBuffer(a[U]);u=[],a={},c={}}return{bind:p,update:m,dispose:g}}class tE{constructor(e={}){const{canvas:n=Fv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const w=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const U=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let j=!1;this._outputColorSpace=Kn;let F=0,k=0,q=null,b=-1,C=null;const H=new Wt,oe=new Wt;let te=null;const fe=new wt(0);let he=0,ae=n.width,ce=n.height,O=1,le=null,G=null;const D=new Wt(0,0,ae,ce),K=new Wt(0,0,ae,ce);let we=!1;const $=new qm;let ue=!1,ye=!1;const _e=new Vt,Ae=new Vt,Xe=new ne,Ge=new Wt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function ct(){return q===null?O:1}let z=r;function vn(A,X){return n.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bd}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),z===null){const X="webgl2";if(z=vn(X,A),z===null)throw vn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,ut,Ye,Tt,We,P,E,ee,pe,xe,de,Ve,Ce,Ke,$e,Se,Fe,et,tt,Oe,dt,rt,Et,W;function Re(){ht=new dS(z),ht.init(),rt=new YM(z,ht),ut=new rS(z,ht,e,rt),Ye=new jM(z,ht),ut.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Tt=new pS(z),We=new DM,P=new XM(z,ht,Ye,We,ut,rt,Tt),E=new oS(R),ee=new uS(R),pe=new y_(z),Et=new nS(z,pe),xe=new fS(z,pe,Tt,Et),de=new gS(z,xe,pe,Tt),tt=new mS(z,ut,P),Se=new sS(We),Ve=new NM(R,E,ee,ht,ut,Et,Se),Ce=new JM(R,We),Ke=new IM,$e=new zM(ht),et=new tS(R,E,ee,Ye,de,S,p),Fe=new GM(R,de,ut),W=new eE(z,Tt,ut,Ye),Oe=new iS(z,ht,Tt),dt=new hS(z,ht,Tt),Tt.programs=Ve.programs,R.capabilities=ut,R.extensions=ht,R.properties=We,R.renderLists=Ke,R.shadowMap=Fe,R.state=Ye,R.info=Tt}Re();const se=new ZM(R,z);this.xr=se,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(ae,ce,!1))},this.getSize=function(A){return A.set(ae,ce)},this.setSize=function(A,X,re=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,ce=X,n.width=Math.floor(A*O),n.height=Math.floor(X*O),re===!0&&(n.style.width=A+"px",n.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(ae*O,ce*O).floor()},this.setDrawingBufferSize=function(A,X,re){ae=A,ce=X,O=re,n.width=Math.floor(A*re),n.height=Math.floor(X*re),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(D)},this.setViewport=function(A,X,re,Q){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,X,re,Q),Ye.viewport(H.copy(D).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,X,re,Q){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,X,re,Q),Ye.scissor(oe.copy(K).multiplyScalar(O).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){Ye.setScissorTest(we=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,re=!0){let Q=0;if(A){let Y=!1;if(q!==null){const Ee=q.texture.format;Y=Ee===jd||Ee===Wd||Ee===Gd}if(Y){const Ee=q.texture.type,be=Ee===zi||Ee===qr||Ee===Lo||Ee===Io||Ee===Hd||Ee===Vd,Le=et.getClearColor(),ke=et.getClearAlpha(),nt=Le.r,Je=Le.g,ze=Le.b;be?(w[0]=nt,w[1]=Je,w[2]=ze,w[3]=ke,z.clearBufferuiv(z.COLOR,0,w)):(T[0]=nt,T[1]=Je,T[2]=ze,T[3]=ke,z.clearBufferiv(z.COLOR,0,T))}else Q|=z.COLOR_BUFFER_BIT}X&&(Q|=z.DEPTH_BUFFER_BIT),re&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),et.dispose(),Ke.dispose(),$e.dispose(),We.dispose(),E.dispose(),ee.dispose(),de.dispose(),Et.dispose(),W.dispose(),Ve.dispose(),se.dispose(),se.removeEventListener("sessionstart",Kr),se.removeEventListener("sessionend",Vi),yi.stop()};function me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const A=Tt.autoReset,X=Fe.enabled,re=Fe.autoUpdate,Q=Fe.needsUpdate,Y=Fe.type;Re(),Tt.autoReset=A,Fe.enabled=X,Fe.autoUpdate=re,Fe.needsUpdate=Q,Fe.type=Y}function Ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const X=A.target;X.removeEventListener("dispose",st),Dt(X)}function Dt(A){qt(A),We.remove(A)}function qt(A){const X=We.get(A).programs;X!==void 0&&(X.forEach(function(re){Ve.releaseProgram(re)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,re,Q,Y,Ee){X===null&&(X=bt);const be=Y.isMesh&&Y.matrixWorld.determinant()<0,Le=Wo(A,X,re,Q,Y);Ye.setMaterial(Q,be);let ke=re.index,nt=1;if(Q.wireframe===!0){if(ke=xe.getWireframeAttribute(re),ke===void 0)return;nt=2}const Je=re.drawRange,ze=re.attributes.position;let mt=Je.start*nt,ot=(Je.start+Je.count)*nt;Ee!==null&&(mt=Math.max(mt,Ee.start*nt),ot=Math.min(ot,(Ee.start+Ee.count)*nt)),ke!==null?(mt=Math.max(mt,0),ot=Math.min(ot,ke.count)):ze!=null&&(mt=Math.max(mt,0),ot=Math.min(ot,ze.count));const Bt=ot-mt;if(Bt<0||Bt===1/0)return;Et.setup(Y,Q,Le,re,ke);let Ut,vt=Oe;if(ke!==null&&(Ut=pe.get(ke),vt=dt,vt.setIndex(Ut)),Y.isMesh)Q.wireframe===!0?(Ye.setLineWidth(Q.wireframeLinewidth*ct()),vt.setMode(z.LINES)):vt.setMode(z.TRIANGLES);else if(Y.isLine){let qe=Q.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*ct()),Y.isLineSegments?vt.setMode(z.LINES):Y.isLineLoop?vt.setMode(z.LINE_LOOP):vt.setMode(z.LINE_STRIP)}else Y.isPoints?vt.setMode(z.POINTS):Y.isSprite&&vt.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Cl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,zt=Y._multiDrawCounts,pt=Y._multiDrawCount,cn=ke?pe.get(ke).bytesPerElement:1,Wi=We.get(Q).currentProgram.getUniforms();for(let xn=0;xn<pt;xn++)Wi.setValue(z,"_gl_DrawID",xn),vt.render(qe[xn]/cn,zt[xn])}else if(Y.isInstancedMesh)vt.renderInstances(mt,Bt,Y.count);else if(re.isInstancedBufferGeometry){const qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,zt=Math.min(re.instanceCount,qe);vt.renderInstances(mt,Bt,zt)}else vt.render(mt,Bt)};function _t(A,X,re){A.transparent===!0&&A.side===_i&&A.forceSinglePass===!1?(A.side=Ln,A.needsUpdate=!0,Zr(A,X,re),A.side=xr,A.needsUpdate=!0,Zr(A,X,re),A.side=_i):Zr(A,X,re)}this.compile=function(A,X,re=null){re===null&&(re=A),g=$e.get(re),g.init(X),I.push(g),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),A!==re&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const Q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ee=Y.material;if(Ee)if(Array.isArray(Ee))for(let be=0;be<Ee.length;be++){const Le=Ee[be];_t(Le,re,Y),Q.add(Le)}else _t(Ee,re,Y),Q.add(Ee)}),g=I.pop(),Q},this.compileAsync=function(A,X,re=null){const Q=this.compile(A,X,re);return new Promise(Y=>{function Ee(){if(Q.forEach(function(be){We.get(be).currentProgram.isReady()&&Q.delete(be)}),Q.size===0){Y(A);return}setTimeout(Ee,10)}ht.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let wn=null;function _n(A){wn&&wn(A)}function Kr(){yi.stop()}function Vi(){yi.start()}const yi=new Qm;yi.setAnimationLoop(_n),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){wn=A,se.setAnimationLoop(A),A===null?yi.stop():yi.start()},se.addEventListener("sessionstart",Kr),se.addEventListener("sessionend",Vi),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,q),g=$e.get(A,I.length),g.init(X),I.push(g),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$.setFromProjectionMatrix(Ae),ye=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,ye),y=Ke.get(A,U.length),y.init(),U.push(y),se.enabled===!0&&se.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&Si(Ee,X,-1/0,R.sortObjects)}Si(A,X,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(le,G),Pt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Pt&&et.addToRenderList(y,A),this.info.render.frame++,ue===!0&&Se.beginShadows();const re=g.state.shadowsArray;Fe.render(re,A,X),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,Y=y.transmissive;if(g.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(Y.length>0)for(let be=0,Le=Ee.length;be<Le;be++){const ke=Ee[be];Mr(Q,Y,A,ke)}Pt&&et.render(A);for(let be=0,Le=Ee.length;be<Le;be++){const ke=Ee[be];Sr(y,A,ke,ke.viewport)}}else Y.length>0&&Mr(Q,Y,A,X),Pt&&et.render(A),Sr(y,A,X);q!==null&&k===0&&(P.updateMultisampleRenderTarget(q),P.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(R,A,X),Et.resetDefaultState(),b=-1,C=null,I.pop(),I.length>0?(g=I[I.length-1],ue===!0&&Se.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Si(A,X,re,Q){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){Q&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const be=de.update(A),Le=A.material;Le.visible&&y.push(A,be,Le,re,Ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const be=de.update(A),Le=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ge.copy(be.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Le)){const ke=be.groups;for(let nt=0,Je=ke.length;nt<Je;nt++){const ze=ke[nt],mt=Le[ze.materialIndex];mt&&mt.visible&&y.push(A,be,mt,re,Ge.z,ze)}}else Le.visible&&y.push(A,be,Le,re,Ge.z,null)}}const Ee=A.children;for(let be=0,Le=Ee.length;be<Le;be++)Si(Ee[be],X,re,Q)}function Sr(A,X,re,Q){const Y=A.opaque,Ee=A.transmissive,be=A.transparent;g.setupLightsView(re),ue===!0&&Se.setGlobalState(R.clippingPlanes,re),Q&&Ye.viewport(H.copy(Q)),Y.length>0&&Gi(Y,X,re),Ee.length>0&&Gi(Ee,X,re),be.length>0&&Gi(be,X,re),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Mr(A,X,re,Q){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new $r(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Oo:zi,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Ee=g.state.transmissionRenderTarget[Q.id],be=Q.viewport||H;Ee.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);const Le=R.getRenderTarget();R.setRenderTarget(Ee),R.getClearColor(fe),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),Pt&&et.render(re);const ke=R.toneMapping;R.toneMapping=_r;const nt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),ue===!0&&Se.setGlobalState(R.clippingPlanes,Q),Gi(A,re,Q),P.updateMultisampleRenderTarget(Ee),P.updateRenderTargetMipmap(Ee),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ze=0,mt=X.length;ze<mt;ze++){const ot=X[ze],Bt=ot.object,Ut=ot.geometry,vt=ot.material,qe=ot.group;if(vt.side===_i&&Bt.layers.test(Q.layers)){const zt=vt.side;vt.side=Ln,vt.needsUpdate=!0,Vo(Bt,re,Q,Ut,vt,qe),vt.side=zt,vt.needsUpdate=!0,Je=!0}}Je===!0&&(P.updateMultisampleRenderTarget(Ee),P.updateRenderTargetMipmap(Ee))}R.setRenderTarget(Le),R.setClearColor(fe,he),nt!==void 0&&(Q.viewport=nt),R.toneMapping=ke}function Gi(A,X,re){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Ee=A.length;Y<Ee;Y++){const be=A[Y],Le=be.object,ke=be.geometry,nt=be.group;let Je=be.material;Je.allowOverride===!0&&Q!==null&&(Je=Q),Le.layers.test(re.layers)&&Vo(Le,X,re,ke,Je,nt)}}function Vo(A,X,re,Q,Y,Ee){A.onBeforeRender(R,X,re,Q,Y,Ee),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(R,X,re,Q,A,Ee),Y.transparent===!0&&Y.side===_i&&Y.forceSinglePass===!1?(Y.side=Ln,Y.needsUpdate=!0,R.renderBufferDirect(re,X,Q,Y,A,Ee),Y.side=xr,Y.needsUpdate=!0,R.renderBufferDirect(re,X,Q,Y,A,Ee),Y.side=_i):R.renderBufferDirect(re,X,Q,Y,A,Ee),A.onAfterRender(R,X,re,Q,Y,Ee)}function Zr(A,X,re){X.isScene!==!0&&(X=bt);const Q=We.get(A),Y=g.state.lights,Ee=g.state.shadowsArray,be=Y.state.version,Le=Ve.getParameters(A,Y.state,Ee,X,re),ke=Ve.getProgramCacheKey(Le);let nt=Q.programs;Q.environment=A.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(A.isMeshStandardMaterial?ee:E).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",st),nt=new Map,Q.programs=nt);let Je=nt.get(ke);if(Je!==void 0){if(Q.currentProgram===Je&&Q.lightsStateVersion===be)return di(A,Le),Je}else Le.uniforms=Ve.getUniforms(A),A.onBeforeCompile(Le,R),Je=Ve.acquireProgram(Le,ke),nt.set(ke,Je),Q.uniforms=Le.uniforms;const ze=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Se.uniform),di(A,Le),Q.needsLights=Ol(A),Q.lightsStateVersion=be,Q.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMap.value=Y.state.directionalShadowMap,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotShadowMap.value=Y.state.spotShadowMap,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMap.value=Y.state.pointShadowMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=Je,Q.uniformsList=null,Je}function Go(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Rl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function di(A,X){const re=We.get(A);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function Wo(A,X,re,Q,Y){X.isScene!==!0&&(X=bt),P.resetTextureUnits();const Ee=X.fog,be=Q.isMeshStandardMaterial?X.environment:null,Le=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:zs,ke=(Q.isMeshStandardMaterial?ee:E).get(Q.envMap||be),nt=Q.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Je=!!re.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ze=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,ot=!!re.morphAttributes.color;let Bt=_r;Q.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Bt=R.toneMapping);const Ut=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,vt=Ut!==void 0?Ut.length:0,qe=We.get(Q),zt=g.state.lights;if(ue===!0&&(ye===!0||A!==C)){const on=A===C&&Q.id===b;Se.setState(Q,A,on)}let pt=!1;Q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zt.state.version||qe.outputColorSpace!==Le||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==ke||Q.fog===!0&&qe.fog!==Ee||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==Je||qe.morphTargets!==ze||qe.morphNormals!==mt||qe.morphColors!==ot||qe.toneMapping!==Bt||qe.morphTargetsCount!==vt)&&(pt=!0):(pt=!0,qe.__version=Q.version);let cn=qe.currentProgram;pt===!0&&(cn=Zr(Q,X,Y));let Wi=!1,xn=!1,Mi=!1;const Rt=cn.getUniforms(),un=qe.uniforms;if(Ye.useProgram(cn.program)&&(Wi=!0,xn=!0,Mi=!0),Q.id!==b&&(b=Q.id,xn=!0),Wi||C!==A){Ye.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),kv(_e),Bv(_e),Rt.setValue(z,"projectionMatrix",_e)):Rt.setValue(z,"projectionMatrix",A.projectionMatrix),Rt.setValue(z,"viewMatrix",A.matrixWorldInverse);const en=Rt.map.cameraPosition;en!==void 0&&en.setValue(z,Xe.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Rt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Rt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,xn=!0,Mi=!0)}if(Y.isSkinnedMesh){Rt.setOptional(z,Y,"bindMatrix"),Rt.setOptional(z,Y,"bindMatrixInverse");const on=Y.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Rt.setValue(z,"boneTexture",on.boneTexture,P))}Y.isBatchedMesh&&(Rt.setOptional(z,Y,"batchingTexture"),Rt.setValue(z,"batchingTexture",Y._matricesTexture,P),Rt.setOptional(z,Y,"batchingIdTexture"),Rt.setValue(z,"batchingIdTexture",Y._indirectTexture,P),Rt.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Rt.setValue(z,"batchingColorTexture",Y._colorsTexture,P));const Jt=re.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&tt.update(Y,re,cn),(xn||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Rt.setValue(z,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(un.envMap.value=ke,un.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(un.envMapIntensity.value=X.environmentIntensity),xn&&(Rt.setValue(z,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&jo(un,Mi),Ee&&Q.fog===!0&&Ce.refreshFogUniforms(un,Ee),Ce.refreshMaterialUniforms(un,Q,O,ce,g.state.transmissionRenderTarget[A.id]),Rl.upload(z,Go(qe),un,P)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Rl.upload(z,Go(qe),un,P),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Rt.setValue(z,"center",Y.center),Rt.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Rt.setValue(z,"normalMatrix",Y.normalMatrix),Rt.setValue(z,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const on=Q.uniformsGroups;for(let en=0,xt=on.length;en<xt;en++){const fi=on[en];W.update(fi,cn),W.bind(fi,cn)}}return cn}function jo(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Ol(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,X,re){const Q=We.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),We.get(A.texture).__webglTexture=X,We.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:re,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const re=We.get(A);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const Xo=z.createFramebuffer();this.setRenderTarget=function(A,X=0,re=0){q=A,F=X,k=re;let Q=!0,Y=null,Ee=!1,be=!1;if(A){const ke=We.get(A);if(ke.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(ke.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(ke.__hasExternalTextures)P.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(ke.__boundDepthTexture!==ze){if(ze!==null&&We.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(be=!0);const Je=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?Y=Je[X][re]:Y=Je[X],Ee=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?Y=We.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[re]:Y=Je,H.copy(A.viewport),oe.copy(A.scissor),te=A.scissorTest}else H.copy(D).multiplyScalar(O).floor(),oe.copy(K).multiplyScalar(O).floor(),te=we;if(re!==0&&(Y=Xo),Ye.bindFramebuffer(z.FRAMEBUFFER,Y)&&Q&&Ye.drawBuffers(A,Y),Ye.viewport(H),Ye.scissor(oe),Ye.setScissorTest(te),Ee){const ke=We.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,re)}else if(be){const ke=We.get(A.texture),nt=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,re,nt)}else if(A!==null&&re!==0){const ke=We.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ke.__webglTexture,re)}b=-1},this.readRenderTargetPixels=function(A,X,re,Q,Y,Ee,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Le=Le[be]),Le){Ye.bindFramebuffer(z.FRAMEBUFFER,Le);try{const ke=A.texture,nt=ke.format,Je=ke.type;if(!ut.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Q&&re>=0&&re<=A.height-Y&&z.readPixels(X,re,Q,Y,rt.convert(nt),rt.convert(Je),Ee)}finally{const ke=q!==null?We.get(q).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,X,re,Q,Y,Ee,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Le=Le[be]),Le)if(X>=0&&X<=A.width-Q&&re>=0&&re<=A.height-Y){Ye.bindFramebuffer(z.FRAMEBUFFER,Le);const ke=A.texture,nt=ke.format,Je=ke.type;if(!ut.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ze),z.bufferData(z.PIXEL_PACK_BUFFER,Ee.byteLength,z.STREAM_READ),z.readPixels(X,re,Q,Y,rt.convert(nt),rt.convert(Je),0);const mt=q!==null?We.get(q).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,mt);const ot=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ov(z,ot,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ze),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ee),z.deleteBuffer(ze),z.deleteSync(ot),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,re=0){const Q=Math.pow(2,-re),Y=Math.floor(A.image.width*Q),Ee=Math.floor(A.image.height*Q),be=X!==null?X.x:0,Le=X!==null?X.y:0;P.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,re,0,0,be,Le,Y,Ee),Ye.unbindTexture()};const Yo=z.createFramebuffer(),qo=z.createFramebuffer();this.copyTextureToTexture=function(A,X,re=null,Q=null,Y=0,Ee=null){Ee===null&&(Y!==0?(Cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=Y,Y=0):Ee=0);let be,Le,ke,nt,Je,ze,mt,ot,Bt;const Ut=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(re!==null)be=re.max.x-re.min.x,Le=re.max.y-re.min.y,ke=re.isBox3?re.max.z-re.min.z:1,nt=re.min.x,Je=re.min.y,ze=re.isBox3?re.min.z:0;else{const Jt=Math.pow(2,-Y);be=Math.floor(Ut.width*Jt),Le=Math.floor(Ut.height*Jt),A.isDataArrayTexture?ke=Ut.depth:A.isData3DTexture?ke=Math.floor(Ut.depth*Jt):ke=1,nt=0,Je=0,ze=0}Q!==null?(mt=Q.x,ot=Q.y,Bt=Q.z):(mt=0,ot=0,Bt=0);const vt=rt.convert(X.format),qe=rt.convert(X.type);let zt;X.isData3DTexture?(P.setTexture3D(X,0),zt=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),zt=z.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),zt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const pt=z.getParameter(z.UNPACK_ROW_LENGTH),cn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Wi=z.getParameter(z.UNPACK_SKIP_PIXELS),xn=z.getParameter(z.UNPACK_SKIP_ROWS),Mi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,nt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Je),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ze);const Rt=A.isDataArrayTexture||A.isData3DTexture,un=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Jt=We.get(A),on=We.get(X),en=We.get(Jt.__renderTarget),xt=We.get(on.__renderTarget);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,en.__webglFramebuffer),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let fi=0;fi<ke;fi++)Rt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.get(A).__webglTexture,Y,ze+fi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.get(X).__webglTexture,Ee,Bt+fi)),z.blitFramebuffer(nt,Je,be,Le,mt,ot,be,Le,z.DEPTH_BUFFER_BIT,z.NEAREST);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||We.has(A)){const Jt=We.get(A),on=We.get(X);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,Yo),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,qo);for(let en=0;en<ke;en++)Rt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Jt.__webglTexture,Y,ze+en):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Jt.__webglTexture,Y),un?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,on.__webglTexture,Ee,Bt+en):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,on.__webglTexture,Ee),Y!==0?z.blitFramebuffer(nt,Je,be,Le,mt,ot,be,Le,z.COLOR_BUFFER_BIT,z.NEAREST):un?z.copyTexSubImage3D(zt,Ee,mt,ot,Bt+en,nt,Je,be,Le):z.copyTexSubImage2D(zt,Ee,mt,ot,nt,Je,be,Le);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else un?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(zt,Ee,mt,ot,Bt,be,Le,ke,vt,qe,Ut.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(zt,Ee,mt,ot,Bt,be,Le,ke,vt,Ut.data):z.texSubImage3D(zt,Ee,mt,ot,Bt,be,Le,ke,vt,qe,Ut):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ee,mt,ot,be,Le,vt,qe,Ut.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ee,mt,ot,Ut.width,Ut.height,vt,Ut.data):z.texSubImage2D(z.TEXTURE_2D,Ee,mt,ot,be,Le,vt,qe,Ut);z.pixelStorei(z.UNPACK_ROW_LENGTH,pt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,cn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Wi),z.pixelStorei(z.UNPACK_SKIP_ROWS,xn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Mi),Ee===0&&X.generateMipmaps&&z.generateMipmap(zt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,X,re=null,Q=null,Y=0){return Cl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,re,Q,Y)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){F=0,k=0,q=null,Ye.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const nE=()=>{const s=Yt.useRef(null),[e,n]=Yt.useState(!1),[r,a]=Yt.useState({x:0,y:0});Yt.useEffect(()=>{if(!s.current)return;const u=new u_,f=new Zn(75,s.current.clientWidth/s.current.clientHeight,.1,1e3);f.position.z=5;const p=new tE({alpha:!0,antialias:!0});p.setSize(s.current.clientWidth,s.current.clientHeight),p.setClearColor(0,0),s.current.appendChild(p.domElement);const m=()=>{s.current&&(f.aspect=s.current.clientWidth/s.current.clientHeight,f.updateProjectionMatrix(),p.setSize(s.current.clientWidth,s.current.clientHeight))};window.addEventListener("resize",m);const _=G=>{a({x:G.clientX/window.innerWidth*2-1,y:-(G.clientY/window.innerHeight)*2+1})};window.addEventListener("mousemove",_);const v=new Do(2,32,32),x=new Wr({color:16777215,wireframe:!0,transparent:!0,opacity:.6}),S=new Dn(v,x);u.add(S);const w=new Do(1.7,32,32),T=new Wr({color:16777215,transparent:!0,opacity:.1}),y=new Dn(w,T);u.add(y);const g=new Vn,U=1e3,I=new Float32Array(U*3);for(let G=0;G<U*3;G++)I[G]=(Math.random()-.5)*15;g.setAttribute("position",new ui(I,3));const R=new Km({size:.02,color:16777215,transparent:!0,opacity:.8}),j=new p_(g,R);u.add(j);const F=[];for(let G=0;G<15;G++){const D=Math.random()*.3+.1,K=new Ws(D,D,D),we=new Wr({color:16777215,wireframe:!0,transparent:!0,opacity:.7}),$=new Dn(K,we);$.position.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),$.rotationSpeed={x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01},u.add($),F.push($)}const k=new $m({color:16777215,transparent:!0,opacity:.2}),q=[];for(let G=0;G<F.length-1;G++){const D=[];D.push(F[G].position),D.push(F[G+1].position);const K=new Vn().setFromPoints(D),we=new h_(K,k);u.add(we),q.push(we)}const b=(G,D,K,we)=>{const $=new qd(G,G+.05,D),ue=new Wr({color:16777215,side:_i,transparent:!0,opacity:K,wireframe:!0}),ye=new Dn($,ue);return we==="x"?ye.rotation.x=Math.PI/2:we==="z"&&(ye.rotation.z=Math.PI/2),u.add(ye),ye},C=b(3,64,.3,"x"),H=b(3.5,64,.2,"y"),oe=b(4,64,.1,"z"),te=(G,D)=>{const K=[],we=G.geometry.parameters.innerRadius;for(let $=0;$<D;$++){const ue=$/D*Math.PI*2,ye=new Do(.08,16,16),_e=new Wr({color:16777215,transparent:!0,opacity:.8}),Ae=new Dn(ye,_e);G.rotation.x===Math.PI/2?Ae.position.set(Math.cos(ue)*we,0,Math.sin(ue)*we):G.rotation.z===Math.PI/2?Ae.position.set(0,Math.cos(ue)*we,Math.sin(ue)*we):Ae.position.set(Math.cos(ue)*we,Math.sin(ue)*we,0),u.add(Ae),K.push(Ae)}return K},fe=te(C,8),he=te(H,6),ae=te(oe,10),ce=[...fe,...he,...ae];let O=0;const le=()=>{requestAnimationFrame(le),O+=.01,S.rotation.x+=.001,S.rotation.y+=.002,S.rotation.x+=r.y*.001,S.rotation.y+=r.x*.001,y.rotation.x=S.rotation.x,y.rotation.y=S.rotation.y,y.scale.set(1+Math.sin(O*.5)*.05,1+Math.sin(O*.5)*.05,1+Math.sin(O*.5)*.05),j.rotation.x+=5e-4,j.rotation.y+=5e-4,F.forEach(G=>{G.rotation.x+=G.rotationSpeed.x,G.rotation.y+=G.rotationSpeed.y,G.rotation.z+=G.rotationSpeed.z,G.position.y+=Math.sin(O+G.position.x)*.002}),q.forEach((G,D)=>{const K=[];K.push(F[D].position),K.push(F[D+1].position),G.geometry.setFromPoints(K),G.geometry.attributes.position.needsUpdate=!0}),C.rotation.z+=.001,H.rotation.x+=.0015,oe.rotation.y+=.001,fe.forEach((G,D)=>{const K=D/fe.length*Math.PI*2+O*.1,we=C.geometry.parameters.innerRadius;G.position.x=Math.cos(K)*we,G.position.z=Math.sin(K)*we;const $=1+Math.sin(O*2+D)*.3;G.scale.set($,$,$)}),he.forEach((G,D)=>{const K=D/he.length*Math.PI*2+O*.15,we=H.geometry.parameters.innerRadius;G.position.x=Math.cos(K)*we,G.position.y=Math.sin(K)*we;const $=1+Math.sin(O*2+D+1)*.3;G.scale.set($,$,$)}),ae.forEach((G,D)=>{const K=D/ae.length*Math.PI*2+O*.12,we=oe.geometry.parameters.innerRadius;G.position.y=Math.cos(K)*we,G.position.z=Math.sin(K)*we;const $=1+Math.sin(O*2+D+2)*.3;G.scale.set($,$,$)}),ce.forEach((G,D)=>{const K=1+.2*Math.sin(O*3+D*.5);G.scale.set(K,K,K)}),p.render(u,f)};return le(),n(!0),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",_),s.current&&s.current.removeChild(p.domElement),v.dispose(),x.dispose(),w.dispose(),T.dispose(),g.dispose(),R.dispose(),F.forEach(G=>{G.geometry.dispose(),G.material.dispose()}),q.forEach(G=>{G.geometry.dispose(),G.material.dispose()}),[C,H,oe].forEach(G=>{G.geometry.dispose(),G.material.dispose()}),ce.forEach(G=>{G.geometry.dispose(),G.material.dispose()})}},[]);const c=()=>{const u=document.getElementById("framework");u&&u.scrollIntoView({behavior:"smooth"})};return N.jsxs("section",{id:"hero",className:"h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden",children:[N.jsx("div",{ref:s,className:"absolute inset-0 w-full h-full z-0"}),N.jsxs("div",{className:"z-10 text-center px-4 relative",children:[N.jsx("div",{className:"glitch-container mb-6",children:N.jsx("h1",{className:"text-5xl md:text-7xl font-bold text-white font-space glitch-text",children:"AI Agent Entrepreneurship Framework"})}),N.jsx("p",{className:"text-xl md:text-2xl text-white mb-12 font-inter max-w-3xl mx-auto animate-fade-in-delay",children:"Build, monetize, and scale AI agents that solve real business problems"}),N.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center gap-6",children:[N.jsxs("button",{onClick:c,className:"border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 px-8 py-4 text-lg font-medium rounded-none animate-fade-in-delay-2 relative overflow-hidden group",children:[N.jsx("span",{className:"relative z-10",children:"Explore the Framework"}),N.jsx("span",{className:"absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"})]}),N.jsx("button",{className:"border-2 border-white/50 text-white/80 hover:border-white hover:text-white transition-colors duration-300 px-8 py-4 text-lg font-medium rounded-none animate-fade-in-delay-3 relative overflow-hidden",children:N.jsx("span",{className:"relative z-10",children:"Watch Demo"})})]})]}),N.jsx("div",{className:"absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white opacity-50 animate-corner-pulse"}),N.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-white opacity-50 animate-corner-pulse delay-300"}),N.jsx("div",{className:"absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-white opacity-50 animate-corner-pulse delay-600"}),N.jsx("div",{className:"absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white opacity-50 animate-corner-pulse delay-900"}),N.jsxs("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce",children:[N.jsx("span",{className:"text-white/50 text-sm mb-2",children:"Scroll Down"}),N.jsx("svg",{className:"w-6 h-6 text-white/50",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]}),!e&&N.jsx("div",{className:"absolute inset-0 bg-black flex items-center justify-center",children:N.jsxs("div",{className:"flex space-x-2",children:[N.jsx("div",{className:"w-3 h-3 bg-white rounded-full animate-pulse"}),N.jsx("div",{className:"w-3 h-3 bg-white rounded-full animate-pulse delay-150"}),N.jsx("div",{className:"w-3 h-3 bg-white rounded-full animate-pulse delay-300"})]})}),N.jsx("div",{className:"absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse-slow"}),N.jsx("div",{className:"absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse-slow delay-300"}),N.jsx("div",{className:"absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse-slow delay-600"}),N.jsx("div",{className:"absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse-slow delay-900"}),N.jsx("div",{className:"absolute inset-0 grid-overlay opacity-10"}),N.jsx("style",{children:`
        @keyframes corner-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        .animate-corner-pulse {
          animation: corner-pulse 4s infinite;
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 1s forwards;
        }
        
        .animate-fade-in-delay {
          opacity: 0;
          animation: fade-in 1s 0.3s forwards;
        }
        
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 1s 0.6s forwards;
        }
        
        .animate-fade-in-delay-3 {
          opacity: 0;
          animation: fade-in 1s 0.9s forwards;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        .delay-150 {
          animation-delay: 0.15s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-900 {
          animation-delay: 0.9s;
        }
        
        .grid-overlay {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .glitch-container {
          position: relative;
        }
        
        .glitch-text {
          position: relative;
          animation: glitch-skew 1s infinite linear alternate-reverse;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: "AI Agent Entrepreneurship Framework";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        
        .glitch-text::before {
          color: #0ff;
          animation: glitch-anim 5s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-2px, -2px);
        }
        
        .glitch-text::after {
          color: #f0f;
          animation: glitch-anim2 2.5s infinite linear alternate-reverse;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
          transform: translate(2px, 2px);
        }
        
        @keyframes glitch-anim {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%);
            transform: translate(0);
          }
          10% {
            clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
            transform: translate(-1px, 1px);
          }
          20% {
            clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
            transform: translate(1px, 1px);
          }
          30% {
            clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
            transform: translate(0px, -1px);
          }
          40% {
            clip-path: polygon(0 35%, 100% 35%, 100% 40%, 0 40%);
            transform: translate(1px, 0px);
          }
          50% {
            clip-path: polygon(0 45%, 100% 45%, 100% 46%, 0 46%);
            transform: translate(-1px, 0px);
          }
          60% {
            clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%);
            transform: translate(-1px, 1px);
          }
          70% {
            clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
            transform: translate(1px, 1px);
          }
          80% {
            clip-path: polygon(0 80%, 100% 80%, 100% 81%, 0 81%);
            transform: translate(0px, -1px);
          }
          90% {
            clip-path: polygon(0 90%, 100% 90%, 100% 91%, 0 91%);
            transform: translate(1px, 0px);
          }
          100% {
            clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
            transform: translate(0);
          }
        }
        
        @keyframes glitch-anim2 {
          0% {
            clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
            transform: translate(-1px, 1px);
          }
          10% {
            clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
            transform: translate(1px, -1px);
          }
          20% {
            clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
            transform: translate(-1px, -1px);
          }
          30% {
            clip-path: polygon(0 35%, 100% 35%, 100% 36%, 0 36%);
            transform: translate(0px, 1px);
          }
          40% {
            clip-path: polygon(0 45%, 100% 45%, 100% 46%, 0 46%);
            transform: translate(-1px, 0px);
          }
          50% {
            clip-path: polygon(0 55%, 100% 55%, 100% 56%, 0 56%);
            transform: translate(1px, 0px);
          }
          60% {
            clip-path: polygon(0 65%, 100% 65%, 100% 66%, 0 66%);
            transform: translate(1px, -1px);
          }
          70% {
            clip-path: polygon(0 75%, 100% 75%, 100% 76%, 0 76%);
            transform: translate(-1px, -1px);
          }
          80% {
            clip-path: polygon(0 85%, 100% 85%, 100% 86%, 0 86%);
            transform: translate(0px, 1px);
          }
          90% {
            clip-path: polygon(0 95%, 100% 95%, 100% 96%, 0 96%);
            transform: translate(-1px, 0px);
          }
          100% {
            clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
            transform: translate(0);
          }
        }
        
        @keyframes glitch-skew {
          0% {
            transform: skew(0deg);
          }
          10% {
            transform: skew(0deg);
          }
          20% {
            transform: skew(0deg);
          }
          30% {
            transform: skew(0deg);
          }
          40% {
            transform: skew(0deg);
          }
          50% {
            transform: skew(-0.5deg);
          }
          60% {
            transform: skew(0deg);
          }
          70% {
            transform: skew(0deg);
          }
          80% {
            transform: skew(0.5deg);
          }
          90% {
            transform: skew(0deg);
          }
          100% {
            transform: skew(0deg);
          }
        }
      `})]})},iE=()=>{const[s,e]=Yt.useState(0),[n,r]=Yt.useState(!1);Yt.useEffect(()=>{const c=new IntersectionObserver(([f])=>{r(f.isIntersecting)},{threshold:.3}),u=document.getElementById("framework");return u&&c.observe(u),()=>{u&&c.unobserve(u)}},[]);const a=[{title:"Industry Identification",description:"Systematically identify high-potential industries and niches for AI agent deployment based on market size, pain points, and technological feasibility.",features:["Market opportunity assessment framework","Industry-specific pain point analysis","AI agent applicability scoring","Competitive landscape mapping"]},{title:"Client Interaction",description:"Develop structured approaches for engaging with potential clients, understanding their needs, and translating business problems into AI agent solutions.",features:["Discovery session templates","Needs assessment questionnaires","Problem-to-solution mapping tools","Value proposition frameworks"]},{title:"Agent Architecture",description:"Design AI agent architectures tailored to specific industry requirements, balancing capabilities, complexity, and implementation feasibility.",features:["Agent type selection guide","Capability configuration templates","Integration requirement planning","Scalability assessment tools"]},{title:"Monetization Models",description:"Create value-based pricing strategies that align with the impact and complexity of your AI agent solutions across different industries.",features:["Pricing model selection framework","ROI calculation templates","Subscription tier design","Value-based pricing guides"]},{title:"Go-to-Market Strategy",description:"Develop comprehensive strategies for launching, promoting, and scaling your AI agent solutions across target markets.",features:["Channel strategy development","Marketing message frameworks","Sales enablement toolkits","Partnership development guides"]}];return N.jsxs("section",{id:"framework",className:"min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-4",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-12 font-space text-center",children:"Framework Overview"}),N.jsxs("div",{className:"w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12",children:[N.jsxs("div",{className:"relative h-[400px] border border-white/20 rounded flex items-center justify-center overflow-hidden",children:[N.jsx("div",{className:`framework-3d-container ${n?"animate":""}`,children:N.jsxs("div",{className:"framework-rings",children:[N.jsx("div",{className:"ring ring-outer"}),N.jsx("div",{className:"ring ring-middle"}),N.jsx("div",{className:"ring ring-inner"}),a.map((c,u)=>N.jsx("div",{className:`ring-node ${u===s?"active":""}`,style:{transform:`rotate(${u*(360/a.length)}deg) translateX(150px)`},onClick:()=>e(u),children:N.jsx("div",{className:"node-indicator"})},u))]})}),N.jsx("style",{children:`
            .framework-3d-container {
              perspective: 1000px;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 1s ease, transform 1s ease;
            }
            .framework-3d-container.animate {
              opacity: 1;
              transform: translateY(0);
            }
            .framework-rings {
              position: relative;
              width: 300px;
              height: 300px;
              transform-style: preserve-3d;
              animation: rotate 30s linear infinite;
            }
            .ring {
              position: absolute;
              border: 1px solid white;
              border-radius: 50%;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .ring-outer {
              width: 300px;
              height: 300px;
            }
            .ring-middle {
              width: 200px;
              height: 200px;
            }
            .ring-inner {
              width: 100px;
              height: 100px;
            }
            .ring-node {
              position: absolute;
              width: 20px;
              height: 20px;
              top: 50%;
              left: 50%;
              transform-origin: center;
              cursor: pointer;
            }
            .node-indicator {
              width: 12px;
              height: 12px;
              border: 2px solid white;
              border-radius: 50%;
              background: black;
              transition: all 0.3s ease;
            }
            .ring-node.active .node-indicator {
              background: white;
              box-shadow: 0 0 10px white;
              transform: scale(1.2);
            }
            @keyframes rotate {
              0% { transform: rotateY(0) rotateX(20deg); }
              100% { transform: rotateY(360deg) rotateX(20deg); }
            }
          `})]}),N.jsxs("div",{className:"bg-black/50 border border-white/10 p-8 rounded-lg",children:[N.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 font-space",children:a[s].title}),N.jsx("p",{className:"text-lg text-white/80 mb-8",children:a[s].description}),N.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Components"}),N.jsx("ul",{className:"space-y-2",children:a[s].features.map((c,u)=>N.jsxs("li",{className:"flex items-start",children:[N.jsx("div",{className:"w-2 h-2 border border-white mt-2 mr-3"}),N.jsx("span",{className:"text-white/80",children:c})]},u))}),N.jsx("div",{className:"mt-8 pt-8 border-t border-white/10",children:N.jsx("button",{className:"border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-2",onClick:()=>e((s+1)%a.length),children:"Next Component"})})]})]})]})},rE=()=>{const[s,e]=Yt.useState(0),n=[{name:"Healthcare",description:"AI agents for patient monitoring, diagnostic assistance, treatment recommendation, and administrative automation.",metrics:{marketSize:"$45B",growthRate:"24%",adoptionRate:"Medium",regulatoryComplexity:"High"},useCases:["Personalized treatment recommendation agents","Medical imaging analysis assistants","Patient engagement and monitoring bots","Administrative workflow automation"]},{name:"Finance",description:"AI agents for fraud detection, investment advisory, risk assessment, and customer service automation.",metrics:{marketSize:"$62B",growthRate:"28%",adoptionRate:"High",regulatoryComplexity:"High"},useCases:["Algorithmic trading assistants","Personalized financial advisors","Fraud detection and prevention systems","Automated compliance monitoring"]},{name:"Retail",description:"AI agents for inventory management, personalized recommendations, demand forecasting, and customer engagement.",metrics:{marketSize:"$38B",growthRate:"22%",adoptionRate:"Medium-High",regulatoryComplexity:"Low"},useCases:["Personalized shopping assistants","Inventory optimization agents","Dynamic pricing systems","Customer service automation"]},{name:"Manufacturing",description:"AI agents for predictive maintenance, quality control, supply chain optimization, and production scheduling.",metrics:{marketSize:"$52B",growthRate:"19%",adoptionRate:"Medium",regulatoryComplexity:"Medium"},useCases:["Predictive maintenance systems","Quality control automation","Supply chain optimization","Production scheduling assistants"]},{name:"Real Estate",description:"AI agents for property valuation, market analysis, client matching, and transaction management.",metrics:{marketSize:"$18B",growthRate:"17%",adoptionRate:"Low-Medium",regulatoryComplexity:"Medium"},useCases:["Property valuation assistants","Client-property matching agents","Market analysis systems","Transaction management automation"]}];return N.jsxs("section",{id:"industries",className:"min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-4",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-12 font-space text-center",children:"Industry Opportunity Matrix"}),N.jsxs("div",{className:"w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12",children:[N.jsxs("div",{className:"space-y-4",children:[N.jsx("h3",{className:"text-2xl font-bold text-white mb-6 font-space",children:"Select Industry"}),n.map((r,a)=>N.jsx("button",{className:`w-full text-left p-4 border transition-colors duration-300 ${a===s?"border-white bg-white/10 text-white":"border-white/30 hover:border-white/60 text-white/70 hover:text-white/90"}`,onClick:()=>e(a),children:N.jsx("span",{className:"text-lg font-medium",children:r.name})},a))]}),N.jsxs("div",{className:"bg-black/50 border border-white/10 p-8 rounded-lg",children:[N.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 font-space",children:n[s].name}),N.jsx("p",{className:"text-lg text-white/80 mb-8",children:n[s].description}),N.jsx("div",{className:"grid grid-cols-2 gap-4 mb-8",children:Object.entries(n[s].metrics).map(([r,a])=>N.jsxs("div",{className:"border border-white/20 p-4",children:[N.jsx("div",{className:"text-white/60 text-sm mb-1",children:r.replace(/([A-Z])/g," $1").trim()}),N.jsx("div",{className:"text-white text-xl font-bold",children:a})]},r))}),N.jsxs("div",{className:"mb-8",children:[N.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Use Cases"}),N.jsx("ul",{className:"space-y-2",children:n[s].useCases.map((r,a)=>N.jsxs("li",{className:"flex items-start",children:[N.jsx("div",{className:"w-2 h-2 border border-white mt-2 mr-3"}),N.jsx("span",{className:"text-white/80",children:r})]},a))})]}),N.jsxs("div",{className:"relative h-64 border border-white/20 rounded flex items-center justify-center overflow-hidden",children:[N.jsx("div",{className:"industry-3d-container",children:N.jsxs("div",{className:"industry-3d-cube",children:[N.jsx("div",{className:"cube-face cube-face-front"}),N.jsx("div",{className:"cube-face cube-face-back"}),N.jsx("div",{className:"cube-face cube-face-right"}),N.jsx("div",{className:"cube-face cube-face-left"}),N.jsx("div",{className:"cube-face cube-face-top"}),N.jsx("div",{className:"cube-face cube-face-bottom"})]})}),N.jsx("style",{children:`
              .industry-3d-container {
                perspective: 800px;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .industry-3d-cube {
                width: 150px;
                height: 150px;
                position: relative;
                transform-style: preserve-3d;
                animation: rotate 20s infinite linear;
              }
              .cube-face {
                position: absolute;
                width: 150px;
                height: 150px;
                border: 1px solid rgba(255, 255, 255, 0.5);
                background: rgba(255, 255, 255, 0.05);
              }
              .cube-face-front {
                transform: translateZ(75px);
              }
              .cube-face-back {
                transform: rotateY(180deg) translateZ(75px);
              }
              .cube-face-right {
                transform: rotateY(90deg) translateZ(75px);
              }
              .cube-face-left {
                transform: rotateY(-90deg) translateZ(75px);
              }
              .cube-face-top {
                transform: rotateX(90deg) translateZ(75px);
              }
              .cube-face-bottom {
                transform: rotateX(-90deg) translateZ(75px);
              }
              @keyframes rotate {
                0% { transform: rotateX(0) rotateY(0); }
                100% { transform: rotateX(360deg) rotateY(360deg); }
              }
            `})]})]})]})]})},sE=()=>{const[s,e]=Yt.useState(0),n=[{name:"Usage-Based Pricing",description:"Charge clients based on the volume of AI agent interactions, API calls, or processed data. Ideal for services with variable usage patterns.",benefits:["Scales naturally with client usage","Lower barrier to entry for new clients","Transparent cost structure","Predictable unit economics"],industries:["Retail","Customer Service","Marketing","Data Processing"],implementation:"Start with a freemium model offering limited free usage, then charge for additional usage tiers. Consider volume discounts for enterprise clients."},{name:"Outcome-Based Pricing",description:"Align pricing with measurable business outcomes delivered by your AI agents. Charge based on cost savings, revenue generation, or efficiency improvements.",benefits:["Directly ties pricing to delivered value","Creates shared success incentives","Differentiates from commodity AI services","Justifies premium pricing"],industries:["Healthcare","Finance","Manufacturing","Sales"],implementation:"Define clear, measurable KPIs with clients. Establish baseline metrics before deployment, then track improvements. Consider a base fee plus performance bonus structure."},{name:"Subscription-Based Pricing",description:"Offer tiered subscription plans with different feature sets, usage limits, and service levels. Provides predictable recurring revenue.",benefits:["Predictable recurring revenue","Simplified financial forecasting","Encourages long-term client relationships","Easier to communicate and market"],industries:["Education","Real Estate","Legal","Professional Services"],implementation:"Create 3-4 tiers with clear value differentiation. Consider annual discounts to improve cash flow and reduce churn. Add usage caps to protect margins."},{name:"Hybrid Pricing Models",description:"Combine multiple pricing approaches to balance predictability with value-based pricing. For example, base subscription plus outcome-based bonuses.",benefits:["Combines advantages of multiple models","Adaptable to different client segments","Balances guaranteed and performance-based revenue","Provides multiple growth levers"],industries:["Enterprise Software","Logistics","Healthcare","Financial Services"],implementation:"Start with a base subscription fee for access, add usage limits or outcome-based components. Consider industry-specific customizations based on value drivers."}];return N.jsxs("section",{id:"monetization",className:"min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-4",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-12 font-space text-center",children:"Monetization Models"}),N.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[N.jsx("div",{className:"flex flex-wrap justify-center mb-12",children:n.map((r,a)=>N.jsx("button",{className:`px-6 py-3 border-t-2 transition-colors duration-300 ${a===s?"border-white text-white":"border-white/30 text-white/60 hover:text-white/90 hover:border-white/60"}`,onClick:()=>e(a),children:r.name},a))}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[N.jsxs("div",{className:"bg-black/50 border border-white/10 p-8 rounded-lg",children:[N.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 font-space",children:n[s].name}),N.jsx("p",{className:"text-lg text-white/80 mb-8",children:n[s].description}),N.jsxs("div",{className:"mb-8",children:[N.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Benefits"}),N.jsx("ul",{className:"space-y-2",children:n[s].benefits.map((r,a)=>N.jsxs("li",{className:"flex items-start",children:[N.jsx("div",{className:"w-2 h-2 border border-white mt-2 mr-3"}),N.jsx("span",{className:"text-white/80",children:r})]},a))})]}),N.jsxs("div",{className:"mb-8",children:[N.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Best For"}),N.jsx("div",{className:"flex flex-wrap gap-2",children:n[s].industries.map((r,a)=>N.jsx("span",{className:"px-3 py-1 border border-white/30 text-white/80 text-sm",children:r},a))})]}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Implementation Strategy"}),N.jsx("p",{className:"text-white/80",children:n[s].implementation})]})]}),N.jsxs("div",{className:"relative h-[400px] border border-white/20 rounded flex items-center justify-center overflow-hidden",children:[N.jsx("div",{className:"monetization-3d-container",children:N.jsxs("div",{className:"pricing-model",children:[N.jsx("div",{className:"pricing-ring ring-1"}),N.jsx("div",{className:"pricing-ring ring-2"}),N.jsx("div",{className:"pricing-ring ring-3"}),N.jsx("div",{className:"pricing-core"}),N.jsx("div",{className:"pricing-connector"})]})}),N.jsx("style",{children:`
              .monetization-3d-container {
                perspective: 1000px;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .pricing-model {
                position: relative;
                width: 300px;
                height: 300px;
                transform-style: preserve-3d;
                animation: float 6s ease-in-out infinite;
              }
              .pricing-ring {
                position: absolute;
                border: 2px solid white;
                border-radius: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
              .ring-1 {
                width: 280px;
                height: 280px;
                animation: rotate-1 20s linear infinite;
              }
              .ring-2 {
                width: 200px;
                height: 200px;
                animation: rotate-2 15s linear infinite;
              }
              .ring-3 {
                width: 120px;
                height: 120px;
                animation: rotate-3 10s linear infinite;
              }
              .pricing-core {
                position: absolute;
                width: 60px;
                height: 60px;
                border: 2px solid white;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
              }
              .pricing-connector {
                position: absolute;
                width: 2px;
                height: 140px;
                background: white;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: pulse 2s ease-in-out infinite;
              }
              @keyframes rotate-1 {
                0% { transform: translate(-50%, -50%) rotateZ(0deg); }
                100% { transform: translate(-50%, -50%) rotateZ(360deg); }
              }
              @keyframes rotate-2 {
                0% { transform: translate(-50%, -50%) rotateZ(0deg) rotateY(60deg); }
                100% { transform: translate(-50%, -50%) rotateZ(360deg) rotateY(60deg); }
              }
              @keyframes rotate-3 {
                0% { transform: translate(-50%, -50%) rotateZ(0deg) rotateX(60deg); }
                100% { transform: translate(-50%, -50%) rotateZ(360deg) rotateX(60deg); }
              }
              @keyframes float {
                0%, 100% { transform: translateY(0) rotateX(10deg); }
                50% { transform: translateY(-20px) rotateX(20deg); }
              }
              @keyframes pulse {
                0%, 100% { opacity: 0.5; }
                50% { opacity: 1; }
              }
            `})]})]})]})]})},oE=()=>{const[s,e]=Yt.useState(0),n=[{name:"Market Positioning",description:"Establish your AI agent's unique value proposition and competitive differentiation in the market.",steps:["Identify your target market segments and their specific pain points","Analyze competitive landscape and identify gaps or opportunities","Develop clear messaging that highlights your AI agent's unique benefits","Create positioning statements for each industry vertical"],keyMetrics:["Brand awareness","Competitive win rate","Market share","Positioning clarity score"]},{name:"Client Acquisition",description:"Develop multi-channel strategies to attract and convert potential clients for your AI agent solutions.",steps:["Build industry-specific landing pages with clear value propositions","Implement content marketing focused on AI agent use cases and ROI","Develop demonstration videos and interactive product tours","Create referral programs and partnership networks"],keyMetrics:["Customer acquisition cost (CAC)","Conversion rate","Lead quality score","Channel effectiveness"]},{name:"Proof of Concept",description:"Create structured approaches for demonstrating AI agent value through limited-scope implementations.",steps:["Develop standardized POC frameworks for each industry","Create clear success metrics and evaluation criteria","Build showcase examples with documented results","Establish POC-to-production migration pathways"],keyMetrics:["POC conversion rate","Time to value","Success criteria achievement","Client satisfaction score"]},{name:"Scaling Strategy",description:"Expand your AI agent business across clients, industries, and geographies with systematic approaches.",steps:["Develop client expansion playbooks (land and expand)","Create cross-industry adaptation frameworks","Build geographic expansion models","Establish strategic partnership networks"],keyMetrics:["Client retention rate","Expansion revenue","Cross-industry adoption","Partnership revenue"]}];return N.jsxs("section",{id:"go-to-market",className:"min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-4",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-12 font-space text-center",children:"Go-to-Market Strategy"}),N.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[N.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-12",children:n.map((r,a)=>N.jsx("button",{className:`p-4 border transition-colors duration-300 ${a===s?"border-white bg-white/10 text-white":"border-white/30 hover:border-white/60 text-white/70 hover:text-white/90"}`,onClick:()=>e(a),children:N.jsx("span",{className:"text-lg font-medium",children:r.name})},a))}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[N.jsxs("div",{className:"bg-black/50 border border-white/10 p-8 rounded-lg",children:[N.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 font-space",children:n[s].name}),N.jsx("p",{className:"text-lg text-white/80 mb-8",children:n[s].description}),N.jsxs("div",{className:"mb-8",children:[N.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Implementation Steps"}),N.jsx("ol",{className:"space-y-4",children:n[s].steps.map((r,a)=>N.jsxs("li",{className:"flex items-start",children:[N.jsx("div",{className:"flex-shrink-0 w-6 h-6 border border-white flex items-center justify-center mr-3",children:N.jsx("span",{className:"text-white text-sm",children:a+1})}),N.jsx("span",{className:"text-white/80",children:r})]},a))})]}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Metrics"}),N.jsx("div",{className:"grid grid-cols-2 gap-4",children:n[s].keyMetrics.map((r,a)=>N.jsx("div",{className:"border border-white/20 p-3",children:N.jsx("span",{className:"text-white/80",children:r})},a))})]})]}),N.jsxs("div",{className:"relative h-[400px] border border-white/20 rounded flex items-center justify-center overflow-hidden",children:[N.jsx("div",{className:"gtm-3d-container",children:N.jsxs("div",{className:"gtm-3d-model",children:[N.jsxs("div",{className:"gtm-pyramid",children:[N.jsx("div",{className:"pyramid-face pyramid-face-front"}),N.jsx("div",{className:"pyramid-face pyramid-face-right"}),N.jsx("div",{className:"pyramid-face pyramid-face-left"}),N.jsx("div",{className:"pyramid-face pyramid-face-bottom"})]}),N.jsx("div",{className:"gtm-nodes",children:[...Array(5)].map((r,a)=>N.jsx("div",{className:"gtm-node",style:{animationDelay:`${a*.5}s`,left:`${20+a*15}%`,top:`${30+a%3*15}%`}},a))}),N.jsx("div",{className:"gtm-connections",children:[...Array(4)].map((r,a)=>N.jsx("div",{className:"gtm-connection",style:{width:`${100+a*20}px`,transform:`rotate(${a*45}deg)`,animationDelay:`${a*.3}s`}},a))})]})}),N.jsx("style",{children:`
              .gtm-3d-container {
                perspective: 1000px;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .gtm-3d-model {
                position: relative;
                width: 300px;
                height: 300px;
                transform-style: preserve-3d;
                animation: float 8s ease-in-out infinite;
              }
              .gtm-pyramid {
                position: absolute;
                width: 200px;
                height: 200px;
                transform-style: preserve-3d;
                animation: rotate 20s linear infinite;
              }
              .pyramid-face {
                position: absolute;
                border: 1px solid rgba(255, 255, 255, 0.5);
                background: rgba(255, 255, 255, 0.05);
              }
              .pyramid-face-front {
                width: 200px;
                height: 200px;
                transform: translateZ(100px);
                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
              }
              .pyramid-face-right {
                width: 200px;
                height: 200px;
                transform: rotateY(90deg) translateZ(100px);
                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
              }
              .pyramid-face-left {
                width: 200px;
                height: 200px;
                transform: rotateY(-90deg) translateZ(100px);
                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
              }
              .pyramid-face-bottom {
                width: 200px;
                height: 200px;
                transform: rotateX(90deg) translateZ(100px);
              }
              .gtm-node {
                position: absolute;
                width: 10px;
                height: 10px;
                background: white;
                border-radius: 50%;
                animation: pulse 2s ease-in-out infinite;
              }
              .gtm-connection {
                position: absolute;
                height: 1px;
                background: white;
                top: 50%;
                left: 50%;
                transform-origin: left center;
                animation: fade 3s ease-in-out infinite;
              }
              @keyframes rotate {
                0% { transform: rotateY(0) rotateX(0); }
                100% { transform: rotateY(360deg) rotateX(360deg); }
              }
              @keyframes float {
                0%, 100% { transform: translateY(0) rotateX(10deg); }
                50% { transform: translateY(-20px) rotateX(20deg); }
              }
              @keyframes pulse {
                0%, 100% { opacity: 0.5; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.5); }
              }
              @keyframes fade {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.8; }
              }
            `})]})]})]})]})},aE=()=>{const[s,e]=Yt.useState(0),n=[{name:"Phase 1: Discovery & Planning",description:"Establish the foundation for your AI agent business with thorough research and strategic planning.",activities:["Conduct industry and market analysis to identify high-potential opportunities","Define target client personas and their specific pain points","Develop initial AI agent architecture concepts and capabilities","Create preliminary business model and monetization strategy","Establish success metrics and KPIs for each business objective"],timeline:"1-2 months",budget:"10-15% of total investment",deliverables:["Market opportunity assessment","Client persona profiles","Initial architecture blueprint","Business model canvas"]},{name:"Phase 2: Development & Testing",description:"Build and refine your AI agent solutions with iterative development and rigorous testing.",activities:["Develop minimum viable product (MVP) versions of your AI agents","Conduct alpha testing with internal stakeholders","Refine agent capabilities based on feedback","Implement security and compliance measures","Prepare documentation and training materials"],timeline:"2-4 months",budget:"30-40% of total investment",deliverables:["MVP AI agent implementations","Testing reports","Security compliance documentation","User guides and training materials"]},{name:"Phase 3: Pilot Deployment",description:"Validate your AI agent solutions with real clients in controlled environments to gather feedback and prove value.",activities:["Select pilot clients across target industries","Deploy AI agents in limited-scope environments","Collect performance data and user feedback","Measure ROI and business impact","Refine solutions based on real-world usage"],timeline:"2-3 months",budget:"15-20% of total investment",deliverables:["Pilot implementation reports","ROI analysis","Client testimonials","Product refinement roadmap"]},{name:"Phase 4: Market Launch",description:"Introduce your AI agent solutions to the broader market with comprehensive go-to-market activities.",activities:["Finalize pricing and packaging strategies","Develop marketing and sales collateral","Train sales and customer success teams","Launch targeted marketing campaigns","Implement client onboarding processes"],timeline:"1-2 months",budget:"15-20% of total investment",deliverables:["Marketing and sales materials","Pricing guides","Sales enablement toolkit","Client onboarding playbook"]},{name:"Phase 5: Scale & Optimize",description:"Expand your AI agent business across clients, industries, and geographies while continuously improving performance.",activities:["Implement client expansion strategies","Adapt solutions for new industries or use cases","Optimize agent performance and capabilities","Develop strategic partnerships and integrations","Establish continuous improvement processes"],timeline:"Ongoing",budget:"10-15% of total investment",deliverables:["Expansion playbooks","Performance optimization reports","Partnership agreements","Product roadmap updates"]}];return N.jsxs("section",{id:"implementation",className:"min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-4",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-12 font-space text-center",children:"Implementation Roadmap"}),N.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[N.jsxs("div",{className:"flex justify-between mb-16 relative",children:[N.jsx("div",{className:"absolute top-1/2 left-0 w-full h-px bg-white/30 -translate-y-1/2 z-0"}),N.jsx("div",{className:"absolute top-1/2 left-0 h-px bg-white z-0 transition-all duration-500",style:{width:`${s/(n.length-1)*100}%`}}),n.map((r,a)=>N.jsxs("button",{className:`w-8 h-8 rounded-full border-2 z-10 transition-colors duration-300 flex items-center justify-center relative ${a<=s?"bg-white border-white":"bg-black border-white/50"}`,onClick:()=>e(a),children:[N.jsx("span",{className:`text-xs font-bold ${a<=s?"text-black":"text-white"}`,children:a+1}),N.jsxs("span",{className:"absolute -bottom-8 text-white text-sm whitespace-nowrap max-w-[100px] text-center",children:["Phase ",a+1]})]},a))]}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[N.jsxs("div",{className:"bg-black/50 border border-white/10 p-8 rounded-lg",children:[N.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 font-space",children:n[s].name}),N.jsx("p",{className:"text-lg text-white/80 mb-8",children:n[s].description}),N.jsxs("div",{className:"mb-8",children:[N.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Activities"}),N.jsx("ul",{className:"space-y-2",children:n[s].activities.map((r,a)=>N.jsxs("li",{className:"flex items-start",children:[N.jsx("div",{className:"w-2 h-2 border border-white mt-2 mr-3"}),N.jsx("span",{className:"text-white/80",children:r})]},a))})]}),N.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[N.jsxs("div",{className:"border border-white/20 p-4",children:[N.jsx("div",{className:"text-white/60 text-sm mb-1",children:"Timeline"}),N.jsx("div",{className:"text-white text-xl font-bold",children:n[s].timeline})]}),N.jsxs("div",{className:"border border-white/20 p-4",children:[N.jsx("div",{className:"text-white/60 text-sm mb-1",children:"Budget Allocation"}),N.jsx("div",{className:"text-white text-xl font-bold",children:n[s].budget})]})]}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Deliverables"}),N.jsx("div",{className:"grid grid-cols-2 gap-4",children:n[s].deliverables.map((r,a)=>N.jsx("div",{className:"border border-white/20 p-3",children:N.jsx("span",{className:"text-white/80",children:r})},a))})]})]}),N.jsxs("div",{className:"relative h-[400px] border border-white/20 rounded flex items-center justify-center overflow-hidden",children:[N.jsx("div",{className:"implementation-3d-container",children:N.jsxs("div",{className:"implementation-3d-model",children:[N.jsx("div",{className:"timeline-track"}),[...Array(5)].map((r,a)=>N.jsxs("div",{className:`timeline-node ${a===s?"active":""} ${a<s?"completed":""}`,style:{left:`${a*25}%`},children:[N.jsx("div",{className:"node-indicator"}),N.jsx("div",{className:"node-connector"})]},a)),N.jsx("div",{className:"timeline-progress",style:{width:`${s*25}%`}}),N.jsx("div",{className:"floating-elements",children:[...Array(8)].map((r,a)=>N.jsx("div",{className:"floating-element",style:{top:`${20+a%4*15}%`,left:`${10+a%5*20}%`,width:`${10+a%3*5}px`,height:`${10+a%3*5}px`,animationDelay:`${a*.5}s`}},a))})]})}),N.jsx("style",{children:`
              .implementation-3d-container {
                perspective: 1000px;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .implementation-3d-model {
                position: relative;
                width: 100%;
                height: 200px;
                transform-style: preserve-3d;
                transform: rotateX(30deg);
              }
              .timeline-track {
                position: absolute;
                width: 80%;
                height: 2px;
                background: rgba(255, 255, 255, 0.3);
                top: 50%;
                left: 10%;
              }
              .timeline-progress {
                position: absolute;
                height: 2px;
                background: white;
                top: 50%;
                left: 10%;
                transition: width 0.5s ease;
              }
              .timeline-node {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
              }
              .node-indicator {
                width: 12px;
                height: 12px;
                border: 2px solid rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                background: black;
                transform: translateY(-50%);
              }
              .timeline-node.active .node-indicator {
                background: white;
                border-color: white;
                box-shadow: 0 0 10px white;
              }
              .timeline-node.completed .node-indicator {
                background: white;
                border-color: white;
              }
              .node-connector {
                position: absolute;
                width: 2px;
                height: 30px;
                background: rgba(255, 255, 255, 0.3);
                top: 0;
                left: 50%;
                transform: translateX(-50%);
              }
              .timeline-node.active .node-connector {
                background: white;
              }
              .floating-elements {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
              }
              .floating-element {
                position: absolute;
                border: 1px solid white;
                opacity: 0.5;
                animation: float 4s ease-in-out infinite;
              }
              @keyframes float {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
              }
            `})]})]})]})]})},lE=()=>{const[s,e]=Yt.useState(!1),[n,r]=Yt.useState([{sender:"bot",text:"Hello! I'm your AI Agent Framework assistant. How can I help you today?"}]),[a,c]=Yt.useState(""),[u,f]=Yt.useState(!1),p=()=>{e(!s)},m=v=>{c(v.target.value)},_=v=>{if(v.preventDefault(),!a.trim())return;const x=[...n,{sender:"user",text:a}];r(x),c(""),f(!0),setTimeout(()=>{const S={framework:"The AI Agent Entrepreneurship Framework provides a comprehensive approach to building, monetizing, and scaling AI agent businesses that solve real-world problems across industries.",industries:"Our framework covers multiple industries including Healthcare, Finance, Retail, Manufacturing, and Real Estate, each with specific AI agent applications and opportunities.",monetization:"We offer several monetization models including Usage-Based, Outcome-Based, Subscription-Based, and Hybrid approaches, each optimized for different business scenarios.",implementation:"The implementation roadmap consists of 5 phases: Discovery & Planning, Development & Testing, Pilot Deployment, Market Launch, and Scale & Optimize.",contact:"You can reach our team at contact@aiagentframework.com or schedule a consultation through the website.",pricing:"Pricing varies based on industry, agent complexity, and implementation scope. We recommend scheduling a consultation to discuss your specific needs.",demo:"We offer personalized demos of our AI agent solutions. Please schedule a consultation through the website to arrange a demonstration.",help:"I can provide information about our framework, industries we serve, monetization models, implementation process, or answer other questions about AI agents."};let w="Thank you for your message. Our team can provide more detailed information about the AI Agent Entrepreneurship Framework. Is there something specific you'd like to know about?";const T=a.toLowerCase();for(const[y,g]of Object.entries(S))if(T.includes(y)){w=g;break}r([...x,{sender:"bot",text:w}]),f(!1)},1500)};return Yt.useEffect(()=>{const v=document.getElementById("chat-messages");v&&(v.scrollTop=v.scrollHeight)},[n]),N.jsxs("div",{className:"fixed bottom-6 right-6 z-50",children:[N.jsx("button",{onClick:p,className:"w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-white/90 transition-colors",children:s?N.jsx("span",{className:"text-2xl",children:"×"}):N.jsxs("div",{className:"w-6 h-6 relative",children:[N.jsx("div",{className:"absolute top-0 left-0 w-6 h-6 border-2 border-black"}),N.jsx("div",{className:"absolute top-1 left-1 w-4 h-4 bg-black"})]})}),s&&N.jsxs("div",{className:"absolute bottom-16 right-0 w-80 md:w-96 bg-black border border-white/20 rounded-lg shadow-xl overflow-hidden",children:[N.jsx("div",{className:"bg-white/10 p-4 border-b border-white/10",children:N.jsxs("div",{className:"flex items-center",children:[N.jsxs("div",{className:"w-8 h-8 mr-3 relative",children:[N.jsx("div",{className:"absolute top-0 left-0 w-8 h-8 border-2 border-white"}),N.jsx("div",{className:"absolute top-1 left-1 w-6 h-6 bg-white/30"})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"text-white font-bold",children:"AI Agent Assistant"}),N.jsx("p",{className:"text-white/60 text-sm",children:"Ask me about the framework"})]})]})}),N.jsxs("div",{id:"chat-messages",className:"p-4 h-80 overflow-y-auto",children:[n.map((v,x)=>N.jsx("div",{className:`mb-4 flex ${v.sender==="user"?"justify-end":"justify-start"}`,children:N.jsx("div",{className:`max-w-[80%] p-3 rounded-lg ${v.sender==="user"?"bg-white text-black":"bg-white/10 text-white border border-white/20"}`,children:v.text})},x)),u&&N.jsx("div",{className:"mb-4 flex justify-start",children:N.jsx("div",{className:"bg-white/10 text-white border border-white/20 p-3 rounded-lg",children:N.jsxs("div",{className:"flex space-x-2",children:[N.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-bounce",style:{animationDelay:"0ms"}}),N.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-bounce",style:{animationDelay:"300ms"}}),N.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-bounce",style:{animationDelay:"600ms"}})]})})})]}),N.jsx("form",{onSubmit:_,className:"p-4 border-t border-white/10",children:N.jsxs("div",{className:"flex",children:[N.jsx("input",{type:"text",value:a,onChange:m,placeholder:"Type your message...",className:"flex-1 bg-white/5 border border-white/20 text-white p-2 rounded-l-lg focus:outline-none focus:border-white/50"}),N.jsx("button",{type:"submit",className:"bg-white text-black px-4 rounded-r-lg hover:bg-white/90 transition-colors",children:"Send"})]})})]})]})};function cE(){return N.jsxs("div",{className:"bg-black text-white min-h-screen",children:[N.jsx(X0,{}),N.jsxs("main",{children:[N.jsx(nE,{}),N.jsx(iE,{}),N.jsx(rE,{}),N.jsx(sE,{}),N.jsx(oE,{}),N.jsx(aE,{})]}),N.jsx("footer",{className:"bg-black border-t border-white/10 py-12 px-4",children:N.jsxs("div",{className:"max-w-7xl mx-auto",children:[N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[N.jsxs("div",{children:[N.jsx("h3",{className:"text-white text-xl font-bold mb-4 font-space",children:"AI Agent Entrepreneurship Framework"}),N.jsx("p",{className:"text-white/70",children:"A comprehensive approach to building, monetizing, and scaling AI agent businesses."})]}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-white text-lg font-bold mb-4 font-space",children:"Framework Sections"}),N.jsx("ul",{className:"space-y-2",children:["Framework","Industries","Monetization","Go-to-Market","Implementation"].map(s=>N.jsx("li",{children:N.jsx("a",{href:`#${s.toLowerCase().replace(" ","-")}`,className:"text-white/70 hover:text-white transition-colors",children:s})},s))})]}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-white text-lg font-bold mb-4 font-space",children:"Resources"}),N.jsx("ul",{className:"space-y-2",children:["Documentation","Case Studies","Implementation Guide","Contact"].map(s=>N.jsx("li",{children:N.jsx("a",{href:"#",className:"text-white/70 hover:text-white transition-colors",children:s})},s))})]})]}),N.jsx("div",{className:"h-px w-full bg-white/10 my-8"}),N.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[N.jsxs("p",{className:"text-white/50 text-sm",children:["© ",new Date().getFullYear()," AI Agent Entrepreneurship Framework. All rights reserved."]}),N.jsx("div",{className:"flex space-x-4 mt-4 md:mt-0",children:["Twitter","LinkedIn","GitHub"].map(s=>N.jsx("a",{href:"#",className:"text-white/50 hover:text-white transition-colors",children:s},s))})]})]})}),N.jsx(lE,{})]})}j0.createRoot(document.getElementById("root")).render(N.jsx(k0.StrictMode,{children:N.jsx(cE,{})}));
