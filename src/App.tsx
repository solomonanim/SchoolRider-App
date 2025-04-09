
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SchoolRiderApp } from "./components/plugins/SchoolRiderPlugin";
import { AppProvider, useAppContext } from "./context/AppContext";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Documentation from "./pages/Documentation";
import TermsConditions from "./pages/TermsConditions";
import Privacy from "./pages/Privacy";
import Tutorials from "./pages/Tutorials";
import Changelog from "./pages/Changelog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { MobileFooter } from "./components/layout/MobileFooter";
import CreatePost from "./pages/CreatePost";

const queryClient = new QueryClient();

// Protected route component for authenticated users
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAppContext();
  
  if (!isAuthenticated) {
    return <Navigate to="/app" replace />;
  }
  
  return <>{children}</>;
};

const App = () => {
  // Use HashRouter instead of BrowserRouter for GitHub Pages compatibility
  const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <div className="min-h-screen">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/app" element={<SchoolRiderApp />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/create-post" element={
                  <ProtectedRoute>
                    <CreatePost />
                  </ProtectedRoute>
                } />
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
              <MobileFooter />
            </div>
          </Router>
        </TooltipProvider>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
