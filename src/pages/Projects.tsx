import React from 'react';

function Projects() {
  const containerStyle = {
    padding: '2rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#00695c', // Teal dark for title
    fontWeight: '700',
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: '#444', // Softer color for subtitle
    maxWidth: '700px',
    margin: '0 auto 2rem auto',
    lineHeight: '1.5',
  };

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  };

  const imageCardStyle = {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const imageCardHover = {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    display: 'block',
  };

  const captionStyle = {
    padding: '1rem',
    fontSize: '1rem',
    color: '#333',
    fontWeight: '500',
    borderTop: '1px solid #f0f0f0',
    backgroundColor: '#fafafa',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#00897b',
    fontSize: '0.95rem',
    fontWeight: '600',
    display: 'block',
    padding: '0.7rem 1rem',
    textAlign: 'center',
    backgroundColor: '#e0f2f1',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Turning Ideas into Interactive Websites</h2>
      <p style={subtitleStyle}>
        These projects show my passion for clean design, development, and smooth user experiences.
      </p>

      <div style={galleryStyle}>
        {[
          {
            url: 'https://creamy-com.onrender.com',
            img: '/E-Commerce.PNG',
            caption: 'E-Commerce Website',
          },
          {
            url: 'https://todoflow-six.vercel.app',
            img: '/ToDo.jpg',
            caption: 'To-Do Application',
          },
          {
            url: 'https://popcornplanet.netlify.app',
            img: '/MovieHub.png',
            caption: 'Movie Hub App',
          },
          {
            img: '/Portfolio.png',
            caption: 'Portfolio Website Design',
          },
          {
            img: '/responsive.jpeg',
            caption: 'Responsive Layout',
          },
          {
            img: '/homepage.PNG',
            caption: 'Landing Page Design',
          },
        ].map((project, idx) => (
          <div
            key={idx}
            style={imageCardStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, imageCardHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, imageCardStyle)
            }
          >
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b2dfdb')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e0f2f1')}
              >
                🌐 Open Website
              </a>
            )}
            <img src={project.img} alt={project.caption} style={imageStyle} />
            <div style={captionStyle}>{project.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
