module.exports = {
    HTML: function (title, body, authStatusUI) {
      return `
      <!doctype html>
      <html>
      <head>    
        <title>Login TEST - ${title}</title>
        <meta charset="utf-8">
        <style>
        @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

        form {
            display: flex;
            padding: 30px;
            flex-direction: column;
        }
        
        .login {
            border: none;
            border-bottom: 2px solid #D1D1D4;
            background: none;
            padding: 10px;
            font-weight: 700;
            transition: .2s;
            width: 75%;
        }
        .login:active,
        .login:focus,
        .login:hover {
            outline: none;
            border-bottom-color: #6A679E;
        }
        
        #btn {            
          background: #7C8FFF;
          border-radius: 20px;
          padding: 10px;
          width: 260px;
          border-color: #ced5ff;
          border-width: 3px;
        }
        .btn:hover {
            background-color: #595787;
        }
        
        #font1 {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
        
          color: rgba(255, 255, 255, 0.78);
        
        }
        
        #template {
            text-align: center;
            position: relative; 
            background-color : #ffffff;
        
            margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
        
            display: flex;
            flex-direction: column;
            padding-bottom: 60px;
        }
        
        #back {
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            border : 5px solid;
            border-radius: 50px;
            border-color:#B8C2FF #4c64ff #4c64ff #B8C2FF;
            width: 381px;
            height: 810px;
            margin: auto;
            color: #000000;
            margin-top: 2%;
        }
        
        #logo {
            width: 180px;
            height: 50px;
        }
        
        #phone {
            width: 330px;
            height: 310px;
        }
      </style>
      </head>
      <body>
      <div id="template">
      <div id="back">
      <br><br>
      <img src="http://localhost:3034/JOY.png" id="logo">
      <br><br><br>
      <img src="http://localhost:3034/smartphone.png" id="phone">
      ${authStatusUI}
      ${body}
      </div>
    </div>
      </body>
      </html>
      `;
    }
  }