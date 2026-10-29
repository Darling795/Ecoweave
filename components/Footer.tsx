import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">{site.fullName}</div>
        <div>Little finds, lovingly chosen. © {year}</div>
        <div className="footer-links">
          <a href="#home">Back to top ↑</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
