
const faq = {
  "hello": "Hello! Welcome to JV EdTech Medovation. How can I help you?",
  "hi": "Hi there! How may I assist you today?",
  "services": "We provide healthcare innovation, AI solutions, software development and digital education services.",
  "company": "JV EdTech Medovation focuses on healthcare technology and digital innovation.",
  "about": "We work on healthcare innovation, AI and digital transformation solutions.",
  "internship": "You can apply for internship through our careers section.",
  "apply": "Please visit our careers page to apply.",
  "career": "We offer internship and career opportunities based on openings.",
  "job": "Please check our careers page for available roles.",
  "remote": "Remote opportunities depend on current openings and project requirements.",
  "contact": "You can contact us through the contact section of the website.",
  "email": "Please check our contact page for official email details.",
  "phone": "Phone contact information is available on our contact page.",
  "support": "Our support team is ready to assist you.",
  "location": "Please check our About or Contact page for location details.",
  "technology": "We use modern technologies including AI, web development and digital tools.",
  "ai": "Yes, we work with AI-driven healthcare and digital solutions.",
  "healthcare": "We develop healthcare innovation and medovation related solutions.",
  "website": "Yes, we provide website and software development services.",
  "app": "We can help with web and application development projects.",
  "project": "Project timelines depend on complexity and requirements.",
  "price": "Pricing depends on project scope and requirements.",
  "cost": "Please contact us for project quotation and pricing details.",
  "team": "Our team includes technology and innovation focused professionals.",
  "experience": "We work on innovation and digital solution based projects.",
  "certificate": "Internship certificate availability depends on internship policy.",
  "training": "We provide learning and practical project exposure opportunities.",
  "skills": "Required skills depend on internship or project roles.",
  "frontend": "Frontend development opportunities may be available depending on projects.",
  "backend": "Backend and full-stack opportunities depend on requirements.",
  "python": "Python related roles may be available depending on projects.",
  "data science": "We support AI and data-driven innovation initiatives.",
  "machine learning": "Machine learning and AI related projects may be available.",
  "duration": "Internship or project duration depends on the role and requirements.",
  "join": "You can join through our careers or contact process.",
  "portfolio": "Please check our website projects and portfolio section.",
  "collaboration": "We welcome collaboration and innovation partnerships.",
  "demo": "Please contact our team for demo or project discussion.",
  "thanks": "You're welcome! Happy to help.",
  "bye": "Thank you for visiting JV EdTech Medovation. Have a great day!"
};

function sendMessage() {
  let input = document.getElementById("msg");
  let chat = document.getElementById("chat");

  let userMsg = input.value.toLowerCase();

  if (userMsg.trim() === "") return;

  chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;

  let reply = "Sorry, I couldn't understand. Please contact support.";

  for (let key in faq) {
    if (userMsg.includes(key)) {
      reply = faq[key];
      break;
    }
  }

  chat.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
  input.value = "";
}

// Open chat
document.getElementById("chat-toggle").addEventListener("click", function () {
    document.getElementById("chat-container").classList.remove("hidden");
});

// Close chat
document.getElementById("close-chat").addEventListener("click", function () {
    document.getElementById("chat-container").classList.add("hidden");
});
  

window.sendMessage = sendMessage;
  

  
