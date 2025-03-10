
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SchoolRiderPlugin } from "./components/plugins/SchoolRiderPlugin";
import { AppProvider } from "./context/AppContext";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Documentation from "./pages/Documentation";
import TermsConditions from "./pages/TermsConditions";
import Privacy from "./pages/Privacy";
import Tutorials from "./pages/Tutorials";
import Changelog from "./pages/Changelog";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/plugin" element={<SchoolRiderPlugin />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
