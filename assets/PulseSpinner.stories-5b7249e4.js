import{s as p,p as m,j as o,b as h}from"./animations-9b6b4f83.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const d=p.circle`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${e=>e.color};
  stroke-width: ${e=>e.$weight};
  animation: ${m} ${e=>e.speed}s linear infinite;
`,g=p(d)`
  animation-delay: -${e=>e.speed?e.speed/2:1}s;
`,r=({size:e=50,color:t="#000",speed:s=2,weight:a=3,style:u})=>o("div",{style:{width:e,height:e,...u},children:h("svg",{viewBox:"0 0 50 50",children:[o(d,{color:t,speed:s,$weight:a}),o(g,{color:t,speed:s,$weight:a})]})});try{r.displayName="PulseSpinner",r.__docgenInfo={description:"",displayName:"PulseSpinner",props:{size:{defaultValue:{value:"50"},description:"The size of the component.",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"#000"},description:"The color of the component.",name:"color",required:!1,type:{name:"Color"}},speed:{defaultValue:{value:"2"},description:"The speed of the component in seconds.",name:"speed",required:!1,type:{name:"number"}},weight:{defaultValue:{value:"3"},description:"The line weight of the component.",name:"weight",required:!1,type:{name:"number"}}}}}catch{}const _={title:"PulseSpinner",component:r,parameters:{},tags:["autodocs"],argTypes:{size:{control:"number"},color:{control:"color"},speed:{control:"number"},weight:{control:"number"}}},n={tags:["autodocs"],args:{size:50,color:"#000",speed:2,weight:3}};var i,l,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ["autodocs"],
  args: {
    size: 50,
    color: "#000",
    speed: 2,
    weight: 3
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const $=["Default"];export{n as Default,$ as __namedExportsOrder,_ as default};
//# sourceMappingURL=PulseSpinner.stories-5b7249e4.js.map
