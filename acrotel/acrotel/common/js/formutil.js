/**
 * 
 * @param 
 * @return
 * @throws Exception
 */
function checkPhone(num)
{
	for (var i=0; i<num.value.length; i++) 
	{
		var ch = num.value.charAt(i);

		if (!(ch>="0" && "9">=ch))
		{
			alert('연락가능전화번호에는 문자 "'+ch+'" 를 사용할 수 없습니다');
			num.focus();
			return false;
		}
	} 
	return true;
}


function checkId(ele){
        var canFocus = 1;
        if (ele.value.length < 6 || ele.value.length > 20) {
            alert("아이디는 6자이상 20자 이내로 구성하십시요.");
            return false;
        }
        
        if (ele.value.indexOf(" ") != -1) {
            alert('ID에는 공백을 입력할 수 없습니다.');
            ele.focus();
            return false;
        }
        
        for (var i = 0; i < ele.value.length; i++) {
            var ch = ele.value.charAt(i);
            if (i == 0 && !(ch >= "a" && "z" >= ch)) {
                alert("아이디는 반드시 영문자로 시작하여야 합니다.");
                return false;
            }
            
            if (!((ch >= "0" && "9" >= ch) || (ch >= "a" && "z" >= ch) || ch == "-" || ch == "_")) {
                alert("아이디에는 문자 [" + ch + "] 를 사용할 수 없습니다");
                if (canFocus) 
                    ele.focus();
                return false;
            }
        }
        return true;
    }



/**
*  도메인 검사
* @param 
* @return
* @throws Exception
*/
function domain_chk(obj1, obj2)	{
	
	if (obj1.value!="") {
		obj2.value=obj1.value;
		obj2.readOnly=true;
	} else {
		obj2.value="";
		obj2.readOnly=false;
	}
	//p_form.emailchk.value="0";
}


 /**
     * 이메일 도메인 체크
     * @param str : 이메일 도메인
     * @return boolean
     * @throws Exception
     */
function checkEmailDomain(str)	{
	var reg_email = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/;
	if (!reg_email.test(str.value)) {
		alert("이메일 주소의 형식이 적합하지 않습니다. 영어, 숫자, '-', '_', '.'만 사용 가능 합니다.");
		str.value = "";
		str.focus();
		return false;
	}
	return true;
}

/**
*  이메일검사
* @param 
* @return
* @throws Exception
*/
function checkEmailID(str)	{
	var reg_email = /^[-A-Za-z0-9_]+[-A-Za-z0-9_]*$/;
	if (!reg_email.test(str.value)) {
		alert("이메일 주소의 형식이 적합하지 않습니다. 영어, 숫자, '-', '_' 만 사용 가능 합니다.");
		str.value = "";
		str.focus();
		return false;
	}
	return true;
}


/**
 * 중복된 3자 이상의 문자 또는 숫자 사용불가
 * @param 
 * @return
 * @throws Exception
 */
function PwdCheck(d) {
	var checkErr;
	var b;
	
	b = new Array();
	for (i = 0 ; i < d.length ; i++) {
		b[i] = d.charCodeAt(i);	
	}	
	/*중복된 3자 이상의 문자 또는 숫자 사용불가*/
	for(i=0; i < b.length-1; i++) {
		if((eval(b[i]) == eval(b[i+1]))&& (eval(b[i]) == eval(b[i+2]))&& (eval(b[i]) == eval(b[i+3])) ) {
				checkErr = true;
				return true;
		}	else  { 
			checkErr = false; 
		}
	}
	return checkErr;
}

/**
 * 일련숫자 또는 알파벳 순서대로 3자이상 사용하는 비밀번호는 사용하실 수 없습니다.
 * @param 
 * @return
 * @throws Exception
 */
function PwdCheck1(d) {
	var checkErr;
	var b;
	
	b = new Array();
	for (i = 0 ; i < d.length ; i++) {
		b[i] = d.charCodeAt(i);	
	}	
	/*중복된 3자 이상의 문자 또는 숫자 사용불가*/
	for(i=0; i < b.length-1; i++) {
		if((eval(b[i]+1) == eval(b[i+1]))&& (eval(b[i+1]+1) == eval(b[i+2]))&& (eval(b[i+2]+1) == eval(b[i+3])) ) {
				checkErr = true;
				return true;
		}	else  { 
			checkErr = false; 
		}
	}
	
	for(i=0; i < b.length-1; i++) {
		if((eval(b[i]) == eval(b[i+1]+1))&& (eval(b[i]) == eval(b[i+2]+2) )&& (eval(b[i]) == eval(b[i+3]+3) )) {
				checkErr = true;
				return true;
		}	else  { 
			checkErr = false; 
		}
	}	
	return checkErr;
}
/**
 * 패스워드 검사
 * @param 
 * @return
 * @throws Exception
 */
function checkPassword(ele, svc_id)
{
	var str_id="";
	var str = "";
	if ( str.indexOf("@") >1 ) {
		str_id = str.substring(0,str.indexOf("@"));	
	} else {
		str_id = str;
	}	
	
	var canFocus = 1;
	if(ele.value.length < 6 || ele.value.length > 20)
	{
		alert("비밀번호는 6자이상 20자 이내로 구성하십시요.");
		return false;
	}

	for (var i=0; i<ele.value.length; i++) {
		var ch = ele.value.charAt(i);
		if(!((ch>="0" && "9">=ch) || (ch>="a" && "z">=ch) || (ch>="A" && "Z">=ch) || ch=="!" || ch=="@" || ch=="%" || ch=="^" ||ch=="&" || ch=="*"))
		{
			alert("비밀번호에는 문자 " +ch+ " 를 사용할 수 없습니다");
			if(canFocus) ele.focus();
			return false;
		}
	}
	
	if (PwdCheck(ele.value)) {
		alert("동일한 문자를 연속으로 네 번이상 사용하는 비밀번호는 이용하실 수 없습니다." );
		if(canFocus) ele.focus();
		return false;
	}        
		
	if (PwdCheck1(ele.value)) {
		alert("일련숫자 또는 알파벳 순서대로 4자이상 사용하는 비밀번호는 사용하실 수 없습니다." );
		if(canFocus) ele.focus();
		return false;
	} 
			
	/*		
	var p = svc_id.value.length;
	var j = ele.value.length;	
	for (var i1=0 ; i1 < ((p*2)/3) ; i1++) 
	{		
		for (var i=0 ; i < ((j*2)/3) ; i++)
		{
			if (svc_id.value.substring(i1,i1+3) == ele.value.substring(i,i+3)){
				alert("아이디와 3자이상 동일한 비밀번호는 사용하실 수 없습니다.");
				if(canFocus) ele.focus();
				return false;				
			}			
		}
	}
	*/
	return true;
}

//비밀번호 확인
function pwd_check(obj1,obj2)
{
	var EnNum_pattern = /[^(a-zA-Z0-9)]/;
	
	if (obj1.value != obj2.value)
	{
		alert("비밀번호가 서로 다릅니다.");
		obj2.value = "";
		obj1.value = "";
		obj1.focus();
		return false;
	}
	if(EnNum_pattern.test(obj1.value))
	{
		alert("비밀번호는 영문자와 숫자 조합만 가능합니다.")
		obj1.focus();
		return false;
	}
	else if(obj1.value.length < 5 || obj1.value.length > 12)
	{
		alert("비밀번호는 5~12자리의 영문자와 숫자 조합만 가능합니다.");
  		obj1.focus();
  		return false;
	}
	return true;
}	

// 파일 확장자 가져오는 함수
function getFileExtension(filePath){  // 파일의 확장자를 가져옮
     var lastIndex = -1;
     lastIndex  = filePath.lastIndexOf('.');
     var extension = "";

   if(lastIndex != -1)
   {
     extension = filePath.substring( lastIndex+1, filePath.len );
   }
   else
   {
     extension = "";
   }
     return extension;
 }
 // 파일 확장자 가져오는 함수
 
 // 파일 확장자 체크 함수 
function fnImg_Check(value){   // 파일 확장자 체크하기.
     var src = getFileExtension(value);
   if(src.toLowerCase() == "js" || src.toLowerCase() == "asp" || src.toLowerCase() == "html" || src.toLowerCase() == "htm" || src.toLowerCase() == "cgi" || src.toLowerCase() == "phtm" || src.toLowerCase() == "inc" || src.toLowerCase() == "sql" || src.toLowerCase() == "pl")
   {
         alert("해당 파일은 업로드가 불가능합니다.");
         return false;
     }
	 return true;
 }