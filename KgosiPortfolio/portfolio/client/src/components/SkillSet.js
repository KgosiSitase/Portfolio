// Importing everything necessary
import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
// Importing Icons
import { DiHtml5, DiCss3, DiBootstrap, DiGit, DiJsBadge, DiMongodb, DiReact } from 'react-icons/di';
import { SiPostman } from 'react-icons/si'


// Main Component
export function SkillSet() {
  // State for index
  const [index, setIndex] = useState(0);

  // f=Function to handle when selected
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Progress bar variables
  const html = 91;
  const css = 84;
  const javascript = 87;
  const github = 92;
  const mongodb = 77;
  const postman = 89;
  const react = 94;
  const bootstrap = 80;

  return (
    <div>
      {/* Skill Set Section */}
      <section className='skillSet-section p-5'>
        {/* Skill Set Title */}
        <div className='skillSet-title'>Skill Set</div>
        {/* Important Note */}
        <div className='note'>Note: Total average of results obtained at bootcamp.</div>

        {/* Skills Carousel */}
        <Carousel activeIndex={index} onSelect={handleSelect} style={{ borderRadius: 'none', boxShadow: 'none' }}>
          {/* First Item */}
          <Carousel.Item>
            {/* Skill Set Cards */}
            <Card style={{ backgroundColor: '#70c5dd', color: '#fff', paddingBottom: '40px' }}>
              <Card.Body>
                <Card.Text>
                  {/* Card Icon */}
                  <div className='icon-1 p-2'>
                    <DiHtml5 />
                  </div>

                  {/* Card Title */}
                  <Card.Title>HTML 5</Card.Title>

                  {/* Card Progress Bar */}
                  <div>
                    <ProgressBar variant='dark' now={html} label={`${html}%`} />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Second Item */}
          <Carousel.Item>
            {/* Skill Set Cards */}
            <Card style={{ backgroundColor: '#70c5dd', color: '#fff', paddingBottom: '40px' }}>
              <Card.Body>
                <Card.Text>
                  {/* Card Icon */}
                  <div className='icon-2 p-2'>
                    <DiCss3 />
                  </div>

                  {/* Card Title */}
                  <Card.Title>CSS 3</Card.Title>

                  {/* Card Progress Bar */}
                  <div>
                    <ProgressBar variant='dark' now={css} label={`${css}%`}/>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Third Item */}
          <Carousel.Item>
            {/* Skill Set Cards */}
            <Card style={{ backgroundColor: '#70c5dd', color: '#fff', paddingBottom: '40px' }}>
              <Card.Body>
                <Card.Text>
                  {/* Card Icon */}
                  <div className='icon-3 p-2'>
                    <DiJsBadge />
                  </div>

                  {/* Card Title */}
                  <Card.Title>Javascript</Card.Title>

                  {/* Card Progress Bar */}
                  <div>
                    <ProgressBar variant='dark' now={javascript} label={`${javascript}%`} />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Fourth Item */}
          <Carousel.Item>
            {/* Skill Set Cards */}
            <Card style={{ backgroundColor: '#70c5dd', color: '#fff', paddingBottom: '40px' }}>
              <Card.Body>
                <Card.Text>
                  {/* Card Icon */}
                  <div className='icon-4 p-2'>
                    <DiGit />
                  </div>

                  {/* Card Title */}
                  <Card.Title>Github</Card.Title>

                  {/* Card Progress Bar */}
                  <div>
                    <ProgressBar variant='dark' now={github} label={`${github}%`} />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Fifth Item */}
          <Carousel.Item>
            {/* Skill Set Cards */}
            <Card style={{ backgroundColor: '#70c5dd', color: '#fff', paddingBottom: '40px' }}>
              <Card.Body>
                <Card.Text>
                  {/* Card Icon */}
                  <div className='icon-5 p-2'>
                    <DiMongodb />
                  </div>

                  {/* Card Title */}
                  <Card.Title>MongoDB</Card.Title>

                  {/* Card Progress Bar */}
                  <div>
                    <ProgressBar variant='dark' now={mongodb} label={`${mongodb}%`} />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Sixth Item */}
          <Carousel.Item>
            {/* Skill Set Cards */}
            <Card style={{ backgroundColor: '#70c5dd', color: '#fff', paddingBottom: '40px' }}>
              <Card.Body>
                <Card.Text>
                  {/* Card Icon */}
                  <div className='icon-6 p-2'>
                    <SiPostman />
                  </div>

                  {/* Card Title */}
                  <Card.Title>Postman</Card.Title>

                  {/* Card Progress Bar */}
                  <div>
                    <ProgressBar variant='dark' now={postman} label={`${postman}%`} />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Seventh Item */}
          <Carousel.Item>
            {/* Skill Set Cards */}
            <Card style={{ backgroundColor: '#70c5dd', color: '#fff', paddingBottom: '40px' }}>
              <Card.Body>
                <Card.Text>
                  {/* Card Icon */}
                  <div className='icon-7 p-2'>
                    <DiReact />
                  </div>

                  {/* Card Title */}
                  <Card.Title>React</Card.Title>

                  {/* Card Progress Bar */}
                  <div>
                    <ProgressBar variant='dark' now={react} label={`${react}%`} />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          {/* Eighth Item */}
          <Carousel.Item>
            {/* Skill Set Cards */}
            <Card style={{ backgroundColor: '#70c5dd', color: '#fff', paddingBottom: '40px' }}>
              <Card.Body>
                <Card.Text>
                  {/* Card Icon */}
                  <div className='icon-8 p-2'>
                    <DiBootstrap />
                  </div>

                  {/* Card Title */}
                  <Card.Title>Bootstrap</Card.Title>

                  {/* Card Progress Bar */}
                  <div>
                    <ProgressBar variant='dark' now={bootstrap} label={`${bootstrap}%`} />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
} 