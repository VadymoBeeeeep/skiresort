import { Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css'; 

function App() {
  
  const [staffRecords] = useState([
    { id: 1001, name: "Ola Nordmann", passDate: "2026-03-01", method: "Online (Vipps)", rentalDate: "2026-03-02", equipment: "Skis + Boots" },
    { id: 1002, name: "Kari Hansen", passDate: "2026-03-03", method: "In-person", rentalDate: "2026-03-03", equipment: "Snowboard" },
    { id: 1003, name: "Lars Johansen", passDate: "2026-03-04", method: "Online (Card)", rentalDate: "-", equipment: "-" },
    { id: 1004, name: "Anna Berg", passDate: "2026-03-02", method: "Online", rentalDate: "2026-03-05", equipment: "Helmet + Poles" },
  ]);

  return (
    <div className="app">
      
      <header>
        <h1>Skyggefjell Skibakken</h1>
        <p>Premium Norwegian Ski Resort • Built from Scratch</p>
      </header>

      
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/restaurant">Restaurant</NavLink>
        <NavLink to="/staff">Staff Portal</NavLink>
      </nav>

      
      <main>
        <Routes>
          
          <Route
            path="/"
            element={
              <section>
                <h2>Welcome to the Fjell</h2>
                <p>
                  New lifts, modern hotel, high-speed Wi-Fi, live cameras and personalized app experience.
                </p>
                
                <img
                  src="https://cdn.sanity.io/images/jlrwvnbf/production/1324a748f87c1664fdaea70cc72866b581117fca-9252x5202.jpg?w=1600&auto=format"
                  alt="Mountain view"
                  style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: '12px', marginTop: '2rem' }}
                />
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
                    {staffRecords.map((r) => (
                      <tr key={r.id}>
                        <td>{r.id}</td>
                        <td>{r.name}</td>
                        <td>{r.passDate}</td>
                        <td>{r.method}</td>
                        <td>{r.rentalDate}</td>
                        <td>{r.equipment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            }
          />
        </Routes>
      </main>

      
      <footer>
        © 2026 Skyggefjell Skibakken AS • All rights reserved
      </footer>
    </div>
  );
}

export default App;