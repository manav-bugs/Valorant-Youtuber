import React from 'react'


function Card(props) {
    console.log(props);
    return (
        <>
            {/* <div className="container">
            <div className="card">
                <img className='img' src={props.image} alt="" />
                <div className="content">
                    <h3 className="ytname">{props.name}</h3>
                    <p className='text'>{props.des}</p>
                    <a href={props.link} target='_blank'/>
                </div>
            </div>
          </div> */}

            <div className="card">
                <img src={props.image} className="card-img-top img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title ytname white">{props.name}</h5>
                        <p className="card-text white">{props.des}</p>
                        <a href={props.link} className="btn btn-primary">Watch Now!!.</a>
                    </div>
            </div>

            {/* <div className="box"></div> */}
        </>
    )

}

export default Card




