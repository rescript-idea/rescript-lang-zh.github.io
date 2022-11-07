(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57157],{17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})},50296:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(96156),i=n(17375),a=(n(67294),n(3905));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",l(l(l({},s),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"build-system-overview"}),"Build System Overview"),(0,a.kt)("p",null,"ReScript comes with a build system, bsb, that's meant to be fast, lean and used as the authoritative build system of the community."),(0,a.kt)("p",null,"Bsb provides a few templates to quickly start a new project:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"bsb -init my-directory-name\n")),(0,a.kt)("p",null,"Feel free to inspect the various files in the newly generated directory. To see all the templates available, do:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"bsb -themes\n")),(0,a.kt)("p",null,"The build description file is called ",(0,a.kt)("inlineCode",{parentName:"p"},"bsconfig.json"),". Every ReScript project needs one."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To build a project"),", run:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"bsb -make-world\n")),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"-w")," to keep the built-in watcher running. Any new file change will be picked up and the build will re-run."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": third-party libraries (in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),") aren't watched, as doing so may exceed the node.js watcher count limit. If you're doing quick and dirty modifications inside ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),", you have to do ",(0,a.kt)("inlineCode",{parentName:"p"},"bsb -clean-world -make-world")," to rebuild them."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note 3"),": If you are developing across multiple devices, you may find the ",(0,a.kt)("inlineCode",{parentName:"p"},"-ws")," configuration useful in order to have live-reloading across the network. Possible configurations are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bsb -make-world -w -ws _")," (default)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bsb -make-world -w -ws 0.0.0.0:9999")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bsb -make-world -w -ws 5000"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To build only yourself"),", use ",(0,a.kt)("inlineCode",{parentName:"p"},"bsb -make"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bsb -help")," to see all the available options."),(0,a.kt)("h2",l({},{id:"artifacts-cleaning"}),"Artifacts Cleaning"),(0,a.kt)("p",null,"If you ever get into a stable build for edge-case reasons, use:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"bsb -clean-world\n")),(0,a.kt)("p",null,"Or ",(0,a.kt)("inlineCode",{parentName:"p"},"bsb -clean")," to clean only your own artifacts."),(0,a.kt)("h2",l({},{id:"editor-support"}),"Editor Support"),(0,a.kt)("p",null,"Bsb generates a ",(0,a.kt)("inlineCode",{parentName:"p"},".merlin")," file, used by various ",(0,a.kt)("a",l({parentName:"p"},{href:"editor-plugins.md"}),"editor plugins")," under the hood to power e.g. autocomplete, type hint, diagnosis, etc."),(0,a.kt)("h3",l({},{id:"tips--tricks"}),"Tips & Tricks"),(0,a.kt)("p",null,"A typical problem with traditional build systems is that they're not resilient against the user moving/deleting source files. Most don't clean up the old artifacts correctly after such user action","*",". Bsb is unfortunately no different, ",(0,a.kt)("strong",{parentName:"p"},"unless")," you turn on ",(0,a.kt)("inlineCode",{parentName:"p"},'"suffix": ".bs.js"')," in ",(0,a.kt)("inlineCode",{parentName:"p"},"bsconfig.json"),", in which case we can track which JS artifact belongs to which source file correctly, even against source file moving/deletion."),(0,a.kt)("h2",l({},{id:"design-decisions"}),"Design Decisions"),(0,a.kt)("p",null,"*"," One such build system that tracks these correctly & efficiently is ",(0,a.kt)("a",l({parentName:"p"},{href:"http://gittup.org/tup/"}),"Tup"),". See the (rather accessible!) paper ",(0,a.kt)("a",l({parentName:"p"},{href:"http://gittup.org/tup/build_system_rules_and_algorithms.pdf"}),"here"),". Unfortunately, Tup's implementation uses FUSE and other systems, which we can't safely use on every platform."))}p.isMDXComponent=!0,p.frontmatter={title:"Build System Overview",description:"Documentation about the ReScript build system and its toolchain",canonical:"/docs/manual/latest/build-overview",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/build-overview.mdx"}},7025:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/build-overview",function(){return n(50296)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=7025,e(e.s=t);var t}));var t=e.O();_N_E=t}]);