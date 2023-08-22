import{s as d,c as m,a as u,j as n,b as g}from"./animations-9b6b4f83.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const h=d.circle`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${e=>e.color};
  stroke-width: ${e=>e.$weight};
  stroke-linecap: round;
  stroke-dasharray: 35 150;
  animation: ${m} ${e=>e.speed}s linear infinite;
  transform-origin: center;
`,f=d.circle`
  cx: 25;
  cy: 25;
  r: ${e=>e.$weight?19-e.$weight:16};
  fill: none;
  stroke: ${e=>e.color};
  stroke-width: ${e=>e.$weight};
  stroke-linecap: round;
  stroke-dasharray: 35 150;
  animation: ${u} ${e=>e.speed}s linear infinite;
  transform-origin: center;
`,o=({size:e=50,color:t="#000",speed:i=2,weight:s=3,style:p})=>n("div",{style:{width:e,height:e,...p},children:g("svg",{viewBox:"0 0 50 50",children:[n(h,{color:t,speed:i,$weight:s}),n(f,{color:t,speed:i,$weight:s})]})});try{o.displayName="RingSpinner",o.__docgenInfo={description:"",displayName:"RingSpinner",props:{size:{defaultValue:{value:"50"},description:"The size of the component.",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"#000"},description:"The color of the component.",name:"color",required:!1,type:{name:"Color"}},speed:{defaultValue:{value:"2"},description:"The speed of the component in seconds.",name:"speed",required:!1,type:{name:"number"}},weight:{defaultValue:{value:"3"},description:"The line weight of the component.",name:"weight",required:!1,type:{name:"number"}}}}}catch{}const k={title:"RingSpinner",component:o,parameters:{},tags:["autodocs"],argTypes:{size:{control:"number"},color:{control:"color"},speed:{control:"number"},weight:{control:"number"}}},r={tags:["autodocs"],args:{size:50,color:"#000",speed:2,weight:3}};var a,c,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ["autodocs"],
  args: {
    size: 50,
    color: "#000",
    speed: 2,
    weight: 3
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const _=["Default"];export{r as Default,_ as __namedExportsOrder,k as default};
//# sourceMappingURL=RingSpinner.stories-70ee33a9.js.map
