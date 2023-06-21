import { component$, createContext, useContext, useContextProvider, useStore } from "@builder.io/qwik";

interface MessagesStore {
  messages: string[],
  index: number
}

export const MessagesContext = createContext<MessagesStore>('MESSAGES');

export default component$(() => {
  const messages = [
    'Hello World',
    'Still at hello world',
    'You guessed: hello world'
  ];

  const store = useStore({
    messages,
    index: 0
  });

  useContextProvider(MessagesContext, store);

  return (
    <>
      <h1>Qwik Stores: </h1>

      <Message />

      <button onClick$={() => store.index++}>Next Message</button>

    </>
  )
});

export const Message = component$(() => {

  const store = useContext(MessagesContext);

  const {messages , index} = store;

  return (
    <>
      <h3>{messages[index]}</h3>
    </>
  )
});