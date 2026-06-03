import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { LocateFixed, MapPin, Phone, Mail, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import './OrderContact.css';

const DEFAULT_LOCATION = {
  label: 'Babs Abula Spot, Lagos',
  lat: 6.5244,
  lng: 3.3792,
};

const buildMapSrc = (lat: number, lng: number) => {
  const offset = 0.012;
  const bbox = `${lng - offset},${lat - offset},${lng + offset},${lat + offset}`;

  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
};

const Contact = () => {
  const [mapLocation, setMapLocation] = useState(DEFAULT_LOCATION);
  const [locationStatus, setLocationStatus] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  const mapSrc = useMemo(
    () => buildMapSrc(mapLocation.lat, mapLocation.lng),
    [mapLocation.lat, mapLocation.lng]
  );

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('Current location is not supported by this browser.');
      return;
    }

    setIsLocating(true);
    setLocationStatus('Getting your current location...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setMapLocation({
          label: 'Your current location',
          lat: latitude,
          lng: longitude,
        });
        setLocationStatus('Map updated to your current location.');
        setIsLocating(false);
      },
      () => {
        setLocationStatus('Location access was denied or unavailable.');
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  return (
    <div className="contact-page pb-20">
      {/* Header */}
      <section className="page-header flex items-center justify-center text-center">
        <div className="page-header-overlay"></div>
        <motion.div 
          className="container relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-white text-xl opacity-90 max-w-2xl mx-auto">
            Reach us for delivery requests, WhatsApp orders, table reservations, loyalty offers, and event catering bookings.
          </p>
        </motion.div>
      </section>

      <section className="container mt-12 pt-10">
        <div className="grid grid-cols-2 gap-xl">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="section-subtitle">Reach Us</h4>
            <h2 className="section-title">Contact Information</h2>
            <p className="text-secondary mb-8 text-lg">
              Our team supports students, office workers, families, food lovers, and corporate clients with online delivery, dine-in reservations, and catering requests.
            </p>
            
            <div className="contact-info-list flex-col gap-lg">
              <div className="contact-info-item flex gap-md items-center">
                <div className="icon-circle border-primary text-primary"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-heading font-semibold text-xl">Address</h4>
                  <p className="text-secondary">Lagos</p>
                </div>
              </div>
              <div className="contact-info-item flex gap-md items-center mt-6">
                <div className="icon-circle border-primary text-primary"><Phone size={24} /></div>
                <div>
                  <h4 className="font-heading font-semibold text-xl">Phone</h4>
                  <p className="text-secondary">09036152411</p>
                </div>
              </div>
              <div className="contact-info-item flex gap-md items-center mt-6">
                <div className="icon-circle border-primary text-primary"><Mail size={24} /></div>
                <div>
                  <h4 className="font-heading font-semibold text-xl">Email</h4>
                  <p className="text-secondary">hello@abulaspotrestaurant.com</p>
                </div>
              </div>
            </div>

            <div className="map-container mt-12 rounded-lg overflow-hidden shadow-md">
              <iframe
                title={mapLocation.label}
                className="active-map"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-controls">
                <div>
                  <span className="map-label">{mapLocation.label}</span>
                  {locationStatus && <p className="map-status">{locationStatus}</p>}
                </div>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="icon-btn"
                  onClick={handleUseCurrentLocation}
                  disabled={isLocating}
                >
                  <LocateFixed size={16} />
                  {isLocating ? 'Locating...' : 'Use my location'}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="glass-panel p-8 md:p-12 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-heading mb-6">Send a Request</h3>
            <form className="flex-col gap-md" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group mb-6">
                <label className="form-label block mb-2">Full Name</label>
                <input type="text" className="form-input w-full p-4" placeholder="Your Name" required />
              </div>
              <div className="form-group mb-6">
                <label className="form-label block mb-2">Email Address</label>
                <input type="email" className="form-input w-full p-4" placeholder="your@email.com" required />
              </div>
              <div className="form-group mb-6">
                <label className="form-label block mb-2">Subject</label>
                <select className="form-input w-full p-4" required>
                  <option value="">Select request type</option>
                  <option>Delivery Request</option>
                  <option>WhatsApp Ordering</option>
                  <option>Reservation Booking</option>
                  <option>Event Catering Booking</option>
                  <option>Customer Loyalty</option>
                  <option>Corporate Order</option>
                </select>
              </div>
              <div className="form-group mb-8">
                <label className="form-label block mb-2">Message</label>
                <textarea className="form-input w-full p-4 h-32 resize-none" placeholder="Write your order, event details, delivery address, or loyalty request here..." required></textarea>
              </div>
              <Button type="submit" size="lg" fullWidth className="icon-btn justify-center">
                Send Message <Send size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
