import React from 'react';


const Categories = React.memo(function Categories({items, onClickItem}) {



	const state = React.useState(null);
	const activeItem = state[0];
	const setActiveItem = state[1];

	const onSelectItem = (index) =>{
		setActiveItem(index);
		onClickItem(index);
	}


  return (
        <div className="categories">
			<ul>
			<li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
				{items &&
					items.map((name, index) => 
					<li 
						className={activeItem === index ? 'active' : ''} 
						onClick={() => onSelectItem(index)} 
						key={`${name}_${index}`}
					>
						{name}
					</li>)
				}
			</ul>
		</div>
  )
});

export default Categories;