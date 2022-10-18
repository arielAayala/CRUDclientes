import FirebaseContext from "../context/dbContext";
import Home from "../containers/Home";

function App() {
  return (
    <FirebaseContext>
      <Home></Home>
    </FirebaseContext>
  );
}

export default App;
