import{s as d,d as u,j as o}from"./animations-9b6b4f83.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const m=d.circle`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${e=>e.color};
  stroke-width: ${e=>e.$weight};
  stroke-linecap: round;
  animation: ${u} ${e=>e.speed}s ease-in-out infinite;
  transform-origin: center;
`,t=({size:e=50,color:i="#000",speed:c=2,weight:l=3,style:p})=>o("div",{style:{width:e,height:e,...p},children:o("svg",{viewBox:"0 0 50 50",children:o(m,{color:i,speed:c,$weight:l})})});try{t.displayName="CircularSpinner",t.__docgenInfo={description:"",displayName:"CircularSpinner",props:{size:{defaultValue:{value:"50"},description:"The size of the component.",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"#000"},description:"The color of the component.",name:"color",required:!1,type:{name:"Color"}},speed:{defaultValue:{value:"2"},description:"The speed of the component in seconds.",name:"speed",required:!1,type:{name:"number"}},weight:{defaultValue:{value:"3"},description:"The line weight of the component.",name:"weight",required:!1,type:{name:"number"}}}}}catch{}const w={title:"CircularSpinner",component:t,parameters:{},tags:["autodocs"],argTypes:{size:{control:"number"},color:{control:"color"},speed:{control:"number"},weight:{control:"number"}}},r={tags:["autodocs"],args:{size:50,color:"#000",speed:2,weight:3}};var n,a,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ["autodocs"],
  args: {
    size: 50,
    color: "#000",
    speed: 2,
    weight: 3
  }
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const y=["Default"];export{r as Default,y as __namedExportsOrder,w as default};
//# sourceMappingURL=CircularSpinner.stories-571027ac.js.map
