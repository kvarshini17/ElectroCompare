import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON Body Parser for API routes
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "ElectroCompare API is running" });
  });

  // Sample Product Data API
  const products = [
    { id: 1, name: "iPhone 15 Pro", brand: "Apple", price: 999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Galaxy S24 Ultra", brand: "Samsung", price: 1299, image: "https://images.unsplash.com/photo-1610945265064-0e31e5506b74?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "XPS 15 Premium", brand: "Dell", price: 1499, image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=400&q=80" }
  ];

  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  // Handle Frontend - Vite Middleware for Development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production Static Files
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    // Fallback for all other requests to index.html
    app.get("*", (req, res) => {
        const requestedFile = req.path.endsWith('.html') ? req.path : req.path + '.html';
        const filePath = path.join(distPath, requestedFile);
        if (fs.existsSync(filePath)) {
            res.sendFile(filePath);
        } else {
            res.sendFile(path.join(distPath, "index.html"));
        }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`ElectroCompare server running on http://localhost:${PORT}`);
  });
}

startServer();
