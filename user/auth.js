var express = require('express');
var router = express.Router();

var template = require('./template.js');
var signup = require('./signup.js');
var db = require('./db.js');

// 로그인 화면
router.get('/login', function (request, response) {
    var title = '로그인';
    var html = template.HTML(title,`
            <form action="/auth/login_process" method="post">
            <p><input class="login" type="text" name="userid" placeholder="아이디"></p>
            <p><input class="login" type="password" name="pwd" placeholder="비밀번호"></p>
            <p><input id="btn" type="submit" value="로그인"></p>
            </form>           
        `, '');
    response.send(html);
});


// 로그인 프로세스
router.post('/login_process', function (request, response) {
    var userid = request.body.userid;
    var password = request.body.pwd;
    if (userid && password) {             // id와 pw가 입력되었는지 확인
        
        db.query('SELECT * FROM usertable WHERE userid = ? AND password = ?', [userid, password], function(error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {       // db에서의 반환값이 있으면 로그인 성공
                request.session.is_logined = true;      // 세션 정보 갱신
                request.session.nickname = userid;
                request.session.save(function () {
                    response.redirect(`/`);
                });
            } else {              
                response.send(`<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); 
                document.location.href="/auth/login";</script>`);    
            }            
        });

    } else {
        response.send(`<script type="text/javascript">alert("아이디와 비밀번호를 입력하세요!"); 
        document.location.href="/auth/login";</script>`);    
    }
});

// 로그아웃
router.get('/logout', function (request, response) {
    request.session.destroy(function (err) {
        response.redirect('/');
    });
});


// 회원가입 화면
router.get('/register', function(request, response) {
    var title = '회원가입';    
    var html = signup.HTML(title, `
    <form action="/auth/register_process" method="post">
    
    <div class="mb-3">
	<div class="form_toggle row-vh d-flex flex-row justify-content-between" >
		<div class="form_radio_btn">
			<input id="radio-1" type="radio" name="role" value="tutor" checked>
			<label for="radio-1">선생님</label>
		</div>							 
		<div class="form_radio_btn">
			<input id="radio-2" type="radio" name="role" value="student">
			<label for="radio-2">학생/학부모</label>
		</div>
	</div>
    </div>
    <br><br>
    <p><input class="login" type="text" name="username" placeholder="이름"></p>
    <p><input class="login" type="text" name="userid" placeholder="아이디"></p>
    <p><input class="login" type="password" name="pwd" placeholder="비밀번호"></p>    
    <p><input class="login" type="password" name="pwd2" placeholder="비밀번호 재확인"></p>
    <p><input id="btn" type="submit" value="&JOY"></p>
    </form>            
    <p><a href="/auth/login">로그인 화면으로 돌아가기</a></p>
    `, '');
    response.send(html);
});
 
// 회원가입 프로세스
router.post('/register_process', function(request, response) {    
    var role = request.body.role;
    var username = request.body.username;
    var userid = request.body.userid;
    var password = request.body.pwd;    
    var password2 = request.body.pwd2;

    if (role && username && userid && password && password2) {
        
        db.query('SELECT * FROM usertable WHERE userid = ?', [userid], function(error, results, fields) { // DB에 같은 이름의 회원아이디가 있는지 확인
            if (error) throw error;
            if (results.length <= 0 && password == password2) {     // DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우 
                db.query('INSERT INTO usertable (role, username, userid, password) VALUES(?,?,?,?)', [role, username, userid, password], function (error, data) {
                    if (error) throw error2;
                    response.send(`<script type="text/javascript">alert("회원가입이 완료되었습니다!");
                    document.location.href="/auth/login";</script>`);
                });
            } else if (password != password2) {                     // 비밀번호가 올바르게 입력되지 않은 경우
                response.send(`<script type="text/javascript">alert("입력된 비밀번호가 서로 다릅니다."); 
                document.location.href="/auth/register";</script>`);    
            }
            else {                                                  // DB에 같은 이름의 회원아이디가 있는 경우
                response.send(`<script type="text/javascript">alert("이미 존재하는 아이디 입니다."); 
                document.location.href="/auth/register";</script>`);    
            }            
        });

    } else {        // 입력되지 않은 정보가 있는 경우
        response.send(`<script type="text/javascript">alert("입력되지 않은 정보가 있습니다."); 
        document.location.href="/auth/register";</script>`);
    }
});

module.exports = router;
