interface IGetUserQuery {
  id?: string;
  uuid?: string;
  email?: string;
  username?: string | null;
}

interface IEditProfilePictureForm {
  picture?: any;
}

interface IEditProfileBannerForm {
  banner?: any;
}
