import { useEffect } from "react";
type MessageProps= {
    text: string,
    color?: string

}
function Message(props: MessageProps){
        // useEffect with a empty dependancy array
        useEffect(() => {

            console.log("Message component mounted");
    
            // callback is invoked with the component is unmounted
            return () => {
                console.log("Message component unmounted");
            }
    
        }, [])
    console.log(props);

    return(
        <div style={{borderColor: props.color, borderStyle: "solid", borderWidth: 2, margin: 2}}>
            <h3>Message: {props.text}</h3>
            <p>This is functional component</p>
            <h3>Expression: {15+10}</h3>
            <h3>Expression: {new Date().toString()}</h3>
        </div>
    )
}

export default Message;