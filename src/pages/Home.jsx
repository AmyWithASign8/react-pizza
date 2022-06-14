import React from 'react'
import { Categories, SortPopup, PizzaBlock } from "../components";
import {useSelector, useDispatch} from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import {setPizzas, fetchPizzas} from '../redux/actions/pizzas';
import pizzas from '../redux/reducers/pizzas';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';
import filters from '../redux/reducers/filters';

function Home( ) {

	const dispatch = useDispatch();

	React.useEffect(() => {
		console.log(dispatch(fetchPizzas()));
	}, []);

	const categoryNames = [
		"Мясные",
		"Вегетарианская",
		"Гриль",
		"Острые",
		"Закрытые",
	];

	const sortItems = [
		{name: 'популярности', type: 'popular'},
		{name: 'цене', type: 'price'},
		{name: 'алфавит', type: 'alphabet'},
	];


	const items = useSelector(({pizzas}) => pizzas.items);
	const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
	const {category, sortBy} = useSelector(({filters}) => filters);

	const onSelectCategories = React.useCallback((index) => {
		dispatch(setCategory(index));
	}, []);

  return (
    <div className="container">
						<div className="content__top">
							<Categories
								activeCategory={category}
								onClickCategory={onSelectCategories}
								items={categoryNames}
							/>
							<SortPopup
								onChangeSortType={sortBy}
								items={sortItems}
							/>
						</div>
						<h2 className="content__title">Все пиццы</h2>
						<div className="content__items">
						{isLoaded 
						?	items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj}/>)
						:	Array(10).fill(0).map((_, index) => <LoadingBlock key={index}/>)
						}
							
							
						</div>
					</div>
  )
}

export default Home