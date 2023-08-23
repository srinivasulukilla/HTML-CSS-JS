document.getElementById("jobApplicationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Fetch form data
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const resumeFile = document.getElementById("resume").files[0];
  const coverLetter = document.getElementById("coverLetter").value;
  
  // You can perform further processing or validation here
  
  // Display a simple confirmation
  alert("Application submitted successfully!");
});
