import { useEffect } from "react";
export const ReleaseOngoingHttpRequest = () => {
    console.log('ReleaseOngoingHttpRequest component render function is called');

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch('http://localhost:3001/api/long-running/', {signal})
            .then(res => res.json())
            .then(data => console.log(data))
            .catch((e) => {
                console.error(e)
            })

        setTimeout(() => {
            controller.abort('Edmond say Timeout');
        }, 3000)

        return () => {
            controller.abort();
        }
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default ReleaseOngoingHttpRequest