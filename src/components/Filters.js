import React from 'react';

const Filters = () => {
    return (
        <div className="bg-gray-100 py-4">
            <div className="max-w-7xl mx-auto px-4 flex space-x-4">
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    Veg
                </button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    Non-Veg
                </button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    Offers
                </button>
            </div>
        </div>
    );
};

export default Filters;
