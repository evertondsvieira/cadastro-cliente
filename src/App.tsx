import LoginProvider from "./Context";
import "./reset.css";
import RoutesMain from "./Routes";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <LoginProvider>
        <RoutesMain />
      </LoginProvider>
    </div>
  );
}

export default App;
