import Typography from '../../../Typography';
import SizedImageContainer from '../../../SizedImageContainer/SizedImageContainer';
import ImageContainer from '../../../../containers/ImageContainer/ImageContainer';
import MoreLooks from '../../../UI/MoreLooks';
import SizedBox from '../../../UI/SizedBox';

import classes from './LatestStoriesSinglePost.module.scss';

const latestStoriesSinglePost = ({
  date,
  tags,
  heading,
  bodyText,
  author,
  image,
  imgAltText,
  slug,
}) => (
  <div>
    <div className={classes.SinglePostDateTag}>
      <span>{date}</span>
      <span>{tags.join(' ')}</span>
    </div>
    <div className={classes.PostHeading}>
      <Typography variant="h4">{heading}</Typography>
    </div>
    <Typography>
      {bodyText}
      <span className={classes.AuthorSpan}>By {author}</span>
    </Typography>
    <SizedBox height="1.5rem" width="100%" />
    <SizedImageContainer includeborder>
      <ImageContainer src={image} alt={imgAltText} />
      <div className={classes.AlignMoreLooks}>
        <MoreLooks link={slug} />
      </div>
    </SizedImageContainer>
  </div>
);

export default latestStoriesSinglePost;
