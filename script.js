function submitReview(){
    const fs = require('fs');
    let data = document.getElementById("review").value;
    fs.writeFile('Output.txt', data, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    }) 
}

