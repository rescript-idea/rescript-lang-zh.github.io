(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42959],{17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})},85399:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var n=a(17375),r=a(96156),l=(a(67294),a(3905));function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p,m=(p="Intro",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",i({},e))}),u={};function o(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",i(i(i({},u),a),{},{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",i({},{id:"mutablesetstring"}),"MutableSetString"),(0,l.kt)(m,{mdxType:"Intro"},(0,l.kt)("p",null,"This module is ",(0,l.kt)("a",i({parentName:"p"},{href:"mutable-set"}),"Belt.MutableSet")," specialized with key type to be a ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," type.\nIt is more efficient in general, the API is the same with ",(0,l.kt)("a",i({parentName:"p"},{href:"mutable-set"}),"Belt.MutableSet")," except its key type is fixed, and identity is not needed (using the built-in one)")),(0,l.kt)("h2",i({},{id:"value"}),"value"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type value = string\n")),(0,l.kt)("p",null,"The type of the set elements."),(0,l.kt)("h2",i({},{id:"t"}),"t"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t\n")),(0,l.kt)("p",null,"The type of sets."),(0,l.kt)("h2",i({},{id:"make"}),"make"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: unit => t\n")),(0,l.kt)("p",null,"Returns empty set."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let set = Belt.MutableSet.String.make()\n")),(0,l.kt)("h2",i({},{id:"fromarray"}),"fromArray"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: array<value> => t\n")),(0,l.kt)("p",null,"Creates new set from array of elements."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["apple", "orange", "banana"])\n\ns0->Belt.MutableSet.String.toArray /* ["apple", "banana", "orange"] */\n')),(0,l.kt)("h2",i({},{id:"fromsortedarrayunsafe"}),"fromSortedArrayUnsafe"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromSortedArrayUnsafe: array<value> => t\n")),(0,l.kt)("p",null,"The same as ","[fromArray][#fromarray]"," except it is after assuming the input array is already sorted."),(0,l.kt)("h2",i({},{id:"copy"}),"copy"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copy: t => t\n")),(0,l.kt)("p",null,"Returns copy of a set."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["orange", "apple"])\n\nlet copied = s0->Belt.MutableSet.String.copy\ncopied->Belt.MutableSet.String.toArray /* ["apple", "orange"] */\n')),(0,l.kt)("h2",i({},{id:"isempty"}),"isEmpty"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t => bool\n")),(0,l.kt)("p",null,"Checks if set is empty."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let empty = Belt.MutableSet.String.fromArray([])\nlet notEmpty = Belt.MutableSet.String.fromArray(["apple"])\n\nBelt.MutableSet.String.isEmpty(empty) /* true */\nBelt.MutableSet.String.isEmpty(notEmpty) /* false */\n')),(0,l.kt)("h2",i({},{id:"has"}),"has"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t, value) => bool\n")),(0,l.kt)("p",null,"Checks if element exists in set."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let set = Belt.MutableSet.String.fromArray(["apple", "orange", "banana"])\n\nset->Belt.MutableSet.String.has("strawberry") /* false */\nset->Belt.MutableSet.String.has("apple") /* true */\n')),(0,l.kt)("h2",i({},{id:"add"}),"add"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let add: (t, value) => unit\n")),(0,l.kt)("p",null,"Adds element to set. If element existed in set, value is unchanged."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.make()\ns0->Belt.MutableSet.String.add("apple")\ns0->Belt.MutableSet.String.add("banana")\ns0->Belt.MutableSet.String.add("banana")\n\ns0->Belt.MutableSet.String.toArray /* ["apple", "banana"] */\n')),(0,l.kt)("h2",i({},{id:"addcheck"}),"addCheck"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let addCheck: (t, value) => bool\n")),(0,l.kt)("h2",i({},{id:"mergemany"}),"mergeMany"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeMany: (t, array<value>) => unit\n")),(0,l.kt)("p",null,"Adds each element of array to set."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let set = Belt.MutableSet.String.make()\n\nset->Belt.MutableSet.String.mergeMany(["apple", "banana", "orange", "strawberry"])\nset->Belt.MutableSet.String.toArray /* ["apple", "banana", "orange", "strawberry"] */\n')),(0,l.kt)("h2",i({},{id:"remove"}),"remove"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t, value) => unit\n")),(0,l.kt)("p",null,"Removes element from set. If element wasn't existed in set, value is unchanged."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["orange", "banana", "apple"])\ns0->Belt.MutableSet.String.remove("apple")\ns0->Belt.MutableSet.String.remove("banana")\ns0->Belt.MutableSet.String.remove("banana")\n\ns0->Belt.MutableSet.String.toArray /* ["orange"] */\n')),(0,l.kt)("h2",i({},{id:"removecheck"}),"removeCheck"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeCheck: (t, value) => bool\n")),(0,l.kt)("h2",i({},{id:"removemany"}),"removeMany"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeMany: (t, array<value>) => unit\n")),(0,l.kt)("p",null,"Removes each element of array from set."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let set = Belt.MutableSet.String.fromArray(["apple", "banana", "orange"])\n\nset->Belt.MutableSet.String.removeMany(["strawberry", "apple", "banana", "orange"])\nset->Belt.MutableSet.String.toArray /* [] */\n')),(0,l.kt)("h2",i({},{id:"union"}),"union"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let union: (t, t) => t\n")),(0,l.kt)("p",null,"Returns union of two sets."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["apple", "banana", "orange", "carrot"])\nlet s1 = Belt.MutableSet.String.fromArray(["apple", "banana", "orange", "strawberry"])\nlet union = Belt.MutableSet.String.union(s0, s1)\nunion->Belt.MutableSet.String.toArray /* ["apple", "banana", "carrot", "orange", "strawberry"] */\n')),(0,l.kt)("h2",i({},{id:"intersect"}),"intersect"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let intersect: (t, t) => t\n")),(0,l.kt)("p",null,"Returns intersection of two sets."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["apple", "banana", "orange", "carrot"])\nlet s1 = Belt.MutableSet.String.fromArray(["apple", "banana", "orange", "strawberry"])\nlet intersect = Belt.MutableSet.String.intersect(s0, s1)\nintersect->Belt.MutableSet.String.toArray /* ["apple", "banana", "orange"] */\n')),(0,l.kt)("h2",i({},{id:"diff"}),"diff"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let diff: (t, t) => t\n")),(0,l.kt)("p",null,"Returns elements from first set, not existing in second set."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["apple", "banana", "orange", "carrot"])\nlet s1 = Belt.MutableSet.String.fromArray(["apple", "banana", "orange", "strawberry"])\nBelt.MutableSet.String.toArray(Belt.MutableSet.String.diff(s0, s1)) /* ["carrot"] */\nBelt.MutableSet.String.toArray(Belt.MutableSet.String.diff(s1, s0)) /* ["strawberry"] */\n')),(0,l.kt)("h2",i({},{id:"subset"}),"subset"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let subset: (t, t) => bool\n")),(0,l.kt)("p",null,"Checks if second set is subset of first set."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["5", "2", "3", "5", "6"])\nlet s1 = Belt.MutableSet.String.fromArray(["5", "2", "3", "1", "5", "4"])\nlet s2 = Belt.MutableSet.String.intersect(s0, s1)\nBelt.MutableSet.String.subset(s2, s0) /* true */\nBelt.MutableSet.String.subset(s2, s1) /* true */\nBelt.MutableSet.String.subset(s1, s0) /* false */\n')),(0,l.kt)("h2",i({},{id:"cmp"}),"cmp"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmp: (t, t) => int\n")),(0,l.kt)("p",null,"Total ordering between sets. Can be used as the ordering function for doing sets of sets. It compares size first and then iterates over each element following the order of elements."),(0,l.kt)("h2",i({},{id:"eq"}),"eq"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eq: (t, t) => bool\n")),(0,l.kt)("p",null,"Checks if two sets are equal."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["apple", "orange"])\nlet s1 = Belt.MutableSet.String.fromArray(["orange", "apple"])\n\nBelt.MutableSet.String.eq(s0, s1) /* true */\n')),(0,l.kt)("h2",i({},{id:"foreachu"}),"forEachU"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t, (. value) => unit) => unit\n")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",i({parentName:"p"},{href:"##forEach"}),"forEach")," but takes uncurried functon."),(0,l.kt)("h2",i({},{id:"foreach"}),"forEach"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t, value => unit) => unit\n")),(0,l.kt)("p",null,"Applies function ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," in turn to all elements of set in increasing order."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["banana", "orange", "apple"])\nlet acc = ref(list{})\ns0->Belt.MutableSet.String.forEach(x => acc := Belt.List.add(acc.contents, x))\nacc /* ["orange", "banana", "apple"] */\n')),(0,l.kt)("h2",i({},{id:"reduceu"}),"reduceU"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t, 'a, (. 'a, value) => 'a) => 'a\n")),(0,l.kt)("h2",i({},{id:"reduce"}),"reduce"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t, 'a, ('a, value) => 'a) => 'a\n")),(0,l.kt)("p",null,"Applies function ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," to each element of set in increasing order. Function ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," has two parameters: the item from the set and an \u201caccumulator\u201d, which starts with a value of ",(0,l.kt)("inlineCode",{parentName:"p"},"initialValue"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"reduce")," returns the final value of the accumulator."),(0,l.kt)("p",null,"Applies function ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," to each element of set in increasing order. Function ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," has two parameters: the item from the set and an \u201caccumulator\u201d, which starts with a value of ",(0,l.kt)("inlineCode",{parentName:"p"},"initialValue"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"reduce")," returns the final value of the accumulator."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["apple", "orange"])\ns0->Belt.MutableSet.String.reduce(0, (acc, element) => acc + String.length(element)) /* 11 */\n')),(0,l.kt)("h2",i({},{id:"everyu"}),"everyU"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyU: (t, (. value) => bool) => bool\n")),(0,l.kt)("h2",i({},{id:"every"}),"every"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: (t, value => bool) => bool\n")),(0,l.kt)("p",null,"Checks if all elements of the set satisfy the predicate. Order unspecified."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hasAtLeastFiveChars = x => String.length(x) >= 5\n\nlet s0 = Belt.MutableSet.String.fromArray(["apple", "carrot"])\ns0->Belt.MutableSet.String.every(hasAtLeastFiveChars) /* true */\n')),(0,l.kt)("h2",i({},{id:"someu"}),"someU"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someU: (t, (. value) => bool) => bool\n")),(0,l.kt)("h2",i({},{id:"some"}),"some"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: (t, value => bool) => bool\n")),(0,l.kt)("p",null,"Checks if at least one element of the set satisfies the predicate."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hasFiveChars = x => String.length(x) == 5\n\nlet s0 = Belt.MutableSet.String.fromArray(["strawberry", "apple"])\ns0->Belt.MutableSet.String.some(hasFiveChars) /* true */\n')),(0,l.kt)("h2",i({},{id:"keepu"}),"keepU"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keepU: (t, (. value) => bool) => t\n")),(0,l.kt)("h2",i({},{id:"keep"}),"keep"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keep: (t, value => bool) => t\n")),(0,l.kt)("p",null,"Returns the set of all elements that satisfy the predicate."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hasFiveChars = x => String.length(x) == 5\n\nlet s0 = Belt.MutableSet.String.fromArray(["apple", "orange", "banana"])\nlet s1 = s0->Belt.MutableSet.String.keep(hasFiveChars)\n\ns1->Belt.MutableSet.String.toArray /* ["apple"] */\n')),(0,l.kt)("h2",i({},{id:"partitionu"}),"partitionU"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partitionU: (t, (. value) => bool) => (t, t)\n")),(0,l.kt)("h2",i({},{id:"partition"}),"partition"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partition: (t, value => bool) => (t, t)\n")),(0,l.kt)("p",null,"Returns a pair of sets, where first is the set of all the elements of set that satisfy the predicate, and second is the set of all the elements of set that do not satisfy the predicate."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let hasFiveChars = x => String.length(x) == 5\n\nlet s0 = Belt.MutableSet.String.fromArray(["apple", "carrot"])\nlet (s1, s2) = s0->Belt.MutableSet.String.partition(hasFiveChars)\n\ns1->Belt.MutableSet.String.toArray /* ["apple"] */\ns2->Belt.MutableSet.String.toArray /* ["carrot"] */\n')),(0,l.kt)("h2",i({},{id:"size"}),"size"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t => int\n")),(0,l.kt)("p",null,"Returns size of the set."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["apple"])\n\ns0->Belt.MutableSet.String.size /* 1 */\n')),(0,l.kt)("h2",i({},{id:"tolist"}),"toList"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toList: t => list<value>\n")),(0,l.kt)("p",null,"Returns list of ordered set elements."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["apple", "watermelon"])\n\ns0->Belt.MutableSet.String.toList /* ["apple", "watermelon"] */\n')),(0,l.kt)("h2",i({},{id:"toarray"}),"toArray"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t => array<value>\n")),(0,l.kt)("p",null,"Returns array of ordered set elements."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["apple", "watermelon"])\n\ns0->Belt.MutableSet.String.toArray /* ["apple", "watermelon"] */\n')),(0,l.kt)("h2",i({},{id:"minimum"}),"minimum"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minimum: t => option<value>\n")),(0,l.kt)("p",null,"Returns minimum value of the collection. ",(0,l.kt)("inlineCode",{parentName:"p"},"None")," if collection is empty."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.make()\nlet s1 = Belt.MutableSet.String.fromArray(["apple", "orange"])\n\ns0->Belt.MutableSet.String.minimum /* None */\ns1->Belt.MutableSet.String.minimum /* Some("apple") */\n')),(0,l.kt)("h2",i({},{id:"minundefined"}),"minUndefined"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minUndefined: t => Js.undefined<value>\n")),(0,l.kt)("p",null,"Returns minimum value of the collection. ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," if collection is empty."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.make()\nlet s1 = Belt.MutableSet.String.fromArray(["apple", "orange"])\n\ns0->Belt.MutableSet.String.minUndefined /* undefined */\ns1->Belt.MutableSet.String.minUndefined /* "apple" */\n')),(0,l.kt)("h2",i({},{id:"maximum"}),"maximum"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maximum: t => option<value>\n")),(0,l.kt)("p",null,"Returns maximum value of the collection. ",(0,l.kt)("inlineCode",{parentName:"p"},"None")," if collection is empty."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.make()\nlet s1 = Belt.MutableSet.String.fromArray(["apple", "orange"])\n\ns0->Belt.MutableSet.String.maximum /* None */\ns1->Belt.MutableSet.String.maximum /* Some("orange") */\n')),(0,l.kt)("h2",i({},{id:"maxundefined"}),"maxUndefined"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxUndefined: t => Js.undefined<value>\n")),(0,l.kt)("p",null,"Returns maximum value of the collection. ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," if collection is empty."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.make()\nlet s1 = Belt.MutableSet.String.fromArray(["apple", "orange"])\n\ns0->Belt.MutableSet.String.maxUndefined /* undefined */\ns1->Belt.MutableSet.String.maxUndefined /* orange */\n')),(0,l.kt)("h2",i({},{id:"get"}),"get"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t, value) => option<value>\n")),(0,l.kt)("p",null,"Returns the reference of the value which is equivalent to value using the comparator specifiecd by this collection. Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"None")," if element does not exist."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["apple", "carrot"])\n\ns0->Belt.MutableSet.String.get("carrot") /* Some("carrot") */\ns0->Belt.MutableSet.String.get("watermelon") /* None */\n')),(0,l.kt)("h2",i({},{id:"getundefined"}),"getUndefined"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getUndefined: (t, value) => Js.undefined<value>\n")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",i({parentName:"p"},{href:"#get"}),"get")," but returns ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," when element does not exist."),(0,l.kt)("h2",i({},{id:"getexn"}),"getExn"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: (t, value) => value\n")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("a",i({parentName:"p"},{href:"#get"}),"get")," but raise when element does not exist."),(0,l.kt)("h2",i({},{id:"split"}),"split"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let split: (t, value) => ((t, t), bool)\n")),(0,l.kt)("p",null,"Returns a tuple ",(0,l.kt)("inlineCode",{parentName:"p"},"((smaller, larger), present)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"present")," is true when element exist in set."),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let s0 = Belt.MutableSet.String.fromArray(["apple", "banana", "orange"])\n\nlet ((smaller, larger), present) = s0->Belt.MutableSet.String.split("banana")\n\npresent /* true */\nsmaller->Belt.MutableSet.String.toArray /* ["apple"] */\nlarger->Belt.MutableSet.String.toArray /* ["orange"] */\n')),(0,l.kt)("h2",i({},{id:"checkinvariantinternal"}),"checkInvariantInternal"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let checkInvariantInternal: t => unit\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"raise")," when invariant is not held"))}o.isMDXComponent=!0,o.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/api/belt/mutable-set-string.mdx"}},99760:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/api/belt/mutable-set-string",function(){return a(85399)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=99760,e(e.s=t);var t}));var t=e.O();_N_E=t}]);