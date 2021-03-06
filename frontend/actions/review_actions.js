import * as ReviewApiUtil from '../util/review_api_util'

export const RECEIVE_REVIEW = `RECEIVE_REVIEW`
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const REMOVE_REVIEW = `REMOVE_REVIEW`

export const RECEIVE_REVIEW_ERRORS = `RECEIVE_REVIEW_ERRORS`
export const CLEAR_REVIEW_ERRORS = `CLEAR_REVIEW_ERRORS`

const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review,
  }
}

const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  }
}

const removeReview = (review) => {
  return {
    type: REMOVE_REVIEW,
    reviewId: review.id,
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors,
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_REVIEW_ERRORS,
  }
}

export const createReview = (review) => (dispatch) => {
  return ReviewApiUtil.createReview(review).then(
    (createdReview) => dispatch(receiveReview(createdReview)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  )
}

export const updateReview = (review) => (dispatch) => {
  return ReviewApiUtil.updateReview(review).then(
    (updateReview) => dispatch(receiveReview(updateReview)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  )
}

export const deleteReview = (reviewId) => (dispatch) => {
  return ReviewApiUtil.deleteReview(reviewId).then(() =>
    dispatch(removeReview(reviewId))
  )
}

export const fetchReview = (businessId, reviewId) => (dispatch) => {
  return ReviewApiUtil.fetchReview(businessId, reviewId).then(
    (review) => dispatch(receiveReview(review)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  )
}

export const fetchReviews = (businessId) => (dispatch) => {
  return ReviewApiUtil.fetchReviews(businessId).then(
    (reviews) => dispatch(receiveReviews(reviews)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  )
}
