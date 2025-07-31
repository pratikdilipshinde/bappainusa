export default function Footer() {
  return (
    <footer className="bg-[#99daff] font-noto text-gray-900 py-10 px-6 md:px-16 lg:px-32">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Contact Information */}
            <div>
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-gray-900">📍 Parsippany, New Jersey, USA</p>
                <p className="text-gray-900">📞 +1 747 356 1617 | +1 747 356 1615</p>
                
                {/* <p className="text-gray-100">📞 Phone: +91 98765 43210</p> */}
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col items-center">
                <p className="text-gray-900 text-center md:text-center mt-4">
                    © BappaInUSA <br /> All Rights Reserved
                </p>
                <div className="flex space-x-4">
                
                </div>
            </div>

            {/* Copyright Section */}
            <div className="flex flex-col items-end justify-end md:justify-end">
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-gray-900">📧 contact.bappainusa@gmail.com</p>
                
            </div>

            </div>
        </footer>
  );
}
