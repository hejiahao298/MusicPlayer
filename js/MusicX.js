// 1.获取li的index()；
// 2.更换背景图片；
// 2.1更换横幅上的图片；
// 3.更换播放器图片，文本；
// 4.更换播放器按钮及title
// 5.图片旋转；
// 6.歌曲播放
// 7.暂停，播放，上一首，下一首
// 8.播放器的隐藏
// 9.播放列表隐藏

var index = 0;
var li = $(".lieb .l_title ul li"); //获取所有li元素
var himg = $(".banner .b_img img"); //获取横幅上的图片
var img = $(".music .m_img img"); //获取播放器img元素
var text = $(".music .m_text"); //获取播放器text元素
var prev = $(".music .m_btn .m_prev"); //获取上一首
var play = $(".music .m_btn .m_play"); //播放
var next = $(".music .m_btn .m_next"); //获取下一首
var mp3 = $(".music .m_mp3"); //获取mp3
var flag = false; //歌曲是否播放
var close = true; //播放器是否隐藏
var lie = true;

li.click(function(){
	index=$(this).index();
	
	show();
})

function show(){
	change_bg(index+1);
	change_he_img(index+1);
	change_img_text(index+1);
	change_btn_title();
	img_rotate();
	playmp3();
}

// 更换背景图片
function change_bg(idx){
	$("body").css({
		"background":"url(img/" + idx + "_bg.jpg) no-repeat",
		"background-size": "cover"
	})
}

//更换横幅上的图片
function change_he_img(idx){
	himg.attr("src","img/" + idx + ".jpg");
}

//更换播放器图片和文本
function change_img_text(idx){
	img.attr("src","img/" + idx + ".jpg");
	text.html(li.eq(index).text());
}

// 更换按钮和title
function change_btn_title(){
	play.removeClass("m_play");
	play.addClass("m_pause");
	play.attr("title","暂停");
}

//图片旋转
function img_rotate(){
	himg.addClass("img_rotate");
}

//播放音乐
function playmp3(){
	mp3.attr("src",li.eq(index).attr("datasrc"));
	mp3.get(0).play(); //播放歌曲
	flag = true;
}

//点击播放和暂停
play.click( function(){
	if(flag){
		mp3.get(0).pause();
		himg.removeClass("img_rotate");
		play.removeClass("m_pause").addClass("m_play").attr("title","播放");
		flag = false;
	}else{
		mp3.get(0).play();
		himg.addClass("img_rotate");
		play.removeClass("m_play").addClass("m_pause").attr("title","暂停");
		flag = true;
		change_bg(index+1);
	}
} );

//点击上一首
prev.click( function(){
	index--;
	if(0>index){
		index = li.length-1;
	}
	show();
} );

//点击下一首
next.click( function(){
	index++;
	if(li.length-1<index){
		index=0;
	}
	show();
} );

//播放器的缩放
$(".m_close").click(function(){
	if(close){
		$(this).addClass("m_open");
		$(".music").animate({"left":"-480px"},500);
		close=false;
	}else{
		$(this).removeClass("m_open").addClass("m_close");
		$(".music").animate({"left":"0px"},500);
		close=true;
	}
} )

//列表的缩放
$(".l_close").click(function(){
	if(lie){
		// $(this).addClass("l_open");
		$(".lieb").animate({"right":"-247px"},500);
		lie=false;
	}else{
		// $(this).removeClass("l_open").addClass("l_close");
		$(".lieb").animate({"right":"0px"},500);
		lie=true;
	}
} )



