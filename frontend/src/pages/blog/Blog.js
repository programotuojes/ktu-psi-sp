import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import blog1 from './blog1.jpg';
import blog2 from './blog2.jpg';
import blog3 from './blog3.jpg';
import blog4 from './blog4.jpg';
import blog5 from './blog5.jpg';
import blog6 from './blog6.jpeg';
import Card from '@material-ui/core/Card';
import { post } from './posts.js';

const title = 'The Wall - blogas';

//image desineje card'o puseje
class BlogPost extends Component {
  render() {
    return (
      <Card elevation={5} style={{ marginTop: '20px' }}>
        <Grid
          container
          spacing={0}
          styles={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item sm={6} style={{ textAlign: 'center' }}>
            <Typography style={{ textAlign: 'right', font: 'italic small-caps bold 15px cursive' }}>
              {this.props.date}
            </Typography>
            <Typography
              style={{
                font: 'italic small-caps bold 15px cursive',
                'text-decoration': 'underline',
                'margin-bottom': '7px',
              }}
            >
              {this.props.title}
            </Typography>
            <Typography
              style={{ margin: '0px 10px 5px', font: 'italic small-caps bold 12px cursive' }}
            >
              {this.props.text}
            </Typography>
          </Grid>
          <Grid
            item
            sm={6}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <img src={this.props.img} style={{ width: '95%', height: '95%' }}></img>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

//image kaireje card'o puseje
class BlogPost1 extends Component {
  render() {
    return (
      <Card elevation={5} style={{ marginTop: '20px' }}>
        <Grid
          container
          spacing={0}
          styles={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid
            item
            sm={6}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <img src={this.props.img} style={{ width: '95%', height: '95%' }}></img>
          </Grid>
          <Grid item sm={6} style={{ textAlign: 'center' }}>
            <Typography
              style={{
                textAlign: 'right',
                font: 'italic small-caps bold 15px cursive',
                'margin-right': '10px',
              }}
            >
              {this.props.date}
            </Typography>
            <Typography
              style={{
                font: 'italic small-caps bold 15px cursive',
                'text-decoration': 'underline',
                'margin-bottom': '7px',
              }}
            >
              {this.props.title}
            </Typography>
            <Typography
              style={{ margin: '0px 10px 5px', font: 'italic small-caps bold 12px cursive' }}
            >
              {this.props.text}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

function Blog() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Container maxWidth={'xl'}>
        <Grid
          container
          spacing={2}
          style={{
            flex: 1,
            margin: '0px 0px 10px',
            justifyContent: 'center',
            alignItems: 'center',
            'row-gap': '10%',
          }}
        >
          <Grid item xs={12} sm={6}>
            {' '}
            {/*ant mazu ekranu visa eilute, ant dideliu puse eilutes*/}
            <BlogPost
              date={'2020.01.30'}
              title={'Rožinė svajonė'}
              img={blog1}
              text={post.post1}
              like={79}
              view={220}
              comments={32}
            ></BlogPost>
            <BlogPost1
              date={'2020.03.05'}
              title={'Bučinys'}
              img={blog5}
              text={post.post5}
            ></BlogPost1>
            <BlogPost
              date={'2020.02.25'}
              title={'Didysis išminčius'}
              img={blog3}
              text={post.post3}
            ></BlogPost>
          </Grid>
          <Grid item xs={12} sm={6}>
            <BlogPost1
              date={'2020.04.30'}
              title={'Sapnas'}
              img={blog4}
              text={post.post4}
            ></BlogPost1>
            <BlogPost
              date={'2020.02.03'}
              title={'Kosmoso atletas'}
              img={blog2}
              text={post.post2}
            ></BlogPost>
            <BlogPost
              date={'2020.02.22'}
              title={'Sugrįžau namo'}
              img={blog6}
              text={post.post6}
            ></BlogPost>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Blog;
