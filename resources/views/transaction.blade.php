<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Paypal Payment</title>
    <script src="https://www.paypal.com/sdk/js?client-id='{{ env('PAYPAL_CLIENT_ID') }}'"></script>
    <style>
        body {
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>

<body>
    <a class="btn btn-primary m-3" href="{{ route('processTransaction') }}">Continue Payment</a>
    @if(\Session::has('error'))
    <div class="alert alert-danger">{{ \Session::get('error') }}</div>
    {{ \Session::forget('error') }}
    @endif
    @if(\Session::has('success'))
    <div class="alert alert-success">{{ \Session::get('success') }}</div>
    {{ \Session::forget('success') }}
    @endif

    <div>
        <img src="https://static.vecteezy.com/system/resources/previews/002/774/871/non_2x/international-money-payment-icons-set-vector.jpg" width="200px" alt="">
    </div>
</body>

</html>