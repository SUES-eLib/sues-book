import{e as m,h as e,T as i,k as u,f as p,l as d,m as c,n as f,r as n,p as v,q as g}from"./app.f9c487ad.js";import{S as b}from"./SkipLink.dfd6ab52.js";var y=m({name:"FadeSlideY",setup(l,{slots:a}){const r=u(),s=r.resolve,t=r.pending;return()=>e(i,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s,onBeforeLeave:t},()=>{var o;return(o=a.default)==null?void 0:o.call(a)})}}),S=m({name:"Layout",setup(){const l=g(),a=p(),r=v(),s=d(),t=c(),o=f(()=>a.value.blog.sidebarDisplay||l.value.blog.sidebarDisplay||"mobile");return()=>[e(b),e(n("CommonWrapper"),{},{default:()=>s.value.home?e(n("HomePage")):e(y,()=>e(n("NormalPage"),{key:r.value.path})),...o.value!=="none"?{navScreenBottom:()=>e(n("BloggerInfo"))}:{},...!t.value&&o.value==="always"?{sidebar:()=>e(n("BloggerInfo"))}:{}})]}});export{S as default};
