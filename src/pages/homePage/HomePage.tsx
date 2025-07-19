import AuthorFeed from '../../components/authorFeed/AuthorFeed'
import AuthorFeedMobile from '../../components/authorFeedMobile/AuthorFeedMobile'
import RecommendedFeed from '../../components/recommendedFeed/RecommendedFeed'
import dollieBlairAuthor from '../../shared/dollieBlairAuthor'
import foodAndDrinkAuthor from '../../shared/foodAndDrinkAuthor'
import recommendedFeed from '../../shared/recommendedFeed'

import './homePage.scss'

const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <div className="hideOnMobile">
        <AuthorFeed
          author={dollieBlairAuthor}
          slideWidth={250}
          slideHeight={200}
          hasSubscription={true}
        />
      </div>

      <div className="hideOnMobile">
        <RecommendedFeed
          title={'Recommended'}
          feed={recommendedFeed}
          slideWidth={540}
          slideHeight={300}
        />
      </div>

      <div className="hideOnMobile">
        <AuthorFeed author={foodAndDrinkAuthor} slideWidth={250} slideHeight={200} />
      </div>

      <div className="hideOnDesktop">
        <AuthorFeedMobile author={dollieBlairAuthor} />
      </div>
    </div>
  )
}

export default HomePage
