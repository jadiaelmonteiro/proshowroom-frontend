"use strict";(self["webpackChunkpro_showroom"]=self["webpackChunkpro_showroom"]||[]).push([[90],{3465:(t,i,e)=>{e.r(i),e.d(i,{default:()=>A});var s=e(1689),n=e(6453),a=e(1526),o=e(1770),r=e(9456),l=e(6520),u=e(8412),h=e(7410),c=e(5779),d=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"settings-wrapper"}},[i(s.A,{staticClass:"py-2 px-4",staticStyle:{position:"fixed",top:"115px",right:"-35px","border-radius":"8px"},attrs:{id:"settings",color:"rgba(0, 0, 0, .3)",dark:"",flat:"",link:"","min-width":"100"}},[i(r.A,{attrs:{large:""}},[t._v(" mdi-settings ")])],1),i(l.A,{attrs:{"close-on-content-click":!1,activator:"#settings",bottom:"","content-class":"v-settings",left:"","nudge-left":"8","offset-x":"",origin:"top right",transition:"scale-transition"},model:{value:t.menu,callback:function(i){t.menu=i},expression:"menu"}},[i(s.A,{staticClass:"text-center mb-0",attrs:{width:"300"}},[i(n.OQ,[i("strong",{staticClass:"mb-3 d-inline-block"},[t._v("Barra Lateral filtros")]),i(o.A,{staticClass:"my-4 secondary"}),i(u.A,{attrs:{align:"center","no-gutters":""}},[i(a.A,{attrs:{cols:"auto"}},[t._v(" Dark Mode ")]),i(h.A),i(a.A,{attrs:{cols:"auto"}},[i(c.A,{staticClass:"ma-0 pa-0",attrs:{color:"secondary","hide-details":""},model:{value:t.$vuetify.theme.dark,callback:function(i){t.$set(t.$vuetify.theme,"dark",i)},expression:"$vuetify.theme.dark"}})],1)],1),i(o.A,{staticClass:"my-4 secondary"})],1)],1)],1)],1)},p=[];const v={name:"DashboardCoreSettings",data:function(){return{menu:!1}},computed:{},watch:{color:function(t){this.$vuetify.theme.themes[this.isDark?"dark":"light"].primary=t}},methods:{}},f=v;var m=e(1656),g=(0,m.A)(f,d,p,!1,null,null,null);const A=g.exports},7410:(t,i,e)=>{e.d(i,{A:()=>n});e(158);var s=e(6960);const n=(0,s.Gn)("spacer","div","v-spacer")},5779:(t,i,e)=>{e.d(i,{A:()=>A});var s=e(5809),n=e(1034),a=(e(8830),e(3514),e(6918),e(2008),e(4346),e(4114),e(5086),e(3288),e(6099),e(8781),e(3960)),o=e(1723),r=e(2893);const l=r.Ay.extend({name:"rippleable",directives:{ripple:o.A},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}});var u=e(5088),h=e(3507);function c(t){t.preventDefault()}const d=(0,h.A)(a.A,l,u.A).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,i=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((function(e){return t.valueComparator(e,i)})):void 0===this.trueValue||void 0===this.falseValue?i?this.valueComparator(i,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=a.A.options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput:function(t,i){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},i),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var i=this.value,e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);var s=e.length;e=e.filter((function(e){return!t.valueComparator(e,i)})),e.length===s&&e.push(i)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:i?this.valueComparator(e,i)?null:i:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}});var p=e(499),v=e(1906),f=e(2585),m=e(6960),g=["title"];const A=d.extend({name:"v-switch",directives:{Touch:p.A},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return(0,n.A)((0,n.A)({},a.A.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,i=(t.title,(0,s.A)(t,g));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",(0,n.A)((0,n.A)({},this.attrs),i)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",(0,n.A)({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",(0,n.A)({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(v.Z,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(f.A,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===m.uP.left&&this.isActive||t.keyCode===m.uP.right&&!this.isActive)&&this.onChange()}}})}}]);
//# sourceMappingURL=90.9eba90a3.js.map