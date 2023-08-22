import{s as p,h as d,j as r}from"./animations-9b6b4f83.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const m=p.circle`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: ${e=>e.color};
  stroke-width: ${e=>e.$weight};
  animation: ${d} ${e=>e.speed}s linear infinite;
`,u=({size:e=50,color:s="#000",speed:i=2,weight:c=3,style:l})=>r("div",{style:{width:e,height:e,...l},children:r("svg",{viewBox:"0 0 50 50",children:r(m,{color:s,speed:i,$weight:c})})});try{HeartbeatSpinner.displayName="HeartbeatSpinner",HeartbeatSpinner.__docgenInfo={description:"",displayName:"HeartbeatSpinner",props:{size:{defaultValue:{value:"50"},description:"The size of the component.",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"#000"},description:"The color of the component.",name:"color",required:!1,type:{name:"Color"}},speed:{defaultValue:{value:"2"},description:"The speed of the component in seconds.",name:"speed",required:!1,type:{name:"number"}},weight:{defaultValue:{value:"3"},description:"The line weight of the component.",name:"weight",required:!1,type:{name:"number"}}}}}catch{}const b={title:"HeartbeatSpinner",component:u,parameters:{},tags:["autodocs"],argTypes:{size:{control:"number"},color:{control:"color"},speed:{control:"number"},weight:{control:"number"}}},t={tags:["autodocs"],args:{size:50,color:"#000",speed:2,weight:3}};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ["autodocs"],
  args: {
    size: 50,
    color: "#000",
    speed: 2,
    weight: 3
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,b as default};
//# sourceMappingURL=HeartbeatSpinner.stories-e830607a.js.map
