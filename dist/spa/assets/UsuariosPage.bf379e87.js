import{Q as r}from"./QTable.59898304.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,V as m,a as t}from"./index.7949a050.js";import"./QSpinner.b0b58cab.js";import"./render.6ef728c2.js";import"./QSeparator.a86880a6.js";import"./use-dark.e9071593.js";import"./QList.d68d517c.js";import"./QSelect.57b31dc3.js";import"./use-key-composition.f7d42b6a.js";import"./QBtn.ebb609ef.js";import"./dom.a86cf10c.js";import"./QItem.a9b80a90.js";import"./selection.a1e3f902.js";import"./format.c41b68a5.js";import"./scroll.5606a815.js";import"./private.use-form.7d79d90b.js";import"./use-fullscreen.65a4a859.js";const n=[{name:"NOMBRE DE USUARIO",align:"left",label:"NOMBRE DE USUARIO",field:"nombre",sortable:!0},{name:"NOMBRE DE USUARIO",align:"left",label:"CORREO ELECTRONICO",field:"correo",sortable:!0},{name:"NOMBRE DE USUARIO",align:"left",label:"ROL DEL USUARIO",field:"rol",sortable:!0}],l=[{nombre:"Carlos Fuentes",correo:"carlosf@empresa.com",rol:"Vendedor"},{nombre:"Fernando Perez",correo:"fernando@empresa.com",rol:"Administrador"},{nombre:"Armando Mendoza",correo:"armando@algo.com",rol:"Vendedor"},{nombre:"Jesus Gonzales",correo:"jjpwer@gmail.com",rol:"Vendedor"},{nombre:"Fabian Torres",correo:"Admin@xxxx.com",rol:"Adminstrador"}],s={setup(){return{columns:n,rows:l}}},i={class:"q-pa-md"};function c(d,p,f,o,b,u){return a(),m("div",i,[t(r,{flat:"",bordered:"",title:"USUARIOS",rows:o.rows,columns:o.columns,"row-key":"name",dark:"",color:"amber"},null,8,["rows","columns"])])}var z=e(s,[["render",c]]);export{z as default};