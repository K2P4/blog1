import React from 'react'
import { NavigateRouteComponent, NavigationHomeSectionComponent } from '../../components'

const CartPage = () => {

  return (
		<div>
			<NavigationHomeSectionComponent />

			<NavigateRouteComponent Route1={"CART"} path={"/shop-cart"} />
		</div>
	);
}

export default CartPage
