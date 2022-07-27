function MenuOption(props) {
    return (
        <div className='col-12'>
            <button onClick={() => props.clickFunction(props.option.id)}>
                {props.option.text}
            </button>
        </div>
    )
}

export default MenuOption