# Web App for Text Summarization and Named Entity Recognition (NER) 

This project is a web application that provides two core functionalities:

1. **Text Summarization**: Summarizes a given text using a fine-tuned BART model and then use transfer-learning train the model on a seperate dataset.
2. **Named Entity Recognition (NER)**: Extracts named entities (like persons, organizations, locations, etc.) from text using a fine-tuned XLNet model.

Users can upload text files (.txt, .csv or .pdf) or directly input text to process. The app allows users to toggle between Text Summarization and NER functionalities.

---

## Features

- **Dynamic Input Support**: Accepts both manual text input and file uploads (.txt, .csv and .pdf).
- **Interactive Results**: Users can view summarization and NER results dynamically.
- **Pre-trained Models**:
  - TensorFlow-based BART model for text summarization.
  - PyTorch-based XLNet model for NER.
- **Backend with FastAPI**: Provides endpoints for summarization, NER, and file processing.
- **Frontend**: Built using HTML, CSS, and JavaScript for user interaction.

---

## Project Structure

```plaintext
.
├── backend/
│   ├── main.py           # FastAPI backend code
│   ├── requirements.txt  # Backend dependencies
│   ├── models/          # Saved models and tokenizers
│   └── utils/           # Utility scripts (optional)
├── frontend/
│   ├── index.html       # Main HTML file
│   ├── style.css        # CSS for styling
│   ├── script.js        # JavaScript for interactivity
└── README.md                # Project documentation
```

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/sifatahammed/Web-App-for-Text-Summarization-and-NER.git
cd your-repo-name
```

### 2. Backend Setup
#### Prerequisites:
- Python 3.8+
- Virtual Environment (optional but recommended)

#### Steps:
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the required Python libraries:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the FastAPI server:
   ```bash
   python main.py
   ```
   The backend server will run on `http://127.0.0.1:8000` by default.

4. Use **ngrok** to expose your server to the internet:
   ```bash
   ngrok http 8000
   ```
   Copy the public URL provided by ngrok and replace the backend URL in your frontend `script.js` file.

### 3. Frontend Setup
1. Open the `frontend/index.html` file in your browser.
2. Ensure the backend URL in `script.js` matches your running server or ngrok public URL.

---

## Usage

1. Open the web app in your browser.
2. Upload a text file (.txt, .csv or .pdf) or manually input text.
3. Select the desired task (Text Summarization or NER) using the buttons.
4. View the results in the output box.

---

## API Endpoints

### 1. **Health Check**
   - **Endpoint**: `/health`
   - **Method**: GET
   - **Description**: Checks if the backend is running.

### 2. **Text Summarization**
   - **Endpoint**: `/summarization`
   - **Method**: POST
   - **Request Body**:
     ```json
     {
       "text": "Your input text here"
     }
     ```
   - **Response**:
     ```json
     {
       "summary": "Summarized text here"
     }
     ```

### 3. **Named Entity Recognition (NER)**
   - **Endpoint**: `/ner`
   - **Method**: POST
   - **Request Body**:
     ```json
     {
       "text": "Your input text here"
     }
     ```
   - **Response**:
     ```json
     {
       "entities": [
         {"token": "John", "entity": "B-PER"},
         {"token": "New York", "entity": "B-LOC"}
       ]
     }
     ```

### 4. **File Upload**
   - **Endpoint**: `/upload`
   - **Method**: POST
   - **Request Body**: File (.txt or .pdf)
   - **Response**:
     ```json
     {
       "text": "Extracted text from the file"
     }
     ```

---

## Dependencies

### Backend
- **FastAPI**: For API creation
- **Transformers**: For loading and running pre-trained models
- **PyPDF2**: For extracting text from PDFs
- **pdfminer**: (Optional) For better PDF text extraction
- **PyTorch** and **TensorFlow**: For model inference

### Frontend
- HTML, CSS, and JavaScript

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- Hugging Face for pre-trained models and pipelines
- CoNLL-2003 dataset for NER tasks
- FastAPI and PyTorch/TensorFlow communities

