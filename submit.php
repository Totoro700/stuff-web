<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<title>Message entered!</title>
<style>
body {background-color:#CCC;font-family:ink free;padding:5px;text-align:center;margin-left:auto;margin-right:auto;}
</style>
</head>
<body>
<h1>Your message was submitted!</h1>
<p>
Your message was 
<?php
echo htmlspecialchars($_POST['msg']);
?>
</p>
<br>
<br>
<br>
<br>
<a href='index.html'>Home</a><br>
<a href='bugReport.html'>Report a problem</a>
</body>
</html>