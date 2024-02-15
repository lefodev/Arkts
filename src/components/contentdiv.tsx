import React from 'react';

export const ContentDiv(content: any) => {
    
    return <div
        style={{
            minHeight: 480,
            padding: 24,
            borderRadius: 8,
            backgroundColor: '#fff'
        }}
    >
        {content}
    </div>
}