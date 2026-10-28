import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px] md:h-96 md:w-96" />

      <span className="mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
        ✦ Your space. Your people. Your conversations.
      </span>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
        Welcome to{" "}
        <span className="bg-linear-to-r from-purple-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
          Ghost Room
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
        Create your own room or join a conversation.
        Connect, chat, and make every conversation count.
      </p>

      <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
        <Link
          href="/create-room"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-purple-600 px-8 font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-500/30 active:translate-y-0"
        >
          Create Room
          <span aria-hidden="true">↗</span>
        </Link>

        <Link
          href="/join-room"
          className="inline-flex h-12 items-center justify-center rounded-xl border border-purple-500/40 bg-white/3 px-8 font-semibold text-purple-200 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10 active:translate-y-0"
        >
          Join Room
        </Link>
      </div>
    </section>
  );
};

export default Hero;