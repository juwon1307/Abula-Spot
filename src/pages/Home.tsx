import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Award, Clock, ArrowRight, Bike, CalendarCheck, Gift, MessageCircle, Megaphone, Utensils, Users, BriefcaseBusiness, GraduationCap, Heart } from 'lucide-react';
import Button from '../components/ui/Button';
import DishCard from '../components/ui/DishCard';
import './Home.css';

import img1 from '../assets/cto1.jpg';
import img2 from '../assets/cto2.jpg';
import img3 from '../assets/cto3.jpg';
import img4 from '../assets/cto4.jpg';
import img5 from '../assets/cto5.jpg';
import img6 from '../assets/ct.jpg';

import path1 from '../assets/path1.jpg';
import path2 from '../assets/path2.jpg';
import path3 from '../assets/path3.jpg';

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6];

const MOCK_DISHES = [
  {
    id: '1',
    image: path1,
    name: 'Grilled Salmon Puree',
    description: 'Fresh Atlantic salmon perfectly grilled with a side of asparagus and lemon butter sauce.',
    price: '₦ 24,000'
  },
  {
    id: '2',
    image: path2,
    name: 'Truffle Mushroom Risotto',
    description: 'Creamy Arborio rice slow-cooked with white wine, parmesan cheese, and black truffle shavings.',
    price: '₦ 21,000'
  },
  {
    id: '3',
    image: path3,
    name: 'Wagyu Beef Steak',
    description: 'Premium A5 grade beef served with roasted rustic potatoes and red wine reduction.',
    price: '₦ 55,000'
  }
];

const MOCK_GALLERY = [img1, img2, img3, img4];

const BUSINESS_GOALS = [
  { title: 'Online Food Delivery', text: 'Fast ordering for fresh meals delivered to homes, hostels, and offices.', icon: Bike },
  { title: 'Showcase Menu', text: 'Clear menu presentation so customers can browse dishes before they order.', icon: Utensils },
  { title: 'Brand Awareness', text: 'A stronger digital presence for Babs Abula Spot across Lagos.', icon: Megaphone },
  { title: 'Reservation Booking', text: 'Simple table booking for dine-in customers and group visits.', icon: CalendarCheck },
  { title: 'WhatsApp Ordering', text: 'Direct WhatsApp ordering for quick questions, meal requests, and follow-up.', icon: MessageCircle },
  { title: 'Customer Loyalty', text: 'Repeat-customer offers and community-focused rewards for regular buyers.', icon: Gift },
];

const TARGET_AUDIENCES = [
  { title: 'Students', text: 'Affordable meals for campus life and hostel delivery.', icon: GraduationCap },
  { title: 'Office Workers', text: 'Quick lunch, team orders, and reliable workday delivery.', icon: BriefcaseBusiness },
  { title: 'Families', text: 'Comforting meals and bulk orders for home dining.', icon: Users },
  { title: 'Food Lovers', text: 'Fresh local favorites for people who care about flavor.', icon: Heart },
  { title: 'Corporate Clients', text: 'Catering and scheduled meals for meetings and events.', icon: CalendarCheck },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <AnimatePresence>
            <motion.img 
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Restaurant Interior"
              className="hero-image"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 6, ease: "linear" } 
              }}
            />
          </AnimatePresence>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <span className="hero-subtitle">Restaurant & Online Food Delivery</span>
            <h1 className="hero-title">Fresh Abula, Served Here or Delivered.</h1>
            <p className="hero-desc">Enjoy Babs Abula Spot in our restaurant or order online for hot, satisfying meals delivered to your door.</p>
            <div className="hero-actions flex gap-md">
              <Link to="/order">
                <Button variant="primary" size="lg">Order Online</Button>
              </Link>
              <Link to="/menu">
                <Button variant="outline" size="lg" className="hero-btn-outline">Explore Menu</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="grid grid-cols-2 gap-xl items-center">
            <motion.div 
              className="about-image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" 
                alt="Chef preparing food" 
                className="about-image"
              />
              <div className="experience-badge glass-panel">
                <span className="badge-number">15+</span>
                <span className="badge-text">Years of<br/>Excellence</span>
              </div>
            </motion.div>
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="section-subtitle">Our Story</h4>
              <h2 className="section-title">A Local Restaurant Built for Dining In and Delivery</h2>
              <p className="text-secondary mt-4 mb-4">
                Babs Abula Spot serves comforting Nigerian meals for guests who want to dine with us and customers who want fast, reliable online food delivery.
              </p>
              <p className="text-secondary mb-4">
                From fresh Abula plates to hearty local favorites, every order is prepared with care, packed properly, and made to arrive ready to enjoy.
              </p>
              <Link to="/about">
                <Button variant="outline" className="mt-4 icon-btn">
                  Read Full Story <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Business Goals */}
      <section className="section goals-section bg-secondary">
        <div className="container">
          <div className="text-center mb-10">
            <h4 className="section-subtitle">What We Do</h4>
            <h2 className="section-title">Built Around Ordering, Delivery, and Real Hospitality</h2>
          </div>
          <div className="goals-grid">
            {BUSINESS_GOALS.map(({ title, text, icon: Icon }, idx) => (
              <motion.div
                key={title}
                className="goal-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <Icon size={24} className="text-primary" />
                <div>
                  <h3>{title}</h3>
                  <p className="text-secondary">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Dishes */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header flex justify-between items-center mb-10">
            <div>
              <h4 className="section-subtitle">Chef's Selection</h4>
              <h2 className="section-title">Featured Delights</h2>
            </div>
            <Link to="/menu" className="desktop-only text-primary flex items-center gap-sm slide-link">
              View Full Menu <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-lg">
            {MOCK_DISHES.map((dish) => (
              <DishCard key={dish.id} {...dish} />
            ))}
          </div>
          <div className="mobile-only mt-6 text-center">
            <Link to="/menu">
              <Button variant="outline">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Target Audience */}
      <section className="section audience-section bg-secondary">
        <div className="container">
          <div className="section-header flex justify-between items-center mb-10">
            <div>
              <h4 className="section-subtitle">Who We Serve</h4>
              <h2 className="section-title">Meals for Students, Workers, Families, and Teams</h2>
            </div>
            <Link to="/order" className="desktop-only text-primary flex items-center gap-sm slide-link">
              Start an Order <ArrowRight size={18} />
            </Link>
          </div>
          <div className="audience-grid">
            {TARGET_AUDIENCES.map(({ title, text, icon: Icon }) => (
              <div key={title} className="audience-card">
                <Icon size={28} className="text-primary" />
                <h3>{title}</h3>
                <p className="text-secondary">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="section why-us">
        <div className="container">
          <div className="text-center mb-10">
            <h4 className="section-subtitle">The Babs Abula Spot Difference</h4>
            <h2 className="section-title">Why Choose Us?</h2>
          </div>
          <div className="grid grid-cols-3 gap-xl">
            <motion.div 
              className="feature-card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="feature-icon-wrapper"><Leaf size={32} /></div>
              <h3>Fresh Meals</h3>
              <p className="text-secondary">We prepare each dish with fresh ingredients and the familiar flavors people come back for.</p>
            </motion.div>
            <motion.div 
              className="feature-card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="feature-icon-wrapper"><Award size={32} /></div>
              <h3>Restaurant Quality</h3>
              <p className="text-secondary">Enjoy the same care whether you eat at our restaurant or place an online delivery order.</p>
            </motion.div>
            <motion.div 
              className="feature-card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="feature-icon-wrapper"><Clock size={32} /></div>
              <h3>Convenient Delivery</h3>
              <p className="text-secondary">Order online and get hot meals delivered without losing the Babs Abula Spot experience.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Gallery Preview */}
      <section className="section gallery-preview-section overflow-hidden">
        <div className="container">
          <div className="text-center mb-10">
            <h4 className="section-subtitle">Visual Feast</h4>
            <h2 className="section-title">Our Ambience & Creations</h2>
          </div>
        </div>
        
        <div className="gallery-marquee">
          <div className="gallery-track">
            {[...MOCK_GALLERY, ...MOCK_GALLERY, ...MOCK_GALLERY, ...MOCK_GALLERY].map((img, idx) => (
              <div key={idx} className="gallery-slide">
                <img src={img} alt="Restaurant gallery item" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="container">
          <div className="text-center gallery-action-btn">
            <Link to="/gallery">
              <Button variant="outline">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="cta-section">
        <div className="cta-video-container">
          <video 
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="cta-video" 
          />
        </div>
        <div className="cta-overlay"></div>
        <div className="container relative z-10">
          <div className="cta-box glass-panel text-center">
            <h2>Ready to Experience Babs Abula Spot?</h2>
            <p className="text-secondary mt-4 mb-6">Visit the restaurant or place an online order for fresh food delivered to you.</p>
            <Link to="/order">
              <Button variant="primary" size="lg">Order or Book Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
