function contactMe() {
    let name = document.getElementById("name").value;
    let phone_number = document.getElementById("phone_number").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;
  
    var message = `Name: ${name}\nContact: ${phone_number}\nEmail: +${email}\nMessage: ${comment}`;
    message = encodeURI(message);
    var query = `https://wa.me/918943506060?text=${message}`;
    window.location.replace(query);
  }