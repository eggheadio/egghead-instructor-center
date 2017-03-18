export const hasUnlockedPublished = (publishedLessons) => (
  publishedLessons > 0
)

export const hasUnlockedSelfReview = (publishedLessons) => (
  publishedLessons >= 12
)
