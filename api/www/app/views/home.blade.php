<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>
   Laravel
 </title>

<style type="text/css" media="screen">
  
  body {
    margin:50px 0px; padding:0px; /* Need to set body margin and padding to get consistency between browsers. */
    text-align:center; /* Hack for IE5/Win */
  } 
    
  #Content {
    width:500px;
    margin:0px auto; /* Right and left margin widths set to "auto" */
    text-align:left; /* Counteract to IE5/Win Hack */
    padding:15px;
    border:1px dashed #333;
    background-color:#eee;
  }

</style>

</head>
<body>

<div id="Content">
  {{ Form::open(array('url'=>'/api/upload','files'=>true)) }}
  
  {{ Form::label('file','File',array('id'=>'','class'=>'')) }}
  {{ Form::file('file','',array('id'=>'','class'=>'')) }}
  <br/>

  {{ Form::label('timeout','Timeout',array('id'=>'','class'=>'')) }}
  {{ Form::select('minutes', array(null => 'None', 1 => '1 Minute', 5 => '5 Minutes', 10 => '10 Minutes', 15 => '15 Minutes', 30 => '30 Minutes', 60 => '1 Hour', 120 => '2 Hours', 180 => '3 Hours', 360 => '6 Hours', 720 => '12 Hours', 1440 => '24 Hours'), 0) }}
  <br />
  <!-- submit buttons -->
  {{ Form::submit('Save') }}
  
  <!-- reset buttons -->
  {{ Form::reset('Reset') }}
  
  {{ Form::close() }}

  </div>
</body>
</html>
