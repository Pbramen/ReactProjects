import profilePic from '../assets/img/profilePicture.jpg'
function Card() { 
    return (
        <div className="card">
            <img className="profile-pic" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Peter Banh</h2>
            <p>Computer Science Student</p>
        </div>
    )
}

export default Card;