var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire77dd;e.register("3yXQA",function(t,r){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var n=l(e("8oB3s")),o=l(e("6ogwB")),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(e("4Iuzv")),s=e("5aRSq");function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function l(e){return e&&e.__esModule?e:{default:e}}class u extends a.Component{constructor(e){super(e),this.state={userInfo:"dummy"}}async componentDidMount(){let e=await fetch("  https://api.github.com/users/tirthkparikh"),t=await e.json();console.log(t),this.setState({userInfo:t})}render(){let{name:e,avatar_url:t,location:r,email:a}=this.state.userInfo?this.state.userInfo:"null";return(0,s.jsxs)("div",{div:!0,className:"bg-blue-50 h-full min-h-screen",children:[(0,s.jsxs)("h1",{children:["Hello",(0,s.jsx)(o.default.Consumer,{children:e=>(0,s.jsx)("span",{className:"p-1 text-blue-400 font-bold",children:e.userLoggedIn})})]}),(0,s.jsx)("div",{children:"This project is part of Namaste react learning"}),(0,s.jsx)(n.default,{name:e,location:r,image:t,contact:a})]})}}t.exports.default=u}),e.register("8oB3s",function(t,r){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(n,s,i):n[s]=e[s]}return n.default=e,r&&r.set(e,n),n}(e("4Iuzv")),o=e("5aRSq");function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}class s extends n.Component{constructor(e){super(e)}render(){let{name:e,location:t,image:r,contact:n}=this.props;return(0,o.jsxs)("div",{className:"m-4 p-4 w-[220px] h-[350px] shadow bg-green-100 shadow-zinc-900 border border-solid  border-gray-50",children:[(0,o.jsx)("img",{className:"rounded-lg w-[200px]",src:r,alt:"user-image"}),(0,o.jsxs)("div",{className:"mt-2",children:["Name: ",e]}),(0,o.jsxs)("div",{children:["Location: ",t]}),(0,o.jsxs)("div",{children:["Contact: ","951XXXXX"]})]})}}t.exports.default=s});
//# sourceMappingURL=About.0db5fcd8.js.map