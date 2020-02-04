// *** This component is a hook that tracks mouse position on the DOM *** //

// *** MODULES *** //
import { useEffect, useState } from 'react';

// *** HOOK *** //
/*
/ Mouse-position tracker (custom hook)
/ hooks utilize the 'useHookName' syntax; you should use this to make hooks easily recognizable
*/
const useMousePosition = () => {
    // Setup state to track x and y position (useState)
    // Setup event to listen to mouse movement
    // remove event listener if unmounted (useEffect)

    const [position, setPosition] = useState({ x: 0, y: 0}); // <-- store x/y as object, since they are linked and both are to be updated

    useEffect(() => {
        // update mouse position to state
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            });
        };
        
        // Add mouse-move event listener
        document.addEventListener('mousemove', handleMouseMove);

        // Unmount clean up of listener
        return () => {
            // Remove mouse-move event listener
            document.removeEventListener('mousemove', handleMouseMove)
        };
    }, []);

    return position;
}

// *** EXPORT *** //
export { useMousePosition as default };