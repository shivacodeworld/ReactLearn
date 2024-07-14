 //creating an element4
    // let header = document.createElement("h1");
    // header.innerHTML = "Hello World";
    let content = React.createElement("div",{id:"parent"},
     React.createElement("h1",{id:"header"},"Hello World")
    )
    console.log(content);

    //root
    // let root = document.getElementById("root");
    // root.appendChild(header);
    let root = ReactDOM.createRoot(document.getElementById("root"));
    console.log(root);
    root.render(content);