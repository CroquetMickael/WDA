import path from "path";
import { remote } from "electron";
const userDataPath = remote.app.getPath("userData");
const jsonPath = path.join(userDataPath, "/Todos.json");
const fs = require("fs");

const jsonData = () => {
  try {
    const data = fs.readFileSync(jsonPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    jsonWrite(JSON.stringify([{ id: 1, text: "Salut", completed: false }]));
    setTimeout(() => jsonData(), 500);
  }
};

const jsonWrite = async (jsonString: any) => {
  fs.writeFile(jsonPath, jsonString, (err: any) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
};

export { jsonData, jsonWrite };
