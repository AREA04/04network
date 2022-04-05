"use strict";(self.webpackChunk_04=self.webpackChunk_04||[]).push([[609],{5224:function(n,e,i){i.d(e,{z:function(){return d}});var r,t=i(168),a=(0,i(1242).ZP)("button")(r||(r=(0,t.Z)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: 1px solid #edf3f5;\n  border-radius: 4px;\n  padding: 13px 0;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: #fff;\n    border: 1px solid rgb(255, 130, 92);\n    background-color: rgb(255, 130, 92);\n  }\n"])),(function(n){return n.color||"#2e186a"}),(function(n){return n.color?"#2E186A":"#fff"})),s=i(184),d=function(n){var e=n.color,i=n.fixedWidth,r=n.children,t=n.onClick;return(0,s.jsx)(a,{color:e,fixedWidth:i,onClick:t,children:r})}},4609:function(n,e,i){i.r(e),i.d(e,{default:function(){return Q}});var r=i(605),t=i(9603),a=i(4720),s=i(1058),d=i(4942),o=i(1413),l=i(9439),c=i(2791),m=i(5181),h=i(4569),u=i.n(h),x=function(n){var e=(0,c.useState)({}),i=(0,l.Z)(e,2),r=i[0],t=i[1],a=(0,c.useState)({}),s=(0,l.Z)(a,2),h=s[0],x=s[1],p=(0,c.useState)(!1),g=(0,l.Z)(p,2),f=g[0],Z=g[1];(0,c.useEffect)((function(){0===Object.keys(h).length&&f&&(t(""),m.Z.success({message:"Success",description:"Your message has been sent!"}))}),[h,f]);return{handleChange:function(n){n.persist(),t((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,d.Z)({},n.target.name,n.target.value))})),x((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,d.Z)({},n.target.name,""))}))},handleSubmit:function(e){e.preventDefault(),x(n(r));3===Object.keys(r).length&&u().post("",(0,o.Z)({},r)).then((function(){Z(!0)}))},values:r,errors:h}};function p(n){var e={};return n.name||(e.name="Name is required"),n.email?/\S+@\S+\.\S+/.test(n.email)||(e.email="Email address is invalid"):e.email="Email address is required",n.message||(e.message="Message is required"),e}var g,f,Z,j,b,v,w,y,k,C,P,S,z=i(5224),E=i(168),M=i(1242),Y=(0,M.ZP)("p")(g||(g=(0,E.Z)(["\n  margin-top: 1.5rem;\n"]))),q=(0,M.ZP)("div")(f||(f=(0,E.Z)(["\n  position: relative;\n  max-width: 700px;\n"]))),F=(0,M.ZP)("div")(Z||(Z=(0,E.Z)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),N=i(184),O=(0,a.Z)()((function(n){var e=n.title,i=n.content,r=n.t;return(0,N.jsxs)(q,{children:[(0,N.jsx)("h6",{children:r(e)}),(0,N.jsx)(F,{children:(0,N.jsx)(Y,{children:r(i)})})]})})),W=(0,M.ZP)("div")(j||(j=(0,E.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),_=(0,M.ZP)("input")(b||(b=(0,E.Z)(["\n  font-size: 0.875rem;\n"]))),A=(0,M.ZP)("div")(v||(v=(0,E.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),D=(0,M.ZP)("textarea")(w||(w=(0,E.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),G=(0,M.ZP)("label")(y||(y=(0,E.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),L=(0,a.Z)()((function(n){var e=n.name,i=n.placeholder,r=n.onChange,t=n.t;return(0,N.jsxs)(W,{children:[(0,N.jsx)(G,{htmlFor:e,children:t(e)}),(0,N.jsx)(_,{placeholder:t(i),name:e,id:e,onChange:r})]})})),B=(0,a.Z)()((function(n){var e=n.name,i=n.placeholder,r=n.onChange,t=n.t;return(0,N.jsxs)(A,{children:[(0,N.jsx)(G,{htmlFor:e,children:t(e)}),(0,N.jsx)(D,{placeholder:t(i),id:e,name:e,onChange:r})]})})),H=(0,M.ZP)("div")(k||(k=(0,E.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),I=(0,M.ZP)("form")(C||(C=(0,E.Z)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),J=(0,M.ZP)("span")(P||(P=(0,E.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),K=(0,M.ZP)("div")(S||(S=(0,E.Z)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),Q=(0,a.Z)()((function(n){var e=n.title,i=n.content,a=n.id,d=n.t,o=x(p),l=o.values,c=o.errors,m=o.handleChange,h=o.handleSubmit,u=function(n){var e=n.type,i=c[e];return(0,N.jsx)(s.LG,{direction:"left",children:(0,N.jsx)(J,{erros:c[e],children:i})})};return(0,N.jsx)(H,{id:a,children:(0,N.jsxs)(r.Z,{justify:"space-between",align:"middle",children:[(0,N.jsx)(t.Z,{lg:12,md:11,sm:24,xs:24,children:(0,N.jsx)(s.Mi,{direction:"left",children:(0,N.jsx)(O,{title:e,content:i})})}),(0,N.jsx)(t.Z,{lg:12,md:12,sm:24,xs:24,children:(0,N.jsx)(s.Mi,{direction:"right",children:(0,N.jsxs)(I,{autoComplete:"off",onSubmit:h,children:[(0,N.jsxs)(t.Z,{span:24,children:[(0,N.jsx)(L,{type:"text",name:"name",placeholder:"Your Name",value:l.name||"",onChange:m}),(0,N.jsx)(u,{type:"name"})]}),(0,N.jsxs)(t.Z,{span:24,children:[(0,N.jsx)(L,{type:"text",name:"email",placeholder:"Your Email",value:l.email||"",onChange:m}),(0,N.jsx)(u,{type:"email"})]}),(0,N.jsxs)(t.Z,{span:24,children:[(0,N.jsx)(B,{placeholder:"Your Message",value:l.message||"",name:"message",onChange:m}),(0,N.jsx)(u,{type:"message"})]}),(0,N.jsx)(K,{children:(0,N.jsx)(z.z,{name:"submit",children:d("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=609.b0c4fcc2.chunk.js.map