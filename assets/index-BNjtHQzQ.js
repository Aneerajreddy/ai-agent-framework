(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();function Tm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var pp={exports:{}},ws={},mp={exports:{}},ut={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var gp;function Dv(){if(gp)return ut;gp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(U,$,Me){this.props=U,this.context=$,this.refs=T,this.updater=Me||b}y.prototype.isReactComponent={},y.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(U,$,Me){this.props=U,this.context=$,this.refs=T,this.updater=Me||b}var I=D.prototype=new g;I.constructor=D,M(I,y.prototype),I.isPureReactComponent=!0;var A=Array.isArray,X=Object.prototype.hasOwnProperty,O={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function K(U,$,Me){var Y,ue={},be=null,_e=null;if($!=null)for(Y in $.ref!==void 0&&(_e=$.ref),$.key!==void 0&&(be=""+$.key),$)X.call($,Y)&&!z.hasOwnProperty(Y)&&(ue[Y]=$[Y]);var Te=arguments.length-2;if(Te===1)ue.children=Me;else if(1<Te){for(var De=Array(Te),Ze=0;Ze<Te;Ze++)De[Ze]=arguments[Ze+2];ue.children=De}if(U&&U.defaultProps)for(Y in Te=U.defaultProps,Te)ue[Y]===void 0&&(ue[Y]=Te[Y]);return{$$typeof:i,type:U,key:be,ref:_e,props:ue,_owner:O.current}}function C(U,$){return{$$typeof:i,type:U.type,key:$,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===i}function H(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Me){return $[Me]})}var se=/\/+/g;function ae(U,$){return typeof U=="object"&&U!==null&&U.key!=null?H(""+U.key):$.toString(36)}function ce(U,$,Me,Y,ue){var be=typeof U;(be==="undefined"||be==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(be){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case i:case e:_e=!0}}if(_e)return _e=U,ue=ue(_e),U=Y===""?"."+ae(_e,0):Y,A(ue)?(Me="",U!=null&&(Me=U.replace(se,"$&/")+"/"),ce(ue,$,Me,"",function(Ze){return Ze})):ue!=null&&(R(ue)&&(ue=C(ue,Me+(!ue.key||_e&&_e.key===ue.key?"":(""+ue.key).replace(se,"$&/")+"/")+U)),$.push(ue)),1;if(_e=0,Y=Y===""?".":Y+":",A(U))for(var Te=0;Te<U.length;Te++){be=U[Te];var De=Y+ae(be,Te);_e+=ce(be,$,Me,De,ue)}else if(De=_(U),typeof De=="function")for(U=De.call(U),Te=0;!(be=U.next()).done;)be=be.value,De=Y+ae(be,Te++),_e+=ce(be,$,Me,De,ue);else if(be==="object")throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return _e}function me(U,$,Me){if(U==null)return U;var Y=[],ue=0;return ce(U,Y,"","",function(be){return $.call(Me,be,ue++)}),Y}function le(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(Me){(U._status===0||U._status===-1)&&(U._status=1,U._result=Me)},function(Me){(U._status===0||U._status===-1)&&(U._status=2,U._result=Me)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var fe={current:null},k={transition:null},oe={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:k,ReactCurrentOwner:O};function j(){throw Error("act(...) is not supported in production builds of React.")}return ut.Children={map:me,forEach:function(U,$,Me){me(U,function(){$.apply(this,arguments)},Me)},count:function(U){var $=0;return me(U,function(){$++}),$},toArray:function(U){return me(U,function($){return $})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ut.Component=y,ut.Fragment=r,ut.Profiler=o,ut.PureComponent=D,ut.StrictMode=a,ut.Suspense=p,ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,ut.act=j,ut.cloneElement=function(U,$,Me){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Y=M({},U.props),ue=U.key,be=U.ref,_e=U._owner;if($!=null){if($.ref!==void 0&&(be=$.ref,_e=O.current),$.key!==void 0&&(ue=""+$.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(De in $)X.call($,De)&&!z.hasOwnProperty(De)&&(Y[De]=$[De]===void 0&&Te!==void 0?Te[De]:$[De])}var De=arguments.length-2;if(De===1)Y.children=Me;else if(1<De){Te=Array(De);for(var Ze=0;Ze<De;Ze++)Te[Ze]=arguments[Ze+2];Y.children=Te}return{$$typeof:i,type:U.type,key:ue,ref:be,props:Y,_owner:_e}},ut.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},ut.createElement=K,ut.createFactory=function(U){var $=K.bind(null,U);return $.type=U,$},ut.createRef=function(){return{current:null}},ut.forwardRef=function(U){return{$$typeof:h,render:U}},ut.isValidElement=R,ut.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:le}},ut.memo=function(U,$){return{$$typeof:m,type:U,compare:$===void 0?null:$}},ut.startTransition=function(U){var $=k.transition;k.transition={};try{U()}finally{k.transition=$}},ut.unstable_act=j,ut.useCallback=function(U,$){return fe.current.useCallback(U,$)},ut.useContext=function(U){return fe.current.useContext(U)},ut.useDebugValue=function(){},ut.useDeferredValue=function(U){return fe.current.useDeferredValue(U)},ut.useEffect=function(U,$){return fe.current.useEffect(U,$)},ut.useId=function(){return fe.current.useId()},ut.useImperativeHandle=function(U,$,Me){return fe.current.useImperativeHandle(U,$,Me)},ut.useInsertionEffect=function(U,$){return fe.current.useInsertionEffect(U,$)},ut.useLayoutEffect=function(U,$){return fe.current.useLayoutEffect(U,$)},ut.useMemo=function(U,$){return fe.current.useMemo(U,$)},ut.useReducer=function(U,$,Me){return fe.current.useReducer(U,$,Me)},ut.useRef=function(U){return fe.current.useRef(U)},ut.useState=function(U){return fe.current.useState(U)},ut.useSyncExternalStore=function(U,$,Me){return fe.current.useSyncExternalStore(U,$,Me)},ut.useTransition=function(){return fe.current.useTransition()},ut.version="18.3.1",ut}var vp;function Ud(){return vp||(vp=1,mp.exports=Dv()),mp.exports}/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var _p;function Ov(){if(_p)return ws;_p=1;var i=Ud(),e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,m){var v,x={},_=null,b=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(b=p.ref);for(v in p)a.call(p,v)&&!c.hasOwnProperty(v)&&(x[v]=p[v]);if(h&&h.defaultProps)for(v in p=h.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:h,key:_,ref:b,props:x,_owner:o.current}}return ws.Fragment=r,ws.jsx=d,ws.jsxs=d,ws}var xp;function kv(){return xp||(xp=1,pp.exports=Ov()),pp.exports}var P=kv(),Xt=Ud();const Fv=Tm(Xt);var Ko={},fu={exports:{}},Ar={},yp={exports:{}},bp={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Sp;function zv(){return Sp||(Sp=1,function(i){function e(k,oe){var j=k.length;k.push(oe);e:for(;0<j;){var U=j-1>>>1,$=k[U];if(0<o($,oe))k[U]=oe,k[j]=$,j=U;else break e}}function r(k){return k.length===0?null:k[0]}function a(k){if(k.length===0)return null;var oe=k[0],j=k.pop();if(j!==oe){k[0]=j;e:for(var U=0,$=k.length,Me=$>>>1;U<Me;){var Y=2*(U+1)-1,ue=k[Y],be=Y+1,_e=k[be];if(0>o(ue,j))be<$&&0>o(_e,ue)?(k[U]=_e,k[be]=j,U=be):(k[U]=ue,k[Y]=j,U=Y);else if(be<$&&0>o(_e,j))k[U]=_e,k[be]=j,U=be;else break e}}return oe}function o(k,oe){var j=k.sortIndex-oe.sortIndex;return j!==0?j:k.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();i.unstable_now=function(){return d.now()-h}}var p=[],m=[],v=1,x=null,_=3,b=!1,M=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(k){for(var oe=r(m);oe!==null;){if(oe.callback===null)a(m);else if(oe.startTime<=k)a(m),oe.sortIndex=oe.expirationTime,e(p,oe);else break;oe=r(m)}}function A(k){if(T=!1,I(k),!M)if(r(p)!==null)M=!0,le(X);else{var oe=r(m);oe!==null&&fe(A,oe.startTime-k)}}function X(k,oe){M=!1,T&&(T=!1,g(K),K=-1),b=!0;var j=_;try{for(I(oe),x=r(p);x!==null&&(!(x.expirationTime>oe)||k&&!H());){var U=x.callback;if(typeof U=="function"){x.callback=null,_=x.priorityLevel;var $=U(x.expirationTime<=oe);oe=i.unstable_now(),typeof $=="function"?x.callback=$:x===r(p)&&a(p),I(oe)}else a(p);x=r(p)}if(x!==null)var Me=!0;else{var Y=r(m);Y!==null&&fe(A,Y.startTime-oe),Me=!1}return Me}finally{x=null,_=j,b=!1}}var O=!1,z=null,K=-1,C=5,R=-1;function H(){return!(i.unstable_now()-R<C)}function se(){if(z!==null){var k=i.unstable_now();R=k;var oe=!0;try{oe=z(!0,k)}finally{oe?ae():(O=!1,z=null)}}else O=!1}var ae;if(typeof D=="function")ae=function(){D(se)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,me=ce.port2;ce.port1.onmessage=se,ae=function(){me.postMessage(null)}}else ae=function(){y(se,0)};function le(k){z=k,O||(O=!0,ae())}function fe(k,oe){K=y(function(){k(i.unstable_now())},oe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(k){k.callback=null},i.unstable_continueExecution=function(){M||b||(M=!0,le(X))},i.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return r(p)},i.unstable_next=function(k){switch(_){case 1:case 2:case 3:var oe=3;break;default:oe=_}var j=_;_=oe;try{return k()}finally{_=j}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(k,oe){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var j=_;_=k;try{return oe()}finally{_=j}},i.unstable_scheduleCallback=function(k,oe,j){var U=i.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?U+j:U):j=U,k){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=j+$,k={id:v++,callback:oe,priorityLevel:k,startTime:j,expirationTime:$,sortIndex:-1},j>U?(k.sortIndex=j,e(m,k),r(p)===null&&k===r(m)&&(T?(g(K),K=-1):T=!0,fe(A,j-U))):(k.sortIndex=$,e(p,k),M||b||(M=!0,le(X))),k},i.unstable_shouldYield=H,i.unstable_wrapCallback=function(k){var oe=_;return function(){var j=_;_=oe;try{return k.apply(this,arguments)}finally{_=j}}}}(bp)),bp}var wp;function Bv(){return wp||(wp=1,yp.exports=zv()),yp.exports}/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Mp;function Hv(){if(Mp)return Ar;Mp=1;var i=Ud(),e=Bv();function r(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,o={};function c(t,n){d(t,n),d(t+"Capture",n)}function d(t,n){for(o[t]=n,t=0;t<n.length;t++)a.add(n[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function _(t){return p.call(x,t)?!0:p.call(v,t)?!1:m.test(t)?x[t]=!0:(v[t]=!0,!1)}function b(t,n,s,l){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,n,s,l){if(n===null||typeof n>"u"||b(t,n,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function T(t,n,s,l,u,f,S){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=s,this.propertyName=t,this.type=n,this.sanitizeURL=f,this.removeEmptyString=S}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];y[n]=new T(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(g,D);y[n]=new T(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(g,D);y[n]=new T(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(g,D);y[n]=new T(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function I(t,n,s,l){var u=y.hasOwnProperty(n)?y[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(M(n,s,u,l)&&(s=null),l||u===null?_(n)&&(s===null?t.removeAttribute(n):t.setAttribute(n,""+s)):u.mustUseProperty?t[u.propertyName]=s===null?u.type===3?!1:"":s:(n=u.attributeName,l=u.attributeNamespace,s===null?t.removeAttribute(n):(u=u.type,s=u===3||u===4&&s===!0?"":""+s,l?t.setAttributeNS(l,n,s):t.setAttribute(n,s))))}var A=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),O=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),k=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var j=Object.assign,U;function $(t){if(U===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);U=n&&n[1]||""}return`
`+U+t}var Me=!1;function Y(t,n){if(!t||Me)return"";Me=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(re){var l=re}Reflect.construct(t,[],n)}else{try{n.call()}catch(re){l=re}t.call(n.prototype)}else{try{throw Error()}catch(re){l=re}t()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var u=re.stack.split(`
`),f=l.stack.split(`
`),S=u.length-1,L=f.length-1;1<=S&&0<=L&&u[S]!==f[L];)L--;for(;1<=S&&0<=L;S--,L--)if(u[S]!==f[L]){if(S!==1||L!==1)do if(S--,L--,0>L||u[S]!==f[L]){var F=`
`+u[S].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=S&&0<=L);break}}}finally{Me=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?$(t):""}function ue(t){switch(t.tag){case 5:return $(t.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return t=Y(t.type,!1),t;case 11:return t=Y(t.type.render,!1),t;case 1:return t=Y(t.type,!0),t;default:return""}}function be(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case O:return"Portal";case C:return"Profiler";case K:return"StrictMode";case ae:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case se:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return n=t.displayName||null,n!==null?n:be(t.type)||"Memo";case le:n=t._payload,t=t._init;try{return be(t(n))}catch{}}return null}function _e(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(n);case 8:return n===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t){var n=De(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){l=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(S){l=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Et(t){t._valueTracker||(t._valueTracker=Ze(t))}function ht(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=De(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Nt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function B(t,n){var s=n.checked;return j({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function pr(t,n){var s=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;s=Te(n.value!=null?n.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ft(t,n){n=n.checked,n!=null&&I(t,"checked",n,!1)}function lt(t,n){ft(t,n);var s=Te(n.value),l=n.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Mt(t,n.type,s):n.hasOwnProperty("defaultValue")&&Mt(t,n.type,Te(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function We(t,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,s||n===t.value||(t.value=n),t.defaultValue=n}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Mt(t,n,s){(n!=="number"||Nt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Ve=Array.isArray;function N(t,n,s,l){if(t=t.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=n.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Te(s),n=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function w(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return j({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ee(t,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(r(92));if(Ve(s)){if(1<s.length)throw Error(r(93));s=s[0]}n=s}n==null&&(n=""),s=n}t._wrapperState={initialValue:Te(s)}}function he(t,n){var s=Te(n.value),l=Te(n.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),n.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ye(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?de(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Je=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,l,u){MSApp.execUnsafeLocalFunction(function(){return t(n,s,l,u)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function Ye(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){ke.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Se[n]=Se[t]})});function et(t,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||Se.hasOwnProperty(t)&&Se[t]?(""+n).trim():n+"px"}function tt(t,n){t=t.style;for(var s in n)if(n.hasOwnProperty(s)){var l=s.indexOf("--")===0,u=et(s,n[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,u):t[s]=u}}var Fe=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,n){if(n){if(Fe[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function at(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,ie=null,pe=null;function Pe(t){if(t=ls(t)){if(typeof Ce!="function")throw Error(r(280));var n=t.stateNode;n&&(n=co(n),Ce(t.stateNode,t.type,n))}}function Re(t){ie?pe?pe.push(t):pe=[t]:ie=t}function dt(){if(ie){var t=ie,n=pe;if(pe=ie=null,Pe(t),n)for(t=0;t<n.length;t++)Pe(n[t])}}function Lt(t,n){return t(n)}function qt(){}var gt=!1;function Sr(t,n,s){if(gt)return t(n,s);gt=!0;try{return Lt(t,n,s)}finally{gt=!1,(ie!==null||pe!==null)&&(qt(),dt())}}function mr(t,n){var s=t.stateNode;if(s===null)return null;var l=co(s);if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var $a=!1;if(h)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){$a=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{$a=!1}function yn(t,n,s,l,u,f,S,L,F){var re=Array.prototype.slice.call(arguments,3);try{n.apply(s,re)}catch(ve){this.onError(ve)}}var bn=!1,ba=null,Sa=!1,Vn=null,Hs={onError:function(t){bn=!0,ba=t}};function Qa(t,n,s,l,u,f,S,L,F){bn=!1,ba=null,yn.apply(Hs,arguments)}function Gs(t,n,s,l,u,f,S,L,F){if(Qa.apply(this,arguments),bn){if(bn){var re=ba;bn=!1,ba=null}else throw Error(r(198));Sa||(Sa=!0,Vn=re)}}function dn(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function Vs(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function js(t){if(dn(t)!==t)throw Error(r(188))}function kl(t){var n=t.alternate;if(!n){if(n=dn(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var u=s.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===s)return js(u),t;if(f===l)return js(u),n;f=f.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=f;else{for(var S=!1,L=u.child;L;){if(L===s){S=!0,s=u,l=f;break}if(L===l){S=!0,l=u,s=f;break}L=L.sibling}if(!S){for(L=f.child;L;){if(L===s){S=!0,s=f,l=u;break}if(L===l){S=!0,l=f,s=u;break}L=L.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function Ws(t){return t=kl(t),t!==null?Xs(t):null}function Xs(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Xs(t);if(n!==null)return n;t=t.sibling}return null}var qs=e.unstable_scheduleCallback,E=e.unstable_cancelCallback,q=e.unstable_shouldYield,ne=e.unstable_requestPaint,Z=e.unstable_now,W=e.unstable_getCurrentPriorityLevel,xe=e.unstable_ImmediatePriority,Ue=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,rt=e.unstable_IdlePriority,Ke=null,qe=null;function mt(t){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Ke,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Tt,Bt=Math.log,St=Math.LN2;function Tt(t){return t>>>=0,t===0?32:31-(Bt(t)/St|0)|0}var Xe=64,Vt=4194304;function Ir(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sr(t,n){var s=t.pendingLanes;if(s===0)return 0;var l=0,u=t.suspendedLanes,f=t.pingedLanes,S=s&268435455;if(S!==0){var L=S&~u;L!==0?l=Ir(L):(f&=S,f!==0&&(l=Ir(f)))}else S=s&~u,S!==0?l=Ir(S):f!==0&&(l=Ir(f));if(l===0)return 0;if(n!==0&&n!==l&&(n&u)===0&&(u=l&-l,f=n&-n,u>=f||u===16&&(f&4194240)!==0))return n;if((l&4)!==0&&(l|=s&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)s=31-st(n),u=1<<s,l|=t[s],n&=~u;return l}function jn(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes;0<f;){var S=31-st(f),L=1<<S,F=u[S];F===-1?((L&s)===0||(L&l)!==0)&&(u[S]=jn(L,n)):F<=n&&(t.expiredLanes|=L),f&=~L}}function Sn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ct(){var t=Xe;return Xe<<=1,(Xe&4194240)===0&&(Xe=64),t}function or(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Jt(t,n,s){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-st(n),t[n]=s}function Yt(t,n){var s=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var u=31-st(s),f=1<<u;n[u]=0,l[u]=-1,t[u]=-1,s&=~f}}function vr(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-st(s),u=1<<l;u&n|t[l]&n&&(t[l]|=n),s&=~u}}var vt=0;function hn(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Wd,Fl,Xd,qd,Yd,zl=!1,Ys=[],Wn=null,Xn=null,qn=null,Xi=new Map,qi=new Map,Yn=[],ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(t,n){switch(t){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Xi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(n.pointerId)}}function Yi(t,n,s,l,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ls(n),n!==null&&Fl(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ag(t,n,s,l,u){switch(n){case"focusin":return Wn=Yi(Wn,t,n,s,l,u),!0;case"dragenter":return Xn=Yi(Xn,t,n,s,l,u),!0;case"mouseover":return qn=Yi(qn,t,n,s,l,u),!0;case"pointerover":var f=u.pointerId;return Xi.set(f,Yi(Xi.get(f)||null,t,n,s,l,u)),!0;case"gotpointercapture":return f=u.pointerId,qi.set(f,Yi(qi.get(f)||null,t,n,s,l,u)),!0}return!1}function $d(t){var n=wa(t.target);if(n!==null){var s=dn(n);if(s!==null){if(n=s.tag,n===13){if(n=Vs(s),n!==null){t.blockedOn=n,Yd(t.priority,function(){Xd(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ks(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Hl(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);bt=l,s.target.dispatchEvent(l),bt=null}else return n=ls(s),n!==null&&Fl(n),t.blockedOn=s,!1;n.shift()}return!0}function Qd(t,n,s){Ks(t)&&s.delete(n)}function ig(){zl=!1,Wn!==null&&Ks(Wn)&&(Wn=null),Xn!==null&&Ks(Xn)&&(Xn=null),qn!==null&&Ks(qn)&&(qn=null),Xi.forEach(Qd),qi.forEach(Qd)}function Ki(t,n){t.blockedOn===n&&(t.blockedOn=null,zl||(zl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ig)))}function $i(t){function n(u){return Ki(u,t)}if(0<Ys.length){Ki(Ys[0],t);for(var s=1;s<Ys.length;s++){var l=Ys[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Wn!==null&&Ki(Wn,t),Xn!==null&&Ki(Xn,t),qn!==null&&Ki(qn,t),Xi.forEach(n),qi.forEach(n),s=0;s<Yn.length;s++)l=Yn[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yn.length&&(s=Yn[0],s.blockedOn===null);)$d(s),s.blockedOn===null&&Yn.shift()}var Za=A.ReactCurrentBatchConfig,$s=!0;function sg(t,n,s,l){var u=vt,f=Za.transition;Za.transition=null;try{vt=1,Bl(t,n,s,l)}finally{vt=u,Za.transition=f}}function og(t,n,s,l){var u=vt,f=Za.transition;Za.transition=null;try{vt=4,Bl(t,n,s,l)}finally{vt=u,Za.transition=f}}function Bl(t,n,s,l){if($s){var u=Hl(t,n,s,l);if(u===null)ac(t,n,l,Qs,s),Kd(t,l);else if(ag(u,t,n,s,l))l.stopPropagation();else if(Kd(t,l),n&4&&-1<ng.indexOf(t)){for(;u!==null;){var f=ls(u);if(f!==null&&Wd(f),f=Hl(t,n,s,l),f===null&&ac(t,n,l,Qs,s),f===u)break;u=f}u!==null&&l.stopPropagation()}else ac(t,n,l,null,s)}}var Qs=null;function Hl(t,n,s,l){if(Qs=null,t=V(l),t=wa(t),t!==null)if(n=dn(t),n===null)t=null;else if(s=n.tag,s===13){if(t=Vs(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Qs=t,null}function Zd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W()){case xe:return 1;case Ue:return 4;case Le:case Ge:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Kn=null,Gl=null,Zs=null;function Jd(){if(Zs)return Zs;var t,n=Gl,s=n.length,l,u="value"in Kn?Kn.value:Kn.textContent,f=u.length;for(t=0;t<s&&n[t]===u[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===u[f-l];l++);return Zs=u.slice(t,1<l?1-l:void 0)}function Js(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function eo(){return!0}function eh(){return!1}function Dr(t){function n(s,l,u,f,S){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(s=t[L],this[L]=s?s(f):f[L]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?eo:eh,this.isPropagationStopped=eh,this}return j(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Dr(Ja),Qi=j({},Ja,{view:0,detail:0}),lg=Dr(Qi),jl,Wl,Zi,to=j({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zi&&(Zi&&t.type==="mousemove"?(jl=t.screenX-Zi.screenX,Wl=t.screenY-Zi.screenY):Wl=jl=0,Zi=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),th=Dr(to),cg=j({},to,{dataTransfer:0}),ug=Dr(cg),dg=j({},Qi,{relatedTarget:0}),Xl=Dr(dg),hg=j({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),fg=Dr(hg),pg=j({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mg=Dr(pg),gg=j({},Ja,{data:0}),rh=Dr(gg),vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yg(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=xg[t])?!!n[t]:!1}function ql(){return yg}var bg=j({},Qi,{key:function(t){if(t.key){var n=vg[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Js(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_g[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(t){return t.type==="keypress"?Js(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Js(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sg=Dr(bg),wg=j({},to,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=Dr(wg),Mg=j({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),Eg=Dr(Mg),Tg=j({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rg=Dr(Tg),Ag=j({},to,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cg=Dr(Ag),Ng=[9,13,27,32],Yl=h&&"CompositionEvent"in window,Ji=null;h&&"documentMode"in document&&(Ji=document.documentMode);var Pg=h&&"TextEvent"in window&&!Ji,ah=h&&(!Yl||Ji&&8<Ji&&11>=Ji),ih=" ",sh=!1;function oh(t,n){switch(t){case"keyup":return Ng.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ei=!1;function Lg(t,n){switch(t){case"compositionend":return lh(n);case"keypress":return n.which!==32?null:(sh=!0,ih);case"textInput":return t=n.data,t===ih&&sh?null:t;default:return null}}function Ug(t,n){if(ei)return t==="compositionend"||!Yl&&oh(t,n)?(t=Jd(),Zs=Gl=Kn=null,ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ah&&n.locale!=="ko"?null:n.data;default:return null}}var Ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ig[t.type]:n==="textarea"}function uh(t,n,s,l){Re(l),n=so(n,"onChange"),0<n.length&&(s=new Vl("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var es=null,ts=null;function Dg(t){Ah(t,0)}function ro(t){var n=ii(t);if(ht(n))return t}function Og(t,n){if(t==="change")return n}var dh=!1;if(h){var Kl;if(h){var $l="oninput"in document;if(!$l){var hh=document.createElement("div");hh.setAttribute("oninput","return;"),$l=typeof hh.oninput=="function"}Kl=$l}else Kl=!1;dh=Kl&&(!document.documentMode||9<document.documentMode)}function fh(){es&&(es.detachEvent("onpropertychange",ph),ts=es=null)}function ph(t){if(t.propertyName==="value"&&ro(ts)){var n=[];uh(n,ts,t,V(t)),Sr(Dg,n)}}function kg(t,n,s){t==="focusin"?(fh(),es=n,ts=s,es.attachEvent("onpropertychange",ph)):t==="focusout"&&fh()}function Fg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ro(ts)}function zg(t,n){if(t==="click")return ro(n)}function Bg(t,n){if(t==="input"||t==="change")return ro(n)}function Hg(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qr=typeof Object.is=="function"?Object.is:Hg;function rs(t,n){if(Qr(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!p.call(n,u)||!Qr(t[u],n[u]))return!1}return!0}function mh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gh(t,n){var s=mh(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=mh(s)}}function vh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?vh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function _h(){for(var t=window,n=Nt();n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Nt(t.document)}return n}function Ql(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Gg(t){var n=_h(),s=t.focusedElem,l=t.selectionRange;if(n!==s&&s&&s.ownerDocument&&vh(s.ownerDocument.documentElement,s)){if(l!==null&&Ql(s)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(t,s.value.length);else if(t=(n=s.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var u=s.textContent.length,f=Math.min(l.start,u);l=l.end===void 0?f:Math.min(l.end,u),!t.extend&&f>l&&(u=l,l=f,f=u),u=gh(s,f);var S=gh(s,l);u&&S&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),t.removeAllRanges(),f>l?(t.addRange(n),t.extend(S.node,S.offset)):(n.setEnd(S.node,S.offset),t.addRange(n)))}}for(n=[],t=s;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)t=n[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vg=h&&"documentMode"in document&&11>=document.documentMode,ti=null,Zl=null,ns=null,Jl=!1;function xh(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Jl||ti==null||ti!==Nt(l)||(l=ti,"selectionStart"in l&&Ql(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ns&&rs(ns,l)||(ns=l,l=so(Zl,"onSelect"),0<l.length&&(n=new Vl("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=ti)))}function no(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var ri={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},ec={},yh={};h&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function ao(t){if(ec[t])return ec[t];if(!ri[t])return t;var n=ri[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in yh)return ec[t]=n[s];return t}var bh=ao("animationend"),Sh=ao("animationiteration"),wh=ao("animationstart"),Mh=ao("transitionend"),Eh=new Map,Th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(t,n){Eh.set(t,n),c(n,[t])}for(var tc=0;tc<Th.length;tc++){var rc=Th[tc],jg=rc.toLowerCase(),Wg=rc[0].toUpperCase()+rc.slice(1);$n(jg,"on"+Wg)}$n(bh,"onAnimationEnd"),$n(Sh,"onAnimationIteration"),$n(wh,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(Mh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(as));function Rh(t,n,s){var l=t.type||"unknown-event";t.currentTarget=s,Gs(l,n,void 0,t),t.currentTarget=null}function Ah(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var S=l.length-1;0<=S;S--){var L=l[S],F=L.instance,re=L.currentTarget;if(L=L.listener,F!==f&&u.isPropagationStopped())break e;Rh(u,L,re),f=F}else for(S=0;S<l.length;S++){if(L=l[S],F=L.instance,re=L.currentTarget,L=L.listener,F!==f&&u.isPropagationStopped())break e;Rh(u,L,re),f=F}}}if(Sa)throw t=Vn,Sa=!1,Vn=null,t}function Ut(t,n){var s=n[uc];s===void 0&&(s=n[uc]=new Set);var l=t+"__bubble";s.has(l)||(Ch(n,t,2,!1),s.add(l))}function nc(t,n,s){var l=0;n&&(l|=4),Ch(s,t,l,n)}var io="_reactListening"+Math.random().toString(36).slice(2);function is(t){if(!t[io]){t[io]=!0,a.forEach(function(s){s!=="selectionchange"&&(Xg.has(s)||nc(s,!1,t),nc(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[io]||(n[io]=!0,nc("selectionchange",!1,n))}}function Ch(t,n,s,l){switch(Zd(n)){case 1:var u=sg;break;case 4:u=og;break;default:u=Bl}s=u.bind(null,n,s,t),u=void 0,!$a||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(n,s,{capture:!0,passive:u}):t.addEventListener(n,s,!0):u!==void 0?t.addEventListener(n,s,{passive:u}):t.addEventListener(n,s,!1)}function ac(t,n,s,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var L=l.stateNode.containerInfo;if(L===u||L.nodeType===8&&L.parentNode===u)break;if(S===4)for(S=l.return;S!==null;){var F=S.tag;if((F===3||F===4)&&(F=S.stateNode.containerInfo,F===u||F.nodeType===8&&F.parentNode===u))return;S=S.return}for(;L!==null;){if(S=wa(L),S===null)return;if(F=S.tag,F===5||F===6){l=f=S;continue e}L=L.parentNode}}l=l.return}Sr(function(){var re=f,ve=V(s),we=[];e:{var ge=Eh.get(t);if(ge!==void 0){var Ie=Vl,ze=t;switch(t){case"keypress":if(Js(s)===0)break e;case"keydown":case"keyup":Ie=Sg;break;case"focusin":ze="focus",Ie=Xl;break;case"focusout":ze="blur",Ie=Xl;break;case"beforeblur":case"afterblur":Ie=Xl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Eg;break;case bh:case Sh:case wh:Ie=fg;break;case Mh:Ie=Rg;break;case"scroll":Ie=lg;break;case"wheel":Ie=Cg;break;case"copy":case"cut":case"paste":Ie=mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=nh}var Be=(n&4)!==0,Ht=!Be&&t==="scroll",Q=Be?ge!==null?ge+"Capture":null:ge;Be=[];for(var G=re,J;G!==null;){J=G;var Ee=J.stateNode;if(J.tag===5&&Ee!==null&&(J=Ee,Q!==null&&(Ee=mr(G,Q),Ee!=null&&Be.push(ss(G,Ee,J)))),Ht)break;G=G.return}0<Be.length&&(ge=new Ie(ge,ze,null,s,ve),we.push({event:ge,listeners:Be}))}}if((n&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&s!==bt&&(ze=s.relatedTarget||s.fromElement)&&(wa(ze)||ze[wn]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(ze=s.relatedTarget||s.toElement,Ie=re,ze=ze?wa(ze):null,ze!==null&&(Ht=dn(ze),ze!==Ht||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=re),Ie!==ze)){if(Be=th,Ee="onMouseLeave",Q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Be=nh,Ee="onPointerLeave",Q="onPointerEnter",G="pointer"),Ht=Ie==null?ge:ii(Ie),J=ze==null?ge:ii(ze),ge=new Be(Ee,G+"leave",Ie,s,ve),ge.target=Ht,ge.relatedTarget=J,Ee=null,wa(ve)===re&&(Be=new Be(Q,G+"enter",ze,s,ve),Be.target=J,Be.relatedTarget=Ht,Ee=Be),Ht=Ee,Ie&&ze)t:{for(Be=Ie,Q=ze,G=0,J=Be;J;J=ni(J))G++;for(J=0,Ee=Q;Ee;Ee=ni(Ee))J++;for(;0<G-J;)Be=ni(Be),G--;for(;0<J-G;)Q=ni(Q),J--;for(;G--;){if(Be===Q||Q!==null&&Be===Q.alternate)break t;Be=ni(Be),Q=ni(Q)}Be=null}else Be=null;Ie!==null&&Nh(we,ge,Ie,Be,!1),ze!==null&&Ht!==null&&Nh(we,Ht,ze,Be,!0)}}e:{if(ge=re?ii(re):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var je=Og;else if(ch(ge))if(dh)je=Bg;else{je=Fg;var $e=kg}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=zg);if(je&&(je=je(t,re))){uh(we,je,s,ve);break e}$e&&$e(t,ge,re),t==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&Mt(ge,"number",ge.value)}switch($e=re?ii(re):window,t){case"focusin":(ch($e)||$e.contentEditable==="true")&&(ti=$e,Zl=re,ns=null);break;case"focusout":ns=Zl=ti=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,xh(we,s,ve);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":xh(we,s,ve)}var Qe;if(Yl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ei?oh(t,s)&&(nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(nt="onCompositionStart");nt&&(ah&&s.locale!=="ko"&&(ei||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ei&&(Qe=Jd()):(Kn=ve,Gl="value"in Kn?Kn.value:Kn.textContent,ei=!0)),$e=so(re,nt),0<$e.length&&(nt=new rh(nt,t,null,s,ve),we.push({event:nt,listeners:$e}),Qe?nt.data=Qe:(Qe=lh(s),Qe!==null&&(nt.data=Qe)))),(Qe=Pg?Lg(t,s):Ug(t,s))&&(re=so(re,"onBeforeInput"),0<re.length&&(ve=new rh("onBeforeInput","beforeinput",null,s,ve),we.push({event:ve,listeners:re}),ve.data=Qe))}Ah(we,n)})}function ss(t,n,s){return{instance:t,listener:n,currentTarget:s}}function so(t,n){for(var s=n+"Capture",l=[];t!==null;){var u=t,f=u.stateNode;u.tag===5&&f!==null&&(u=f,f=mr(t,s),f!=null&&l.unshift(ss(t,f,u)),f=mr(t,n),f!=null&&l.push(ss(t,f,u))),t=t.return}return l}function ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nh(t,n,s,l,u){for(var f=n._reactName,S=[];s!==null&&s!==l;){var L=s,F=L.alternate,re=L.stateNode;if(F!==null&&F===l)break;L.tag===5&&re!==null&&(L=re,u?(F=mr(s,f),F!=null&&S.unshift(ss(s,F,L))):u||(F=mr(s,f),F!=null&&S.push(ss(s,F,L)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var qg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function Ph(t){return(typeof t=="string"?t:""+t).replace(qg,`
`).replace(Yg,"")}function oo(t,n,s){if(n=Ph(n),Ph(t)!==n&&s)throw Error(r(425))}function lo(){}var ic=null,sc=null;function oc(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var lc=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,Lh=typeof Promise=="function"?Promise:void 0,$g=typeof queueMicrotask=="function"?queueMicrotask:typeof Lh<"u"?function(t){return Lh.resolve(null).then(t).catch(Qg)}:lc;function Qg(t){setTimeout(function(){throw t})}function cc(t,n){var s=n,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(l===0){t.removeChild(u),$i(n);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=u}while(s);$i(n)}function Qn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Uh(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return t;n--}else s==="/$"&&n++}t=t.previousSibling}return null}var ai=Math.random().toString(36).slice(2),fn="__reactFiber$"+ai,os="__reactProps$"+ai,wn="__reactContainer$"+ai,uc="__reactEvents$"+ai,Zg="__reactListeners$"+ai,Jg="__reactHandles$"+ai;function wa(t){var n=t[fn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[wn]||s[fn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Uh(t);t!==null;){if(s=t[fn])return s;t=Uh(t)}return n}t=s,s=t.parentNode}return null}function ls(t){return t=t[fn]||t[wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(r(33))}function co(t){return t[os]||null}var dc=[],si=-1;function Zn(t){return{current:t}}function It(t){0>si||(t.current=dc[si],dc[si]=null,si--)}function Pt(t,n){si++,dc[si]=t.current,t.current=n}var Jn={},lr=Zn(Jn),wr=Zn(!1),Ma=Jn;function oi(t,n){var s=t.type.contextTypes;if(!s)return Jn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},f;for(f in s)u[f]=n[f];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=u),u}function Mr(t){return t=t.childContextTypes,t!=null}function uo(){It(wr),It(lr)}function Ih(t,n,s){if(lr.current!==Jn)throw Error(r(168));Pt(lr,n),Pt(wr,s)}function Dh(t,n,s){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(r(108,_e(t)||"Unknown",u));return j({},s,l)}function ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,Ma=lr.current,Pt(lr,t),Pt(wr,wr.current),!0}function Oh(t,n,s){var l=t.stateNode;if(!l)throw Error(r(169));s?(t=Dh(t,n,Ma),l.__reactInternalMemoizedMergedChildContext=t,It(wr),It(lr),Pt(lr,t)):It(wr),Pt(wr,s)}var Mn=null,fo=!1,hc=!1;function kh(t){Mn===null?Mn=[t]:Mn.push(t)}function ev(t){fo=!0,kh(t)}function ea(){if(!hc&&Mn!==null){hc=!0;var t=0,n=vt;try{var s=Mn;for(vt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Mn=null,fo=!1}catch(u){throw Mn!==null&&(Mn=Mn.slice(t+1)),qs(xe,ea),u}finally{vt=n,hc=!1}}return null}var li=[],ci=0,po=null,mo=0,Gr=[],Vr=0,Ea=null,En=1,Tn="";function Ta(t,n){li[ci++]=mo,li[ci++]=po,po=t,mo=n}function Fh(t,n,s){Gr[Vr++]=En,Gr[Vr++]=Tn,Gr[Vr++]=Ea,Ea=t;var l=En;t=Tn;var u=32-st(l)-1;l&=~(1<<u),s+=1;var f=32-st(n)+u;if(30<f){var S=u-u%5;f=(l&(1<<S)-1).toString(32),l>>=S,u-=S,En=1<<32-st(n)+u|s<<u|l,Tn=f+t}else En=1<<f|s<<u|l,Tn=t}function fc(t){t.return!==null&&(Ta(t,1),Fh(t,1,0))}function pc(t){for(;t===po;)po=li[--ci],li[ci]=null,mo=li[--ci],li[ci]=null;for(;t===Ea;)Ea=Gr[--Vr],Gr[Vr]=null,Tn=Gr[--Vr],Gr[Vr]=null,En=Gr[--Vr],Gr[Vr]=null}var Or=null,kr=null,Dt=!1,Zr=null;function zh(t,n){var s=qr(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=t,n=t.deletions,n===null?(t.deletions=[s],t.flags|=16):n.push(s)}function Bh(t,n){switch(t.tag){case 5:var s=t.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Or=t,kr=Qn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Or=t,kr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=Ea!==null?{id:En,overflow:Tn}:null,t.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=qr(18,null,null,0),s.stateNode=n,s.return=t,t.child=s,Or=t,kr=null,!0):!1;default:return!1}}function mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gc(t){if(Dt){var n=kr;if(n){var s=n;if(!Bh(t,n)){if(mc(t))throw Error(r(418));n=Qn(s.nextSibling);var l=Or;n&&Bh(t,n)?zh(l,s):(t.flags=t.flags&-4097|2,Dt=!1,Or=t)}}else{if(mc(t))throw Error(r(418));t.flags=t.flags&-4097|2,Dt=!1,Or=t}}}function Hh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Or=t}function go(t){if(t!==Or)return!1;if(!Dt)return Hh(t),Dt=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!oc(t.type,t.memoizedProps)),n&&(n=kr)){if(mc(t))throw Gh(),Error(r(418));for(;n;)zh(t,n),n=Qn(n.nextSibling)}if(Hh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(n===0){kr=Qn(t.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}t=t.nextSibling}kr=null}}else kr=Or?Qn(t.stateNode.nextSibling):null;return!0}function Gh(){for(var t=kr;t;)t=Qn(t.nextSibling)}function ui(){kr=Or=null,Dt=!1}function vc(t){Zr===null?Zr=[t]:Zr.push(t)}var tv=A.ReactCurrentBatchConfig;function cs(t,n,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(r(309));var l=s.stateNode}if(!l)throw Error(r(147,t));var u=l,f=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===f?n.ref:(n=function(S){var L=u.refs;S===null?delete L[f]:L[f]=S},n._stringRef=f,n)}if(typeof t!="string")throw Error(r(284));if(!s._owner)throw Error(r(290,t))}return t}function vo(t,n){throw t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Vh(t){var n=t._init;return n(t._payload)}function jh(t){function n(Q,G){if(t){var J=Q.deletions;J===null?(Q.deletions=[G],Q.flags|=16):J.push(G)}}function s(Q,G){if(!t)return null;for(;G!==null;)n(Q,G),G=G.sibling;return null}function l(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function u(Q,G){return Q=la(Q,G),Q.index=0,Q.sibling=null,Q}function f(Q,G,J){return Q.index=J,t?(J=Q.alternate,J!==null?(J=J.index,J<G?(Q.flags|=2,G):J):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function L(Q,G,J,Ee){return G===null||G.tag!==6?(G=ou(J,Q.mode,Ee),G.return=Q,G):(G=u(G,J),G.return=Q,G)}function F(Q,G,J,Ee){var je=J.type;return je===z?ve(Q,G,J.props.children,Ee,J.key):G!==null&&(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&Vh(je)===G.type)?(Ee=u(G,J.props),Ee.ref=cs(Q,G,J),Ee.return=Q,Ee):(Ee=Ho(J.type,J.key,J.props,null,Q.mode,Ee),Ee.ref=cs(Q,G,J),Ee.return=Q,Ee)}function re(Q,G,J,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=lu(J,Q.mode,Ee),G.return=Q,G):(G=u(G,J.children||[]),G.return=Q,G)}function ve(Q,G,J,Ee,je){return G===null||G.tag!==7?(G=Ia(J,Q.mode,Ee,je),G.return=Q,G):(G=u(G,J),G.return=Q,G)}function we(Q,G,J){if(typeof G=="string"&&G!==""||typeof G=="number")return G=ou(""+G,Q.mode,J),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case X:return J=Ho(G.type,G.key,G.props,null,Q.mode,J),J.ref=cs(Q,null,G),J.return=Q,J;case O:return G=lu(G,Q.mode,J),G.return=Q,G;case le:var Ee=G._init;return we(Q,Ee(G._payload),J)}if(Ve(G)||oe(G))return G=Ia(G,Q.mode,J,null),G.return=Q,G;vo(Q,G)}return null}function ge(Q,G,J,Ee){var je=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return je!==null?null:L(Q,G,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case X:return J.key===je?F(Q,G,J,Ee):null;case O:return J.key===je?re(Q,G,J,Ee):null;case le:return je=J._init,ge(Q,G,je(J._payload),Ee)}if(Ve(J)||oe(J))return je!==null?null:ve(Q,G,J,Ee,null);vo(Q,J)}return null}function Ie(Q,G,J,Ee,je){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Q=Q.get(J)||null,L(G,Q,""+Ee,je);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case X:return Q=Q.get(Ee.key===null?J:Ee.key)||null,F(G,Q,Ee,je);case O:return Q=Q.get(Ee.key===null?J:Ee.key)||null,re(G,Q,Ee,je);case le:var $e=Ee._init;return Ie(Q,G,J,$e(Ee._payload),je)}if(Ve(Ee)||oe(Ee))return Q=Q.get(J)||null,ve(G,Q,Ee,je,null);vo(G,Ee)}return null}function ze(Q,G,J,Ee){for(var je=null,$e=null,Qe=G,nt=G=0,rr=null;Qe!==null&&nt<J.length;nt++){Qe.index>nt?(rr=Qe,Qe=null):rr=Qe.sibling;var xt=ge(Q,Qe,J[nt],Ee);if(xt===null){Qe===null&&(Qe=rr);break}t&&Qe&&xt.alternate===null&&n(Q,Qe),G=f(xt,G,nt),$e===null?je=xt:$e.sibling=xt,$e=xt,Qe=rr}if(nt===J.length)return s(Q,Qe),Dt&&Ta(Q,nt),je;if(Qe===null){for(;nt<J.length;nt++)Qe=we(Q,J[nt],Ee),Qe!==null&&(G=f(Qe,G,nt),$e===null?je=Qe:$e.sibling=Qe,$e=Qe);return Dt&&Ta(Q,nt),je}for(Qe=l(Q,Qe);nt<J.length;nt++)rr=Ie(Qe,Q,nt,J[nt],Ee),rr!==null&&(t&&rr.alternate!==null&&Qe.delete(rr.key===null?nt:rr.key),G=f(rr,G,nt),$e===null?je=rr:$e.sibling=rr,$e=rr);return t&&Qe.forEach(function(ca){return n(Q,ca)}),Dt&&Ta(Q,nt),je}function Be(Q,G,J,Ee){var je=oe(J);if(typeof je!="function")throw Error(r(150));if(J=je.call(J),J==null)throw Error(r(151));for(var $e=je=null,Qe=G,nt=G=0,rr=null,xt=J.next();Qe!==null&&!xt.done;nt++,xt=J.next()){Qe.index>nt?(rr=Qe,Qe=null):rr=Qe.sibling;var ca=ge(Q,Qe,xt.value,Ee);if(ca===null){Qe===null&&(Qe=rr);break}t&&Qe&&ca.alternate===null&&n(Q,Qe),G=f(ca,G,nt),$e===null?je=ca:$e.sibling=ca,$e=ca,Qe=rr}if(xt.done)return s(Q,Qe),Dt&&Ta(Q,nt),je;if(Qe===null){for(;!xt.done;nt++,xt=J.next())xt=we(Q,xt.value,Ee),xt!==null&&(G=f(xt,G,nt),$e===null?je=xt:$e.sibling=xt,$e=xt);return Dt&&Ta(Q,nt),je}for(Qe=l(Q,Qe);!xt.done;nt++,xt=J.next())xt=Ie(Qe,Q,nt,xt.value,Ee),xt!==null&&(t&&xt.alternate!==null&&Qe.delete(xt.key===null?nt:xt.key),G=f(xt,G,nt),$e===null?je=xt:$e.sibling=xt,$e=xt);return t&&Qe.forEach(function(Iv){return n(Q,Iv)}),Dt&&Ta(Q,nt),je}function Ht(Q,G,J,Ee){if(typeof J=="object"&&J!==null&&J.type===z&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case X:e:{for(var je=J.key,$e=G;$e!==null;){if($e.key===je){if(je=J.type,je===z){if($e.tag===7){s(Q,$e.sibling),G=u($e,J.props.children),G.return=Q,Q=G;break e}}else if($e.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&Vh(je)===$e.type){s(Q,$e.sibling),G=u($e,J.props),G.ref=cs(Q,$e,J),G.return=Q,Q=G;break e}s(Q,$e);break}else n(Q,$e);$e=$e.sibling}J.type===z?(G=Ia(J.props.children,Q.mode,Ee,J.key),G.return=Q,Q=G):(Ee=Ho(J.type,J.key,J.props,null,Q.mode,Ee),Ee.ref=cs(Q,G,J),Ee.return=Q,Q=Ee)}return S(Q);case O:e:{for($e=J.key;G!==null;){if(G.key===$e)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){s(Q,G.sibling),G=u(G,J.children||[]),G.return=Q,Q=G;break e}else{s(Q,G);break}else n(Q,G);G=G.sibling}G=lu(J,Q.mode,Ee),G.return=Q,Q=G}return S(Q);case le:return $e=J._init,Ht(Q,G,$e(J._payload),Ee)}if(Ve(J))return ze(Q,G,J,Ee);if(oe(J))return Be(Q,G,J,Ee);vo(Q,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,G!==null&&G.tag===6?(s(Q,G.sibling),G=u(G,J),G.return=Q,Q=G):(s(Q,G),G=ou(J,Q.mode,Ee),G.return=Q,Q=G),S(Q)):s(Q,G)}return Ht}var di=jh(!0),Wh=jh(!1),_o=Zn(null),xo=null,hi=null,_c=null;function xc(){_c=hi=xo=null}function yc(t){var n=_o.current;It(_o),t._currentValue=n}function bc(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function fi(t,n){xo=t,_c=hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Er=!0),t.firstContext=null)}function jr(t){var n=t._currentValue;if(_c!==t)if(t={context:t,memoizedValue:n,next:null},hi===null){if(xo===null)throw Error(r(308));hi=t,xo.dependencies={lanes:0,firstContext:t}}else hi=hi.next=t;return n}var Ra=null;function Sc(t){Ra===null?Ra=[t]:Ra.push(t)}function Xh(t,n,s,l){var u=n.interleaved;return u===null?(s.next=s,Sc(n)):(s.next=u.next,u.next=s),n.interleaved=s,Rn(t,l)}function Rn(t,n){t.lanes|=n;var s=t.alternate;for(s!==null&&(s.lanes|=n),s=t,t=t.return;t!==null;)t.childLanes|=n,s=t.alternate,s!==null&&(s.childLanes|=n),s=t,t=t.return;return s.tag===3?s.stateNode:null}var ta=!1;function wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qh(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function ra(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,Rn(t,s)}return u=l.interleaved,u===null?(n.next=n,Sc(l)):(n.next=u.next,u.next=n),l.interleaved=n,Rn(t,s)}function yo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,vr(t,s)}}function Yh(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var S={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};f===null?u=f=S:f=f.next=S,s=s.next}while(s!==null);f===null?u=f=n:f=f.next=n}else u=f=n;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}function bo(t,n,s,l){var u=t.updateQueue;ta=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,L=u.shared.pending;if(L!==null){u.shared.pending=null;var F=L,re=F.next;F.next=null,S===null?f=re:S.next=re,S=F;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,L=ve.lastBaseUpdate,L!==S&&(L===null?ve.firstBaseUpdate=re:L.next=re,ve.lastBaseUpdate=F))}if(f!==null){var we=u.baseState;S=0,ve=re=F=null,L=f;do{var ge=L.lane,Ie=L.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var ze=t,Be=L;switch(ge=n,Ie=s,Be.tag){case 1:if(ze=Be.payload,typeof ze=="function"){we=ze.call(Ie,we,ge);break e}we=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Be.payload,ge=typeof ze=="function"?ze.call(Ie,we,ge):ze,ge==null)break e;we=j({},we,ge);break e;case 2:ta=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,ge=u.effects,ge===null?u.effects=[L]:ge.push(L))}else Ie={eventTime:Ie,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ve===null?(re=ve=Ie,F=we):ve=ve.next=Ie,S|=ge;if(L=L.next,L===null){if(L=u.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);if(ve===null&&(F=we),u.baseState=F,u.firstBaseUpdate=re,u.lastBaseUpdate=ve,n=u.shared.interleaved,n!==null){u=n;do S|=u.lane,u=u.next;while(u!==n)}else f===null&&(u.shared.lanes=0);Na|=S,t.lanes=S,t.memoizedState=we}}function Kh(t,n,s){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],u=l.callback;if(u!==null){if(l.callback=null,l=s,typeof u!="function")throw Error(r(191,u));u.call(l)}}}var us={},pn=Zn(us),ds=Zn(us),hs=Zn(us);function Aa(t){if(t===us)throw Error(r(174));return t}function Mc(t,n){switch(Pt(hs,n),Pt(ds,t),Pt(pn,us),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:He(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=He(n,t)}It(pn),Pt(pn,n)}function pi(){It(pn),It(ds),It(hs)}function $h(t){Aa(hs.current);var n=Aa(pn.current),s=He(n,t.type);n!==s&&(Pt(ds,t),Pt(pn,s))}function Ec(t){ds.current===t&&(It(pn),It(ds))}var Ot=Zn(0);function So(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Tc=[];function Rc(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var wo=A.ReactCurrentDispatcher,Ac=A.ReactCurrentBatchConfig,Ca=0,kt=null,Kt=null,er=null,Mo=!1,fs=!1,ps=0,rv=0;function cr(){throw Error(r(321))}function Cc(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!Qr(t[s],n[s]))return!1;return!0}function Nc(t,n,s,l,u,f){if(Ca=f,kt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,wo.current=t===null||t.memoizedState===null?sv:ov,t=s(l,u),fs){f=0;do{if(fs=!1,ps=0,25<=f)throw Error(r(301));f+=1,er=Kt=null,n.updateQueue=null,wo.current=lv,t=s(l,u)}while(fs)}if(wo.current=Ro,n=Kt!==null&&Kt.next!==null,Ca=0,er=Kt=kt=null,Mo=!1,n)throw Error(r(300));return t}function Pc(){var t=ps!==0;return ps=0,t}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return er===null?kt.memoizedState=er=t:er=er.next=t,er}function Wr(){if(Kt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var n=er===null?kt.memoizedState:er.next;if(n!==null)er=n,Kt=t;else{if(t===null)throw Error(r(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},er===null?kt.memoizedState=er=t:er=er.next=t}return er}function ms(t,n){return typeof n=="function"?n(t):n}function Lc(t){var n=Wr(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=Kt,u=l.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}l.baseQueue=u=f,s.pending=null}if(u!==null){f=u.next,l=l.baseState;var L=S=null,F=null,re=f;do{var ve=re.lane;if((Ca&ve)===ve)F!==null&&(F=F.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:t(l,re.action);else{var we={lane:ve,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};F===null?(L=F=we,S=l):F=F.next=we,kt.lanes|=ve,Na|=ve}re=re.next}while(re!==null&&re!==f);F===null?S=l:F.next=L,Qr(l,n.memoizedState)||(Er=!0),n.memoizedState=l,n.baseState=S,n.baseQueue=F,s.lastRenderedState=l}if(t=s.interleaved,t!==null){u=t;do f=u.lane,kt.lanes|=f,Na|=f,u=u.next;while(u!==t)}else u===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function Uc(t){var n=Wr(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,f=n.memoizedState;if(u!==null){s.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Qr(f,n.memoizedState)||(Er=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,l]}function Qh(){}function Zh(t,n){var s=kt,l=Wr(),u=n(),f=!Qr(l.memoizedState,u);if(f&&(l.memoizedState=u,Er=!0),l=l.queue,Ic(tf.bind(null,s,l,t),[t]),l.getSnapshot!==n||f||er!==null&&er.memoizedState.tag&1){if(s.flags|=2048,gs(9,ef.bind(null,s,l,u,n),void 0,null),tr===null)throw Error(r(349));(Ca&30)!==0||Jh(s,n,u)}return u}function Jh(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=kt.updateQueue,n===null?(n={lastEffect:null,stores:null},kt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function ef(t,n,s,l){n.value=s,n.getSnapshot=l,rf(n)&&nf(t)}function tf(t,n,s){return s(function(){rf(n)&&nf(t)})}function rf(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!Qr(t,s)}catch{return!0}}function nf(t){var n=Rn(t,1);n!==null&&rn(n,t,1,-1)}function af(t){var n=mn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:t},n.queue=t,t=t.dispatch=iv.bind(null,kt,t),[n.memoizedState,t]}function gs(t,n,s,l){return t={tag:t,create:n,destroy:s,deps:l,next:null},n=kt.updateQueue,n===null?(n={lastEffect:null,stores:null},kt.updateQueue=n,n.lastEffect=t.next=t):(s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t)),t}function sf(){return Wr().memoizedState}function Eo(t,n,s,l){var u=mn();kt.flags|=t,u.memoizedState=gs(1|n,s,void 0,l===void 0?null:l)}function To(t,n,s,l){var u=Wr();l=l===void 0?null:l;var f=void 0;if(Kt!==null){var S=Kt.memoizedState;if(f=S.destroy,l!==null&&Cc(l,S.deps)){u.memoizedState=gs(n,s,f,l);return}}kt.flags|=t,u.memoizedState=gs(1|n,s,f,l)}function of(t,n){return Eo(8390656,8,t,n)}function Ic(t,n){return To(2048,8,t,n)}function lf(t,n){return To(4,2,t,n)}function cf(t,n){return To(4,4,t,n)}function uf(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function df(t,n,s){return s=s!=null?s.concat([t]):null,To(4,4,uf.bind(null,n,t),s)}function Dc(){}function hf(t,n){var s=Wr();n=n===void 0?null:n;var l=s.memoizedState;return l!==null&&n!==null&&Cc(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function ff(t,n){var s=Wr();n=n===void 0?null:n;var l=s.memoizedState;return l!==null&&n!==null&&Cc(n,l[1])?l[0]:(t=t(),s.memoizedState=[t,n],t)}function pf(t,n,s){return(Ca&21)===0?(t.baseState&&(t.baseState=!1,Er=!0),t.memoizedState=s):(Qr(s,n)||(s=Ct(),kt.lanes|=s,Na|=s,t.baseState=!0),n)}function nv(t,n){var s=vt;vt=s!==0&&4>s?s:4,t(!0);var l=Ac.transition;Ac.transition={};try{t(!1),n()}finally{vt=s,Ac.transition=l}}function mf(){return Wr().memoizedState}function av(t,n,s){var l=sa(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},gf(t))vf(n,s);else if(s=Xh(t,n,s,l),s!==null){var u=xr();rn(s,t,l,u),_f(s,n,l)}}function iv(t,n,s){var l=sa(t),u={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(gf(t))vf(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,L=f(S,s);if(u.hasEagerState=!0,u.eagerState=L,Qr(L,S)){var F=n.interleaved;F===null?(u.next=u,Sc(n)):(u.next=F.next,F.next=u),n.interleaved=u;return}}catch{}finally{}s=Xh(t,n,u,l),s!==null&&(u=xr(),rn(s,t,l,u),_f(s,n,l))}}function gf(t){var n=t.alternate;return t===kt||n!==null&&n===kt}function vf(t,n){fs=Mo=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function _f(t,n,s){if((s&4194240)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,vr(t,s)}}var Ro={readContext:jr,useCallback:cr,useContext:cr,useEffect:cr,useImperativeHandle:cr,useInsertionEffect:cr,useLayoutEffect:cr,useMemo:cr,useReducer:cr,useRef:cr,useState:cr,useDebugValue:cr,useDeferredValue:cr,useTransition:cr,useMutableSource:cr,useSyncExternalStore:cr,useId:cr,unstable_isNewReconciler:!1},sv={readContext:jr,useCallback:function(t,n){return mn().memoizedState=[t,n===void 0?null:n],t},useContext:jr,useEffect:of,useImperativeHandle:function(t,n,s){return s=s!=null?s.concat([t]):null,Eo(4194308,4,uf.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Eo(4194308,4,t,n)},useInsertionEffect:function(t,n){return Eo(4,2,t,n)},useMemo:function(t,n){var s=mn();return n=n===void 0?null:n,t=t(),s.memoizedState=[t,n],t},useReducer:function(t,n,s){var l=mn();return n=s!==void 0?s(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=av.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var n=mn();return t={current:t},n.memoizedState=t},useState:af,useDebugValue:Dc,useDeferredValue:function(t){return mn().memoizedState=t},useTransition:function(){var t=af(!1),n=t[0];return t=nv.bind(null,t[1]),mn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,s){var l=kt,u=mn();if(Dt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),tr===null)throw Error(r(349));(Ca&30)!==0||Jh(l,n,s)}u.memoizedState=s;var f={value:s,getSnapshot:n};return u.queue=f,of(tf.bind(null,l,f,t),[t]),l.flags|=2048,gs(9,ef.bind(null,l,f,s,n),void 0,null),s},useId:function(){var t=mn(),n=tr.identifierPrefix;if(Dt){var s=Tn,l=En;s=(l&~(1<<32-st(l)-1)).toString(32)+s,n=":"+n+"R"+s,s=ps++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=rv++,n=":"+n+"r"+s.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},ov={readContext:jr,useCallback:hf,useContext:jr,useEffect:Ic,useImperativeHandle:df,useInsertionEffect:lf,useLayoutEffect:cf,useMemo:ff,useReducer:Lc,useRef:sf,useState:function(){return Lc(ms)},useDebugValue:Dc,useDeferredValue:function(t){var n=Wr();return pf(n,Kt.memoizedState,t)},useTransition:function(){var t=Lc(ms)[0],n=Wr().memoizedState;return[t,n]},useMutableSource:Qh,useSyncExternalStore:Zh,useId:mf,unstable_isNewReconciler:!1},lv={readContext:jr,useCallback:hf,useContext:jr,useEffect:Ic,useImperativeHandle:df,useInsertionEffect:lf,useLayoutEffect:cf,useMemo:ff,useReducer:Uc,useRef:sf,useState:function(){return Uc(ms)},useDebugValue:Dc,useDeferredValue:function(t){var n=Wr();return Kt===null?n.memoizedState=t:pf(n,Kt.memoizedState,t)},useTransition:function(){var t=Uc(ms)[0],n=Wr().memoizedState;return[t,n]},useMutableSource:Qh,useSyncExternalStore:Zh,useId:mf,unstable_isNewReconciler:!1};function Jr(t,n){if(t&&t.defaultProps){n=j({},n),t=t.defaultProps;for(var s in t)n[s]===void 0&&(n[s]=t[s]);return n}return n}function Oc(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:j({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ao={isMounted:function(t){return(t=t._reactInternals)?dn(t)===t:!1},enqueueSetState:function(t,n,s){t=t._reactInternals;var l=xr(),u=sa(t),f=An(l,u);f.payload=n,s!=null&&(f.callback=s),n=ra(t,f,u),n!==null&&(rn(n,t,u,l),yo(n,t,u))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=xr(),u=sa(t),f=An(l,u);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=ra(t,f,u),n!==null&&(rn(n,t,u,l),yo(n,t,u))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=xr(),l=sa(t),u=An(s,l);u.tag=2,n!=null&&(u.callback=n),n=ra(t,u,l),n!==null&&(rn(n,t,l,s),yo(n,t,l))}};function xf(t,n,s,l,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,S):n.prototype&&n.prototype.isPureReactComponent?!rs(s,l)||!rs(u,f):!0}function yf(t,n,s){var l=!1,u=Jn,f=n.contextType;return typeof f=="object"&&f!==null?f=jr(f):(u=Mr(n)?Ma:lr.current,l=n.contextTypes,f=(l=l!=null)?oi(t,u):Jn),n=new n(s,f),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ao,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=f),n}function bf(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Ao.enqueueReplaceState(n,n.state,null)}function kc(t,n,s,l){var u=t.stateNode;u.props=s,u.state=t.memoizedState,u.refs={},wc(t);var f=n.contextType;typeof f=="object"&&f!==null?u.context=jr(f):(f=Mr(n)?Ma:lr.current,u.context=oi(t,f)),u.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Oc(t,n,f,s),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Ao.enqueueReplaceState(u,u.state,null),bo(t,s,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function mi(t,n){try{var s="",l=n;do s+=ue(l),l=l.return;while(l);var u=s}catch(f){u=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:n,stack:u,digest:null}}function Fc(t,n,s){return{value:t,source:null,stack:s??null,digest:n??null}}function zc(t,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var cv=typeof WeakMap=="function"?WeakMap:Map;function Sf(t,n,s){s=An(-1,s),s.tag=3,s.payload={element:null};var l=n.value;return s.callback=function(){Do||(Do=!0,Jc=l),zc(t,n)},s}function wf(t,n,s){s=An(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;s.payload=function(){return l(u)},s.callback=function(){zc(t,n)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(s.callback=function(){zc(t,n),typeof l!="function"&&(aa===null?aa=new Set([this]):aa.add(this));var S=n.stack;this.componentDidCatch(n.value,{componentStack:S!==null?S:""})}),s}function Mf(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new cv;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(s)||(u.add(s),t=wv.bind(null,t,n,s),n.then(t,t))}function Ef(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function Tf(t,n,s,l,u){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=An(-1,1),n.tag=2,ra(s,n,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var uv=A.ReactCurrentOwner,Er=!1;function _r(t,n,s,l){n.child=t===null?Wh(n,null,s,l):di(n,t.child,s,l)}function Rf(t,n,s,l,u){s=s.render;var f=n.ref;return fi(n,u),l=Nc(t,n,s,l,f,u),s=Pc(),t!==null&&!Er?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,Cn(t,n,u)):(Dt&&s&&fc(n),n.flags|=1,_r(t,n,l,u),n.child)}function Af(t,n,s,l,u){if(t===null){var f=s.type;return typeof f=="function"&&!su(f)&&f.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=f,Cf(t,n,f,l,u)):(t=Ho(s.type,null,l,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,(t.lanes&u)===0){var S=f.memoizedProps;if(s=s.compare,s=s!==null?s:rs,s(S,l)&&t.ref===n.ref)return Cn(t,n,u)}return n.flags|=1,t=la(f,l),t.ref=n.ref,t.return=n,n.child=t}function Cf(t,n,s,l,u){if(t!==null){var f=t.memoizedProps;if(rs(f,l)&&t.ref===n.ref)if(Er=!1,n.pendingProps=l=f,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Er=!0);else return n.lanes=t.lanes,Cn(t,n,u)}return Bc(t,n,s,l,u)}function Nf(t,n,s){var l=n.pendingProps,u=l.children,f=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(vi,Fr),Fr|=s;else{if((s&1073741824)===0)return t=f!==null?f.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Pt(vi,Fr),Fr|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=f!==null?f.baseLanes:s,Pt(vi,Fr),Fr|=l}else f!==null?(l=f.baseLanes|s,n.memoizedState=null):l=s,Pt(vi,Fr),Fr|=l;return _r(t,n,u,s),n.child}function Pf(t,n){var s=n.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function Bc(t,n,s,l,u){var f=Mr(s)?Ma:lr.current;return f=oi(n,f),fi(n,u),s=Nc(t,n,s,l,f,u),l=Pc(),t!==null&&!Er?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,Cn(t,n,u)):(Dt&&l&&fc(n),n.flags|=1,_r(t,n,s,u),n.child)}function Lf(t,n,s,l,u){if(Mr(s)){var f=!0;ho(n)}else f=!1;if(fi(n,u),n.stateNode===null)No(t,n),yf(n,s,l),kc(n,s,l,u),l=!0;else if(t===null){var S=n.stateNode,L=n.memoizedProps;S.props=L;var F=S.context,re=s.contextType;typeof re=="object"&&re!==null?re=jr(re):(re=Mr(s)?Ma:lr.current,re=oi(n,re));var ve=s.getDerivedStateFromProps,we=typeof ve=="function"||typeof S.getSnapshotBeforeUpdate=="function";we||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==l||F!==re)&&bf(n,S,l,re),ta=!1;var ge=n.memoizedState;S.state=ge,bo(n,l,S,u),F=n.memoizedState,L!==l||ge!==F||wr.current||ta?(typeof ve=="function"&&(Oc(n,s,ve,l),F=n.memoizedState),(L=ta||xf(n,s,L,l,ge,F,re))?(we||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(n.flags|=4194308)):(typeof S.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=F),S.props=l,S.state=F,S.context=re,l=L):(typeof S.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{S=n.stateNode,qh(t,n),L=n.memoizedProps,re=n.type===n.elementType?L:Jr(n.type,L),S.props=re,we=n.pendingProps,ge=S.context,F=s.contextType,typeof F=="object"&&F!==null?F=jr(F):(F=Mr(s)?Ma:lr.current,F=oi(n,F));var Ie=s.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==we||ge!==F)&&bf(n,S,l,F),ta=!1,ge=n.memoizedState,S.state=ge,bo(n,l,S,u);var ze=n.memoizedState;L!==we||ge!==ze||wr.current||ta?(typeof Ie=="function"&&(Oc(n,s,Ie,l),ze=n.memoizedState),(re=ta||xf(n,s,re,l,ge,ze,F)||!1)?(ve||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(l,ze,F),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(l,ze,F)),typeof S.componentDidUpdate=="function"&&(n.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof S.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(n.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ze),S.props=l,S.state=ze,S.context=F,l=re):(typeof S.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(n.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(n.flags|=1024),l=!1)}return Hc(t,n,s,l,f,u)}function Hc(t,n,s,l,u,f){Pf(t,n);var S=(n.flags&128)!==0;if(!l&&!S)return u&&Oh(n,s,!1),Cn(t,n,f);l=n.stateNode,uv.current=n;var L=S&&typeof s.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&S?(n.child=di(n,t.child,null,f),n.child=di(n,null,L,f)):_r(t,n,L,f),n.memoizedState=l.state,u&&Oh(n,s,!0),n.child}function Uf(t){var n=t.stateNode;n.pendingContext?Ih(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Ih(t,n.context,!1),Mc(t,n.containerInfo)}function If(t,n,s,l,u){return ui(),vc(u),n.flags|=256,_r(t,n,s,l),n.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Df(t,n,s){var l=n.pendingProps,u=Ot.current,f=!1,S=(n.flags&128)!==0,L;if((L=S)||(L=t!==null&&t.memoizedState===null?!1:(u&2)!==0),L?(f=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Pt(Ot,u&1),t===null)return gc(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(S=l.children,t=l.fallback,f?(l=n.mode,f=n.child,S={mode:"hidden",children:S},(l&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=S):f=Go(S,l,0,null),t=Ia(t,l,s,null),f.return=n,t.return=n,f.sibling=t,n.child=f,n.child.memoizedState=Vc(s),n.memoizedState=Gc,t):jc(n,S));if(u=t.memoizedState,u!==null&&(L=u.dehydrated,L!==null))return dv(t,n,S,l,L,u,s);if(f){f=l.fallback,S=n.mode,u=t.child,L=u.sibling;var F={mode:"hidden",children:l.children};return(S&1)===0&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=F,n.deletions=null):(l=la(u,F),l.subtreeFlags=u.subtreeFlags&14680064),L!==null?f=la(L,f):(f=Ia(f,S,s,null),f.flags|=2),f.return=n,l.return=n,l.sibling=f,n.child=l,l=f,f=n.child,S=t.child.memoizedState,S=S===null?Vc(s):{baseLanes:S.baseLanes|s,cachePool:null,transitions:S.transitions},f.memoizedState=S,f.childLanes=t.childLanes&~s,n.memoizedState=Gc,l}return f=t.child,t=f.sibling,l=la(f,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=s),l.return=n,l.sibling=null,t!==null&&(s=n.deletions,s===null?(n.deletions=[t],n.flags|=16):s.push(t)),n.child=l,n.memoizedState=null,l}function jc(t,n){return n=Go({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function Co(t,n,s,l){return l!==null&&vc(l),di(n,t.child,null,s),t=jc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function dv(t,n,s,l,u,f,S){if(s)return n.flags&256?(n.flags&=-257,l=Fc(Error(r(422))),Co(t,n,S,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(f=l.fallback,u=n.mode,l=Go({mode:"visible",children:l.children},u,0,null),f=Ia(f,u,S,null),f.flags|=2,l.return=n,f.return=n,l.sibling=f,n.child=l,(n.mode&1)!==0&&di(n,t.child,null,S),n.child.memoizedState=Vc(S),n.memoizedState=Gc,f);if((n.mode&1)===0)return Co(t,n,S,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var L=l.dgst;return l=L,f=Error(r(419)),l=Fc(f,l,void 0),Co(t,n,S,l)}if(L=(S&t.childLanes)!==0,Er||L){if(l=tr,l!==null){switch(S&-S){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|S))!==0?0:u,u!==0&&u!==f.retryLane&&(f.retryLane=u,Rn(t,u),rn(l,t,u,-1))}return iu(),l=Fc(Error(r(421))),Co(t,n,S,l)}return u.data==="$?"?(n.flags|=128,n.child=t.child,n=Mv.bind(null,t),u._reactRetry=n,null):(t=f.treeContext,kr=Qn(u.nextSibling),Or=n,Dt=!0,Zr=null,t!==null&&(Gr[Vr++]=En,Gr[Vr++]=Tn,Gr[Vr++]=Ea,En=t.id,Tn=t.overflow,Ea=n),n=jc(n,l.children),n.flags|=4096,n)}function Of(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),bc(t.return,n,s)}function Wc(t,n,s,l,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=s,f.tailMode=u)}function kf(t,n,s){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(_r(t,n,l.children,s),l=Ot.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Of(t,s,n);else if(t.tag===19)Of(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pt(Ot,l),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(s=n.child,u=null;s!==null;)t=s.alternate,t!==null&&So(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),Wc(n,!1,u,s,f);break;case"backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&So(t)===null){n.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}Wc(n,!0,s,null,f);break;case"together":Wc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function No(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function Cn(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Na|=n.lanes,(s&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=la(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=la(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function hv(t,n,s){switch(n.tag){case 3:Uf(n),ui();break;case 5:$h(n);break;case 1:Mr(n.type)&&ho(n);break;case 4:Mc(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;Pt(_o,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Pt(Ot,Ot.current&1),n.flags|=128,null):(s&n.child.childLanes)!==0?Df(t,n,s):(Pt(Ot,Ot.current&1),t=Cn(t,n,s),t!==null?t.sibling:null);Pt(Ot,Ot.current&1);break;case 19:if(l=(s&n.childLanes)!==0,(t.flags&128)!==0){if(l)return kf(t,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Pt(Ot,Ot.current),l)break;return null;case 22:case 23:return n.lanes=0,Nf(t,n,s)}return Cn(t,n,s)}var Ff,Xc,zf,Bf;Ff=function(t,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Xc=function(){},zf=function(t,n,s,l){var u=t.memoizedProps;if(u!==l){t=n.stateNode,Aa(pn.current);var f=null;switch(s){case"input":u=B(t,u),l=B(t,l),f=[];break;case"select":u=j({},u,{value:void 0}),l=j({},l,{value:void 0}),f=[];break;case"textarea":u=w(t,u),l=w(t,l),f=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=lo)}ct(s,l);var S;s=null;for(re in u)if(!l.hasOwnProperty(re)&&u.hasOwnProperty(re)&&u[re]!=null)if(re==="style"){var L=u[re];for(S in L)L.hasOwnProperty(S)&&(s||(s={}),s[S]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?f||(f=[]):(f=f||[]).push(re,null));for(re in l){var F=l[re];if(L=u!=null?u[re]:void 0,l.hasOwnProperty(re)&&F!==L&&(F!=null||L!=null))if(re==="style")if(L){for(S in L)!L.hasOwnProperty(S)||F&&F.hasOwnProperty(S)||(s||(s={}),s[S]="");for(S in F)F.hasOwnProperty(S)&&L[S]!==F[S]&&(s||(s={}),s[S]=F[S])}else s||(f||(f=[]),f.push(re,s)),s=F;else re==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,L=L?L.__html:void 0,F!=null&&L!==F&&(f=f||[]).push(re,F)):re==="children"?typeof F!="string"&&typeof F!="number"||(f=f||[]).push(re,""+F):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(F!=null&&re==="onScroll"&&Ut("scroll",t),f||L===F||(f=[])):(f=f||[]).push(re,F))}s&&(f=f||[]).push("style",s);var re=f;(n.updateQueue=re)&&(n.flags|=4)}},Bf=function(t,n,s,l){s!==l&&(n.flags|=4)};function vs(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ur(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function fv(t,n,s){var l=n.pendingProps;switch(pc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ur(n),null;case 1:return Mr(n.type)&&uo(),ur(n),null;case 3:return l=n.stateNode,pi(),It(wr),It(lr),Rc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(go(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zr!==null&&(ru(Zr),Zr=null))),Xc(t,n),ur(n),null;case 5:Ec(n);var u=Aa(hs.current);if(s=n.type,t!==null&&n.stateNode!=null)zf(t,n,s,l,u),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return ur(n),null}if(t=Aa(pn.current),go(n)){l=n.stateNode,s=n.type;var f=n.memoizedProps;switch(l[fn]=n,l[os]=f,t=(n.mode&1)!==0,s){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(u=0;u<as.length;u++)Ut(as[u],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":pr(l,f),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!f.multiple},Ut("invalid",l);break;case"textarea":ee(l,f),Ut("invalid",l)}ct(s,f),u=null;for(var S in f)if(f.hasOwnProperty(S)){var L=f[S];S==="children"?typeof L=="string"?l.textContent!==L&&(f.suppressHydrationWarning!==!0&&oo(l.textContent,L,t),u=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(f.suppressHydrationWarning!==!0&&oo(l.textContent,L,t),u=["children",""+L]):o.hasOwnProperty(S)&&L!=null&&S==="onScroll"&&Ut("scroll",l)}switch(s){case"input":Et(l),We(l,f,!0);break;case"textarea":Et(l),ye(l);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(l.onclick=lo)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{S=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=S.createElement(s,{is:l.is}):(t=S.createElement(s),s==="select"&&(S=t,l.multiple?S.multiple=!0:l.size&&(S.size=l.size))):t=S.createElementNS(t,s),t[fn]=n,t[os]=l,Ff(t,n,!1,!1),n.stateNode=t;e:{switch(S=at(s,l),s){case"dialog":Ut("cancel",t),Ut("close",t),u=l;break;case"iframe":case"object":case"embed":Ut("load",t),u=l;break;case"video":case"audio":for(u=0;u<as.length;u++)Ut(as[u],t);u=l;break;case"source":Ut("error",t),u=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),u=l;break;case"details":Ut("toggle",t),u=l;break;case"input":pr(t,l),u=B(t,l),Ut("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=j({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":ee(t,l),u=w(t,l),Ut("invalid",t);break;default:u=l}ct(s,u),L=u;for(f in L)if(L.hasOwnProperty(f)){var F=L[f];f==="style"?tt(t,F):f==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Je(t,F)):f==="children"?typeof F=="string"?(s!=="textarea"||F!=="")&&Ye(t,F):typeof F=="number"&&Ye(t,""+F):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?F!=null&&f==="onScroll"&&Ut("scroll",t):F!=null&&I(t,f,F,S))}switch(s){case"input":Et(t),We(t,l,!1);break;case"textarea":Et(t),ye(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,f=l.value,f!=null?N(t,!!l.multiple,f,!1):l.defaultValue!=null&&N(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=lo)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ur(n),null;case 6:if(t&&n.stateNode!=null)Bf(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(s=Aa(hs.current),Aa(pn.current),go(n)){if(l=n.stateNode,s=n.memoizedProps,l[fn]=n,(f=l.nodeValue!==s)&&(t=Or,t!==null))switch(t.tag){case 3:oo(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(l.nodeValue,s,(t.mode&1)!==0)}f&&(n.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[fn]=n,n.stateNode=l}return ur(n),null;case 13:if(It(Ot),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Dt&&kr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Gh(),ui(),n.flags|=98560,f=!1;else if(f=go(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[fn]=n}else ui(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ur(n),f=!1}else Zr!==null&&(ru(Zr),Zr=null),f=!0;if(!f)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=s,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(Ot.current&1)!==0?$t===0&&($t=3):iu())),n.updateQueue!==null&&(n.flags|=4),ur(n),null);case 4:return pi(),Xc(t,n),t===null&&is(n.stateNode.containerInfo),ur(n),null;case 10:return yc(n.type._context),ur(n),null;case 17:return Mr(n.type)&&uo(),ur(n),null;case 19:if(It(Ot),f=n.memoizedState,f===null)return ur(n),null;if(l=(n.flags&128)!==0,S=f.rendering,S===null)if(l)vs(f,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(S=So(t),S!==null){for(n.flags|=128,vs(f,!1),l=S.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=s,s=n.child;s!==null;)f=s,t=l,f.flags&=14680066,S=f.alternate,S===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=S.childLanes,f.lanes=S.lanes,f.child=S.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=S.memoizedProps,f.memoizedState=S.memoizedState,f.updateQueue=S.updateQueue,f.type=S.type,t=S.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Pt(Ot,Ot.current&1|2),n.child}t=t.sibling}f.tail!==null&&Z()>_i&&(n.flags|=128,l=!0,vs(f,!1),n.lanes=4194304)}else{if(!l)if(t=So(S),t!==null){if(n.flags|=128,l=!0,s=t.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),vs(f,!0),f.tail===null&&f.tailMode==="hidden"&&!S.alternate&&!Dt)return ur(n),null}else 2*Z()-f.renderingStartTime>_i&&s!==1073741824&&(n.flags|=128,l=!0,vs(f,!1),n.lanes=4194304);f.isBackwards?(S.sibling=n.child,n.child=S):(s=f.last,s!==null?s.sibling=S:n.child=S,f.last=S)}return f.tail!==null?(n=f.tail,f.rendering=n,f.tail=n.sibling,f.renderingStartTime=Z(),n.sibling=null,s=Ot.current,Pt(Ot,l?s&1|2:s&1),n):(ur(n),null);case 22:case 23:return au(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(Fr&1073741824)!==0&&(ur(n),n.subtreeFlags&6&&(n.flags|=8192)):ur(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function pv(t,n){switch(pc(n),n.tag){case 1:return Mr(n.type)&&uo(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return pi(),It(wr),It(lr),Rc(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Ec(n),null;case 13:if(It(Ot),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ui()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return It(Ot),null;case 4:return pi(),null;case 10:return yc(n.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Po=!1,dr=!1,mv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function gi(t,n){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Ft(t,n,l)}else s.current=null}function Hf(t,n,s){try{s()}catch(l){Ft(t,n,l)}}var Gf=!1;function gv(t,n){if(ic=$s,t=_h(),Ql(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var S=0,L=-1,F=-1,re=0,ve=0,we=t,ge=null;t:for(;;){for(var Ie;we!==s||u!==0&&we.nodeType!==3||(L=S+u),we!==f||l!==0&&we.nodeType!==3||(F=S+l),we.nodeType===3&&(S+=we.nodeValue.length),(Ie=we.firstChild)!==null;)ge=we,we=Ie;for(;;){if(we===t)break t;if(ge===s&&++re===u&&(L=S),ge===f&&++ve===l&&(F=S),(Ie=we.nextSibling)!==null)break;we=ge,ge=we.parentNode}we=Ie}s=L===-1||F===-1?null:{start:L,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(sc={focusedElem:t,selectionRange:s},$s=!1,Oe=n;Oe!==null;)if(n=Oe,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Oe=t;else for(;Oe!==null;){n=Oe;try{var ze=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Be=ze.memoizedProps,Ht=ze.memoizedState,Q=n.stateNode,G=Q.getSnapshotBeforeUpdate(n.elementType===n.type?Be:Jr(n.type,Be),Ht);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var J=n.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(Ee){Ft(n,n.return,Ee)}if(t=n.sibling,t!==null){t.return=n.return,Oe=t;break}Oe=n.return}return ze=Gf,Gf=!1,ze}function _s(t,n,s){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var f=u.destroy;u.destroy=void 0,f!==void 0&&Hf(n,s,f)}u=u.next}while(u!==l)}}function Lo(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==n)}}function qc(t){var n=t.ref;if(n!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof n=="function"?n(t):n.current=t}}function Vf(t){var n=t.alternate;n!==null&&(t.alternate=null,Vf(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[fn],delete n[os],delete n[uc],delete n[Zg],delete n[Jg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jf(t){return t.tag===5||t.tag===3||t.tag===4}function Wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(t,n):s.insertBefore(t,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(t,s)):(n=s,n.appendChild(t)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=lo));else if(l!==4&&(t=t.child,t!==null))for(Yc(t,n,s),t=t.sibling;t!==null;)Yc(t,n,s),t=t.sibling}function Kc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Kc(t,n,s),t=t.sibling;t!==null;)Kc(t,n,s),t=t.sibling}var ar=null,en=!1;function na(t,n,s){for(s=s.child;s!==null;)Xf(t,n,s),s=s.sibling}function Xf(t,n,s){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Ke,s)}catch{}switch(s.tag){case 5:dr||gi(s,n);case 6:var l=ar,u=en;ar=null,na(t,n,s),ar=l,en=u,ar!==null&&(en?(t=ar,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):ar.removeChild(s.stateNode));break;case 18:ar!==null&&(en?(t=ar,s=s.stateNode,t.nodeType===8?cc(t.parentNode,s):t.nodeType===1&&cc(t,s),$i(t)):cc(ar,s.stateNode));break;case 4:l=ar,u=en,ar=s.stateNode.containerInfo,en=!0,na(t,n,s),ar=l,en=u;break;case 0:case 11:case 14:case 15:if(!dr&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var f=u,S=f.destroy;f=f.tag,S!==void 0&&((f&2)!==0||(f&4)!==0)&&Hf(s,n,S),u=u.next}while(u!==l)}na(t,n,s);break;case 1:if(!dr&&(gi(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(L){Ft(s,n,L)}na(t,n,s);break;case 21:na(t,n,s);break;case 22:s.mode&1?(dr=(l=dr)||s.memoizedState!==null,na(t,n,s),dr=l):na(t,n,s);break;default:na(t,n,s)}}function qf(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new mv),n.forEach(function(l){var u=Ev.bind(null,t,l);s.has(l)||(s.add(l),l.then(u,u))})}}function tn(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l];try{var f=t,S=n,L=S;e:for(;L!==null;){switch(L.tag){case 5:ar=L.stateNode,en=!1;break e;case 3:ar=L.stateNode.containerInfo,en=!0;break e;case 4:ar=L.stateNode.containerInfo,en=!0;break e}L=L.return}if(ar===null)throw Error(r(160));Xf(f,S,u),ar=null,en=!1;var F=u.alternate;F!==null&&(F.return=null),u.return=null}catch(re){Ft(u,n,re)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Yf(n,t),n=n.sibling}function Yf(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(n,t),gn(t),l&4){try{_s(3,t,t.return),Lo(3,t)}catch(Be){Ft(t,t.return,Be)}try{_s(5,t,t.return)}catch(Be){Ft(t,t.return,Be)}}break;case 1:tn(n,t),gn(t),l&512&&s!==null&&gi(s,s.return);break;case 5:if(tn(n,t),gn(t),l&512&&s!==null&&gi(s,s.return),t.flags&32){var u=t.stateNode;try{Ye(u,"")}catch(Be){Ft(t,t.return,Be)}}if(l&4&&(u=t.stateNode,u!=null)){var f=t.memoizedProps,S=s!==null?s.memoizedProps:f,L=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{L==="input"&&f.type==="radio"&&f.name!=null&&ft(u,f),at(L,S);var re=at(L,f);for(S=0;S<F.length;S+=2){var ve=F[S],we=F[S+1];ve==="style"?tt(u,we):ve==="dangerouslySetInnerHTML"?Je(u,we):ve==="children"?Ye(u,we):I(u,ve,we,re)}switch(L){case"input":lt(u,f);break;case"textarea":he(u,f);break;case"select":var ge=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!f.multiple;var Ie=f.value;Ie!=null?N(u,!!f.multiple,Ie,!1):ge!==!!f.multiple&&(f.defaultValue!=null?N(u,!!f.multiple,f.defaultValue,!0):N(u,!!f.multiple,f.multiple?[]:"",!1))}u[os]=f}catch(Be){Ft(t,t.return,Be)}}break;case 6:if(tn(n,t),gn(t),l&4){if(t.stateNode===null)throw Error(r(162));u=t.stateNode,f=t.memoizedProps;try{u.nodeValue=f}catch(Be){Ft(t,t.return,Be)}}break;case 3:if(tn(n,t),gn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{$i(n.containerInfo)}catch(Be){Ft(t,t.return,Be)}break;case 4:tn(n,t),gn(t);break;case 13:tn(n,t),gn(t),u=t.child,u.flags&8192&&(f=u.memoizedState!==null,u.stateNode.isHidden=f,!f||u.alternate!==null&&u.alternate.memoizedState!==null||(Zc=Z())),l&4&&qf(t);break;case 22:if(ve=s!==null&&s.memoizedState!==null,t.mode&1?(dr=(re=dr)||ve,tn(n,t),dr=re):tn(n,t),gn(t),l&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!ve&&(t.mode&1)!==0)for(Oe=t,ve=t.child;ve!==null;){for(we=Oe=ve;Oe!==null;){switch(ge=Oe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:_s(4,ge,ge.return);break;case 1:gi(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){l=ge,s=ge.return;try{n=l,ze.props=n.memoizedProps,ze.state=n.memoizedState,ze.componentWillUnmount()}catch(Be){Ft(l,s,Be)}}break;case 5:gi(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Qf(we);continue}}Ie!==null?(Ie.return=ge,Oe=Ie):Qf(we)}ve=ve.sibling}e:for(ve=null,we=t;;){if(we.tag===5){if(ve===null){ve=we;try{u=we.stateNode,re?(f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(L=we.stateNode,F=we.memoizedProps.style,S=F!=null&&F.hasOwnProperty("display")?F.display:null,L.style.display=et("display",S))}catch(Be){Ft(t,t.return,Be)}}}else if(we.tag===6){if(ve===null)try{we.stateNode.nodeValue=re?"":we.memoizedProps}catch(Be){Ft(t,t.return,Be)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===t)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===t)break e;for(;we.sibling===null;){if(we.return===null||we.return===t)break e;ve===we&&(ve=null),we=we.return}ve===we&&(ve=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:tn(n,t),gn(t),l&4&&qf(t);break;case 21:break;default:tn(n,t),gn(t)}}function gn(t){var n=t.flags;if(n&2){try{e:{for(var s=t.return;s!==null;){if(jf(s)){var l=s;break e}s=s.return}throw Error(r(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Ye(u,""),l.flags&=-33);var f=Wf(t);Kc(t,f,u);break;case 3:case 4:var S=l.stateNode.containerInfo,L=Wf(t);Yc(t,L,S);break;default:throw Error(r(161))}}catch(F){Ft(t,t.return,F)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function vv(t,n,s){Oe=t,Kf(t)}function Kf(t,n,s){for(var l=(t.mode&1)!==0;Oe!==null;){var u=Oe,f=u.child;if(u.tag===22&&l){var S=u.memoizedState!==null||Po;if(!S){var L=u.alternate,F=L!==null&&L.memoizedState!==null||dr;L=Po;var re=dr;if(Po=S,(dr=F)&&!re)for(Oe=u;Oe!==null;)S=Oe,F=S.child,S.tag===22&&S.memoizedState!==null?Zf(u):F!==null?(F.return=S,Oe=F):Zf(u);for(;f!==null;)Oe=f,Kf(f),f=f.sibling;Oe=u,Po=L,dr=re}$f(t)}else(u.subtreeFlags&8772)!==0&&f!==null?(f.return=u,Oe=f):$f(t)}}function $f(t){for(;Oe!==null;){var n=Oe;if((n.flags&8772)!==0){var s=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:dr||Lo(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!dr)if(s===null)l.componentDidMount();else{var u=n.elementType===n.type?s.memoizedProps:Jr(n.type,s.memoizedProps);l.componentDidUpdate(u,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var f=n.updateQueue;f!==null&&Kh(n,f,l);break;case 3:var S=n.updateQueue;if(S!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}Kh(n,S,s)}break;case 5:var L=n.stateNode;if(s===null&&n.flags&4){s=L;var F=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&s.focus();break;case"img":F.src&&(s.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var re=n.alternate;if(re!==null){var ve=re.memoizedState;if(ve!==null){var we=ve.dehydrated;we!==null&&$i(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}dr||n.flags&512&&qc(n)}catch(ge){Ft(n,n.return,ge)}}if(n===t){Oe=null;break}if(s=n.sibling,s!==null){s.return=n.return,Oe=s;break}Oe=n.return}}function Qf(t){for(;Oe!==null;){var n=Oe;if(n===t){Oe=null;break}var s=n.sibling;if(s!==null){s.return=n.return,Oe=s;break}Oe=n.return}}function Zf(t){for(;Oe!==null;){var n=Oe;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{Lo(4,n)}catch(F){Ft(n,s,F)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(F){Ft(n,u,F)}}var f=n.return;try{qc(n)}catch(F){Ft(n,f,F)}break;case 5:var S=n.return;try{qc(n)}catch(F){Ft(n,S,F)}}}catch(F){Ft(n,n.return,F)}if(n===t){Oe=null;break}var L=n.sibling;if(L!==null){L.return=n.return,Oe=L;break}Oe=n.return}}var _v=Math.ceil,Uo=A.ReactCurrentDispatcher,$c=A.ReactCurrentOwner,Xr=A.ReactCurrentBatchConfig,_t=0,tr=null,jt=null,ir=0,Fr=0,vi=Zn(0),$t=0,xs=null,Na=0,Io=0,Qc=0,ys=null,Tr=null,Zc=0,_i=1/0,Nn=null,Do=!1,Jc=null,aa=null,Oo=!1,ia=null,ko=0,bs=0,eu=null,Fo=-1,zo=0;function xr(){return(_t&6)!==0?Z():Fo!==-1?Fo:Fo=Z()}function sa(t){return(t.mode&1)===0?1:(_t&2)!==0&&ir!==0?ir&-ir:tv.transition!==null?(zo===0&&(zo=Ct()),zo):(t=vt,t!==0||(t=window.event,t=t===void 0?16:Zd(t.type)),t)}function rn(t,n,s,l){if(50<bs)throw bs=0,eu=null,Error(r(185));Jt(t,s,l),((_t&2)===0||t!==tr)&&(t===tr&&((_t&2)===0&&(Io|=s),$t===4&&oa(t,ir)),Rr(t,l),s===1&&_t===0&&(n.mode&1)===0&&(_i=Z()+500,fo&&ea()))}function Rr(t,n){var s=t.callbackNode;gr(t,n);var l=sr(t,t===tr?ir:0);if(l===0)s!==null&&E(s),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(s!=null&&E(s),n===1)t.tag===0?ev(ep.bind(null,t)):kh(ep.bind(null,t)),$g(function(){(_t&6)===0&&ea()}),s=null;else{switch(hn(l)){case 1:s=xe;break;case 4:s=Ue;break;case 16:s=Le;break;case 536870912:s=rt;break;default:s=Le}s=lp(s,Jf.bind(null,t))}t.callbackPriority=n,t.callbackNode=s}}function Jf(t,n){if(Fo=-1,zo=0,(_t&6)!==0)throw Error(r(327));var s=t.callbackNode;if(xi()&&t.callbackNode!==s)return null;var l=sr(t,t===tr?ir:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||n)n=Bo(t,l);else{n=l;var u=_t;_t|=2;var f=rp();(tr!==t||ir!==n)&&(Nn=null,_i=Z()+500,La(t,n));do try{bv();break}catch(L){tp(t,L)}while(!0);xc(),Uo.current=f,_t=u,jt!==null?n=0:(tr=null,ir=0,n=$t)}if(n!==0){if(n===2&&(u=Sn(t),u!==0&&(l=u,n=tu(t,u))),n===1)throw s=xs,La(t,0),oa(t,l),Rr(t,Z()),s;if(n===6)oa(t,l);else{if(u=t.current.alternate,(l&30)===0&&!xv(u)&&(n=Bo(t,l),n===2&&(f=Sn(t),f!==0&&(l=f,n=tu(t,f))),n===1))throw s=xs,La(t,0),oa(t,l),Rr(t,Z()),s;switch(t.finishedWork=u,t.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:Ua(t,Tr,Nn);break;case 3:if(oa(t,l),(l&130023424)===l&&(n=Zc+500-Z(),10<n)){if(sr(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){xr(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=lc(Ua.bind(null,t,Tr,Nn),n);break}Ua(t,Tr,Nn);break;case 4:if(oa(t,l),(l&4194240)===l)break;for(n=t.eventTimes,u=-1;0<l;){var S=31-st(l);f=1<<S,S=n[S],S>u&&(u=S),l&=~f}if(l=u,l=Z()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*_v(l/1960))-l,10<l){t.timeoutHandle=lc(Ua.bind(null,t,Tr,Nn),l);break}Ua(t,Tr,Nn);break;case 5:Ua(t,Tr,Nn);break;default:throw Error(r(329))}}}return Rr(t,Z()),t.callbackNode===s?Jf.bind(null,t):null}function tu(t,n){var s=ys;return t.current.memoizedState.isDehydrated&&(La(t,n).flags|=256),t=Bo(t,n),t!==2&&(n=Tr,Tr=s,n!==null&&ru(n)),t}function ru(t){Tr===null?Tr=t:Tr.push.apply(Tr,t)}function xv(t){for(var n=t;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var u=s[l],f=u.getSnapshot;u=u.value;try{if(!Qr(f(),u))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function oa(t,n){for(n&=~Qc,n&=~Io,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var s=31-st(n),l=1<<s;t[s]=-1,n&=~l}}function ep(t){if((_t&6)!==0)throw Error(r(327));xi();var n=sr(t,0);if((n&1)===0)return Rr(t,Z()),null;var s=Bo(t,n);if(t.tag!==0&&s===2){var l=Sn(t);l!==0&&(n=l,s=tu(t,l))}if(s===1)throw s=xs,La(t,0),oa(t,n),Rr(t,Z()),s;if(s===6)throw Error(r(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Ua(t,Tr,Nn),Rr(t,Z()),null}function nu(t,n){var s=_t;_t|=1;try{return t(n)}finally{_t=s,_t===0&&(_i=Z()+500,fo&&ea())}}function Pa(t){ia!==null&&ia.tag===0&&(_t&6)===0&&xi();var n=_t;_t|=1;var s=Xr.transition,l=vt;try{if(Xr.transition=null,vt=1,t)return t()}finally{vt=l,Xr.transition=s,_t=n,(_t&6)===0&&ea()}}function au(){Fr=vi.current,It(vi)}function La(t,n){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Kg(s)),jt!==null)for(s=jt.return;s!==null;){var l=s;switch(pc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&uo();break;case 3:pi(),It(wr),It(lr),Rc();break;case 5:Ec(l);break;case 4:pi();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:yc(l.type._context);break;case 22:case 23:au()}s=s.return}if(tr=t,jt=t=la(t.current,null),ir=Fr=n,$t=0,xs=null,Qc=Io=Na=0,Tr=ys=null,Ra!==null){for(n=0;n<Ra.length;n++)if(s=Ra[n],l=s.interleaved,l!==null){s.interleaved=null;var u=l.next,f=s.pending;if(f!==null){var S=f.next;f.next=u,l.next=S}s.pending=l}Ra=null}return t}function tp(t,n){do{var s=jt;try{if(xc(),wo.current=Ro,Mo){for(var l=kt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Mo=!1}if(Ca=0,er=Kt=kt=null,fs=!1,ps=0,$c.current=null,s===null||s.return===null){$t=1,xs=n,jt=null;break}e:{var f=t,S=s.return,L=s,F=n;if(n=ir,L.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var re=F,ve=L,we=ve.tag;if((ve.mode&1)===0&&(we===0||we===11||we===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Ef(S);if(Ie!==null){Ie.flags&=-257,Tf(Ie,S,L,f,n),Ie.mode&1&&Mf(f,re,n),n=Ie,F=re;var ze=n.updateQueue;if(ze===null){var Be=new Set;Be.add(F),n.updateQueue=Be}else ze.add(F);break e}else{if((n&1)===0){Mf(f,re,n),iu();break e}F=Error(r(426))}}else if(Dt&&L.mode&1){var Ht=Ef(S);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Tf(Ht,S,L,f,n),vc(mi(F,L));break e}}f=F=mi(F,L),$t!==4&&($t=2),ys===null?ys=[f]:ys.push(f),f=S;do{switch(f.tag){case 3:f.flags|=65536,n&=-n,f.lanes|=n;var Q=Sf(f,F,n);Yh(f,Q);break e;case 1:L=F;var G=f.type,J=f.stateNode;if((f.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(aa===null||!aa.has(J)))){f.flags|=65536,n&=-n,f.lanes|=n;var Ee=wf(f,L,n);Yh(f,Ee);break e}}f=f.return}while(f!==null)}ap(s)}catch(je){n=je,jt===s&&s!==null&&(jt=s=s.return);continue}break}while(!0)}function rp(){var t=Uo.current;return Uo.current=Ro,t===null?Ro:t}function iu(){($t===0||$t===3||$t===2)&&($t=4),tr===null||(Na&268435455)===0&&(Io&268435455)===0||oa(tr,ir)}function Bo(t,n){var s=_t;_t|=2;var l=rp();(tr!==t||ir!==n)&&(Nn=null,La(t,n));do try{yv();break}catch(u){tp(t,u)}while(!0);if(xc(),_t=s,Uo.current=l,jt!==null)throw Error(r(261));return tr=null,ir=0,$t}function yv(){for(;jt!==null;)np(jt)}function bv(){for(;jt!==null&&!q();)np(jt)}function np(t){var n=op(t.alternate,t,Fr);t.memoizedProps=t.pendingProps,n===null?ap(t):jt=n,$c.current=null}function ap(t){var n=t;do{var s=n.alternate;if(t=n.return,(n.flags&32768)===0){if(s=fv(s,n,Fr),s!==null){jt=s;return}}else{if(s=pv(s,n),s!==null){s.flags&=32767,jt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,jt=null;return}}if(n=n.sibling,n!==null){jt=n;return}jt=n=t}while(n!==null);$t===0&&($t=5)}function Ua(t,n,s){var l=vt,u=Xr.transition;try{Xr.transition=null,vt=1,Sv(t,n,s,l)}finally{Xr.transition=u,vt=l}return null}function Sv(t,n,s,l){do xi();while(ia!==null);if((_t&6)!==0)throw Error(r(327));s=t.finishedWork;var u=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0;var f=s.lanes|s.childLanes;if(Yt(t,f),t===tr&&(jt=tr=null,ir=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Oo||(Oo=!0,lp(Le,function(){return xi(),null})),f=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||f){f=Xr.transition,Xr.transition=null;var S=vt;vt=1;var L=_t;_t|=4,$c.current=null,gv(t,s),Yf(s,t),Gg(sc),$s=!!ic,sc=ic=null,t.current=s,vv(s),ne(),_t=L,vt=S,Xr.transition=f}else t.current=s;if(Oo&&(Oo=!1,ia=t,ko=u),f=t.pendingLanes,f===0&&(aa=null),mt(s.stateNode),Rr(t,Z()),n!==null)for(l=t.onRecoverableError,s=0;s<n.length;s++)u=n[s],l(u.value,{componentStack:u.stack,digest:u.digest});if(Do)throw Do=!1,t=Jc,Jc=null,t;return(ko&1)!==0&&t.tag!==0&&xi(),f=t.pendingLanes,(f&1)!==0?t===eu?bs++:(bs=0,eu=t):bs=0,ea(),null}function xi(){if(ia!==null){var t=hn(ko),n=Xr.transition,s=vt;try{if(Xr.transition=null,vt=16>t?16:t,ia===null)var l=!1;else{if(t=ia,ia=null,ko=0,(_t&6)!==0)throw Error(r(331));var u=_t;for(_t|=4,Oe=t.current;Oe!==null;){var f=Oe,S=f.child;if((Oe.flags&16)!==0){var L=f.deletions;if(L!==null){for(var F=0;F<L.length;F++){var re=L[F];for(Oe=re;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:_s(8,ve,f)}var we=ve.child;if(we!==null)we.return=ve,Oe=we;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,Ie=ve.return;if(Vf(ve),ve===re){Oe=null;break}if(ge!==null){ge.return=Ie,Oe=ge;break}Oe=Ie}}}var ze=f.alternate;if(ze!==null){var Be=ze.child;if(Be!==null){ze.child=null;do{var Ht=Be.sibling;Be.sibling=null,Be=Ht}while(Be!==null)}}Oe=f}}if((f.subtreeFlags&2064)!==0&&S!==null)S.return=f,Oe=S;else e:for(;Oe!==null;){if(f=Oe,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:_s(9,f,f.return)}var Q=f.sibling;if(Q!==null){Q.return=f.return,Oe=Q;break e}Oe=f.return}}var G=t.current;for(Oe=G;Oe!==null;){S=Oe;var J=S.child;if((S.subtreeFlags&2064)!==0&&J!==null)J.return=S,Oe=J;else e:for(S=G;Oe!==null;){if(L=Oe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Lo(9,L)}}catch(je){Ft(L,L.return,je)}if(L===S){Oe=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,Oe=Ee;break e}Oe=L.return}}if(_t=u,ea(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Ke,t)}catch{}l=!0}return l}finally{vt=s,Xr.transition=n}}return!1}function ip(t,n,s){n=mi(s,n),n=Sf(t,n,1),t=ra(t,n,1),n=xr(),t!==null&&(Jt(t,1,n),Rr(t,n))}function Ft(t,n,s){if(t.tag===3)ip(t,t,s);else for(;n!==null;){if(n.tag===3){ip(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(aa===null||!aa.has(l))){t=mi(s,t),t=wf(n,t,1),n=ra(n,t,1),t=xr(),n!==null&&(Jt(n,1,t),Rr(n,t));break}}n=n.return}}function wv(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),n=xr(),t.pingedLanes|=t.suspendedLanes&s,tr===t&&(ir&s)===s&&($t===4||$t===3&&(ir&130023424)===ir&&500>Z()-Zc?La(t,0):Qc|=s),Rr(t,n)}function sp(t,n){n===0&&((t.mode&1)===0?n=1:(n=Vt,Vt<<=1,(Vt&130023424)===0&&(Vt=4194304)));var s=xr();t=Rn(t,n),t!==null&&(Jt(t,n,s),Rr(t,s))}function Mv(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),sp(t,s)}function Ev(t,n){var s=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),sp(t,s)}var op;op=function(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps||wr.current)Er=!0;else{if((t.lanes&s)===0&&(n.flags&128)===0)return Er=!1,hv(t,n,s);Er=(t.flags&131072)!==0}else Er=!1,Dt&&(n.flags&1048576)!==0&&Fh(n,mo,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;No(t,n),t=n.pendingProps;var u=oi(n,lr.current);fi(n,s),u=Nc(null,n,l,t,u,s);var f=Pc();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Mr(l)?(f=!0,ho(n)):f=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,wc(n),u.updater=Ao,n.stateNode=u,u._reactInternals=n,kc(n,l,t,s),n=Hc(null,n,l,!0,f,s)):(n.tag=0,Dt&&f&&fc(n),_r(null,n,u,s),n=n.child),n;case 16:l=n.elementType;e:{switch(No(t,n),t=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=Rv(l),t=Jr(l,t),u){case 0:n=Bc(null,n,l,t,s);break e;case 1:n=Lf(null,n,l,t,s);break e;case 11:n=Rf(null,n,l,t,s);break e;case 14:n=Af(null,n,l,Jr(l.type,t),s);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Jr(l,u),Bc(t,n,l,u,s);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Jr(l,u),Lf(t,n,l,u,s);case 3:e:{if(Uf(n),t===null)throw Error(r(387));l=n.pendingProps,f=n.memoizedState,u=f.element,qh(t,n),bo(n,l,null,s);var S=n.memoizedState;if(l=S.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){u=mi(Error(r(423)),n),n=If(t,n,l,s,u);break e}else if(l!==u){u=mi(Error(r(424)),n),n=If(t,n,l,s,u);break e}else for(kr=Qn(n.stateNode.containerInfo.firstChild),Or=n,Dt=!0,Zr=null,s=Wh(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ui(),l===u){n=Cn(t,n,s);break e}_r(t,n,l,s)}n=n.child}return n;case 5:return $h(n),t===null&&gc(n),l=n.type,u=n.pendingProps,f=t!==null?t.memoizedProps:null,S=u.children,oc(l,u)?S=null:f!==null&&oc(l,f)&&(n.flags|=32),Pf(t,n),_r(t,n,S,s),n.child;case 6:return t===null&&gc(n),null;case 13:return Df(t,n,s);case 4:return Mc(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=di(n,null,l,s):_r(t,n,l,s),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Jr(l,u),Rf(t,n,l,u,s);case 7:return _r(t,n,n.pendingProps,s),n.child;case 8:return _r(t,n,n.pendingProps.children,s),n.child;case 12:return _r(t,n,n.pendingProps.children,s),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,f=n.memoizedProps,S=u.value,Pt(_o,l._currentValue),l._currentValue=S,f!==null)if(Qr(f.value,S)){if(f.children===u.children&&!wr.current){n=Cn(t,n,s);break e}}else for(f=n.child,f!==null&&(f.return=n);f!==null;){var L=f.dependencies;if(L!==null){S=f.child;for(var F=L.firstContext;F!==null;){if(F.context===l){if(f.tag===1){F=An(-1,s&-s),F.tag=2;var re=f.updateQueue;if(re!==null){re=re.shared;var ve=re.pending;ve===null?F.next=F:(F.next=ve.next,ve.next=F),re.pending=F}}f.lanes|=s,F=f.alternate,F!==null&&(F.lanes|=s),bc(f.return,s,n),L.lanes|=s;break}F=F.next}}else if(f.tag===10)S=f.type===n.type?null:f.child;else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,L=S.alternate,L!==null&&(L.lanes|=s),bc(S,s,n),S=f.sibling}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===n){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}_r(t,n,u.children,s),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,fi(n,s),u=jr(u),l=l(u),n.flags|=1,_r(t,n,l,s),n.child;case 14:return l=n.type,u=Jr(l,n.pendingProps),u=Jr(l.type,u),Af(t,n,l,u,s);case 15:return Cf(t,n,n.type,n.pendingProps,s);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Jr(l,u),No(t,n),n.tag=1,Mr(l)?(t=!0,ho(n)):t=!1,fi(n,s),yf(n,l,u),kc(n,l,u,s),Hc(null,n,l,!0,t,s);case 19:return kf(t,n,s);case 22:return Nf(t,n,s)}throw Error(r(156,n.tag))};function lp(t,n){return qs(t,n)}function Tv(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qr(t,n,s,l){return new Tv(t,n,s,l)}function su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rv(t){if(typeof t=="function")return su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===me)return 14}return 2}function la(t,n){var s=t.alternate;return s===null?(s=qr(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Ho(t,n,s,l,u,f){var S=2;if(l=t,typeof t=="function")su(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case z:return Ia(s.children,u,f,n);case K:S=8,u|=8;break;case C:return t=qr(12,s,n,u|2),t.elementType=C,t.lanes=f,t;case ae:return t=qr(13,s,n,u),t.elementType=ae,t.lanes=f,t;case ce:return t=qr(19,s,n,u),t.elementType=ce,t.lanes=f,t;case fe:return Go(s,u,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:S=10;break e;case H:S=9;break e;case se:S=11;break e;case me:S=14;break e;case le:S=16,l=null;break e}throw Error(r(130,t==null?t:typeof t,""))}return n=qr(S,s,n,u),n.elementType=t,n.type=l,n.lanes=f,n}function Ia(t,n,s,l){return t=qr(7,t,l,n),t.lanes=s,t}function Go(t,n,s,l){return t=qr(22,t,l,n),t.elementType=fe,t.lanes=s,t.stateNode={isHidden:!1},t}function ou(t,n,s){return t=qr(6,t,null,n),t.lanes=s,t}function lu(t,n,s){return n=qr(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Av(t,n,s,l,u){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=or(0),this.expirationTimes=or(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=or(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function cu(t,n,s,l,u,f,S,L,F){return t=new Av(t,n,s,L,F),n===1?(n=1,f===!0&&(n|=8)):n=0,f=qr(3,null,null,n),t.current=f,f.stateNode=t,f.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(f),t}function Cv(t,n,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:n,implementation:s}}function cp(t){if(!t)return Jn;t=t._reactInternals;e:{if(dn(t)!==t||t.tag!==1)throw Error(r(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Mr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(t.tag===1){var s=t.type;if(Mr(s))return Dh(t,s,n)}return n}function up(t,n,s,l,u,f,S,L,F){return t=cu(s,l,!0,t,u,f,S,L,F),t.context=cp(null),s=t.current,l=xr(),u=sa(s),f=An(l,u),f.callback=n??null,ra(s,f,u),t.current.lanes=u,Jt(t,u,l),Rr(t,l),t}function Vo(t,n,s,l){var u=n.current,f=xr(),S=sa(u);return s=cp(s),n.context===null?n.context=s:n.pendingContext=s,n=An(f,S),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=ra(u,n,S),t!==null&&(rn(t,u,S,f),yo(t,u,S)),S}function jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function uu(t,n){dp(t,n),(t=t.alternate)&&dp(t,n)}function Nv(){return null}var hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function du(t){this._internalRoot=t}Wo.prototype.render=du.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));Vo(t,n,null,null)},Wo.prototype.unmount=du.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Pa(function(){Vo(null,t,null,null)}),n[wn]=null}};function Wo(t){this._internalRoot=t}Wo.prototype.unstable_scheduleHydration=function(t){if(t){var n=qd();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Yn.length&&n!==0&&n<Yn[s].priority;s++);Yn.splice(s,0,t),s===0&&$d(t)}};function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fp(){}function Pv(t,n,s,l,u){if(u){if(typeof l=="function"){var f=l;l=function(){var re=jo(S);f.call(re)}}var S=up(n,l,t,0,null,!1,!1,"",fp);return t._reactRootContainer=S,t[wn]=S.current,is(t.nodeType===8?t.parentNode:t),Pa(),S}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var L=l;l=function(){var re=jo(F);L.call(re)}}var F=cu(t,0,!1,null,null,!1,!1,"",fp);return t._reactRootContainer=F,t[wn]=F.current,is(t.nodeType===8?t.parentNode:t),Pa(function(){Vo(n,F,s,l)}),F}function qo(t,n,s,l,u){var f=s._reactRootContainer;if(f){var S=f;if(typeof u=="function"){var L=u;u=function(){var F=jo(S);L.call(F)}}Vo(n,S,t,u)}else S=Pv(s,n,t,u,l);return jo(S)}Wd=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var s=Ir(n.pendingLanes);s!==0&&(vr(n,s|1),Rr(n,Z()),(_t&6)===0&&(_i=Z()+500,ea()))}break;case 13:Pa(function(){var l=Rn(t,1);if(l!==null){var u=xr();rn(l,t,1,u)}}),uu(t,1)}},Fl=function(t){if(t.tag===13){var n=Rn(t,134217728);if(n!==null){var s=xr();rn(n,t,134217728,s)}uu(t,134217728)}},Xd=function(t){if(t.tag===13){var n=sa(t),s=Rn(t,n);if(s!==null){var l=xr();rn(s,t,n,l)}uu(t,n)}},qd=function(){return vt},Yd=function(t,n){var s=vt;try{return vt=t,n()}finally{vt=s}},Ce=function(t,n,s){switch(n){case"input":if(lt(t,s),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var u=co(l);if(!u)throw Error(r(90));ht(l),lt(l,u)}}}break;case"textarea":he(t,s);break;case"select":n=s.value,n!=null&&N(t,!!s.multiple,n,!1)}},Lt=nu,qt=Pa;var Lv={usingClientEntryPoint:!1,Events:[ls,ii,co,Re,dt,nu]},Ss={findFiberByHostInstance:wa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uv={bundleType:Ss.bundleType,version:Ss.version,rendererPackageName:Ss.rendererPackageName,rendererConfig:Ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ws(t),t===null?null:t.stateNode},findFiberByHostInstance:Ss.findFiberByHostInstance||Nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{Ke=Yo.inject(Uv),qe=Yo}catch{}}return Ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv,Ar.createPortal=function(t,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hu(n))throw Error(r(200));return Cv(t,n,null,s)},Ar.createRoot=function(t,n){if(!hu(t))throw Error(r(299));var s=!1,l="",u=hp;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=cu(t,1,!1,null,null,s,!1,l,u),t[wn]=n.current,is(t.nodeType===8?t.parentNode:t),new du(n)},Ar.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=Ws(n),t=t===null?null:t.stateNode,t},Ar.flushSync=function(t){return Pa(t)},Ar.hydrate=function(t,n,s){if(!Xo(n))throw Error(r(200));return qo(null,t,n,!0,s)},Ar.hydrateRoot=function(t,n,s){if(!hu(t))throw Error(r(405));var l=s!=null&&s.hydratedSources||null,u=!1,f="",S=hp;if(s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(S=s.onRecoverableError)),n=up(n,null,t,1,s??null,u,!1,f,S),t[wn]=n.current,is(t),l)for(t=0;t<l.length;t++)s=l[t],u=s._getVersion,u=u(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,u]:n.mutableSourceEagerHydrationData.push(s,u);return new Wo(n)},Ar.render=function(t,n,s){if(!Xo(n))throw Error(r(200));return qo(null,t,n,!1,s)},Ar.unmountComponentAtNode=function(t){if(!Xo(t))throw Error(r(40));return t._reactRootContainer?(Pa(function(){qo(null,null,t,!1,function(){t._reactRootContainer=null,t[wn]=null})}),!0):!1},Ar.unstable_batchedUpdates=nu,Ar.unstable_renderSubtreeIntoContainer=function(t,n,s,l){if(!Xo(s))throw Error(r(200));if(t==null||t._reactInternals===void 0)throw Error(r(38));return qo(t,n,s,!1,l)},Ar.version="18.3.1-next-f1338f8080-20240426",Ar}var Ep;function Gv(){if(Ep)return fu.exports;Ep=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),fu.exports=Hv(),fu.exports}var Tp;function Vv(){if(Tp)return Ko;Tp=1;var i=Gv();return Ko.createRoot=i.createRoot,Ko.hydrateRoot=i.hydrateRoot,Ko}var jv=Vv();const Wv=Tm(jv),Xv=()=>{const[i,e]=Xt.useState(!1),[r,a]=Xt.useState(!1);Xt.useEffect(()=>{const c=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const o=c=>{const d=document.getElementById(c);d&&(d.scrollIntoView({behavior:"smooth"}),a(!1))};return P.jsxs("nav",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${i?"bg-black/90 py-2":"bg-black/50 py-4"}`,children:[P.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex justify-between items-center",children:[P.jsxs("div",{className:"flex items-center",children:[P.jsx("div",{className:"w-10 h-10 border-2 border-white flex items-center justify-center mr-3",children:P.jsx("div",{className:"w-5 h-5 border border-white"})}),P.jsx("span",{className:"text-white text-xl font-bold font-space",children:"AI Agent Framework"})]}),P.jsx("div",{className:"hidden md:flex space-x-6",children:[{name:"Home",id:"hero"},{name:"Framework",id:"framework"},{name:"Industries",id:"industries"},{name:"Monetization",id:"monetization"},{name:"Go-to-Market",id:"go-to-market"},{name:"Implementation",id:"implementation"}].map(c=>P.jsx("a",{onClick:()=>o(c.id),className:"text-white hover:text-white/80 cursor-pointer transition-colors",children:c.name},c.name))}),P.jsx("button",{className:"md:hidden text-white",onClick:()=>a(!r),children:r?P.jsx("span",{className:"text-2xl",children:"×"}):P.jsxs("div",{className:"space-y-1",children:[P.jsx("div",{className:"w-6 h-px bg-white"}),P.jsx("div",{className:"w-6 h-px bg-white"}),P.jsx("div",{className:"w-6 h-px bg-white"})]})})]}),r&&P.jsx("div",{className:"md:hidden bg-black/95 border-t border-white/10 py-4",children:P.jsx("div",{className:"max-w-7xl mx-auto px-4 flex flex-col space-y-4",children:[{name:"Home",id:"hero"},{name:"Framework",id:"framework"},{name:"Industries",id:"industries"},{name:"Monetization",id:"monetization"},{name:"Go-to-Market",id:"go-to-market"},{name:"Implementation",id:"implementation"}].map(c=>P.jsx("a",{onClick:()=>o(c.id),className:"text-white hover:text-white/80 cursor-pointer transition-colors",children:c.name},c.name))})})]})};/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Id="176",qv=0,Rp=1,Yv=2,Rm=1,Kv=2,On=3,xa=0,Pr=1,_n=2,va=0,Di=1,Ap=2,Cp=3,Np=4,$v=5,Va=100,Qv=101,Zv=102,Jv=103,e_=104,t_=200,r_=201,n_=202,a_=203,Wu=204,Xu=205,i_=206,s_=207,o_=208,l_=209,c_=210,u_=211,d_=212,h_=213,f_=214,qu=0,Yu=1,Ku=2,ki=3,$u=4,Qu=5,Zu=6,Ju=7,Am=0,p_=1,m_=2,_a=0,g_=1,v_=2,__=3,x_=4,y_=5,b_=6,S_=7,Cm=300,Fi=301,zi=302,ed=303,td=304,Il=306,rd=1e3,Xa=1001,nd=1002,cn=1003,w_=1004,$o=1005,xn=1006,pu=1007,qa=1008,Bn=1009,Nm=1010,Pm=1011,Ls=1012,Dd=1013,Ya=1014,kn=1015,Os=1016,Od=1017,kd=1018,Us=1020,Lm=35902,Um=1021,Im=1022,ln=1023,Is=1026,Ds=1027,Dm=1028,Fd=1029,Om=1030,zd=1031,Bd=1033,Sl=33776,wl=33777,Ml=33778,El=33779,ad=35840,id=35841,sd=35842,od=35843,ld=36196,cd=37492,ud=37496,dd=37808,hd=37809,fd=37810,pd=37811,md=37812,gd=37813,vd=37814,_d=37815,xd=37816,yd=37817,bd=37818,Sd=37819,wd=37820,Md=37821,Tl=36492,Ed=36494,Td=36495,km=36283,Rd=36284,Ad=36285,Cd=36286,M_=3200,E_=3201,T_=0,R_=1,ga="",Kr="srgb",Bi="srgb-linear",Cl="linear",Rt="srgb",yi=7680,Pp=519,A_=512,C_=513,N_=514,Fm=515,P_=516,L_=517,U_=518,I_=519,Lp=35044,Up="300 es",Fn=2e3,Nl=2001;class Gi{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(r)===-1&&a[e].push(r)}hasEventListener(e,r){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(r)!==-1}removeEventListener(e,r){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(r);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const r=this._listeners;if(r===void 0)return;const a=r[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const hr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mu=Math.PI/180,Nd=180/Math.PI;function ks(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(hr[i&255]+hr[i>>8&255]+hr[i>>16&255]+hr[i>>24&255]+"-"+hr[e&255]+hr[e>>8&255]+"-"+hr[e>>16&15|64]+hr[e>>24&255]+"-"+hr[r&63|128]+hr[r>>8&255]+"-"+hr[r>>16&255]+hr[r>>24&255]+hr[a&255]+hr[a>>8&255]+hr[a>>16&255]+hr[a>>24&255]).toLowerCase()}function pt(i,e,r){return Math.max(e,Math.min(r,i))}function D_(i,e){return(i%e+e)%e}function gu(i,e,r){return(1-r)*i+r*e}function Ms(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,r=0){At.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,a=this.y,o=e.elements;return this.x=o[0]*r+o[3]*a+o[6],this.y=o[1]*r+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=pt(this.x,e.x,r.x),this.y=pt(this.y,e.y,r.y),this}clampScalar(e,r){return this.x=pt(this.x,e,r),this.y=pt(this.y,e,r),this}clampLength(e,r){const a=this.length();return this.divideScalar(a||1).multiplyScalar(pt(a,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const a=this.dot(e)/r;return Math.acos(pt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,a=this.y-e.y;return r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,a){return this.x=e.x+(r.x-e.x)*a,this.y=e.y+(r.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const a=Math.cos(r),o=Math.sin(r),c=this.x-e.x,d=this.y-e.y;return this.x=c*a-d*o+e.x,this.y=c*o+d*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,r,a,o,c,d,h,p,m){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,a,o,c,d,h,p,m)}set(e,r,a,o,c,d,h,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=r,v[4]=c,v[5]=p,v[6]=a,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,a=e.elements;return r[0]=a[0],r[1]=a[1],r[2]=a[2],r[3]=a[3],r[4]=a[4],r[5]=a[5],r[6]=a[6],r[7]=a[7],r[8]=a[8],this}extractBasis(e,r,a){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const a=e.elements,o=r.elements,c=this.elements,d=a[0],h=a[3],p=a[6],m=a[1],v=a[4],x=a[7],_=a[2],b=a[5],M=a[8],T=o[0],y=o[3],g=o[6],D=o[1],I=o[4],A=o[7],X=o[2],O=o[5],z=o[8];return c[0]=d*T+h*D+p*X,c[3]=d*y+h*I+p*O,c[6]=d*g+h*A+p*z,c[1]=m*T+v*D+x*X,c[4]=m*y+v*I+x*O,c[7]=m*g+v*A+x*z,c[2]=_*T+b*D+M*X,c[5]=_*y+b*I+M*O,c[8]=_*g+b*A+M*z,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],a=e[1],o=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8];return r*d*v-r*h*m-a*c*v+a*h*p+o*c*m-o*d*p}invert(){const e=this.elements,r=e[0],a=e[1],o=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],x=v*d-h*m,_=h*p-v*c,b=m*c-d*p,M=r*x+a*_+o*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=x*T,e[1]=(o*m-v*a)*T,e[2]=(h*a-o*d)*T,e[3]=_*T,e[4]=(v*r-o*p)*T,e[5]=(o*c-h*r)*T,e[6]=b*T,e[7]=(a*p-m*r)*T,e[8]=(d*r-a*c)*T,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,a,o,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*d+m*h)+d+e,-o*m,o*p,-o*(-m*d+p*h)+h+r,0,0,1),this}scale(e,r){return this.premultiply(vu.makeScale(e,r)),this}rotate(e){return this.premultiply(vu.makeRotation(-e)),this}translate(e,r){return this.premultiply(vu.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),a=Math.sin(e);return this.set(r,-a,0,a,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,a=e.elements;for(let o=0;o<9;o++)if(r[o]!==a[o])return!1;return!0}fromArray(e,r=0){for(let a=0;a<9;a++)this.elements[a]=e[a+r];return this}toArray(e=[],r=0){const a=this.elements;return e[r]=a[0],e[r+1]=a[1],e[r+2]=a[2],e[r+3]=a[3],e[r+4]=a[4],e[r+5]=a[5],e[r+6]=a[6],e[r+7]=a[7],e[r+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vu=new it;function zm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function O_(){const i=Pl("canvas");return i.style.display="block",i}const Ip={};function Rl(i){i in Ip||(Ip[i]=!0,console.warn(i))}function k_(i,e,r){return new Promise(function(a,o){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,r);break;default:a()}}setTimeout(c,r)})}function F_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function z_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dp=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Op=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B_(){const i={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Rt&&(o.r=zn(o.r),o.g=zn(o.g),o.b=zn(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Rt&&(o.r=Oi(o.r),o.g=Oi(o.g),o.b=Oi(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ga?Cl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],r=[.2126,.7152,.0722],a=[.3127,.329];return i.define({[Bi]:{primaries:e,whitePoint:a,transfer:Cl,toXYZ:Dp,fromXYZ:Op,luminanceCoefficients:r,workingColorSpaceConfig:{unpackColorSpace:Kr},outputColorSpaceConfig:{drawingBufferColorSpace:Kr}},[Kr]:{primaries:e,whitePoint:a,transfer:Rt,toXYZ:Dp,fromXYZ:Op,luminanceCoefficients:r,outputColorSpaceConfig:{drawingBufferColorSpace:Kr}}}),i}const yt=B_();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class H_{static getDataURL(e,r="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{bi===void 0&&(bi=Pl("canvas")),bi.width=e.width,bi.height=e.height;const o=bi.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=bi}return a.toDataURL(r)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=Pl("canvas");r.width=e.width,r.height=e.height;const a=r.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=zn(c[d]/255)*255;return a.putImageData(o,0,0),r}else if(e.data){const r=e.data.slice(0);for(let a=0;a<r.length;a++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[a]=Math.floor(zn(r[a]/255)*255):r[a]=zn(r[a]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G_=0;class Hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,h=o.length;d<h;d++)o[d].isDataTexture?c.push(_u(o[d].image)):c.push(_u(o[d]))}else c=_u(o);a.url=c}return r||(e.images[this.uuid]=a),a}}function _u(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?H_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V_=0;class Lr extends Gi{constructor(e=Lr.DEFAULT_IMAGE,r=Lr.DEFAULT_MAPPING,a=Xa,o=Xa,c=xn,d=qa,h=ln,p=Bn,m=Lr.DEFAULT_ANISOTROPY,v=ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=ks(),this.name="",this.source=new Hd(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),r||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case Xa:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case Xa:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lr.DEFAULT_IMAGE=null;Lr.DEFAULT_MAPPING=Cm;Lr.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,r=0,a=0,o=1){Gt.prototype.isVector4=!0,this.x=e,this.y=r,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,a,o){return this.x=e,this.y=r,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,a=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*r+d[4]*a+d[8]*o+d[12]*c,this.y=d[1]*r+d[5]*a+d[9]*o+d[13]*c,this.z=d[2]*r+d[6]*a+d[10]*o+d[14]*c,this.w=d[3]*r+d[7]*a+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,a,o,c;const d=e.elements,h=d[0],p=d[4],m=d[8],v=d[1],x=d[5],_=d[9],b=d[2],M=d[6],T=d[10];if(Math.abs(p-v)<.01&&Math.abs(m-b)<.01&&Math.abs(_-M)<.01){if(Math.abs(p+v)<.1&&Math.abs(m+b)<.1&&Math.abs(_+M)<.1&&Math.abs(h+x+T-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const g=(h+1)/2,D=(x+1)/2,I=(T+1)/2,A=(p+v)/4,X=(m+b)/4,O=(_+M)/4;return g>D&&g>I?g<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(g),o=A/a,c=X/a):D>I?D<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),a=A/o,c=O/o):I<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),a=X/c,o=O/c),this.set(a,o,c,r),this}let y=Math.sqrt((M-_)*(M-_)+(m-b)*(m-b)+(v-p)*(v-p));return Math.abs(y)<.001&&(y=1),this.x=(M-_)/y,this.y=(m-b)/y,this.z=(v-p)/y,this.w=Math.acos((h+x+T-1)/2),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=pt(this.x,e.x,r.x),this.y=pt(this.y,e.y,r.y),this.z=pt(this.z,e.z,r.z),this.w=pt(this.w,e.w,r.w),this}clampScalar(e,r){return this.x=pt(this.x,e,r),this.y=pt(this.y,e,r),this.z=pt(this.z,e,r),this.w=pt(this.w,e,r),this}clampLength(e,r){const a=this.length();return this.divideScalar(a||1).multiplyScalar(pt(a,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,a){return this.x=e.x+(r.x-e.x)*a,this.y=e.y+(r.y-e.y)*a,this.z=e.z+(r.z-e.z)*a,this.w=e.w+(r.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j_ extends Gi{constructor(e=1,r=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=a.depth?a.depth:1,this.scissor=new Gt(0,0,e,r),this.scissorTest=!1,this.viewport=new Gt(0,0,e,r);const o={width:e,height:r,depth:this.depth};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},a);const c=new Lr(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const d=a.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,r,a=1){if(this.width!==e||this.height!==r||this.depth!==a){this.width=e,this.height=r,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=r,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++){this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const o=Object.assign({},e.textures[r].image);this.textures[r].source=new Hd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ka extends j_{constructor(e=1,r=1,a={}){super(e,r,a),this.isWebGLRenderTarget=!0}}class Bm extends Lr{constructor(e=null,r=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:a,depth:o},this.magFilter=cn,this.minFilter=cn,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W_ extends Lr{constructor(e=null,r=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:a,depth:o},this.magFilter=cn,this.minFilter=cn,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(e=0,r=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=a,this._w=o}static slerpFlat(e,r,a,o,c,d,h){let p=a[o+0],m=a[o+1],v=a[o+2],x=a[o+3];const _=c[d+0],b=c[d+1],M=c[d+2],T=c[d+3];if(h===0){e[r+0]=p,e[r+1]=m,e[r+2]=v,e[r+3]=x;return}if(h===1){e[r+0]=_,e[r+1]=b,e[r+2]=M,e[r+3]=T;return}if(x!==T||p!==_||m!==b||v!==M){let y=1-h;const g=p*_+m*b+v*M+x*T,D=g>=0?1:-1,I=1-g*g;if(I>Number.EPSILON){const X=Math.sqrt(I),O=Math.atan2(X,g*D);y=Math.sin(y*O)/X,h=Math.sin(h*O)/X}const A=h*D;if(p=p*y+_*A,m=m*y+b*A,v=v*y+M*A,x=x*y+T*A,y===1-h){const X=1/Math.sqrt(p*p+m*m+v*v+x*x);p*=X,m*=X,v*=X,x*=X}}e[r]=p,e[r+1]=m,e[r+2]=v,e[r+3]=x}static multiplyQuaternionsFlat(e,r,a,o,c,d){const h=a[o],p=a[o+1],m=a[o+2],v=a[o+3],x=c[d],_=c[d+1],b=c[d+2],M=c[d+3];return e[r]=h*M+v*x+p*b-m*_,e[r+1]=p*M+v*_+m*x-h*b,e[r+2]=m*M+v*b+h*_-p*x,e[r+3]=v*M-h*x-p*_-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,a,o){return this._x=e,this._y=r,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const a=e._x,o=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(a/2),v=h(o/2),x=h(c/2),_=p(a/2),b=p(o/2),M=p(c/2);switch(d){case"XYZ":this._x=_*v*x+m*b*M,this._y=m*b*x-_*v*M,this._z=m*v*M+_*b*x,this._w=m*v*x-_*b*M;break;case"YXZ":this._x=_*v*x+m*b*M,this._y=m*b*x-_*v*M,this._z=m*v*M-_*b*x,this._w=m*v*x+_*b*M;break;case"ZXY":this._x=_*v*x-m*b*M,this._y=m*b*x+_*v*M,this._z=m*v*M+_*b*x,this._w=m*v*x-_*b*M;break;case"ZYX":this._x=_*v*x-m*b*M,this._y=m*b*x+_*v*M,this._z=m*v*M-_*b*x,this._w=m*v*x+_*b*M;break;case"YZX":this._x=_*v*x+m*b*M,this._y=m*b*x+_*v*M,this._z=m*v*M-_*b*x,this._w=m*v*x-_*b*M;break;case"XZY":this._x=_*v*x-m*b*M,this._y=m*b*x-_*v*M,this._z=m*v*M+_*b*x,this._w=m*v*x+_*b*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const a=r/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,a=r[0],o=r[4],c=r[8],d=r[1],h=r[5],p=r[9],m=r[2],v=r[6],x=r[10],_=a+h+x;if(_>0){const b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(v-p)*b,this._y=(c-m)*b,this._z=(d-o)*b}else if(a>h&&a>x){const b=2*Math.sqrt(1+a-h-x);this._w=(v-p)/b,this._x=.25*b,this._y=(o+d)/b,this._z=(c+m)/b}else if(h>x){const b=2*Math.sqrt(1+h-a-x);this._w=(c-m)/b,this._x=(o+d)/b,this._y=.25*b,this._z=(p+v)/b}else{const b=2*Math.sqrt(1+x-a-h);this._w=(d-o)/b,this._x=(c+m)/b,this._y=(p+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let a=e.dot(r)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,r){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,r/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const a=e._x,o=e._y,c=e._z,d=e._w,h=r._x,p=r._y,m=r._z,v=r._w;return this._x=a*v+d*h+o*m-c*p,this._y=o*v+d*p+c*h-a*m,this._z=c*v+d*m+a*p-o*h,this._w=d*v-a*h-o*p-c*m,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const a=this._x,o=this._y,c=this._z,d=this._w;let h=d*e._w+a*e._x+o*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=a,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const b=1-r;return this._w=b*d+r*this._w,this._x=b*a+r*this._x,this._y=b*o+r*this._y,this._z=b*c+r*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,h),x=Math.sin((1-r)*v)/m,_=Math.sin(r*v)/m;return this._w=d*x+this._w*_,this._x=a*x+this._x*_,this._y=o*x+this._y*_,this._z=c*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,r,a){return this.copy(e).slerp(r,a)}random(){const e=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(r),c*Math.cos(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,r=0,a=0){te.prototype.isVector3=!0,this.x=e,this.y=r,this.z=a}set(e,r,a){return a===void 0&&(a=this.z),this.x=e,this.y=r,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(kp.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(kp.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*r+c[3]*a+c[6]*o,this.y=c[1]*r+c[4]*a+c[7]*o,this.z=c[2]*r+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,a=this.y,o=this.z,c=e.elements,d=1/(c[3]*r+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*r+c[4]*a+c[8]*o+c[12])*d,this.y=(c[1]*r+c[5]*a+c[9]*o+c[13])*d,this.z=(c[2]*r+c[6]*a+c[10]*o+c[14])*d,this}applyQuaternion(e){const r=this.x,a=this.y,o=this.z,c=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*o-h*a),v=2*(h*r-c*o),x=2*(c*a-d*r);return this.x=r+p*m+d*x-h*v,this.y=a+p*v+h*m-c*x,this.z=o+p*x+c*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*r+c[4]*a+c[8]*o,this.y=c[1]*r+c[5]*a+c[9]*o,this.z=c[2]*r+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=pt(this.x,e.x,r.x),this.y=pt(this.y,e.y,r.y),this.z=pt(this.z,e.z,r.z),this}clampScalar(e,r){return this.x=pt(this.x,e,r),this.y=pt(this.y,e,r),this.z=pt(this.z,e,r),this}clampLength(e,r){const a=this.length();return this.divideScalar(a||1).multiplyScalar(pt(a,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,a){return this.x=e.x+(r.x-e.x)*a,this.y=e.y+(r.y-e.y)*a,this.z=e.z+(r.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const a=e.x,o=e.y,c=e.z,d=r.x,h=r.y,p=r.z;return this.x=o*p-c*h,this.y=c*d-a*p,this.z=a*h-o*d,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const a=e.dot(this)/r;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return xu.copy(this).projectOnVector(e),this.sub(xu)}reflect(e){return this.sub(xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const a=this.dot(e)/r;return Math.acos(pt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return r*r+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,a){const o=Math.sin(r)*e;return this.x=o*Math.sin(a),this.y=Math.cos(r)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,a){return this.x=e*Math.sin(r),this.y=a,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=a,this.z=o,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,r=Math.random()*2-1,a=Math.sqrt(1-r*r);return this.x=a*Math.cos(e),this.y=r,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xu=new te,kp=new Fs;class zs{constructor(e=new te(1/0,1/0,1/0),r=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,a=e.length;r<a;r+=3)this.expandByPoint(nn.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,a=e.count;r<a;r++)this.expandByPoint(nn.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,a=e.length;r<a;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const a=nn.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(r===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,nn):nn.fromBufferAttribute(c,d),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Qo.copy(a.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],r);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,a;return e.normal.x>0?(r=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),r<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),Zo.subVectors(this.max,Es),Si.subVectors(e.a,Es),wi.subVectors(e.b,Es),Mi.subVectors(e.c,Es),ua.subVectors(wi,Si),da.subVectors(Mi,wi),Da.subVectors(Si,Mi);let r=[0,-ua.z,ua.y,0,-da.z,da.y,0,-Da.z,Da.y,ua.z,0,-ua.x,da.z,0,-da.x,Da.z,0,-Da.x,-ua.y,ua.x,0,-da.y,da.x,0,-Da.y,Da.x,0];return!yu(r,Si,wi,Mi,Zo)||(r=[1,0,0,0,1,0,0,0,1],!yu(r,Si,wi,Mi,Zo))?!1:(Jo.crossVectors(ua,da),r=[Jo.x,Jo.y,Jo.z],yu(r,Si,wi,Mi,Zo))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new te,new te,new te,new te,new te,new te,new te,new te],nn=new te,Qo=new zs,Si=new te,wi=new te,Mi=new te,ua=new te,da=new te,Da=new te,Es=new te,Zo=new te,Jo=new te,Oa=new te;function yu(i,e,r,a,o){for(let c=0,d=i.length-3;c<=d;c+=3){Oa.fromArray(i,c);const h=o.x*Math.abs(Oa.x)+o.y*Math.abs(Oa.y)+o.z*Math.abs(Oa.z),p=e.dot(Oa),m=r.dot(Oa),v=a.dot(Oa);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const X_=new zs,Ts=new te,bu=new te;class Bs{constructor(e=new te,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const a=this.center;r!==void 0?a.copy(r):X_.setFromPoints(e).getCenter(a);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const a=this.center.distanceToSquared(e);return r.copy(e),a>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const r=Ts.lengthSq();if(r>this.radius*this.radius){const a=Math.sqrt(r),o=(a-this.radius)*.5;this.center.addScaledVector(Ts,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(bu)),this.expandByPoint(Ts.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new te,Su=new te,el=new te,ha=new te,wu=new te,tl=new te,Mu=new te;class Gd{constructor(e=new te,r=new te(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const a=r.dot(this.direction);return a<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=Ln.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,r),Ln.distanceToSquared(e))}distanceSqToSegment(e,r,a,o){Su.copy(e).add(r).multiplyScalar(.5),el.copy(r).sub(e).normalize(),ha.copy(this.origin).sub(Su);const c=e.distanceTo(r)*.5,d=-this.direction.dot(el),h=ha.dot(this.direction),p=-ha.dot(el),m=ha.lengthSq(),v=Math.abs(1-d*d);let x,_,b,M;if(v>0)if(x=d*p-h,_=d*h-p,M=c*v,x>=0)if(_>=-M)if(_<=M){const T=1/v;x*=T,_*=T,b=x*(x+d*_+2*h)+_*(d*x+_+2*p)+m}else _=c,x=Math.max(0,-(d*_+h)),b=-x*x+_*(_+2*p)+m;else _=-c,x=Math.max(0,-(d*_+h)),b=-x*x+_*(_+2*p)+m;else _<=-M?(x=Math.max(0,-(-d*c+h)),_=x>0?-c:Math.min(Math.max(-c,-p),c),b=-x*x+_*(_+2*p)+m):_<=M?(x=0,_=Math.min(Math.max(-c,-p),c),b=_*(_+2*p)+m):(x=Math.max(0,-(d*c+h)),_=x>0?c:Math.min(Math.max(-c,-p),c),b=-x*x+_*(_+2*p)+m);else _=d>0?-c:c,x=Math.max(0,-(d*_+h)),b=-x*x+_*(_+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Su).addScaledVector(el,_),b}intersectSphere(e,r){Ln.subVectors(e.center,this.origin);const a=Ln.dot(this.direction),o=Ln.dot(Ln)-a*a,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),h=a-d,p=a+d;return p<0?null:h<0?this.at(p,r):this.at(h,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/r;return a>=0?a:null}intersectPlane(e,r){const a=this.distanceToPlane(e);return a===null?null:this.at(a,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let a,o,c,d,h,p;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return m>=0?(a=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(a=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),v>=0?(c=(e.min.y-_.y)*v,d=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,d=(e.min.y-_.y)*v),a>d||c>o||((c>a||isNaN(a))&&(a=c),(d<o||isNaN(o))&&(o=d),x>=0?(h=(e.min.z-_.z)*x,p=(e.max.z-_.z)*x):(h=(e.max.z-_.z)*x,p=(e.min.z-_.z)*x),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,r)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,r,a,o,c){wu.subVectors(r,e),tl.subVectors(a,e),Mu.crossVectors(wu,tl);let d=this.direction.dot(Mu),h;if(d>0){if(o)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ha.subVectors(this.origin,e);const p=h*this.direction.dot(tl.crossVectors(ha,tl));if(p<0)return null;const m=h*this.direction.dot(wu.cross(ha));if(m<0||p+m>d)return null;const v=-h*ha.dot(Mu);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,r,a,o,c,d,h,p,m,v,x,_,b,M,T,y){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,a,o,c,d,h,p,m,v,x,_,b,M,T,y)}set(e,r,a,o,c,d,h,p,m,v,x,_,b,M,T,y){const g=this.elements;return g[0]=e,g[4]=r,g[8]=a,g[12]=o,g[1]=c,g[5]=d,g[9]=h,g[13]=p,g[2]=m,g[6]=v,g[10]=x,g[14]=_,g[3]=b,g[7]=M,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const r=this.elements,a=e.elements;return r[0]=a[0],r[1]=a[1],r[2]=a[2],r[3]=a[3],r[4]=a[4],r[5]=a[5],r[6]=a[6],r[7]=a[7],r[8]=a[8],r[9]=a[9],r[10]=a[10],r[11]=a[11],r[12]=a[12],r[13]=a[13],r[14]=a[14],r[15]=a[15],this}copyPosition(e){const r=this.elements,a=e.elements;return r[12]=a[12],r[13]=a[13],r[14]=a[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,a){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,r,a){return this.set(e.x,r.x,a.x,0,e.y,r.y,a.y,0,e.z,r.z,a.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,a=e.elements,o=1/Ei.setFromMatrixColumn(e,0).length(),c=1/Ei.setFromMatrixColumn(e,1).length(),d=1/Ei.setFromMatrixColumn(e,2).length();return r[0]=a[0]*o,r[1]=a[1]*o,r[2]=a[2]*o,r[3]=0,r[4]=a[4]*c,r[5]=a[5]*c,r[6]=a[6]*c,r[7]=0,r[8]=a[8]*d,r[9]=a[9]*d,r[10]=a[10]*d,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,a=e.x,o=e.y,c=e.z,d=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const _=d*v,b=d*x,M=h*v,T=h*x;r[0]=p*v,r[4]=-p*x,r[8]=m,r[1]=b+M*m,r[5]=_-T*m,r[9]=-h*p,r[2]=T-_*m,r[6]=M+b*m,r[10]=d*p}else if(e.order==="YXZ"){const _=p*v,b=p*x,M=m*v,T=m*x;r[0]=_+T*h,r[4]=M*h-b,r[8]=d*m,r[1]=d*x,r[5]=d*v,r[9]=-h,r[2]=b*h-M,r[6]=T+_*h,r[10]=d*p}else if(e.order==="ZXY"){const _=p*v,b=p*x,M=m*v,T=m*x;r[0]=_-T*h,r[4]=-d*x,r[8]=M+b*h,r[1]=b+M*h,r[5]=d*v,r[9]=T-_*h,r[2]=-d*m,r[6]=h,r[10]=d*p}else if(e.order==="ZYX"){const _=d*v,b=d*x,M=h*v,T=h*x;r[0]=p*v,r[4]=M*m-b,r[8]=_*m+T,r[1]=p*x,r[5]=T*m+_,r[9]=b*m-M,r[2]=-m,r[6]=h*p,r[10]=d*p}else if(e.order==="YZX"){const _=d*p,b=d*m,M=h*p,T=h*m;r[0]=p*v,r[4]=T-_*x,r[8]=M*x+b,r[1]=x,r[5]=d*v,r[9]=-h*v,r[2]=-m*v,r[6]=b*x+M,r[10]=_-T*x}else if(e.order==="XZY"){const _=d*p,b=d*m,M=h*p,T=h*m;r[0]=p*v,r[4]=-x,r[8]=m*v,r[1]=_*x+T,r[5]=d*v,r[9]=b*x-M,r[2]=M*x-b,r[6]=h*v,r[10]=T*x+_}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q_,e,Y_)}lookAt(e,r,a){const o=this.elements;return zr.subVectors(e,r),zr.lengthSq()===0&&(zr.z=1),zr.normalize(),fa.crossVectors(a,zr),fa.lengthSq()===0&&(Math.abs(a.z)===1?zr.x+=1e-4:zr.z+=1e-4,zr.normalize(),fa.crossVectors(a,zr)),fa.normalize(),rl.crossVectors(zr,fa),o[0]=fa.x,o[4]=rl.x,o[8]=zr.x,o[1]=fa.y,o[5]=rl.y,o[9]=zr.y,o[2]=fa.z,o[6]=rl.z,o[10]=zr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const a=e.elements,o=r.elements,c=this.elements,d=a[0],h=a[4],p=a[8],m=a[12],v=a[1],x=a[5],_=a[9],b=a[13],M=a[2],T=a[6],y=a[10],g=a[14],D=a[3],I=a[7],A=a[11],X=a[15],O=o[0],z=o[4],K=o[8],C=o[12],R=o[1],H=o[5],se=o[9],ae=o[13],ce=o[2],me=o[6],le=o[10],fe=o[14],k=o[3],oe=o[7],j=o[11],U=o[15];return c[0]=d*O+h*R+p*ce+m*k,c[4]=d*z+h*H+p*me+m*oe,c[8]=d*K+h*se+p*le+m*j,c[12]=d*C+h*ae+p*fe+m*U,c[1]=v*O+x*R+_*ce+b*k,c[5]=v*z+x*H+_*me+b*oe,c[9]=v*K+x*se+_*le+b*j,c[13]=v*C+x*ae+_*fe+b*U,c[2]=M*O+T*R+y*ce+g*k,c[6]=M*z+T*H+y*me+g*oe,c[10]=M*K+T*se+y*le+g*j,c[14]=M*C+T*ae+y*fe+g*U,c[3]=D*O+I*R+A*ce+X*k,c[7]=D*z+I*H+A*me+X*oe,c[11]=D*K+I*se+A*le+X*j,c[15]=D*C+I*ae+A*fe+X*U,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],a=e[4],o=e[8],c=e[12],d=e[1],h=e[5],p=e[9],m=e[13],v=e[2],x=e[6],_=e[10],b=e[14],M=e[3],T=e[7],y=e[11],g=e[15];return M*(+c*p*x-o*m*x-c*h*_+a*m*_+o*h*b-a*p*b)+T*(+r*p*b-r*m*_+c*d*_-o*d*b+o*m*v-c*p*v)+y*(+r*m*x-r*h*b-c*d*x+a*d*b+c*h*v-a*m*v)+g*(-o*h*v-r*p*x+r*h*_+o*d*x-a*d*_+a*p*v)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=r,o[14]=a),this}invert(){const e=this.elements,r=e[0],a=e[1],o=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],x=e[9],_=e[10],b=e[11],M=e[12],T=e[13],y=e[14],g=e[15],D=x*y*m-T*_*m+T*p*b-h*y*b-x*p*g+h*_*g,I=M*_*m-v*y*m-M*p*b+d*y*b+v*p*g-d*_*g,A=v*T*m-M*x*m+M*h*b-d*T*b-v*h*g+d*x*g,X=M*x*p-v*T*p-M*h*_+d*T*_+v*h*y-d*x*y,O=r*D+a*I+o*A+c*X;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return e[0]=D*z,e[1]=(T*_*c-x*y*c-T*o*b+a*y*b+x*o*g-a*_*g)*z,e[2]=(h*y*c-T*p*c+T*o*m-a*y*m-h*o*g+a*p*g)*z,e[3]=(x*p*c-h*_*c-x*o*m+a*_*m+h*o*b-a*p*b)*z,e[4]=I*z,e[5]=(v*y*c-M*_*c+M*o*b-r*y*b-v*o*g+r*_*g)*z,e[6]=(M*p*c-d*y*c-M*o*m+r*y*m+d*o*g-r*p*g)*z,e[7]=(d*_*c-v*p*c+v*o*m-r*_*m-d*o*b+r*p*b)*z,e[8]=A*z,e[9]=(M*x*c-v*T*c-M*a*b+r*T*b+v*a*g-r*x*g)*z,e[10]=(d*T*c-M*h*c+M*a*m-r*T*m-d*a*g+r*h*g)*z,e[11]=(v*h*c-d*x*c-v*a*m+r*x*m+d*a*b-r*h*b)*z,e[12]=X*z,e[13]=(v*T*o-M*x*o+M*a*_-r*T*_-v*a*y+r*x*y)*z,e[14]=(M*h*o-d*T*o-M*a*p+r*T*p+d*a*y-r*h*y)*z,e[15]=(d*x*o-v*h*o+v*a*p-r*x*p-d*a*_+r*h*_)*z,this}scale(e){const r=this.elements,a=e.x,o=e.y,c=e.z;return r[0]*=a,r[4]*=o,r[8]*=c,r[1]*=a,r[5]*=o,r[9]*=c,r[2]*=a,r[6]*=o,r[10]*=c,r[3]*=a,r[7]*=o,r[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,a,o))}makeTranslation(e,r,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,a,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,r,-a,0,0,a,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),a=Math.sin(e);return this.set(r,0,a,0,0,1,0,0,-a,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),a=Math.sin(e);return this.set(r,-a,0,0,a,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const a=Math.cos(r),o=Math.sin(r),c=1-a,d=e.x,h=e.y,p=e.z,m=c*d,v=c*h;return this.set(m*d+a,m*h-o*p,m*p+o*h,0,m*h+o*p,v*h+a,v*p-o*d,0,m*p-o*h,v*p+o*d,c*p*p+a,0,0,0,0,1),this}makeScale(e,r,a){return this.set(e,0,0,0,0,r,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,r,a,o,c,d){return this.set(1,a,c,0,e,1,d,0,r,o,1,0,0,0,0,1),this}compose(e,r,a){const o=this.elements,c=r._x,d=r._y,h=r._z,p=r._w,m=c+c,v=d+d,x=h+h,_=c*m,b=c*v,M=c*x,T=d*v,y=d*x,g=h*x,D=p*m,I=p*v,A=p*x,X=a.x,O=a.y,z=a.z;return o[0]=(1-(T+g))*X,o[1]=(b+A)*X,o[2]=(M-I)*X,o[3]=0,o[4]=(b-A)*O,o[5]=(1-(_+g))*O,o[6]=(y+D)*O,o[7]=0,o[8]=(M+I)*z,o[9]=(y-D)*z,o[10]=(1-(_+T))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,r,a){const o=this.elements;let c=Ei.set(o[0],o[1],o[2]).length();const d=Ei.set(o[4],o[5],o[6]).length(),h=Ei.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],an.copy(this);const p=1/c,m=1/d,v=1/h;return an.elements[0]*=p,an.elements[1]*=p,an.elements[2]*=p,an.elements[4]*=m,an.elements[5]*=m,an.elements[6]*=m,an.elements[8]*=v,an.elements[9]*=v,an.elements[10]*=v,r.setFromRotationMatrix(an),a.x=c,a.y=d,a.z=h,this}makePerspective(e,r,a,o,c,d,h=Fn){const p=this.elements,m=2*c/(r-e),v=2*c/(a-o),x=(r+e)/(r-e),_=(a+o)/(a-o);let b,M;if(h===Fn)b=-(d+c)/(d-c),M=-2*d*c/(d-c);else if(h===Nl)b=-d/(d-c),M=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,r,a,o,c,d,h=Fn){const p=this.elements,m=1/(r-e),v=1/(a-o),x=1/(d-c),_=(r+e)*m,b=(a+o)*v;let M,T;if(h===Fn)M=(d+c)*x,T=-2*x;else if(h===Nl)M=c*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-b,p[2]=0,p[6]=0,p[10]=T,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const r=this.elements,a=e.elements;for(let o=0;o<16;o++)if(r[o]!==a[o])return!1;return!0}fromArray(e,r=0){for(let a=0;a<16;a++)this.elements[a]=e[a+r];return this}toArray(e=[],r=0){const a=this.elements;return e[r]=a[0],e[r+1]=a[1],e[r+2]=a[2],e[r+3]=a[3],e[r+4]=a[4],e[r+5]=a[5],e[r+6]=a[6],e[r+7]=a[7],e[r+8]=a[8],e[r+9]=a[9],e[r+10]=a[10],e[r+11]=a[11],e[r+12]=a[12],e[r+13]=a[13],e[r+14]=a[14],e[r+15]=a[15],e}}const Ei=new te,an=new zt,q_=new te(0,0,0),Y_=new te(1,1,1),fa=new te,rl=new te,zr=new te,Fp=new zt,zp=new Fs;class Hn{constructor(e=0,r=0,a=0,o=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,a,o=this._order){return this._x=e,this._y=r,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,a=!0){const o=e.elements,c=o[0],d=o[4],h=o[8],p=o[1],m=o[5],v=o[9],x=o[2],_=o[6],b=o[10];switch(r){case"XYZ":this._y=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-pt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,a){return Fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fp,r,a)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let K_=0;const Bp=new te,Ti=new Fs,Un=new zt,nl=new te,Rs=new te,$_=new te,Q_=new Fs,Hp=new te(1,0,0),Gp=new te(0,1,0),Vp=new te(0,0,1),jp={type:"added"},Z_={type:"removed"},Ri={type:"childadded",child:null},Eu={type:"childremoved",child:null};class br extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=br.DEFAULT_UP.clone();const e=new te,r=new Hn,a=new Fs,o=new te(1,1,1);function c(){a.setFromEuler(r,!1)}function d(){r.setFromQuaternion(a,void 0,!1)}r._onChange(c),a._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new zt},normalMatrix:{value:new it}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=br.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=br.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return Ti.setFromAxisAngle(e,r),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,r){return Ti.setFromAxisAngle(e,r),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Vp,e)}translateOnAxis(e,r){return Bp.copy(e).applyQuaternion(this.quaternion),this.position.add(Bp.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,r,a){e.isVector3?nl.copy(e):nl.set(e,r,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Rs,nl,this.up):Un.lookAt(nl,Rs,this.up),this.quaternion.setFromRotationMatrix(Un),o&&(Un.extractRotation(o.matrixWorld),Ti.setFromRotationMatrix(Un),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jp),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(Z_),Eu.child=e,this.dispatchEvent(Eu),Eu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jp),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let a=0,o=this.children.length;a<o;a++){const c=this.children[a].getObjectByProperty(e,r);if(c!==void 0)return c}}getObjectsByProperty(e,r,a=[]){this[e]===r&&a.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,r,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateMatrixWorld(e)}updateWorldMatrix(e,r){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const r=e===void 0||typeof e=="string",a={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const x=p[m];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(r){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),x=d(e.shapes),_=d(e.skeletons),b=d(e.animations),M=d(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),v.length>0&&(a.images=v),x.length>0&&(a.shapes=x),_.length>0&&(a.skeletons=_),b.length>0&&(a.animations=b),M.length>0&&(a.nodes=M)}return a.object=o,a;function d(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}br.DEFAULT_UP=new te(0,1,0);br.DEFAULT_MATRIX_AUTO_UPDATE=!0;br.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new te,In=new te,Tu=new te,Dn=new te,Ai=new te,Ci=new te,Wp=new te,Ru=new te,Au=new te,Cu=new te,Nu=new Gt,Pu=new Gt,Lu=new Gt;class on{constructor(e=new te,r=new te,a=new te){this.a=e,this.b=r,this.c=a}static getNormal(e,r,a,o){o.subVectors(a,r),sn.subVectors(e,r),o.cross(sn);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,r,a,o,c){sn.subVectors(o,r),In.subVectors(a,r),Tu.subVectors(e,r);const d=sn.dot(sn),h=sn.dot(In),p=sn.dot(Tu),m=In.dot(In),v=In.dot(Tu),x=d*m-h*h;if(x===0)return c.set(0,0,0),null;const _=1/x,b=(m*p-h*v)*_,M=(d*v-h*p)*_;return c.set(1-b-M,M,b)}static containsPoint(e,r,a,o){return this.getBarycoord(e,r,a,o,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,r,a,o,c,d,h,p){return this.getBarycoord(e,r,a,o,Dn)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Dn.x),p.addScaledVector(d,Dn.y),p.addScaledVector(h,Dn.z),p)}static getInterpolatedAttribute(e,r,a,o,c,d){return Nu.setScalar(0),Pu.setScalar(0),Lu.setScalar(0),Nu.fromBufferAttribute(e,r),Pu.fromBufferAttribute(e,a),Lu.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(Nu,c.x),d.addScaledVector(Pu,c.y),d.addScaledVector(Lu,c.z),d}static isFrontFacing(e,r,a,o){return sn.subVectors(a,r),In.subVectors(e,r),sn.cross(In).dot(o)<0}set(e,r,a){return this.a.copy(e),this.b.copy(r),this.c.copy(a),this}setFromPointsAndIndices(e,r,a,o){return this.a.copy(e[r]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,r,a,o){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),sn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return on.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,a,o,c){return on.getInterpolation(e,this.a,this.b,this.c,r,a,o,c)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const a=this.a,o=this.b,c=this.c;let d,h;Ai.subVectors(o,a),Ci.subVectors(c,a),Ru.subVectors(e,a);const p=Ai.dot(Ru),m=Ci.dot(Ru);if(p<=0&&m<=0)return r.copy(a);Au.subVectors(e,o);const v=Ai.dot(Au),x=Ci.dot(Au);if(v>=0&&x<=v)return r.copy(o);const _=p*x-v*m;if(_<=0&&p>=0&&v<=0)return d=p/(p-v),r.copy(a).addScaledVector(Ai,d);Cu.subVectors(e,c);const b=Ai.dot(Cu),M=Ci.dot(Cu);if(M>=0&&b<=M)return r.copy(c);const T=b*m-p*M;if(T<=0&&m>=0&&M<=0)return h=m/(m-M),r.copy(a).addScaledVector(Ci,h);const y=v*M-b*x;if(y<=0&&x-v>=0&&b-M>=0)return Wp.subVectors(c,o),h=(x-v)/(x-v+(b-M)),r.copy(o).addScaledVector(Wp,h);const g=1/(y+T+_);return d=T*g,h=_*g,r.copy(a).addScaledVector(Ai,d).addScaledVector(Ci,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pa={h:0,s:0,l:0},al={h:0,s:0,l:0};function Uu(i,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?i+(e-i)*6*r:r<1/2?e:r<2/3?i+(e-i)*6*(2/3-r):i}class wt{constructor(e,r,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,a)}set(e,r,a){if(r===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,r,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=Kr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,r),this}setRGB(e,r,a,o=yt.workingColorSpace){return this.r=e,this.g=r,this.b=a,yt.toWorkingColorSpace(this,o),this}setHSL(e,r,a,o=yt.workingColorSpace){if(e=D_(e,1),r=pt(r,0,1),a=pt(a,0,1),r===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+r):a+r-a*r,d=2*a-c;this.r=Uu(d,c,e+1/3),this.g=Uu(d,c,e),this.b=Uu(d,c,e-1/3)}return yt.toWorkingColorSpace(this,o),this}setStyle(e,r=Kr){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],h=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,r);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,r);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,r);if(d===6)return this.setHex(parseInt(c,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=Kr){const a=Gm[e.toLowerCase()];return a!==void 0?this.setHex(a,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kr){return yt.fromWorkingColorSpace(fr.copy(this),e),Math.round(pt(fr.r*255,0,255))*65536+Math.round(pt(fr.g*255,0,255))*256+Math.round(pt(fr.b*255,0,255))}getHexString(e=Kr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=yt.workingColorSpace){yt.fromWorkingColorSpace(fr.copy(this),r);const a=fr.r,o=fr.g,c=fr.b,d=Math.max(a,o,c),h=Math.min(a,o,c);let p,m;const v=(h+d)/2;if(h===d)p=0,m=0;else{const x=d-h;switch(m=v<=.5?x/(d+h):x/(2-d-h),d){case a:p=(o-c)/x+(o<c?6:0);break;case o:p=(c-a)/x+2;break;case c:p=(a-o)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,r=yt.workingColorSpace){return yt.fromWorkingColorSpace(fr.copy(this),r),e.r=fr.r,e.g=fr.g,e.b=fr.b,e}getStyle(e=Kr){yt.fromWorkingColorSpace(fr.copy(this),e);const r=fr.r,a=fr.g,o=fr.b;return e!==Kr?`color(${e} ${r.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,r,a){return this.getHSL(pa),this.setHSL(pa.h+e,pa.s+r,pa.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,a){return this.r=e.r+(r.r-e.r)*a,this.g=e.g+(r.g-e.g)*a,this.b=e.b+(r.b-e.b)*a,this}lerpHSL(e,r){this.getHSL(pa),e.getHSL(al);const a=gu(pa.h,al.h,r),o=gu(pa.s,al.s,r),c=gu(pa.l,al.l,r);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*r+c[3]*a+c[6]*o,this.g=c[1]*r+c[4]*a+c[7]*o,this.b=c[2]*r+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fr=new wt;wt.NAMES=Gm;let J_=0;class Vi extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Di,this.side=xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=Va,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const a=e[r];if(a===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const o=this[r];if(o===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[r]=a}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(a.blending=this.blending),this.side!==xa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Wu&&(a.blendSrc=this.blendSrc),this.blendDst!==Xu&&(a.blendDst=this.blendDst),this.blendEquation!==Va&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(a.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(r){const c=o(e.textures),d=o(e.images);c.length>0&&(a.textures=c),d.length>0&&(a.images=d)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let a=null;if(r!==null){const o=r.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=r[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ja extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new te,il=new At;let e0=0;class un{constructor(e,r,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=a,this.usage=Lp,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,a){e*=this.itemSize,a*=r.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=r.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,a=this.count;r<a;r++)il.fromBufferAttribute(this,r),il.applyMatrix3(e),this.setXY(r,il.x,il.y);else if(this.itemSize===3)for(let r=0,a=this.count;r<a;r++)Wt.fromBufferAttribute(this,r),Wt.applyMatrix3(e),this.setXYZ(r,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let r=0,a=this.count;r<a;r++)Wt.fromBufferAttribute(this,r),Wt.applyMatrix4(e),this.setXYZ(r,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let r=0,a=this.count;r<a;r++)Wt.fromBufferAttribute(this,r),Wt.applyNormalMatrix(e),this.setXYZ(r,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let r=0,a=this.count;r<a;r++)Wt.fromBufferAttribute(this,r),Wt.transformDirection(e),this.setXYZ(r,Wt.x,Wt.y,Wt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let a=this.array[e*this.itemSize+r];return this.normalized&&(a=Ms(a,this.array)),a}setComponent(e,r,a){return this.normalized&&(a=Cr(a,this.array)),this.array[e*this.itemSize+r]=a,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=Ms(r,this.array)),r}setX(e,r){return this.normalized&&(r=Cr(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=Ms(r,this.array)),r}setY(e,r){return this.normalized&&(r=Cr(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=Ms(r,this.array)),r}setZ(e,r){return this.normalized&&(r=Cr(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=Ms(r,this.array)),r}setW(e,r){return this.normalized&&(r=Cr(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,a){return e*=this.itemSize,this.normalized&&(r=Cr(r,this.array),a=Cr(a,this.array)),this.array[e+0]=r,this.array[e+1]=a,this}setXYZ(e,r,a,o){return e*=this.itemSize,this.normalized&&(r=Cr(r,this.array),a=Cr(a,this.array),o=Cr(o,this.array)),this.array[e+0]=r,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,r,a,o,c){return e*=this.itemSize,this.normalized&&(r=Cr(r,this.array),a=Cr(a,this.array),o=Cr(o,this.array),c=Cr(c,this.array)),this.array[e+0]=r,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lp&&(e.usage=this.usage),e}}class Vm extends un{constructor(e,r,a){super(new Uint16Array(e),r,a)}}class jm extends un{constructor(e,r,a){super(new Uint32Array(e),r,a)}}class Ur extends un{constructor(e,r,a){super(new Float32Array(e),r,a)}}let t0=0;const Yr=new zt,Iu=new br,Ni=new te,Br=new zs,As=new zs,nr=new te;class Hr extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zm(e)?jm:Vm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,a=0){this.groups.push({start:e,count:r,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new it().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yr.makeRotationFromQuaternion(e),this.applyMatrix4(Yr),this}rotateX(e){return Yr.makeRotationX(e),this.applyMatrix4(Yr),this}rotateY(e){return Yr.makeRotationY(e),this.applyMatrix4(Yr),this}rotateZ(e){return Yr.makeRotationZ(e),this.applyMatrix4(Yr),this}translate(e,r,a){return Yr.makeTranslation(e,r,a),this.applyMatrix4(Yr),this}scale(e,r,a){return Yr.makeScale(e,r,a),this.applyMatrix4(Yr),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const r=this.getAttribute("position");if(r===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];a.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ur(a,3))}else{const a=Math.min(e.length,r.count);for(let o=0;o<a;o++){const c=e[o];r.setXYZ(o,c.x,c.y,c.z||0)}e.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let a=0,o=r.length;a<o;a++){const c=r[a];Br.setFromBufferAttribute(c),this.morphTargetsRelative?(nr.addVectors(this.boundingBox.min,Br.min),this.boundingBox.expandByPoint(nr),nr.addVectors(this.boundingBox.max,Br.max),this.boundingBox.expandByPoint(nr)):(this.boundingBox.expandByPoint(Br.min),this.boundingBox.expandByPoint(Br.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const a=this.boundingSphere.center;if(Br.setFromBufferAttribute(e),r)for(let c=0,d=r.length;c<d;c++){const h=r[c];As.setFromBufferAttribute(h),this.morphTargetsRelative?(nr.addVectors(Br.min,As.min),Br.expandByPoint(nr),nr.addVectors(Br.max,As.max),Br.expandByPoint(nr)):(Br.expandByPoint(As.min),Br.expandByPoint(As.max))}Br.getCenter(a);let o=0;for(let c=0,d=e.count;c<d;c++)nr.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(nr));if(r)for(let c=0,d=r.length;c<d;c++){const h=r[c],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)nr.fromBufferAttribute(h,m),p&&(Ni.fromBufferAttribute(e,m),nr.add(Ni)),o=Math.max(o,a.distanceToSquared(nr))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=r.position,o=r.normal,c=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let K=0;K<a.count;K++)h[K]=new te,p[K]=new te;const m=new te,v=new te,x=new te,_=new At,b=new At,M=new At,T=new te,y=new te;function g(K,C,R){m.fromBufferAttribute(a,K),v.fromBufferAttribute(a,C),x.fromBufferAttribute(a,R),_.fromBufferAttribute(c,K),b.fromBufferAttribute(c,C),M.fromBufferAttribute(c,R),v.sub(m),x.sub(m),b.sub(_),M.sub(_);const H=1/(b.x*M.y-M.x*b.y);isFinite(H)&&(T.copy(v).multiplyScalar(M.y).addScaledVector(x,-b.y).multiplyScalar(H),y.copy(x).multiplyScalar(b.x).addScaledVector(v,-M.x).multiplyScalar(H),h[K].add(T),h[C].add(T),h[R].add(T),p[K].add(y),p[C].add(y),p[R].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let K=0,C=D.length;K<C;++K){const R=D[K],H=R.start,se=R.count;for(let ae=H,ce=H+se;ae<ce;ae+=3)g(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const I=new te,A=new te,X=new te,O=new te;function z(K){X.fromBufferAttribute(o,K),O.copy(X);const C=h[K];I.copy(C),I.sub(X.multiplyScalar(X.dot(C))).normalize(),A.crossVectors(O,C);const R=A.dot(p[K])<0?-1:1;d.setXYZW(K,I.x,I.y,I.z,R)}for(let K=0,C=D.length;K<C;++K){const R=D[K],H=R.start,se=R.count;for(let ae=H,ce=H+se;ae<ce;ae+=3)z(e.getX(ae+0)),z(e.getX(ae+1)),z(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new un(new Float32Array(r.count*3),3),this.setAttribute("normal",a);else for(let _=0,b=a.count;_<b;_++)a.setXYZ(_,0,0,0);const o=new te,c=new te,d=new te,h=new te,p=new te,m=new te,v=new te,x=new te;if(e)for(let _=0,b=e.count;_<b;_+=3){const M=e.getX(_+0),T=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(r,M),c.fromBufferAttribute(r,T),d.fromBufferAttribute(r,y),v.subVectors(d,c),x.subVectors(o,c),v.cross(x),h.fromBufferAttribute(a,M),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,y),h.add(v),p.add(v),m.add(v),a.setXYZ(M,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,b=r.count;_<b;_+=3)o.fromBufferAttribute(r,_+0),c.fromBufferAttribute(r,_+1),d.fromBufferAttribute(r,_+2),v.subVectors(d,c),x.subVectors(o,c),v.cross(x),a.setXYZ(_+0,v.x,v.y,v.z),a.setXYZ(_+1,v.x,v.y,v.z),a.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,a=e.count;r<a;r++)nr.fromBufferAttribute(e,r),nr.normalize(),e.setXYZ(r,nr.x,nr.y,nr.z)}toNonIndexed(){function e(h,p){const m=h.array,v=h.itemSize,x=h.normalized,_=new m.constructor(p.length*v);let b=0,M=0;for(let T=0,y=p.length;T<y;T++){h.isInterleavedBufferAttribute?b=p[T]*h.data.stride+h.offset:b=p[T]*v;for(let g=0;g<v;g++)_[M++]=m[b++]}return new un(_,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new Hr,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=e(p,a);r.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let v=0,x=m.length;v<x;v++){const _=m[v],b=e(_,a);p.push(b)}r.morphAttributes[h]=p}r.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];r.addGroup(m.start,m.count,m.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const a=this.attributes;for(const p in a){const m=a[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let x=0,_=m.length;x<_;x++){const b=m[x];v.push(b.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(r))}const c=e.morphAttributes;for(const m in c){const v=[],x=c[m];for(let _=0,b=x.length;_<b;_++)v.push(x[_].clone(r));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new zt,ka=new Gd,sl=new Bs,qp=new te,ol=new te,ll=new te,cl=new te,Du=new te,ul=new te,Yp=new te,dl=new te;class Nr extends br{constructor(e=new Hr,r=new ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,r){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,d=a.morphTargetsRelative;r.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){ul.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=h[p],x=c[p];v!==0&&(Du.fromBufferAttribute(x,e),d?ul.addScaledVector(Du,v):ul.addScaledVector(Du.sub(r),v))}r.add(ul)}return r}raycast(e,r){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),sl.copy(a.boundingSphere),sl.applyMatrix4(c),ka.copy(e.ray).recast(e.near),!(sl.containsPoint(ka.origin)===!1&&(ka.intersectSphere(sl,qp)===null||ka.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(Xp.copy(c).invert(),ka.copy(e.ray).applyMatrix4(Xp),!(a.boundingBox!==null&&ka.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,r,ka)))}_computeIntersections(e,r,a){let o;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,_=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(d))for(let M=0,T=_.length;M<T;M++){const y=_[M],g=d[y.materialIndex],D=Math.max(y.start,b.start),I=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let A=D,X=I;A<X;A+=3){const O=h.getX(A),z=h.getX(A+1),K=h.getX(A+2);o=hl(this,g,e,a,m,v,x,O,z,K),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,r.push(o))}}else{const M=Math.max(0,b.start),T=Math.min(h.count,b.start+b.count);for(let y=M,g=T;y<g;y+=3){const D=h.getX(y),I=h.getX(y+1),A=h.getX(y+2);o=hl(this,d,e,a,m,v,x,D,I,A),o&&(o.faceIndex=Math.floor(y/3),r.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let M=0,T=_.length;M<T;M++){const y=_[M],g=d[y.materialIndex],D=Math.max(y.start,b.start),I=Math.min(p.count,Math.min(y.start+y.count,b.start+b.count));for(let A=D,X=I;A<X;A+=3){const O=A,z=A+1,K=A+2;o=hl(this,g,e,a,m,v,x,O,z,K),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,r.push(o))}}else{const M=Math.max(0,b.start),T=Math.min(p.count,b.start+b.count);for(let y=M,g=T;y<g;y+=3){const D=y,I=y+1,A=y+2;o=hl(this,d,e,a,m,v,x,D,I,A),o&&(o.faceIndex=Math.floor(y/3),r.push(o))}}}}function r0(i,e,r,a,o,c,d,h){let p;if(e.side===Pr?p=a.intersectTriangle(d,c,o,!0,h):p=a.intersectTriangle(o,c,d,e.side===xa,h),p===null)return null;dl.copy(h),dl.applyMatrix4(i.matrixWorld);const m=r.ray.origin.distanceTo(dl);return m<r.near||m>r.far?null:{distance:m,point:dl.clone(),object:i}}function hl(i,e,r,a,o,c,d,h,p,m){i.getVertexPosition(h,ol),i.getVertexPosition(p,ll),i.getVertexPosition(m,cl);const v=r0(i,e,r,a,ol,ll,cl,Yp);if(v){const x=new te;on.getBarycoord(Yp,ol,ll,cl,x),o&&(v.uv=on.getInterpolatedAttribute(o,h,p,m,x,new At)),c&&(v.uv1=on.getInterpolatedAttribute(c,h,p,m,x,new At)),d&&(v.normal=on.getInterpolatedAttribute(d,h,p,m,x,new te),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new te,materialIndex:0};on.getNormal(ol,ll,cl,_.normal),v.face=_,v.barycoord=x}return v}class ji extends Hr{constructor(e=1,r=1,a=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:a,widthSegments:o,heightSegments:c,depthSegments:d};const h=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],v=[],x=[];let _=0,b=0;M("z","y","x",-1,-1,a,r,e,d,c,0),M("z","y","x",1,-1,a,r,-e,d,c,1),M("x","z","y",1,1,e,a,r,o,d,2),M("x","z","y",1,-1,e,a,-r,o,d,3),M("x","y","z",1,-1,e,r,a,o,c,4),M("x","y","z",-1,-1,e,r,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new Ur(m,3)),this.setAttribute("normal",new Ur(v,3)),this.setAttribute("uv",new Ur(x,2));function M(T,y,g,D,I,A,X,O,z,K,C){const R=A/z,H=X/K,se=A/2,ae=X/2,ce=O/2,me=z+1,le=K+1;let fe=0,k=0;const oe=new te;for(let j=0;j<le;j++){const U=j*H-ae;for(let $=0;$<me;$++){const Me=$*R-se;oe[T]=Me*D,oe[y]=U*I,oe[g]=ce,m.push(oe.x,oe.y,oe.z),oe[T]=0,oe[y]=0,oe[g]=O>0?1:-1,v.push(oe.x,oe.y,oe.z),x.push($/z),x.push(1-j/K),fe+=1}}for(let j=0;j<K;j++)for(let U=0;U<z;U++){const $=_+U+me*j,Me=_+U+me*(j+1),Y=_+(U+1)+me*(j+1),ue=_+(U+1)+me*j;p.push($,Me,ue),p.push(Me,Y,ue),k+=6}h.addGroup(b,k,C),b+=k,_+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const r in i){e[r]={};for(const a in i[r]){const o=i[r][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][a]=null):e[r][a]=o.clone():Array.isArray(o)?e[r][a]=o.slice():e[r][a]=o}}return e}function yr(i){const e={};for(let r=0;r<i.length;r++){const a=Hi(i[r]);for(const o in a)e[o]=a[o]}return e}function n0(i){const e=[];for(let r=0;r<i.length;r++)e.push(i[r].clone());return e}function Wm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const a0={clone:Hi,merge:yr};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ya extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=n0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?r.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?r.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?r.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?r.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?r.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?r.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?r.uniforms[o]={type:"m4",value:c.toArray()}:r.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(r.extensions=a),r}}class Xm extends br{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Fn}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ma=new te,Kp=new At,$p=new At;class $r extends Xm{constructor(e=50,r=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=Nd*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,r,a){ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ma.x,ma.y).multiplyScalar(-e/ma.z),ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ma.x,ma.y).multiplyScalar(-e/ma.z)}getViewSize(e,r){return this.getViewBounds(e,Kp,$p),r.subVectors($p,Kp)}setViewOffset(e,r,a,o,c,d){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(mu*.5*this.fov)/this.zoom,a=2*r,o=this.aspect*a,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*o/p,r-=d.offsetY*a/m,o*=d.width/p,a*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,r,r-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Pi=-90,Li=1;class o0 extends br{constructor(e,r,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $r(Pi,Li,e,r);o.layers=this.layers,this.add(o);const c=new $r(Pi,Li,e,r);c.layers=this.layers,this.add(c);const d=new $r(Pi,Li,e,r);d.layers=this.layers,this.add(d);const h=new $r(Pi,Li,e,r);h.layers=this.layers,this.add(h);const p=new $r(Pi,Li,e,r);p.layers=this.layers,this.add(p);const m=new $r(Pi,Li,e,r);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[a,o,c,d,h,p]=r;for(const m of r)this.remove(m);if(e===Fn)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Nl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of r)this.add(m),m.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(r,c),e.setRenderTarget(a,1,o),e.render(r,d),e.setRenderTarget(a,2,o),e.render(r,h),e.setRenderTarget(a,3,o),e.render(r,p),e.setRenderTarget(a,4,o),e.render(r,m),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,o),e.render(r,v),e.setRenderTarget(x,_,b),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class qm extends Lr{constructor(e=[],r=Fi,a,o,c,d,h,p,m,v){super(e,r,a,o,c,d,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l0 extends Ka{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new qm(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:xn}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ji(5,5,5),c=new ya({name:"CubemapFromEquirect",uniforms:Hi(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Pr,blending:va});c.uniforms.tEquirect.value=r;const d=new Nr(o,c),h=r.minFilter;return r.minFilter===qa&&(r.minFilter=xn),new o0(1,10,this).update(e,d),r.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,r=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(r,a,o);e.setRenderTarget(c)}}class fl extends br{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c0={type:"move"};class Ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const a of e.hand.values())this._getHandJoint(r,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,a){let o=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const y=r.getJointPose(T,a),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],_=v.position.distanceTo(x.position),b=.02,M=.005;m.inputState.pinching&&_>b+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=b-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=r.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=r.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(c0)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const a=new fl;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[r.jointName]=a,e.add(a)}return e.joints[r.jointName]}}class u0 extends br{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(r.object.environmentIntensity=this.environmentIntensity),r.object.environmentRotation=this.environmentRotation.toArray(),r}}const ku=new te,d0=new te,h0=new it;class Ha{constructor(e=new te(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,a,o){return this.normal.set(e,r,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,a){const o=ku.subVectors(a,r).cross(d0.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const a=e.delta(ku),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:r.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const r=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return r<0&&a>0||a<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const a=r||h0.getNormalMatrix(e),o=this.coplanarPoint(ku).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fa=new Bs,pl=new te;class Ym{constructor(e=new Ha,r=new Ha,a=new Ha,o=new Ha,c=new Ha,d=new Ha){this.planes=[e,r,a,o,c,d]}set(e,r,a,o,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(r),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(d),this}copy(e){const r=this.planes;for(let a=0;a<6;a++)r[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,r=Fn){const a=this.planes,o=e.elements,c=o[0],d=o[1],h=o[2],p=o[3],m=o[4],v=o[5],x=o[6],_=o[7],b=o[8],M=o[9],T=o[10],y=o[11],g=o[12],D=o[13],I=o[14],A=o[15];if(a[0].setComponents(p-c,_-m,y-b,A-g).normalize(),a[1].setComponents(p+c,_+m,y+b,A+g).normalize(),a[2].setComponents(p+d,_+v,y+M,A+D).normalize(),a[3].setComponents(p-d,_-v,y-M,A-D).normalize(),a[4].setComponents(p-h,_-x,y-T,A-I).normalize(),r===Fn)a[5].setComponents(p+h,_+x,y+T,A+I).normalize();else if(r===Nl)a[5].setComponents(h,x,T,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),Fa.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fa)}intersectsSprite(e){return Fa.center.set(0,0,0),Fa.radius=.7071067811865476,Fa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fa)}intersectsSphere(e){const r=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(r[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const r=this.planes;for(let a=0;a<6;a++){const o=r[a];if(pl.x=o.normal.x>0?e.max.x:e.min.x,pl.y=o.normal.y>0?e.max.y:e.min.y,pl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let a=0;a<6;a++)if(r[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Km extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ll=new te,Ul=new te,Qp=new zt,Cs=new Gd,ml=new Bs,Fu=new te,Zp=new te;class f0 extends br{constructor(e=new Hr,r=new Km){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=r,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const r=e.attributes.position,a=[0];for(let o=1,c=r.count;o<c;o++)Ll.fromBufferAttribute(r,o-1),Ul.fromBufferAttribute(r,o),a[o]=a[o-1],a[o]+=Ll.distanceTo(Ul);e.setAttribute("lineDistance",new Ur(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,r){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,d=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ml.copy(a.boundingSphere),ml.applyMatrix4(o),ml.radius+=c,e.ray.intersectsSphere(ml)===!1)return;Qp.copy(o).invert(),Cs.copy(e.ray).applyMatrix4(Qp);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,v=a.index,x=a.attributes.position;if(v!==null){const _=Math.max(0,d.start),b=Math.min(v.count,d.start+d.count);for(let M=_,T=b-1;M<T;M+=m){const y=v.getX(M),g=v.getX(M+1),D=gl(this,e,Cs,p,y,g,M);D&&r.push(D)}if(this.isLineLoop){const M=v.getX(b-1),T=v.getX(_),y=gl(this,e,Cs,p,M,T,b-1);y&&r.push(y)}}else{const _=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let M=_,T=b-1;M<T;M+=m){const y=gl(this,e,Cs,p,M,M+1,M);y&&r.push(y)}if(this.isLineLoop){const M=gl(this,e,Cs,p,b-1,_,b-1);M&&r.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}}function gl(i,e,r,a,o,c,d){const h=i.geometry.attributes.position;if(Ll.fromBufferAttribute(h,o),Ul.fromBufferAttribute(h,c),r.distanceSqToSegment(Ll,Ul,Fu,Zp)>a)return;Fu.applyMatrix4(i.matrixWorld);const p=e.ray.origin.distanceTo(Fu);if(!(p<e.near||p>e.far))return{distance:p,point:Zp.clone().applyMatrix4(i.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:i}}class $m extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jp=new zt,Pd=new Gd,vl=new Bs,_l=new te;class p0 extends br{constructor(e=new Hr,r=new $m){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=r,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,r){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,d=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),vl.copy(a.boundingSphere),vl.applyMatrix4(o),vl.radius+=c,e.ray.intersectsSphere(vl)===!1)return;Jp.copy(o).invert(),Pd.copy(e.ray).applyMatrix4(Jp);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=a.index,v=a.attributes.position;if(m!==null){const x=Math.max(0,d.start),_=Math.min(m.count,d.start+d.count);for(let b=x,M=_;b<M;b++){const T=m.getX(b);_l.fromBufferAttribute(v,T),em(_l,T,p,o,e,r,this)}}else{const x=Math.max(0,d.start),_=Math.min(v.count,d.start+d.count);for(let b=x,M=_;b<M;b++)_l.fromBufferAttribute(v,b),em(_l,b,p,o,e,r,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const a=e[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}}function em(i,e,r,a,o,c,d){const h=Pd.distanceSqToPoint(i);if(h<r){const p=new te;Pd.closestPointToPoint(i,p),p.applyMatrix4(a);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Qm extends Lr{constructor(e,r,a=Ya,o,c,d,h=cn,p=cn,m,v=Is){if(v!==Is&&v!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,d,h,p,v,a,m),this.isDepthTexture=!0,this.image={width:e,height:r},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}class Dl extends Hr{constructor(e=1,r=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:a,heightSegments:o};const c=e/2,d=r/2,h=Math.floor(a),p=Math.floor(o),m=h+1,v=p+1,x=e/h,_=r/p,b=[],M=[],T=[],y=[];for(let g=0;g<v;g++){const D=g*_-d;for(let I=0;I<m;I++){const A=I*x-c;M.push(A,-D,0),T.push(0,0,1),y.push(I/h),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<h;D++){const I=D+m*g,A=D+m*(g+1),X=D+1+m*(g+1),O=D+1+m*g;b.push(I,A,O),b.push(A,X,O)}this.setIndex(b),this.setAttribute("position",new Ur(M,3)),this.setAttribute("normal",new Ur(T,3)),this.setAttribute("uv",new Ur(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vd extends Hr{constructor(e=.5,r=1,a=32,o=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:r,thetaSegments:a,phiSegments:o,thetaStart:c,thetaLength:d},a=Math.max(3,a),o=Math.max(1,o);const h=[],p=[],m=[],v=[];let x=e;const _=(r-e)/o,b=new te,M=new At;for(let T=0;T<=o;T++){for(let y=0;y<=a;y++){const g=c+y/a*d;b.x=x*Math.cos(g),b.y=x*Math.sin(g),p.push(b.x,b.y,b.z),m.push(0,0,1),M.x=(b.x/r+1)/2,M.y=(b.y/r+1)/2,v.push(M.x,M.y)}x+=_}for(let T=0;T<o;T++){const y=T*(a+1);for(let g=0;g<a;g++){const D=g+y,I=D,A=D+a+1,X=D+a+2,O=D+1;h.push(I,A,O),h.push(A,X,O)}}this.setIndex(h),this.setAttribute("position",new Ur(p,3)),this.setAttribute("normal",new Ur(m,3)),this.setAttribute("uv",new Ur(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ps extends Hr{constructor(e=1,r=32,a=16,o=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:r,heightSegments:a,phiStart:o,phiLength:c,thetaStart:d,thetaLength:h},r=Math.max(3,Math.floor(r)),a=Math.max(2,Math.floor(a));const p=Math.min(d+h,Math.PI);let m=0;const v=[],x=new te,_=new te,b=[],M=[],T=[],y=[];for(let g=0;g<=a;g++){const D=[],I=g/a;let A=0;g===0&&d===0?A=.5/r:g===a&&p===Math.PI&&(A=-.5/r);for(let X=0;X<=r;X++){const O=X/r;x.x=-e*Math.cos(o+O*c)*Math.sin(d+I*h),x.y=e*Math.cos(d+I*h),x.z=e*Math.sin(o+O*c)*Math.sin(d+I*h),M.push(x.x,x.y,x.z),_.copy(x).normalize(),T.push(_.x,_.y,_.z),y.push(O+A,1-I),D.push(m++)}v.push(D)}for(let g=0;g<a;g++)for(let D=0;D<r;D++){const I=v[g][D+1],A=v[g][D],X=v[g+1][D],O=v[g+1][D+1];(g!==0||d>0)&&b.push(I,A,O),(g!==a-1||p<Math.PI)&&b.push(A,X,O)}this.setIndex(b),this.setAttribute("position",new Ur(M,3)),this.setAttribute("normal",new Ur(T,3)),this.setAttribute("uv",new Ur(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class m0 extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g0 extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class v0 extends Xm{constructor(e=-1,r=1,a=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=a,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,a,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,d=a+e,h=o+r,p=o-r;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}class _0 extends $r{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function tm(i,e,r,a){const o=x0(a);switch(r){case Um:return i*e;case Dm:return i*e/o.components*o.byteLength;case Fd:return i*e/o.components*o.byteLength;case Om:return i*e*2/o.components*o.byteLength;case zd:return i*e*2/o.components*o.byteLength;case Im:return i*e*3/o.components*o.byteLength;case ln:return i*e*4/o.components*o.byteLength;case Bd:return i*e*4/o.components*o.byteLength;case Sl:case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case id:case od:return Math.max(i,16)*Math.max(e,8)/4;case ad:case sd:return Math.max(i,8)*Math.max(e,8)/2;case ld:case cd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ud:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Ed:case Td:return Math.ceil(i/4)*Math.ceil(e/4)*16;case km:case Rd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ad:case Cd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function x0(i){switch(i){case Bn:case Nm:return{byteLength:1,components:1};case Ls:case Pm:case Os:return{byteLength:2,components:1};case Od:case kd:return{byteLength:2,components:4};case Ya:case Dd:case kn:return{byteLength:4,components:1};case Lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/function Zm(){let i=null,e=!1,r=null,a=null;function o(c,d){r(c,d),a=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&r!==null&&(a=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){r=c},setContext:function(c){i=c}}}function y0(i){const e=new WeakMap;function r(h,p){const m=h.array,v=h.usage,x=m.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,m,v),h.onUploadCallback();let b;if(m instanceof Float32Array)b=i.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?b=i.HALF_FLOAT:b=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=i.SHORT;else if(m instanceof Uint32Array)b=i.UNSIGNED_INT;else if(m instanceof Int32Array)b=i.INT;else if(m instanceof Int8Array)b=i.BYTE;else if(m instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function a(h,p,m){const v=p.array,x=p.updateRanges;if(i.bindBuffer(m,h),x.length===0)i.bufferSubData(m,0,v);else{x.sort((b,M)=>b.start-M.start);let _=0;for(let b=1;b<x.length;b++){const M=x[_],T=x[b];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,x[_]=T)}x.length=_+1;for(let b=0,M=x.length;b<M;b++){const T=x[b];i.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(i.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,r(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:d}}var b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
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
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,j0=`#define PI 3.141592653589793
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
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X0=`vec3 transformedNormal = objectNormal;
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
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J0=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ox=`#ifdef USE_FOG
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
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
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
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
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
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
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
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
#endif`,Gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
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
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iy=`float getShadowMask() {
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
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
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
}`,by=`uniform sampler2D t2D;
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
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
}`,Ry=`#if DEPTH_PACKING == 3200
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
}`,Ay=`#define DISTANCE
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
}`,Cy=`#define DISTANCE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`uniform float scale;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Oy=`#define LAMBERT
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
}`,ky=`#define LAMBERT
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
}`,Fy=`#define MATCAP
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
}`,zy=`#define MATCAP
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
}`,By=`#define NORMAL
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
}`,Gy=`#define PHONG
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
}`,Vy=`#define PHONG
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
}`,jy=`#define STANDARD
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
}`,Wy=`#define STANDARD
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
}`,qy=`#define TOON
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
}`,Yy=`uniform float size;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,$y=`#include <common>
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
}`,Qy=`uniform vec3 color;
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
}`,Zy=`uniform float rotation;
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
}`,ot={alphahash_fragment:b0,alphahash_pars_fragment:S0,alphamap_fragment:w0,alphamap_pars_fragment:M0,alphatest_fragment:E0,alphatest_pars_fragment:T0,aomap_fragment:R0,aomap_pars_fragment:A0,batching_pars_vertex:C0,batching_vertex:N0,begin_vertex:P0,beginnormal_vertex:L0,bsdfs:U0,iridescence_fragment:I0,bumpmap_pars_fragment:D0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:z0,color_fragment:B0,color_pars_fragment:H0,color_pars_vertex:G0,color_vertex:V0,common:j0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:q0,displacementmap_vertex:Y0,emissivemap_fragment:K0,emissivemap_pars_fragment:$0,colorspace_fragment:Q0,colorspace_pars_fragment:Z0,envmap_fragment:J0,envmap_common_pars_fragment:ex,envmap_pars_fragment:tx,envmap_pars_vertex:rx,envmap_physical_pars_fragment:fx,envmap_vertex:nx,fog_vertex:ax,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:ox,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:dx,lights_pars_begin:hx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:vx,lights_physical_fragment:_x,lights_physical_pars_fragment:xx,lights_fragment_begin:yx,lights_fragment_maps:bx,lights_fragment_end:Sx,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Ex,logdepthbuf_vertex:Tx,map_fragment:Rx,map_pars_fragment:Ax,map_particle_fragment:Cx,map_particle_pars_fragment:Nx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Lx,morphinstance_vertex:Ux,morphcolor_vertex:Ix,morphnormal_vertex:Dx,morphtarget_pars_vertex:Ox,morphtarget_vertex:kx,normal_fragment_begin:Fx,normal_fragment_maps:zx,normal_pars_fragment:Bx,normal_pars_vertex:Hx,normal_vertex:Gx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:qx,opaque_fragment:Yx,packing:Kx,premultiplied_alpha_fragment:$x,project_vertex:Qx,dithering_fragment:Zx,dithering_pars_fragment:Jx,roughnessmap_fragment:ey,roughnessmap_pars_fragment:ty,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:ny,shadowmap_vertex:ay,shadowmask_pars_fragment:iy,skinbase_vertex:sy,skinning_pars_vertex:oy,skinning_vertex:ly,skinnormal_vertex:cy,specularmap_fragment:uy,specularmap_pars_fragment:dy,tonemapping_fragment:hy,tonemapping_pars_fragment:fy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:vy,uv_vertex:_y,worldpos_vertex:xy,background_vert:yy,background_frag:by,backgroundCube_vert:Sy,backgroundCube_frag:wy,cube_vert:My,cube_frag:Ey,depth_vert:Ty,depth_frag:Ry,distanceRGBA_vert:Ay,distanceRGBA_frag:Cy,equirect_vert:Ny,equirect_frag:Py,linedashed_vert:Ly,linedashed_frag:Uy,meshbasic_vert:Iy,meshbasic_frag:Dy,meshlambert_vert:Oy,meshlambert_frag:ky,meshmatcap_vert:Fy,meshmatcap_frag:zy,meshnormal_vert:By,meshnormal_frag:Hy,meshphong_vert:Gy,meshphong_frag:Vy,meshphysical_vert:jy,meshphysical_frag:Wy,meshtoon_vert:Xy,meshtoon_frag:qy,points_vert:Yy,points_frag:Ky,shadow_vert:$y,shadow_frag:Qy,sprite_vert:Zy,sprite_frag:Jy},Ne={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},vn={basic:{uniforms:yr([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:yr([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:yr([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:yr([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:yr([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:yr([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:yr([Ne.points,Ne.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:yr([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:yr([Ne.common,Ne.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:yr([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:yr([Ne.sprite,Ne.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:yr([Ne.common,Ne.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:yr([Ne.lights,Ne.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};vn.physical={uniforms:yr([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const xl={r:0,b:0,g:0},za=new Hn,eb=new zt;function tb(i,e,r,a,o,c,d){const h=new wt(0);let p=c===!0?0:1,m,v,x=null,_=0,b=null;function M(I){let A=I.isScene===!0?I.background:null;return A&&A.isTexture&&(A=(I.backgroundBlurriness>0?r:e).get(A)),A}function T(I){let A=!1;const X=M(I);X===null?g(h,p):X&&X.isColor&&(g(X,1),A=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,d),(i.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(I,A){const X=M(A);X&&(X.isCubeTexture||X.mapping===Il)?(v===void 0&&(v=new Nr(new ji(1,1,1),new ya({name:"BackgroundCubeMaterial",uniforms:Hi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(O,z,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),za.copy(A.backgroundRotation),za.x*=-1,za.y*=-1,za.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(za.y*=-1,za.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(eb.makeRotationFromEuler(za)),v.material.toneMapped=yt.getTransfer(X.colorSpace)!==Rt,(x!==X||_!==X.version||b!==i.toneMapping)&&(v.material.needsUpdate=!0,x=X,_=X.version,b=i.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new Nr(new Dl(2,2),new ya({name:"BackgroundMaterial",uniforms:Hi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.toneMapped=yt.getTransfer(X.colorSpace)!==Rt,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(x!==X||_!==X.version||b!==i.toneMapping)&&(m.material.needsUpdate=!0,x=X,_=X.version,b=i.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function g(I,A){I.getRGB(xl,Wm(i)),a.buffers.color.setClear(xl.r,xl.g,xl.b,A,d)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(I,A=1){h.set(I),p=A,g(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,g(h,p)},render:T,addToRenderList:y,dispose:D}}function rb(i,e){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,d=!1;function h(R,H,se,ae,ce){let me=!1;const le=x(ae,se,H);c!==le&&(c=le,m(c.object)),me=b(R,ae,se,ce),me&&M(R,ae,se,ce),ce!==null&&e.update(ce,i.ELEMENT_ARRAY_BUFFER),(me||d)&&(d=!1,A(R,H,se,ae),ce!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return i.createVertexArray()}function m(R){return i.bindVertexArray(R)}function v(R){return i.deleteVertexArray(R)}function x(R,H,se){const ae=se.wireframe===!0;let ce=a[R.id];ce===void 0&&(ce={},a[R.id]=ce);let me=ce[H.id];me===void 0&&(me={},ce[H.id]=me);let le=me[ae];return le===void 0&&(le=_(p()),me[ae]=le),le}function _(R){const H=[],se=[],ae=[];for(let ce=0;ce<r;ce++)H[ce]=0,se[ce]=0,ae[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:se,attributeDivisors:ae,object:R,attributes:{},index:null}}function b(R,H,se,ae){const ce=c.attributes,me=H.attributes;let le=0;const fe=se.getAttributes();for(const k in fe)if(fe[k].location>=0){const oe=ce[k];let j=me[k];if(j===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),oe===void 0||oe.attribute!==j||j&&oe.data!==j.data)return!0;le++}return c.attributesNum!==le||c.index!==ae}function M(R,H,se,ae){const ce={},me=H.attributes;let le=0;const fe=se.getAttributes();for(const k in fe)if(fe[k].location>=0){let oe=me[k];oe===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const j={};j.attribute=oe,oe&&oe.data&&(j.data=oe.data),ce[k]=j,le++}c.attributes=ce,c.attributesNum=le,c.index=ae}function T(){const R=c.newAttributes;for(let H=0,se=R.length;H<se;H++)R[H]=0}function y(R){g(R,0)}function g(R,H){const se=c.newAttributes,ae=c.enabledAttributes,ce=c.attributeDivisors;se[R]=1,ae[R]===0&&(i.enableVertexAttribArray(R),ae[R]=1),ce[R]!==H&&(i.vertexAttribDivisor(R,H),ce[R]=H)}function D(){const R=c.newAttributes,H=c.enabledAttributes;for(let se=0,ae=H.length;se<ae;se++)H[se]!==R[se]&&(i.disableVertexAttribArray(se),H[se]=0)}function I(R,H,se,ae,ce,me,le){le===!0?i.vertexAttribIPointer(R,H,se,ce,me):i.vertexAttribPointer(R,H,se,ae,ce,me)}function A(R,H,se,ae){T();const ce=ae.attributes,me=se.getAttributes(),le=H.defaultAttributeValues;for(const fe in me){const k=me[fe];if(k.location>=0){let oe=ce[fe];if(oe===void 0&&(fe==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),fe==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const j=oe.normalized,U=oe.itemSize,$=e.get(oe);if($===void 0)continue;const Me=$.buffer,Y=$.type,ue=$.bytesPerElement,be=Y===i.INT||Y===i.UNSIGNED_INT||oe.gpuType===Dd;if(oe.isInterleavedBufferAttribute){const _e=oe.data,Te=_e.stride,De=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let Ze=0;Ze<k.locationSize;Ze++)g(k.location+Ze,_e.meshPerAttribute);R.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ze=0;Ze<k.locationSize;Ze++)y(k.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ze=0;Ze<k.locationSize;Ze++)I(k.location+Ze,U/k.locationSize,Y,j,Te*ue,(De+U/k.locationSize*Ze)*ue,be)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<k.locationSize;_e++)g(k.location+_e,oe.meshPerAttribute);R.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<k.locationSize;_e++)y(k.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let _e=0;_e<k.locationSize;_e++)I(k.location+_e,U/k.locationSize,Y,j,U*ue,U/k.locationSize*_e*ue,be)}}else if(le!==void 0){const j=le[fe];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(k.location,j);break;case 3:i.vertexAttrib3fv(k.location,j);break;case 4:i.vertexAttrib4fv(k.location,j);break;default:i.vertexAttrib1fv(k.location,j)}}}}D()}function X(){K();for(const R in a){const H=a[R];for(const se in H){const ae=H[se];for(const ce in ae)v(ae[ce].object),delete ae[ce];delete H[se]}delete a[R]}}function O(R){if(a[R.id]===void 0)return;const H=a[R.id];for(const se in H){const ae=H[se];for(const ce in ae)v(ae[ce].object),delete ae[ce];delete H[se]}delete a[R.id]}function z(R){for(const H in a){const se=a[H];if(se[R.id]===void 0)continue;const ae=se[R.id];for(const ce in ae)v(ae[ce].object),delete ae[ce];delete se[R.id]}}function K(){C(),d=!0,c!==o&&(c=o,m(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:K,resetDefaultState:C,dispose:X,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function nb(i,e,r){let a;function o(m){a=m}function c(m,v){i.drawArrays(a,m,v),r.update(v,a,1)}function d(m,v,x){x!==0&&(i.drawArraysInstanced(a,m,v,x),r.update(v,a,x))}function h(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,v,0,x);let _=0;for(let b=0;b<x;b++)_+=v[b];r.update(_,a,1)}function p(m,v,x,_){if(x===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<m.length;M++)d(m[M],v[M],_[M]);else{b.multiDrawArraysInstancedWEBGL(a,m,0,v,0,_,0,x);let M=0;for(let T=0;T<x;T++)M+=v[T]*_[T];r.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function ab(i,e,r,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(z){return!(z!==ln&&a.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const K=z===Os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Bn&&a.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==kn&&!K)}function p(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=r.precision!==void 0?r.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=r.logarithmicDepthBuffer===!0,_=r.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),b=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),X=M>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:_,maxTextures:b,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:I,maxFragmentUniforms:A,vertexTextures:X,maxSamples:O}}function ib(i){const e=this;let r=null,a=0,o=!1,c=!1;const d=new Ha,h=new it,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const b=x.length!==0||_||a!==0||o;return o=_,a=x.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){r=v(x,_,0)},this.setState=function(x,_,b){const M=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,g=i.get(x);if(!o||M===null||M.length===0||c&&!y)c?v(null):m();else{const D=c?0:a,I=D*4;let A=g.clippingState||null;p.value=A,A=v(M,_,I,b);for(let X=0;X!==I;++X)A[X]=r[X];g.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==r&&(p.value=r,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(x,_,b,M){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=p.value,M!==!0||y===null){const g=b+T*4,D=_.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let I=0,A=b;I!==T;++I,A+=4)d.copy(x[I]).applyMatrix4(D,h),d.normal.toArray(y,A),y[A+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function sb(i){let e=new WeakMap;function r(d,h){return h===ed?d.mapping=Fi:h===td&&(d.mapping=zi),d}function a(d){if(d&&d.isTexture){const h=d.mapping;if(h===ed||h===td)if(e.has(d)){const p=e.get(d).texture;return r(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new l0(p.height);return m.fromEquirectangularTexture(i,d),e.set(d,m),d.addEventListener("dispose",o),r(m.texture,d.mapping)}else return null}}return d}function o(d){const h=d.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Ii=4,rm=[.125,.215,.35,.446,.526,.582],Wa=20,zu=new v0,nm=new wt;let Bu=null,Hu=0,Gu=0,Vu=!1;const Ga=(1+Math.sqrt(5))/2,Ui=1/Ga,am=[new te(-Ga,Ui,0),new te(Ga,Ui,0),new te(-Ui,0,Ga),new te(Ui,0,Ga),new te(0,Ga,-Ui),new te(0,Ga,Ui),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)],ob=new te;class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,a=.1,o=100,c={}){const{size:d=256,position:h=ob}=c;Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,h),r>0&&this._blur(p,0,0,r),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Hu,Gu),this._renderer.xr.enabled=Vu,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===Fi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=r||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,a={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Os,format:ln,colorSpace:Bi,depthBuffer:!1},o=sm(e,r,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,r,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lb(c)),this._blurMaterial=cb(c,e,r)}return o}_compileMaterial(e){const r=new Nr(this._lodPlanes[0],e);this._renderer.compile(r,zu)}_sceneToCubeUV(e,r,a,o,c){const d=new $r(90,1,r,a),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,x=m.toneMapping;m.getClearColor(nm),m.toneMapping=_a,m.autoClear=!1;const _=new ja({name:"PMREM.Background",side:Pr,depthWrite:!1,depthTest:!1}),b=new Nr(new ji,_);let M=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,M=!0):(_.color.copy(nm),M=!0);for(let y=0;y<6;y++){const g=y%3;g===0?(d.up.set(0,h[y],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+p[y],c.y,c.z)):g===1?(d.up.set(0,0,h[y]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+p[y],c.z)):(d.up.set(0,h[y],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+p[y]));const D=this._cubeSize;yl(o,g*D,y>2?D:0,D,D),m.setRenderTarget(o),M&&m.render(b,d),m.render(e,d)}b.geometry.dispose(),b.material.dispose(),m.toneMapping=x,m.autoClear=v,e.background=T}_textureToCubeUV(e,r){const a=this._renderer,o=e.mapping===Fi||e.mapping===zi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new Nr(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;yl(r,0,0,3*p,2*p),a.setRenderTarget(r),a.render(d,zu)}_applyPMREM(e){const r=this._renderer,a=r.autoClear;r.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=am[(o-c-1)%am.length];this._blur(e,c-1,c,d,h)}r.autoClear=a}_blur(e,r,a,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,r,a,o,"latitudinal",c),this._halfBlur(d,e,a,a,o,"longitudinal",c)}_halfBlur(e,r,a,o,c,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Nr(this._lodPlanes[o],m),_=m.uniforms,b=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Wa-1),T=c/M,y=isFinite(c)?1+Math.floor(v*T):Wa;y>Wa&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Wa}`);const g=[];let D=0;for(let z=0;z<Wa;++z){const K=z/T,C=Math.exp(-K*K/2);g.push(C),z===0?D+=C:z<y&&(D+=2*C)}for(let z=0;z<g.length;z++)g[z]=g[z]/D;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=g,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:I}=this;_.dTheta.value=M,_.mipInt.value=I-a;const A=this._sizeLods[o],X=3*A*(o>I-Ii?o-I+Ii:0),O=4*(this._cubeSize-A);yl(r,X,O,3*A,2*A),p.setRenderTarget(r),p.render(x,zu)}}function lb(i){const e=[],r=[],a=[];let o=i;const c=i-Ii+1+rm.length;for(let d=0;d<c;d++){const h=Math.pow(2,o);r.push(h);let p=1/h;d>i-Ii?p=rm[d-i+Ii-1]:d===0&&(p=0),a.push(p);const m=1/(h-2),v=-m,x=1+m,_=[v,v,x,v,x,x,v,v,x,x,v,x],b=6,M=6,T=3,y=2,g=1,D=new Float32Array(T*M*b),I=new Float32Array(y*M*b),A=new Float32Array(g*M*b);for(let O=0;O<b;O++){const z=O%3*2/3-1,K=O>2?0:-1,C=[z,K,0,z+2/3,K,0,z+2/3,K+1,0,z,K,0,z+2/3,K+1,0,z,K+1,0];D.set(C,T*M*O),I.set(_,y*M*O);const R=[O,O,O,O,O,O];A.set(R,g*M*O)}const X=new Hr;X.setAttribute("position",new un(D,T)),X.setAttribute("uv",new un(I,y)),X.setAttribute("faceIndex",new un(A,g)),e.push(X),o>Ii&&o--}return{lodPlanes:e,sizeLods:r,sigmas:a}}function sm(i,e,r){const a=new Ka(i,e,r);return a.texture.mapping=Il,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function yl(i,e,r,a,o){i.viewport.set(e,r,a,o),i.scissor.set(e,r,a,o)}function cb(i,e,r){const a=new Float32Array(Wa),o=new te(0,1,0);return new ya({name:"SphericalGaussianBlur",defines:{n:Wa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:jd(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function om(){return new ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function lm(){return new ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function jd(){return`

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
	`}function ub(i){let e=new WeakMap,r=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===ed||p===td,v=p===Fi||p===zi;if(m||v){let x=e.get(h);const _=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return r===null&&(r=new im(i)),x=m?r.fromEquirectangular(h,x):r.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const b=h.image;return m&&b&&b.height>0||v&&b&&o(b)?(r===null&&(r=new im(i)),x=m?r.fromEquirectangular(h):r.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function o(h){let p=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function db(i){const e={};function r(a){if(e[a]!==void 0)return e[a];let o;switch(a){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(a)}return e[a]=o,o}return{has:function(a){return r(a)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(a){const o=r(a);return o===null&&Rl("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function hb(i,e,r,a){const o={},c=new WeakMap;function d(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",d),delete o[_.id];const b=c.get(_);b&&(e.remove(b),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,r.memory.geometries--}function h(x,_){return o[_.id]===!0||(_.addEventListener("dispose",d),o[_.id]=!0,r.memory.geometries++),_}function p(x){const _=x.attributes;for(const b in _)e.update(_[b],i.ARRAY_BUFFER)}function m(x){const _=[],b=x.index,M=x.attributes.position;let T=0;if(b!==null){const D=b.array;T=b.version;for(let I=0,A=D.length;I<A;I+=3){const X=D[I+0],O=D[I+1],z=D[I+2];_.push(X,O,O,z,z,X)}}else if(M!==void 0){const D=M.array;T=M.version;for(let I=0,A=D.length/3-1;I<A;I+=3){const X=I+0,O=I+1,z=I+2;_.push(X,O,O,z,z,X)}}else return;const y=new(zm(_)?jm:Vm)(_,1);y.version=T;const g=c.get(x);g&&e.remove(g),c.set(x,y)}function v(x){const _=c.get(x);if(_){const b=x.index;b!==null&&_.version<b.version&&m(x)}else m(x);return c.get(x)}return{get:h,update:p,getWireframeAttribute:v}}function fb(i,e,r){let a;function o(_){a=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function p(_,b){i.drawElements(a,b,c,_*d),r.update(b,a,1)}function m(_,b,M){M!==0&&(i.drawElementsInstanced(a,b,c,_*d,M),r.update(b,a,M))}function v(_,b,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,b,0,c,_,0,M);let T=0;for(let y=0;y<M;y++)T+=b[y];r.update(T,a,1)}function x(_,b,M,T){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<_.length;g++)m(_[g]/d,b[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(a,b,0,c,_,0,T,0,M);let g=0;for(let D=0;D<M;D++)g+=b[D]*T[D];r.update(g,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function pb(i){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,d,h){switch(r.calls++,d){case i.TRIANGLES:r.triangles+=h*(c/3);break;case i.LINES:r.lines+=h*(c/2);break;case i.LINE_STRIP:r.lines+=h*(c-1);break;case i.LINE_LOOP:r.lines+=h*c;break;case i.POINTS:r.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:o,update:a}}function mb(i,e,r){const a=new WeakMap,o=new Gt;function c(d,h,p){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let _=a.get(h);if(_===void 0||_.count!==x){let b=function(){K.dispose(),a.delete(h),h.removeEventListener("dispose",b)};_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let A=0;M===!0&&(A=1),T===!0&&(A=2),y===!0&&(A=3);let X=h.attributes.position.count*A,O=1;X>e.maxTextureSize&&(O=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const z=new Float32Array(X*O*4*x),K=new Bm(z,X,O,x);K.type=kn,K.needsUpdate=!0;const C=A*4;for(let R=0;R<x;R++){const H=g[R],se=D[R],ae=I[R],ce=X*O*4*R;for(let me=0;me<H.count;me++){const le=me*C;M===!0&&(o.fromBufferAttribute(H,me),z[ce+le+0]=o.x,z[ce+le+1]=o.y,z[ce+le+2]=o.z,z[ce+le+3]=0),T===!0&&(o.fromBufferAttribute(se,me),z[ce+le+4]=o.x,z[ce+le+5]=o.y,z[ce+le+6]=o.z,z[ce+le+7]=0),y===!0&&(o.fromBufferAttribute(ae,me),z[ce+le+8]=o.x,z[ce+le+9]=o.y,z[ce+le+10]=o.z,z[ce+le+11]=ae.itemSize===4?o.w:1)}}_={count:x,texture:K,size:new At(X,O)},a.set(h,_),h.addEventListener("dispose",b)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",d.morphTexture,r);else{let b=0;for(let T=0;T<m.length;T++)b+=m[T];const M=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(i,"morphTargetBaseInfluence",M),p.getUniforms().setValue(i,"morphTargetInfluences",m)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,r),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:c}}function gb(i,e,r,a){let o=new WeakMap;function c(p){const m=a.render.frame,v=p.geometry,x=e.get(p,v);if(o.get(x)!==m&&(e.update(x),o.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(r.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&r.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return x}function d(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),r.remove(m.instanceMatrix),m.instanceColor!==null&&r.remove(m.instanceColor)}return{update:c,dispose:d}}const Jm=new Lr,cm=new Qm(1,1),eg=new Bm,tg=new W_,rg=new qm,um=[],dm=[],hm=new Float32Array(16),fm=new Float32Array(9),pm=new Float32Array(4);function Wi(i,e,r){const a=i[0];if(a<=0||a>0)return i;const o=e*r;let c=um[o];if(c===void 0&&(c=new Float32Array(o),um[o]=c),e!==0){a.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=r,i[d].toArray(c,h)}return c}function Qt(i,e){if(i.length!==e.length)return!1;for(let r=0,a=i.length;r<a;r++)if(i[r]!==e[r])return!1;return!0}function Zt(i,e){for(let r=0,a=e.length;r<a;r++)i[r]=e[r]}function Ol(i,e){let r=dm[e];r===void 0&&(r=new Int32Array(e),dm[e]=r);for(let a=0;a!==e;++a)r[a]=i.allocateTextureUnit();return r}function vb(i,e){const r=this.cache;r[0]!==e&&(i.uniform1f(this.addr,e),r[0]=e)}function _b(i,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Qt(r,e))return;i.uniform2fv(this.addr,e),Zt(r,e)}}function xb(i,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(Qt(r,e))return;i.uniform3fv(this.addr,e),Zt(r,e)}}function yb(i,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Qt(r,e))return;i.uniform4fv(this.addr,e),Zt(r,e)}}function bb(i,e){const r=this.cache,a=e.elements;if(a===void 0){if(Qt(r,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(r,e)}else{if(Qt(r,a))return;pm.set(a),i.uniformMatrix2fv(this.addr,!1,pm),Zt(r,a)}}function Sb(i,e){const r=this.cache,a=e.elements;if(a===void 0){if(Qt(r,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(r,e)}else{if(Qt(r,a))return;fm.set(a),i.uniformMatrix3fv(this.addr,!1,fm),Zt(r,a)}}function wb(i,e){const r=this.cache,a=e.elements;if(a===void 0){if(Qt(r,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(r,e)}else{if(Qt(r,a))return;hm.set(a),i.uniformMatrix4fv(this.addr,!1,hm),Zt(r,a)}}function Mb(i,e){const r=this.cache;r[0]!==e&&(i.uniform1i(this.addr,e),r[0]=e)}function Eb(i,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Qt(r,e))return;i.uniform2iv(this.addr,e),Zt(r,e)}}function Tb(i,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Qt(r,e))return;i.uniform3iv(this.addr,e),Zt(r,e)}}function Rb(i,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Qt(r,e))return;i.uniform4iv(this.addr,e),Zt(r,e)}}function Ab(i,e){const r=this.cache;r[0]!==e&&(i.uniform1ui(this.addr,e),r[0]=e)}function Cb(i,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Qt(r,e))return;i.uniform2uiv(this.addr,e),Zt(r,e)}}function Nb(i,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Qt(r,e))return;i.uniform3uiv(this.addr,e),Zt(r,e)}}function Pb(i,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Qt(r,e))return;i.uniform4uiv(this.addr,e),Zt(r,e)}}function Lb(i,e,r){const a=this.cache,o=r.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(cm.compareFunction=Fm,c=cm):c=Jm,r.setTexture2D(e||c,o)}function Ub(i,e,r){const a=this.cache,o=r.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o),r.setTexture3D(e||tg,o)}function Ib(i,e,r){const a=this.cache,o=r.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o),r.setTextureCube(e||rg,o)}function Db(i,e,r){const a=this.cache,o=r.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o),r.setTexture2DArray(e||eg,o)}function Ob(i){switch(i){case 5126:return vb;case 35664:return _b;case 35665:return xb;case 35666:return yb;case 35674:return bb;case 35675:return Sb;case 35676:return wb;case 5124:case 35670:return Mb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return Rb;case 5125:return Ab;case 36294:return Cb;case 36295:return Nb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Db}}function kb(i,e){i.uniform1fv(this.addr,e)}function Fb(i,e){const r=Wi(e,this.size,2);i.uniform2fv(this.addr,r)}function zb(i,e){const r=Wi(e,this.size,3);i.uniform3fv(this.addr,r)}function Bb(i,e){const r=Wi(e,this.size,4);i.uniform4fv(this.addr,r)}function Hb(i,e){const r=Wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,r)}function Gb(i,e){const r=Wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,r)}function Vb(i,e){const r=Wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,r)}function jb(i,e){i.uniform1iv(this.addr,e)}function Wb(i,e){i.uniform2iv(this.addr,e)}function Xb(i,e){i.uniform3iv(this.addr,e)}function qb(i,e){i.uniform4iv(this.addr,e)}function Yb(i,e){i.uniform1uiv(this.addr,e)}function Kb(i,e){i.uniform2uiv(this.addr,e)}function $b(i,e){i.uniform3uiv(this.addr,e)}function Qb(i,e){i.uniform4uiv(this.addr,e)}function Zb(i,e,r){const a=this.cache,o=e.length,c=Ol(r,o);Qt(a,c)||(i.uniform1iv(this.addr,c),Zt(a,c));for(let d=0;d!==o;++d)r.setTexture2D(e[d]||Jm,c[d])}function Jb(i,e,r){const a=this.cache,o=e.length,c=Ol(r,o);Qt(a,c)||(i.uniform1iv(this.addr,c),Zt(a,c));for(let d=0;d!==o;++d)r.setTexture3D(e[d]||tg,c[d])}function eS(i,e,r){const a=this.cache,o=e.length,c=Ol(r,o);Qt(a,c)||(i.uniform1iv(this.addr,c),Zt(a,c));for(let d=0;d!==o;++d)r.setTextureCube(e[d]||rg,c[d])}function tS(i,e,r){const a=this.cache,o=e.length,c=Ol(r,o);Qt(a,c)||(i.uniform1iv(this.addr,c),Zt(a,c));for(let d=0;d!==o;++d)r.setTexture2DArray(e[d]||eg,c[d])}function rS(i){switch(i){case 5126:return kb;case 35664:return Fb;case 35665:return zb;case 35666:return Bb;case 35674:return Hb;case 35675:return Gb;case 35676:return Vb;case 5124:case 35670:return jb;case 35667:case 35671:return Wb;case 35668:case 35672:return Xb;case 35669:case 35673:return qb;case 5125:return Yb;case 36294:return Kb;case 36295:return $b;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return tS}}class nS{constructor(e,r,a){this.id=e,this.addr=a,this.cache=[],this.type=r.type,this.setValue=Ob(r.type)}}class aS{constructor(e,r,a){this.id=e,this.addr=a,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=rS(r.type)}}class iS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,a){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const h=o[c];h.setValue(e,r[h.id],a)}}}const ju=/(\w+)(\])?(\[|\.)?/g;function mm(i,e){i.seq.push(e),i.map[e.id]=e}function sS(i,e,r){const a=i.name,o=a.length;for(ju.lastIndex=0;;){const c=ju.exec(a),d=ju.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===o){mm(r,m===void 0?new nS(h,i,e):new aS(h,i,e));break}else{let v=r.map[h];v===void 0&&(v=new iS(h),mm(r,v)),r=v}}}class Al{constructor(e,r){this.seq=[],this.map={};const a=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(r,o),d=e.getUniformLocation(r,c.name);sS(c,d,this)}}setValue(e,r,a,o){const c=this.map[r];c!==void 0&&c.setValue(e,a,o)}setOptional(e,r,a){const o=r[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,r,a,o){for(let c=0,d=r.length;c!==d;++c){const h=r[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,r){const a=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in r&&a.push(d)}return a}}function gm(i,e,r){const a=i.createShader(e);return i.shaderSource(a,r),i.compileShader(a),a}const oS=37297;let lS=0;function cS(i,e){const r=i.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,r.length);for(let d=o;d<c;d++){const h=d+1;a.push(`${h===e?">":" "} ${h}: ${r[d]}`)}return a.join(`
`)}const vm=new it;function uS(i){yt._getMatrix(vm,yt.workingColorSpace,i);const e=`mat3( ${vm.elements.map(r=>r.toFixed(4))} )`;switch(yt.getTransfer(i)){case Cl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _m(i,e,r){const a=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return r.toUpperCase()+`

`+o+`

`+cS(i.getShaderSource(e),d)}else return o}function dS(i,e){const r=uS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function hS(i,e){let r;switch(e){case g_:r="Linear";break;case v_:r="Reinhard";break;case __:r="Cineon";break;case x_:r="ACESFilmic";break;case b_:r="AgX";break;case S_:r="Neutral";break;case y_:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+i+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const bl=new te;function fS(){yt.getLuminanceCoefficients(bl);const i=bl.x.toFixed(4),e=bl.y.toFixed(4),r=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function mS(i){const e=[];for(const r in i){const a=i[r];a!==!1&&e.push("#define "+r+" "+a)}return e.join(`
`)}function gS(i,e){const r={},a=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=i.getActiveAttrib(e,o),d=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),r[d]={type:c.type,location:i.getAttribLocation(e,d),locationSize:h}}return r}function Ns(i){return i!==""}function xm(i,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(i){return i.replace(vS,xS)}const _S=new Map;function xS(i,e){let r=ot[e];if(r===void 0){const a=_S.get(e);if(a!==void 0)r=ot[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Ld(r)}const yS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bm(i){return i.replace(yS,bS)}function bS(i,e,r,a){let o="";for(let c=parseInt(e);c<parseInt(r);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Sm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kv?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function wS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case zi:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function ES(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Am:e="ENVMAP_BLENDING_MULTIPLY";break;case p_:e="ENVMAP_BLENDING_MIX";break;case m_:e="ENVMAP_BLENDING_ADD";break}return e}function TS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:a,maxMip:r}}function RS(i,e,r,a){const o=i.getContext(),c=r.defines;let d=r.vertexShader,h=r.fragmentShader;const p=SS(r),m=wS(r),v=MS(r),x=ES(r),_=TS(r),b=pS(r),M=mS(c),T=o.createProgram();let y,g,D=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(y=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,M].filter(Ns).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,M].filter(Ns).join(`
`),g.length>0&&(g+=`
`)):(y=[Sm(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,M,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+v:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+p:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),g=[Sm(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,M,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+m:"",r.envMap?"#define "+v:"",r.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+p:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==_a?"#define TONE_MAPPING":"",r.toneMapping!==_a?ot.tonemapping_pars_fragment:"",r.toneMapping!==_a?hS("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,dS("linearToOutputTexel",r.outputColorSpace),fS(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Ns).join(`
`)),d=Ld(d),d=xm(d,r),d=ym(d,r),h=Ld(h),h=xm(h,r),h=ym(h,r),d=bm(d),h=bm(h),r.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",r.glslVersion===Up?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===Up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const I=D+y+d,A=D+g+h,X=gm(o,o.VERTEX_SHADER,I),O=gm(o,o.FRAGMENT_SHADER,A);o.attachShader(T,X),o.attachShader(T,O),r.index0AttributeName!==void 0?o.bindAttribLocation(T,0,r.index0AttributeName):r.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function z(H){if(i.debug.checkShaderErrors){const se=o.getProgramInfoLog(T).trim(),ae=o.getShaderInfoLog(X).trim(),ce=o.getShaderInfoLog(O).trim();let me=!0,le=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,T,X,O);else{const fe=_m(o,X,"vertex"),k=_m(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+se+`
`+fe+`
`+k)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ae===""||ce==="")&&(le=!1);le&&(H.diagnostics={runnable:me,programLog:se,vertexShader:{log:ae,prefix:y},fragmentShader:{log:ce,prefix:g}})}o.deleteShader(X),o.deleteShader(O),K=new Al(o,T),C=gS(o,T)}let K;this.getUniforms=function(){return K===void 0&&z(this),K};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let R=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(T,oS)),R},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=lS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=X,this.fragmentShader=O,this}let AS=0;class CS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(r),c=this._getShaderStage(a),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const a of r)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let a=r.get(e);return a===void 0&&(a=new Set,r.set(e,a)),a}_getShaderStage(e){const r=this.shaderCache;let a=r.get(e);return a===void 0&&(a=new NS(e),r.set(e,a)),a}}class NS{constructor(e){this.id=AS++,this.code=e,this.usedTimes=0}}function PS(i,e,r,a,o,c,d){const h=new Hm,p=new CS,m=new Set,v=[],x=o.logarithmicDepthBuffer,_=o.vertexTextures;let b=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return m.add(C),C===0?"uv":`uv${C}`}function y(C,R,H,se,ae){const ce=se.fog,me=ae.geometry,le=C.isMeshStandardMaterial?se.environment:null,fe=(C.isMeshStandardMaterial?r:e).get(C.envMap||le),k=fe&&fe.mapping===Il?fe.image.height:null,oe=M[C.type];C.precision!==null&&(b=o.getMaxPrecision(C.precision),b!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",b,"instead."));const j=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,U=j!==void 0?j.length:0;let $=0;me.morphAttributes.position!==void 0&&($=1),me.morphAttributes.normal!==void 0&&($=2),me.morphAttributes.color!==void 0&&($=3);let Me,Y,ue,be;if(oe){const gt=vn[oe];Me=gt.vertexShader,Y=gt.fragmentShader}else Me=C.vertexShader,Y=C.fragmentShader,p.update(C),ue=p.getVertexShaderID(C),be=p.getFragmentShaderID(C);const _e=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),De=ae.isInstancedMesh===!0,Ze=ae.isBatchedMesh===!0,Et=!!C.map,ht=!!C.matcap,Nt=!!fe,B=!!C.aoMap,pr=!!C.lightMap,ft=!!C.bumpMap,lt=!!C.normalMap,We=!!C.displacementMap,Mt=!!C.emissiveMap,Ve=!!C.metalnessMap,N=!!C.roughnessMap,w=C.anisotropy>0,ee=C.clearcoat>0,he=C.dispersion>0,ye=C.iridescence>0,de=C.sheen>0,He=C.transmission>0,Ae=w&&!!C.anisotropyMap,Je=ee&&!!C.clearcoatMap,Ye=ee&&!!C.clearcoatNormalMap,Se=ee&&!!C.clearcoatRoughnessMap,ke=ye&&!!C.iridescenceMap,et=ye&&!!C.iridescenceThicknessMap,tt=de&&!!C.sheenColorMap,Fe=de&&!!C.sheenRoughnessMap,ct=!!C.specularMap,at=!!C.specularColorMap,bt=!!C.specularIntensityMap,V=He&&!!C.transmissionMap,Ce=He&&!!C.thicknessMap,ie=!!C.gradientMap,pe=!!C.alphaMap,Pe=C.alphaTest>0,Re=!!C.alphaHash,dt=!!C.extensions;let Lt=_a;C.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const qt={shaderID:oe,shaderType:C.type,shaderName:C.name,vertexShader:Me,fragmentShader:Y,defines:C.defines,customVertexShaderID:ue,customFragmentShaderID:be,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:b,batching:Ze,batchingColor:Ze&&ae._colorsTexture!==null,instancing:De,instancingColor:De&&ae.instanceColor!==null,instancingMorph:De&&ae.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Bi,alphaToCoverage:!!C.alphaToCoverage,map:Et,matcap:ht,envMap:Nt,envMapMode:Nt&&fe.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:pr,bumpMap:ft,normalMap:lt,displacementMap:_&&We,emissiveMap:Mt,normalMapObjectSpace:lt&&C.normalMapType===R_,normalMapTangentSpace:lt&&C.normalMapType===T_,metalnessMap:Ve,roughnessMap:N,anisotropy:w,anisotropyMap:Ae,clearcoat:ee,clearcoatMap:Je,clearcoatNormalMap:Ye,clearcoatRoughnessMap:Se,dispersion:he,iridescence:ye,iridescenceMap:ke,iridescenceThicknessMap:et,sheen:de,sheenColorMap:tt,sheenRoughnessMap:Fe,specularMap:ct,specularColorMap:at,specularIntensityMap:bt,transmission:He,transmissionMap:V,thicknessMap:Ce,gradientMap:ie,opaque:C.transparent===!1&&C.blending===Di&&C.alphaToCoverage===!1,alphaMap:pe,alphaTest:Pe,alphaHash:Re,combine:C.combine,mapUv:Et&&T(C.map.channel),aoMapUv:B&&T(C.aoMap.channel),lightMapUv:pr&&T(C.lightMap.channel),bumpMapUv:ft&&T(C.bumpMap.channel),normalMapUv:lt&&T(C.normalMap.channel),displacementMapUv:We&&T(C.displacementMap.channel),emissiveMapUv:Mt&&T(C.emissiveMap.channel),metalnessMapUv:Ve&&T(C.metalnessMap.channel),roughnessMapUv:N&&T(C.roughnessMap.channel),anisotropyMapUv:Ae&&T(C.anisotropyMap.channel),clearcoatMapUv:Je&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:et&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(C.sheenRoughnessMap.channel),specularMapUv:ct&&T(C.specularMap.channel),specularColorMapUv:at&&T(C.specularColorMap.channel),specularIntensityMapUv:bt&&T(C.specularIntensityMap.channel),transmissionMapUv:V&&T(C.transmissionMap.channel),thicknessMapUv:Ce&&T(C.thicknessMap.channel),alphaMapUv:pe&&T(C.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(lt||w),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!me.attributes.uv&&(Et||pe),fog:!!ce,useFog:C.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Te,skinning:ae.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:$,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Et&&C.map.isVideoTexture===!0&&yt.getTransfer(C.map.colorSpace)===Rt,decodeVideoTextureEmissive:Mt&&C.emissiveMap.isVideoTexture===!0&&yt.getTransfer(C.emissiveMap.colorSpace)===Rt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===_n,flipSided:C.side===Pr,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:dt&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&C.extensions.multiDraw===!0||Ze)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function g(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)R.push(H),R.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(D(R,C),I(R,C),R.push(i.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function D(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function I(C,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),C.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),C.push(h.mask)}function A(C){const R=M[C.type];let H;if(R){const se=vn[R];H=a0.clone(se.uniforms)}else H=C.uniforms;return H}function X(C,R){let H;for(let se=0,ae=v.length;se<ae;se++){const ce=v[se];if(ce.cacheKey===R){H=ce,++H.usedTimes;break}}return H===void 0&&(H=new RS(i,R,C,c),v.push(H)),H}function O(C){if(--C.usedTimes===0){const R=v.indexOf(C);v[R]=v[v.length-1],v.pop(),C.destroy()}}function z(C){p.remove(C)}function K(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:X,releaseProgram:O,releaseShaderCache:z,programs:v,dispose:K}}function LS(){let i=new WeakMap;function e(d){return i.has(d)}function r(d){let h=i.get(d);return h===void 0&&(h={},i.set(d,h)),h}function a(d){i.delete(d)}function o(d,h,p){i.get(d)[h]=p}function c(){i=new WeakMap}return{has:e,get:r,remove:a,update:o,dispose:c}}function US(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mm(){const i=[];let e=0;const r=[],a=[],o=[];function c(){e=0,r.length=0,a.length=0,o.length=0}function d(x,_,b,M,T,y){let g=i[e];return g===void 0?(g={id:x.id,object:x,geometry:_,material:b,groupOrder:M,renderOrder:x.renderOrder,z:T,group:y},i[e]=g):(g.id=x.id,g.object=x,g.geometry=_,g.material=b,g.groupOrder=M,g.renderOrder=x.renderOrder,g.z=T,g.group=y),e++,g}function h(x,_,b,M,T,y){const g=d(x,_,b,M,T,y);b.transmission>0?a.push(g):b.transparent===!0?o.push(g):r.push(g)}function p(x,_,b,M,T,y){const g=d(x,_,b,M,T,y);b.transmission>0?a.unshift(g):b.transparent===!0?o.unshift(g):r.unshift(g)}function m(x,_){r.length>1&&r.sort(x||US),a.length>1&&a.sort(_||wm),o.length>1&&o.sort(_||wm)}function v(){for(let x=e,_=i.length;x<_;x++){const b=i[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:r,transmissive:a,transparent:o,init:c,push:h,unshift:p,finish:v,sort:m}}function IS(){let i=new WeakMap;function e(a,o){const c=i.get(a);let d;return c===void 0?(d=new Mm,i.set(a,[d])):o>=c.length?(d=new Mm,c.push(d)):d=c[o],d}function r(){i=new WeakMap}return{get:e,dispose:r}}function DS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new te,color:new wt};break;case"SpotLight":r={position:new te,direction:new te,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new te,color:new wt,distance:0,decay:0};break;case"HemisphereLight":r={direction:new te,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":r={color:new wt,position:new te,halfWidth:new te,halfHeight:new te};break}return i[e.id]=r,r}}}function OS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=r,r}}}let kS=0;function FS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zS(i){const e=new DS,r=OS(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new te);const o=new te,c=new zt,d=new zt;function h(m){let v=0,x=0,_=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let b=0,M=0,T=0,y=0,g=0,D=0,I=0,A=0,X=0,O=0,z=0;m.sort(FS);for(let C=0,R=m.length;C<R;C++){const H=m[C],se=H.color,ae=H.intensity,ce=H.distance,me=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=se.r*ae,x+=se.g*ae,_+=se.b*ae;else if(H.isLightProbe){for(let le=0;le<9;le++)a.probe[le].addScaledVector(H.sh.coefficients[le],ae);z++}else if(H.isDirectionalLight){const le=e.get(H);if(le.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const fe=H.shadow,k=r.get(H);k.shadowIntensity=fe.intensity,k.shadowBias=fe.bias,k.shadowNormalBias=fe.normalBias,k.shadowRadius=fe.radius,k.shadowMapSize=fe.mapSize,a.directionalShadow[b]=k,a.directionalShadowMap[b]=me,a.directionalShadowMatrix[b]=H.shadow.matrix,D++}a.directional[b]=le,b++}else if(H.isSpotLight){const le=e.get(H);le.position.setFromMatrixPosition(H.matrixWorld),le.color.copy(se).multiplyScalar(ae),le.distance=ce,le.coneCos=Math.cos(H.angle),le.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),le.decay=H.decay,a.spot[T]=le;const fe=H.shadow;if(H.map&&(a.spotLightMap[X]=H.map,X++,fe.updateMatrices(H),H.castShadow&&O++),a.spotLightMatrix[T]=fe.matrix,H.castShadow){const k=r.get(H);k.shadowIntensity=fe.intensity,k.shadowBias=fe.bias,k.shadowNormalBias=fe.normalBias,k.shadowRadius=fe.radius,k.shadowMapSize=fe.mapSize,a.spotShadow[T]=k,a.spotShadowMap[T]=me,A++}T++}else if(H.isRectAreaLight){const le=e.get(H);le.color.copy(se).multiplyScalar(ae),le.halfWidth.set(H.width*.5,0,0),le.halfHeight.set(0,H.height*.5,0),a.rectArea[y]=le,y++}else if(H.isPointLight){const le=e.get(H);if(le.color.copy(H.color).multiplyScalar(H.intensity),le.distance=H.distance,le.decay=H.decay,H.castShadow){const fe=H.shadow,k=r.get(H);k.shadowIntensity=fe.intensity,k.shadowBias=fe.bias,k.shadowNormalBias=fe.normalBias,k.shadowRadius=fe.radius,k.shadowMapSize=fe.mapSize,k.shadowCameraNear=fe.camera.near,k.shadowCameraFar=fe.camera.far,a.pointShadow[M]=k,a.pointShadowMap[M]=me,a.pointShadowMatrix[M]=H.shadow.matrix,I++}a.point[M]=le,M++}else if(H.isHemisphereLight){const le=e.get(H);le.skyColor.copy(H.color).multiplyScalar(ae),le.groundColor.copy(H.groundColor).multiplyScalar(ae),a.hemi[g]=le,g++}}y>0&&(i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=x,a.ambient[2]=_;const K=a.hash;(K.directionalLength!==b||K.pointLength!==M||K.spotLength!==T||K.rectAreaLength!==y||K.hemiLength!==g||K.numDirectionalShadows!==D||K.numPointShadows!==I||K.numSpotShadows!==A||K.numSpotMaps!==X||K.numLightProbes!==z)&&(a.directional.length=b,a.spot.length=T,a.rectArea.length=y,a.point.length=M,a.hemi.length=g,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=I,a.pointShadowMap.length=I,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=I,a.spotLightMatrix.length=A+X-O,a.spotLightMap.length=X,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=z,K.directionalLength=b,K.pointLength=M,K.spotLength=T,K.rectAreaLength=y,K.hemiLength=g,K.numDirectionalShadows=D,K.numPointShadows=I,K.numSpotShadows=A,K.numSpotMaps=X,K.numLightProbes=z,a.version=kS++)}function p(m,v){let x=0,_=0,b=0,M=0,T=0;const y=v.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const I=m[g];if(I.isDirectionalLight){const A=a.directional[x];A.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),x++}else if(I.isSpotLight){const A=a.spot[b];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),b++}else if(I.isRectAreaLight){const A=a.rectArea[M];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(y),d.identity(),c.copy(I.matrixWorld),c.premultiply(y),d.extractRotation(c),A.halfWidth.set(I.width*.5,0,0),A.halfHeight.set(0,I.height*.5,0),A.halfWidth.applyMatrix4(d),A.halfHeight.applyMatrix4(d),M++}else if(I.isPointLight){const A=a.point[_];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(y),_++}else if(I.isHemisphereLight){const A=a.hemi[T];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(y),T++}}}return{setup:h,setupView:p,state:a}}function Em(i){const e=new zS(i),r=[],a=[];function o(v){m.camera=v,r.length=0,a.length=0}function c(v){r.push(v)}function d(v){a.push(v)}function h(){e.setup(r)}function p(v){e.setupView(r,v)}const m={lightsArray:r,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:d}}function BS(i){let e=new WeakMap;function r(o,c=0){const d=e.get(o);let h;return d===void 0?(h=new Em(i),e.set(o,[h])):c>=d.length?(h=new Em(i),d.push(h)):h=d[c],h}function a(){e=new WeakMap}return{get:r,dispose:a}}const HS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GS=`uniform sampler2D shadow_pass;
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
}`;function VS(i,e,r){let a=new Ym;const o=new At,c=new At,d=new Gt,h=new m0({depthPacking:E_}),p=new g0,m={},v=r.maxTextureSize,x={[xa]:Pr,[Pr]:xa,[_n]:_n},_=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:HS,fragmentShader:GS}),b=_.clone();b.defines.HORIZONTAL_PASS=1;const M=new Hr;M.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Nr(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rm;let g=this.type;this.render=function(O,z,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const C=i.getRenderTarget(),R=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),se=i.state;se.setBlending(va),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ae=g!==On&&this.type===On,ce=g===On&&this.type!==On;for(let me=0,le=O.length;me<le;me++){const fe=O[me],k=fe.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const oe=k.getFrameExtents();if(o.multiply(oe),c.copy(k.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/oe.x),o.x=c.x*oe.x,k.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/oe.y),o.y=c.y*oe.y,k.mapSize.y=c.y)),k.map===null||ae===!0||ce===!0){const U=this.type!==On?{minFilter:cn,magFilter:cn}:{};k.map!==null&&k.map.dispose(),k.map=new Ka(o.x,o.y,U),k.map.texture.name=fe.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const j=k.getViewportCount();for(let U=0;U<j;U++){const $=k.getViewport(U);d.set(c.x*$.x,c.y*$.y,c.x*$.z,c.y*$.w),se.viewport(d),k.updateMatrices(fe,U),a=k.getFrustum(),A(z,K,k.camera,fe,this.type)}k.isPointLightShadow!==!0&&this.type===On&&D(k,K),k.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(C,R,H)};function D(O,z){const K=e.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,b.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ka(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(z,null,K,_,T,null),b.uniforms.shadow_pass.value=O.mapPass.texture,b.uniforms.resolution.value=O.mapSize,b.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(z,null,K,b,T,null)}function I(O,z,K,C){let R=null;const H=K.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)R=H;else if(R=K.isPointLight===!0?p:h,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const se=R.uuid,ae=z.uuid;let ce=m[se];ce===void 0&&(ce={},m[se]=ce);let me=ce[ae];me===void 0&&(me=R.clone(),ce[ae]=me,z.addEventListener("dispose",X)),R=me}if(R.visible=z.visible,R.wireframe=z.wireframe,C===On?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:x[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=i.properties.get(R);se.light=K}return R}function A(O,z,K,C,R){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===On)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,O.matrixWorld);const se=e.update(O),ae=O.material;if(Array.isArray(ae)){const ce=se.groups;for(let me=0,le=ce.length;me<le;me++){const fe=ce[me],k=ae[fe.materialIndex];if(k&&k.visible){const oe=I(O,k,C,R);O.onBeforeShadow(i,O,z,K,se,oe,fe),i.renderBufferDirect(K,null,se,oe,O,fe),O.onAfterShadow(i,O,z,K,se,oe,fe)}}}else if(ae.visible){const ce=I(O,ae,C,R);O.onBeforeShadow(i,O,z,K,se,ce,null),i.renderBufferDirect(K,null,se,ce,O,null),O.onAfterShadow(i,O,z,K,se,ce,null)}}const H=O.children;for(let se=0,ae=H.length;se<ae;se++)A(H[se],z,K,C,R)}function X(O){O.target.removeEventListener("dispose",X);for(const z in m){const K=m[z],C=O.target.uuid;C in K&&(K[C].dispose(),delete K[C])}}}const jS={[qu]:Yu,[Ku]:Zu,[$u]:Ju,[ki]:Qu,[Yu]:qu,[Zu]:Ku,[Ju]:$u,[Qu]:ki};function WS(i,e){function r(){let V=!1;const Ce=new Gt;let ie=null;const pe=new Gt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!V&&(i.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){V=Pe},setClear:function(Pe,Re,dt,Lt,qt){qt===!0&&(Pe*=Lt,Re*=Lt,dt*=Lt),Ce.set(Pe,Re,dt,Lt),pe.equals(Ce)===!1&&(i.clearColor(Pe,Re,dt,Lt),pe.copy(Ce))},reset:function(){V=!1,ie=null,pe.set(-1,0,0,0)}}}function a(){let V=!1,Ce=!1,ie=null,pe=null,Pe=null;return{setReversed:function(Re){if(Ce!==Re){const dt=e.get("EXT_clip_control");Re?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),Ce=Re;const Lt=Pe;Pe=null,this.setClear(Lt)}},getReversed:function(){return Ce},setTest:function(Re){Re?_e(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Re){ie!==Re&&!V&&(i.depthMask(Re),ie=Re)},setFunc:function(Re){if(Ce&&(Re=jS[Re]),pe!==Re){switch(Re){case qu:i.depthFunc(i.NEVER);break;case Yu:i.depthFunc(i.ALWAYS);break;case Ku:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case $u:i.depthFunc(i.EQUAL);break;case Qu:i.depthFunc(i.GEQUAL);break;case Zu:i.depthFunc(i.GREATER);break;case Ju:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Re}},setLocked:function(Re){V=Re},setClear:function(Re){Pe!==Re&&(Ce&&(Re=1-Re),i.clearDepth(Re),Pe=Re)},reset:function(){V=!1,ie=null,pe=null,Pe=null,Ce=!1}}}function o(){let V=!1,Ce=null,ie=null,pe=null,Pe=null,Re=null,dt=null,Lt=null,qt=null;return{setTest:function(gt){V||(gt?_e(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(gt){Ce!==gt&&!V&&(i.stencilMask(gt),Ce=gt)},setFunc:function(gt,Sr,mr){(ie!==gt||pe!==Sr||Pe!==mr)&&(i.stencilFunc(gt,Sr,mr),ie=gt,pe=Sr,Pe=mr)},setOp:function(gt,Sr,mr){(Re!==gt||dt!==Sr||Lt!==mr)&&(i.stencilOp(gt,Sr,mr),Re=gt,dt=Sr,Lt=mr)},setLocked:function(gt){V=gt},setClear:function(gt){qt!==gt&&(i.clearStencil(gt),qt=gt)},reset:function(){V=!1,Ce=null,ie=null,pe=null,Pe=null,Re=null,dt=null,Lt=null,qt=null}}}const c=new r,d=new a,h=new o,p=new WeakMap,m=new WeakMap;let v={},x={},_=new WeakMap,b=[],M=null,T=!1,y=null,g=null,D=null,I=null,A=null,X=null,O=null,z=new wt(0,0,0),K=0,C=!1,R=null,H=null,se=null,ae=null,ce=null;const me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,fe=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(k)[1]),le=fe>=1):k.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),le=fe>=2);let oe=null,j={};const U=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),Me=new Gt().fromArray(U),Y=new Gt().fromArray($);function ue(V,Ce,ie,pe){const Pe=new Uint8Array(4),Re=i.createTexture();i.bindTexture(V,Re),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<ie;dt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Ce+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Re}const be={};be[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),_e(i.DEPTH_TEST),d.setFunc(ki),ft(!1),lt(Rp),_e(i.CULL_FACE),B(va);function _e(V){v[V]!==!0&&(i.enable(V),v[V]=!0)}function Te(V){v[V]!==!1&&(i.disable(V),v[V]=!1)}function De(V,Ce){return x[V]!==Ce?(i.bindFramebuffer(V,Ce),x[V]=Ce,V===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=Ce),V===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ze(V,Ce){let ie=b,pe=!1;if(V){ie=_.get(Ce),ie===void 0&&(ie=[],_.set(Ce,ie));const Pe=V.textures;if(ie.length!==Pe.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,dt=Pe.length;Re<dt;Re++)ie[Re]=i.COLOR_ATTACHMENT0+Re;ie.length=Pe.length,pe=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ie)}function Et(V){return M!==V?(i.useProgram(V),M=V,!0):!1}const ht={[Va]:i.FUNC_ADD,[Qv]:i.FUNC_SUBTRACT,[Zv]:i.FUNC_REVERSE_SUBTRACT};ht[Jv]=i.MIN,ht[e_]=i.MAX;const Nt={[t_]:i.ZERO,[r_]:i.ONE,[n_]:i.SRC_COLOR,[Wu]:i.SRC_ALPHA,[c_]:i.SRC_ALPHA_SATURATE,[o_]:i.DST_COLOR,[i_]:i.DST_ALPHA,[a_]:i.ONE_MINUS_SRC_COLOR,[Xu]:i.ONE_MINUS_SRC_ALPHA,[l_]:i.ONE_MINUS_DST_COLOR,[s_]:i.ONE_MINUS_DST_ALPHA,[u_]:i.CONSTANT_COLOR,[d_]:i.ONE_MINUS_CONSTANT_COLOR,[h_]:i.CONSTANT_ALPHA,[f_]:i.ONE_MINUS_CONSTANT_ALPHA};function B(V,Ce,ie,pe,Pe,Re,dt,Lt,qt,gt){if(V===va){T===!0&&(Te(i.BLEND),T=!1);return}if(T===!1&&(_e(i.BLEND),T=!0),V!==$v){if(V!==y||gt!==C){if((g!==Va||A!==Va)&&(i.blendEquation(i.FUNC_ADD),g=Va,A=Va),gt)switch(V){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ap:i.blendFunc(i.ONE,i.ONE);break;case Cp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Np:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ap:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Np:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}D=null,I=null,X=null,O=null,z.set(0,0,0),K=0,y=V,C=gt}return}Pe=Pe||Ce,Re=Re||ie,dt=dt||pe,(Ce!==g||Pe!==A)&&(i.blendEquationSeparate(ht[Ce],ht[Pe]),g=Ce,A=Pe),(ie!==D||pe!==I||Re!==X||dt!==O)&&(i.blendFuncSeparate(Nt[ie],Nt[pe],Nt[Re],Nt[dt]),D=ie,I=pe,X=Re,O=dt),(Lt.equals(z)===!1||qt!==K)&&(i.blendColor(Lt.r,Lt.g,Lt.b,qt),z.copy(Lt),K=qt),y=V,C=!1}function pr(V,Ce){V.side===_n?Te(i.CULL_FACE):_e(i.CULL_FACE);let ie=V.side===Pr;Ce&&(ie=!ie),ft(ie),V.blending===Di&&V.transparent===!1?B(va):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const pe=V.stencilWrite;h.setTest(pe),pe&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Mt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(V){R!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),R=V)}function lt(V){V!==qv?(_e(i.CULL_FACE),V!==H&&(V===Rp?i.cullFace(i.BACK):V===Yv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),H=V}function We(V){V!==se&&(le&&i.lineWidth(V),se=V)}function Mt(V,Ce,ie){V?(_e(i.POLYGON_OFFSET_FILL),(ae!==Ce||ce!==ie)&&(i.polygonOffset(Ce,ie),ae=Ce,ce=ie)):Te(i.POLYGON_OFFSET_FILL)}function Ve(V){V?_e(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function N(V){V===void 0&&(V=i.TEXTURE0+me-1),oe!==V&&(i.activeTexture(V),oe=V)}function w(V,Ce,ie){ie===void 0&&(oe===null?ie=i.TEXTURE0+me-1:ie=oe);let pe=j[ie];pe===void 0&&(pe={type:void 0,texture:void 0},j[ie]=pe),(pe.type!==V||pe.texture!==Ce)&&(oe!==ie&&(i.activeTexture(ie),oe=ie),i.bindTexture(V,Ce||be[V]),pe.type=V,pe.texture=Ce)}function ee(){const V=j[oe];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(V){Me.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Me.copy(V))}function Fe(V){Y.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Y.copy(V))}function ct(V,Ce){let ie=m.get(Ce);ie===void 0&&(ie=new WeakMap,m.set(Ce,ie));let pe=ie.get(V);pe===void 0&&(pe=i.getUniformBlockIndex(Ce,V.name),ie.set(V,pe))}function at(V,Ce){const ie=m.get(Ce).get(V);p.get(Ce)!==ie&&(i.uniformBlockBinding(Ce,ie,V.__bindingPointIndex),p.set(Ce,ie))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),d.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},oe=null,j={},x={},_=new WeakMap,b=[],M=null,T=!1,y=null,g=null,D=null,I=null,A=null,X=null,O=null,z=new wt(0,0,0),K=0,C=!1,R=null,H=null,se=null,ae=null,ce=null,Me.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:_e,disable:Te,bindFramebuffer:De,drawBuffers:Ze,useProgram:Et,setBlending:B,setMaterial:pr,setFlipSided:ft,setCullFace:lt,setLineWidth:We,setPolygonOffset:Mt,setScissorTest:Ve,activeTexture:N,bindTexture:w,unbindTexture:ee,compressedTexImage2D:he,compressedTexImage3D:ye,texImage2D:ke,texImage3D:et,updateUBOMapping:ct,uniformBlockBinding:at,texStorage2D:Ye,texStorage3D:Se,texSubImage2D:de,texSubImage3D:He,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Je,scissor:tt,viewport:Fe,reset:bt}}function XS(i,e,r,a,o,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new At,v=new WeakMap;let x;const _=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,w){return b?new OffscreenCanvas(N,w):Pl("canvas")}function T(N,w,ee){let he=1;const ye=Ve(N);if((ye.width>ee||ye.height>ee)&&(he=ee/Math.max(ye.width,ye.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const de=Math.floor(he*ye.width),He=Math.floor(he*ye.height);x===void 0&&(x=M(de,He));const Ae=w?M(de,He):x;return Ae.width=de,Ae.height=He,Ae.getContext("2d").drawImage(N,0,0,de,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+de+"x"+He+")."),Ae}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),N;return N}function y(N){return N.generateMipmaps}function g(N){i.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(N,w,ee,he,ye=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=w;if(w===i.RED&&(ee===i.FLOAT&&(de=i.R32F),ee===i.HALF_FLOAT&&(de=i.R16F),ee===i.UNSIGNED_BYTE&&(de=i.R8)),w===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.R8UI),ee===i.UNSIGNED_SHORT&&(de=i.R16UI),ee===i.UNSIGNED_INT&&(de=i.R32UI),ee===i.BYTE&&(de=i.R8I),ee===i.SHORT&&(de=i.R16I),ee===i.INT&&(de=i.R32I)),w===i.RG&&(ee===i.FLOAT&&(de=i.RG32F),ee===i.HALF_FLOAT&&(de=i.RG16F),ee===i.UNSIGNED_BYTE&&(de=i.RG8)),w===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.RG8UI),ee===i.UNSIGNED_SHORT&&(de=i.RG16UI),ee===i.UNSIGNED_INT&&(de=i.RG32UI),ee===i.BYTE&&(de=i.RG8I),ee===i.SHORT&&(de=i.RG16I),ee===i.INT&&(de=i.RG32I)),w===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(de=i.RGB16UI),ee===i.UNSIGNED_INT&&(de=i.RGB32UI),ee===i.BYTE&&(de=i.RGB8I),ee===i.SHORT&&(de=i.RGB16I),ee===i.INT&&(de=i.RGB32I)),w===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(de=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(de=i.RGBA16UI),ee===i.UNSIGNED_INT&&(de=i.RGBA32UI),ee===i.BYTE&&(de=i.RGBA8I),ee===i.SHORT&&(de=i.RGBA16I),ee===i.INT&&(de=i.RGBA32I)),w===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(de=i.RGB9_E5),w===i.RGBA){const He=ye?Cl:yt.getTransfer(he);ee===i.FLOAT&&(de=i.RGBA32F),ee===i.HALF_FLOAT&&(de=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(de=He===Rt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(N,w){let ee;return N?w===null||w===Ya||w===Us?ee=i.DEPTH24_STENCIL8:w===kn?ee=i.DEPTH32F_STENCIL8:w===Ls&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ya||w===Us?ee=i.DEPTH_COMPONENT24:w===kn?ee=i.DEPTH_COMPONENT32F:w===Ls&&(ee=i.DEPTH_COMPONENT16),ee}function X(N,w){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==cn&&N.minFilter!==xn?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function O(N){const w=N.target;w.removeEventListener("dispose",O),K(w),w.isVideoTexture&&v.delete(w)}function z(N){const w=N.target;w.removeEventListener("dispose",z),R(w)}function K(N){const w=a.get(N);if(w.__webglInit===void 0)return;const ee=N.source,he=_.get(ee);if(he){const ye=he[w.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&C(N),Object.keys(he).length===0&&_.delete(ee)}a.remove(N)}function C(N){const w=a.get(N);i.deleteTexture(w.__webglTexture);const ee=N.source,he=_.get(ee);delete he[w.__cacheKey],d.memory.textures--}function R(N){const w=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let ye=0;ye<w.__webglFramebuffer[he].length;ye++)i.deleteFramebuffer(w.__webglFramebuffer[he][ye]);else i.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)i.deleteFramebuffer(w.__webglFramebuffer[he]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ee=N.textures;for(let he=0,ye=ee.length;he<ye;he++){const de=a.get(ee[he]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),d.memory.textures--),a.remove(ee[he])}a.remove(N)}let H=0;function se(){H=0}function ae(){const N=H;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),H+=1,N}function ce(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function me(N,w){const ee=a.get(N);if(N.isVideoTexture&&We(N),N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){const he=N.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(ee,N,w);return}}r.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+w)}function le(N,w){const ee=a.get(N);if(N.version>0&&ee.__version!==N.version){Y(ee,N,w);return}r.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+w)}function fe(N,w){const ee=a.get(N);if(N.version>0&&ee.__version!==N.version){Y(ee,N,w);return}r.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+w)}function k(N,w){const ee=a.get(N);if(N.version>0&&ee.__version!==N.version){ue(ee,N,w);return}r.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+w)}const oe={[rd]:i.REPEAT,[Xa]:i.CLAMP_TO_EDGE,[nd]:i.MIRRORED_REPEAT},j={[cn]:i.NEAREST,[w_]:i.NEAREST_MIPMAP_NEAREST,[$o]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[pu]:i.LINEAR_MIPMAP_NEAREST,[qa]:i.LINEAR_MIPMAP_LINEAR},U={[A_]:i.NEVER,[I_]:i.ALWAYS,[C_]:i.LESS,[Fm]:i.LEQUAL,[N_]:i.EQUAL,[U_]:i.GEQUAL,[P_]:i.GREATER,[L_]:i.NOTEQUAL};function $(N,w){if(w.type===kn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xn||w.magFilter===pu||w.magFilter===$o||w.magFilter===qa||w.minFilter===xn||w.minFilter===pu||w.minFilter===$o||w.minFilter===qa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,oe[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,oe[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,oe[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,j[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,j[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===cn||w.minFilter!==$o&&w.minFilter!==qa||w.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||a.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),a.get(w).__currentAnisotropy=w.anisotropy}}}function Me(N,w){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",O));const he=w.source;let ye=_.get(he);ye===void 0&&(ye={},_.set(he,ye));const de=ce(w);if(de!==N.__cacheKey){ye[de]===void 0&&(ye[de]={texture:i.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),ye[de].usedTimes++;const He=ye[N.__cacheKey];He!==void 0&&(ye[N.__cacheKey].usedTimes--,He.usedTimes===0&&C(w)),N.__cacheKey=de,N.__webglTexture=ye[de].texture}return ee}function Y(N,w,ee){let he=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=i.TEXTURE_3D);const ye=Me(N,w),de=w.source;r.bindTexture(he,N.__webglTexture,i.TEXTURE0+ee);const He=a.get(de);if(de.version!==He.__version||ye===!0){r.activeTexture(i.TEXTURE0+ee);const Ae=yt.getPrimaries(yt.workingColorSpace),Je=w.colorSpace===ga?null:yt.getPrimaries(w.colorSpace),Ye=w.colorSpace===ga||Ae===Je?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Se=T(w.image,!1,o.maxTextureSize);Se=Mt(w,Se);const ke=c.convert(w.format,w.colorSpace),et=c.convert(w.type);let tt=I(w.internalFormat,ke,et,w.colorSpace,w.isVideoTexture);$(he,w);let Fe;const ct=w.mipmaps,at=w.isVideoTexture!==!0,bt=He.__version===void 0||ye===!0,V=de.dataReady,Ce=X(w,Se);if(w.isDepthTexture)tt=A(w.format===Ds,w.type),bt&&(at?r.texStorage2D(i.TEXTURE_2D,1,tt,Se.width,Se.height):r.texImage2D(i.TEXTURE_2D,0,tt,Se.width,Se.height,0,ke,et,null));else if(w.isDataTexture)if(ct.length>0){at&&bt&&r.texStorage2D(i.TEXTURE_2D,Ce,tt,ct[0].width,ct[0].height);for(let ie=0,pe=ct.length;ie<pe;ie++)Fe=ct[ie],at?V&&r.texSubImage2D(i.TEXTURE_2D,ie,0,0,Fe.width,Fe.height,ke,et,Fe.data):r.texImage2D(i.TEXTURE_2D,ie,tt,Fe.width,Fe.height,0,ke,et,Fe.data);w.generateMipmaps=!1}else at?(bt&&r.texStorage2D(i.TEXTURE_2D,Ce,tt,Se.width,Se.height),V&&r.texSubImage2D(i.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,et,Se.data)):r.texImage2D(i.TEXTURE_2D,0,tt,Se.width,Se.height,0,ke,et,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){at&&bt&&r.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,tt,ct[0].width,ct[0].height,Se.depth);for(let ie=0,pe=ct.length;ie<pe;ie++)if(Fe=ct[ie],w.format!==ln)if(ke!==null)if(at){if(V)if(w.layerUpdates.size>0){const Pe=tm(Fe.width,Fe.height,w.format,w.type);for(const Re of w.layerUpdates){const dt=Fe.data.subarray(Re*Pe/Fe.data.BYTES_PER_ELEMENT,(Re+1)*Pe/Fe.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Re,Fe.width,Fe.height,1,ke,dt)}w.clearLayerUpdates()}else r.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Fe.width,Fe.height,Se.depth,ke,Fe.data)}else r.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,tt,Fe.width,Fe.height,Se.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?V&&r.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Fe.width,Fe.height,Se.depth,ke,et,Fe.data):r.texImage3D(i.TEXTURE_2D_ARRAY,ie,tt,Fe.width,Fe.height,Se.depth,0,ke,et,Fe.data)}else{at&&bt&&r.texStorage2D(i.TEXTURE_2D,Ce,tt,ct[0].width,ct[0].height);for(let ie=0,pe=ct.length;ie<pe;ie++)Fe=ct[ie],w.format!==ln?ke!==null?at?V&&r.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Fe.width,Fe.height,ke,Fe.data):r.compressedTexImage2D(i.TEXTURE_2D,ie,tt,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?V&&r.texSubImage2D(i.TEXTURE_2D,ie,0,0,Fe.width,Fe.height,ke,et,Fe.data):r.texImage2D(i.TEXTURE_2D,ie,tt,Fe.width,Fe.height,0,ke,et,Fe.data)}else if(w.isDataArrayTexture)if(at){if(bt&&r.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,tt,Se.width,Se.height,Se.depth),V)if(w.layerUpdates.size>0){const ie=tm(Se.width,Se.height,w.format,w.type);for(const pe of w.layerUpdates){const Pe=Se.data.subarray(pe*ie/Se.data.BYTES_PER_ELEMENT,(pe+1)*ie/Se.data.BYTES_PER_ELEMENT);r.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,ke,et,Pe)}w.clearLayerUpdates()}else r.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,et,Se.data)}else r.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,Se.width,Se.height,Se.depth,0,ke,et,Se.data);else if(w.isData3DTexture)at?(bt&&r.texStorage3D(i.TEXTURE_3D,Ce,tt,Se.width,Se.height,Se.depth),V&&r.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,et,Se.data)):r.texImage3D(i.TEXTURE_3D,0,tt,Se.width,Se.height,Se.depth,0,ke,et,Se.data);else if(w.isFramebufferTexture){if(bt)if(at)r.texStorage2D(i.TEXTURE_2D,Ce,tt,Se.width,Se.height);else{let ie=Se.width,pe=Se.height;for(let Pe=0;Pe<Ce;Pe++)r.texImage2D(i.TEXTURE_2D,Pe,tt,ie,pe,0,ke,et,null),ie>>=1,pe>>=1}}else if(ct.length>0){if(at&&bt){const ie=Ve(ct[0]);r.texStorage2D(i.TEXTURE_2D,Ce,tt,ie.width,ie.height)}for(let ie=0,pe=ct.length;ie<pe;ie++)Fe=ct[ie],at?V&&r.texSubImage2D(i.TEXTURE_2D,ie,0,0,ke,et,Fe):r.texImage2D(i.TEXTURE_2D,ie,tt,ke,et,Fe);w.generateMipmaps=!1}else if(at){if(bt){const ie=Ve(Se);r.texStorage2D(i.TEXTURE_2D,Ce,tt,ie.width,ie.height)}V&&r.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,et,Se)}else r.texImage2D(i.TEXTURE_2D,0,tt,ke,et,Se);y(w)&&g(he),He.__version=de.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function ue(N,w,ee){if(w.image.length!==6)return;const he=Me(N,w),ye=w.source;r.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+ee);const de=a.get(ye);if(ye.version!==de.__version||he===!0){r.activeTexture(i.TEXTURE0+ee);const He=yt.getPrimaries(yt.workingColorSpace),Ae=w.colorSpace===ga?null:yt.getPrimaries(w.colorSpace),Je=w.colorSpace===ga||He===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!Ye&&!Se?ke[pe]=T(w.image[pe],!0,o.maxCubemapSize):ke[pe]=Se?w.image[pe].image:w.image[pe],ke[pe]=Mt(w,ke[pe]);const et=ke[0],tt=c.convert(w.format,w.colorSpace),Fe=c.convert(w.type),ct=I(w.internalFormat,tt,Fe,w.colorSpace),at=w.isVideoTexture!==!0,bt=de.__version===void 0||he===!0,V=ye.dataReady;let Ce=X(w,et);$(i.TEXTURE_CUBE_MAP,w);let ie;if(Ye){at&&bt&&r.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ct,et.width,et.height);for(let pe=0;pe<6;pe++){ie=ke[pe].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){const Re=ie[Pe];w.format!==ln?tt!==null?at?V&&r.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,Re.width,Re.height,tt,Re.data):r.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,ct,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?V&&r.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,Re.width,Re.height,tt,Fe,Re.data):r.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,ct,Re.width,Re.height,0,tt,Fe,Re.data)}}}else{if(ie=w.mipmaps,at&&bt){ie.length>0&&Ce++;const pe=Ve(ke[0]);r.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ct,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){at?V&&r.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,tt,Fe,ke[pe].data):r.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,ke[pe].width,ke[pe].height,0,tt,Fe,ke[pe].data);for(let Pe=0;Pe<ie.length;Pe++){const Re=ie[Pe].image[pe].image;at?V&&r.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,Re.width,Re.height,tt,Fe,Re.data):r.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,ct,Re.width,Re.height,0,tt,Fe,Re.data)}}else{at?V&&r.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,tt,Fe,ke[pe]):r.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,tt,Fe,ke[pe]);for(let Pe=0;Pe<ie.length;Pe++){const Re=ie[Pe];at?V&&r.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,tt,Fe,Re.image[pe]):r.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,ct,tt,Fe,Re.image[pe])}}}y(w)&&g(i.TEXTURE_CUBE_MAP),de.__version=ye.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function be(N,w,ee,he,ye,de){const He=c.convert(ee.format,ee.colorSpace),Ae=c.convert(ee.type),Je=I(ee.internalFormat,He,Ae,ee.colorSpace),Ye=a.get(w),Se=a.get(ee);if(Se.__renderTarget=w,!Ye.__hasExternalTextures){const ke=Math.max(1,w.width>>de),et=Math.max(1,w.height>>de);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?r.texImage3D(ye,de,Je,ke,et,w.depth,0,He,Ae,null):r.texImage2D(ye,de,Je,ke,et,0,He,Ae,null)}r.bindFramebuffer(i.FRAMEBUFFER,N),lt(w)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,ye,Se.__webglTexture,0,ft(w)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,ye,Se.__webglTexture,de),r.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(N,w,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){const he=w.depthTexture,ye=he&&he.isDepthTexture?he.type:null,de=A(w.stencilBuffer,ye),He=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=ft(w);lt(w)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,de,w.width,w.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,de,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,He,i.RENDERBUFFER,N)}else{const he=w.textures;for(let ye=0;ye<he.length;ye++){const de=he[ye],He=c.convert(de.format,de.colorSpace),Ae=c.convert(de.type),Je=I(de.internalFormat,He,Ae,de.colorSpace),Ye=ft(w);ee&&lt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Je,w.width,w.height):lt(w)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,Je,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Je,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=a.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),me(w.depthTexture,0);const he=ee.__webglTexture,ye=ft(w);if(w.depthTexture.format===Is)lt(w)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(w.depthTexture.format===Ds)lt(w)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function De(N){const w=a.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const ye=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",ye)};he.addEventListener("dispose",ye),w.__depthDisposeCallback=ye}w.__boundDepthTexture=he}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const he=N.texture.mipmaps;he&&he.length>0?Te(w.__webglFramebuffer[0],N):Te(w.__webglFramebuffer,N)}else if(ee){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(r.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=i.createRenderbuffer(),_e(w.__webglDepthbuffer[he],N,!1);else{const ye=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,de)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?r.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):r.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),_e(w.__webglDepthbuffer,N,!1);else{const ye=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,de)}}r.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(N,w,ee){const he=a.get(N);w!==void 0&&be(he.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&De(N)}function Et(N){const w=N.texture,ee=a.get(N),he=a.get(w);N.addEventListener("dispose",z);const ye=N.textures,de=N.isWebGLCubeRenderTarget===!0,He=ye.length>1;if(He||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=w.version,d.memory.textures++),de){ee.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[Ae]=[];for(let Je=0;Je<w.mipmaps.length;Je++)ee.__webglFramebuffer[Ae][Je]=i.createFramebuffer()}else ee.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)ee.__webglFramebuffer[Ae]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(He)for(let Ae=0,Je=ye.length;Ae<Je;Ae++){const Ye=a.get(ye[Ae]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),d.memory.textures++)}if(N.samples>0&&lt(N)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],r.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ye.length;Ae++){const Je=ye[Ae];ee.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Ae]);const Ye=c.convert(Je.format,Je.colorSpace),Se=c.convert(Je.type),ke=I(Je.internalFormat,Ye,Se,Je.colorSpace,N.isXRRenderTarget===!0),et=ft(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,ke,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(ee.__webglDepthRenderbuffer,N,!0)),r.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){r.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),$(i.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Je=0;Je<w.mipmaps.length;Je++)be(ee.__webglFramebuffer[Ae][Je],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je);else be(ee.__webglFramebuffer[Ae],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(w)&&g(i.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(He){for(let Ae=0,Je=ye.length;Ae<Je;Ae++){const Ye=ye[Ae],Se=a.get(Ye);r.bindTexture(i.TEXTURE_2D,Se.__webglTexture),$(i.TEXTURE_2D,Ye),be(ee.__webglFramebuffer,N,Ye,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),y(Ye)&&g(i.TEXTURE_2D)}r.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),r.bindTexture(Ae,he.__webglTexture),$(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Je=0;Je<w.mipmaps.length;Je++)be(ee.__webglFramebuffer[Je],N,w,i.COLOR_ATTACHMENT0,Ae,Je);else be(ee.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,Ae,0);y(w)&&g(Ae),r.unbindTexture()}N.depthBuffer&&De(N)}function ht(N){const w=N.textures;for(let ee=0,he=w.length;ee<he;ee++){const ye=w[ee];if(y(ye)){const de=D(N),He=a.get(ye).__webglTexture;r.bindTexture(de,He),g(de),r.unbindTexture()}}}const Nt=[],B=[];function pr(N){if(N.samples>0){if(lt(N)===!1){const w=N.textures,ee=N.width,he=N.height;let ye=i.COLOR_BUFFER_BIT;const de=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=a.get(N),Ae=w.length>1;if(Ae)for(let Ye=0;Ye<w.length;Ye++)r.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),r.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);r.bindFramebuffer(i.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Je=N.texture.mipmaps;Je&&Je.length>0?r.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):r.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ye=0;Ye<w.length;Ye++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,He.__webglColorRenderbuffer[Ye]);const Se=a.get(w[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,ee,he,0,0,ee,he,ye,i.NEAREST),p===!0&&(Nt.length=0,B.length=0,Nt.push(i.COLOR_ATTACHMENT0+Ye),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Nt.push(de),B.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(r.bindFramebuffer(i.READ_FRAMEBUFFER,null),r.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Ye=0;Ye<w.length;Ye++){r.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,He.__webglColorRenderbuffer[Ye]);const Se=a.get(w[Ye]).__webglTexture;r.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,Se,0)}r.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ft(N){return Math.min(o.maxSamples,N.samples)}function lt(N){const w=a.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function We(N){const w=d.render.frame;v.get(N)!==w&&(v.set(N,w),N.update())}function Mt(N,w){const ee=N.colorSpace,he=N.format,ye=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==Bi&&ee!==ga&&(yt.getTransfer(ee)===Rt?(he!==ln||ye!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),w}function Ve(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=ae,this.resetTextureUnits=se,this.setTexture2D=me,this.setTexture2DArray=le,this.setTexture3D=fe,this.setTextureCube=k,this.rebindTextures=Ze,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=pr,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=be,this.useMultisampledRTT=lt}function qS(i,e){function r(a,o=ga){let c;const d=yt.getTransfer(o);if(a===Bn)return i.UNSIGNED_BYTE;if(a===Od)return i.UNSIGNED_SHORT_4_4_4_4;if(a===kd)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Lm)return i.UNSIGNED_INT_5_9_9_9_REV;if(a===Nm)return i.BYTE;if(a===Pm)return i.SHORT;if(a===Ls)return i.UNSIGNED_SHORT;if(a===Dd)return i.INT;if(a===Ya)return i.UNSIGNED_INT;if(a===kn)return i.FLOAT;if(a===Os)return i.HALF_FLOAT;if(a===Um)return i.ALPHA;if(a===Im)return i.RGB;if(a===ln)return i.RGBA;if(a===Is)return i.DEPTH_COMPONENT;if(a===Ds)return i.DEPTH_STENCIL;if(a===Dm)return i.RED;if(a===Fd)return i.RED_INTEGER;if(a===Om)return i.RG;if(a===zd)return i.RG_INTEGER;if(a===Bd)return i.RGBA_INTEGER;if(a===Sl||a===wl||a===Ml||a===El)if(d===Rt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Sl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ml)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Sl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===wl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ml)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===El)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ad||a===id||a===sd||a===od)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===id)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===od)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ld||a===cd||a===ud)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ld||a===cd)return d===Rt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===ud)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===dd||a===hd||a===fd||a===pd||a===md||a===gd||a===vd||a===_d||a===xd||a===yd||a===bd||a===Sd||a===wd||a===Md)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===dd)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===hd)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===fd)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===pd)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===md)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===gd)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===vd)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===_d)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===xd)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===yd)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===bd)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Sd)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===wd)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Md)return d===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Tl||a===Ed||a===Td)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Tl)return d===Rt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ed)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Td)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===km||a===Rd||a===Ad||a===Cd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Tl)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Rd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ad)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Cd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Us?i.UNSIGNED_INT_24_8:i[a]!==void 0?i[a]:null}return{convert:r}}const YS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KS=`
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

}`;class $S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,r,a){if(this.texture===null){const o=new Lr,c=e.properties.get(o);c.__webglTexture=r.texture,(r.depthNear!==a.depthNear||r.depthFar!==a.depthFar)&&(this.depthNear=r.depthNear,this.depthFar=r.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const r=e.cameras[0].viewport,a=new ya({vertexShader:YS,fragmentShader:KS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Nr(new Dl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QS extends Gi{constructor(e,r){super();const a=this;let o=null,c=1,d=null,h="local-floor",p=1,m=null,v=null,x=null,_=null,b=null,M=null;const T=new $S,y=r.getContextAttributes();let g=null,D=null;const I=[],A=[],X=new At;let O=null;const z=new $r;z.viewport=new Gt;const K=new $r;K.viewport=new Gt;const C=[z,K],R=new _0;let H=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ue=I[Y];return ue===void 0&&(ue=new Ou,I[Y]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Y){let ue=I[Y];return ue===void 0&&(ue=new Ou,I[Y]=ue),ue.getGripSpace()},this.getHand=function(Y){let ue=I[Y];return ue===void 0&&(ue=new Ou,I[Y]=ue),ue.getHandSpace()};function ae(Y){const ue=A.indexOf(Y.inputSource);if(ue===-1)return;const be=I[ue];be!==void 0&&(be.update(Y.inputSource,Y.frame,m||d),be.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ce(){o.removeEventListener("select",ae),o.removeEventListener("selectstart",ae),o.removeEventListener("selectend",ae),o.removeEventListener("squeeze",ae),o.removeEventListener("squeezestart",ae),o.removeEventListener("squeezeend",ae),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",me);for(let Y=0;Y<I.length;Y++){const ue=A[Y];ue!==null&&(A[Y]=null,I[Y].disconnect(ue))}H=null,se=null,T.reset(),e.setRenderTarget(g),b=null,_=null,x=null,o=null,D=null,Me.stop(),a.isPresenting=!1,e.setPixelRatio(O),e.setSize(X.width,X.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return x},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",ae),o.addEventListener("selectstart",ae),o.addEventListener("selectend",ae),o.addEventListener("squeeze",ae),o.addEventListener("squeezestart",ae),o.addEventListener("squeezeend",ae),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",me),y.xrCompatible!==!0&&await r.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,be=null,_e=null;y.depth&&(_e=y.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,ue=y.stencil?Ds:Is,be=y.stencil?Us:Ya);const Te={colorFormat:r.RGBA8,depthFormat:_e,scaleFactor:c};x=new XRWebGLBinding(o,r),_=x.createProjectionLayer(Te),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new Ka(_.textureWidth,_.textureHeight,{format:ln,type:Bn,depthTexture:new Qm(_.textureWidth,_.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,r,ue),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),D=new Ka(b.framebufferWidth,b.framebufferHeight,{format:ln,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(h),Me.setContext(o),Me.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function me(Y){for(let ue=0;ue<Y.removed.length;ue++){const be=Y.removed[ue],_e=A.indexOf(be);_e>=0&&(A[_e]=null,I[_e].disconnect(be))}for(let ue=0;ue<Y.added.length;ue++){const be=Y.added[ue];let _e=A.indexOf(be);if(_e===-1){for(let De=0;De<I.length;De++)if(De>=A.length){A.push(be),_e=De;break}else if(A[De]===null){A[De]=be,_e=De;break}if(_e===-1)break}const Te=I[_e];Te&&Te.connect(be)}}const le=new te,fe=new te;function k(Y,ue,be){le.setFromMatrixPosition(ue.matrixWorld),fe.setFromMatrixPosition(be.matrixWorld);const _e=le.distanceTo(fe),Te=ue.projectionMatrix.elements,De=be.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Et=Te[14]/(Te[10]+1),ht=(Te[9]+1)/Te[5],Nt=(Te[9]-1)/Te[5],B=(Te[8]-1)/Te[0],pr=(De[8]+1)/De[0],ft=Ze*B,lt=Ze*pr,We=_e/(-B+pr),Mt=We*-B;if(ue.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Mt),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ve=Ze+We,N=Et+We,w=ft-Mt,ee=lt+(_e-Mt),he=ht*Et/N*Ve,ye=Nt*Et/N*Ve;Y.projectionMatrix.makePerspective(w,ee,he,ye,Ve,N),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function oe(Y,ue){ue===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ue.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let ue=Y.near,be=Y.far;T.texture!==null&&(T.depthNear>0&&(ue=T.depthNear),T.depthFar>0&&(be=T.depthFar)),R.near=K.near=z.near=ue,R.far=K.far=z.far=be,(H!==R.near||se!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,se=R.far),z.layers.mask=Y.layers.mask|2,K.layers.mask=Y.layers.mask|4,R.layers.mask=z.layers.mask|K.layers.mask;const _e=Y.parent,Te=R.cameras;oe(R,_e);for(let De=0;De<Te.length;De++)oe(Te[De],_e);Te.length===2?k(R,z,K):R.projectionMatrix.copy(z.projectionMatrix),j(Y,R,_e)};function j(Y,ue,be){be===null?Y.matrix.copy(ue.matrixWorld):(Y.matrix.copy(be.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ue.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Nd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&b===null))return p},this.setFoveation=function(Y){p=Y,_!==null&&(_.fixedFoveation=Y),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Y)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let U=null;function $(Y,ue){if(v=ue.getViewerPose(m||d),M=ue,v!==null){const be=v.views;b!==null&&(e.setRenderTargetFramebuffer(D,b.framebuffer),e.setRenderTarget(D));let _e=!1;be.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let De=0;De<be.length;De++){const Ze=be[De];let Et=null;if(b!==null)Et=b.getViewport(Ze);else{const Nt=x.getViewSubImage(_,Ze);Et=Nt.viewport,De===0&&(e.setRenderTargetTextures(D,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(D))}let ht=C[De];ht===void 0&&(ht=new $r,ht.layers.enable(De),ht.viewport=new Gt,C[De]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Et.x,Et.y,Et.width,Et.height),De===0&&(R.matrix.copy(ht.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_e===!0&&R.cameras.push(ht)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&x){const De=x.getDepthInformation(be[0]);De&&De.isValid&&De.texture&&T.init(e,De,o.renderState)}}for(let be=0;be<I.length;be++){const _e=A[be],Te=I[be];_e!==null&&Te!==void 0&&Te.update(_e,ue,m||d)}U&&U(Y,ue),ue.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ue}),M=null}const Me=new Zm;Me.setAnimationLoop($),this.setAnimationLoop=function(Y){U=Y},this.dispose=function(){}}}const Ba=new Hn,ZS=new zt;function JS(i,e){function r(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function a(y,g){g.color.getRGB(y.fogColor.value,Wm(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function o(y,g,D,I,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),x(y,g)):g.isMeshPhongMaterial?(c(y,g),v(y,g)):g.isMeshStandardMaterial?(c(y,g),_(y,g),g.isMeshPhysicalMaterial&&b(y,g,A)):g.isMeshMatcapMaterial?(c(y,g),M(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),T(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(d(y,g),g.isLineDashedMaterial&&h(y,g)):g.isPointsMaterial?p(y,g,D,I):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,r(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,r(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,r(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Pr&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,r(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Pr&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,r(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,r(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,r(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),I=D.envMap,A=D.envMapRotation;I&&(y.envMap.value=I,Ba.copy(A),Ba.x*=-1,Ba.y*=-1,Ba.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ba.y*=-1,Ba.z*=-1),y.envMapRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(Ba)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,r(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,r(g.aoMap,y.aoMapTransform))}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,r(g.map,y.mapTransform))}function h(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,D,I){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=I*.5,g.map&&(y.map.value=g.map,r(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,r(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,r(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,r(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function v(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function _(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,r(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,r(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function b(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,r(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,r(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,r(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,r(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,r(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pr&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,r(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,r(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,r(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,r(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,r(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,r(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,r(g.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function ew(i,e,r,a){let o={},c={},d=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,I){const A=I.program;a.uniformBlockBinding(D,A)}function m(D,I){let A=o[D.id];A===void 0&&(M(D),A=v(D),o[D.id]=A,D.addEventListener("dispose",y));const X=I.program;a.updateUBOMapping(D,X);const O=e.render.frame;c[D.id]!==O&&(_(D),c[D.id]=O)}function v(D){const I=x();D.__bindingPointIndex=I;const A=i.createBuffer(),X=D.__size,O=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,X,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,A),A}function x(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const I=o[D.id],A=D.uniforms,X=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let O=0,z=A.length;O<z;O++){const K=Array.isArray(A[O])?A[O]:[A[O]];for(let C=0,R=K.length;C<R;C++){const H=K[C];if(b(H,O,C,X)===!0){const se=H.__offset,ae=Array.isArray(H.value)?H.value:[H.value];let ce=0;for(let me=0;me<ae.length;me++){const le=ae[me],fe=T(le);typeof le=="number"||typeof le=="boolean"?(H.__data[0]=le,i.bufferSubData(i.UNIFORM_BUFFER,se+ce,H.__data)):le.isMatrix3?(H.__data[0]=le.elements[0],H.__data[1]=le.elements[1],H.__data[2]=le.elements[2],H.__data[3]=0,H.__data[4]=le.elements[3],H.__data[5]=le.elements[4],H.__data[6]=le.elements[5],H.__data[7]=0,H.__data[8]=le.elements[6],H.__data[9]=le.elements[7],H.__data[10]=le.elements[8],H.__data[11]=0):(le.toArray(H.__data,ce),ce+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,se,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function b(D,I,A,X){const O=D.value,z=I+"_"+A;if(X[z]===void 0)return typeof O=="number"||typeof O=="boolean"?X[z]=O:X[z]=O.clone(),!0;{const K=X[z];if(typeof O=="number"||typeof O=="boolean"){if(K!==O)return X[z]=O,!0}else if(K.equals(O)===!1)return K.copy(O),!0}return!1}function M(D){const I=D.uniforms;let A=0;const X=16;for(let z=0,K=I.length;z<K;z++){const C=Array.isArray(I[z])?I[z]:[I[z]];for(let R=0,H=C.length;R<H;R++){const se=C[R],ae=Array.isArray(se.value)?se.value:[se.value];for(let ce=0,me=ae.length;ce<me;ce++){const le=ae[ce],fe=T(le),k=A%X,oe=k%fe.boundary,j=k+oe;A+=oe,j!==0&&X-j<fe.storage&&(A+=X-j),se.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=A,A+=fe.storage}}}const O=A%X;return O>0&&(A+=X-O),D.__size=A,D.__cache={},this}function T(D){const I={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(I.boundary=4,I.storage=4):D.isVector2?(I.boundary=8,I.storage=8):D.isVector3||D.isColor?(I.boundary=16,I.storage=12):D.isVector4?(I.boundary=16,I.storage=16):D.isMatrix3?(I.boundary=48,I.storage=48):D.isMatrix4?(I.boundary=64,I.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),I}function y(D){const I=D.target;I.removeEventListener("dispose",y);const A=d.indexOf(I.__bindingPointIndex);d.splice(A,1),i.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function g(){for(const D in o)i.deleteBuffer(o[D]);d=[],o={},c={}}return{bind:p,update:m,dispose:g}}class tw{constructor(e={}){const{canvas:r=O_(),context:a=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=d;const M=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const D=[],I=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let X=!1;this._outputColorSpace=Kr;let O=0,z=0,K=null,C=-1,R=null;const H=new Gt,se=new Gt;let ae=null;const ce=new wt(0);let me=0,le=r.width,fe=r.height,k=1,oe=null,j=null;const U=new Gt(0,0,le,fe),$=new Gt(0,0,le,fe);let Me=!1;const Y=new Ym;let ue=!1,be=!1;const _e=new zt,Te=new zt,De=new te,Ze=new Gt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Nt(){return K===null?k:1}let B=a;function pr(E,q){return r.getContext(E,q)}try{const E={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${Id}`),r.addEventListener("webglcontextlost",pe,!1),r.addEventListener("webglcontextrestored",Pe,!1),r.addEventListener("webglcontextcreationerror",Re,!1),B===null){const q="webgl2";if(B=pr(q,E),B===null)throw pr(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ft,lt,We,Mt,Ve,N,w,ee,he,ye,de,He,Ae,Je,Ye,Se,ke,et,tt,Fe,ct,at,bt,V;function Ce(){ft=new db(B),ft.init(),at=new qS(B,ft),lt=new ab(B,ft,e,at),We=new WS(B,ft),lt.reverseDepthBuffer&&_&&We.buffers.depth.setReversed(!0),Mt=new pb(B),Ve=new LS,N=new XS(B,ft,We,Ve,lt,at,Mt),w=new sb(A),ee=new ub(A),he=new y0(B),bt=new rb(B,he),ye=new hb(B,he,Mt,bt),de=new gb(B,ye,he,Mt),tt=new mb(B,lt,N),Se=new ib(Ve),He=new PS(A,w,ee,ft,lt,bt,Se),Ae=new JS(A,Ve),Je=new IS,Ye=new BS(ft),et=new tb(A,w,ee,We,de,b,p),ke=new VS(A,de,lt),V=new ew(B,Mt,lt,We),Fe=new nb(B,ft,Mt),ct=new fb(B,ft,Mt),Mt.programs=He.programs,A.capabilities=lt,A.extensions=ft,A.properties=Ve,A.renderLists=Je,A.shadowMap=ke,A.state=We,A.info=Mt}Ce();const ie=new QS(A,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=ft.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ft.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(le,fe,!1))},this.getSize=function(E){return E.set(le,fe)},this.setSize=function(E,q,ne=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=E,fe=q,r.width=Math.floor(E*k),r.height=Math.floor(q*k),ne===!0&&(r.style.width=E+"px",r.style.height=q+"px"),this.setViewport(0,0,E,q)},this.getDrawingBufferSize=function(E){return E.set(le*k,fe*k).floor()},this.setDrawingBufferSize=function(E,q,ne){le=E,fe=q,k=ne,r.width=Math.floor(E*ne),r.height=Math.floor(q*ne),this.setViewport(0,0,E,q)},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(U)},this.setViewport=function(E,q,ne,Z){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,q,ne,Z),We.viewport(H.copy(U).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,q,ne,Z){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,q,ne,Z),We.scissor(se.copy($).multiplyScalar(k).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(E){We.setScissorTest(Me=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(E=!0,q=!0,ne=!0){let Z=0;if(E){let W=!1;if(K!==null){const xe=K.texture.format;W=xe===Bd||xe===zd||xe===Fd}if(W){const xe=K.texture.type,Ue=xe===Bn||xe===Ya||xe===Ls||xe===Us||xe===Od||xe===kd,Le=et.getClearColor(),Ge=et.getClearAlpha(),rt=Le.r,Ke=Le.g,qe=Le.b;Ue?(M[0]=rt,M[1]=Ke,M[2]=qe,M[3]=Ge,B.clearBufferuiv(B.COLOR,0,M)):(T[0]=rt,T[1]=Ke,T[2]=qe,T[3]=Ge,B.clearBufferiv(B.COLOR,0,T))}else Z|=B.COLOR_BUFFER_BIT}q&&(Z|=B.DEPTH_BUFFER_BIT),ne&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",pe,!1),r.removeEventListener("webglcontextrestored",Pe,!1),r.removeEventListener("webglcontextcreationerror",Re,!1),et.dispose(),Je.dispose(),Ye.dispose(),Ve.dispose(),w.dispose(),ee.dispose(),de.dispose(),bt.dispose(),V.dispose(),He.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",$a),ie.removeEventListener("sessionend",Gn),yn.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const E=Mt.autoReset,q=ke.enabled,ne=ke.autoUpdate,Z=ke.needsUpdate,W=ke.type;Ce(),Mt.autoReset=E,ke.enabled=q,ke.autoUpdate=ne,ke.needsUpdate=Z,ke.type=W}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function dt(E){const q=E.target;q.removeEventListener("dispose",dt),Lt(q)}function Lt(E){qt(E),Ve.remove(E)}function qt(E){const q=Ve.get(E).programs;q!==void 0&&(q.forEach(function(ne){He.releaseProgram(ne)}),E.isShaderMaterial&&He.releaseShaderCache(E))}this.renderBufferDirect=function(E,q,ne,Z,W,xe){q===null&&(q=Et);const Ue=W.isMesh&&W.matrixWorld.determinant()<0,Le=Vs(E,q,ne,Z,W);We.setMaterial(Z,Ue);let Ge=ne.index,rt=1;if(Z.wireframe===!0){if(Ge=ye.getWireframeAttribute(ne),Ge===void 0)return;rt=2}const Ke=ne.drawRange,qe=ne.attributes.position;let mt=Ke.start*rt,st=(Ke.start+Ke.count)*rt;xe!==null&&(mt=Math.max(mt,xe.start*rt),st=Math.min(st,(xe.start+xe.count)*rt)),Ge!==null?(mt=Math.max(mt,0),st=Math.min(st,Ge.count)):qe!=null&&(mt=Math.max(mt,0),st=Math.min(st,qe.count));const Bt=st-mt;if(Bt<0||Bt===1/0)return;bt.setup(W,Z,Le,ne,Ge);let St,Tt=Fe;if(Ge!==null&&(St=he.get(Ge),Tt=ct,Tt.setIndex(St)),W.isMesh)Z.wireframe===!0?(We.setLineWidth(Z.wireframeLinewidth*Nt()),Tt.setMode(B.LINES)):Tt.setMode(B.TRIANGLES);else if(W.isLine){let Xe=Z.linewidth;Xe===void 0&&(Xe=1),We.setLineWidth(Xe*Nt()),W.isLineSegments?Tt.setMode(B.LINES):W.isLineLoop?Tt.setMode(B.LINE_LOOP):Tt.setMode(B.LINE_STRIP)}else W.isPoints?Tt.setMode(B.POINTS):W.isSprite&&Tt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Rl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Tt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xe=W._multiDrawStarts,Vt=W._multiDrawCounts,Ir=W._multiDrawCount,sr=Ge?he.get(Ge).bytesPerElement:1,jn=Ve.get(Z).currentProgram.getUniforms();for(let gr=0;gr<Ir;gr++)jn.setValue(B,"_gl_DrawID",gr),Tt.render(Xe[gr]/sr,Vt[gr])}else if(W.isInstancedMesh)Tt.renderInstances(mt,Bt,W.count);else if(ne.isInstancedBufferGeometry){const Xe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Vt=Math.min(ne.instanceCount,Xe);Tt.renderInstances(mt,Bt,Vt)}else Tt.render(mt,Bt)};function gt(E,q,ne){E.transparent===!0&&E.side===_n&&E.forceSinglePass===!1?(E.side=Pr,E.needsUpdate=!0,Qa(E,q,ne),E.side=xa,E.needsUpdate=!0,Qa(E,q,ne),E.side=_n):Qa(E,q,ne)}this.compile=function(E,q,ne=null){ne===null&&(ne=E),g=Ye.get(ne),g.init(q),I.push(g),ne.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),E!==ne&&E.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const Z=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let Ue=0;Ue<xe.length;Ue++){const Le=xe[Ue];gt(Le,ne,W),Z.add(Le)}else gt(xe,ne,W),Z.add(xe)}),g=I.pop(),Z},this.compileAsync=function(E,q,ne=null){const Z=this.compile(E,q,ne);return new Promise(W=>{function xe(){if(Z.forEach(function(Ue){Ve.get(Ue).currentProgram.isReady()&&Z.delete(Ue)}),Z.size===0){W(E);return}setTimeout(xe,10)}ft.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Sr=null;function mr(E){Sr&&Sr(E)}function $a(){yn.stop()}function Gn(){yn.start()}const yn=new Zm;yn.setAnimationLoop(mr),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(E){Sr=E,ie.setAnimationLoop(E),E===null?yn.stop():yn.start()},ie.addEventListener("sessionstart",$a),ie.addEventListener("sessionend",Gn),this.render=function(E,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(q),q=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,q,K),g=Ye.get(E,I.length),g.init(q),I.push(g),Te.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Y.setFromProjectionMatrix(Te),be=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,be),y=Je.get(E,D.length),y.init(),D.push(y),ie.enabled===!0&&ie.isPresenting===!0){const xe=A.xr.getDepthSensingMesh();xe!==null&&bn(xe,q,-1/0,A.sortObjects)}bn(E,q,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(oe,j),ht=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ht&&et.addToRenderList(y,E),this.info.render.frame++,ue===!0&&Se.beginShadows();const ne=g.state.shadowsArray;ke.render(ne,E,q),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=y.opaque,W=y.transmissive;if(g.setupLights(),q.isArrayCamera){const xe=q.cameras;if(W.length>0)for(let Ue=0,Le=xe.length;Ue<Le;Ue++){const Ge=xe[Ue];Sa(Z,W,E,Ge)}ht&&et.render(E);for(let Ue=0,Le=xe.length;Ue<Le;Ue++){const Ge=xe[Ue];ba(y,E,Ge,Ge.viewport)}}else W.length>0&&Sa(Z,W,E,q),ht&&et.render(E),ba(y,E,q);K!==null&&z===0&&(N.updateMultisampleRenderTarget(K),N.updateRenderTargetMipmap(K)),E.isScene===!0&&E.onAfterRender(A,E,q),bt.resetDefaultState(),C=-1,R=null,I.pop(),I.length>0?(g=I[I.length-1],ue===!0&&Se.setGlobalState(A.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function bn(E,q,ne,Z){if(E.visible===!1)return;if(E.layers.test(q.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(q);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){Z&&Ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Te);const xe=de.update(E),Ue=E.material;Ue.visible&&y.push(E,xe,Ue,ne,Ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const xe=de.update(E),Ue=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ze.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ze.copy(xe.boundingSphere.center)),Ze.applyMatrix4(E.matrixWorld).applyMatrix4(Te)),Array.isArray(Ue)){const Le=xe.groups;for(let Ge=0,rt=Le.length;Ge<rt;Ge++){const Ke=Le[Ge],qe=Ue[Ke.materialIndex];qe&&qe.visible&&y.push(E,xe,qe,ne,Ze.z,Ke)}}else Ue.visible&&y.push(E,xe,Ue,ne,Ze.z,null)}}const W=E.children;for(let xe=0,Ue=W.length;xe<Ue;xe++)bn(W[xe],q,ne,Z)}function ba(E,q,ne,Z){const W=E.opaque,xe=E.transmissive,Ue=E.transparent;g.setupLightsView(ne),ue===!0&&Se.setGlobalState(A.clippingPlanes,ne),Z&&We.viewport(H.copy(Z)),W.length>0&&Vn(W,q,ne),xe.length>0&&Vn(xe,q,ne),Ue.length>0&&Vn(Ue,q,ne),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Sa(E,q,ne,Z){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Z.id]===void 0&&(g.state.transmissionRenderTarget[Z.id]=new Ka(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Os:Bn,minFilter:qa,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const W=g.state.transmissionRenderTarget[Z.id],xe=Z.viewport||H;W.setSize(xe.z*A.transmissionResolutionScale,xe.w*A.transmissionResolutionScale);const Ue=A.getRenderTarget();A.setRenderTarget(W),A.getClearColor(ce),me=A.getClearAlpha(),me<1&&A.setClearColor(16777215,.5),A.clear(),ht&&et.render(ne);const Le=A.toneMapping;A.toneMapping=_a;const Ge=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),g.setupLightsView(Z),ue===!0&&Se.setGlobalState(A.clippingPlanes,Z),Vn(E,ne,Z),N.updateMultisampleRenderTarget(W),N.updateRenderTargetMipmap(W),ft.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Ke=0,qe=q.length;Ke<qe;Ke++){const mt=q[Ke],st=mt.object,Bt=mt.geometry,St=mt.material,Tt=mt.group;if(St.side===_n&&st.layers.test(Z.layers)){const Xe=St.side;St.side=Pr,St.needsUpdate=!0,Hs(st,ne,Z,Bt,St,Tt),St.side=Xe,St.needsUpdate=!0,rt=!0}}rt===!0&&(N.updateMultisampleRenderTarget(W),N.updateRenderTargetMipmap(W))}A.setRenderTarget(Ue),A.setClearColor(ce,me),Ge!==void 0&&(Z.viewport=Ge),A.toneMapping=Le}function Vn(E,q,ne){const Z=q.isScene===!0?q.overrideMaterial:null;for(let W=0,xe=E.length;W<xe;W++){const Ue=E[W],Le=Ue.object,Ge=Ue.geometry,rt=Ue.group;let Ke=Ue.material;Ke.allowOverride===!0&&Z!==null&&(Ke=Z),Le.layers.test(ne.layers)&&Hs(Le,q,ne,Ge,Ke,rt)}}function Hs(E,q,ne,Z,W,xe){E.onBeforeRender(A,q,ne,Z,W,xe),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(A,q,ne,Z,E,xe),W.transparent===!0&&W.side===_n&&W.forceSinglePass===!1?(W.side=Pr,W.needsUpdate=!0,A.renderBufferDirect(ne,q,Z,W,E,xe),W.side=xa,W.needsUpdate=!0,A.renderBufferDirect(ne,q,Z,W,E,xe),W.side=_n):A.renderBufferDirect(ne,q,Z,W,E,xe),E.onAfterRender(A,q,ne,Z,W,xe)}function Qa(E,q,ne){q.isScene!==!0&&(q=Et);const Z=Ve.get(E),W=g.state.lights,xe=g.state.shadowsArray,Ue=W.state.version,Le=He.getParameters(E,W.state,xe,q,ne),Ge=He.getProgramCacheKey(Le);let rt=Z.programs;Z.environment=E.isMeshStandardMaterial?q.environment:null,Z.fog=q.fog,Z.envMap=(E.isMeshStandardMaterial?ee:w).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?q.environmentRotation:E.envMapRotation,rt===void 0&&(E.addEventListener("dispose",dt),rt=new Map,Z.programs=rt);let Ke=rt.get(Ge);if(Ke!==void 0){if(Z.currentProgram===Ke&&Z.lightsStateVersion===Ue)return dn(E,Le),Ke}else Le.uniforms=He.getUniforms(E),E.onBeforeCompile(Le,A),Ke=He.acquireProgram(Le,Ge),rt.set(Ge,Ke),Z.uniforms=Le.uniforms;const qe=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=Se.uniform),dn(E,Le),Z.needsLights=kl(E),Z.lightsStateVersion=Ue,Z.needsLights&&(qe.ambientLightColor.value=W.state.ambient,qe.lightProbe.value=W.state.probe,qe.directionalLights.value=W.state.directional,qe.directionalLightShadows.value=W.state.directionalShadow,qe.spotLights.value=W.state.spot,qe.spotLightShadows.value=W.state.spotShadow,qe.rectAreaLights.value=W.state.rectArea,qe.ltc_1.value=W.state.rectAreaLTC1,qe.ltc_2.value=W.state.rectAreaLTC2,qe.pointLights.value=W.state.point,qe.pointLightShadows.value=W.state.pointShadow,qe.hemisphereLights.value=W.state.hemi,qe.directionalShadowMap.value=W.state.directionalShadowMap,qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qe.spotShadowMap.value=W.state.spotShadowMap,qe.spotLightMatrix.value=W.state.spotLightMatrix,qe.spotLightMap.value=W.state.spotLightMap,qe.pointShadowMap.value=W.state.pointShadowMap,qe.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Ke,Z.uniformsList=null,Ke}function Gs(E){if(E.uniformsList===null){const q=E.currentProgram.getUniforms();E.uniformsList=Al.seqWithValue(q.seq,E.uniforms)}return E.uniformsList}function dn(E,q){const ne=Ve.get(E);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function Vs(E,q,ne,Z,W){q.isScene!==!0&&(q=Et),N.resetTextureUnits();const xe=q.fog,Ue=Z.isMeshStandardMaterial?q.environment:null,Le=K===null?A.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Bi,Ge=(Z.isMeshStandardMaterial?ee:w).get(Z.envMap||Ue),rt=Z.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ke=!!ne.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qe=!!ne.morphAttributes.position,mt=!!ne.morphAttributes.normal,st=!!ne.morphAttributes.color;let Bt=_a;Z.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Bt=A.toneMapping);const St=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Tt=St!==void 0?St.length:0,Xe=Ve.get(Z),Vt=g.state.lights;if(ue===!0&&(be===!0||E!==R)){const Yt=E===R&&Z.id===C;Se.setState(Z,E,Yt)}let Ir=!1;Z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Vt.state.version||Xe.outputColorSpace!==Le||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==Ge||Z.fog===!0&&Xe.fog!==xe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==rt||Xe.vertexTangents!==Ke||Xe.morphTargets!==qe||Xe.morphNormals!==mt||Xe.morphColors!==st||Xe.toneMapping!==Bt||Xe.morphTargetsCount!==Tt)&&(Ir=!0):(Ir=!0,Xe.__version=Z.version);let sr=Xe.currentProgram;Ir===!0&&(sr=Qa(Z,q,W));let jn=!1,gr=!1,Sn=!1;const Ct=sr.getUniforms(),or=Xe.uniforms;if(We.useProgram(sr.program)&&(jn=!0,gr=!0,Sn=!0),Z.id!==C&&(C=Z.id,gr=!0),jn||R!==E){We.buffers.depth.getReversed()?(_e.copy(E.projectionMatrix),F_(_e),z_(_e),Ct.setValue(B,"projectionMatrix",_e)):Ct.setValue(B,"projectionMatrix",E.projectionMatrix),Ct.setValue(B,"viewMatrix",E.matrixWorldInverse);const Yt=Ct.map.cameraPosition;Yt!==void 0&&Yt.setValue(B,De.setFromMatrixPosition(E.matrixWorld)),lt.logarithmicDepthBuffer&&Ct.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ct.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),R!==E&&(R=E,gr=!0,Sn=!0)}if(W.isSkinnedMesh){Ct.setOptional(B,W,"bindMatrix"),Ct.setOptional(B,W,"bindMatrixInverse");const Yt=W.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ct.setValue(B,"boneTexture",Yt.boneTexture,N))}W.isBatchedMesh&&(Ct.setOptional(B,W,"batchingTexture"),Ct.setValue(B,"batchingTexture",W._matricesTexture,N),Ct.setOptional(B,W,"batchingIdTexture"),Ct.setValue(B,"batchingIdTexture",W._indirectTexture,N),Ct.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Ct.setValue(B,"batchingColorTexture",W._colorsTexture,N));const Jt=ne.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&tt.update(W,ne,sr),(gr||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,Ct.setValue(B,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(or.envMap.value=Ge,or.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&q.environment!==null&&(or.envMapIntensity.value=q.environmentIntensity),gr&&(Ct.setValue(B,"toneMappingExposure",A.toneMappingExposure),Xe.needsLights&&js(or,Sn),xe&&Z.fog===!0&&Ae.refreshFogUniforms(or,xe),Ae.refreshMaterialUniforms(or,Z,k,fe,g.state.transmissionRenderTarget[E.id]),Al.upload(B,Gs(Xe),or,N)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Al.upload(B,Gs(Xe),or,N),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ct.setValue(B,"center",W.center),Ct.setValue(B,"modelViewMatrix",W.modelViewMatrix),Ct.setValue(B,"normalMatrix",W.normalMatrix),Ct.setValue(B,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Yt=Z.uniformsGroups;for(let vr=0,vt=Yt.length;vr<vt;vr++){const hn=Yt[vr];V.update(hn,sr),V.bind(hn,sr)}}return sr}function js(E,q){E.ambientLightColor.needsUpdate=q,E.lightProbe.needsUpdate=q,E.directionalLights.needsUpdate=q,E.directionalLightShadows.needsUpdate=q,E.pointLights.needsUpdate=q,E.pointLightShadows.needsUpdate=q,E.spotLights.needsUpdate=q,E.spotLightShadows.needsUpdate=q,E.rectAreaLights.needsUpdate=q,E.hemisphereLights.needsUpdate=q}function kl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,q,ne){const Z=Ve.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ve.get(E.texture).__webglTexture=q,Ve.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ne,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,q){const ne=Ve.get(E);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0};const Ws=B.createFramebuffer();this.setRenderTarget=function(E,q=0,ne=0){K=E,O=q,z=ne;let Z=!0,W=null,xe=!1,Ue=!1;if(E){const Le=Ve.get(E);if(Le.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(B.FRAMEBUFFER,null),Z=!1;else if(Le.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(Le.__hasExternalTextures)N.rebindTextures(E,Ve.get(E.texture).__webglTexture,Ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ke=E.depthTexture;if(Le.__boundDepthTexture!==Ke){if(Ke!==null&&Ve.has(Ke)&&(E.width!==Ke.image.width||E.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ue=!0);const rt=Ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(rt[q])?W=rt[q][ne]:W=rt[q],xe=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?W=Ve.get(E).__webglMultisampledFramebuffer:Array.isArray(rt)?W=rt[ne]:W=rt,H.copy(E.viewport),se.copy(E.scissor),ae=E.scissorTest}else H.copy(U).multiplyScalar(k).floor(),se.copy($).multiplyScalar(k).floor(),ae=Me;if(ne!==0&&(W=Ws),We.bindFramebuffer(B.FRAMEBUFFER,W)&&Z&&We.drawBuffers(E,W),We.viewport(H),We.scissor(se),We.setScissorTest(ae),xe){const Le=Ve.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,ne)}else if(Ue){const Le=Ve.get(E.texture),Ge=q;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.__webglTexture,ne,Ge)}else if(E!==null&&ne!==0){const Le=Ve.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Le.__webglTexture,ne)}C=-1},this.readRenderTargetPixels=function(E,q,ne,Z,W,xe,Ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Le=Le[Ue]),Le){We.bindFramebuffer(B.FRAMEBUFFER,Le);try{const Ge=E.texture,rt=Ge.format,Ke=Ge.type;if(!lt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=E.width-Z&&ne>=0&&ne<=E.height-W&&B.readPixels(q,ne,Z,W,at.convert(rt),at.convert(Ke),xe)}finally{const Ge=K!==null?Ve.get(K).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(E,q,ne,Z,W,xe,Ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Le=Le[Ue]),Le)if(q>=0&&q<=E.width-Z&&ne>=0&&ne<=E.height-W){We.bindFramebuffer(B.FRAMEBUFFER,Le);const Ge=E.texture,rt=Ge.format,Ke=Ge.type;if(!lt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.bufferData(B.PIXEL_PACK_BUFFER,xe.byteLength,B.STREAM_READ),B.readPixels(q,ne,Z,W,at.convert(rt),at.convert(Ke),0);const mt=K!==null?Ve.get(K).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,mt);const st=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await k_(B,st,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xe),B.deleteBuffer(qe),B.deleteSync(st),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,q=null,ne=0){const Z=Math.pow(2,-ne),W=Math.floor(E.image.width*Z),xe=Math.floor(E.image.height*Z),Ue=q!==null?q.x:0,Le=q!==null?q.y:0;N.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,ne,0,0,Ue,Le,W,xe),We.unbindTexture()};const Xs=B.createFramebuffer(),qs=B.createFramebuffer();this.copyTextureToTexture=function(E,q,ne=null,Z=null,W=0,xe=null){xe===null&&(W!==0?(Rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=W,W=0):xe=0);let Ue,Le,Ge,rt,Ke,qe,mt,st,Bt;const St=E.isCompressedTexture?E.mipmaps[xe]:E.image;if(ne!==null)Ue=ne.max.x-ne.min.x,Le=ne.max.y-ne.min.y,Ge=ne.isBox3?ne.max.z-ne.min.z:1,rt=ne.min.x,Ke=ne.min.y,qe=ne.isBox3?ne.min.z:0;else{const Jt=Math.pow(2,-W);Ue=Math.floor(St.width*Jt),Le=Math.floor(St.height*Jt),E.isDataArrayTexture?Ge=St.depth:E.isData3DTexture?Ge=Math.floor(St.depth*Jt):Ge=1,rt=0,Ke=0,qe=0}Z!==null?(mt=Z.x,st=Z.y,Bt=Z.z):(mt=0,st=0,Bt=0);const Tt=at.convert(q.format),Xe=at.convert(q.type);let Vt;q.isData3DTexture?(N.setTexture3D(q,0),Vt=B.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(N.setTexture2DArray(q,0),Vt=B.TEXTURE_2D_ARRAY):(N.setTexture2D(q,0),Vt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const Ir=B.getParameter(B.UNPACK_ROW_LENGTH),sr=B.getParameter(B.UNPACK_IMAGE_HEIGHT),jn=B.getParameter(B.UNPACK_SKIP_PIXELS),gr=B.getParameter(B.UNPACK_SKIP_ROWS),Sn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,St.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,rt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qe);const Ct=E.isDataArrayTexture||E.isData3DTexture,or=q.isDataArrayTexture||q.isData3DTexture;if(E.isDepthTexture){const Jt=Ve.get(E),Yt=Ve.get(q),vr=Ve.get(Jt.__renderTarget),vt=Ve.get(Yt.__renderTarget);We.bindFramebuffer(B.READ_FRAMEBUFFER,vr.__webglFramebuffer),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let hn=0;hn<Ge;hn++)Ct&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(E).__webglTexture,W,qe+hn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,xe,Bt+hn)),B.blitFramebuffer(rt,Ke,Ue,Le,mt,st,Ue,Le,B.DEPTH_BUFFER_BIT,B.NEAREST);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||Ve.has(E)){const Jt=Ve.get(E),Yt=Ve.get(q);We.bindFramebuffer(B.READ_FRAMEBUFFER,Xs),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,qs);for(let vr=0;vr<Ge;vr++)Ct?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.__webglTexture,W,qe+vr):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Jt.__webglTexture,W),or?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.__webglTexture,xe,Bt+vr):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Yt.__webglTexture,xe),W!==0?B.blitFramebuffer(rt,Ke,Ue,Le,mt,st,Ue,Le,B.COLOR_BUFFER_BIT,B.NEAREST):or?B.copyTexSubImage3D(Vt,xe,mt,st,Bt+vr,rt,Ke,Ue,Le):B.copyTexSubImage2D(Vt,xe,mt,st,rt,Ke,Ue,Le);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else or?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Vt,xe,mt,st,Bt,Ue,Le,Ge,Tt,Xe,St.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(Vt,xe,mt,st,Bt,Ue,Le,Ge,Tt,St.data):B.texSubImage3D(Vt,xe,mt,st,Bt,Ue,Le,Ge,Tt,Xe,St):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xe,mt,st,Ue,Le,Tt,Xe,St.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xe,mt,st,St.width,St.height,Tt,St.data):B.texSubImage2D(B.TEXTURE_2D,xe,mt,st,Ue,Le,Tt,Xe,St);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ir),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,sr),B.pixelStorei(B.UNPACK_SKIP_PIXELS,jn),B.pixelStorei(B.UNPACK_SKIP_ROWS,gr),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Sn),xe===0&&q.generateMipmaps&&B.generateMipmap(Vt),We.unbindTexture()},this.copyTextureToTexture3D=function(E,q,ne=null,Z=null,W=0){return Rl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,q,ne,Z,W)},this.initRenderTarget=function(E){Ve.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),We.unbindTexture()},this.resetState=function(){O=0,z=0,K=null,We.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),r.unpackColorSpace=yt._getUnpackColorSpace()}}const rw=()=>{const i=Xt.useRef(null),[e,r]=Xt.useState(!1),[a,o]=Xt.useState({x:0,y:0});Xt.useEffect(()=>{if(!i.current)return;const d=new u0,h=new $r(75,i.current.clientWidth/i.current.clientHeight,.1,1e3);h.position.z=5;const p=new tw({alpha:!0,antialias:!0});p.setSize(i.current.clientWidth,i.current.clientHeight),p.setClearColor(0,0),i.current.appendChild(p.domElement);const m=()=>{i.current&&(h.aspect=i.current.clientWidth/i.current.clientHeight,h.updateProjectionMatrix(),p.setSize(i.current.clientWidth,i.current.clientHeight))};window.addEventListener("resize",m);const v=j=>{o({x:j.clientX/window.innerWidth*2-1,y:-(j.clientY/window.innerHeight)*2+1})};window.addEventListener("mousemove",v);const x=new Ps(2,32,32),_=new ja({color:16777215,wireframe:!0,transparent:!0,opacity:.6}),b=new Nr(x,_);d.add(b);const M=new Ps(1.7,32,32),T=new ja({color:16777215,transparent:!0,opacity:.1}),y=new Nr(M,T);d.add(y);const g=new Hr,D=1e3,I=new Float32Array(D*3);for(let j=0;j<D*3;j++)I[j]=(Math.random()-.5)*15;g.setAttribute("position",new un(I,3));const A=new $m({size:.02,color:16777215,transparent:!0,opacity:.8}),X=new p0(g,A);d.add(X);const O=[];for(let j=0;j<15;j++){const U=Math.random()*.3+.1,$=new ji(U,U,U),Me=new ja({color:16777215,wireframe:!0,transparent:!0,opacity:.7}),Y=new Nr($,Me);Y.position.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),Y.rotationSpeed={x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01},d.add(Y),O.push(Y)}const z=new Km({color:16777215,transparent:!0,opacity:.2}),K=[];for(let j=0;j<O.length-1;j++){const U=[];U.push(O[j].position),U.push(O[j+1].position);const $=new Hr().setFromPoints(U),Me=new f0($,z);d.add(Me),K.push(Me)}const C=(j,U,$,Me)=>{const Y=new Vd(j,j+.05,U),ue=new ja({color:16777215,side:_n,transparent:!0,opacity:$,wireframe:!0}),be=new Nr(Y,ue);return Me==="x"?be.rotation.x=Math.PI/2:Me==="z"&&(be.rotation.z=Math.PI/2),d.add(be),be},R=C(3,64,.3,"x"),H=C(3.5,64,.2,"y"),se=C(4,64,.1,"z"),ae=(j,U)=>{const $=[],Me=j.geometry.parameters.innerRadius;for(let Y=0;Y<U;Y++){const ue=Y/U*Math.PI*2,be=new Ps(.08,16,16),_e=new ja({color:16777215,transparent:!0,opacity:.8}),Te=new Nr(be,_e);j.rotation.x===Math.PI/2?Te.position.set(Math.cos(ue)*Me,0,Math.sin(ue)*Me):j.rotation.z===Math.PI/2?Te.position.set(0,Math.cos(ue)*Me,Math.sin(ue)*Me):Te.position.set(Math.cos(ue)*Me,Math.sin(ue)*Me,0),d.add(Te),$.push(Te)}return $},ce=ae(R,8),me=ae(H,6),le=ae(se,10),fe=[...ce,...me,...le];let k=0;const oe=()=>{requestAnimationFrame(oe),k+=.01,b.rotation.x+=.001,b.rotation.y+=.002,b.rotation.x+=a.y*.001,b.rotation.y+=a.x*.001,y.rotation.x=b.rotation.x,y.rotation.y=b.rotation.y,y.scale.set(1+Math.sin(k*.5)*.05,1+Math.sin(k*.5)*.05,1+Math.sin(k*.5)*.05),X.rotation.x+=5e-4,X.rotation.y+=5e-4,O.forEach(j=>{j.rotation.x+=j.rotationSpeed.x,j.rotation.y+=j.rotationSpeed.y,j.rotation.z+=j.rotationSpeed.z,j.position.y+=Math.sin(k+j.position.x)*.002}),K.forEach((j,U)=>{const $=[];$.push(O[U].position),$.push(O[U+1].position),j.geometry.setFromPoints($),j.geometry.attributes.position.needsUpdate=!0}),R.rotation.z+=.001,H.rotation.x+=.0015,se.rotation.y+=.001,ce.forEach((j,U)=>{const $=U/ce.length*Math.PI*2+k*.1,Me=R.geometry.parameters.innerRadius;j.position.x=Math.cos($)*Me,j.position.z=Math.sin($)*Me;const Y=1+Math.sin(k*2+U)*.3;j.scale.set(Y,Y,Y)}),me.forEach((j,U)=>{const $=U/me.length*Math.PI*2+k*.15,Me=H.geometry.parameters.innerRadius;j.position.x=Math.cos($)*Me,j.position.y=Math.sin($)*Me;const Y=1+Math.sin(k*2+U+1)*.3;j.scale.set(Y,Y,Y)}),le.forEach((j,U)=>{const $=U/le.length*Math.PI*2+k*.12,Me=se.geometry.parameters.innerRadius;j.position.y=Math.cos($)*Me,j.position.z=Math.sin($)*Me;const Y=1+Math.sin(k*2+U+2)*.3;j.scale.set(Y,Y,Y)}),fe.forEach((j,U)=>{const $=1+.2*Math.sin(k*3+U*.5);j.scale.set($,$,$)}),p.render(d,h)};return oe(),r(!0),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",v),i.current&&i.current.removeChild(p.domElement),x.dispose(),_.dispose(),M.dispose(),T.dispose(),g.dispose(),A.dispose(),O.forEach(j=>{j.geometry.dispose(),j.material.dispose()}),K.forEach(j=>{j.geometry.dispose(),j.material.dispose()}),[R,H,se].forEach(j=>{j.geometry.dispose(),j.material.dispose()}),fe.forEach(j=>{j.geometry.dispose(),j.material.dispose()})}},[]);const c=()=>{const d=document.getElementById("framework");d&&d.scrollIntoView({behavior:"smooth"})};return P.jsxs("section",{id:"hero",className:"h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden",children:[P.jsx("div",{ref:i,className:"absolute inset-0 w-full h-full z-0"}),P.jsxs("div",{className:"z-10 text-center px-4 relative",children:[P.jsx("div",{className:"glitch-container mb-6",children:P.jsx("h1",{className:"text-5xl md:text-7xl font-bold text-white font-space glitch-text",children:"AI Agent Entrepreneurship Framework"})}),P.jsx("p",{className:"text-xl md:text-2xl text-white mb-12 font-inter max-w-3xl mx-auto animate-fade-in-delay",children:"Build, monetize, and scale AI agents that solve real business problems"}),P.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center gap-6",children:[P.jsxs("button",{onClick:c,className:"border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 px-8 py-4 text-lg font-medium rounded-none animate-fade-in-delay-2 relative overflow-hidden group",children:[P.jsx("span",{className:"relative z-10",children:"Explore the Framework"}),P.jsx("span",{className:"absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"})]}),P.jsx("button",{className:"border-2 border-white/50 text-white/80 hover:border-white hover:text-white transition-colors duration-300 px-8 py-4 text-lg font-medium rounded-none animate-fade-in-delay-3 relative overflow-hidden",children:P.jsx("span",{className:"relative z-10",children:"Watch Demo"})})]})]}),P.jsx("div",{className:"absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white opacity-50 animate-corner-pulse"}),P.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-white opacity-50 animate-corner-pulse delay-300"}),P.jsx("div",{className:"absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-white opacity-50 animate-corner-pulse delay-600"}),P.jsx("div",{className:"absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white opacity-50 animate-corner-pulse delay-900"}),P.jsxs("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce",children:[P.jsx("span",{className:"text-white/50 text-sm mb-2",children:"Scroll Down"}),P.jsx("svg",{className:"w-6 h-6 text-white/50",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]}),!e&&P.jsx("div",{className:"absolute inset-0 bg-black flex items-center justify-center",children:P.jsxs("div",{className:"flex space-x-2",children:[P.jsx("div",{className:"w-3 h-3 bg-white rounded-full animate-pulse"}),P.jsx("div",{className:"w-3 h-3 bg-white rounded-full animate-pulse delay-150"}),P.jsx("div",{className:"w-3 h-3 bg-white rounded-full animate-pulse delay-300"})]})}),P.jsx("div",{className:"absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse-slow"}),P.jsx("div",{className:"absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse-slow delay-300"}),P.jsx("div",{className:"absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse-slow delay-600"}),P.jsx("div",{className:"absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse-slow delay-900"}),P.jsx("div",{className:"absolute inset-0 grid-overlay opacity-10"}),P.jsx("style",{children:`
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
      `})]})},nw=()=>{const[i,e]=Xt.useState(0),[r,a]=Xt.useState(!1);Xt.useEffect(()=>{const c=new IntersectionObserver(([h])=>{a(h.isIntersecting)},{threshold:.3}),d=document.getElementById("framework");return d&&c.observe(d),()=>{d&&c.unobserve(d)}},[]);const o=[{title:"Industry Identification",description:"Systematically identify high-potential industries and niches for AI agent deployment based on market size, pain points, and technological feasibility.",features:["Market opportunity assessment framework","Industry-specific pain point analysis","AI agent applicability scoring","Competitive landscape mapping"]},{title:"Client Interaction",description:"Develop structured approaches for engaging with potential clients, understanding their needs, and translating business problems into AI agent solutions.",features:["Discovery session templates","Needs assessment questionnaires","Problem-to-solution mapping tools","Value proposition frameworks"]},{title:"Agent Architecture",description:"Design AI agent architectures tailored to specific industry requirements, balancing capabilities, complexity, and implementation feasibility.",features:["Agent type selection guide","Capability configuration templates","Integration requirement planning","Scalability assessment tools"]},{title:"Monetization Models",description:"Create value-based pricing strategies that align with the impact and complexity of your AI agent solutions across different industries.",features:["Pricing model selection framework","ROI calculation templates","Subscription tier design","Value-based pricing guides"]},{title:"Go-to-Market Strategy",description:"Develop comprehensive strategies for launching, promoting, and scaling your AI agent solutions across target markets.",features:["Channel strategy development","Marketing message frameworks","Sales enablement toolkits","Partnership development guides"]}];return P.jsxs("section",{id:"framework",className:"min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-4",children:[P.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-12 font-space text-center",children:"Framework Overview"}),P.jsxs("div",{className:"w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12",children:[P.jsxs("div",{className:"relative h-[400px] border border-white/20 rounded flex items-center justify-center overflow-hidden",children:[P.jsx("div",{className:`framework-3d-container ${r?"animate":""}`,children:P.jsxs("div",{className:"framework-rings",children:[P.jsx("div",{className:"ring ring-outer"}),P.jsx("div",{className:"ring ring-middle"}),P.jsx("div",{className:"ring ring-inner"}),o.map((c,d)=>P.jsx("div",{className:`ring-node ${d===i?"active":""}`,style:{transform:`rotate(${d*(360/o.length)}deg) translateX(150px)`},onClick:()=>e(d),children:P.jsx("div",{className:"node-indicator"})},d))]})}),P.jsx("style",{children:`
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
          `})]}),P.jsxs("div",{className:"bg-black/50 border border-white/10 p-8 rounded-lg",children:[P.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 font-space",children:o[i].title}),P.jsx("p",{className:"text-lg text-white/80 mb-8",children:o[i].description}),P.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Components"}),P.jsx("ul",{className:"space-y-2",children:o[i].features.map((c,d)=>P.jsxs("li",{className:"flex items-start",children:[P.jsx("div",{className:"w-2 h-2 border border-white mt-2 mr-3"}),P.jsx("span",{className:"text-white/80",children:c})]},d))}),P.jsx("div",{className:"mt-8 pt-8 border-t border-white/10",children:P.jsx("button",{className:"border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-2",onClick:()=>e((i+1)%o.length),children:"Next Component"})})]})]})]})},aw=()=>{const[i,e]=Xt.useState(0),r=[{name:"Healthcare",description:"AI agents for patient monitoring, diagnostic assistance, treatment recommendation, and administrative automation.",metrics:{marketSize:"$45B",growthRate:"24%",adoptionRate:"Medium",regulatoryComplexity:"High"},useCases:["Personalized treatment recommendation agents","Medical imaging analysis assistants","Patient engagement and monitoring bots","Administrative workflow automation"]},{name:"Finance",description:"AI agents for fraud detection, investment advisory, risk assessment, and customer service automation.",metrics:{marketSize:"$62B",growthRate:"28%",adoptionRate:"High",regulatoryComplexity:"High"},useCases:["Algorithmic trading assistants","Personalized financial advisors","Fraud detection and prevention systems","Automated compliance monitoring"]},{name:"Retail",description:"AI agents for inventory management, personalized recommendations, demand forecasting, and customer engagement.",metrics:{marketSize:"$38B",growthRate:"22%",adoptionRate:"Medium-High",regulatoryComplexity:"Low"},useCases:["Personalized shopping assistants","Inventory optimization agents","Dynamic pricing systems","Customer service automation"]},{name:"Manufacturing",description:"AI agents for predictive maintenance, quality control, supply chain optimization, and production scheduling.",metrics:{marketSize:"$52B",growthRate:"19%",adoptionRate:"Medium",regulatoryComplexity:"Medium"},useCases:["Predictive maintenance systems","Quality control automation","Supply chain optimization","Production scheduling assistants"]},{name:"Real Estate",description:"AI agents for property valuation, market analysis, client matching, and transaction management.",metrics:{marketSize:"$18B",growthRate:"17%",adoptionRate:"Low-Medium",regulatoryComplexity:"Medium"},useCases:["Property valuation assistants","Client-property matching agents","Market analysis systems","Transaction management automation"]}];return P.jsxs("section",{id:"industries",className:"min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-4",children:[P.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-12 font-space text-center",children:"Industry Opportunity Matrix"}),P.jsxs("div",{className:"w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12",children:[P.jsxs("div",{className:"space-y-4",children:[P.jsx("h3",{className:"text-2xl font-bold text-white mb-6 font-space",children:"Select Industry"}),r.map((a,o)=>P.jsx("button",{className:`w-full text-left p-4 border transition-colors duration-300 ${o===i?"border-white bg-white/10 text-white":"border-white/30 hover:border-white/60 text-white/70 hover:text-white/90"}`,onClick:()=>e(o),children:P.jsx("span",{className:"text-lg font-medium",children:a.name})},o))]}),P.jsxs("div",{className:"bg-black/50 border border-white/10 p-8 rounded-lg",children:[P.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 font-space",children:r[i].name}),P.jsx("p",{className:"text-lg text-white/80 mb-8",children:r[i].description}),P.jsx("div",{className:"grid grid-cols-2 gap-4 mb-8",children:Object.entries(r[i].metrics).map(([a,o])=>P.jsxs("div",{className:"border border-white/20 p-4",children:[P.jsx("div",{className:"text-white/60 text-sm mb-1",children:a.replace(/([A-Z])/g," $1").trim()}),P.jsx("div",{className:"text-white text-xl font-bold",children:o})]},a))}),P.jsxs("div",{className:"mb-8",children:[P.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Use Cases"}),P.jsx("ul",{className:"space-y-2",children:r[i].useCases.map((a,o)=>P.jsxs("li",{className:"flex items-start",children:[P.jsx("div",{className:"w-2 h-2 border border-white mt-2 mr-3"}),P.jsx("span",{className:"text-white/80",children:a})]},o))})]}),P.jsxs("div",{className:"relative h-64 border border-white/20 rounded flex items-center justify-center overflow-hidden",children:[P.jsx("div",{className:"industry-3d-container",children:P.jsxs("div",{className:"industry-3d-cube",children:[P.jsx("div",{className:"cube-face cube-face-front"}),P.jsx("div",{className:"cube-face cube-face-back"}),P.jsx("div",{className:"cube-face cube-face-right"}),P.jsx("div",{className:"cube-face cube-face-left"}),P.jsx("div",{className:"cube-face cube-face-top"}),P.jsx("div",{className:"cube-face cube-face-bottom"})]})}),P.jsx("style",{children:`
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
            `})]})]})]})]})},iw=()=>{const[i,e]=Xt.useState(0),r=[{name:"Usage-Based Pricing",description:"Charge clients based on the volume of AI agent interactions, API calls, or processed data. Ideal for services with variable usage patterns.",benefits:["Scales naturally with client usage","Lower barrier to entry for new clients","Transparent cost structure","Predictable unit economics"],industries:["Retail","Customer Service","Marketing","Data Processing"],implementation:"Start with a freemium model offering limited free usage, then charge for additional usage tiers. Consider volume discounts for enterprise clients."},{name:"Outcome-Based Pricing",description:"Align pricing with measurable business outcomes delivered by your AI agents. Charge based on cost savings, revenue generation, or efficiency improvements.",benefits:["Directly ties pricing to delivered value","Creates shared success incentives","Differentiates from commodity AI services","Justifies premium pricing"],industries:["Healthcare","Finance","Manufacturing","Sales"],implementation:"Define clear, measurable KPIs with clients. Establish baseline metrics before deployment, then track improvements. Consider a base fee plus performance bonus structure."},{name:"Subscription-Based Pricing",description:"Offer tiered subscription plans with different feature sets, usage limits, and service levels. Provides predictable recurring revenue.",benefits:["Predictable recurring revenue","Simplified financial forecasting","Encourages long-term client relationships","Easier to communicate and market"],industries:["Education","Real Estate","Legal","Professional Services"],implementation:"Create 3-4 tiers with clear value differentiation. Consider annual discounts to improve cash flow and reduce churn. Add usage caps to protect margins."},{name:"Hybrid Pricing Models",description:"Combine multiple pricing approaches to balance predictability with value-based pricing. For example, base subscription plus outcome-based bonuses.",benefits:["Combines advantages of multiple models","Adaptable to different client segments","Balances guaranteed and performance-based revenue","Provides multiple growth levers"],industries:["Enterprise Software","Logistics","Healthcare","Financial Services"],implementation:"Start with a base subscription fee for access, add usage limits or outcome-based components. Consider industry-specific customizations based on value drivers."}];return P.jsxs("section",{id:"monetization",className:"min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-4",children:[P.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-12 font-space text-center",children:"Monetization Models"}),P.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[P.jsx("div",{className:"flex flex-wrap justify-center mb-12",children:r.map((a,o)=>P.jsx("button",{className:`px-6 py-3 border-t-2 transition-colors duration-300 ${o===i?"border-white text-white":"border-white/30 text-white/60 hover:text-white/90 hover:border-white/60"}`,onClick:()=>e(o),children:a.name},o))}),P.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[P.jsxs("div",{className:"bg-black/50 border border-white/10 p-8 rounded-lg",children:[P.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 font-space",children:r[i].name}),P.jsx("p",{className:"text-lg text-white/80 mb-8",children:r[i].description}),P.jsxs("div",{className:"mb-8",children:[P.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Benefits"}),P.jsx("ul",{className:"space-y-2",children:r[i].benefits.map((a,o)=>P.jsxs("li",{className:"flex items-start",children:[P.jsx("div",{className:"w-2 h-2 border border-white mt-2 mr-3"}),P.jsx("span",{className:"text-white/80",children:a})]},o))})]}),P.jsxs("div",{className:"mb-8",children:[P.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Best For"}),P.jsx("div",{className:"flex flex-wrap gap-2",children:r[i].industries.map((a,o)=>P.jsx("span",{className:"px-3 py-1 border border-white/30 text-white/80 text-sm",children:a},o))})]}),P.jsxs("div",{children:[P.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Implementation Strategy"}),P.jsx("p",{className:"text-white/80",children:r[i].implementation})]})]}),P.jsxs("div",{className:"relative h-[400px] border border-white/20 rounded flex items-center justify-center overflow-hidden",children:[P.jsx("div",{className:"monetization-3d-container",children:P.jsxs("div",{className:"pricing-model",children:[P.jsx("div",{className:"pricing-ring ring-1"}),P.jsx("div",{className:"pricing-ring ring-2"}),P.jsx("div",{className:"pricing-ring ring-3"}),P.jsx("div",{className:"pricing-core"}),P.jsx("div",{className:"pricing-connector"})]})}),P.jsx("style",{children:`
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
            `})]})]})]})]})},sw=()=>{const[i,e]=Xt.useState(0),r=[{name:"Market Positioning",description:"Establish your AI agent's unique value proposition and competitive differentiation in the market.",steps:["Identify your target market segments and their specific pain points","Analyze competitive landscape and identify gaps or opportunities","Develop clear messaging that highlights your AI agent's unique benefits","Create positioning statements for each industry vertical"],keyMetrics:["Brand awareness","Competitive win rate","Market share","Positioning clarity score"]},{name:"Client Acquisition",description:"Develop multi-channel strategies to attract and convert potential clients for your AI agent solutions.",steps:["Build industry-specific landing pages with clear value propositions","Implement content marketing focused on AI agent use cases and ROI","Develop demonstration videos and interactive product tours","Create referral programs and partnership networks"],keyMetrics:["Customer acquisition cost (CAC)","Conversion rate","Lead quality score","Channel effectiveness"]},{name:"Proof of Concept",description:"Create structured approaches for demonstrating AI agent value through limited-scope implementations.",steps:["Develop standardized POC frameworks for each industry","Create clear success metrics and evaluation criteria","Build showcase examples with documented results","Establish POC-to-production migration pathways"],keyMetrics:["POC conversion rate","Time to value","Success criteria achievement","Client satisfaction score"]},{name:"Scaling Strategy",description:"Expand your AI agent business across clients, industries, and geographies with systematic approaches.",steps:["Develop client expansion playbooks (land and expand)","Create cross-industry adaptation frameworks","Build geographic expansion models","Establish strategic partnership networks"],keyMetrics:["Client retention rate","Expansion revenue","Cross-industry adoption","Partnership revenue"]}];return P.jsxs("section",{id:"go-to-market",className:"min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-4",children:[P.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-12 font-space text-center",children:"Go-to-Market Strategy"}),P.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[P.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-12",children:r.map((a,o)=>P.jsx("button",{className:`p-4 border transition-colors duration-300 ${o===i?"border-white bg-white/10 text-white":"border-white/30 hover:border-white/60 text-white/70 hover:text-white/90"}`,onClick:()=>e(o),children:P.jsx("span",{className:"text-lg font-medium",children:a.name})},o))}),P.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[P.jsxs("div",{className:"bg-black/50 border border-white/10 p-8 rounded-lg",children:[P.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 font-space",children:r[i].name}),P.jsx("p",{className:"text-lg text-white/80 mb-8",children:r[i].description}),P.jsxs("div",{className:"mb-8",children:[P.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Implementation Steps"}),P.jsx("ol",{className:"space-y-4",children:r[i].steps.map((a,o)=>P.jsxs("li",{className:"flex items-start",children:[P.jsx("div",{className:"flex-shrink-0 w-6 h-6 border border-white flex items-center justify-center mr-3",children:P.jsx("span",{className:"text-white text-sm",children:o+1})}),P.jsx("span",{className:"text-white/80",children:a})]},o))})]}),P.jsxs("div",{children:[P.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Metrics"}),P.jsx("div",{className:"grid grid-cols-2 gap-4",children:r[i].keyMetrics.map((a,o)=>P.jsx("div",{className:"border border-white/20 p-3",children:P.jsx("span",{className:"text-white/80",children:a})},o))})]})]}),P.jsxs("div",{className:"relative h-[400px] border border-white/20 rounded flex items-center justify-center overflow-hidden",children:[P.jsx("div",{className:"gtm-3d-container",children:P.jsxs("div",{className:"gtm-3d-model",children:[P.jsxs("div",{className:"gtm-pyramid",children:[P.jsx("div",{className:"pyramid-face pyramid-face-front"}),P.jsx("div",{className:"pyramid-face pyramid-face-right"}),P.jsx("div",{className:"pyramid-face pyramid-face-left"}),P.jsx("div",{className:"pyramid-face pyramid-face-bottom"})]}),P.jsx("div",{className:"gtm-nodes",children:[...Array(5)].map((a,o)=>P.jsx("div",{className:"gtm-node",style:{animationDelay:`${o*.5}s`,left:`${20+o*15}%`,top:`${30+o%3*15}%`}},o))}),P.jsx("div",{className:"gtm-connections",children:[...Array(4)].map((a,o)=>P.jsx("div",{className:"gtm-connection",style:{width:`${100+o*20}px`,transform:`rotate(${o*45}deg)`,animationDelay:`${o*.3}s`}},o))})]})}),P.jsx("style",{children:`
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
            `})]})]})]})]})},ow=()=>{const[i,e]=Xt.useState(0),r=[{name:"Phase 1: Discovery & Planning",description:"Establish the foundation for your AI agent business with thorough research and strategic planning.",activities:["Conduct industry and market analysis to identify high-potential opportunities","Define target client personas and their specific pain points","Develop initial AI agent architecture concepts and capabilities","Create preliminary business model and monetization strategy","Establish success metrics and KPIs for each business objective"],timeline:"1-2 months",budget:"10-15% of total investment",deliverables:["Market opportunity assessment","Client persona profiles","Initial architecture blueprint","Business model canvas"]},{name:"Phase 2: Development & Testing",description:"Build and refine your AI agent solutions with iterative development and rigorous testing.",activities:["Develop minimum viable product (MVP) versions of your AI agents","Conduct alpha testing with internal stakeholders","Refine agent capabilities based on feedback","Implement security and compliance measures","Prepare documentation and training materials"],timeline:"2-4 months",budget:"30-40% of total investment",deliverables:["MVP AI agent implementations","Testing reports","Security compliance documentation","User guides and training materials"]},{name:"Phase 3: Pilot Deployment",description:"Validate your AI agent solutions with real clients in controlled environments to gather feedback and prove value.",activities:["Select pilot clients across target industries","Deploy AI agents in limited-scope environments","Collect performance data and user feedback","Measure ROI and business impact","Refine solutions based on real-world usage"],timeline:"2-3 months",budget:"15-20% of total investment",deliverables:["Pilot implementation reports","ROI analysis","Client testimonials","Product refinement roadmap"]},{name:"Phase 4: Market Launch",description:"Introduce your AI agent solutions to the broader market with comprehensive go-to-market activities.",activities:["Finalize pricing and packaging strategies","Develop marketing and sales collateral","Train sales and customer success teams","Launch targeted marketing campaigns","Implement client onboarding processes"],timeline:"1-2 months",budget:"15-20% of total investment",deliverables:["Marketing and sales materials","Pricing guides","Sales enablement toolkit","Client onboarding playbook"]},{name:"Phase 5: Scale & Optimize",description:"Expand your AI agent business across clients, industries, and geographies while continuously improving performance.",activities:["Implement client expansion strategies","Adapt solutions for new industries or use cases","Optimize agent performance and capabilities","Develop strategic partnerships and integrations","Establish continuous improvement processes"],timeline:"Ongoing",budget:"10-15% of total investment",deliverables:["Expansion playbooks","Performance optimization reports","Partnership agreements","Product roadmap updates"]}];return P.jsxs("section",{id:"implementation",className:"min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 px-4",children:[P.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-12 font-space text-center",children:"Implementation Roadmap"}),P.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[P.jsxs("div",{className:"flex justify-between mb-16 relative",children:[P.jsx("div",{className:"absolute top-1/2 left-0 w-full h-px bg-white/30 -translate-y-1/2 z-0"}),P.jsx("div",{className:"absolute top-1/2 left-0 h-px bg-white z-0 transition-all duration-500",style:{width:`${i/(r.length-1)*100}%`}}),r.map((a,o)=>P.jsxs("button",{className:`w-8 h-8 rounded-full border-2 z-10 transition-colors duration-300 flex items-center justify-center relative ${o<=i?"bg-white border-white":"bg-black border-white/50"}`,onClick:()=>e(o),children:[P.jsx("span",{className:`text-xs font-bold ${o<=i?"text-black":"text-white"}`,children:o+1}),P.jsxs("span",{className:"absolute -bottom-8 text-white text-sm whitespace-nowrap max-w-[100px] text-center",children:["Phase ",o+1]})]},o))]}),P.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[P.jsxs("div",{className:"bg-black/50 border border-white/10 p-8 rounded-lg",children:[P.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4 font-space",children:r[i].name}),P.jsx("p",{className:"text-lg text-white/80 mb-8",children:r[i].description}),P.jsxs("div",{className:"mb-8",children:[P.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Activities"}),P.jsx("ul",{className:"space-y-2",children:r[i].activities.map((a,o)=>P.jsxs("li",{className:"flex items-start",children:[P.jsx("div",{className:"w-2 h-2 border border-white mt-2 mr-3"}),P.jsx("span",{className:"text-white/80",children:a})]},o))})]}),P.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[P.jsxs("div",{className:"border border-white/20 p-4",children:[P.jsx("div",{className:"text-white/60 text-sm mb-1",children:"Timeline"}),P.jsx("div",{className:"text-white text-xl font-bold",children:r[i].timeline})]}),P.jsxs("div",{className:"border border-white/20 p-4",children:[P.jsx("div",{className:"text-white/60 text-sm mb-1",children:"Budget Allocation"}),P.jsx("div",{className:"text-white text-xl font-bold",children:r[i].budget})]})]}),P.jsxs("div",{children:[P.jsx("h4",{className:"text-xl font-bold text-white mb-4",children:"Key Deliverables"}),P.jsx("div",{className:"grid grid-cols-2 gap-4",children:r[i].deliverables.map((a,o)=>P.jsx("div",{className:"border border-white/20 p-3",children:P.jsx("span",{className:"text-white/80",children:a})},o))})]})]}),P.jsxs("div",{className:"relative h-[400px] border border-white/20 rounded flex items-center justify-center overflow-hidden",children:[P.jsx("div",{className:"implementation-3d-container",children:P.jsxs("div",{className:"implementation-3d-model",children:[P.jsx("div",{className:"timeline-track"}),[...Array(5)].map((a,o)=>P.jsxs("div",{className:`timeline-node ${o===i?"active":""} ${o<i?"completed":""}`,style:{left:`${o*25}%`},children:[P.jsx("div",{className:"node-indicator"}),P.jsx("div",{className:"node-connector"})]},o)),P.jsx("div",{className:"timeline-progress",style:{width:`${i*25}%`}}),P.jsx("div",{className:"floating-elements",children:[...Array(8)].map((a,o)=>P.jsx("div",{className:"floating-element",style:{top:`${20+o%4*15}%`,left:`${10+o%5*20}%`,width:`${10+o%3*5}px`,height:`${10+o%3*5}px`,animationDelay:`${o*.5}s`}},o))})]})}),P.jsx("style",{children:`
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
            `})]})]})]})]})},lw=()=>{const[i,e]=Xt.useState(!1),[r,a]=Xt.useState([{sender:"bot",text:"Hello! I'm your AI Agent Framework assistant. How can I help you today?"}]),[o,c]=Xt.useState(""),[d,h]=Xt.useState(!1),p=()=>{e(!i)},m=x=>{c(x.target.value)},v=x=>{if(x.preventDefault(),!o.trim())return;const _=[...r,{sender:"user",text:o}];a(_),c(""),h(!0),setTimeout(()=>{const b={framework:"The AI Agent Entrepreneurship Framework provides a comprehensive approach to building, monetizing, and scaling AI agent businesses that solve real-world problems across industries.",industries:"Our framework covers multiple industries including Healthcare, Finance, Retail, Manufacturing, and Real Estate, each with specific AI agent applications and opportunities.",monetization:"We offer several monetization models including Usage-Based, Outcome-Based, Subscription-Based, and Hybrid approaches, each optimized for different business scenarios.",implementation:"The implementation roadmap consists of 5 phases: Discovery & Planning, Development & Testing, Pilot Deployment, Market Launch, and Scale & Optimize.",contact:"You can reach our team at contact@aiagentframework.com or schedule a consultation through the website.",pricing:"Pricing varies based on industry, agent complexity, and implementation scope. We recommend scheduling a consultation to discuss your specific needs.",demo:"We offer personalized demos of our AI agent solutions. Please schedule a consultation through the website to arrange a demonstration.",help:"I can provide information about our framework, industries we serve, monetization models, implementation process, or answer other questions about AI agents."};let M="Thank you for your message. Our team can provide more detailed information about the AI Agent Entrepreneurship Framework. Is there something specific you'd like to know about?";const T=o.toLowerCase();for(const[y,g]of Object.entries(b))if(T.includes(y)){M=g;break}a([..._,{sender:"bot",text:M}]),h(!1)},1500)};return Xt.useEffect(()=>{const x=document.getElementById("chat-messages");x&&(x.scrollTop=x.scrollHeight)},[r]),P.jsxs("div",{className:"fixed bottom-6 right-6 z-50",children:[P.jsx("button",{onClick:p,className:"w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-white/90 transition-colors",children:i?P.jsx("span",{className:"text-2xl",children:"×"}):P.jsxs("div",{className:"w-6 h-6 relative",children:[P.jsx("div",{className:"absolute top-0 left-0 w-6 h-6 border-2 border-black"}),P.jsx("div",{className:"absolute top-1 left-1 w-4 h-4 bg-black"})]})}),i&&P.jsxs("div",{className:"absolute bottom-16 right-0 w-80 md:w-96 bg-black border border-white/20 rounded-lg shadow-xl overflow-hidden",children:[P.jsx("div",{className:"bg-white/10 p-4 border-b border-white/10",children:P.jsxs("div",{className:"flex items-center",children:[P.jsxs("div",{className:"w-8 h-8 mr-3 relative",children:[P.jsx("div",{className:"absolute top-0 left-0 w-8 h-8 border-2 border-white"}),P.jsx("div",{className:"absolute top-1 left-1 w-6 h-6 bg-white/30"})]}),P.jsxs("div",{children:[P.jsx("h3",{className:"text-white font-bold",children:"AI Agent Assistant"}),P.jsx("p",{className:"text-white/60 text-sm",children:"Ask me about the framework"})]})]})}),P.jsxs("div",{id:"chat-messages",className:"p-4 h-80 overflow-y-auto",children:[r.map((x,_)=>P.jsx("div",{className:`mb-4 flex ${x.sender==="user"?"justify-end":"justify-start"}`,children:P.jsx("div",{className:`max-w-[80%] p-3 rounded-lg ${x.sender==="user"?"bg-white text-black":"bg-white/10 text-white border border-white/20"}`,children:x.text})},_)),d&&P.jsx("div",{className:"mb-4 flex justify-start",children:P.jsx("div",{className:"bg-white/10 text-white border border-white/20 p-3 rounded-lg",children:P.jsxs("div",{className:"flex space-x-2",children:[P.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-bounce",style:{animationDelay:"0ms"}}),P.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-bounce",style:{animationDelay:"300ms"}}),P.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-bounce",style:{animationDelay:"600ms"}})]})})})]}),P.jsx("form",{onSubmit:v,className:"p-4 border-t border-white/10",children:P.jsxs("div",{className:"flex",children:[P.jsx("input",{type:"text",value:o,onChange:m,placeholder:"Type your message...",className:"flex-1 bg-white/5 border border-white/20 text-white p-2 rounded-l-lg focus:outline-none focus:border-white/50"}),P.jsx("button",{type:"submit",className:"bg-white text-black px-4 rounded-r-lg hover:bg-white/90 transition-colors",children:"Send"})]})})]})]})};function cw(){return P.jsxs("div",{className:"bg-black text-white min-h-screen",children:[P.jsx(Xv,{}),P.jsxs("main",{children:[P.jsx(rw,{}),P.jsx(nw,{}),P.jsx(aw,{}),P.jsx(iw,{}),P.jsx(sw,{}),P.jsx(ow,{})]}),P.jsx("footer",{className:"bg-black border-t border-white/10 py-12 px-4",children:P.jsxs("div",{className:"max-w-7xl mx-auto",children:[P.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[P.jsxs("div",{children:[P.jsx("h3",{className:"text-white text-xl font-bold mb-4 font-space",children:"AI Agent Entrepreneurship Framework"}),P.jsx("p",{className:"text-white/70",children:"A comprehensive approach to building, monetizing, and scaling AI agent businesses."})]}),P.jsxs("div",{children:[P.jsx("h4",{className:"text-white text-lg font-bold mb-4 font-space",children:"Framework Sections"}),P.jsx("ul",{className:"space-y-2",children:["Framework","Industries","Monetization","Go-to-Market","Implementation"].map(i=>P.jsx("li",{children:P.jsx("a",{href:`#${i.toLowerCase().replace(" ","-")}`,className:"text-white/70 hover:text-white transition-colors",children:i})},i))})]}),P.jsxs("div",{children:[P.jsx("h4",{className:"text-white text-lg font-bold mb-4 font-space",children:"Resources"}),P.jsx("ul",{className:"space-y-2",children:["Documentation","Case Studies","Implementation Guide","Contact"].map(i=>P.jsx("li",{children:P.jsx("a",{href:"#",className:"text-white/70 hover:text-white transition-colors",children:i})},i))})]})]}),P.jsx("div",{className:"h-px w-full bg-white/10 my-8"}),P.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[P.jsxs("p",{className:"text-white/50 text-sm",children:["© ",new Date().getFullYear()," AI Agent Entrepreneurship Framework. All rights reserved."]}),P.jsx("div",{className:"flex space-x-4 mt-4 md:mt-0",children:["Twitter","LinkedIn","GitHub"].map(i=>P.jsx("a",{href:"#",className:"text-white/50 hover:text-white transition-colors",children:i},i))})]})]})}),P.jsx(lw,{})]})}Wv.createRoot(document.getElementById("root")).render(P.jsx(Fv.StrictMode,{children:P.jsx(cw,{})}));
