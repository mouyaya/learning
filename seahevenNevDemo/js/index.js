/*封装获取滚动条高度的函数*/
function getScroll() {
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}

/*=================滚动移动导航栏===================*/
/*获取导航栏对象*/
var navObj = document.getElementById("moveFixedNav");

/*获取上面装视频的div的高度,并获取高度*/
var videoAndLogoObj = document.getElementsByClassName("videoAndLogo")[0];
var videoObj = videoAndLogoObj.offsetHeight;//获取的高度

/*获取内容4中要移动的盒子*/
var moveBoxObj = document.getElementById("moveBox");

/*获取导航栏中的主菜单li*/
var liObj = navObj.getElementsByTagName("li");

/*获取固定导航*/
var fixedNav = document.getElementsByClassName("fixedNav")[0];

/*获取移动的ul*/
var mUl = document.getElementById("moveFixedNav");

/*滚动条事件*/
window.onscroll = function () {
    getScroll().top = zhuangTai;
    if (getScroll().top >= videoObj) {
        mUl.style.left = "-100%";
        mUl.style.transition = "all .5s";
        fixedNav.style.left = "0%";
        fixedNav.style.transition = "all .5s";
        fixedNav.className = "fixedNav fixedRNav";
        mUl.className = "clearfix fixedUl";

    } else {
        mUl.style.left = "0%";
        mUl.style.transition = "all .5s";
        fixedNav.style.left = "100%";
        fixedNav.style.transition = "all .5s";
        fixedNav.className = "fixedNav";
        mUl.className = "clearfix";
        noneLiObj.style.display = "none";
        liOneObj.style.display = "block";

        /*给主菜单注册鼠标移入向上显示*/
        for (var i = 0; i < liObj.length; i++) {
            liObj[i].onmouseover = function () {
                var a = this.getElementsByTagName("dl")[0];
                var b = a.getElementsByTagName("dd");
                for (var j = 0; j < liObj.length; j++) {
                    liObj[j].style.overflow = "hidden";
                }
                this.style.overflow = "visible";
                a.style.bottom = "100%";
                a.style.transformOrigin = "25% center";
                a.style.transform = "rotate(180deg)";
                for (var k = 0; k < b.length; k++) {
                    b[k].style.transform = "rotate(180deg)";
                }
            };
            liObj[i].onmouseout = function () {
                this.style.overflow = "hidden";
            }
        }
        var zhuangTai = getScroll().top;
    }

    /*=========盒子移动=========*/
    if (getScroll().top >= 2100) {
        moveBoxObj.style.bottom = "-60px";
        moveBoxObj.style.transition = "all 2s";
    } else {
        moveBoxObj.style.bottom = "20px";
    }

};

/*===============移动导航栏 点击 右移动===============*/
/*获取导航栏点击按钮*/
var navBtnObj = document.getElementById("elongation");
/*获取隐藏的li*/
var noneLiObj = document.getElementsByClassName("noneLi")[0];
/*获取第一个li*/
var liOneObj = document.getElementsByClassName("liOne")[0];
/*导航栏点击按钮注册点击事件*/
navBtnObj.onclick = function () {
    mUl.style.left = "0%";
    fixedNav.style.left = "100%";
    mUl.style.boxShadow = "0 0 1px 0 #ccc";
    noneLiObj.style.display = "block";
    liOneObj.style.display = "none";

    /*菜单下拉事件*/
    for (var i = 0; i < liObj.length; i++) {
        liObj[i].onmouseover = function () {
            var a = this.getElementsByTagName("dl")[0];
            var b = a.getElementsByTagName("dd");
            a.style.bottom = "";
            a.style.transform = "";
            for (var k = 0; k < b.length; k++) {
                b[k].style.transform = "";
            }
            for (var j = 0; j < liObj.length; j++) {
                liObj[j].style.overflow = "hidden";
            }
            this.style.overflow = "visible";
        };
        liObj[i].onmouseout = function () {
            this.style.overflow = "hidden";
        };
    }
};

/*====================点击出现日历========================*/
/*获取input*/
var inputs=document.getElementById("formOne").getElementsByTagName("input");
/*获取日历表*/
var dates=document.getElementsByClassName("dateList");
for (var i=0;i<inputs.length;i++){
    inputs[i].setAttribute("index",i);
    inputs[i].onclick=function () {
        for (var j=0;j<dates.length;j++){
            dates[j].style.display="none";
        }
        var num=this.getAttribute("index");
        dates[num].style.display="block";
    }
    inputs[i].onblur=function () {
        for (var j=0;j<dates.length;j++){
            dates[j].style.display="none";
        }
    }
}


/*====================第一个轮播图========================*/

/*小圆点按钮轮播*/

/*获取装图片移动的盒子*/
var imgBoxObj = document.getElementsByClassName("imgBox")[0];

/*获取ol中的li*/
var olLiObj = document.getElementsByClassName("section1Right")[0].getElementsByTagName("li");
console.log(olLiObj)

/*获取图片的父盒子*/
var imgPraBox = document.getElementsByClassName("imgBoxShadow");
console.log(imgPraBox)

/*获取图片的父盒子的宽度*/
var imgPraBoxWidth = imgPraBox[0].offsetWidth;

// /*遍历所有的图片的父盒子*/
// for (var i=0;i<imgPraBox.length;i++){
//     console.log(imgPraBox[i]);
// }

for (var i = 0; i < olLiObj.length; i++) {
    olLiObj[i].setAttribute("index", i);
    olLiObj[i].onclick = function () {
        for (var j = 0; j < olLiObj.length; j++) {
            olLiObj[j].className = "";
        }
        this.className = "write";
        this.style.transition = "all .3s";
        var index = this.getAttribute("index");
        imgBoxObj.style.marginLeft = -index * imgPraBoxWidth + "px";
        imgBoxObj.style.transition = "all .5s";
    }
}

/*获取右边按钮*/
var btnRightObj = document.getElementsByClassName("btnRight")[0];

// 右边按钮绑定事件
var pic = 0;
btnRightObj.onclick = moveImg;

function moveImg() {
    if (pic == imgPraBox.length - 1) {
        pic = 0;
        imgBoxObj.style.marginLeft = 0 + "px";
    }
    pic++;
    console.log(pic)
    imgBoxObj.style.marginLeft = -pic * 715 + "px";
    imgBoxObj.style.transition = "all .3s";
    // 小按钮颜色跟随
    //如果pic的值等于3了，用户看到的图片是第一张  ，实际上是第五张，这个时候就将第四个按钮的颜色去掉，让第一个按钮给上颜色
    if (pic == imgPraBox.length - 1) {
        pic = 0;
    }
    for (var i = 0; i < olLiObj.length; i++) {
        olLiObj[i].removeAttribute("class");
    }
    olLiObj[pic].className = "write";
};
/*给右边按钮定时*/
var timeId = setInterval(moveImg, 4000);
var section1Right = document.getElementsByClassName("section1Right")[0];
section1Right.onmouseover = function () {
    clearInterval(timeId);
}
section1Right.onmouseout = function () {
    timeId = setInterval(moveImg, 4000);
}


/*获取左边按钮*/
var btnLeftObj = document.getElementsByClassName("btnLeft")[0];
btnLeftObj.onclick = moveImgLeft;

function moveImgLeft() {
    console.log(pic)
    if (pic==0){
        pic=imgPraBox.length - 1;
        imgBoxObj.style.marginLeft = -pic * 715 + "px";
    }
    pic--;
    imgBoxObj.style.marginLeft = -pic * 715 + "px";
    imgBoxObj.style.transition = "all .3s";

    for (var i = 0; i < olLiObj.length; i++) {
        olLiObj[i].removeAttribute("class");
    }
    olLiObj[pic].className = "write";
}




/*======================最下面的图片切换======================*/
/*获取3个button按钮*/
var section5Left = document.getElementsByClassName("section5Left")[0];

var btnObjS = section5Left.getElementsByTagName("button");

/*获取li*/
var liObjS = section5Left.getElementsByTagName("li");

for (var i = 0; i < btnObjS.length; i++) {
    /*获取下标*/
    btnObjS[i].setAttribute("index", i);
    btnObjS[i].onclick = function () {
        for (var j = 0; j < btnObjS.length; j++) {
            btnObjS[j].className = "";
        }
        this.className = "bgcW";
        for (var j = 0; j < liObjS.length; j++) {
            liObjS[j].className = "";
        }
        var num = this.getAttribute("index");
        liObjS[num].className = "imgBlock";
    }
}



