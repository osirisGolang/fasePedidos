import{g as M,ak as at,al as Ft,af as nt,e as rt,u as F,m as ee,h as g,T as re,j as ot,x as Xe,ag as Vt,E as Et}from"./index.7949a050.js";import{Q as z}from"./QBtn.ebb609ef.js";import{u as At,a as Nt}from"./use-dark.e9071593.js";import{u as zt}from"./use-render-cache.3aae9b27.js";import{u as Zt,c as Bt,b as Qt}from"./private.use-form.7d79d90b.js";import{p as b,f as Pt}from"./format.c41b68a5.js";import{h as Rt}from"./render.6ef728c2.js";import{q as Lt,g as Ut,a as Xt,t as Wt}from"./QSelect.57b31dc3.js";const P=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Jt(e,n,l){return Object.prototype.toString.call(e)==="[object Date]"&&(l=e.getDate(),n=e.getMonth()+1,e=e.getFullYear()),ta($e(e,n,l))}function We(e,n,l){return ut(ea(e,n,l))}function Gt(e){return Kt(e)===0}function ve(e,n){return n<=6?31:n<=11||Gt(e)?30:29}function Kt(e){const n=P.length;let l=P[0],r,u,s,h,i;if(e<l||e>=P[n-1])throw new Error("Invalid Jalaali year "+e);for(i=1;i<n&&(r=P[i],u=r-l,!(e<r));i+=1)l=r;return h=e-l,u-h<6&&(h=h-u+x(u+4,33)*33),s=p(p(h+1,33)-1,4),s===-1&&(s=4),s}function lt(e,n){const l=P.length,r=e+621;let u=-14,s=P[0],h,i,m,C,f;if(e<s||e>=P[l-1])throw new Error("Invalid Jalaali year "+e);for(f=1;f<l&&(h=P[f],i=h-s,!(e<h));f+=1)u=u+x(i,33)*8+x(p(i,33),4),s=h;C=e-s,u=u+x(C,33)*8+x(p(C,33)+3,4),p(i,33)===4&&i-C===4&&(u+=1);const w=x(r,4)-x((x(r,100)+1)*3,4)-150,V=20+u-w;return n||(i-C<6&&(C=C-i+x(i+4,33)*33),m=p(p(C+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:r,march:V}}function ea(e,n,l){const r=lt(e,!0);return $e(r.gy,3,r.march)+(n-1)*31-x(n,7)*(n-7)+l-1}function ta(e){const n=ut(e).gy;let l=n-621,r,u,s;const h=lt(l,!1),i=$e(n,3,h.march);if(s=e-i,s>=0){if(s<=185)return u=1+x(s,31),r=p(s,31)+1,{jy:l,jm:u,jd:r};s-=186}else l-=1,s+=179,h.leap===1&&(s+=1);return u=7+x(s,30),r=p(s,30)+1,{jy:l,jm:u,jd:r}}function $e(e,n,l){let r=x((e+x(n-8,6)+100100)*1461,4)+x(153*p(n+9,12)+2,5)+l-34840408;return r=r-x(x(e+100100+x(n-8,6),100)*3,4)+752,r}function ut(e){let n=4*e+139361631;n=n+x(x(4*e+183187720,146097)*3,4)*4-3908;const l=x(p(n,1461),4)*5+308,r=x(p(l,153),5)+1,u=p(x(l,153),12)+1;return{gy:x(n,1461)-100100+x(8-u,6),gm:u,gd:r}}function x(e,n){return~~(e/n)}function p(e,n){return e-~~(e/n)*n}const aa=["gregorian","persian"],Je={mask:{type:String},locale:Object,calendar:{type:String,validator:e=>aa.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},na=["update:modelValue"];function B(e){return e.year+"/"+b(e.month)+"/"+b(e.day)}function ra(e,n){const l=M(()=>e.disable!==!0&&e.readonly!==!0),r=M(()=>l.value===!0?0:-1),u=M(()=>{const i=[];return e.color!==void 0&&i.push(`bg-${e.color}`),e.textColor!==void 0&&i.push(`text-${e.textColor}`),i.join(" ")});function s(){return e.locale!==void 0?{...n.lang.date,...e.locale}:n.lang.date}function h(i){const m=new Date,C=i===!0?null:0;if(e.calendar==="persian"){const f=Jt(m);return{year:f.jy,month:f.jm,day:f.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:C,minute:C,second:C,millisecond:C}}return{editable:l,tabindex:r,headerClass:u,getLocale:s,getCurrentDate:h}}const st=864e5,oa=36e5,ke=6e4,it="YYYY-MM-DDTHH:mm:ss.SSSZ",la=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,ua=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Se={};function sa(e,n){const l="("+n.days.join("|")+")",r=e+l;if(Se[r]!==void 0)return Se[r];const u="("+n.daysShort.join("|")+")",s="("+n.months.join("|")+")",h="("+n.monthsShort.join("|")+")",i={};let m=0;const C=e.replace(ua,w=>{switch(m++,w){case"YY":return i.YY=m,"(-?\\d{1,2})";case"YYYY":return i.YYYY=m,"(-?\\d{1,4})";case"M":return i.M=m,"(\\d{1,2})";case"MM":return i.M=m,"(\\d{2})";case"MMM":return i.MMM=m,h;case"MMMM":return i.MMMM=m,s;case"D":return i.D=m,"(\\d{1,2})";case"Do":return i.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return i.D=m,"(\\d{2})";case"H":return i.H=m,"(\\d{1,2})";case"HH":return i.H=m,"(\\d{2})";case"h":return i.h=m,"(\\d{1,2})";case"hh":return i.h=m,"(\\d{2})";case"m":return i.m=m,"(\\d{1,2})";case"mm":return i.m=m,"(\\d{2})";case"s":return i.s=m,"(\\d{1,2})";case"ss":return i.s=m,"(\\d{2})";case"S":return i.S=m,"(\\d{1})";case"SS":return i.S=m,"(\\d{2})";case"SSS":return i.S=m,"(\\d{3})";case"A":return i.A=m,"(AM|PM)";case"a":return i.a=m,"(am|pm)";case"aa":return i.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return u;case"dddd":return l;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return i.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return i.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return i.X=m,"(-?\\d+)";case"x":return i.x=m,"(-?\\d{4,})";default:return m--,w[0]==="["&&(w=w.substring(1,w.length-1)),w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),f={map:i,regex:new RegExp("^"+C)};return Se[r]=f,f}function ct(e,n){return e!==void 0?e:n!==void 0?n.date:Ft.date}function Ge(e,n=""){const l=e>0?"-":"+",r=Math.abs(e),u=Math.floor(r/60),s=r%60;return l+b(u)+n+b(s)}function ia(e,n,l){let r=e.getFullYear(),u=e.getMonth();const s=e.getDate();return n.year!==void 0&&(r+=l*n.year,delete n.year),n.month!==void 0&&(u+=l*n.month,delete n.month),e.setDate(1),e.setMonth(2),e.setFullYear(r),e.setMonth(u),e.setDate(Math.min(s,pe(e))),n.date!==void 0&&(e.setDate(e.getDate()+l*n.date),delete n.date),e}function ca(e,n,l){const r=n.year!==void 0?n.year:e[`get${l}FullYear`](),u=n.month!==void 0?n.month-1:e[`get${l}Month`](),s=new Date(r,u+1,0).getDate(),h=Math.min(s,n.date!==void 0?n.date:e[`get${l}Date`]());return e[`set${l}Date`](1),e[`set${l}Month`](2),e[`set${l}FullYear`](r),e[`set${l}Month`](u),e[`set${l}Date`](h),delete n.year,delete n.month,delete n.date,e}function Ie(e,n,l){const r=dt(n),u=new Date(e),s=r.year!==void 0||r.month!==void 0||r.date!==void 0?ia(u,r,l):u;for(const h in r){const i=Pt(h);s[`set${i}`](s[`get${i}`]()+l*r[h])}return s}function dt(e){const n={...e};return e.years!==void 0&&(n.year=e.years,delete n.years),e.months!==void 0&&(n.month=e.months,delete n.months),e.days!==void 0&&(n.date=e.days,delete n.days),e.day!==void 0&&(n.date=e.day,delete n.day),e.hour!==void 0&&(n.hours=e.hour,delete n.hour),e.minute!==void 0&&(n.minutes=e.minute,delete n.minute),e.second!==void 0&&(n.seconds=e.second,delete n.second),e.millisecond!==void 0&&(n.milliseconds=e.millisecond,delete n.millisecond),n}function ft(e,n,l){const r=dt(n),u=l===!0?"UTC":"",s=new Date(e),h=r.year!==void 0||r.month!==void 0||r.date!==void 0?ca(s,r,u):s;for(const i in r){const m=i.charAt(0).toUpperCase()+i.slice(1);h[`set${u}${m}`](r[i])}return h}function da(e,n,l){const r=vt(e,n,l),u=new Date(r.year,r.month===null?null:r.month-1,r.day===null?1:r.day,r.hour,r.minute,r.second,r.millisecond),s=u.getTimezoneOffset();return r.timezoneOffset===null||r.timezoneOffset===s?u:Ie(u,{minutes:r.timezoneOffset-s},1)}function vt(e,n,l,r,u){const s={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(u!==void 0&&Object.assign(s,u),e==null||e===""||typeof e!="string")return s;n===void 0&&(n=it);const h=ct(l,at.props),i=h.months,m=h.monthsShort,{regex:C,map:f}=sa(n,h),w=e.match(C);if(w===null)return s;let V="";if(f.X!==void 0||f.x!==void 0){const $=parseInt(w[f.X!==void 0?f.X:f.x],10);if(isNaN($)===!0||$<0)return s;const I=new Date($*(f.X!==void 0?1e3:1));s.year=I.getFullYear(),s.month=I.getMonth()+1,s.day=I.getDate(),s.hour=I.getHours(),s.minute=I.getMinutes(),s.second=I.getSeconds(),s.millisecond=I.getMilliseconds()}else{if(f.YYYY!==void 0)s.year=parseInt(w[f.YYYY],10);else if(f.YY!==void 0){const $=parseInt(w[f.YY],10);s.year=$<0?$:2e3+$}if(f.M!==void 0){if(s.month=parseInt(w[f.M],10),s.month<1||s.month>12)return s}else f.MMM!==void 0?s.month=m.indexOf(w[f.MMM])+1:f.MMMM!==void 0&&(s.month=i.indexOf(w[f.MMMM])+1);if(f.D!==void 0){if(s.day=parseInt(w[f.D],10),s.year===null||s.month===null||s.day<1)return s;const $=r!=="persian"?new Date(s.year,s.month,0).getDate():ve(s.year,s.month);if(s.day>$)return s}f.H!==void 0?s.hour=parseInt(w[f.H],10)%24:f.h!==void 0&&(s.hour=parseInt(w[f.h],10)%12,(f.A&&w[f.A]==="PM"||f.a&&w[f.a]==="pm"||f.aa&&w[f.aa]==="p.m.")&&(s.hour+=12),s.hour=s.hour%24),f.m!==void 0&&(s.minute=parseInt(w[f.m],10)%60),f.s!==void 0&&(s.second=parseInt(w[f.s],10)%60),f.S!==void 0&&(s.millisecond=parseInt(w[f.S],10)*10**(3-w[f.S].length)),(f.Z!==void 0||f.ZZ!==void 0)&&(V=f.Z!==void 0?w[f.Z].replace(":",""):w[f.ZZ],s.timezoneOffset=(V[0]==="+"?-1:1)*(60*V.slice(1,3)+1*V.slice(3,5)))}return s.dateHash=b(s.year,6)+"/"+b(s.month)+"/"+b(s.day),s.timeHash=b(s.hour)+":"+b(s.minute)+":"+b(s.second)+V,s}function fa(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function va(e,n){return ft(new Date,e,n)}function ha(e){const n=new Date(e).getDay();return n===0?7:n}function qe(e){const n=new Date(e.getFullYear(),e.getMonth(),e.getDate());n.setDate(n.getDate()-(n.getDay()+6)%7+3);const l=new Date(n.getFullYear(),0,4);l.setDate(l.getDate()-(l.getDay()+6)%7+3);const r=n.getTimezoneOffset()-l.getTimezoneOffset();n.setHours(n.getHours()-r);const u=(n-l)/(st*7);return 1+Math.floor(u)}function ma(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function He(e,n){const l=new Date(e);return n===!0?ma(l):l.getTime()}function ga(e,n,l,r={}){const u=He(n,r.onlyDate),s=He(l,r.onlyDate),h=He(e,r.onlyDate);return(h>u||r.inclusiveFrom===!0&&h===u)&&(h<s||r.inclusiveTo===!0&&h===s)}function ya(e,n){return Ie(e,n,1)}function Da(e,n){return Ie(e,n,-1)}function A(e,n,l){const r=new Date(e),u=`set${l===!0?"UTC":""}`;switch(n){case"year":case"years":r[`${u}Month`](0);case"month":case"months":r[`${u}Date`](1);case"day":case"days":case"date":r[`${u}Hours`](0);case"hour":case"hours":r[`${u}Minutes`](0);case"minute":case"minutes":r[`${u}Seconds`](0);case"second":case"seconds":r[`${u}Milliseconds`](0)}return r}function Ma(e,n,l){const r=new Date(e),u=`set${l===!0?"UTC":""}`;switch(n){case"year":case"years":r[`${u}Month`](11);case"month":case"months":r[`${u}Date`](pe(r));case"day":case"days":case"date":r[`${u}Hours`](23);case"hour":case"hours":r[`${u}Minutes`](59);case"minute":case"minutes":r[`${u}Seconds`](59);case"second":case"seconds":r[`${u}Milliseconds`](999)}return r}function wa(e){let n=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(l=>{n=Math.max(n,new Date(l))}),n}function Ya(e){let n=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(l=>{n=Math.min(n,new Date(l))}),n}function fe(e,n,l){return(e.getTime()-e.getTimezoneOffset()*ke-(n.getTime()-n.getTimezoneOffset()*ke))/l}function Te(e,n,l="days"){const r=new Date(e),u=new Date(n);switch(l){case"years":case"year":return r.getFullYear()-u.getFullYear();case"months":case"month":return(r.getFullYear()-u.getFullYear())*12+r.getMonth()-u.getMonth();case"days":case"day":case"date":return fe(A(r,"day"),A(u,"day"),st);case"hours":case"hour":return fe(A(r,"hour"),A(u,"hour"),oa);case"minutes":case"minute":return fe(A(r,"minute"),A(u,"minute"),ke);case"seconds":case"second":return fe(A(r,"second"),A(u,"second"),1e3)}}function Oe(e){return Te(e,A(e,"year"),"days")+1}function ba(e){return nt(e)===!0?"date":typeof e=="number"?"number":"string"}function _a(e,n,l){const r=new Date(e);if(n){const u=new Date(n);if(r<u)return u}if(l){const u=new Date(l);if(r>u)return u}return r}function xa(e,n,l){const r=new Date(e),u=new Date(n);if(l===void 0)return r.getTime()===u.getTime();switch(l){case"second":case"seconds":if(r.getSeconds()!==u.getSeconds())return!1;case"minute":case"minutes":if(r.getMinutes()!==u.getMinutes())return!1;case"hour":case"hours":if(r.getHours()!==u.getHours())return!1;case"day":case"days":case"date":if(r.getDate()!==u.getDate())return!1;case"month":case"months":if(r.getMonth()!==u.getMonth())return!1;case"year":case"years":if(r.getFullYear()!==u.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${l}`)}return!0}function pe(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function Ke(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const et={YY(e,n,l){const r=this.YYYY(e,n,l)%100;return r>=0?b(r):"-"+b(Math.abs(r))},YYYY(e,n,l){return l!=null?l:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return b(e.getMonth()+1)},MMM(e,n){return n.monthsShort[e.getMonth()]},MMMM(e,n){return n.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return Ke(this.Q(e))},D(e){return e.getDate()},Do(e){return Ke(e.getDate())},DD(e){return b(e.getDate())},DDD(e){return Oe(e)},DDDD(e){return b(Oe(e),3)},d(e){return e.getDay()},dd(e,n){return this.dddd(e,n).slice(0,2)},ddd(e,n){return n.daysShort[e.getDay()]},dddd(e,n){return n.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return qe(e)},ww(e){return b(qe(e))},H(e){return e.getHours()},HH(e){return b(e.getHours())},h(e){const n=e.getHours();return n===0?12:n>12?n%12:n},hh(e){return b(this.h(e))},m(e){return e.getMinutes()},mm(e){return b(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return b(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return b(Math.floor(e.getMilliseconds()/10))},SSS(e){return b(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,n,l,r){const u=r==null?e.getTimezoneOffset():r;return Ge(u,":")},ZZ(e,n,l,r){const u=r==null?e.getTimezoneOffset():r;return Ge(u)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ht(e,n,l,r,u){if(e!==0&&!e||e===1/0||e===-1/0)return;const s=new Date(e);if(isNaN(s))return;n===void 0&&(n=it);const h=ct(l,at.props);return n.replace(la,(i,m)=>i in et?et[i](s,h,r,u):m===void 0?i:m.split("\\]").join("]"))}function Sa(e){return nt(e)===!0?new Date(e.getTime()):e}var ja={isValid:fa,extractDate:da,buildDate:va,getDayOfWeek:ha,getWeekOfYear:qe,isBetweenDates:ga,addToDate:ya,subtractFromDate:Da,adjustDate:ft,startOfDate:A,endOfDate:Ma,getMaxDate:wa,getMinDate:Ya,getDateDiff:Te,getDayOfYear:Oe,inferDateFormat:ba,getDateBetween:_a,isSameDate:xa,daysInMonth:pe,formatDate:ht,clone:Sa};const U=20,Ha=["Calendar","Years","Months"],tt=e=>Ha.includes(e),Ce=e=>/^-?[\d]+\/[0-1]\d$/.test(e),K=" \u2014 ";function Q(e){return e.year+"/"+b(e.month)}var Fa=rt({name:"QDate",props:{...Je,...Zt,...At,modelValue:{required:!0,validator:e=>typeof e=="string"||Array.isArray(e)===!0||Object(e)===e||e===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...Je.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:Ce},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:Ce},navigationMaxYearMonth:{type:String,validator:Ce},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:tt}},emits:[...na,"rangeStart","rangeEnd","navigation"],setup(e,{slots:n,emit:l}){const{proxy:r}=ot(),{$q:u}=r,s=Nt(e,u),{getCache:h}=zt(),{tabindex:i,headerClass:m,getLocale:C,getCurrentDate:f}=ra(e,u);let w;const V=Bt(e),$=Qt(V),I=F(null),S=F(Ze()),H=F(C()),mt=M(()=>Ze()),gt=M(()=>C()),N=M(()=>f()),y=F(Be(S.value,H.value)),T=F(e.defaultView),je=M(()=>u.lang.rtl===!0?"right":"left"),oe=F(je.value),he=F(je.value),me=y.value.year,le=F(me-me%U-(me<0?U:0)),O=F(null),yt=M(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(s.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),R=M(()=>e.color||"primary"),X=M(()=>e.textColor||"white"),ue=M(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),ge=M(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),E=M(()=>ge.value.filter(t=>typeof t=="string").map(t=>we(t,S.value,H.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),W=M(()=>{const t=a=>we(a,S.value,H.value);return ge.value.filter(a=>Vt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),se=M(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=We(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),ye=M(()=>e.calendar==="persian"?B:(t,a,o)=>ht(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?S.value:a,o===void 0?H.value:o,t.year,t.timezoneOffset)),te=M(()=>E.value.length+W.value.reduce((t,a)=>t+1+Te(se.value(a.to),se.value(a.from)),0)),Fe=M(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(O.value!==null){const o=O.value.init,c=se.value(o);return H.value.daysShort[c.getDay()]+", "+H.value.monthsShort[o.month-1]+" "+o.day+K+"?"}if(te.value===0)return K;if(te.value>1)return`${te.value} ${H.value.pluralDay}`;const t=E.value[0],a=se.value(t);return isNaN(a.valueOf())===!0?K:H.value.headerTitle!==void 0?H.value.headerTitle(a,t):H.value.daysShort[a.getDay()]+", "+H.value.monthsShort[t.month-1]+" "+t.day}),Dt=M(()=>E.value.concat(W.value.map(a=>a.from)).sort((a,o)=>a.year-o.year||a.month-o.month)[0]),Mt=M(()=>E.value.concat(W.value.map(a=>a.to)).sort((a,o)=>o.year-a.year||o.month-a.month)[0]),Ve=M(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(te.value===0)return K;if(te.value>1){const t=Dt.value,a=Mt.value,o=H.value.monthsShort;return o[t.month-1]+(t.year!==a.year?" "+t.year+K+o[a.month-1]+" ":t.month!==a.month?K+o[a.month-1]:"")+" "+a.year}return E.value[0].year}),ie=M(()=>{const t=[u.iconSet.datetime.arrowLeft,u.iconSet.datetime.arrowRight];return u.lang.rtl===!0?t.reverse():t}),Ee=M(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):H.value.firstDayOfWeek),wt=M(()=>{const t=H.value.daysShort,a=Ee.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),Z=M(()=>{const t=y.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():ve(t.year,t.month)}),Yt=M(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),k=M(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),q=M(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),De=M(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return k.value!==null&&k.value.year>=y.value.year&&(t.year.prev=!1,k.value.year===y.value.year&&k.value.month>=y.value.month&&(t.month.prev=!1)),q.value!==null&&q.value.year<=y.value.year&&(t.year.next=!1,q.value.year===y.value.year&&q.value.month<=y.value.month&&(t.month.next=!1)),t}),ce=M(()=>{const t={};return E.value.forEach(a=>{const o=Q(a);t[o]===void 0&&(t[o]=[]),t[o].push(a.day)}),t}),Ae=M(()=>{const t={};return W.value.forEach(a=>{const o=Q(a.from),c=Q(a.to);if(t[o]===void 0&&(t[o]=[]),t[o].push({from:a.from.day,to:o===c?a.to.day:void 0,range:a}),o<c){let d;const{year:Y,month:v}=a.from,D=v<12?{year:Y,month:v+1}:{year:Y+1,month:1};for(;(d=Q(D))<=c;)t[d]===void 0&&(t[d]=[]),t[d].push({from:void 0,to:d===c?a.to.day:void 0,range:a}),D.month++,D.month>12&&(D.year++,D.month=1)}}),t}),ae=M(()=>{if(O.value===null)return;const{init:t,initHash:a,final:o,finalHash:c}=O.value,[d,Y]=a<=c?[t,o]:[o,t],v=Q(d),D=Q(Y);if(v!==j.value&&D!==j.value)return;const _={};return v===j.value?(_.from=d.day,_.includeFrom=!0):_.from=1,D===j.value?(_.to=Y.day,_.includeTo=!0):_.to=Z.value,_}),j=M(()=>Q(y.value)),bt=M(()=>{const t={};if(e.options===void 0){for(let o=1;o<=Z.value;o++)t[o]=!0;return t}const a=typeof e.options=="function"?e.options:o=>e.options.includes(o);for(let o=1;o<=Z.value;o++){const c=j.value+"/"+b(o);t[o]=a(c)}return t}),_t=M(()=>{const t={};if(e.events===void 0)for(let a=1;a<=Z.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:o=>e.events.includes(o);for(let o=1;o<=Z.value;o++){const c=j.value+"/"+b(o);t[o]=a(c)===!0&&Yt.value(c)}}return t}),xt=M(()=>{let t,a;const{year:o,month:c}=y.value;if(e.calendar!=="persian")t=new Date(o,c-1,1),a=new Date(o,c-1,0).getDate();else{const d=We(o,c,1);t=new Date(d.gy,d.gm-1,d.gd);let Y=c-1,v=o;Y===0&&(Y=12,v--),a=ve(v,Y)}return{days:t.getDay()-Ee.value-1,endDay:a}}),Ne=M(()=>{const t=[],{days:a,endDay:o}=xt.value,c=a<0?a+7:a;if(c<6)for(let v=o-c;v<=o;v++)t.push({i:v,fill:!0});const d=t.length;for(let v=1;v<=Z.value;v++){const D={i:v,event:_t.value[v],classes:[]};bt.value[v]===!0&&(D.in=!0,D.flat=!0),t.push(D)}if(ce.value[j.value]!==void 0&&ce.value[j.value].forEach(v=>{const D=d+v-1;Object.assign(t[D],{selected:!0,unelevated:!0,flat:!1,color:R.value,textColor:X.value})}),Ae.value[j.value]!==void 0&&Ae.value[j.value].forEach(v=>{if(v.from!==void 0){const D=d+v.from-1,_=d+(v.to||Z.value)-1;for(let ne=D;ne<=_;ne++)Object.assign(t[ne],{range:v.range,unelevated:!0,color:R.value,textColor:X.value});Object.assign(t[D],{rangeFrom:!0,flat:!1}),v.to!==void 0&&Object.assign(t[_],{rangeTo:!0,flat:!1})}else if(v.to!==void 0){const D=d+v.to-1;for(let _=d;_<=D;_++)Object.assign(t[_],{range:v.range,unelevated:!0,color:R.value,textColor:X.value});Object.assign(t[D],{flat:!1,rangeTo:!0})}else{const D=d+Z.value-1;for(let _=d;_<=D;_++)Object.assign(t[_],{range:v.range,unelevated:!0,color:R.value,textColor:X.value})}}),ae.value!==void 0){const v=d+ae.value.from-1,D=d+ae.value.to-1;for(let _=v;_<=D;_++)t[_].color=R.value,t[_].editRange=!0;ae.value.includeFrom===!0&&(t[v].editRangeFrom=!0),ae.value.includeTo===!0&&(t[D].editRangeTo=!0)}y.value.year===N.value.year&&y.value.month===N.value.month&&(t[d+N.value.day-1].today=!0);const Y=t.length%7;if(Y>0){const v=7-Y;for(let D=1;D<=v;D++)t.push({i:D,fill:!0})}return t.forEach(v=>{let D="q-date__calendar-item ";v.fill===!0?D+="q-date__calendar-item--fill":(D+=`q-date__calendar-item--${v.in===!0?"in":"out"}`,v.range!==void 0&&(D+=` q-date__range${v.rangeTo===!0?"-to":v.rangeFrom===!0?"-from":""}`),v.editRange===!0&&(D+=` q-date__edit-range${v.editRangeFrom===!0?"-from":""}${v.editRangeTo===!0?"-to":""}`),(v.range!==void 0||v.editRange===!0)&&(D+=` text-${v.color}`)),v.classes=D}),t}),St=M(()=>e.disable===!0?{"aria-disabled":"true"}:{});ee(()=>e.modelValue,t=>{if(w===t)w=0;else{const a=Be(S.value,H.value);J(a.year,a.month,a)}}),ee(T,()=>{I.value!==null&&r.$el.contains(document.activeElement)===!0&&I.value.focus()}),ee(()=>y.value.year+"|"+y.value.month,()=>{l("navigation",{year:y.value.year,month:y.value.month})}),ee(mt,t=>{Ue(t,H.value,"mask"),S.value=t}),ee(gt,t=>{Ue(S.value,t,"locale"),H.value=t});function ze(){const{year:t,month:a,day:o}=N.value,c={...y.value,year:t,month:a,day:o},d=ce.value[Q(c)];(d===void 0||d.includes(c.day)===!1)&&be(c),Me(c.year,c.month)}function Ht(t){tt(t)===!0&&(T.value=t)}function Ct(t,a){["month","year"].includes(t)&&(t==="month"?Pe:Ye)(a===!0?-1:1)}function Me(t,a){T.value="Calendar",J(t,a)}function kt(t,a){if(e.range===!1||!t){O.value=null;return}const o=Object.assign({...y.value},t),c=a!==void 0?Object.assign({...y.value},a):o;O.value={init:o,initHash:B(o),final:c,finalHash:B(c)},Me(o.year,o.month)}function Ze(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function we(t,a,o){return vt(t,a,o,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Be(t,a){const o=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(o.length===0)return Qe();const c=o[o.length-1],d=we(c.from!==void 0?c.from:c,t,a);return d.dateHash===null?Qe():d}function Qe(){let t,a;if(e.defaultYearMonth!==void 0){const o=e.defaultYearMonth.split("/");t=parseInt(o[0],10),a=parseInt(o[1],10)}else{const o=N.value!==void 0?N.value:f();t=o.year,a=o.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+b(a)+"/01"}}function Pe(t){let a=y.value.year,o=Number(y.value.month)+t;o===13?(o=1,a++):o===0&&(o=12,a--),J(a,o),ue.value===!0&&de("month")}function Ye(t){const a=Number(y.value.year)+t;J(a,y.value.month),ue.value===!0&&de("year")}function qt(t){J(t,y.value.month),T.value=e.defaultView==="Years"?"Months":"Calendar",ue.value===!0&&de("year")}function Ot(t){J(y.value.year,t),T.value="Calendar",ue.value===!0&&de("month")}function $t(t,a){const o=ce.value[a];(o!==void 0&&o.includes(t.day)===!0?_e:be)(t)}function L(t){return{year:t.year,month:t.month,day:t.day}}function J(t,a,o){if(k.value!==null&&t<=k.value.year&&((a<k.value.month||t<k.value.year)&&(a=k.value.month),t=k.value.year),q.value!==null&&t>=q.value.year&&((a>q.value.month||t>q.value.year)&&(a=q.value.month),t=q.value.year),o!==void 0){const{hour:d,minute:Y,second:v,millisecond:D,timezoneOffset:_,timeHash:ne}=o;Object.assign(y.value,{hour:d,minute:Y,second:v,millisecond:D,timezoneOffset:_,timeHash:ne})}const c=t+"/"+b(a)+"/01";c!==y.value.dateHash&&(oe.value=y.value.dateHash<c==(u.lang.rtl!==!0)?"left":"right",t!==y.value.year&&(he.value=oe.value),Xe(()=>{le.value=t-t%U-(t<0?U:0),Object.assign(y.value,{year:t,month:a,day:1,dateHash:c})}))}function Re(t,a,o){const c=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;w=c;const{reason:d,details:Y}=Le(a,o);l("update:modelValue",c,d,Y)}function de(t){const a=E.value[0]!==void 0&&E.value[0].dateHash!==null?{...E.value[0]}:{...y.value};Xe(()=>{a.year=y.value.year,a.month=y.value.month;const o=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():ve(a.year,a.month);a.day=Math.min(Math.max(1,a.day),o);const c=G(a);w=c;const{details:d}=Le("",a);l("update:modelValue",c,t,d)})}function Le(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...L(a.target),from:L(a.from),to:L(a.to)}}:{reason:`${t}-day`,details:L(a)}}function G(t,a,o){return t.from!==void 0?{from:ye.value(t.from,a,o),to:ye.value(t.to,a,o)}:ye.value(t,a,o)}function be(t){let a;if(e.multiple===!0)if(t.from!==void 0){const o=B(t.from),c=B(t.to),d=E.value.filter(v=>v.dateHash<o||v.dateHash>c),Y=W.value.filter(({from:v,to:D})=>D.dateHash<o||v.dateHash>c);a=d.concat(Y).concat(t).map(v=>G(v))}else{const o=ge.value.slice();o.push(G(t)),a=o}else a=G(t);Re(a,"add",t)}function _e(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const o=G(t);t.from!==void 0?a=e.modelValue.filter(c=>c.from!==void 0?c.from!==o.from&&c.to!==o.to:!0):a=e.modelValue.filter(c=>c!==o),a.length===0&&(a=null)}Re(a,"remove",t)}function Ue(t,a,o){const c=E.value.concat(W.value).map(d=>G(d,t,a)).filter(d=>d.from!==void 0?d.from.dateHash!==null&&d.to.dateHash!==null:d.dateHash!==null);l("update:modelValue",(e.multiple===!0?c:c[0])||null,o)}function It(){if(e.minimal!==!0)return g("div",{class:"q-date__header "+m.value},[g("div",{class:"relative-position"},[g(re,{name:"q-transition--fade"},()=>g("div",{key:"h-yr-"+Ve.value,class:"q-date__header-subtitle q-date__header-link "+(T.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...h("vY",{onClick(){T.value="Years"},onKeyup(t){t.keyCode===13&&(T.value="Years")}})},[Ve.value]))]),g("div",{class:"q-date__header-title relative-position flex no-wrap"},[g("div",{class:"relative-position col"},[g(re,{name:"q-transition--fade"},()=>g("div",{key:"h-sub"+Fe.value,class:"q-date__header-title-label q-date__header-link "+(T.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...h("vC",{onClick(){T.value="Calendar"},onKeyup(t){t.keyCode===13&&(T.value="Calendar")}})},[Fe.value]))]),e.todayBtn===!0?g(z,{class:"q-date__header-today self-start",icon:u.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:i.value,onClick:ze}):null])])}function xe({label:t,type:a,key:o,dir:c,goTo:d,boundaries:Y,cls:v}){return[g("div",{class:"row items-center q-date__arrow"},[g(z,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[0],tabindex:i.value,disable:Y.prev===!1,...h("go-#"+a,{onClick(){d(-1)}})})]),g("div",{class:"relative-position overflow-hidden flex flex-center"+v},[g(re,{name:"q-transition--jump-"+c},()=>g("div",{key:o},[g(z,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:i.value,...h("view#"+a,{onClick:()=>{T.value=a}})})]))]),g("div",{class:"row items-center q-date__arrow"},[g(z,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[1],tabindex:i.value,disable:Y.next===!1,...h("go+#"+a,{onClick(){d(1)}})})])]}const Tt={Calendar:()=>[g("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[g("div",{class:"q-date__navigation row items-center no-wrap"},xe({label:H.value.months[y.value.month-1],type:"Months",key:y.value.month,dir:oe.value,goTo:Pe,boundaries:De.value.month,cls:" col"}).concat(xe({label:y.value.year,type:"Years",key:y.value.year,dir:he.value,goTo:Ye,boundaries:De.value.year,cls:""}))),g("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},wt.value.map(t=>g("div",{class:"q-date__calendar-item"},[g("div",t)]))),g("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[g(re,{name:"q-transition--slide-"+oe.value},()=>g("div",{key:j.value,class:"q-date__calendar-days fit"},Ne.value.map(t=>g("div",{class:t.classes},[t.in===!0?g(z,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:i.value,...h("day#"+t.i,{onClick:()=>{pt(t.i)},onMouseover:()=>{jt(t.i)}})},t.event!==!1?()=>g("div",{class:"q-date__event bg-"+t.event}):null):g("div",""+t.i)]))))])])],Months(){const t=y.value.year===N.value.year,a=c=>k.value!==null&&y.value.year===k.value.year&&k.value.month>c||q.value!==null&&y.value.year===q.value.year&&q.value.month<c,o=H.value.monthsShort.map((c,d)=>{const Y=y.value.month===d+1;return g("div",{class:"q-date__months-item flex flex-center"},[g(z,{class:t===!0&&N.value.month===d+1?"q-date__today":null,flat:Y!==!0,label:c,unelevated:Y,color:Y===!0?R.value:null,textColor:Y===!0?X.value:null,tabindex:i.value,disable:a(d+1),...h("month#"+d,{onClick:()=>{Ot(d+1)}})})])});return e.yearsInMonthView===!0&&o.unshift(g("div",{class:"row no-wrap full-width"},[xe({label:y.value.year,type:"Years",key:y.value.year,dir:he.value,goTo:Ye,boundaries:De.value.year,cls:" col"})])),g("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},o)},Years(){const t=le.value,a=t+U,o=[],c=d=>k.value!==null&&k.value.year>d||q.value!==null&&q.value.year<d;for(let d=t;d<=a;d++){const Y=y.value.year===d;o.push(g("div",{class:"q-date__years-item flex flex-center"},[g(z,{key:"yr"+d,class:N.value.year===d?"q-date__today":null,flat:!Y,label:d,dense:!0,unelevated:Y,color:Y===!0?R.value:null,textColor:Y===!0?X.value:null,tabindex:i.value,disable:c(d),...h("yr#"+d,{onClick:()=>{qt(d)}})})]))}return g("div",{class:"q-date__view q-date__years flex flex-center"},[g("div",{class:"col-auto"},[g(z,{round:!0,dense:!0,flat:!0,icon:ie.value[0],tabindex:i.value,disable:c(t),...h("y-",{onClick:()=>{le.value-=U}})})]),g("div",{class:"q-date__years-content col self-stretch row items-center"},o),g("div",{class:"col-auto"},[g(z,{round:!0,dense:!0,flat:!0,icon:ie.value[1],tabindex:i.value,disable:c(a),...h("y+",{onClick:()=>{le.value+=U}})})])])}};function pt(t){const a={...y.value,day:t};if(e.range===!1){$t(a,j.value);return}if(O.value===null){const o=Ne.value.find(d=>d.fill!==!0&&d.i===t);if(e.noUnset!==!0&&o.range!==void 0){_e({target:a,from:o.range.from,to:o.range.to});return}if(o.selected===!0){_e(a);return}const c=B(a);O.value={init:a,initHash:c,final:a,finalHash:c},l("rangeStart",L(a))}else{const o=O.value.initHash,c=B(a),d=o<=c?{from:O.value.init,to:a}:{from:a,to:O.value.init};O.value=null,be(o===c?a:{target:a,...d}),l("rangeEnd",{from:L(d.from),to:L(d.to)})}}function jt(t){if(O.value!==null){const a={...y.value,day:t};Object.assign(O.value,{final:a,finalHash:B(a)})}}return Object.assign(r,{setToday:ze,setView:Ht,offsetCalendar:Ct,setCalendarTo:Me,setEditingRange:kt}),()=>{const t=[g("div",{class:"q-date__content col relative-position"},[g(re,{name:"q-transition--fade"},Tt[T.value])])],a=Rt(n.default);return a!==void 0&&t.push(g("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&$(t,"push"),g("div",{class:yt.value,...St.value},[It(),g("div",{ref:I,class:"q-date__main col column",tabindex:-1},t)])}}}),Va=rt({name:"QPopupProxy",props:{...Lt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:n,emit:l,attrs:r}){const{proxy:u}=ot(),{$q:s}=u,h=F(!1),i=F(null),m=M(()=>parseInt(e.breakpoint,10)),{canShow:C}=Ut({showing:h});function f(){return s.screen.width<m.value||s.screen.height<m.value?"dialog":"menu"}const w=F(f()),V=M(()=>w.value==="menu"?{maxHeight:"99vh"}:{});ee(()=>f(),S=>{h.value!==!0&&(w.value=S)});function $(S){h.value=!0,l("show",S)}function I(S){h.value=!1,w.value=f(),l("hide",S)}return Object.assign(u,{show(S){C(S)===!0&&i.value.show(S)},hide(S){i.value.hide(S)},toggle(S){i.value.toggle(S)}}),Et(u,"currentComponent",()=>({type:w.value,ref:i.value})),()=>{const S={ref:i,...V.value,...r,onShow:$,onHide:I};let H;return w.value==="dialog"?H=Xt:(H=Wt,Object.assign(S,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),g(H,S,n.default)}}});export{Va as Q,Fa as a,ja as d};
