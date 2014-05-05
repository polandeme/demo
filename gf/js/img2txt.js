
var cv = document.getElementById('cv');
var c = cv.getContext('2d');
var txtDiv = document.getElementById('txt');
var fileBtn = document.getElementById("up-button");
var img = new Image();
var timer ;
img.src = 'psu.jpg';
img.onload = init; // 图片加载完开始转换
//fileBtn.onchange = getImg;

// 根据灰度生成相应字符
function toText(g) {
    if (g <= 30) {
        return '8';
    } else if (g > 30 && g <= 60) {
        return '&';
    } else if (g > 60 && g <= 120) {
        return '$';
    }  else if (g > 120 && g <= 150) {
        return '*';
    } else if (g > 150 && g <= 180) {
        return 'o';
    } else if (g > 180 && g <= 210) {
        return '!';
    } else if (g > 210 && g <= 240) {
        return ';';
    }  else {
        return '.';
    }
}
	cv.style.display = "none";

// 根据rgb值计算灰度
function getGray(r, g, b) {
    return 0.299 * r + 0.578 * g + 0.114 * b;
}
             
var words = ['.........................................',
             '.........................................',
             '.........................................',
            'o_o....TO...MY...dear..TianTian...........',
             '.........................................',
             '...I..carry..your..heart..with..me.......',
             '.........................................',
             '...I..carry..it..in..my..heart...........',
             '.........................................',
             '...I..am..never..without..it.............',
             '.........................................',
             '...anywhere..I..go..you..go..my..dear....',
             '.........................................',
             '...and..whatever..is..done..by..only.....',
             '.........................................',
             '...me..is..your..doing....my..darling....',
             '.........................................',
             '...I..fear..no..fate.....................',
             '.........................................',
             '...for..you..are..my..fate..my..sweet....',
             '.........................................',
             '...I..want..no..world..for..beautiful....',
             '.........................................',
             '...you..are..my..world..my..true.........',
             '.........................................',
             '...and..it’s..you..are..whatever.........',
             '.........................................',
             '...a..moon..has..always..meant...........',
             '.........................................',
             '...and..whatever..a..sun..will...........',
             '.........................................',
             '...always..sing..is..you.................',
             '.........................................',
             '...here..is..the..deepest..secret........',
             '.........................................',
             '...nobody..knows.........................',
             '.........................................',
             '...here..is..the..root..of..the..root....',
             '.........................................',
             '...and...the...bud...of...the...bud......',
             '.........................................',
             '...and..the..sky..of..the..sky...........',
             '.........................................',
             '...and..the..sky..of..the..sky...........',
             '.........................................',
             '...which..grows..higher..than..the.......',
             '.........................................',
             '...soul..can.hope.or.mind..can..hide.....',
             '.........................................',
             '...and..this..is..the..wonder............',
             '.........................................',
             '...that.is..keeping..the.stars..apart....',
             '.........................................',
             '...I..carry..your..heart.................',
             '.........................................',
             '.........................................',
             '.........................................',
             '...LOVE...YOU...FOREVER..................',
             '.........................................',
             '.........................................',
             '.........................................',
             '.........................................',
             '.........................................',
             '.........................................',
             '.........................................',
             '.........................................',
             '..........................................'];

// 转换
function init() {
    txtDiv.style.width = img.width + 'px';
    cv.width = img.width;
    cv.height = img.height;
    c.drawImage(img, 0, 0);
    var imgData = c.getImageData(0, 0, img.width, img.height);
    var imgDataArr = imgData.data;
    var imgDataWidth = imgData.width;
    var imgDataHeight = imgData.height;
    var wordsBox = document.getElementById('wordsBox');
	var set = ['o'];

    for (h = 0, j = 0; j < 66 , h < imgDataHeight; j++ , h += 12) {
        var p = [];
        for(var x = 0; x < 41; x++) {
        	set.push(words[j][x]);
        }
        for (w = 0; w < imgDataWidth; w += 6) {
            var index = (w + imgDataWidth * h) * 4;
            var r = imgDataArr[index + 0];
            var g = imgDataArr[index + 1];
            var b = imgDataArr[index + 2];
            var gray = getGray(r, g, b);
            p = toText(gray);
	    	set.push(p);
        }
        set.push('o');
    }

var i=1;
(function() {
	var timer = setInterval(function(){
        if(i === set.length - 1) {
            // console.log(set.length);
            cv.style.cssFlaot = "right"
            cv.style.display="block";
            clearInterval(timer);
        } else {
            if (i%132 !== 0) {
                txtDiv.innerHTML += set[i];
            } else {
                txtDiv.innerHTML += '<br />';
            } 
        }
        i++;
	},10);
}());











// (function() {
//     var timer = setInterval(function(){
//         if(set[i] == 'undefine') {
//             console.log(set.length);
//             console.log("over");
//             clearInterval(timer);
//         } else {
//             if (i%132 !== 0) {
//                 txtDiv.innerHTML += set[i];
//             } else {
//                 txtDiv.innerHTML += '<br />';
//             } 
//             console.log(set[i]);
//         }
//         i++;
//     },10);
// }());




        // inter();
	// } else {
    // cv.style.display="block";

	// }
	// console.log(window.i);
	// cv.style.display="block";
}
// oooooooooooooooooo*o$$&&&$!!!!;!;;!!$$$**$***ooooooooooooooooooooooooooooooooooooooooooooo
// oooooooooooooooooo*o$$&&&$!!!!;!;;!!$$$**$***ooooooooooooooooooooooooooooooooooooooooooooo




// oooooooooooooooooo*o$$&&&$!!!!;!;;!!$$$**$***ooooooooooooooooooooooooooooooooooooooooooooo
// ooooooooooo!ooo***$$$$&;;!;;;;; !&$o!!!!!&#&&&&$**oooooooooooooooooooooooooooooooooooooooo
// ooooooooooooooo*$&&&&;!;!!!;;;;!!!!!!;!!!&&#&&&###&&$ooooooooooooooooooooooooooooooooooooo
// oooooooooooooo*$$o!!!!!!!!!!;!;;!!;!!!!$!!!!&&#&#&&###*ooooooooooooooooooooooooooooooooooo
// oooooooooo!!!;;;;;!!!!!!!!!!!;;;!!o*o!!;;!!o$$$$&&&#####$ooooooooooooooooooooooooooooooooo
// oooooo!;;;;;!;;;!!!!!!!;;;;;!;;;;!!;;!!!!!*$$$&&&&&######*oooooooooooooooooooooooooooooooo
// oooo;;;;;!!!!!!!!!!!!;;!!!;;;;;;;;;;o&&&$$$$$$$$&$$$&&&###*ooooooooooooooooooooooooooooooo
// oo;;!!;!!!!!!!!!!!ooo;!!!!;;;;;;;;;;;;;;;;!!!ooo**$$*$$&##&&oooooooooooooooooooooooooooooo
// o!!!!!!!!!!!!!oooooo*!!;;;;;;;;;;!;;!;;;;!!!!!!!!!!!!o$$&&#ooooooooooooooooooooooooooooooo
// oo!!!!!!!!!oooooo$###!!;;;;;$#&#&$$oo!!!!!!!ooooooo!!!!o$&&&!*oooooooooooooooooooooooooooo
// oo!!!oooooooooo**####*;;;;&&&&&&&$oo!!!!!!!!o*o!!!!!!!!!o*$*o*oooooooooooooooooooooooooooo
// oooooooooo**o**ooo$##!;;;!&&&&&#$*o!!!!!!!oo!!!!!!!!!!!!!o*!o!!ooooooooooooooooooooooooooo
// oooooooooooo!!!!!oo$#!;;!!&$&&&#$o!!!!!!!!!!!$&&o!!!!!!!!!**!!oooooooooooooooooooooooooooo
// oooooooo!!!!!!!!!!!o$!!!!&&#&&&&$o!ooo!!!!;!ooo!!!!!!;;!!!!*o!oooooooooooooooooooooooooooo
// oooooooooo!!!!!!!!!!o!!!!#&&&$&&$o!!;!!oo!!!!!!!!!!;!;;;!!!!oooooooooooooooooooooooooooooo
// oooooooooooo!!!!!!!!!o!!&#&&&&&&&oo*!$!ooo!!!!!!!!;;;;;;;!!!!ooooooooooooooooooooooooooooo
// ooooooooooooo!!!!!!!!!o*$$&&#&&&#*oo!!!!!oo!!!!!!!!!!;;;;!!!!**oooooooooooooooooooooooo**o
// ooooooooooooooo!!!!!!!!o*$$$$$$&&&oo!!!!!!!!;;o!!;!!!!;;!;;!!$*ooooooooooooo*ooo*********o
// ooooooooooooooooo!!!!!!!ooo****$&$$oo!!!!!!oo!!!!!;!!o!;;!!!oo*oooooooooooooo************o
// ooooooooooooooooooo!!!!!!ooooooo**$$$o!!!!!oo!!!!;;$!!;!!!;!!o*oooooooooooo***************
// ooooooooooooooooooooo!!!!!!!!oo!!o**$$ooo!!o**!;!o!!!;;!;;!!!!ooooooooo*******************
// ooooooooooooooooooooooo!!!!!!o!!!!oo**$$ooo!!ooo!!!!!;!!!;!!!!oooooooooo******************
// oooooooooooooooooooooooooo!!!!o!!!!oo*$$o$**ooo!!!!!!!!;;;!!!!ooooooooooooo***************
// oooooooooooooooooooooooooo*o!!o!;!!!o*ooo****oooo!!!!!;;;!!!!!!oooooooooooooooo***********
// ooooooooooooooooooooooooooooooo!;;;!!!!!oo***oooooo!!;;;;!!!!!!o!!!oooooooooooo***********
// ooooooooooooooooooooooooooo!o!!;;;!;!!!!!oooooo!!!!!;;;;!!!!!!!!!!!!!!oooooooooo**********
// ooooooooooooooooooooooooooo!!!!; ;;o!!!!!!!ooo!!!!!!;;;!;!!!o!!!!!!;!;;!ooooooooooo******o
// oooooooooooooooooooooooooooo!     ;;;!!!!!!!oo!!!!;;;;;!o!!!!;;!;!!;;;;!;!ooooooooooo****o
// ooooooooooooooooooooooooooo;          ;oo!!!o!!;!;!;;!!!!!;!oo*;;;!!!!;o!oo!ooooo***o*****
// oooooooooooooooooooooooooo!      !!!!!!;oooo!!o;;;;!!;;;;!oo!;!!!!!!!!o!!!!!!!!o**********
// oooooooooooooooooooooooooo;       !!!!;;;;;;!;;;;!!!!!!!!;;;!!!!!!;!o!!!!!!!!!!!!o********
// oooooooooooooooooooooooooo           o!!!!;;;;;;!!!!!!!!!;;;;;;!;!!o!!!!!!!!!!!!!o********
// ooooooooooooooooooooooooo                 o!!;!!!!!!;;!!!!;;;;!!!!!!!!!!!!!!!!!!!o********
// oooooooooooooooooooooooo;                  !ooo!o!!;;;;;!!;;;;!!!oo*o!!!!!!!!!!!!o********
// oooooooooooooooooooooooo                     oo!!!!!!!!!!!!!!   !;o!!!!!!!!!!!!!o*********
// ooooooooooooooooooooooo ; ;;;                 o!!!!!!!!!o      ;o!!!!!!!!!!!!!!!**********
// ooooooooooooooooooooooo;  ;;                   !!ooo!!!!!     ;;!!o!!!!!!!!!!!!o**********
// oooooooooooooooooooooo; ;;;;;     ;;;          ;!!!!!!!!!  ;;!!!ooo!!!!!!!!!!!o***********
// ooooooooooooooooooooo; ;  ;;;;   ;;;;;          !!!!!!!!!!;!!o!!ooo!!!!!!!!!!o************
// oooooooooooooooooooo!  ;;; ;;;;;;;;;;;;         !!!!!!!!!!ooo!!!oooo!!!!!ooo**************
// ooooooooooooooooooooo! ;;;;;;;;;;;;;;;;;;  ;;;;;!!!!!!!!!!!o!!!!!!!!!!!oooo***************
// oooooooooooooooooooo&&&$;;;;;;;;     ;;;;;;;;;;;;!!!!!!!!!!!o!!oo!!!!oooo*****************
// oooooooooooooooooo$&$&&&#!;;;;;       ;;;;;;;;;;;!o!!!!!!!!!!oooooo!!ooo******************
// oooooooooooooooo;;$&&&&&&&&*;$$*!;;; ;;;;;;;;;;!!ooo!!!!!!!!!ooooo!oooo*******************
// ooooooooooooooo;; ;&&&&$&&&$$$$&*o!;;;;;;;;!!;!!!!oo!!!!!!!!!oooooooo*********************
// oooooooooooooo; ;;;;;&&$&&&$&$&$#$o;!&&&#&!!!!!!!!ooo!!!!!!!!!oooooo**********************
// oooooooooooo;;;;;; ;;;*&&$&&&&&#####&#####o!!!!;;;ooooo!!!!!!!ooooo***********************
// *o*o*ooooo!; ;;;  ;;; &&$&&&&#############$!!;;;;;;oooooooo!ooooo*************************
// *********;;     ;;;;;o#&$&&#####&&##########&&&&&&$!oooooooooooo**************************
// *******o;;   ;;;;;;;;&#$&####&#####&#########&&&#&###ooooooooooo**************************
// ******!;;;;;;;;;;;;;;&###&&$&&#$&############&&&&####&oooooooo****************************
// *****!;;;;;;;;;;;;;;;###&$$&&$$*#########&#&&&&#####&&$$**********************************
// ****!;;;;;;;;;;;;;;;;##&$$$&*oo#######&#!!!; ; ; ;o**!;;;;********************************
// ***!;;;;;;;;;;;;;;;;;&&$$&$oo!!#&&####&!!;;;  ;;;;   ;;;;;!*******************************
// *o;;;;;;;;;;;;;;;;;;  !$&!!!!!!$&$&&&&!!;;;   ;;!;  ;;;;;;!*******************************
// o;;;;;;;;;;;;;;;;;;; ;!;;;;;;;;;$&&&$!!;; ; ;;;;;;;;;;;;;;!*******************************
// ;;;;;;;;;;;;;;;;;;;;;!;;;;;;;;;;;o!!!;;;  ;;;;;!;; ;;;;;!;;*******************************
// ;;;;;;;;;;;;;;;;;;;;;!;;;;;;;;;;;;;;;;;;  ;;;;;!;;;;;;;;;;;*****************************$*
// ;;;;;;;;;;;;;;;;;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;!;;;;;;;!;;;;*****************************$*
// ;;;;;;!;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;!;;;;;;;;;!;;*********************$$$$$$$$$$
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;!;;;;;;;;;;;;;!;;;;;;;;;!;;o**********$$*$$$*$$$$$$$$$$$$*
// ;;;;;!;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;;!!;;;;;;;  ;;!;o****$$$$$$$$$$$$$$$$$$$$$$$$$$
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;!!;;;;;;  ;;;!;!***$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ;;;!;;;;;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;!;!;;;;;;;;;;;!!o***$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ;;;;;;; ;;;;;;;;; ;!!;;;;;;;;;;;!!;;;;;;;;;!!;;;;;;;;;;;;!!o*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// !;;;;;;;;;;;;;; ;;;;;;;;;;;;;;;;!;;;;;;;;;!!!;;;;;;;;;;;;!!o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ;;;;;;;;;  ;;;;;;;!!;;;;;;;; ;;;!;;;;;;;;;!!;;;;;;;;;;;;;!!*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



// oooooooooooooooooo*o$$&&&$!!!!;!;;!!$$$**$***ooooooooooooooooooooooooooooooooooooooooooooo
// ooooooooooo!ooo***$$$$&;;!;;;;;.!&$o!!!!!&8&&&&$**oooooooooooooooooooooooooooooooooooooooo
// ooooooooooooooo*$&&&&;!;!!!;;;;!!!!!!;!!!&&8&&&888&&$ooooooooooooooooooooooooooooooooooooo
// oooooooooooooo*$$o!!!!!!!!!!;!;;!!;!!!!$!!!!&&8&8&&888*ooooooooooooooooooooooooooooooooooo
// oooooooooo!!!;;;;;!!!!!!!!!!!;;;!!o*o!!;;!!o$$$$&&&88888$ooooooooooooooooooooooooooooooooo
// oooooo!;;;;;!;;;!!!!!!!;;;;;!;;;;!!;;!!!!!*$$$&&&&&888888*oooooooooooooooooooooooooooooooo
// oooo;;;;;!!!!!!!!!!!!;;!!!;;;;;;;;;;o&&&$$$$$$$$&$$$&&&888*ooooooooooooooooooooooooooooooo
// oo;;!!;!!!!!!!!!!!ooo;!!!!;;;;;;;;;;;;;;;;!!!ooo**$$*$$&88&&oooooooooooooooooooooooooooooo
// o!!!!!!!!!!!!!oooooo*!!;;;;;;;;;;!;;!;;;;!!!!!!!!!!!!o$$&&8ooooooooooooooooooooooooooooooo
// oo!!!!!!!!!oooooo$888!!;;;;;$8&8&$$oo!!!!!!!ooooooo!!!!o$&&&!*oooooooooooooooooooooooooooo
// oo!!!oooooooooo**8888*;;;;&&&&&&&$oo!!!!!!!!o*o!!!!!!!!!o*$*o*oooooooooooooooooooooooooooo
// oooooooooo**o**ooo$88!;;;!&&&&&8$*o!!!!!!!oo!!!!!!!!!!!!!o*!o!!ooooooooooooooooooooooooooo
// oooooooooooo!!!!!oo$8!;;!!&$&&&8$o!!!!!!!!!!!$&&o!!!!!!!!!**!!oooooooooooooooooooooooooooo
// oooooooo!!!!!!!!!!!o$!!!!&&8&&&&$o!ooo!!!!;!ooo!!!!!!;;!!!!*o!oooooooooooooooooooooooooooo
// oooooooooo!!!!!!!!!!o!!!!8&&&$&&$o!!;!!oo!!!!!!!!!!;!;;;!!!!oooooooooooooooooooooooooooooo
// oooooooooooo!!!!!!!!!o!!&8&&&&&&&oo*!$!ooo!!!!!!!!;;;;;;;!!!!ooooooooooooooooooooooooooooo
// ooooooooooooo!!!!!!!!!o*$$&&8&&&8*oo!!!!!oo!!!!!!!!!!;;;;!!!!**oooooooooooooooooooooooo**o
// ooooooooooooooo!!!!!!!!o*$$$$$$&&&oo!!!!!!!!;;o!!;!!!!;;!;;!!$*ooooooooooooo*ooo*********o
// ooooooooooooooooo!!!!!!!ooo****$&$$oo!!!!!!oo!!!!!;!!o!;;!!!oo*oooooooooooooo************o
// ooooooooooooooooooo!!!!!!ooooooo**$$$o!!!!!oo!!!!;;$!!;!!!;!!o*oooooooooooo***************
// ooooooooooooooooooooo!!!!!!!!oo!!o**$$ooo!!o**!;!o!!!;;!;;!!!!ooooooooo*******************
// ooooooooooooooooooooooo!!!!!!o!!!!oo**$$ooo!!ooo!!!!!;!!!;!!!!oooooooooo******************
// oooooooooooooooooooooooooo!!!!o!!!!oo*$$o$**ooo!!!!!!!!;;;!!!!ooooooooooooo***************
// oooooooooooooooooooooooooo*o!!o!;!!!o*ooo****oooo!!!!!;;;!!!!!!oooooooooooooooo***********
// ooooooooooooooooooooooooooooooo!;;;!!!!!oo***oooooo!!;;;;!!!!!!o!!!oooooooooooo***********
// ooooooooooooooooooooooooooo!o!!;;;!;!!!!!oooooo!!!!!;;;;!!!!!!!!!!!!!!oooooooooo**********
// ooooooooooooooooooooooooooo!!!!;.;;o!!!!!!!ooo!!!!!!;;;!;!!!o!!!!!!;!;;!ooooooooooo******o
// oooooooooooooooooooooooooooo!.....;;;!!!!!!!oo!!!!;;;;;!o!!!!;;!;!!;;;;!;!ooooooooooo****o
// ooooooooooooooooooooooooooo;..........;oo!!!o!!;!;!;;!!!!!;!oo*;;;!!!!;o!oo!ooooo***o*****
// oooooooooooooooooooooooooo!......!!!!!!;oooo!!o;;;;!!;;;;!oo!;!!!!!!!!o!!!!!!!!o**********
// oooooooooooooooooooooooooo;.......!!!!;;;;;;!;;;;!!!!!!!!;;;!!!!!!;!o!!!!!!!!!!!!o********
// oooooooooooooooooooooooooo...........o!!!!;;;;;;!!!!!!!!!;;;;;;!;!!o!!!!!!!!!!!!!o********
// ooooooooooooooooooooooooo.................o!!;!!!!!!;;!!!!;;;;!!!!!!!!!!!!!!!!!!!o********
// oooooooooooooooooooooooo;..................!ooo!o!!;;;;;!!;;;;!!!oo*o!!!!!!!!!!!!o********
// oooooooooooooooooooooooo.....................oo!!!!!!!!!!!!!!...!;o!!!!!!!!!!!!!o*********
// ooooooooooooooooooooooo.;.;;;.................o!!!!!!!!!o......;o!!!!!!!!!!!!!!!**********
// ooooooooooooooooooooooo;..;;...................!!ooo!!!!!.....;;!!o!!!!!!!!!!!!o**********
// oooooooooooooooooooooo;.;;;;;.....;;;..........;!!!!!!!!!..;;!!!ooo!!!!!!!!!!!o***********
// ooooooooooooooooooooo;.;..;;;;...;;;;;..........!!!!!!!!!!;!!o!!ooo!!!!!!!!!!o************
// oooooooooooooooooooo!..;;;.;;;;;;;;;;;;.........!!!!!!!!!!ooo!!!oooo!!!!!ooo**************
// ooooooooooooooooooooo!.;;;;;;;;;;;;;;;;;;..;;;;;!!!!!!!!!!!o!!!!!!!!!!!oooo***************
// oooooooooooooooooooo&&&$;;;;;;;;.....;;;;;;;;;;;;!!!!!!!!!!!o!!oo!!!!oooo*****************
// oooooooooooooooooo$&$&&&8!;;;;;.......;;;;;;;;;;;!o!!!!!!!!!!oooooo!!ooo******************
// oooooooooooooooo;;$&&&&&&&&*;$$*!;;;.;;;;;;;;;;!!ooo!!!!!!!!!ooooo!oooo*******************
// ooooooooooooooo;;.;&&&&$&&&$$$$&*o!;;;;;;;;!!;!!!!oo!!!!!!!!!oooooooo*********************
// oooooooooooooo;.;;;;;&&$&&&$&$&$8$o;!&&&8&!!!!!!!!ooo!!!!!!!!!oooooo**********************
// oooooooooooo;;;;;;.;;;*&&$&&&&&88888&88888o!!!!;;;ooooo!!!!!!!ooooo***********************
// *o*o*ooooo!;.;;;..;;;.&&$&&&&8888888888888$!!;;;;;;oooooooo!ooooo*************************
// *********;;.....;;;;;o8&$&&88888&&8888888888&&&&&&$!oooooooooooo**************************
// *******o;;...;;;;;;;;&8$&8888&88888&888888888&&&8&888ooooooooooo**************************
// ******!;;;;;;;;;;;;;;&888&&$&&8$&888888888888&&&&8888&oooooooo****************************
// *****!;;;;;;;;;;;;;;;888&$$&&$$*888888888&8&&&&88888&&$$**********************************
// ****!;;;;;;;;;;;;;;;;88&$$$&*oo8888888&8!!!;.;.;.;o**!;;;;********************************
// ***!;;;;;;;;;;;;;;;;;&&$$&$oo!!8&&8888&!!;;;..;;;;...;;;;;!*******************************
// *o;;;;;;;;;;;;;;;;;;..!$&!!!!!!$&$&&&&!!;;;...;;!;..;;;;;;!*******************************
// o;;;;;;;;;;;;;;;;;;;.;!;;;;;;;;;$&&&$!!;;.;.;;;;;;;;;;;;;;!*******************************
// ;;;;;;;;;;;;;;;;;;;;;!;;;;;;;;;;;o!!!;;;..;;;;;!;;.;;;;;!;;*******************************
// ;;;;;;;;;;;;;;;;;;;;;!;;;;;;;;;;;;;;;;;;..;;;;;!;;;;;;;;;;;*****************************$*
// ;;;;;;;;;;;;;;;;;;.;;;;;;;;;;;;;;;;;;;;;;;;;;;!;;;;;;;!;;;;*****************************$*
// ;;;;;;!;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;!;;;;;;;;;!;;*********************$$$$$$$$$$
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;!;;;;;;;;;;;;;!;;;;;;;;;!;;o**********$$*$$$*$$$$$$$$$$$$*
// ;;;;;!;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;.;;;!!;;;;;;;..;;!;o****$$$$$$$$$$$$$$$$$$$$$$$$$$
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;!!;;;;;;..;;;!;!***$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ;;;!;;;;;;.;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;!;!;;;;;;;;;;;!!o***$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ;;;;;;;.;;;;;;;;;.;!!;;;;;;;;;;;!!;;;;;;;;;!!;;;;;;;;;;;;!!o*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// !;;;;;;;;;;;;;;.;;;;;;;;;;;;;;;;!;;;;;;;;;!!!;;;;;;;;;;;;!!o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// !;;;;;;;;;;;;;;.;;;;;;;;;;;;;;;;!;;;;;;;;;!!!;;;;;;;;;;;;!!o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$