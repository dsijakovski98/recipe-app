(this["webpackJsonprecipes-app"]=this["webpackJsonprecipes-app"]||[]).push([[0],{2:function(e,t,a){e.exports={recipeDiv:"recipe_recipeDiv__3HKT1",ingredientsTitle:"recipe_ingredientsTitle__11_rO",caloriesTitle:"recipe_caloriesTitle__1mbNX",ingredients:"recipe_ingredients__7d2S3",item:"recipe_item__3Tohl",recipeImage:"recipe_recipeImage__1_KvI"}},21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),l=(a(26),a(3)),s=a(4),o=a(6),u=a(5),m=(a(27),a(18)),p=a(7),h=a.n(p),d=a(19),g=a.n(d),v="97d7acda066f69ce7593d69a55efb60d",b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).updateSearch=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.submitForm=function(e){e.preventDefault(),n.getRecipes()},n.getRecipes=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="";t=e.length?e:n.state.search;var a="https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("238f1e91","&app_key=").concat(v);g.a.get(a).then((function(e){var t=e.data.hits;n.props.setGlobalRecipes(t)})).catch((function(e){return console.log}))},n.state={search:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getRecipes("chicken")}},{key:"render",value:function(){var e=this.state.search;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("div",null,r.a.createElement("input",{className:h.a.searchBar,type:"text",name:"search",placeholder:"Search for recipes...",value:e,onChange:this.updateSearch}),r.a.createElement("button",{className:h.a.searchButton,type:"submit"},"Search"))))}}]),a}(n.Component),f=a(46),_=a(2),E=a.n(_);var O=function(e){var t=e.title,a=e.ingredients,n=e.calories,c=e.image;return r.a.createElement("div",{className:E.a.recipeDiv},r.a.createElement("h1",null,t),r.a.createElement("ul",{className:E.a.ingredients},r.a.createElement("h3",{className:E.a.ingredientsTitle},"Ingredients:"),a.map((function(e){return r.a.createElement("li",{className:E.a.item,key:Object(f.a)()},e)})),r.a.createElement("br",null),r.a.createElement("strong",{className:E.a.caloriesTitle},"Calories:"),r.a.createElement("span",null," ",n.toFixed(2)," kcal")),r.a.createElement("br",null),r.a.createElement("img",{className:E.a.recipeImage,src:c,alt:"",width:"200px"}),r.a.createElement("br",null),r.a.createElement("br",null))},j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.recipes;return r.a.createElement("div",null,e.length?e.map((function(e){return r.a.createElement(O,{key:Object(f.a)(),title:e.recipe.label,ingredients:e.recipe.ingredientLines,calories:e.recipe.calories,image:e.recipe.image})})):null)}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setRecipes=function(e){n.setState({recipes:e})},n.state={recipes:[]},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"edamam-badge","data-color":"white",style:{display:"inline"}}),r.a.createElement("h1",{className:"headline"},"My Recipe App"),r.a.createElement(b,{setGlobalRecipes:this.setRecipes}),r.a.createElement("hr",null),r.a.createElement(j,{recipes:this.state.recipes}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports={searchBar:"search_bar_searchBar__1KH-K",searchButton:"search_bar_searchButton__3TMPS"}}},[[21,1,2]]]);
//# sourceMappingURL=main.3493cec5.chunk.js.map