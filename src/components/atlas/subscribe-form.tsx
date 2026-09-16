import { useState, type FormEvent } from "react";
import {
  buttonDownEmbedAction,
  buttonDownUsername,
  FORM_BUTTON,
  SUBSCRIBE_ERROR,
  SUBSCRIBE_OK,
  SUBSCRIBE_UNDER,
} from "@/lib/atlas/copy";
import { cn } from "@/lib/utils";

export function SubscribeForm({
  compact = false,
  subscribed = false,
}: {
  compact?: boolean;
  subscribed?: boolean;
}) {
  const [error, setError] = useState(false);
  const action = buttonDownEmbedAction(buttonDownUsername());

  if (subscribed) {
    return (
      <div>
        <p className="font-sans text-base text-ink" role="status">
          {SUBSCRIBE_OK}
        </p>
        <p className="mt-3 font-sans text-xs text-muted">{SUBSCRIBE_UNDER}</p>
      </div>
    );
  }

  function onInvalid(event: FormEvent<HTMLInputElement>) {
    event.preventDefault();
    setError(true);
  }

  return (
    <div>
      <form
        action={action}
        method="post"
        className={cn(
          "embeddable-buttondown-form flex max-w-md flex-col gap-3",
          !compact && "sm:flex-row sm:items-end",
        )}
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
            onInvalid={onInvalid}
            onInput={() => setError(false)}
            className="h-12 w-full rounded-md border border-rule bg-paper px-3 font-sans text-base text-ink placeholder:text-faint focus:border-moss"
          />
        </label>
        <input type="hidden" name="embed" value="1" />
        <button
          type="submit"
          className="inline-flex h-12 min-h-11 items-center justify-center rounded-md bg-ink px-5 font-sans text-sm text-paper transition-transform duration-150 active:scale-[0.96]"
        >
          {FORM_BUTTON}
        </button>
      </form>
      <p className="mt-3 font-sans text-xs text-muted">{SUBSCRIBE_UNDER}</p>
      {error ? (
        <p className="mt-2 font-sans text-xs text-warn" role="alert">
          {SUBSCRIBE_ERROR}
        </p>
      ) : null}
    </div>
  );
}
