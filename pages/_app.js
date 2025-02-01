import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <div style={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;