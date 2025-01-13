
type MessageProps= {
    text: string,
    color?: string

}
function Message(props: MessageProps){
    console.log(props);

    return(
        <div style={{borderColor: props.color}}>
            <h3>Message: {props.text}</h3>
            <p>This is functional component</p>
            <h3>Expression: {15+10}</h3>
            <h3>Expression: {new Date().toString()}</h3>
        </div>
    )
}

export default Message;