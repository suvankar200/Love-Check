function moveButton() {
    var button = document.getElementById("moveButton");
    var newX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    var newY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}
document.getElementById('printButton').addEventListener('click', function() {
    var outputDiv = document.getElementById('output');
    var predefinedWord = "Hello, world!"; // Predefined word
  
    // Print the predefined word in the output div
    outputDiv.textContent = predefinedWord;
  
    // Print the predefined word on the entire page
    document.body.innerHTML = predefinedWord;
  });
  