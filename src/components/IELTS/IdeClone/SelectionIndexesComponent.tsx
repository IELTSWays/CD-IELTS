import React, { useEffect, useRef, useState } from 'react';

function SelectionIndexesComponent() {
    const containerRef = useRef(null);
    const [selectionIndexes, setSelectionIndexes] = useState(null);

    useEffect(() => {
        function getSelectionIndexes(containerNode) {
            const sel = window.getSelection();
            if (sel.rangeCount === 0) {
                return null;
            }

            const range = sel.getRangeAt(0);
            const startNode = range.startContainer;
            const endNode = range.endContainer;
            let startIndex = range.startOffset;
            let endIndex = range.endOffset;

            // Traverse the DOM to find the index of the start and end nodes
            let currentIndex = 0;
            let startFound = false;
            let endFound = false;

            function traverse(node) {
                if (node === startNode) {
                    startFound = true;
                }
                if (node === endNode) {
                    endFound = true;
                }

                if (node.nodeType === Node.TEXT_NODE) {
                    if (node === startNode && !startFound) {
                        startIndex += currentIndex;
                    }
                    if (node === endNode && !endFound) {
                        endIndex += currentIndex;
                    }
                    currentIndex += node.textContent.length;
                } else {
                    for (let i = 0; i < node.childNodes.length; i++) {
                        traverse(node.childNodes[i]);
                    }
                }
            }

            traverse(containerNode);

            return { startIndex, endIndex };
        }

        function handleMouseUp() {
            const selectionIndexes = getSelectionIndexes(containerRef.current);
            setSelectionIndexes(selectionIndexes);
        }

        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div ref={containerRef}>
            {/* Your content here */}
            {/* This div will be used as the container for selecting text */}
        </div>
    );
}

export default SelectionIndexesComponent;