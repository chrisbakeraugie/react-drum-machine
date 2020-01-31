(this["webpackJsonpreact-drum-machine"]=this["webpackJsonpreact-drum-machine"]||[]).push([[0],{13:function(e,a,n){e.exports=n(25)},18:function(e,a,n){},19:function(e,a,n){},25:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),d=n(10),i=n.n(d),l=(n(18),n(2)),s=n(3),c=n(5),o=n(4),p=n(6),k=(n(19),function(e){function a(e){var n;return Object(l.a)(this,a),(n=Object(c.a)(this,Object(o.a)(a).call(this,e))).handleClick=function(){n.audio.play(),n.audio.currentTime=0,n.props.handleDisplay(n.props.padname)},n.handleKeyDown=function(e){e.keyCode===n.props.keycode&&(n.audio.play(),n.audio.currentTime=0,n.setState({displayText:n.props.padname}),n.props.handleDisplay(n.props.padname))},n.state={displayText:""},n}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return t.a.createElement("div",{id:this.props.id,className:"drum-pad",onClick:this.handleClick,onKeyDown:this.handleKeyDown,keycode:this.props.keycode},t.a.createElement("h3",null,this.props.id),t.a.createElement("audio",{src:this.props.src,id:this.props.id,className:"clip",ref:function(a){return e.audio=a}}))}}]),a}(t.a.Component)),m=function(e){return t.a.createElement("div",{id:e.id},t.a.createElement("h2",{id:"display-text"},e.display),t.a.createElement(k,{id:e.bankOne[0].keyTrigger,src:e.bankOne[0].url,keycode:e.bankOne[0].keyCode,padname:e.bankOne[0].id,handleDisplay:e.handleDisplay}),t.a.createElement(k,{id:e.bankOne[1].keyTrigger,src:e.bankOne[1].url,keycode:e.bankOne[1].keyCode,padname:e.bankOne[1].id,handleDisplay:e.handleDisplay}),t.a.createElement(k,{id:e.bankOne[2].keyTrigger,src:e.bankOne[2].url,keycode:e.bankOne[2].keyCode,padname:e.bankOne[2].id,handleDisplay:e.handleDisplay}),t.a.createElement(k,{id:e.bankOne[3].keyTrigger,src:e.bankOne[3].url,keycode:e.bankOne[3].keyCode,padname:e.bankOne[3].id,handleDisplay:e.handleDisplay}),t.a.createElement(k,{id:e.bankOne[4].keyTrigger,src:e.bankOne[4].url,keycode:e.bankOne[4].keyCode,padname:e.bankOne[4].id,handleDisplay:e.handleDisplay}),t.a.createElement(k,{id:e.bankOne[5].keyTrigger,src:e.bankOne[5].url,keycode:e.bankOne[5].keyCode,padname:e.bankOne[5].id,handleDisplay:e.handleDisplay}),t.a.createElement(k,{id:e.bankOne[6].keyTrigger,src:e.bankOne[6].url,keycode:e.bankOne[6].keyCode,padname:e.bankOne[6].id,handleDisplay:e.handleDisplay}),t.a.createElement(k,{id:e.bankOne[7].keyTrigger,src:e.bankOne[7].url,keycode:e.bankOne[7].keyCode,padname:e.bankOne[7].id,handleDisplay:e.handleDisplay}),t.a.createElement(k,{id:e.bankOne[8].keyTrigger,src:e.bankOne[8].url,keycode:e.bankOne[8].keyCode,padname:e.bankOne[8].id,handleDisplay:e.handleDisplay}))},y=n(12),u=n(11),h=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],b=function(e){function a(e){var n;return Object(l.a)(this,a),(n=Object(c.a)(this,Object(o.a)(a).call(this,e))).handleDisplay=function(e){n.setState({display:e})},n.state={display:"Press a key or click a pad to play a sound"},n}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return t.a.createElement("div",{id:"drum-machine",className:"App"},t.a.createElement("h3",null,"This drum machine will respond to either keystrokes or clicks.",t.a.createElement("br",null),"To see the code and my other work, visit my github page.",t.a.createElement("br",null),t.a.createElement("a",{href:"https://github.com/chrisbakeraugie/react-drum-machine",target:"_blank",rel:"noopener noreferrer"},t.a.createElement(u.a,{icon:y.a,size:"2x",href:"www.chrisbakeraugie.github.io"}))),t.a.createElement(m,{id:"display",bankOne:h,display:this.state.display,handleDisplay:this.handleDisplay}),t.a.createElement("br",null),t.a.createElement("footer",null,"Made by Chris Baker"))}}]),a}(t.a.Component);i.a.render(t.a.createElement(b,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.2c60b20c.chunk.js.map