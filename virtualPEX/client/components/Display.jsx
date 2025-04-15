import React, { useState } from 'react';

const Display = () => {
    const [selectedWord, setSelectedWord] = useState('');

    const handleWordClick = (word) => {
        setSelectedWord(word);
    };

    const sampleText = "Click on any word in this sentence to display it.";

    return (
        <div>
            <p>
                {sampleText.split(' ').map((word, index) => (
                    <span
                        key={index}
                        onClick={() => handleWordClick(word)}
                        style={{ cursor: 'pointer', marginRight: '5px' }}
                    >
                        {word}
                    </span>
                ))}
            </p>
            {selectedWord && (
                <div style={{ fontSize: '40pt', marginTop: '20px' }}>
                    {selectedWord}
                </div>
            )}
        </div>
    );
};

export default Display;