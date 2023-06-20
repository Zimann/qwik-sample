import {component$} from '@builder.io/qwik';


export default component$(() => {

    console.log('Initializing HelloWorld Component');
    return (
        <h1>
            Welcome to this Qwik course!
        </h1>
    );
});