// Exam Data: Schedule and Topics
const exams = [
    { 
      date: "04/12", 
      subject: "Maths Probablity", 
      topics: ["Linear Algebra", "Differential Equations", "Probability"] 
    },
    { 
        date: "07/12", 
        subject: "CSE", 
        topics: ["Operating Systems", "Data Structures", "Algorithms"] 
    },
    { 
      date: "09/12", 
      subject: "Physics", 
      topics: ["Mechanics", "Electromagnetism", "Optics"] 
    },
    { 
      date: "11/12", 
      subject: "DMS", 
      topics: ["Sets and Relations", "Graphs and Trees", "Logic"] 
    },
    { 
      date: "21/12", 
      subject: "ECE", 
      topics: ["Signal Processing", "Communication Systems", "Microprocessors"] 
    }
  ];
  
  // Populate the timetable
  const timetable = document.getElementById("timetable");
  exams.forEach((exam, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${exam.date}</td>
      <td class="subject" data-index="${index}">${exam.subject}</td>
    `;
    timetable.appendChild(row);
  });
  
  // Modal functionality
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const topicList = document.getElementById("topic-list");
  const closeBtn = document.querySelector(".close-btn");
  
  // Show modal with topics
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("subject")) {
      const index = e.target.dataset.index;
      const { subject, topics } = exams[index];
  
      modalTitle.textContent = `${subject} Topics`;
      topicList.innerHTML = topics.map(topic => `<li>${topic}</li>`).join("");
      modal.style.display = "block";
    }
  });
  
  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  