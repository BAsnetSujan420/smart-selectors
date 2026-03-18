import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Paper = styled.section`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const Card = styled.li`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 12px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const CardTitle = styled.h2`
  margin-top: 8px;
  font-size: 1rem;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

function Gallery() {
  const data = [
    {
      title: 'Remix: a practical guide',
      link: 'https://bejamas.com/hub/guides/guide-to-remix-framework',
      img: 'https://cdn.sanity.io/images/34ent8ly/production/f31810d13e2e27f7f502218b8f4f28e0008e1ed7-3000x3000.png?w=640&q=75',
    },
    {
      title: 'Nuxt: a practical guide',
      link: 'https://bejamas.com/hub/tutorials/practical-guide-to-nuxt-js',
      img: 'https://cdn.sanity.io/images/34ent8ly/production/adffce6e572b1e67f8301c0cd45ea0019a9e0be8-4167x4167.png?w=640&q=75',
    },
    {
      title: 'Solid: a practical guide',
      link: 'https://bejamas.io/blog/practical-guide-to-solidjs-library/',
      img: 'https://cdn.sanity.io/images/34ent8ly/production/69cca46986d67b738f488daf17ac61a9f8f00068-3000x3000.png?w=640&q=75',
    },
    {
      title: 'Astro: a practical guide',
      link: 'https://bejamas.com/hub/tutorials/practical-guide-to-astro-js-framework',
      img: 'https://cdn.sanity.io/images/34ent8ly/production/2d2ed3cab93b818475e7a9d45608c0f9767f5a8f-3000x3000.png?w=640&q=75',
    },
    {
      title: 'Qwik: a practical guide',
      link: 'https://bejamas.com/hub/tutorials/build-a-quiz-application-with-qwik-framework',
      img: 'https://cdn.sanity.io/images/34ent8ly/production/bb266c02a530bc5858ef34ba20680f10ffb8929c-3000x3000.png?w=640&q=75',
    },
    {
      title: 'Next: a practical guide',
      link: 'https://bejamas.io/blog/how-to-create-next-js-blog-using-notion-as-a-cms/',
      img: 'https://cdn.sanity.io/images/34ent8ly/production/274fc43c57a8ba8d4e20d2709776232cf365c014-3000x3000.png?w=640&q=75',
    },
  ];

  return (
    <Container>
      <Paper>
        <Title>
          <a href="#">A Library Gallery</a>
        </Title>

        <CardList>
          {data.map((item, i) => (
            <Card key={i}>
              <Image src={item.img} alt="" />
              <CardTitle>
                <a href={item.link}>{item.title}</a>
              </CardTitle>
            </Card>
          ))}
        </CardList>
      </Paper>
    </Container>
  );
}

export default Gallery;
