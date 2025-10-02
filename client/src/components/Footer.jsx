export default function Footer({ className = "" }) {
  return (
    <>
      <footer
        className={`absolute bg-white w-full px-4 text-xs text-black ${className} `}
      >
        <div className="w-90 flex justify-between items-center max-sm:w-full max-sm:h-7">
          <p className="text-sm max-xs:text-xs">2025 - © Sounia Mhalla</p>
          <a
            href="https://github.com/vickyfrosties?tab=repositories"
            target="_blank"
            className="text-sm max-xs:text-xs"
          >
            GitHub
          </a>
          <a
            href="mailto:sounia.mhalla@hotmail.com"
            className="text-sm max-xs:text-xs"
            target="_blank"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/mhalla-sounia/"
            className="text-sm max-xs:text-xs"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
