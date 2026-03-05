import { Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import snowboarderImg from './assets/snowboarder.jpg';
import './index.css'; 

function App() {
  const [staffRecords] = useState([
    { id: 1001, name: "Ola Nordmann", passDate: "2026-03-01", method: "Online (Vipps)", rentalDate: "2026-03-02", equipment: ["Alpine Skis", "Ski Boots", "Helmet", "Goggles"] },
    { id: 1002, name: "Kari Hansen", passDate: "2026-03-03", method: "In-person", rentalDate: "2026-03-03", equipment: ["Snowboard", "Bindings", "Helmet", "Wrist Guards"] },
    { id: 1003, name: "Lars Johansen", passDate: "2026-03-04", method: "Online (Card)", rentalDate: "-", equipment: [] },
    { id: 1004, name: "Anna Berg", passDate: "2026-03-02", method: "Online", rentalDate: "2026-03-05", equipment: ["Alpine Skis", "Ski Boots", "Helmet", "Poles", "Goggles"] },
    { id: 1005, name: "Erik Sæther", passDate: "2026-03-05", method: "In-person", rentalDate: "2026-03-05", equipment: ["Cross-Country Skis", "Boots", "Poles"] },
    { id: 1006, name: "Sofia Bergström", passDate: "2026-03-04", method: "Online (Vipps)", rentalDate: "2026-03-04", equipment: ["Snowboard", "Bindings", "Helmet"] },
    { id: 1007, name: "Magnus Andersen", passDate: "2026-03-01", method: "In-person", rentalDate: "2026-03-02", equipment: ["Alpine Skis", "Ski Boots", "Helmet", "Goggles", "Poles"] },
    { id: 1008, name: "Petra Olsen", passDate: "2026-03-03", method: "Online (Card)", rentalDate: "2026-03-03", equipment: ["Alpine Skis", "Ski Boots", "Helmet"] },
    { id: 1009, name: "Nils Johansen", passDate: "2026-03-02", method: "Online (Vipps)", rentalDate: "2026-03-05", equipment: ["Snowboard", "Bindings", "Helmet", "Wrist Guards", "Goggles"] },
    { id: 1010, name: "Ingrid Larsson", passDate: "2026-03-04", method: "In-person", rentalDate: "-", equipment: [] },
    { id: 1011, name: "Tom Halvorsen", passDate: "2026-03-05", method: "Online (Card)", rentalDate: "2026-03-05", equipment: ["Cross-Country Skis", "Boots", "Poles", "Backpack"] },
    { id: 1012, name: "Linda Möller", passDate: "2026-03-01", method: "In-person", rentalDate: "2026-03-01", equipment: ["Alpine Skis", "Ski Boots", "Helmet", "Goggles", "Poles", "Thermal Gloves"] },
    { id: 1013, name: "Sven Erickson", passDate: "2026-03-03", method: "Online (Vipps)", rentalDate: "2026-03-04", equipment: ["Snowboard", "Bindings", "Helmet", "Wrist Guards"] },
    { id: 1014, name: "Christina Nilsson", passDate: "2026-03-02", method: "Online (Card)", rentalDate: "2026-03-02", equipment: ["Alpine Skis", "Ski Boots", "Helmet"] },
    { id: 1015, name: "Jakob Larsen", passDate: "2026-03-05", method: "In-person", rentalDate: "2026-03-05", equipment: ["Alpine Skis", "Ski Boots", "Helmet", "Goggles", "Poles"] },
    { id: 1016, name: "Astrid Fredriksen", passDate: "2026-03-04", method: "Online (Vipps)", rentalDate: "2026-03-05", equipment: ["Cross-Country Skis", "Boots", "Poles"] },
    { id: 1017, name: "Victor Svendsen", passDate: "2026-03-01", method: "In-person", rentalDate: "2026-03-02", equipment: ["Snowboard", "Bindings", "Helmet", "Wrist Guards", "Goggles"] },
    { id: 1018, name: "Karen Ström", passDate: "2026-03-03", method: "Online (Card)", rentalDate: "-", equipment: [] },
    { id: 1019, name: "David Gustafsson", passDate: "2026-03-02", method: "Online (Vipps)", rentalDate: "2026-03-03", equipment: ["Alpine Skis", "Ski Boots", "Helmet", "Poles"] },
    { id: 1020, name: "Ellen Johansson", passDate: "2026-03-05", method: "In-person", rentalDate: "2026-03-05", equipment: ["Alpine Skis", "Ski Boots", "Helmet", "Goggles", "Poles", "Thermal Gloves"] },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterEquipment, setFilterEquipment] = useState('');

  // фільтр за поиском
  const filteredRecords = staffRecords.filter((record) => {
    const matchesName = record.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesId = record.id.toString().includes(searchQuery);
    const matchesEquipment = filterEquipment === '' || record.equipment.includes(filterEquipment);
    
    return (matchesName || matchesId) && matchesEquipment;
  });

  // вся екіпа
  const allEquipment = [...new Set(staffRecords.flatMap((r) => r.equipment))].sort();

  return (
    <div className="app">
      
      <header className="header-hero">
        <div className="header-content">
          <h1>Skyggefjell Skibakken</h1>
          <p className="tagline">Premium Norwegian Ski Resort • Built from Scratch</p>
          <div className="header-links">
            <a href="https://www.visitnorway.com" target="_blank" rel="noopener noreferrer" className="header-link">Visit Norway</a>
            <a href="https://www.skiinfo.com" target="_blank" rel="noopener noreferrer" className="header-link">Ski Info</a>
            <a href="mailto:info@skyggefjell.no" className="header-link">Contact</a>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&auto=format&fit=crop&q=80" 
          alt="Snow-covered mountain peaks" 
          className="header-bg"
        />
      </header>

      
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Home
        </NavLink>
        <NavLink to="/booking" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Booking
        </NavLink>
        <NavLink to="/restaurant" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Restaurant
        </NavLink>
        <NavLink to="/staff" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Staff Portal
        </NavLink>
      </nav>

      
      <main>
        <Routes>
          
          <Route
            path="/"
            element={
              <section className="home-section">
                <h2>Welcome to the Fjell</h2>
                <p className="intro-text">
                  New lifts, modern hotel, high-speed Wi-Fi, live cameras and personalized app experience.
                </p>
                
                <div className="hero-grid">
                  <div className="hero-item">
                    <img
                      src="https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Skier on snowy slopes"
                      className="hero-img"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x400/1e40af/ffffff?text=Skier+on+Snowy+Slopes";
                      }}
                    />
                    <div className="hero-caption">
                      <h4>Skier on Snowy Slopes</h4>
                      <p>Experience the thrill of downhill skiing</p>
                    </div>
                  </div>
                  <div className="hero-item">
                    <img
                      src={snowboarderImg}
                      alt="Snowboarder on mountain slope"
                      className="hero-img"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x400/1e40af/ffffff?text=Snowboarder";
                      }}
                    />
                    <div className="hero-caption">
                      <h4>Snowboarder in Action</h4>
                      <p>Premium snowboarding equipment available</p>
                    </div>
                  </div>
                  <div className="hero-item">
                    <img
                      src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Mountain landscape"
                      className="hero-img"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x400/1e40af/ffffff?text=Mountain+Landscape";
                      }}
                    />
                    <div className="hero-caption">
                      <h4>Mountain Landscape</h4>
                      <p>Breathtaking Norwegian mountain views</p>
                    </div>
                  </div>
                </div>

                <div className="features">
                  <div className="feature-card">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/681/681494.png" 
                      alt="Mountains" 
                      className="feature-icon"
                    />
                    <h3>Premier Terrain</h3>
                    <p>45+ ski runs with modern lift systems</p>
                  </div>
                  <div className="feature-card">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/924/924514.png" 
                      alt="Hotel" 
                      className="feature-icon"
                    />
                    <h3>Luxury Lodging</h3>
                    <p>5-star hotel and alpine cottages</p>
                  </div>
                  <div className="feature-card">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/1995/1995467.png" 
                      alt="Restaurant" 
                      className="feature-icon"
                    />
                    <h3>Fine Dining</h3>
                    <p>Michelin-quality mountain restaurants</p>
                  </div>
                </div>
              </section>
            }
          />

          
          <Route
            path="/booking"
            element={
              <section>
                <h2>Book Your Stay</h2>
                <form>
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                  <input type="date" required />
                  <input type="date" required />
                  <button type="submit" className="btn btn-guest">
                    Confirm Booking
                  </button>
                </form>
              </section>
            }
          />

          
          <Route
            path="/restaurant"
            element={
              <section>
                <h2>Mountain Restaurant Menu</h2>
                <div className="menu-item">
                  <h3>Reindeer Stew</h3>
                  <p>Slow-cooked reindeer with root vegetables — 280 NOK</p>
                </div>
                <div className="menu-item">
                  <h3>Grilled Arctic Char</h3>
                  <p>Fresh char with herb potatoes — 320 NOK</p>
                </div>
                <div className="menu-item">
                  <h3>Cloudberry Crème Brûlée</h3>
                  <p>Classic dessert with Norwegian cloudberries — 120 NOK</p>
                </div>
              </section>
            }
          />

          
          <Route
            path="/staff"
            element={
              <section>
                <h2>Ski Pass & Rental Records</h2>
                
                <div className="search-container">
                  <input 
                    type="text" 
                    placeholder="Search by name or ID..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  
                  <select 
                    value={filterEquipment}
                    onChange={(e) => setFilterEquipment(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All Equipment</option>
                    {allEquipment.map((eq) => (
                      <option key={eq} value={eq}>{eq}</option>
                    ))}
                  </select>
                </div>

                <div className="record-stats">
                  <p>Showing {filteredRecords.length} of {staffRecords.length} records</p>
                </div>

                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Guest Name</th>
                      <th>Ski Pass Purchase</th>
                      <th>Method</th>
                      <th>Rental Date</th>
                      <th>Equipment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRecords.length > 0 ? (
                      filteredRecords.map((r) => (
                        <tr key={r.id}>
                          <td>{r.id}</td>
                          <td>{r.name}</td>
                          <td>{r.passDate}</td>
                          <td>{r.method}</td>
                          <td>{r.rentalDate}</td>
                          <td>
                            {r.equipment.length > 0 ? (
                              <div className="equipment-tags">
                                {r.equipment.map((item, idx) => (
                                  <span key={idx} className="equipment-tag">{item}</span>
                                ))}
                              </div>
                            ) : (
                              <span className="no-equipment">—</span>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="no-results">No records found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </section>
            }
          />
        </Routes>
      </main>

      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Skyggefjell Skibakken</h4>
            <p>Premium Norwegian ski resort experience</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:info@skyggefjell.no">info@skyggefjell.no</a></p>
            <p>Phone: <a href="tel:+4747111111">+47 47 11 1111</a></p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Skyggefjell Skibakken AS • All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;