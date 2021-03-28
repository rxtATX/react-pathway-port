const Popover = ({ proceed, setShowPopover }) => {
    return (
        <div className="popover">
            <p>This action will download a PDF copy of Doggo's resume.</p>
            <div className="buttons">
                <button onClick={proceed}>Proceed</button>
                <button onClick={() => setShowPopover(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default Popover;