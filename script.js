// Redirect to Whatsapp
function redirectToWhatsApp() {
  let whatsappNumber = "6282210153709";

  // Make a whatsapp message
  let whatsappMessage = "Halo, Saya mau tanya tentang parfum Fragranesia";

  // Create whatsapp link
  let whatsappLink = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" + encodeURIComponent(whatsappMessage);

  // Redirect user to whatsapp link created
  window.location.href = whatsappLink;
}

// // Add event listener to submit button
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
});