(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7387447c"],{3408:function(t,s,e){},"34a0":function(t,s,e){"use strict";var a=e("7252"),i=e.n(a);i.a},"615b":function(t,s,e){},7252:function(t,s,e){},8212:function(t,s,e){"use strict";e("a9e3");var a=e("5530"),i=(e("3408"),e("a9ad")),o=e("24b2"),r=e("a236"),n=e("80d2"),c=e("58df");s["a"]=Object(c["a"])(i["a"],o["a"],r["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(a["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(a["a"])({height:Object(n["g"])(this.size),minWidth:Object(n["g"])(this.size),width:Object(n["g"])(this.size)},this.measurableStyles)}},render:function(t){var s={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,s),this.$slots.default)}})},"99d9":function(t,s,e){"use strict";e.d(s,"a",(function(){return o})),e.d(s,"b",(function(){return r})),e.d(s,"c",(function(){return n})),e.d(s,"d",(function(){return c}));var a=e("b0af"),i=e("80d2"),o=Object(i["i"])("v-card__actions"),r=Object(i["i"])("v-card__subtitle"),n=Object(i["i"])("v-card__text"),c=Object(i["i"])("v-card__title");a["a"]},"9d65":function(t,s,e){"use strict";var a=e("d9bd"),i=e("2b0e");s["a"]=i["default"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(a["e"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},b0af:function(t,s,e){"use strict";e("0481"),e("4069"),e("a9e3");var a=e("5530"),i=(e("615b"),e("10d2")),o=e("297c"),r=e("1c87"),n=e("58df");s["a"]=Object(n["a"])(o["a"],r["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var s=this.generateRouteLink(),e=s.tag,a=s.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},df4e:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-dialog",{on:{"click:outside":function(s){t.isOpen=!1}},model:{value:t.isOpen,callback:function(s){t.isOpen=s},expression:"isOpen"}},[e("v-card",{attrs:{color:"transparent",flat:""}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",md:"9"}},[e("v-card",{staticClass:"image-background",style:{width:"100%",height:"80vh",position:"relative",backgroundImage:"linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(https://images.pexels.com/photos/2413238/pexels-photo-2413238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"},attrs:{tile:""}},[e("div",{staticClass:"fill-height d-flex justify-center align-center"},[e("div",{style:{width:"auto",height:"100%"}},[e("v-img",{attrs:{src:"https://images.pexels.com/photos/2413238/pexels-photo-2413238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",width:"100%",height:"100%",contain:""}})],1)]),e("v-btn",{staticClass:"next-image-button",attrs:{fab:"",color:"white",small:""}},[e("v-icon",{attrs:{small:"",color:"black"}},[t._v("mdi-chevron-left")])],1),e("v-btn",{staticClass:"previous-image-button",attrs:{fab:"",color:"white",small:""}},[e("v-icon",{attrs:{small:"",color:"black"}},[t._v("mdi-chevron-right")])],1),e("v-btn",{staticClass:"close-button",attrs:{icon:"",small:""},on:{click:function(s){t.isOpen=!1}}},[e("v-icon",{attrs:{color:"white"}},[t._v("mdi-close")])],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"3"}},[e("v-card",{staticClass:"next-images-card",style:{width:"100%",height:"80vh"},attrs:{tile:""}},[e("div",{staticClass:"px-4 pt-3"},[e("div",{staticClass:"d-flex align-start justify-space-between mb-2"},[e("div",{staticClass:"mr-2"},[e("div",[e("span",{staticClass:"caption"},[t._v("Sebastian Curtis T. Lavarias - 6 hrs ago")])])]),e("v-avatar",{attrs:{size:40}},[e("v-img",{attrs:{src:"https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"}})],1)],1)]),e("v-card-title",[t._v("Itinerary Gallery")]),e("v-card-subtitle",[t._v("Opened 1 out of 5 images")]),e("v-card-text",[e("masonry",{attrs:{cols:2,gutter:5}},[t._l(t.images,(function(t,s){return[e("div",{key:s,style:{position:"relative"}},[e("v-img",{staticClass:"mb-1",attrs:{width:"100%",height:"auto",src:t}})],1)]}))],2)],1)],1)],1)],1)],1)],1)},i=[],o=e("7ec7"),r=e.n(o),n={components:{Carousel:r.a},data:function(){return{isOpen:!1,images:["https://images.pexels.com/photos/902288/pexels-photo-902288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/2604843/pexels-photo-2604843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/210367/pexels-photo-210367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/2475386/pexels-photo-2475386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/1364554/pexels-photo-1364554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]}},watch:{isOpen:function(t){if(!t)return this.$router.go(-1)}},created:function(){this.isOpen=!0}},c=n,l=(e("34a0"),e("2877")),d=e("6544"),h=e.n(d),u=e("8212"),p=e("8336"),g=e("b0af"),v=e("99d9"),m=e("62ad"),b=e("169a"),f=e("132d"),y=e("adda"),x=e("0fd9"),w=Object(l["a"])(c,a,i,!1,null,"4676efbe",null);s["default"]=w.exports;h()(w,{VAvatar:u["a"],VBtn:p["a"],VCard:g["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCol:m["a"],VDialog:b["a"],VIcon:f["a"],VImg:y["a"],VRow:x["a"]})}}]);
//# sourceMappingURL=chunk-7387447c.23e3a2e3.js.map