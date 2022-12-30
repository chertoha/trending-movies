// import womanDefaultImage from 'images/defautl-woman.jpg';
import womanDefaultImage from "/public/images/defautl-woman.jpg";
import manDefaultImage from "/public/images/default-man.png";
import noGenderDefaultImage from "/public/images/default-no-gender.png";
import { StaticImageData } from "next/image";

const defautlAvatar = (genderId: number): StaticImageData => {
  switch (genderId) {
    case 1:
      return womanDefaultImage;
    case 2:
      return manDefaultImage;
    default:
      return noGenderDefaultImage;
  }
};

export default defautlAvatar;
