import React from "react";
import styles from './ProgressBar.module.css';
import PropTypes from "prop-types";
import styled, {keyframes} from 'styled-components';

const ProgressBar = ({width, onView}) => {
    const progressAnimation = keyframes`
      from {
        width: 0;
      }
      to {
        width: ${width}%;
      }
    `;

    const ProgressBarAnimation = styled.div`
      animation: ${progressAnimation} 2s ease-out 1;
      height: 100%;
      border-radius: 6.25rem;
      background: linear-gradient(90deg, var(--progressbar-inner-gradient-primary) 0%, var(--progressbar-inner-gradient-secondary) 100%);
      width: ${width}%;
    `;

    return (
        <div className={styles.skillProgressWrapper}>
            {onView ? <ProgressBarAnimation></ProgressBarAnimation> : ''}
        </div>
    );
}

export default ProgressBar;

ProgressBar.prototype = {
    width: PropTypes.number.isRequired,
    onView: PropTypes.bool.isRequired
}