import image from '../../images/picture.png';
import image2x from '../../images/picture@2x.png';
import { Image } from './TweetBackgroundImg.styled';

export const TweetImage = () => {
  return (
    <picture>
      <source srcSet={`${image}, ${image2x} 2x`} type="image/png" />
<Image src={image} alt="Coctails" />
    </picture>
  );
};
