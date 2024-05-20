import { createFlashcards } from "@/lib/openai";

export default async function handler(req, res) {
  if (req.method != "POST") return;
  if (!req.body.notes)
    return res.status(400).json({ message: "Notes is required!" });

  const flashcards = await createFlashcards(req.body.notes);
  res.status(200).json(flashcards);
}
