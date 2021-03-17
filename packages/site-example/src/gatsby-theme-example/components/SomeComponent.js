import React from 'react';
import { SomeComponent as OriginalSomeComponent } from 'gatsby-theme-example/src/components/SomeComponent'

export function SomeComponent() {
    return (
        <div style={{ color: '#6F6' }}>
            This is the site-overriden component.
            <OriginalSomeComponent />
        </div>
    );
}