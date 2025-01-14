import { AppcontextProvider } from "./Context/Appcontext";
import Routing from "./Routes/Routing";

function App(){
  return (
    <>
      <AppcontextProvider>
        <Routing />
      </AppcontextProvider>
    </>
  )
}

export default App;