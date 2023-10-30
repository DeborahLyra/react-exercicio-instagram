interface propsChildren{
    children: React.ReactNode
}

function Card ({children}: propsChildren){
    return(
        <div>
            {children}
        </div>
    )
}

export default Card