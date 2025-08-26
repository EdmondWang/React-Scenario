import { useCallback, useEffect, useState, useRef } from 'react';

const ListWithAddButton: React.FC = () => {
    const [list, setList] = useState<any[]>([]);
    // const [localIndex, setLocalIndex] = useState(0);
    const localIndexRef = useRef(0);

    const clickAdd = () => {
        console.log('click Add');
        console.log('localIndex', localIndexRef.current);

        const currentIndex = localIndexRef.current;

        setList((l) => {
            return l.concat(
                <button key={currentIndex} onClick={clickAdd}>
                    {currentIndex}
                </button>
            );
        });

        localIndexRef.current = localIndexRef.current + 1;
    };

    return (
        <div>
            <button onClick={clickAdd}>Add</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListWithAddButton;
