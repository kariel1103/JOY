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
            width: 280px;
            height: 270px;
        }
        .form_radio_btn {
            display: inline-block;
			width: 47%;
			height : 45px;
    		border: 1px solid #EAE7E7;
    		border-radius: 10px;
		}
		.form_radio_btn input[type=radio] {
			display: none;
		}
		.form_radio_btn label {
			display: block;
    		border-radius: 10px;
   			margin: 0 auto;
    		text-align: center;
    		height: -webkit-fill-available;
    		line-height: 45px;
		}
		 
		/* Checked */
		.form_radio_btn input[type=radio]:checked + label {
			background: #8897FE;
			color: #fff;
		}
		 
		/* Hover */
		.form_radio_btn label:hover {
			color: #666;
		}
		 
		/* Disabled */
		.form_radio_btn input[type=radio] + label {
			background: #F9FAFC;
			color: #666;
		}
      </style>
      </head>
      <body>
      <div id="template">
      <div id="back">
      <br><br>
      <img src="http://localhost:3034/JOY.png" id="logo">
      <br><br><br>

      ${authStatusUI}
      ${body}
      </div>
    </div>
      </body>
      </html>
      `;
    }
  }