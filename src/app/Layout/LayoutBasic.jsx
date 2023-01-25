import React from "react";

const LayoutBasic = ({ children }) => {
    return (
        <div className="max-w-[1300px] mt-[30px] mb-[60px] mx-auto xl:px-6 lg:mb-12 md:px-4">
            {children}
        </div>
    );
};

export default LayoutBasic;
