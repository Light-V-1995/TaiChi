!function(){let n=document.querySelector("#html"),r=document.querySelector("#style"),a="/* 你好，我是小张\n * 我给您展示一下我的前端功底\n * 我准备做一个八卦图\n * 首先，我要准备一个div\n**/\n#TaiChi {\n    border: 1px solid red;\n}\n/* 接下来，我要把它变成一个圆\n**/\n#TaiChi {\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/* 八卦一阴一阳，一黑一白\n**/\n#TaiChi {\n    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);\n}\n/* 阴阳化鱼\n**/\n#TaiChi::before {\n    background:#000;\n    border-radius:50%;\n}\n#TaiChi::after {\n    background:#fff;\n    border-radius:50%;\n}\n/* 画鱼点睛\n**/\n#TaiChi::before {\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);\n}\n#TaiChi::after {\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);\n}\n/* 大功告成\n**/\n",e=0,i=()=>{setTimeout((()=>{r.innerHTML+=a[e],n.innerHTML+="\n"===a[e]?"<br>":" "===a[e]?"&nbsp":a[e],window.scrollTo(0,99999),n.scrollTo(0,99999),e+=1,e<a.length&&i()}),50)};i()}();
//# sourceMappingURL=index.b2e748cf.js.map