(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-705f9c1a"],{"0280":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"title font-weight-bold mb-2"},[t._v("Explore Events")]),a("v-row",{attrs:{dense:""}},[t._l(t.events,(function(e,n){return[a("v-col",{key:n,attrs:{cols:"12",md:"6"}},[a("v-card",{style:{position:"relative"},attrs:{flat:"","min-height":"8rem",dark:""}},[a("div",{staticClass:"event-content d-flex align-center justify-center"},[a("div",{staticClass:"text-center"},[a("span",{staticClass:"overline"},[t._v(t._s(e.name))])])]),a("div",{staticClass:"background-image",style:{backgroundImage:"url("+e.backgroundImage+")"}}),a("div",{staticClass:"dark-overlay"})])],1)]})),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{attrs:{flat:"","min-height":"8rem",color:"secondary",dark:"",to:{name:"events-explorer"}}},[a("div",{staticClass:"event-content d-flex align-center justify-center"},[a("div",{staticClass:"text-center"},[a("span",{staticClass:"d-block"},[a("v-icon",{attrs:{large:""}},[t._v("mdi-dots-horizontal-circle")])],1)])])])],1)],2)],1)},i=[],r={name:"feed-events-preview-card",data:function(){return{events:[{backgroundImage:a("486d"),name:"Project 81"},{backgroundImage:a("eb65"),name:"Chasing Waterfalls"},{backgroundImage:a("17ae"),name:"Food Trippers"},{backgroundImage:a("5cb6"),name:"Backpackers"},{backgroundImage:a("ffaf"),name:"Mountaineers"}]}}},s=r,o=(a("6e9e"),a("2877")),c=a("6544"),l=a.n(c),d=a("b0af"),u=a("62ad"),f=a("132d"),v=a("0fd9"),p=Object(o["a"])(s,n,i,!1,null,"ee75e45e",null);e["a"]=p.exports;l()(p,{VCard:d["a"],VCol:u["a"],VIcon:f["a"],VRow:v["a"]})},"0a44":function(t,e,a){},"0e12":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("div",{attrs:{id:"display-photo-container"}},[n("v-img",{attrs:{id:"cover-photo",src:a("1ee6"),position:"center",width:"100%",height:"100%"}}),n("v-avatar",{staticClass:"elevation-5",attrs:{size:85,id:"profile-photo"}},[n("v-img",{attrs:{src:a("cfe6"),position:"center"}})],1)],1),n("div",{staticClass:"text-center mt-15 mb-5"},[n("h1",{staticClass:"title font-weight-bold secondary--text"},[t._v("Sebastian Lavarias")]),n("span",[n("v-icon",{staticClass:"mr-1",attrs:{color:"primary",small:""}},[t._v(" mdi-map-marker-outline ")]),n("span",{staticClass:"subtitle-2"},[t._v("Manila, Philippines")])],1)]),n("v-card-text",[n("div",{staticClass:"mb-5"},[n("div",{staticClass:"d-flex justify-space-around align-center"},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"subtitle-2 secondary--text"},[t._v("Followers")]),n("span",{staticClass:"caption"},[t._v("99")])]),n("v-divider",{attrs:{vertical:""}}),n("div",{staticClass:"text-center"},[n("h2",{staticClass:"subtitle-2 secondary--text"},[t._v("Following")]),n("span",{staticClass:"caption"},[t._v("99")])])],1)]),n("v-btn",{staticClass:"text-capitalize",attrs:{color:"secondary",text:"",block:""}},[t._v("View Profile")])],1)],1)},i=[],r={name:"feed-profile-preview-card"},s=r,o=(a("f6ae"),a("2877")),c=a("6544"),l=a.n(c),d=a("8212"),u=a("8336"),f=a("b0af"),v=a("99d9"),p=a("ce7e"),g=a("132d"),h=a("adda"),m=Object(o["a"])(s,n,i,!1,null,"8ebb3044",null);e["a"]=m.exports;l()(m,{VAvatar:d["a"],VBtn:u["a"],VCard:f["a"],VCardText:v["c"],VDivider:p["a"],VIcon:g["a"],VImg:h["a"]})},"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),i=a("5530"),r=(a("4b85"),a("2b0e")),s=a("d9f7"),o=a("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function d(t,e){return c.reduce((function(a,n){return a[t+Object(o["E"])(n)]=e(),a}),{})}var u=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:u}})),v=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=d("justify",(function(){return{type:String,default:null,validator:v}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},h=d("alignContent",(function(){return{type:String,default:null,validator:g}})),m={align:Object.keys(f),justify:Object.keys(p),alignContent:Object.keys(h)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var n=b[t];if(null!=a){if(e){var i=e.replace(t,"");n+="-".concat(i)}return n+="-".concat(a),n.toLowerCase()}}var C=new Map;e["a"]=r["default"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},f),{},{justify:{type:String,default:null,validator:v}},p),{},{alignContent:{type:String,default:null,validator:g}},h),render:function(t,e){var a=e.props,i=e.data,r=e.children,o="";for(var c in a)o+=String(a[c]);var l=C.get(o);return l||function(){var t,e;for(e in l=[],m)m[e].forEach((function(t){var n=a[t],i=y(e,t,n);i&&l.push(i)}));l.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),C.set(o,l)}(),t(a.tag,Object(s["a"])(i,{staticClass:"row",class:l}),r)}})},"117d":function(t,e,a){t.exports=a.p+"img/couple-adventure.aa798e9b.jpeg"},"17ae":function(t,e,a){t.exports=a.p+"img/food-trippers.2afd5f2a.jpg"},"1c4e":function(t,e,a){},"1ee6":function(t,e,a){t.exports=a.p+"img/cover-photo.7e7b2ebb.jpeg"},2115:function(t,e,a){},"36a7":function(t,e,a){},"451f":function(t,e,a){},"486d":function(t,e,a){t.exports=a.p+"img/project-81.0ef0a0d5.jpeg"},"4ec9":function(t,e,a){"use strict";var n=a("6d61"),i=a("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},"581f":function(t,e,a){"use strict";var n=a("1c4e"),i=a.n(n);i.a},"5cb6":function(t,e,a){t.exports=a.p+"img/backpackers.efd3e3b1.jpg"},"62ad":function(t,e,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var n=a("ade3"),i=a("5530"),r=(a("4b85"),a("2b0e")),s=a("d9f7"),o=a("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["offset"+Object(o["E"])(e)]={type:[String,Number],default:null},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["order"+Object(o["E"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(d),order:Object.keys(u)};function v(t,e,a){var n=t;if(null!=a&&!1!==a){if(e){var i=e.replace(t,"");n+="-".concat(i)}return"col"!==t||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var p=new Map;e["a"]=r["default"].extend({name:"v-col",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,i=e.data,r=e.children,o=(e.parent,"");for(var c in a)o+=String(a[c]);var l=p.get(o);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var n=a[t],i=v(e,t,n);i&&l.push(i)}));var i=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!i||!a.cols},Object(n["a"])(t,"col-".concat(a.cols),a.cols),Object(n["a"])(t,"offset-".concat(a.offset),a.offset),Object(n["a"])(t,"order-".concat(a.order),a.order),Object(n["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),p.set(o,l)}(),t(a.tag,Object(s["a"])(i,{class:l}),r)}})},6566:function(t,e,a){"use strict";var n=a("9bf2").f,i=a("7c73"),r=a("e2cc"),s=a("0366"),o=a("19aa"),c=a("2266"),l=a("7dd0"),d=a("2626"),u=a("83ab"),f=a("f183").fastKey,v=a("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,a,l){var d=t((function(t,n){o(t,d,e),p(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),u||(t.size=0),void 0!=n&&c(n,t[l],t,a)})),v=g(e),h=function(t,e,a){var n,i,r=v(t),s=m(t,e);return s?s.value=a:(r.last=s={index:i=f(e,!0),key:e,value:a,previous:n=r.last,next:void 0,removed:!1},r.first||(r.first=s),n&&(n.next=s),u?r.size++:t.size++,"F"!==i&&(r.index[i]=s)),t},m=function(t,e){var a,n=v(t),i=f(e);if("F"!==i)return n.index[i];for(a=n.first;a;a=a.next)if(a.key==e)return a};return r(d.prototype,{clear:function(){var t=this,e=v(t),a=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete a[n.index],n=n.next;e.first=e.last=void 0,u?e.size=0:t.size=0},delete:function(t){var e=this,a=v(e),n=m(e,t);if(n){var i=n.next,r=n.previous;delete a.index[n.index],n.removed=!0,r&&(r.next=i),i&&(i.previous=r),a.first==n&&(a.first=i),a.last==n&&(a.last=r),u?a.size--:e.size--}return!!n},forEach:function(t){var e,a=v(this),n=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),r(d.prototype,a?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),u&&n(d.prototype,"size",{get:function(){return v(this).size}}),d},setStrong:function(t,e,a){var n=e+" Iterator",i=g(e),r=g(n);l(t,e,(function(t,e){p(this,{type:n,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),d(e)}}},"6d61":function(t,e,a){"use strict";var n=a("23e7"),i=a("da84"),r=a("94ca"),s=a("6eeb"),o=a("f183"),c=a("2266"),l=a("19aa"),d=a("861d"),u=a("d039"),f=a("1c7e"),v=a("d44e"),p=a("7156");t.exports=function(t,e,a){var g=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),m=g?"set":"add",b=i[t],y=b&&b.prototype,C=b,S={},_=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!d(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!d(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!d(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})};if(r(t,"function"!=typeof b||!(h||y.forEach&&!u((function(){(new b).entries().next()})))))C=a.getConstructor(e,t,g,m),o.REQUIRED=!0;else if(r(t,!0)){var x=new C,j=x[m](h?{}:-0,1)!=x,k=u((function(){x.has(1)})),w=f((function(t){new b(t)})),I=!h&&u((function(){var t=new b,e=5;while(e--)t[m](e,e);return!t.has(-0)}));w||(C=e((function(e,a){l(e,C,t);var n=p(new b,e,C);return void 0!=a&&c(a,n[m],n,g),n})),C.prototype=y,y.constructor=C),(k||I)&&(_("delete"),_("has"),g&&_("get")),(I||j)&&_(m),h&&y.clear&&delete y.clear}return S[t]=C,n({global:!0,forced:C!=b},S),v(C,t),h||a.setStrong(C,t,g),C}},"6e9e":function(t,e,a){"use strict";var n=a("451f"),i=a.n(n);i.a},7042:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{staticClass:"font-weight-bold"},[t._v("People")]),t._l(4,(function(e){return[n("v-list-item",{key:e},[n("v-list-item-avatar",[n("v-img",{attrs:{src:a("cfe6")}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-bold"},[t._v("Sebastian Lavarias")]),n("v-list-item-subtitle",[t._v("See Profile")])],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-account-plus-outline")])],1)],1)],1)]})),n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:a("cfe6")}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-bold"},[t._v("Sebastian Lavarias")]),n("v-list-item-subtitle",[t._v("See Profile")])],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-account-check")])],1)],1)],1)],2)},i=[],r={name:"feed-people-card"},s=r,o=a("2877"),c=a("6544"),l=a.n(c),d=a("8336"),u=a("b0af"),f=a("99d9"),v=a("132d"),p=a("adda"),g=a("da13"),h=a("1800"),m=a("8270"),b=a("5d23"),y=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=y.exports;l()(y,{VBtn:d["a"],VCard:u["a"],VCardTitle:f["d"],VIcon:v["a"],VImg:p["a"],VListItem:g["a"],VListItemAction:h["a"],VListItemAvatar:m["a"],VListItemContent:b["b"],VListItemSubtitle:b["c"],VListItemTitle:b["d"]})},"797e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("feed-profile-preview-card")],1),a("v-col",{attrs:{cols:"12"}},[a("feed-category-list-card")],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-1 font-weight-bold mb-10"},[t._v("Explore Events")]),a("v-row",[t._l(t.events,(function(e,n){return[a("v-col",{key:n,attrs:{cols:"12",md:"6"}},[a("v-card",{style:{position:"relative"},attrs:{flat:"","min-height":"15rem",dark:"",color:"primary"}},[a("div",{staticClass:"event-content d-flex align-center justify-center"},[a("div",{staticClass:"text-center"},[a("span",{staticClass:"overline"},[t._v(t._s(e.name))])])]),a("div",{staticClass:"event-background-image",style:{backgroundImage:"url("+e.backgroundImage+")"}}),a("div",{staticClass:"dark-overlay"})])],1)]}))],2)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("feed-people-card")],1),a("v-col",{attrs:{cols:"12"}},[a("feed-footer-card")],1)],1)],1)],1)],1)},i=[],r=a("0e12"),s=a("ce71"),o=a("0280"),c=a("7042"),l=a("a498"),d={components:{FeedFooterCard:l["a"],FeedPeopleCard:c["a"],FeedEventsPreviewCard:o["a"],FeedCategoryListCard:s["a"],FeedProfilePreviewCard:r["a"]},data:function(){return{events:[{backgroundImage:a("486d"),name:"Project 81"},{backgroundImage:a("eb65"),name:"Chasing Waterfalls"},{backgroundImage:a("17ae"),name:"Food Trippers"},{backgroundImage:a("5cb6"),name:"Backpackers"},{backgroundImage:a("ffaf"),name:"Mountaineers"},{backgroundImage:a("a22f"),name:"Solo Trip"},{backgroundImage:a("117d"),name:"Couple Adventure"},{backgroundImage:a("96bf"),name:"Barkada Adventure"}]}}},u=d,f=(a("581f"),a("2877")),v=a("6544"),p=a.n(v),g=a("b0af"),h=a("62ad"),m=a("0fd9"),b=Object(f["a"])(u,n,i,!1,null,"0869aabb",null);e["default"]=b.exports;p()(b,{VCard:g["a"],VCol:h["a"],VRow:m["a"]})},"8efc":function(t,e,a){},"96bf":function(t,e,a){t.exports=a.p+"img/barkada-adventure.98af6f01.jpg"},a22f:function(t,e,a){t.exports=a.p+"img/solo-trip.d4d1d7aa.jpeg"},a498:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{outlined:"",id:"generic-sticky-footer-card"}},[a("v-card-subtitle",[t._v("Sticky Footer")])],1)},i=[],r={name:"generic-sticky-footer-card"},s=r,o=(a("e67a"),a("2877")),c=a("6544"),l=a.n(c),d=a("b0af"),u=a("99d9"),f=Object(o["a"])(s,n,i,!1,null,"1c4e5426",null);e["a"]=f.exports;l()(f,{VCard:d["a"],VCardSubtitle:u["b"]})},adda:function(t,e,a){"use strict";a("a15b"),a("a9e3");var n=a("53ca"),i=(a("8efc"),a("90a2")),r=(a("36a7"),a("24b2")),s=a("58df"),o=Object(s["a"])(r["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=a("7560"),d=a("d9f7"),u=a("d9bd"),f="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(s["a"])(c,l["a"]).extend({name:"v-img",directives:{intersect:i["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var a=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[a]):a}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,a){if(!f||a||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(u["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var i=t.naturalHeight,r=t.naturalWidth;i||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/i):null!=a&&!e.hasError&&setTimeout(n,a)};n()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),a=Object(d["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:f?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,a,e.children)}})},ce71:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"font-weight-bold"},[t._v("Categories")]),t._l(10,(function(e){return[a("div",{key:e},[e<=10?a("v-divider"):t._e(),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-food-apple-outline ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" Category "+t._s(e)+" ")]),a("v-list-item-subtitle",[t._v("Lorem ipsum dolor.")])],1)],1)],1)]}))],2)},i=[],r={name:"feed-category-list-card"},s=r,o=a("2877"),c=a("6544"),l=a.n(c),d=a("b0af"),u=a("99d9"),f=a("ce7e"),v=a("132d"),p=a("da13"),g=a("5d23"),h=a("34c3"),m=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=m.exports;l()(m,{VCard:d["a"],VCardTitle:u["d"],VDivider:f["a"],VIcon:v["a"],VListItem:p["a"],VListItemContent:g["b"],VListItemIcon:h["a"],VListItemSubtitle:g["c"],VListItemTitle:g["d"]})},cfe6:function(t,e,a){t.exports=a.p+"img/profile-photo.f5b6d45f.jpg"},e67a:function(t,e,a){"use strict";var n=a("2115"),i=a.n(n);i.a},eb65:function(t,e,a){t.exports=a.p+"img/chasing-waterfalls.54ec784f.jpeg"},f6ae:function(t,e,a){"use strict";var n=a("0a44"),i=a.n(n);i.a},ffaf:function(t,e,a){t.exports=a.p+"img/mountaineers.9823d0c7.jpeg"}}]);
//# sourceMappingURL=chunk-705f9c1a.eba18fb2.js.map