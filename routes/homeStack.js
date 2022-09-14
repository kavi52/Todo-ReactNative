import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Todo from '../src/components/Todo'
import ReviewDetails from '../src/components/ReviewDetails'

const screen = {
    // Default screen is.. what is present at the top
    ReviewDetails: {
        screen: ReviewDetails
    },
    Home: {
        screen: Todo
    },
}

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack)