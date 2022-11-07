(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96328],{17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},46260:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(17375),o=n(96156),a=(n(67294),n(3905));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p,l=(p="Intro",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",i({},e))}),c={};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",i(i(i({},c),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"obj"}),"Obj"),(0,a.kt)(l,{mdxType:"Intro"},(0,a.kt)("p",null,"Provide utilities for Js.t.")),(0,a.kt)("h2",i({},{id:"empty"}),"empty"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let empty: unit => {..}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"empty()")," returns the empty object ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,a.kt)("h2",i({},{id:"assign"}),"assign"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let assign: ({..}, {..}) => {..}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"assign(target, source)")," copies properties from source to target.\nProperties in ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," will be overwritten by properties in ",(0,a.kt)("inlineCode",{parentName:"p"},"source")," if they have the same key.\nReturns ",(0,a.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'/* Copy an object */\n\nlet obj = {"a": 1}\n\nlet copy = Js.Obj.assign(Js.Obj.empty(), obj)\n\n/* prints "{ a: 1 }" */\nJs.log(copy)\n\n/* Merge objects with same properties */\n\nlet target = {"a": 1, "b": 1}\nlet source = {"b": 2}\n\nlet obj = Js.Obj.assign(target, source)\n\n/* prints "{ a: 1, b: 2 }" */\nJs.log(obj)\n\n/* prints "{ a: 1, b: 2 }", target is modified */\nJs.log(target)\n')),(0,a.kt)("h2",i({},{id:"keys"}),"keys"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keys: {..} => array<string>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"keys(obj)")," returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," of the keys of ",(0,a.kt)("inlineCode",{parentName:"p"},"obj"),"'s own enumerable properties."))}u.isMDXComponent=!0,u.frontmatter={__ghEditHref:"https://github.com/rescript-idea/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/api/js/obj.mdx"}},98445:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/api/js/obj",function(){return n(46260)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=98445,e(e.s=t);var t}));var t=e.O();_N_E=t}]);