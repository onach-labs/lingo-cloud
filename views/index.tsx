// I really didn't want to use React for this project, but I had to.

import React from 'react';


import Panel from "./Panel";

let script = {
    __html: `
    "use strict";
    $(document).ready(function() {
        document.querySelectorAll('.icon').forEach(icon => { 
            icon.addEventListener('click', function() {
                var opening = $(this).data('opens');
                $(".content[data-contains='" + opening + "']").dialog().dialog("open");
            });
        });
        $(".content").dialog({ 
            width: 'auto', 
            autoOpen: false 
        }).dialogExtend({
            maximizable: true,
            minimizable: true
        });
        const newDiv = document.createElement("div");

        const newContent = document.createTextNode("Hi there and greetings!");

        newDiv.appendChild(newContent);
            newDiv.setAttribute("class", "content")
            newDiv.setAttribute("title", "Welcome")
            newDiv.setAttribute("data-contains", "theApp")
            newDiv.setAttribute("style", "display: none;")
        const currentDiv = document.getElementById("terminal");
        document.body.insertBefore(newDiv, currentDiv);
        const contextMenu = document.getElementById("context-menu")
        document.addEventListener( "contextmenu", function(e) {
            e.preventDefault();
            const { clientX: mouseX, clientY: mouseY } = e;
            contextMenu.style.top = mouseY + "px";
            contextMenu.style.left = mouseX + "px";
            contextMenu.classList.remove("visible")
            setTimeout(() => {
                contextMenu.classList.add("visible");
            });
        });
        document.addEventListener("click", function(e) {
            contextMenu.classList.remove("visible")
        });  
        $("#appsMenu").click(function() {
            
        });
    });
    `
}

const style = `
#context-menu {
    position: fixed;
    z-index: 10000;
    width: 150px;
    background: #1b1a1a;
    border-radius: 5px;
    transform: scale(0);
    transform-origin: top left;
}
#context-menu .item {
    padding: 8px 10px;
    font-size: 15px;
    color: #eee;
    cursor: pointer;
    border-radius: inherit;
}
#context-menu.visible {
    transform: scale(1);
    transition: transform 200ms ease-in-out;
}
#context-menu .item:hover {
    background: #343434;
}
`

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
            <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
            <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
            <script src="./index.js"></script>
            <script dangerouslySetInnerHTML={script}></script>
            <link rel="stylesheet" href="index.css" />
            <title>Lingo Cloud - Dashboard</title>
            <style>
            {style}
            </style>
        </head>
        <body>
            <Panel />
            <div id="context-menu">
                <div id="desktopSettings" className="item">Desktop settings</div>
                <div id="newShortcut" className="item">New shortcut</div>
                <div id="openTerminal" className="item">Open Terminal</div>
            </div>
            <div data-contains="terminal" className="content" title="Terminal"><iframe data-name="terminal" id="auto_terminal" frameBorder="0" src="/file.html" style={{"width": 990, "height": 450}}></iframe></div>
            <span className="icon" data-opens="theApp"><img src="https://static.thenounproject.com/png/88462-200.png" /></span><span className="icon-caption">Welcome!</span>
            <span className="icon" data-opens="terminal"><img src="https://i1.wp.com/linuxnewbieguide.org/wp-content/uploads/2017/02/terminal_icon-300x300-e1490168055360.png?fit=200%2C200&ssl=1" /></span><span className="icon-caption">Terminal</span>
            <span className="icon" data-opens="upload"><img src="https://www.designbust.com/download/164/thumb/upload_icon_thum.png" /></span><span className="icon-caption">Upload File</span>
            <div data-contains="upload" className="content" title="Upload file"><iframe data-name="upload" id="upload" frameBorder="0" src="/upload.html" style={{"width": 990, "height": 450}}></iframe></div>       
        </body>
        </>
    )
}
