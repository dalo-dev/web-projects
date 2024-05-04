export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] font-bold">
      <div className="m-auto max-w-6xl py-3 text-center">
        <p>
          Made with love by{" "}
          <a
            className="text-[var(--primary)]"
            href="https://github.com/dalo-dev"
            target="_blank"
          >
            dalo-dev
          </a>
        </p>
      </div>
    </footer>
  );
}
