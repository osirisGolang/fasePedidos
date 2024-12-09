import{e as te,u as C,g as f,m as E,q as k,N as x,M as H,h as q,T as oe,j as ae,I as ne}from"./index.7949a050.js";import{u as ie,b as p,v as A,c as se,d as le,e as re,f as ue,g as ce,h as de,r as M,s as fe,p as j,i as he}from"./QSelect.57b31dc3.js";import{u as me,a as ve,b as ge}from"./format.c41b68a5.js";import{u as pe,c as D}from"./selection.a1e3f902.js";import{s as Te,g as ye}from"./scroll.5606a815.js";import{h as be}from"./render.6ef728c2.js";var ke=te({name:"QTooltip",inheritAttrs:!1,props:{...ie,...me,...p,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...p.transitionShow,default:"jump-down"},transitionHide:{...p.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:se},scrollTarget:Te,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ve],setup(e,{slots:L,emit:T,attrs:h}){let i,s;const m=ae(),{proxy:{$q:o}}=m,l=C(null),c=C(!1),N=f(()=>j(e.anchor,o.lang.rtl)),Q=f(()=>j(e.self,o.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:B,removeTick:I}=le(),{registerTimeout:d}=pe(),{transitionProps:R,transitionStyle:_}=re(e),{localScrollTarget:y,changeScrollEvent:U,unconfigureScrollTarget:V}=ue(e,w),{anchorEl:a,canShow:$,anchorEvents:r}=ce({showing:c,configureAnchorEl:Y}),{show:z,hide:v}=ge({showing:c,canShow:$,handleShow:G,handleHide:J,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:K,delayHide:X});const{showPortal:b,hidePortal:S,renderPortal:F}=de(m,l,ee,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:l,onClickOutside(n){return v(n),n.target.classList.contains("q-dialog__backdrop")&&ne(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);E(g,n=>{(n===!0?he:M)(t)}),k(()=>{M(t)})}function G(t){b(),B(()=>{s=new MutationObserver(()=>u()),s.observe(l.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),w()}),i===void 0&&(i=E(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{b(!0),T("show",t)},e.transitionDuration)}function J(t){I(),S(),P(),d(()=>{S(!0),T("hide",t)},e.transitionDuration)}function P(){s!==void 0&&(s.disconnect(),s=void 0),i!==void 0&&(i(),i=void 0),V(),x(r,"tooltipTemp")}function u(){fe({targetEl:l.value,offset:e.offset,anchorEl:a.value,anchorOrigin:N.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function K(t){if(o.platform.is.mobile===!0){D(),document.body.classList.add("non-selectable");const g=a.value,n=["touchmove","touchcancel","touchend","click"].map(O=>[g,O,"delayHide","passiveCapture"]);H(r,"tooltipTemp",n)}d(()=>{z(t)},e.delay)}function X(t){o.platform.is.mobile===!0&&(x(r,"tooltipTemp"),D(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{v(t)},e.hideDelay)}function Y(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];H(r,"anchor",t)}function w(){if(a.value!==null||e.scrollTarget!==void 0){y.value=ye(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:v;U(y.value,t)}}function Z(){return c.value===!0?q("div",{...h,ref:l,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,_.value],role:"tooltip"},be(L.default)):null}function ee(){return q(oe,R.value,Z)}return k(P),Object.assign(m.proxy,{updatePosition:u}),F}});export{ke as Q};