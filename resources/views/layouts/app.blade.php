<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" sizes="76x76" href="{{ asset('app/images/logo.png')}}" type="image/x-icon" /> 
    <title>Freelancer</title>
 <style>
     header{
         display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content:stretch;
    justify-content: center;
    align-items: center;
    padding: 5px 0px 10px 0; 
    border-bottom: 1px solid #CBD5E1;
    text-align: center;
     }
     body{
  padding: 20px;  
font-family: Georgia, serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.2px; 
color: #202B3C; 
margin: 0;
background:white;
/* text-align: center; */
     }
     .img_container{     
     position: absolute;
     right: 30px;

     }
     .img_container>a{
         margin: 0px 5px ;
     }
     h3{  
         color: #4BAF4F;
     }
     .head{
         text-align: center;
     }
     footer{
         margin-top: 60px;
         /* bg */
     }
     .extra{
         margin-top: 40px;
     }
      .btn_container{
          text-align: center; 
          padding: 30px;
      }
    .btn_text{ 
        gap: 10px;
color:white;
font-size: 16px;
padding: 12px 15px;
background: #4BAF4F;
border-radius: 10px;
 text-decoration: none;  
    }
    .token{
        /* font-weight: bold; */
        padding: 10px 0;
    }
 </style>
</head>
<body>
    <div id="app"> 
<header>
    <h3>App Icon</h3>
<span class="img_container">
  <a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/MpGPGxfx/FB.png" alt="FB"/></a>
    <a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/8PpwyDHW/IG.png" alt="IG"/></a>
 </span>    
</header>
        <main >
            @yield('content')
        </main>

    <Footer>

<p >
    
Thanks, <br/>
Freelancer Team
</p>
  
    </Footer>
    </div>
</body>
</html>