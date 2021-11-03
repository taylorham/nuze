import{d as qt,w as D,g as Dt,S as B,i as V,s as j,e as p,a as d,b as Nt,c as T,f as u,n as I,h as L,j as E,o as _e,k as w,m as y,t as v,l as h,p as k,q as g,r as re,u as ae,v as H,x as W,y as R,z as ce,A as Et,B as Ye,C as fe,D as ve,E as Mt,F as At,G as we,H as U,I as Xe,J as Je,K as Bt}from"./vendor.bd54bd3a.js";const Vt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}};Vt();function jt(i){const e=window.getComputedStyle(document.documentElement).fontSize;return i*parseFloat(e)}function Ke(i,e,t=!0){const n={eastern:"New_York",central:"Chicago",mountain:"Denver",pacific:"Los_Angeles"},r=e.toLowerCase(),l=r in n,s={hour:"numeric",minute:"2-digit",timeZone:l?`America/${n[r]}`:e,timeZoneName:"short"};return(!t||!l)&&delete s.timeZoneName,new Intl.DateTimeFormat("en-US",s).format(i).replace(/[SD]/g,"")}function zt(i){const e=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:"America/New_York"}).format(i).replace(":","");return parseInt(e,10)}function Pt(i){const e=zt(i);return{isMarketOpen:e>930&&e<1601,showMarket:e>930&&e<1800}}function ye(i,e=100){let t;return n=>{t&&clearTimeout(t),t=setTimeout(i,e,n)}}function Rt(i){const e=i.parentElement,t=4*parseInt(window.getComputedStyle(e).paddingLeft,10),n=e.clientWidth-t,r=i.scrollWidth,l=.8;return r*l>n?n/r:l}function Ht(i){const e=i.children[0],t=Rt(i);e.style.transform=`scaleX(${t})`}const ke=D(new Date);setInterval(()=>{ke.set(new Date)},1e3);const Ge=qt(ke,i=>Pt(i)),Ft=D(239.19),Wt=D(-92.58),Ot=D(8.24),Te=D(!0),Le=D("full"),Qe=D(!1),xe=D(!1),et=D(null),tt=D("Los Angeles, CA"),nt=D("pacific"),lt=D("Via WebEx | Cisco"),it=D("Washington, DC"),st=D("eastern"),rt=D(!0),at=D(`"I didn't know it was wrong": Jon Hamm eats Hawaiian Pizza`),ot=D("Doug H. Tosser | Professor of Pizza at Paisano's Pies"),ct=D(!1),ft=D("Breaking News"),ut=D(!0),mt=D("TidBytes"),dt=D(!1);function Zt(){const{subscribe:i,update:e}=D(0);return{subscribe:i,increment:()=>e(t=>t+1),decrement:()=>e(t=>t-1)}}const pt=Zt(),Ut=Dt(Ge).showMarket,gt=D(Ut);function Yt(i){let e,t,n,r;return{c(){e=p("div"),t=p("video"),n=p("track"),d(n,"kind","captions"),Nt(n.src,r="")||d(n,"src",r),d(t,"id",i[0]),d(t,"title",i[0]),d(t,"height","100%"),t.playsInline=!0,d(t,"class","svelte-1toipbg"),d(e,"class","cam-container svelte-1toipbg")},m(l,s){T(l,e,s),u(e,t),u(t,n)},p(l,[s]){s&1&&d(t,"id",l[0]),s&1&&d(t,"title",l[0])},i:I,o:I,d(l){l&&L(e)}}}function Xt(i,e,t){let n;E(i,Te,o=>t(1,n=o));let{title:r}=e,l=null,s=null;function a(){navigator.mediaDevices.getUserMedia({audio:!1,video:{width:1920,height:1080}}).then(o=>{s=o,l.srcObject=o,l.play()}).catch(o=>console.error(o))}function c(){s&&(s.getTracks().forEach(o=>{o.enabled=!1,o.stop()}),l.srcObject=null,s=null)}return _e(()=>{l=document.getElementById(r)}),i.$$set=o=>{"title"in o&&t(0,r=o.title)},i.$$.update=()=>{i.$$.dirty&2&&(n?a():c())},[r,n]}class _t extends B{constructor(e){super();V(this,e,Xt,Yt,j,{title:0})}}function vt(i){let e,t;return e=new _t({props:{title:"guest"}}),{c(){w(e.$$.fragment)},m(n,r){y(e,n,r),t=!0},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){h(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function Jt(i){let e,t,n,r,l;t=new _t({props:{title:"anchor"}});let s=i[0]!=="full"&&vt();return{c(){e=p("div"),w(t.$$.fragment),n=g(),s&&s.c(),d(e,"class",r="video-container "+i[0]+" svelte-1n4vzfv")},m(a,c){T(a,e,c),y(t,e,null),u(e,n),s&&s.m(e,null),l=!0},p(a,[c]){a[0]!=="full"?s?c&1&&v(s,1):(s=vt(),s.c(),v(s,1),s.m(e,null)):s&&(re(),h(s,1,1,()=>{s=null}),ae()),(!l||c&1&&r!==(r="video-container "+a[0]+" svelte-1n4vzfv"))&&d(e,"class",r)},i(a){l||(v(t.$$.fragment,a),v(s),l=!0)},o(a){h(t.$$.fragment,a),h(s),l=!1},d(a){a&&L(e),k(t),s&&s.d()}}}function Kt(i,e,t){let{layout:n="full"}=e;return i.$$set=r=>{"layout"in r&&t(0,n=r.layout)},[n]}class Gt extends B{constructor(e){super();V(this,e,Kt,Jt,j,{layout:0})}}function Qt(i){let e,t,n=Ke(i[3],i[0],i[2])+"",r,l,s;return{c(){e=p("div"),t=p("p"),r=H(n),d(t,"class","svelte-4070rq"),d(e,"class",l="time-display "+i[1]+" svelte-4070rq"),d(e,"title",s=""+(i[0].replace(/_/g," ")+" Time"))},m(a,c){T(a,e,c),u(e,t),u(t,r)},p(a,[c]){c&13&&n!==(n=Ke(a[3],a[0],a[2])+"")&&W(r,n),c&2&&l!==(l="time-display "+a[1]+" svelte-4070rq")&&d(e,"class",l),c&1&&s!==(s=""+(a[0].replace(/_/g," ")+" Time"))&&d(e,"title",s)},i:I,o:I,d(a){a&&L(e)}}}function xt(i,e,t){let n;E(i,ke,a=>t(3,n=a));let{value:r}=e,{class:l=""}=e,{showTimeZone:s=!0}=e;return i.$$set=a=>{"value"in a&&t(0,r=a.value),"class"in a&&t(1,l=a.class),"showTimeZone"in a&&t(2,s=a.showTimeZone)},[r,l,s,n]}class Ce extends B{constructor(e){super();V(this,e,xt,Qt,j,{value:0,class:1,showTimeZone:2})}}function ht(i){let e,t,n,r;return{c(){e=p("div"),t=p("span"),n=p("p"),r=H(i[6]),d(n,"class","svelte-5dgutn"),d(t,"class","svelte-5dgutn"),d(e,"class","identifier credit svelte-5dgutn")},m(l,s){T(l,e,s),u(e,t),u(t,n),u(n,r)},p(l,s){s&64&&W(r,l[6])},d(l){l&&L(e)}}}function bt(i){let e,t,n,r;return{c(){e=p("div"),t=p("span"),n=p("p"),r=H(i[7]),d(n,"class","svelte-5dgutn"),d(t,"class","svelte-5dgutn"),d(e,"class","identifier location svelte-5dgutn")},m(l,s){T(l,e,s),u(e,t),u(t,n),u(n,r)},p(l,s){s&128&&W(r,l[7])},d(l){l&&L(e)}}}function $t(i){let e,t,n;return t=new Ce({props:{value:i[8]}}),{c(){e=p("div"),w(t.$$.fragment),d(e,"class","identifier locale svelte-5dgutn")},m(r,l){T(r,e,l),y(t,e,null),n=!0},p(r,l){const s={};l&256&&(s.value=r[8]),t.$set(s)},i(r){n||(v(t.$$.fragment,r),n=!0)},o(r){h(t.$$.fragment,r),n=!1},d(r){r&&L(e),k(t)}}}function en(i){let e,t,n,r,l,s=i[6]&&ht(i),a=i[7]&&bt(i),c=i[8]&&$t(i);return{c(){e=p("aside"),t=p("div"),s&&s.c(),n=g(),a&&a.c(),r=g(),c&&c.c(),d(t,"class","identifier-container svelte-5dgutn"),d(e,"class","video-identifier svelte-5dgutn"),R(e,"right",i[3]==="right"),R(e,"in",i[5]),R(e,"show-credit",i[6])},m(o,f){T(o,e,f),u(e,t),s&&s.m(t,null),u(t,n),a&&a.m(t,null),u(t,r),c&&c.m(t,null),l=!0},p(o,[f]){o[6]?s?s.p(o,f):(s=ht(o),s.c(),s.m(t,n)):s&&(s.d(1),s=null),o[7]?a?a.p(o,f):(a=bt(o),a.c(),a.m(t,r)):a&&(a.d(1),a=null),o[8]?c?(c.p(o,f),f&256&&v(c,1)):(c=$t(o),c.c(),v(c,1),c.m(t,null)):c&&(re(),h(c,1,1,()=>{c=null}),ae()),f&8&&R(e,"right",o[3]==="right"),f&32&&R(e,"in",o[5]),f&64&&R(e,"show-credit",o[6])},i(o){l||(v(c),l=!0)},o(o){h(c),l=!1},d(o){o&&L(e),s&&s.d(),a&&a.d(),c&&c.d()}}}function tn(i,e,t){let n,r=I,l=()=>(r(),r=ce(Z,N=>t(5,n=N)),Z),s,a=I,c=()=>(a(),a=ce(S,N=>t(6,s=N)),S),o,f=I,m=()=>(f(),f=ce(q,N=>t(7,o=N)),q),b,$=I,C=()=>($(),$=ce(M,N=>t(8,b=N)),M);i.$$.on_destroy.push(()=>r()),i.$$.on_destroy.push(()=>a()),i.$$.on_destroy.push(()=>f()),i.$$.on_destroy.push(()=>$());let{credit:S=null}=e;c();let{location:q=null}=e;m();let{locale:M=null}=e;C();let{align:F="left"}=e,{show:Z=!0}=e;return l(),i.$$set=N=>{"credit"in N&&c(t(0,S=N.credit)),"location"in N&&m(t(1,q=N.location)),"locale"in N&&C(t(2,M=N.locale)),"align"in N&&t(3,F=N.align),"show"in N&&l(t(4,Z=N.show))},[S,q,M,F,Z,n,s,o,b]}class wt extends B{constructor(e){super();V(this,e,tn,en,j,{credit:0,location:1,locale:2,align:3,show:4})}}function nn(i){let e;return{c(){e=p("span"),e.textContent=`${i[5]}`,d(e,"title","Credentials"),d(e,"class","byline-extra svelte-1eql2t1")},m(t,n){T(t,e,n)},p:I,d(t){t&&L(e)}}}function ln(i){let e,t,n,r,l,s,a,c,o,f,m,b,$,C=i[5].length&&nn(i);return{c(){e=p("section"),t=p("header"),n=H(i[1]),r=g(),l=p("article"),s=p("div"),a=p("div"),c=H(i[3]),o=g(),f=p("footer"),m=p("div"),b=p("span"),b.textContent=`${i[4]}`,$=g(),C&&C.c(),d(t,"title","Tagline"),d(t,"class","tagline svelte-1eql2t1"),R(t,"show",i[0]),d(a,"class","headline-scaleX svelte-1eql2t1"),d(s,"class","headline-scaleY svelte-1eql2t1"),d(l,"title","Headline"),d(l,"class","headline svelte-1eql2t1"),R(l,"show-byline",i[2]),d(b,"class","byline-main svelte-1eql2t1"),d(m,"class","byline svelte-1eql2t1"),d(f,"title","Byline"),d(f,"class","byline-container svelte-1eql2t1"),R(f,"show",i[2]),d(e,"class","headline-container svelte-1eql2t1")},m(S,q){T(S,e,q),u(e,t),u(t,n),u(e,r),u(e,l),u(l,s),u(s,a),u(a,c),u(e,o),u(e,f),u(f,m),u(m,b),u(m,$),C&&C.m(m,null)},p(S,[q]){q&2&&W(n,S[1]),q&1&&R(t,"show",S[0]),q&8&&W(c,S[3]),q&4&&R(l,"show-byline",S[2]),S[5].length&&C.p(S,q),q&4&&R(f,"show",S[2])},i:I,o:I,d(S){S&&L(e),C&&C.d()}}}function sn(i,e,t){let n,r,l,s,a;E(i,ot,m=>t(6,n=m)),E(i,ut,m=>t(0,r=m)),E(i,ft,m=>t(1,l=m)),E(i,ct,m=>t(2,s=m)),E(i,at,m=>t(3,a=m));const[c,o]=n.split("|").map(m=>m.trim());function f(){const m=document.getElementsByClassName("headline-scaleY")[0];Ht(m)}return _e(()=>{f(),window.addEventListener("resize",ye(f))}),Et(()=>{f()}),Ye(()=>{window.removeEventListener("resize",ye(f))}),[r,l,s,a,c,o]}class rn extends B{constructor(e){super();V(this,e,sn,ln,j,{})}}function an(i){let e;return{c(){e=p("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="900" height="420" viewBox="0 -2100 9000 4200"><title>CNN logo</title><path fill="#c00" d="m2800-900h-700a1 1 0 0 0 0 1800h783a117 117 0 0 0 117-117v-2066a817 817 0 0 1 1526-405l874 1529v-1124a817 817 0 0 1 1526-405l874 1529v-1941h500l100 100 100-100h500v3383a817 817 0 0 1-1526 405L6600 159v1124a817 817 0 0 1-1526 405L4200 159v1124a817 817 0 0 1-817 817H2100a1 1 0 0 1 0-4200h700v500l-100 100 100 100z"></path><path fill="none" stroke="#fff" stroke-width="200" d="m2800-1500h-700a1500 1500 0 0 0 0 3000h1283a217 217 0 0 0 217-217v-2566a217 217 0 0 1 405-108l1590 2782a217 217 0 0 0 405-108v-2566a217 217 0 0 1 405-108l1590 2782a217 217 0 0 0 405-108v-3383"></path></svg>',d(e,"class","svelte-jebv4f")},m(t,n){T(t,e,n)},p:I,i:I,o:I,d(t){t&&L(e)}}}class on extends B{constructor(e){super();V(this,e,null,an,j,{})}}function cn(i){let e,t,n,r,l,s,a,c;return{c(){e=p("div"),t=p("div"),t.textContent=`${i[3]}`,n=g(),r=p("div"),r.innerHTML='<span class="svelte-1e7iyjd">\u25B2</span>',l=g(),s=p("div"),a=H(i[1]),d(t,"class","market-name"),d(r,"class","arrow svelte-1e7iyjd"),R(r,"down",!i[2]),d(s,"class","change svelte-1e7iyjd"),d(e,"class",c="stock-container "+i[0]+" svelte-1e7iyjd"),fe(e,"--color",i[2]?"var(--green)":"var(--red)"),d(e,"title","Market display for "+i[3])},m(o,f){T(o,e,f),u(e,t),u(e,n),u(e,r),u(e,l),u(e,s),u(s,a)},p(o,[f]){f&4&&R(r,"down",!o[2]),f&2&&W(a,o[1]),f&1&&c!==(c="stock-container "+o[0]+" svelte-1e7iyjd")&&d(e,"class",c),f&4&&fe(e,"--color",o[2]?"var(--green)":"var(--red)")},i:I,o:I,d(o){o&&L(e)}}}function fn(i,e,t){let n,r,l;E(i,Ot,m=>t(5,n=m)),E(i,Wt,m=>t(6,r=m)),E(i,Ft,m=>t(7,l=m));let{class:s=""}=e,{value:a="dow"}=e;const c=a.replace(/sap/gi,"s&p").toUpperCase();let o=0,f=!1;return _e(()=>{a==="dow"?t(1,o=l):a==="nas"?t(1,o=r):a==="sap"&&t(1,o=n),t(2,f=o>0)}),i.$$set=m=>{"class"in m&&t(0,s=m.class),"value"in m&&t(4,a=m.value)},[s,o,f,c,a]}class Ie extends B{constructor(e){super();V(this,e,fn,cn,j,{class:0,value:4})}}function yt(i,e,t){const n=i.slice();return n[14]=e[t].componentType,n[15]=e[t].value,n[17]=t,n}function un(i){let e,t,n;var r=i[14];function l(s){return{props:{class:s[2],value:s[15]}}}return r&&(e=new r(l(i))),{c(){e&&w(e.$$.fragment),t=ve()},m(s,a){e&&y(e,s,a),T(s,t,a),n=!0},p(s,a){const c={};if(a&4&&(c.class=s[2]),a&1&&(c.value=s[15]),r!==(r=s[14])){if(e){re();const o=e;h(o.$$.fragment,1,0,()=>{k(o,1)}),ae()}r?(e=new r(l(s)),w(e.$$.fragment),v(e.$$.fragment,1),y(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(s){n||(e&&v(e.$$.fragment,s),n=!0)},o(s){e&&h(e.$$.fragment,s),n=!1},d(s){s&&L(t),e&&k(e,s)}}}function mn(i){let e,t,n;var r=i[14];function l(s){return{props:{class:s[1],value:s[15]}}}return r&&(e=new r(l(i))),{c(){e&&w(e.$$.fragment),t=ve()},m(s,a){e&&y(e,s,a),T(s,t,a),n=!0},p(s,a){const c={};if(a&2&&(c.class=s[1]),a&1&&(c.value=s[15]),r!==(r=s[14])){if(e){re();const o=e;h(o.$$.fragment,1,0,()=>{k(o,1)}),ae()}r?(e=new r(l(s)),w(e.$$.fragment),v(e.$$.fragment,1),y(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(s){n||(e&&v(e.$$.fragment,s),n=!0)},o(s){e&&h(e.$$.fragment,s),n=!1},d(s){s&&L(t),e&&k(e,s)}}}function kt(i,e){let t,n,r,l,s;const a=[mn,un],c=[];function o(f,m){return f[17]===f[4]?0:f[17]===f[3]?1:-1}return~(n=o(e))&&(r=c[n]=a[n](e)),{key:i,first:null,c(){t=ve(),r&&r.c(),l=ve(),this.first=t},m(f,m){T(f,t,m),~n&&c[n].m(f,m),T(f,l,m),s=!0},p(f,m){e=f;let b=n;n=o(e),n===b?~n&&c[n].p(e,m):(r&&(re(),h(c[b],1,1,()=>{c[b]=null}),ae()),~n?(r=c[n],r?r.p(e,m):(r=c[n]=a[n](e),r.c()),v(r,1),r.m(l.parentNode,l)):r=null)},i(f){s||(v(r),s=!0)},o(f){h(r),s=!1},d(f){f&&L(t),~n&&c[n].d(f),f&&L(l)}}}function dn(i){let e,t,n=[],r=new Map,l,s=i[0];const a=c=>c[15];for(let c=0;c<s.length;c+=1){let o=yt(i,s,c),f=a(o);r.set(f,n[c]=kt(f,o))}return{c(){e=p("footer"),t=p("div");for(let c=0;c<n.length;c+=1)n[c].c();d(t,"id","rotating-container"),d(t,"class","svelte-s3f52f"),d(e,"class","svelte-s3f52f")},m(c,o){T(c,e,o),u(e,t);for(let f=0;f<n.length;f+=1)n[f].m(t,null);l=!0},p(c,[o]){o&31&&(s=c[0],re(),n=Mt(n,o,a,1,c,s,r,t,At,kt,null,yt),ae())},i(c){if(!l){for(let o=0;o<s.length;o+=1)v(n[o]);l=!0}},o(c){for(let o=0;o<n.length;o+=1)h(n[o]);l=!1},d(c){c&&L(e);for(let o=0;o<n.length;o+=1)n[o].d()}}}const pn=5e3;function gn(i,e,t){let n,r,l,s,a,c,o,f;E(i,pt,M=>t(7,a=M)),E(i,dt,M=>t(8,c=M)),E(i,Ge,M=>t(9,o=M)),E(i,gt,M=>t(10,f=M));const m=[{componentType:Ce,value:"eastern"},{componentType:Ce,value:"pacific"}],b=[{componentType:Ie,value:"dow"},{componentType:Ie,value:"nas"},{componentType:Ie,value:"sap"}];let $="in",C=null;function S(){function M(){t(1,$="in"),t(2,C=null);const[F,...Z]=r;t(0,r=[...Z,F]),setTimeout(function(){t(1,$="out"),t(2,C="in")},17)}return M(),setInterval(M,pn)}let q=null;return i.$$.update=()=>{i.$$.dirty&1536&&t(6,n=f!==o.showMarket?f:o.showMarket),i.$$.dirty&64&&t(0,r=n?[...m,...b]:[...m]),i.$$.dirty&288&&(c?clearInterval(q):t(5,q=S())),i.$$.dirty&129&&t(4,l=a%r.length),i.$$.dirty&129&&t(3,s=(a+1)%r.length)},[r,$,C,s,l,q,n,a,c,o,f]}class _n extends B{constructor(e){super();V(this,e,gn,dn,j,{})}}function vn(i,e,t){const n=i.slice();return n[1]=e[t],n}function hn(i){let e,t;return{c(){e=p("span"),t=H(i[1])},m(n,r){T(n,e,r),u(e,t)},p:I,d(n){n&&L(e)}}}function bn(i){let e,t,n,r,l,s,a,c="live",o=[];for(let f=0;f<c.length;f+=1)o[f]=hn(vn(i,c,f));return r=new on({}),s=new _n({}),{c(){e=p("aside"),t=p("div");for(let f=0;f<o.length;f+=1)o[f].c();n=g(),w(r.$$.fragment),l=g(),w(s.$$.fragment),d(t,"id","live"),d(t,"title","Live"),fe(t,"--bottom",i[0]?"100%":"calc(100% - var(--live-height)"),d(t,"class","svelte-1169il3"),d(e,"class","svelte-1169il3")},m(f,m){T(f,e,m),u(e,t);for(let b=0;b<o.length;b+=1)o[b].m(t,null);u(e,n),y(r,e,null),u(e,l),y(s,e,null),a=!0},p(f,[m]){(!a||m&1)&&fe(t,"--bottom",f[0]?"100%":"calc(100% - var(--live-height)")},i(f){a||(v(r.$$.fragment,f),v(s.$$.fragment,f),a=!0)},o(f){h(r.$$.fragment,f),h(s.$$.fragment,f),a=!1},d(f){f&&L(e),we(o,f),k(r),k(s)}}}function $n(i,e,t){let n;return E(i,rt,r=>t(0,n=r)),[n]}class wn extends B{constructor(e){super();V(this,e,$n,bn,j,{})}}function yn(i){const t=i.style.transform.replace(/[^0-9.]/g,"");return jt(parseFloat(t))}function kn(i){let e=i.offsetWidth;const t=ye(()=>{e=i.offsetWidth});window.addEventListener("resize",t);let n=0,r=0,l=0;i.parentElement.addEventListener("mouseenter",()=>{r=window.performance.now()}),i.parentElement.addEventListener("mouseleave",()=>{l=window.performance.now()-r});function s(a){const c=yn(i),o=e<Math.abs(c),f=!r,m=Boolean(l);n===0||o?n=a:m&&(n=n+l,r=0,l=0);const b=a-n;if(f){const $=-.007*b;i.style.transform=`translateX(${$}rem)`}window.requestAnimationFrame(s)}return window.requestAnimationFrame(s),()=>window.removeEventListener("resize",t)}function Tn(i){let e,t,n,r,l,s,a,c;return{c(){e=p("aside"),t=p("span"),n=H(i[0]),r=g(),l=p("span"),l.textContent="\xA0",s=g(),a=p("span"),c=H(i[0]),d(t,"class","title svelte-17vt70v"),d(l,"class","shine svelte-17vt70v"),d(a,"class","glow svelte-17vt70v"),d(e,"title","Program Title (Name of Show)"),d(e,"class","svelte-17vt70v")},m(o,f){T(o,e,f),u(e,t),u(t,n),u(e,r),u(e,l),u(e,s),u(e,a),u(a,c)},p(o,[f]){f&1&&W(n,o[0]),f&1&&W(c,o[0])},i:I,o:I,d(o){o&&L(e)}}}function Ln(i,e,t){let n;return E(i,mt,r=>t(0,n=r)),[n]}class Cn extends B{constructor(e){super();V(this,e,Ln,Tn,j,{})}}function Tt(i,e,t){const n=i.slice();return n[2]=e[t],n}function Lt(i,e,t){const n=i.slice();return n[5]=e[t],n[7]=t,n}function Ct(i){let e;return{c(){e=p("span"),e.textContent="\u25BA",fe(e,"font-size","1.1rem"),d(e,"class","svelte-1rqsjp9")},m(t,n){T(t,e,n)},d(t){t&&L(e)}}}function It(i){let e,t=i[5]+"",n,r,l=i[7]<i[2].length-1&&Ct();return{c(){e=p("p"),n=H(t),r=g(),l&&l.c(),d(e,"class","svelte-1rqsjp9")},m(s,a){T(s,e,a),u(e,n),u(e,r),l&&l.m(e,null)},p(s,a){a&1&&t!==(t=s[5]+"")&&W(n,t),s[7]<s[2].length-1?l||(l=Ct(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(s){s&&L(e),l&&l.d()}}}function St(i){let e,t,n=i[2],r=[];for(let l=0;l<n.length;l+=1)r[l]=It(Lt(i,n,l));return{c(){e=p("article");for(let l=0;l<r.length;l+=1)r[l].c();t=g()},m(l,s){T(l,e,s);for(let a=0;a<r.length;a+=1)r[a].m(e,null);u(e,t)},p(l,s){if(s&1){n=l[2];let a;for(a=0;a<n.length;a+=1){const c=Lt(l,n,a);r[a]?r[a].p(c,s):(r[a]=It(c),r[a].c(),r[a].m(e,t))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(l){l&&L(e),we(r,l)}}}function In(i){let e,t,n,r,l,s,a=i[0],c=[];for(let o=0;o<a.length;o+=1)c[o]=St(Tt(i,a,o));return l=new Cn({}),{c(){e=p("footer"),t=p("section"),n=p("span");for(let o=0;o<c.length;o+=1)c[o].c();r=g(),w(l.$$.fragment),d(n,"id","marquee"),d(n,"class","svelte-1rqsjp9"),d(t,"id","marquee-container"),d(t,"class","svelte-1rqsjp9"),d(e,"title","News Ticker"),d(e,"class","svelte-1rqsjp9")},m(o,f){T(o,e,f),u(e,t),u(t,n);for(let m=0;m<c.length;m+=1)c[m].m(n,null);u(e,r),y(l,e,null),s=!0},p(o,[f]){if(f&1){a=o[0];let m;for(m=0;m<a.length;m+=1){const b=Tt(o,a,m);c[m]?c[m].p(b,f):(c[m]=St(b),c[m].c(),c[m].m(n,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=a.length}},i(o){s||(v(l.$$.fragment,o),s=!0)},o(o){h(l.$$.fragment,o),s=!1},d(o){o&&L(e),we(c,o),k(l)}}}function Sn(i,e,t){let{tickerNews:n=[]}=e,r=null;return _e(()=>{r=kn(document.getElementById("marquee"))}),Ye(()=>{r()}),i.$$set=l=>{"tickerNews"in l&&t(0,n=l.tickerNews)},[n]}class qn extends B{constructor(e){super();V(this,e,Sn,In,j,{tickerNews:0})}}function Dn(i){let e,t,n,r,l,s,a,c;return n=new rn({}),l=new wn({}),a=new qn({props:{tickerNews:[['facebook has seriously screwed the pooch, according to new leaks being dubbed the "facebook papers"',"thousands of pages of documents obtained by the washington post detail a myriad of sordid findings","human trafficking, drug sales, extremism, and more were allowed to run rampant on the platform for years"]]}}),{c(){e=p("section"),t=p("div"),w(n.$$.fragment),r=g(),w(l.$$.fragment),s=g(),w(a.$$.fragment),d(t,"class","svelte-ma6dsv"),d(e,"class","svelte-ma6dsv")},m(o,f){T(o,e,f),u(e,t),y(n,t,null),u(t,r),y(l,t,null),u(e,s),y(a,e,null),c=!0},p:I,i(o){c||(v(n.$$.fragment,o),v(l.$$.fragment,o),v(a.$$.fragment,o),c=!0)},o(o){h(n.$$.fragment,o),h(l.$$.fragment,o),h(a.$$.fragment,o),c=!1},d(o){o&&L(e),k(n),k(l),k(a)}}}class Nn extends B{constructor(e){super();V(this,e,null,Dn,j,{})}}function En(i){let e,t,n,r;return{c(){e=p("input"),t=H(i[1]),d(e,"id",i[1]),d(e,"type","checkbox")},m(l,s){T(l,e,s),e.checked=i[3],T(l,t,s),n||(r=U(e,"change",i[5]),n=!0)},p(l,s){s&2&&d(e,"id",l[1]),s&8&&(e.checked=l[3]),s&2&&W(t,l[1])},d(l){l&&L(e),l&&L(t),n=!1,r()}}}function Mn(i){let e,t,n,r,l;return{c(){e=H(i[1]),t=g(),n=p("input"),d(n,"id",i[1]),d(n,"type","text")},m(s,a){T(s,e,a),T(s,t,a),T(s,n,a),Xe(n,i[3]),r||(l=U(n,"input",i[4]),r=!0)},p(s,a){a&2&&W(e,s[1]),a&2&&d(n,"id",s[1]),a&8&&n.value!==s[3]&&Xe(n,s[3])},d(s){s&&L(e),s&&L(t),s&&L(n),r=!1,l()}}}function An(i){let e,t;function n(s,a){if(s[0]==="text")return Mn;if(s[0]==="checkbox")return En}let r=n(i),l=r&&r(i);return{c(){e=p("label"),l&&l.c(),d(e,"class",t=""+(i[0]+"-input-label svelte-1bf64bi")),d(e,"for",i[1])},m(s,a){T(s,e,a),l&&l.m(e,null)},p(s,[a]){r===(r=n(s))&&l?l.p(s,a):(l&&l.d(1),l=r&&r(s),l&&(l.c(),l.m(e,null))),a&1&&t!==(t=""+(s[0]+"-input-label svelte-1bf64bi"))&&d(e,"class",t),a&2&&d(e,"for",s[1])},i:I,o:I,d(s){s&&L(e),l&&l.d()}}}function Bn(i,e,t){let n,r=I,l=()=>(r(),r=ce(c,m=>t(3,n=m)),c);i.$$.on_destroy.push(()=>r());let{type:s="text"}=e,{label:a}=e,{value:c}=e;l();function o(){n=this.value,c.set(n)}function f(){n=this.checked,c.set(n)}return i.$$set=m=>{"type"in m&&t(0,s=m.type),"label"in m&&t(1,a=m.label),"value"in m&&l(t(2,c=m.value))},[s,a,c,n,o,f]}class A extends B{constructor(e){super();V(this,e,Bn,An,j,{type:0,label:1,value:2})}}function Vn(i){let e,t,n;return{c(){e=p("button"),e.textContent="Fullscreen"},m(r,l){T(r,e,l),t||(n=U(e,"click",i[5]),t=!0)},p:I,d(r){r&&L(e),t=!1,n()}}}function jn(i){let e,t,n;return{c(){e=p("button"),e.textContent="Side-by-Side"},m(r,l){T(r,e,l),t||(n=U(e,"click",i[4]),t=!0)},p:I,d(r){r&&L(e),t=!1,n()}}}function zn(i){let e,t,n,r,l,s,a,c,o,f,m,b,$,C,S,q,M,F,Z,N,Se,Y,qe,X,De,J,Ne,K,Ee,z,he,Me,G,Ae,Q,Be,x,Ve,ee,je,te,ze,P,be,Pe,ne,Re,le,He,ie,Fe,se,We,oe,ue,Oe,me,de,$e,Ze;l=new A({props:{type:"checkbox",label:"Camera on",value:Te}});function Ue(_,ge){return _[0]==="full"?jn:Vn}let pe=Ue(i),O=pe(i);return b=new A({props:{type:"checkbox",label:"Show Left Identifier",value:Qe}}),C=new A({props:{type:"text",label:"LeftID: Credit",value:et}}),q=new A({props:{type:"text",label:"LeftID: Location",value:tt}}),F=new A({props:{type:"text",label:"LeftID: Locale",value:nt}}),Y=new A({props:{type:"checkbox",label:"Show Right Identifier",value:xe}}),X=new A({props:{type:"text",label:"RightID: Credit",value:lt}}),J=new A({props:{type:"text",label:"RightID: Location",value:it}}),K=new A({props:{type:"text",label:"RightID: Locale",value:st}}),G=new A({props:{type:"text",label:"Headline",value:at}}),Q=new A({props:{type:"checkbox",label:"Show Byline",value:ct}}),x=new A({props:{type:"text",label:"Byline",value:ot}}),ee=new A({props:{type:"checkbox",label:"Show Tagline",value:ut}}),te=new A({props:{type:"text",label:"Tagline",value:ft}}),ne=new A({props:{type:"checkbox",label:"Live",value:rt}}),le=new A({props:{type:"text",label:"Program Title",value:mt}}),ie=new A({props:{type:"checkbox",label:"Show Markets",value:gt}}),se=new A({props:{type:"checkbox",label:"Pause Time Rotation",value:dt}}),{c(){e=p("div"),t=p("div"),n=p("h3"),n.textContent="Cameras",r=g(),w(l.$$.fragment),s=g(),a=p("button"),a.textContent="Disable Webcams",c=g(),O.c(),o=g(),f=p("h4"),f.textContent="Left Video Identifier",m=g(),w(b.$$.fragment),$=g(),w(C.$$.fragment),S=g(),w(q.$$.fragment),M=g(),w(F.$$.fragment),Z=g(),N=p("h4"),N.textContent="Right Video Identifier",Se=g(),w(Y.$$.fragment),qe=g(),w(X.$$.fragment),De=g(),w(J.$$.fragment),Ne=g(),w(K.$$.fragment),Ee=g(),z=p("div"),he=p("h3"),he.textContent="Headline Block",Me=g(),w(G.$$.fragment),Ae=g(),w(Q.$$.fragment),Be=g(),w(x.$$.fragment),Ve=g(),w(ee.$$.fragment),je=g(),w(te.$$.fragment),ze=g(),P=p("div"),be=p("h3"),be.textContent="Logo Block",Pe=g(),w(ne.$$.fragment),Re=g(),w(le.$$.fragment),He=g(),w(ie.$$.fragment),Fe=g(),w(se.$$.fragment),We=g(),oe=p("div"),ue=p("button"),ue.textContent="Prev Time Item",Oe=g(),me=p("button"),me.textContent="Next Time Item",d(t,"class","control-group svelte-3mv32y"),d(z,"class","control-group svelte-3mv32y"),d(P,"class","control-group svelte-3mv32y"),d(e,"class","controls svelte-3mv32y")},m(_,ge){T(_,e,ge),u(e,t),u(t,n),u(t,r),y(l,t,null),u(t,s),u(t,a),u(t,c),O.m(t,null),u(t,o),u(t,f),u(t,m),y(b,t,null),u(t,$),y(C,t,null),u(t,S),y(q,t,null),u(t,M),y(F,t,null),u(t,Z),u(t,N),u(t,Se),y(Y,t,null),u(t,qe),y(X,t,null),u(t,De),y(J,t,null),u(t,Ne),y(K,t,null),u(e,Ee),u(e,z),u(z,he),u(z,Me),y(G,z,null),u(z,Ae),y(Q,z,null),u(z,Be),y(x,z,null),u(z,Ve),y(ee,z,null),u(z,je),y(te,z,null),u(e,ze),u(e,P),u(P,be),u(P,Pe),y(ne,P,null),u(P,Re),y(le,P,null),u(P,He),y(ie,P,null),u(P,Fe),y(se,P,null),u(P,We),u(P,oe),u(oe,ue),u(oe,Oe),u(oe,me),de=!0,$e||(Ze=[U(a,"click",i[3]),U(ue,"click",function(){Je(i[1].decrement)&&i[1].decrement.apply(this,arguments)}),U(me,"click",function(){Je(i[1].increment)&&i[1].increment.apply(this,arguments)})],$e=!0)},p(_,[ge]){i=_,pe===(pe=Ue(i))&&O?O.p(i,ge):(O.d(1),O=pe(i),O&&(O.c(),O.m(t,o)))},i(_){de||(v(l.$$.fragment,_),v(b.$$.fragment,_),v(C.$$.fragment,_),v(q.$$.fragment,_),v(F.$$.fragment,_),v(Y.$$.fragment,_),v(X.$$.fragment,_),v(J.$$.fragment,_),v(K.$$.fragment,_),v(G.$$.fragment,_),v(Q.$$.fragment,_),v(x.$$.fragment,_),v(ee.$$.fragment,_),v(te.$$.fragment,_),v(ne.$$.fragment,_),v(le.$$.fragment,_),v(ie.$$.fragment,_),v(se.$$.fragment,_),de=!0)},o(_){h(l.$$.fragment,_),h(b.$$.fragment,_),h(C.$$.fragment,_),h(q.$$.fragment,_),h(F.$$.fragment,_),h(Y.$$.fragment,_),h(X.$$.fragment,_),h(J.$$.fragment,_),h(K.$$.fragment,_),h(G.$$.fragment,_),h(Q.$$.fragment,_),h(x.$$.fragment,_),h(ee.$$.fragment,_),h(te.$$.fragment,_),h(ne.$$.fragment,_),h(le.$$.fragment,_),h(ie.$$.fragment,_),h(se.$$.fragment,_),de=!1},d(_){_&&L(e),k(l),O.d(),k(b),k(C),k(q),k(F),k(Y),k(X),k(J),k(K),k(G),k(Q),k(x),k(ee),k(te),k(ne),k(le),k(ie),k(se),$e=!1,Bt(Ze)}}}function Pn(i,e,t){let n,r;E(i,Le,o=>t(0,n=o)),E(i,pt,o=>t(1,r=o));function l(o){Le.set(o)}function s(){Array.from(document.getElementsByTagName("video")).forEach(f=>{var m;(m=f.srcObject)==null||m.getTracks().forEach(b=>{b.enabled=!1,b.stop()}),f.srcObject=null}),Te.set(!1)}return[n,r,l,s,()=>l("double"),()=>l("full")]}class Rn extends B{constructor(e){super();V(this,e,Pn,zn,j,{})}}function Hn(i){let e,t,n,r,l,s,a,c,o,f,m,b;return n=new wt({props:{show:Qe,align:"left",credit:et,location:tt,locale:nt}}),l=new wt({props:{show:xe,align:"right",credit:lt,location:it,locale:st}}),a=new Gt({props:{layout:i[0]}}),o=new Nn({}),m=new Rn({}),{c(){e=p("div"),t=p("main"),w(n.$$.fragment),r=g(),w(l.$$.fragment),s=g(),w(a.$$.fragment),c=g(),w(o.$$.fragment),f=g(),w(m.$$.fragment),d(t,"class","svelte-9nd678"),d(e,"class","container svelte-9nd678")},m($,C){T($,e,C),u(e,t),y(n,t,null),u(t,r),y(l,t,null),u(t,s),y(a,t,null),u(t,c),y(o,t,null),T($,f,C),y(m,$,C),b=!0},p($,[C]){const S={};C&1&&(S.layout=$[0]),a.$set(S)},i($){b||(v(n.$$.fragment,$),v(l.$$.fragment,$),v(a.$$.fragment,$),v(o.$$.fragment,$),v(m.$$.fragment,$),b=!0)},o($){h(n.$$.fragment,$),h(l.$$.fragment,$),h(a.$$.fragment,$),h(o.$$.fragment,$),h(m.$$.fragment,$),b=!1},d($){$&&L(e),k(n),k(l),k(a),k(o),$&&L(f),k(m,$)}}}function Fn(i,e,t){let n;return E(i,Le,r=>t(0,n=r)),[n]}class Wn extends B{constructor(e){super();V(this,e,Fn,Hn,j,{})}}new Wn({target:document.getElementById("app")});