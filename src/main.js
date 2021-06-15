let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我是小张
 * 我给您展示一下我的前端功底
 * 我准备做一个八卦图
 * 首先，我要准备一个div
**/
#TaiChi {
    border: 1px solid red;
}
/* 接下来，我要把它变成一个圆
**/
#TaiChi {
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦一阴一阳，一黑一白
**/
#TaiChi {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/* 阴阳化鱼
**/
#TaiChi::before {
    background:#000;
    border-radius:50%;
}
#TaiChi::after {
    background:#fff;
    border-radius:50%;
}
/* 画鱼点睛
**/
#TaiChi::before {
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#TaiChi::after {
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
/* 大功告成
**/
`;
let n = 0;

let step = () => {
  setTimeout(() => {
    style.innerHTML += string[n];
    if (string[n] === "\n") {
      html.innerHTML += "<br>";
    } else if (string[n] === " ") {
      html.innerHTML += "&nbsp";
    } else {
      html.innerHTML += string[n];
    }
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    n += 1;
    if (n < string.length) {
      step();
    }
  }, 50);
};

step();
