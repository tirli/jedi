import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { load } from 'reducers/darkJedis';

import styles from './App.css';

@connect(
  ({
    darkJedis,
  }) => ({
    darkJedis,
  }),
  dispatch => bindActionCreators({ load }, dispatch)
)
export default class App extends Component {
  static propTypes = {
    darkJedis: PropTypes.object,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  static fetchData(getState, dispatch) {
    dispatch(load(3616));
  }

  render() {
    console.log(this.props);
    return (
      <div className={styles.appContainer}>
        <div className={styles.cssRoot}>
          <h1 className={styles.planetMonitor}>Obi-Wan currently on Tatooine</h1>

          <section className={styles.scrollableList}>
            <ul className={styles.slots}>
              <li className={styles.slot}>
                <h3>Jorak Uln</h3>
                <h6>Homeworld: Korriban</h6>
              </li>
              <li className={styles.slot}>
                <h3>Skere Kaan</h3>
                <h6>Homeworld: Coruscant</h6>
              </li>
              <li className={styles.slot}>
                <h3>Na'daz</h3>
                <h6>Homeworld: Ryloth</h6>
              </li>
              <li className={styles.slot}>
                <h3>Kas'im</h3>
                <h6>Homeworld: Nal Hutta</h6>
              </li>
              <li className={styles.slot}>
                <h3>Darth Bane</h3>
                <h6>Homeworld: Apatros</h6>
              </li>
            </ul>

            <div className={styles.scrollButtons}>
              <button className={styles.buttonUp}></button>
              <button className={styles.buttonDown}></button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
