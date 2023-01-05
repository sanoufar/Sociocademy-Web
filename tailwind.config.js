/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            dropShadow: {
                md: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
            fontFamily: {
                poppins: ["Poppins"],
            },
        },
    },
    variants: {
        extend: {},
    },
};
