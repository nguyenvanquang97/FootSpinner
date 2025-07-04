import React, { useState } from "react";
import FoodSpinner from "./components/spinner/FoodSpinner";
import PayerSpinner from "./components/spinner/PayerSpinner";
import { Utensils, CreditCard } from "lucide-react";

type Mode = 'food' | 'payer';

const App = () => {
    const [mode, setMode] = useState<Mode>('food');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mode Toggle */}
            <div className="sticky top-0 z-50 bg-white shadow-md border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setMode('food')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                                mode === 'food'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            <Utensils className="w-5 h-5" />
                            Quay chọn món ăn
                        </button>
                        <button
                            onClick={() => setMode('payer')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                                mode === 'payer'
                                    ? 'bg-red-600 text-white shadow-lg'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            <CreditCard className="w-5 h-5" />
                            Quay chọn người trả tiền
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="py-8">
                <div className="container mx-auto px-4">
                    {mode === 'food' ? (
                        <>
                            <h1 className="text-4xl font-bold text-center mb-8">Ăn gì bây giờ...</h1>
                            <FoodSpinner />
                        </>
                    ) : (
                        <PayerSpinner />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
