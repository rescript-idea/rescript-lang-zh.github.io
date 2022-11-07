(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16890],{17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},88671:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(17375),a=n(96156),o=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s,u=(s="CodeTab",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",p({},e))}),i={};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",p(p(p({},i),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",p({},{id:"tuple"}),"Tuple"),(0,o.kt)("p",null,"Tuples are a ReScript-specific data structure that don't exist in JavaScript. They are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"immutable"),(0,o.kt)("li",{parentName:"ul"},"ordered"),(0,o.kt)("li",{parentName:"ul"},"fix-sized at creation time"),(0,o.kt)("li",{parentName:"ul"},"heterogeneous (can contain different types of values)")),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let ageAndName = (24, "Lil\' ReScript")\nlet my3dCoordinates = (20.0, 30.5, 100.0)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var ageAndName = [24, "Lil\' ReScript"];\nvar my3dCoordinates = [20.0, 30.5, 100.0];\n'))),(0,o.kt)("p",null,"Tuples' types can be used in type annotations as well. Tuple types visually resemble tuples values."),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),'let ageAndName: (int, string) = (24, "Lil\' ReScript")\n// a tuple type alias\ntype coord3d = (float, float, float)\nlet my3dCoordinates: coord3d = (20.0, 30.5, 100.0)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var ageAndName = [24, "Lil\' ReScript"];\nvar my3dCoordinates = [20.0, 30.5, 100.0];\n'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": there's no tuple of size 1. You'd just use the value itself."),(0,o.kt)("h2",p({},{id:"usage"}),"Usage"),(0,o.kt)("p",null,"To get a specific member of a tuple, destructure it:"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let (_, y, _) = my3dCoordinates // now you've retrieved y\n")),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),"var y = 30.5;\n"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," means you're ignoring the indicated members of the tuple."),(0,o.kt)("p",null,"Tuples aren't meant to be updated mutatively. You'd create new ones by destructuring the old ones:"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let coordinates1 = (10, 20, 30)\nlet (c1x, _, _) = coordinates1\nlet coordinates2 = (c1x + 50, 20, 30)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),"var coordinates1 = [10, 20, 30];\nvar c1x = 10;\nvar coordinates2 = [60, 20, 30];\n"))),(0,o.kt)("h2",p({},{id:"tips--tricks"}),"Tips & Tricks"),(0,o.kt)("p",null,"You'd use tuples in handy situations that pass around multiple values without too much ceremony. For example, to return many values:"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),"let getCenterCoordinates = () => {\n  let x = doSomeOperationsHere()\n  let y = doSomeMoreOperationsHere()\n  (x, y)\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),"function getCenterCoordinates(param) {\n  var x = doSomeOperationsHere(undefined);\n  var y = doSomeMoreOperationsHere(undefined);\n  return [x, y];\n}\n"))),(0,o.kt)("p",null,"Try to keep the usage of tuple ",(0,o.kt)("strong",{parentName:"p"},"local"),". For data structures that are long-living and passed around often, prefer a ",(0,o.kt)("strong",{parentName:"p"},"record"),", which has named fields."))}c.isMDXComponent=!0,c.frontmatter={title:"Tuple",description:"Tuple types and values in ReScript",canonical:"/docs/manual/latest/tuple",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/tuple.mdx"}},84006:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/tuple",function(){return n(88671)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=84006,e(e.s=t);var t}));var t=e.O();_N_E=t}]);