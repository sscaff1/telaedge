import React from 'react';

const ResumeSection = ({ logo, company, dates, title, location, children }) => (
  <div css={styles.container}>
    <div css={styles.row}>
      <span css={styles.lines} />
      <div css={styles.content}>
        <div css={styles.row}>
          {logo && <img src={logo} />}
          <div css={[styles.row, styles.mainRow]}>
            <div>
              <h4 css={styles.company}>{company}</h4>
              <h5 css={styles.title}>{title}</h5>
            </div>
            <div css={styles.meta}>
              <p>{dates}</p>
              <p>{location}</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  </div>
);

let styles = {
  container: {
    textAlign: 'left',
    maxWidth: '75%',
    margin: '15px auto 0',
    textAlign: 'left',
    transition: 'all .3s',
    maxWidth: 960,
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
  row: {
    display: 'flex',
    position: 'relative',
  },
  content: { width: '100%', paddingLeft: '3.5%' },
  mainRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  lines: {
    width: '10px',
    borderRight: '1px solid #61afef',
    borderLeft: '1px solid #61afef',
    transform: 'rotate(-4deg)',
    position: 'absolute',
    height: '100%',
  },
  company: {
    fontVariant: 'small-caps',
    fontSize: '1.5rem',
    margin: 0,
    color: '#98c379',
  },
  title: {
    fontWeight: 'bold',
    margin: 0,
    fontSize: '1.05rem',
    marginBottom: '.1em',
    color: '#e5c07b',
  },
  meta: {
    margin: 0,
    textAlign: 'right',
    color: '#bbb',
  },
};

export default ResumeSection;
