import { GithubIcon } from "@/icons/GithubIcon";
export const Header = () => (
  <div className="flex justify-between p-4">
    <h1 className="text-xl font-bold">
      <a href="#">AIFlashcards</a>
    </h1>
    <nav>
      <a
        className="btn btn-sm btn-ghost"
        href="https://www.github.com/Christian64"
        target="_blank"
      >
        <GithubIcon fill="none" stroke="white" width="22" height="22" />
        Source Code
      </a>
    </nav>
  </div>
);
