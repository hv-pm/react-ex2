function ProfileCards({title, handle, image, description}) { //props usando desctructuring eu posso fazer {title, handle} = props aí n preciso usar props.handle
    return( 
    <div className="card">
        <div className="card-image">
            <figure className="image is-1by1">
                <img src={image} alt="pda logo"/>
            </figure>
        </div>

        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
            </div>
            <div className="content">{description}</div>
        </div>
    </div>
    );
}

export default ProfileCards;