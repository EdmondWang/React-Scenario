import { useState } from 'react';

let index = 0;

const ListWithAddButton: React.FC = () => {
    const [list, setList] = useState<any[]>([]);
    const [localIndex, setLocalIndex] = useState(0);

    const clickAdd = () => {
        setList((l) => {
            const currIndex = index;
            index++;
            console.log('currIndex', currIndex);
            console.log('localIndex', localIndex);

            setLocalIndex((prev) => prev + 1);
            return l.concat(
                <button key={localIndex} onClick={clickAdd}>
                    {localIndex}
                </button>
            );
        });
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
