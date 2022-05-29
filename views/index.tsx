// I really didn't want to use React for this project, but I had to.

import React from 'react';
//@ts-ignore
import Panel from "./Panel";

let script = {
    __html: `
    $(document).ready(function() {
        document.querySelector('.icon').addEventListener('click', function() {
            var opening = $(this).data('opens');
            $(".content").dialog("open");
        });
        $(".content").dialog({ width: 'auto', autoOpen: false }).dialogExtend({minimizable: true});
    });
    `
}
export default function index() {
    return (
        <>     
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/xterm/3.14.5/xterm.min.js"></script>
            <script src="https://rawgit.com/ROMB/jquery-dialogextend/master/build/jquery.dialogextend.min.js"></script>
            <script src="./index.js"></script>
            <script dangerouslySetInnerHTML={script}></script>
            <link rel="stylesheet" href="index.css" />
            <title>Lingo Cloud - Dashboard</title>
        </head>
        <body>
            <Panel />
            <div className="content" title="Terminal"><iframe data-name="terminal" id="auto_terminal" frameBorder="0" src="/file.html" style={{"width": 990, "height": 450}}></iframe></div>
            <span className="icon" style={{"backgroundImage": "url('https://wisconsinpublictv.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/02/noun_Cloud-Download_3565489.svg')"}} data-opens="terminal"></span><span className="icon-caption">Terminal</span>
        </body>
        </>
    )
}
