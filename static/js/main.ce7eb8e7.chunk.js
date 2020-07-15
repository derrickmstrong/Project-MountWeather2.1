(this["webpackJsonpproject-mountweather2.1"]=this["webpackJsonpproject-mountweather2.1"]||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),l=t.n(c),m=t(2),i=t.n(m),s=t(6),o=t(3),d=(t(13),t(1)),p=t.n(d);var u=function(){var e=Object(n.useState)({}),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)("Birmingham"),m=Object(o.a)(l,2),d=m[0],u=m[1],h="https://api.openweathermap.org/data/2.5/forecast?q=".concat(d,"&units=imperial&cnt=40&appid=").concat("4fed8c12f4f845e587f1aafd19bf6ec2"),E=function(){var e=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return E(),function(){}}),[d]);var g=t.list,x=t.city,f=t.city&&x.sunrise,F=new Date(1e3*f).toLocaleTimeString(),y=t.city&&x.sunset,w=new Date(1e3*y).toLocaleTimeString(),b=p()().calendar();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"current-forecast my-4 mx-4"},r.a.createElement("div",{class:"input-group mb-3 form"},r.a.createElement("input",{id:"search-city",type:"text",class:"form-control text-center",placeholder:"Search ex. Birmingham, Alabama"}),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("button",{class:"btn btn-primary",type:"button",id:"button-addon2",onClick:function(e){var a=document.querySelector("#search-city").value;u("".concat(a))}},"Search"))),x&&r.a.createElement(n.Fragment,null,r.a.createElement(n.Fragment,null,g[0].main&&r.a.createElement(n.Fragment,null,r.a.createElement("div",{class:"card m-3 text-center",style:{width:"18rem"}},r.a.createElement("p",{className:"city"},x.name?"".concat(x.name,", ").concat(x.country):"Opps! Try again"),r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(g[0].weather[0].icon,"@2x.png"),alt:"icon",style:{width:"8rem"},className:"img-fluid mx-auto d-block"}),r.a.createElement("div",{class:"card-body text-center"},r.a.createElement("h5",{class:"card-title"},g[0].main.temp.toFixed(0)," ",r.a.createElement("span",{className:"degrees",role:"img","aria-label":"degrees"},"o")," ","F"),r.a.createElement("p",{class:"card-text"},r.a.createElement("strong",null,g[0].weather[0].description.toUpperCase()[0],g[0].weather[0].description.slice(1))),r.a.createElement("p",{className:"small"},"As of ",b)),r.a.createElement("ul",{class:"list-group list-group-flush"},r.a.createElement("li",{class:"list-group-item"},g[0].main.temp_max.toFixed(0),"/",g[0].main.temp_min.toFixed(0)," F \ud83c\udf21\ufe0f Feels like"," ",g[0].main.feels_like.toFixed(0)," F"),r.a.createElement("li",{class:"list-group-item"},r.a.createElement("span",{className:""},r.a.createElement("p",null,"Going out?"),g[0].main.temp.toFixed(0)>=90?"Dress Light \ud83d\udc57\ud83c\udfbd":g[0].main.temp.toFixed(0)<=89&&g[0].main.temp.toFixed(0)>=80?"Try Short Sleeves \ud83d\udc55":g[0].main.temp.toFixed(0)<=79&&g[0].main.temp.toFixed(0)>=70?"Long sleeves might work \ud83d\udc54":g[0].main.temp.toFixed(0)<=69&&g[0].main.temp.toFixed(0)>=60?"Bring a Jacket or a Kimono \ud83d\udc58":g[0].main.temp.toFixed(0)<=59&&g[0].main.temp.toFixed(0)>=50?"Try a Bigger Coat \ud83e\udde5":g[0].main.temp.toFixed(0)<=49&&g[0].main.temp.toFixed(0)>=40?"Double UP, its Nippy \ud83c\udf2c\ufe0f":g[0].main.temp.toFixed(0)<=39&&g[0].main.temp.toFixed(0)>=30?"Bring a Scarf \ud83e\uddf6":g[0].main.temp.toFixed(0)<=29&&g[0].main.temp.toFixed(0)>=20?"Really?!?! \ud83e\udd76":g[0].main.temp.toFixed(0)<=19?"Just Stay Home \ud83c\udfe0!":null)),r.a.createElement("li",{class:"list-group-item"},r.a.createElement("span",{className:"small mr-1"},r.a.createElement("span",{role:"img","aria-label":"sunrise"},"\ud83c\udf05")," ","Rise: ",F),r.a.createElement("span",{className:"small"},r.a.createElement("span",{role:"img","aria-label":"sunset"},"\ud83c\udf07")," ","Set: ",w)))))))),r.a.createElement("h2",{className:"future-forecast"},"24-hr Extended Forecast"),r.a.createElement("div",{className:"future-forecast"},g&&[1,2,3,4,5,6,7,8].map((function(e){return r.a.createElement(n.Fragment,null,g[e].main&&r.a.createElement("div",{className:"future-forecast"},r.a.createElement("div",{className:"card m-3 future-forecast",style:{width:"12.5rem"}},r.a.createElement("p",null,1===e?p()().add(3,"hours").calendar():2===e?p()().add(6,"hours").calendar():3===e?p()().add(9,"hours").calendar():4===e?p()().add(12,"hours").calendar():5===e?p()().add(15,"hours").calendar():6===e?p()().add(18,"hours").calendar():7===e?p()().add(21,"hours").calendar():8===e?p()().add(24,"hours").calendar():9===e?p()().add(25,"hours").calendar():10===e?p()().add(28,"hours").calendar():11===e?p()().add(31,"hours").calendar():12===e?p()().add(34,"hours").calendar():null),r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(g[e].weather[0].icon,"@2x.png"),alt:"icon",className:"icon",style:{width:"7rem"}}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title text-center"},g[e].main.temp.toFixed(0)," F"),r.a.createElement("p",{class:"card-text"},g[e].weather[0].description.toUpperCase()[0],g[e].weather[0].description.slice(1))),r.a.createElement("ul",{class:"list-group list-group-flush"},r.a.createElement("li",{class:"list-group-item small mb-4"},r.a.createElement("p",{className:"mr-2"},"High: ",g[e].main.temp_max.toFixed(0)," F"),r.a.createElement("p",{className:"ml-2"},"Low: ",g[e].main.temp_min.toFixed(0)," F"))))))}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))},7:function(e,a,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.ce7eb8e7.chunk.js.map