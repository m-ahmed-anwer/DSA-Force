const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 3001;

let DSAModel = require("./data").DSAModel;

app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Endpoint to fetch all data
app.get("/api/data", (req, res) => {
  res.json(DSAModel);
});

// Endpoint to update data
app.post("/api/data", (req, res) => {
  const updatedData = req.body;
  DSAModel = updatedData;
  res.json({ message: "Data updated successfully" });
});

// Endpoint to update a specific question by its ID
app.post("/api/updateData/:dataStructureId/:questionId", (req, res) => {
  const { dataStructureId, questionId } = req.params;
  const { checked } = req.body;

  // Find the data structure with the given ID
  const dataStructure = DSAModel.find(
    (ds) => ds.id === parseInt(dataStructureId)
  );
  if (!dataStructure) {
    return res.status(404).json({ message: "Data structure not found" });
  }

  // Find the question with the given ID within the data structure
  const question = dataStructure.questions.find(
    (q) => q.id === parseInt(questionId)
  );

  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }

  // Update the checked field of the question
  question.checked = checked;

  res.json({ message: "Question updated successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
