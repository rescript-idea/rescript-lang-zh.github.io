(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8819],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},44001:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(17375),r=n(96156),o=(n(67294),n(3905));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s,l=(s="Intro",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",p({},e))}),d={};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",p(p(p({},d),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",p({},{id:"supported-types"}),"Supported Types"),(0,o.kt)(l,{mdxType:"Intro"},(0,o.kt)("p",null,"Some types and values in ReScript do not map directly to JavaScript and need to be converted whenever a value crosses the boundary. This document gives an overview on how ",(0,o.kt)("inlineCode",{parentName:"p"},"genType"),"'s convertion works on different types.")),(0,o.kt)("h2",p({},{id:"int"}),"Int"),(0,o.kt)("p",null,"ReScript values e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," are unchanged. So they are exported to JS values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,o.kt)("h2",p({},{id:"float"}),"Float"),(0,o.kt)("p",null,"ReScript values e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"2.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"3.0")," are unchanged. So they are exported to JS values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,o.kt)("h2",p({},{id:"string"}),"String"),(0,o.kt)("p",null,"ReScript values e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'"a"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"b"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"c"')," are unchanged. So they are exported to JS values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,o.kt)("h2",p({},{id:"optionals"}),"Optionals"),(0,o.kt)("p",null,"ReScript values of type e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"option(int)"),", such as ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(0)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(1)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(2)"),", are exported to JS values ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),".\nThe JS values are unboxed, and ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," are conflated.\nSo the option type is exported to JS type ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,o.kt)("h2",p({},{id:"nullables"}),"Nullables"),(0,o.kt)("p",null,"ReScript values of type e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.t(int)"),", such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.null"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.undefined"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.return(0)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.return(1)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.return(2)"),", are exported to JS values ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),".\nThe JS values are identical: there is no conversion unless the argument type needs conversion."),(0,o.kt)("h2",p({},{id:"records"}),"Records"),(0,o.kt)("p",null,"ReScript record values of type e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:int}")," such as ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:0}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:1}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:2}"),", are exported to JS object values ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:0}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:1}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:2}"),". This requires a change of runtime representation from arrays to objects.\nSo they are exported to JS values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:number}"),"."),(0,o.kt)("p",null,"Since records are immutable by default, their fields will be exported to readonly property types in Flow/TS. Mutable fields are specified in ReScript by e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"{mutable mutableField: string}"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@genType.as")," annotation can be used to change the name of a field on the JS side of things. So e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'{[@genType.as "y"] x:int}')," is exported as JS type ",(0,o.kt)("inlineCode",{parentName:"p"},"{y:int}"),"."),(0,o.kt)("p",null,"If one field of the ReScript record has option type, this is exported to an optional JS field. So for example ReScript type ",(0,o.kt)("inlineCode",{parentName:"p"},"{x: option(int)}")," is exported as JS type ",(0,o.kt)("inlineCode",{parentName:"p"},"{x?: number}"),"."),(0,o.kt)("h2",p({},{id:"objects"}),"Objects"),(0,o.kt)("p",null,"ReScript object values of type e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'{. "x":int}')," such as ",(0,o.kt)("inlineCode",{parentName:"p"},'{"x": 0}'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'{"x": 1}'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'{"x": 2}'),", are exported as identical JS object values ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:0}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:1}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:2}"),". This requires no conversion. So they are exported to JS values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:number}"),".\nA conversion is required only when the type of some field requires conversions."),(0,o.kt)("p",null,"Since objects are immutable by default, their fields will be exported to readonly property types in Flow/TS. Mutable fields are specified in ReScript by e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'{ @set "mutableField": string }'),"."),(0,o.kt)("p",null,"It is possible to mix object and option types, so for example the ReScript type ",(0,o.kt)("inlineCode",{parentName:"p"},'{. "x":int, "y":option(string)}')," exports to JS type ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:number, ?y: string}"),", requires no conversion, and allows option pattern matching on the ReScript side."),(0,o.kt)("p",null,"Object field names follow ReScript's mangling convention (so e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"_type")," in ReScript represents ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," in JS):"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),'Remove trailing "__" if present.\nOtherwise remove leading "_" when followed by an uppercase letter, or keyword.\n')),(0,o.kt)("h2",p({},{id:"tuples"}),"Tuples"),(0,o.kt)("p",null,"ReScript tuple values of type e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"(int, string)")," are exported as identical JS values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"[number, string]"),". This requires no conversion, unless one of types of the tuple items does.\nWhile the type of ReScript tuples is immutable, there's currently no mature enforcement in TS/Flow, so they're currenty exported to mutable tuples."),(0,o.kt)("h2",p({},{id:"variants"}),"Variants"),(0,o.kt)("p",null,"Ordinary variants (with capitalized cases, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"| A | B(int)"),") and polymorphic variants (with a backtick, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"| `A | `B(int)"),") are represented in the same way, so there's no difference from the point of view of JavaScript. Polymorphic variants don't have to be capitalized."),(0,o.kt)("p",null,"Variants can have an ",(0,o.kt)("em",{parentName:"p"},"unboxed"),", or a ",(0,o.kt)("em",{parentName:"p"},"boxed")," representation. The unboxed representation is used when there is at most one case with a payload, and that payload has object type; otherwise, a boxed representation is used. Object types are arrays, objects, records and tuples."),(0,o.kt)("p",null,"Variants without payloads are essentially sequences of identifiers.\nE.g. type ",(0,o.kt)("inlineCode",{parentName:"p"},"[@genType] type days = | Monday | Tuesday"),".\nThe corresponding JS representation is ",(0,o.kt)("inlineCode",{parentName:"p"},'"Monday"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"Tuesday"'),".\nSimilarly, polymorphic variant type ",(0,o.kt)("inlineCode",{parentName:"p"},"[@genType] type days = [ | `Monday | `Tuesday ] ")," has the same JS representation."),(0,o.kt)("p",null,"When at most one variant case has a payload, and if the payload is of object type, e.g.\n",(0,o.kt)("inlineCode",{parentName:"p"},'[ | Unnamed | Named({. "name": string, "surname": string}) ]'),"\nthen the representation is unboxed: JS values are e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'"Unnamed"')," and\n",(0,o.kt)("inlineCode",{parentName:"p"},'{name: "hello", surname: "world"}'),". Similarly for polymorphic variants.\nNote that this unboxed representation does not use the label ",(0,o.kt)("inlineCode",{parentName:"p"},'"Named"')," of the variant case with payload, because that value is distinguished from the other payload-less cases by its type: an object."),(0,o.kt)("p",null,"If there is more than one case with payload, or if the single payload has not type object, a boxed representation is used. The boxed representation has shape ",(0,o.kt)("inlineCode",{parentName:"p"},'{tag: "someTag", value: someValue}'),".\nFor example, type ",(0,o.kt)("inlineCode",{parentName:"p"},"| A | B(int) | C(string)")," has values such as ",(0,o.kt)("inlineCode",{parentName:"p"},'"A"')," and\n",(0,o.kt)("inlineCode",{parentName:"p"},'{tag: "B", value: 42}')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'{tag: "C", value: "hello"}'),".\nPolymorhphic variants are treated similarly. Notice that payloads for polymorphic variants are always unary: ",(0,o.kt)("inlineCode",{parentName:"p"},"`Pair(int,int)")," has a single payload of type ",(0,o.kt)("inlineCode",{parentName:"p"},"(int,int)"),". Instead, ordinary variants distinguish between unary ",(0,o.kt)("inlineCode",{parentName:"p"},"Pair((int,int))")," and binary ",(0,o.kt)("inlineCode",{parentName:"p"},"Pair(int,int)")," payloads. All those cases are represented in JS as ",(0,o.kt)("inlineCode",{parentName:"p"},'{tag: "Pair", value: [3, 4]}'),", and the conversion functions take care of the different ReScript representations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@genType.as")," annotation can be used to modify the name emitted for a variant case on the JS side. So e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},' | [@genType.as "Arenamed"] A')," exports ReScript value ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," to JS value ",(0,o.kt)("inlineCode",{parentName:"p"},'"Arenamed"'),".\nBoolean/integer/float constants can be expressed as ",(0,o.kt)("inlineCode",{parentName:"p"},"| [@genType.as true] True")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"| [@genType.as 20] Twenty")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"| [@genType.as 0.5] Half"),". Similarly for polymorphic variants.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"@genType.as")," annotation can also be used on variants with payloads to determine what appears in ",(0,o.kt)("inlineCode",{parentName:"p"},"{ tag: ... }"),"."),(0,o.kt)("p",null,"For more examples, see ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/reason-association/genType/tree/master/examples/typescript-react-example/src/Variants.res"}),"Variants.res")," and ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/reason-association/genType/tree/master/examples/typescript-react-example/src/VariantsWithPayload.res"}),"VariantsWithPayload.res"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," When exporting/importing values that have polymorphic variant type, you have to use type annotations, and cannot rely on type inference. So instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"let monday = `Monday"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"let monday : days = `Monday"),". The former does not work, as the type checker infers a type without annotations."),(0,o.kt)("h2",p({},{id:"arrays"}),"Arrays"),(0,o.kt)("p",null,"Arrays with elements of ReScript type ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," are exported to JS arrays with elements of the corresponding JS type. If a conversion is required, a copy of the array is performed."),(0,o.kt)("p",null,"Immutable arrays are supported with the additional ReScript library\n",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/reason-association/genType/tree/master/examples/typescript-react-example/src/ImmutableArray.resi"}),"ImmutableArray.res/.resi"),", which currently needs to be added to your project.\nThe type ",(0,o.kt)("inlineCode",{parentName:"p"},"ImmutableArray.t(+'a)")," is covariant, and is mapped to readonly array types in TS/Flow. As opposed to TS/Flow, ",(0,o.kt)("inlineCode",{parentName:"p"},"ImmutableArray.t")," does not allow casting in either direction with normal arrays. Instead, a copy must be performed using ",(0,o.kt)("inlineCode",{parentName:"p"},"fromArray")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"toArray"),"."),(0,o.kt)("h2",p({},{id:"functions-and-function-components"}),"Functions and Function Components"),(0,o.kt)("p",null,"ReScript functions are exported as JS functions of the corresponding type.\nSo for example a ReScript function ",(0,o.kt)("inlineCode",{parentName:"p"},"foo : int => int")," is exported as a JS function from numbers to numbers."),(0,o.kt)("p",null,"If named arguments are present in the ReScript type, they are grouped and exported as JS objects. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"foo : (~x:int, ~y:int) => int")," is exported as a JS function from objects of type ",(0,o.kt)("inlineCode",{parentName:"p"},"{x:number, y:number}")," to numbers."),(0,o.kt)("p",null,"In case of mixed named and unnamed arguments, consecutive named arguments form separate groups. So e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"foo : (int, ~x:int, ~y:int, int, ~z:int) => int")," is exported to a JS function of type ",(0,o.kt)("inlineCode",{parentName:"p"},"(number, {x:number, y:number}, number, {z:number}) => number"),"."),(0,o.kt)("p",null,"Function components are exported and imported exactly like normal functions. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-reason"}),"[@genType]\n[@react.component]\nlet make = (~name) => React.string(name);\n")),(0,o.kt)("p",null,"For renaming, named arguments follow ReScript's mangling convention:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{}),'Remove trailing "__" if present.\nOtherwise remove leading "_" when followed by an uppercase letter, or keyword.\n')),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),'@genType\nlet exampleFunction = (~_type) => "type: " ++ _type\n')),(0,o.kt)("h2",p({},{id:"imported-types"}),"Imported Types"),(0,o.kt)("p",null,"It's possible to import an existing TS/Flow type as an opaque type in ReScript. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),'@genType.import("./SomeFlowTypes") type weekday\n')),(0,o.kt)("p",null,"defines a type which maps to ",(0,o.kt)("inlineCode",{parentName:"p"},"weekday")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"SomeFlowTypes.js"),".\nSee for example ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/reason-association/genType/tree/master/examples/flow-react-example/src/Types.res"}),"Types.res")," and ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/reason-association/genType/tree/master/examples/flow-react-example/src/SomeFlowTypes.js"}),"SomeFlowTypes.js"),"."),(0,o.kt)("h2",p({},{id:"recursive-types"}),"Recursive Types"),(0,o.kt)("p",null,"Recursive types which do not require a conversion are fully supported.\nIf a recursive type requires a conversion, only a shallow conversion is performed, and a warning comment is included in the output. (The alternative would be to perform an expensive conversion down a data structure of arbitrary size).\nSee for example ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/reason-association/genType/tree/master/examples/typescript-react-example/src/nested/Types.res"}),"Types.res"),"."),(0,o.kt)("h2",p({},{id:"first-class-modules"}),"First Class Modules"),(0,o.kt)("p",null,"ReScript first class modules are converted from their array ReScript runtime representation to JS Object types.\nFor example,"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),'module type MT = {\n  let x: int\n  let y: string\n}\nmodule M = {\n  let y = "abc"\n  let x = 42\n}\nexport firstClassModule: module(MT) = module(M)\n')),(0,o.kt)("p",null,"is exported as a JS object of type"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),'{"x": number, "y": string}\n')),(0,o.kt)("p",null,"Notice how the order of elements in the exported JS object is determined by the module type ",(0,o.kt)("inlineCode",{parentName:"p"},"MT")," and not the module implementation ",(0,o.kt)("inlineCode",{parentName:"p"},"M"),"."),(0,o.kt)("h2",p({},{id:"polymorphic-types"}),"Polymorphic Types"),(0,o.kt)("p",null,"If a ReScript type contains a type variable, the corresponding value is not converted. In other words, the conversion is the identity function. For example, a ReScript function of type ",(0,o.kt)("inlineCode",{parentName:"p"},"{payload: 'a} => 'a")," must treat the value of the payload as a black box, as a consequence of parametric polymorphism. If a typed back-end is used, the ReScript type is converted to the corresponding generic type."),(0,o.kt)("h3",p({},{id:"exporting-values-from-polymorphic-types-with-hidden-type-variables"}),"Exporting Values from Polymorphic Types with Hidden Type Variables"),(0,o.kt)("p",null,"For cases when a value that contains a hidden type variable needs to be converted, a function can be used to produce the appropriate output:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Doesn't work")),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),"@genType\nlet none = None\n")),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),"export const none: ?T1 = OptionBS.none; // Errors out as T1 is not defined\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Works")),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-res"}),"@genType\nlet none = () => None\n")),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-js"}),"const none = <T1>(a: T1): ?T1 => OptionBS.none;\n")),(0,o.kt)("h2",p({},{id:"promises"}),"Promises"),(0,o.kt)("p",null,"Values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Promise.t(arg)")," are exported to JS promises of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<argJS>")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"argJS")," is the JS type corresponding to ",(0,o.kt)("inlineCode",{parentName:"p"},"arg"),".\nIf a conversion for the argument is required, the conversion functions are chained via ",(0,o.kt)("inlineCode",{parentName:"p"},".then(promise => ...)"),"."))}m.isMDXComponent=!0,m.frontmatter={title:"Supported Types",description:"Supported types and value convertion in GenType",canonical:"/docs/gentype/latest/supported-types",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/gentype/latest/supported-types.mdx"}},57940:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/gentype/latest/supported-types",function(){return n(44001)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=57940,e(e.s=t);var t}));var t=e.O();_N_E=t}]);