(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1058],{17375:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(a,{Z:function(){return n}})},91430:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return u}});var n=t(17375),r=t(96156),l=(t(67294),t(3905));function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){(0,r.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var i,g=(i="Intro",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",s({},e))}),m={};function u(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",s(s(s({},m),t),{},{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",s({},{id:"hashmapstring"}),"HashMapString"),(0,l.kt)(g,{mdxType:"Intro"},(0,l.kt)("p",null,"Specalized when key type is ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", more efficient than the generic type")),(0,l.kt)("h2",s({},{id:"key"}),"key"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type key = string\n")),(0,l.kt)("p",null,"Type of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.HashMap.String")," key."),(0,l.kt)("h2",s({},{id:"t"}),"t"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'b>\n")),(0,l.kt)("p",null,"Type of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.HashMap.String"),"."),(0,l.kt)("h2",s({},{id:"make"}),"make"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: (~hintSize: int) => t<'b>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"make(~hintSize=10)")," creates a new hash map by taking the ",(0,l.kt)("inlineCode",{parentName:"p"},"hintSize"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\n\nBelt.HashMap.String.set(hMap, "key1", "a")\n')),(0,l.kt)("h2",s({},{id:"clear"}),"clear"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let clear: t<'b> => unit\n")),(0,l.kt)("p",null,"Clears a hash table."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.fromArray([("1", "1")])\nBelt.HashMap.String.clear(hMap)\nBelt.HashMap.String.isEmpty(hMap) == true\n')),(0,l.kt)("h2",s({},{id:"isempty"}),"isEmpty"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t<'a> => bool\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"isEmpty(m)")," checks whether a hash map is empty."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.fromArray([("1", "1")])\nBelt.HashMap.String.isEmpty(hMap) == false\n')),(0,l.kt)("h2",s({},{id:"set"}),"set"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let set: (t<'a>, key, 'a) => unit\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"set(tbl, k, v)")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," does not exist, add the binding ",(0,l.kt)("inlineCode",{parentName:"p"},"k,v"),", otherwise, update the old value with the new ",(0,l.kt)("inlineCode",{parentName:"p"},"v"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.fromArray([("2", "2")])\n\nBelt.HashMap.String.set(hMap, "1", "1")\n\nBelt.HashMap.String.valuesToArray(hMap) == ["1", "2"]\n')),(0,l.kt)("h2",s({},{id:"copy"}),"copy"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copy: t<'a> => t<'a>\n")),(0,l.kt)("p",null,"Creates copy of a hash map."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap1 = Belt.HashMap.String.fromArray([("1", "1"), ("2", "2")])\nlet hMap2 = Belt.HashMap.String.copy(hMap1)\n\nBelt.HashMap.String.set(hMap2, "2", "3")\n\nBelt.HashMap.String.get(hMap1, "2") != Belt.HashMap.String.get(hMap2, "2")\n')),(0,l.kt)("h2",s({},{id:"get"}),"get"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t<'a>, key) => option<'a>\n")),(0,l.kt)("p",null,"Returns value bound under specific key. If values not exist returns ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\n\nBelt.HashMap.String.get(hMap, "1") == Some("value1")\nBelt.HashMap.String.get(hMap, "2") == None\n')),(0,l.kt)("h2",s({},{id:"has"}),"has"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t<'b>, key) => bool\n")),(0,l.kt)("p",null,"Checks if ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is bound in ",(0,l.kt)("inlineCode",{parentName:"p"},"tbl"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\n\nBelt.HashMap.String.has(hMap, "1") == true\nBelt.HashMap.String.has(hMap, "2") == false\n')),(0,l.kt)("h2",s({},{id:"remove"}),"remove"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t<'a>, key) => unit\n")),(0,l.kt)("p",null,"If bound exists, removes it from the hash map."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.remove(hMap, "1")\nBelt.HashMap.String.has(hMap, "1") == false\n')),(0,l.kt)("h2",s({},{id:"foreachu"}),"forEachU"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t<'b>, (. key, 'b) => unit) => unit\n")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",s({parentName:"p"},{href:"##forEach"}),"forEach")," but takes uncurried functon."),(0,l.kt)("h2",s({},{id:"foreach"}),"forEach"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t<'b>, (key, 'b) => unit) => unit\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"forEach(tbl, f)")," applies ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," to all bindings in table ",(0,l.kt)("inlineCode",{parentName:"p"},"tbl"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," receives the key as first argument, and the associated value as second argument. Each binding is presented exactly once to ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.forEach(hMap, (key, value) => Js.log2(key, value))\n// prints ("1", "value1")\n')),(0,l.kt)("h2",s({},{id:"reduceu"}),"reduceU"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t<'b>, 'c, (. 'c, key, 'b) => 'c) => 'c\n")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",s({parentName:"p"},{href:"##reduce"}),"reduce")," but takes uncurried functon."),(0,l.kt)("h2",s({},{id:"reduce"}),"reduce"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t<'b>, 'c, ('c, key, 'b) => 'c) => 'c\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"reduce(tbl, init, f)")," computes ",(0,l.kt)("inlineCode",{parentName:"p"},"(f(kN, dN) ... (f(k1, d1, init))...)"),", where ",(0,l.kt)("inlineCode",{parentName:"p"},"k1 ... kN")," are the keys of all bindings in ",(0,l.kt)("inlineCode",{parentName:"p"},"tbl"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"d1 ... dN")," are the associated values. Each binding is presented exactly once to ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,l.kt)("p",null,"The order in which the bindings are passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," is unspecified. However, if the table contains several bindings for the same key, they are passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," in reverse order of introduction, that is, the most recent binding is passed first."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.reduce(hMap, "", (acc, key, value) =>\n  acc ++ (", " ++ value)\n) == "value1, value2"\n')),(0,l.kt)("h2",s({},{id:"keepmapinplaceu"}),"keepMapInPlaceU"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keepMapInPlaceU: (t<'a>, (. key, 'a) => option<'a>) => unit\n")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",s({parentName:"p"},{href:"##keepMapInPlace"}),"keepMapInPlace")," but takes uncurried functon."),(0,l.kt)("h2",s({},{id:"keepmapinplace"}),"keepMapInPlace"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keepMapInPlace: (t<'a>, (key, 'a) => option<'a>) => unit\n")),(0,l.kt)("p",null,"Filters out values for which function ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," returned ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.keepMapInPlace(hMap, (key, value) => key == "1" ? None : Some(value))\n')),(0,l.kt)("h2",s({},{id:"size"}),"size"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t<'a> => int\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"size(tbl)")," returns the number of bindings in ",(0,l.kt)("inlineCode",{parentName:"p"},"tbl"),". It takes constant time."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.size(hMap) == 2\n')),(0,l.kt)("h2",s({},{id:"toarray"}),"toArray"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t<'a> => array<(key, 'a)>\n")),(0,l.kt)("p",null,"Returns array of key value pairs."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.toArray(hMap) == [("1", "value1"), ("2", "value2")]\n')),(0,l.kt)("h2",s({},{id:"keystoarray"}),"keysToArray"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keysToArray: t<'a> => array<key>\n")),(0,l.kt)("p",null,"Returns array of keys."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.keysToArray(hMap) == ["1", "2"]\n')),(0,l.kt)("h2",s({},{id:"valuestoarray"}),"valuesToArray"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let valuesToArray: t<'a> => array<'a>\n")),(0,l.kt)("p",null,"Returns array of values."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "value1")\nBelt.HashMap.String.set(hMap, "2", "value2")\n\nBelt.HashMap.String.valuesToArray(hMap) == ["value1", "value2"]\n')),(0,l.kt)("h2",s({},{id:"fromarray"}),"fromArray"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: array<(key, 'a)> => t<'a>\n")),(0,l.kt)("p",null,"Creates new hash map from array of pairs."),(0,l.kt)("p",null,"Returns array of values."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.fromArray([("1", "value1"), ("2", "value2")])\nBelt.HashMap.String.toArray(hMap) == [("1", "value1"), ("2", "value2")]\n')),(0,l.kt)("h2",s({},{id:"mergemany"}),"mergeMany"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeMany: (t<'a>, array<(key, 'a)>) => unit\n")),(0,l.kt)("p",null,"Merges many key value pairs into hash map."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.mergeMany(hMap, [("1", "value1"), ("2", "value2")])\n')),(0,l.kt)("h2",s({},{id:"getbuckethistogram"}),"getBucketHistogram"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getBucketHistogram: t<'a> => array<int>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "1")\n\nBelt.HashMap.String.getBucketHistogram(hMap)\n')),(0,l.kt)("h2",s({},{id:"logstats"}),"logStats"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let logStats: t<'a> => unit\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hMap = Belt.HashMap.String.make(~hintSize=10)\nBelt.HashMap.String.set(hMap, "1", "1")\n\nBelt.HashMap.String.logStats(hMap)\n')))}u.isMDXComponent=!0,u.frontmatter={__ghEditHref:"https://github.com/rescript-idea/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/api/belt/hash-map-string.mdx"}},505:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/api/belt/hash-map-string",function(){return t(91430)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return a=505,e(e.s=a);var a}));var a=e.O();_N_E=a}]);