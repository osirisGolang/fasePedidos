import{Q as C}from"./QSpinner.b0b58cab.js";import{Q as E}from"./QInput.08d919c7.js";import{Q as i}from"./QTable.59898304.js";import{u as m,o as s,V as D,a as t,w as O}from"./index.7949a050.js";import"./render.6ef728c2.js";import"./use-key-composition.f7d42b6a.js";import"./use-dark.e9071593.js";import"./private.use-form.7d79d90b.js";import"./QSeparator.a86880a6.js";import"./QList.d68d517c.js";import"./QSelect.57b31dc3.js";import"./QBtn.ebb609ef.js";import"./dom.a86cf10c.js";import"./QItem.a9b80a90.js";import"./selection.a1e3f902.js";import"./format.c41b68a5.js";import"./scroll.5606a815.js";import"./use-fullscreen.65a4a859.js";const I={class:"q-pa-md"},P={__name:"ClientesPage",setup(n){const e=m(""),r=[{name:"uno",align:"left",label:"CODIGO",field:"CODCLI",sortable:!0},{name:"dos",align:"left",label:"NOMBRE",field:"NOMCLI",sortable:!0},{name:"tres",align:"left",label:"RIF",field:"CIF",sortable:!0},{name:"CUATRO",align:"left",label:"TELEFONO",field:"TLF1",sortable:!0},{name:"cinco",align:"left",label:"VENDEDOR",field:"VENDEDOR",sortable:!0}],l=[{CODCLI:"V216274330",NOMCLI:"JAIRO GOMEZ -VENEIMPORT JG",CIF:"V216274330",TLF1:"0414 3714187",VENDEDOR:"00045"},{CODCLI:"V188781396",NOMCLI:"MARLON ALEJANDRO RODRIGUEZ CORDERO -AUTO MOTORES LA CONCORDI",CIF:"V-18878139-6",TLF1:"",VENDEDOR:""},{CODCLI:"V93590003",NOMCLI:"CESAR SOTO-MOTORAUTO PARTS",CIF:"V093590003",TLF1:"",VENDEDOR:""},{CODCLI:"296872015",NOMCLI:"REPUESTOS Y ACCESORIOS SPORTING CAR, C.A.",CIF:"J296872015",TLF1:"",VENDEDOR:""},{CODCLI:"J402497490",NOMCLI:"A.J. AUTOREPUESTOS F-7000, C.A.",CIF:"J402497490",TLF1:"",VENDEDOR:""},{CODCLI:"V17930583",NOMCLI:"ADONAY CARDOZA",CIF:"V-17930583",TLF1:"",VENDEDOR:""},{CODCLI:"V19043676",NOMCLI:"ALEJANDRO JOSE FERNANDEZ LEAL",CIF:"V19043676",TLF1:"",VENDEDOR:""}];return(R,o)=>(s(),D("div",I,[t(i,{flat:"",bordered:"",title:"CLIENTES",rows:l,columns:r,"row-key":"name",color:"amber",filter:e.value},{"top-right":O(()=>[t(E,{borderless:"",dense:"",debounce:"300",modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),placeholder:"Buscar..."},{append:O(()=>[t(C,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter"])]))}};export{P as default};
