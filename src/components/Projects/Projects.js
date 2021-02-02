import React from 'react';
import styles from "./Projects.module.css";
import Checkbox from '../Checkbox/Checkbox';

export const Projects = () => {
    const isLoggedIn = true;
    const allStyles = {
        loremP: styles.bold + ' ' + styles.underline
    }

    if (isLoggedIn) {
        allStyles.loremP += ' ' + styles.test;
    }

    return (
        <section className={styles.section}>
            <h2>Projects</h2>
            {/* <p className={`${styles.bold} ${styles.underline}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit laborum dolor maiores mollitia est expedita magnam sit quis. Totam dignissimos nulla impedit ipsam dolore officia vitae similique atque recusandae sint?</p> */}
            {/* <p className={[styles.bold, styles.underline].join(' ')}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit laborum dolor maiores mollitia est expedita magnam sit quis. Totam dignissimos nulla impedit ipsam dolore officia vitae similique atque recusandae sint?</p> */}
            {/* <p className={styles.bold + ' ' + styles.underline}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit laborum dolor maiores mollitia est expedita magnam sit quis. Totam dignissimos nulla impedit ipsam dolore officia vitae similique atque recusandae sint?</p> */}
            <p className={allStyles.loremP}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit laborum dolor maiores mollitia est expedita magnam sit quis. Totam dignissimos nulla impedit ipsam dolore officia vitae similique atque recusandae sint?</p>
            <p className={styles.test}>test paragraph <span>span content</span><Checkbox /></p>
        </section>
    )
}
