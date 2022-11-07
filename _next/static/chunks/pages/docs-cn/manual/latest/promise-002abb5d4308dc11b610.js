(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68419],{17375:function(e,r,n){"use strict";function t(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(r,{Z:function(){return t}})},3149:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var t=n(17375),o=n(96156),a=(n(67294),n(3905));function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var p,l=(p="CodeTab",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",i({},e))}),m={};function c(e){var r=e.components,n=(0,t.Z)(e,["components"]);return(0,a.kt)("wrapper",i(i(i({},m),n),{},{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"\u5f02\u6b65\u4e0e-promise"}),"\u5f02\u6b65\u4e0e Promise"),(0,a.kt)("p",null,"\u5728\u7f16\u8bd1\u5668 10.1 \u7248\u672c\u4e2d\u589e\u52a0\u4e86\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," \u7684\u652f\u6301\u3002\u73b0\u6709\u7684\u5927\u90e8\u5206\u4ee3\u7801\u90fd\u662f\u57fa\u4e8e promise \u7684\u3002\u65b0\u7684 Promise API \u7ed1\u5b9a\u4f7f\u5f02\u6b65\u4ee3\u7801\u770b\u8d77\u6765\u6bd4\u4f7f\u7528\u65e7\u7684 promise \u66f4\u597d\u3002"),(0,a.kt)("h2",i({},{id:"promise-\u65b0\u7248\u672c"}),"Promise (\u65b0\u7248\u672c)"),(0,a.kt)("p",null,"\u6211\u4eec\u6700\u65b0\u7684 Promise \u7ed1\u5b9a\u76ee\u524d\u8fd8\u4e0d\u662f\u6807\u51c6\u5e93\u7684\u4e00\u90e8\u5206\uff0c\u73b0\u5728\uff0c\u8fd8\u8bf7\u5355\u72ec\u5b89\u88c5\u5b83\u4eec\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-sh"}),"npm install @ryyppy/rescript-promise --save\n")),(0,a.kt)("p",null,"\u5728\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"bsconfig.json")," \u4e2d\u52a0\u4e0a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-json"}),'{\n  "bs-dependencies": ["@ryyppy/rescript-promise"]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u5982\u679c\u4f60\u60f3\u6709\u66f4\u591a\u7684\u63a7\u5236\u6743\uff0c\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u5e93\u4e2d\u76f4\u63a5\u52a0\u5165 ",(0,a.kt)("a",i({parentName:"em"},{href:"https://github.com/ryyppy/rescript-promise/tree/master/src"}),(0,a.kt)("inlineCode",{parentName:"a"},"Promise.res"),"/",(0,a.kt)("inlineCode",{parentName:"a"},"Promise.resi")," \u6587\u4ef6"),"\u3002")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230 API \u6587\u6863\u548c\u5b8c\u6574\u7684\u4f7f\u7528",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/ryyppy/rescript-promise#usage"}),"\u4f8b\u5b50"),"\u3002"),(0,a.kt)("h2",i({},{id:"promise-\u65e7\u7248\u672c"}),"Promise (\u65e7\u7248\u672c)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"Js.Promise")," \u7ed1\u5b9a\u9075\u5faa\u51e0\u5e74\u524d\u8fc7\u65f6\u7684 data-last \u7ea6\u5b9a\u3002\u6211\u4eec\u4fdd\u7559\u8fd9\u4e9b API \u662f\u4e3a\u4e86\u5411\u540e\u517c\u5bb9\uff0c\u73b0\u5728\u8bf7\u4f7f\u7528 ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/ryyppy/rescript-promise"}),(0,a.kt)("inlineCode",{parentName:"a"},"rescript-promise"))," \u76f4\u5230\u6211\u4eec\u5c06\u65b0\u7684\u7ed1\u5b9a\u4e0a\u4f20\u5230\u6211\u4eec\u7684\u6807\u51c6\u5e93\u3002")),(0,a.kt)("p",null,"ReScript \u5185\u7f6e\u4e86\u5bf9 ",(0,a.kt)("a",i({parentName:"p"},{href:"api/js/promise"}),"JavaScript promise")," \u7684\u652f\u6301\u3002\u60a8\u901a\u5e38\u9700\u8981\u7684 3 \u4e2a\u51fd\u6570\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Js.Promise.resolve: 'a => Js.Promise.t('a)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Js.Promise.then_: ('a => Js.Promise.t('b), Js.Promise.t('a)) => Js.Promise.t('b)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Js.Promise.catch: (Js.Promise.error => Js.Promise.t('a), Js.Promise.t('a)) => Js.Promise.t('a)"))),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u8fd9\u91cc\u662f\u5728 ReScript \u7aef\u521b\u5efa Promise \u7684\u7c7b\u578b\u7b7e\u540d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-res"}),"Js.Promise.make: (\n  (\n    ~resolve: (. 'a) => unit,\n    ~reject: (. exn) => unit\n  ) => unit\n) => Js.Promise.t<'a>\n")),(0,a.kt)("p",null,"\u8fd9\u79cd\u7c7b\u578b\u7b7e\u540d\u610f\u5473\u7740 ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," \u63a5\u53d7\u4e00\u4e2a\u6709\u4e24\u4e2a\u53c2\u6570\u7684\u56de\u8c03\u51fd\u6570\uff0c\u53c2\u6570\u5206\u522b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"reject"),"\u3002\u4e24\u4e2a\u53c2\u6570\u90fd\u662f",(0,a.kt)("a",i({parentName:"p"},{href:"function.md#uncurried-function"}),"\u53bb\u67ef\u91cc\u5316\u7684\u56de\u8c03\u51fd\u6570"),"\uff08\u6ce8\u610f\u5e26\u70b9\uff09\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"make")," \u8fd4\u56de\u521b\u5efa\u7684 promise\u3002"),(0,a.kt)("h3",i({},{id:"\u7528\u6cd5"}),"\u7528\u6cd5"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("a",i({parentName:"p"},{href:"pipe.md"}),"\u7ba1\u9053\u64cd\u4f5c\u7b26"),"\uff1a"),(0,a.kt)(l,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let myPromise = Js.Promise.make((~resolve, ~reject) => resolve(. 2))\n\nmyPromise->Js.Promise.then_(value => {\n  Js.log(value)\n  Js.Promise.resolve(value + 2)\n}, _)->Js.Promise.then_(value => {\n  Js.log(value)\n  Js.Promise.resolve(value + 3)\n}, _)->Js.Promise.catch(err => {\n  Js.log2("Failure!!", err)\n  Js.Promise.resolve(-2)\n}, _)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var myPromise = new Promise(function (resolve, reject) {\n  return resolve(2);\n});\n\nmyPromise\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 2) | 0);\n  })\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 3) | 0);\n  })\n  .catch(function (err) {\n    console.log("Failure!!", err);\n    return Promise.resolve(-2);\n  });\n'))))}c.isMDXComponent=!0,c.frontmatter={title:"Async & Promise",description:"JS Promise handling in ReScript",canonical:"/docs/manual/latest/promise",__ghEditHref:"https://github.com/rescript-idea/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/promise.mdx"}},85700:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/promise",function(){return n(3149)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return r=85700,e(e.s=r);var r}));var r=e.O();_N_E=r}]);