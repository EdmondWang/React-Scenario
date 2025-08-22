import React, { useRef, forwardRef, Ref, useImperativeHandle } from 'react';

export interface SearchBoxProps {}

export interface SearchBoxRef {
  focusInput: () => void;
  setValueToGundam: () => void;
}

const SearchBox: React.ForwardRefRenderFunction<SearchBoxRef, SearchBoxProps> = (props: SearchBoxProps, ref: Ref<SearchBoxRef>) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    const setValueToGundam = () => {
        if (inputRef.current) {
            inputRef.current.value = 'gundam';
        }
    };

    useImperativeHandle(ref, () => {
        return { focusInput, setValueToGundam };
    });
    return <input ref={inputRef} />;
};

const FancySearchBox = forwardRef<SearchBoxRef, SearchBoxProps>(SearchBox);

const Bar: React.FC = () => {
    const searchBoxRef = useRef<SearchBoxRef>(null);

    return (
        <div>
            <button
                onClick={() => {
                    searchBoxRef.current?.setValueToGundam();
                }}
            >
                Set to Gundam
            </button>
            <button
                onClick={() => {
                    searchBoxRef.current?.focusInput();
                }}
            >
                Focus input
            </button>
            <FancySearchBox ref={searchBoxRef} />
        </div>
    );
};

const ExposeMethodFeature: React.FC = () => {
    return <Bar />;
};

export default ExposeMethodFeature;
