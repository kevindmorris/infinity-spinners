import{s as m,c as u,j as r,b as n}from"./animations-9b6b4f83.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const h=m.circle`
  cx: 25;
  cy: 25;
  r: 20;
  fill: none;
  stroke: url("#myGradient");
  stroke-width: ${e=>e.$weight};
  stroke-linecap: round;
  stroke-dasharray: 35 150;
  animation: ${u} ${e=>e.speed}s linear infinite;
  transform-origin: center;
`,t=({size:e=50,color:c="#000",speed:l=2,weight:d=3,style:p})=>r("div",{style:{width:e,height:e,...p},children:n("svg",{viewBox:"0 0 50 50",children:[r("defs",{children:n("linearGradient",{id:"myGradient",gradientTransform:"rotate(90)",children:[r("stop",{offset:"50%",stopColor:"white"}),r("stop",{offset:"100%",stopColor:c})]})}),r(h,{speed:l,$weight:d})]})});try{t.displayName="ArcSpinner",t.__docgenInfo={description:"",displayName:"ArcSpinner",props:{size:{defaultValue:{value:"50"},description:"The size of the component.",name:"size",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"#000"},description:"The color of the component.",name:"color",required:!1,type:{name:"Color"}},speed:{defaultValue:{value:"2"},description:"The speed of the component in seconds.",name:"speed",required:!1,type:{name:"number"}},weight:{defaultValue:{value:"3"},description:"The line weight of the component.",name:"weight",required:!1,type:{name:"number"}}}}}catch{}const w={title:"ArcSpinner",component:t,parameters:{},tags:["autodocs"],argTypes:{size:{control:"number"},color:{control:"color"},speed:{control:"number"},weight:{control:"number"}}},o={tags:["autodocs"],args:{size:50,color:"#000",speed:2,weight:3}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ["autodocs"],
  args: {
    size: 50,
    color: "#000",
    speed: 2,
    weight: 3
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,w as default};
//# sourceMappingURL=ArcSpinner.stories-d327a11f.js.map
