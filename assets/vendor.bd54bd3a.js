function y(){}function H(t){return t()}function I(){return Object.create(null)}function $(t){t.forEach(H)}function J(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function ft(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function X(t){return Object.keys(t).length===0}function N(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t){let e;return N(t,n=>e=n)(),e}function lt(t,e,n){t.$$.on_destroy.push(N(e,n))}function dt(t,e){t.appendChild(e)}function _t(t,e,n){t.insertBefore(e,n||null)}function Y(t){t.parentNode.removeChild(t)}function ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function pt(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function gt(){return K(" ")}function mt(){return K("")}function yt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function $t(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function wt(t,e){t.value=e==null?"":e}function xt(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function kt(t,e,n){t.classList[n?"add":"remove"](e)}let S;function j(t){S=t}function O(){if(!S)throw new Error("Function called outside component initialization");return S}function Et(t){O().$$.on_mount.push(t)}function vt(t){O().$$.after_update.push(t)}function At(t){O().$$.on_destroy.push(t)}const k=[],U=[],q=[],Q=[],tt=Promise.resolve();let B=!1;function et(){B||(B=!0,tt.then(R))}function D(t){q.push(t)}let F=!1;const P=new Set;function R(){if(!F){F=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];j(e),nt(e.$$)}for(j(null),k.length=0;U.length;)U.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];P.has(e)||(P.add(e),e())}q.length=0}while(k.length);for(;Q.length;)Q.pop()();B=!1,F=!1,P.clear()}}function nt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const M=new Set;let b;function St(){b={r:0,c:[],p:b}}function jt(){b.r||$(b.c),b=b.p}function V(t,e){t&&t.i&&(M.delete(t),t.i(e))}function st(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),b.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function qt(t,e){st(t,1,1,()=>{e.delete(t.key)})}function Mt(t,e,n,r,c,h,f,a,o,s,p,_){let d=t.length,i=h.length,l=d;const x={};for(;l--;)x[t[l].key]=l;const E=[],z=new Map,C=new Map;for(l=i;l--;){const u=_(c,h,l),g=n(u);let m=f.get(g);m?r&&m.p(u,e):(m=s(g,u),m.c()),z.set(g,E[l]=m),g in x&&C.set(g,Math.abs(l-x[g]))}const T=new Set,G=new Set;function L(u){V(u,1),u.m(a,p),f.set(u.key,u),p=u.first,i--}for(;d&&i;){const u=E[i-1],g=t[d-1],m=u.key,v=g.key;u===g?(p=u.first,d--,i--):z.has(v)?!f.has(m)||T.has(m)?L(u):G.has(v)?d--:C.get(m)>C.get(v)?(G.add(m),L(u)):(T.add(v),d--):(o(g,f),d--)}for(;d--;){const u=t[d];z.has(u.key)||o(u,f)}for(;i;)L(E[i-1]);return E}function zt(t){t&&t.c()}function rt(t,e,n,r){const{fragment:c,on_mount:h,on_destroy:f,after_update:a}=t.$$;c&&c.m(e,n),r||D(()=>{const o=h.map(H).filter(J);f?f.push(...o):$(o),t.$$.on_mount=[]}),a.forEach(D)}function ot(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(k.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ct(t,e,n,r,c,h,f,a=[-1]){const o=S;j(t);const s=t.$$={fragment:null,ctx:null,props:h,update:y,not_equal:c,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:I(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};f&&f(s.root);let p=!1;if(s.ctx=n?n(t,e.props||{},(_,d,...i)=>{const l=i.length?i[0]:d;return s.ctx&&c(s.ctx[_],s.ctx[_]=l)&&(!s.skip_bound&&s.bound[_]&&s.bound[_](l),p&&ut(t,_)),d}):[],s.update(),p=!0,$(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const _=Z(e.target);s.fragment&&s.fragment.l(_),_.forEach(Y)}else s.fragment&&s.fragment.c();e.intro&&V(t.$$.fragment),rt(t,e.target,e.anchor,e.customElement),R()}j(o)}class Lt{$destroy(){ot(this,1),this.$destroy=y}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const w=[];function it(t,e){return{subscribe:ct(t,e).subscribe}}function ct(t,e=y){let n;const r=new Set;function c(a){if(W(t,a)&&(t=a,n)){const o=!w.length;for(const s of r)s[1](),w.push(s,t);if(o){for(let s=0;s<w.length;s+=2)w[s][0](w[s+1]);w.length=0}}}function h(a){c(a(t))}function f(a,o=y){const s=[a,o];return r.add(s),r.size===1&&(n=e(c)||y),a(t),()=>{r.delete(s),r.size===0&&(n(),n=null)}}return{set:c,update:h,subscribe:f}}function Nt(t,e,n){const r=!Array.isArray(t),c=r?[t]:t,h=e.length<2;return it(n,f=>{let a=!1;const o=[];let s=0,p=y;const _=()=>{if(s)return;p();const i=e(r?o[0]:o,f);h?f(i):p=J(i)?i:y},d=c.map((i,l)=>N(i,x=>{o[l]=x,s&=~(1<<l),a&&_()},()=>{s|=1<<l}));return a=!0,_(),function(){$(d),p()}})}export{vt as A,At as B,xt as C,mt as D,Mt as E,qt as F,ht as G,yt as H,wt as I,J,$ as K,Lt as S,bt as a,ft as b,_t as c,Nt as d,pt as e,dt as f,at as g,Y as h,Ct as i,lt as j,zt as k,st as l,rt as m,y as n,Et as o,ot as p,gt as q,St as r,W as s,V as t,jt as u,K as v,ct as w,$t as x,kt as y,N as z};
