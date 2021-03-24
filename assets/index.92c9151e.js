var e=Object.assign;import{d as t,a as n,c as o,b as a,r as s,o as r,e as i,f as l,w as c,t as u,g as d,F as p,h,p as k,i as m,j as f,k as g,l as v,m as y,n as b}from"./vendor.82706a26.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const r=new URL(e,o);if(self[t].moduleMap[r])return n(self[t].moduleMap[r]);const i=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${e}`)),a(l)},onload(){n(self[t].moduleMap[r]),a(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("https:/h2xd.github.io/mtg-token/assets/");const w=t({id:"life",state:()=>({remainingLife:20}),getters:{alive(){return this.remainingLife>0}},actions:{reset(){this.remainingLife=20},raise(e=1){this.remainingLife+=Math.abs(e)},reduce(e=1){this.remainingLife-=Math.abs(e),this.remainingLife<0&&(this.remainingLife=0)}}});var _,T;(T=_||(_={})).RED="red",T.BLUE="blue",T.GREEN="green",T.BLACK="black",T.WHITE="white";const C={power:1,toughness:1,isTapped:!1,hasSummoningSickness:!0,mana:[_.RED],attributes:[]};class S{constructor(t){this._summoningSickness=!0,this._options=e(e({},C),t),this._tapped=this._options.isTapped,this._summoningSickness=this._options.hasSummoningSickness,this.uuid=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))),this.reset()}get canAttack(){return!this._summoningSickness&&!this._tapped}get power(){return this._power}get toughness(){return this._toughness}get isTapped(){return this._tapped}get hasSummoningSickness(){return this._summoningSickness}attack(){this._summoningSickness||(this._tapped=!0)}clear(){this._summoningSickness=!1,this._tapped=!1}reset(){this._power=this._options.power,this._toughness=this._options.toughness}}const L=t({id:"board",state:()=>({token:[]}),getters:{hasToken(){return this.token.length>0},tokenThatCanAttack(){return this.token.filter((e=>e.canAttack))},attackPower(){return this.tokenThatCanAttack.reduce(((e,t)=>e+t.power),0)}},actions:{addToken(e){this.token=[...this.token,e]},removeToken(e){this.token=this.token.filter((t=>t!==e))},copyToken(e){this.token=[...this.token,new S({power:e.power,toughness:e.toughness})]},attackWithAll(){this.token.forEach((e=>e.attack()))},nextTurn(){this.token.forEach((e=>e.clear()))},reset(){this.token=[]}}}),x=t({id:"player",state:()=>({life:w(),board:L(),mana:_.WHITE}),getters:{alive(){return this.life.alive}},actions:{setManaType(e){this.mana=e},reset(){this.life.reset(),this.board.reset()},nextTurn(){this.board.nextTurn()}}});function I(e){return Array.from(Array(e)).map((()=>x()))}const A=t({id:"app",state:()=>({players:I(1),countOptions:[1,2,3,4]}),getters:{count(){return this.players.length}},actions:{setPlayerCount(e){this.countOptions.includes(e)&&(this.players=I(e))},reset(){this.players.forEach((e=>e.reset()))}}});var B=n({props:{active:{type:Boolean,default:!1}}});const M={class:"container"},E={class:"base underlay"};B.render=function(e,t,n,i,l,c){return r(),o("div",M,[a("span",E,[s(e.$slots,"default")]),a("span",{class:["base","overlayed",e.active&&"active"]},[s(e.$slots,"default")],2)])};const O={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-corner-down-left"},j=a("polyline",{points:"9 10 4 15 9 20"},null,-1),$=a("path",{d:"M20 4v7a4 4 0 0 1-4 4H4"},null,-1);const R={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-moon"},D=a("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},null,-1);var H=n({name:"TokenCardDetail",components:{Icon:B,CornerDownLeftIcon:function(e,t){return r(),o("svg",O,[j,$])},MoonIcon:function(e,t){return r(),o("svg",R,[D])}},props:{token:Object,is:{type:String,default:"li"}}});const P=c("data-v-7a632aa5"),N=P(((e,t,n,s,c,p)=>{const h=d("CornerDownLeftIcon"),k=d("Icon"),m=d("MoonIcon");return e.token?(r(),o(i(e.is),{key:0,class:["card",e.token.isTapped&&"tapped"]},{default:P((()=>[a("div",null,u(e.token.power)+" / "+u(e.token.toughness),1),a("div",null,[a(k,{active:e.token.isTapped},{default:P((()=>[a(h)])),_:1},8,["active"]),a(k,{active:e.token.hasSummoningSickness},{default:P((()=>[a(m)])),_:1},8,["active"])])])),_:1},8,["class"])):l("",!0)}));H.render=N,H.__scopeId="data-v-7a632aa5";var U=n({name:"Board",components:{TokenCardDetail:H},props:{board:Object},setup:e=>({handleDeath:t=>e.board.removeToken(t),handleCopy:t=>e.board.copyToken(t)})});const K=c("data-v-776e1f79");k("data-v-776e1f79");const W={key:0,class:"board"};m();const F=K(((e,t,n,s,i,c)=>{const k=d("TokenCardDetail");return r(),o(p,null,[a("div",null,"AttackPower: "+u(e.board.attackPower),1),a("div",null,[e.board.hasToken?(r(),o("ol",W,[(r(!0),o(p,null,h(e.board.token,(t=>(r(),o(k,{is:"li",key:t.uuid,token:t,onDeath:e.handleDeath,onCopy:e.handleCopy},null,8,["token","onDeath","onCopy"])))),128))])):l("",!0)])],64)}));U.render=F,U.__scopeId="data-v-776e1f79";const G={},z=c("data-v-60300946");k("data-v-60300946");const J={class:"button"};m();const Y=z(((e,t)=>(r(),o("button",J,[s(e.$slots,"default")]))));var V;G.render=Y,G.__scopeId="data-v-60300946",(V||(V={})).FLYING="flying";const q={name:"Angel",slug:"angel",isFavorite:!1,tokenOptions:e(e({},C),{power:4,toughness:4,mana:[_.WHITE],attributes:[V.FLYING]})},Q={name:"Soldier",slug:"soldier",isFavorite:!1,tokenOptions:e(e({},C),{power:1,toughness:1,mana:[_.WHITE]})};var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",AngelLibraryItem:q,SoldierLibraryItem:Q});const Z=t({id:"library",state:()=>({active:!1,entries:[...Object.values(X)]}),getters:{isActive(){return this.active}},actions:{setActive(){this.active=!0},setInactive(){this.active=!1},toggleActive(){this.active=!this.active}}});const ee={},te=c("data-v-8e6e9150");k("data-v-8e6e9150");const ne={class:"headline"},oe={class:"text"};m();const ae=te(((e,t)=>(r(),o("div",ne,[s(e.$slots,"icon"),a("h3",oe,[s(e.$slots,"default")])]))));ee.render=ae,ee.__scopeId="data-v-8e6e9150";const se={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-book"},re=a("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"},null,-1),ie=a("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"},null,-1);var le=n({name:"Board",components:{BookIcon:function(e,t){return r(),o("svg",se,[re,ie])},Button:G,Headline:ee},setup:()=>({Library:Z()})});const ce=c("data-v-f6b1ecd8");k("data-v-f6b1ecd8");const ue=f(" Library "),de=f("Summon");m();const pe=ce(((e,t,n,s,i,l)=>{const c=d("BookIcon"),k=d("Headline"),m=d("Button");return r(),o("div",{class:["library",e.Library.isActive&&"active"]},[a(k,null,{icon:ce((()=>[a(c)])),default:ce((()=>[ue])),_:1}),(r(!0),o(p,null,h(e.Library.entries,(t=>(r(),o("ul",{key:t.slug},[a("li",null,[a("div",null,u(t.name),1),a("div",null,u(t.tokenOptions.power)+"P / "+u(t.tokenOptions.toughness)+"T",1),a(m,{onClick:n=>e.$emit("summon",t)},{default:ce((()=>[de])),_:2},1032,["onClick"])])])))),128))],2)}));le.render=pe,le.__scopeId="data-v-f6b1ecd8";const he={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-plus"},ke=a("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null,-1),me=a("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1);const fe={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-minus"},ge=a("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1);function ve(e){return`var(--mana-color-${e}-background)`}function ye(e){return`var(--mana-color-${e}-text)`}const be={backgroundKey:"--mana-background",textKey:"--mana-text"};var we=n({name:"LifePointsCounter",components:{PlusIcon:function(e,t){return r(),o("svg",he,[ke,me])},MinusIcon:function(e,t){return r(),o("svg",fe,[ge])}},props:{player:Object},setup(t){const n=g((()=>function(t,n){const{backgroundKey:o,textKey:a}=e(e({},be),n);return{[o]:ve(t),[a]:ye(t)}}(t.player.mana,{backgroundKey:"--mana-background",textKey:"--mana-text"})));return{styles:n,mana:_}}});const _e=c("data-v-71869f1c");k("data-v-71869f1c");const Te={class:"counter"};m();const Ce=_e(((e,t,n,s,i,l)=>{const c=d("PlusIcon"),h=d("MinusIcon");return r(),o(p,null,[a("div",{class:"container",style:e.styles},[a("div",Te,u(e.player.life.remainingLife),1),a("button",{onClick:t[1]||(t[1]=t=>e.player.life.raise(1)),class:"button raise"},[a(c)]),a("button",{onClick:t[2]||(t[2]=t=>e.player.life.reduce(1)),class:"button reduce"},[a(h)])],4),a("button",{onClick:t[3]||(t[3]=t=>e.player.setManaType(e.mana.BLACK))},"Black"),a("button",{onClick:t[4]||(t[4]=t=>e.player.setManaType(e.mana.RED))},"Red"),a("button",{onClick:t[5]||(t[5]=t=>e.player.setManaType(e.mana.GREEN))},"Green"),a("button",{onClick:t[6]||(t[6]=t=>e.player.setManaType(e.mana.WHITE))},"White"),a("button",{onClick:t[7]||(t[7]=t=>e.player.setManaType(e.mana.BLUE))},"Blue")],64)}));we.render=Ce,we.__scopeId="data-v-71869f1c";var Se=n({name:"App",components:{Board:U,Button:G,Library:le,LifePointsCounter:we},setup(){const t=A(),n=t.players[0];!function(t){t.$subscribe(((e,t)=>{window.localStorage.setItem("player1Store",JSON.stringify({board:t.board.$state,life:t.life.$state,mana:t.mana}))}));try{const n=window.localStorage.getItem("player1Store");if(n){const o=JSON.parse(n);t.$patch({board:e(e({},o.board),{token:o.board.token.map((t=>new S(e(e({},t._options),{hasSummoningSickness:t._summoningSickness,isTapped:t._tapped}))))}),life:o.life,mana:o.mana})}}catch(n){console.error(n)}}(n);return{player1:n,appStore:t,handleAttackAll:()=>n.board.attackWithAll(),handleNextTurn:()=>n.nextTurn(),handleSummon:t=>{const o=new S(e({},t.tokenOptions));n.board.addToken(o)}}}});const Le=f("Reset"),xe=f("Attack with all"),Ie=f("Next Turn");Se.render=function(e,t,n,s,i,l){const c=d("LifePointsCounter"),u=d("Board"),h=d("Button"),k=d("Library");return r(),o(p,null,[a(c,{player:e.player1},null,8,["player"]),a(u,{board:e.player1.board},null,8,["board"]),a(h,{onClick:e.appStore.reset},{default:v((()=>[Le])),_:1},8,["onClick"]),a(h,{onClick:e.handleAttackAll},{default:v((()=>[xe])),_:1},8,["onClick"]),a(h,{onClick:e.handleNextTurn},{default:v((()=>[Ie])),_:1},8,["onClick"]),a(k,{onSummon:e.handleSummon},null,8,["onSummon"])],64)};const Ae=y(Se);Ae.use(b()),Ae.mount("#app");
