import React from "react";
import FoodSpinner from "./components/spinner/FoodSpinner";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Ăn gì bây giờ...</h1>
                <FoodSpinner />
            </div>
        </div>
    );
};

export default App;
