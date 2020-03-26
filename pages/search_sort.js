import Header from '../components/header'
import Footer from '../components/footer'
import SearchHeader from '../components/searchHeader'
import SortHeader from '../components/sortHeader'
import SearchDisplay from '../components/searchDisplay'
import SortDisplay from '../components/sortDisplay'
import GenerateButton from '../components/generateButton'
import Slider from '../components/slider'

export default function Search_Sort(){
    return (
        <div>
            <Header></Header>

            <h3>Sorting and Searching Algorithm Project</h3>
            <p>Here is where to develop search and sort algorithm project</p>
            <p>Best of luck future me!</p>
            <GenerateButton></GenerateButton>
            <Slider></Slider>
            <SearchHeader></SearchHeader>
            <SearchDisplay></SearchDisplay>
            <SortHeader></SortHeader>
            <SortDisplay></SortDisplay>
            <Footer></Footer>
        </div>
    );
}