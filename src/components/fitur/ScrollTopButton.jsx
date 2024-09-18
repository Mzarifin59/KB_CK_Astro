import React from "react";

const ScrollToTopButton = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 bg-custom-blue text-white p-2 rounded-sm shadow-lg"
    >
      <img src="/arrow-up.png" alt="Scroll to top" width="30px" />
    </button>
  );
};

export default ScrollToTopButton;
