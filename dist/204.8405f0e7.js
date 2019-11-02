webpackJsonp([204],{"./docs/app/pages/Themes/Configuration.vue":function(e,t,a){"use strict";var o,l,n,i,r,s,c,m,d,p;Object.defineProperty(t,"__esModule",{value:!0}),o=a("./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Themes/Configuration.vue"),l=a.n(o);for(n in o)"default"!==n&&(function(e){a.d(t,e,(function(){return o[e]}))})(n);i=a('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-8afebd44","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Themes/Configuration.vue'),r=a("./node_modules/vue-loader/lib/component-normalizer.js"),s=!1,c=null,m=null,d=null,p=r(l.a,i.a,s,c,m,d),t.default=p.exports},"./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./docs/app/pages/Themes/Configuration.vue":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Configuration"}},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-8afebd44","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./docs/app/pages/Themes/Configuration.vue':function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-container",{attrs:{centered:"",title:e.$t("pages.themeConfiguration.title")}},[a("h2",{staticClass:"md-headline"},[e._v("Creating themes")]),e._v(" "),a("div",{staticClass:"page-container-section"},[a("note-block",{attrs:{warning:""}},[e._v("\n      To use custom themes you'll need SCSS/SASS support in your project. Read more about "),a("a",{attrs:{href:"https://vue-loader.vuejs.org/en/configurations/pre-processors.html"}},[e._v("Pre-Processors")]),e._v(". In the near future you'll be able to use themes with Plain CSS and Stylus too.\n    ")]),e._v(" "),a("p",[e._v("The simplest markup to create a theme in Vue Material is:")]),e._v(" "),a("code-example",{attrs:{label:"SCSS",lang:"scss"}},[e._v('\n      @import "~vue-material/dist/theme/engine"; // Import the theme engine\n\n      @include md-register-theme("default", (\n        primary: md-get-palette-color(blue, A200), // The primary color of your application\n        accent: md-get-palette-color(red, A200) // The accent or secondary color\n      ));\n\n      @import "~vue-material/dist/theme/all"; // Apply the theme\n    ')])],1),e._v(" "),a("div",{staticClass:"page-container-section"},[a("h3",{staticClass:"md-title"},[e._v("Available colors")]),e._v(" "),a("p",[e._v("Vue Material comes with the nice Material Design "),a("a",{attrs:{href:"https://material.io/guidelines/style/color.html#color-color-palette",target:"_blank"}},[e._v("color palette")]),e._v(". You can fully use it to build your themes, using the available colors along with the color shade.")]),e._v(" "),a("p",[e._v("The shades are based on color weight, that can be, 100, 200, 300, 400, 500, 600, 700, 800, 900, A100, A200, A400 or A700.")]),e._v(" "),a("p",[e._v("All of those colors can be passed as an argument of "),a("code",[e._v("md-get-palette-color")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("red")]),e._v(" "),a("li",[e._v("pink")]),e._v(" "),a("li",[e._v("purple")]),e._v(" "),a("li",[e._v("deeppurple")]),e._v(" "),a("li",[e._v("indigo")]),e._v(" "),a("li",[e._v("blue")]),e._v(" "),a("li",[e._v("lightblue")]),e._v(" "),a("li",[e._v("cyan")]),e._v(" "),a("li",[e._v("teal")]),e._v(" "),a("li",[e._v("green")]),e._v(" "),a("li",[e._v("lightgreen")]),e._v(" "),a("li",[e._v("lime")]),e._v(" "),a("li",[e._v("yellow")]),e._v(" "),a("li",[e._v("amber")]),e._v(" "),a("li",[e._v("orange")]),e._v(" "),a("li",[e._v("deeporange")]),e._v(" "),a("li",[e._v("brown")]),e._v(" "),a("li",[e._v("grey")]),e._v(" "),a("li",[e._v("bluegrey")]),e._v(" "),a("li",[e._v("white")]),e._v(" "),a("li",[e._v("black")])]),e._v(" "),a("code-example",{attrs:{label:"SCSS",lang:"scss"}},[e._v('\n      @import "~vue-material/dist/theme/engine"; // Import the theme engine\n\n      @include md-register-theme("default", (\n        primary: md-get-palette-color(green, A200), // The primary color of your application\n        accent: md-get-palette-color(pink, 500) // The accent or secondary color\n      ));\n\n      @import "~vue-material/dist/theme/all"; // Apply the theme\n    ')])],1),e._v(" "),a("div",{staticClass:"page-container-section"},[a("h3",{staticClass:"md-title"},[e._v("Default colors")]),e._v(" "),a("p",[e._v("Vue Material has default theme colors:")]),e._v(" "),a("ul",[a("li",[e._v("Primary: "),a("span",{staticStyle:{"background-color":"#448aff",color:"#fff"}},[e._v("#448aff")]),e._v(" => Blue A200")]),e._v(" "),a("li",[e._v("Accent: "),a("span",{staticStyle:{"background-color":"#ff5252",color:"#fff"}},[e._v("#ff5252")]),e._v(" => Red A200")])]),e._v(" "),a("p",[e._v("This means that if you do not pass all arguments of "),a("code",[e._v("md-register-theme")]),e._v(", the default ones will be applied:")]),e._v(" "),a("code-example",{attrs:{label:"SCSS",lang:"scss"}},[e._v('\n      @import "~vue-material/dist/theme/engine"; // Import the theme engine\n\n      @include md-register-theme("default", (\n        primary: md-get-palette-color(blue, A200) // The primary color of your application\n      ));\n\n      @import "~vue-material/dist/theme/all"; // Apply the theme\n    ')])],1),e._v(" "),a("div",{staticClass:"page-container-section"},[a("h3",{staticClass:"md-title"},[e._v("Using your own colors")]),e._v(" "),a("p",[e._v("Sometimes the colors of your brand might not match with the material ones. It is possible to pass your own colors, without using the Material Design Palette:")]),e._v(" "),a("code-example",{attrs:{label:"SCSS",lang:"scss"}},[e._v('\n      @import "~vue-material/dist/theme/engine"; // Import the theme engine\n\n      @include md-register-theme("default", (\n        primary: #3fffbe, // The primary color of your brand\n        accent: #1a11e8 // The secondary color of your brand\n      ));\n\n      @import "~vue-material/dist/theme/all"; // Apply the theme\n    ')])],1),e._v(" "),a("div",{staticClass:"page-container-section"},[a("h3",{staticClass:"md-title"},[e._v("Dark Themes")]),e._v(" "),a("p",[e._v("By default light colors will be used on backgrounds, but you can easily change this, by passing a "),a("code",[e._v("theme")]),e._v(" attribute:")]),e._v(" "),a("code-example",{attrs:{label:"SCSS",lang:"scss"}},[e._v('\n      @import "~vue-material/dist/theme/engine"; // Import the theme engine\n\n      @include md-register-theme("default", (\n        primary: md-get-palette-color(blue, A200), // The primary color of your application\n        accent: md-get-palette-color(red, A200), // The accent or secondary color\n        theme: dark // This can be dark or light\n      ));\n\n      @import "~vue-material/dist/theme/all"; // Apply the theme\n    ')])],1),e._v(" "),a("div",{staticClass:"page-container-section"},[a("h3",{staticClass:"md-title"},[e._v("Theming individual components")]),e._v(" "),a("p",[e._v("You can theme individual components effortlessly, by calling the components one by one. This will make your final build smaller in size and higher in performance:")]),e._v(" "),a("code-example",{attrs:{label:"SCSS",lang:"scss"}},[e._v('\n      @import "~vue-material/dist/theme/engine"; // Import the theme engine\n\n      @include md-register-theme("default", (\n        primary: md-get-palette-color(blue, A200), // The primary color of your application\n        accent: md-get-palette-color(red, A200), // The accent or secondary color\n        theme: dark // This can be dark or light\n      ));\n\n      @import "~vue-material/dist/components/MdButton/theme"; // Apply the Button theme\n      @import "~vue-material/dist/components/MdContent/theme"; // Apply the Content theme\n      @import "~vue-material/dist/components/MdToolbar/theme"; // Apply the Toolbar theme\n    ')])],1)])},l=[],n={render:o,staticRenderFns:l};t.a=n}});