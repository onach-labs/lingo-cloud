import * as React from "react";

import SignUp from "./SignUp";

let style = `
#panel {
    background-color: #202020;
}
`;


export default function index() {
    return (
        <>
        <div id="panel">
            <div id="appsMenu">
                Applications
            </div>
        </div>
        <link rel="stylesheet" href="xterm/css/xterm.css" />
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/xterm/3.14.5/xterm.min.js"></script>
        <script src="https://rawgit.com/ROMB/jquery-dialogextend/master/build/jquery.dialogextend.min.js"></script>
        <style>{style}</style>
        <SignUp />
        </>
    )
}