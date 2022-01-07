import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllItems } from "../../redux/actions";
import Product from "../Products/Product";
import CarouselLists from "./CarouselList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Loading from "../Loading";

function Home(props: any) {
  useEffect(() => {
    props.getAllItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="home">
      <CarouselLists />
      <div className="home_item_container">
        <div className="home__row">
          {props.items.length === 0 ? (
            <Loading />
          ) : (
            props.items.map(
              (item: {
                id: number;
                title: string;
                price: number;
                rating: number;
                img: string;
              }) => {
                return <Product key={item.id} item={item} />;
              }
            )
          )}
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state: {
  items: {
    id: number;
    title: string;
    price: number;
    rating: number;
    img: string;
  }[];
}) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ getAllItems }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
