(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={List:"Statistics_List__2LCFH",Item:"Statistics_Item__2FqLG"}},,,function(e,t,a){e.exports={Section:"Section_Section__Ceg6O",Title:"Section_Title__23uLP"}},,,,,function(e,t,a){e.exports={Container:"Container_Container__3vBpV"}},function(e,t,a){e.exports={Button:"FeedbackOptions_Button__VSvCS"}},function(e,t,a){e.exports={Message:"Notification_Message__54NMM"}},,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(6),o=a.n(s),i=a(7),r=a(8),d=a(9),l=a(14),u=a(13),b=a(10),j=a.n(b),f=a(0);var v=function(e){var t=e.children;return Object(f.jsx)("div",{className:j.a.Container,children:t})},h=a(3),p=a.n(h),O=a(11),g=a.n(O),k=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return function(e){var t=e.feedback,a=e.onLeaveFeedback;return Object(f.jsx)("button",{className:g.a.Button,type:"button","data-feedback":t,onClick:a,children:t},t)}({feedback:e,onLeaveFeedback:a})}))};k.propTypes={options:p.a.arrayOf(p.a.string),onLeaveFeedback:p.a.func.isRequired};var m=k,x=a(12),_=a.n(x),F=function(e){var t=e.message;return Object(f.jsx)("p",{className:_.a.Message,children:t})};F.defaultProps={message:""};var N=F,L=a(2),S=a.n(L),P=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.positivePercentage;return Object(f.jsx)(f.Fragment,{children:c?Object(f.jsxs)("ul",{className:S.a.List,children:[Object(f.jsxs)("li",{className:S.a.Item,children:["Good: ",t]}),Object(f.jsxs)("li",{className:S.a.Item,children:["Neutral: ",a]}),Object(f.jsxs)("li",{className:S.a.Item,children:["Bad: ",n]}),Object(f.jsxs)("li",{className:S.a.Item,children:["Total: ",c]}),Object(f.jsxs)("li",{className:S.a.Item,children:["Positive feedback: ",s,"%"]})]}):Object(f.jsx)(N,{message:"No feedback given"})})},C=a(5),I=a.n(C),T=function(e){var t=e.title,a=e.children;return Object(f.jsxs)("section",{className:I.a.Section,children:[Object(f.jsx)("h1",{className:I.a.Title,children:t}),a]})};T.defaultPropes={title:"",children:[]};var y=T,M=["good","neutral","bad"],B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.dataset.feedback;e.setState((function(e){return Object(i.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,a=e.countTotalFeedback();return a?Math.round(t/a*100):0},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(f.jsxs)(v,{children:[Object(f.jsx)(y,{title:"Statistics",children:Object(f.jsx)(P,{good:t,neutral:a,bad:n,total:c,positivePercentage:s})}),Object(f.jsx)(y,{title:"Please leave feedback",children:Object(f.jsx)(m,{options:M,onLeaveFeedback:this.onLeaveFeedback})})]})}}]),a}(n.Component);a(22),a(23);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.06238935.chunk.js.map