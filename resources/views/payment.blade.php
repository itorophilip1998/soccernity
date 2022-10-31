<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Payment</title>
    <link rel="stylesheet" href="https://static.unzer.com/v1/unzer.css" />
    <script type="text/javascript" src="https://static.unzer.com/v1/unzer.js"></script>

</head>
<body>
    

<form id="payment-form" class="unzerUI form" novalidate onsubmit="loadForm()">
  <div class="field">
    <div id="card-element-id-number" class="unzerInput">
      71836173571536
        <!-- Card number UI Element will be inserted here. -->
    </div>
  </div>
  <div class="two fields">
    <div class="field ten wide">
      <div id="card-element-id-expiry" class="unzerInput">
        30/24
        <!-- Card expiry date UI Element will be inserted here. -->
      </div>
    </div>
    <div class="field six wide">
      <div id="card-element-id-cvc" class="unzerInput">
902
        <!-- Card CVC UI Element will be inserted here. -->
      </div>
    </div>
  </div>
  <div class="field">
    <button id="submit-button" class="unzerUI primary button fluid" type="submit">
      Pay
    </button>
  </div>
</form>

<script>

 // Handling the form submission
let form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Creating a Card resource
   


    // Creating a unzer instance with your public key
let unzerInstance = new unzer('28a774d707b85b079dd05505c4e3cb7d1276654810444541e2d4786f188b1756');

// Creating a credit card instance
let card = unzerInstance.Card()
// Rendering input fields
card.create('number', {
  containerId: 'card-element-id-number'
});
card.create('expiry', {
  containerId: 'card-element-id-expiry'
});
card.create('cvc', {
  containerId: 'card-element-id-cvc'
});

// Optional
card.create('holder', {
  containerId: 'card-element-id-holder'
});

 card.createResource()
        .then(function(result) {
            // submit the result.id to your backend
            console.log(result)
        })
        .catch(function(error) {
            $errorHolder.html(error.message);
        })
});
  }
</script>
</body>
</html>