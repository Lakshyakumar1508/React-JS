// useState:    Manage the state (Dom Manipulation)
// useReducer:  Manage Complex logic 
// useRef:      Select the document (document.querySelector)
// useEffect:   Manage the side stack
// useContext:  App->Section1->Section2 (Globally keep the data for easily access)
// useMemo:     Optimization
// useCallback: Optimization

const Hook = () => {
    const a=20;
    return (
        <>
        {/* useState */}
        <div>
        <h1> Value of a is {a}</h1>
        <button>Click</button>
        </div>
        </>
    )
}

export default Hook