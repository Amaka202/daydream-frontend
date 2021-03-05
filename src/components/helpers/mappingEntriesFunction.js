export const DesktopViewEntries = (arr, arrow, Link, dayjs) => {
    return arr && arr.map((val) => {
        return (
            <section key={val.id}>
                <Link to={`/entries/?id=${val.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <section className="entries-section">
                        <div>
                            <p className="entry-date">{dayjs(val.date).format('ll')}</p>
                            <p className="entry-title">{val.title}</p>
                        </div>
                        <div className="arrow-div">
                            <img src={arrow} alt="arrow-left"/>        
                        </div>
                    </section>   
                </Link>
            </section> 
        )
    })
}

export const mobileViewEntries = (arr, arrow, Link, dayjs) => {
    return arr && arr.map((val) => {
        return (
            <section key={val.id}>
                <Link to={`/entries/${val.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <section className="entries-section">
                        <div>
                            <p className="entry-date">{dayjs(val.date).format('ll')}</p>
                            <p className="entry-title">{val.title}</p>
                        </div>
                        <div className="arrow-div">
                            <img src={arrow} alt="arrow-left"/>        
                        </div>
                    </section>   
                </Link>
            </section> 
        )
    })
}