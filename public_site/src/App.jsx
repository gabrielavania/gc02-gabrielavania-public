import { useState } from "react";

// ROUTER
import { RouterProvider } from "react-router";
import { router } from "./router";

// PAGES
// import Homepage from "./pages/HomePage";
// import DetailCuisine from "./pages/DetailCuisine";

// COMPONENTS
// import NavBar from "./components/NavBar";
// import HomeContent from "./components/HomeContent";
// import Footer from "./components/Footer";

function App() {
  const dataCuisine = [
    {
      id: 1,
      name: "Cheeseburger",
      description:
        "Juicy grilled beef patty with cheddar cheese and fresh toppings.",
      price: 75000,
      imgUrl:
        "https://www.certifiedangusbeef.com/_next/image?url=https%3A%2F%2Fappetizing-cactus-7139e93734.media.strapiapp.com%2FUltimate_Double_Cheeseburger_da3c3f6a9b.jpeg&w=1920&q=75",
      categoryId: 1,
      authorId: 1,
    },
    {
      id: 2,
      name: "Fish and Chips",
      description:
        "Crispy battered fish with golden fries, served with tartar sauce.",
      price: 68000,
      imgUrl:
        "https://i0.wp.com/travelandmunchies.com/wp-content/uploads/2022/12/IMG_9513-scaled.jpg?fit=2560%2C1828&ssl=1",
      categoryId: 1,
      authorId: 2,
    },
    {
      id: 3,
      name: "Spaghetti Carbonara",
      description:
        "Classic creamy pasta with pancetta, egg, and parmesan cheese.",
      price: 85000,
      imgUrl:
        "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
      categoryId: 2,
      authorId: 3,
    },
    {
      id: 4,
      name: "Margherita Pizza",
      description: "Thin crust pizza with tomato, mozzarella, and fresh basil.",
      price: 90000,
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067",
      categoryId: 2,
      authorId: 4,
    },
    {
      id: 5,
      name: "Nasi Goreng",
      description: "Indonesia’s signature fried rice with chicken and egg.",
      price: 45000,
      imgUrl:
        "https://dcostseafood.id/wp-content/uploads/2021/12/Nasi-Goreng-Tom-Yum.jpg",
      categoryId: 3,
      authorId: 5,
    },
    {
      id: 6,
      name: "Rendang",
      description: "Spicy slow-cooked beef in coconut milk and spices.",
      price: 95000,
      imgUrl:
        "https://awsimages.detik.net.id/community/media/visual/2025/03/27/resep-rendang-asli-padang-1743042209951_43.jpeg?w=1200",
      categoryId: 3,
      authorId: 1,
    },
  ];

  const category = [
    {
      id: 1,
      name: "Western",
    },
    {
      id: 2,
      name: "Italian",
    },
    {
      id: 3,
      name: "Indonesian",
    },
    {
      id: 4,
      name: "Dessert",
    },
    {
      id: 5,
      name: "Drinks",
    },
  ];

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
