import {component$} from '@builder.io/qwik';
import {HelloMessage} from '~/components/hello-message/hello-message';


export default component$(() => {

    console.log('Initializing HelloWorld Component');
    return (
        <>
            <HelloMessage message="Hello World" courseVersion={1} />
            <HelloMessage message="Hello World 2" courseVersion={2}/>
            <HelloMessage message="Hello World 3"/>
        </>
    );
});

