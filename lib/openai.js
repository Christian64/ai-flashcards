import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRECT_KEY,
});

export const createFlashcards = (notes) => {
  return openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Create a json with flashcards like this {flashcards:[{front:'',back:''}]}",
      },
      {
        role: "user",
        content: notes,
      },
    ],
    response_format: { type: "json_object" },
  });
};

export const parseFlashcards = (responseBody) => {};
