function regulate_height(){myHeight=window.innerHeight,myHeight>410?(padding_height=myHeight-428,reasons_height=(myHeight-482)/2,features_height=(myHeight-500)/2,document.getElementById("search_section").style.cssText="padding-bottom: "+padding_height+"px;",document.getElementById("reasons").style.cssText="padding-top: "+reasons_height+"px; padding-bottom: "+reasons_height+"px;",document.getElementById("features").style.cssText="padding-top: "+features_height+"px; padding-bottom: "+features_height+"px;"):document.getElementById("search_section").style.cssText="padding-bottom: 65px",setTimeout(function(){regulate_height()},1e3)}function initialize_searchbox(){console.log("Initializing searchbox");var e=jQuery;e("input#q").typeahead({name:"autocomplete",limit:10,allowDuplicates:!0,remote:{url:"/package/autocomplete?term=%QUERY"},engine:Hogan,template:["<div>",'<img src="/assets/language/{{ language }}.png" alt="{{ language }}" class = "pull-left" style = "height: 2.0em;" />',"<p>",'<a href = "{{ url }}">',"<strong>{{ name }}</strong>","</a>"," - {{ description }}","</p>","</div>"].join("")}),e("input#q").focus()}jQuery(document).ready(function(){jQuery("#q").tbHinter({text:"search for a software library"}),jQuery("#what_is_versioneye_link").on("click",function(){return $.scrollTo($("#what_is_versioneye"),600,{easing:"easeOutCubic"}),!1}),jQuery("#packagemanagers_link").on("click",function(){return $.scrollTo($("#packagemanagers"),800,{easing:"easeOutCubic"}),!1}),jQuery("#integration_link").on("click",function(){return $.scrollTo($("#integration"),800,{easing:"easeOutCubic"}),!1}),jQuery("#api_link").on("click",function(){return $.scrollTo($("#api"),800,{easing:"easeOutCubic"}),!1}),jQuery("#reasons_link").on("click",function(){return $.scrollTo($("#reasons"),800,{easing:"easeOutCubic"}),!1}),jQuery("#signup_link").on("click",function(){return $.scrollTo($("#register_today"),800,{easing:"easeOutCubic"}),!1}),jQuery("#back_to_top").on("click",function(){return $.scrollTo($("#login"),1e3,{easing:"easeOutCubic"}),!1}),initialize_searchbox()});