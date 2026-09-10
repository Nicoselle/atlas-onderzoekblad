import { buttonDownEmbedAction, buttonDownUsername, isButtonDownWired } from "@/lib/atlas/copy";

export function SubscribeForm() {
  const username = buttonDownUsername();
  const wired = isButtonDownWired(username);

  return (
    <div>
      {wired ? (
        <form
          action={buttonDownEmbedAction(username)}
          method="post"
          className="flex max-w-md flex-col gap-3 sm:flex-row sm:items-end"
        >
          <label className="block flex-1">
            <span className="mb-2 block font-sans text-xs tracking-[0.18em] text-muted uppercase">
              E-mail
            </span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="jij@voorbeeld.nl"
              className="h-12 w-full rounded-md border border-rule bg-paper px-3 font-sans text-base text-ink placeholder:text-faint focus:border-moss"
            />
          </label>
          <button
            type="submit"
            className="inline-flex h-12 min-h-11 items-center justify-center rounded-md bg-ink px-5 font-sans text-sm text-paper transition-transform duration-150 active:scale-[0.96]"
          >
            Inschrijven
          </button>
        </form>
      ) : (
        <form
          onSubmit={(event) => event.preventDefault()}
          className="flex max-w-md flex-col gap-3 sm:flex-row sm:items-end"
        >
          <label className="block flex-1">
            <span className="mb-2 block font-sans text-xs tracking-[0.18em] text-muted uppercase">
              E-mail
            </span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="jij@voorbeeld.nl"
              className="h-12 w-full rounded-md border border-rule bg-paper px-3 font-sans text-base text-ink placeholder:text-faint focus:border-moss"
            />
          </label>
          <button
            type="submit"
            disabled
            className="inline-flex h-12 min-h-11 items-center justify-center rounded-md bg-ink/40 px-5 font-sans text-sm text-paper"
          >
            Inschrijven
          </button>
        </form>
      )}
      {!wired ? (
        <p className="mt-3 font-sans text-xs text-faint">Inschrijven is nog niet gekoppeld.</p>
      ) : null}
    </div>
  );
}
