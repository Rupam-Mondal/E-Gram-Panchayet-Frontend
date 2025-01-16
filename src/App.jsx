import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppcontextProvider } from "./Context/Appcontext";
import Routing from "./Routes/Routing";
import Modal from "./Components/Modals/Modal";

function App() {
  const queryClient = new QueryClient();
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppcontextProvider>
          <Routing />
          <Modal/>
        </AppcontextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App;