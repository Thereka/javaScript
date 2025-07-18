<!--<!DOCTYPE html>-->
<!--<html>-->
<!--<head>-->
<!--  <title>Change Text Example</title>-->
<!--</head>-->
<!--<body>-->
<!--  <h1 id="text">Hello world</h1>-->
<!--  <button onclick="changetext()">Click Me!</button>-->

<!--  <script>-->
<!--    function changetext() {-->
<!--      document.getElementById("text").innerHTML="hi";-->
<!--    }-->
<!--  </script>-->
<!--</body>-->
<!--</html>-->

<!--<!DOCTYPE html>-->
<!--<html>-->
<!--<head>-->
<!--  <title>Style & Attribute Example</title>-->
<!--</head>-->
<!--<body>-->
<!--  <p id="myPara">This text will get styled!</p>-->
<!--  <button onclick="changeStyle()">Style It</button>-->

<!--  <script>-->
<!--    function changeStyle() {-->
<!--      const para = document.getElementById("myPara");-->
<!--      para.style.color = "blue";-->
<!--      para.style.fontSize = "24px";-->
      
<!--    }-->
<!--  </script>-->
<!--</body>-->
<!--</html>-->

<!--<!DOCTYPE html>-->
<!--<html>-->
<!--<head>-->
<!--  <title>Click Counter</title>-->
<!--</head>-->
<!--<body>-->
<!--  <h2 id="count">0</h2>-->
<!--  <button onclick="Count()">Click Me!</button>-->
<!--  <script>-->
<!--    let count = 0;-->
<!--    function Count() {-->
<!--      count++;-->
<!--      document.getElementById("count").innerText = count;-->
<!--    }-->
<!--  </script>-->
<!--</body>-->
<!--</html>-->


<!DOCTYPE html>
<html>
<head>
  <title>Text Transfer</title>
</head>
<body>
  <input type="text" id="inputText" >
  <h1 id="displayText"></h1>
  <button onclick="transferText()">Transfer Text</button>

  <script>
    function transferText() {
      var Text = document.getElementById("inputText").value;
      document.getElementById("displayText").innerText = Text;
    }
  </script>
</body>
</html>



