(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(0),r=n.n(o),c=n(10),s=n.n(c),i=(n(86),n(41)),l=n(13),u=n(73),d=n(156),h=n(12),m=n.n(h),j=n(18),g=n(9),p=n(19),b=n.n(p),x="https://classbadbad-back.herokuapp.com",f=n(154),O=n(158),v=n(159),w=n(152),y=n(71),N=n.n(y),k=n(72),C=n.n(k),S=n(153),A=Object(f.a)({container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",marginTop:-60},textFieldContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:40,width:348,backgroundColor:"#E8EBE6",borderRadius:4,marginBottom:12},textField:{height:30,width:320},button:{height:36,width:120,color:"white",boxShadow:"none",marginTop:20}}),I=Object(l.g)((function(e){var t=e.history,n=e.handleLogin,r=A(),c=Object(o.useState)(!1),s=Object(g.a)(c,2),i=s[0],l=s[1],u=Object(o.useState)(""),d=Object(g.a)(u,2),h=d[0],p=d[1],f=Object(o.useState)(""),y=Object(g.a)(f,2),k=y[0],I=y[1],D=function(){var e=Object(j.a)(m.a.mark((function e(){var a,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post(x+"/auth/login",{username:h,password:k});case 3:a=e.sent,(o=a.data.access_token)?(n(o),t.push("/home")):console.log("Error"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("There are something wrong :(");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:r.container,children:[Object(a.jsx)("h1",{style:{marginBottom:60},children:"Welcome,"}),Object(a.jsx)("div",{className:r.textFieldContainer,children:Object(a.jsx)(O.a,{className:r.textField,placeholder:"Username",value:h,onChange:function(e){return p(e.target.value)}})}),Object(a.jsx)("div",{className:r.textFieldContainer,children:Object(a.jsx)(O.a,{className:r.textField,type:i?"text":"password",placeholder:"Password",endAdornment:Object(a.jsx)(v.a,{position:"end",children:Object(a.jsx)(w.a,{"aria-label":"toggle password visibility",style:{width:30,height:30},onClick:function(){l(!i)},children:i?Object(a.jsx)(N.a,{}):Object(a.jsx)(C.a,{})})}),value:k,onChange:function(e){return I(e.target.value)}})}),Object(a.jsx)(S.a,{className:r.button,variant:"contained",color:"primary",onClick:function(){return D()},children:"Log in"})]})})),D=n(157),E=n.p+"static/media/user.8d49e377.png",B=n(48),F=n.n(B),z=n(49),T=n.n(z),R=n(37),P=n.n(R),L=n(155),J="ADMIN",M=Object(f.a)({container:{display:"flex",flexDirection:"column",backgroundColor:"#F3F3F3",borderRadius:10,padding:"8px 16px",marginBottom:8},header:{display:"flex",justifyContent:"space-between"},owner:{fontWeight:500,marginRight:8},time:{fontSize:12,color:"#ADAFA9"},authorDetail:{display:"flex",flexDirection:"row",alignItems:"flex-end",marginBottom:4},icon:{height:20,width:20,color:"#7F817D",marginLeft:8},postAuthor:{display:"flex",justifyContent:"center",width:44,height:16,backgroundColor:"#5B5B5C",borderRadius:5,color:"white",fontSize:12,marginRight:8},edited:{fontSize:10,color:"#ADAFA9",fontStyle:"italic",marginTop:2}}),_=function(e){var t=e.postId,n=e.postAuthor,r=e.commentId,c=e.content,s=e.isEdited,i=e.timestamp,l=e.commentAuthor,u=e.commentAuthorName,d=e.userId,h=e.userRole,p=e.getAllPosts,f=M(),O=JSON.parse(localStorage.getItem("token")),v=Object(o.useState)(""),w=Object(g.a)(v,2),y=w[0],N=w[1],k=Object(o.useState)(!1),C=Object(g.a)(k,2),S=C[0],A=C[1],I=function(){var e=Object(j.a)(m.a.mark((function e(){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete(x+"/post/comment/"+t+"/"+r,{headers:{Authorization:"Bearer ".concat(O)}});case 3:n=e.sent,(a=n.data.message)?(console.log(a),p()):console.log("DeleteComment Error"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("There are something wrong about delete comment :(");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(m.a.mark((function e(){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.patch(x+"/post/comment/"+t+"/"+r,{commentMsg:y},{headers:{Authorization:"Bearer ".concat(O)}});case 3:n=e.sent,(a=n.data.message)?(console.log(a),N(""),A(!1),p()):console.log("EditComment Error"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("There is something wrong about edit comment :(");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:f.container,children:[Object(a.jsxs)("div",{className:f.header,children:[Object(a.jsxs)("div",{className:f.authorDetail,children:[Object(a.jsx)("div",{className:f.owner,children:u}),n===l&&Object(a.jsx)("div",{className:f.postAuthor,children:Object(a.jsx)("div",{children:"Author"})}),Object(a.jsx)(F.a,{className:f.time,fromNow:!0,children:i})]}),(h===J||d===l)&&Object(a.jsxs)("div",{children:[Object(a.jsx)(T.a,{className:f.icon,onClick:function(){return A(!0)}}),Object(a.jsx)(P.a,{className:f.icon,onClick:function(){return I()}})]}),d===n&&d!==l&&h!==J&&Object(a.jsx)(P.a,{className:f.icon,onClick:function(){return I()}})]}),S?Object(a.jsx)(D.a,{placeholder:"Edit comment...",variant:"outlined",size:"small",value:y,onChange:function(e){return N(e.target.value)},onKeyDown:function(e){13===e.keyCode&&S&&E()}}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:c}),s&&Object(a.jsx)("div",{className:f.edited,children:"Edited"})]})]})},W="ADMIN",G=Object(f.a)({container:{display:"flex",flexDirection:"column",backgroundColor:"white",padding:16,boxShadow:"0.25px 0.5px 2px #DADADA",borderRadius:5},user:{display:"flex",flexDirection:"row"},img:{height:36,width:36,marginRight:8},userDetail:{display:"flex",flexDirection:"column",justifyContent:"space-between"},icon:{height:20,width:20,color:"#7F817D",marginLeft:8},header:{display:"flex",justifyContent:"space-between",marginBottom:16},divider:{marginTop:16,marginBottom:16},owner:{fontWeight:500},time:{fontSize:12,color:"#ADAFA9"},comment:{marginBottom:8},edited:{fontSize:10,color:"#ADAFA9",fontStyle:"italic",marginTop:2}}),K=function(e){var t=e.postId,n=e.content,r=e.authorId,c=e.authorName,s=e.timestamp,i=e.isEdited,l=e.comments,u=e.userId,d=e.userRole,h=e.getAllPosts,p=G(),f=JSON.parse(localStorage.getItem("token")),O=Object(o.useState)(""),v=Object(g.a)(O,2),w=v[0],y=v[1],N=Object(o.useState)(""),k=Object(g.a)(N,2),C=k[0],S=k[1],A=Object(o.useState)(!1),I=Object(g.a)(A,2),B=I[0],z=I[1],R=function(){var e=Object(j.a)(m.a.mark((function e(){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post(x+"/post/comment/"+t,{commentMsg:w},{headers:{Authorization:"Bearer ".concat(f)}});case 3:n=e.sent,(a=n.data.message)?(console.log(a),y(""),h()):console.log("CreateComment Error"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("There are something wrong about create comment :(");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),J=function(e){13===e.keyCode&&(B?M():R())},M=function(){var e=Object(j.a)(m.a.mark((function e(){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.patch(x+"/post",{postId:t,message:C},{headers:{Authorization:"Bearer ".concat(f)}});case 3:n=e.sent,(a=n.data.message)?(console.log(a),S(""),z(!1),h()):console.log("Edit Post Error"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("There is something wrong about edit post");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(j.a)(m.a.mark((function e(){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete(x+"/post/"+t,{headers:{Authorization:"Bearer ".concat(f)}});case 3:n=e.sent,(a=n.data.message)?(console.log(a),h()):console.log("DeletePost Error"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("There are something wrong about delete post :(");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:p.container,children:[Object(a.jsxs)("div",{className:p.header,children:[Object(a.jsxs)("div",{className:p.user,children:[Object(a.jsx)("img",{className:p.img,src:E}),Object(a.jsxs)("div",{className:p.userDetail,children:[Object(a.jsx)("div",{className:p.owner,children:c}),Object(a.jsx)(F.a,{className:p.time,fromNow:!0,children:s})]})]}),(d===W||u===r)&&Object(a.jsxs)("div",{children:[Object(a.jsx)(T.a,{className:p.icon,onClick:function(){return z(!0)}}),Object(a.jsx)(P.a,{className:p.icon,onClick:function(){return K()}})]})]}),B?Object(a.jsx)(D.a,{placeholder:"Edit post...",variant:"outlined",size:"small",value:C,onChange:function(e){return S(e.target.value)},onKeyDown:J}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:n}),i&&Object(a.jsx)("div",{className:p.edited,children:"Edited"})]}),Object(a.jsx)(L.a,{className:p.divider}),l.map((function(e){return Object(a.jsx)(_,{postId:t,postAuthor:r,commentId:e._id,content:e.commentMsg,isEdited:e.isEdited,timestamp:e.timestamp,commentAuthor:e.userId,commentAuthorName:e.username,userId:u,userRole:d,getAllPosts:h},e._id)})),Object(a.jsx)(D.a,{placeholder:"Write a comment...",variant:"outlined",size:"small",value:w,onChange:function(e){return y(e.target.value)},onKeyDown:J})]})},U="ADMIN",q="USER",H=Object(f.a)({container:{display:"flex",flex:1,flexDirection:"column",backgroundColor:"#F9F9F9",height:"100%"},Contentcontainer:{display:"flex",flexGrow:1,flexDirection:"column",padding:"32px 165px",backgroundColor:"#F9F9F9"},navBar:{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100vw",height:48,backgroundColor:"white",boxShadow:"inset 0 0 1px #353736"},logoutButton:{height:32,width:100,color:"white",boxShadow:"none",marginRight:16},postButton:{height:32,width:80,color:"white",boxShadow:"none",alignSelf:"flex-end",marginTop:8,marginBottom:24},img:{display:"flex",alignSelf:"flex-start",height:48,width:48,marginRight:16},textField:{width:"100vw"},post:{display:"flex",flexDirection:"row",alignItems:"center"}}),Q=Object(l.g)((function(e){var t=e.history,n=e.handleLogout,r=H(),c=JSON.parse(localStorage.getItem("token")),s=Object(o.useState)(""),i=Object(g.a)(s,2),l=i[0],u=i[1],d=Object(o.useState)(""),h=Object(g.a)(d,2),p=h[0],f=h[1],O=Object(o.useState)(""),v=Object(g.a)(O,2),w=v[0],y=v[1],N=Object(o.useState)([]),k=Object(g.a)(N,2),C=k[0],A=k[1],I=Object(o.useState)(""),B=Object(g.a)(I,2),F=B[0],z=B[1],T=Object(o.useState)(""),R=Object(g.a)(T,2),P=R[0],L=R[1],J=function(){var e=Object(j.a)(m.a.mark((function e(){var t,n,a,o,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(x+"/profile",{headers:{Authorization:"Bearer ".concat(c)}});case 3:t=e.sent,n=t.data,a=n.userId,o=n.username,r=n.role,a?(f(a),u(o),L("Say something, "+o+"."),y(0==r?U:q)):console.log("GetProfile Error"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("There are something wrong about get profile :(");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(x+"/post",{headers:{Authorization:"Bearer ".concat(c)}});case 3:(t=e.sent).data?A(t.data):console.log("GetPost Error"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("There are something wrong about get post :(");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){J(),M()}),[]);var _=function(){var e=Object(j.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post(x+"/post",{message:F},{headers:{Authorization:"Bearer ".concat(c)}});case 3:t=e.sent,(n=t.data.message)?(console.log(n),z(""),M()):console.log("CreatePost Error"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("There are something wrong about create post :(");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:r.container,children:[Object(a.jsxs)("div",{className:r.navBar,children:[Object(a.jsxs)("div",{style:{marginRight:12},children:[l,","]}),Object(a.jsx)(S.a,{className:r.logoutButton,variant:"contained",color:"primary",onClick:function(){n(),t.push("/login")},children:"Log out"})]}),Object(a.jsxs)("div",{className:r.Contentcontainer,children:[Object(a.jsxs)("div",{className:r.post,children:[Object(a.jsx)("img",{className:r.img,src:E}),Object(a.jsx)(D.a,{className:r.textField,placeholder:P,multiline:!0,rowsMax:4,variant:"outlined",size:"small",value:F,onChange:function(e){return z(e.target.value)}})]}),Object(a.jsx)(S.a,{className:r.postButton,variant:"contained",color:"primary",onClick:function(){return _()},children:"Post"}),C.map((function(e){return Object(a.jsx)("div",{style:{marginBottom:12},children:Object(a.jsx)(K,{postId:e._id,content:e.message,authorId:e.userId,authorName:e.username,timestamp:e.timestamp,isEdited:e.isEdited,comments:e.comments,userId:p,userRole:w,getAllPosts:M},e._id)})}))]})]})})),V=Object(u.a)({palette:{primary:{main:"#353736"},secondary:{main:"#E9EBE6"}}}),X=function(){return Object(a.jsx)(d.a,{theme:V,children:Object(a.jsx)(i.a,{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/login",exact:!0,children:Object(a.jsx)(I,{handleLogin:function(e){return t=e,void localStorage.setItem("token",JSON.stringify(t));var t}})}),JSON.parse(localStorage.getItem("token"))&&Object(a.jsx)(l.b,{path:"/home",exact:!0,children:Object(a.jsx)(Q,{handleLogout:function(){localStorage.removeItem("token")}})}),JSON.parse(localStorage.getItem("token"))?Object(a.jsx)(l.a,{to:"/home"}):Object(a.jsx)(l.a,{to:"/login"})]})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,160)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(X,{})}),document.getElementById("root")),Y()},86:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.78cdce71.chunk.js.map