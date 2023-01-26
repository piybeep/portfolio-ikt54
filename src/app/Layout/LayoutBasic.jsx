import React from "react";

const LayoutBasic = ({ children }) => {
    return (
        <div className="max-w-[1348px] mt-[30px] mb-[60px] mx-auto px-6 lg:mb-12 md:px-4">
            {children}
        </div>
    );
};

export default LayoutBasic;
