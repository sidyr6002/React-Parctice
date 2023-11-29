import {React} from 'react';
import {ReactDOM} from 'react-dom/client';

const message = React.createElement('h1', {
    className: 'message',
}, "Hello!! Rahul Siddhardh. From ReactJS");
console.log(message);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(message);