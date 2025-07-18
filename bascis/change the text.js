<!DOCTYPE html>
<html>
<head>
  <title>Change Text Example</title>
</head>
<body>
  <h1 id="text">Hello world</h1>
  <button onclick="changetext()">Click Me!</button>

  <script>
    function changetext() {
      document.getElementById("text").innerHTML="hi";
    }
  </script>
</body>
</html>
