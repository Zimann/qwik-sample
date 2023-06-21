import {component$, $} from '@builder.io/qwik';
import {HelloMessage} from '~/components/hello-message/hello-message';


export default component$(() => {



    console.log('Initializing HelloWorld Component');

    const sayHello = $(() => {
      alert('Hello World');
    });

    const messages = [
      'Hello World',
      'Hello World 2',
      'Hello World 3'
    ];

    const onShowMessageClicked = $((message: string) => {
      alert(message);
    });

    return (
        <>
          { messages.map((message, index) => (
            <HelloMessage key={index} message={message} showButton={true} onShowMessage={onShowMessageClicked} />
          ))}

          <div className="hello-message">The Css Class hello-message is also applied here</div>
            <button onClick$={sayHello}>Say Hello!</button>
        </>
    );
});

