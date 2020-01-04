import { body } from 'express-validator';

const thumbnailUriValidation = () => [
  body('publicImageUrl', 'publicImageUrl is required')
    .trim()
    .exists()
    .isURL()
    .not()
    .isEmpty(),
];

export default thumbnailUriValidation;
