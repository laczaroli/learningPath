import{r as g,z as V,c as b,j as a,an as s,ap as v,aq as z}from"./index-50ec8743.js";const p=g.createContext(null),ae=p.Provider,ne=p.Consumer;function W(){return g.useContext(p)}const y=g.createContext(null);y.Provider;y.Consumer;function Y(){return g.useContext(y)}function ee(c){const l=["50","100","200","300","400","500","600","700","800","900"],t=l.indexOf(c==null?void 0:c.toString());function x(i){if(t===0||t===l.length-1)return c;if(i==="decrement")return l[t-1];if(i==="increment")return l[t+1]}const o=x("decrement");return[x("increment"),o]}const re=g.forwardRef((c,l)=>{var S,L;const{active:t=!1,block:x=!1,children:o,className:$,color:i="",disabled:h,icon:n,loading:d=!1,shape:N="round",size:F,variant:B="default",...I}=c,{themeColor:T,controlSize:E,primaryColorLevel:G}=V(),O=(S=W())==null?void 0:S.size,P=(L=Y())==null?void 0:L.size,R="button",C="inline-flex items-center justify-center",k=(i==null?void 0:i.split("-"))||[],Z=F||P||O||E,r=k[0]||T,f=k[1]||G,[j,q]=ee(f),D=()=>{let e="";switch(Z){case v.LG:e=b(`h-${s.lg}`,n&&!o?`w-${s.lg} ${C} text-2xl`:"px-8 py-2 text-base");break;case v.SM:e=b(`h-${s.sm}`,n&&!o?`w-${s.sm} ${C} text-lg`:"px-3 py-2 text-sm");break;case v.XS:e=b(`h-${s.xs}`,n&&!o?`w-${s.xs} ${C} text-base`:"px-3 py-1 text-xs");break;default:e=b(`h-${s.md}`,n&&!o?`w-${s.md} ${C} text-xl`:"px-8 py-2");break}return e},M="opacity-50 cursor-not-allowed",X=()=>{const e={bgColor:t?`bg-${r}-${j}`:`bg-${r}-${f}`,textColor:"text-white",hoverColor:t?"":`hover:bg-${r}-${q}`,activeColor:`active:bg-${r}-${j}`};return m(e)},_=()=>{const e={bgColor:t?`bg-${r}-200 dark:bg-${r}-50`:`bg-${r}-50 dark:bg-${r}-500 dark:bg-opacity-20`,textColor:`text-${r}-${f} dark:text-${r}-50`,hoverColor:t?"":`hover:bg-${r}-100 dark:hover:bg-${r}-500 dark:hover:bg-opacity-30`,activeColor:`active:bg-${r}-200 dark:active:bg-${r}-500 dark:active:bg-opacity-40`};return m(e)},w=()=>m({bgColor:t?"bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:border-gray-500":"bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700",textColor:"text-gray-600 dark:text-gray-100",hoverColor:t?"":"hover:bg-gray-50 dark:hover:bg-gray-600",activeColor:"active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500"}),A=()=>m({bgColor:t?"bg-gray-100 dark:bg-gray-500":"bg-transparent border border-transparent",textColor:"text-gray-600 dark:text-gray-100",hoverColor:t?"":"hover:bg-gray-50 dark:hover:bg-gray-600",activeColor:"active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500"}),m=({bgColor:e,hoverColor:u,activeColor:Q,textColor:U})=>`${e} ${h||d?M:u+" "+Q} ${U}`,H=b(R,(()=>{switch(B){case"solid":return X();case"twoTone":return _();case"plain":return A();case"default":return w();default:return w()}})(),`radius-${N}`,D(),$,x?"w-full":""),J=e=>{const{onClick:u}=c;if(h||d){e.preventDefault();return}u==null||u(e)},K=()=>d&&o?a.jsxs("span",{className:"flex items-center justify-center",children:[a.jsx(z,{enableTheme:!1,className:"mr-1"}),o]}):n&&!o&&d?a.jsx(z,{enableTheme:!1}):n&&!o&&!d?a.jsx(a.Fragment,{children:n}):n&&o&&!d?a.jsxs("span",{className:"flex items-center justify-center",children:[a.jsx("span",{className:"text-lg",children:n}),a.jsx("span",{className:"ltr:ml-1 rtl:mr-1",children:o})]}):a.jsx(a.Fragment,{children:o});return a.jsx("button",{ref:l,className:H,...I,onClick:J,children:K()})});re.displayName="Button";export{re as B,ae as F,Y as a,ne as b,W as u};
