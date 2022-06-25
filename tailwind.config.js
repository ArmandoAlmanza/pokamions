/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            "white": "#ffffff",
            "black": "#000000",
            "lt-red": "#f87171",
            "lt-gray": "#F9F9F9",
            "dk-red": "#f43f5e",
            "purple": "#a78bfa"
            
        },
    },
    plugins: [],
};
