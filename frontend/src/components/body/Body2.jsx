import './Body2.css'
import image from '../../assets/me.jpg'

function Body2(){
  return(
    <div className="body2">
      <div>
        <h3 className= "title">Services available to logged-in users</h3>
        <p className= "information">When you log in to job Market Finland, you gain access to the 'My job path' section and can deal with employment officials in the 'E-Sevices' section.</p>
      </div>

      <div className='card-container'>
      <div className='card'>
        <h2 className="card-title">My Job Path</h2>
        <img src={image} alt="My Job Path" className="card-image"/>
        <p className="card-text">Find out job applicant profile, find jobs that match your skills and save job postings as favorites. Polish your job applicant profile for employers to see.</p>
        <button className="card-button">Go to My Job Path</button>
      </div>
      <div className='card'>
        <h2 className="card-title">E-Sevices</h2>
        <img src={image} alt="E-Sevices" className="card-image"/>
        <p className="card-text">E-services are a channel at job Market Ghana using which you can handle matters with employment officials. By using the E-services, you can for example, register as a job seeker.</p>
        <button className="card-button">Go to E-Sevices</button>
      </div>
      </div>

    </div>
  );
}

export default Body2