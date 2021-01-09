import Post from '../../Post/Post';
import SizedImageContainer from '../../SizedImageContainer/SizedImageContainer';
import ImageContainer from '../../ImageContainer/ImageContainer';
import SizedBox from '../../UI/SizedBox';
import Typography from '../../Typography';

const tvEpisodePost = ({ postHeading, imageSrc, imageAltText, postFooterText }) => (
  <Post heading={postHeading}>
    <SizedImageContainer>
      <ImageContainer src={imageSrc} alt={imageAltText} />
    </SizedImageContainer>
    <SizedBox height="4rem" width="100%" />
    <Typography italic>{postFooterText}</Typography>
  </Post>
);

export default tvEpisodePost;
