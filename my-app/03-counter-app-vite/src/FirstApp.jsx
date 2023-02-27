import PropTypes from 'prop-types';


export const FirstApp = ({
    title,
    subTitle =  "la tierra explota"
}) => {



    return (
        <>
        
        <h1> {title} </h1>
        
        <p> {subTitle} </p>
        
        </>
    )
}

FirstApp.propTypes = {
title:PropTypes.string,
subTitle:PropTypes.string //si ponenemos .requaried entonces no podemos usar default si o si tenemso que darle valor
}


FirstApp.defaultProps = {
    title:"no hay titulo",
    subTitle:"no hay substitulo"
}