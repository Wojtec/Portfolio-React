import React from 'react';



const Education = (props) =>{
    const {title, school} = props.props;
    return (
        <section>
        <h3>{title}</h3>
            <div className="education">
                <p>{school.title}</p>
                <p>{school.name}</p>
                <p>{school.description}</p>
            </div>
        </section>
    )
}
export default Education;