// app/layout.js
import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0,
        padding: 0,
        minHeight: '100vh', // Ensure the body covers the full viewport height
        position: 'relative', // Required for the watermark
      }}>
        {/* Watermark Background */}
        <div style={{ 
          position: 'fixed', // Fix the watermark to the screen
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundImage: 'url(/pic.jpg)', // Add watermark background image
          backgroundSize: 'cover', // Stretch the watermark to fit the screen
          backgroundPosition: 'center', // Center the watermark
          backgroundRepeat: 'no-repeat', // Prevent the watermark from repeating
          opacity: 0.1, // Adjust the opacity of the watermark (0.2 = 20% opacity)
          zIndex: -1, // Ensure the watermark stays behind the content
        }}></div>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div style={{ 
          position: 'relative', // Ensure content stays above the watermark
          zIndex: 1, 
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}