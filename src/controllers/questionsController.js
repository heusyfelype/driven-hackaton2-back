import { database } from "../mongoConnection.js";

export const getQuestions = async (req, res) => {
  const { topic, level } = req.query;
  try {
    const questions = await database
      .collection(`${topic}Questions`)
      .find({ level });
    res.status(200).send(questions);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
