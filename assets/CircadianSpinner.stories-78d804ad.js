import{s as p,c as m,j as o}from"./animations-9b6b4f83.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const u=p.circle`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${e=>e.color};
  stroke-width: ${e=>e.$weight};
  stroke-linecap: round;
  stroke-dasharray: calc(2 * 3.14 * 20 / 4);
  animation: ${m} ${e=>e.speed}s linear infinite;
  transform-origin: center;
`,n=({size:e=50,color:s="#000",speed:c=2,weight:l=3,style:d})=>o("div",{style:{width:e,height:e,...d},children:o("svg",{viewBox:"0 0 50 50",children:o(u,{color:s,speed:c,$weight:l})})});try{n.displayName="CircadianSpinner",n.__docgenInfo={description:"",displayName:"CircadianSpinner",props:{size:{defaultValue:{value:"50"},description:"The size of the component.",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"#000"},description:"The color of the component.",name:"color",required:!1,type:{name:"Color"}},speed:{defaultValue:{value:"2"},description:"The speed of the component in seconds.",name:"speed",required:!1,type:{name:"number"}},weight:{defaultValue:{value:"3"},description:"The line weight of the component.",name:"weight",required:!1,type:{name:"number"}}}}}catch{}const w={title:"CircadianSpinner",component:n,parameters:{},tags:["autodocs"],argTypes:{size:{control:"number"},color:{control:"color"},speed:{control:"number"},weight:{control:"number"}}},r={tags:["autodocs"],args:{size:50,color:"#000",speed:2,weight:3}};var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  tags: ["autodocs"],
  args: {
    size: 50,
    color: "#000",
    speed: 2,
    weight: 3
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Default"];export{r as Default,y as __namedExportsOrder,w as default};
//# sourceMappingURL=CircadianSpinner.stories-78d804ad.js.map
