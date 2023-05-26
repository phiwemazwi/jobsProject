document.getElementById("jobForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var company = document.getElementById("company").value;
    var location = document.getElementById("location").value;
    var salary = document.getElementById("salary").value;
    var employmentO = document.getElementById("employmentO").value;
    var position = document.getElementById("position").value;
    var description = document.getElementById("description").value;
  
    // Create a job object
    var job = {
      name: name,
      company: company,
      location: location,
      salary: salary,
      employmentO: employmentO,
      position: position,
      description: description,

    };
  
    // Get the existing job list from localStorage or initialize an empty array
    var jobs = JSON.parse(localStorage.getItem("jobs")) || [];
  
    // Add the new job to the list
    jobs.push(job);
  
    // Store the updated job list in localStorage
    localStorage.setItem("jobs", JSON.stringify(jobs));
  
    // Close the window after posting the job
    window.alert("Job posted successfully posted !")
    window.open("job-history.html");
  });
  