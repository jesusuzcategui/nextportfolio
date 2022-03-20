var N=Object.defineProperty,D=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var T=(n,t,o)=>t in n?N(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,P=(n,t)=>{for(var o in t||(t={}))M.call(t,o)&&T(n,o,t[o]);if(B)for(var o of B(t))O.call(t,o)&&T(n,o,t[o]);return n},j=(n,t)=>D(n,R(t));import{j as e,F as u,B as p,A as z,C as g,a as s,T as W,b as a,c as f,L as m,r as h,u as G,P as E,d as b,e as F,I as J,f as _,g as $,G as d,s as H,h as U,l as I,i as w,k as S,m as A,n as K,S as V,o as q,p as Y,q as Q,R as X,t as y,v as Z,w as ee,x as te,y as ne,z as re}from"./vendor.cde9ddf0.js";const ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}};ie();const oe=()=>e(u,{children:e(p,{sx:{flexGrow:1},children:e(z,{color:"secondary",position:"static",children:e(g,{maxWidth:"lg",children:s(W,{children:[e(a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Jes\xFAs Uzc\xE1tegui"}),e(f,{component:m,to:"/",color:"inherit",children:"Home"}),e(f,{component:m,to:"/blog",color:"inherit",children:"Blog"}),e(f,{component:m,to:"/about",color:"inherit",children:"About"})]})})})})}),se=()=>{const[n]=h.exports.useState(new Date().getFullYear()),t=G();return e(u,{children:e("footer",{children:e(E,{square:!0,style:{background:t.palette.secondary.main,padding:"2rem 0"},elevation:2,children:s(a,{color:"white",align:"center",variant:"small",component:"p",children:["Portfolio | \xA9 ",n," - All Right Reserved"]})})})})},k="https://graphql.contentful.com/content/v1/spaces/n6ixojeus49z/",C="Bearer ohqsII-Kd3JNxDbNmje6bi6M3wvU8frxo5saDpc0f0c",le=async()=>{try{const n=`
        {
            skillCollection(limit: 50) {
              items {
                titleskill,
                experience,
                logo {
                  url
                }
              }
            }
        }
        `;let t=null;const{status:o,data:i}=await b.post(k,JSON.stringify({query:n}),{headers:{"Content-Type":"application/json",Authorization:C}});return t=[o,i],t}catch(n){throw new Error(n)}},L=async(n=15)=>{try{const t=`
    {
      blogCollection(limit: ${n}, order: sys_publishedAt_DESC) {
        items {
          sys {
            id,
            publishedAt
          },
          title,
          imagen {
            url
          },
          metadescripcion,
          content {
            json
          },
          contentfulMetadata {
            tags {
              id,
              name
            }
          }
        },
        total,
        limit,
        skip
      }
    }`;let o=null;const{status:i,data:r}=await b.post(k,JSON.stringify({query:t}),{headers:{"Content-Type":"application/json",Authorization:C}});return o=[i,r],o}catch(t){throw new Error(t)}},ae=async n=>{try{const t=`
    {
      blogCollection(where: {
        title_contains: "${n}"
      }){
        items {
          title,
          imagen {
            url
          },
          sys {
            id,
            publishedAt
          }
        }
      }
    }`;let o=null;const{status:i,data:r}=await b.post(k,JSON.stringify({query:t}),{headers:{"Content-Type":"application/json",Authorization:C}});return o=[i,r],o}catch(t){throw new Error(t)}},ce=async(n=null)=>{try{const t=`
    {
      blog(id: "${n}"){
        title,
        content {
          json
        },
        sys {
          publishedAt,
        },
        contentfulMetadata {
          tags {
            id, 
            name
          }
        },
        imagen {
          url
        }
      }
    }`;let o=null;const{status:i,data:r}=await b.post(k,JSON.stringify({query:t}),{headers:{"Content-Type":"application/json",Authorization:C}});return o=[i,r],o}catch(t){throw new Error(t)}},v=()=>{const[n,t]=h.exports.useState(""),[o]=F();return h.exports.useEffect(()=>{let r=o.get("q");t(r===null?"":r)},[]),e(u,{children:s(E,{action:"/search",method:"get",component:"form",sx:{p:"5px 10px",display:"flex",alignItems:"center",width:"100%"},children:[e(J,{name:"q",sx:{ml:1,flex:1},placeholder:"Search articles",inputProps:{"aria-label":"search articles"},value:n,onChange:r=>{t(r.target.value)}}),e(_,{type:"submit",sx:{p:"10px"},"aria-label":"search",children:e($,{})})]})})},de=()=>e(u,{children:e(p,{className:"gradientBlueDark",sx:{width:"100%",height:"425px",display:"flex",alignItems:"center",padding:"0px 2rem"},children:e(g,{maxWidth:"lg",children:s(d,{sx:{alignItems:"center"},className:"presentationGrid",rowGap:3,container:!0,children:[e(d,{xs:12,md:7,item:!0,children:e(v,{})}),s(d,{xs:12,md:5,item:!0,children:[e(a,{sx:{},align:"right",variant:"h2",component:"div",children:"Jes\xFAs Uzc\xE1tegui"}),e(a,{sx:{},align:"right",variant:"p",component:"div",children:"FullStack web developer"}),e(a,{sx:{},align:"right",variant:"span",component:"div",children:"Hello, I present my portfolio and blog where you will find some interesting articles and courses if you want to learn programming"})]})]})})})}),he=H(U)(({theme:n})=>({height:10,borderRadius:5,[`&.${I.colorPrimary}`]:{backgroundColor:n.palette.grey[n.palette.mode==="light"?200:800]},[`& .${I.bar}`]:{borderRadius:5,backgroundColor:n.palette.mode==="light"?"#1a90ff":"#308fe8"}})),ue=({title:n,image:t,porcent:o})=>e(u,{children:s(w,{children:[e(S,{component:"img",height:"80",image:t,alt:n,style:{objectFit:"contain"}}),s(A,{children:[e(a,{gutterBottom:!0,variant:"span",component:"div",children:n}),e(he,{variant:"determinate",value:o})]})]})});const pe=({data:n})=>e(u,{children:s(K,{sx:{my:"3rem"},children:[e(a,{sx:{my:"1.5rem"},align:"center",variant:"h4",component:"div",children:"My Skills"}),e(V,j(P({},{dots:!1,infinite:!0,speed:800,slidesToShow:6,slidesToScroll:6,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}),{children:n&&n.length&&n.map((o,i)=>e(ue,{title:o.titleskill,image:o.logo.url,porcent:o.experience},i))}))]})}),me=()=>{const[n,t]=h.exports.useState([]),o=async()=>{try{const[i,r]=await L(10);t(r.data.blogCollection.items)}catch(i){throw new Error(i)}};return h.exports.useEffect(()=>{o()},[]),s(u,{children:[e(a,{sx:{my:"1.5rem"},align:"center",variant:"h4",component:"div",children:"Last posts"}),e(d,{sx:{my:"3rem"},container:!0,rowGap:3,columnSpacing:3,children:n&&n.length>0&&n.map((i,r)=>e(d,{item:!0,xs:12,md:6,children:s(w,{children:[e(S,{component:"img",height:"200",image:i.imagen.url,alt:i.title,style:{objectFit:"cover"}}),s(A,{children:[e(a,{gutterBottom:!0,variant:"h5",component:"div",children:i.title}),e(a,{gutterBottom:!0,variant:"p",component:"div",children:i.metadescripcion})]}),e(q,{children:e(f,{component:m,to:"/blog/"+i.sys.id,color:"inherit",children:"Ver"})})]})},i.sys.id))})]})},ge=()=>{const[n,t]=h.exports.useState(null),o=async()=>{const[i,r]=await le();t(r.data.skillCollection.items)};return h.exports.useEffect(()=>{o()},[]),s(u,{children:[e(de,{}),s(g,{maxWidth:"md",children:[n&&e("div",{children:e(pe,{data:n})}),e(me,{})]})]})},xe=()=>e(u,{children:e("h1",{children:"Pagina de about"})}),ye=()=>{const[n,t]=h.exports.useState([]),o=async()=>{try{const[i,r]=await L(30);console.log(r),t(r.data.blogCollection.items)}catch(i){console.log(i)}};return h.exports.useEffect(()=>{o()},[]),e(u,{children:s(g,{maxWidth:"lg",children:[e(a,{sx:{},align:"center",variant:"h2",component:"div",children:"Blog"}),n&&n.length>0&&e(p,{children:e(d,{columnSpacing:3,sx:{my:"3rem"},container:!0,children:n.map(i=>e(d,{item:!0,xs:12,md:6,children:s(w,{children:[e(S,{component:"img",height:"200",image:i.imagen.url,alt:i.title,style:{objectFit:"cover"}}),s(A,{children:[e(a,{gutterBottom:!0,variant:"h5",component:"div",children:i.title}),e(a,{gutterBottom:!0,variant:"p",component:"div",children:i.metadescripcion})]}),e(q,{children:e(f,{component:m,to:"/blog/"+i.sys.id,color:"inherit",children:"Ver"})})]})},i.sys.id))})})]})})},fe=()=>{const n=Y(),[t,o]=h.exports.useState(null),i=async()=>{try{const[r,c]=await ce(n.id);o(c.data.blog)}catch(r){throw new Error(r)}};return h.exports.useEffect(()=>{i(),console.log(t)},[]),e(u,{children:e(g,{sx:{my:"2rem"},maxWidth:"lg",children:t&&s(p,{children:[e(a,{sx:{},align:"center",variant:"h3",component:"div",children:t.title}),e("div",{children:t.content&&e("div",{children:t.content.json&&e("div",{children:t.content.json.content&&t.content.json.content.length>0&&e("div",{children:t.content.json.content.map((r,c)=>e("div",{children:r&&r.content&&r.content.length>0&&r.content.map((l,x)=>s("div",{children:[l.marks.length===0&&e(a,{sx:{my:"1rem"},align:"left",variant:"p",component:"div",children:l.value}),l.marks.length==1&&l.marks[0].type=="code"&&e("div",{children:e("div",{style:{margin:"auto",display:"flex",justifyContent:"center"},dangerouslySetInnerHTML:{__html:l.value}})})]},x))},c))})})})})]})})})},ve=()=>{const[n]=F(),[t,o]=h.exports.useState(""),[i,r]=h.exports.useState(null),c=async()=>{try{const[l,x]=await ae(t);console.log(x),r(x.data.blogCollection.items)}catch(l){r(null),console.log({error:l})}};return h.exports.useEffect(()=>{let l=n.get("q");o(l||""),c()},[t]),s(u,{children:[t===""&&i===null&&e("div",{children:e(p,{className:"gradientBlueDark",sx:{width:"100%",height:"calc(100vh - (64px + 88px))",display:"flex",alignItems:"center",padding:"0px 2rem"},children:s(d,{container:!0,children:[e(d,{xs:12,md:12,item:!0,children:e(a,{sx:{},align:"center",variant:"h2",component:"div",children:"Search"})}),e(d,{xs:12,md:12,item:!0,children:e(v,{})})]})})}),t!==""&&e("div",{children:(i===null||Array.isArray(i)===!0&&i.length===0)&&s("div",{children:[e(p,{className:"gradientBlueDark",sx:{width:"100%",height:"200px",display:"flex",alignItems:"center",padding:"0px 2rem"},children:s(d,{container:!0,children:[e(d,{xs:12,md:12,item:!0,children:e(a,{sx:{},align:"center",variant:"h2",component:"div",children:"Search"})}),e(d,{xs:12,md:12,item:!0,children:e(v,{})})]})}),e(p,{sx:{width:"100%",display:"flex",alignItems:"center",padding:"0px 2rem"},children:e(a,{sx:{},align:"center",variant:"h4",component:"div",children:"Sorry we did not get results with this search"})})]})}),t!==""&&e("div",{children:Array.isArray(i)===!0&&i.length>0&&s("div",{children:[e(p,{className:"gradientBlueDark",sx:{width:"100%",height:"200px",display:"flex",alignItems:"center",padding:"0px 2rem"},children:s(d,{container:!0,children:[e(d,{xs:12,md:12,item:!0,children:e(a,{sx:{},align:"center",variant:"h2",component:"div",children:"Search"})}),e(d,{xs:12,md:12,item:!0,children:e(v,{})})]})}),e(g,{sx:{my:"2rem"},maxWidth:"sm",children:i.map(l=>s(w,{sx:{display:"flex",mb:"1rem"},children:[s(p,{sx:{display:"flex",flexDirection:"column"},children:[s(A,{sx:{flex:"1 0 auto"},children:[e(a,{component:m,to:"/blog/"+l.sys.id,variant:"h5",children:l.title}),e(a,{variant:"subtitle1",color:"text.secondary",component:"div",children:l.sys.publishedAt})]}),e(p,{sx:{display:"flex",alignItems:"center",pl:1,pb:1}})]}),e(S,{component:"img",sx:{width:151},image:l.imagen.url,alt:l.title})]},l.sys.id))})]})})]})},be=()=>e(u,{children:e("div",{children:s(Q,{children:[e(oe,{}),s(X,{children:[e(y,{path:"/",element:e(ge,{})}),e(y,{path:"/about",element:e(xe,{})}),e(y,{path:"/blog",element:e(ye,{})}),e(y,{path:"/blog/:id",element:e(fe,{})}),e(y,{path:"/search",element:e(ve,{})})]}),e(se,{})]})})});function we(){return e(be,{})}const Se=Z({palette:{primary:{main:"#009FB7"},secondary:{main:"#161925"},error:{main:"#23395B"}}});ee.render(e(te.StrictMode,{children:s(ne,{theme:Se,children:[e(re,{}),e(we,{})]})}),document.getElementById("root"));
