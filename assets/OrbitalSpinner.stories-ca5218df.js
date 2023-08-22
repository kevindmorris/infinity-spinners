import{s as l,c as m,j as o,b as u}from"./animations-9b6b4f83.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const h=l.circle`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${e=>e.color};
  stroke-width: ${e=>e.$weight};
  stroke-linecap: round;
  stroke-dasharray: 0 150;
  animation: ${m} ${e=>e.speed}s linear infinite;
  transform-origin: center;
`,g=l.circle`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${e=>e.color};
  stroke-width: ${e=>e.$weight};
  opacity: 0.25;
`,t=({size:e=50,color:n="#000",speed:p=2,weight:s=3,style:d})=>o("div",{style:{width:e,height:e,...d},children:u("svg",{viewBox:"0 0 50 50",children:[o(g,{color:n,$weight:s}),o(h,{color:n,speed:p,$weight:s})]})});try{t.displayName="OrbitalSpinner",t.__docgenInfo={description:"",displayName:"OrbitalSpinner",props:{size:{defaultValue:{value:"50"},description:"The size of the component.",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"#000"},description:"The color of the component.",name:"color",required:!1,type:{name:"Color"}},speed:{defaultValue:{value:"2"},description:"The speed of the component in seconds.",name:"speed",required:!1,type:{name:"number"}},weight:{defaultValue:{value:"3"},description:"The line weight of the component.",name:"weight",required:!1,type:{name:"number"}}}}}catch{}const b={title:"OrbitalSpinner",component:t,parameters:{},tags:["autodocs"],argTypes:{size:{control:"number"},color:{control:"color"},speed:{control:"number"},weight:{control:"number"}}},r={tags:["autodocs"],args:{size:50,color:"#000",speed:2,weight:3}};var a,i,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ["autodocs"],
  args: {
    size: 50,
    color: "#000",
    speed: 2,
    weight: 3
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const _=["Default"];export{r as Default,_ as __namedExportsOrder,b as default};
//# sourceMappingURL=OrbitalSpinner.stories-ca5218df.js.map
