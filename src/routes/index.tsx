import {component$} from '@builder.io/qwik';
import {HelloMessage} from '~/components/hello-message/hello-message';


export default component$(() => {

    console.log('Initializing HelloWorld Component');
    return (
        <>
            <HelloMessage/>
            <HelloMessage/>
            <HelloMessage/>
        </>
    );
});

