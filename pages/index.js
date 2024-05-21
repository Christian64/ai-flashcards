import Head from "next/head";

import { useState, useRef } from "react";
import { sendNotes } from "@/fetch";
import { Cards } from "@/components/Cards/Cards";
import { roboto, dmSerifDisplay } from "@/fonts";
import { useMutation } from "@tanstack/react-query";
import { MagicIcon } from "@/icons/MagicIcon";
import { Header } from "@/components/Header/Header";

export default function Home() {
  const [cards, setCards] = useState([
    {
      font: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      back: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
  ]);
  const textareaRef = useRef(null);
  const mutation = useMutation({
    onSuccess: (data) => {
      const { flashcards } = JSON.parse(data.data.choices[0].message.content);
      setCards([...flashcards]);
    },
    mutationKey: "sendNotes",
    mutationFn: sendNotes,
  });

  return (
    <>
      <Head>
        <title>AI Flashcards - Turn your notes in flashcards.</title>
      </Head>

      <main>
        <Header />
        <div className="flex flex-col items-center m-auto max-w-[800px] gap-3 mt-10">
          <header className="flex flex-col items-center text-center gap-2">
            <h1
              className={`${dmSerifDisplay.className} text-[3rem] font-bold  leading-10 w-[500px]`}
            >
              Create flashcards with AI.
            </h1>
            <p className={`${roboto.className} text-lg`}>
              Paste/type your notes below and see the magic 🪄.
            </p>
          </header>

          <div>
            <textarea
              ref={textareaRef}
              className={`${roboto.className} textarea bg-white text-black textarea-md w-[500px] m-auto resize-none`}
              placeholder="Software engineering is the branch of computer science that deals with the design, development, testing, and maintenance of software applications."
              rows={7}
            ></textarea>
            <button
              className={`${roboto.className} btn btn-primary flex m-auto px-[4rem] shadow-md mt-1`}
              onClick={() => {
                mutation.mutate({
                  notes: textareaRef.current.value,
                });
              }}
            >
              <MagicIcon />
              Generate
            </button>
          </div>
          {mutation.isPending && (
            <span className="loading loading-spinner loading-lg mt-10"></span>
          )}
          {mutation.isSuccess && <Cards cards={cards} />}
        </div>
      </main>
    </>
  );
}
