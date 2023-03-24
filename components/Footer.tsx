export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4">
      <div className="container mx-auto px-4 grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">123 Main St, Anytown, USA</p>
          <p className="text-sm">(555) 555-5555</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <p className="text-center mt-4">
          &copy; 2023 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
