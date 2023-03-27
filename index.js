// Add your code here
function submitData(userName, userEmail) {
    const formData = {
      name: userName,
      email: userEmail
    };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(response => response.json())
      .then(data => {
        const newId = data.id;
        document.body.append(newId);
      })
      .catch(error => {
        console.log(error.message);
      });
  }