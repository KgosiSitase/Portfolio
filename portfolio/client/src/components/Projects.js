// Importing everything necessary
import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Stack, Image } from 'react-bootstrap';
import RightDirection from '../components/undraw_right-direction_arvo.svg';
import LikePost from '../components/undraw_like-post_s3wo.svg';
import OnlineShopping from '../components/undraw_online-shopping_hgf6.svg';


//Main Component
export function Projects() {
  return (
    <div>
      <section className='projects-section p-5'>
        {/* Projects Title */}
        <div className='projects-title'>Projects</div>

        {/* Project Cards */}
        {/* First Stack */}
        <div className='stack-component1 py-2' style={{paddingLeft: '90px'}}>
          <Stack direction='horizontal' gap={5}>
            {/* Animation Image */}
            <div className='stack-image1'>
              <Image src={RightDirection} className='img-fluid' style={{ width: '25rem' }}/>
            </div>
            {/* Project Showcase */}
            <div className='card-item1 py-2 px-5'>
              {/* First Card */}
              <Card className="card-container w-100" style={{backgroundColor: '#000'}} >
                <video style={{ width: '30rem' }} autoPlay muted loop>
                  <source src='/NetflixReplicaRecording.mp4' type='video/mp4'/>
                </video>
                <Card.Body>
                  <Card.Title className='text-start' style={{ color: '#cf1515', fontSize: '30px' }}>Netflix Clone</Card.Title>
                  <div className='text-start'>
                    <Button 
                      style={{ backgroundColor: '#cf1515', border: 'none'}}
                      onClick={() => window.open("https://github.com/KgosiSitase/React-Projects/tree/main/webpage_clone","_blank")}
                    >
                      View in GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Stack>
        </div>
        
        {/* Second Stack */}  
        <div className='stack-component2' style={{ paddingRight: '70px'}}>
          <Stack className='py-5' direction='horizontal' gap={5} style={{ paddingRight: '90px'}}>
            {/* Project Showcase */}
            <div className='card-item2 py-3 px-5'>
              {/* Second Card */}
              <Card className="card-container w-100" style={{backgroundColor: '#3b89ff'}}>
                <video style={{ width: '30rem' }} autoPlay muted loop>
                  <source src='/iTunesAppRecording.mp4' type='video/mp4'/>
                </video>
                <Card.Body>
                  <Card.Title className='text-start' style={{ color: '#fff', fontSize: '30px' }}>
                    Itunes Search App
                  </Card.Title>
                  <div className='text-start'>
                    <Button 
                      style={{ backgroundColor: '#fff', border: 'none', color: '#3b89ff'}}
                      onClick={() => window.open("https://github.com/KgosiSitase/React-Projects/tree/main/iTunesSearchApp","_blank")}
                    >
                      View in GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* Animation Image */}
            <div className='stack-image2'>
              <Image className='img-fluid' src={LikePost} style={{ width: '25rem' }}/>
            </div>
          </Stack>
        </div>

        {/* Third Stack */}
        <div className='stack-component3' style={{paddingLeft: '90px'}}>
          <Stack className='py-5' direction='horizontal' gap={5}>
            {/* Animation Image */}
            <div className='stack-image3'>
              <Image className='img-fluid' src={OnlineShopping} style={{ width: '25rem' }}/>
            </div>
            {/* Project Showcase */}
            <div className='card-item3 py-3 px-5'>
              {/* Third Card */}
              <Card className="card-container w-100" style={{backgroundColor: '#f0fcff'}}>
                <video style={{ width: '30rem' }} autoPlay muted loop>
                  <source src='/KingsBankRecording.mp4' type='video/mp4'/>
                </video>
                <Card.Body>
                  <Card.Title className='text-start' style={{ color: '#696969', fontSize: '30px' }}>Basic Bank App</Card.Title>
                  <div className='text-start'>
                    <Button
                      style={{ backgroundColor: '#ad5bce', border: 'none'}}
                      onClick={() => window.open("https://github.com/KgosiSitase/React-Projects/tree/main/ReactComponent(KingsBank)","_blank")}
                     >
                      View in GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Stack>
        </div>
        <div>
        <Button 
          style={{ backgroundColor: '#ff27c9', border: 'none'}}
          onClick={() => window.open("https://github.com/KgosiSitase","_blank")}
        >
          View all Projects
        </Button>
        </div>
      </section>
    </div>
  );
}