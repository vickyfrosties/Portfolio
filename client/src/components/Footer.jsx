export default function Footer({ className = "" }) {
  return (
    <>
      <footer
        className={`absolute -bottom-17 left-3/4 -translate-x-1/2 bg-white px-4 text-xs text-black ${className} `}
      >
        <div className="w-90 flex justify-between items-center max-sm:w-full max-sm:h-7">
          <p className="text-sm">2025 - © Sounia Mhalla</p>
          <a
            href="https://github.com/vickyfrosties?tab=repositories"
            target="_blank"
            className="text-sm"
          >
            GitHub
          </a>
          <a
            href="mailto:sounia.mhalla@hotmail.com"
            className="text-sm"
            target="_blank"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/mhalla-sounia/"
            className="text-sm"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
