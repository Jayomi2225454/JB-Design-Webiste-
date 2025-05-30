import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-interior-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/lovable-uploads/c6d08345-b1f4-4e83-8953-55f48c047d17.png" alt="JB Design Logo" className="h-40 w-40 object-contain" />
              <span className="font-serif text-xl font-semibold"></span>
            </div>
            <p className="text-white/70 mb-6 text-lg">The Philosophical Study Of Beauty And Art </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/kitchen" className="text-white/70 hover:text-white text-sm">Kitchen Designs</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm">Full Home Interiors</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm">Office Interiors</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm">Hotel Interiors</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm">Home Renovation</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white text-sm">Restaurant Interiors</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/70 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/projects" className="text-white/70 hover:text-white text-sm">Projects</Link></li>
              <li><Link to="/consultation" className="text-white/70 hover:text-white text-sm">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} JB Design. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;