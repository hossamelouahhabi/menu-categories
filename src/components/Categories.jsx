export default function Categories({all, breakfast, lunch, shakes}) {
    
    return(
        <div className="btn-container">
            <button className="filter-btn" onClick={all}>All</button>
            <button className="filter-btn" onClick={breakfast}>Breakfast</button>
            <button className="filter-btn" onClick={lunch}>Lunch</button>
            <button className="filter-btn" onClick={shakes}>Shakes</button>
        </div>
    )
}