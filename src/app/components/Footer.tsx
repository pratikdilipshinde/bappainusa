export default function Footer() {
  return (
    <footer className="bg-orange-800 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} BappaInUSA. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#showcase" className="hover:underline">Idols</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
