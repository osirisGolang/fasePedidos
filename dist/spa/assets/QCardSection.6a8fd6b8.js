import{e,g as r,h as n}from"./index.7949a050.js";import{h as s}from"./render.6ef728c2.js";var l=e({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:o}){const a=r(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>n(t.tag,{class:a.value},s(o.default))}});export{l as Q};