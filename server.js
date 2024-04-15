import express from "express";
import axios from "axios";
import fs from "fs";

const app = express();

app.use(express.json());

app.get("/saveData", async (req, res) => {
  try {
    const { data: dataToSave } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=71c2b1854411b92e7b92973b99ed1887&page=1"
    );

    // fs.writeFileSync("./userdata.json", JSON.stringify(dataToSave));
    fs.writeFile("./userdata.json", JSON.stringify(dataToSave), (err) => {
      if (err) {
        console.error("Error saving data:", err);
        res.status(500).send("Error saving data.");
      } else {
        console.log("Data saved successfully.");
        res.status(200).send("Data saved successfully.");
      }
    });

    res.status(200).send("Data saved successfully.");
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Error saving data.");
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
