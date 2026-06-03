import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bike, CalendarCheck, MessageCircle, PartyPopper } from 'lucide-react';
import Button from '../components/ui/Button';
import './OrderContact.css';

type OrderTab = 'delivery' | 'reservation' | 'catering' | 'whatsapp';

const WHATSAPP_NUMBER = '2349036152411';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello Babs Abula Spot, I want to place an order.');

const TABS: Array<{ id: OrderTab; label: string; icon: typeof Bike }> = [
  { id: 'delivery', label: 'Delivery Request', icon: Bike },
  { id: 'reservation', label: 'Reservation', icon: CalendarCheck },
  { id: 'catering', label: 'Event Catering', icon: PartyPopper },
  { id: 'whatsapp', label: 'WhatsApp Order', icon: MessageCircle },
];

const Order = () => {
  const [activeTab, setActiveTab] = useState<OrderTab>('delivery');

  return (
    <div className="order-page pb-20">
      <section className="page-header flex items-center justify-center text-center">
        <div className="page-header-overlay"></div>
        <div className="container relative z-10">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">Order, Book, or Cater With Us</h1>
          <p className="text-white text-xl opacity-90 max-w-2xl mx-auto">
            Delivery requests, table reservations, WhatsApp ordering, and event catering for students, office workers, families, food lovers, and corporate clients.
          </p>
        </div>
      </section>

      <section className="container mt-12 pt-10">
        <div className="service-tabs">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              className={`service-tab ${activeTab === id ? 'active' : ''}`}
              onClick={() => setActiveTab(id)}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'delivery' && (
              <motion.div
                key="delivery"
                className="glass-panel p-8 md:p-12 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-heading mb-2">Delivery Request</h2>
                  <p className="text-secondary">Tell us what you want, where you are, and when you need it delivered.</p>
                </div>
                <form className="reservation-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-md mb-6">
                    <div className="form-group">
                      <label className="form-label block mb-2">Full Name</label>
                      <input type="text" className="form-input w-full p-4" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label block mb-2">Phone Number</label>
                      <input type="tel" className="form-input w-full p-4" placeholder="09036152411" required />
                    </div>
                  </div>
                  <div className="form-group mb-6">
                    <label className="form-label block mb-2">Delivery Address</label>
                    <input type="text" className="form-input w-full p-4" placeholder="Hostel, office, estate, or street address" required />
                  </div>
                  <div className="form-group mb-6">
                    <label className="form-label block mb-2">Meal Request</label>
                    <textarea className="form-input w-full p-4 h-32 resize-none" placeholder="List your meals, quantity, spice level, and any notes." required />
                  </div>
                  <div className="grid grid-cols-2 gap-md mb-8">
                    <div className="form-group">
                      <label className="form-label block mb-2">Customer Type</label>
                      <select className="form-input w-full p-4">
                        <option>Student</option>
                        <option>Office Worker</option>
                        <option>Family</option>
                        <option>Food Lover</option>
                        <option>Corporate Client</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label block mb-2">Preferred Time</label>
                      <input type="time" className="form-input w-full p-4" />
                    </div>
                  </div>
                  <Button type="submit" size="lg" fullWidth>Submit Delivery Request</Button>
                </form>
              </motion.div>
            )}

            {activeTab === 'reservation' && (
              <motion.div
                key="reservation"
                className="glass-panel p-8 md:p-12 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-heading mb-2">Reserve Your Table</h2>
                  <p className="text-secondary">Book a table for family meals, casual dining, work lunch, or celebrations.</p>
                </div>
                <form className="reservation-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-md mb-6">
                    <div className="form-group">
                      <label className="form-label block mb-2">Date</label>
                      <input type="date" className="form-input w-full p-4" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label block mb-2">Time</label>
                      <input type="time" className="form-input w-full p-4" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-md mb-8">
                    <div className="form-group">
                      <label className="form-label block mb-2">Number of Guests</label>
                      <select className="form-input w-full p-4" required>
                        <option value="">Select guests</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map((n) => <option key={n} value={n}>{n} People</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label block mb-2">Phone Number</label>
                      <input type="tel" className="form-input w-full p-4" placeholder="Your contact number" required />
                    </div>
                  </div>
                  <Button type="submit" size="lg" fullWidth>Confirm Reservation</Button>
                </form>
              </motion.div>
            )}

            {activeTab === 'catering' && (
              <motion.div
                key="catering"
                className="glass-panel p-8 md:p-12 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-heading mb-2">Event Catering Booking</h2>
                  <p className="text-secondary">Request catering for office meetings, student events, family parties, and corporate functions.</p>
                </div>
                <form className="reservation-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-md mb-6">
                    <div className="form-group">
                      <label className="form-label block mb-2">Event Type</label>
                      <select className="form-input w-full p-4" required>
                        <option value="">Select event type</option>
                        <option>Corporate Meeting</option>
                        <option>Family Event</option>
                        <option>Student Event</option>
                        <option>Birthday</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label block mb-2">Number of Guests</label>
                      <input type="number" min="10" className="form-input w-full p-4" placeholder="50" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-md mb-6">
                    <div className="form-group">
                      <label className="form-label block mb-2">Event Date</label>
                      <input type="date" className="form-input w-full p-4" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label block mb-2">Contact Number</label>
                      <input type="tel" className="form-input w-full p-4" placeholder="Your phone number" required />
                    </div>
                  </div>
                  <div className="form-group mb-8">
                    <label className="form-label block mb-2">Catering Notes</label>
                    <textarea className="form-input w-full p-4 h-32 resize-none" placeholder="Tell us the meals, location, serving style, and budget range." required />
                  </div>
                  <Button type="submit" size="lg" fullWidth>Request Catering Quote</Button>
                </form>
              </motion.div>
            )}

            {activeTab === 'whatsapp' && (
              <motion.div
                key="whatsapp"
                className="whatsapp-order-panel glass-panel p-8 md:p-12 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
              >
                <MessageCircle size={48} className="text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-heading mb-3">Order Directly on WhatsApp</h2>
                <p className="text-secondary mb-8">
                  Chat with us for today&apos;s menu, delivery fees, bulk orders, loyalty offers, and quick order confirmation.
                </p>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noreferrer">
                  <Button type="button" size="lg" className="icon-btn justify-center">
                    <MessageCircle size={18} />
                    Continue to WhatsApp
                  </Button>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Order;
