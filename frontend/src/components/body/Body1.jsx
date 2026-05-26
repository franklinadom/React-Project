import './Body1.css'

function Body1(){
  return(
  <div>
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
        <div className="line"></div>
        <p className="Update">Data last updated 24 March 2026.</p>
  
  </div>

  );
}
 
export default Body1