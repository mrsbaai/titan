<style>
        .page-break {
            page-break-after: always;
        }
</style>

@foreach($ret as $key => $data)
<br/>Order#: {{$data->id}} - {{$data->product}} - {{$data->status}}</b>
<br/>
<br/>Created: 2019-11-29 21:06:14
<br/>Updated: 2019-11-30 12:57:21
<br/>
<br/>Amount: 1
<br/>Unit Price (Dirhams): 449
<br/>Shipping Price (Dirhams): 449
<br/>Total Price (Dirhams): 449
<br/>
<br/>Full Name: {{$data->name}}
<br/>Pone Number: 0645678905
<br/>Age: 30
<br/>
<br/>Region: 
<br/>City: {{$data->city}}
<br/>Poste Address: 
<br/>Home Address: 
<br/>Shipping Type: 
<br/>Tracking Code: 
<br/>
<br/>Notes: 
<div class="page-break"></div>
@endforeach

