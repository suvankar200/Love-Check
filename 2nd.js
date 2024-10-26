document.getElementById('yes').addEventListener('click', function() {
    var outputDiv = document.getElementById('output');
    var previousPage = document.getElementById('previousPage');
    var predefinedLine = `Thank you ${name} for coming into my life!`; // Predefined line
    
    // Print the predefined line in the output div
    outputDiv.textContent = predefinedLine;
  
    // Print the predefined line on the entire page
    //document.body.innerHTML = predefinedLine;
  
    // Apply blur effect to the previous page
    previousPage.classList.add('blurred');
  });
 
  let put= document.getElementById('name');
  let name=prompt("Enter your name??")
      // Print the predefined line in the output div
     put.textContent =name;
  
      // Print the predefined line on the entire page
     // document.body.innerHTML = name;
