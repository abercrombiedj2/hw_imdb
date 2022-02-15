const Film = ({name, id, url}) => {
    return (
        <>
            <ul>
                <li><a href={url}>{name}</a></li>
            </ul>
        </>
    )
}

export default Film;