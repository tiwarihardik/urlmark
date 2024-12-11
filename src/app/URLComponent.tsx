import { useState, useEffect } from "react";
import UrlProp from "@/types";
const UrlComponent = ({title, url, id, about }: UrlProp) => {
    const handleNavigate = () => {
        // Using window.location.href to navigate to the URL
        window.location.href = url;
    };

    const handleEdit = () => {
        alert(`Editing URL with ID: ${id}`);
    };

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulate loading for 2 seconds
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-row border p-6 rounded-md shadow-lg space-x-6 bg-white bg-opacity-80">
                <div className="flex-1 space-y-4">
                    <div className="skeleton skeleton-heading"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text"></div>
                </div>
                <div className="flex justify-end space-x-3">
                    <div className="skeleton skeleton-button"></div>
                    <div className="skeleton skeleton-button"></div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="flex flex-row border p-6 rounded-md shadow-lg space-x-6 bg-white bg-opacity-80 hover:bg-opacity-90 transition-all duration-300">
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{title ? title : url}</h3>
                <p className="text-gray-600">{about ? about : 'No description'}</p>
            </div>
            <div className="flex justify-end space-x-3">
                <button
                    onClick={handleNavigate}
                    className="bg-yellow-500 text-white py-2 px-5 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-300"
                >
                    ➡️ Go to URL
                </button>
                <button
                    onClick={handleEdit}
                    className="bg-blue-500 text-white py-2 px-5 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300"
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default UrlComponent;
