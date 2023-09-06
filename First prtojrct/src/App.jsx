import Message2 from "./Message2";
import Message1 from "./Message1";

export default function MyApp() {
  const list = ['vetri','vetriselvan','kingselvan','lusu']
     

  return (
    <>
    <div>
    <Message2 value={list[0]} ></Message2>
    <Message2 value={list[1]} ></Message2>
    <Message2 value={list[2]} ></Message2>
    <Message2 value={list[3]} ></Message2>
    </div>
    <div><Message1></Message1></div>
    </>
  );
}

