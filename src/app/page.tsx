import Message from "@/components/Message";
import Counter from "@/components/Counter";

export default function Home() {
  return (
   <div>
    <h3>NextJS React Application</h3>
    {/* <Message text="Hello React" color="blue"/>
    <Message text="Hello NextJs" color="green"/> */}
    <Counter intValue={5}/>
    <Counter intValue={10}/>
   </div>
  );
}
