var j=Object.defineProperty,W=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,vt=Reflect.get,Ct=Reflect.set;var _=(t,i,n)=>i in t?j(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,g=(t,i)=>{for(var n in i||(i={}))I.call(i,n)&&_(t,n,i[n]);if(P)for(var n of P(i))q.call(i,n)&&_(t,n,i[n]);return t},A=(t,i)=>W(t,E(i));var k=(t,i)=>{var n={};for(var o in t)I.call(t,o)&&i.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&P)for(var o of P(t))i.indexOf(o)<0&&q.call(t,o)&&(n[o]=t[o]);return n};import{C as U,s as l,j as e,u as G,a as X,L as J,c as u,b as s,_ as K,r as L,F as w,O as Q,d as ee,e as te,f as ie,g as z,n as ne,h as oe,i as se,k as ae,R as le,l as re,P as ce,B as de}from"./vendor.cfbffb50.js";const me=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}};me();const y=.02,p={xs:0,sm:576-y,md:768-y,lg:992-y,xl:1200-y,xxl:1400-y},x={xs:`${p.xs}px`,sm:`${p.sm}px`,md:`${p.md}px`,lg:`${p.lg}px`,xl:`${p.xl}px`,xxl:`${p.xxl}px`},f={xs:`(min-width: ${x.xs})`,sm:`(min-width: ${x.sm})`,md:`(min-width: ${x.md})`,lg:`(min-width: ${x.lg})`,xl:`(min-width: ${x.xl})`,xxl:`(min-width: ${x.xxl})`},m={xs:`@media ${f.xs}`,sm:`@media ${f.sm}`,md:`@media ${f.md}`,lg:`@media ${f.lg}`,xl:`@media ${f.xl}`,xxl:`@media ${f.xxl}`},h={newYork:{small:"New York Small",medium:"New York Medium",extraLarge:"New York Extra Large"},sf:{mono:"SF Mono",proText:"SF Pro Text",proDisplay:"SF Pro Display"}},b=15,pe=`${b}px`,N={sm:`${(p.sm-b*2)/2}px`,md:`${(p.md-b*2)/2}px`,lg:`${(p.lg-b*2)/2}px`,xl:`${(p.xl-b*2)/2}px`,xxl:`${(p.xxl-b*2)/2}px`},D=U`
  padding: 0 ${pe};

  @media ${f.sm} {
    padding: 0 calc(50vw - ${N.sm});
  }

  ${m.md} {
    padding: 0 calc(50vw - ${N.md});
  }

  ${m.lg} {
    padding: 0 calc(50vw - ${N.lg});
  }

  ${m.xl} {
    padding: 0 calc(50vw - ${N.xl});
  }
  ${m.xxl} {
    padding: 0 calc(50vw - ${N.xxl});
  }
`,he=l.section`
  ${D}
`,V=({children:t})=>e(he,{children:t}),S=a=>{var r=a,{className:t,children:i,to:n}=r,o=k(r,["className","children","to"]);const d=G(n),B=X({path:d.pathname,end:!0});return e(J,A(g({className:u(t,B?"is-active":""),to:n},o),{children:i}))},ue=l.svg`
  display: flex;
  max-width: 80%;

  ${m.lg} {
    max-width: unset;
  }
`,T=({theme:t="light"})=>{const i=t==="light"?"black":"white";return s(ue,{className:"logo",width:"397",height:"39",viewBox:"0 0 397 39",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M1.46398 32H15.588V31.252L11.012 30.68C9.69198 30.504 8.72399 29.492 8.72399 28.128V7.05204L26.896 32H28.656V4.98404C28.656 3.66404 29.58 2.56404 30.9 2.38804L34.244 1.94804V1.20004H20.164V1.94804L24.74 2.52004C26.06 2.69604 27.028 3.70804 27.028 5.07204V25.4L12.772 5.55604C9.82399 1.42004 6.74398 1.20004 0.583984 1.20004V1.94804C3.26798 2.34404 5.90798 3.35604 7.05199 5.38004V28.216C7.05199 29.536 6.12798 30.636 4.80798 30.812L1.46398 31.252V32Z",fill:i}),e("path",{d:"M59.059 32.704C68.387 32.704 75.295 26.192 75.295 16.6C75.295 7.00804 68.387 0.540039 59.059 0.540039C49.7309 0.540039 42.779 7.00804 42.779 16.6C42.779 26.192 49.7309 32.704 59.059 32.704ZM59.103 31.164C51.007 31.164 47.443 24.168 47.443 15.588C47.443 7.58004 51.183 2.08004 59.015 2.08004C66.935 2.08004 70.587 8.94404 70.587 17.26C70.587 25.532 67.243 31.164 59.103 31.164Z",fill:i}),e("path",{d:"M98.3437 17.128H99.1357C103.668 29.668 111.412 35.3 115.856 38.072C109.608 29.536 106.396 23.904 103.536 16.732C108.904 15.808 111.852 13.3 111.852 8.94404C111.852 3.40004 106.836 1.20004 97.9037 1.20004H84.7037V1.94804L87.5197 2.30004C88.8397 2.47604 89.8077 3.48804 89.8077 4.85204V28.348C89.8077 29.712 88.8397 30.724 87.5197 30.9L84.7037 31.252V32H99.2677V31.252L96.4517 30.9C95.1317 30.724 94.1637 29.712 94.1637 28.348V17.128H98.3437ZM94.1637 2.74004H99.0037C104.988 2.74004 107.672 4.80804 107.672 9.16404C107.672 13.52 104.68 15.588 98.2997 15.588H94.1637V2.74004Z",fill:i}),e("path",{d:"M123.883 32H138.007C148.919 32 155.915 26.456 155.915 16.688C155.915 6.43604 148.919 1.20004 138.007 1.20004H123.883V1.94804L126.699 2.30004C128.019 2.47604 128.987 3.48804 128.987 4.85204V28.348C128.987 29.712 128.019 30.724 126.699 30.9L123.883 31.252V32ZM135.631 30.46C134.311 30.46 133.343 29.712 133.343 28.348V2.74004H137.655C144.343 2.74004 151.251 5.51204 151.251 16.688C151.251 27.028 145.135 30.46 137.655 30.46H135.631Z",fill:i}),e("path",{d:"M165.597 32H180.161V31.252L177.345 30.9C176.025 30.724 175.057 29.712 175.057 28.348V4.85204C175.057 3.48804 176.025 2.47604 177.345 2.30004L180.161 1.94804V1.20004H165.597V1.94804L168.413 2.30004C169.733 2.47604 170.701 3.48804 170.701 4.85204V28.348C170.701 29.712 169.733 30.724 168.413 30.9L165.597 31.252V32Z",fill:i}),e("path",{d:"M206.292 32.66C211.396 32.66 216.852 30.724 220.416 27.38V25.048C216.984 28.26 212.276 29.888 207.612 29.888C200.704 29.888 195.028 24.872 195.028 16.6C195.028 7.93204 198.988 2.08004 206.292 2.08004C213.596 2.08004 216.412 7.49204 215.444 16.996H216.5L219.14 5.24804C216.632 2.38804 209.812 0.540039 206.292 0.540039C196.656 0.540039 190.144 7.00804 190.144 16.6C190.144 26.236 196.7 32.66 206.292 32.66Z",fill:i}),e("path",{d:"M263.086 17.128H263.878C268.41 29.668 276.154 35.3 280.598 38.072C274.35 29.536 271.138 23.904 268.278 16.732C273.646 15.808 276.594 13.3 276.594 8.94404C276.594 3.40004 271.578 1.20004 262.646 1.20004H249.446V1.94804L252.262 2.30004C253.582 2.47604 254.55 3.48804 254.55 4.85204V28.348C254.55 29.712 253.582 30.724 252.262 30.9L249.446 31.252V32H264.01V31.252L261.194 30.9C259.874 30.724 258.906 29.712 258.906 28.348V17.128H263.086ZM258.906 2.74004H263.746C269.73 2.74004 272.414 4.80804 272.414 9.16404C272.414 13.52 269.422 15.588 263.042 15.588H258.906V2.74004Z",fill:i}),e("path",{d:"M304.608 32.704C313.936 32.704 320.844 26.192 320.844 16.6C320.844 7.00804 313.936 0.540039 304.608 0.540039C295.28 0.540039 288.328 7.00804 288.328 16.6C288.328 26.192 295.28 32.704 304.608 32.704ZM304.652 31.164C296.556 31.164 292.992 24.168 292.992 15.588C292.992 7.58004 296.732 2.08004 304.564 2.08004C312.484 2.08004 316.136 8.94404 316.136 17.26C316.136 25.532 312.792 31.164 304.652 31.164Z",fill:i}),e("path",{d:"M344.885 32.66C351.485 32.66 356.149 29.316 356.149 24.476C356.149 12.64 337.933 14.048 337.933 7.49204C337.933 4.36804 341.101 2.08004 345.809 2.08004C351.221 2.08004 353.245 4.98404 353.773 12.64H354.785L355.225 2.65204C352.629 1.50804 349.329 0.540039 345.809 0.540039C338.945 0.540039 334.677 3.62004 334.677 7.93204C334.677 19.416 352.981 17.612 352.981 25.136C352.981 28.656 349.373 31.12 345.325 31.12C339.649 31.12 337.361 28.084 336.305 19.372H335.293L334.413 29.8C337.449 31.472 340.265 32.66 344.885 32.66Z",fill:i}),e("path",{d:"M367.155 32H395.095L396.414 21.616H395.667C392.983 28.568 391.135 30.46 387.219 30.46H378.902C377.582 30.46 376.615 29.712 376.615 28.348V17.128H386.954C388.142 17.128 389.33 17.964 389.418 19.108L389.902 24.256H390.651V8.90004H389.902L389.418 13.608C389.286 14.796 388.142 15.588 386.954 15.588H376.615V2.74004H386.339C389.595 2.74004 392.41 4.28004 394.171 11.628H394.918L394.039 1.20004H367.155V1.94804L369.97 2.30004C371.29 2.47604 372.259 3.48804 372.259 4.85204V28.348C372.259 29.712 371.29 30.724 369.97 30.9L367.155 31.252V32Z",fill:i})]})},fe=l.footer`
  background: black;
  padding-top: 18px;
  padding-bottom: 36px;

  .marquee-item {
    margin: 0;
    padding: 0 16px;
    font-family: ${h.sf.proText};
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    /* identical to box height, or 140% */

    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: #ffffff;

    &.is-even {
      font-weight: 800;
    }
  }

  section {
    max-width: 488px;
    margin: 100px auto 0;
  }
  svg {
    margin: 0 auto 24px;
  }

  .footer__text {
    margin: 0 0 32px 0;
    font-family: ${h.newYork.small};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    text-align: center;

    color: #ffffff;
  }

  .social-link-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 28px;

    margin: 0;
    padding: 0;

    &__item {
      list-style: none;
    }

    &__social-link {
      font-family: ${h.sf.proText};
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 170%;
      /* or 27px */

      text-decoration: underline;

      color: #ffffff;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .copyright {
    margin-top: 64px;
    font-family: ${h.sf.proText};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 140%;
    /* or 17px */
    text-align: center;

    color: #ffffff;
  }
`,ge=["Digital product design","Remote work","UX design","Distributed teams","Creativity","Strategy","Suspense","Growth"],xe=()=>s(fe,{children:[e(K,{gradient:!1,children:ge.map((t,i)=>e("p",{className:u("marquee-item",i%2==0?"is-odd":"is-even"),children:t},t))}),s(V,{children:[e(S,{to:"/",children:e(T,{theme:"dark"})}),e("p",{className:"footer__text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus."}),s("ul",{className:"social-link-list",children:[e("li",{className:"social-link-list__item",children:e("a",{className:"social-link-list__social-link social-link",href:"/",children:"Twitter"})}),e("li",{className:"social-link-list__item",children:e("a",{className:"social-link-list__social-link social-link",href:"/",children:"LinkedIn"})}),e("li",{className:"social-link-list__item",children:e("a",{className:"social-link-list__social-link social-link",href:"/",children:"RSS"})})]}),s("p",{className:"copyright",children:["\xA9 2012\u20132020 Nordic Rose Co. ",e("br",{}),"All rights reserved."]})]})]}),be=l.button`
  appearance: none;
  background: none;
  border: none;
  color: currentColor;
  font-family: inherit;
  font-size: 1em;
  margin: 0;
  padding: 0;

  color: #4a4a4a;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;

  ${m.lg} {
    display: none;
  }

  span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;
    &:nth-child(1) {
      top: calc(50% - 6px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &.is-active {
    span {
      &:nth-child(1) {
        transform: translateY(5px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-5px) rotate(-45deg);
      }
    }
  }
`,ve=({className:t="",isActive:i=!1,onClickHandler:n})=>{const o=u("navbar-burger",i?"is-active":"",t);return s(be,{className:o,"aria-label":"menu","aria-expanded":"false","data-target":"navbar",onClick:()=>{n()},children:[e("span",{"aria-hidden":"true"}),e("span",{"aria-hidden":"true"}),e("span",{"aria-hidden":"true"})]})},Ce=l(S)`
  position: relative;

  flex-grow: 0;
  flex-shrink: 0;

  font-family: ${h.newYork.small};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 170%;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;

  color: #000000;

  &:before {
    content: '';

    position: absolute;
    bottom: 0;

    left: 0;
    width: 0;
    height: 1px;
    background: black;
    transition: width ease-in-out 0.3s;
  }
  &.is-active:before {
    width: 100%;
  }

  ${m.lg} {
    &:before {
      /* padding of navbar -1px */
      bottom: -39px;
    }
  }
`,M=({children:t,to:i,className:n})=>{const o=u("navbar-item",n);return e(Ce,{className:o,to:i,children:t})},we=l.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0 15px 0;

  ${m.lg} {
    padding: 50px 0 30px 0;
  }
`,ye=l.div`
  display: flex;
  flex: 1;
`,Ne=l(S)`
  display: flex;
  align-items: center;
`,Se=l.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
  padding: 0.5rem 0;
  display: none;
  &.is-active {
    display: block;
  }
  ${m.lg} {
    display: flex;
    align-items: stretch;
    box-shadow: none;
    width: auto;
  }
`,Pe=l.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;

  ${m.lg} {
    flex-direction: row;
  }
`,ke=l.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;
  ${m.lg} {
    flex-direction: row;
  }
`,Le=()=>{const[t,i]=L.exports.useState(!1),n=()=>{i(!t)};return e(w,{children:s(we,{className:"navbar",role:"navigation","aria-label":"main navigation",children:[s(ye,{className:"navbar-brand",children:[e(Ne,{className:"navbar-item",to:c.Index,children:e(T,{})}),e(ve,{isActive:t,onClickHandler:n})]}),s(Se,{id:"navbar",className:u({"navbar-menu":!0,"is-active":t}),children:[s(Pe,{className:"navbar-start",children:[e(M,{to:c.Index,children:"Home"}),e(M,{to:c.PostListPage,children:"Blog"}),e(M,{to:c.PostFormPage,children:"Post form"})]}),e(ke,{className:"navbar-end",children:e("div",{className:"navbar-item"})})]})]})})},$e=l.header`
  ${D}
  margin-bottom: 52px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
`,He=()=>e($e,{children:e(Le,{})}),Ve=()=>s(w,{children:[e(He,{}),e(Q,{}),e(xe,{})]}),Me=l.picture`
  img {
    max-width: 100%;
    height: auto;
  }
`,Z=({className:t,loading:i="lazy",src:n,width:o,height:a,alt:r})=>e(Me,{className:u(t),children:e("img",{loading:i,src:n,alt:r,width:o,height:a})}),Fe=l.figure`
  margin: 52px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  figcaption {
    max-width: 480px;
    margin-top: 12px;
    font-family: ${h.sf.proText};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    text-align: center;

    color: #000000;
  }
`,Ie=n=>{var o=n,{description:t}=o,i=k(o,["description"]);return s(Fe,{children:[e(Z,g({},i)),t&&e("figcaption",{children:t})]})},qe=l(Z)`
  display: flex;
  justify-content: center;
`,_e=i=>{var t=k(i,[]);return e(qe,g({},t))},Ae=l.section`
  max-width: 640px;
  margin: 56px auto;
  padding: 0 15px;
`,v=({children:t})=>e(Ae,{children:t}),ze=l.ul`
  padding: 0 16px;

  font-family: ${h.newYork.medium};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  /* identical to box height, or 34px */

  color: #000000;
`,De=({children:t})=>e(ze,{children:t}),Te=l.li``,F=({children:t})=>e(Te,{children:t}),Ze=l.h2`
  margin-top: 24px;
  margin-bottom: 24px;
  font-family: ${h.newYork.medium};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  /* or 34px */

  color: #000000;
`,Oe=({children:t})=>e(Ze,{children:t}),Re=l.h2`
  max-width: 626px;
  margin: 0 auto;
  padding-bottom: 52px;

  font-family: ${h.sf.mono};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  /* or 34px */

  text-align: center;

  color: #000000;

  ${m.lg} {
    font-size: 16px;
  }
`,Ye=({children:t})=>e(Re,{children:t}),Be=l.h1`
  max-width: 858px;
  margin: 0 auto;
  padding-bottom: 32px;

  font-family: ${h.newYork.extraLarge};
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;

  text-align: center;

  color: #000000;

  ${m.lg} {
    font-size: 54px;
  }
`,je=({children:t})=>e(Be,{children:t}),We=l.p`
  margin: 16px 0;
  font-family: ${h.newYork.medium};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  /* or 34px */

  color: #000000;
`,C=({children:t})=>e(We,{children:t}),Ee={src:"/src/public/images/thumbnail.png",width:1440,height:900,alt:"Alt for default thumbnail"},Ue={src:"/src/public/images/pic.png",width:854,height:570,alt:"Alt for default pic",description:"Image caption centered this way and I\u2019ll make this a bit longer to indicate the amount of line-height."},Ge=()=>s(w,{children:[s(V,{children:[e(je,{children:"A few words about this blog platform, Ghost, and how this site was made"}),e(Ye,{children:"Why Ghost (& Figma) instead of Medium, WordPress or other options?"})]}),e(_e,g({},Ee)),s(v,{children:[e(Oe,{children:"Next on the pipeline"}),s(C,{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. ",e("br",{})," ",e("br",{}),"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus."]})]}),e(Ie,g({},Ue)),e(v,{children:s(C,{children:["Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",e("br",{}),e("br",{}),"Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla."]})}),e(v,{children:s(C,{children:["Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. ",e("br",{}),e("br",{}),"In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo."]})}),s(v,{children:[e(C,{children:"A list looks like this:"}),s(De,{children:[e(F,{children:"First item in the list"}),e(F,{children:"Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet"}),e(F,{children:"Third item in the list"})]})]}),e(v,{children:e(C,{children:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula."})}),e(v,{children:s(C,{children:["Thanks for reading,",e("br",{}),"Mika"]})})]}),Xe=l.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;

  &.is-1 {
    flex: none;
    width: 8.33333%;
  }

  &.is-offset-1 {
    margin-left: 8.33333%;
  }

  &.is-2 {
    flex: none;
    width: 16.66667%;
  }

  &.is-offset-2 {
    margin-left: 16.66667%;
  }

  &.is-3 {
    flex: none;
    width: 25%;
  }

  &.is-offset-3 {
    margin-left: 25%;
  }

  &.is-4 {
    flex: none;
    width: 33.33333%;
  }

  &.is-offset-4 {
    margin-left: 33.33333%;
  }

  &.is-5 {
    flex: none;
    width: 41.66667%;
  }

  &.is-offset-5 {
    margin-left: 41.66667%;
  }

  &.is-6 {
    flex: none;
    width: 50%;
  }

  &.is-offset-6 {
    margin-left: 50%;
  }

  &.is-7 {
    flex: none;
    width: 58.33333%;
  }

  &.is-offset-7 {
    margin-left: 58.33333%;
  }

  &.is-8 {
    flex: none;
    width: 66.66667%;
  }

  &.is-offset-8 {
    margin-left: 66.66667%;
  }

  &.is-9 {
    flex: none;
    width: 75%;
  }

  &.is-offset-9 {
    margin-left: 75%;
  }

  &.is-10 {
    flex: none;
    width: 83.33333%;
  }

  &.is-offset-10 {
    margin-left: 83.33333%;
  }

  &.is-11 {
    flex: none;
    width: 91.66667%;
  }

  &.is-offset-11 {
    margin-left: 91.66667%;
  }

  &.is-12 {
    flex: none;
    width: 100%;
  }

  &.is-offset-12 {
    margin-left: 100%;
  }
`,O=({children:t,className:i})=>{const n=u("column",i);return e(Xe,{className:n,children:t})},Je=l.div`
  display: flex;

  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;

  &:last-child {
    margin-bottom: -0.75rem;
  }

  &:not(:last-child) {
    margin-bottom: calc(1.5rem - 0.75rem);
  }
`,Ke=({children:t})=>e(Je,{children:t}),Qe=({children:t})=>e(O,{className:"is-4",children:t}),$=({children:t,sidebar:i})=>e("main",{className:"main",children:e(V,{children:s(Ke,{children:[e(O,{children:t}),i&&e(Qe,{children:i})]})})}),et=()=>s($,{children:[e("h1",{children:"404 not found"}),e(S,{className:"navbar-item",to:c.Index,children:"Home"})]}),tt=({handleSubmit:t})=>{const[i,n]=L.exports.useState(""),[o,a]=L.exports.useState(""),r=d=>{if(d.preventDefault(),!i||!o){console.log("error PostForm handler");return}t(i,o),console.log("success PostForm handler")};return e("form",{method:"post",onSubmit:d=>r(d),children:s("fieldset",{children:[s("div",{className:"field",children:[e("label",{htmlFor:"title",className:"label",children:"Title"}),e("div",{className:"control",children:e("input",{id:"title",className:"input",type:"text",name:"title",placeholder:'e.g. "More cats for god of cats"',value:i,onChange:d=>{n(d.target.value)}})})]}),s("div",{className:"field",children:[e("label",{htmlFor:"content",className:"label",children:"Content"}),e("div",{className:"control",children:e("textarea",{className:"textarea",name:"content",placeholder:'e.g. "Some content about our godlike cats"',rows:4,value:o,onChange:d=>{a(d.target.value)}})})]}),e("div",{className:"field",children:e("div",{className:"control",children:e("button",{className:"button is-primary",children:"Submit"})})})]})})},R=()=>ee(),Y=te,it=[],H=ie({name:"posts",initialState:it,reducers:{postAdded:(t,i)=>{t.push(i.payload)},postRemoved:(t,i)=>t.filter(n=>n.id!==i.payload)}}),{postAdded:nt,postRemoved:ot}=H.actions;var st=H.reducer;const at=()=>{const t=z(),i=R();return s($,{children:[e("h1",{children:"Add post"}),e(tt,{handleSubmit:(o,a)=>{const r={id:ne(),title:o,content:a};i(nt(r)),t(c.PostListPage+r.id,{replace:!0})}})]})},lt=({id:t,title:i})=>{const n=u({post:!0,[`post-${t}`]:!0});return e("section",{className:n,children:e("div",{className:"card",children:e("div",{className:"card-content",children:s("div",{className:"media",children:[e("div",{className:"media-content",children:e("p",{className:"title is-4",children:e(S,{to:c.PostListPage+t,children:i})})}),e("div",{className:"media-right"})]})})})})},rt=l.ol`
  && {
    margin-left: 0;
  }
`,ct=l.li`
  list-style: none;
`,dt=({posts:t})=>e(rt,{children:t.map(({id:i,title:n,content:o})=>e(ct,{children:e(lt,{id:i,title:n,content:o})},i))}),mt=()=>{const t=Y(i=>i.posts);return s($,{children:[e("h1",{children:"Blog"}),e(dt,{posts:t})]})},pt=({id:t,title:i,content:n})=>{const o=u({post:!0,[`post-${t}`]:!0});return e("section",{className:o,children:e("div",{className:"card",children:s("div",{className:"card-content",children:[s("div",{className:"media",children:[e("div",{className:"media-content",children:e("p",{className:"title is-4",children:i})}),e("div",{className:"media-right"})]}),e("div",{className:"content",children:n})]})})})},ht=()=>{const{id:t}=oe(),i=z(),n=R(),o=Y(r=>r.posts.find(d=>d.id==t));L.exports.useEffect(()=>{o||i(c.NotFound)},[o]);const a=r=>{n(ot(r)),i(c.PostListPage)};return e($,{children:o&&s(w,{children:[e(pt,{id:o.id,title:o.title,content:o.content}),e("button",{className:"button is-danger",onClick:()=>{a(o.id)},children:"Delete"})]})})};var c;(function(t){t.Index="/",t.PostListPage="/posts/",t.PostPage="/posts/:id",t.PostFormPage="/posts/new",t.NotFound="/404",t.WildCard="*"})(c||(c={}));const ut=[{path:c.Index,element:e(Ve,{}),children:[{index:!0,element:e(Ge,{})},{path:c.PostListPage,element:e(mt,{})},{path:c.PostPage,element:e(ht,{})},{path:c.PostFormPage,element:e(at,{})},{path:c.WildCard,element:e(et,{})}]}],ft=()=>{const t=se(ut);return e(w,{children:t})},gt=t=>i=>n=>{const o=i(n);if(console.log("mid"),H.actions.postAdded.match(n)||H.actions.postRemoved.match(n)){const a=t.getState();console.log(a.posts),localStorage.setItem("posts",JSON.stringify(a.posts))}return o},xt=()=>{if(localStorage.getItem("posts")!==null)return{posts:JSON.parse(localStorage.getItem("posts")||"[]")}},bt=ae({reducer:{posts:st},preloadedState:xt(),middleware:t=>t().concat(gt)});le.render(e(re.StrictMode,{children:e(ce,{store:bt,children:e(de,{children:e(ft,{})})})}),document.getElementById("root"));
