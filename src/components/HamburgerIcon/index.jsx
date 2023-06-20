import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const HamburgerButton = ({action}) => {
    const [checked, setChecked] = useState(false);
    const hamburgerRef = useRef(null);
    const lineTopBottomRef = useRef(null);

    const handleClick = () => {
        setChecked((prev) => !prev);
        action();
    };

    useEffect(() => {
        if (!checked) {
            if (checked === false) {
                const hamburgerRefElem = hamburgerRef.current;
                const lineTopBottomRefElem = lineTopBottomRef.current;
                gsap.to(hamburgerRefElem, {
                    transform: "rotate(0deg)",
                });
                gsap.to(lineTopBottomRefElem, {
                    strokeDasharray: "12 63",
                    strokeDashoffset: "0",
                });
            }
            return;
        }
        const hamburgerRefElem = hamburgerRef.current;
        gsap.to(hamburgerRefElem, {
            transform: "rotate(-45deg)",
        });
        const lineTopBottomRefElem = lineTopBottomRef.current;
        gsap.to(lineTopBottomRefElem, {
            strokeDasharray: "20 300",
            strokeDashoffset: "-32.42",
        });
    }, [checked]);

    return (
        <label onClick={handleClick} className="hamburger btn-busqueda">
            <div ref={hamburgerRef}>
                <svg viewBox="0 0 32 32">
                    <path
                        ref={lineTopBottomRef}
                        className="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </div>
        </label>
    );
};

export default HamburgerButton;
