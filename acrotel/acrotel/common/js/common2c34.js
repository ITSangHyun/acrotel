

/***********************************
/ 이미지 사이즈에 맞게 새창띄우기
/***********************************/
function OpenImage(s){
 //
 // 변수 정의
 //

 srcImg = new Image();
 clientWidth = screen.width;
 clientHeight = screen.height;
 srcImg.src = s;
 //
 // 열려는 파일을 이름
 //
 var srcFileName = srcImg.src.substr(srcImg.src.lastIndexOf("/")+1, srcImg.src.length);
 //
 // 새창 띄우고 이미지 삽입
 //

 win = window.open("","","width=15,height=15,scrollbars=no,resizable=yes,left="+(clientWidth/2-15)+",top="+(clientHeight/2-15)+"");
 win.document.writeln("<html>");
 win.document.writeln("<head>");
 win.document.writeln("<title>"+document.title+" ["+srcFileName+"]</title>");
 win.document.writeln("</head>");
 win.document.writeln("<body style='margin:0px;' bgcolor='#ffffff'>");
 win.document.writeln("<table border='0' cellpadding='0' cellspacing='0' style='cursor:hand' onclick='self.close()'>");
 win.document.writeln(" <tr>");
 win.document.writeln("  <td align='center'><img src='"+s+"' name='winImg' style='cursor:hand' onclick='self.close()'></td>");
 win.document.writeln(" </tr>");
 win.document.writeln("</table>");
 win.document.writeln("</body>");
 win.document.writeln("</html>");
  
 srcImg = win.document.winImg;
 //
 // 이미지가 모두 로딩될때까지 기다림
 //
 while(true)
 if(srcImg.readyState == "complete")
 break;
 
 //
 // 새창의 크기 설정
 //
 var winWidth = srcImg.width+10;
 var winHeight = srcImg.height+52;
 //
 // 새창이 띄워질 위치 설정
 //
 var left = (clientWidth/2)-(srcImg.width/2);
 var top = (clientHeight/2)-(srcImg.height/2);
 //
 // 이미지의 크기 overflow 확인후 새창의 크기와 위치 재설정
 //
 if(clientWidth <= srcImg.width){
  winWidth = clientWidth;
  left = 0;
  win.document.body.scroll = "auto";
 }
 if(clientHeight <= srcImg.height){
  winHeight = clientHeight-30;
  top = 0;
  win.document.body.scroll = "auto";
 }
 //
 // 이미지로딩이 끝났음으로 이미지의 크기를 사용할수 있다.
 // 해당 이미지의 사이즈에 맞게 윈도우를 재설정한다.
 win.moveTo(left, top);
 win.resizeTo(winWidth, winHeight);
}
//-->

// Trim 함수 ##################################################
// Ex) str = "    테 스트   ".trim(); => str = "테 스트";
String.prototype.trim = function() {
	return this.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g,'');
}

// 문자열 공백제거 함수 ##################################################
// Ex) str = "    테 스   트   ".stripspace(); => str = "테스트";
String.prototype.stripspace = function() {
	return this.replace(/ /g, '');
}

// 전체 문자열 바꾸기 함수 ##################################################
// Ex) str = "a테스트bcd테스트efg".replaceAll("테스트", ""); => str = "abcdefg";
String.prototype.replaceAll = function(a, b) {
	var s = this;
	if (navigator.userAgent.toLowerCase().indexOf("msie") != -1)
		return s.replace(new RegExp(a, 'gi'), b);
	else
		return s.split(a).join(b);
}

// 아이프레임 삽입 ##########################################################
function inputIFrame(parent ,obj){
	if (parent == ""){parent = body}
	$(parent).prepend('<iframe name="'+obj+'" id="'+obj+'" style="width:0; height:0; display:none;"></iframe>'); 
}
function outputIFrame(obj){$('#'+obj).remove();}

// 공백 확인 ##################################################
function checkEmpty(obj) {
	if (obj.value.stripspace() == "") {
		return true;
	}
	else {
		return false;
	}
}


// 이벤트 추가 ##################################################
function addEvent(obj, type, listener) {
	if (window.addEventListener) obj.addEventListener(type, listener, false);
	else obj.attachEvent('on'+type, listener);
}


// 팝업 ##################################################
function openPopup(theURL, winName, width, height, remFeatures) {
	var features = "";
	if (typeof winName == "undefined") winName = "";
	if (typeof width != "undefined") features += ((features) ? "," : "")+"width="+width;
	if (typeof height != "undefined") features += ((features) ? "," : "")+"height="+height;
	if (typeof remFeatures != "undefined") features += ((features) ? "," : "")+remFeatures;
	if (features.indexOf("status") < 0) features += ",status=yes";

	popup = window.open(theURL, winName, features);
	popup.focus();

	return popup;
}

// 팝업 - 팝업창 화면중앙 오픈 ##################################################
function openPopupCenter(theURL, winName, width, height, remFeatures) {
	var left = (screen.width/2) - (width/2);
	var top = (screen.availHeight/2) - (height/2);
	var features = "left="+left+",top="+top+",width="+width+",height="+height;
	if (typeof winName == "undefined") winName = "";
	if (typeof remFeatures != "undefined") features += ","+remFeatures;
	if (features.indexOf("status") < 0) features += ",status=yes";

	var popup = window.open(theURL, winName, features);
	popup.focus();

	return popup;
}

// 팝업 - 팝업창 사이즈 조정 ##################################################
function resizePopupWindow(width, height) {
	var userAgent = navigator.userAgent.toLowerCase();
	var isMSIE = (userAgent.indexOf('msie') != -1);
	var agentVer = 0;
	if (isMSIE) {
		var pos_msie = userAgent.indexOf('msie ');
		agentVer = parseInt(userAgent.substring(pos_msie+5, userAgent.indexOf(".", pos_msie)), 10);
	}
	var isMoz = (userAgent.indexOf('gecko') != -1);
	var isChrome = (userAgent.indexOf('chrome') != -1);

	var resizeWidth = width + 10;
	var resizeHeight = height + ((isMSIE && agentVer>6) ? 71 : (isMoz ? (isChrome ? 55 : 81) : 49));

	window.resizeTo(resizeWidth, resizeHeight);

	if (!isChrome) {
		var lastHeight = resizeHeight - (parseInt(document.body.clientHeight, 10) - height);
		if (resizeHeight != lastHeight) { window.resizeTo(resizeWidth, lastHeight); }
	}
}

// 팝업 - 팝업창 위치 조정 ##################################################
function movePopupWindow(left, top) {
	window.moveTo(left, top);
}


// 아이디 확인 ##################################################
function checkID(value, min, max) {
	var RegExp = /^[a-zA-Z0-9_]*$/i;
	var returnVal = RegExp.test(value) ? true : false;
	if (typeof(min) != "undefined" && value.length < min) returnVal = false;
	if (typeof(max) != "undefined" && value.length > max) returnVal = false;
	return returnVal;
}

// 비밀번호 확인 ##################################################
function checkPass(value, min, max) {
	var RegExp = /([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/;
	//var returnVal = RegExp.test(value) ? true : false;
	var returnVal = value;
	if (typeof(min) != "undefined" && value.length < min) returnVal = false;
	if (typeof(max) != "undefined" && value.length > max) returnVal = false;
	return returnVal;
}

// 영문/숫자 혼용 확인 ##################################################
function checkEngNum(str) {
	var RegExpE = /[a-zA-Z]/i;
	var RegExpN = /[0-9]/;

	return (RegExpE.test(str) && RegExpN.test(str)) ? true : false;
}


// 셀렉트된 값 ##################################################
function getSelectedValue(selectBox)
{
        var selectedIndex = selectBox.options.selectedIndex;

        return selectBox.options[selectedIndex].value;
}


/**
 * 파라미터가 숫자인지 검사
 * @param 
 * @return
 * @throws Exception
 */
function isNumerics(str) {
  var checkStr = str.value;
  var checkOK = "0123456789";
  var isnumeric = false;
  for (i = 0;  i < checkStr.length;  i++) {
     ch = checkStr.charAt(i);
     isnumeric = false;
     for (j = 0;  j < checkOK.length;  j++)
     {
       if (ch == checkOK.charAt(j))
       {
           isnumeric = true;
       }
     }
     if ( isnumeric == false )
         return false;
  }
  return true;
}


/**
 * 파라미터에서 숫자만 입력
 * @param 
 * @return
 * @throws Exception
 */
function isNumchk(str) {
  var checkStr = str.value;
  var checkOK = "0123456789";
  var isnumeric = false;
  for (i = 0;  i < checkStr.length;  i++) {
     ch = checkStr.charAt(i);
     isnumeric = false;
     for (j = 0;  j < checkOK.length;  j++)
     {
       if (ch == checkOK.charAt(j)){isnumeric = true;}
     }     
  }
  if ( isnumeric == false ){
        //alert("숫자만 입력 가능합니다.");
		str.value = "";
	 }
}

/**
 * INPUT박스 자동이동
 * @param 현위치INPUT, 목적지INPUT
 * @return
 * @throws Exception
 * @example checkPolicy(chkbox1, chkbox2, chkbox3,...);
 */
function autotab(original, destination) {
	if (original.getAttribute && original.value.length == original.getAttribute("maxlength"))
	destination.focus()
}

/**
	 *  알파벳을 소문자로 변경
	 * @param
	 * @return
	 * @throws Exception
	 */
	function fnLowerCase(p_input_tag){
	    p_input_tag.value = p_input_tag.value.toLowerCase();
	}
	

/*이미지 onerror처리*/
function imgOnerror(obj){
	if(obj != null && obj.length > 0)
		{
			$(obj).each(function(){
				if(navigator.userAgent.indexOf("MSIE ")>-1){
					if(!this.complete){ this.src= "/images/common/noimg.gif";}
				}
				else
				{
					this.onerror = function(e) {this.src = "/images/common/noimg.gif";}
				}
			});
		}
	}
	

/*체크확인*/
function checkedTF(obj, cnt){
	var i = 0;
	var chk = 0;
	var val = "";
	var objLength;
	objLength	=	obj.length;
	if (isNaN(obj.length)) {
		if(obj.checked == true){chk += 1; val += obj.value;}
	}else{
		for(i=0; i<objLength; i++){if(obj[i].checked == true){chk += 1; val += obj[i].value;}}
	}
	if(chk == 0) return chk;
	else{
		if (cnt != null){
			if (chk < cnt) return false;
			else return true;
			}
		else{
			if(val == "") return false;
			else return true;
			}
		}
	}	
	
// Select Option 추가 ##################################################
function selectAddList(obj, text, value) {
	var newOpt = document.createElement("OPTION");
	newOpt.text = text;
	newOpt.value = value;
	obj.options.add(newOpt);
}

// Select Option 전체삭제 ##################################################
function selectRemoveAll(obj) {
	for (var i=obj.length-1; i>=0; i--) {
		selectRemoveList(obj, i);
	}
}

// Select Option 삭제 ##################################################
function selectRemoveList(obj, i) {
	obj.remove(i);
}	

function divFilter(obj, name, chk, mwidth, classN){
	var	strAppVersion = navigator.appVersion;
	var inHtml = "";
	if(classN == undefined) { classN = "dobox";}
	//inHtml	=	'<div class="'+classN+'" id="'+name+'"></div>'
	inHtml	=	'<div class="'+classN+'" id="'+name+'"></div><div id="dobox2" style="display:block;"></div>'
	if (chk == "A"){
		var width = $(document).width();
		var height = $(document).height();
	}
	else{
		var width = $(obj).width();
		var height = $(obj).height();
	}
	$(obj).append(inHtml);
	$("#"+name).fadeIn("fast");
	//$("#"+name).css({"width":width}).css({"height":height});
	$("#"+name).css({"min-width":mwidth}).css({"height":height});
	/*
	$(window).bind("resize",function(event){
		//console.log(window.innerHeight);
		$("#"+name).css({"height":window.innerHeight});
   	});
	*/
	$("#"+name).bind({		
		click:function(e){
			if(!$('.'+classN).has(e.target).length ) _closeLayerEvent(this);
		}
		//touchstart: function(){_closeLayerEvent(this);}
	});
}
function _closeLayerEvent(obj){
	$(obj).remove();
	$("#dobox2").remove();
	
	//$(window).unbind("resize");	
}


function imgResize(obj, mode,isize){
	var restrict_length = isize;
	var img = new Image();
	img.src = $(obj).attr("src");
	var ratio = img.width / img.height;
	if((mode == 0 && img.width > img.height) || mode == 1) {
		if(img.width > restrict_length) {
			var newheight = Math.round(restrict_length / ratio);
			$(obj).attr({width:restrict_length, height:newheight});  
		}
	} else {
			if(img.height > restrict_length) {
			var newwidth = Math.round(restrict_length * ratio);
			$(obj).attr({width:newwidth, height:restrict_length});  
			}
		}
}

// 콤마(,) 제거 ##################################################
function stripComma(str) {
    var re = /,/g;
    return str.replace(re, "");
}

// 숫자 3자리수마다 콤마(,) 찍기 ##################################################
function formatComma(num, pos) {
	if (!pos) pos = 0;  //소숫점 이하 자리수
	var re = /(-?\d+)(\d{3}[,.])/;
	var strNum = stripComma(num.toString());
	var arrNum = strNum.split(".");
	arrNum[0] += ".";
    while (re.test(arrNum[0])) {arrNum[0] = arrNum[0].replace(re, "$1,$2");}

	if (arrNum.length > 1) {
		if (arrNum[1].length > pos) {arrNum[1] = arrNum[1].substr(0, pos);	}
		return arrNum.join("");
	}
	else {return arrNum[0].split(".")[0];	}
}

function _onScroll(obj,val){
	var scrollHeight = obj.offset().top;
	scrollHeight = scrollHeight+Number(val);
	$("body,html").animate({
		scrollTop : scrollHeight},300);
		return false;
}

function _onScrollMenu(obj,val){
	if(typeof(val) == 'undefined') {val=0}	
	var scrollHeight = obj.offset().top+val;
	$("body,html").animate({
		scrollTop : scrollHeight},300);
		return false;
}

// 클릭시 이미지 크게 보기
/*
function _onView(obj, ileft, itop){
	var imgObj = new Image();
	imgObj.src = obj.attr("src");
	var imgHeight = imgObj.height;
	divFilter("body", "dobox1", "A", 1000);
	inHtml	=	'\
			<div id="imgLayer" class="imglayerbox1" style=" top:'+Number($(window).scrollTop())+'px;">\
				<div style="z-index:10001; ">\
				<img src="'+imgObj.src+'" alt="" onclick="_closeLayer(this);" style="cursor:pointer; border:2px solid #666666;" />\
				</div>\
			</div>\
			'
	$("#dobox2").append(inHtml);
	$("#imgLayer div").fadeIn("fast");
}

*/

function _viewImg1(obj){
	var img = $(obj).find("img")
	var imgUrl = img.attr("src");
	var iposition = img.offset();
	//console.log($(window).scrollTop());
	_onView(img, iposition.left, $(window).scrollTop());
}

function _onView(obj, ileft, itop){
	var imgObj = new Image();
	imgObj.src = obj.attr("src");
	var imgHeight = imgObj.height;
	divFilter("body", "dobox1", "A", 1000);
	inHtml	=	'\
			<div id="imgLayer" class="imglayerbox1" style="top:'+itop+'px;">\
				<div style="z-index:10001; ">\
				<img src="'+imgObj.src+'" alt="" onclick="_closeLayer(this);" style="cursor:pointer; border:2px solid #666666;" />\
				</div>\
			</div>\
			'
	$("#dobox2").append(inHtml);
	$("#imgLayer div").fadeIn("fast");
}

function _closeLayer(obj){$("#dobox1").remove(); $("#imgLayer").remove();	}



function _onCf2(){
		var top = Number($(window).scrollTop())+'px';
		divFilter($(document.body), "dobox1", "A", 850);
		inHtml	=	'\
				<div id="layerDiv" class="cflayer1" style="top:130px">\
					<div class="top1"><h2>홍보영상</h2>\
					<a href="#close" onclick="_closeCf(); return false;"><img src="/images/main/btn_close1.png" alt="닫기" class="cbtn1" /></a>\
					</div>\
					<div class="movieb1">\
					<iframe width="900" height="480" src="https://www.youtube.com/embed/?hl=ko_KR&amp;version=3&amp;rel=0&amp;autoplay=1&amp;vq=hd1080" frameborder="0" allowfullscreen></iframe>\
					</div>\
				</div>\
				'
		$("#dobox2").append(inHtml);
		_onScrollMenu($(".cflayer1"));
	}
	
function _onViewpop(){
		var top = Number($(window).scrollTop())+'px';
		divFilter($(document.body), "dobox1", "A", 850);
		inHtml	=	'\
				<div id="layerDiv" class="cflayer1" style="top:'+top+'">\
					<div class="top1"><h2>광역지도 확대보기</h2>\
					<a href="#close" onclick="_closeCf(); return false;"><img src="/images/common/btn/btn_close1.png" alt="닫기" class="cbtn1" /></a>\
					</div>\
					<div class="movieb1">\
					<img src="/images/main/img1_1_1.jpg" alt="" />\
					</div>\
				</div>\
				'
		$("#dobox2").append(inHtml);
		//_onScrollMenu($("#layerDiv"));
	}
	
	
	function _closeCf(){
		$("#dobox1").remove();
		$("#layerDiv").remove();
	}

function _alert(val){
	alert(val);
	return false;
}	

// 쿠키 삽입
function setCookie(name, value, expiredays)
{
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function notice_setCookie( name, value, expiredays )
		{
			var todayDate = new Date();
			todayDate.setDate( todayDate.getDate() + expiredays );
			document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
		} 
	function getCookie( name ){
		var nameOfCookie = name + "=";
		var x = 0;
			while ( x <= document.cookie.length ) {
				var y = (x+nameOfCookie.length);
					if ( document.cookie.substring( x, y ) == nameOfCookie ) {
					if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
						endOfCookie = document.cookie.length;
					return unescape( document.cookie.substring( y, endOfCookie ) );
				}
			x = document.cookie.indexOf( " ", x ) + 1;
			if ( x == 0 )
			break;
		}
		return "";
	}	
	
	function add_flash(WidthSize,HeightSize,SwfSrc,Title) {
	var flash_tag = "";
	flash_tag ='<embed src="'+SwfSrc+'" type="application/x-shockwave-flash"  WIDTH="'+WidthSize+'" HEIGHT="'+HeightSize+'" wmode="transparent" scale="exactfit"></embed>'
	document.write(flash_tag);
}

// 전화번호 하이픈 입력
function _phoneNumber(obj){
	$(obj).val($(obj).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/,"$1-$2-$3").replace("--", "-"));
}

//전화번호 확인
function _phoneNumberChk(val){
	var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
	var tel = val;
 	if( !regExp.test(tel) ) {return false;}
	return true;
}

// 그래프 움직이는 함수
function UpGraph(objId,graphNum,limit,speed)
{
	var obj = document.all(objId);
	var numObj = document.all(graphNum);
	var objWidth = obj.width - 1;
	numObj.value =  Math.floor(objWidth/speed);
	obj.width = eval(objWidth) + eval(speed);
	timer = setTimeout("UpGraph('"+objId+"','"+graphNum+"',"+limit+","+speed+")",15);
	limit = limit - 1;
	if(objWidth > limit)
	{
		clearTimeout(timer);
	}	// if(objWidth > limit)

}

function autoCharacter(obj,type, len) {
	var x = $(obj);
	var txt1 = x.val().replace(/[^0-9]/g, '');
	var tmp = "";
	if (txt1.length < (len+1)) {
		x.val(txt1);
	} else if (txt1.length < (len+4)) {
		tmp += txt1.substr(0, len);
		tmp += type;
		tmp += txt1.substr(len);
		x.val(tmp);
	}
}

// 새창띄우기
function win_open(url,width,height,TopPos,LeftPos) {
	window.open(url,'','width='+width+',height='+height+',fullscreen=no,menubar=no,status=yes,toolbar=no,titlebar=no,location=no,scrollbars=no,top=' + TopPos + ',left=' + LeftPos);
}

// 스크롤바 있는 새창띄우기
function win_open2(url,width,height) {
	window.open(url,'','width='+width+',height='+height+',fullscreen=no,menubar=no,status=no,toolbar=no,titlebar=no,location=no,scrollbars=yes');
}

function _htmlBodyFixed(){			//사이트 fixed
	if(!$(document.body).hasClass("fixedBody")){
		$(document.body).css({"position":"fixed", "width":"100%", "height":"100%"})
		posY = $(window).scrollTop();
		$(document.body).addClass("fixedBody");
		$("#wrap").css("top",-posY);			
	}else{
		$("#wrap").css("top",0);
		$(document.body).css({"position":"", "width":"", "height":"100%"})
		$(document.body).removeClass("fixedBody");	
		posY = $(window).scrollTop(posY);
	}	
}