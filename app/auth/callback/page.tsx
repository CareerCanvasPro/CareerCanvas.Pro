"use client";

import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AuthCallbackPage() {
    const handleRetry = () => {
        window.location.href = window.location.href;
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl max-w-md text-center border border-gray-200"
            >
                <div className="flex justify-center">
                    <AlertCircle className="text-red-500 w-14 h-14" />
                </div>
                <h1 className="text-3xl font-semibold text-gray-900 mt-4">Oops! Wrong Device</h1>
                <p className="text-gray-700 mt-3 text-lg leading-relaxed">
                    Please open the magic link on a device that has the <span className="font-semibold text-blue-600">Career Canvas</span> app installed.
                </p>
                <button
                    onClick={handleRetry}
                    className="mt-6 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    Retry Link
                </button>
            </motion.div>
        </div>
    );
}
