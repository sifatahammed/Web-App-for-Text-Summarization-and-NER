<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=header" width="100%"/>
<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=23&duration=3000&pause=1000&center=true&vCenter=true&width=850&lines=AI-Powered+NLP+Web+Application;Text+Summarization+%7C+Named+Entity+Recognition;FastAPI+%7C+Transformers+%7C+JavaScript;BART+%7C+XLNet+%7C+Hugging+Face" alt="Typing SVG">

# 🤖 Web App for Text Summarization & Named Entity Recognition

**An AI-powered NLP web application for automatic text summarization and named entity recognition.**

<img src="https://img.shields.io/badge/Python-3.8%2B-3776AB?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white">
<img src="https://img.shields.io/badge/HuggingFace-Transformers-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black">
<img src="https://img.shields.io/badge/PyTorch-ML-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white">

<br>

<img src="https://img.shields.io/badge/TensorFlow-ML-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-Frontend-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-Frontend-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

</div>

## 📌 Overview

This project is a full-stack **Natural Language Processing (NLP)** web application that combines two major language-processing tasks:

- 📝 **Text Summarization**
- 🏷️ **Named Entity Recognition (NER)**

Users can enter text directly or upload supported documents. The frontend communicates with a **FastAPI backend**, which processes the input and sends it to the appropriate Transformer-based NLP model.

The application uses:

- **BART** for text summarization
- **XLNet** for Named Entity Recognition
- **FastAPI** for the backend API
- **HTML, CSS and JavaScript** for the frontend
- **Hugging Face Transformers** for model integration

---
## 🖥️ Demo
<div align="center">
<img src=Demo/Capture.PNG>
</div>

---
## ✨ Features

| Feature | Description |
|---|---|
| 📝 Text Summarization | Generates concise summaries from long text |
| 🏷️ NER | Detects named entities such as people, organizations and locations |
| 📄 PDF Processing | Extracts text from PDF documents |
| 📃 TXT Support | Processes plain-text files |
| 📊 CSV Support | Can be extended for structured text processing |
| 🌐 Web Interface | Interactive browser-based interface |
| ⚡ FastAPI | REST API backend |
| 🤗 Transformers | Modern Transformer-based NLP models |
| 🔄 Transfer Learning | Supports adapting pretrained models to new datasets |

---

# 🧠 How It Works

```text
                    ┌──────────────────────┐
                    │        User          │
                    └──────────┬───────────┘
                               │
                     Text / PDF / TXT
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Web Interface     │
                    │    HTML/CSS/JS       │
                    └──────────┬───────────┘
                               │
                          REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │       FastAPI        │
                    │       Backend        │
                    └──────────┬───────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
                ▼                             ▼
       ┌─────────────────┐          ┌─────────────────┐
       │      BART       │          │      XLNet      │
       │  Summarization  │          │       NER       │
       └────────┬────────┘          └────────┬────────┘
                │                            │
                └─────────────┬──────────────┘
                              ▼
                    ┌──────────────────────┐
                    │   Results Display    │
                    └──────────────────────┘
```
# 🏗️ System Architecture

The application is divided into four major layers:

### 🎨 1. Web Interface
The frontend allows users to:
- Enter text
- Upload documents
- Select an NLP task
- Submit requests
- View generated results

### ⚙️ 2. Backend API
The FastAPI backend:
- Receives requests
- Extracts text from uploaded files
- Routes requests to the appropriate model
- Returns structured results

### 🧠 3. Language Models
Two Transformer-based models are used:
- **BART**: Text summarization
- **XLNet**: Named Entity Recognition (NER)

### 📤 4. Result Layer
The processed results are returned to the browser and displayed dynamically.

---

# 🤖 AI Models

## 📝 BART — Text Summarization

BART is a Transformer encoder-decoder architecture suitable for sequence-to-sequence generation tasks. In this project, BART is used to generate summaries from longer documents.

### Training Concept
```text
Pretrained BART
       │
       ▼
CNN/DailyMail Dataset
       │
       ▼
Fine-Tuning
       │
       ▼
Domain-Specific Dataset
       │
       ▼
Summarization Model
```

The model can therefore be adapted to a different domain through transfer learning.

---

## 🏷️ XLNet — Named Entity Recognition

XLNet is a Transformer-based language model that can be adapted to token-classification tasks.

### NER Pipeline
```text
Input Text
    │
    ▼
Tokenization
    │
    ▼
XLNet
    │
    ▼
Token Classification
    │
    ▼
Entity Labels
```

### Example

**Input:**
```text
"John works at Microsoft in New York."
```

**Output:**
```text
John        → B-PER
Microsoft   → B-ORG
New York    → B-LOC
```

> **Note:** The exact entity labels depend on the dataset and label mapping used during training.

## 📂 Project Structure

```text
Web-App-for-Text-Summarization-and-NER/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── NER_Model/
│   ├── NER.ipynb
│   └── requirements.txt
│
├── Text_Sumarization_Model/
│   ├── text_sumarization.ipynb
│   └── requirements.txt
│
├── Demo/
│   └── Capture.PNG
│
├── architecture.png
├── requirements.txt
├── LICENSE
└── README.md
```

> **Note:** Ensure all notebook files in your environment use the standard `.ipynb` extension.

---

## 🛠️ Technology Stack

### Backend
* **Python**
* **FastAPI**
* **Hugging Face Transformers**
* **PyTorch**
* **TensorFlow**
* **PyPDF2**
* **pdfminer**

### Frontend
* **HTML5**
* **CSS3**
* **JavaScript**

### Machine Learning & NLP
* **Models:** BART, XLNet
* **Tasks:** Transfer Learning, Token Classification, Sequence-to-Sequence Generation
* **Datasets:** CNN/DailyMail, CoNLL-2003

---

## 📚 Datasets

### 1. CNN/DailyMail
* The summarization model uses the **CNN/DailyMail** dataset as the initial training/fine-tuning source.
* It contains news articles paired with human-written summaries.

### 2. CoNLL-2003
* The NER experiments use the **CoNLL-2003** dataset for token classification tasks.
* Typical entity categories include:

| Label | Meaning |
| :--- | :--- |
| **PER** | Person |
| **ORG** | Organization |
| **LOC** | Location |
| **MISC** | Miscellaneous |

---
## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/sifatahammed/Web-App-for-Text-Summarization-and-NER.git
cd Web-App-for-Text-Summarization-and-NER
```

### 2. Create a Virtual Environment

**Windows:**
```cmd
python -m venv venv
venv\Scripts\activate
```

**Linux / macOS:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

If the backend has its own requirements file:
```bash
cd backend
pip install -r requirements.txt
```

---

## ⚡ Running the Backend

Navigate to the backend directory:
```bash
cd backend
```

Start the FastAPI application:
```bash
python main.py
```

Or, if `main.py` exposes an `app` object:
```bash
uvicorn main:app --reload
```

- **API Base URL:** `http://127.0.0.1:8000`
- **Interactive Documentation (Swagger UI):** `http://127.0.0.1:8000/docs`

---

## 🌐 Running the Frontend

1. Open `frontend/index.html` in your browser.
2. Make sure the backend URL inside `frontend/script.js` matches your running FastAPI server:

```javascript
const API_URL = "http://127.0.0.1:8000";
```

---

## 🔗 Optional: ngrok

To expose your local FastAPI server temporarily to external networks:
```bash
ngrok http 8000
```

> **Note:** After running ngrok, replace the frontend API URL in `frontend/script.js` with the generated ngrok URL.  
> *For production deployments, use HTTPS, authentication, rate limiting, and standard cloud/server deployment methods instead of a development tunnel.*

---

## 💻 Usage

### Text Summarization
1. Open the web application (`index.html`).
2. Enter text into the input field or upload a document.
3. Select **Text Summarization**.
4. Submit the request.
5. The backend extracts and processes the text.
6. The **BART** model generates the summary.
7. The summarized result appears directly on the web interface.

---

## 🔄 Pipeline Architecture

```text
User 
  ↓
Text / File
  ↓
FastAPI Backend
  ↓
Text Extraction
  ↓
BART Model
  ↓
Summary Output
  ↓
Frontend UI
```
## 🔍 Named Entity Recognition Workflow

1. Enter text or upload a document.
2. Select **NER**.
3. Submit the request.
4. FastAPI sends the text to the NER model.
5. XLNet predicts entity labels.
6. The entities are displayed in the interface.

---

## 🛣️ Pipeline Architecture

```
User
 │
 ▼
Text / File
 │
 ▼
FastAPI
 │
 ▼
XLNet
 │
 ▼
Entity Detection
 │
 ▼
Frontend
```

---

## 🔌 API Reference

### ❤️ Health Check

`GET /health`

Checks whether the backend is running.

**Example Response:**

```json
{
  "status": "healthy"
}
```

---

### 📝 Text Summarization

`POST /summarization`

Generates a summary from input text.

**Request Body:**

```json
{
  "text": "Your input text here."
}
```

**Response:**

```json
{
  "summary": "Summarized text here."
}
```

---

### 🏷️ Named Entity Recognition

`POST /ner`

Extracts named entities from input text.

**Request Body:**

```json
{
  "text": "John works at Microsoft in New York."
}
```

**Example Response:**

```json
{
  "entities": [
    {
      "token": "John",
      "entity": "B-PER"
    },
    {
      "token": "Microsoft",
      "entity": "B-ORG"
    },
    {
      "token": "New York",
      "entity": "B-LOC"
    }
  ]
}
```

---

### 📄 File Upload

`POST /upload`

Uploads a document and extracts its raw text.

**Example Request:**

```http
File: document.pdf
```

**Example Response:**

```json
{
  "text": "Extracted text from the document..."
}
```
# 📊 API Architecture

```text
                     ┌──────────────┐
                     │   Browser    │
                     └──────┬───────┘
                            │
                            ▼
                     ┌──────────────┐
                     │   FastAPI    │
                     └──────┬───────┘
                            │
            ┌───────────────┼───────────────┐
            │               │               │
            ▼               ▼               ▼
        /upload      /summarization       /ner
            │               │               │
            ▼               ▼               ▼
       PDF Parser          BART           XLNet
            │               │               │
            └───────────────┼───────────────┘
                            ▼
                     ┌──────────────┐
                     │    Result    │
                     └──────────────┘
```

---

## 🔒 Security & Privacy

When deploying this application publicly, consider:

- 🔐 **API authentication**
- 🛡️ **File-type validation**
- 📦 **File-size limits**
- 🚦 **Rate limiting**
- 🌐 **HTTPS**
- 🔑 **CORS configuration**
- 🧹 **Temporary-file cleanup**
- 📝 **Secure logging**
- 🔒 **Protection of uploaded documents**

> ⚠️ **Warning:** Do not upload confidential documents to an unsecured development server.

---

## ⚡ Performance Considerations

Transformer models can require significant CPU/GPU resources. For a production deployment, consider:

- GPU inference
- Model loading at application startup
- Batch processing
- Model quantization
- Maximum input-length validation
- Response caching
- Asynchronous processing
- Background task queues
- Docker-based deployment

---

## 🧪 Testing

### Recommended Backend Tests
- [x] Health check
- [x] Valid summarization request
- [x] Valid NER request
- [x] Valid PDF upload
- [x] Invalid file type
- [x] Empty input
- [x] Very long input
- [x] Malformed JSON
- [x] Model failure handling

### NLP Evaluation Metrics

#### Summarization
- ROUGE-1
- ROUGE-2
- ROUGE-L
- BERTScore

#### Named Entity Recognition (NER)
- Precision
- Recall
- F1-score
- Entity-level accuracy
- Confusion matrix

---

## 🚧 Limitations

Some limitations of the current system may include:

- Transformer inference can be computationally expensive.
- Very long documents may exceed model input limits.
- PDF extraction quality varies depending on document layout.
- Summarization quality depends on the training/fine-tuning data.
- NER performance depends on the quality and distribution of training labels.
- Development tunnels such as `ngrok` should not be treated as production infrastructure.
- Model outputs should be validated before use in high-stakes applications.

---

## 🔮 Future Work

### 🤖 Model Improvements
- Experiment with **T5** and **PEGASUS**.
- Compare **XLNet** with **RoBERTa** and **DeBERTa**.
- Perform systematic hyperparameter optimization.
- Improve domain-specific fine-tuning.
- Experiment with larger Transformer models.
- Add model benchmarking.

### 📊 Better Evaluation
| Task | Metrics & Methods |
| :--- | :--- |
| **Summarization** | ROUGE, BERTScore, Human Evaluation, Factual Consistency |
| **NER** | Precision, Recall, F1-score, Entity-level Accuracy, Confusion Matrix |

### 🌐 Web Application Features
- Drag-and-drop file uploads
- Highlight entities directly in the input text
- Download summaries
- Document history
- Batch document processing
- User authentication
- Dark mode
- Real-time progress indicators
- REST API authentication

---

## 🚀 Deployment

### Workflow
```text
Docker ──> FastAPI ──> Cloud / GPU Server ──> Web Application
```

*Potential platforms include cloud VM/container services or GPU-enabled infrastructure.*

---

## 🐳 Docker

A future version can package the application using Docker.

**Build the image:**
```bash
docker build -t nlp-web-app .
```

**Run the container:**
```bash
docker run -p 8000:8000 nlp-web-app
```

Then access the application at: `http://localhost:8000`

---

## 🤝 Contributing

Contributions are welcome!

1. **Fork** the repository
2. **Create** a branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make** your changes
4. **Commit** your changes:
   ```bash
   git add .
   git commit -m "Add your feature"
   ```
5. **Push** to the branch:
   ```bash
   git push origin feature/your-feature
   ```
6. **Create** a Pull Request

> **Please include:** Description of the change, motivation, testing performed, and any known limitations.

---

## 🙏 Acknowledgments

Special thanks to:

- 🤗 **Hugging Face**
- ⚡ **FastAPI**
- 🔥 **PyTorch**
- 🧠 **TensorFlow**
- 📰 **CNN/DailyMail dataset**
- 🏷️ **CoNLL-2003 dataset**
- The open-source NLP and machine-learning community

---
## 👨‍💻 Author

<p align="center">
  <strong>MD Sifat Ahammed Akash</strong>
</p>
<p align="center">
  Full-Stack Developer • React Developer • AI/ML Enthusiast
</p>
<p align="center">
  <a href="mailto:sifatahammed821@gmail.com">
    <img src="https://img.shields.io/badge/Email-sifatahammed821%40gmail.com-red?logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://github.com/sifatahammed">
    <img src="https://img.shields.io/badge/GitHub-sifatahammed-black?logo=github" alt="GitHub" />
  </a>
</p>


## 📄 License

<div align="center">

MIT License © MD Sifat Ahammed Akash
</div>
<div align="center">
⭐ If this project is useful for your research or coursework, consider giving the repository a star!

Built with ❤️ using Python, PyTorch, Hugging Face Transformers, and FastAPI.

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" width="100%"/> </div>

