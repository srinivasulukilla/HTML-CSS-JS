<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Job Application</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Job Application Form</h1>
    <form id="jobApplicationForm">
      <label for="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required>
      
      <label for="resume">Upload Resume:</label>
      <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required>
      
      <label for="coverLetter">Cover Letter:</label>
      <textarea id="coverLetter" name="coverLetter" rows="4" required></textarea>
      
      <button type="submit">Submit Application</button>
    </form>
  </div>
  
  <script src="script.js"></script>
</body>
</html>
