import { Link } from 'react-router-dom';

import icon from '../../images/icon-twitter-squared.gif';
import twitterLogo from '../../images/twitter.png'

import css from './TwitterHomeComponent.module.css';

export const TwitterHomeComponent = () => {
    return (
      <div>
        <div className={css.container}>
          <img src={icon} alt="Twitter icon" className={css.icon} />
          <Link
            to={
              'https://play.google.com/store/apps/details?id=com.twitter.android&hl=en&pli=1'
            }
          >
            <p className={css.download}>
              Install twitter in order to discover more accounts and tweets
            </p>
          </Link>
        </div>
        <div className={css.logoContainer}>
          <Link to={'https://twitter.com/i/flow/signup'}>
            <img
              src={twitterLogo}
              alt="twitter logo"
              width={600}
              height={140}
              className={css.twitterLogo}
            />
          </Link>
        </div>
      </div>
    );
}

