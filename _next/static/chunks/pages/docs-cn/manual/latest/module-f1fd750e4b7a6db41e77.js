(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65906],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},17209:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a=t(17375),r=t(96156),l=(t(67294),t(3905));function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var i,s=(i="CodeTab",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",o({},e))}),u={};function m(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",o(o(o({},u),t),{},{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",o({},{id:"\u6a21\u5757"}),"\u6a21\u5757"),(0,l.kt)("h2",o({},{id:"\u57fa\u7840\u77e5\u8bc6"}),"\u57fa\u7840\u77e5\u8bc6"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6a21\u5757\u5c31\u50cf\u8ff7\u4f60\u6587\u4ef6\uff01"),"\u5b83\u4eec\u53ef\u4ee5\u5305\u542b\u7c7b\u578b\u5b9a\u4e49\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u7ed1\u5b9a\u3001\u5d4c\u5957\u6a21\u5757\u7b49\u3002"),(0,l.kt)("h3",o({},{id:"\u521b\u5efa\u6a21\u5757"}),"\u521b\u5efa\u6a21\u5757"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"module")," \u5173\u952e\u5b57\u6765\u521b\u5efa\u6a21\u5757\u3002\u6a21\u5757\u7684\u540d\u5b57\u5fc5\u987b\u4ee5",(0,l.kt)("strong",{parentName:"p"},"\u5927\u5199\u5b57\u6bcd"),"\u5f00\u5934\u3002\u4efb\u4f55\u4f60\u53ef\u4ee5\u653e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},".res")," \u6587\u4ef6\u7684\u4e1c\u897f\u90fd\u53ef\u4ee5\u653e\u7f6e\u5728\u6a21\u5757\u5b9a\u4e49\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," \u5757\u4e2d\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module School = {\n  type profession = Teacher | Director\n\n  let person1 = Teacher\n  let getProfession = (person) =>\n    switch person {\n    | Teacher => "A teacher"\n    | Director => "A director"\n    }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),'function getProfession(person) {\n  if (person) {\n    return "A director";\n  } else {\n    return "A teacher";\n  }\n}\n\nvar School = {\n  person1: /* Teacher */0,\n  getProfession: getProfession\n};\n'))),(0,l.kt)("p",null,"\u6a21\u5757\u7684\u5185\u5bb9\uff08\u5305\u62ec\u7c7b\u578b\uff01\uff09\u53ef\u4ee5\u50cf\u8bb0\u5f55\u4e00\u6837\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},".")," \u8bbf\u95ee\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u6f14\u793a\u4e86\u6a21\u5757\u7684\u547d\u540d\u7a7a\u95f4\u529f\u80fd\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res"}),'let anotherPerson: School.profession = School.Teacher\nJs.log(School.getProfession(anotherPerson)) /* "A teacher" */\n')),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var anotherPerson = /* Teacher */0;\nconsole.log("A teacher");\n'))),(0,l.kt)("p",null,"\u6a21\u5757\u4e5f\u53ef\u4ee5\u5d4c\u5957\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module MyModule = {\n  module NestedModule = {\n    let message = "hello"\n  }\n}\n\nlet message = MyModule.NestedModule.message\n')),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var NestedModule = {\n  message: message\n};\n\nvar MyModule = {\n  NestedModule: NestedModule\n};\n\nvar message = MyModule.NestedModule.message;\n"))),(0,l.kt)("h3",o({},{id:"\u6253\u5f00\uff08open\uff09\u6a21\u5757"}),"\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"h3"},"\uff08open\uff09"),"\u6a21\u5757"),(0,l.kt)("p",null,"\u4e0d\u65ad\u5f15\u7528\u6a21\u5757\u4e2d\u7684\u503c/\u7c7b\u578b\u4f1a\u5f88\u5570\u55e6\u3002\u6211\u4eec\u53ef\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"open")," \u4e00\u4e2a\u6a21\u5757\uff0c\u5f15\u7528\u5b83\u7684\u5185\u5bb9\uff0c\u800c\u4e0d\u5fc5\u603b\u662f\u5728\u5b83\u4eec\u524d\u9762\u52a0\u4e0a\u6a21\u5757\u7684\u540d\u79f0\u3002\u9664\u4e86\u8fd9\u6837\u5199\uff1a"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res"}),"let p = School.getProfession(School.person1)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var p = School.getProfession(School.person1);\n"))),(0,l.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u8fd9\u6837\uff1a"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res"}),"open School\nlet p = getProfession(person1)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var p = School.getProfession(School.person1);\n"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"School")," \u6a21\u5757\u7684\u5185\u5bb9\u5728\u4f5c\u7528\u57df\u5185\u53ef\u89c1\uff08",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u662f"),"\u590d\u5236\u5230\u6587\u4ef6\u4e2d\uff0c\u4ec5\u4ec5\u662f\u53ef\u89c1\u800c\u5df2\uff01\uff09\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u6b63\u786e\u5730\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"profession"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"getProfession")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"person1"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5c3d\u91cf\u5c11\u7528 ",(0,l.kt)("inlineCode",{parentName:"strong"},"open"),"\uff0c\u5b83\u5f88\u65b9\u4fbf\uff0c\u4f46\u662f\u5f88\u96be\u77e5\u9053\u503c\u662f\u4ece\u54ea\u6765\u7684\u3002"),"\u4f60\u901a\u5e38\u5e94\u8be5\u5728\u5c40\u90e8\u4f5c\u7528\u57df\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"open"),"\uff1a"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res"}),"let p = {\n  open School\n  getProfession(person1)\n}\n/* School's content isn't visible here anymore */\n")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var p = School.getProfession(School.person1);\n"))),(0,l.kt)("h3",o({},{id:"\u4f7f\u7528-open-\u6765\u5ffd\u7565\u8986\u76d6\u8b66\u544a"}),"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"open!")," \u6765\u5ffd\u7565\u8986\u76d6\u8b66\u544a"),(0,l.kt)("p",null,"\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u73b0\u6709\u7684\u6807\u8bc6\u7b26\uff08\u7ed1\u5b9a\u3001\u7c7b\u578b\uff09\u88ab\u91cd\u5b9a\u4e49\u4e86\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"open")," \u4f1a\u5f15\u53d1\u8b66\u544a\u3002\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"open!")," \u6765\u660e\u786e\u5730\u544a\u8bc9\u7f16\u8bd1\u5668\u8fd9\u662f\u6240\u5e0c\u671b\u7684\u884c\u4e3a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res"}),"let map = (arr, value) => {\n  value\n}\n\n// opening Js.Array2 would shadow our previously defined `map`\n// `open!` will explicitly turn off the automatic warning\nopen! Js.Array2\nlet arr = map([1,2,3], (a) => { a + 1})\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"open")," \u4e00\u6837\uff0c\u5982\u679c\u6ca1\u6709\u5fc5\u8981\uff0c\u5c31\u4e0d\u8981\u8fc7\u5ea6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"open!")," \u8bed\u53e5\u3002\u4f7f\u7528\uff08\u5b50\uff09\u6a21\u5757\u6765\u89e3\u51b3\u8986\u76d6\u95ee\u9898\u3002"),(0,l.kt)("h3",o({},{id:"\u89e3\u6784\u6a21\u5757"}),"\u89e3\u6784\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ece 9.0.2 \u7248\u672c\u5f00\u59cb")),(0,l.kt)("p",null,"\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"open")," \u6a21\u5757\u7684\u66ff\u4ee3\u65b9\u6cd5\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06\u6a21\u5757\u7684\u51fd\u6570\u548c\u503c\u89e3\u6784\u4e3a\u5355\u72ec\u7684 let \u7ed1\u5b9a\uff08\u7c7b\u4f3c\u4e8e\u6211\u4eec\u5728 JavaScript \u4e2d\u89e3\u6784\u5bf9\u8c61\uff09\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res"}),'module User = {\n  let user1 = "Anna"\n  let user2 = "Franz"\n}\n\n// Destructure by name\nlet {user1, user2} = module(User)\n\n// Destructure with different alias\nlet {user1: anna, user2: franz} = module(User)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var user1 = "Anna";\n\nvar user2 = "Franz";\n\nvar User = {\n  user1: user1,\n  user2: user2\n};\n'))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u4f60\u4e0d\u80fd\u4f7f\u7528\u6a21\u5757\u89e3\u6784\u6765\u63d0\u53d6\u7c7b\u578b \u2014\u2014 \u4f7f\u7528\u7c7b\u578b\u522b\u540d\u6765\u4ee3\u66ff\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"type user = User.myUserType"),"\uff09\u3002"),(0,l.kt)("h3",o({},{id:"\u6269\u5c55\u6a21\u5757"}),"\u6269\u5c55\u6a21\u5757"),(0,l.kt)("p",null,"\u5728\u6a21\u5757\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"include")," \uff0c\u53ef\u4ee5\u9759\u6001\u5730\u5c06\u4e00\u4e2a\u6a21\u5757\u7684\u5185\u5bb9\u201c\u6269\u6563\u201d\u5230\u4e00\u4e2a\u65b0\u7684\u6a21\u5757\u4e2d\uff0c\u56e0\u6b64 ",(0,l.kt)("inlineCode",{parentName:"p"},"include")," \u7ecf\u5e38\u53d1\u6325\u201c\u7ee7\u627f\uff08inheritance\uff09\u201d\u548c\u201c\u6df7\u5408\uff08mixin\uff09\u201d\u7684\u4f5c\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u8fd9\u76f8\u5f53\u4e8e\u7f16\u8bd1\u5668\u7ea7\u522b\u7684\u590d\u5236\u7c98\u8d34\u3002",(0,l.kt)("strong",{parentName:"p"},"\u6211\u4eec\u975e\u5e38\u4e0d\u9f13\u52b1\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"strong"},"include"),"\u3002"),"\u5c06\u5b83\u4f5c\u4e3a\u6700\u540e\u7684\u624b\u6bb5\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module BaseComponent = {\n  let defaultGreeting = "Hello"\n  let getAudience = (~excited) => excited ? "world!" : "world"\n}\n\nmodule ActualComponent = {\n  /* the content is copied over */\n  include BaseComponent\n  /* overrides BaseComponent.defaultGreeting */\n  let defaultGreeting = "Hey"\n  let render = () => defaultGreeting ++ " " ++ getAudience(~excited=true)\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),'function getAudience(excited) {\n  if (excited) {\n    return "world!";\n  } else {\n    return "world";\n  }\n}\n\nvar BaseComponent = {\n  defaultGreeting: "Hello",\n  getAudience: getAudience\n};\n\nvar defaultGreeting = "Hey";\n\nfunction render(param) {\n  return "Hey world!";\n}\n\nvar ActualComponent = {\n  getAudience: getAudience,\n  defaultGreeting: defaultGreeting,\n  render: render\n};\n'))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"open")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"include")," \u662f\u975e\u5e38\u4e0d\u540c\u7684\uff01\u524d\u8005\u5c06\u6a21\u5757\u7684\u5185\u5bb9\u5e26\u5165\u5f53\u524d\u7684\u4f5c\u7528\u57df\u4e2d\uff0c\u8fd9\u6837\u4f60\u4e0d\u5fc5\u6bcf\u6b21\u90fd\u7528\u6a21\u5757\u540d\u5b57\u505a\u524d\u7f00\u6765\u5f15\u7528\u4e00\u4e2a\u503c\u3002\u540e\u8005\u662f\u9759\u6001\u5730",(0,l.kt)("strong",{parentName:"p"},"\u590d\u5236"),"\u6a21\u5757\u7684\u5b9a\u4e49\uff0c\u7136\u540e\u4e5f\u4f1a\u6267\u884c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"open")," \u64cd\u4f5c\u3002"),(0,l.kt)("h3",o({},{id:"\u6bcf\u4e00\u4e2a-res-\u6587\u4ef6\u90fd\u662f\u4e00\u4e2a\u6a21\u5757"}),"\u6bcf\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"h3"},".res")," \u6587\u4ef6\u90fd\u662f\u4e00\u4e2a\u6a21\u5757"),(0,l.kt)("p",null,"\u6bcf\u4e2a ReScript \u6587\u4ef6\u672c\u8eab\u88ab\u7f16\u8bd1\u6210\u4e0e\u6587\u4ef6\u540c\u540d\uff08\u9996\u5b57\u6bcd\u5927\u5199\uff09\u7684\u6a21\u5757\u3002\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.res")," \u9690\u5f0f\u5730\u6210\u4e3a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"React")," \u6a21\u5757\uff0c\u5176\u4ed6\u6e90\u6587\u4ef6\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u6a21\u5757\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6309\u7167\u60ef\u4f8b\uff0cReScript \u6587\u4ef6\u540d\u5e94\u8be5\u9996\u5b57\u6bcd\u5927\u5199\uff0c\u4ee5\u4f7f\u5b83\u4eec\u7684\u540d\u5b57\u4e0e\u6a21\u5757\u540d\u79f0\u5339\u914d\u3002\u4e0d\u5927\u5199\u7684\u6587\u4ef6\u540d\u4e0d\u662f\u65e0\u6548\u7684\uff0c\u5b83\u4eec\u4f1a\u9690\u5f0f\u5730\u8f6c\u6362\u4e3a\u5927\u5199\u7684\u6a21\u5757\u540d\u3002\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"file.res")," \u5c06\u4f1a\u88ab\u7f16\u8bd1\u4e3a\u6a21\u5757 ",(0,l.kt)("inlineCode",{parentName:"p"},"File"),"\u3002\u4e3a\u4e86\u7b80\u5316\u548c\u51cf\u5c11\u8fd9\u79cd\u8131\u8282\u611f\uff0c\u60ef\u4f8b\u662f\u5c06\u6587\u4ef6\u540d\u9996\u5b57\u6bcd\u5927\u5199\u3002"),(0,l.kt)("h2",o({},{id:"\u7b7e\u540d"}),"\u7b7e\u540d"),(0,l.kt)("p",null,"\u6a21\u5757\u7684\u7c7b\u578b\u88ab\u79f0\u4e3a\u201c\u7b7e\u540d\u201d\uff0c\u53ef\u4ee5\u663e\u5f0f\u5730\u5199\u51fa\u3002\u5982\u679c\u5c06\u6a21\u5757\u5bf9\u5e94\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},".res"),"\uff08\u5b9e\u73b0\uff09\u6587\u4ef6\uff0c\u90a3\u4e48\u6a21\u5757\u7684\u7b7e\u540d\u5c31\u50cf\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},".resi"),"\uff08\u63a5\u53e3\uff09\u6587\u4ef6\u3002"),(0,l.kt)("h3",o({},{id:"\u521b\u5efa\u7b7e\u540d"}),"\u521b\u5efa\u7b7e\u540d"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"module type")," \u5173\u952e\u5b57\u6765\u521b\u5efa\u7b7e\u540d\u3002\u7b7e\u540d\u540d\u5b57\u5fc5\u987b",(0,l.kt)("strong",{parentName:"p"},"\u9996\u5b57\u6bcd\u5927\u5199"),"\u3002\u4efb\u4f55\u4f60\u53ef\u4ee5\u653e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},".resi")," \u6587\u4ef6\u7684\u4e1c\u897f\u90fd\u53ef\u4ee5\u653e\u7f6e\u5728\u7b7e\u540d\u5b9a\u4e49\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," \u5757\u4e2d\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"/* Picking up previous section's example */\nmodule type EstablishmentType = {\n  type profession\n  let getProfession: profession => string\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,l.kt)("p",null,"\u7b7e\u540d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5217\u8868\uff0c\u5305\u542b\u6a21\u5757\u5fc5\u987b\u6ee1\u8db3\u7684\u8981\u6c42\uff0c\u4ee5\u4f7f\u8be5\u6a21\u5757\u7b26\u5408\u7b7e\u540d\u3002\u8981\u6c42\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"let x: int")," \u8868\u793a\u9700\u8981\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"let")," \u7ed1\u5b9a\uff0c\u7c7b\u578b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"int"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type t = someType")," \u8981\u6c42\u7c7b\u578b\u5b57\u6bb5 ",(0,l.kt)("inlineCode",{parentName:"li"},"t")," \u7b49\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"someType"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type t")," \u8868\u793a\u9700\u8981\u4e00\u4e2a\u7c7b\u578b\u5b57\u6bb5 ",(0,l.kt)("inlineCode",{parentName:"li"},"t"),"\uff0c\u4f46\u6ca1\u6709\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"t")," \u7684\u5b9e\u9645\u5177\u4f53\u7c7b\u578b\u63d0\u51fa\u4efb\u4f55\u8981\u6c42\u3002\u6211\u4eec\u4f1a\u5728\u7b7e\u540d\u7684\u5176\u4ed6\u6761\u76ee\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"t")," \u6765\u63cf\u8ff0\u5173\u7cfb\u3002\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"let makePair: t => (t, t)"),"\uff0c\u6211\u4eec\u65e0\u6cd5\u63a8\u51fa ",(0,l.kt)("inlineCode",{parentName:"li"},"t")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"int"),"\u3002\u8fd9\u7ed9\u4e86\u6211\u4eec\u5f3a\u5927\u7684\uff0c\u5f3a\u5236\u7684\u62bd\u8c61\u80fd\u529b\u3002")),(0,l.kt)("p",null,"\u4e3a\u4e86\u8bf4\u660e\u5404\u79cd\u7c7b\u578b\u7684\u6761\u76ee\uff0c\u8bf7\u8003\u8651\u4e0a\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"EstablishmentType")," \u7b7e\u540d\uff0c\u5b83\u8981\u6c42\u4e00\u4e2a\u6a21\u5757\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u58f0\u660e\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"profession")," \u7684\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u5305\u542b\u4e00\u4e2a\u63a5\u53d7 ",(0,l.kt)("inlineCode",{parentName:"li"},"profession")," \u7c7b\u578b\u503c\u5e76\u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u51fd\u6570\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EstablishmentType")," \u7c7b\u578b\u7684\u6a21\u5757\u53ef\u4ee5\u5305\u542b\u6bd4\u5728\u7b7e\u540d\u4e2d\u58f0\u660e\u7684\u66f4\u591a\u7684\u5b57\u6bb5\uff0c\u5c31\u50cf\u4e4b\u524d\u7ae0\u8282\u4e2d\u7684\u6a21\u5757 ",(0,l.kt)("inlineCode",{parentName:"p"},"School")," \u4e00\u6837\uff08\u5982\u679c\u6211\u4eec\u9009\u62e9\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"School")," \u8d4b\u4e88 ",(0,l.kt)("inlineCode",{parentName:"p"},"EstablishmentType")," \u7c7b\u578b\u3002\u5426\u5219 ",(0,l.kt)("inlineCode",{parentName:"p"},"School")," \u4f1a\u66b4\u9732\u6240\u6709\u5b57\u6bb5\uff09\u3002\u8fd9\u4f7f\u5f97 ",(0,l.kt)("inlineCode",{parentName:"p"},"person1")," \u5b57\u6bb5\u6210\u4e3a\u4e86\u5b9e\u73b0\u7ec6\u8282\uff01\u5916\u90e8\u65e0\u6cd5\u8bbf\u95ee\u5b83\uff0c\u56e0\u4e3a\u5b83\u4e0d\u5b58\u5728\u4e8e\u7b7e\u540d\u4e2d\uff1b\u7b7e\u540d",(0,l.kt)("strong",{parentName:"p"},"\u7ea6\u675f\u4e86"),"\u5176\u4ed6\u4eba\u53ef\u4ee5\u8bbf\u95ee\u7684\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"EstablishmentType.profession")," \u662f",(0,l.kt)("strong",{parentName:"p"},"\u62bd\u8c61\u7684"),"\uff1a\u5b83\u6ca1\u6709\u4e00\u4e2a\u5177\u4f53\u7684\u7c7b\u578b\uff1b\u5b83\u8868\u793a\u201c\u6211\u4e0d\u5173\u5fc3\u5b9e\u9645\u7684\u7c7b\u578b\u662f\u4ec0\u4e48\uff0c\u4f46\u662f\u5b83\u88ab\u7528\u4f5c ",(0,l.kt)("inlineCode",{parentName:"p"},"getProfession")," \u7684\u8f93\u5165\u201d\u3002\u8fd9\u5bf9\u4e8e\u5728\u540c\u4e00\u63a5\u53e3\u4e0b\u5bb9\u7eb3\u591a\u4e2a\u6a21\u5757\u662f\u5f88\u6709\u7528\u7684\uff1a"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res"}),"module Company: EstablishmentType = {\n  type profession = CEO | Designer | Engineer | ...\n\n  let getProfession = (person) => ...\n  let person1 = ...\n  let person2 = ...\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function getProfession(person) {\n  ...\n}\n\nvar person1 = ...\n\nvar person2 = ...\n\nvar Company = {\n  getProfession: getProfession,\n  person1: person1,\n  person2: person2\n};\n"))),(0,l.kt)("p",null,"\u9690\u85cf\u5e95\u5c42\u7c7b\u578b\u4e5f\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u8fd9\u662f\u4e00\u4e2a\u522b\u4eba\u65e0\u6cd5\u4f9d\u8d56\u7684\u5b9e\u73b0\u7ec6\u8282\u3002\u5982\u679c\u4f60\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"Company.profession")," \u7684\u7c7b\u578b\u662f\u4ec0\u4e48\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Company")," \u4e0d\u4f1a\u66b4\u9732\u8fd9\u4e2a\u53d8\u4f53\uff0c\u800c\u53ea\u4f1a\u544a\u8bc9\u4f60\u5b83\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Company.profession"),"\u3002"),(0,l.kt)("h3",o({},{id:"\u6269\u5c55\u6a21\u5757\u7b7e\u540d"}),"\u6269\u5c55\u6a21\u5757\u7b7e\u540d"),(0,l.kt)("p",null,"\u50cf\u6a21\u5757\u4e00\u6837\uff0c\u6a21\u5757\u7b7e\u540d\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"include")," \u6765\u6269\u5c55\u5176\u4ed6\u6a21\u5757\u7b7e\u540d\u3002\u8fd9\u4e5f\u662f",(0,l.kt)("strong",{parentName:"p"},"\u975e\u5e38\u4e0d\u63a8\u8350\u7684"),"\uff1a"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module type BaseComponent = {\n  let defaultGreeting: string\n  let getAudience: (~excited: bool) => string\n}\n\nmodule type ActualComponent = {\n  /* the BaseComponent signature is copied over */\n  include BaseComponent\n  let render: unit => string\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"BaseComponent")," \u662f\u4e00\u4e2a\u6a21\u5757",(0,l.kt)("strong",{parentName:"p"},"\u7c7b\u578b"),"\uff0c\u800c\u4e0d\u662f\u5b9e\u9645\u7684\u6a21\u5757\u672c\u8eab\uff01"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u5b9a\u4e49\u7684\u6a21\u5757\u7c7b\u578b\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"include (module type of ActualModuleName)")," \u4ece\u5b9e\u9645\u6a21\u5757\u4e2d\u63d0\u53d6\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u6269\u5c55\u6807\u51c6\u5e93\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"List")," \u6a21\u5757\uff0c\u5b83\u5e76\u6ca1\u6709\u5b9a\u4e49\u6a21\u5757\u7c7b\u578b\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module type MyList = {\n  include (module type of List)\n  let myListFun: list<'a> => list<'a>\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,l.kt)("h3",o({},{id:"\u6bcf\u4e2a-resi-\u6587\u4ef6\u90fd\u662f\u7b7e\u540d"}),"\u6bcf\u4e2a ",(0,l.kt)("inlineCode",{parentName:"h3"},".resi")," \u6587\u4ef6\u90fd\u662f\u7b7e\u540d"),(0,l.kt)("p",null,"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"React.res")," \u6587\u4ef6\u9690\u5f0f\u5b9a\u4e49\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"React")," \u6a21\u5757\u7c7b\u4f3c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"React.resi")," \u9690\u5f0f\u5b9a\u4e49\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"React")," \u7b7e\u540d\u3002\u5982\u679c\u6ca1\u6709\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"p"},"React.resi"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"React.res")," \u7684\u7b7e\u540d\u9ed8\u8ba4\u4e3a\u66b4\u9732\u6a21\u5757\u7684\u6240\u6709\u5b57\u6bb5\u3002\u56e0\u4e3a\u5b83\u4eec\u4e0d\u5305\u542b\u5b9e\u73b0\u6587\u4ef6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},".resi")," \u6587\u4ef6\u4e5f\u7528\u4e8e\u8bb0\u5f55\u5bf9\u5e94\u6a21\u5757\u7684\u516c\u5171 API\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"/* file React.res (implementation. Compiles to module React) */\ntype state = int\nlet render = (str) => str\n")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function render(str) {\n  return str;\n}\n"))),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"/* file React.resi (interface. Compiles to the signature of React.res) */\ntype state = int\nlet render: string => string\n")),(0,l.kt)("h2",o({},{id:"\u6a21\u5757\u51fd\u6570\uff08\u51fd\u5b50\uff09"}),"\u6a21\u5757\u51fd\u6570\uff08\u51fd\u5b50\uff09"),(0,l.kt)("p",null,"\u6a21\u5757\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u51fd\u6570\uff01\u5b83\u76f8\u5f53\u4e8e\u5c06\u6587\u4ef6\u4f5c\u4e3a\u4e00\u7b49\u516c\u6c11\u4f20\u9012\u3002\u7136\u800c\uff0c\u6a21\u5757\u4e0e\u5176\u4ed6\u5e38\u89c1\u6982\u5ff5\u5904\u4e8e\u4e0d\u540c\u7684\u8bed\u8a00\u201c\u5c42\u7ea7\u201d\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u80fd\u5c06\u5b83\u4eec\u4f20\u9012\u7ed9\u5e38\u89c4\u51fd\u6570\u3002\u76f8\u53cd\uff0c\u6211\u4eec\u5c06\u5b83\u4eec\u4f20\u9012\u7ed9\u540d\u4e3a\u201c\u51fd\u5b50\u201d\u7684\u7279\u6b8a\u51fd\u6570\u3002"),(0,l.kt)("p",null,"\u7528\u4e8e\u5b9a\u4e49\u548c\u4f7f\u7528\u51fd\u5b50\u7684\u8bed\u6cd5\u548c\u5e38\u89c4\u51fd\u6570\u975e\u5e38\u7c7b\u4f3c\uff0c\u5b83\u4eec\u7684\u4e3b\u8981\u533a\u522b\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u51fd\u5b50\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"module")," \u5173\u952e\u5b57\u800c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"let"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u51fd\u5b50\u5c06\u6a21\u5757\u4f5c\u4e3a\u53c2\u6570\u5e76\u8fd4\u56de\u4e00\u4e2a\u6a21\u5757\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u51fd\u5b50",(0,l.kt)("strong",{parentName:"li"},"\u9700\u8981"),"\u5bf9\u53c2\u6570\u8fdb\u884c\u6807\u6ce8\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u51fd\u5b50\u7684\u540d\u5b57\u5fc5\u987b\u4ee5\u5927\u5199\u5b57\u6bcd\u5f00\u5934\uff08\u5c31\u50cf\u6a21\u5757/\u7b7e\u540d\u4e00\u6837\uff09\u3002")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"MakeSet")," \u51fd\u5b50\u5b9e\u4f8b\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Comparable")," \u7c7b\u578b\u7684\u6a21\u5757\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u53ef\u4ee5\u5305\u542b\u8fd9\u79cd\u53ef\u6bd4\uff08comparable\uff09\u9879\u7684\u65b0\u96c6\u5408\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"module type Comparable = {\n  type t\n  let equal: (t, t) => bool\n}\n\nmodule MakeSet = (Item: Comparable) => {\n  // let's use a list as our naive backing data structure\n  type backingType = list<Item.t>\n  let empty = list{}\n  let add = (currentSet: backingType, newItem: Item.t): backingType =>\n    // if item exists\n    if List.exists(x => Item.equal(x, newItem), currentSet) {\n      currentSet // return the same (immutable) set (a list really)\n    } else {\n      list{\n        newItem,\n        ...currentSet // prepend to the set and return it\n      }\n    }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var List = require("./stdlib/list.js");\n\nfunction MakeSet(Item) {\n  var add = function(currentSet, newItem) {\n    if (\n      List.exists(function(x) {\n        return Item.equal(x, newItem);\n      }, currentSet)\n    ) {\n      return currentSet;\n    } else {\n      return {\n        hd: newItem,\n        tl: currentSet,\n      };\n    }\n  };\n  return {\n    empty: /* [] */ 0,\n    add: add,\n  };\n}\n'))),(0,l.kt)("p",null,"\u51fd\u5b50\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570\u5e94\u7528\u7684\u8bed\u6cd5\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u96c6\u5408\uff0c\u5176\u5143\u7d20\u9879\u662f\u6210\u5bf9\u7684\u6574\u6570\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"module IntPair = {\n  type t = (int, int)\n  let equal = ((x1: int, y1: int), (x2, y2)) => x1 == x2 && y1 == y2\n  let create = (x, y) => (x, y)\n}\n\n/* IntPair abides by the Comparable signature required by MakeSet */\nmodule SetOfIntPairs = MakeSet(IntPair)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function equal(param, param$1) {\n  if (param[0] === param$1[0]) {\n    return param[1] === param$1[1];\n  } else {\n    return false;\n  }\n}\n\nfunction create(x, y) {\n  return [x, y];\n}\n\nvar IntPair = {\n  equal: equal,\n  create: create,\n};\n\nvar SetOfIntPairs = {\n  empty: /* [] */ 0,\n  add: add,\n};\n"))),(0,l.kt)("h3",o({},{id:"\u51fd\u5b50\u7c7b\u578b"}),"\u51fd\u5b50\u7c7b\u578b"),(0,l.kt)("p",null,"\u4e0e\u6a21\u5757\u7c7b\u578b\u4e00\u6837\uff0c\u51fd\u5b50\u7c7b\u578b\u4e5f\u8d77\u5230\u7ea6\u675f\u548c\u9690\u85cf\u51fd\u5b50\u7684\u4f5c\u7528\u3002\u51fd\u5b50\u7c7b\u578b\u7684\u8bed\u6cd5\u4e0e\u51fd\u6570\u7c7b\u578b\u7684\u8bed\u6cd5\u4e00\u81f4\uff0c\u4f46\u662f\u4f7f\u7528\u9996\u5b57\u6bcd\u5927\u5199\u7684\u7c7b\u578b\u8868\u793a\u51fd\u5b50\u63a5\u53d7\u7684\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7684\u7b7e\u540d\u3002\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u66b4\u9732\u4e86\u96c6\u5408\u7684\u5185\u90e8\u7c7b\u578b\uff1b\u901a\u8fc7\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"MakeSet")," \u4e00\u4e2a\u51fd\u5b50\u7b7e\u540d\uff0c\u6211\u4eec\u53ef\u4ee5\u9690\u85cf\u5e95\u5c42\u7684\u6570\u636e\u7ed3\u6784\uff01"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-res"}),"module type Comparable = ...\n\nmodule type MakeSetType = (Item: Comparable) => {\n  type backingType\n  let empty: backingType\n  let add: (backingType, Item.t) => backingType\n}\n\nmodule MakeSet: MakeSetType = (Item: Comparable) => {\n  ...\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,l.kt)("h2",o({},{id:"\u5947\u5f02\uff08exotic\uff09\u7684\u6a21\u5757\u6587\u4ef6\u540d"}),"\u5947\u5f02\uff08Exotic\uff09\u7684\u6a21\u5757\u6587\u4ef6\u540d"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ece 8.3 \u5f00\u59cb")),(0,l.kt)("p",null,"\u53ef\u4ee5\u5728\u6587\u4ef6\u540d\u4e2d\u4f7f\u7528\u975e\u5e38\u89c4\u5b57\u7b26\uff08\u8fd9\u6709\u65f6\u662f\u7279\u5b9a JS \u6846\u67b6\u6240\u9700\u8981\u7684\uff09\u3002\u8fd9\u91cc\u6709\u4e00\u4e9b\u4f8b\u5b50\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src/Button.ios.res")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pages/[id].res"))),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5176\u4ed6 ReScript \u6a21\u5757\u5c06\u4e0d\u80fd\u8bbf\u95ee\u5177\u6709\u5947\u5f02\u6587\u4ef6\u540d\u7684\u6a21\u5757\u3002"),(0,l.kt)("h2",o({},{id:"\u6280\u5de7\u548c\u8bc0\u7a8d"}),"\u6280\u5de7\u548c\u8bc0\u7a8d"),(0,l.kt)("p",null,"\u6a21\u5757\u548c\u51fd\u5b50\u4e0e\u8bed\u8a00\u7684\u5176\u4ed6\u90e8\u5206\uff08\u51fd\u6570\u3001let \u7ed1\u5b9a\u3001\u6570\u636e\u7ed3\u6784\u7b49\uff09\u5904\u4e8e\u4e0d\u540c\u7684\u201c\u5c42\u7ea7\u201d\u3002\u4f8b\u5982\uff0c\u4f60\u4e0d\u80fd\u8f7b\u6613\u5730\u5c06\u5b83\u4eec\u4f20\u5165\u5143\u7ec4\u6216\u8bb0\u5f55\u4e2d\u3002\u5982\u679c\u9700\u8981\u7684\u8bdd\uff0c\u8bf7\u8c28\u614e\u5730\u4f7f\u7528\u5b83\u4eec\uff01\u5f88\u591a\u65f6\u5019\u53ea\u9700\u8981\u8bb0\u5f55\u6216\u51fd\u6570\u5c31\u591f\u4e86\u3002"))}m.isMDXComponent=!0,m.frontmatter={title:"\u6a21\u5757",description:"ReScript modules, module signatures and interface files",canonical:"/docs/manual/latest/module",__ghEditHref:"https://github.com/rescript-idea/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/module.mdx"}},46477:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/module",function(){return t(17209)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=46477,e(e.s=n);var n}));var n=e.O();_N_E=n}]);