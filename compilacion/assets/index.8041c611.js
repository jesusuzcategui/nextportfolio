var N=Object.defineProperty,D=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var T=(n,t,i)=>t in n?N(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i,P=(n,t)=>{for(var i in t||(t={}))M.call(t,i)&&T(n,i,t[i]);if(B)for(var i of B(t))O.call(t,i)&&T(n,i,t[i]);return n},j=(n,t)=>D(n,R(t));import{j as e,F as u,B as p,A as z,C as g,a as s,T as W,b as c,c as f,L as m,r as h,u as G,P as E,d as b,e as q,f as J,I as _,g as $,h as H,G as d,s as U,i as K,l as I,k as w,m as S,n as A,o as V,S as Y,p as F,q as Q,t as X,R as Z,v as y,w as ee,x as te,y as ne,z as re,D as ie}from"./vendor.f3309000.js";const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}};oe();const se=()=>e(u,{children:e(p,{sx:{flexGrow:1},children:e(z,{color:"secondary",position:"static",children:e(g,{maxWidth:"lg",children:s(W,{children:[e(c,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Jes\xFAs Uzc\xE1tegui"}),e(f,{component:m,to:"/",color:"inherit",children:"Home"}),e(f,{component:m,to:"/blog",color:"inherit",children:"Blog"}),e(f,{component:m,to:"/about",color:"inherit",children:"About"})]})})})})}),ae=()=>{const[n]=h.exports.useState(new Date().getFullYear()),t=G();return e(u,{children:e("footer",{children:e(E,{square:!0,style:{background:t.palette.secondary.main,padding:"2rem 0"},elevation:2,children:s(c,{color:"white",align:"center",variant:"small",component:"p",children:["Portfolio | \xA9 ",n," - All Right Reserved"]})})})})},k="https://graphql.contentful.com/content/v1/spaces/n6ixojeus49z/",C="Bearer ohqsII-Kd3JNxDbNmje6bi6M3wvU8frxo5saDpc0f0c",le=async()=>{try{const n=`
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
        `;let t=null;const{status:i,data:r}=await b.post(k,JSON.stringify({query:n}),{headers:{"Content-Type":"application/json",Authorization:C}});return t=[i,r],t}catch(n){throw new Error(n)}},L=async(n=15)=>{try{const t=`
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
    }`;let i=null;const{status:r,data:o}=await b.post(k,JSON.stringify({query:t}),{headers:{"Content-Type":"application/json",Authorization:C}});return i=[r,o],i}catch(t){throw new Error(t)}},ce=async n=>{try{const t=`
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
    }`;let i=null;const{status:r,data:o}=await b.post(k,JSON.stringify({query:t}),{headers:{"Content-Type":"application/json",Authorization:C}});return i=[r,o],i}catch(t){throw new Error(t)}},de=async(n=null)=>{try{const t=`
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
    }`;let i=null;const{status:r,data:o}=await b.post(k,JSON.stringify({query:t}),{headers:{"Content-Type":"application/json",Authorization:C}});return i=[r,o],i}catch(t){throw new Error(t)}},v=()=>{const[n,t]=h.exports.useState(""),[i]=q();return J(),h.exports.useEffect(()=>{let a=i.get("q");t(a===null?"":a)},[]),e(u,{children:s(E,{onSubmit:a=>{a.preventDefault(),window.location.href="/search?q="+n},component:"form",sx:{p:"5px 10px",display:"flex",alignItems:"center",width:"100%"},children:[e(_,{name:"q",sx:{ml:1,flex:1},placeholder:"Search articles",inputProps:{"aria-label":"search articles"},value:n,onChange:a=>{t(a.target.value)}}),e($,{type:"submit",sx:{p:"10px"},"aria-label":"search",children:e(H,{})})]})})},he=()=>e(u,{children:e(p,{className:"gradientBlueDark",sx:{width:"100%",height:"425px",display:"flex",alignItems:"center",padding:"0px 2rem"},children:e(g,{maxWidth:"lg",children:s(d,{sx:{alignItems:"center"},className:"presentationGrid",rowGap:3,container:!0,children:[e(d,{xs:12,md:7,item:!0,children:e(v,{})}),s(d,{xs:12,md:5,item:!0,children:[e(c,{sx:{},align:"right",variant:"h2",component:"div",children:"Jes\xFAs Uzc\xE1tegui"}),e(c,{sx:{},align:"right",variant:"p",component:"div",children:"FullStack web developer"}),e(c,{sx:{},align:"right",variant:"span",component:"div",children:"Hello, I present my portfolio and blog where you will find some interesting articles and courses if you want to learn programming"})]})]})})})}),ue=U(K)(({theme:n})=>({height:10,borderRadius:5,[`&.${I.colorPrimary}`]:{backgroundColor:n.palette.grey[n.palette.mode==="light"?200:800]},[`& .${I.bar}`]:{borderRadius:5,backgroundColor:n.palette.mode==="light"?"#1a90ff":"#308fe8"}})),pe=({title:n,image:t,porcent:i})=>e(u,{children:s(w,{children:[e(S,{component:"img",height:"80",image:t,alt:n,style:{objectFit:"contain"}}),s(A,{children:[e(c,{gutterBottom:!0,variant:"span",component:"div",children:n}),e(ue,{variant:"determinate",value:i})]})]})});const me=({data:n})=>e(u,{children:s(V,{sx:{my:"3rem"},children:[e(c,{sx:{my:"1.5rem"},align:"center",variant:"h4",component:"div",children:"My Skills"}),e(Y,j(P({},{dots:!1,infinite:!0,speed:800,slidesToShow:6,slidesToScroll:6,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}),{children:n&&n.length&&n.map((i,r)=>e(pe,{title:i.titleskill,image:i.logo.url,porcent:i.experience},r))}))]})}),ge=()=>{const[n,t]=h.exports.useState([]),i=async()=>{try{const[r,o]=await L(10);t(o.data.blogCollection.items)}catch(r){throw new Error(r)}};return h.exports.useEffect(()=>{i()},[]),s(u,{children:[e(c,{sx:{my:"1.5rem"},align:"center",variant:"h4",component:"div",children:"Last posts"}),e(d,{sx:{my:"3rem"},container:!0,rowGap:3,columnSpacing:3,children:n&&n.length>0&&n.map((r,o)=>e(d,{item:!0,xs:12,md:6,children:s(w,{children:[e(S,{component:"img",height:"200",image:r.imagen.url,alt:r.title,style:{objectFit:"cover"}}),s(A,{children:[e(c,{gutterBottom:!0,variant:"h5",component:"div",children:r.title}),e(c,{gutterBottom:!0,variant:"p",component:"div",children:r.metadescripcion})]}),e(F,{children:e(f,{component:m,to:"/blog/"+r.sys.id,color:"inherit",children:"Ver"})})]})},r.sys.id))})]})},xe=()=>{const[n,t]=h.exports.useState(null),i=async()=>{const[r,o]=await le();t(o.data.skillCollection.items)};return h.exports.useEffect(()=>{i()},[]),s(u,{children:[e(he,{}),s(g,{maxWidth:"md",children:[n&&e("div",{children:e(me,{data:n})}),e(ge,{})]})]})},ye=()=>e(u,{children:e("h1",{children:"Pagina de about"})}),fe=()=>{const[n,t]=h.exports.useState([]),i=async()=>{try{const[r,o]=await L(30);console.log(o),t(o.data.blogCollection.items)}catch(r){console.log(r)}};return h.exports.useEffect(()=>{i()},[]),e(u,{children:s(g,{maxWidth:"lg",children:[e(c,{sx:{},align:"center",variant:"h2",component:"div",children:"Blog"}),n&&n.length>0&&e(p,{children:e(d,{columnSpacing:3,sx:{my:"3rem"},container:!0,children:n.map(r=>e(d,{item:!0,xs:12,md:6,children:s(w,{children:[e(S,{component:"img",height:"200",image:r.imagen.url,alt:r.title,style:{objectFit:"cover"}}),s(A,{children:[e(c,{gutterBottom:!0,variant:"h5",component:"div",children:r.title}),e(c,{gutterBottom:!0,variant:"p",component:"div",children:r.metadescripcion})]}),e(F,{children:e(f,{component:m,to:"/blog/"+r.sys.id,color:"inherit",children:"Ver"})})]})},r.sys.id))})})]})})},ve=()=>{const n=Q(),[t,i]=h.exports.useState(null),r=async()=>{try{const[o,a]=await de(n.id);i(a.data.blog)}catch(o){throw new Error(o)}};return h.exports.useEffect(()=>{r(),console.log(t)},[]),e(u,{children:e(g,{sx:{my:"2rem"},maxWidth:"lg",children:t&&s(p,{children:[e(c,{sx:{},align:"center",variant:"h3",component:"div",children:t.title}),e("div",{children:t.content&&e("div",{children:t.content.json&&e("div",{children:t.content.json.content&&t.content.json.content.length>0&&e("div",{children:t.content.json.content.map((o,a)=>e("div",{children:o&&o.content&&o.content.length>0&&o.content.map((l,x)=>s("div",{children:[l.marks.length===0&&e(c,{sx:{my:"1rem"},align:"left",variant:"p",component:"div",children:l.value}),l.marks.length==1&&l.marks[0].type=="code"&&e("div",{children:e("div",{style:{margin:"auto",display:"flex",justifyContent:"center"},dangerouslySetInnerHTML:{__html:l.value}})})]},x))},a))})})})})]})})})},be=()=>{const[n]=q(),[t,i]=h.exports.useState(""),[r,o]=h.exports.useState(null),a=async()=>{try{const[l,x]=await ce(t);console.log(x),o(x.data.blogCollection.items)}catch(l){o(null),console.log({error:l})}};return h.exports.useEffect(()=>{let l=n.get("q");i(l||""),a()},[t]),s(u,{children:[t===""&&e("div",{children:e(p,{className:"gradientBlueDark",sx:{width:"100%",height:"calc(100vh - (64px + 88px))",display:"flex",alignItems:"center",padding:"0px 2rem"},children:s(d,{container:!0,children:[e(d,{xs:12,md:12,item:!0,children:e(c,{sx:{},align:"center",variant:"h2",component:"div",children:"Search"})}),e(d,{xs:12,md:12,item:!0,children:e(v,{})})]})})}),t!==""&&e("div",{children:(r===null||Array.isArray(r)===!0&&r.length===0)&&s("div",{children:[e(p,{className:"gradientBlueDark",sx:{width:"100%",height:"200px",display:"flex",alignItems:"center",padding:"0px 2rem"},children:s(d,{container:!0,children:[e(d,{xs:12,md:12,item:!0,children:e(c,{sx:{},align:"center",variant:"h2",component:"div",children:"Search"})}),e(d,{xs:12,md:12,item:!0,children:e(v,{})})]})}),e(p,{sx:{width:"100%",display:"flex",alignItems:"center",padding:"0px 2rem"},children:e(c,{sx:{},align:"center",variant:"h4",component:"div",children:"Sorry we did not get results with this search"})})]})}),t!==""&&e("div",{children:Array.isArray(r)===!0&&r.length>0&&s("div",{children:[e(p,{className:"gradientBlueDark",sx:{width:"100%",height:"200px",display:"flex",alignItems:"center",padding:"0px 2rem"},children:s(d,{container:!0,children:[e(d,{xs:12,md:12,item:!0,children:e(c,{sx:{},align:"center",variant:"h2",component:"div",children:"Search"})}),e(d,{xs:12,md:12,item:!0,children:e(v,{})})]})}),e(g,{sx:{my:"2rem"},maxWidth:"sm",children:r.map(l=>s(w,{sx:{display:"flex",mb:"1rem"},children:[s(p,{sx:{display:"flex",flexDirection:"column"},children:[s(A,{sx:{flex:"1 0 auto"},children:[e(c,{component:m,to:"/blog/"+l.sys.id,variant:"h5",children:l.title}),e(c,{variant:"subtitle1",color:"text.secondary",component:"div",children:l.sys.publishedAt})]}),e(p,{sx:{display:"flex",alignItems:"center",pl:1,pb:1}})]}),e(S,{component:"img",sx:{width:151},image:l.imagen.url,alt:l.title})]},l.sys.id))})]})})]})},we=()=>e(u,{children:e("div",{children:s(X,{children:[e(se,{}),s(Z,{children:[e(y,{path:"/",element:e(xe,{})}),e(y,{path:"/about",element:e(ye,{})}),e(y,{path:"/blog",element:e(fe,{})}),e(y,{path:"/blog/:id",element:e(ve,{})}),e(y,{path:"/search",element:e(be,{})})]}),e(ae,{})]})})});function Se(){return e(we,{})}const Ae=ee({palette:{primary:{main:"#009FB7"},secondary:{main:"#161925"},error:{main:"#23395B"}}});te.render(e(ne.StrictMode,{children:s(re,{theme:Ae,children:[e(ie,{}),e(Se,{})]})}),document.getElementById("root"));
