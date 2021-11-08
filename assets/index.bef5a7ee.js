import{d as pt,w as q,g as $t,S as M,i as P,s as E,e as _,a as m,b as gt,c as $,f as d,n as D,h as g,j as z,o as ae,k,m as y,t as p,l as v,p as T,q as w,r as U,u as Y,v as V,x as F,y as R,z as ne,A as vt,B as fe,C as se,D as J,E as ht,F as bt,G as ie,H as x,I as ee,J as te,K as le,L as wt,M as Ne,N as W,O as kt,P as ue,Q as Se,R as yt}from"./vendor.cb9b05e1.js";const Tt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};Tt();function Lt(r){const e=window.getComputedStyle(document.documentElement).fontSize;return r*parseFloat(e)}function qe(r,e,t=!0){const l={eastern:"New_York",central:"Chicago",mountain:"Denver",pacific:"Los_Angeles"},n=e.toLowerCase(),s=n in l,i={hour:"numeric",minute:"2-digit",timeZone:s?`America/${l[n]}`:e,timeZoneName:"short"};return(!t||!s)&&delete i.timeZoneName,new Intl.DateTimeFormat("en-US",i).format(r).replace(/[SD]/g,"")}function Ct(r){const e=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:"America/New_York"}).format(r).replace(":","");return parseInt(e,10)}function It(r){const e=Ct(r);return{isMarketOpen:e>930&&e<1601,showMarket:e>930&&e<1800}}function me(r,e=100){let t;return l=>{t&&clearTimeout(t),t=setTimeout(r,e,l)}}function Nt(r){const e=r.parentElement,t=4*parseInt(window.getComputedStyle(e).paddingLeft,10),l=e.clientWidth-t,n=r.scrollWidth,s=.8;return n*s>l?l/n:s}function St(r){const e=r.children[0],t=Nt(r);e.style.transform=`scaleX(${t})`}const de=q(new Date);setInterval(()=>{de.set(new Date)},1e3);const De=pt(de,r=>It(r)),qt=q(239.19),Dt=q(-92.58),At=q(8.24),_e=q(!0),pe=q("double"),Ae=q(!0),Be=q(!0),Me=q(null),Pe=q("Los Angeles, CA"),Ee=q("pacific"),ze=q("Via | webex by cisco"),Ve=q("Washington, DC"),je=q("eastern"),Re=q(!0),He=q(`"I didn't know it was wrong": Jon Hamm eats Hawaiian Pizza`),Fe=q("Doug H. Tosser | Professor of Pizza at Paisano's Pies"),Oe=q(!0),Ze=q("Breaking News"),We=q(!0),Ue=q("TidBytes");function Bt(r){const{subscribe:e,update:t,set:l}=q(r);return{set:l,subscribe:e,increment:()=>t(n=>n+1),decrement:()=>t(n=>n-1)}}const Ye=q(!1),Xe=Bt(0),Mt=$t(De).showMarket,Je=q(Mt);function Pt(r){let e,t,l,n;return{c(){e=_("div"),t=_("video"),l=_("track"),m(l,"kind","captions"),gt(l.src,n="")||m(l,"src",n),m(t,"id",r[0]),m(t,"title",r[0]),m(t,"height","100%"),t.playsInline=!0,m(t,"class","svelte-1toipbg"),m(e,"class","cam-container svelte-1toipbg")},m(s,i){$(s,e,i),d(e,t),d(t,l)},p(s,[i]){i&1&&m(t,"id",s[0]),i&1&&m(t,"title",s[0])},i:D,o:D,d(s){s&&g(e)}}}function Et(r,e,t){let l;z(r,_e,a=>t(1,l=a));let{title:n}=e,s=null,i=null;function o(){navigator.mediaDevices.getUserMedia({audio:!1,video:{width:1920,height:1080}}).then(a=>{i=a,s.srcObject=a,s.play()}).catch(a=>console.error(a))}function f(){i&&(i.getTracks().forEach(a=>{a.enabled=!1,a.stop()}),s.srcObject=null,i=null)}return ae(()=>{s=document.getElementById(n)}),r.$$set=a=>{"title"in a&&t(0,n=a.title)},r.$$.update=()=>{r.$$.dirty&2&&(l?o():f())},[n,l]}class Ke extends M{constructor(e){super();P(this,e,Et,Pt,E,{title:0})}}function Ge(r){let e,t;return e=new Ke({props:{title:"guest"}}),{c(){k(e.$$.fragment)},m(l,n){y(e,l,n),t=!0},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){T(e,l)}}}function zt(r){let e,t,l,n,s;t=new Ke({props:{title:"anchor"}});let i=r[0]!=="full"&&Ge();return{c(){e=_("div"),k(t.$$.fragment),l=w(),i&&i.c(),m(e,"class",n="video-container "+r[0]+" svelte-h1s2vu")},m(o,f){$(o,e,f),y(t,e,null),d(e,l),i&&i.m(e,null),s=!0},p(o,[f]){o[0]!=="full"?i?f&1&&p(i,1):(i=Ge(),i.c(),p(i,1),i.m(e,null)):i&&(U(),v(i,1,1,()=>{i=null}),Y()),(!s||f&1&&n!==(n="video-container "+o[0]+" svelte-h1s2vu"))&&m(e,"class",n)},i(o){s||(p(t.$$.fragment,o),p(i),s=!0)},o(o){v(t.$$.fragment,o),v(i),s=!1},d(o){o&&g(e),T(t),i&&i.d()}}}function Vt(r,e,t){let{layout:l="full"}=e;return r.$$set=n=>{"layout"in n&&t(0,l=n.layout)},[l]}class jt extends M{constructor(e){super();P(this,e,Vt,zt,E,{layout:0})}}function Rt(r){let e,t,l=qe(r[3],r[0],r[2])+"",n,s,i;return{c(){e=_("div"),t=_("p"),n=V(l),m(t,"class","svelte-4070rq"),m(e,"class",s="time-display "+r[1]+" svelte-4070rq"),m(e,"title",i=""+(r[0].replace(/_/g," ")+" Time"))},m(o,f){$(o,e,f),d(e,t),d(t,n)},p(o,[f]){f&13&&l!==(l=qe(o[3],o[0],o[2])+"")&&F(n,l),f&2&&s!==(s="time-display "+o[1]+" svelte-4070rq")&&m(e,"class",s),f&1&&i!==(i=""+(o[0].replace(/_/g," ")+" Time"))&&m(e,"title",i)},i:D,o:D,d(o){o&&g(e)}}}function Ht(r,e,t){let l;z(r,de,o=>t(3,l=o));let{value:n}=e,{class:s=""}=e,{showTimeZone:i=!0}=e;return r.$$set=o=>{"value"in o&&t(0,n=o.value),"class"in o&&t(1,s=o.class),"showTimeZone"in o&&t(2,i=o.showTimeZone)},[n,s,i,l]}class $e extends M{constructor(e){super();P(this,e,Ht,Rt,E,{value:0,class:1,showTimeZone:2})}}function Qe(r){let e,t,l,n;return{c(){e=_("div"),t=_("span"),l=_("p"),n=V(r[6]),m(l,"class","svelte-5dgutn"),m(t,"class","svelte-5dgutn"),m(e,"class","identifier credit svelte-5dgutn")},m(s,i){$(s,e,i),d(e,t),d(t,l),d(l,n)},p(s,i){i&64&&F(n,s[6])},d(s){s&&g(e)}}}function xe(r){let e,t,l,n;return{c(){e=_("div"),t=_("span"),l=_("p"),n=V(r[7]),m(l,"class","svelte-5dgutn"),m(t,"class","svelte-5dgutn"),m(e,"class","identifier location svelte-5dgutn")},m(s,i){$(s,e,i),d(e,t),d(t,l),d(l,n)},p(s,i){i&128&&F(n,s[7])},d(s){s&&g(e)}}}function et(r){let e,t,l;return t=new $e({props:{value:r[8]}}),{c(){e=_("div"),k(t.$$.fragment),m(e,"class","identifier locale svelte-5dgutn")},m(n,s){$(n,e,s),y(t,e,null),l=!0},p(n,s){const i={};s&256&&(i.value=n[8]),t.$set(i)},i(n){l||(p(t.$$.fragment,n),l=!0)},o(n){v(t.$$.fragment,n),l=!1},d(n){n&&g(e),T(t)}}}function Ft(r){let e,t,l,n,s,i=r[6]&&Qe(r),o=r[7]&&xe(r),f=r[8]&&et(r);return{c(){e=_("aside"),t=_("div"),i&&i.c(),l=w(),o&&o.c(),n=w(),f&&f.c(),m(t,"class","identifier-container svelte-5dgutn"),m(e,"class","video-identifier svelte-5dgutn"),R(e,"right",r[3]==="right"),R(e,"in",r[5]),R(e,"show-credit",r[6])},m(a,u){$(a,e,u),d(e,t),i&&i.m(t,null),d(t,l),o&&o.m(t,null),d(t,n),f&&f.m(t,null),s=!0},p(a,[u]){a[6]?i?i.p(a,u):(i=Qe(a),i.c(),i.m(t,l)):i&&(i.d(1),i=null),a[7]?o?o.p(a,u):(o=xe(a),o.c(),o.m(t,n)):o&&(o.d(1),o=null),a[8]?f?(f.p(a,u),u&256&&p(f,1)):(f=et(a),f.c(),p(f,1),f.m(t,null)):f&&(U(),v(f,1,1,()=>{f=null}),Y()),u&8&&R(e,"right",a[3]==="right"),u&32&&R(e,"in",a[5]),u&64&&R(e,"show-credit",a[6])},i(a){s||(p(f),s=!0)},o(a){v(f),s=!1},d(a){a&&g(e),i&&i.d(),o&&o.d(),f&&f.d()}}}function Ot(r,e,t){let l,n=D,s=()=>(n(),n=ne(O,A=>t(5,l=A)),O),i,o=D,f=()=>(o(),o=ne(b,A=>t(6,i=A)),b),a,u=D,c=()=>(u(),u=ne(L,A=>t(7,a=A)),L),h,N=D,S=()=>(N(),N=ne(I,A=>t(8,h=A)),I);r.$$.on_destroy.push(()=>n()),r.$$.on_destroy.push(()=>o()),r.$$.on_destroy.push(()=>u()),r.$$.on_destroy.push(()=>N());let{credit:b=null}=e;f();let{location:L=null}=e;c();let{locale:I=null}=e;S();let{align:B="left"}=e,{show:O=!0}=e;return s(),r.$$set=A=>{"credit"in A&&f(t(0,b=A.credit)),"location"in A&&c(t(1,L=A.location)),"locale"in A&&S(t(2,I=A.locale)),"align"in A&&t(3,B=A.align),"show"in A&&s(t(4,O=A.show))},[b,L,I,B,O,l,i,a,h]}class tt extends M{constructor(e){super();P(this,e,Ot,Ft,E,{credit:0,location:1,locale:2,align:3,show:4})}}function Zt(r){let e;return{c(){e=_("span"),e.textContent=`${r[5]}`,m(e,"title","Credentials"),m(e,"class","byline-extra svelte-1eql2t1")},m(t,l){$(t,e,l)},p:D,d(t){t&&g(e)}}}function Wt(r){let e,t,l,n,s,i,o,f,a,u,c,h,N,S=r[5].length&&Zt(r);return{c(){e=_("section"),t=_("header"),l=V(r[1]),n=w(),s=_("article"),i=_("div"),o=_("div"),f=V(r[3]),a=w(),u=_("footer"),c=_("div"),h=_("span"),h.textContent=`${r[4]}`,N=w(),S&&S.c(),m(t,"title","Tagline"),m(t,"class","tagline svelte-1eql2t1"),R(t,"show",r[0]),m(o,"class","headline-scaleX svelte-1eql2t1"),m(i,"class","headline-scaleY svelte-1eql2t1"),m(s,"title","Headline"),m(s,"class","headline svelte-1eql2t1"),R(s,"show-byline",r[2]),m(h,"class","byline-main svelte-1eql2t1"),m(c,"class","byline svelte-1eql2t1"),m(u,"title","Byline"),m(u,"class","byline-container svelte-1eql2t1"),R(u,"show",r[2]),m(e,"class","headline-container svelte-1eql2t1")},m(b,L){$(b,e,L),d(e,t),d(t,l),d(e,n),d(e,s),d(s,i),d(i,o),d(o,f),d(e,a),d(e,u),d(u,c),d(c,h),d(c,N),S&&S.m(c,null)},p(b,[L]){L&2&&F(l,b[1]),L&1&&R(t,"show",b[0]),L&8&&F(f,b[3]),L&4&&R(s,"show-byline",b[2]),b[5].length&&S.p(b,L),L&4&&R(u,"show",b[2])},i:D,o:D,d(b){b&&g(e),S&&S.d()}}}function Ut(r,e,t){let l,n,s,i,o;z(r,Fe,c=>t(6,l=c)),z(r,We,c=>t(0,n=c)),z(r,Ze,c=>t(1,s=c)),z(r,Oe,c=>t(2,i=c)),z(r,He,c=>t(3,o=c));const[f,a]=l.split("|").map(c=>c.trim());function u(){const c=document.getElementsByClassName("headline-scaleY")[0];St(c)}return ae(()=>{u(),window.addEventListener("resize",me(u))}),vt(()=>{u()}),fe(()=>{window.removeEventListener("resize",me(u))}),[n,s,i,o,f,a]}class Yt extends M{constructor(e){super();P(this,e,Ut,Wt,E,{})}}function Xt(r){let e;return{c(){e=_("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="900" height="420" viewBox="0 -2100 9000 4200"><title>CNN logo</title><path fill="#c00" d="m2800-900h-700a1 1 0 0 0 0 1800h783a117 117 0 0 0 117-117v-2066a817 817 0 0 1 1526-405l874 1529v-1124a817 817 0 0 1 1526-405l874 1529v-1941h500l100 100 100-100h500v3383a817 817 0 0 1-1526 405L6600 159v1124a817 817 0 0 1-1526 405L4200 159v1124a817 817 0 0 1-817 817H2100a1 1 0 0 1 0-4200h700v500l-100 100 100 100z"></path><path fill="none" stroke="#fff" stroke-width="200" d="m2800-1500h-700a1500 1500 0 0 0 0 3000h1283a217 217 0 0 0 217-217v-2566a217 217 0 0 1 405-108l1590 2782a217 217 0 0 0 405-108v-2566a217 217 0 0 1 405-108l1590 2782a217 217 0 0 0 405-108v-3383"></path></svg>',m(e,"class","svelte-jebv4f")},m(t,l){$(t,e,l)},p:D,i:D,o:D,d(t){t&&g(e)}}}class Jt extends M{constructor(e){super();P(this,e,null,Xt,E,{})}}function Kt(r){let e,t,l,n,s,i,o,f;return{c(){e=_("div"),t=_("div"),t.textContent=`${r[3]}`,l=w(),n=_("div"),n.innerHTML='<span class="svelte-1e7iyjd">\u25B2</span>',s=w(),i=_("div"),o=V(r[1]),m(t,"class","market-name"),m(n,"class","arrow svelte-1e7iyjd"),R(n,"down",!r[2]),m(i,"class","change svelte-1e7iyjd"),m(e,"class",f="stock-container "+r[0]+" svelte-1e7iyjd"),se(e,"--color",r[2]?"var(--green)":"var(--red)"),m(e,"title","Market display for "+r[3])},m(a,u){$(a,e,u),d(e,t),d(e,l),d(e,n),d(e,s),d(e,i),d(i,o)},p(a,[u]){u&4&&R(n,"down",!a[2]),u&2&&F(o,a[1]),u&1&&f!==(f="stock-container "+a[0]+" svelte-1e7iyjd")&&m(e,"class",f),u&4&&se(e,"--color",a[2]?"var(--green)":"var(--red)")},i:D,o:D,d(a){a&&g(e)}}}function Gt(r,e,t){let l,n,s;z(r,At,c=>t(5,l=c)),z(r,Dt,c=>t(6,n=c)),z(r,qt,c=>t(7,s=c));let{class:i=""}=e,{value:o="dow"}=e;const f=o.replace(/sap/gi,"s&p").toUpperCase();let a=0,u=!1;return ae(()=>{o==="dow"?t(1,a=s):o==="nas"?t(1,a=n):o==="sap"&&t(1,a=l),t(2,u=a>0)}),r.$$set=c=>{"class"in c&&t(0,i=c.class),"value"in c&&t(4,o=c.value)},[i,a,u,f,o]}class ge extends M{constructor(e){super();P(this,e,Gt,Kt,E,{class:0,value:4})}}function lt(r,e,t){const l=r.slice();return l[14]=e[t].componentType,l[15]=e[t].value,l[17]=t,l}function Qt(r){let e,t,l;var n=r[14];function s(i){return{props:{class:i[2],value:i[15]}}}return n&&(e=new n(s(r))),{c(){e&&k(e.$$.fragment),t=J()},m(i,o){e&&y(e,i,o),$(i,t,o),l=!0},p(i,o){const f={};if(o&4&&(f.class=i[2]),o&1&&(f.value=i[15]),n!==(n=i[14])){if(e){U();const a=e;v(a.$$.fragment,1,0,()=>{T(a,1)}),Y()}n?(e=new n(s(i)),k(e.$$.fragment),p(e.$$.fragment,1),y(e,t.parentNode,t)):e=null}else n&&e.$set(f)},i(i){l||(e&&p(e.$$.fragment,i),l=!0)},o(i){e&&v(e.$$.fragment,i),l=!1},d(i){i&&g(t),e&&T(e,i)}}}function xt(r){let e,t,l;var n=r[14];function s(i){return{props:{class:i[1],value:i[15]}}}return n&&(e=new n(s(r))),{c(){e&&k(e.$$.fragment),t=J()},m(i,o){e&&y(e,i,o),$(i,t,o),l=!0},p(i,o){const f={};if(o&2&&(f.class=i[1]),o&1&&(f.value=i[15]),n!==(n=i[14])){if(e){U();const a=e;v(a.$$.fragment,1,0,()=>{T(a,1)}),Y()}n?(e=new n(s(i)),k(e.$$.fragment),p(e.$$.fragment,1),y(e,t.parentNode,t)):e=null}else n&&e.$set(f)},i(i){l||(e&&p(e.$$.fragment,i),l=!0)},o(i){e&&v(e.$$.fragment,i),l=!1},d(i){i&&g(t),e&&T(e,i)}}}function nt(r,e){let t,l,n,s,i;const o=[xt,Qt],f=[];function a(u,c){return u[17]===u[4]?0:u[17]===u[3]?1:-1}return~(l=a(e))&&(n=f[l]=o[l](e)),{key:r,first:null,c(){t=J(),n&&n.c(),s=J(),this.first=t},m(u,c){$(u,t,c),~l&&f[l].m(u,c),$(u,s,c),i=!0},p(u,c){e=u;let h=l;l=a(e),l===h?~l&&f[l].p(e,c):(n&&(U(),v(f[h],1,1,()=>{f[h]=null}),Y()),~l?(n=f[l],n?n.p(e,c):(n=f[l]=o[l](e),n.c()),p(n,1),n.m(s.parentNode,s)):n=null)},i(u){i||(p(n),i=!0)},o(u){v(n),i=!1},d(u){u&&g(t),~l&&f[l].d(u),u&&g(s)}}}function el(r){let e,t,l=[],n=new Map,s,i=r[0];const o=f=>f[15];for(let f=0;f<i.length;f+=1){let a=lt(r,i,f),u=o(a);n.set(u,l[f]=nt(u,a))}return{c(){e=_("footer"),t=_("div");for(let f=0;f<l.length;f+=1)l[f].c();m(t,"id","rotating-container"),m(t,"class","svelte-s3f52f"),m(e,"class","svelte-s3f52f")},m(f,a){$(f,e,a),d(e,t);for(let u=0;u<l.length;u+=1)l[u].m(t,null);s=!0},p(f,[a]){a&31&&(i=f[0],U(),l=ht(l,a,o,1,f,i,n,t,bt,nt,null,lt),Y())},i(f){if(!s){for(let a=0;a<i.length;a+=1)p(l[a]);s=!0}},o(f){for(let a=0;a<l.length;a+=1)v(l[a]);s=!1},d(f){f&&g(e);for(let a=0;a<l.length;a+=1)l[a].d()}}}const tl=5e3;function ll(r,e,t){let l,n,s,i,o,f,a,u;z(r,Xe,I=>t(7,o=I)),z(r,Ye,I=>t(8,f=I)),z(r,De,I=>t(9,a=I)),z(r,Je,I=>t(10,u=I));const c=[{componentType:$e,value:"eastern"},{componentType:$e,value:"pacific"}],h=[{componentType:ge,value:"dow"},{componentType:ge,value:"nas"},{componentType:ge,value:"sap"}];let N="in",S=null;function b(){function I(){t(1,N="in"),t(2,S=null);const[B,...O]=n;t(0,n=[...O,B]),setTimeout(function(){t(1,N="out"),t(2,S="in")},17)}return I(),setInterval(I,tl)}let L=null;return r.$$.update=()=>{r.$$.dirty&1536&&t(6,l=u!==a.showMarket?u:a.showMarket),r.$$.dirty&64&&t(0,n=l?[...c,...h]:[...c]),r.$$.dirty&288&&(f?clearInterval(L):t(5,L=b())),r.$$.dirty&129&&t(4,s=o%n.length),r.$$.dirty&129&&t(3,i=(o+1)%n.length)},[n,N,S,i,s,L,l,o,f,a,u]}class nl extends M{constructor(e){super();P(this,e,ll,el,E,{})}}function sl(r,e,t){const l=r.slice();return l[1]=e[t],l}function il(r){let e,t;return{c(){e=_("span"),t=V(r[1])},m(l,n){$(l,e,n),d(e,t)},p:D,d(l){l&&g(e)}}}function rl(r){let e,t,l,n,s,i,o,f="live",a=[];for(let u=0;u<f.length;u+=1)a[u]=il(sl(r,f,u));return n=new Jt({}),i=new nl({}),{c(){e=_("aside"),t=_("div");for(let u=0;u<a.length;u+=1)a[u].c();l=w(),k(n.$$.fragment),s=w(),k(i.$$.fragment),m(t,"id","live"),m(t,"title","Live"),se(t,"--bottom",r[0]?"100%":"calc(100% - var(--live-height)"),m(t,"class","svelte-1169il3"),m(e,"class","svelte-1169il3")},m(u,c){$(u,e,c),d(e,t);for(let h=0;h<a.length;h+=1)a[h].m(t,null);d(e,l),y(n,e,null),d(e,s),y(i,e,null),o=!0},p(u,[c]){(!o||c&1)&&se(t,"--bottom",u[0]?"100%":"calc(100% - var(--live-height)")},i(u){o||(p(n.$$.fragment,u),p(i.$$.fragment,u),o=!0)},o(u){v(n.$$.fragment,u),v(i.$$.fragment,u),o=!1},d(u){u&&g(e),ie(a,u),T(n),T(i)}}}function ol(r,e,t){let l;return z(r,Re,n=>t(0,l=n)),[l]}class al extends M{constructor(e){super();P(this,e,ol,rl,E,{})}}function fl(r){const t=r.style.transform.replace(/[^0-9.]/g,"");return Lt(parseFloat(t))}function ul(r){let e=r.offsetWidth;const t=me(()=>{e=r.offsetWidth});window.addEventListener("resize",t);let l=0,n=0,s=0;r.parentElement.addEventListener("mouseenter",()=>{n=window.performance.now()}),r.parentElement.addEventListener("mouseleave",()=>{s=window.performance.now()-n});function i(o){const f=fl(r),a=e<Math.abs(f),u=!n,c=Boolean(s);l===0||a?l=o:c&&(l=l+s,n=0,s=0);const h=o-l;if(u){const N=-.007*h;r.style.transform=`translateX(${N}rem)`}window.requestAnimationFrame(i)}return window.requestAnimationFrame(i),()=>window.removeEventListener("resize",t)}function cl(r){let e,t,l,n,s,i,o,f;return{c(){e=_("aside"),t=_("span"),l=V(r[0]),n=w(),s=_("div"),s.textContent="\xA0",i=w(),o=_("span"),f=V(r[0]),m(t,"class","title svelte-17vt70v"),m(s,"class","shine svelte-17vt70v"),m(o,"class","glow svelte-17vt70v"),m(e,"title","Program Title (Name of Show)"),m(e,"class","svelte-17vt70v")},m(a,u){$(a,e,u),d(e,t),d(t,l),d(e,n),d(e,s),d(e,i),d(e,o),d(o,f)},p(a,[u]){u&1&&F(l,a[0]),u&1&&F(f,a[0])},i:D,o:D,d(a){a&&g(e)}}}function ml(r,e,t){let l;return z(r,Ue,n=>t(0,l=n)),[l]}class dl extends M{constructor(e){super();P(this,e,ml,cl,E,{})}}function st(r,e,t){const l=r.slice();return l[2]=e[t],l}function it(r,e,t){const l=r.slice();return l[5]=e[t],l[7]=t,l}function rt(r){let e;return{c(){e=_("span"),e.textContent="\u25BA",se(e,"font-size","1.1rem"),m(e,"class","svelte-1rqsjp9")},m(t,l){$(t,e,l)},d(t){t&&g(e)}}}function ot(r){let e,t=r[5]+"",l,n,s=r[7]<r[2].length-1&&rt();return{c(){e=_("p"),l=V(t),n=w(),s&&s.c(),m(e,"class","svelte-1rqsjp9")},m(i,o){$(i,e,o),d(e,l),d(e,n),s&&s.m(e,null)},p(i,o){o&1&&t!==(t=i[5]+"")&&F(l,t),i[7]<i[2].length-1?s||(s=rt(),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(i){i&&g(e),s&&s.d()}}}function at(r){let e,t,l=r[2],n=[];for(let s=0;s<l.length;s+=1)n[s]=ot(it(r,l,s));return{c(){e=_("article");for(let s=0;s<n.length;s+=1)n[s].c();t=w()},m(s,i){$(s,e,i);for(let o=0;o<n.length;o+=1)n[o].m(e,null);d(e,t)},p(s,i){if(i&1){l=s[2];let o;for(o=0;o<l.length;o+=1){const f=it(s,l,o);n[o]?n[o].p(f,i):(n[o]=ot(f),n[o].c(),n[o].m(e,t))}for(;o<n.length;o+=1)n[o].d(1);n.length=l.length}},d(s){s&&g(e),ie(n,s)}}}function _l(r){let e,t,l,n,s,i,o=r[0],f=[];for(let a=0;a<o.length;a+=1)f[a]=at(st(r,o,a));return s=new dl({}),{c(){e=_("footer"),t=_("section"),l=_("span");for(let a=0;a<f.length;a+=1)f[a].c();n=w(),k(s.$$.fragment),m(l,"id","marquee"),m(l,"class","svelte-1rqsjp9"),m(t,"id","marquee-container"),m(t,"class","svelte-1rqsjp9"),m(e,"title","News Ticker"),m(e,"class","svelte-1rqsjp9")},m(a,u){$(a,e,u),d(e,t),d(t,l);for(let c=0;c<f.length;c+=1)f[c].m(l,null);d(e,n),y(s,e,null),i=!0},p(a,[u]){if(u&1){o=a[0];let c;for(c=0;c<o.length;c+=1){const h=st(a,o,c);f[c]?f[c].p(h,u):(f[c]=at(h),f[c].c(),f[c].m(l,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=o.length}},i(a){i||(p(s.$$.fragment,a),i=!0)},o(a){v(s.$$.fragment,a),i=!1},d(a){a&&g(e),ie(f,a),T(s)}}}function pl(r,e,t){let{tickerNews:l=[]}=e,n=null;return ae(()=>{n=ul(document.getElementById("marquee"))}),fe(()=>{n()}),r.$$set=s=>{"tickerNews"in s&&t(0,l=s.tickerNews)},[l]}class $l extends M{constructor(e){super();P(this,e,pl,_l,E,{tickerNews:0})}}function gl(r){let e,t,l,n,s,i,o,f;return l=new Yt({}),s=new al({}),o=new $l({props:{tickerNews:[['facebook has seriously screwed the pooch, according to new leaks being dubbed the "facebook papers"',"thousands of pages of documents obtained by the washington post detail a myriad of sordid findings","human trafficking, drug sales, extremism, and more were allowed to run rampant on the platform for years"]]}}),{c(){e=_("section"),t=_("div"),k(l.$$.fragment),n=w(),k(s.$$.fragment),i=w(),k(o.$$.fragment),m(t,"class","svelte-ma6dsv"),m(e,"class","svelte-ma6dsv")},m(a,u){$(a,e,u),d(e,t),y(l,t,null),d(t,n),y(s,t,null),d(e,i),y(o,e,null),f=!0},p:D,i(a){f||(p(l.$$.fragment,a),p(s.$$.fragment,a),p(o.$$.fragment,a),f=!0)},o(a){v(l.$$.fragment,a),v(s.$$.fragment,a),v(o.$$.fragment,a),f=!1},d(a){a&&g(e),T(l),T(s),T(o)}}}class vl extends M{constructor(e){super();P(this,e,null,gl,E,{})}}function hl(r){let e,t;const l=r[1].default,n=x(l,r,r[0],null);return{c(){e=_("div"),n&&n.c(),m(e,"class","tabs svelte-10iyxal")},m(s,i){$(s,e,i),n&&n.m(e,null),t=!0},p(s,[i]){n&&n.p&&(!t||i&1)&&ee(n,l,s,s[0],t?le(l,s[0],i,null):te(s[0]),null)},i(s){t||(p(n,s),t=!0)},o(s){v(n,s),t=!1},d(s){s&&g(e),n&&n.d(s)}}}const ve={};function bl(r,e,t){let{$$slots:l={},$$scope:n}=e;const s=[],i=[],o=q(null),f=q(null);return wt(ve,{registerTab:a=>{s.push(a),o.update(u=>u||a),fe(()=>{const u=s.indexOf(a);s.splice(u,1),o.update(c=>c===a?s[u]||s[s.length-1]:c)})},registerPanel:a=>{i.push(a),f.update(u=>u||a),fe(()=>{const u=i.indexOf(a);i.splice(u,1),f.update(c=>c===a?i[u]||i[i.length-1]:c)})},selectTab:a=>{const u=s.indexOf(a);o.set(a),f.set(i[u])},selectedTab:o,selectedPanel:f}),r.$$set=a=>{"$$scope"in a&&t(0,n=a.$$scope)},[n,l]}class wl extends M{constructor(e){super();P(this,e,bl,hl,E,{})}}function kl(r){let e,t;const l=r[1].default,n=x(l,r,r[0],null);return{c(){e=_("div"),n&&n.c(),m(e,"class","tab-list svelte-fairhp")},m(s,i){$(s,e,i),n&&n.m(e,null),t=!0},p(s,[i]){n&&n.p&&(!t||i&1)&&ee(n,l,s,s[0],t?le(l,s[0],i,null):te(s[0]),null)},i(s){t||(p(n,s),t=!0)},o(s){v(n,s),t=!1},d(s){s&&g(e),n&&n.d(s)}}}function yl(r,e,t){let{$$slots:l={},$$scope:n}=e;return r.$$set=s=>{"$$scope"in s&&t(0,n=s.$$scope)},[n,l]}class Tl extends M{constructor(e){super();P(this,e,yl,kl,E,{})}}function ft(r){let e,t;const l=r[4].default,n=x(l,r,r[3],null);return{c(){e=_("div"),n&&n.c(),m(e,"class","tab-panel svelte-1nstrip")},m(s,i){$(s,e,i),n&&n.m(e,null),t=!0},p(s,i){n&&n.p&&(!t||i&8)&&ee(n,l,s,s[3],t?le(l,s[3],i,null):te(s[3]),null)},i(s){t||(p(n,s),t=!0)},o(s){v(n,s),t=!1},d(s){s&&g(e),n&&n.d(s)}}}function Ll(r){let e,t,l=r[0]===r[1]&&ft(r);return{c(){l&&l.c(),e=J()},m(n,s){l&&l.m(n,s),$(n,e,s),t=!0},p(n,[s]){n[0]===n[1]?l?(l.p(n,s),s&1&&p(l,1)):(l=ft(n),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(U(),v(l,1,1,()=>{l=null}),Y())},i(n){t||(p(l),t=!0)},o(n){v(l),t=!1},d(n){l&&l.d(n),n&&g(e)}}}function Cl(r,e,t){let l,{$$slots:n={},$$scope:s}=e;const i={},{registerPanel:o,selectedPanel:f}=Ne(ve);return z(r,f,a=>t(0,l=a)),o(i),r.$$set=a=>{"$$scope"in a&&t(3,s=a.$$scope)},[l,i,f,s,n]}class he extends M{constructor(e){super();P(this,e,Cl,Ll,E,{})}}function Il(r){let e,t,l,n;const s=r[5].default,i=x(s,r,r[4],null);return{c(){e=_("button"),i&&i.c(),m(e,"class","svelte-sk3im7"),R(e,"selected",r[0]===r[1])},m(o,f){$(o,e,f),i&&i.m(e,null),t=!0,l||(n=W(e,"click",r[6]),l=!0)},p(o,[f]){i&&i.p&&(!t||f&16)&&ee(i,s,o,o[4],t?le(s,o[4],f,null):te(o[4]),null),f&3&&R(e,"selected",o[0]===o[1])},i(o){t||(p(i,o),t=!0)},o(o){v(i,o),t=!1},d(o){o&&g(e),i&&i.d(o),l=!1,n()}}}function Nl(r,e,t){let l,{$$slots:n={},$$scope:s}=e;const i={},{registerTab:o,selectTab:f,selectedTab:a}=Ne(ve);z(r,a,c=>t(0,l=c)),o(i);const u=()=>f(i);return r.$$set=c=>{"$$scope"in c&&t(4,s=c.$$scope)},[l,i,f,a,s,n,u]}class be extends M{constructor(e){super();P(this,e,Nl,Il,E,{})}}function Sl(r){let e,t,l,n,s;return{c(){e=V(r[1]),t=w(),l=_("textarea"),m(l,"id",r[1]),m(l,"class","svelte-1pw4z6")},m(i,o){$(i,e,o),$(i,t,o),$(i,l,o),ue(l,r[3]),n||(s=W(l,"input",r[10]),n=!0)},p(i,o){o&2&&F(e,i[1]),o&2&&m(l,"id",i[1]),o&8&&ue(l,i[3])},d(i){i&&g(e),i&&g(t),i&&g(l),n=!1,s()}}}function ql(r){let e,t,l,n;return{c(){e=_("input"),t=V(r[1]),m(e,"id",r[1]),m(e,"type","checkbox")},m(s,i){$(s,e,i),e.checked=r[3],$(s,t,i),l||(n=W(e,"change",r[9]),l=!0)},p(s,i){i&2&&m(e,"id",s[1]),i&8&&(e.checked=s[3]),i&2&&F(t,s[1])},d(s){s&&g(e),s&&g(t),l=!1,n()}}}function Dl(r){let e,t,l,n,s;return{c(){e=V(r[1]),t=w(),l=_("input"),m(l,"id",r[1]),m(l,"type","text"),m(l,"list",r[4])},m(i,o){$(i,e,o),$(i,t,o),$(i,l,o),ue(l,r[3]),n||(s=W(l,"input",r[8]),n=!0)},p(i,o){o&2&&F(e,i[1]),o&2&&m(l,"id",i[1]),o&8&&l.value!==i[3]&&ue(l,i[3])},d(i){i&&g(e),i&&g(t),i&&g(l),n=!1,s()}}}function ut(r){let e,t,l;const n=r[7].default,s=x(n,r,r[6],null);return{c(){e=_("datalist"),s&&s.c(),m(e,"id",t=""+(r[1]+"-list"))},m(i,o){$(i,e,o),s&&s.m(e,null),l=!0},p(i,o){s&&s.p&&(!l||o&64)&&ee(s,n,i,i[6],l?le(n,i[6],o,null):te(i[6]),null),(!l||o&2&&t!==(t=""+(i[1]+"-list")))&&m(e,"id",t)},i(i){l||(p(s,i),l=!0)},o(i){v(s,i),l=!1},d(i){i&&g(e),s&&s.d(i)}}}function Al(r){let e,t,l,n;function s(a,u){if(a[0]==="text")return Dl;if(a[0]==="checkbox")return ql;if(a[0]==="textarea")return Sl}let i=s(r),o=i&&i(r),f=r[5]&&ut(r);return{c(){e=_("label"),o&&o.c(),t=w(),f&&f.c(),m(e,"class",l=""+(r[0]+"-input-label svelte-1pw4z6")),m(e,"for",r[1])},m(a,u){$(a,e,u),o&&o.m(e,null),d(e,t),f&&f.m(e,null),n=!0},p(a,[u]){i===(i=s(a))&&o?o.p(a,u):(o&&o.d(1),o=i&&i(a),o&&(o.c(),o.m(e,t))),a[5]?f?(f.p(a,u),u&32&&p(f,1)):(f=ut(a),f.c(),p(f,1),f.m(e,null)):f&&(U(),v(f,1,1,()=>{f=null}),Y()),(!n||u&1&&l!==(l=""+(a[0]+"-input-label svelte-1pw4z6")))&&m(e,"class",l),(!n||u&2)&&m(e,"for",a[1])},i(a){n||(p(f),n=!0)},o(a){v(f),n=!1},d(a){a&&g(e),o&&o.d(),f&&f.d()}}}function Bl(r,e,t){let l,n=D,s=()=>(n(),n=ne(c,L=>t(3,l=L)),c);r.$$.on_destroy.push(()=>n());let{$$slots:i={},$$scope:o}=e;const f=kt(i);let{type:a="text"}=e,{label:u}=e,{value:c}=e;s();const h=f?`${u}-list`:void 0;function N(){l=this.value,c.set(l)}function S(){l=this.checked,c.set(l)}function b(){l=this.value,c.set(l)}return r.$$set=L=>{"type"in L&&t(0,a=L.type),"label"in L&&t(1,u=L.label),"value"in L&&s(t(2,c=L.value)),"$$scope"in L&&t(6,o=L.$$scope)},[a,u,c,l,h,f,o,i,N,S,b]}class j extends M{constructor(e){super();P(this,e,Bl,Al,E,{type:0,label:1,value:2})}}function ct(r,e,t){const l=r.slice();return l[7]=e[t],l}function mt(r,e,t){const l=r.slice();return l[7]=e[t],l}function Ml(r){let e;return{c(){e=V("Video")},m(t,l){$(t,e,l)},d(t){t&&g(e)}}}function Pl(r){let e;return{c(){e=V("Headline Block")},m(t,l){$(t,e,l)},d(t){t&&g(e)}}}function El(r){let e;return{c(){e=V("Logo Block")},m(t,l){$(t,e,l)},d(t){t&&g(e)}}}function zl(r){let e,t,l,n,s,i;return e=new be({props:{$$slots:{default:[Ml]},$$scope:{ctx:r}}}),l=new be({props:{$$slots:{default:[Pl]},$$scope:{ctx:r}}}),s=new be({props:{$$slots:{default:[El]},$$scope:{ctx:r}}}),{c(){k(e.$$.fragment),t=w(),k(l.$$.fragment),n=w(),k(s.$$.fragment)},m(o,f){y(e,o,f),$(o,t,f),y(l,o,f),$(o,n,f),y(s,o,f),i=!0},p(o,f){const a={};f&4096&&(a.$$scope={dirty:f,ctx:o}),e.$set(a);const u={};f&4096&&(u.$$scope={dirty:f,ctx:o}),l.$set(u);const c={};f&4096&&(c.$$scope={dirty:f,ctx:o}),s.$set(c)},i(o){i||(p(e.$$.fragment,o),p(l.$$.fragment,o),p(s.$$.fragment,o),i=!0)},o(o){v(e.$$.fragment,o),v(l.$$.fragment,o),v(s.$$.fragment,o),i=!1},d(o){T(e,o),o&&g(t),T(l,o),o&&g(n),T(s,o)}}}function Vl(r){let e,t,l;return{c(){e=_("button"),e.textContent="Fullscreen"},m(n,s){$(n,e,s),t||(l=W(e,"click",r[6]),t=!0)},p:D,d(n){n&&g(e),t=!1,l()}}}function jl(r){let e,t,l;return{c(){e=_("button"),e.textContent="Side-by-Side"},m(n,s){$(n,e,s),t||(l=W(e,"click",r[5]),t=!0)},p:D,d(n){n&&g(e),t=!1,l()}}}function dt(r){let e,t=r[7]+"",l,n;return{c(){e=_("option"),l=V(t),e.__value=n=r[7],e.value=e.__value},m(s,i){$(s,e,i),d(e,l)},p:D,d(s){s&&g(e)}}}function Rl(r){let e,t=r[4],l=[];for(let n=0;n<t.length;n+=1)l[n]=dt(mt(r,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=J()},m(n,s){for(let i=0;i<l.length;i+=1)l[i].m(n,s);$(n,e,s)},p(n,s){if(s&16){t=n[4];let i;for(i=0;i<t.length;i+=1){const o=mt(n,t,i);l[i]?l[i].p(o,s):(l[i]=dt(o),l[i].c(),l[i].m(e.parentNode,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},d(n){ie(l,n),n&&g(e)}}}function _t(r){let e,t=r[7]+"",l,n;return{c(){e=_("option"),l=V(t),e.__value=n=r[7],e.value=e.__value},m(s,i){$(s,e,i),d(e,l)},p:D,d(s){s&&g(e)}}}function Hl(r){let e,t=r[4],l=[];for(let n=0;n<t.length;n+=1)l[n]=_t(ct(r,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=J()},m(n,s){for(let i=0;i<l.length;i+=1)l[i].m(n,s);$(n,e,s)},p(n,s){if(s&16){t=n[4];let i;for(i=0;i<t.length;i+=1){const o=ct(n,t,i);l[i]?l[i].p(o,s):(l[i]=_t(o),l[i].c(),l[i].m(e.parentNode,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},d(n){ie(l,n),n&&g(e)}}}function Fl(r){let e,t,l,n,s,i,o,f,a,u,c,h,N,S,b,L,I,B,O,A,K,we,G,ke,Q,ye,X,re,ce,Te;t=new j({props:{type:"checkbox",label:"Camera on",value:_e}});function Le(C,H){return C[0]==="full"?jl:Vl}let oe=Le(r),Z=oe(r);return u=new j({props:{type:"checkbox",label:"Show Left Identifier",value:Ae}}),h=new j({props:{type:"text",label:"LeftID: Credit",value:Me}}),S=new j({props:{type:"text",label:"LeftID: Location",value:Pe}}),L=new j({props:{type:"text",label:"LeftID: Locale",value:Ee,$$slots:{default:[Rl]},$$scope:{ctx:r}}}),K=new j({props:{type:"checkbox",label:"Show Right Identifier",value:Be}}),G=new j({props:{type:"text",label:"RightID: Credit",value:ze}}),Q=new j({props:{type:"text",label:"RightID: Location",value:Ve}}),X=new j({props:{type:"text",label:"RightID: Locale",value:je,$$slots:{default:[Hl]},$$scope:{ctx:r}}}),{c(){e=_("div"),k(t.$$.fragment),l=w(),n=_("button"),n.textContent="Disconnect Webcams",s=w(),Z.c(),i=w(),o=_("div"),f=_("h4"),f.textContent="Left Video Identifier",a=w(),k(u.$$.fragment),c=w(),k(h.$$.fragment),N=w(),k(S.$$.fragment),b=w(),k(L.$$.fragment),I=w(),B=_("div"),O=_("h4"),O.textContent="Right Video Identifier",A=w(),k(K.$$.fragment),we=w(),k(G.$$.fragment),ke=w(),k(Q.$$.fragment),ye=w(),k(X.$$.fragment),m(e,"class","control-group svelte-b1il1s"),m(o,"class","control-group svelte-b1il1s"),m(B,"class","control-group svelte-b1il1s")},m(C,H){$(C,e,H),y(t,e,null),d(e,l),d(e,n),d(e,s),Z.m(e,null),$(C,i,H),$(C,o,H),d(o,f),d(o,a),y(u,o,null),d(o,c),y(h,o,null),d(o,N),y(S,o,null),d(o,b),y(L,o,null),$(C,I,H),$(C,B,H),d(B,O),d(B,A),y(K,B,null),d(B,we),y(G,B,null),d(B,ke),y(Q,B,null),d(B,ye),y(X,B,null),re=!0,ce||(Te=W(n,"click",r[3]),ce=!0)},p(C,H){oe===(oe=Le(C))&&Z?Z.p(C,H):(Z.d(1),Z=oe(C),Z&&(Z.c(),Z.m(e,null)));const Ce={};H&4096&&(Ce.$$scope={dirty:H,ctx:C}),L.$set(Ce);const Ie={};H&4096&&(Ie.$$scope={dirty:H,ctx:C}),X.$set(Ie)},i(C){re||(p(t.$$.fragment,C),p(u.$$.fragment,C),p(h.$$.fragment,C),p(S.$$.fragment,C),p(L.$$.fragment,C),p(K.$$.fragment,C),p(G.$$.fragment,C),p(Q.$$.fragment,C),p(X.$$.fragment,C),re=!0)},o(C){v(t.$$.fragment,C),v(u.$$.fragment,C),v(h.$$.fragment,C),v(S.$$.fragment,C),v(L.$$.fragment,C),v(K.$$.fragment,C),v(G.$$.fragment,C),v(Q.$$.fragment,C),v(X.$$.fragment,C),re=!1},d(C){C&&g(e),T(t),Z.d(),C&&g(i),C&&g(o),T(u),T(h),T(S),T(L),C&&g(I),C&&g(B),T(K),T(G),T(Q),T(X),ce=!1,Te()}}}function Ol(r){let e,t,l,n,s,i,o,f,a,u,c;return t=new j({props:{type:"textarea",label:"Headline",value:He}}),n=new j({props:{type:"checkbox",label:"Show Byline",value:Oe}}),i=new j({props:{type:"textarea",label:"Byline",value:Fe}}),f=new j({props:{type:"checkbox",label:"Show Tagline",value:We}}),u=new j({props:{type:"text",label:"Tagline",value:Ze}}),{c(){e=_("div"),k(t.$$.fragment),l=w(),k(n.$$.fragment),s=w(),k(i.$$.fragment),o=w(),k(f.$$.fragment),a=w(),k(u.$$.fragment),m(e,"class","control-group svelte-b1il1s")},m(h,N){$(h,e,N),y(t,e,null),d(e,l),y(n,e,null),d(e,s),y(i,e,null),d(e,o),y(f,e,null),d(e,a),y(u,e,null),c=!0},p:D,i(h){c||(p(t.$$.fragment,h),p(n.$$.fragment,h),p(i.$$.fragment,h),p(f.$$.fragment,h),p(u.$$.fragment,h),c=!0)},o(h){v(t.$$.fragment,h),v(n.$$.fragment,h),v(i.$$.fragment,h),v(f.$$.fragment,h),v(u.$$.fragment,h),c=!1},d(h){h&&g(e),T(t),T(n),T(i),T(f),T(u)}}}function Zl(r){let e,t,l,n,s,i,o,f,a,u,c,h,N,S,b,L;return t=new j({props:{type:"checkbox",label:"Live",value:Re}}),n=new j({props:{type:"text",label:"Program Title",value:Ue}}),i=new j({props:{type:"checkbox",label:"Show Markets",value:Je}}),f=new j({props:{type:"checkbox",label:"Pause Time Rotation",value:Ye}}),{c(){e=_("div"),k(t.$$.fragment),l=w(),k(n.$$.fragment),s=w(),k(i.$$.fragment),o=w(),k(f.$$.fragment),a=w(),u=_("div"),c=_("button"),c.textContent="Prev Time Item",h=w(),N=_("button"),N.textContent="Next Time Item",m(e,"class","control-group svelte-b1il1s")},m(I,B){$(I,e,B),y(t,e,null),d(e,l),y(n,e,null),d(e,s),y(i,e,null),d(e,o),y(f,e,null),d(e,a),d(e,u),d(u,c),d(u,h),d(u,N),S=!0,b||(L=[W(c,"click",function(){Se(r[1].decrement)&&r[1].decrement.apply(this,arguments)}),W(N,"click",function(){Se(r[1].increment)&&r[1].increment.apply(this,arguments)})],b=!0)},p(I,B){r=I},i(I){S||(p(t.$$.fragment,I),p(n.$$.fragment,I),p(i.$$.fragment,I),p(f.$$.fragment,I),S=!0)},o(I){v(t.$$.fragment,I),v(n.$$.fragment,I),v(i.$$.fragment,I),v(f.$$.fragment,I),S=!1},d(I){I&&g(e),T(t),T(n),T(i),T(f),b=!1,yt(L)}}}function Wl(r){let e,t,l,n,s,i,o,f;return e=new Tl({props:{$$slots:{default:[zl]},$$scope:{ctx:r}}}),l=new he({props:{$$slots:{default:[Fl]},$$scope:{ctx:r}}}),s=new he({props:{$$slots:{default:[Ol]},$$scope:{ctx:r}}}),o=new he({props:{$$slots:{default:[Zl]},$$scope:{ctx:r}}}),{c(){k(e.$$.fragment),t=w(),k(l.$$.fragment),n=w(),k(s.$$.fragment),i=w(),k(o.$$.fragment)},m(a,u){y(e,a,u),$(a,t,u),y(l,a,u),$(a,n,u),y(s,a,u),$(a,i,u),y(o,a,u),f=!0},p(a,u){const c={};u&4096&&(c.$$scope={dirty:u,ctx:a}),e.$set(c);const h={};u&4097&&(h.$$scope={dirty:u,ctx:a}),l.$set(h);const N={};u&4096&&(N.$$scope={dirty:u,ctx:a}),s.$set(N);const S={};u&4098&&(S.$$scope={dirty:u,ctx:a}),o.$set(S)},i(a){f||(p(e.$$.fragment,a),p(l.$$.fragment,a),p(s.$$.fragment,a),p(o.$$.fragment,a),f=!0)},o(a){v(e.$$.fragment,a),v(l.$$.fragment,a),v(s.$$.fragment,a),v(o.$$.fragment,a),f=!1},d(a){T(e,a),a&&g(t),T(l,a),a&&g(n),T(s,a),a&&g(i),T(o,a)}}}function Ul(r){let e,t,l;return t=new wl({props:{$$slots:{default:[Wl]},$$scope:{ctx:r}}}),{c(){e=_("div"),k(t.$$.fragment),m(e,"class","controls svelte-b1il1s")},m(n,s){$(n,e,s),y(t,e,null),l=!0},p(n,[s]){const i={};s&4099&&(i.$$scope={dirty:s,ctx:n}),t.$set(i)},i(n){l||(p(t.$$.fragment,n),l=!0)},o(n){v(t.$$.fragment,n),l=!1},d(n){n&&g(e),T(t)}}}function Yl(r,e,t){let l,n;z(r,pe,u=>t(0,l=u)),z(r,Xe,u=>t(1,n=u));function s(u){pe.set(u)}function i(){Array.from(document.getElementsByTagName("video")).forEach(c=>{var h;(h=c.srcObject)==null||h.getTracks().forEach(N=>{N.enabled=!1,N.stop()}),c.srcObject=null}),_e.set(!1)}return[l,n,s,i,["eastern","central","mountain","pacific"],()=>s("double"),()=>s("full")]}class Xl extends M{constructor(e){super();P(this,e,Yl,Ul,E,{})}}function Jl(r){let e,t;const l=r[1].default,n=x(l,r,r[0],null);return{c(){e=_("div"),n&&n.c(),m(e,"class","background svelte-xphuv8")},m(s,i){$(s,e,i),n&&n.m(e,null),t=!0},p(s,[i]){n&&n.p&&(!t||i&1)&&ee(n,l,s,s[0],t?le(l,s[0],i,null):te(s[0]),null)},i(s){t||(p(n,s),t=!0)},o(s){v(n,s),t=!1},d(s){s&&g(e),n&&n.d(s)}}}function Kl(r,e,t){let{$$slots:l={},$$scope:n}=e;return r.$$set=s=>{"$$scope"in s&&t(0,n=s.$$scope)},[n,l]}class Gl extends M{constructor(e){super();P(this,e,Kl,Jl,E,{})}}function Ql(r){let e;return{c(){e=_("div"),m(e,"class","bg-ac360 svelte-gbp0we")},m(t,l){$(t,e,l)},d(t){t&&g(e)}}}function xl(r){let e,t;return e=new Gl({props:{$$slots:{default:[Ql]},$$scope:{ctx:r}}}),{c(){k(e.$$.fragment)},m(l,n){y(e,l,n),t=!0},p(l,[n]){const s={};n&1&&(s.$$scope={dirty:n,ctx:l}),e.$set(s)},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){T(e,l)}}}class en extends M{constructor(e){super();P(this,e,null,xl,E,{})}}function tn(r){let e,t,l,n,s,i,o,f,a,u,c,h,N,S;return t=new en({}),s=new tt({props:{show:Ae,align:"left",credit:Me,location:Pe,locale:Ee}}),o=new tt({props:{show:Be,align:"right",credit:ze,location:Ve,locale:je}}),a=new jt({props:{layout:r[0]}}),c=new vl({}),N=new Xl({}),{c(){e=_("div"),k(t.$$.fragment),l=w(),n=_("main"),k(s.$$.fragment),i=w(),k(o.$$.fragment),f=w(),k(a.$$.fragment),u=w(),k(c.$$.fragment),h=w(),k(N.$$.fragment),m(n,"class","svelte-1nnnuzl"),m(e,"class","container svelte-1nnnuzl")},m(b,L){$(b,e,L),y(t,e,null),d(e,l),d(e,n),y(s,n,null),d(n,i),y(o,n,null),d(n,f),y(a,n,null),d(n,u),y(c,n,null),$(b,h,L),y(N,b,L),S=!0},p(b,[L]){const I={};L&1&&(I.layout=b[0]),a.$set(I)},i(b){S||(p(t.$$.fragment,b),p(s.$$.fragment,b),p(o.$$.fragment,b),p(a.$$.fragment,b),p(c.$$.fragment,b),p(N.$$.fragment,b),S=!0)},o(b){v(t.$$.fragment,b),v(s.$$.fragment,b),v(o.$$.fragment,b),v(a.$$.fragment,b),v(c.$$.fragment,b),v(N.$$.fragment,b),S=!1},d(b){b&&g(e),T(t),T(s),T(o),T(a),T(c),b&&g(h),T(N,b)}}}function ln(r,e,t){let l;return z(r,pe,n=>t(0,l=n)),[l]}class nn extends M{constructor(e){super();P(this,e,ln,tn,E,{})}}new nn({target:document.getElementById("app")});