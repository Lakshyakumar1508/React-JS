const Function = () => {
    function btnClicked() {
        console.log("Clicked")
    }

    function onInput(elem) {
        console.log(elem.target.value)
    }

    function onMouse() {
        console.log("Mouse Enter")
    }

    const pagescrolling = (elem) => {
        console.log("Page scrolling ..... at speed", elem)
    }
    return (
        <>
            <button onMouseEnter={onMouse} onClick={btnClicked}></button>

            <input onChange={(elem) => {
                console.log(elem.target.value)
            }}></input>

            <input onChange={onInput}></input>

            <div className='box' onMouseMove={(elem) => {
                console.log(elem.clientX, elem.clientY)
            }}>
                Hello
            </div>

            <div onWheel={function (elem) {
                console.log(elem.deltaY)
            }}>
                <div className="page1"></div>
                <div className="page2"></div>
                <div className="page3"></div>
            </div>
        </>
    )
}

export default Function