import heroImg from '../assets/img/heroimgtayog.png'
import './hero.css'

export default function Hero() {

    const subjects = ["Engineering", "Biology", "Statistics", "Chemistry", "Economics", "Mathematics", "Psyhcology","Physics", "Socialogy", "Social Science", "Earth Science"]

    const jobData = [
        {
            title: "JRF",
            openings: "34 Openings",
            locations: "4 Openings at IIT Bombay,  3 at IISC Bengaluru,...",
            logos: [
                "https://www.mahaedunews.com/wp-content/uploads/2020/03/1200px-Indian_Institute_of_Technology_Hyderabad_logo.svg-1014x1024.png",
                "https://th.bing.com/th/id/R.c0a20bea0927b16f407df8931456bd7b?rik=x1tDXvuopgJICA&riu=http%3a%2f%2fengageindia.ca%2fwp-content%2fuploads%2f2017%2f01%2fIITB-500x500.png&ehk=s9yqa0P0kAwln6C%2f7%2b%2fD%2fFlheCfqdy29AGzON2Q%2bZOM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
                "https://www.userlogos.org/files/logos/jumpordie/iitr-03.png",
                "https://th.bing.com/th/id/R.a2c920d8a4e8f68660cb185c1b52dfae?rik=MTR8cGfAphOkZg&riu=http%3a%2f%2fevent.iitg.ac.in%2ficann2019%2fProceedings_LaTeX%2f2019%2fIITG_White.png&ehk=81DZb5JCwBqGeINYSHDwkjsPYHln8Kz6bG%2f8FHE6Il0%3d&risl=&pid=ImgRaw&r=0"
            ]
        },
        {
            title: "SRF",
            openings: "42 Openings",
            locations: "9 Openings at IIT, 6 at IISC Bengaluru,...",
            logos: [
                "https://www.mahaedunews.com/wp-content/uploads/2020/03/1200px-Indian_Institute_of_Technology_Hyderabad_logo.svg-1014x1024.png",
                "https://th.bing.com/th/id/R.c0a20bea0927b16f407df8931456bd7b?rik=x1tDXvuopgJICA&riu=http%3a%2f%2fengageindia.ca%2fwp-content%2fuploads%2f2017%2f01%2fIITB-500x500.png&ehk=s9yqa0P0kAwln6C%2f7%2b%2fD%2fFlheCfqdy29AGzON2Q%2bZOM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
                "https://www.userlogos.org/files/logos/jumpordie/iitr-03.png",
                "https://th.bing.com/th/id/R.a2c920d8a4e8f68660cb185c1b52dfae?rik=MTR8cGfAphOkZg&riu=http%3a%2f%2fevent.iitg.ac.in%2ficann2019%2fProceedings_LaTeX%2f2019%2fIITG_White.png&ehk=81DZb5JCwBqGeINYSHDwkjsPYHln8Kz6bG%2f8FHE6Il0%3d&risl=&pid=ImgRaw&r=0"
            ]
        },
        {
            title : "Project Associate",
            openings: "42 openings",
            locations: "9 openings at...",
            logos: [
                "https://www.mahaedunews.com/wp-content/uploads/2020/03/1200px-Indian_Institute_of_Technology_Hyderabad_logo.svg-1014x1024.png",
                "https://th.bing.com/th/id/R.c0a20bea0927b16f407df8931456bd7b?rik=x1tDXvuopgJICA&riu=http%3a%2f%2fengageindia.ca%2fwp-content%2fuploads%2f2017%2f01%2fIITB-500x500.png&ehk=s9yqa0P0kAwln6C%2f7%2b%2fD%2fFlheCfqdy29AGzON2Q%2bZOM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
                "https://www.userlogos.org/files/logos/jumpordie/iitr-03.png",
                "https://th.bing.com/th/id/R.a2c920d8a4e8f68660cb185c1b52dfae?rik=MTR8cGfAphOkZg&riu=http%3a%2f%2fevent.iitg.ac.in%2ficann2019%2fProceedings_LaTeX%2f2019%2fIITG_White.png&ehk=81DZb5JCwBqGeINYSHDwkjsPYHln8Kz6bG%2f8FHE6Il0%3d&risl=&pid=ImgRaw&r=0"
            ]
        },
        {
            title : "Project Maqnager",
            openings: "12 openings",
            locations: "9 openings at...",
            logos: [
                "https://www.mahaedunews.com/wp-content/uploads/2020/03/1200px-Indian_Institute_of_Technology_Hyderabad_logo.svg-1014x1024.png",
                "https://th.bing.com/th/id/R.c0a20bea0927b16f407df8931456bd7b?rik=x1tDXvuopgJICA&riu=http%3a%2f%2fengageindia.ca%2fwp-content%2fuploads%2f2017%2f01%2fIITB-500x500.png&ehk=s9yqa0P0kAwln6C%2f7%2b%2fD%2fFlheCfqdy29AGzON2Q%2bZOM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
                "https://www.userlogos.org/files/logos/jumpordie/iitr-03.png",
                "https://th.bing.com/th/id/R.a2c920d8a4e8f68660cb185c1b52dfae?rik=MTR8cGfAphOkZg&riu=http%3a%2f%2fevent.iitg.ac.in%2ficann2019%2fProceedings_LaTeX%2f2019%2fIITG_White.png&ehk=81DZb5JCwBqGeINYSHDwkjsPYHln8Kz6bG%2f8FHE6Il0%3d&risl=&pid=ImgRaw&r=0"
            ]

        }
        
    ];

    const institutionsLogos = [
        { name: "IIT Delhi", logo: "https://gyaanarth.com/wp-content/uploads/2022/03/TRANSPARENTiitdlogo.png" },
        { name: "IIT Bombay", logo: "https://th.bing.com/th/id/R.c0a20bea0927b16f407df8931456bd7b?rik=x1tDXvuopgJICA&riu=http%3a%2f%2fengageindia.ca%2fwp-content%2fuploads%2f2017%2f01%2fIITB-500x500.png&ehk=s9yqa0P0kAwln6C%2f7%2b%2fD%2fFlheCfqdy29AGzON2Q%2bZOM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" },
        { name: "IIT Madras", logo: "https://home.iitm.ac.in/anand/iitmLogo.png" },
        { name: "IIT Hyderabad", logo: "https://www.mahaedunews.com/wp-content/uploads/2020/03/1200px-Indian_Institute_of_Technology_Hyderabad_logo.svg-1014x1024.png" },
        { name: "NIT Rourkela", logo: "https://th.bing.com/th/id/OIP.ZC4_1A5T8XfkRBexkd3VNAAAAA?rs=1&pid=ImgDetMain" },
        { name: "NIT Tiruchirapalli", logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/National_Institute_of_Technology_Trichy_Logo.png" },
        { name: "IIT Guwahati", logo: "https://th.bing.com/th/id/R.a2c920d8a4e8f68660cb185c1b52dfae?rik=MTR8cGfAphOkZg&riu=http%3a%2f%2fevent.iitg.ac.in%2ficann2019%2fProceedings_LaTeX%2f2019%2fIITG_White.png&ehk=81DZb5JCwBqGeINYSHDwkjsPYHln8Kz6bG%2f8FHE6Il0%3d&risl=&pid=ImgRaw&r=0" },
        { name: "IIT khargpur", logo: "https://www.iitk.ac.in/hss/templates/iitk-simple/images/iitk-logo-black.png" }
    ];
    

  return (
    <>
    <div>
      <div className="heroImg-container">
        <img src={heroImg} alt="" className='hero-img'/>
        <div className="hero-inputBox">
        <label htmlFor="keyword"></label>
        <input type="text" name='keyword' placeholder='Keyword eg:Artificial Intelligence' id='keyword' />
        <label htmlFor="locatiom"></label>
        <input type="text" name='location' placeholder='Location eg:Hyderabad'  id='location' />
        </div> 
      </div>

      <div className="hero-subjects-container">
            <h2>Disciplines</h2>

            <div className="hero-subjects">
                {subjects.map((subject, index) => (
    <div key={index} className="hero-subBox">
        {subject}
    </div>
))}
                

                </div>
                <div className="hero-disciplines-container">
                <h2>Engineering</h2>
                <div className="hero-disciplines">
                    <ul>
                        <div>
                        <li>Artificial Intelligence</li>
                    <li>Biomedical Engineering</li>
                    <li>Biotechnology</li>
                    <li>Chemical Engineering</li>
                    <li>Climate Change</li>
                    <li>Civil Engineering</li>
                        </div>

                        <div>
                        <li>Computer Science and Engineering</li>
                    <li>Electrical Engineering</li>
                    <li>Engineering Science</li>
                    <li>Heritage Science and Technology</li>
                    <li>Material Science</li>
                    <li>Mechanical and Aerospace Engineering</li>
                        </div>
                   
                    <div>
                    <li>Liberal Arts</li>
                    <li>Design</li>
                    <li>Entreprenuership and Management</li>
                    <li>Chemistry</li>
                    <li>Physics</li>
                    <li>Mathematics</li>
                    </div>
                   
                    </ul>
                </div>
                </div>

                
            </div>

            <div className="hero-discover-container">
                <h2>Discover Popular Roles</h2>

                <div className="hero-discover-card-container">
                

                {jobData.map((job, index) => (
          <div key={index} className="hero-discover-card">
            <span className='title'>{job.title}</span>
            <span className='openings'>{job.openings}</span>
            <span className='locations'>{job.locations}</span>
            <div>
            {job.logos.map((logo, logoIndex) => (
              <img key={logoIndex} src={logo} alt={`Logo ${logoIndex}`} style={{ width: '20px' }} />

            ))}
            </div>
           
            <button>View Openings</button>
          </div>
        ))}

<div className="hero-discover-card">
            <span className='title'>View all Openings</span>
            <span className='openings'>143 openings</span>
            <span className='locations'>tap to view</span>
            <button>View Openings</button>
          </div>
                   
                </div>
                </div>

<div className="hero-inst-container">

<h2>Top Institutes Posting</h2>

<div className="hero-inst-container-1">





{institutionsLogos.map((institution, index) => (
    <div className="hero-institudes" key={index}>
        <div className="hero-inst-Component">
            <img className="inst-logo" src={institution.logo} alt="Institution Logo" width={'20px'} />
            <p>{institution.name}</p>
        </div>
    </div>
))}




<div className="hero-institudes">
        <div className="hero-inst-Component">
            <p>View More</p>
        </div>
        </div>

</div>
</div>

<div className="prefooter">
    <p>What are You Searching For? </p>
    <div className="prefooter-btns">
        <button className="p1-btn">
Post a Job
        </button>
        <button className="p2-btn">
Sign IN
        </button>
    </div>
</div>
                

        </div>
    </>
  )
}
