import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "@/AppRoutes";
import ThemeProvider from "@/ThemeProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
