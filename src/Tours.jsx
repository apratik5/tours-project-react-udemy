import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                {
                    props.tours.map((tour) => {
                        return <Tour {...tour} key={tour.id} removeTour={props.removeTour} />
                    })
                }
            </div>



        </section>
    )
}

export default Tours
