import AuthorFeed from '../../components/authorFeed/AuthorFeed'
import RecommendedFeed from '../../components/recommendedFeed/recommendedFeed'
import dollieBlairAuthor from '../../shared/dollieBlairAuthor'
import foodAndDrinkAuthor from '../../shared/foodAndDrinkAuthor'
import recommendedFeed from '../../shared/recommendedFeed'

import './homePage.scss'

const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <AuthorFeed
        author={dollieBlairAuthor}
        slideWidth={250}
        slideHeight={200}
        hasSubscription={true}
      />
      <div className="hideOnMobile">
        <RecommendedFeed feed={recommendedFeed} slideWidth={540} slideHeight={300} />
      </div>
      <div className="hideOnMobile">
        <AuthorFeed author={foodAndDrinkAuthor} slideWidth={250} slideHeight={200} />
      </div>
    </div>
  )
}

export default HomePage
