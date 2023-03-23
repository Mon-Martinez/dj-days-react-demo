import './App.css';
import Header from './components/Header';
import AlbumMessage from './components/AlbumMessage';
import AlbumListing from './components/AlbumListing';

function App() {
  return (
    <>
      <Header HeaderContent="DJ Days React Demo"/>
      <AlbumMessage MessageContent="You need more albums"/>
      <AlbumListing
        AlbumName="Lemonade"
        AlbumArtist="Beyonce"
        AlbumGenre="RnB Pop"
      /> 
      <AlbumListing
        AlbumName="DAMN."
        AlbumArtist="Kendrick Lamar"
        AlbumGenre="Hip Hop"
      />

      <AlbumListing
        AlbumName="Back to Black"
        AlbumArtist="Amy Winehouse"
        AlbumGenre="RnB"
      />
    </>
  );
}

export default App;
