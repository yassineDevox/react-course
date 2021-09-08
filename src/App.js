import Address from './components/profile/Address';
import FullName from './components/profile/FullName';
import ProfilePhoto from './components/profile/ProfilePhoto';

function App() {
  return (
    <>
      <div class="d-flex border align-items-center">
        <ProfilePhoto />
        <div>

          <FullName />
          <Address />
        </div>
      </div>
    </>
  );
}

export default App;
