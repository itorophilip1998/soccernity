@extends('./layouts/app')

@section('content')
    <div class="body"> 
        <h4 class="head">
           {{ $data["subject"] }}

        </h4>

        <section class="content">
            <p>
                Hi   {{ $data["main"]["firstname"] }}
            </p>
                <p>
                  Hi Steph, You requested to reset your password on {{ now()->format("d M Y h:m") }}.
   <br/><br/>
    Search  various types of services around your location with ease — welcome! If there’s anything you need, we’ll be here every step of the way.
</p>

        </section>
     
<div class="extra">
   <div class="btn_container">
        <a href="{{ $data['link'] }}" target="_blank" class="btn_text">
       Reset Password
    </a>
   </div>
    <div class="token">
    here is your token  <b>{{ $data["token"]}}</b>
    </div>
    <div class="link">
     here is your link <a href="{{ $data['link'] }}" target="_blank">{{ $data['link'] }}</a>
    </div>
</div>

</div>
@endsection