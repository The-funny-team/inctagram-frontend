"use strict";(self.webpackChunkinctagram=self.webpackChunkinctagram||[]).push([[7385],{"./src/shared/ui/Avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarWithImage:()=>AvatarWithImage,AvatarWithoutImage:()=>AvatarWithoutImage,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _AvatarWithImage$para,_AvatarWithImage$para2,_AvatarWithoutImage$p,_AvatarWithoutImage$p2,D_IT_incubator_inctagram_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,D_IT_incubator_inctagram_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/shared/ui/Avatar/Avatar.tsx").q,tags:["autodocs"],title:"Components/Avatar"};var AvatarWithImage={args:{size:202,src:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",userName:"Don Joe"}},AvatarWithoutImage={args:{size:48,userName:"Don Joe"}};AvatarWithImage.parameters=_objectSpread(_objectSpread({},AvatarWithImage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarWithImage$para=AvatarWithImage.parameters)||void 0===_AvatarWithImage$para?void 0:_AvatarWithImage$para.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    size: 202,\n    src: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',\n    userName: 'Don Joe'\n  }\n}"},null===(_AvatarWithImage$para2=AvatarWithImage.parameters)||void 0===_AvatarWithImage$para2||null===(_AvatarWithImage$para2=_AvatarWithImage$para2.docs)||void 0===_AvatarWithImage$para2?void 0:_AvatarWithImage$para2.source)})}),AvatarWithoutImage.parameters=_objectSpread(_objectSpread({},AvatarWithoutImage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarWithoutImage$p=AvatarWithoutImage.parameters)||void 0===_AvatarWithoutImage$p?void 0:_AvatarWithoutImage$p.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    size: 48,\n    userName: 'Don Joe'\n  }\n}"},null===(_AvatarWithoutImage$p2=AvatarWithoutImage.parameters)||void 0===_AvatarWithoutImage$p2||null===(_AvatarWithoutImage$p2=_AvatarWithoutImage$p2.docs)||void 0===_AvatarWithoutImage$p2?void 0:_AvatarWithoutImage$p2.source)})})},"./src/shared/ui/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});var react=__webpack_require__("./node_modules/.pnpm/next@14.0.1_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0_sass@1.69.5/node_modules/next/dist/compiled/react/index.js"),helpers=__webpack_require__("./src/shared/lib/helpers/index.ts"),clsx=__webpack_require__("./node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs"),next_image=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@7.5.3_@swc+core@1.3.96_@types+react-dom@18.0.0_@types+react@18.0.0_esbuild@_p2klxhykixehpbwuiq4cbbixi4/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatar_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.31_typescript@5.0.2_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.69.5_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/Avatar/Avatar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar_module.Z,options);const Avatar_Avatar_module=Avatar_module.Z&&Avatar_module.Z.locals?Avatar_module.Z.locals:void 0;var __jsx=react.createElement,Avatar=function Avatar(_ref){var className=_ref.className,size=_ref.size,src=_ref.src,userName=_ref.userName,classNames={image:Avatar_Avatar_module.image,root:(0,clsx.W)(Avatar_Avatar_module.root,className),userName:Avatar_Avatar_module.userName},fallbackUserName=(0,helpers.JD)(userName);return __jsx("div",{className:classNames.root,style:{height:"".concat(size,"px"),width:"".concat(size,"px")}},!src&&__jsx("span",{className:classNames.userName,style:{fontSize:"".concat(10+size/8,"px")}},fallbackUserName),src&&__jsx(next_image.Z,{alt:"".concat(userName," avatar"),className:classNames.image,height:size,src,width:size}))};Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{className:{required:!1,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:"number"},description:""},src:{required:!1,tsType:{name:"union",raw:"null | string",elements:[{name:"null"},{name:"string"}]},description:""},userName:{required:!0,tsType:{name:"string"},description:""}}};try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string | null"}},userName:{defaultValue:null,description:"",name:"userName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/shared/ui/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.31_typescript@5.0.2_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.69.5_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/Avatar/Avatar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Avatar_root__zeADh{display:flex;flex-flow:row nowrap;flex-wrap:nowrap;gap:0;align-items:center;justify-content:center;overflow:hidden;background-color:var(--color-accent-500);border-radius:50%}.Avatar_root__zeADh .Avatar_userName__TarvF{font-weight:700}.Avatar_root__zeADh .Avatar_image__EHDZW{object-fit:cover}","",{version:3,sources:["webpack://./src/shared/ui/Avatar/Avatar.module.scss"],names:[],mappings:"AASA,oBARE,YAAA,CACA,oBAAA,CACA,gBAHkF,CAIlF,KAJwE,CAKxE,kBAKwC,CAJxC,sBAIwB,CAExB,eAAA,CACA,wCAAA,CACA,iBAAA,CAEA,4CACE,eAAA,CAGF,yCACE,gBAAA",sourcesContent:["@mixin flex($direction: row, $justify: flex-start, $align: stretch, $gap: 0, $wrap: nowrap) {\r\n  display: flex;\r\n  flex-flow: $direction $wrap;\r\n  flex-wrap: $wrap;\r\n  gap: $gap;\r\n  align-items: $align;\r\n  justify-content: $justify;\r\n}\r\n\r\n.root {\r\n  @include flex($justify: center, $align: center);\r\n\r\n  overflow: hidden;\r\n  background-color: var(--color-accent-500);\r\n  border-radius: 50%;\r\n\r\n  .userName {\r\n    font-weight: 700;\r\n  }\r\n\r\n  .image {\r\n    object-fit: cover;\r\n  }\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"Avatar_root__zeADh",userName:"Avatar_userName__TarvF",image:"Avatar_image__EHDZW"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);