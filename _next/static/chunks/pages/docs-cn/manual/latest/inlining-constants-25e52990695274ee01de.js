(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20438],{17375:function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return o}})},17960:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var o=t(17375),r=t(96156),a=(t(67294),t(3905));function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s,c=(s="CodeTab",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",p({},e))}),i={};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",p(p(p({},i),t),{},{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",p({},{id:"\u5185\u8054\u5e38\u91cf"}),"\u5185\u8054\u5e38\u91cf"),(0,a.kt)("p",null,"\u6709\u65f6\uff0c\u5728\u8f93\u51fa\u7684 JavaScript \u4e2d\uff0c\u4f60\u53ef\u80fd\u60f3\u8981\u5c06\u7279\u5b9a\u7684\u503c\u5f3a\u5236\u5185\u8054\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"if (process.env.mode === 'development') {\n  console.log(\"Dev-only code here!\")\n}\n")),(0,a.kt)("p",null,"\u539f\u56e0\u662f\u4f60\u7684 JavaScript \u6253\u5305\u5668\uff08\u4f8b\u5982 Webpack\uff09\u53ef\u80fd\u4f1a\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"if ('production' === 'development') {\n  console.log(\"Dev-only code here!\")\n}\n")),(0,a.kt)("p",null,"\u4e4b\u540e\u7684 Uglifyjs \u4f18\u5316\u8fc7\u7a0b\u4f1a\u5c06\u6574\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," \u5757\u79fb\u9664\u3002\u8fd9\u6837\u53ef\u4ee5\u505a\u5230\u5728\u5f00\u53d1\u6a21\u5f0f\u4f7f\u7528\u5927\u91cf\u5f00\u53d1\u65f6\u8b66\u62a5\u4ee3\u7801\u7684\u540c\u65f6\u786e\u4fdd\u538b\u7f29\uff08\u7cbe\u7b80\uff09\u540e\u7684\u751f\u4ea7\u4ee3\u7801\u80fd\u53bb\u9664\u6389\u8fd9\u4e9b\u6602\u8d35\u7684\u4ee3\u7801\uff0cReactJS \u7b49\u9879\u76ee\u5c31\u662f\u8fd9\u6837\u505a\u7684\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u5728 ReScript \u4e2d\uff0c\u751f\u6210\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"if (process.env.mode === 'development')")," \u7684\u8f93\u51fa\u975e\u5e38\u91cd\u8981\u3002\u4ee5\u4e0b\u7684\u5c1d\u8bd5\u6ca1\u6709\u6548\u679c\uff1a"),(0,a.kt)(c,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val external process: \'a = "process"\n\nlet mode = "development"\n\nif (process["env"]["mode"] === mode) {\n  Js.log("Dev-only code here!")\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var mode = "development";\n\nif (process.env.mode === mode) {\n  console.log("Dev-only code here!");\n}\n'))),(0,a.kt)("p",null,"JS \u8f93\u51fa\u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"if (process.env.mode === mode)"),"\uff0c\u8fd9\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\u7ed3\u679c\u3002\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@inline")," \u6765\u5185\u8054 ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," \u7684\u503c\uff1a"),(0,a.kt)(c,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val external process: \'a = "process"\n\n@inline\nlet mode = "development"\n\nif (process["env"]["mode"] === mode) {\n  Js.log("Dev-only code here!")\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'if (process.env.mode === "development") {\n  console.log("Dev-only code here!");\n}\n'))),(0,a.kt)("p",null,"\u73b0\u5728\u751f\u6210\u7684 JS \u4ee3\u7801\u53ef\u4ee5\u50cf\u5176\u4ed6\u7684 JS \u4ee3\u7801\u4e00\u6837\u901a\u8fc7 Webpack \u548c Uglifyjs\uff0c\u5e76\u4e14 ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," \u4ee3\u7801\u5757\u80fd\u88ab\u53bb\u9664\u3002"),(0,a.kt)("p",null,"\u5185\u8054\u76ee\u524d\u53ea\u9002\u7528\u4e8e ",(0,a.kt)("strong",{parentName:"p"},"string\uff0cfloat \u548c boolean"),"\u3002"),(0,a.kt)("h2",p({},{id:"\u63d0\u793a--\u6280\u5de7"}),"\u63d0\u793a & \u6280\u5de7"),(0,a.kt)("p",null,"\u8fd9",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u662f"),"\u4f18\u5316\u3002\u8fd9\u662f\u4e00\u4e2a\u8fb9\u7f18\u7279\u6027\uff0c\u63d0\u4f9b\u7ed9\u9700\u8981\u4e3a JavaScript \u540e\u7eed\u6b65\u9aa4\uff08\u4f8b\u5982\u6761\u4ef6\u7f16\u8bd1\uff09\u5185\u8054\u7279\u5b9a\u503c\u7684\u4eba\u4eec\u3002\u9664\u4e86\u6761\u4ef6\u7f16\u8bd1\u8f93\u51fa\u7684\u4ee3\u7801\u53ef\u80fd\u6709\u6240\u4e0d\u540c\u4e4b\u5916\uff0c\u5185\u8054\u548c\u4e0d\u5185\u8054\u7b80\u5355\u503c\u5bf9\u4e8e JavaScript \u5f15\u64ce\u6765\u8bf4\u6ca1\u6709\u6027\u80fd\u4e0a\u7684\u5dee\u5f02\u3002"))}u.isMDXComponent=!0,u.frontmatter={title:"\u5185\u8054\u5e38\u91cf",description:"Inlining constants",canonical:"/docs/manual/latest/inlining-constants",__ghEditHref:"https://github.com/rescript-idea/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/inlining-constants.mdx"}},23987:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/inlining-constants",function(){return t(17960)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=23987,e(e.s=n);var n}));var n=e.O();_N_E=n}]);