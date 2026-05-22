
import './Header1.css';

function Header1(){

    return(
      <>
      
      <div>
        <nav className="navbar">
        <h5>search</h5>
        <h5>Instructions and Support</h5>
        <h5>English(EN)</h5>
        <h5>Login</h5>
        </nav>
      </div>

      <div className="container">
        <p className="brand-name">JobMarket</p>
        
 
        <div className="container2">
          <p>Personal customers</p>
          <p>Employers and entrepreneurs</p>
          <p>Employment and statistics</p>
          <p>Regional pages</p>
        </div>
          
      </div>

      <div className="section3">
        <p>Evaluation and research</p>
        <p>Statistics and reports</p>
        <p>Job Market Finland in numbers</p>
      </div>

      <div className="main">
        <h2 className="main-text">Employment and statistics</h2>
        <p className="main-text2">The Employment and statistics' section contains a collection of assessments, surveys, studies, statistics, and reports published by the KEHA Center. </p>
      </div>

      <div className="second-body">
        <div>
          <p>The trend of the employment </p>
          <p className="first">rate(People aged 15-64)</p>
          <p className="figure">71%</p>
          <p className="decimal">- 0.6 pp</p>
          <p className="sub1">compared to one year ago /</p>
          <p className="sub2">Source: Statistics Finland</p> 
        </div>
        
        <div>
          <p>Number of unemployed</p> 
          <p className="second">persons</p>
          <p className="figure">342,800</p>
          <p className='decimal1'>+ 22,400</p>
          <p className="sub1">compared to one year ago /</p>
          <p className="sub2">Source: KEHA centre</p>
        </div>

        <div>
          <p>New vacancies</p>
          <p className="figure">42,000</p>
          <p className='decimal2'>- 4,900</p>
          <p className="sub1">compared to one year ago /</p>
          <p className="sub2">Source: KEHA centre</p>
        </div>

        <div>
          <p>Published job applicant </p>
          <p className="third">profiles</p>
          <p className="figure">47,200</p>
          <p className="sub2">Source:job Market Finland</p>
        </div>

    
      </div>
      </>
    );

}

export default Header1
