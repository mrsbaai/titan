<style>
        .page-break {
            page-break-after: always;
        }
        .content {
            font-size: 120%;
            font-family: Arial, Helvetica, sans-serif;
        }
</style>

@foreach($ret as $key => $data)
<div class="content">
<br/>
<center><h2>Order#: {{$data->id}} - {{$data->product}} - {{$data->status}}</h2></center>
<br/>
<br/>Created: {{$data->created_at}}
<br/>
<br/>Updated:  {{$data->updated_at}}
<br/>
<br/><b>Amount: {{$data->amount}}</b>
<br/>
<br/>Unit Price (Dirhams):  {{$data->unit_price}}
<br/>
<br/>Shipping Price (Dirhams): {{$data->shipping_price}}
<br/>
<br/>Total Price (Dirhams): <b>{{$data->tprice}}</b>
<br/>
<br/>Full Name: <b>{{$data->name}}</b>
<br/>
<br/>Pone Number: <b>{{$data->phone}}</b>
<br/>
<br/>Age: {{$data->age}}
<br/>
<br/>Region: {{$data->region}}
<br/>
<br/>City: {{$data->city}}
<br/>
<br/>Poste Address: {{$data->poste}}
<br/>
<br/>Home Address: {{$data->address}}
<br/>
<br/>Shipping Type: {{$data->shipmentType}}
<br/>
<br/>Tracking Code: {{$data->tracking}}
<br/>
<br/>Notes: {{$data->notes}}
</div>
<div class="page-break"></div>
@endforeach

