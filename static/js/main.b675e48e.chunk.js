(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),s=a(4),l=a(5),i=a(7),u=a(6),h=a(9),m=(a(26),a(1)),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.handleSearchValue=function(t){e.setState({searchValue:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchValue.trim()?(e.props.onSubmit(e.state.searchValue),e.setState({searchValue:" "})):h.b.error("Enter image name, please")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"Searchbar",onSubmit:this.handleSubmit,children:Object(m.jsxs)("form",{className:"SearchForm",children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",name:"searchValue",value:this.state.searchValue,onChange:this.handleSearchValue,autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),g=a(11),j=function(e){var t=e.webformatURL,a=e.onToggleModal,n=e.largeImageURL;return Object(m.jsx)("li",{className:"ImageGalleryItem",onClick:a,"data-modal":n,children:Object(m.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image"})})},b=a(20),p=a.n(b);var f={fetchImagesWithQuery:function(e,t){return p.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=22812304-3b9840aba1a79f008a4d1352a&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}},O=function(e){var t=e.loadingMore;return Object(m.jsx)("div",{className:"Button__box",children:Object(m.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load More"})})},v=document.querySelector("#modal-root"),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(m.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(m.jsx)("div",{className:"Modal",children:Object(m.jsx)("img",{src:this.props.largeImg,alt:""})})}),v)}}]),a}(n.Component),x=a(21),w=a.n(x),S=(a(66),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Loader",children:Object(m.jsx)(w.a,{type:"Hearts",color:"#00BFFF",height:50,width:50})})}}]),a}(n.Component)),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:!1,pageNum:1,showModal:!1,largeImageURL:""},e.loadingMore=function(t){e.setState((function(e){return{pageNum:e.pageNum+1}}))},e.toggleModal=function(t){var a;e.state.showModal||(a=t.currentTarget.getAttribute("data-modal")),e.setState((function(e){return{showModal:!e.showModal,largeImageURL:a}}))},e.modalClose=function(){e.setState((function(e){return{largeImageURL:!e.largeImageURL}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.searchValue,n=t.pageNum,r=this.state.pageNum;a===this.props.searchValue&&n===r||this.getData()}},{key:"getData",value:function(){var e=this,t=this.state.pageNum,a=this.props.searchValue;this.setState({loading:!0}),f.fetchImagesWithQuery(a,t).then((function(a){1===t?e.setState({images:a}):(e.setState((function(e){return{images:[].concat(Object(g.a)(e.images),Object(g.a)(a))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.loading,r=t.showModal,o=this.props.searchValue.searchValue;return Object(m.jsxs)(m.Fragment,{children:[o&&Object(m.jsx)("div",{children:"Enter ..."}),a.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ul",{className:"ImageGallery",children:a.map((function(t){var a=t.webformatURL,n=t.largeImageURL,r=t.id;return Object(m.jsx)(j,{onToggleModal:e.toggleModal,webformatURL:a,largeImageURL:n},r)}))}),!n&&Object(m.jsx)(O,{loadingMore:this.loadingMore})]}),n&&Object(m.jsx)(S,{}),r&&Object(m.jsx)(y,{onClose:this.toggleModal,largeImg:this.state.largeImageURL})]})}}]),a}(n.Component),N=(a(67),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.handleFormSubmit=function(t){e.setState({searchValue:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(d,{onSubmit:this.handleFormSubmit}),Object(m.jsx)(h.a,{autoClose:3e3}),Object(m.jsx)(k,{searchValue:this.state.searchValue})]})}}]),a}(n.Component));c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.b675e48e.chunk.js.map