// let configObj = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

let dataObj = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

    function submitData(name, email){
        return fetch("http://localhost:3000/users", dataObj)
            .then(resp => resp.json())
            .then(data => data.id)
    
    }

    // return fetch(imgUrl)
    //     .then((resp) => resp.json())
    //     .then((dogPix) => {
    //       dogPix["message"].forEach((dogPic) => insertImage(dogPic));
    //     });
    // }