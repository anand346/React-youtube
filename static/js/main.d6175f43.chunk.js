(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(18),c=a.n(r),o=a(8),s=a.n(o),l=a(19),m=a(4),u=a(5),d=a(7),v=a(6),p=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),a}(i.a.Component),f=a(20),h=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,type:"video",key:"AIzaSyCj4U2HFZIER3Vz8PhIWFx5m7uoqQwzlg0"}}),b=function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))},E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){return i.a.createElement(b,{onVideoSelect:a,key:e.id.videoId,video:e})});return i.a.createElement("div",{className:"video-list ui relaxed divided list"},n)},w=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:t.snippet.title,src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},S=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(l.a)(s.a.mark(function t(a){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/search",{params:{q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit("buildings")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(p,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(w,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(E,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),a}(i.a.Component);c.a.render(i.a.createElement(S,null),document.querySelector("#root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d6175f43.chunk.js.map