import React, { useRef, useEffect, useState } from 'react';

const useGetHeight = (myRef) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (myRef.current) {
            const height = myRef.current.clientHeight;
            setHeight(height);
        }
    }, [myRef]);

    return { height, setHeight };
};

export default useGetHeight;
