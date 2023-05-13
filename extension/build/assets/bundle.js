(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function w(){}function q(e){return e()}function A(){return Object.create(null)}function E(e){e.forEach(q)}function T(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function H(e){return Object.keys(e).length===0}const J=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in J;function _(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function S(){return C(" ")}function I(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Q(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function R(e){return Array.from(e.childNodes)}function U(e,t){t=""+t,e.data!==t&&(e.data=t)}let P;function b(e){P=e}const m=[],M=[];let y=[];const j=[],V=Promise.resolve();let L=!1;function X(){L||(L=!0,V.then(W))}function N(e){y.push(e)}const k=new Set;let h=0;function W(){if(h!==0)return;const e=P;do{try{for(;h<m.length;){const t=m[h];h++,b(t),Y(t.$$)}}catch(t){throw m.length=0,h=0,t}for(b(null),m.length=0,h=0;M.length;)M.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];k.has(n)||(k.add(n),n())}y.length=0}while(m.length);for(;j.length;)j.pop()();L=!1,k.clear(),b(e)}function Y(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}function Z(e){const t=[],n=[];y.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),y=t}const v=new Set;let ee;function F(e,t){e&&e.i&&(v.delete(e),e.i(t))}function te(e,t,n,r){if(e&&e.o){if(v.has(e))return;v.add(e),ee.c.push(()=>{v.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const ne=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ne];function re(e){e&&e.c()}function K(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||N(()=>{const c=e.$$.on_mount.map(q).filter(T);e.$$.on_destroy?e.$$.on_destroy.push(...c):E(c),e.$$.on_mount=[]}),i.forEach(N)}function z(e,t){const n=e.$$;n.fragment!==null&&(Z(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){e.$$.dirty[0]===-1&&(m.push(e),X(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(e,t,n,r,o,i,c,a=[-1]){const d=P;b(e);const u=e.$$={fragment:null,ctx:[],props:i,update:w,not_equal:o,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:A(),dirty:a,skip_bound:!1,root:t.target||d.$$.root};c&&c(u.root);let $=!1;if(u.ctx=n?n(e,t.props||{},(f,l,...s)=>{const p=s.length?s[0]:l;return u.ctx&&o(u.ctx[f],u.ctx[f]=p)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](p),$&&oe(e,f)),l}):[],u.update(),$=!0,E(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const f=R(t.target);u.fragment&&u.fragment.l(f),f.forEach(x)}else u.fragment&&u.fragment.c();t.intro&&F(e.$$.fragment),K(e,t.target,t.anchor,t.customElement),W()}b(d)}class G{$destroy(){z(this,1),this.$destroy=w}$on(t,n){if(!T(n))return w;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!H(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ie(e){let t,n,r,o,i;return{c(){t=g("button"),n=C("Count is "),r=C(e[0])},m(c,a){O(c,t,a),_(t,n),_(t,r),o||(i=I(t,"click",e[1]),o=!0)},p(c,[a]){a&1&&U(r,c[0])},i:w,o:w,d(c){c&&x(t),o=!1,i()}}}function ue(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class ce extends G{constructor(t){super(),D(this,t,ue,ie,B,{})}}function se(e){let t;return{c(){t=g("h1"),t.textContent="currently at time travel"},m(n,r){O(n,t,r)},d(n){n&&x(t)}}}function fe(e){let t;return{c(){t=g("h1"),t.textContent="currently at tree"},m(n,r){O(n,t,r)},d(n){n&&x(t)}}}function le(e){let t,n,r,o,i,c,a,d,u;r=new ce({});function $(s,p){if(s[0]==="tree")return fe;if(s[0]==="time")return se}let f=$(e),l=f&&f(e);return{c(){t=g("main"),n=g("div"),re(r.$$.fragment),o=S(),i=g("button"),i.textContent="switch view",c=S(),l&&l.c(),Q(n,"class","card")},m(s,p){O(s,t,p),_(t,n),K(r,n,null),_(t,o),_(t,i),_(t,c),l&&l.m(t,null),a=!0,d||(u=I(i,"click",e[1]),d=!0)},p(s,[p]){f!==(f=$(s))&&(l&&l.d(1),l=f&&f(s),l&&(l.c(),l.m(t,null)))},i(s){a||(F(r.$$.fragment,s),a=!0)},o(s){te(r.$$.fragment,s),a=!1},d(s){s&&x(t),z(r),l&&l.d(),d=!1,u()}}}function ae(e,t,n){let r="tree";return[r,()=>{r==="tree"?n(0,r="time"):n(0,r="tree")}]}class de extends G{constructor(t){super(),D(this,t,ae,le,B,{})}}new de({target:document.getElementById("app")});
