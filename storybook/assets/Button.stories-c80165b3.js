import{j as C}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const n=({primary:l=!1,size:v="medium",backgroundColor:B,label:z,...q})=>{const x=l?"storybook-button--primary":"storybook-button--secondary";return C.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${v}`,x].join(" "),style:{backgroundColor:B},...q,children:z})};try{n.displayName="Button",n.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const e={label:"Button"},N={component:n,argTypes:{backgroundColor:{control:"color"}}},r={args:{...e}},a={args:{...e,primary:!0}},o={args:{...e}},s={args:{...e,size:"large"}},t={args:{...e,size:"small"}};var c,u,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  }
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    primary: true
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,k,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    size: 'large'
  }
}`,...(_=(k=s.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var h,P,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    size: 'small'
  }
}`,...(S=(P=t.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const D=["Docs","Primary","Secondary","Large","Small"];export{r as Docs,s as Large,a as Primary,o as Secondary,t as Small,D as __namedExportsOrder,N as default};
//# sourceMappingURL=Button.stories-c80165b3.js.map
