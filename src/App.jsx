import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppcontextProvider } from "./Context/Appcontext";
import Routing from "./Routes/Routing";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppcontextProvider>
          <Routing />
        </AppcontextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App;