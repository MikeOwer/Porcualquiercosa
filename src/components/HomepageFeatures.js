import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Seguridad en la red',
    Svg: require('../../static/img/firewall.svg')
      .default,
    description: (
      <>Conocer sobre la seguridad en la comunicación de datos en una red.</>
    ),
  },
  {
    title: 'Seguridad web',
    Svg: require('../../static/img/security-shield.svg').default,
    description: <>Aprender sobre la seguridad en la web.</>,
  },
  {
    title: 'Programar con sockets',
    Svg: require('../../static/img/wired-network.svg').default,
    description: (
      <>
        Entender sobre la programación de aplicaciones con
        sockets.
      </>
    ),
  },
  {
    title: 'IoT',
    Svg: require('../../static/img/iot-platform.svg').default,
    description: <>Descrubir el Internet de las Cosas.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
