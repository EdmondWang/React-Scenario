import React, { useEffect } from 'react';

/**
 * Higher-order component that adds logging functionality to a component
 * @param WrappedComponent - The component to be wrapped
 * @returns A new component with logging capabilities
 */
const withLogger = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    return (props: P) => {
        // Log component rendering with props
        console.log(
            `Rendering ${WrappedComponent.name || 'Component'} with props:`,
            props
        );

        useEffect(() => {
            console.log(
                `Updated ${WrappedComponent.name || 'Component'} with props:`,
                props
            );
        }, [props]);

        return <WrappedComponent {...props} />;
    };
};

export default withLogger;
