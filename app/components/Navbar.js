import Link from 'next/link';
const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px 20px', 
      backgroundColor: '#333', 
      color: 'white',
      flexWrap: 'wrap',
      '@media (maxWidth: 768px)': { // Adjust styles for screens smaller than 768px
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10px',
      },
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.6rem' }}>Spurthi Buchireddy</div>
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        flexWrap: 'wrap',
        '@media (maxWidth: 768px)': {
          marginTop: '10px',
        },
      }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link href="/experience" style={{ color: 'white', textDecoration: 'none' }}>Experience</Link>
        <Link href="/research" style={{ color: 'white', textDecoration: 'none' }}>Research</Link>
        <Link href="/education" style={{ color: 'white', textDecoration: 'none' }}>Education</Link>
      </div>
    </nav>
  );
};
export default Navbar;