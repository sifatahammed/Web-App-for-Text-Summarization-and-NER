// JavaScript for handling text input, file upload, and task execution
const originalTextArea = document.getElementById("originalText");
const resultBox = document.getElementById("resultBox");
const textInput = document.getElementById("textInput");

const BASE_URL = "********"; // Replace with the actual Ngrok URL

// Function to handle file upload (.txt, .csv, .pdf)
function processFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please upload a file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    // Display the file content in the first text area
    originalTextArea.value = event.target.result;
    textInput.value = ""; // Clear any manually entered text
  };
  // Handle .txt files
  if (file.type === "text/plain") {
    reader.onload = function (event) {
      originalTextArea.value = event.target.result;
      // Display the text in the second text area
      textInput.value = ""; // Clear any manually entered text
    };
    reader.readAsText(file);
  }
  // Handle .csv files
  else if (file.type === "application/vnd.ms-excel" || file.type === "text/csv") {
    reader.onload = function (event) {
      const csvContent = event.target.result;
      const lines = csvContent.split("\n").map(line => line.trim());
      originalTextArea.value = lines.join("\n");
      textInput.value = ""; // Clear any manually entered text
    };
    reader.readAsText(file);
  }
  // Handle .pdf files
  else if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
    const formData = new FormData();
    formData.append("file", file);

    fetch(`${BASE_URL}/upload`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to process PDF file");
        }
        return response.json();
      })
      .then((data) => {
        originalTextArea.value = data.text; // Display the extracted text in the second text area
        textInput.value = ""; // Clear any manually entered text
      })
      .catch((error) => {
        console.error("Error processing PDF:", error);
        alert("Error processing PDF: " + error.message);
      });
  } 
  // Unsupported file type
  else {
    alert("Only .txt, .csv, and .pdf files are supported in this demo.");
  }
}

textInput.addEventListener("input", () => {
  originalTextArea.value = textInput.value;
});
// Function to run the selected task (summarization or NER)
async function runTask(task) {
  // Check if text is from the text input or loaded file
  const text = textInput.value.trim() || originalTextArea.value.trim();

  if (!text) {
    alert("Please provide text via file upload or text input.");
    return;
  }

  try {
    // Call the backend API
    const response = await fetch(`${BASE_URL}/${task}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error("Error from the backend");
    }

    const data = await response.json();

    // Display results based on the task
    if (task === "summarization") {
      resultBox.textContent = `Summary:\n\n${data.summary}`;
    } else if (task === "ner") {
      // Display named entities in a dynamic list
      const entities = data.entities;
      if (entities.length === 0) {
        resultBox.textContent = "No named entities found.";
      } else {
        let nerOutput = "Named Entities:\n\n";
        entities.forEach((entity) => {
          nerOutput += `${entity.token}: ${entity.entity}\n`;
        });
        resultBox.textContent = nerOutput;
      }
    }
  } catch (error) {
    console.error("Error running task:", error);
    alert("An error occurred: " + error.message);
  }
}
